import { batch, createSignal, untrack, $TRACK, createComputed, createMemo, useTransition, } from "solid-js";
import { isServer } from "solid-js/web";
const noop = () => {
    /* noop */
};
const noopTransition = (el, done) => done();
/**
 * Create an element transition interface for switching between single elements.
 * It can be used to implement own transition effect, or a custom `<Transition>`-like component.
 *
 * It will observe {@link source} and return a signal with array of elements to be rendered (current one and exiting ones).
 *
 * @param source a signal with the current element. Any nullish value will mean there is no element.
 * Any object can used as the source, but most likely you will want to use a `HTMLElement` or `SVGElement`.
 * @param options transition options {@link SwitchTransitionOptions}
 * @returns a signal with an array of the current element and exiting previous elements.
 *
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/transition-group#createSwitchTransition
 *
 * @example
 * const [el, setEl] = createSignal<HTMLDivElement>();
 *
 * const rendered = createSwitchTransition(el, {
 *   onEnter(el, done) {
 *     // the enter callback is called before the element is inserted into the DOM
 *     // so run the animation in the next animation frame / microtask
 *     queueMicrotask(() => { ... })
 *   },
 *   onExit(el, done) {
 *     // the exitting element is kept in the DOM until the done() callback is called
 *   },
 * })
 *
 * // change the source to trigger the transition
 * setEl(refToHtmlElement);
 */
export function createSwitchTransition(source, options) {
    const initSource = untrack(source);
    const initReturned = initSource ? [initSource] : [];
    if (isServer) {
        return () => initReturned;
    }
    const { onEnter = noopTransition, onExit = noopTransition } = options;
    const [returned, setReturned] = createSignal(options.appear ? [] : initReturned);
    const [isTransitionPending] = useTransition();
    let next;
    let isExiting = false;
    function exitTransition(el, after) {
        if (!el)
            return after && after();
        isExiting = true;
        onExit(el, () => {
            batch(() => {
                isExiting = false;
                setReturned(p => p.filter(e => e !== el));
                after && after();
            });
        });
    }
    function enterTransition(after) {
        const el = next;
        if (!el)
            return after && after();
        next = undefined;
        setReturned(p => [el, ...p]);
        onEnter(el, after ?? noop);
    }
    const triggerTransitions = options.mode === "out-in"
        ? // exit -> enter
            // exit -> enter
            prev => isExiting || exitTransition(prev, enterTransition)
        : options.mode === "in-out"
            ? // enter -> exit
                // enter -> exit
                prev => enterTransition(() => exitTransition(prev))
            : // exit & enter
                // exit & enter
                prev => {
                    exitTransition(prev);
                    enterTransition();
                };
    createComputed((prev) => {
        const el = source();
        if (untrack(isTransitionPending)) {
            // wait for pending transition to end before animating
            isTransitionPending();
            return prev;
        }
        if (el !== prev) {
            next = el;
            batch(() => untrack(() => triggerTransitions(prev)));
        }
        return el;
    }, options.appear ? undefined : initSource);
    return returned;
}
/**
 * Create an element list transition interface for changes to the list of elements.
 * It can be used to implement own transition effect, or a custom `<TransitionGroup>`-like component.
 *
 * It will observe {@link source} and return a signal with array of elements to be rendered (current ones and exiting ones).
 *
 * @param source a signal with the current list of elements.
 * Any object can used as the element, but most likely you will want to use a `HTMLElement` or `SVGElement`.
 * @param options transition options {@link ListTransitionOptions}
 *
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/transition-group#createListTransition
 *
 * @example
 * const [els, setEls] = createSignal<HTMLElement[]>([]);
 *
 * const rendered = createListTransition(els, {
 *   onChange({ list, added, removed, unchanged, finishRemoved }) {
 *     // the callback is called before the added elements are inserted into the DOM
 *     // so run the animation in the next animation frame / microtask
 *     queueMicrotask(() => { ... })
 *
 *     // the removed elements are kept in the DOM until the finishRemoved() callback is called
 *     finishRemoved(removed);
 *   }
 * })
 *
 * // change the source to trigger the transition
 * setEls([...refsToHTMLElements]);
 */
export function createListTransition(source, options) {
    const initSource = untrack(source);
    if (isServer) {
        const copy = initSource.slice();
        return () => copy;
    }
    const { onChange } = options;
    // if appear is enabled, the initial transition won't have any previous elements.
    // otherwise the elements will match and transition skipped, or transitioned if the source is different from the initial value
    let prevSet = new Set(options.appear ? undefined : initSource);
    const exiting = new WeakSet();
    const [toRemove, setToRemove] = createSignal([], { equals: false });
    const [isTransitionPending] = useTransition();
    const finishRemoved = options.exitMethod === "remove"
        ? noop
        : els => {
            setToRemove(p => (p.push.apply(p, els), p));
            for (const el of els)
                exiting.delete(el);
        };
    const handleRemoved = options.exitMethod === "remove"
        ? noop
        : options.exitMethod === "keep-index"
            ? (els, el, i) => els.splice(i, 0, el)
            : (els, el) => els.push(el);
    return createMemo(prev => {
        const elsToRemove = toRemove();
        const sourceList = source();
        sourceList[$TRACK]; // top level store tracking
        if (untrack(isTransitionPending)) {
            // wait for pending transition to end before animating
            isTransitionPending();
            return prev;
        }
        if (elsToRemove.length) {
            const next = prev.filter(e => !elsToRemove.includes(e));
            elsToRemove.length = 0;
            onChange({ list: next, added: [], removed: [], unchanged: next, finishRemoved });
            return next;
        }
        return untrack(() => {
            const nextSet = new Set(sourceList);
            const next = sourceList.slice();
            const added = [];
            const removed = [];
            const unchanged = [];
            for (const el of sourceList) {
                (prevSet.has(el) ? unchanged : added).push(el);
            }
            let nothingChanged = !added.length;
            for (let i = 0; i < prev.length; i++) {
                const el = prev[i];
                if (!nextSet.has(el)) {
                    if (!exiting.has(el)) {
                        removed.push(el);
                        exiting.add(el);
                    }
                    handleRemoved(next, el, i);
                }
                if (nothingChanged && el !== next[i])
                    nothingChanged = false;
            }
            // skip if nothing changed
            if (!removed.length && nothingChanged)
                return prev;
            onChange({ list: next, added, removed, unchanged, finishRemoved });
            prevSet = nextSet;
            return next;
        });
    }, options.appear ? [] : initSource.slice());
}
