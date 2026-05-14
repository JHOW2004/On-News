import{r as u,a as $s,R as Ls}from"./react-wGySg1uH.js";import{_ as $e,C as Le,r as Ee,S as Fs,a as Us,F as Zt,g as be,b as Xe,c as Ws,d as ea,i as ir,p as qs,u as Bs,e as Hs,E as ta,o as aa,L as zs,f as Vs,h as or,v as cr,j as _a,k as Ys,l as lr,m as Pt,n as Ks,q as Gs,s as Xs,t as Qs,w as K,x as F,y as Js,z as Zs,A as Ie,B as en,D as zt,G as Vt,H as tn,I as $,J as ae,K as C,M as E,N as tt,O as Fe,P as ra,Q as dr,R as fe,T as ur,U as pt,V as an}from"./firebase-W_O5dJXb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var mr={exports:{}},Nt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rn=u,sn=Symbol.for("react.element"),nn=Symbol.for("react.fragment"),on=Object.prototype.hasOwnProperty,cn=rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ln={key:!0,ref:!0,__self:!0,__source:!0};function hr(e,t,a){var r,n={},i=null,o=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)on.call(t,r)&&!ln.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:sn,type:e,key:i,ref:o,props:n,_owner:cn.current}}Nt.Fragment=nn;Nt.jsx=hr;Nt.jsxs=hr;mr.exports=Nt;var s=mr.exports,fr,Ca=$s;fr=Ca.createRoot,Ca.hydrateRoot;var gt={},dn=()=>{window.va||(window.va=function(...t){window.vaq||(window.vaq=[]),window.vaq.push(t)})},un="@vercel/analytics",mn="2.0.1";function pr(){return typeof window<"u"}function gr(){try{const e="production"}catch{}return"production"}function hn(e="auto"){if(e==="auto"){window.vam=gr();return}window.vam=e}function fn(){return(pr()?window.vam:gr())||"production"}function sa(){return fn()==="development"}function pn(e){return e.scriptSrc?Ye(e.scriptSrc):sa()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?Ye(`${e.basePath}/insights/script.js`):"/_vercel/insights/script.js"}function gn(e,t){var a;let r=e;if(t)try{r={...(a=JSON.parse(t))==null?void 0:a.analytics,...e}}catch{}hn(r.mode);const n={sdkn:un+(r.framework?`/${r.framework}`:""),sdkv:mn};return r.disableAutoTrack&&(n.disableAutoTrack="1"),r.viewEndpoint&&(n.viewEndpoint=Ye(r.viewEndpoint)),r.eventEndpoint&&(n.eventEndpoint=Ye(r.eventEndpoint)),r.sessionEndpoint&&(n.sessionEndpoint=Ye(r.sessionEndpoint)),sa()&&r.debug===!1&&(n.debug="false"),r.dsn&&(n.dsn=r.dsn),r.endpoint?n.endpoint=r.endpoint:r.basePath&&(n.endpoint=Ye(`${r.basePath}/insights`)),{beforeSend:r.beforeSend,src:pn(r),dataset:n}}function Ye(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function xn(e={debug:!0},t){var a;if(!pr())return;const{beforeSend:r,src:n,dataset:i}=gn(e,t);if(dn(),r&&((a=window.va)==null||a.call(window,"beforeSend",r)),document.head.querySelector(`script[src*="${n}"]`))return;const o=document.createElement("script");o.src=n;for(const[c,l]of Object.entries(i))o.dataset[c]=l;o.defer=!0,o.onerror=()=>{const c=sa()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${c}`)},document.head.appendChild(o)}function yn({route:e,path:t}){var a;(a=window.va)==null||a.call(window,"pageview",{route:e,path:t})}function bn(){if(!(typeof process>"u"||typeof gt>"u"))return gt.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function wn(){if(!(typeof process>"u"||typeof gt>"u"))return gt.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function kn(e){return u.useEffect(()=>{var t;e.beforeSend&&((t=window.va)==null||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),u.useEffect(()=>{xn({framework:e.framework||"react",basePath:e.basePath??bn(),...e.route!==void 0&&{disableAutoTrack:!0},...e},e.configString??wn())},[]),u.useEffect(()=>{e.route&&e.path&&yn({route:e.route,path:e.path})},[e.route,e.path]),null}const vn="modulepreload",Nn=function(e){return"/"+e},Ia={},xr=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(a.map(l=>{if(l=Nn(l),l in Ia)return;Ia[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":vn,d||(h.as="script"),h.crossOrigin="",h.href=l,c&&h.setAttribute("nonce",c),document.head.appendChild(h),d)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};let jn={data:""},Sn=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||jn},Tn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,An=/\/\*[^]*?\*\/|  +/g,Ea=/\n+/g,_e=(e,t)=>{let a="",r="",n="";for(let i in e){let o=e[i];i[0]=="@"?i[1]=="i"?a=i+" "+o+";":r+=i[1]=="f"?_e(o,i):i+"{"+_e(o,i[1]=="k"?"":t)+"}":typeof o=="object"?r+=_e(o,t?t.replace(/([^,])+/g,c=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=_e.p?_e.p(i,o):i+":"+o+";")}return a+(t&&n?t+"{"+n+"}":n)+r},ke={},yr=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+yr(e[a]);return t}return e},_n=(e,t,a,r,n)=>{let i=yr(e),o=ke[i]||(ke[i]=(l=>{let d=0,m=11;for(;d<l.length;)m=101*m+l.charCodeAt(d++)>>>0;return"go"+m})(i));if(!ke[o]){let l=i!==e?e:(d=>{let m,h,f=[{}];for(;m=Tn.exec(d.replace(An,""));)m[4]?f.shift():m[3]?(h=m[3].replace(Ea," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][m[1]]=m[2].replace(Ea," ").trim();return f[0]})(e);ke[o]=_e(n?{["@keyframes "+o]:l}:l,a?"":"."+o)}let c=a&&ke.g?ke.g:null;return a&&(ke.g=ke[o]),((l,d,m,h)=>{h?d.data=d.data.replace(h,l):d.data.indexOf(l)===-1&&(d.data=m?l+d.data:d.data+l)})(ke[o],t,r,c),o},Cn=(e,t,a)=>e.reduce((r,n,i)=>{let o=t[i];if(o&&o.call){let c=o(a),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;o=l?"."+l:c&&typeof c=="object"?c.props?"":_e(c,""):c===!1?"":c}return r+n+(o??"")},"");function jt(e){let t=this||{},a=e.call?e(t.p):e;return _n(a.unshift?a.raw?Cn(a,[].slice.call(arguments,1),t.p):a.reduce((r,n)=>Object.assign(r,n&&n.call?n(t.p):n),{}):a,Sn(t.target),t.g,t.o,t.k)}let br,Yt,Kt;jt.bind({g:1});let je=jt.bind({k:1});function In(e,t,a,r){_e.p=t,br=e,Yt=a,Kt=r}function Pe(e,t){let a=this||{};return function(){let r=arguments;function n(i,o){let c=Object.assign({},i),l=c.className||n.className;a.p=Object.assign({theme:Yt&&Yt()},c),a.o=/ *go\d+/.test(l),c.className=jt.apply(a,r)+(l?" "+l:"");let d=e;return e[0]&&(d=c.as||e,delete c.as),Kt&&d[0]&&Kt(c),br(d,c)}return n}}var En=e=>typeof e=="function",xt=(e,t)=>En(e)?e(t):e,Dn=(()=>{let e=0;return()=>(++e).toString()})(),wr=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Pn=20,na="default",kr=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return kr(e,{type:e.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(o=>o.id===n||n===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},ht=[],vr={toasts:[],pausedAt:void 0,settings:{toastLimit:Pn}},xe={},Nr=(e,t=na)=>{xe[t]=kr(xe[t]||vr,e),ht.forEach(([a,r])=>{a===t&&r(xe[t])})},jr=e=>Object.keys(xe).forEach(t=>Nr(e,t)),Mn=e=>Object.keys(xe).find(t=>xe[t].toasts.some(a=>a.id===e)),St=(e=na)=>t=>{Nr(t,e)},On={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Rn=(e={},t=na)=>{let[a,r]=u.useState(xe[t]||vr),n=u.useRef(xe[t]);u.useEffect(()=>(n.current!==xe[t]&&r(xe[t]),ht.push([t,r]),()=>{let o=ht.findIndex(([c])=>c===t);o>-1&&ht.splice(o,1)}),[t]);let i=a.toasts.map(o=>{var c,l,d;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((c=e[o.type])==null?void 0:c.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((l=e[o.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||On[o.type],style:{...e.style,...(d=e[o.type])==null?void 0:d.style,...o.style}}});return{...a,toasts:i}},$n=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||Dn()}),nt=e=>(t,a)=>{let r=$n(t,e,a);return St(r.toasterId||Mn(r.id))({type:2,toast:r}),r.id},H=(e,t)=>nt("blank")(e,t);H.error=nt("error");H.success=nt("success");H.loading=nt("loading");H.custom=nt("custom");H.dismiss=(e,t)=>{let a={type:3,toastId:e};t?St(t)(a):jr(a)};H.dismissAll=e=>H.dismiss(void 0,e);H.remove=(e,t)=>{let a={type:4,toastId:e};t?St(t)(a):jr(a)};H.removeAll=e=>H.remove(void 0,e);H.promise=(e,t,a)=>{let r=H.loading(t.loading,{...a,...a==null?void 0:a.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let i=t.success?xt(t.success,n):void 0;return i?H.success(i,{id:r,...a,...a==null?void 0:a.success}):H.dismiss(r),n}).catch(n=>{let i=t.error?xt(t.error,n):void 0;i?H.error(i,{id:r,...a,...a==null?void 0:a.error}):H.dismiss(r)}),e};var Ln=1e3,Fn=(e,t="default")=>{let{toasts:a,pausedAt:r}=Rn(e,t),n=u.useRef(new Map).current,i=u.useCallback((h,f=Ln)=>{if(n.has(h))return;let g=setTimeout(()=>{n.delete(h),o({type:4,toastId:h})},f);n.set(h,g)},[]);u.useEffect(()=>{if(r)return;let h=Date.now(),f=a.map(g=>{if(g.duration===1/0)return;let p=(g.duration||0)+g.pauseDuration-(h-g.createdAt);if(p<0){g.visible&&H.dismiss(g.id);return}return setTimeout(()=>H.dismiss(g.id,t),p)});return()=>{f.forEach(g=>g&&clearTimeout(g))}},[a,r,t]);let o=u.useCallback(St(t),[t]),c=u.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=u.useCallback((h,f)=>{o({type:1,toast:{id:h,height:f}})},[o]),d=u.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),m=u.useCallback((h,f)=>{let{reverseOrder:g=!1,gutter:p=8,defaultPosition:k}=f||{},w=a.filter(y=>(y.position||k)===(h.position||k)&&y.height),b=w.findIndex(y=>y.id===h.id),x=w.filter((y,v)=>v<b&&y.visible).length;return w.filter(y=>y.visible).slice(...g?[x+1]:[0,x]).reduce((y,v)=>y+(v.height||0)+p,0)},[a]);return u.useEffect(()=>{a.forEach(h=>{if(h.dismissed)i(h.id,h.removeDelay);else{let f=n.get(h.id);f&&(clearTimeout(f),n.delete(h.id))}})},[a,i]),{toasts:a,handlers:{updateHeight:l,startPause:c,endPause:d,calculateOffset:m}}},Un=je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Wn=je`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qn=je`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Bn=Pe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Un} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Wn} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${qn} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Hn=je`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,zn=Pe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Hn} 1s linear infinite;
`,Vn=je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Yn=je`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Kn=Pe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Vn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Yn} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Gn=Pe("div")`
  position: absolute;
`,Xn=Pe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Qn=je`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Jn=Pe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Qn} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Zn=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return t!==void 0?typeof t=="string"?u.createElement(Jn,null,t):t:a==="blank"?null:u.createElement(Xn,null,u.createElement(zn,{...r}),a!=="loading"&&u.createElement(Gn,null,a==="error"?u.createElement(Bn,{...r}):u.createElement(Kn,{...r})))},ei=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ti=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ai="0%{opacity:0;} 100%{opacity:1;}",ri="0%{opacity:1;} 100%{opacity:0;}",si=Pe("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ni=Pe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ii=(e,t)=>{let a=e.includes("top")?1:-1,[r,n]=wr()?[ai,ri]:[ei(a),ti(a)];return{animation:t?`${je(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${je(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},oi=u.memo(({toast:e,position:t,style:a,children:r})=>{let n=e.height?ii(e.position||t||"top-center",e.visible):{opacity:0},i=u.createElement(Zn,{toast:e}),o=u.createElement(ni,{...e.ariaProps},xt(e.message,e));return u.createElement(si,{className:e.className,style:{...n,...a,...e.style}},typeof r=="function"?r({icon:i,message:o}):u.createElement(u.Fragment,null,i,o))});In(u.createElement);var ci=({id:e,className:t,style:a,onHeightUpdate:r,children:n})=>{let i=u.useCallback(o=>{if(o){let c=()=>{let l=o.getBoundingClientRect().height;r(e,l)};c(),new MutationObserver(c).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return u.createElement("div",{ref:i,className:t,style:a},n)},li=(e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:wr()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...n}},di=jt`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,lt=16,ui=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:n,toasterId:i,containerStyle:o,containerClassName:c})=>{let{toasts:l,handlers:d}=Fn(a,i);return u.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:lt,left:lt,right:lt,bottom:lt,pointerEvents:"none",...o},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(m=>{let h=m.position||t,f=d.calculateOffset(m,{reverseOrder:e,gutter:r,defaultPosition:t}),g=li(h,f);return u.createElement(ci,{id:m.id,key:m.id,onHeightUpdate:d.updateHeight,className:m.visible?di:"",style:g},m.type==="custom"?xt(m.message,m):n?n(m):u.createElement(oi,{toast:m,position:h}))}))},I=H;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),A=(e,t)=>{const a=u.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:l,...d},m)=>u.createElement("svg",{ref:m,...mi,width:n,height:n,stroke:r,strokeWidth:o?Number(i)*24/Number(n):i,className:["lucide",`lucide-${hi(e)}`,c].join(" "),...d},[...t.map(([h,f])=>u.createElement(h,f)),...Array.isArray(l)?l:[l]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=A("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=A("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=A("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=A("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=A("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=A("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=A("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=A("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=A("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=A("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=A("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=A("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=A("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=A("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=A("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=A("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=A("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=A("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=A("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=A("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=A("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=A("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=A("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=A("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=A("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=A("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=A("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=A("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=A("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=A("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=A("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=A("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=A("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=A("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=A("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=A("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=A("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="firebasestorage.googleapis.com",Cr="storageBucket",Oi=2*60*1e3,Ri=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q extends Zt{constructor(t,a,r=0){super(Ot(t),`Firebase Storage: ${a} (${Ot(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,q.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ot(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var W;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(W||(W={}));function Ot(e){return"storage/"+e}function la(){const e="An unknown error occurred, please check the error payload for server response.";return new q(W.UNKNOWN,e)}function $i(e){return new q(W.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Li(e){return new q(W.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fi(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new q(W.UNAUTHENTICATED,e)}function Ui(){return new q(W.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wi(e){return new q(W.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function qi(){return new q(W.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bi(){return new q(W.CANCELED,"User canceled the upload/download.")}function Hi(e){return new q(W.INVALID_URL,"Invalid URL '"+e+"'.")}function zi(e){return new q(W.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Vi(){return new q(W.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Cr+"' property when initializing the app?")}function Yi(){return new q(W.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ki(){return new q(W.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gi(e){return new q(W.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qt(e){return new q(W.INVALID_ARGUMENT,e)}function Ir(){return new q(W.APP_DELETED,"The Firebase app was deleted.")}function Xi(e){return new q(W.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ze(e,t){return new q(W.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Je(e){throw new q(W.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,a){this.bucket=t,this.path_=a}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,a){let r;try{r=te.makeFromUrl(t,a)}catch{return new te(t,"")}if(r.path==="")return r;throw zi(t)}static makeFromUrl(t,a){let r=null;const n="([A-Za-z0-9.\\-_]+)";function i(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+n+o,"i"),l={bucket:1,path:3};function d(v){v.path_=decodeURIComponent(v.path)}const m="v[A-Za-z0-9_]+",h=a.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${m}/b/${n}/o${f}`,"i"),p={bucket:1,path:3},k=a===_r?"(?:storage.googleapis.com|storage.cloud.google.com)":a,w="([^?#]*)",b=new RegExp(`^https?://${k}/${n}/${w}`,"i"),y=[{regex:c,indices:l,postModify:i},{regex:g,indices:p,postModify:d},{regex:b,indices:{bucket:1,path:2},postModify:d}];for(let v=0;v<y.length;v++){const T=y[v],N=T.regex.exec(t);if(N){const L=N[T.indices.bucket];let O=N[T.indices.path];O||(O=""),r=new te(L,O),T.postModify(r);break}}if(r==null)throw Hi(t);return r}}class Qi{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e,t,a){let r=1,n=null,i=null,o=!1,c=0;function l(){return c===2}let d=!1;function m(...w){d||(d=!0,t.apply(null,w))}function h(w){n=setTimeout(()=>{n=null,e(g,l())},w)}function f(){i&&clearTimeout(i)}function g(w,...b){if(d){f();return}if(w){f(),m.call(null,w,...b);return}if(l()||o){f(),m.call(null,w,...b);return}r<64&&(r*=2);let y;c===1?(c=2,y=0):y=(r+Math.random())*1e3,h(y)}let p=!1;function k(w){p||(p=!0,f(),!d&&(n!==null?(w||(c=2),clearTimeout(n),h(0)):w||(c=1)))}return h(0),i=setTimeout(()=>{o=!0,k(!0)},a),k}function Zi(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){return e!==void 0}function to(e){return typeof e=="object"&&!Array.isArray(e)}function da(e){return typeof e=="string"||e instanceof String}function Da(e){return ua()&&e instanceof Blob}function ua(){return typeof Blob<"u"}function Pa(e,t,a,r){if(r<t)throw Qt(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>a)throw Qt(`Invalid value for '${e}'. Expected ${a} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e,t,a){let r=t;return a==null&&(r=`https://${t}`),`${a}://${r}/v0${e}`}function Er(e){const t=encodeURIComponent;let a="?";for(const r in e)if(e.hasOwnProperty(r)){const n=t(r)+"="+t(e[r]);a=a+n+"&"}return a=a.slice(0,-1),a}var Re;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Re||(Re={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e,t){const a=e>=500&&e<600,n=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return a||n||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,a,r,n,i,o,c,l,d,m,h,f=!0,g=!1){this.url_=t,this.method_=a,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=h,this.retry=f,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,k)=>{this.resolve_=p,this.reject_=k,this.start_()})}start_(){const t=(r,n)=>{if(n){r(!1,new dt(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Re.NO_ERROR,l=i.getStatus();if(!c||ao(l,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Re.ABORT;r(!1,new dt(!1,null,m));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new dt(d,i))})},a=(r,n)=>{const i=this.resolve_,o=this.reject_,c=n.connection;if(n.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());eo(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=la();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(n.canceled){const l=this.appDelete_?Ir():Bi();o(l)}else{const l=qi();o(l)}};this.canceled_?a(!1,new dt(!1,null,!0)):this.backoffId_=Ji(t,a,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Zi(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class dt{constructor(t,a,r){this.wasSuccessCode=t,this.connection=a,this.canceled=!!r}}function so(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function no(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function io(e,t){t&&(e["X-Firebase-GMPID"]=t)}function oo(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function co(e,t,a,r,n,i,o=!0,c=!1){const l=Er(e.urlParams),d=e.url+l,m=Object.assign({},e.headers);return io(m,t),so(m,a),no(m,i),oo(m,r),new ro(d,e.method,m,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uo(...e){const t=lo();if(t!==void 0){const a=new t;for(let r=0;r<e.length;r++)a.append(e[r]);return a.getBlob()}else{if(ua())return new Blob(e);throw new q(W.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mo(e,t,a){return e.webkitSlice?e.webkitSlice(t,a):e.mozSlice?e.mozSlice(t,a):e.slice?e.slice(t,a):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e){if(typeof atob>"u")throw Gi("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rt{constructor(t,a){this.data=t,this.contentType=a||null}}function fo(e,t){switch(e){case ye.RAW:return new Rt(Dr(t));case ye.BASE64:case ye.BASE64URL:return new Rt(Pr(e,t));case ye.DATA_URL:return new Rt(go(t),xo(t))}throw la()}function Dr(e){const t=[];for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(a<e.length-1&&(e.charCodeAt(a+1)&64512)===56320))t.push(239,191,189);else{const i=r,o=e.charCodeAt(++a);r=65536|(i&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function po(e){let t;try{t=decodeURIComponent(e)}catch{throw Ze(ye.DATA_URL,"Malformed data URL.")}return Dr(t)}function Pr(e,t){switch(e){case ye.BASE64:{const n=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(n||i)throw Ze(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case ye.BASE64URL:{const n=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(n||i)throw Ze(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let a;try{a=ho(t)}catch(n){throw n.message.includes("polyfill")?n:Ze(e,"Invalid character found")}const r=new Uint8Array(a.length);for(let n=0;n<a.length;n++)r[n]=a.charCodeAt(n);return r}class Mr{constructor(t){this.base64=!1,this.contentType=null;const a=t.match(/^data:([^,]+)?,/);if(a===null)throw Ze(ye.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=a[1]||null;r!=null&&(this.base64=yo(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function go(e){const t=new Mr(e);return t.base64?Pr(ye.BASE64,t.rest):po(t.rest)}function xo(e){return new Mr(e).contentType}function yo(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,a){let r=0,n="";Da(t)?(this.data_=t,r=t.size,n=t.type):t instanceof ArrayBuffer?(a?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(a?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(t,a){if(Da(this.data_)){const r=this.data_,n=mo(r,t,a);return n===null?null:new Ce(n)}else{const r=new Uint8Array(this.data_.buffer,t,a-t);return new Ce(r,!0)}}static getBlob(...t){if(ua()){const a=t.map(r=>r instanceof Ce?r.data_:r);return new Ce(uo.apply(null,a))}else{const a=t.map(o=>da(o)?fo(ye.RAW,o).data:o.data_);let r=0;a.forEach(o=>{r+=o.byteLength});const n=new Uint8Array(r);let i=0;return a.forEach(o=>{for(let c=0;c<o.length;c++)n[i++]=o[c]}),new Ce(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e){let t;try{t=JSON.parse(e)}catch{return null}return to(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function wo(e,t){const a=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?a:e+"/"+a}function Rr(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e,t){return t}class Z{constructor(t,a,r,n){this.server=t,this.local=a||t,this.writable=!!r,this.xform=n||ko}}let ut=null;function vo(e){return!da(e)||e.length<2?e:Rr(e)}function $r(){if(ut)return ut;const e=[];e.push(new Z("bucket")),e.push(new Z("generation")),e.push(new Z("metageneration")),e.push(new Z("name","fullPath",!0));function t(i,o){return vo(o)}const a=new Z("name");a.xform=t,e.push(a);function r(i,o){return o!==void 0?Number(o):o}const n=new Z("size");return n.xform=r,e.push(n),e.push(new Z("timeCreated")),e.push(new Z("updated")),e.push(new Z("md5Hash",null,!0)),e.push(new Z("cacheControl",null,!0)),e.push(new Z("contentDisposition",null,!0)),e.push(new Z("contentEncoding",null,!0)),e.push(new Z("contentLanguage",null,!0)),e.push(new Z("contentType",null,!0)),e.push(new Z("metadata","customMetadata",!0)),ut=e,ut}function No(e,t){function a(){const r=e.bucket,n=e.fullPath,i=new te(r,n);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:a})}function jo(e,t,a){const r={};r.type="file";const n=a.length;for(let i=0;i<n;i++){const o=a[i];r[o.local]=o.xform(r,t[o.server])}return No(r,e),r}function Lr(e,t,a){const r=Or(t);return r===null?null:jo(e,r,a)}function So(e,t,a,r){const n=Or(t);if(n===null||!da(n.downloadTokens))return null;const i=n.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const m=e.bucket,h=e.fullPath,f="/b/"+o(m)+"/o/"+o(h),g=ma(f,a,r),p=Er({alt:"media",token:d});return g+p})[0]}function To(e,t){const a={},r=t.length;for(let n=0;n<r;n++){const i=t[n];i.writable&&(a[i.server]=e[i.local])}return JSON.stringify(a)}class Fr{constructor(t,a,r,n){this.url=t,this.method=a,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){if(!e)throw la()}function Ao(e,t){function a(r,n){const i=Lr(e,n,t);return Ur(i!==null),i}return a}function _o(e,t){function a(r,n){const i=Lr(e,n,t);return Ur(i!==null),So(i,n,e.host,e._protocol)}return a}function Wr(e){function t(a,r){let n;return a.getStatus()===401?a.getErrorText().includes("Firebase App Check token is invalid")?n=Ui():n=Fi():a.getStatus()===402?n=Li(e.bucket):a.getStatus()===403?n=Wi(e.path):n=r,n.status=a.getStatus(),n.serverResponse=r.serverResponse,n}return t}function Co(e){const t=Wr(e);function a(r,n){let i=t(r,n);return r.getStatus()===404&&(i=$i(e.path)),i.serverResponse=n.serverResponse,i}return a}function Io(e,t,a){const r=t.fullServerUrl(),n=ma(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,c=new Fr(n,i,_o(e,a),o);return c.errorHandler=Co(t),c}function Eo(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Do(e,t,a){const r=Object.assign({},a);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=Eo(null,t)),r}function Po(e,t,a,r,n){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let y="";for(let v=0;v<2;v++)y=y+Math.random().toString().slice(2);return y}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=Do(t,r,n),m=To(d,a),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=Ce.getBlob(h,r,f);if(g===null)throw Yi();const p={name:d.fullPath},k=ma(i,e.host,e._protocol),w="POST",b=e.maxUploadRetryTime,x=new Fr(k,w,Ao(e,a),b);return x.urlParams=p,x.headers=o,x.body=g.uploadData(),x.errorHandler=Wr(t),x}class Mo{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Re.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Re.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Re.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,a,r,n,i){if(this.sent_)throw Je("cannot .send() more than once");if(ir(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(a,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Je("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Je("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Je("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Je("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Oo extends Mo{initXhr(){this.xhr_.responseType="text"}}function qr(){return new Oo}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,a){this._service=t,a instanceof te?this._location=a:this._location=te.makeFromUrl(a,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,a){return new We(t,a)}get root(){const t=new te(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rr(this._location.path)}get storage(){return this._service}get parent(){const t=bo(this._location.path);if(t===null)return null;const a=new te(this._location.bucket,t);return new We(this._service,a)}_throwIfRoot(t){if(this._location.path==="")throw Xi(t)}}function Ro(e,t,a){e._throwIfRoot("uploadBytes");const r=Po(e.storage,e._location,$r(),new Ce(t,!0),a);return e.storage.makeRequestWithTokens(r,qr).then(n=>({metadata:n,ref:e}))}function $o(e){e._throwIfRoot("getDownloadURL");const t=Io(e.storage,e._location,$r());return e.storage.makeRequestWithTokens(t,qr).then(a=>{if(a===null)throw Ki();return a})}function Lo(e,t){const a=wo(e._location.path,t),r=new te(e._location.bucket,a);return new We(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e){return/^[A-Za-z]+:\/\//.test(e)}function Uo(e,t){return new We(e,t)}function Br(e,t){if(e instanceof ha){const a=e;if(a._bucket==null)throw Vi();const r=new We(a,a._bucket);return t!=null?Br(r,t):r}else return t!==void 0?Lo(e,t):e}function Wo(e,t){if(t&&Fo(t)){if(e instanceof ha)return Uo(e,t);throw Qt("To use ref(service, url), the first argument must be a Storage instance.")}else return Br(e,t)}function Ma(e,t){const a=t==null?void 0:t[Cr];return a==null?null:te.makeFromBucketSpec(a,e)}function qo(e,t,a,r={}){e.host=`${t}:${a}`;const n=ir(t);n&&(qs(`https://${e.host}/b`),Bs("Storage",!0)),e._isUsingEmulator=!0,e._protocol=n?"https":"http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Hs(i,e.app.options.projectId))}class ha{constructor(t,a,r,n,i,o=!1){this.app=t,this._authProvider=a,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=_r,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Oi,this._maxUploadRetryTime=Ri,this._requests=new Set,n!=null?this._bucket=te.makeFromBucketSpec(n,this._host):this._bucket=Ma(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=te.makeFromBucketSpec(this._url,t):this._bucket=Ma(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Pa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Pa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const a=await t.getToken();if(a!==null)return a.accessToken}return null}async _getAppCheckToken(){if(Us(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new We(this,t)}_makeRequest(t,a,r,n,i=!0){if(this._deleted)return new Qi(Ir());{const o=co(t,this._appId,r,n,a,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,a){const[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,a,r,n).getPromise()}}const Oa="@firebase/storage",Ra="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="storage";function Bo(e,t,a){return e=be(e),Ro(e,t,a)}function Ho(e){return e=be(e),$o(e)}function zo(e,t){return e=be(e),Wo(e,t)}function Vo(e=ea(),t){e=be(e);const r=Xe(e,Hr).getImmediate({identifier:t}),n=Ws("storage");return n&&Yo(r,...n),r}function Yo(e,t,a,r={}){qo(e,t,a,r)}function Ko(e,{instanceIdentifier:t}){const a=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new ha(a,r,n,t,Fs)}function Go(){$e(new Le(Hr,Ko,"PUBLIC").setMultipleInstances(!0)),Ee(Oa,Ra,""),Ee(Oa,Ra,"esm2020")}Go();const zr="@firebase/installations",fa="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=1e4,Yr=`w:${fa}`,Kr="FIS_v2",Xo="https://firebaseinstallations.googleapis.com/v1",Qo=60*60*1e3,Jo="installations",Zo="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qe=new ta(Jo,Zo,ec);function Gr(e){return e instanceof Zt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr({projectId:e}){return`${Xo}/projects/${e}/installations`}function Qr(e){return{token:e.token,requestStatus:2,expiresIn:ac(e.expiresIn),creationTime:Date.now()}}async function Jr(e,t){const r=(await t.json()).error;return qe.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zr({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function tc(e,{refreshToken:t}){const a=Zr(e);return a.append("Authorization",rc(t)),a}async function es(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ac(e){return Number(e.replace("s","000"))}function rc(e){return`${Kr} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc({appConfig:e,heartbeatServiceProvider:t},{fid:a}){const r=Xr(e),n=Zr(e),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&n.append("x-firebase-client",d)}const o={fid:a,authVersion:Kr,appId:e.appId,sdkVersion:Yr},c={method:"POST",headers:n,body:JSON.stringify(o)},l=await es(()=>fetch(r,c));if(l.ok){const d=await l.json();return{fid:d.fid||a,registrationStatus:2,refreshToken:d.refreshToken,authToken:Qr(d.authToken)}}else throw await Jr("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=/^[cdef][\w-]{21}$/,Jt="";function oc(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const a=cc(e);return ic.test(a)?a:Jt}catch{return Jt}}function cc(e){return nc(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Map;function rs(e,t){const a=_t(e);ss(a,t),lc(a,t)}function ss(e,t){const a=as.get(e);if(a)for(const r of a)r(t)}function lc(e,t){const a=dc();a&&a.postMessage({key:e,fid:t}),uc()}let Oe=null;function dc(){return!Oe&&"BroadcastChannel"in self&&(Oe=new BroadcastChannel("[Firebase] FID Change"),Oe.onmessage=e=>{ss(e.data.key,e.data.fid)}),Oe}function uc(){as.size===0&&Oe&&(Oe.close(),Oe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="firebase-installations-database",hc=1,Be="firebase-installations-store";let $t=null;function pa(){return $t||($t=aa(mc,hc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Be)}}})),$t}async function bt(e,t){const a=_t(e),n=(await pa()).transaction(Be,"readwrite"),i=n.objectStore(Be),o=await i.get(a);return await i.put(t,a),await n.done,(!o||o.fid!==t.fid)&&rs(e,t.fid),t}async function ns(e){const t=_t(e),r=(await pa()).transaction(Be,"readwrite");await r.objectStore(Be).delete(t),await r.done}async function Ct(e,t){const a=_t(e),n=(await pa()).transaction(Be,"readwrite"),i=n.objectStore(Be),o=await i.get(a),c=t(o);return c===void 0?await i.delete(a):await i.put(c,a),await n.done,c&&(!o||o.fid!==c.fid)&&rs(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(e){let t;const a=await Ct(e.appConfig,r=>{const n=fc(r),i=pc(e,n);return t=i.registrationPromise,i.installationEntry});return a.fid===Jt?{installationEntry:await t}:{installationEntry:a,registrationPromise:t}}function fc(e){const t=e||{fid:oc(),registrationStatus:0};return is(t)}function pc(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(qe.create("app-offline"));return{installationEntry:t,registrationPromise:n}}const a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=gc(e,a);return{installationEntry:a,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:xc(e)}:{installationEntry:t}}async function gc(e,t){try{const a=await sc(e,t);return bt(e.appConfig,a)}catch(a){throw Gr(a)&&a.customData.serverCode===409?await ns(e.appConfig):await bt(e.appConfig,{fid:t.fid,registrationStatus:0}),a}}async function xc(e){let t=await $a(e.appConfig);for(;t.registrationStatus===1;)await ts(100),t=await $a(e.appConfig);if(t.registrationStatus===0){const{installationEntry:a,registrationPromise:r}=await ga(e);return r||a}return t}function $a(e){return Ct(e,t=>{if(!t)throw qe.create("installation-not-found");return is(t)})}function is(e){return yc(e)?{fid:e.fid,registrationStatus:0}:e}function yc(e){return e.registrationStatus===1&&e.registrationTime+Vr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc({appConfig:e,heartbeatServiceProvider:t},a){const r=wc(e,a),n=tc(e,a),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&n.append("x-firebase-client",d)}const o={installation:{sdkVersion:Yr,appId:e.appId}},c={method:"POST",headers:n,body:JSON.stringify(o)},l=await es(()=>fetch(r,c));if(l.ok){const d=await l.json();return Qr(d)}else throw await Jr("Generate Auth Token",l)}function wc(e,{fid:t}){return`${Xr(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(e,t=!1){let a;const r=await Ct(e.appConfig,i=>{if(!os(i))throw qe.create("not-registered");const o=i.authToken;if(!t&&Nc(o))return i;if(o.requestStatus===1)return a=kc(e,t),i;{if(!navigator.onLine)throw qe.create("app-offline");const c=Sc(i);return a=vc(e,c),c}});return a?await a:r.authToken}async function kc(e,t){let a=await La(e.appConfig);for(;a.authToken.requestStatus===1;)await ts(100),a=await La(e.appConfig);const r=a.authToken;return r.requestStatus===0?xa(e,t):r}function La(e){return Ct(e,t=>{if(!os(t))throw qe.create("not-registered");const a=t.authToken;return Tc(a)?{...t,authToken:{requestStatus:0}}:t})}async function vc(e,t){try{const a=await bc(e,t),r={...t,authToken:a};return await bt(e.appConfig,r),a}catch(a){if(Gr(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await ns(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await bt(e.appConfig,r)}throw a}}function os(e){return e!==void 0&&e.registrationStatus===2}function Nc(e){return e.requestStatus===2&&!jc(e)}function jc(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Qo}function Sc(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Tc(e){return e.requestStatus===1&&e.requestTime+Vr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(e){const t=e,{installationEntry:a,registrationPromise:r}=await ga(t);return r?r.catch(console.error):xa(t).catch(console.error),a.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _c(e,t=!1){const a=e;return await Cc(a),(await xa(a,t)).token}async function Cc(e){const{registrationPromise:t}=await ga(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e){if(!e||!e.options)throw Lt("App Configuration");if(!e.name)throw Lt("App Name");const t=["projectId","apiKey","appId"];for(const a of t)if(!e.options[a])throw Lt(a);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Lt(e){return qe.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="installations",Ec="installations-internal",Dc=e=>{const t=e.getProvider("app").getImmediate(),a=Ic(t),r=Xe(t,"heartbeat");return{app:t,appConfig:a,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Pc=e=>{const t=e.getProvider("app").getImmediate(),a=Xe(t,cs).getImmediate();return{getId:()=>Ac(a),getToken:n=>_c(a,n)}};function Mc(){$e(new Le(cs,Dc,"PUBLIC")),$e(new Le(Ec,Pc,"PRIVATE"))}Mc();Ee(zr,fa);Ee(zr,fa,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="analytics",Oc="firebase_id",Rc="origin",$c=60*1e3,Lc="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ya="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new zs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},re=new ta("analytics","Analytics",Fc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e){if(!e.startsWith(ya)){const t=re.create("invalid-gtag-resource",{gtagURL:e});return ee.warn(t.message),""}return e}function ls(e){return Promise.all(e.map(t=>t.catch(a=>a)))}function Wc(e,t){let a;return window.trustedTypes&&(a=window.trustedTypes.createPolicy(e,t)),a}function qc(e,t){const a=Wc("firebase-js-sdk-policy",{createScriptURL:Uc}),r=document.createElement("script"),n=`${ya}?l=${e}&id=${t}`;r.src=a?a==null?void 0:a.createScriptURL(n):n,r.async=!0,document.head.appendChild(r)}function Bc(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Hc(e,t,a,r,n,i){const o=r[n];try{if(o)await t[o];else{const l=(await ls(a)).find(d=>d.measurementId===n);l&&await t[l.appId]}}catch(c){ee.error(c)}e("config",n,i)}async function zc(e,t,a,r,n){try{let i=[];if(n&&n.send_to){let o=n.send_to;Array.isArray(o)||(o=[o]);const c=await ls(a);for(const l of o){const d=c.find(h=>h.measurementId===l),m=d&&t[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,n||{})}catch(i){ee.error(i)}}function Vc(e,t,a,r){async function n(i,...o){try{if(i==="event"){const[c,l]=o;await zc(e,t,a,c,l)}else if(i==="config"){const[c,l]=o;await Hc(e,t,a,r,c,l)}else if(i==="consent"){const[c,l]=o;e("consent",c,l)}else if(i==="get"){const[c,l,d]=o;e("get",c,l,d)}else if(i==="set"){const[c]=o;e("set",c)}else e(i,...o)}catch(c){ee.error(c)}}return n}function Yc(e,t,a,r,n){let i=function(...o){window[r].push(arguments)};return window[n]&&typeof window[n]=="function"&&(i=window[n]),window[n]=Vc(i,e,t,a),{gtagCore:i,wrappedGtag:window[n]}}function Kc(e){const t=window.document.getElementsByTagName("script");for(const a of Object.values(t))if(a.src&&a.src.includes(ya)&&a.src.includes(e))return a;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=30,Xc=1e3;class Qc{constructor(t={},a=Xc){this.throttleMetadata=t,this.intervalMillis=a}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,a){this.throttleMetadata[t]=a}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ds=new Qc;function Jc(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zc(e){var o;const{appId:t,apiKey:a}=e,r={method:"GET",headers:Jc(a)},n=Lc.replace("{app-id}",t),i=await fetch(n,r);if(i.status!==200&&i.status!==304){let c="";try{const l=await i.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw re.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function el(e,t=ds,a){const{appId:r,apiKey:n,measurementId:i}=e.options;if(!r)throw re.create("no-app-id");if(!n){if(i)return{measurementId:i,appId:r};throw re.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new rl;return setTimeout(async()=>{c.abort()},$c),us({appId:r,apiKey:n,measurementId:i},o,c,t)}async function us(e,{throttleEndTimeMillis:t,backoffCount:a},r,n=ds){var c;const{appId:i,measurementId:o}=e;try{await tl(r,t)}catch(l){if(o)return ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw l}try{const l=await Zc(e);return n.deleteThrottleMetadata(i),l}catch(l){const d=l;if(!al(d)){if(n.deleteThrottleMetadata(i),o)return ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:o};throw l}const m=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?_a(a,n.intervalMillis,Gc):_a(a,n.intervalMillis),h={throttleEndTimeMillis:Date.now()+m,backoffCount:a+1};return n.setThrottleMetadata(i,h),ee.debug(`Calling attemptFetch again in ${m} millis`),us(e,h,r,n)}}function tl(e,t){return new Promise((a,r)=>{const n=Math.max(t-Date.now(),0),i=setTimeout(a,n);e.addEventListener(()=>{clearTimeout(i),r(re.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function al(e){if(!(e instanceof Zt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class rl{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function sl(e,t,a,r,n){if(n&&n.global){e("event",a,r);return}else{const i=await t,o={...r,send_to:i};e("event",a,o)}}async function nl(e,t,a,r){if(r&&r.global){const n={};for(const i of Object.keys(a))n[`user_properties.${i}`]=a[i];return e("set",n),Promise.resolve()}else{const n=await t;e("config",n,{update:!0,user_properties:a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(){if(or())try{await cr()}catch(e){return ee.warn(re.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ee.warn(re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ol(e,t,a,r,n,i,o){const c=el(e);c.then(f=>{a[f.measurementId]=f.appId,e.options.measurementId&&f.measurementId!==e.options.measurementId&&ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ee.error(f)),t.push(c);const l=il().then(f=>{if(f)return r.getId()}),[d,m]=await Promise.all([c,l]);Kc(i)||qc(i,d.measurementId),n("js",new Date);const h=(o==null?void 0:o.config)??{};return h[Rc]="firebase",h.update=!0,m!=null&&(h[Oc]=m),n("config",d.measurementId,h),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t){this.app=t}_delete(){return delete Ke[this.app.options.appId],Promise.resolve()}}let Ke={},Fa=[];const Ua={};let Ft="dataLayer",ll="gtag",Wa,ba,qa=!1;function dl(){const e=[];if(Vs()&&e.push("This is a browser extension environment."),lr()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,n)=>`(${n+1}) ${r}`).join(" "),a=re.create("invalid-analytics-context",{errorInfo:t});ee.warn(a.message)}}function ul(e,t,a){dl();const r=e.options.appId;if(!r)throw re.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw re.create("no-api-key");if(Ke[r]!=null)throw re.create("already-exists",{id:r});if(!qa){Bc(Ft);const{wrappedGtag:i,gtagCore:o}=Yc(Ke,Fa,Ua,Ft,ll);ba=i,Wa=o,qa=!0}return Ke[r]=ol(e,Fa,Ua,t,Wa,Ft,a),new cl(e)}function ml(e=ea()){e=be(e);const t=Xe(e,wt);return t.isInitialized()?t.getImmediate():hl(e)}function hl(e,t={}){const a=Xe(e,wt);if(a.isInitialized()){const n=a.getImmediate();if(Ys(t,a.getOptions()))return n;throw re.create("already-initialized")}return a.initialize({options:t})}function fl(e,t,a){e=be(e),nl(ba,Ke[e.app.options.appId],t,a).catch(r=>ee.error(r))}function pl(e,t,a,r){e=be(e),sl(ba,Ke[e.app.options.appId],t,a,r).catch(n=>ee.error(n))}const Ba="@firebase/analytics",Ha="0.10.19";function gl(){$e(new Le(wt,(t,{options:a})=>{const r=t.getProvider("app").getImmediate(),n=t.getProvider("installations-internal").getImmediate();return ul(r,n,a)},"PUBLIC")),$e(new Le("analytics-internal",e,"PRIVATE")),Ee(Ba,Ha),Ee(Ba,Ha,"esm2020");function e(t){try{const a=t.getProvider(wt).getImmediate();return{logEvent:(r,n,i)=>pl(a,r,n,i),setUserProperties:(r,n)=>fl(a,r,n)}}catch(a){throw re.create("interop-component-reg-failed",{reason:a})}}}gl();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="/firebase-messaging-sw.js",yl="/firebase-cloud-messaging-push-scope",ms="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",bl="https://fcmregistrations.googleapis.com/v1",hs="google.c.a.c_id",wl="google.c.a.c_l",kl="google.c.a.ts",vl="google.c.a.e",za=1e4;var Va;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Va||(Va={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var at;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(at||(at={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Nl(e){const t="=".repeat((4-e.length%4)%4),a=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(a),n=new Uint8Array(r.length);for(let i=0;i<r.length;++i)n[i]=r.charCodeAt(i);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="fcm_token_details_db",jl=5,Ya="fcm_token_object_Store";async function Sl(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Ut))return null;let t=null;return(await aa(Ut,jl,{upgrade:async(r,n,i,o)=>{if(n<2||!r.objectStoreNames.contains(Ya))return;const c=o.objectStore(Ya),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(n===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:ve(d.vapidKey)}}}else if(n===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:ve(d.auth),p256dh:ve(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:ve(d.vapidKey)}}}else if(n===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:ve(d.auth),p256dh:ve(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:ve(d.vapidKey)}}}}}})).close(),await Pt(Ut),await Pt("fcm_vapid_details_db"),await Pt("undefined"),Tl(t)?t:null}function Tl(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="firebase-messaging-database",_l=1,rt="firebase-messaging-store";let Wt=null;function fs(){return Wt||(Wt=aa(Al,_l,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rt)}}})),Wt}async function Cl(e){const t=ps(e),r=await(await fs()).transaction(rt).objectStore(rt).get(t);if(r)return r;{const n=await Sl(e.appConfig.senderId);if(n)return await wa(e,n),n}}async function wa(e,t){const a=ps(e),n=(await fs()).transaction(rt,"readwrite");return await n.objectStore(rt).put(t,a),await n.done,t}function ps({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},X=new ta("messaging","Messaging",Il);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(e,t){const a=await va(e),r=gs(t),n={method:"POST",headers:a,body:JSON.stringify(r)};let i;try{i=await(await fetch(ka(e.appConfig),n)).json()}catch(o){throw X.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw X.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw X.create("token-subscribe-no-token");return i.token}async function Dl(e,t){const a=await va(e),r=gs(t.subscriptionOptions),n={method:"PATCH",headers:a,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${ka(e.appConfig)}/${t.token}`,n)).json()}catch(o){throw X.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw X.create("token-update-failed",{errorInfo:o})}if(!i.token)throw X.create("token-update-no-token");return i.token}async function Pl(e,t){const r={method:"DELETE",headers:await va(e)};try{const i=await(await fetch(`${ka(e.appConfig)}/${t}`,r)).json();if(i.error){const o=i.error.message;throw X.create("token-unsubscribe-failed",{errorInfo:o})}}catch(n){throw X.create("token-unsubscribe-failed",{errorInfo:n==null?void 0:n.toString()})}}function ka({projectId:e}){return`${bl}/projects/${e}/registrations`}async function va({appConfig:e,installations:t}){const a=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${a}`})}function gs({p256dh:e,auth:t,endpoint:a,vapidKey:r}){const n={web:{endpoint:a,auth:t,p256dh:e}};return r!==ms&&(n.web.applicationPubKey=r),n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=7*24*60*60*1e3;async function Ol(e){const t=await $l(e.swRegistration,e.vapidKey),a={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ve(t.getKey("auth")),p256dh:ve(t.getKey("p256dh"))},r=await Cl(e.firebaseDependencies);if(r){if(Ll(r.subscriptionOptions,a))return Date.now()>=r.createTime+Ml?Rl(e,{token:r.token,createTime:Date.now(),subscriptionOptions:a}):r.token;try{await Pl(e.firebaseDependencies,r.token)}catch(n){console.warn(n)}return Ka(e.firebaseDependencies,a)}else return Ka(e.firebaseDependencies,a)}async function Rl(e,t){try{const a=await Dl(e.firebaseDependencies,t),r={...t,token:a,createTime:Date.now()};return await wa(e.firebaseDependencies,r),a}catch(a){throw a}}async function Ka(e,t){const r={token:await El(e,t),createTime:Date.now(),subscriptionOptions:t};return await wa(e,r),r.token}async function $l(e,t){const a=await e.pushManager.getSubscription();return a||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Nl(t)})}function Ll(e,t){const a=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,n=t.auth===e.auth,i=t.p256dh===e.p256dh;return a&&r&&n&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Fl(t,e),Ul(t,e),Wl(t,e),t}function Fl(e,t){if(!t.notification)return;e.notification={};const a=t.notification.title;a&&(e.notification.title=a);const r=t.notification.body;r&&(e.notification.body=r);const n=t.notification.image;n&&(e.notification.image=n);const i=t.notification.icon;i&&(e.notification.icon=i)}function Ul(e,t){t.data&&(e.data=t.data)}function Wl(e,t){var n,i,o,c;if(!t.fcmOptions&&!((n=t.notification)!=null&&n.click_action))return;e.fcmOptions={};const a=((i=t.fcmOptions)==null?void 0:i.link)??((o=t.notification)==null?void 0:o.click_action);a&&(e.fcmOptions.link=a);const r=(c=t.fcmOptions)==null?void 0:c.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(e){return typeof e=="object"&&!!e&&hs in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(e){if(!e||!e.options)throw qt("App Configuration Object");if(!e.name)throw qt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:a}=e;for(const r of t)if(!a[r])throw qt(r);return{appName:e.name,projectId:a.projectId,apiKey:a.apiKey,appId:a.appId,senderId:a.messagingSenderId}}function qt(e){return X.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,a,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const n=Bl(t);this.firebaseDependencies={app:t,appConfig:n,installations:a,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(e){try{e.swRegistration=await navigator.serviceWorker.register(xl,{scope:yl}),e.swRegistration.update().catch(()=>{}),await Vl(e.swRegistration)}catch(t){throw X.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function Vl(e){return new Promise((t,a)=>{const r=setTimeout(()=>a(new Error(`Service worker not registered after ${za} ms`)),za),n=e.installing||e.waiting;e.active?(clearTimeout(r),t()):n?n.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(n.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),a(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(e,t){if(!t&&!e.swRegistration&&await zl(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw X.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ms)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e,t){if(!navigator)throw X.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw X.create("permission-blocked");return await Kl(e,t==null?void 0:t.vapidKey),await Yl(e,t==null?void 0:t.serviceWorkerRegistration),Ol(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(e,t,a){const r=Xl(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:a[hs],message_name:a[wl],message_time:a[kl],message_device_time:Math.floor(Date.now()/1e3)})}function Xl(e){switch(e){case at.NOTIFICATION_CLICKED:return"notification_open";case at.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(e,t){const a=t.data;if(!a.isFirebaseMessaging)return;e.onMessageHandler&&a.messageType===at.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ga(a)):e.onMessageHandler.next(Ga(a)));const r=a.data;ql(r)&&r[vl]==="1"&&await Gl(e,a.messageType,r)}const Xa="@firebase/messaging",Qa="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=e=>{const t=new Hl(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",a=>Ql(t,a)),t},Zl=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>xs(t,r)}};function ed(){$e(new Le("messaging",Jl,"PUBLIC")),$e(new Le("messaging-internal",Zl,"PRIVATE")),Ee(Xa,Qa),Ee(Xa,Qa,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(){try{await cr()}catch{return!1}return typeof window<"u"&&or()&&lr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(e,t){if(!navigator)throw X.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e=ea()){return td().then(t=>{if(!t)throw X.create("unsupported-browser")},t=>{throw X.create("indexed-db-unsupported")}),Xe(be(e),"messaging").getImmediate()}async function sd(e,t){return e=be(e),xs(e,t)}function nd(e,t){return e=be(e),ad(e,t)}ed();const id={apiKey:"AIzaSyAwQrXDVJ5i-kxezvYDi_3REghtIjqtAP8",authDomain:"on-news-a3c1d.firebaseapp.com",projectId:"on-news-a3c1d",storageBucket:"on-news-a3c1d.firebasestorage.app",messagingSenderId:"1062808607218",appId:"1:1062808607218:web:9b0519631f23145d2db36b",measurementId:"G-V9BRY0P3D6"},it=Ks(id),Ne=Gs(it),j=Xs(it),od=Vo(it),Bt=typeof window<"u"?rd(it):null;typeof window<"u"&&ml(it);const ys=u.createContext(void 0),Q=()=>{const e=u.useContext(ys);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e},cd=({children:e})=>{const[t,a]=u.useState(null),[r,n]=u.useState(null),[i,o]=u.useState(!0),c=async f=>{const{email:g,password:p,fullName:k,username:w,description:b}=f;if((await Ie(F(j,"usernames",w))).exists())throw new Error("Nome de usuário já existe");const v=(await en(Ne,g,p)).user;await zt(v,{displayName:k});const T={uid:v.uid,email:v.email,displayName:k,username:w,description:b||"",createdAt:new Date};await Promise.all([Vt(F(j,"users",v.uid),T),Vt(F(j,"usernames",w),{uid:v.uid})])},l=async(f,g)=>{await tn(Ne,f,g)},d=async()=>{await Zs(Ne)},m=async f=>{await Js(Ne,f)};u.useEffect(()=>{let f=null;const g=Qs(Ne,async p=>{o(!0),n(p),f&&(f(),f=null),p?f=K(F(j,"users",p.uid),k=>{var w;if(k.exists()){const b=k.data();a({...b,createdAt:b.createdAt instanceof Date?b.createdAt:typeof((w=b.createdAt)==null?void 0:w.toDate)=="function"?b.createdAt.toDate():new Date(b.createdAt)})}o(!1)}):(a(null),o(!1))});return()=>{g(),f&&f()}},[]);const h={currentUser:t,firebaseUser:r,loading:i,login:l,signup:c,logout:d,resetPassword:m};return s.jsx(ys.Provider,{value:h,children:e})},bs=u.createContext(void 0),ws=()=>{const e=u.useContext(bs);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},ld=({children:e})=>{const[t,a]=u.useState(()=>localStorage.getItem("theme")||"light");u.useEffect(()=>{localStorage.setItem("theme",t),document.documentElement.classList.toggle("dark",t==="dark")},[t]);const r=()=>{a(n=>n==="light"?"dark":"light")};return s.jsx(bs.Provider,{value:{theme:t,toggleTheme:r},children:e})},dd=({activeItem:e,onItemChange:t})=>{const{theme:a,toggleTheme:r}=ws(),{logout:n,currentUser:i}=Q(),o=[{id:"feed",label:"Página Inicial",icon:Sr},{id:"search",label:"Pesquisa",icon:yt},{id:"categories",label:"Explorar",icon:ia},{id:"create-post",label:"Criar",icon:Tt},{id:"notifications",label:"Notificações",icon:ie},{id:"profile",label:"Perfil",icon:ue}],c=async()=>{try{await n()}catch(l){console.error("Error logging out:",l)}};return s.jsxs("aside",{className:"fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col z-50",children:[s.jsx("div",{className:"px-6 py-10 mb-2",children:s.jsx("div",{className:"font-serif italic text-2xl font-black text-gray-900 dark:text-white tracking-tight cursor-pointer",onClick:()=>t("feed"),children:"On News"})}),s.jsx("nav",{className:"flex-1 px-3",children:s.jsx("ul",{className:"space-y-2",children:o.map(l=>{const d=l.icon,m=e===l.id;return s.jsx("li",{children:s.jsxs("button",{"aria-label":l.label,onClick:()=>t(l.id),className:`w-full flex items-center space-x-4 px-3 py-3 rounded-xl transition-all duration-200 group ${m?"bg-gray-100/80 dark:bg-gray-800/80":"hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[s.jsx(d,{className:`w-7 h-7 transition-transform group-hover:scale-105 ${m?"text-primary dark:text-white":"text-gray-900 dark:text-white"}`,strokeWidth:m?2.5:1.5}),s.jsx("span",{className:`text-base transition-all ${m?"font-black text-primary dark:text-white":"font-medium text-gray-900 dark:text-white"}`,children:l.label})]})},l.id)})})}),s.jsxs("div",{className:"p-3 mb-4 space-y-2",children:[s.jsxs("button",{onClick:r,className:"w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group",children:[a==="light"?s.jsx(Ci,{className:"w-7 h-7",strokeWidth:1.5}):s.jsx(Pi,{className:"w-7 h-7",strokeWidth:1.5}),s.jsx("span",{className:"text-gray-900 dark:text-white",children:"Mudar aparência"})]}),i&&s.jsxs("button",{onClick:c,className:"w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-red-500",children:[s.jsx(_i,{className:"w-7 h-7",strokeWidth:1.5}),s.jsx("span",{children:"Sair"})]})]})]})},ud=({activeItem:e,onItemChange:t})=>{const a=[{id:"feed",label:"Feed",icon:Sr},{id:"search",label:"Search",icon:yt},{id:"create-post",label:"Create",icon:Tt},{id:"notifications",label:"Activity",icon:ie},{id:"profile",label:"Profile",icon:ue}];return s.jsx("nav",{className:"w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-2 md:hidden z-50",children:s.jsx("div",{className:"flex justify-between items-center max-w-lg mx-auto",children:a.map(r=>{const n=r.icon,i=e===r.id;return s.jsx("button",{"aria-label":r.label,onClick:()=>t(r.id),className:`flex flex-col items-center justify-center flex-1 py-1 transition-all duration-200 ${i?"scale-110":"opacity-80 hover:opacity-100"}`,children:s.jsx(n,{className:`w-7 h-7 transition-colors ${i?"text-primary dark:text-white":"text-gray-900 dark:text-white"}`,strokeWidth:i?2.5:2})},r.id)})})})},md=()=>{const[e,t]=u.useState(null),[a,r]=u.useState(!1),[n,i]=u.useState(!1),[o,c]=u.useState(!1),[l,d]=u.useState(!1);u.useEffect(()=>{(()=>{const p=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;c(p),p||r(!0)})();const f=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());i(f);const g=p=>{p.preventDefault(),t(p),o||r(!0)};return window.addEventListener("beforeinstallprompt",g),()=>{window.removeEventListener("beforeinstallprompt",g)}},[o]);const m=async()=>{if(e){e.prompt();const{outcome:h}=await e.userChoice;h==="accepted"&&r(!1),t(null)}else d(!l)};return o||!a?null:s.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up",children:s.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-md mx-auto relative",children:[s.jsx("button",{"aria-label":"close",onClick:()=>r(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1",children:s.jsx(Qe,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsxs("div",{className:"flex items-start space-x-4",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{src:"/pwa-192x192.png",alt:"OnNews",className:"w-12 h-12 rounded-lg shadow-sm"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:"Instalar App"}),s.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Tenha a melhor experiência lendo notícias direto da sua tela inicial."})]})]}),s.jsx("div",{className:"mt-1",children:l?s.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 animate-fade-in",children:[s.jsx("p",{className:"font-semibold mb-2",children:"Como instalar manualmente:"}),n?s.jsxs("ul",{className:"space-y-2",children:[s.jsxs("li",{className:"flex items-center gap-2",children:["1. Toque em ",s.jsx(At,{className:"w-4 h-4 text-blue-500"})," ",s.jsx("strong",{children:"Compartilhar"})]}),s.jsxs("li",{className:"flex items-center gap-2",children:["2. Selecione"," ",s.jsx("span",{className:"font-bold",children:'"Adicionar à Tela de Início"'})]})]}):s.jsxs("ul",{className:"space-y-2",children:[s.jsxs("li",{className:"flex items-center gap-2",children:["1. Toque no menu ",s.jsx(Ii,{className:"w-4 h-4"})," ","(três pontos)"]}),s.jsxs("li",{className:"flex items-center gap-2",children:["2. Selecione"," ",s.jsx("span",{className:"font-bold",children:'"Instalar aplicativo"'})," ","ou"," ",s.jsx("span",{className:"font-bold",children:'"Adicionar à tela inicial"'})]})]})]}):s.jsxs("button",{"aria-label":"download",onClick:m,className:"w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm",children:[s.jsx(ji,{className:"w-4 h-4"}),s.jsx("span",{children:"Instalar Agora"})]})})]})]})})};const hd=!1,fd={financas:"business",saude:"health",educacao:"general",esportes:"sports",ciencias:"science",tecnologia:"technology"};function pd(e){if(!e||!Array.isArray(e.articles))return(e==null?void 0:e.status)==="error"&&console.error("NewsAPI Error:",e.message),{totalArticles:0,articles:[]};const t=e.articles.filter(a=>a.title&&a.url).map((a,r)=>{var o,c;return{id:`${a.url?btoa(a.url):`news-${Date.now()}`}-${r}`,title:a.title||"Sem título",description:a.description||"",content:a.content||"",url:a.url,image:a.urlToImage||"https://placehold.co/600x400?text=Sem+Imagem",publishedAt:a.publishedAt||new Date().toISOString(),lang:"pt",source:{id:((o=a.source)==null?void 0:o.id)||null,name:((c=a.source)==null?void 0:c.name)||"Fonte Desconhecida"}}});return{totalArticles:e.totalResults||t.length,articles:t}}async function Ht(e){try{let t="";const{endpoint:a,...r}=e;hd||(t=`/api/news?${new URLSearchParams({...r,endpoint:a}).toString()}`);const n=await fetch(t),i=await n.json();if(!n.ok)throw console.error(`Erro na requisição (${n.status}):`,i),new Error(`Erro na requisição: ${n.status}`);return pd(i)}catch(t){return console.error("Error fetching news:",t),{totalArticles:0,articles:[]}}}class ze{static async getFeedNews(){return Ht({endpoint:"everything",domains:"globo.com,uol.com.br,folha.com.br,estadao.com.br,cnnbrasil.com.br,r7.com,terra.com.br,abril.com.br,g1.globo.com,poder360.com.br,metropoles.com,brasildefato.com.br,agenciabrasil.ebc.com.br,jovempan.com.br,valor.globo.com",language:"pt",pageSize:"100"})}static async getCategoryNews(t){const a=fd[t]||"general";return Ht({endpoint:"everything",language:"pt",q:a,pageSize:"100"})}static async searchNews(t){return Ht({endpoint:"everything",q:t,language:"pt",sortBy:"publishedAt",pageSize:"100"})}}const ks=6048e5,gd=864e5,mt=43200,Ja=1440,Za=Symbol.for("constructDateFrom");function Se(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Za in e?e[Za](t):e instanceof Date?new e.constructor(t):new Date(t)}function z(e,t){return Se(t||e,e)}let xd={};function ot(){return xd}function st(e,t){var c,l,d,m;const a=ot(),r=(t==null?void 0:t.weekStartsOn)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??a.weekStartsOn??((m=(d=a.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,n=z(e,t==null?void 0:t.in),i=n.getDay(),o=(i<r?7:0)+i-r;return n.setDate(n.getDate()-o),n.setHours(0,0,0,0),n}function kt(e,t){return st(e,{...t,weekStartsOn:1})}function vs(e,t){const a=z(e,t==null?void 0:t.in),r=a.getFullYear(),n=Se(a,0);n.setFullYear(r+1,0,4),n.setHours(0,0,0,0);const i=kt(n),o=Se(a,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const c=kt(o);return a.getTime()>=i.getTime()?r+1:a.getTime()>=c.getTime()?r:r-1}function vt(e){const t=z(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+e-+a}function It(e,...t){const a=Se.bind(null,e||t.find(r=>typeof r=="object"));return t.map(a)}function er(e,t){const a=z(e,t==null?void 0:t.in);return a.setHours(0,0,0,0),a}function yd(e,t,a){const[r,n]=It(a==null?void 0:a.in,e,t),i=er(r),o=er(n),c=+i-vt(i),l=+o-vt(o);return Math.round((c-l)/gd)}function bd(e,t){const a=vs(e,t),r=Se(e,0);return r.setFullYear(a,0,4),r.setHours(0,0,0,0),kt(r)}function ft(e,t){const a=+z(e)-+z(t);return a<0?-1:a>0?1:a}function wd(e){return Se(e,Date.now())}function kd(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function vd(e){return!(!kd(e)&&typeof e!="number"||isNaN(+z(e)))}function Nd(e,t,a){const[r,n]=It(a==null?void 0:a.in,e,t),i=r.getFullYear()-n.getFullYear(),o=r.getMonth()-n.getMonth();return i*12+o}function jd(e){return t=>{const r=(e?Math[e]:Math.trunc)(t);return r===0?0:r}}function Sd(e,t){return+z(e)-+z(t)}function Td(e,t){const a=z(e,t==null?void 0:t.in);return a.setHours(23,59,59,999),a}function Ad(e,t){const a=z(e,t==null?void 0:t.in),r=a.getMonth();return a.setFullYear(a.getFullYear(),r+1,0),a.setHours(23,59,59,999),a}function _d(e,t){const a=z(e,t==null?void 0:t.in);return+Td(a,t)==+Ad(a,t)}function Cd(e,t,a){const[r,n,i]=It(a==null?void 0:a.in,e,e,t),o=ft(n,i),c=Math.abs(Nd(n,i));if(c<1)return 0;n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*c);let l=ft(n,i)===-o;_d(r)&&c===1&&ft(r,i)===1&&(l=!1);const d=o*(c-+l);return d===0?0:d}function Id(e,t,a){const r=Sd(e,t)/1e3;return jd(a==null?void 0:a.roundingMethod)(r)}function Ed(e,t){const a=z(e,t==null?void 0:t.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}const Dd={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pd=(e,t,a)=>{let r;const n=Dd[e];return typeof n=="string"?r=n:t===1?r=n.one:r=n.other.replace("{{count}}",t.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r};function Ge(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const Md={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Od={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Rd={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$d={date:Ge({formats:Md,defaultWidth:"full"}),time:Ge({formats:Od,defaultWidth:"full"}),dateTime:Ge({formats:Rd,defaultWidth:"full"})},Ld={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Fd=(e,t,a,r)=>Ld[e];function pe(e){return(t,a)=>{const r=a!=null&&a.context?String(a.context):"standalone";let n;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,c=a!=null&&a.width?String(a.width):o;n=e.formattingValues[c]||e.formattingValues[o]}else{const o=e.defaultWidth,c=a!=null&&a.width?String(a.width):e.defaultWidth;n=e.values[c]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return n[i]}}const Ud={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Wd={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},qd={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Bd={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Hd={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},zd={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Vd=(e,t)=>{const a=Number(e),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Yd={ordinalNumber:Vd,era:pe({values:Ud,defaultWidth:"wide"}),quarter:pe({values:Wd,defaultWidth:"wide",argumentCallback:e=>e-1}),month:pe({values:qd,defaultWidth:"wide"}),day:pe({values:Bd,defaultWidth:"wide"}),dayPeriod:pe({values:Hd,defaultWidth:"wide",formattingValues:zd,defaultFormattingWidth:"wide"})};function ge(e){return(t,a={})=>{const r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;const o=i[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(c)?Gd(c,h=>h.test(o)):Kd(c,h=>h.test(o));let d;d=e.valueCallback?e.valueCallback(l):l,d=a.valueCallback?a.valueCallback(d):d;const m=t.slice(o.length);return{value:d,rest:m}}}function Kd(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}function Gd(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}function Ns(e){return(t,a={})=>{const r=t.match(e.matchPattern);if(!r)return null;const n=r[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;const c=t.slice(n.length);return{value:o,rest:c}}}const Xd=/^(\d+)(th|st|nd|rd)?/i,Qd=/\d+/i,Jd={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Zd={any:[/^b/i,/^(a|c)/i]},eu={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},tu={any:[/1/i,/2/i,/3/i,/4/i]},au={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ru={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},su={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nu={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},iu={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ou={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cu={ordinalNumber:Ns({matchPattern:Xd,parsePattern:Qd,valueCallback:e=>parseInt(e,10)}),era:ge({matchPatterns:Jd,defaultMatchWidth:"wide",parsePatterns:Zd,defaultParseWidth:"any"}),quarter:ge({matchPatterns:eu,defaultMatchWidth:"wide",parsePatterns:tu,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ge({matchPatterns:au,defaultMatchWidth:"wide",parsePatterns:ru,defaultParseWidth:"any"}),day:ge({matchPatterns:su,defaultMatchWidth:"wide",parsePatterns:nu,defaultParseWidth:"any"}),dayPeriod:ge({matchPatterns:iu,defaultMatchWidth:"any",parsePatterns:ou,defaultParseWidth:"any"})},js={code:"en-US",formatDistance:Pd,formatLong:$d,formatRelative:Fd,localize:Yd,match:cu,options:{weekStartsOn:0,firstWeekContainsDate:1}};function lu(e,t){const a=z(e,t==null?void 0:t.in);return yd(a,Ed(a))+1}function du(e,t){const a=z(e,t==null?void 0:t.in),r=+kt(a)-+bd(a);return Math.round(r/ks)+1}function Ss(e,t){var m,h,f,g;const a=z(e,t==null?void 0:t.in),r=a.getFullYear(),n=ot(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:h.firstWeekContainsDate)??n.firstWeekContainsDate??((g=(f=n.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=Se((t==null?void 0:t.in)||e,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const c=st(o,t),l=Se((t==null?void 0:t.in)||e,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const d=st(l,t);return+a>=+c?r+1:+a>=+d?r:r-1}function uu(e,t){var c,l,d,m;const a=ot(),r=(t==null?void 0:t.firstWeekContainsDate)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??a.firstWeekContainsDate??((m=(d=a.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,n=Ss(e,t),i=Se((t==null?void 0:t.in)||e,0);return i.setFullYear(n,0,r),i.setHours(0,0,0,0),st(i,t)}function mu(e,t){const a=z(e,t==null?void 0:t.in),r=+st(a,t)-+uu(a,t);return Math.round(r/ks)+1}function M(e,t){const a=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return a+r}const Ae={y(e,t){const a=e.getFullYear(),r=a>0?a:1-a;return M(t==="yy"?r%100:r,t.length)},M(e,t){const a=e.getMonth();return t==="M"?String(a+1):M(a+1,2)},d(e,t){return M(e.getDate(),t.length)},a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,t){return M(e.getHours()%12||12,t.length)},H(e,t){return M(e.getHours(),t.length)},m(e,t){return M(e.getMinutes(),t.length)},s(e,t){return M(e.getSeconds(),t.length)},S(e,t){const a=t.length,r=e.getMilliseconds(),n=Math.trunc(r*Math.pow(10,a-3));return M(n,t.length)}},Ve={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},tr={G:function(e,t,a){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){const r=e.getFullYear(),n=r>0?r:1-r;return a.ordinalNumber(n,{unit:"year"})}return Ae.y(e,t)},Y:function(e,t,a,r){const n=Ss(e,r),i=n>0?n:1-n;if(t==="YY"){const o=i%100;return M(o,2)}return t==="Yo"?a.ordinalNumber(i,{unit:"year"}):M(i,t.length)},R:function(e,t){const a=vs(e);return M(a,t.length)},u:function(e,t){const a=e.getFullYear();return M(a,t.length)},Q:function(e,t,a){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,a){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return M(r,2);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,a){const r=e.getMonth();switch(t){case"M":case"MM":return Ae.M(e,t);case"Mo":return a.ordinalNumber(r+1,{unit:"month"});case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,a){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return a.ordinalNumber(r+1,{unit:"month"});case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,a,r){const n=mu(e,r);return t==="wo"?a.ordinalNumber(n,{unit:"week"}):M(n,t.length)},I:function(e,t,a){const r=du(e);return t==="Io"?a.ordinalNumber(r,{unit:"week"}):M(r,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):Ae.d(e,t)},D:function(e,t,a){const r=lu(e);return t==="Do"?a.ordinalNumber(r,{unit:"dayOfYear"}):M(r,t.length)},E:function(e,t,a){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,a,r){const n=e.getDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return M(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,a,r){const n=e.getDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return M(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,a){const r=e.getDay(),n=r===0?7:r;switch(t){case"i":return String(n);case"ii":return M(n,t.length);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return a.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(r,{width:"short",context:"formatting"});case"iiii":default:return a.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,a){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,a){const r=e.getHours();let n;switch(r===12?n=Ve.noon:r===0?n=Ve.midnight:n=r/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,a){const r=e.getHours();let n;switch(r>=17?n=Ve.evening:r>=12?n=Ve.afternoon:r>=4?n=Ve.morning:n=Ve.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),a.ordinalNumber(r,{unit:"hour"})}return Ae.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):Ae.H(e,t)},K:function(e,t,a){const r=e.getHours()%12;return t==="Ko"?a.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},k:function(e,t,a){let r=e.getHours();return r===0&&(r=24),t==="ko"?a.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):Ae.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):Ae.s(e,t)},S:function(e,t){return Ae.S(e,t)},X:function(e,t,a){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return rr(r);case"XXXX":case"XX":return Me(r);case"XXXXX":case"XXX":default:return Me(r,":")}},x:function(e,t,a){const r=e.getTimezoneOffset();switch(t){case"x":return rr(r);case"xxxx":case"xx":return Me(r);case"xxxxx":case"xxx":default:return Me(r,":")}},O:function(e,t,a){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ar(r,":");case"OOOO":default:return"GMT"+Me(r,":")}},z:function(e,t,a){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ar(r,":");case"zzzz":default:return"GMT"+Me(r,":")}},t:function(e,t,a){const r=Math.trunc(+e/1e3);return M(r,t.length)},T:function(e,t,a){return M(+e,t.length)}};function ar(e,t=""){const a=e>0?"-":"+",r=Math.abs(e),n=Math.trunc(r/60),i=r%60;return i===0?a+String(n):a+String(n)+t+M(i,2)}function rr(e,t){return e%60===0?(e>0?"-":"+")+M(Math.abs(e)/60,2):Me(e,t)}function Me(e,t=""){const a=e>0?"-":"+",r=Math.abs(e),n=M(Math.trunc(r/60),2),i=M(r%60,2);return a+n+t+i}const sr=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Ts=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},hu=(e,t)=>{const a=e.match(/(P+)(p+)?/)||[],r=a[1],n=a[2];if(!n)return sr(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",sr(r,t)).replace("{{time}}",Ts(n,t))},fu={p:Ts,P:hu},pu=/^D+$/,gu=/^Y+$/,xu=["D","DD","YY","YYYY"];function yu(e){return pu.test(e)}function bu(e){return gu.test(e)}function wu(e,t,a){const r=ku(e,t,a);if(console.warn(r),xu.includes(e))throw new RangeError(r)}function ku(e,t,a){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const vu=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Nu=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ju=/^'([^]*?)'?$/,Su=/''/g,Tu=/[a-zA-Z]/;function As(e,t,a){var m,h,f,g,p,k,w,b;const r=ot(),n=(a==null?void 0:a.locale)??r.locale??js,i=(a==null?void 0:a.firstWeekContainsDate)??((h=(m=a==null?void 0:a.locale)==null?void 0:m.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(f=r.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=(a==null?void 0:a.weekStartsOn)??((k=(p=a==null?void 0:a.locale)==null?void 0:p.options)==null?void 0:k.weekStartsOn)??r.weekStartsOn??((b=(w=r.locale)==null?void 0:w.options)==null?void 0:b.weekStartsOn)??0,c=z(e,a==null?void 0:a.in);if(!vd(c))throw new RangeError("Invalid time value");let l=t.match(Nu).map(x=>{const y=x[0];if(y==="p"||y==="P"){const v=fu[y];return v(x,n.formatLong)}return x}).join("").match(vu).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const y=x[0];if(y==="'")return{isToken:!1,value:Au(x)};if(tr[y])return{isToken:!0,value:x};if(y.match(Tu))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:x}});n.localize.preprocessor&&(l=n.localize.preprocessor(c,l));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:n};return l.map(x=>{if(!x.isToken)return x.value;const y=x.value;(!(a!=null&&a.useAdditionalWeekYearTokens)&&bu(y)||!(a!=null&&a.useAdditionalDayOfYearTokens)&&yu(y))&&wu(y,t,String(e));const v=tr[y[0]];return v(c,y,n.localize,d)}).join("")}function Au(e){const t=e.match(ju);return t?t[1].replace(Su,"'"):e}function _u(e,t,a){const r=ot(),n=(a==null?void 0:a.locale)??r.locale??js,i=2520,o=ft(e,t);if(isNaN(o))throw new RangeError("Invalid time value");const c=Object.assign({},a,{addSuffix:a==null?void 0:a.addSuffix,comparison:o}),[l,d]=It(a==null?void 0:a.in,...o>0?[t,e]:[e,t]),m=Id(d,l),h=(vt(d)-vt(l))/1e3,f=Math.round((m-h)/60);let g;if(f<2)return a!=null&&a.includeSeconds?m<5?n.formatDistance("lessThanXSeconds",5,c):m<10?n.formatDistance("lessThanXSeconds",10,c):m<20?n.formatDistance("lessThanXSeconds",20,c):m<40?n.formatDistance("halfAMinute",0,c):m<60?n.formatDistance("lessThanXMinutes",1,c):n.formatDistance("xMinutes",1,c):f===0?n.formatDistance("lessThanXMinutes",1,c):n.formatDistance("xMinutes",f,c);if(f<45)return n.formatDistance("xMinutes",f,c);if(f<90)return n.formatDistance("aboutXHours",1,c);if(f<Ja){const p=Math.round(f/60);return n.formatDistance("aboutXHours",p,c)}else{if(f<i)return n.formatDistance("xDays",1,c);if(f<mt){const p=Math.round(f/Ja);return n.formatDistance("xDays",p,c)}else if(f<mt*2)return g=Math.round(f/mt),n.formatDistance("aboutXMonths",g,c)}if(g=Cd(d,l),g<12){const p=Math.round(f/mt);return n.formatDistance("xMonths",p,c)}else{const p=g%12,k=Math.trunc(g/12);return p<3?n.formatDistance("aboutXYears",k,c):p<9?n.formatDistance("overXYears",k,c):n.formatDistance("almostXYears",k+1,c)}}function ct(e,t){return _u(e,wd(e),t)}const Cu={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},Iu=(e,t,a)=>{let r;const n=Cu[e];return typeof n=="string"?r=n:t===1?r=n.one:r=n.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"em "+r:"há "+r:r},Eu={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},Du={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Pu={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Mu={date:Ge({formats:Eu,defaultWidth:"full"}),time:Ge({formats:Du,defaultWidth:"full"}),dateTime:Ge({formats:Pu,defaultWidth:"full"})},Ou={lastWeek:e=>{const t=e.getDay();return"'"+(t===0||t===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},Ru=(e,t,a,r)=>{const n=Ou[e];return typeof n=="function"?n(t):n},$u={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},Lu={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},Fu={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},Uu={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},Wu={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},qu={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},Bu=(e,t)=>{const a=Number(e);return(t==null?void 0:t.unit)==="week"?a+"ª":a+"º"},Hu={ordinalNumber:Bu,era:pe({values:$u,defaultWidth:"wide"}),quarter:pe({values:Lu,defaultWidth:"wide",argumentCallback:e=>e-1}),month:pe({values:Fu,defaultWidth:"wide"}),day:pe({values:Uu,defaultWidth:"wide"}),dayPeriod:pe({values:Wu,defaultWidth:"wide",formattingValues:qu,defaultFormattingWidth:"wide"})},zu=/^(\d+)[ºªo]?/i,Vu=/\d+/i,Yu={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},Ku={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},Gu={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},Xu={any:[/1/i,/2/i,/3/i,/4/i]},Qu={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},Ju={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},Zu={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},em={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},tm={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},am={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},rm={ordinalNumber:Ns({matchPattern:zu,parsePattern:Vu,valueCallback:e=>parseInt(e,10)}),era:ge({matchPatterns:Yu,defaultMatchWidth:"wide",parsePatterns:Ku,defaultParseWidth:"any"}),quarter:ge({matchPatterns:Gu,defaultMatchWidth:"wide",parsePatterns:Xu,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ge({matchPatterns:Qu,defaultMatchWidth:"wide",parsePatterns:Ju,defaultParseWidth:"any"}),day:ge({matchPatterns:Zu,defaultMatchWidth:"wide",parsePatterns:em,defaultParseWidth:"any"}),dayPeriod:ge({matchPatterns:tm,defaultMatchWidth:"any",parsePatterns:am,defaultParseWidth:"any"})},He={code:"pt-BR",formatDistance:Iu,formatLong:Mu,formatRelative:Ru,localize:Hu,match:rm,options:{weekStartsOn:0,firstWeekContainsDate:1}},sm=(e,t)=>{if(!e)return()=>{};const a=$(E(j,"notifications"),C("toUserId","==",e),C("read","==",!1),ae("createdAt","desc"));return K(a,n=>{t(n.size)})},_s=async e=>{if(e.fromUserId!==e.toUserId)try{await tt(E(j,"notifications"),{...e,read:!1,createdAt:Fe()}),fetch("/api/send-push",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toUserId:e.toUserId,title:"On News",body:`${e.fromUserName} ${e.type==="like"?"curtiu seu artigo":e.type==="comment"?"comentou no seu artigo":e.type==="reply"?"respondeu seu comentário":e.type==="follow"?"começou a seguir você":"enviou uma mensagem"}${e.articleTitle?`: "${e.articleTitle}"`:""}`,data:{url:e.articleId?`/post/${e.articleId}`:"/notifications"}})}).catch(t=>console.error("Push trigger error:",t))}catch(t){console.error("Error sending notification:",t)}},Na=e=>{const[t,a]=u.useState({articleId:(e==null?void 0:e.id)||"",comments:[],likes:[],likesCount:0,commentsCount:0}),[r,n]=u.useState(!1),[i,o]=u.useState(!0),{currentUser:c}=Q(),l=e.type==="opinion";u.useEffect(()=>{if(!(e!=null&&e.id))return;const p=$(E(j,"comments"),C("articleId","==",e.id),ae("createdAt","desc")),k=$(E(j,"likes"),C("articleId","==",e.id)),w=K(p,x=>{const y=x.docs.map(v=>{var T;return{id:v.id,...v.data(),createdAt:((T=v.data().createdAt)==null?void 0:T.toDate())||new Date}});a(v=>({...v,comments:y,commentsCount:y.length}))}),b=K(k,x=>{const y=x.docs.map(T=>{var N;return{id:T.id,...T.data(),createdAt:((N=T.data().createdAt)==null?void 0:N.toDate())||new Date}}),v=y.find(T=>T.userId===(c==null?void 0:c.uid));n(!!v),a(T=>({...T,likes:y,likesCount:y.length})),o(!1)});return()=>{w(),b()}},[e==null?void 0:e.id,c==null?void 0:c.uid]);const d=()=>{var k,w;if(!e)return null;if(l){const b=e;return{id:b.id,title:b.title,content:b.content,authorName:b.authorName,userName:b.userName,userPhoto:b.userPhoto,color:b.color,publishedAt:b.publishedAt instanceof Date?b.publishedAt.toISOString():b.publishedAt,type:"opinion"}}const p=e;return{id:p.id||"",title:p.title||"Sem título",description:p.description||"",content:p.content||"",url:p.url||"",image:p.image||"",publishedAt:p.publishedAt||new Date().toISOString(),source:{id:((k=p.source)==null?void 0:k.id)||null,name:((w=p.source)==null?void 0:w.name)||"Fonte Desconhecida"},type:"news"}},m=async(p,k,w)=>{c&&await _s({toUserId:k,fromUserId:c.uid,fromUserName:c.username,fromUserPhoto:c.photoURL||"",type:p,articleId:e.id,articleTitle:e.title,commentContent:w})};return{interactions:t,isLiked:r,loading:i,addComment:async(p,k)=>{if(!c){I.error("Você precisa fazer login para comentar");return}try{const w=d();if(await tt(E(j,"comments"),{articleId:e.id,userId:c.uid,username:c.username,userPhoto:c.photoURL||"",content:p,createdAt:Fe(),articleSnapshot:w,parentCommentId:k||null}),l&&await m("comment",e.userId,p),k){const b=t.comments.find(x=>x.id===k);b&&b.userId!==c.uid&&await m("reply",b.userId,p)}I.success("Comentário adicionado!")}catch(w){I.error("Erro ao adicionar comentário"),console.error("Error adding comment:",w)}},toggleLike:async()=>{if(!c){I.error("Você precisa fazer login para curtir");return}try{if(r){const p=t.likes.find(k=>k.userId===c.uid);p&&await ra(F(j,"likes",p.id))}else{const p=d();await tt(E(j,"likes"),{articleId:e.id,userId:c.uid,username:c.username,userPhoto:c.photoURL||"",createdAt:Fe(),articleSnapshot:p}),l&&await m("like",e.userId)}}catch(p){I.error("Erro ao curtir notícia"),console.error("Error toggling like:",p)}},shareArticle:(p,k)=>{navigator.share?navigator.share({title:k,url:p}).catch(console.error):navigator.clipboard.writeText(p).then(()=>{I.success("Link copiado para a área de transferência!")}).catch(()=>{I.error("Erro ao copiar link")})}}},Cs=({comment:e,articleId:t,onUserClick:a,onLoginRequired:r,onAddComment:n,isReply:i})=>{const{currentUser:o}=Q(),[c,l]=u.useState(!1),[d,m]=u.useState(""),[h,f]=u.useState([]),[g,p]=u.useState(!1),[k,w]=u.useState([]),[b,x]=u.useState(!1);u.useEffect(()=>{if(!i){const N=$(E(j,"comments"),C("parentCommentId","==",e.id),C("articleId","==",t));return K(N,O=>{const S=O.docs.map(_=>{var U;return{id:_.id,..._.data(),createdAt:((U=_.data().createdAt)==null?void 0:U.toDate())||new Date}});f(S.sort((_,U)=>_.createdAt.getTime()-U.createdAt.getTime()))})}},[e.id,t,i]),u.useEffect(()=>{const N=$(E(j,"commentLikes"),C("commentId","==",e.id));return K(N,O=>{const S=O.docs.map(_=>({id:_.id,..._.data()}));w(S),x(S.some(_=>_.userId===(o==null?void 0:o.uid)))})},[e.id,o==null?void 0:o.uid]);const y=async()=>{if(!o){r==null||r();return}try{if(b){const N=k.find(L=>L.userId===o.uid);N&&await ra(F(j,"commentLikes",N.id))}else await tt(E(j,"commentLikes"),{commentId:e.id,userId:o.uid,createdAt:Fe()})}catch{I.error("Erro ao curtir comentário")}},v=async N=>{if(N.preventDefault(),!o){r==null||r();return}d.trim()&&(await n(d.trim(),e.id),m(""),l(!1))},T=g?h:h.slice(-2);return s.jsx("div",{className:`flex flex-col ${i?"ml-8 mt-2":"mt-4"}`,children:s.jsxs("div",{className:"flex space-x-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-medium cursor-pointer overflow-hidden shrink-0",onClick:()=>a==null?void 0:a(e.userId),children:e.userPhoto?s.jsx("img",{src:e.userPhoto,alt:e.username,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-4 h-4"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"bg-gray-100 dark:bg-gray-700/50 rounded-2xl px-4 py-2",children:[s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsxs("span",{className:"text-sm font-bold text-gray-900 dark:text-white cursor-pointer hover:underline",onClick:()=>a==null?void 0:a(e.userId),children:["@",e.username]}),s.jsx("span",{className:"text-[10px] text-gray-500 dark:text-gray-400",children:e.createdAt?As(e.createdAt,"dd/MM/yy HH:mm",{locale:He}):""})]}),s.jsx("p",{className:"text-sm text-gray-800 dark:text-gray-200",children:e.content})]}),s.jsxs("div",{className:"flex items-center space-x-4 mt-1 ml-2 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[s.jsxs("button",{onClick:y,className:`hover:text-red-500 transition-colors flex items-center gap-1 ${b?"text-red-500":""}`,children:[s.jsx(ie,{className:`w-3 h-3 ${b?"fill-current":""}`}),k.length>0&&s.jsx("span",{children:k.length}),"Curtir"]}),!i&&s.jsxs("button",{onClick:()=>l(!c),className:"hover:text-blue-500 transition-colors flex items-center gap-1",children:[s.jsx(De,{className:"w-3 h-3"}),"Responder"]})]}),c&&s.jsxs("form",{onSubmit:v,className:"mt-2 flex gap-2",children:[s.jsx("input",{type:"text",value:d,onChange:N=>m(N.target.value),placeholder:"Escreva uma resposta...",className:"flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none",autoFocus:!0}),s.jsx("button",{type:"submit",disabled:!d.trim(),className:"text-primary disabled:opacity-50",children:s.jsx(ca,{className:"w-4 h-4"})})]}),!i&&h.length>0&&s.jsxs("div",{className:"mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700",children:[h.length>2&&!g&&s.jsxs("button",{onClick:()=>p(!0),className:"text-xs text-primary font-bold ml-8 flex items-center gap-1 hover:underline mt-1",children:[s.jsx(wi,{className:"w-3 h-3"}),"Ver mais ",h.length-2," comentários"]}),T.map(N=>s.jsx(Cs,{comment:N,articleId:t,onUserClick:a,onLoginRequired:r,onAddComment:n,isReply:!0},N.id)),g&&s.jsxs("button",{onClick:()=>p(!1),className:"text-xs text-gray-500 font-bold ml-8 flex items-center gap-1 hover:underline mt-1",children:[s.jsx(vi,{className:"w-3 h-3"}),"Ver menos"]})]})]})]})})},ja=({articleId:e,comments:t,onLoginRequired:a,onUserClick:r,onAddComment:n})=>{var f;const[i,o]=u.useState(""),[c,l]=u.useState(!1),{currentUser:d}=Q(),m=async g=>{if(g.preventDefault(),!d){a==null||a();return}i.trim()&&(l(!0),await n(i.trim()),o(""),l(!1))},h=t.filter(g=>!g.parentCommentId);return s.jsxs("section",{className:"space-y-4",children:[d&&s.jsxs("form",{onSubmit:m,className:"flex space-x-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-sm font-medium overflow-hidden",children:d.photoURL?s.jsx("img",{src:d.photoURL,alt:d.displayName,className:"w-full h-full object-cover"}):(f=d.displayName)==null?void 0:f.charAt(0).toUpperCase()}),s.jsxs("div",{className:"flex-1 flex space-x-2",children:[s.jsx("input",{type:"text",value:i,onChange:g=>o(g.target.value),placeholder:"Escreva um comentário...",className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary",disabled:c}),s.jsx("button",{"aria-label":"submit",type:"submit",disabled:!i.trim()||c,className:"p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50",children:s.jsx(ca,{className:"w-4 h-4"})})]})]}),s.jsx("div",{className:"space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar",children:h.length===0?s.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm text-center py-4",children:"Seja o primeiro a comentar!"}):h.map(g=>s.jsx(Cs,{comment:g,articleId:e,onUserClick:r,onLoginRequired:a,onAddComment:n},g.id))})]})},Et=({article:e,onLoginRequired:t,onUserClick:a,onPostClick:r})=>{var w,b;const[n,i]=u.useState(!1),{currentUser:o}=Q();if(!e)return null;const{interactions:c,isLiked:l,toggleLike:d,shareArticle:m,addComment:h}=Na(e),f=()=>{if(!o){t==null||t();return}d()},g=()=>{if(!o){t==null||t();return}i(!n)},p=()=>{m(e.url,e.title)},k=x=>{try{const y=new Date(x);return ct(y,{addSuffix:!0,locale:He})}catch{return"há algum tempo"}};return s.jsxs("article",{className:"bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between p-3",children:[s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden",children:s.jsx(gi,{className:"w-4 h-4 text-gray-500"})}),s.jsx("div",{children:s.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white leading-tight",children:((w=e.source)==null?void 0:w.name)||"Fonte desconhecida"})})]}),s.jsx("button",{className:"text-gray-500 dark:text-gray-400",children:s.jsx(oa,{className:"w-5 h-5"})})]}),e.image&&s.jsx("div",{className:"relative aspect-square w-full bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer",onDoubleClick:f,children:s.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover",onError:x=>{x.target.style.display="none"}})}),s.jsxs("div",{className:"p-3 pb-0",children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx("button",{"aria-label":"like",onClick:f,className:`transition-all ${l?"text-red-500":"text-gray-900 dark:text-white"}`,children:s.jsx(ie,{className:`w-7 h-7 ${l?"fill-current":""}`,strokeWidth:2})}),s.jsx("button",{"aria-label":"comment",onClick:g,className:"text-gray-900 dark:text-white",children:s.jsx(De,{className:"w-7 h-7",strokeWidth:2})}),s.jsx("button",{"aria-label":"share",onClick:p,className:"text-gray-900 dark:text-white",children:s.jsx(At,{className:"w-7 h-7",strokeWidth:2})})]})}),c.likesCount>0&&s.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white mb-1",children:[c.likesCount.toLocaleString()," curtidas"]}),s.jsxs("div",{className:"space-y-1 mb-2",children:[s.jsxs("p",{className:"text-sm text-gray-900 dark:text-white leading-snug",children:[s.jsx("span",{className:"font-bold mr-2",children:(b=e.source)==null?void 0:b.name}),e.title]}),e.description&&s.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug",children:e.description})]}),s.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-tight mb-2",children:k(e.publishedAt)}),c.commentsCount>0&&!n&&s.jsxs("button",{onClick:g,className:"text-sm text-gray-500 dark:text-gray-400 mb-2 hover:underline",children:["Ver todos os ",c.commentsCount," comentários"]})]}),s.jsx("div",{className:"px-3 pb-3",children:s.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm",children:"Ler matéria completa"})}),n&&s.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 p-3",children:s.jsx(ja,{articleId:e.id,comments:c.comments,onLoginRequired:t,onUserClick:a,onAddComment:h})})]})},Sa=({post:e,onLoginRequired:t,onUserClick:a,onEdit:r,onPostClick:n})=>{const[i,o]=u.useState(!1),{currentUser:c}=Q(),{interactions:l,isLiked:d,toggleLike:m,shareArticle:h,addComment:f}=Na(e),g=e.status==="draft",p=(c==null?void 0:c.uid)===e.userId,k=()=>{if(!g){if(!c){t==null||t();return}m()}},w=()=>{if(!g){if(!c){t==null||t();return}o(!i)}},b=x=>{try{const y=x instanceof Date?x:typeof x.toDate=="function"?x.toDate():new Date(x);return ct(y,{addSuffix:!0,locale:He})}catch{return"há algum tempo"}};return s.jsxs("article",{className:"bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between p-3",children:[s.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>a==null?void 0:a(e.userId),children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]",children:s.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-800 p-[1.5px]",children:s.jsx("div",{className:"w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden",children:e.userPhoto?s.jsx("img",{src:e.userPhoto,alt:e.userName,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-4 h-4 text-gray-500"})})})}),s.jsx("div",{children:s.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white leading-tight",children:[e.userName,g&&s.jsx("span",{className:"ml-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-1.5 py-0.5 rounded uppercase font-black",children:"Rascunho"})]})})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[g&&p&&r&&s.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary/20 transition-colors",children:[s.jsx(Di,{className:"w-3 h-3"})," Continuar Editando"]}),s.jsx("button",{className:"text-gray-500 dark:text-gray-400",children:s.jsx(oa,{className:"w-5 h-5"})})]})]}),s.jsxs("div",{onClick:()=>n==null?void 0:n(e),className:"w-full min-h-[280px] h-auto rounded-2xl p-6 pt-16 flex flex-col justify-end shadow-lg relative overflow-hidden cursor-pointer group",style:{background:`linear-gradient(135deg, ${e.cardColor||"#10b981"} 0%, ${e.cardColor||"#10b981"}dd 100%)`},children:[s.jsx("div",{className:"absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"}),s.jsx("h2",{className:"text-xl md:text-2xl font-black text-white mb-2 leading-tight drop-shadow-md",children:e.title}),s.jsx("div",{className:"w-10 h-1 bg-white/30 rounded-full mb-3"}),s.jsx("p",{className:"text-sm font-medium text-white/90",children:e.authorName})]}),s.jsxs("div",{className:"p-3 pb-0",children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx("button",{"aria-label":"like",onClick:k,className:`transition-all ${d?"text-red-500":"text-gray-900 dark:text-white"}`,children:s.jsx(ie,{className:`w-7 h-7 ${d?"fill-current":""}`,strokeWidth:2})}),s.jsx("button",{"aria-label":"comment",onClick:w,className:"text-gray-900 dark:text-white",children:s.jsx(De,{className:"w-7 h-7",strokeWidth:2})}),s.jsx("button",{"aria-label":"share",onClick:()=>h(`${window.location.origin}/post/${e.id}`,e.title),className:"text-gray-900 dark:text-white",children:s.jsx(At,{className:"w-7 h-7",strokeWidth:2})})]})}),l.likesCount>0&&s.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white mb-1",children:[l.likesCount.toLocaleString()," curtidas"]}),s.jsxs("div",{onClick:()=>n==null?void 0:n(e),className:"space-y-1 mb-2 cursor-pointer group",children:[s.jsxs("p",{className:"text-sm text-gray-900 dark:text-white leading-snug",children:[s.jsx("span",{className:"font-bold mr-2",children:e.userName}),s.jsxs("span",{className:"font-medium italic",children:['"',e.title,'"']})]}),s.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug",children:e.content}),s.jsx("button",{className:"text-[11px] font-bold text-gray-400 group-hover:text-primary transition-colors",children:"ver todos os detalhes..."})]}),s.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-tight mb-2",children:b(e.publishedAt)}),l.commentsCount>0&&!i&&s.jsxs("button",{onClick:w,className:"text-sm text-gray-500 dark:text-gray-400 mb-2 hover:underline",children:["Ver todos os ",l.commentsCount," comentários"]})]}),s.jsx("div",{className:"px-3 pb-3",children:s.jsx("button",{onClick:()=>n==null?void 0:n(e),className:"block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm",children:"Ler artigo na íntegra"})}),i&&s.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 p-3",children:s.jsx(ja,{articleId:e.id,comments:l.comments,onLoginRequired:t,onUserClick:a,onAddComment:f})})]})};async function nm(e,t){if(e===t)return;const a=`${e}_${t}`;await Vt(F(j,"follows",a),{followerId:e,followingId:t,createdAt:Fe()})}async function im(e,t){const a=`${e}_${t}`;await ra(F(j,"follows",a))}async function om(e,t){if(e===t)return;const a=dr(j),r=`${e}_${t}`;a.set(F(j,"blocks",r),{blockerId:e,blockedId:t,createdAt:Fe()}),a.delete(F(j,"follows",`${e}_${t}`)),a.delete(F(j,"follows",`${t}_${e}`)),await a.commit()}const Ta=({userId:e,onLoginRequired:t,className:a})=>{const{currentUser:r}=Q(),[n,i]=u.useState(!1),[o,c]=u.useState(!0);u.useEffect(()=>{if(!r||!e){c(!1);return}const d=`${r.uid}_${e}`,m=K(F(j,"follows",d),h=>{i(h.exists()),c(!1)});return()=>m()},[r,e]);const l=async d=>{if(d.stopPropagation(),!r){t==null||t();return}try{n?await im(r.uid,e):(await nm(r.uid,e),await _s({toUserId:e,fromUserId:r.uid,fromUserName:r.username,fromUserPhoto:r.photoURL||"",type:"follow"}),I.success("Agora você está seguindo!"))}catch{I.error("Erro ao processar solicitação")}};return(r==null?void 0:r.uid)===e?null:s.jsx("button",{onClick:l,disabled:o,className:`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${n?"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30":"bg-primary text-white hover:bg-primary/90"} ${a}`,children:o?"...":n?"Seguindo":"Seguir"})},Is=({onUserClick:e,onLoginRequired:t})=>{const{currentUser:a}=Q(),[r,n]=u.useState([]),[i,o]=u.useState(!0);return u.useEffect(()=>{(async()=>{try{let m=(await fe($(E(j,"users"),ur(50)))).docs.map(h=>({uid:h.id,...h.data()})).filter(h=>h.uid!==(a==null?void 0:a.uid));if(a){const h=await fe($(E(j,"follows"),C("followerId","==",a.uid))),f=new Set(h.docs.map(w=>w.data().followingId)),g=await fe($(E(j,"blocks"),C("blockerId","==",a.uid))),p=await fe($(E(j,"blocks"),C("blockedId","==",a.uid))),k=new Set([...g.docs.map(w=>w.data().blockedId),...p.docs.map(w=>w.data().blockerId)]);m=m.filter(w=>!f.has(w.uid)&&!k.has(w.uid))}n(m.slice(0,15)),o(!1)}catch(l){console.error("Error fetching suggestions:",l),o(!1)}})()},[a]),i||r.length===0?null:s.jsxs("div",{className:"py-4 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4 px-4",children:[s.jsx("h3",{className:"font-bold text-sm text-gray-500 dark:text-gray-400",children:"Sugestões para você"}),s.jsx("button",{className:"text-xs font-bold text-primary hover:text-gray-900 dark:hover:text-white transition-colors",children:"Ver tudo"})]}),s.jsx("div",{className:"flex overflow-x-auto gap-3 pb-2 px-4 custom-scrollbar snap-x no-scrollbar",children:r.map(c=>s.jsxs("div",{className:"flex-shrink-0 w-44 bg-white dark:bg-gray-800 rounded-lg p-5 flex flex-col items-center text-center snap-start border border-gray-100 dark:border-gray-700 shadow-sm",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] cursor-pointer mb-3",onClick:()=>e(c.uid),children:s.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-800 p-[2px]",children:c.photoURL?s.jsx("img",{src:c.photoURL,alt:c.displayName,className:"w-full h-full rounded-full object-cover"}):s.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center",children:s.jsx(ue,{className:"w-8 h-8 text-gray-400"})})})}),s.jsxs("div",{className:"mb-4 w-full",children:[s.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white truncate cursor-pointer hover:underline",onClick:()=>e(c.uid),children:c.username}),s.jsx("p",{className:"text-xs text-gray-400 truncate",children:c.displayName})]}),s.jsx(Ta,{userId:c.uid,onLoginRequired:t,className:"w-full py-1 text-xs"})]},c.uid))})]})},cm=({onSuccess:e,onBackToLogin:t})=>{const[a,r]=u.useState({fullName:"",username:"",email:"",password:"",confirmPassword:"",description:""}),[n,i]=u.useState(!1),[o,c]=u.useState(!1),[l,d]=u.useState(!1),{signup:m}=Q(),h=async g=>{if(g.preventDefault(),a.password!==a.confirmPassword){I.error("As senhas não coincidem");return}if(a.password.length<6){I.error("A senha deve ter pelo menos 6 caracteres");return}d(!0);try{await m({email:a.email,password:a.password,fullName:a.fullName,username:a.username,description:a.description}),I.success("Conta criada com sucesso!"),e()}catch(p){I.error(p.message||"Erro ao criar conta")}finally{d(!1)}},f=g=>{r(p=>({...p,[g.target.name]:g.target.value}))};return s.jsxs("form",{onSubmit:h,children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome Completo"}),s.jsx("input",{type:"text",name:"fullName",value:a.fullName,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome de Usuário"}),s.jsx("input",{type:"text",name:"username",value:a.username,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",pattern:"^[a-zA-Z0-9_]+$",title:"Apenas letras, números e underscore são permitidos",required:!0}),s.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"Apenas letras, números e _ são permitidos"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),s.jsx("input",{type:"email",name:"email",value:a.email,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Senha"}),s.jsxs("div",{className:"relative",children:[s.jsx("input",{type:n?"text":"password",name:"password",value:a.password,onChange:f,className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",minLength:6,required:!0}),s.jsx("button",{"aria-label":"showpassword",type:"button",onClick:()=>i(!n),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:n?s.jsx(Gt,{className:"w-4 h-4"}):s.jsx(Xt,{className:"w-4 h-4"})})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirmar Senha"}),s.jsxs("div",{className:"relative",children:[s.jsx("input",{type:o?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:f,className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),s.jsx("button",{"aria-label":"confirmpassword",type:"button",onClick:()=>c(!o),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:o?s.jsx(Gt,{className:"w-4 h-4"}):s.jsx(Xt,{className:"w-4 h-4"})})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Descrição do Perfil (Opcional)"}),s.jsx("textarea",{name:"description",value:a.description,onChange:f,rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none",placeholder:"Conte um pouco sobre você..."})]}),s.jsx("button",{"aria-label":"submitbutton",type:"submit",disabled:l,className:"w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",children:l?"Criando conta...":"Criar Conta"})]}),s.jsx("div",{className:"mt-6 text-center",children:s.jsx("button",{"aria-label":"backlogin",type:"button",onClick:t,className:"text-sm text-primary hover:underline",children:"Já tem conta? Fazer login"})})]})},Aa=({isOpen:e,onClose:t})=>{const[a,r]=u.useState("login"),[n,i]=u.useState(""),[o,c]=u.useState(""),[l,d]=u.useState(!1),[m,h]=u.useState(!1),{login:f,resetPassword:g}=Q();if(!e)return null;const p=async x=>{if(x.preventDefault(),!(!n||!o)){h(!0);try{await f(n,o),I.success("Login realizado com sucesso!"),t(),w()}catch(y){I.error(y.message||"Erro ao fazer login")}finally{h(!1)}}},k=async x=>{if(x.preventDefault(),!n){I.error("Digite seu email");return}h(!0);try{await g(n),I.success("Email de recuperação enviado!"),r("login")}catch{I.error("Erro ao enviar email de recuperação")}finally{h(!1)}},w=()=>{i(""),c(""),d(!1),r("login")},b=()=>{w(),t()};return s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",children:s.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto",children:[s.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[s.jsx("img",{src:"/OnNewsBr.webp",alt:"OnNews",className:"h-10 w-auto"}),s.jsxs("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:[a==="login"&&"Entrar",a==="signup"&&"Criar Conta",a==="reset-password"&&"Recuperar Senha"]}),s.jsx("button",{"aria-label":"closeModal",onClick:b,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:s.jsx(Qe,{className:"w-5 h-5 text-gray-500"})})]}),s.jsxs("div",{className:"p-6",children:[a==="signup"?s.jsx(cm,{onSuccess:b,onBackToLogin:()=>r("login")}):s.jsx("form",{onSubmit:a==="login"?p:k,children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),s.jsx("input",{type:"email",value:n,onChange:x=>i(x.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),a==="login"&&s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Senha"}),s.jsxs("div",{className:"relative",children:[s.jsx("input",{type:l?"text":"password",value:o,onChange:x=>c(x.target.value),className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),s.jsx("button",{"aria-label":"showpassword",type:"button",onClick:()=>d(!l),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:l?s.jsx(Gt,{className:"w-4 h-4"}):s.jsx(Xt,{className:"w-4 h-4"})})]})]}),s.jsx("button",{"aria-label":"submitbutton",type:"submit",disabled:m,className:"w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",children:m?"Carregando...":a==="login"?"Entrar":"Enviar Email"})]})}),a!=="signup"&&s.jsxs("div",{className:"mt-6 space-y-3 text-center",children:[a==="login"&&s.jsxs(s.Fragment,{children:[s.jsx("button",{"aria-label":"resetpassword",onClick:()=>r("reset-password"),className:"text-sm text-primary hover:underline block w-full",children:"Esqueci minha senha"}),s.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Não tem conta?"," ",s.jsx("button",{"aria-label":"sigup",onClick:()=>r("signup"),className:"text-primary hover:underline font-medium",children:"Criar conta"})]})]}),a==="reset-password"&&s.jsx("button",{"aria-label":"login",onClick:()=>r("login"),className:"text-sm text-primary hover:underline",children:"Voltar ao login"})]})]})]})})},et=({category:e,searchQuery:t,onUserClick:a,userId:r,status:n="published",onEdit:i,onPostClick:o})=>{const[c,l]=u.useState([]),[d,m]=u.useState([]),[h,f]=u.useState(!0),[g,p]=u.useState(!1),[k,w]=u.useState(!1),[b,x]=u.useState(0),y=u.useRef(null),v=u.useRef(null),T=20,N=u.useCallback(async()=>{f(!0);try{let S={articles:[]};r||(t?S=await ze.searchNews(t):e?S=await ze.getCategoryNews(e):S=await ze.getFeedNews())}catch(S){console.error("Error fetching news:",S),I.error("Erro ao carregar notícias")}finally{f(!1)}},[e,t,r]);u.useEffect(()=>{N()},[N]),u.useEffect(()=>{let S;r?S=$(E(j,"opinionPosts"),C("userId","==",r),C("status","==",n),ae("publishedAt","desc")):S=$(E(j,"opinionPosts"),C("status","==",n),ae("publishedAt","desc"));const _=K(S,U=>{const R=U.docs.map(V=>{var G;return{id:V.id,...V.data(),publishedAt:((G=V.data().publishedAt)==null?void 0:G.toDate())||new Date}});(async()=>{let V=[];if(!r)try{let J;t?J=await ze.searchNews(t):e?J=await ze.getCategoryNews(e):J=await ze.getFeedNews(),V=J.articles}catch{}const G=[...V,...R].sort((J,oe)=>{const D=new Date(J.publishedAt).getTime();return new Date(oe.publishedAt).getTime()-D});l(G),m(G.slice(0,T)),f(!1)})()});return()=>_()},[e,t,r]);const L=u.useCallback(()=>{if(g)return;p(!0);const S=b+1,_=S*T,U=_+T,R=c.slice(_,U);R.length>0?setTimeout(()=>{m(B=>[...B,...R]),x(S),p(!1)},500):p(!1)},[c,b,g]);if(u.useEffect(()=>(y.current&&y.current.disconnect(),y.current=new IntersectionObserver(S=>{S[0].isIntersecting&&!g&&L()},{threshold:.1}),v.current&&d.length>0&&y.current.observe(v.current),()=>{y.current&&y.current.disconnect()}),[d.length,g,L]),h)return s.jsx("section",{className:"flex items-center justify-center py-12",children:s.jsxs("div",{className:"text-center",children:[s.jsx(Ue,{className:"w-8 h-8 animate-spin text-primary mx-auto mb-2"}),s.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Carregando feed..."})]})});const O=d.length<c.length;return s.jsxs("section",{className:"space-y-6",children:[d.length===0?s.jsx("div",{className:"text-center py-12",children:s.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:t?"Nenhuma publicação encontrada para sua pesquisa.":"Nenhuma publicação disponível no momento."})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"grid gap-6 w-full max-w-full overflow-hidden px-1",children:d.map((S,_)=>{const U=S.type==="opinion",R=s.jsx("div",{className:"min-w-0 w-full",children:U?s.jsx(Sa,{post:S,onLoginRequired:()=>w(!0),onUserClick:a,onEdit:i,onPostClick:o}):s.jsx(Et,{article:S,onLoginRequired:()=>w(!0),onUserClick:a})},`card-${S.id}`);return s.jsxs(Ls.Fragment,{children:[R,_===2&&!r&&!t&&s.jsx("div",{className:"my-2 min-w-0 w-full",children:s.jsx(Is,{onUserClick:a,onLoginRequired:()=>w(!0)})})]},S.id)})}),O&&s.jsx("div",{ref:v,className:"flex items-center justify-center py-8",children:g&&s.jsxs("div",{className:"text-center",children:[s.jsx(Ue,{className:"w-6 h-6 animate-spin text-primary mx-auto mb-2"}),s.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Carregando mais..."})]})})]}),s.jsx("div",{className:"h-28 md:hidden"}),s.jsx(Aa,{isOpen:k,onClose:()=>w(!1)})]})},lm=({onCategorySelect:e})=>{const t=[{id:"financas",name:"Finanças",icon:Ni,color:"from-green-500 to-emerald-500",bgColor:"bg-green-50 dark:bg-green-900/20",description:"Economia, investimentos e mercado financeiro"},{id:"saude",name:"Saúde",icon:ie,color:"from-red-500 to-pink-500",bgColor:"bg-red-50 dark:bg-red-900/20",description:"Medicina, bem-estar e saúde pública"},{id:"educacao",name:"Educação",icon:Ti,color:"from-blue-500 to-cyan-500",bgColor:"bg-blue-50 dark:bg-blue-900/20",description:"Ensino, pesquisa e desenvolvimento acadêmico"},{id:"esportes",name:"Esportes",icon:Mi,color:"from-orange-500 to-amber-500",bgColor:"bg-orange-50 dark:bg-orange-900/20",description:"Futebol, olimpíadas e competições esportivas"},{id:"ciencias",name:"Ciências",icon:pi,color:"from-purple-500 to-violet-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",description:"Descobertas científicas e pesquisas"},{id:"tecnologia",name:"Tecnologia",icon:Ai,color:"from-indigo-500 to-blue-500",bgColor:"bg-indigo-50 dark:bg-indigo-900/20",description:"Inovação, inteligência artificial e digital"}];return s.jsxs("section",{children:[s.jsxs("div",{className:"mb-10 px-4 md:px-0",children:[s.jsx("h1",{className:"text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight",children:"Explorar"}),s.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:"Descubra notícias e artigos por área de interesse"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(a=>{const r=a.icon;return s.jsxs("button",{"aria-label":a.name,onClick:()=>e(a.id),className:`${a.bgColor} rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:scale-105`,children:[s.jsx("div",{className:`w-12 h-12 rounded-lg bg-gradient-to-r ${a.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`,children:s.jsx(r,{className:"w-6 h-6 text-white"})}),s.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:a.name}),s.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed",children:a.description})]},a.id)})})]})},dm=({onUserClick:e})=>{const{currentUser:t}=Q(),[a,r]=u.useState(""),[n,i]=u.useState(""),[o,c]=u.useState("news"),[l,d]=u.useState([]),[m,h]=u.useState(!1),f=async p=>{if(p.preventDefault(),!!a.trim()&&(i(a.trim()),o==="users")){h(!0);try{const k=E(j,"users"),w=$(k,C("username",">=",a.trim().toLowerCase()),C("username","<=",a.trim().toLowerCase()+""),ur(20));let y=(await fe(w)).docs.map(v=>({uid:v.id,...v.data()})).filter(v=>v.uid!==(t==null?void 0:t.uid));if(t){const v=await Promise.all(y.map(async T=>{const N=await Ie(F(j,"blocks",`${t.uid}_${T.uid}`)),L=await Ie(F(j,"blocks",`${T.uid}_${t.uid}`));return N.exists()||L.exists()}));y=y.filter((T,N)=>!v[N])}d(y)}catch(k){console.error("Error searching users",k)}finally{h(!1)}}},g=()=>{r(""),i(""),d([])};return s.jsxs("section",{className:"max-w-2xl mx-auto",children:[s.jsxs("div",{className:"sticky top-0 z-10 bg-white dark:bg-gray-900 pt-2 pb-4 px-4 md:px-0",children:[s.jsx("form",{onSubmit:f,className:"relative",children:s.jsxs("div",{className:"relative group",children:[s.jsx(yt,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors group-focus-within:text-gray-600 dark:group-focus-within:text-gray-200"}),s.jsx("input",{type:"text",value:a,onChange:p=>r(p.target.value),placeholder:"Pesquisar",className:"w-full pl-11 pr-10 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-0 transition-all placeholder:text-gray-500"}),a&&s.jsx("button",{type:"button",onClick:g,className:"absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-0.5 text-white dark:text-gray-300 hover:opacity-80 transition-opacity",children:s.jsx(Qe,{className:"w-3 h-3"})})]})}),s.jsxs("div",{className:"flex border-b border-gray-100 dark:border-gray-800 mt-4",children:[s.jsx("button",{onClick:()=>{c("news"),g()},className:`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${o==="news"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:"Notícias"}),s.jsx("button",{onClick:()=>{c("users"),g()},className:`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${o==="users"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:"Contas"})]})]}),s.jsx("div",{className:"px-4 md:px-0",children:o==="news"?n?s.jsx("div",{className:"mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300",children:s.jsx(et,{searchQuery:n,onUserClick:e})}):s.jsxs("div",{className:"mt-20 text-center px-10",children:[s.jsx("div",{className:"w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700",children:s.jsx(yt,{className:"w-10 h-10 text-gray-300",strokeWidth:1.5})}),s.jsx("h2",{className:"text-xl font-bold dark:text-white mb-2",children:"Descubra Novas Histórias"}),s.jsx("p",{className:"text-sm text-gray-500",children:"Pesquise por temas, locais ou categorias de notícias."})]}):s.jsxs("div",{className:"mt-4 space-y-6",children:[!n&&s.jsx("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500",children:s.jsx(Is,{onUserClick:e,onLoginRequired:()=>{}})}),m&&s.jsx("div",{className:"flex justify-center py-10",children:s.jsx(Ue,{className:"w-8 h-8 animate-spin text-gray-400"})}),n&&!m&&l.length===0&&s.jsx("p",{className:"text-center text-gray-500 py-10",children:"Nenhum usuário encontrado."}),s.jsx("div",{className:"divide-y dark:divide-gray-800",children:l.map(p=>s.jsxs("div",{onClick:()=>e(p.uid),className:"flex items-center gap-3 py-3 cursor-pointer hover:opacity-70 transition-opacity",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0",children:p.photoURL?s.jsx("img",{src:p.photoURL,alt:p.username,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-6 h-6 text-gray-300"})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white truncate",children:p.username}),s.jsx("p",{className:"text-sm text-gray-500 truncate",children:p.displayName})]}),s.jsx(ki,{className:"w-4 h-4 text-gray-300"})]},p.uid))})]})})]})},Es=({isOpen:e,onClose:t,title:a,userIds:r,onUserClick:n})=>{const[i,o]=u.useState([]),[c,l]=u.useState(!0);return u.useEffect(()=>{if(!e||r.length===0){o([]),l(!1);return}(async()=>{l(!0);try{const m=r.map(async f=>{const g=await Ie(F(j,"users",f));return g.exists()?{uid:g.id,...g.data()}:null}),h=(await Promise.all(m)).filter(f=>f!==null);o(h)}catch(m){console.error("Error fetching users for list:",m)}finally{l(!1)}})()},[e,r]),e?s.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:s.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]",children:[s.jsxs("div",{className:"p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between",children:[s.jsx("h3",{className:"font-bold text-lg text-gray-900 dark:text-white",children:a}),s.jsx("button",{onClick:t,className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",children:s.jsx(Qe,{className:"w-6 h-6 text-gray-500"})})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 custom-scrollbar",children:c?s.jsx("div",{className:"flex justify-center py-8",children:s.jsx(Ue,{className:"w-8 h-8 animate-spin text-primary"})}):i.length===0?s.jsx("div",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:"Ninguém encontrado."}):s.jsx("div",{className:"space-y-4",children:i.map(d=>s.jsxs("div",{className:"flex items-center justify-between group",children:[s.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>{n(d.uid),t()},children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex-shrink-0 overflow-hidden",children:d.photoURL?s.jsx("img",{src:d.photoURL,alt:d.displayName,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-full h-full p-2 text-gray-400"})}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold text-sm text-gray-900 dark:text-white group-hover:underline",children:d.displayName}),s.jsxs("p",{className:"text-xs text-gray-500",children:["@",d.username]})]})]}),s.jsx(Ta,{userId:d.uid,className:"px-3 py-1"})]},d.uid))})})]})}):null},um=({onUserClick:e,onEditDraft:t,onPostClick:a})=>{const{currentUser:r,logout:n}=Q(),{theme:i,toggleTheme:o}=ws(),[c,l]=u.useState(!1),[d,m]=u.useState(!1),[h,f]=u.useState("grid"),g=u.useRef(null),[p,k]=u.useState([]),[w,b]=u.useState([]),[x,y]=u.useState([]),[v,T]=u.useState([]),[N,L]=u.useState([]),[O,S]=u.useState({type:null,userIds:[]}),[_,U]=u.useState(!1),[R,B]=u.useState({displayName:(r==null?void 0:r.displayName)||"",description:(r==null?void 0:r.description)||""});if(u.useEffect(()=>{if(!r)return;const D=$(E(j,"follows"),C("followingId","==",r.uid)),Y=K(D,le=>{k(le.docs.map(ne=>ne.data().followerId))}),me=$(E(j,"follows"),C("followerId","==",r.uid)),se=K(me,le=>{b(le.docs.map(ne=>ne.data().followingId))}),Te=$(E(j,"opinionPosts"),C("userId","==",r.uid),C("status","==","published"),ae("publishedAt","desc")),P=K(Te,le=>{y(le.docs.map(ne=>({id:ne.id,...ne.data()})))}),ce=$(E(j,"blocks"),C("blockerId","==",r.uid)),Ds=K(ce,async le=>{const ne=le.docs.map(async he=>{const we=await Ie(F(j,"users",he.data().blockedId));return{uid:he.data().blockedId,...we.data()}}),de=await Promise.all(ne);L(de)}),Ps=$(E(j,"likes"),C("userId","==",r.uid),ae("createdAt","desc")),Ms=K(Ps,le=>{const ne=le.docs.map(de=>{var he;return{type:"like",data:de.data(),date:((he=de.data().createdAt)==null?void 0:he.toDate())||new Date}});T(de=>[...de.filter(we=>we.type!=="like"),...ne].sort((we,Dt)=>Dt.date.getTime()-we.date.getTime()))}),Os=$(E(j,"comments"),C("userId","==",r.uid),ae("createdAt","desc")),Rs=K(Os,le=>{const ne=le.docs.map(de=>{var he;return{type:"comment",data:de.data(),date:((he=de.data().createdAt)==null?void 0:he.toDate())||new Date}});T(de=>[...de.filter(we=>we.type!=="comment"),...ne].sort((we,Dt)=>Dt.date.getTime()-we.date.getTime()))});return()=>{Y(),se(),P(),Ds(),Ms(),Rs()}},[r]),!r)return s.jsx("div",{className:"text-center py-20",children:s.jsx("p",{className:"text-gray-500",children:"Faça login para ver seu perfil."})});const V=()=>{var D;(D=g.current)==null||D.click()},G=async D=>{var me;const Y=(me=D.target.files)==null?void 0:me[0];if(Y){m(!0);try{const se=zo(od,`profiles/${r.uid}/${Date.now()}_${Y.name}`);await Bo(se,Y);const Te=await Ho(se);Ne.currentUser&&await zt(Ne.currentUser,{photoURL:Te}),await pt(F(j,"users",r.uid),{photoURL:Te}),window.location.reload()}catch{I.error("Erro ao atualizar foto")}finally{m(!1)}}},J=async()=>{try{await pt(F(j,"users",r.uid),{displayName:R.displayName,description:R.description}),Ne.currentUser&&await zt(Ne.currentUser,{displayName:R.displayName}),I.success("Perfil atualizado!"),l(!1)}catch{I.error("Erro ao atualizar perfil")}},oe=D=>{if(!D)return null;const Y=/((?:https?:\/\/|www\.)[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}[^\s]*)/gi;return D.split(Y).map((se,Te)=>{if(se.match(Y)){let P=se;return P.match(/^https?:\/\//i)||(P=`https://${P}`),s.jsx("a",{href:P,target:"_blank",rel:"noopener noreferrer",className:"text-primary dark:text-white font-medium hover:underline break-all",children:se},Te)}return se})};return s.jsxs("section",{className:"max-w-4xl mx-auto px-4 py-6 md:py-10",children:[s.jsx("input",{type:"file",ref:g,onChange:G,accept:"image/*",className:"hidden"}),s.jsxs("header",{className:"flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10",children:[s.jsxs("div",{className:"relative shrink-0 mx-auto md:mx-0",children:[s.jsx("div",{className:"w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px] cursor-pointer",onClick:V,children:s.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]",children:s.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden",children:d?s.jsx(Ue,{className:"w-8 h-8 animate-spin text-gray-400"}):r.photoURL?s.jsx("img",{src:r.photoURL,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-12 h-12 md:w-20 md:h-20 text-gray-300"})})})}),s.jsx("button",{onClick:V,className:"absolute bottom-1 right-1 md:bottom-3 md:right-3 bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-600",children:s.jsx(yi,{className:"w-4 h-4 text-gray-900 dark:text-white"})})]}),s.jsxs("div",{className:"flex-1 w-full space-y-6",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[s.jsxs("h1",{className:"text-xl font-normal dark:text-white truncate",children:["@",r.username]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>l(!0),className:"flex-1 md:flex-none px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",children:"Editar perfil"}),s.jsx("button",{onClick:()=>U(!_),className:"p-1.5 text-gray-900 dark:text-white hover:opacity-70 transition-opacity",children:s.jsx(Ei,{className:"w-6 h-6"})})]})]}),s.jsxs("div",{className:"flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800",children:[s.jsxs("div",{className:"text-center md:text-left",children:[s.jsx("span",{className:"block md:inline font-bold dark:text-white",children:x.length}),s.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"publicações"})]}),s.jsxs("button",{onClick:()=>S({type:"followers",userIds:p}),className:"text-center md:text-left hover:opacity-70 transition-opacity",children:[s.jsx("span",{className:"block md:inline font-bold dark:text-white",children:p.length}),s.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguidores"})]}),s.jsxs("button",{onClick:()=>S({type:"following",userIds:w}),className:"text-center md:text-left hover:opacity-70 transition-opacity",children:[s.jsx("span",{className:"block md:inline font-bold dark:text-white",children:w.length}),s.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguindo"})]})]}),s.jsxs("div",{className:"hidden md:block",children:[s.jsx("p",{className:"font-bold dark:text-white",children:r.displayName}),s.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:oe(r.description)})]})]})]}),s.jsxs("div",{className:"md:hidden mb-10",children:[s.jsx("p",{className:"font-bold dark:text-white",children:r.displayName}),s.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:oe(r.description)})]}),s.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800",children:s.jsxs("div",{className:"flex justify-center gap-8 sm:gap-16 -mt-[1px]",children:[s.jsxs("button",{onClick:()=>f("grid"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${h==="grid"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[s.jsx(ia,{className:"w-3 h-3"}),s.jsx("span",{className:"hidden sm:inline",children:"Publicações"})]}),s.jsxs("button",{onClick:()=>f("drafts"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${h==="drafts"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[s.jsx(Si,{className:"w-3 h-3"}),s.jsx("span",{className:"hidden sm:inline",children:"Rascunhos"})]}),s.jsxs("button",{onClick:()=>f("list"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${h==="list"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[s.jsx(Tr,{className:"w-3 h-3"}),s.jsx("span",{className:"hidden sm:inline",children:"Atividade"})]})]})}),s.jsx("div",{className:"mt-6",children:h==="grid"?s.jsxs("div",{className:"grid grid-cols-3 gap-1 md:gap-8",children:[x.map(D=>s.jsx("div",{onClick:()=>a==null?void 0:a(D),className:`aspect-square ${D.color} relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg`,children:s.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-2 text-center text-white bg-black/20 backdrop-blur-[1px]",children:s.jsx("p",{className:"text-[10px] md:text-sm font-bold line-clamp-4 px-1",children:D.title})})},D.id)),x.length===0&&s.jsxs("div",{className:"col-span-3 py-20 text-center",children:[s.jsx("div",{className:"w-16 h-16 border-2 border-gray-900 dark:border-white rounded-full flex items-center justify-center mx-auto mb-4",children:s.jsx(Tt,{className:"w-8 h-8"})}),s.jsx("p",{className:"text-xl font-bold dark:text-white",children:"Nenhuma publicação ainda"})]})]}):h==="drafts"?s.jsx("div",{className:"space-y-4",children:s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[s.jsx("div",{className:"col-span-full",children:s.jsx("p",{className:"text-sm text-gray-500 mb-4 italic",children:"Seus rascunhos salvos aparecem aqui. Clique em um deles para continuar editando."})}),s.jsx("div",{className:"col-span-full",children:s.jsx(et,{userId:r.uid,status:"draft",onUserClick:e,onEdit:t,onPostClick:a})})]})}):s.jsxs("div",{className:"space-y-6",children:[v.map((D,Y)=>{var me;return s.jsxs("div",{className:"bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm",children:[s.jsxs("div",{className:"p-3 flex items-center gap-2 text-xs text-gray-500",children:[D.type==="like"?s.jsx(ie,{className:"w-3 h-3 text-red-500 fill-current"}):s.jsx(De,{className:"w-3 h-3 text-blue-500"}),s.jsxs("span",{children:[D.type==="like"?"Curtiu":"Comentou"," • ",ct(D.date,{addSuffix:!0,locale:He})]})]}),((me=D.data.articleSnapshot)==null?void 0:me.type)==="opinion"?s.jsx(Sa,{post:D.data.articleSnapshot,onUserClick:e,onPostClick:a}):s.jsx(Et,{article:D.data.articleSnapshot,onUserClick:e,onPostClick:a})]},Y)}),v.length===0&&s.jsx("div",{className:"py-20 text-center text-gray-500 italic",children:"Nenhuma atividade recente encontrada."})]})}),c&&s.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:s.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 space-y-6 shadow-2xl",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h3",{className:"text-xl font-bold dark:text-white",children:"Editar Perfil"}),s.jsx("button",{onClick:()=>l(!1),children:s.jsx(Qe,{className:"w-6 h-6 text-gray-400"})})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase mb-1 block",children:"Nome"}),s.jsx("input",{type:"text",value:R.displayName,onChange:D=>B(Y=>({...Y,displayName:D.target.value})),className:"w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase mb-1 block",children:"Bio"}),s.jsx("textarea",{rows:4,value:R.description,onChange:D=>B(Y=>({...Y,description:D.target.value})),className:"w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white resize-none"})]})]}),s.jsxs("button",{onClick:J,className:"w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",children:[s.jsx(Ar,{className:"w-5 h-5"})," Salvar Alterações"]})]})}),_&&s.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:s.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl divide-y dark:divide-gray-800",children:[s.jsxs("button",{onClick:()=>{o(),U(!1)},className:"w-full py-4 text-sm font-bold dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:["Mudar Tema (",i==="light"?"Escuro":"Claro",")"]}),s.jsx("button",{onClick:()=>{S({type:"followers",userIds:p}),U(!1)},className:"w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:"Gerenciar Seguidores"}),s.jsx("button",{onClick:n,className:"w-full py-4 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",children:"Sair da Conta"}),s.jsx("button",{onClick:()=>U(!1),className:"w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:"Cancelar"})]})}),s.jsx(Es,{isOpen:O.type!==null,onClose:()=>S({type:null,userIds:[]}),title:O.type==="followers"?"Seguidores":"Seguindo",userIds:O.userIds,onUserClick:e})]})},mm=({onUserClick:e})=>{const[t,a]=u.useState("notifications"),[r,n]=u.useState([]),[i,o]=u.useState([]),[c,l]=u.useState([]),[d,m]=u.useState(!0),[h,f]=u.useState(!1),{currentUser:g}=Q();u.useEffect(()=>{if(!g)return;const b=$(E(j,"likes"),C("userId","==",g.uid),ae("createdAt","desc")),x=$(E(j,"comments"),C("userId","==",g.uid),ae("createdAt","desc")),y=$(E(j,"notifications"),C("toUserId","==",g.uid),ae("createdAt","desc")),v=K(b,L=>{const O=L.docs.map(S=>{var _;return{id:S.id,...S.data(),createdAt:((_=S.data().createdAt)==null?void 0:_.toDate())||new Date}});n(O)}),T=K(x,L=>{const O=L.docs.map(S=>{var _;return{id:S.id,...S.data(),createdAt:((_=S.data().createdAt)==null?void 0:_.toDate())||new Date}});o(O)}),N=K(y,L=>{const O=L.docs.map(S=>{var _;return{id:S.id,...S.data(),createdAt:((_=S.data().createdAt)==null?void 0:_.toDate())||new Date}});l(O),m(!1)});return()=>{v(),T(),N()}},[g]);const p=async()=>{if(!g)return;const b=dr(j);c.filter(x=>!x.read).forEach(x=>{const y=F(j,"notifications",x.id);b.update(y,{read:!0})}),await b.commit()};if(!g)return s.jsx("div",{className:"text-center py-12",children:s.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Você precisa fazer login para ver suas ações."})});const k=[{id:"notifications",name:"Notificações",icon:Mt,count:c.filter(b=>!b.read).length},{id:"likes",name:"Curtidas",icon:ie,count:r.length},{id:"comments",name:"Comentários",icon:De,count:i.length}],w=()=>{if(t==="notifications")return c.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx(Mt,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}),s.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Você ainda não tem notificações"})]}):s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"flex justify-end mb-2",children:s.jsxs("button",{onClick:p,className:"text-xs text-primary font-bold hover:underline flex items-center gap-1",children:[s.jsx(bi,{className:"w-3 h-3"}),"Marcar todas como lidas"]})}),c.map(x=>s.jsx("div",{className:`p-4 rounded-xl border ${x.read?"bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700":"bg-blue-50/50 dark:bg-primary/5 border-primary/20"} transition-colors cursor-pointer`,onClick:()=>pt(F(j,"notifications",x.id),{read:!0}),children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden cursor-pointer",onClick:y=>{y.stopPropagation(),e==null||e(x.fromUserId)},children:x.fromUserPhoto?s.jsx("img",{src:x.fromUserPhoto,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-full h-full p-2 text-gray-400"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("p",{className:"text-sm text-gray-900 dark:text-white",children:[s.jsxs("span",{className:"font-bold hover:underline cursor-pointer",onClick:y=>{y.stopPropagation(),e==null||e(x.fromUserId)},children:["@",x.fromUserName]})," ",x.type==="like"&&"curtiu seu artigo",x.type==="comment"&&"comentou no seu artigo",x.type==="reply"&&"respondeu seu comentário",x.type==="follow"&&"começou a seguir você",x.type==="system"&&"enviou uma mensagem",x.articleTitle&&s.jsxs("span",{className:"font-medium text-primary",children:[' "',x.articleTitle,'"']})]}),x.commentContent&&s.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1 italic border-l-2 border-gray-200 dark:border-gray-700 pl-2",children:['"',x.commentContent,'"']}),s.jsx("p",{className:"text-[10px] text-gray-400 mt-2",children:As(x.createdAt,"dd 'de' MMMM 'às' HH:mm",{locale:He})})]}),!x.read&&s.jsx("div",{className:"w-2 h-2 bg-primary rounded-full self-center"})]})},x.id))]});const b=t==="likes"?r:i;return b.length===0?s.jsxs("div",{className:"text-center py-12",children:[t==="likes"?s.jsx(ie,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}):s.jsx(De,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}),s.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:t==="likes"?"Você ainda não curtiu nenhuma notícia":"Você ainda não fez nenhum comentário"})]}):s.jsx("div",{className:"space-y-6",children:b.map(x=>x.articleSnapshot?s.jsxs("div",{className:"relative pl-4 border-l-2 border-gray-200 dark:border-gray-700",children:[t==="comments"&&s.jsxs("div",{className:"mb-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300 text-sm italic",children:['"',x.content,'"']}),x.articleSnapshot.type==="opinion"?s.jsx(Sa,{post:x.articleSnapshot,onLoginRequired:()=>f(!0),onUserClick:e}):s.jsx(Et,{article:x.articleSnapshot,onLoginRequired:()=>f(!0),onUserClick:e})]},x.id):null)})};return s.jsxs("section",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"mb-10 px-4 md:px-0",children:[s.jsx("h1",{className:"text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight",children:t==="notifications"?"Notificações":"Minhas Ações"}),s.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:t==="notifications"?"Fique por dentro de todas as suas interações":"Seu histórico completo de interações na plataforma"})]}),s.jsx("div",{className:"border-b border-gray-100 dark:border-gray-800 mb-6",children:s.jsx("nav",{className:"flex w-full",children:k.map(b=>{const x=b.icon;return s.jsxs("button",{id:b.id,"aria-label":b.name,onClick:()=>a(b.id),className:`flex-1 flex items-center justify-center space-x-2 py-3 px-1 border-b-2 font-bold text-xs uppercase tracking-wider transition-colors ${t===b.id?"border-primary text-primary":"border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`,children:[s.jsx(x,{className:"w-5 h-5 shrink-0"}),s.jsx("span",{className:"hidden sm:inline",children:b.name}),b.count>0&&s.jsx("span",{className:`${b.id==="notifications"?"bg-primary text-white":"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"} px-1.5 py-0.5 rounded-full text-[9px] font-black min-w-[18px] text-center`,children:b.count})]},b.id)})})}),d?s.jsxs("div",{className:"text-center py-8 flex flex-col items-center gap-2 text-gray-500",children:[s.jsx(Mt,{className:"w-8 h-8 animate-bounce"}),"Carregando..."]}):w(),s.jsx("div",{className:"h-28 md:hidden"}),s.jsx(Aa,{isOpen:h,onClose:()=>f(!1)})]})},hm=({userId:e,onBack:t,onUserClick:a,onLoginRequired:r,onPostClick:n})=>{const{currentUser:i}=Q(),[o,c]=u.useState(null),[l,d]=u.useState("grid"),[m,h]=u.useState([]),[f,g]=u.useState([]),[p,k]=u.useState(!0),[w,b]=u.useState(!1),[x,y]=u.useState(!1),[v,T]=u.useState([]),[N,L]=u.useState([]),[O,S]=u.useState({type:null,userIds:[]});if(u.useEffect(()=>{(async()=>{try{if(k(!0),i){const[P,ce]=await Promise.all([Ie(F(j,"blocks",`${i.uid}_${e}`)),Ie(F(j,"blocks",`${e}_${i.uid}`))]);if(ce.exists()){y(!0),k(!1);return}b(P.exists())}const[B,V,G,J]=await Promise.all([Ie(F(j,"users",e)),fe($(E(j,"follows"),C("followingId","==",e))),fe($(E(j,"follows"),C("followerId","==",e))),fe($(E(j,"opinionPosts"),C("userId","==",e),C("status","==","published"),ae("publishedAt","desc")))]);B.exists()&&c(B.data()),T(V.docs.map(P=>P.data().followerId)),L(G.docs.map(P=>P.data().followingId)),g(J.docs.map(P=>({id:P.id,...P.data()})));const oe=$(E(j,"likes"),C("userId","==",e),ae("createdAt","desc")),D=$(E(j,"comments"),C("userId","==",e),ae("createdAt","desc")),[Y,me]=await Promise.all([fe(oe),fe(D)]),se=Y.docs.map(P=>{var ce;return{type:"like",data:P.data(),date:(ce=P.data().createdAt)!=null&&ce.toDate?P.data().createdAt.toDate():new Date(P.data().createdAt)}}),Te=me.docs.map(P=>{var ce;return{type:"comment",data:P.data(),date:(ce=P.data().createdAt)!=null&&ce.toDate?P.data().createdAt.toDate():new Date(P.data().createdAt)}});h([...se,...Te].sort((P,ce)=>ce.date.getTime()-P.date.getTime()).filter(P=>P.data.articleSnapshot))}catch(B){console.error("Error fetching public profile:",B)}finally{k(!1)}})()},[e,i]),p)return s.jsx("div",{className:"text-center py-20",children:s.jsx(Ue,{className:"w-8 h-8 animate-spin mx-auto text-gray-400"})});if(!o||x)return s.jsxs("div",{className:"text-center py-20",children:[s.jsx("p",{className:"text-gray-500",children:"Usuário não encontrado."}),s.jsx("button",{onClick:t,className:"mt-4 text-primary font-bold",children:"Voltar"})]});const _=async()=>{if(!i){r();return}window.confirm("Bloquear este usuário?")&&(await om(i.uid,e),I.success("Usuário bloqueado"),t())},U=R=>{if(!R)return null;const B=/((?:https?:\/\/|www\.)[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}[^\s]*)/gi;return R.split(B).map((G,J)=>{if(G.match(B)){let oe=G;return oe.match(/^https?:\/\//i)||(oe=`https://${oe}`),s.jsx("a",{href:oe,target:"_blank",rel:"noopener noreferrer",className:"text-primary dark:text-white font-medium hover:underline break-all",children:G},J)}return G})};return s.jsxs("section",{className:"max-w-4xl mx-auto px-4 py-6 md:py-10",children:[s.jsxs("button",{onClick:t,className:"mb-6 flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors",children:[s.jsx(fi,{className:"w-5 h-5 mr-2"})," ",s.jsxs("span",{className:"font-bold",children:["@",o.username]})]}),s.jsxs("header",{className:"flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10",children:[s.jsx("div",{className:"relative shrink-0 mx-auto md:mx-0",children:s.jsx("div",{className:"w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px]",children:s.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]",children:s.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden",children:o.photoURL?s.jsx("img",{src:o.photoURL,alt:o.displayName,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-12 h-12 md:w-20 md:h-20 text-gray-300"})})})})}),s.jsxs("div",{className:"flex-1 w-full space-y-6",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[s.jsxs("h1",{className:"text-xl font-normal dark:text-white truncate",children:["@",o.username]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Ta,{userId:e,onLoginRequired:r,className:"flex-1 md:flex-none px-6 py-1.5"}),s.jsx("button",{onClick:_,className:"p-1.5 text-gray-400 hover:text-red-500 transition-colors",title:"Bloquear",children:s.jsx(oa,{className:"w-6 h-6"})})]})]}),s.jsxs("div",{className:"flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800",children:[s.jsxs("div",{className:"text-center md:text-left",children:[s.jsx("span",{className:"block md:inline font-bold dark:text-white",children:f.length}),s.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"publicações"})]}),s.jsxs("button",{onClick:()=>S({type:"followers",userIds:v}),className:"text-center md:text-left",children:[s.jsx("span",{className:"block md:inline font-bold dark:text-white",children:v.length}),s.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguidores"})]}),s.jsxs("button",{onClick:()=>S({type:"following",userIds:N}),className:"text-center md:text-left",children:[s.jsx("span",{className:"block md:inline font-bold dark:text-white",children:N.length}),s.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguindo"})]})]}),s.jsxs("div",{className:"hidden md:block",children:[s.jsx("p",{className:"font-bold dark:text-white",children:o.displayName}),s.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:U(o.description)})]})]})]}),s.jsxs("div",{className:"md:hidden mb-10",children:[s.jsx("p",{className:"font-bold dark:text-white",children:o.displayName}),s.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:U(o.description)})]}),s.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800",children:s.jsxs("div",{className:"flex justify-center gap-16 -mt-[1px]",children:[s.jsxs("button",{onClick:()=>d("grid"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${l==="grid"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[s.jsx(ia,{className:"w-3 h-3"})," ",s.jsx("span",{className:"hidden sm:inline",children:"Publicações"})]}),s.jsxs("button",{onClick:()=>d("list"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${l==="list"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[s.jsx(Tr,{className:"w-3 h-3"})," ",s.jsx("span",{className:"hidden sm:inline",children:"Atividade"})]})]})}),l==="grid"?s.jsxs("div",{className:"grid grid-cols-3 gap-1 md:gap-8",children:[f.map(R=>s.jsx("div",{onClick:()=>n==null?void 0:n(R),className:`aspect-square ${R.color} relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg`,children:s.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-2 text-center text-white bg-black/20 backdrop-blur-[1px]",children:s.jsx("p",{className:"text-[10px] md:text-sm font-bold line-clamp-4 px-1",children:R.title})})},R.id)),f.length===0&&s.jsx("div",{className:"col-span-3 py-20 text-center text-gray-400",children:"Nenhuma publicação ainda."})]}):s.jsxs("div",{className:"space-y-6",children:[m.map((R,B)=>s.jsxs("div",{className:"bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm",children:[s.jsxs("div",{className:"p-3 flex items-center gap-2 text-xs text-gray-500",children:[R.type==="like"?s.jsx(ie,{className:"w-3 h-3 text-red-500 fill-current"}):s.jsx(De,{className:"w-3 h-3 text-blue-500"}),s.jsxs("span",{children:[R.type==="like"?"Curtiu":"Comentou"," • ",ct(R.date,{addSuffix:!0,locale:He})]})]}),s.jsx(Et,{article:R.data.articleSnapshot,onUserClick:a,onLoginRequired:r})]},B)),m.length===0&&s.jsx("div",{className:"text-center py-10 text-gray-400",children:"Nenhuma atividade recente."})]}),s.jsx(Es,{isOpen:O.type!==null,onClose:()=>S({type:null,userIds:[]}),title:O.type==="followers"?"Seguidores":"Seguindo",userIds:O.userIds,onUserClick:a})]})},nr=[{name:"Blue",value:"bg-blue-600"},{name:"Red",value:"bg-red-600"},{name:"Green",value:"bg-green-600"},{name:"Purple",value:"bg-purple-600"},{name:"Orange",value:"bg-orange-600"},{name:"Pink",value:"bg-pink-600"},{name:"Slate",value:"bg-slate-800"}],fm=({onSuccess:e,onCancel:t,editingPost:a})=>{const{currentUser:r}=Q(),[n,i]=u.useState((a==null?void 0:a.title)||""),[o,c]=u.useState((a==null?void 0:a.content)||""),[l,d]=u.useState((a==null?void 0:a.authorName)||(r==null?void 0:r.displayName)||""),[m,h]=u.useState((a==null?void 0:a.color)||nr[0].value),[f,g]=u.useState(!1),[p,k]=u.useState(!1),w=async x=>{if(r){if(!n||!o){I.error("Preencha o título e o conteúdo");return}k(!0);try{if(x==="published"){g(!0);const y=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:`${n}
${o}`})});if(!y.ok){I.error("Erro na análise da IA. O post será salvo como rascunho."),await b("draft"),e();return}const v=await y.json();if(g(!1),!v.safe){I.error(`Violação: ${v.reason}. O post será salvo como rascunho.`),await b("draft"),e();return}}await b(x),x==="published"?I.success("Artigo publicado!"):I.success('Rascunho salvo! Você pode encontrá-lo na aba "Rascunhos" do seu perfil.'),e()}catch(y){console.error("Error saving post:",y),I.error("Erro ao salvar post")}finally{k(!1),g(!1)}}},b=async x=>{const y={userId:r==null?void 0:r.uid,userName:(r==null?void 0:r.displayName)||"Usuário",userPhoto:r==null?void 0:r.photoURL,title:n,content:o,authorName:l,color:m,status:x,publishedAt:Fe(),likesCount:(a==null?void 0:a.likesCount)||0,commentsCount:(a==null?void 0:a.commentsCount)||0,type:"opinion"};if(a!=null&&a.id){const{doc:v,updateDoc:T}=await xr(async()=>{const{doc:N,updateDoc:L}=await import("./firebase-W_O5dJXb.js").then(O=>O.W);return{doc:N,updateDoc:L}},[]);await T(v(j,"opinionPosts",a.id),y)}else await tt(E(j,"opinionPosts"),y)};return s.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Criar Artigo de Opinião"}),s.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-700 dark:text-gray-400",children:"Cancelar"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Título do Artigo"}),s.jsx("input",{type:"text",value:n,onChange:x=>i(x.target.value),placeholder:"Dê um título impactante",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Conteúdo"}),s.jsx("textarea",{rows:6,value:o,onChange:x=>c(x.target.value),placeholder:"Escreva seu artigo aqui...",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome do Autor (Como aparecerá)"}),s.jsx("input",{type:"text",value:l,onChange:x=>d(x.target.value),className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Cor do Card"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:nr.map(x=>s.jsx("button",{onClick:()=>h(x.value),className:`w-8 h-8 rounded-full ${x.value} ${m===x.value?"ring-2 ring-offset-2 ring-primary":""} transition-all`},x.value))})]})]}),s.jsxs("div",{className:"mt-8 pt-6 border-t border-gray-100 dark:border-gray-700",children:[s.jsx("p",{className:"text-sm font-medium text-gray-500 mb-2",children:"Prévia do Card:"}),s.jsxs("div",{className:`${m} rounded-xl p-6 text-white shadow-lg min-h-[200px] flex flex-col justify-between`,children:[s.jsx("h3",{className:"text-2xl font-bold line-clamp-3",children:n||"Título do seu Artigo"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm opacity-90",children:l||"Seu Nome"}),s.jsxs("p",{className:"text-xs opacity-70",children:["@",(r==null?void 0:r.displayName)||"usuario"]})]})]})]}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-6",children:[s.jsxs("button",{onClick:()=>w("draft"),disabled:p,className:"flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50",children:[s.jsx(Ar,{className:"w-4 h-4"}),"Salvar Rascunho"]}),s.jsx("button",{onClick:()=>w("published"),disabled:p,className:"flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Ue,{className:"w-4 h-4 animate-spin"}),"Analisando com IA..."]}):s.jsxs(s.Fragment,{children:[s.jsx(ca,{className:"w-4 h-4"}),"Publicar Artigo"]})})]})]})]})},pm=({post:e,onClose:t,onUserClick:a})=>{const{interactions:r,isLiked:n,addComment:i,toggleLike:o,shareArticle:c}=Na(e);return s.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm md:p-4",children:s.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-3xl md:rounded-2xl overflow-y-auto flex flex-col relative",children:[s.jsxs("div",{className:"sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center",children:[s.jsxs("button",{onClick:()=>a==null?void 0:a(e.userId),className:"flex items-center gap-3 group",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden",children:e.userPhoto?s.jsx("img",{src:e.userPhoto,alt:e.userName,className:"w-full h-full object-cover"}):s.jsx(ue,{className:"w-6 h-6 text-primary"})}),s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors",children:e.userName}),s.jsxs("p",{className:"text-xs text-gray-500",children:["@",e.userName.toLowerCase().replace(/ /g,"")]})]})]}),s.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",children:s.jsx(Qe,{className:"w-6 h-6 text-gray-500"})})]}),s.jsxs("div",{className:"flex-1 p-6 space-y-6",children:[s.jsxs("div",{className:"w-full min-h-[320px] md:min-h-[400px] rounded-2xl p-8 pt-20 flex flex-col justify-end shadow-2xl relative overflow-hidden",style:{background:`linear-gradient(135deg, ${e.cardColor||"#10b981"} 0%, ${e.cardColor||"#10b981"}dd 100%)`},children:[s.jsx("div",{className:"absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-wider",children:"Artigo de Opinião"}),s.jsx("h1",{className:"text-2xl md:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg",children:e.title}),s.jsxs("div",{className:"flex items-center gap-2 text-white/90 text-sm font-medium",children:[s.jsx(xi,{className:"w-4 h-4"}),(()=>{var d,m;const l=e.publishedAt instanceof Date?e.publishedAt:((m=(d=e.publishedAt)==null?void 0:d.toDate)==null?void 0:m.call(d))||new Date(e.publishedAt);return ct(l,{addSuffix:!0,locale:He})})()]})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h2",{className:"text-xl font-bold dark:text-white",children:"Conteúdo"}),s.jsx("div",{className:"text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-lg",children:e.content})]}),s.jsx("div",{className:"pt-6 border-t border-gray-100 dark:border-gray-800",children:s.jsx("div",{className:"flex items-center justify-between mb-6",children:s.jsxs("div",{className:"flex items-center space-x-6",children:[s.jsxs("button",{onClick:o,className:`flex items-center gap-2 transition-all ${n?"text-red-500":"text-gray-900 dark:text-white"}`,children:[s.jsx(ie,{className:`w-8 h-8 ${n?"fill-current":""}`,strokeWidth:2.5}),s.jsx("span",{className:"font-bold",children:r.likesCount})]}),s.jsxs("div",{className:"flex items-center gap-2 text-gray-900 dark:text-white",children:[s.jsx(De,{className:"w-8 h-8",strokeWidth:2.5}),s.jsx("span",{className:"font-bold",children:r.commentsCount})]}),s.jsx("button",{onClick:()=>c(`${window.location.origin}/post/${e.id}`,e.title),className:"text-gray-900 dark:text-white hover:text-primary transition-colors",children:s.jsx(At,{className:"w-8 h-8",strokeWidth:2.5})})]})})}),s.jsx(ja,{articleId:e.id,comments:r.comments,onUserClick:a,onAddComment:i})]})]})})},gm=e=>{u.useEffect(()=>{if(!e||!Bt)return;(async()=>{try{if(await Notification.requestPermission()==="granted"){const n=await sd(Bt,{vapidKey:void 0});if(n){const i=F(j,"users",e.uid);await pt(i,{fcmTokens:an(n)})}}}catch(r){console.error("Error getting push token:",r)}})();const a=nd(Bt,r=>{console.log("Foreground message received:",r),r.notification&&I(n=>{var i,o;return s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("span",{className:"font-bold",children:(i=r.notification)==null?void 0:i.title}),s.jsx("span",{className:"text-sm",children:(o=r.notification)==null?void 0:o.body})]})},{icon:"🔔",duration:5e3})});return()=>a()},[e])},xm=()=>{const[e,t]=u.useState("feed"),[a,r]=u.useState(null),[n,i]=u.useState(null),[o,c]=u.useState(""),[l,d]=u.useState(null),[m,h]=u.useState(!1),[f,g]=u.useState(0),{currentUser:p}=Q();gm(p),u.useEffect(()=>{const N=async()=>{var S;const O=window.location.pathname.match(/^\/post\/([^/]+)/);if(O){const _=O[1];if((n==null?void 0:n.id)===_)return;try{const{doc:U,getDoc:R}=await xr(async()=>{const{doc:V,getDoc:G}=await import("./firebase-W_O5dJXb.js").then(J=>J.W);return{doc:V,getDoc:G}},[]),B=await R(U(j,"opinionPosts",_));if(B.exists()){const V=B.data();i({id:B.id,...V,publishedAt:((S=V.publishedAt)==null?void 0:S.toDate())||new Date})}}catch(U){console.error("Error loading deep-linked post:",U)}}else i(null)};return N(),window.addEventListener("popstate",N),()=>window.removeEventListener("popstate",N)},[n==null?void 0:n.id]);const k=N=>{i(N),window.history.pushState({postId:N.id},"",`/post/${N.id}`)},w=N=>{r(N),t("create-post")};u.useEffect(()=>{if(p){const N=sm(p.uid,L=>{g(L)});return()=>N()}},[p]);const b=N=>{if(!p&&(N==="profile"||N==="my-actions"||N==="create-post"||N==="notifications")){h(!0);return}t(N),d(null),N!=="categories"&&c("")},x=N=>{c(N)},y=N=>{p&&N===p.uid?b("profile"):(d(N),t("user-profile"))},v=()=>{if(e==="user-profile"&&l)return s.jsx(hm,{userId:l,onBack:()=>{d(null),t("feed")},onUserClick:y,onLoginRequired:()=>h(!0),onPostClick:k});if(e==="categories"&&o)return s.jsx("div",{className:"pb-16 md:pb-0",children:s.jsx(et,{category:o,onUserClick:y})});switch(e){case"feed":return s.jsx(et,{onUserClick:y,onPostClick:k});case"categories":return s.jsx(lm,{onCategorySelect:x});case"search":return s.jsx(dm,{onUserClick:y,onPostClick:k});case"profile":return s.jsx(um,{onUserClick:y,onEditDraft:w,onPostClick:k});case"my-actions":case"notifications":return s.jsx(mm,{onUserClick:y,onPostClick:k});case"create-post":return s.jsx("div",{className:"max-w-2xl mx-auto py-4",children:s.jsx(fm,{editingPost:a,onSuccess:()=>{r(null),t("feed")},onCancel:()=>{r(null),t("feed")}})});default:return s.jsx(et,{onUserClick:y})}},T=()=>e==="categories"&&o?{financas:"Finanças",saude:"Saúde",educacao:"Educação",esportes:"Esportes",ciencias:"Ciências",tecnologia:"Tecnologia"}[o]||o:null;return s.jsxs("div",{className:"h-screen w-full max-w-full bg-white dark:bg-gray-900 transition-colors flex flex-col overflow-hidden",children:[s.jsx("header",{className:"md:hidden glass border-b border-gray-100 dark:border-gray-800 w-full overflow-hidden flex-shrink-0",children:s.jsxs("div",{className:"flex items-center justify-between px-4 h-14 w-full",children:[s.jsx("div",{className:"flex items-center space-x-1 cursor-pointer select-none",onClick:()=>b("feed"),children:s.jsx("span",{className:"font-serif italic text-xl font-black text-gray-900 dark:text-white tracking-tight",children:"On News"})}),s.jsxs("div",{className:"flex items-center space-x-5",children:[s.jsx("button",{onClick:()=>b("create-post"),className:"text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity",children:s.jsx(Tt,{className:"w-6 h-6",strokeWidth:2})}),s.jsxs("button",{onClick:()=>b("notifications"),className:"relative text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity",children:[s.jsx(ie,{className:"w-6 h-6",strokeWidth:2}),f>0&&s.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"})]})]})]})}),s.jsxs("div",{className:"flex flex-1 w-full overflow-hidden",children:[s.jsx("div",{className:"hidden md:block",children:s.jsx(dd,{activeItem:e,onItemChange:b})}),s.jsx("main",{className:"flex-1 w-full max-w-full min-w-0 overflow-y-auto overflow-x-hidden md:pl-64 custom-scrollbar",children:s.jsxs("div",{className:"w-full max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-10",children:[(o||e==="categories")&&!l&&s.jsx("div",{className:"mb-6",children:o&&s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx("button",{onClick:()=>c(""),className:"text-primary dark:text-white hover:underline text-sm",children:"← Voltar"}),s.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:T()})]})}),s.jsx("div",{className:"animate-in fade-in duration-500",children:v()})]})})]}),s.jsx(ud,{activeItem:e,onItemChange:b}),s.jsx(md,{}),s.jsx(Aa,{isOpen:m,onClose:()=>h(!1)}),n&&s.jsx(pm,{post:n,onClose:()=>{i(null),window.history.pushState({},"","/")},onUserClick:N=>{i(null),window.history.pushState({},"","/"),y(N)}}),s.jsx(ui,{position:"top-right",toastOptions:{duration:4e3,className:"dark:bg-gray-800 dark:text-white"}})]})};function ym(){return s.jsx(ld,{children:s.jsx(cd,{children:s.jsx(xm,{})})})}fr(document.getElementById("root")).render(s.jsxs(u.StrictMode,{children:[s.jsx(ym,{}),s.jsx(kn,{})]}));
