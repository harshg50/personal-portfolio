"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{7401:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...a,width:n,height:n,stroke:t,strokeWidth:s?24*Number(i)/Number(n):i,className:l("lucide",c),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),s=(e,r)=>{let t=(0,o.forwardRef)((t,a)=>{let{className:s,...c}=t;return(0,o.createElement)(i,{ref:a,iconNode:r,className:l("lucide-".concat(n(e)),s),...c})});return t.displayName="".concat(e),t}},2060:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])},4857:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},5686:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},8068:(e,r,t)=>{t.d(r,{s:()=>a,t:()=>l});var o=t(2115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}function a(...e){return o.useCallback(l(...e),e)}},2317:(e,r,t)=>{t.d(r,{DX:()=>a});var o=t(2115),n=t(8068),l=t(5155),a=o.forwardRef((e,r)=>{let{children:t,...n}=e,a=o.Children.toArray(t),s=a.find(c);if(s){let e=s.props.children,t=a.map(r=>r!==s?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(i,{...n,ref:r,children:t})});a.displayName="Slot";var i=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t),a=function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props);return t.type!==o.Fragment&&(a.ref=r?(0,n.t)(r,e):e),o.cloneElement(t,a)}return o.Children.count(t)>1?o.Children.only(null):null});i.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return o.isValidElement(e)&&e.type===s}},8914:(e,r,t)=>{t.d(r,{UC:()=>er,B8:()=>Y,bL:()=>J,l9:()=>ee});var o=t(2115),n=t.t(o,2);function l(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}var a=t(5155);function i(e,r=[]){let t=[],n=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return n.scopeName=e,[function(r,n){let l=o.createContext(n),i=t.length;t=[...t,n];let s=r=>{let{scope:t,children:n,...s}=r,c=t?.[e]?.[i]||l,d=o.useMemo(()=>s,Object.values(s));return(0,a.jsx)(c.Provider,{value:d,children:n})};return s.displayName=r+"Provider",[s,function(t,a){let s=a?.[e]?.[i]||l,c=o.useContext(s);if(c)return c;if(void 0!==n)return n;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(n,...r)]}var s=t(8068),c=t(2317),d=globalThis?.document?o.useLayoutEffect:()=>{},u=n["useId".toString()]||(()=>void 0),p=0;function f(e){let[r,t]=o.useState(u());return d(()=>{e||t(e=>e??String(p++))},[e]),e||(r?`radix-${r}`:"")}t(7650);var m=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,l=o?c.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(l,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function b(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}function g({prop:e,defaultProp:r,onChange:t=()=>{}}){let[n,l]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[n]=t,l=o.useRef(n),a=b(r);return o.useEffect(()=>{l.current!==n&&(a(n),l.current=n)},[n,l,a]),t}({defaultProp:r,onChange:t}),a=void 0!==e,i=a?e:n,s=b(t);return[i,o.useCallback(r=>{if(a){let t="function"==typeof r?r(e):r;t!==e&&s(t)}else l(r)},[a,e,l,s])]}var v=o.createContext(void 0);function h(e){let r=o.useContext(v);return e||r||"ltr"}var y="rovingFocusGroup.onEntryFocus",w={bubbles:!1,cancelable:!0},x="RovingFocusGroup",[k,N,j]=function(e){let r=e+"CollectionProvider",[t,n]=i(r),[l,d]=t(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:t}=e,n=o.useRef(null),i=o.useRef(new Map).current;return(0,a.jsx)(l,{scope:r,itemMap:i,collectionRef:n,children:t})};u.displayName=r;let p=e+"CollectionSlot",f=o.forwardRef((e,r)=>{let{scope:t,children:o}=e,n=d(p,t),l=(0,s.s)(r,n.collectionRef);return(0,a.jsx)(c.DX,{ref:l,children:o})});f.displayName=p;let m=e+"CollectionItemSlot",b="data-radix-collection-item",g=o.forwardRef((e,r)=>{let{scope:t,children:n,...l}=e,i=o.useRef(null),u=(0,s.s)(r,i),p=d(m,t);return o.useEffect(()=>(p.itemMap.set(i,{ref:i,...l}),()=>void p.itemMap.delete(i))),(0,a.jsx)(c.DX,{[b]:"",ref:u,children:n})});return g.displayName=m,[{Provider:u,Slot:f,ItemSlot:g},function(r){let t=d(e+"CollectionConsumer",r);return o.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(b,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},n]}(x),[C,R]=i(x,[j]),[M,z]=C(x),A=o.forwardRef((e,r)=>(0,a.jsx)(k.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(k.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(E,{...e,ref:r})})}));A.displayName=x;var E=o.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,orientation:n,loop:i=!1,dir:c,currentTabStopId:d,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:p,onEntryFocus:f,preventScrollOnEntryFocus:v=!1,...x}=e,k=o.useRef(null),j=(0,s.s)(r,k),C=h(c),[R=null,z]=g({prop:d,defaultProp:u,onChange:p}),[A,E]=o.useState(!1),S=b(f),I=N(t),T=o.useRef(!1),[P,D]=o.useState(0);return o.useEffect(()=>{let e=k.current;if(e)return e.addEventListener(y,S),()=>e.removeEventListener(y,S)},[S]),(0,a.jsx)(M,{scope:t,orientation:n,dir:C,loop:i,currentTabStopId:R,onItemFocus:o.useCallback(e=>z(e),[z]),onItemShiftTab:o.useCallback(()=>E(!0),[]),onFocusableItemAdd:o.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:o.useCallback(()=>D(e=>e-1),[]),children:(0,a.jsx)(m.div,{tabIndex:A||0===P?-1:0,"data-orientation":n,...x,ref:j,style:{outline:"none",...e.style},onMouseDown:l(e.onMouseDown,()=>{T.current=!0}),onFocus:l(e.onFocus,e=>{let r=!T.current;if(e.target===e.currentTarget&&r&&!A){let r=new CustomEvent(y,w);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=I().filter(e=>e.focusable);O([e.find(e=>e.active),e.find(e=>e.id===R),...e].filter(Boolean).map(e=>e.ref.current),v)}}T.current=!1}),onBlur:l(e.onBlur,()=>E(!1))})})}),S="RovingFocusGroupItem",I=o.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,focusable:n=!0,active:i=!1,tabStopId:s,...c}=e,d=f(),u=s||d,p=z(S,t),b=p.currentTabStopId===u,g=N(t),{onFocusableItemAdd:v,onFocusableItemRemove:h}=p;return o.useEffect(()=>{if(n)return v(),()=>h()},[n,v,h]),(0,a.jsx)(k.ItemSlot,{scope:t,id:u,focusable:n,active:i,children:(0,a.jsx)(m.span,{tabIndex:b?0:-1,"data-orientation":p.orientation,...c,ref:r,onMouseDown:l(e.onMouseDown,e=>{n?p.onItemFocus(u):e.preventDefault()}),onFocus:l(e.onFocus,()=>p.onItemFocus(u)),onKeyDown:l(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,t){var o;let n=(o=e.key,"rtl"!==t?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(n))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(n)))return T[n]}(e,p.orientation,p.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let t=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===r)t.reverse();else if("prev"===r||"next"===r){"prev"===r&&t.reverse();let o=t.indexOf(e.currentTarget);t=p.loop?function(e,r){return e.map((t,o)=>e[(r+o)%e.length])}(t,o+1):t.slice(o+1)}setTimeout(()=>O(t))}})})})});I.displayName=S;var T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function O(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.activeElement;for(let o of e)if(o===t||(o.focus({preventScroll:r}),document.activeElement!==t))return}var P=e=>{let{present:r,children:t}=e,n=function(e){var r,t;let[n,l]=o.useState(),a=o.useRef({}),i=o.useRef(e),s=o.useRef("none"),[c,u]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,r)=>{let o=t[e][r];return null!=o?o:e},r));return o.useEffect(()=>{let e=D(a.current);s.current="mounted"===c?e:"none"},[c]),d(()=>{let r=a.current,t=i.current;if(t!==e){let o=s.current,n=D(r);e?u("MOUNT"):"none"===n||(null==r?void 0:r.display)==="none"?u("UNMOUNT"):t&&o!==n?u("ANIMATION_OUT"):u("UNMOUNT"),i.current=e}},[e,u]),d(()=>{if(n){var e;let r;let t=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=D(a.current).includes(e.animationName);if(e.target===n&&o&&(u("ANIMATION_END"),!i.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",r=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},l=e=>{e.target===n&&(s.current=D(a.current))};return n.addEventListener("animationstart",l),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=>{t.clearTimeout(r),n.removeEventListener("animationstart",l),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)}}u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:o.useCallback(e=>{e&&(a.current=getComputedStyle(e)),l(e)},[])}}(r),l="function"==typeof t?t({present:n.isPresent}):o.Children.only(t),a=(0,s.s)(n.ref,function(e){var r,t;let o=null===(r=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===r?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(n=(o=null===(t=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in o&&o.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof t||n.isPresent?o.cloneElement(l,{ref:a}):null};function D(e){return(null==e?void 0:e.animationName)||"none"}P.displayName="Presence";var F="Tabs",[_,$]=i(F,[R]),L=R(),[G,U]=_(F),W=o.forwardRef((e,r)=>{let{__scopeTabs:t,value:o,onValueChange:n,defaultValue:l,orientation:i="horizontal",dir:s,activationMode:c="automatic",...d}=e,u=h(s),[p,b]=g({prop:o,onChange:n,defaultProp:l});return(0,a.jsx)(G,{scope:t,baseId:f(),value:p,onValueChange:b,orientation:i,dir:u,activationMode:c,children:(0,a.jsx)(m.div,{dir:u,"data-orientation":i,...d,ref:r})})});W.displayName=F;var V="TabsList",K=o.forwardRef((e,r)=>{let{__scopeTabs:t,loop:o=!0,...n}=e,l=U(V,t),i=L(t);return(0,a.jsx)(A,{asChild:!0,...i,orientation:l.orientation,dir:l.dir,loop:o,children:(0,a.jsx)(m.div,{role:"tablist","aria-orientation":l.orientation,...n,ref:r})})});K.displayName=V;var B="TabsTrigger",q=o.forwardRef((e,r)=>{let{__scopeTabs:t,value:o,disabled:n=!1,...i}=e,s=U(B,t),c=L(t),d=Z(s.baseId,o),u=Q(s.baseId,o),p=o===s.value;return(0,a.jsx)(I,{asChild:!0,...c,focusable:!n,active:p,children:(0,a.jsx)(m.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":u,"data-state":p?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:d,...i,ref:r,onMouseDown:l(e.onMouseDown,e=>{n||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(o)}),onKeyDown:l(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(o)}),onFocus:l(e.onFocus,()=>{let e="manual"!==s.activationMode;p||n||!e||s.onValueChange(o)})})})});q.displayName=B;var X="TabsContent",H=o.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,forceMount:l,children:i,...s}=e,c=U(X,t),d=Z(c.baseId,n),u=Q(c.baseId,n),p=n===c.value,f=o.useRef(p);return o.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.jsx)(P,{present:l||p,children:t=>{let{present:o}=t;return(0,a.jsx)(m.div,{"data-state":p?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!o,id:u,tabIndex:0,...s,ref:r,style:{...e.style,animationDuration:f.current?"0s":void 0},children:o&&i})}})});function Z(e,r){return"".concat(e,"-trigger-").concat(r)}function Q(e,r){return"".concat(e,"-content-").concat(r)}H.displayName=X;var J=W,Y=K,ee=q,er=H},1027:(e,r,t)=>{t.d(r,{F:()=>a});var o=t(3463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,a=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:a,defaultVariants:i}=r,s=Object.keys(a).map(e=>{let r=null==t?void 0:t[e],o=null==i?void 0:i[e];if(null===r)return null;let l=n(r)||n(o);return a[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return l(e,s,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...c}[r]):({...i,...c})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},3463:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},9795:(e,r,t)=>{t.d(r,{QP:()=>H});let o=e=>{let r=i(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||a(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let a=e.join("-");return r.validators.find(({validator:e})=>e(a))?.classGroupId},l=/^\[(.+)\]$/,a=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},i=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{s(t,o,e,r)}),o},s=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e){if(d(e)){s(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{s(n,c(r,e),t,o)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,a=e=>{let t;let a=[],i=0,s=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===i){if(d===n&&(o||e.slice(c,c+l)===r)){a.push(e.slice(s,c)),s=c+l;continue}if("/"===d){t=c;continue}}"["===d?i++:"]"===d&&i--}let c=0===a.length?e:e.substring(s),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:a,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:t&&t>s?t-s:void 0}};return t?e=>t({className:e,parseClassName:a}):a},m=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},b=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,v=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],a=e.trim().split(g),i="";for(let e=a.length-1;e>=0;e-=1){let r=a[e],{modifiers:s,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?d.substring(0,u):d);if(!f){if(!p||!(f=o(d))){i=r+(i.length>0?" "+i:i);continue}p=!1}let b=m(s).join(":"),g=c?b+"!":b,v=g+f;if(l.includes(v))continue;l.push(v);let h=n(f,p);for(let e=0;e<h.length;++e){let r=h[e];l.push(g+r)}i=r+(i.length>0?" "+i:i)}return i};function h(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,N=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,R=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,M=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,z=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>S(e)||N.has(e)||k.test(e),E=e=>V(e,"length",K),S=e=>!!e&&!Number.isNaN(Number(e)),I=e=>V(e,"number",S),T=e=>!!e&&Number.isInteger(Number(e)),O=e=>e.endsWith("%")&&S(e.slice(0,-1)),P=e=>x.test(e),D=e=>j.test(e),F=new Set(["length","size","percentage"]),_=e=>V(e,F,B),$=e=>V(e,"position",B),L=new Set(["image","url"]),G=e=>V(e,L,X),U=e=>V(e,"",q),W=()=>!0,V=(e,r,t)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},K=e=>C.test(e)&&!R.test(e),B=()=>!1,q=e=>M.test(e),X=e=>z.test(e);Symbol.toStringTag;let H=function(e,...r){let t,o,n;let l=function(i){return o=(t=b(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=a,a(i)};function a(e){let r=o(e);if(r)return r;let l=v(e,t);return n(e,l),l}return function(){return l(h.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),a=w("borderSpacing"),i=w("borderWidth"),s=w("contrast"),c=w("grayscale"),d=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),m=w("gradientColorStopPositions"),b=w("inset"),g=w("margin"),v=w("opacity"),h=w("padding"),y=w("saturate"),x=w("scale"),k=w("sepia"),N=w("skew"),j=w("space"),C=w("translate"),R=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",P,r],F=()=>[P,r],L=()=>["",A,E],V=()=>["auto",S,P],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],X=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",P],Z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[S,P];return{cacheSize:500,separator:":",theme:{colors:[W],spacing:[A,E],blur:["none","",D,P],brightness:Q(),borderColor:[e],borderRadius:["none","","full",D,P],borderSpacing:F(),borderWidth:L(),contrast:Q(),grayscale:H(),hueRotate:Q(),invert:H(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[O,E],inset:z(),margin:z(),opacity:Q(),padding:F(),saturate:Q(),scale:Q(),sepia:H(),skew:Q(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",P]}],container:["container"],columns:[{columns:[D]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),P]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",T,P]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",P]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",T,P]}],"grid-cols":[{"grid-cols":[W]}],"col-start-end":[{col:["auto",{span:["full",T,P]},P]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[W]}],"row-start-end":[{row:["auto",{span:[T,P]},P]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",P]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",P]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...X()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...X(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...X(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",P,r]}],"min-w":[{"min-w":[P,r,"min","max","fit"]}],"max-w":[{"max-w":[P,r,"none","full","min","max","fit","prose",{screen:[D]},D]}],h:[{h:[P,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[P,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[P,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[P,r,"auto","min","max","fit"]}],"font-size":[{text:["base",D,E]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[W]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",P]}],"line-clamp":[{"line-clamp":["none",S,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,P]}],"list-image":[{"list-image":["none",P]}],"list-style-type":[{list:["none","disc","decimal",P]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,E]}],"underline-offset":[{"underline-offset":["auto",A,P]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",P]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",P]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),$]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:B()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[A,P]}],"outline-w":[{outline:[A,E]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:L()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[A,E]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",D,U]}],"shadow-color":[{shadow:[W]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",D,P]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",P]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",P]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",P]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[T,P]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",P]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",P]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",P]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,E,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);