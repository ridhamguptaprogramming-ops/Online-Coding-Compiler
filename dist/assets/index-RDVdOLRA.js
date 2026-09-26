const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MonacoWrapper-bQBDHewY.js","assets/MonacoWrapper-Ck3IbhyB.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const C={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Ot(this.context.count)},getNextContextId(){return Ot(this.context.count++)}};function Ot(e){const t=String(e),n=t.length-1;return C.context.id+(n?String.fromCharCode(96+n):"")+t}function fe(e){C.context=e}const Zt=!1,Sn=(e,t)=>e===t,tt=Symbol("solid-proxy"),Qt=typeof Proxy=="function",Cn=Symbol("solid-track"),nt={equals:Sn};let en=an;const ae=1,Ke=2,tn={owned:null,cleanups:null,context:null,owner:null},xt={};var A=null;let m=null,_n=null,O=null,q=null,K=null,ct=0;function Me(e,t){const n=O,i=A,r=e.length===0,a=t===void 0?i:t,o=r?tn:{owned:null,cleanups:null,context:a?a.context:null,owner:a},s=r?e:()=>e(()=>J(()=>xe(o)));A=o,O=null;try{return Z(s,!0)}finally{O=n,A=i}}function P(e,t){t=t?Object.assign({},nt,t):nt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(m&&m.running&&m.sources.has(n)?r=r(n.tValue):r=r(n.value)),rn(n,r));return[nn.bind(n),i]}function Rt(e,t,n){const i=ft(e,t,!0,ae);Ne(i)}function B(e,t,n){const i=ft(e,t,!1,ae);Ne(i)}function Oe(e,t,n){en=Pn;const i=ft(e,t,!1,ae),r=Te&&Re(Te);r&&(i.suspense=r),i.user=!0,K?K.push(i):Ne(i)}function N(e,t,n){n=n?Object.assign({},nt,n):nt;const i=ft(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Ne(i),nn.bind(i)}function zn(e){return e&&typeof e=="object"&&"then"in e}function An(e,t,n){let i,r,a;i=!0,r=e,a={};let o=null,s=xt,l=null,d=!1,u=!1,c="initialValue"in a,p=typeof i=="function"&&N(i);const g=new Set,[v,x]=(a.storage||P)(a.initialValue),[b,y]=P(void 0),[w,L]=P(void 0,{equals:!1}),[F,R]=P(c?"ready":"unresolved");C.context&&(l=C.getNextContextId(),a.ssrLoadFrom==="initial"?s=a.initialValue:C.load&&C.has(l)&&(s=C.load(l)));function I($,E,V,S){return o===$&&(o=null,S!==void 0&&(c=!0),($===s||E===s)&&a.onHydrated&&queueMicrotask(()=>a.onHydrated(S,{value:E})),s=xt,m&&$&&d?(m.promises.delete($),d=!1,Z(()=>{m.running=!0,Q(E,V)},!1)):Q(E,V)),E}function Q($,E){Z(()=>{E===void 0&&x(()=>$),R(E!==void 0?"errored":c?"ready":"unresolved"),y(E);for(const V of g.keys())V.decrement();g.clear()},!1)}function z(){const $=Te&&Re(Te),E=v(),V=b();if(V!==void 0&&!o)throw V;return O&&!O.user&&$&&Rt(()=>{w(),o&&($.resolved&&m&&d?m.promises.add(o):g.has($)||($.increment(),g.add($)))}),E}function _($=!0){if($!==!1&&u)return;u=!1;const E=p?p():i;if(d=m&&m.running,E==null||E===!1){I(o,J(v));return}m&&o&&m.promises.delete(o);let V;const S=s!==xt?s:J(()=>{try{return r(E,{value:v(),refetching:$})}catch(T){V=T}});if(V!==void 0){I(o,void 0,Ze(V),E);return}else if(!zn(S))return I(o,S,void 0,E),S;return o=S,"v"in S?(S.s===1?I(o,S.v,void 0,E):I(o,void 0,Ze(S.v),E),S):(u=!0,queueMicrotask(()=>u=!1),Z(()=>{R(c?"refreshing":"pending"),L()},!1),S.then(T=>I(S,T,void 0,E),T=>I(S,void 0,Ze(T),E)))}Object.defineProperties(z,{state:{get:()=>F()},error:{get:()=>b()},loading:{get(){const $=F();return $==="pending"||$==="refreshing"}},latest:{get(){if(!c)return z();const $=b();if($&&!o)throw $;return v()}}});let k=A;return p?Rt(()=>(k=A,_(!1))):_(!1),[z,{refetch:$=>Tt(k,()=>_($)),mutate:x}]}function En(e){return Z(e,!1)}function J(e){if(O===null)return e();const t=O;O=null;try{return e()}finally{O=t}}function At(e,t,n){const i=Array.isArray(e);let r,a=n&&n.defer;return o=>{let s;if(i){s=Array(e.length);for(let d=0;d<e.length;d++)s[d]=e[d]()}else s=e();if(a)return a=!1,o;const l=J(()=>t(s,r,o));return r=s,l}}function dt(e){Oe(()=>J(e))}function we(e){return A===null||(A.cleanups===null?A.cleanups=[e]:A.cleanups.push(e)),e}function Et(){return A}function Tt(e,t){const n=A,i=O;A=e,O=null;try{return Z(t,!0)}catch(r){Lt(r)}finally{A=n,O=i}}function Tn(e){if(m&&m.running)return e(),m.done;const t=O,n=A;return Promise.resolve().then(()=>{O=t,A=n;let i;return Te&&(i=m||(m={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),i.done||(i.done=new Promise(r=>i.resolve=r)),i.running=!0),Z(e,!1),O=A=null,i?i.done:void 0})}const[ga,Nt]=P(!1);function jn(e){K.push.apply(K,e),e.length=0}function ut(e,t){const n=Symbol("context");return{id:n,Provider:Mn(n),defaultValue:e}}function Re(e){let t;return A&&A.context&&(t=A.context[e.id])!==void 0?t:e.defaultValue}function jt(e){const t=N(e),n=N(()=>St(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}let Te;function Ln(){return Te||(Te=ut())}function nn(){const e=m&&m.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===ae)Ne(this);else{const t=q;q=null,Z(()=>it(this),!1),q=t}if(O){const t=this.observers?this.observers.length:0;O.sources?(O.sources.push(this),O.sourceSlots.push(t)):(O.sources=[this],O.sourceSlots=[t]),this.observers?(this.observers.push(O),this.observerSlots.push(O.sources.length-1)):(this.observers=[O],this.observerSlots=[O.sources.length-1])}return e&&m.sources.has(this)?this.tValue:this.value}function rn(e,t,n){let i=m&&m.running&&m.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(i,t)){if(m){const r=m.running;(r||!n&&m.sources.has(e))&&(m.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&Z(()=>{for(let r=0;r<e.observers.length;r+=1){const a=e.observers[r],o=m&&m.running;o&&m.disposed.has(a)||((o?!a.tState:!a.state)&&(a.pure?q.push(a):K.push(a),a.observers&&on(a)),o?a.tState=ae:a.state=ae)}if(q.length>1e6)throw q=[],new Error},!1)}return t}function Ne(e){if(!e.fn)return;xe(e);const t=ct;It(e,m&&m.running&&m.sources.has(e)?e.tValue:e.value,t),m&&!m.running&&m.sources.has(e)&&queueMicrotask(()=>{Z(()=>{m&&(m.running=!0),O=A=e,It(e,e.tValue,t),O=A=null},!1)})}function It(e,t,n){let i;const r=A,a=O;O=A=e;try{i=e.fn(t)}catch(o){return e.pure&&(m&&m.running?(e.tState=ae,e.tOwned&&e.tOwned.forEach(xe),e.tOwned=void 0):(e.state=ae,e.owned&&e.owned.forEach(xe),e.owned=null)),e.updatedAt=n+1,Lt(o)}finally{O=a,A=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?rn(e,i,!0):m&&m.running&&e.pure?(m.sources.add(e),e.tValue=i):e.value=i,e.updatedAt=n)}function ft(e,t,n,i=ae,r){const a={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:A,context:A?A.context:null,pure:n};return m&&m.running&&(a.state=0,a.tState=i),A===null||A!==tn&&(m&&m.running&&A.pure?A.tOwned?A.tOwned.push(a):A.tOwned=[a]:A.owned?A.owned.push(a):A.owned=[a]),a}function rt(e){const t=m&&m.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===Ke)return it(e);if(e.suspense&&J(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ct);){if(t&&m.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let i=n.length-1;i>=0;i--){if(e=n[i],t){let r=e,a=n[i+1];for(;(r=r.owner)&&r!==a;)if(m.disposed.has(r))return}if((t?e.tState:e.state)===ae)Ne(e);else if((t?e.tState:e.state)===Ke){const r=q;q=null,Z(()=>it(e,n[0]),!1),q=r}}}function Z(e,t){if(q)return e();let n=!1;t||(q=[]),K?n=!0:K=[],ct++;try{const i=e();return Fn(n),i}catch(i){n||(K=null),q=null,Lt(i)}}function Fn(e){if(q&&(an(q),q=null),e)return;let t;if(m){if(!m.promises.size&&!m.queue.size){const i=m.sources,r=m.disposed;K.push.apply(K,m.effects),t=m.resolve;for(const a of K)"tState"in a&&(a.state=a.tState),delete a.tState;m=null,Z(()=>{for(const a of r)xe(a);for(const a of i){if(a.value=a.tValue,a.owned)for(let o=0,s=a.owned.length;o<s;o++)xe(a.owned[o]);a.tOwned&&(a.owned=a.tOwned),delete a.tValue,delete a.tOwned,a.tState=0}Nt(!1)},!1)}else if(m.running){m.running=!1,m.effects.push.apply(m.effects,K),K=null,Nt(!0);return}}const n=K;K=null,n.length&&Z(()=>en(n),!1),t&&t()}function an(e){for(let t=0;t<e.length;t++)rt(e[t])}function Pn(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:rt(i)}if(C.context){if(C.count){C.effects||(C.effects=[]),C.effects.push(...e.slice(0,n));return}fe()}for(C.effects&&(C.done||!C.count)&&(e=[...C.effects,...e],n+=C.effects.length,delete C.effects),t=0;t<n;t++)rt(e[t])}function it(e,t){const n=m&&m.running;n?e.tState=0:e.state=0;for(let i=0;i<e.sources.length;i+=1){const r=e.sources[i];if(r.sources){const a=n?r.tState:r.state;a===ae?r!==t&&(!r.updatedAt||r.updatedAt<ct)&&rt(r):a===Ke&&it(r,t)}}}function on(e){const t=m&&m.running;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(t?!i.tState:!i.state)&&(t?i.tState=Ke:i.state=Ke,i.pure?q.push(i):K.push(i),i.observers&&on(i))}}function xe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const a=r.pop(),o=n.observerSlots.pop();i<r.length&&(a.sourceSlots[o]=i,r[i]=a,n.observerSlots[i]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)xe(e.tOwned[t]);delete e.tOwned}if(m&&m.running&&e.pure)sn(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)xe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}m&&m.running?e.tState=0:e.state=0}function sn(e,t){if(t||(e.tState=0,m.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)sn(e.owned[n])}function Ze(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Lt(e,t=A){throw Ze(e)}function St(e){if(typeof e=="function"&&!e.length)return St(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=St(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Mn(e,t){return function(i){let r;return B(()=>r=J(()=>(A.context={...A.context,[e]:i.value},jt(()=>i.children))),void 0),r}}const On=Symbol("fallback");function Dt(e){for(let t=0;t<e.length;t++)e[t]()}function Rn(e,t,n={}){let i=[],r=[],a=[],o=0,s=t.length>1?[]:null;return we(()=>Dt(a)),()=>{let l=e()||[],d=l.length,u,c;return l[Cn],J(()=>{let g,v,x,b,y,w,L,F,R;if(d===0)o!==0&&(Dt(a),a=[],i=[],r=[],o=0,s&&(s=[])),n.fallback&&(i=[On],r[0]=Me(I=>(a[0]=I,n.fallback())),o=1);else if(o===0){for(r=new Array(d),c=0;c<d;c++)i[c]=l[c],r[c]=Me(p);o=d}else{for(x=new Array(d),b=new Array(d),s&&(y=new Array(d)),w=0,L=Math.min(o,d);w<L&&i[w]===l[w];w++);for(L=o-1,F=d-1;L>=w&&F>=w&&i[L]===l[F];L--,F--)x[F]=r[L],b[F]=a[L],s&&(y[F]=s[L]);for(g=new Map,v=new Array(F+1),c=F;c>=w;c--)R=l[c],u=g.get(R),v[c]=u===void 0?-1:u,g.set(R,c);for(u=w;u<=L;u++)R=i[u],c=g.get(R),c!==void 0&&c!==-1?(x[c]=r[u],b[c]=a[u],s&&(y[c]=s[u]),c=v[c],g.set(R,c)):a[u]();for(c=w;c<d;c++)c in x?(r[c]=x[c],a[c]=b[c],s&&(s[c]=y[c],s[c](c))):r[c]=Me(p);r=r.slice(0,o=d),i=l.slice(0)}return r});function p(g){if(a[c]=g,s){const[v,x]=P(c);return s[c]=x,t(l[c],v)}return t(l[c])}}}function h(e,t){return J(()=>e(t||{}))}function Ye(){return!0}const Ct={get(e,t,n){return t===tt?n:e.get(t)},has(e,t){return t===tt?!0:e.has(t)},set:Ye,deleteProperty:Ye,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ye,deleteProperty:Ye}},ownKeys(e){return e.keys()}};function vt(e){return(e=typeof e=="function"?e():e)?e:{}}function Nn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function qe(...e){let t=!1;for(let o=0;o<e.length;o++){const s=e[o];t=t||!!s&&tt in s,e[o]=typeof s=="function"?(t=!0,N(s)):s}if(Qt&&t)return new Proxy({get(o){for(let s=e.length-1;s>=0;s--){const l=vt(e[s])[o];if(l!==void 0)return l}},has(o){for(let s=e.length-1;s>=0;s--)if(o in vt(e[s]))return!0;return!1},keys(){const o=[];for(let s=0;s<e.length;s++)o.push(...Object.keys(vt(e[s])));return[...new Set(o)]}},Ct);const n={},i=Object.create(null);for(let o=e.length-1;o>=0;o--){const s=e[o];if(!s)continue;const l=Object.getOwnPropertyNames(s);for(let d=l.length-1;d>=0;d--){const u=l[d];if(u==="__proto__"||u==="constructor")continue;const c=Object.getOwnPropertyDescriptor(s,u);if(!i[u])i[u]=c.get?{enumerable:!0,configurable:!0,get:Nn.bind(n[u]=[c.get.bind(s)])}:c.value!==void 0?c:void 0;else{const p=n[u];p&&(c.get?p.push(c.get.bind(s)):c.value!==void 0&&p.push(()=>c.value))}}}const r={},a=Object.keys(i);for(let o=a.length-1;o>=0;o--){const s=a[o],l=i[s];l&&l.get?Object.defineProperty(r,s,l):r[s]=l?l.value:void 0}return r}function ln(e,...t){const n=t.length;if(Qt&&tt in e){const r=n>1?t.flat():t[0],a=t.map(o=>new Proxy({get(s){return o.includes(s)?e[s]:void 0},has(s){return o.includes(s)&&s in e},keys(){return o.filter(s=>s in e)}},Ct));return a.push(new Proxy({get(o){return r.includes(o)?void 0:e[o]},has(o){return r.includes(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.includes(o))}},Ct)),a}const i=[];for(let r=0;r<=n;r++)i[r]={};for(const r of Object.getOwnPropertyNames(e)){let a=n;for(let l=0;l<t.length;l++)if(t[l].includes(r)){a=l;break}const o=Object.getOwnPropertyDescriptor(e,r);!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable?i[a][r]=o.value:Object.defineProperty(i[a],r,o)}return i}function In(e){let t,n;const i=r=>{const a=C.context;if(a){const[s,l]=P();C.count||(C.count=0),C.count++,(n||(n=e())).then(d=>{!C.done&&fe(a),C.count--,l(()=>d.default),fe()}),t=s}else if(!t){const[s]=An(()=>(n||(n=e())).then(l=>l.default));t=s}let o;return N(()=>(o=t())?J(()=>{if(!a||C.done)return o(r);const s=C.context;fe(a);const l=o(r);return fe(s),l}):"")};return i.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),i}const Dn=e=>`Stale read from <${e}>.`;function pe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(Rn(()=>e.each,e.children,t||void 0))}function te(e){const t=e.keyed,n=N(()=>e.when,void 0,void 0),i=t?n:N(n,void 0,{equals:(r,a)=>!r==!a});return N(()=>{const r=i();if(r){const a=e.children;return typeof a=="function"&&a.length>0?J(()=>a(t?r:()=>{if(!J(i))throw Dn("Show");return n()})):a}return e.fallback},void 0,void 0)}const Vn=ut();function Bn(e){let t=0,n,i,r,a,o;const[s,l]=P(!1),d=Ln(),u={increment:()=>{++t===1&&l(!0)},decrement:()=>{--t===0&&l(!1)},inFallback:s,effects:[],resolved:!1},c=Et();if(C.context&&C.load){const v=C.getContextId();let x=C.load(v);if(x&&(typeof x!="object"||x.s!==1?r=x:C.gather(v)),r&&r!=="$$f"){const[b,y]=P(void 0,{equals:!1});a=b,r.then(()=>{if(C.done)return y();C.gather(v),fe(i),y(),fe()},w=>{o=w,y()})}}const p=Re(Vn);p&&(n=p.register(u.inFallback));let g;return we(()=>g&&g()),h(d.Provider,{value:u,get children(){return N(()=>{if(o)throw o;if(i=C.context,a)return a(),a=void 0;i&&r==="$$f"&&fe();const v=N(()=>e.children);return N(x=>{const b=u.inFallback(),{showContent:y=!0,showFallback:w=!0}=n?n():{};if((!b||r&&r!=="$$f")&&y)return u.resolved=!0,g&&g(),g=i=r=void 0,jn(u.effects),v();if(w)return g?x:Me(L=>(g=L,i&&(fe({id:i.id+"F",count:0}),i=void 0),e.fallback),c)})})}})}const Un=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],Hn=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...Un]),Kn=new Set(["innerHTML","textContent","innerText","children"]),qn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Wn=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function Gn(e,t){const n=Wn[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Jn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Xn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Ft=e=>N(()=>e());function Yn(e,t,n){let i=n.length,r=t.length,a=i,o=0,s=0,l=t[r-1].nextSibling,d=null;for(;o<r||s<a;){if(t[o]===n[s]){o++,s++;continue}for(;t[r-1]===n[a-1];)r--,a--;if(r===o){const u=a<i?s?n[s-1].nextSibling:n[a-s]:l;for(;s<a;)e.insertBefore(n[s++],u)}else if(a===s)for(;o<r;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[a-1]&&n[s]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--a],u),t[r]=n[a]}else{if(!d){d=new Map;let c=s;for(;c<a;)d.set(n[c],c++)}const u=d.get(t[o]);if(u!=null)if(s<u&&u<a){let c=o,p=1,g;for(;++c<r&&c<a&&!((g=d.get(t[c]))==null||g!==u+p);)p++;if(p>u-s){const v=t[o];for(;s<u;)e.insertBefore(n[s++],v)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const Vt="_$DX_DELEGATE";function Zn(e,t,n,i={}){let r;return Me(a=>{r=a,t===document?e():f(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function j(e,t,n,i){let r;const a=()=>{const s=document.createElement("template");return s.innerHTML=e,s.content.firstChild},o=()=>(r||(r=a())).cloneNode(!0);return o.cloneNode=o,o}function ye(e,t=window.document){const n=t[Vt]||(t[Vt]=new Set);for(let i=0,r=e.length;i<r;i++){const a=e[i];n.has(a)||(n.add(a),t.addEventListener(a,sr))}}function at(e,t,n){Ie(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Qn(e,t,n,i){Ie(e)||(i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i))}function er(e,t,n){Ie(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function ve(e,t){Ie(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Ae(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=a=>r.call(e,n[1],a))}else e.addEventListener(t,n,typeof n!="function"&&n)}function tr(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let a,o;for(a=0,o=r.length;a<o;a++){const s=r[a];!s||s==="undefined"||t[s]||(Bt(e,s,!1),delete n[s])}for(a=0,o=i.length;a<o;a++){const s=i[a],l=!!t[s];!s||s==="undefined"||n[s]===l||!l||(Bt(e,s,!0),n[s]=l)}return n}function nr(e,t,n){if(!t)return n?at(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,a;for(a in n)t[a]==null&&i.removeProperty(a),delete n[a];for(a in t)r=t[a],r!==n[a]&&(i.setProperty(a,r),n[a]=r);return n}function rr(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function cn(e,t={},n,i){const r={};return i||B(()=>r.children=We(e,t.children,r.children)),B(()=>typeof t.ref=="function"&&ir(t.ref,e)),B(()=>ar(e,t,n,!0,r,!0)),r}function ir(e,t,n){return J(()=>e(t,n))}function f(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return We(e,t,i,n);B(r=>We(e,t(),r,n),i)}function ar(e,t,n,i,r={},a=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=Ut(e,o,null,r[o],n,a,t)}for(const o in t){if(o==="children")continue;const s=t[o];r[o]=Ut(e,o,s,r[o],n,a,t)}}function Ie(e){return!!C.context&&!C.done&&(!e||e.isConnected)}function or(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Bt(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,a=i.length;r<a;r++)e.classList.toggle(i[r],n)}function Ut(e,t,n,i,r,a,o){let s,l,d,u,c;if(t==="style")return nr(e,n,i);if(t==="classList")return tr(e,n,i);if(n===i)return i;if(t==="ref")a||n(e);else if(t.slice(0,3)==="on:"){const p=t.slice(3);i&&e.removeEventListener(p,i,typeof i!="function"&&i),n&&e.addEventListener(p,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const p=t.slice(10);i&&e.removeEventListener(p,i,!0),n&&e.addEventListener(p,n,!0)}else if(t.slice(0,2)==="on"){const p=t.slice(2).toLowerCase(),g=Jn.has(p);if(!g&&i){const v=Array.isArray(i)?i[0]:i;e.removeEventListener(p,v)}(g||n)&&(Ae(e,p,n,g),g&&ye([p]))}else if(t.slice(0,5)==="attr:")at(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")er(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(d=Kn.has(t))||!r&&((u=Gn(t,e.tagName))||(l=Hn.has(t)))||(s=e.nodeName.includes("-")||"is"in o)){if(c)t=t.slice(5),l=!0;else if(Ie(e))return n;t==="class"||t==="className"?ve(e,n):s&&!l&&!d?e[or(t)]=n:e[u||t]=n}else{const p=r&&t.indexOf(":")>-1&&Xn[t.split(":")[0]];p?Qn(e,p,t,n):at(e,qn[t]||t,n)}return n}function sr(e){if(C.registry&&C.events&&C.events.find(([l,d])=>d===e))return;let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,a=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),o=()=>{const l=t[n];if(l&&!t.disabled){const d=t[`${n}Data`];if(d!==void 0?l.call(t,d,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&a(t.host),!0},s=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),C.registry&&!C.done&&(C.done=_$HY.done=!0),e.composedPath){const l=e.composedPath();a(l[0]);for(let d=0;d<l.length-2&&(t=l[d],!!o());d++){if(t._$host){t=t._$host,s();break}if(t.parentNode===r)break}}else s();a(i)}function We(e,t,n,i,r){const a=Ie(e);if(a){!n&&(n=[...e.childNodes]);let l=[];for(let d=0;d<n.length;d++){const u=n[d];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,s=i!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(a||o==="number"&&(t=t.toString(),t===n))return n;if(s){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=Pe(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(a)return n;n=Pe(e,n,i)}else{if(o==="function")return B(()=>{let l=t();for(;typeof l=="function";)l=l();n=We(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[],d=n&&Array.isArray(n);if(_t(l,t,n,r))return B(()=>n=We(e,l,n,i,!0)),()=>n;if(a){if(!l.length)return n;if(i===void 0)return n=[...e.childNodes];let u=l[0];if(u.parentNode!==e)return n;const c=[u];for(;(u=u.nextSibling)!==i;)c.push(u);return n=c}if(l.length===0){if(n=Pe(e,n,i),s)return n}else d?n.length===0?Ht(e,l,i):Yn(e,n,l):(n&&Pe(e),Ht(e,l));n=l}else if(t.nodeType){if(a&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=Pe(e,n,i,t);Pe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function _t(e,t,n,i){let r=!1;for(let a=0,o=t.length;a<o;a++){let s=t[a],l=n&&n[e.length],d;if(!(s==null||s===!0||s===!1))if((d=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))r=_t(e,s,l)||r;else if(d==="function")if(i){for(;typeof s=="function";)s=s();r=_t(e,Array.isArray(s)?s:[s],Array.isArray(l)?l:[l])||r}else e.push(s),r=!0;else{const u=String(s);l&&l.nodeType===3&&l.data===u?e.push(l):e.push(document.createTextNode(u))}}return r}function Ht(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function Pe(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let a=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(r!==s){const l=s.parentNode===e;!a&&!o?l?e.replaceChild(r,s):e.insertBefore(r,n):l&&s.remove()}else a=!0}}else e.insertBefore(r,n);return[r]}const dn=!1;function un(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function i(r,a){if(n)return!(n=!1);const o={to:r,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const s of e)s.listener({...o,from:s.location,retry:l=>{l&&(n=!0),s.navigate(r,{...a,resolve:!1})}});return!o.defaultPrevented}return{subscribe:t,confirm:i}}let zt;function Pt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),zt=window.history.state._depth}Pt();function lr(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function cr(e,t){let n=!1;return()=>{const i=zt;Pt();const r=i==null?null:zt-i;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const dr=/^(?:[a-z0-9]+:)?\/\//i,ur=/^\/+|(\/)\/+$/g,fn="http://sr";function Ee(e,t=!1){const n=e.replace(ur,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Qe(e,t,n){if(dr.test(t))return;const i=Ee(e),r=n&&Ee(n);let a="";return!r||t.startsWith("/")?a=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?a=i+r:a=r,(a||"/")+Ee(t,!a)}function fr(e,t){if(e==null)throw new Error(t);return e}function pr(e,t){return Ee(e).replace(/\/*(\*.*)?$/g,"")+Ee(t)}function pn(e){const t={};return e.searchParams.forEach((n,i)=>{i in t?Array.isArray(t[i])?t[i].push(n):t[i]=[t[i],n]:t[i]=n}),t}function gr(e,t,n){const[i,r]=e.split("/*",2),a=i.split("/").filter(Boolean),o=a.length;return s=>{const l=s.split("/").filter(Boolean),d=l.length-o;if(d<0||d>0&&r===void 0&&!t)return null;const u={path:o?"":"/",params:{}},c=p=>n===void 0?void 0:n[p];for(let p=0;p<o;p++){const g=a[p],v=g[0]===":",x=v?l[p]:l[p].toLowerCase(),b=v?g.slice(1):g.toLowerCase();if(v&&wt(x,c(b)))u.params[b]=x;else if(v||!wt(x,b))return null;u.path+=`/${x}`}if(r){const p=d?l.slice(-d).join("/"):"";if(wt(p,c(r)))u.params[r]=p;else return null}return u}}function wt(e,t){const n=i=>i===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function hr(e){const[t,n]=e.pattern.split("/*",2),i=t.split("/").filter(Boolean);return i.reduce((r,a)=>r+(a.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function gn(e){const t=new Map,n=Et();return new Proxy({},{get(i,r){return t.has(r)||Tt(n,()=>t.set(r,N(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(i,r){return r in e()}})}function hn(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),i=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=t[1]),i=i.slice(t[0].length);return hn(i).reduce((a,o)=>[...a,...r.map(s=>s+o)],[])}const br=100,bn=ut(),Mt=ut(),pt=()=>fr(Re(bn),"<A> and 'use' router primitives can be only used inside a Route."),mr=()=>Re(Mt)||pt().base,xr=e=>{const t=mr();return N(()=>t.resolvePath(e()))},vr=e=>{const t=pt();return N(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},wr=()=>pt().navigatorFactory(),yr=()=>pt().location;function kr(e,t=""){const{component:n,preload:i,load:r,children:a,info:o}=e,s=!a||Array.isArray(a)&&!a.length,l={key:e,component:n,preload:i||r,info:o};return mn(e.path).reduce((d,u)=>{for(const c of hn(u)){const p=pr(t,c);let g=s?p:p.split("/*",1)[0];g=g.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),d.push({...l,originalPath:u,pattern:g,matcher:gr(g,!s,e.matchFilters)})}return d},[])}function $r(e,t=0){return{routes:e,score:hr(e[e.length-1])*1e4-t,matcher(n){const i=[];for(let r=e.length-1;r>=0;r--){const a=e[r],o=a.matcher(n);if(!o)return null;i.unshift({...o,route:a})}return i}}}function mn(e){return Array.isArray(e)?e:[e]}function xn(e,t="",n=[],i=[]){const r=mn(e);for(let a=0,o=r.length;a<o;a++){const s=r[a];if(s&&typeof s=="object"){s.hasOwnProperty("path")||(s.path="");const l=kr(s,t);for(const d of l){n.push(d);const u=Array.isArray(s.children)&&s.children.length===0;if(s.children&&!u)xn(s.children,d.pattern,n,i);else{const c=$r([...n],i.length);i.push(c)}n.pop()}}}return n.length?i:i.sort((a,o)=>o.score-a.score)}function yt(e,t){for(let n=0,i=e.length;n<i;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Sr(e,t,n){const i=new URL(fn),r=N(u=>{const c=e();try{return new URL(c,i)}catch{return console.error(`Invalid path ${c}`),u}},i,{equals:(u,c)=>u.href===c.href}),a=N(()=>r().pathname),o=N(()=>r().search,!0),s=N(()=>r().hash),l=()=>"",d=At(o,()=>pn(r()));return{get pathname(){return a()},get search(){return o()},get hash(){return s()},get state(){return t()},get key(){return l()},query:n?n(d):gn(d)}}let ze;function Cr(){return ze}function _r(e,t,n,i={}){const{signal:[r,a],utils:o={}}=e,s=o.parsePath||(S=>S),l=o.renderPath||(S=>S),d=o.beforeLeave||un(),u=Qe("",i.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&a({value:u,replace:!0,scroll:!1});const[c,p]=P(!1);let g;const v=(S,T)=>{T.value===x()&&T.state===y()||(g===void 0&&p(!0),ze=S,g=T,Tn(()=>{g===T&&(b(g.value),w(g.state),R[1](U=>U.filter(W=>W.pending)))}).finally(()=>{g===T&&En(()=>{ze=void 0,S==="navigate"&&E(g),p(!1),g=void 0})}))},[x,b]=P(r().value),[y,w]=P(r().state),L=Sr(x,y,o.queryWrapper),F=[],R=P([]),I=N(()=>typeof i.transformUrl=="function"?yt(t(),i.transformUrl(L.pathname)):yt(t(),L.pathname)),Q=()=>{const S=I(),T={};for(let U=0;U<S.length;U++)Object.assign(T,S[U].params);return T},z=o.paramsWrapper?o.paramsWrapper(Q,t):gn(Q),_={pattern:u,path:()=>u,outlet:()=>null,resolvePath(S){return Qe(u,S)}};return B(At(r,S=>v("native",S),{defer:!0})),{base:_,location:L,params:z,isRouting:c,renderPath:l,parsePath:s,navigatorFactory:$,matches:I,beforeLeave:d,preloadRoute:V,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:R};function k(S,T,U){J(()=>{if(typeof T=="number"){T&&(o.go?o.go(T):console.warn("Router integration does not support relative routing"));return}const W=!T||T[0]==="?",{replace:ne,resolve:H,scroll:re,state:ee}={replace:!1,resolve:!W,scroll:!0,...U},Y=H?S.resolvePath(T):Qe(W&&L.pathname||"",T);if(Y===void 0)throw new Error(`Path '${T}' is not a routable path`);if(F.length>=br)throw new Error("Too many redirects");const oe=x();(Y!==oe||ee!==y())&&(dn||d.confirm(Y,U)&&(F.push({value:oe,replace:ne,scroll:re,state:y()}),v("navigate",{value:Y,state:ee})))})}function $(S){return S=S||Re(Mt)||_,(T,U)=>k(S,T,U)}function E(S){const T=F[0];T&&(a({...S,replace:T.replace,scroll:T.scroll}),F.length=0)}function V(S,T){const U=yt(t(),S.pathname),W=ze;ze="preload";for(let ne in U){const{route:H,params:re}=U[ne];H.component&&H.component.preload&&H.component.preload();const{preload:ee}=H;T&&ee&&Tt(n(),()=>ee({params:re,location:{pathname:S.pathname,search:S.search,hash:S.hash,query:pn(S),state:null,key:""},intent:"preload"}))}ze=W}}function zr(e,t,n,i){const{base:r,location:a,params:o}=e,{pattern:s,component:l,preload:d}=i().route,u=N(()=>i().path);l&&l.preload&&l.preload();const c=d?d({params:o,location:a,intent:ze||"initial"}):void 0;return{parent:t,pattern:s,path:u,outlet:()=>l?h(l,{params:o,location:a,data:c,get children(){return n()}}):n(),resolvePath(g){return Qe(r.path(),g,u())}}}const Ar=e=>t=>{const{base:n}=t,i=jt(()=>t.children),r=N(()=>xn(i(),t.base||""));let a;const o=_r(e,r,()=>a,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(o),h(bn.Provider,{value:o,get children(){return h(Er,{routerState:o,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Ft(()=>(a=Et())&&null),h(Tr,{routerState:o,get branches(){return r()}})]}})}})};function Er(e){const t=e.routerState.location,n=e.routerState.params,i=N(()=>e.preload&&J(()=>{e.preload({params:n,location:t,intent:Cr()||"initial"})}));return h(te,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>h(r,{params:n,location:t,get data(){return i()},get children(){return e.children}})})}function Tr(e){const t=[];let n;const i=N(At(e.routerState.matches,(r,a,o)=>{let s=a&&r.length===a.length;const l=[];for(let d=0,u=r.length;d<u;d++){const c=a&&a[d],p=r[d];o&&c&&p.route.key===c.route.key?l[d]=o[d]:(s=!1,t[d]&&t[d](),Me(g=>{t[d]=g,l[d]=zr(e.routerState,l[d-1]||e.routerState.base,Kt(()=>i()[d+1]),()=>{const v=e.routerState.matches();return v[d]??v[0]})}))}return t.splice(r.length).forEach(d=>d()),o&&s?o:(n=l[0],l)}));return Kt(()=>i()&&n)()}const Kt=e=>()=>h(te,{get when(){return e()},keyed:!0,children:t=>h(Mt.Provider,{value:t,get children(){return t.outlet()}})}),kt=e=>{const t=jt(()=>e.children);return qe(e,{get children(){return t()}})};function jr([e,t],n,i){return[e,i?r=>t(i(r)):t]}function Lr(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,i=jr(P(n(e.get()),{equals:(r,a)=>r.value===a.value&&r.state===a.state}),void 0,r=>(!t&&e.set(r),C.registry&&!C.done&&(C.done=!0),r));return e.init&&we(e.init((r=e.get())=>{t=!0,i[1](n(r)),t=!1})),Ar({signal:i,create:e.create,utils:e.utils})}function Fr(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Pr(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Mr=new Map;function Or(e=!0,t=!1,n="/_server",i){return r=>{const a=r.base.path(),o=r.navigatorFactory(r.base);let s,l;function d(x){return x.namespaceURI==="http://www.w3.org/2000/svg"}function u(x){if(x.defaultPrevented||x.button!==0||x.metaKey||x.altKey||x.ctrlKey||x.shiftKey)return;const b=x.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!b||t&&!b.hasAttribute("link"))return;const y=d(b),w=y?b.href.baseVal:b.href;if((y?b.target.baseVal:b.target)||!w&&!b.hasAttribute("state"))return;const F=(b.getAttribute("rel")||"").split(/\s+/);if(b.hasAttribute("download")||F&&F.includes("external"))return;const R=y?new URL(w,document.baseURI):new URL(w);if(!(R.origin!==window.location.origin||a&&R.pathname&&!R.pathname.toLowerCase().startsWith(a.toLowerCase())))return[b,R]}function c(x){const b=u(x);if(!b)return;const[y,w]=b,L=r.parsePath(w.pathname+w.search+w.hash),F=y.getAttribute("state");x.preventDefault(),o(L,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:F?JSON.parse(F):void 0})}function p(x){const b=u(x);if(!b)return;const[y,w]=b;i&&(w.pathname=i(w.pathname)),r.preloadRoute(w,y.getAttribute("preload")!=="false")}function g(x){clearTimeout(s);const b=u(x);if(!b)return l=null;const[y,w]=b;l!==y&&(i&&(w.pathname=i(w.pathname)),s=setTimeout(()=>{r.preloadRoute(w,y.getAttribute("preload")!=="false"),l=y},20))}function v(x){if(x.defaultPrevented)return;let b=x.submitter&&x.submitter.hasAttribute("formaction")?x.submitter.getAttribute("formaction"):x.target.getAttribute("action");if(!b)return;if(!b.startsWith("https://action/")){const w=new URL(b,fn);if(b=r.parsePath(w.pathname+w.search),!b.startsWith(n))return}if(x.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=Mr.get(b);if(y){x.preventDefault();const w=new FormData(x.target,x.submitter);y.call({r,f:x.target},x.target.enctype==="multipart/form-data"?w:new URLSearchParams(w))}}ye(["click","submit"]),document.addEventListener("click",c),e&&(document.addEventListener("mousemove",g,{passive:!0}),document.addEventListener("focusin",p,{passive:!0}),document.addEventListener("touchstart",p,{passive:!0})),document.addEventListener("submit",v),we(()=>{document.removeEventListener("click",c),e&&(document.removeEventListener("mousemove",g),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",v)})}}function Rr(e){const t=()=>{const i=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:i+window.location.hash,state:r}},n=un();return Lr({get:t,set({value:i,replace:r,scroll:a,state:o}){r?window.history.replaceState(lr(o),"",i):window.history.pushState(o,"",i),Pr(decodeURIComponent(window.location.hash.slice(1)),a),Pt()},init:i=>Fr(window,"popstate",cr(i,r=>{if(r)return!n.confirm(r);{const a=t();return!n.confirm(a.value,{state:a.state})}})),create:Or(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:i=>window.history.go(i),beforeLeave:n}})(e)}var Nr=j("<a>");function He(e){e=qe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=ln(e,["href","state","class","activeClass","inactiveClass","end"]),n=xr(()=>e.href),i=vr(n),r=yr(),a=N(()=>{const o=n();if(o===void 0)return[!1,!1];const s=Ee(o.split(/[?#]/,1)[0]).toLowerCase(),l=decodeURI(Ee(r.pathname).toLowerCase());return[e.end?s===l:l.startsWith(s+"/")||l===s,s===l]});return(()=>{var o=Nr();return cn(o,qe(t,{get href(){return i()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!a()[0],[e.activeClass]:a()[0],...t.classList}},link:"",get"aria-current"(){return a()[1]?"page":void 0}}),!1,!1),o})()}var Ir=j("<svg stroke-width=0>");function D(e,t){const n=qe(e.a,t),[i,r]=ln(n,["src"]),[a,o]=P(""),s=N(()=>t.title?`${e.c}<title>${t.title}</title>`:e.c);return Oe(()=>o(s())),we(()=>{o("")}),(()=>{var l=Ir();return cn(l,qe({get stroke(){return e.a?.stroke},get color(){return t.color||"currentColor"},get fill(){return t.color||"currentColor"},get style(){return{...t.style,overflow:"visible"}}},r,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return a()}}),!0,!0),f(l,()=>dn),l})()}function Dr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M22 12 18 12 15 21 9 3 6 12 2 12"/>'},e)}function Vr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M5 12 19 12"/><path d="M12 5 19 12 12 19"/>'},e)}function Br(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'},e)}function Ur(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M12 6 12 12 16 14"/>'},e)}function Hr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M16 18 22 12 16 6"/><path d="M8 6 2 12 8 18"/>'},e)}function Kr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'},e)}function et(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<rect width="16" height="16" x="4" y="4" rx="2" ry="2"/><path d="M9 9H15V15H9z"/><path d="M9 1 9 4"/><path d="M15 1 15 4"/><path d="M9 20 9 23"/><path d="M15 20 15 23"/><path d="M20 9 23 9"/><path d="M20 14 23 14"/><path d="M1 9 4 9"/><path d="M1 14 4 14"/>'},e)}function qr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10 12 15 17 10"/><path d="M12 15 12 3"/>'},e)}function Wr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><path d="M12 9A3 3 0 1 0 12 15 3 3 0 1 0 12 9z"/>'},e)}function Gr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2 13 9 20 9"/>'},e)}function Jr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M6 3 6 15"/><path d="M18 3A3 3 0 1 0 18 9 3 3 0 1 0 18 3z"/><path d="M6 15A3 3 0 1 0 6 21 3 3 0 1 0 6 15z"/><path d="M18 9a9 9 0 0 1-9 9"/>'},e)}function qt(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'},e)}function Xr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M12 2 2 7 12 12 22 7 12 2z"/><path d="M2 17 12 22 22 17"/><path d="M2 12 12 17 22 12"/>'},e)}function Yr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M6 4H10V20H6z"/><path d="M14 4H18V20H14z"/>'},e)}function ot(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M5 3 19 12 5 21 5 3z"/>'},e)}function vn(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M12 5 12 19"/><path d="M5 12 19 12"/>'},e)}function Zr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'},e)}function Qr(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M11 3A8 8 0 1 0 11 19 8 8 0 1 0 11 3z"/><path d="M21 21 16.65 16.65"/>'},e)}function ei(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3 9 21"/>'},e)}function Wt(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M19 20 9 12 19 4 19 20z"/><path d="M5 19 5 5"/>'},e)}function Gt(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M5 4 15 12 5 20 5 4z"/><path d="M19 5 19 19"/>'},e)}function ti(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M4 17 10 11 4 5"/><path d="M12 19 20 19"/>'},e)}function ni(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11 10 17"/><path d="M14 11 14 17"/>'},e)}function ri(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><path d="M9 3A4 4 0 1 0 9 11 4 4 0 1 0 9 3z"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'},e)}function ii(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M18 6 6 18"/><path d="M6 6 18 18"/>'},e)}function st(e){return D({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M13 2 3 14 12 14 11 22 21 10 12 10 13 2z"/>'},e)}var ai=j("<span class=ca-brand-icon>"),oi=j("<span class=ca-brand-text>CodeArena"),si=j(`<div class=ca-landing><div class=ca-bg-grid aria-hidden=true></div><header class=ca-topbar><nav class=ca-nav><a href=https://github.com/CodeNinja-194/CodeArena target=_blank rel="noopener noreferrer"class="ca-nav-link ghost">GitHub</a></nav></header><section class=ca-hero><div class=hero-left><div class=hero-pill><span class=dot></span>The execution visualization engine for learning</div><h1 class=hero-title>Understand code execution.<span class=grad> Visually.</span></h1><p class=hero-sub>Run Java/C++ and step through stack, variables, and algorithm state like a premium debugger built for learning.</p><div class=hero-cta><button class="ca-btn primary">Try Compiler</button><button class=ca-btn>Visualize Code</button></div><div class=hero-kbd-row><span class=hint>Run</span> <span class=ca-kbd>Ctrl</span> <span class=ca-kbd>Enter</span><span class=sep>•</span><span class=hint>Visualize</span> <span class=ca-kbd>Ctrl</span> <span class=ca-kbd>Shift</span> <span class=ca-kbd>V</span></div></div><div class="hero-right ca-panel"><div class=ca-panel-header>Live preview</div><div class=preview-body><div class=preview-tabs></div><div class=preview-grid><div class=codebox><div class=codehead><span class="dot red"></span><span class="dot amber"></span><span class="dot green"></span><span class=file>Main.java</span></div><pre class=codepre><span class=hl></span></pre></div><div class=statebox><div class=statehead>Execution</div><div class=step><div class=badge>Step </div><div class=text></div></div><div class=mini><div class=mini-row><span class=k>stack</span><span class=v>frames</span></div><div class=mini-row><span class=k>vars</span><span class=v>diff view</span></div><div class=mini-row><span class=k>timeline</span><span class=v>scrubbable</span></div></div><button type=button class="ca-btn primary mini-cta">Open Visualizer </button></div></div></div></div></section><section class=ca-section><div class=sec-head><h2>Built like a premium developer tool</h2><p>Fast, clean, and optimized for learning how programs actually run.</p></div><div class=feature-grid></div></section><section class=ca-section><div class=sec-head><h2>Algorithm visualizations</h2><p>Sorting, binary search, graphs, and recursion — designed to build intuition.</p></div><div class=algo-grid></div></section><section class=ca-cta><div class="cta-inner ca-panel"><div class=cta-left><h2>Start coding instantly</h2><p>No setup. Open the compiler, run Java/C++, then visualize execution.</p><div class=cta-actions><button class="ca-btn primary"> Try Compiler</button><button class=ca-btn> Visualize Code</button></div></div><div class=cta-right><div class=cta-links><a href=# class=cta-link> Docs</a><a href=https://github.com/CodeNinja-194/CodeArena target=_blank rel="noopener noreferrer"class=cta-link> GitHub</a><a href=# class=cta-link> Community</a><a href=# class=cta-link> Changelog</a></div></div></div></section><footer class=ca-footer><div class=foot-inner><div class=foot-brand><span class=ca-brand-icon></span><div><div class=name>CodeArena</div><div class=tag>Execution visualization, reimagined.</div></div></div><div class=foot-links><a href=#>Docs</a><a href=https://github.com/CodeNinja-194/CodeArena target=_blank rel="noopener noreferrer">GitHub</a><a href=#>Community</a><a href=#>About</a></div></div></footer><style>
                .ca-landing { min-height: 100vh; position: relative; overflow: hidden; }
                .ca-bg-grid { position: absolute; inset: 0; background-image: radial-gradient(rgba(88,166,255,0.10) 1px, transparent 1px), radial-gradient(rgba(247,129,102,0.08) 1px, transparent 1px); background-size: 46px 46px, 80px 80px; background-position: -10px -10px, 20px 20px; mask-image: radial-gradient(circle at 50% 0%, rgba(0,0,0,0.85) 0%, transparent 68%); opacity: 0.75; pointer-events: none; }
                .ca-topbar { height: 64px; display: flex; align-items: center; justify-content: space-between; padding: 0 28px; position: sticky; top: 0; z-index: 50; background: rgba(13,17,23,0.65); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.06); }
                .ca-nav { display: flex; align-items: center; gap: 12px; }
                .ca-nav-link { text-decoration: none; color: var(--text-muted); font-weight: 700; font-size: 13px; padding: 8px 10px; border-radius: 10px; border: 1px solid transparent; display: inline-flex; align-items: center; gap: 8px; }
                .ca-nav-link:hover { color: var(--text); background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.08); }
                .ca-nav-link.ghost { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }

                .ca-hero { width: min(1200px, calc(100% - 56px)); margin: 0 auto; padding: 56px 0 22px; display: grid; grid-template-columns: 1fr 1.15fr; gap: 26px; position: relative; z-index: 2; }
                .hero-left { padding: 10px 0; }
                .hero-pill { display: inline-flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.04); color: var(--text-muted); font-weight: 700; font-size: 12px; margin-bottom: 18px; }
                .hero-pill .dot { width: 8px; height: 8px; border-radius: 999px; background: var(--accent-2); box-shadow: 0 0 0 6px rgba(126,231,135,0.12); }
                .hero-title { font-size: clamp(38px, 4.6vw, 64px); line-height: 1.02; letter-spacing: -0.04em; margin-bottom: 14px; }
                .hero-title .grad { background: linear-gradient(135deg, rgba(88,166,255,1) 0%, rgba(126,231,135,1) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .hero-sub { color: var(--text-muted); font-size: 16px; line-height: 1.7; max-width: 56ch; margin-bottom: 18px; }
                .hero-cta { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px; }
                .hero-kbd-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; color: var(--text-muted); font-size: 12px; font-weight: 600; }
                .hero-kbd-row .sep { opacity: 0.6; } .hero-kbd-row .hint { opacity: 0.9; }

                .hero-right { overflow: hidden; }
                .preview-body { padding: 14px; }
                .preview-tabs { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
                .p-tab { height: 30px; padding: 0 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.04); color: var(--text-muted); font-weight: 700; font-size: 12px; cursor: pointer; }
                .p-tab.active { color: var(--text); border-color: rgba(88,166,255,0.45); background: rgba(88,166,255,0.10); }
                .preview-grid { display: grid; grid-template-columns: 1.35fr 0.9fr; gap: 12px; perspective: 1200px; }
                .codebox {
                    border-radius: 18px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.12);
                    background: radial-gradient(circle at 0% 0%, rgba(88,166,255,0.35), rgba(0,0,0,0.9));
                    box-shadow: 0 26px 60px rgba(0,0,0,0.7);
                    transform-origin: center;
                    transform: rotateX(10deg) rotateY(-8deg);
                }
                .codehead { height: 34px; display: flex; align-items: center; gap: 8px; padding: 0 12px; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03); }
                .codehead .dot { width: 9px; height: 9px; border-radius: 999px; } .codehead .dot.red { background: #ff5f56; } .codehead .dot.amber { background: #ffbd2e; } .codehead .dot.green { background: #27c93f; }
                .codehead .file { margin-left: 8px; font-family: var(--mono); font-size: 12px; color: rgba(230,237,243,0.75); }
                .codepre { position: relative; margin: 0; padding: 12px; font-family: var(--mono); font-size: 11px; line-height: 1.65; color: rgba(230,237,243,0.90); white-space: pre-wrap; min-height: 240px; }
                .codepre .hl { position: absolute; left: 8px; right: 8px; height: 18px; border-radius: 8px; background: rgba(88,166,255,0.14); border: 1px solid rgba(88,166,255,0.22); pointer-events: none; transition: top 0.25s ease; }
                .statebox { border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); padding: 12px; display: flex; flex-direction: column; gap: 12px; }
                .statehead { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
                .step .badge { display: inline-flex; padding: 3px 8px; border-radius: 999px; border: 1px solid rgba(88,166,255,0.3); background: rgba(88,166,255,0.12); color: var(--text); font-size: 11px; font-weight: 700; margin-bottom: 8px; }
                .step .text { color: rgba(230,237,243,0.92); font-weight: 650; font-size: 13px; line-height: 1.45; }
                .mini { display: flex; flex-direction: column; gap: 8px; } .mini-row { display: flex; justify-content: space-between; gap: 10px; font-size: 12px; } .mini-row .k { color: var(--text-muted); font-weight: 700; } .mini-row .v { color: rgba(230,237,243,0.85); font-weight: 650; }
                .mini-cta { height: 36px; border-radius: 12px; width: 100%; }

                .ca-section { width: min(1200px, calc(100% - 56px)); margin: 0 auto; padding: 54px 0 0; position: relative; z-index: 2; }
                .sec-head h2 { font-size: 28px; letter-spacing: -0.02em; margin-bottom: 8px; } .sec-head p { color: var(--text-muted); max-width: 70ch; }
                .feature-grid { margin-top: 18px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
                .feature { padding: 16px; } .feature h3 { font-size: 14px; margin: 10px 0 6px; } .feature p { color: var(--text-muted); font-size: 13px; line-height: 1.6; }
                .f-icon { width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center; background: rgba(88,166,255,0.12); border: 1px solid rgba(88,166,255,0.18); color: rgba(230,237,243,0.95); }
                .algo-grid { margin-top: 18px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
                .algo { padding: 16px; overflow: hidden; position: relative; } .algo-title { font-weight: 800; letter-spacing: -0.01em; } .algo-sub { margin-top: 6px; color: var(--text-muted); font-size: 12px; }
                .algo-canvas { margin-top: 14px; height: 110px; border-radius: 14px; background: radial-gradient(circle at 20% 30%, rgba(88,166,255,0.25) 0%, transparent 45%), radial-gradient(circle at 70% 10%, rgba(247,129,102,0.18) 0%, transparent 50%), rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }
                .ca-cta { width: min(1200px, calc(100% - 56px)); margin: 0 auto; padding: 56px 0 64px; position: relative; z-index: 2; }
                .cta-inner { padding: 18px; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 16px; }
                .cta-left h2 { font-size: 26px; letter-spacing: -0.02em; margin-bottom: 8px; } .cta-left p { color: var(--text-muted); margin-bottom: 14px; } .cta-actions { display: flex; gap: 10px; flex-wrap: wrap; }
                .cta-links { display: grid; gap: 8px; align-content: start; }
                .cta-link { text-decoration: none; color: var(--text-muted); border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); padding: 10px 12px; border-radius: 12px; display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 13px; }
                .cta-link:hover { color: var(--text); border-color: rgba(88,166,255,0.35); background: rgba(88,166,255,0.08); }
                .ca-footer { border-top: 1px solid rgba(255,255,255,0.06); background: rgba(13,17,23,0.6); }
                .foot-inner { width: min(1200px, calc(100% - 56px)); margin: 0 auto; padding: 18px 0; display: flex; align-items: center; justify-content: space-between; gap: 18px; }
                .foot-brand { display: flex; align-items: center; gap: 12px; color: var(--text); } .foot-brand .name { font-weight: 800; letter-spacing: -0.01em; } .foot-brand .tag { color: var(--text-muted); font-size: 12px; margin-top: 2px; }
                .foot-links { display: flex; gap: 14px; flex-wrap: wrap; } .foot-links a { color: var(--text-muted); text-decoration: none; font-weight: 700; font-size: 13px; } .foot-links a:hover { color: var(--text); }
                @media (max-width: 1080px) { .ca-hero { grid-template-columns: 1fr; } .preview-grid { grid-template-columns: 1fr; } .feature-grid { grid-template-columns: repeat(2, 1fr); } .algo-grid { grid-template-columns: repeat(2, 1fr); } .cta-inner { grid-template-columns: 1fr; } }
                @media (max-width: 620px) { .ca-topbar { padding: 10px 16px; height: auto; flex-wrap: wrap; gap: 10px; } .ca-hero, .ca-section, .ca-cta, .foot-inner { width: calc(100% - 32px); } .feature-grid, .algo-grid { grid-template-columns: 1fr; } }
            `),li=j("<button type=button>"),ci=j('<div class="feature ca-panel"><div class=f-icon></div><h3></h3><p>'),di=j('<div class="algo ca-panel"><div class=algo-title></div><div class=algo-sub></div><div class=algo-canvas aria-hidden=true>');const Jt=[{id:"binary-search",label:"Binary Search",code:`public class Main {
  static int bs(int[] a, int x) {
    int l = 0, r = a.length - 1;
    while (l <= r) {
      int m = (l + r) / 2;
      if (a[m] == x) return m;
      if (a[m] < x) l = m + 1;
      else r = m - 1;
    }
    return -1;
  }
  public static void main(String[] args) {
    int[] a = {1,3,4,7,9,12,15};
    System.out.println(bs(a, 9));
  }
}`,steps:["l=0 r=6","m=3 a[m]=7 → l=4","m=5 a[m]=12 → r=4","m=4 a[m]=9 → found"]},{id:"recursion",label:"Recursion",code:`public class Main {
  static int fact(int n){
    if(n<=1) return 1;
    return n * fact(n-1);
  }
  public static void main(String[] args){
    System.out.println(fact(5));
  }
}`,steps:["call fact(5)","call fact(4)","call fact(3)","return chain → 120"]},{id:"sorting",label:"Sorting",code:`public class Main {
  static void swap(int[] a,int i,int j){int t=a[i];a[i]=a[j];a[j]=t;}
  static void bubble(int[] a){
    for(int i=0;i<a.length;i++)
      for(int j=0;j<a.length-i-1;j++)
        if(a[j]>a[j+1]) swap(a,j,j+1);
  }
  public static void main(String[] args){
    int[] a={5,1,4,2,8};
    bubble(a);
    for(int x:a) System.out.print(x+" ");
  }
}`,steps:["compare 5,1 → swap","compare 5,4 → swap","…","sorted"]},{id:"graph-dfs",label:"Graph DFS",code:`import java.util.*;
public class Main {
  static void dfs(int u, List<List<Integer>> g, boolean[] vis){
    vis[u]=true;
    System.out.print(u+" ");
    for(int v:g.get(u)) if(!vis[v]) dfs(v,g,vis);
  }
  public static void main(String[] args){
    int n=5; List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());
    g.get(0).addAll(List.of(1,2)); g.get(1).add(3); g.get(2).add(4);
    dfs(0,g,new boolean[n]);
  }
}`,steps:["visit 0","visit 1","visit 3","backtrack → 2 → 4"]}],ui=()=>{const e=wr(),[t,n]=P(Jt[0]),[i,r]=P(0);dt(()=>{const s=setInterval(()=>{r(l=>(l+1)%t().steps.length)},1200);we(()=>clearInterval(s))});const a=[{icon:Dr,title:"Interactive Code Execution",desc:"Replay execution step-by-step with timeline scrubbing and state diffs."},{icon:Qr,title:"Step-by-Step Debugging",desc:"See variables evolve and jump across call/return/exception events."},{icon:Xr,title:"Algorithm Visualization",desc:"Sorting, searching, graphs, and recursion with animated visual layers."},{icon:et,title:"Java + C++ Focus",desc:"A sharp experience today with a clean path to more languages later."}],o=[{title:"Sorting",subtitle:"comparisons • swaps • array states"},{title:"Binary Search",subtitle:"pointers • mid • narrowing range"},{title:"Graph Traversal",subtitle:"BFS/DFS • visit order • queue/stack"},{title:"Recursion",subtitle:"call tree • stack frames • returns"}];return(()=>{var s=si(),l=s.firstChild,d=l.nextSibling,u=d.firstChild,c=u.firstChild,p=c.firstChild,g=d.nextSibling,v=g.firstChild,x=v.firstChild,b=x.nextSibling,y=b.nextSibling,w=y.nextSibling,L=w.firstChild,F=L.firstChild,R=L.nextSibling,I=R.firstChild,Q=v.nextSibling,z=Q.firstChild,_=z.nextSibling,k=_.firstChild,$=k.nextSibling,E=$.firstChild,V=E.firstChild,S=V.nextSibling,T=S.firstChild,U=E.nextSibling,W=U.firstChild,ne=W.nextSibling,H=ne.firstChild;H.firstChild;var re=H.nextSibling,ee=ne.nextSibling,Y=ee.nextSibling;Y.firstChild;var oe=g.nextSibling,ke=oe.firstChild,de=ke.nextSibling,se=oe.nextSibling,ue=se.firstChild,$e=ue.nextSibling,Se=se.nextSibling,ge=Se.firstChild,G=ge.firstChild,he=G.firstChild,le=he.nextSibling,Ge=le.nextSibling,je=Ge.firstChild,gt=je.firstChild,De=je.nextSibling,Je=De.firstChild,ht=G.nextSibling,bt=ht.firstChild,Ve=bt.firstChild,mt=Ve.firstChild,Le=Ve.nextSibling,Be=Le.firstChild,M=Le.nextSibling,be=M.firstChild,ie=M.nextSibling,Fe=ie.firstChild,Ce=Se.nextSibling,_e=Ce.firstChild,yn=_e.firstChild,kn=yn.firstChild;return f(d,h(He,{href:"/",class:"ca-brand",get children(){return[(()=>{var X=ai();return f(X,h(st,{size:18})),X})(),oi()]}}),u),f(u,h(He,{href:"/editor",class:"ca-nav-link",children:"Compiler"}),c),f(u,h(He,{href:"/visualize",class:"ca-nav-link",children:"Visualizer"}),c),f(c,h(qt,{size:16}),p),L.$$click=()=>e("/editor"),f(L,h(ot,{size:16}),F),R.$$click=()=>e("/visualize"),f(R,h(et,{size:16}),I),f(k,h(pe,{each:Jt,children:X=>(()=>{var ce=li();return ce.$$click=()=>{n(X),r(0)},f(ce,()=>X.label),B(()=>ve(ce,`p-tab ${t().id===X.id?"active":""}`)),ce})()})),f(S,()=>t().code,null),f(H,()=>i()+1,null),f(re,()=>t().steps[i()]),Y.$$click=()=>e("/visualize"),f(Y,h(Vr,{size:14}),null),f(de,h(pe,{each:a,children:X=>(()=>{var ce=ci(),Ue=ce.firstChild,Xe=Ue.nextSibling,$n=Xe.nextSibling;return f(Ue,h(X.icon,{size:18})),f(Xe,()=>X.title),f($n,()=>X.desc),ce})()})),f($e,h(pe,{each:o,children:X=>(()=>{var ce=di(),Ue=ce.firstChild,Xe=Ue.nextSibling;return f(Ue,()=>X.title),f(Xe,()=>X.subtitle),ce})()})),je.$$click=()=>e("/editor"),f(je,h(ot,{size:16}),gt),De.$$click=()=>e("/visualize"),f(De,h(et,{size:16}),Je),f(Ve,h(Br,{size:14}),mt),f(Le,h(qt,{size:14}),Be),f(M,h(ri,{size:14}),be),f(ie,h(Jr,{size:14}),Fe),f(kn,h(st,{size:16})),B(X=>rr(T,"top",`${44+i()*18}px`)),s})()};ye(["click"]);const fi="modulepreload",pi=function(e){return"/"+e},Xt={},gi=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(n.map(l=>{if(l=pi(l),l in Xt)return;Xt[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":fi,d||(c.as="script"),c.crossOrigin="",c.href=l,s&&c.setAttribute("nonce",s),document.head.appendChild(c),d)return new Promise((p,g)=>{c.addEventListener("load",p),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return r.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})};var hi=j('<div style=height:100%;width:100%;padding:16px><div style="height:100%;border:1px solid rgba(255,255,255,0.08);borderRadius:16px;background:rgba(255,255,255,0.03)">');const bi=In(()=>gi(()=>import("./MonacoWrapper-bQBDHewY.js").then(e=>e.b),__vite__mapDeps([0,1]))),mi=()=>(()=>{var e=hi();return e.firstChild,e})(),wn=e=>h(Bn,{get fallback(){return h(mi,{})},get children(){return h(bi,e)}});var xi=j("<span class=nav-brand-icon>"),vi=j("<span class=nav-brand-text>CodeArena"),wi=j("<span class=btn-spinner>"),yi=j(`<nav class=editor-nav-bar><div class=nav-left><div class=nav-tabs><button type=button class=nav-tab-add aria-label="New file"></button></div></div><div class=nav-actions><button type=button class=btn-run><span></span></button><button type=button class=btn-visualize><span>Visualize</span></button><button type=button class=btn-sidebar aria-label="Toggle panel"></button></div><style>
                .editor-nav-bar {
                    height: 70px;
                    background: var(--glass-bg);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid var(--border);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 40px;
                    gap: 30px;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 1001;
                }
                .nav-left {
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    flex: 1;
                    min-width: 0;
                }
                .nav-brand {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-decoration: none;
                    color: white;
                    font-weight: 800;
                    font-size: 20px;
                    letter-spacing: -0.02em;
                    flex-shrink: 0;
                }
                .nav-brand-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: var(--gradient-p);
                    display: grid;
                    place-items: center;
                    color: #fff;
                    box-shadow: var(--shadow-neon-p);
                }
                .nav-brand:hover .nav-brand-icon { transform: scale(1.05); }
                .nav-tabs {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    overflow-x: auto;
                    padding: 4px 0;
                    scrollbar-width: none;
                }
                .nav-tabs::-webkit-scrollbar { display: none; }
                .nav-tab {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    height: 40px;
                    padding: 0 18px;
                    border-radius: 12px;
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--text-muted);
                    cursor: pointer;
                    transition: all 0.3s;
                    white-space: nowrap;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--border);
                }
                .nav-tab:hover { color: white; background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.15); }
                .nav-tab.active {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border-color: var(--primary);
                    box-shadow: inset 0 0 15px var(--primary-glow);
                }
                .nav-tab-close {
                    border: none;
                    background: transparent;
                    color: var(--text-muted);
                    padding: 2px;
                    border-radius: 4px;
                    display: flex;
                    cursor: pointer;
                }
                .nav-tab-close:hover { color: #f43f5e; background: rgba(244, 63, 94, 0.1); }
                .nav-tab-add {
                    height: 40px;
                    width: 40px;
                    border: 1px dashed var(--border);
                    background: transparent;
                    color: var(--text-muted);
                    border-radius: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }
                .nav-tab-add:hover { color: var(--primary); border-color: var(--primary); background: rgba(59, 130, 246, 0.05); }
                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .btn-run {
                    height: 44px;
                    padding: 0 25px;
                    background: var(--gradient-p);
                    color: #fff;
                    border: none;
                    border-radius: 14px;
                    font-weight: 800;
                    font-size: 14px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s;
                    box-shadow: var(--shadow-neon-p);
                }
                .btn-run:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 0 30px var(--primary-glow); }
                .btn-run:disabled { opacity: 0.7; cursor: not-allowed; filter: grayscale(0.5); }
                .btn-visualize {
                    height: 44px;
                    padding: 0 20px;
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    border: 1px solid var(--border);
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 14px;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s;
                }
                .btn-visualize:hover { background: rgba(255, 255, 255, 0.1); border-color: var(--secondary); color: white; box-shadow: 0 0 20px var(--secondary-glow); }
                .btn-sidebar {
                    width: 44px;
                    height: 44px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--border);
                    color: var(--text-muted);
                    border-radius: 14px;
                    cursor: pointer;
                    display: grid;
                    place-items: center;
                    transition: all 0.3s;
                }
                .btn-sidebar:hover { background: rgba(255, 255, 255, 0.1); color: white; }
                .btn-spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: toolbar-spin 0.7s linear infinite;
                }
                @keyframes toolbar-spin { to { transform: rotate(360deg); } }
            `),ki=j('<button type=button class=nav-tab-close aria-label="Close tab">'),$i=j("<div><span>");const Si=e=>(()=>{var t=yi(),n=t.firstChild,i=n.firstChild,r=i.firstChild,a=n.nextSibling,o=a.firstChild,s=o.firstChild,l=o.nextSibling,d=l.firstChild,u=l.nextSibling;return f(n,h(He,{href:"/",class:"nav-brand",get children(){return[(()=>{var c=xi();return f(c,h(st,{size:20})),c})(),vi()]}}),i),f(i,h(pe,{get each(){return e.files},children:c=>(()=>{var p=$i(),g=p.firstChild;return p.$$click=()=>e.onSetActiveFile(c.id),f(p,h(Hr,{size:13}),g),f(g,()=>c.name),f(p,h(te,{get when(){return e.files.length>1},get children(){var v=ki();return v.$$click=x=>e.onDeleteFile(c.id,x),f(v,h(ii,{size:12})),v}}),null),B(()=>ve(p,`nav-tab ${e.activeFileId===c.id?"active":""}`)),p})()}),r),Ae(r,"click",e.onAddFile,!0),f(r,h(vn,{size:16})),Ae(o,"click",e.onRun,!0),f(o,h(te,{get when(){return e.executing},get fallback(){return h(ot,{size:16})},get children(){return wi()}}),s),f(s,()=>e.executing?"Running…":"Run Code"),Ae(l,"click",e.onVisualize,!0),f(l,h(et,{size:16}),d),Ae(u,"click",e.onToggleSidebar,!0),f(u,h(ei,{size:18})),B(()=>o.disabled=e.executing),t})();ye(["click"]);var Ci=j(`<aside class="ca-explorer ca-panel"><div class=ca-panel-header>Workspace</div><div class=ex-actions><button type=button class=ex-btn title="New file"><span>New</span></button></div><div class=ex-list></div><style>
                .ca-explorer {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                .ex-actions {
                    padding: 10px 12px;
                    border-bottom: 1px solid var(--border);
                    display: flex;
                    gap: 8px;
                }
                .ex-btn {
                    height: 34px;
                    padding: 0 12px;
                    border-radius: 10px;
                    border: 1px solid var(--border-2);
                    background: rgba(255,255,255,0.05);
                    color: var(--text);
                    font-weight: 700;
                    font-size: 12px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                }
                .ex-btn:hover { border-color: rgba(88,166,255,0.4); background: rgba(88,166,255,0.10); }

                .ex-list {
                    padding: 10px;
                    overflow: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .ex-item {
                    border-radius: 12px;
                    border: 1px solid transparent;
                    background: rgba(255,255,255,0.03);
                    padding: 10px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    transition: background 0.15s, border-color 0.15s;
                }
                .ex-item:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.08); }
                .ex-item.active { background: rgba(88,166,255,0.12); border-color: rgba(88,166,255,0.30); }
                .ex-left { display: flex; align-items: center; gap: 10px; color: rgba(230,237,243,0.9); }
                .ex-meta { display: flex; flex-direction: column; line-height: 1.2; }
                .ex-name { font-weight: 700; font-size: 13px; }
                .ex-sub { font-size: 10px; font-weight: 800; letter-spacing: 0.08em; color: var(--text-muted); }
                .ex-item.active .ex-sub { color: rgba(230,237,243,0.75); }

                .ex-del {
                    width: 34px;
                    height: 34px;
                    border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.08);
                    background: rgba(255,255,255,0.03);
                    color: var(--text-muted);
                    cursor: pointer;
                    display: grid;
                    place-items: center;
                }
                .ex-del:hover { color: var(--danger); border-color: rgba(247,129,102,0.35); background: rgba(247,129,102,0.08); }
            `),_i=j('<button type=button class=ex-del title="Delete file">'),zi=j("<div><div class=ex-left><div class=ex-meta><div class=ex-name></div><div class=ex-sub>");const Ai=e=>(()=>{var t=Ci(),n=t.firstChild,i=n.nextSibling,r=i.firstChild,a=r.firstChild,o=i.nextSibling;return Ae(r,"click",e.onAddFile,!0),f(r,h(vn,{size:16}),a),f(o,h(pe,{get each(){return e.files},children:s=>(()=>{var l=zi(),d=l.firstChild,u=d.firstChild,c=u.firstChild,p=c.nextSibling;return l.$$click=()=>e.onSetActiveFile(s.id),f(d,h(Gr,{size:14}),u),f(c,()=>s.name),f(p,()=>s.lang.toUpperCase()),f(l,h(te,{get when(){return e.files.length>1},get children(){var g=_i();return g.$$click=v=>e.onDeleteFile(s.id,v),f(g,h(ni,{size:14})),g}}),null),B(()=>ve(l,`ex-item ${e.activeFileId===s.id?"active":""}`)),l})()})),t})();ye(["click"]);const Ei={base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"637777",fontStyle:"italic"},{token:"keyword",foreground:"c792ea"},{token:"operator",foreground:"89ddff"},{token:"string",foreground:"ecc48d"},{token:"number",foreground:"f78c6c"},{token:"variable",foreground:"d6deeb"}],colors:{"editor.background":"#011627","editor.foreground":"#d6deeb","editorCursor.foreground":"#80a4c2","editor.lineHighlightBackground":"#010e17","editorLineNumber.foreground":"#4b6479","editor.selectionBackground":"#1d3b53","editorIndentGuide.background":"#4b6479"}},Ti={base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"5c6370",fontStyle:"italic"},{token:"keyword",foreground:"c678dd"},{token:"operator",foreground:"56b6c2"},{token:"string",foreground:"98c379"},{token:"number",foreground:"d19a66"},{token:"variable",foreground:"e06c75"}],colors:{"editor.background":"#282c34","editor.foreground":"#abb2bf","editorCursor.foreground":"#528bff","editor.lineHighlightBackground":"#2c313c","editorLineNumber.foreground":"#5c6370","editor.selectionBackground":"#3e4451","editorIndentGuide.background":"#3e4451"}},ji={base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6272a4",fontStyle:"italic"},{token:"keyword",foreground:"ff79c6"},{token:"operator",foreground:"ff79c6"},{token:"string",foreground:"f1fa8c"},{token:"number",foreground:"bd93f9"},{token:"variable",foreground:"f8f8f2"}],colors:{"editor.background":"#282a36","editor.foreground":"#f8f8f2","editorCursor.foreground":"#f8f8f0","editor.lineHighlightBackground":"#44475a","editorLineNumber.foreground":"#6272a4","editor.selectionBackground":"#44475a","editorIndentGuide.background":"#44475a"}},Li=[{name:"Night Owl",value:"night-owl",config:Ei},{name:"One Dark",value:"one-dark",config:Ti},{name:"Dracula",value:"dracula",config:ji}];var Fi=j(`<aside class="ca-run ca-panel"><div class=ca-panel-header>Run & Visualize</div><div class=run-body><div class=field><label>Language</label><select class=sel></select></div><div class=field><label>Editor theme</label><select class=sel></select></div><div class=field><label>Standard input</label><textarea class=ta rows=4 placeholder=stdin…></textarea></div><button type=button class="ca-btn primary viz-btn">Visualize execution</button><div class=hint>Shortcut: <span class=ca-kbd>Ctrl</span> <span class=ca-kbd>Shift</span> <span class=ca-kbd>V</span></div><div class=mini-state><div class=mini-title>State preview</div><div class=mini-row><span class=k>stack</span><span class=v>frames</span></div><div class=mini-row><span class=k>heap</span><span class=v>objects</span></div><div class=mini-row><span class=k>vars</span><span class=v>diff view</span></div></div></div><style>
                .ca-run { height: 100%; overflow: hidden; display: flex; flex-direction: column; }
                .run-body { padding: 12px; overflow: auto; display: flex; flex-direction: column; gap: 12px; }
                .field label { display: block; font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; }
                .sel, .ta {
                    width: 100%;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.10);
                    background: rgba(255,255,255,0.04);
                    color: var(--text);
                    padding: 10px 12px;
                    outline: none;
                    font-size: 13px;
                }
                .sel:focus, .ta:focus { border-color: rgba(88,166,255,0.45); box-shadow: 0 0 0 3px rgba(88,166,255,0.12); }
                .ta { resize: vertical; font-family: var(--mono); min-height: 92px; }

                .viz-btn { width: 100%; }
                .hint { color: var(--text-muted); font-size: 12px; font-weight: 650; }
                .mini-state {
                    margin-top: 6px;
                    border-radius: 14px;
                    border: 1px solid rgba(255,255,255,0.08);
                    background: rgba(255,255,255,0.03);
                    padding: 12px;
                }
                .mini-title { font-size: 11px; font-weight: 900; letter-spacing: 0.10em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px; }
                .mini-row { display: flex; justify-content: space-between; gap: 10px; font-size: 12px; padding: 6px 0; border-top: 1px solid rgba(255,255,255,0.06); }
                .mini-row:first-of-type { border-top: none; }
                .k { color: var(--text-muted); font-weight: 800; letter-spacing: 0.02em; }
                .v { color: rgba(230,237,243,0.90); font-weight: 650; }
            `),Yt=j("<option>");const Pi=e=>{const t=[{value:"java",label:"Java",ext:".java"},{value:"cpp",label:"C++",ext:".cpp"}];return(()=>{var n=Fi(),i=n.firstChild,r=i.nextSibling,a=r.firstChild,o=a.firstChild,s=o.nextSibling,l=a.nextSibling,d=l.firstChild,u=d.nextSibling,c=l.nextSibling,p=c.firstChild,g=p.nextSibling,v=c.nextSibling,x=v.firstChild;return s.addEventListener("change",b=>e.onLanguageChange(b.currentTarget.value)),f(s,h(pe,{each:t,children:b=>(()=>{var y=Yt();return f(y,()=>b.label),B(()=>y.value=b.value),y})()})),u.addEventListener("change",b=>e.onThemeChange(b.currentTarget.value)),f(u,h(pe,{each:Li,children:b=>(()=>{var y=Yt();return f(y,()=>b.name),B(()=>y.value=b.value),y})()})),g.$$input=b=>e.onStdinChange(b.currentTarget.value),Ae(v,"click",e.onVisualize,!0),f(v,h(Wr,{size:16}),x),B(()=>s.value=e.language),B(()=>u.value=e.theme),B(()=>g.value=e.stdin),n})()};ye(["input","click"]);var Mi=j("<span class=meta> <!>s"),Oi=j("<span class=cached>CACHED"),Ri=j("<span class=cursor>_"),Ni=j(`<section class="ca-console ca-panel"><div class=console-head><div class=left><span class=title>Console</span></div><div class=actions><button type=button class=icon title="Copy output"></button><button type=button class=icon title="Download output"></button></div></div><pre class=console-body></pre><style>
                .ca-console { height: 100%; overflow: hidden; display: flex; flex-direction: column; }
                .console-head {
                    height: 40px;
                    padding: 0 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid var(--border);
                    background: rgba(255,255,255,0.03);
                    color: var(--text-muted);
                    font-weight: 800;
                    font-size: 11px;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }
                .left { display: flex; align-items: center; gap: 10px; }
                .title { color: var(--text); letter-spacing: 0.06em; }
                .meta {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-weight: 700;
                    letter-spacing: 0;
                    text-transform: none;
                    color: var(--text-muted);
                    font-size: 12px;
                }
                .cached {
                    border: 1px solid rgba(126,231,135,0.35);
                    background: rgba(126,231,135,0.10);
                    color: rgba(230,237,243,0.9);
                    padding: 2px 8px;
                    border-radius: 999px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                }
                .actions { display: flex; gap: 6px; }
                .icon {
                    width: 32px; height: 32px;
                    border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.10);
                    background: rgba(255,255,255,0.04);
                    color: var(--text-muted);
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                }
                .icon:hover { background: rgba(255,255,255,0.08); color: var(--text); border-color: rgba(88,166,255,0.35); }

                .console-body {
                    flex: 1;
                    margin: 0;
                    padding: 12px;
                    overflow: auto;
                    font-family: var(--mono);
                    font-size: 12px;
                    line-height: 1.6;
                    color: rgba(230,237,243,0.92);
                    white-space: pre-wrap;
                }
                .cursor { color: var(--accent); font-weight: 900; animation: blink 1s infinite; }
                @keyframes blink { 0%,100%{opacity:0} 50%{opacity:1} }
            `);const Ii=e=>{const t=async()=>{if(e.output)try{await navigator.clipboard.writeText(e.output)}catch{}},n=()=>{if(!e.output)return;const i=new Blob([e.output],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download=`${e.fileName||"output"}.txt`,a.click(),URL.revokeObjectURL(r)};return(()=>{var i=Ni(),r=i.firstChild,a=r.firstChild,o=a.firstChild,s=a.nextSibling,l=s.firstChild,d=l.nextSibling,u=r.nextSibling;return f(a,h(ti,{size:14}),o),f(a,h(te,{get when(){return e.executionTime},get children(){var c=Mi(),p=c.firstChild,g=p.nextSibling;return g.nextSibling,f(c,h(Ur,{size:12}),p),f(c,()=>e.executionTime,g),c}}),null),f(a,h(te,{get when(){return e.cached},get children(){return Oi()}}),null),l.$$click=t,f(l,h(Kr,{size:14})),d.$$click=n,f(d,h(qr,{size:14})),f(u,h(te,{get when(){return e.executing},get fallback(){return e.output||"Run code to see output…"},get children(){return[Ri()," Running…"]}})),i})()};ye(["click"]);class Di{constructor(){this.cache=new Map,this.activeRequests=new Map,this.inFlight=new Map,this.connectionWarmed=!1,this.cacheDuration=12e3,this.warmupDelay=500,this.apiUrl="https://code-box.onrender.com/api/v1/submit"}getCacheKey(t,n,i){return`${n}:${t.length}:${t.slice(0,120).replace(/\s/g,"")}:${i||""}`}preprocessCode(t,n){if(n!=="java")return t;const i=(t||"").replace(/\r\n/g,`
`).trim();if(!i)return t;if(/public\s+class\s+Main\b/.test(i)||/class\s+Main\b/.test(i))return i;const r=i.replace(/public\s+class\s+([A-Za-z_]\w*)/m,"public class Main");return r!==i?r:i.replace(/class\s+([A-Za-z_]\w*)/m,"class Main")}getTimeoutForLang(t){return t==="java"?25e3:t==="cpp"?22e3:t==="python"?2e4:t==="javascript"?18e3:t==="c"?22e3:18e3}async warmConnection(){if(this.connectionWarmed||typeof window>"u")return;this.connectionWarmed=!0;const t=[{src:"public class Main{public static void main(String[]a){System.out.print(1);}}",lang:"java",stdin:""},{src:`#include <iostream>
int main(){std::cout<<1;return 0;}`,lang:"cpp",stdin:""},{src:"print(1)",lang:"python",stdin:""},{src:"console.log(1)",lang:"javascript",stdin:""},{src:`#include <stdio.h>
int main(){printf("1");return 0;}`,lang:"c",stdin:""}];await Promise.allSettled(t.map(n=>fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),keepalive:!0})))}async verifyJava(){return{output:"Skipped"}}async execute(t,n,i,r){const a=this.preprocessCode(t,n),o=this.getCacheKey(a,n,i),s=this.cache.get(o);if(s&&Date.now()-s.timestamp<this.cacheDuration)return r&&r(100),{output:s.result,cached:!0,executionTime:s.executionTime};if(this.inFlight.has(o))return this.inFlight.get(o);this.activeRequests.has(n)&&this.activeRequests.get(n)?.abort();const l=new AbortController;this.activeRequests.set(n,l);const u={java:"java",cpp:"cpp",python:"python",javascript:"javascript",c:"c"}[n]||n,c=performance.now(),p=(async()=>{try{r&&(r(20),setTimeout(()=>r(45),80),setTimeout(()=>r(70),250));const g=setTimeout(()=>l.abort(),this.getTimeoutForLang(n)),v=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({src:a,lang:u,stdin:i||""}),signal:l.signal});if(clearTimeout(g),!v.ok)throw new Error(`HTTP ${v.status}`);const x=await v.json(),b=x.data?.output||x.data?.error||x.output||"No output";r&&r(100);const y=((performance.now()-c)/1e3).toFixed(2);if(!b.includes("Error")&&!b.includes("timeout")&&(this.cache.set(o,{result:b,timestamp:Date.now(),executionTime:y}),this.cache.size>50)){const w=this.cache.keys().next().value;this.cache.delete(w)}return{output:b,executionTime:y,cached:!1}}catch(g){return g.name==="AbortError"?{output:`❌ Timeout after ${Math.round(this.getTimeoutForLang(n)/1e3)}s`,executionTime:"0.00",error:!0}:{output:`❌ ${g.message}`,executionTime:"0.00",error:!0}}finally{this.activeRequests.delete(n),this.inFlight.delete(o)}})();return this.inFlight.set(o,p),p}clearCache(){this.cache.clear()}}const lt=new Di;typeof window<"u"&&setTimeout(()=>lt.warmConnection(),lt.warmupDelay);class Vi{constructor(){this.PREFIX="codearena_"}get(t,n=null){try{const i=localStorage.getItem(this.PREFIX+t);return i?JSON.parse(i):n}catch(i){return console.error(`Error reading ${t} from storage:`,i),n}}set(t,n){try{localStorage.setItem(this.PREFIX+t,JSON.stringify(n))}catch(i){console.error(`Error saving ${t} to storage:`,i)}}remove(t){localStorage.removeItem(this.PREFIX+t)}getFiles(){return this.get("files",[])}saveFiles(t){this.set("files",t)}getTheme(){return this.get("theme","night-owl")}saveTheme(t){this.set("theme",t)}getFontSize(){return this.get("fontsize",16)}saveFontSize(t){this.set("fontsize",t)}saveActiveFileForVisualization(t){this.set("viz_handoff",t)}getActiveFileForVisualization(){return this.get("viz_handoff")}}const me=new Vi;var Bi=j(`<div class=ca-ide><main class=ide-grid><div class=left></div><div class="center ca-panel"><div class=center-head><div class=crumb><span class=file></span><span class=pill></span></div><div class=stats><span> lines</span><span> words</span></div></div><div class=center-editor></div><div class=center-status><div class=left><span class=chip>JAVA/C++ IDE</span><span class=muted>Theme: </span></div><div class=right><span class=muted></span><span></span></div></div></div><div class=right></div><div></div></main><style>
                .ca-ide { min-height: 100vh; display: flex; flex-direction: column; background: var(--bg); }
                .ide-grid {
                    flex: 1;
                    min-height: 0;
                    display: grid;
                    grid-template-columns: 280px 1fr 360px;
                    grid-template-rows: 1fr 240px;
                    grid-template-areas: "left center right" "left bottom right";
                    gap: 12px;
                    padding: 12px;
                }
                .left { grid-area: left; min-height: 0; }
                .center { grid-area: center; min-height: 0; overflow: hidden; display: flex; flex-direction: column; }
                .right { grid-area: right; min-height: 0; }
                .bottom { grid-area: bottom; min-height: 0; }
                .bottom.collapsed { display: none; }

                .center-head {
                    height: 46px;
                    padding: 0 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid var(--border);
                    background: rgba(255,255,255,0.03);
                }
                .crumb { display: flex; align-items: center; gap: 10px; }
                .crumb .file { font-weight: 800; color: rgba(230,237,243,0.95); letter-spacing: -0.01em; }
                .pill {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.10em;
                    padding: 3px 8px;
                    border-radius: 999px;
                    color: rgba(230,237,243,0.9);
                    border: 1px solid rgba(255,255,255,0.10);
                    background: rgba(255,255,255,0.04);
                }
                .stats { display: flex; gap: 10px; color: var(--text-muted); font-size: 12px; font-weight: 650; }
                .center-editor { flex: 1; min-height: 0; position: relative; }
                .center-status {
                    height: 32px;
                    padding: 0 12px;
                    border-top: 1px solid var(--border);
                    background: rgba(0,0,0,0.35);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 11px;
                    color: var(--text-muted);
                }
                .center-status .left, .center-status .right { display: flex; align-items: center; gap: 10px; }
                .chip {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.10em;
                    text-transform: uppercase;
                    padding: 3px 8px;
                    border-radius: 999px;
                    border: 1px solid rgba(88,166,255,0.35);
                    background: rgba(88,166,255,0.12);
                    color: rgba(230,237,243,0.95);
                }
                .muted { color: var(--text-muted); font-weight: 650; }
                .muted.cached { color: var(--accent-2); }

                @media (max-width: 1100px) {
                    .ide-grid { grid-template-columns: 240px 1fr 340px; grid-template-rows: 1fr 220px; }
                }
                @media (max-width: 920px) {
                    .ide-grid {
                        grid-template-columns: 1fr;
                        grid-template-rows: 260px 1fr 320px 240px;
                        grid-template-areas: "left" "center" "right" "bottom";
                    }
                }
            `);const $t={java:`import java.util.*;

public class Main {
  public static void main(String[] args) {
    int n = 10;
    System.out.println(fib(n));
  }

  static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }
}
`,cpp:`#include <bits/stdc++.h>
using namespace std;

int main() {
  int n = 10;
  long long a = 0, b = 1;
  for (int i = 0; i < n; i++) {
    long long c = a + b;
    a = b;
    b = c;
  }
  cout << a << "\\n";
  return 0;
}
`},Ui=[{value:"java",label:"Java",ext:".java"},{value:"cpp",label:"C++",ext:".cpp"}],Hi=()=>{const[e,t]=P(me.getFiles().length>0?me.getFiles():[{id:1,name:"Main.java",lang:"java",code:$t.java,output:"",executionTime:null}]),[n,i]=P(e()[0].id),[r,a]=P(""),[o,s]=P(!1),[l,d]=P(me.getTheme()||"night-owl"),[u,c]=P(0),[p,g]=P(!1),[v,x]=P(!0),[b,y]=P({lines:0,words:0}),w=()=>e().find(z=>z.id===n())||e()[0];Oe(()=>me.saveFiles(e())),Oe(()=>me.saveTheme(l())),Oe(()=>{const z=w()?.code||"";y({lines:z.split(`
`).length,words:z.split(/\s+/).filter(Boolean).length})}),dt(()=>{const z=_=>{const k=(_.ctrlKey||_.metaKey)&&_.key==="Enter",$=(_.ctrlKey||_.metaKey)&&_.shiftKey&&_.key.toLowerCase()==="v";k&&(_.preventDefault(),L()),$&&(_.preventDefault(),F())};window.addEventListener("keydown",z),we(()=>window.removeEventListener("keydown",z))});const L=async()=>{if(!o()){s(!0),c(10),g(!1),t(z=>z.map(_=>_.id===n()?{..._,output:`⏳ Running…
`,executionTime:null}:_));try{const z=await lt.execute(w().code,w().lang,r(),_=>c(_));t(_=>_.map(k=>k.id===n()?{...k,output:z.output,executionTime:z.executionTime}:k)),g(!!z.cached)}catch(z){t(_=>_.map(k=>k.id===n()?{...k,output:`❌ ${z.message||"Execution failed"}`}:k))}finally{s(!1),setTimeout(()=>c(0),900)}}},F=()=>{me.saveActiveFileForVisualization({code:w().code,lang:w().lang}),window.location.href="/visualize"},R=()=>{const z=Date.now(),_=w()?.lang||"java",k=_==="java"?["Main.java","Utils.java","Helper.java"]:["main.cpp","utils.cpp","helper.cpp"],$=k[Math.min(e().length,k.length-1)];t([...e(),{id:z,name:$,lang:_,code:$t[_]||"",output:"",executionTime:null}]),i(z)},I=(z,_)=>{if(_?.stopPropagation?.(),e().length<=1)return;const k=e().filter($=>$.id!==z);t(k),n()===z&&i(k[0].id)},Q=z=>{t(_=>_.map(k=>{if(k.id!==n())return k;const $=Ui.find(V=>V.value===z)?.ext||".txt",E=k.name.replace(/\.[^.]+$/,"");return{...k,lang:z,name:E+$,code:$t[z]||k.code}}))};return(()=>{var z=Bi(),_=z.firstChild,k=_.firstChild,$=k.nextSibling,E=$.firstChild,V=E.firstChild,S=V.firstChild,T=S.nextSibling,U=V.nextSibling,W=U.firstChild,ne=W.firstChild,H=W.nextSibling,re=H.firstChild,ee=E.nextSibling,Y=ee.nextSibling,oe=Y.firstChild,ke=oe.firstChild,de=ke.nextSibling;de.firstChild;var se=oe.nextSibling,ue=se.firstChild,$e=ue.nextSibling,Se=$.nextSibling,ge=Se.nextSibling;return f(z,h(Si,{get files(){return e()},get activeFileId(){return n()},onSetActiveFile:i,onAddFile:R,onDeleteFile:I,onRun:L,onVisualize:F,get executing(){return o()},get progress(){return u()},onToggleSidebar:()=>x(!v()),get sidebarOpen(){return v()}}),_),f(k,h(Ai,{get files(){return e()},get activeFileId(){return n()},onSetActiveFile:i,onAddFile:R,onDeleteFile:I})),f(S,()=>w().name),f(T,()=>w().lang.toUpperCase()),f(W,()=>b().lines,ne),f(H,()=>b().words,re),f(ee,h(wn,{get value(){return w().code},get language(){return w().lang},get theme(){return l()},fontSize:14,onCodeChange:G=>t(he=>he.map(le=>le.id===n()?{...le,code:G}:le))})),f(de,l,null),f(ue,(()=>{var G=Ft(()=>!!w().executionTime);return()=>G()?`Last run: ${w().executionTime}s`:"No runs yet"})()),f($e,()=>p()?"CACHED RESULT":""),f(Se,h(Pi,{get language(){return w().lang},get theme(){return l()},get stdin(){return r()},onLanguageChange:Q,onThemeChange:d,onStdinChange:a,onVisualize:F})),f(ge,h(Ii,{get executing(){return o()},get output(){return w().output},get executionTime(){return w().executionTime},get cached(){return p()},get fileName(){return`${w().name}-output`}})),B(G=>{var he=`muted ${p()?"cached":""}`,le=`bottom ${v()?"":"collapsed"}`;return he!==G.e&&ve($e,G.e=he),le!==G.t&&ve(ge,G.t=le),G},{e:void 0,t:void 0}),z})()};function Ki(e,t){return t==="java"||t==="cpp"?(e||"").replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/[^\n]*/g,"").split(`
`):(e||"").split(`
`)}function qi(e,t,n){const i={};if(n!=="java"&&n!=="cpp")return i;const r=n==="java"?/(?:int|long|double|float|boolean|String|char|byte|short)\s+(\w+)\s*=\s*([^;]+);|(\w+)\s*=\s*([^;]+);/g:/(?:int|long|double|float|bool|char|short)\s+(\w+)\s*=\s*([^;]+);|(\w+)\s*=\s*([^;]+);/g;for(let a=0;a<=t&&a<e.length;a++){const o=e[a].trim();let s;const l=new RegExp(r.source,r.flags);for(;(s=l.exec(o))!==null;){const d=s[1]||s[3],u=(s[2]||s[4]).trim();d&&!d.startsWith("__")&&(i[d]=u)}}return i}function Wi(e,t="java"){const n=[];for(let i=0;i<e.length;i++){const r=e[i].trim();r&&(r.startsWith("//")||r.startsWith("/*")||r.startsWith("*")||n.push(i+1))}return n.length===0&&n.push(1),n}async function Gi(e,t){const n=Ki(e,t),i=Wi(n,t),r=[];let a="",o=0;for(let s=0;s<i.length;s++){const l=i[s];if(l-1>=n.length)continue;const d=n[l-1].trim(),u=qi(n,l-1,t),c="main";if(t==="java"&&d.includes("System.out.println(")){const p=d.match(/System\.out\.println\s*\([^)]+\)/);if(p){const g=p[0].replace(/System\.out\.println\s*\(/,"").replace(/\)$/,"");a+=g.replace(/["']/g,"")+`
`}else a+=`output
`}t==="cpp"&&d.includes("cout <<")&&(a+=`output
`),r.push({step:o++,line:l,stack:[{func_name:c,locals:{...u},line:l}],heap:[],stdout:a.trim()})}return r.length===0&&r.push({step:0,line:1,stack:[{func_name:"main",locals:{},line:1}],heap:[],stdout:""}),r}class Ji{async getTrace(t,n){if(n!=="java"&&n!=="cpp")throw new Error(`Visualizer supports Java and C++ only. Got: ${n}.`);return Gi(t,n)}}const Xi=new Ji;var Yi=j("<table><tbody>"),Zi=j(`<div class="vars ca-panel"><div class=ca-panel-header>Variables</div><div class=vars-body></div><style>
                .vars { overflow: hidden; }
                .vars-body { padding: 10px 12px; overflow: auto; }
                table { width: 100%; border-collapse: separate; border-spacing: 0 6px; }
                td { font-family: var(--mono); font-size: 12px; }
                .k { width: 38%; color: var(--text-muted); font-weight: 800; text-align: right; padding-right: 10px; }
                .v { color: rgba(230,237,243,0.92); font-weight: 650; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px 10px; }
                .row-new .v { border-color: rgba(126,231,135,0.5); background: rgba(126,231,135,0.12); }
                .row-changed .v { border-color: rgba(247,129,102,0.5); background: rgba(247,129,102,0.12); }
                .empty { padding: 18px; color: var(--text-muted); font-weight: 650; font-size: 13px; }
            `),Qi=j("<div class=empty>No variables yet."),ea=j("<tr><td class=k></td><td class=v>"),ta=j("<span class=ca-brand-icon>"),na=j("<span>CodeArena"),ra=j("<span class=tag>VISUALIZER"),ia=j('<div class="err ca-panel"><div class=ca-panel-header>Trace error</div><div class=err-body>'),aa=j(`<div class=viz-shell><header class=viz-top><div class=viz-actions><button class=ca-btn>Retrace</button></div></header><main class=viz-grid><section class="code ca-panel"><div class=code-head><div class=left><span class=pill></span><span class=muted>Step <!>/</span></div><div class=right><button class=icon title=First></button><button class=icon title=Prev></button><button class="ca-btn primary play"></button><button class=icon title=Next></button><button class=icon title=Last></button></div></div><div class=code-body></div></section><aside class=side><div class="stack ca-panel"><div class=ca-panel-header>Stack</div><div class=stack-body></div></div><div class="stdout ca-panel"><div class=ca-panel-header>Stdout</div><pre class=stdout-body></pre></div></aside><section class="timeline ca-panel"><div class=timeline-row><div class=t-left><span class=muted>Timeline</span></div><div class=t-right><label class=speed><span class=muted>Speed</span><select class=sel><option value=0.5>0.5×</option><option value=1>1×</option><option value=2>2×</option><option value=4>4×</option></select></label></div></div><input class=slider type=range min=0></section></main><style>
                :global(.monaco-editor) { border-radius: 0 0 var(--radius-lg) var(--radius-lg); }
                .viz-shell { min-height: 100vh; background: var(--bg); display: flex; flex-direction: column; }
                .viz-top {
                    height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 16px;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    background: rgba(13,17,23,0.70);
                    backdrop-filter: blur(14px);
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
                .viz-brand { text-decoration: none; color: var(--text); font-weight: 800; display: flex; align-items: center; gap: 10px; }
                .tag { font-size: 10px; font-weight: 900; letter-spacing: 0.16em; color: var(--text-muted); }

                .viz-grid {
                    flex: 1;
                    min-height: 0;
                    display: grid;
                    grid-template-columns: 1fr 420px;
                    grid-template-rows: 1fr 92px;
                    grid-template-areas: "code side" "timeline side";
                    gap: 12px;
                    padding: 12px;
                }
                .code { grid-area: code; min-height: 0; overflow: hidden; display: flex; flex-direction: column; }
                .side { grid-area: side; min-height: 0; display: grid; grid-template-rows: 220px 1fr 200px; gap: 12px; }
                .timeline { grid-area: timeline; padding: 12px; display: flex; flex-direction: column; gap: 10px; }
                .err { grid-column: 1 / -1; }
                .err-body { padding: 12px; color: var(--danger); font-weight: 650; }

                .code-head {
                    height: 46px;
                    padding: 0 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid var(--border);
                    background: rgba(255,255,255,0.03);
                }
                .code-body { flex: 1; min-height: 0; position: relative; }
                .pill { font-size: 10px; font-weight: 900; letter-spacing: 0.10em; padding: 3px 8px; border-radius: 999px; color: rgba(230,237,243,0.9); border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.04); }
                .muted { color: var(--text-muted); font-weight: 700; font-size: 12px; }
                .left, .right { display: flex; align-items: center; gap: 10px; }
                .icon {
                    width: 34px; height: 34px;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.10);
                    background: rgba(255,255,255,0.04);
                    color: var(--text-muted);
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                }
                .icon:hover { color: var(--text); border-color: rgba(88,166,255,0.35); background: rgba(88,166,255,0.08); }
                .icon:disabled { opacity: 0.6; cursor: not-allowed; }
                .play { height: 34px; padding: 0 12px; border-radius: 12px; }

                .stack { overflow: hidden; display: flex; flex-direction: column; }
                .stack-body { padding: 10px 12px; overflow: auto; display: flex; flex-direction: column; gap: 8px; }
                .frame { border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); overflow: hidden; }
                .frame.top { border-color: rgba(88,166,255,0.30); background: rgba(88,166,255,0.10); }
                .frame-head { padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; }
                .fn { font-family: var(--mono); font-weight: 800; color: rgba(230,237,243,0.95); }
                .ln { font-size: 10px; font-weight: 900; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; }
                .empty { padding: 14px; color: var(--text-muted); font-weight: 650; }

                .stdout { overflow: hidden; display: flex; flex-direction: column; }
                .stdout-body { margin: 0; padding: 12px; overflow: auto; flex: 1; font-family: var(--mono); font-size: 12px; color: rgba(230,237,243,0.92); white-space: pre-wrap; line-height: 1.6; }

                .timeline-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
                .sel {
                    height: 34px;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.10);
                    background: rgba(255,255,255,0.04);
                    color: var(--text);
                    padding: 0 10px;
                    font-weight: 700;
                }
                .slider {
                    width: 100%;
                    accent-color: var(--accent);
                    height: 4px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, rgba(88,166,255,0.3), rgba(126,231,135,0.3));
                }

                @media (max-width: 1020px) {
                    .viz-grid {
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr auto auto;
                        grid-template-areas: "code" "timeline" "side";
                    }
                    .side { grid-template-rows: 200px 1fr 200px; }
                }
            `),oa=j("<div class=empty>No stack frames yet."),sa=j("<div><div class=frame-head><span class=fn></span><span class=ln>line ");function la(e){const n=(e.stack||[]).map(i=>{const r=i.func_name||i.method||"main",a=i.locals||i.variables||{};return{func_name:r,locals:a,line:e.line}});return{line:e.line||1,stdout:e.stdout||"",stack:n}}const ca=e=>{const t=()=>e.locals||{},n=()=>e.prev||{};return(()=>{var i=Zi(),r=i.firstChild,a=r.nextSibling;return f(a,h(te,{get when(){return Object.keys(t()).length>0},get fallback(){return Qi()},get children(){var o=Yi(),s=o.firstChild;return f(s,h(pe,{get each(){return Object.entries(t())},children:([l,d])=>{const u=n()[l],c=u===void 0,p=!c&&String(u)!==String(d);return(()=>{var g=ea(),v=g.firstChild,x=v.nextSibling;return ve(g,c?"row-new":p?"row-changed":""),f(v,l),f(x,()=>String(d)),g})()}})),o}})),i})()},da=()=>{const[e,t]=P(ua),[n,i]=P("java"),[r,a]=P([]),[o,s]=P(0),[l,d]=P(!1),[u,c]=P(null),[p,g]=P(!1),[v,x]=P(1);let b,y;dt(async()=>{const k=me.getActiveFileForVisualization();k&&(t(k.code),i(k.lang==="cpp"?"cpp":"java"),me.remove("viz_handoff")),await w()}),we(()=>{y&&clearInterval(y)});const w=async()=>{d(!0),c(null),g(!1),y&&clearInterval(y);try{const $=(await Xi.getTrace(e(),n())||[]).map(la);if($.length===0)throw new Error("No steps captured.");a($),s(0),setTimeout(()=>L($[0].line),50)}catch(k){c(k?.message||"Failed to trace."),a([]),s(0)}finally{d(!1)}},L=k=>{!b||!k||(b.setSelection({startLineNumber:k,startColumn:1,endLineNumber:k,endColumn:1e3}),b.revealLineInCenterIfOutsideViewport(k))},F=k=>{if(!r().length)return;const $=Math.max(0,Math.min(k,r().length-1));s($),L(r()[$].line)},R=()=>{if(!r().length)return;const k=!p();g(k),y&&clearInterval(y),k&&(y=setInterval(()=>{s($=>{const E=Math.min($+1,r().length-1);return L(r()[E].line),E===r().length-1&&(g(!1),clearInterval(y),y=null),E})},Math.max(60,520/v())))};Oe(()=>{p()&&(R(),R())});const I=()=>r()[o()],Q=()=>o()>0?r()[o()-1]:null,z=()=>I()?.stack?.[I().stack.length-1]?.locals||{},_=()=>Q()?.stack?.[Q().stack.length-1]?.locals||{};return(()=>{var k=aa(),$=k.firstChild,E=$.firstChild,V=E.firstChild,S=V.firstChild,T=$.nextSibling,U=T.firstChild,W=U.firstChild,ne=W.firstChild,H=ne.firstChild,re=H.nextSibling,ee=re.firstChild,Y=ee.nextSibling;Y.nextSibling;var oe=ne.nextSibling,ke=oe.firstChild,de=ke.nextSibling,se=de.nextSibling,ue=se.nextSibling,$e=ue.nextSibling,Se=W.nextSibling,ge=U.nextSibling,G=ge.firstChild,he=G.firstChild,le=he.nextSibling,Ge=G.nextSibling,je=Ge.firstChild,gt=je.nextSibling,De=ge.nextSibling,Je=De.firstChild,ht=Je.firstChild,bt=ht.nextSibling,Ve=bt.firstChild,mt=Ve.firstChild,Le=mt.nextSibling,Be=Je.nextSibling;return f($,h(He,{href:"/",class:"viz-brand",get children(){return[(()=>{var M=ta();return f(M,h(st,{size:16})),M})(),na(),ra()]}}),E),V.$$click=w,f(V,h(Zr,{size:16}),S),f(T,h(te,{get when(){return u()},get children(){var M=ia(),be=M.firstChild,ie=be.nextSibling;return f(ie,u),M}}),U),f(H,()=>n()==="cpp"?"C++":"JAVA"),f(re,(()=>{var M=Ft(()=>!!r().length);return()=>M()?o()+1:0})(),Y),f(re,()=>r().length,null),ke.$$click=()=>F(0),f(ke,h(Wt,{size:16})),de.$$click=()=>F(o()-1),f(de,h(Wt,{size:16})),se.$$click=R,f(se,h(te,{get when(){return p()},get fallback(){return h(ot,{size:16})},get children(){return h(Yr,{size:16})}}),null),f(se,()=>p()?"Pause":"Play",null),ue.$$click=()=>F(o()+1),f(ue,h(Gt,{size:16})),$e.$$click=()=>F(r().length-1),f($e,h(Gt,{size:16})),f(Se,h(wn,{get value(){return e()},get language(){return n()},theme:"vs-dark",options:{readOnly:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1},onEditorReady:M=>{b=M,r().length&&L(r()[o()].line)}})),f(le,h(te,{get when(){return I()?.stack?.length},get fallback(){return oa()},get children(){return h(pe,{get each(){return[...I()?.stack||[]].slice().reverse()},children:(M,be)=>(()=>{var ie=sa(),Fe=ie.firstChild,Ce=Fe.firstChild,_e=Ce.nextSibling;return _e.firstChild,f(Ce,()=>M.func_name),f(_e,()=>M.line,null),B(()=>ve(ie,`frame ${be()===0?"top":""}`)),ie})()})}})),f(ge,h(ca,{get locals(){return z()},get prev(){return _()}}),Ge),f(gt,()=>I()?.stdout||" "),Le.addEventListener("change",M=>x(parseFloat(M.currentTarget.value))),Be.$$input=M=>F(parseInt(M.currentTarget.value)),B(M=>{var be=l(),ie=o()===0,Fe=l()||!r().length,Ce=o()>=r().length-1,_e=Math.max(0,r().length-1);return be!==M.e&&(V.disabled=M.e=be),ie!==M.t&&(de.disabled=M.t=ie),Fe!==M.a&&(se.disabled=M.a=Fe),Ce!==M.o&&(ue.disabled=M.o=Ce),_e!==M.i&&at(Be,"max",M.i=_e),M},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),B(()=>Le.value=String(v())),B(()=>Be.value=o()),k})()},ua=`public class Main {
  public static void main(String[] args) {
    int a = 1;
    int b = 2;
    int c = a + b;
    System.out.println(c);
  }
}
`;ye(["click","input"]);const fa=()=>(dt(()=>{lt.warmConnection().catch(()=>{})}),h(Rr,{get children(){return[h(kt,{path:"/",component:ui}),h(kt,{path:"/editor",component:Hi}),h(kt,{path:"/visualize",component:da})]}})),pa=document.getElementById("root");Zn(()=>h(fa,{}),pa);export{gi as _,Oe as a,we as b,Li as c,dt as o,j as t,ir as u};
