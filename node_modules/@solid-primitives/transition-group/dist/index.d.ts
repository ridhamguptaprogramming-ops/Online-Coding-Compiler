import { type Accessor } from "solid-js";
export type TransitionMode = "out-in" | "in-out" | "parallel";
export type OnTransition<T> = (el: T, done: () => void) => void;
export type SwitchTransitionOptions<T> = {
    /**
     * a function to be called when a new element is entering. {@link OnTransition}
     *
     * It receives the element and a callback to be called when the transition is done.
     */
    onEnter?: OnTransition<T>;
    /**
     * a function to be called when an exiting element is leaving. {@link OnTransition}
     *
     * It receives the element and a callback to be called when the transition is done.
     * The element is kept in the DOM until the done() callback is called.
     */
    onExit?: OnTransition<T>;
    /**
     * transition mode. {@link TransitionMode}
     *
     * Defaults to `"parallel"`. Other options are `"out-in"` and `"in-out"`.
     */
    mode?: TransitionMode;
    /** whether to run the transition on the initial elements. Defaults to `false` */
    appear?: boolean;
};
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
export declare function createSwitchTransition<T>(source: Accessor<T>, options: SwitchTransitionOptions<NonNullable<T>>): Accessor<NonNullable<T>[]>;
export type OnListChange<T> = (payload: {
    /** full list of elements to be rendered */
    list: T[];
    /** list of elements that were added since the last change */
    added: T[];
    /** list of elements that were removed since the last change */
    removed: T[];
    /** list of elements that were already added before, and are not currently exiting */
    unchanged: T[];
    /** Callback for finishing the transition of exiting elements - removes them from rendered array */
    finishRemoved: (els: T[]) => void;
}) => void;
export type ExitMethod = "remove" | "move-to-end" | "keep-index";
export type ListTransitionOptions<T> = {
    /**
     * A function to be called when the list changes. {@link OnListChange}
     *
     * It receives the list of current, added, removed, and unchanged elements.
     * It also receives a callback to be called when the removed elements are finished animating (they can be removed from the DOM).
     */
    onChange: OnListChange<T>;
    /** whether to run the transition on the initial elements. Defaults to `false` */
    appear?: boolean;
    /**
     * This controls how the elements exit. {@link ExitMethod}
     * - `"remove"` removes the element immediately.
     * - `"move-to-end"` (default) will move elements which have exited to the end of the array.
     * - `"keep-index"` will splice them in at their previous index.
     */
    exitMethod?: ExitMethod;
};
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
export declare function createListTransition<T extends object>(source: Accessor<readonly T[]>, options: ListTransitionOptions<T>): Accessor<T[]>;
