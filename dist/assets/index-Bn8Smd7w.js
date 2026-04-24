(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function PP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ME={exports:{}},Ah={},LE={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=Symbol.for("react.element"),RP=Symbol.for("react.portal"),CP=Symbol.for("react.fragment"),NP=Symbol.for("react.strict_mode"),DP=Symbol.for("react.profiler"),VP=Symbol.for("react.provider"),OP=Symbol.for("react.context"),MP=Symbol.for("react.forward_ref"),LP=Symbol.for("react.suspense"),jP=Symbol.for("react.memo"),FP=Symbol.for("react.lazy"),r0=Symbol.iterator;function UP(t){return t===null||typeof t!="object"?null:(t=r0&&t[r0]||t["@@iterator"],typeof t=="function"?t:null)}var jE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},FE=Object.assign,UE={};function Ra(t,e,n){this.props=t,this.context=e,this.refs=UE,this.updater=n||jE}Ra.prototype.isReactComponent={};Ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $E(){}$E.prototype=Ra.prototype;function kg(t,e,n){this.props=t,this.context=e,this.refs=UE,this.updater=n||jE}var Ag=kg.prototype=new $E;Ag.constructor=kg;FE(Ag,Ra.prototype);Ag.isPureReactComponent=!0;var s0=Array.isArray,BE=Object.prototype.hasOwnProperty,Pg={current:null},zE={key:!0,ref:!0,__self:!0,__source:!0};function qE(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)BE.call(e,r)&&!zE.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Lu,type:t,key:i,ref:o,props:s,_owner:Pg.current}}function $P(t,e){return{$$typeof:Lu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lu}function BP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var i0=/\/+/g;function Xf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BP(""+t.key):e.toString(36)}function Xc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lu:case RP:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Xf(o,0):r,s0(s)?(n="",t!=null&&(n=t.replace(i0,"$&/")+"/"),Xc(s,e,n,"",function(c){return c})):s!=null&&(Rg(s)&&(s=$P(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(i0,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",s0(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Xf(i,a);o+=Xc(i,e,n,l,s)}else if(l=UP(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Xf(i,a++),o+=Xc(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ec(t,e,n){if(t==null)return t;var r=[],s=0;return Xc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function zP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},Zc={transition:null},qP={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Zc,ReactCurrentOwner:Pg};function WE(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Ec,forEach:function(t,e,n){Ec(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ec(t,function(){e++}),e},toArray:function(t){return Ec(t,function(e){return e})||[]},only:function(t){if(!Rg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Ra;le.Fragment=CP;le.Profiler=DP;le.PureComponent=kg;le.StrictMode=NP;le.Suspense=LP;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qP;le.act=WE;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=FE({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Pg.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)BE.call(e,l)&&!zE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Lu,type:t.type,key:s,ref:i,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:OP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VP,_context:t},t.Consumer=t};le.createElement=qE;le.createFactory=function(t){var e=qE.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:MP,render:t}};le.isValidElement=Rg;le.lazy=function(t){return{$$typeof:FP,_payload:{_status:-1,_result:t},_init:zP}};le.memo=function(t,e){return{$$typeof:jP,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Zc.transition;Zc.transition={};try{t()}finally{Zc.transition=e}};le.unstable_act=WE;le.useCallback=function(t,e){return Ft.current.useCallback(t,e)};le.useContext=function(t){return Ft.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};le.useEffect=function(t,e){return Ft.current.useEffect(t,e)};le.useId=function(){return Ft.current.useId()};le.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Ft.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};le.useRef=function(t){return Ft.current.useRef(t)};le.useState=function(t){return Ft.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Ft.current.useTransition()};le.version="18.3.1";LE.exports=le;var L=LE.exports;const WP=PP(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HP=L,GP=Symbol.for("react.element"),KP=Symbol.for("react.fragment"),QP=Object.prototype.hasOwnProperty,YP=HP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JP={key:!0,ref:!0,__self:!0,__source:!0};function HE(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)QP.call(e,r)&&!JP.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:GP,type:t,key:i,ref:o,props:s,_owner:YP.current}}Ah.Fragment=KP;Ah.jsx=HE;Ah.jsxs=HE;ME.exports=Ah;var h=ME.exports,GE={exports:{}},vn={},KE={exports:{}},QE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var ne=z.length;z.push(X);e:for(;0<ne;){var Z=ne-1>>>1,me=z[Z];if(0<s(me,X))z[Z]=X,z[ne]=me,ne=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],ne=z.pop();if(ne!==X){z[0]=ne;e:for(var Z=0,me=z.length,yr=me>>>1;Z<yr;){var $t=2*(Z+1)-1,_r=z[$t],sn=$t+1,Gn=z[sn];if(0>s(_r,ne))sn<me&&0>s(Gn,_r)?(z[Z]=Gn,z[sn]=ne,Z=sn):(z[Z]=_r,z[$t]=ne,Z=$t);else if(sn<me&&0>s(Gn,ne))z[Z]=Gn,z[sn]=ne,Z=sn;else break e}}return X}function s(z,X){var ne=z.sortIndex-X.sortIndex;return ne!==0?ne:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,y=!1,E=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=z)r(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function C(z){if(k=!1,v(z),!E)if(n(l)!==null)E=!0,_t(F);else{var X=n(c);X!==null&&ge(C,X.startTime-z)}}function F(z,X){E=!1,k&&(k=!1,w(I),I=-1),y=!0;var ne=p;try{for(v(X),f=n(l);f!==null&&(!(f.expirationTime>X)||z&&!P());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,p=f.priorityLevel;var me=Z(f.expirationTime<=X);X=t.unstable_now(),typeof me=="function"?f.callback=me:f===n(l)&&r(l),v(X)}else r(l);f=n(l)}if(f!==null)var yr=!0;else{var $t=n(c);$t!==null&&ge(C,$t.startTime-X),yr=!1}return yr}finally{f=null,p=ne,y=!1}}var M=!1,b=null,I=-1,T=5,S=-1;function P(){return!(t.unstable_now()-S<T)}function N(){if(b!==null){var z=t.unstable_now();S=z;var X=!0;try{X=b(!0,z)}finally{X?A():(M=!1,b=null)}}else M=!1}var A;if(typeof _=="function")A=function(){_(N)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Qe=he.port2;he.port1.onmessage=N,A=function(){Qe.postMessage(null)}}else A=function(){R(N,0)};function _t(z){b=z,M||(M=!0,A())}function ge(z,X){I=R(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){E||y||(E=!0,_t(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var X=3;break;default:X=p}var ne=p;p=X;try{return z()}finally{p=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=p;p=z;try{return X()}finally{p=ne}},t.unstable_scheduleCallback=function(z,X,ne){var Z=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Z+ne:Z):ne=Z,z){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ne+me,z={id:d++,callback:X,priorityLevel:z,startTime:ne,expirationTime:me,sortIndex:-1},ne>Z?(z.sortIndex=ne,e(c,z),n(l)===null&&z===n(c)&&(k?(w(I),I=-1):k=!0,ge(C,ne-Z))):(z.sortIndex=me,e(l,z),E||y||(E=!0,_t(F))),z},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(z){var X=p;return function(){var ne=p;p=X;try{return z.apply(this,arguments)}finally{p=ne}}}})(QE);KE.exports=QE;var XP=KE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZP=L,_n=XP;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var YE=new Set,su={};function Xi(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(su[t]=e,t=0;t<e.length;t++)YE.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gm=Object.prototype.hasOwnProperty,eR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o0={},a0={};function tR(t){return Gm.call(a0,t)?!0:Gm.call(o0,t)?!1:eR.test(t)?a0[t]=!0:(o0[t]=!0,!1)}function nR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rR(t,e,n,r){if(e===null||typeof e>"u"||nR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cg=/[\-:]([a-z])/g;function Ng(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cg,Ng);Et[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cg,Ng);Et[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cg,Ng);Et[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dg(t,e,n,r){var s=Et.hasOwnProperty(e)?Et[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rR(e,n,s,r)&&(n=null),r||s===null?tR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Br=ZP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xc=Symbol.for("react.element"),ko=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),Vg=Symbol.for("react.strict_mode"),Km=Symbol.for("react.profiler"),JE=Symbol.for("react.provider"),XE=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),Qm=Symbol.for("react.suspense"),Ym=Symbol.for("react.suspense_list"),Mg=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),ZE=Symbol.for("react.offscreen"),l0=Symbol.iterator;function cl(t){return t===null||typeof t!="object"?null:(t=l0&&t[l0]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,Zf;function bl(t){if(Zf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zf=e&&e[1]||""}return`
`+Zf+t}var em=!1;function tm(t,e){if(!t||em)return"";em=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{em=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bl(t):""}function sR(t){switch(t.tag){case 5:return bl(t.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return t=tm(t.type,!1),t;case 11:return t=tm(t.type.render,!1),t;case 1:return t=tm(t.type,!0),t;default:return""}}function Jm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ao:return"Fragment";case ko:return"Portal";case Km:return"Profiler";case Vg:return"StrictMode";case Qm:return"Suspense";case Ym:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case XE:return(t.displayName||"Context")+".Consumer";case JE:return(t._context.displayName||"Context")+".Provider";case Og:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mg:return e=t.displayName||null,e!==null?e:Jm(t.type)||"Memo";case as:e=t._payload,t=t._init;try{return Jm(t(e))}catch{}}return null}function iR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jm(e);case 8:return e===Vg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ms(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ex(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oR(t){var e=ex(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tc(t){t._valueTracker||(t._valueTracker=oR(t))}function tx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ex(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xm(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function u0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ms(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nx(t,e){e=e.checked,e!=null&&Dg(t,"checked",e,!1)}function Zm(t,e){nx(t,e);var n=Ms(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ep(t,e.type,n):e.hasOwnProperty("defaultValue")&&ep(t,e.type,Ms(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function c0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ep(t,e,n){(e!=="number"||Sd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sl=Array.isArray;function Uo(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ms(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function d0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Sl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ms(n)}}function rx(t,e){var n=Ms(e.value),r=Ms(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function h0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bc,ix=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bc=bc||document.createElement("div"),bc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function iu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aR=["Webkit","ms","Moz","O"];Object.keys(Ol).forEach(function(t){aR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ol[e]=Ol[t]})});function ox(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ol.hasOwnProperty(t)&&Ol[t]?(""+e).trim():e+"px"}function ax(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ox(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var lR=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(t,e){if(e){if(lR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function sp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=null;function Lg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var op=null,$o=null,Bo=null;function f0(t){if(t=Uu(t)){if(typeof op!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Dh(e),op(t.stateNode,t.type,e))}}function lx(t){$o?Bo?Bo.push(t):Bo=[t]:$o=t}function ux(){if($o){var t=$o,e=Bo;if(Bo=$o=null,f0(t),e)for(t=0;t<e.length;t++)f0(e[t])}}function cx(t,e){return t(e)}function dx(){}var nm=!1;function hx(t,e,n){if(nm)return t(e,n);nm=!0;try{return cx(t,e,n)}finally{nm=!1,($o!==null||Bo!==null)&&(dx(),ux())}}function ou(t,e){var n=t.stateNode;if(n===null)return null;var r=Dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var ap=!1;if(Cr)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){ap=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{ap=!1}function uR(t,e,n,r,s,i,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ml=!1,kd=null,Ad=!1,lp=null,cR={onError:function(t){Ml=!0,kd=t}};function dR(t,e,n,r,s,i,o,a,l){Ml=!1,kd=null,uR.apply(cR,arguments)}function hR(t,e,n,r,s,i,o,a,l){if(dR.apply(this,arguments),Ml){if(Ml){var c=kd;Ml=!1,kd=null}else throw Error(B(198));Ad||(Ad=!0,lp=c)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m0(t){if(Zi(t)!==t)throw Error(B(188))}function fR(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return m0(s),t;if(i===r)return m0(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function mx(t){return t=fR(t),t!==null?px(t):null}function px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=px(t);if(e!==null)return e;t=t.sibling}return null}var gx=_n.unstable_scheduleCallback,p0=_n.unstable_cancelCallback,mR=_n.unstable_shouldYield,pR=_n.unstable_requestPaint,Ye=_n.unstable_now,gR=_n.unstable_getCurrentPriorityLevel,jg=_n.unstable_ImmediatePriority,yx=_n.unstable_UserBlockingPriority,Pd=_n.unstable_NormalPriority,yR=_n.unstable_LowPriority,_x=_n.unstable_IdlePriority,Ph=null,ar=null;function _R(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(Ph,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:IR,wR=Math.log,vR=Math.LN2;function IR(t){return t>>>=0,t===0?32:31-(wR(t)/vR|0)|0}var Sc=64,kc=4194304;function kl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=kl(a):(i&=o,i!==0&&(r=kl(i)))}else o=n&~s,o!==0?r=kl(o):i!==0&&(r=kl(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jn(e),s=1<<n,r|=t[n],e&=~s;return r}function ER(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-jn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=ER(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wx(){var t=Sc;return Sc<<=1,!(Sc&4194240)&&(Sc=64),t}function rm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ju(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function TR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-jn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Fg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Te=0;function vx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ix,Ug,Ex,xx,Tx,cp=!1,Ac=[],xs=null,Ts=null,bs=null,au=new Map,lu=new Map,us=[],bR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g0(t,e){switch(t){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":Ts=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":au.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(e.pointerId)}}function hl(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Uu(e),e!==null&&Ug(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function SR(t,e,n,r,s){switch(e){case"focusin":return xs=hl(xs,t,e,n,r,s),!0;case"dragenter":return Ts=hl(Ts,t,e,n,r,s),!0;case"mouseover":return bs=hl(bs,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return au.set(i,hl(au.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,lu.set(i,hl(lu.get(i)||null,t,e,n,r,s)),!0}return!1}function bx(t){var e=vi(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=fx(n),e!==null){t.blockedOn=e,Tx(t.priority,function(){Ex(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ed(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ip=r,n.target.dispatchEvent(r),ip=null}else return e=Uu(n),e!==null&&Ug(e),t.blockedOn=n,!1;e.shift()}return!0}function y0(t,e,n){ed(t)&&n.delete(e)}function kR(){cp=!1,xs!==null&&ed(xs)&&(xs=null),Ts!==null&&ed(Ts)&&(Ts=null),bs!==null&&ed(bs)&&(bs=null),au.forEach(y0),lu.forEach(y0)}function fl(t,e){t.blockedOn===e&&(t.blockedOn=null,cp||(cp=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,kR)))}function uu(t){function e(s){return fl(s,t)}if(0<Ac.length){fl(Ac[0],t);for(var n=1;n<Ac.length;n++){var r=Ac[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xs!==null&&fl(xs,t),Ts!==null&&fl(Ts,t),bs!==null&&fl(bs,t),au.forEach(e),lu.forEach(e),n=0;n<us.length;n++)r=us[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<us.length&&(n=us[0],n.blockedOn===null);)bx(n),n.blockedOn===null&&us.shift()}var zo=Br.ReactCurrentBatchConfig,Cd=!0;function AR(t,e,n,r){var s=Te,i=zo.transition;zo.transition=null;try{Te=1,$g(t,e,n,r)}finally{Te=s,zo.transition=i}}function PR(t,e,n,r){var s=Te,i=zo.transition;zo.transition=null;try{Te=4,$g(t,e,n,r)}finally{Te=s,zo.transition=i}}function $g(t,e,n,r){if(Cd){var s=dp(t,e,n,r);if(s===null)fm(t,e,r,Nd,n),g0(t,r);else if(SR(s,t,e,n,r))r.stopPropagation();else if(g0(t,r),e&4&&-1<bR.indexOf(t)){for(;s!==null;){var i=Uu(s);if(i!==null&&Ix(i),i=dp(t,e,n,r),i===null&&fm(t,e,r,Nd,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else fm(t,e,r,null,n)}}var Nd=null;function dp(t,e,n,r){if(Nd=null,t=Lg(r),t=vi(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nd=t,null}function Sx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gR()){case jg:return 1;case yx:return 4;case Pd:case yR:return 16;case _x:return 536870912;default:return 16}default:return 16}}var ws=null,Bg=null,td=null;function kx(){if(td)return td;var t,e=Bg,n=e.length,r,s="value"in ws?ws.value:ws.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return td=s.slice(t,1<r?1-r:void 0)}function nd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pc(){return!0}function _0(){return!1}function In(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pc:_0,this.isPropagationStopped=_0,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pc)},persist:function(){},isPersistent:Pc}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zg=In(Ca),Fu=ze({},Ca,{view:0,detail:0}),RR=In(Fu),sm,im,ml,Rh=ze({},Fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ml&&(ml&&t.type==="mousemove"?(sm=t.screenX-ml.screenX,im=t.screenY-ml.screenY):im=sm=0,ml=t),sm)},movementY:function(t){return"movementY"in t?t.movementY:im}}),w0=In(Rh),CR=ze({},Rh,{dataTransfer:0}),NR=In(CR),DR=ze({},Fu,{relatedTarget:0}),om=In(DR),VR=ze({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),OR=In(VR),MR=ze({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LR=In(MR),jR=ze({},Ca,{data:0}),v0=In(jR),FR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$R={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$R[t])?!!e[t]:!1}function qg(){return BR}var zR=ze({},Fu,{key:function(t){if(t.key){var e=FR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qg,charCode:function(t){return t.type==="keypress"?nd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qR=In(zR),WR=ze({},Rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I0=In(WR),HR=ze({},Fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qg}),GR=In(HR),KR=ze({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),QR=In(KR),YR=ze({},Rh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JR=In(YR),XR=[9,13,27,32],Wg=Cr&&"CompositionEvent"in window,Ll=null;Cr&&"documentMode"in document&&(Ll=document.documentMode);var ZR=Cr&&"TextEvent"in window&&!Ll,Ax=Cr&&(!Wg||Ll&&8<Ll&&11>=Ll),E0=" ",x0=!1;function Px(t,e){switch(t){case"keyup":return XR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Po=!1;function eC(t,e){switch(t){case"compositionend":return Rx(e);case"keypress":return e.which!==32?null:(x0=!0,E0);case"textInput":return t=e.data,t===E0&&x0?null:t;default:return null}}function tC(t,e){if(Po)return t==="compositionend"||!Wg&&Px(t,e)?(t=kx(),td=Bg=ws=null,Po=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ax&&e.locale!=="ko"?null:e.data;default:return null}}var nC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nC[t.type]:e==="textarea"}function Cx(t,e,n,r){lx(r),e=Dd(e,"onChange"),0<e.length&&(n=new zg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jl=null,cu=null;function rC(t){Bx(t,0)}function Ch(t){var e=No(t);if(tx(e))return t}function sC(t,e){if(t==="change")return e}var Nx=!1;if(Cr){var am;if(Cr){var lm="oninput"in document;if(!lm){var b0=document.createElement("div");b0.setAttribute("oninput","return;"),lm=typeof b0.oninput=="function"}am=lm}else am=!1;Nx=am&&(!document.documentMode||9<document.documentMode)}function S0(){jl&&(jl.detachEvent("onpropertychange",Dx),cu=jl=null)}function Dx(t){if(t.propertyName==="value"&&Ch(cu)){var e=[];Cx(e,cu,t,Lg(t)),hx(rC,e)}}function iC(t,e,n){t==="focusin"?(S0(),jl=e,cu=n,jl.attachEvent("onpropertychange",Dx)):t==="focusout"&&S0()}function oC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ch(cu)}function aC(t,e){if(t==="click")return Ch(e)}function lC(t,e){if(t==="input"||t==="change")return Ch(e)}function uC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:uC;function du(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Gm.call(e,s)||!Bn(t[s],e[s]))return!1}return!0}function k0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function A0(t,e){var n=k0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=k0(n)}}function Vx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ox(){for(var t=window,e=Sd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sd(t.document)}return e}function Hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cC(t){var e=Ox(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vx(n.ownerDocument.documentElement,n)){if(r!==null&&Hg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=A0(n,i);var o=A0(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dC=Cr&&"documentMode"in document&&11>=document.documentMode,Ro=null,hp=null,Fl=null,fp=!1;function P0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||Ro==null||Ro!==Sd(r)||(r=Ro,"selectionStart"in r&&Hg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fl&&du(Fl,r)||(Fl=r,r=Dd(hp,"onSelect"),0<r.length&&(e=new zg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ro)))}function Rc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Co={animationend:Rc("Animation","AnimationEnd"),animationiteration:Rc("Animation","AnimationIteration"),animationstart:Rc("Animation","AnimationStart"),transitionend:Rc("Transition","TransitionEnd")},um={},Mx={};Cr&&(Mx=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Nh(t){if(um[t])return um[t];if(!Co[t])return t;var e=Co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mx)return um[t]=e[n];return t}var Lx=Nh("animationend"),jx=Nh("animationiteration"),Fx=Nh("animationstart"),Ux=Nh("transitionend"),$x=new Map,R0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hs(t,e){$x.set(t,e),Xi(e,[t])}for(var cm=0;cm<R0.length;cm++){var dm=R0[cm],hC=dm.toLowerCase(),fC=dm[0].toUpperCase()+dm.slice(1);Hs(hC,"on"+fC)}Hs(Lx,"onAnimationEnd");Hs(jx,"onAnimationIteration");Hs(Fx,"onAnimationStart");Hs("dblclick","onDoubleClick");Hs("focusin","onFocus");Hs("focusout","onBlur");Hs(Ux,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Al));function C0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hR(r,e,void 0,t),t.currentTarget=null}function Bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;C0(s,a,c),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;C0(s,a,c),i=l}}}if(Ad)throw t=lp,Ad=!1,lp=null,t}function De(t,e){var n=e[_p];n===void 0&&(n=e[_p]=new Set);var r=t+"__bubble";n.has(r)||(zx(e,t,2,!1),n.add(r))}function hm(t,e,n){var r=0;e&&(r|=4),zx(n,t,r,e)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function hu(t){if(!t[Cc]){t[Cc]=!0,YE.forEach(function(n){n!=="selectionchange"&&(mC.has(n)||hm(n,!1,t),hm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cc]||(e[Cc]=!0,hm("selectionchange",!1,e))}}function zx(t,e,n,r){switch(Sx(e)){case 1:var s=AR;break;case 4:s=PR;break;default:s=$g}n=s.bind(null,e,n,t),s=void 0,!ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function fm(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=vi(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}hx(function(){var c=i,d=Lg(n),f=[];e:{var p=$x.get(t);if(p!==void 0){var y=zg,E=t;switch(t){case"keypress":if(nd(n)===0)break e;case"keydown":case"keyup":y=qR;break;case"focusin":E="focus",y=om;break;case"focusout":E="blur",y=om;break;case"beforeblur":case"afterblur":y=om;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=w0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=NR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=GR;break;case Lx:case jx:case Fx:y=OR;break;case Ux:y=QR;break;case"scroll":y=RR;break;case"wheel":y=JR;break;case"copy":case"cut":case"paste":y=LR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=I0}var k=(e&4)!==0,R=!k&&t==="scroll",w=k?p!==null?p+"Capture":null:p;k=[];for(var _=c,v;_!==null;){v=_;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,w!==null&&(C=ou(_,w),C!=null&&k.push(fu(_,C,v)))),R)break;_=_.return}0<k.length&&(p=new y(p,E,null,n,d),f.push({event:p,listeners:k}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==ip&&(E=n.relatedTarget||n.fromElement)&&(vi(E)||E[Nr]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(E=n.relatedTarget||n.toElement,y=c,E=E?vi(E):null,E!==null&&(R=Zi(E),E!==R||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=c),y!==E)){if(k=w0,C="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=I0,C="onPointerLeave",w="onPointerEnter",_="pointer"),R=y==null?p:No(y),v=E==null?p:No(E),p=new k(C,_+"leave",y,n,d),p.target=R,p.relatedTarget=v,C=null,vi(d)===c&&(k=new k(w,_+"enter",E,n,d),k.target=v,k.relatedTarget=R,C=k),R=C,y&&E)t:{for(k=y,w=E,_=0,v=k;v;v=mo(v))_++;for(v=0,C=w;C;C=mo(C))v++;for(;0<_-v;)k=mo(k),_--;for(;0<v-_;)w=mo(w),v--;for(;_--;){if(k===w||w!==null&&k===w.alternate)break t;k=mo(k),w=mo(w)}k=null}else k=null;y!==null&&N0(f,p,y,k,!1),E!==null&&R!==null&&N0(f,R,E,k,!0)}}e:{if(p=c?No(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var F=sC;else if(T0(p))if(Nx)F=lC;else{F=oC;var M=iC}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=aC);if(F&&(F=F(t,c))){Cx(f,F,n,d);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&ep(p,"number",p.value)}switch(M=c?No(c):window,t){case"focusin":(T0(M)||M.contentEditable==="true")&&(Ro=M,hp=c,Fl=null);break;case"focusout":Fl=hp=Ro=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,P0(f,n,d);break;case"selectionchange":if(dC)break;case"keydown":case"keyup":P0(f,n,d)}var b;if(Wg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Po?Px(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Ax&&n.locale!=="ko"&&(Po||I!=="onCompositionStart"?I==="onCompositionEnd"&&Po&&(b=kx()):(ws=d,Bg="value"in ws?ws.value:ws.textContent,Po=!0)),M=Dd(c,I),0<M.length&&(I=new v0(I,t,null,n,d),f.push({event:I,listeners:M}),b?I.data=b:(b=Rx(n),b!==null&&(I.data=b)))),(b=ZR?eC(t,n):tC(t,n))&&(c=Dd(c,"onBeforeInput"),0<c.length&&(d=new v0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}Bx(f,e)})}function fu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dd(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ou(t,n),i!=null&&r.unshift(fu(t,i,s)),i=ou(t,e),i!=null&&r.push(fu(t,i,s))),t=t.return}return r}function mo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function N0(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,s?(l=ou(n,i),l!=null&&o.unshift(fu(n,l,a))):s||(l=ou(n,i),l!=null&&o.push(fu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pC=/\r\n?/g,gC=/\u0000|\uFFFD/g;function D0(t){return(typeof t=="string"?t:""+t).replace(pC,`
`).replace(gC,"")}function Nc(t,e,n){if(e=D0(e),D0(t)!==e&&n)throw Error(B(425))}function Vd(){}var mp=null,pp=null;function gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,yC=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,_C=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(wC)}:yp;function wC(t){setTimeout(function(){throw t})}function mm(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),uu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);uu(e)}function Ss(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function O0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Na=Math.random().toString(36).slice(2),er="__reactFiber$"+Na,mu="__reactProps$"+Na,Nr="__reactContainer$"+Na,_p="__reactEvents$"+Na,vC="__reactListeners$"+Na,IC="__reactHandles$"+Na;function vi(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=O0(t);t!==null;){if(n=t[er])return n;t=O0(t)}return e}t=n,n=t.parentNode}return null}function Uu(t){return t=t[er]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function No(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Dh(t){return t[mu]||null}var wp=[],Do=-1;function Gs(t){return{current:t}}function Me(t){0>Do||(t.current=wp[Do],wp[Do]=null,Do--)}function Pe(t,e){Do++,wp[Do]=t.current,t.current=e}var Ls={},Nt=Gs(Ls),Yt=Gs(!1),Ci=Ls;function na(t,e){var n=t.type.contextTypes;if(!n)return Ls;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Jt(t){return t=t.childContextTypes,t!=null}function Od(){Me(Yt),Me(Nt)}function M0(t,e,n){if(Nt.current!==Ls)throw Error(B(168));Pe(Nt,e),Pe(Yt,n)}function qx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,iR(t)||"Unknown",s));return ze({},n,r)}function Md(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ls,Ci=Nt.current,Pe(Nt,t),Pe(Yt,Yt.current),!0}function L0(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=qx(t,e,Ci),r.__reactInternalMemoizedMergedChildContext=t,Me(Yt),Me(Nt),Pe(Nt,t)):Me(Yt),Pe(Yt,n)}var Ir=null,Vh=!1,pm=!1;function Wx(t){Ir===null?Ir=[t]:Ir.push(t)}function EC(t){Vh=!0,Wx(t)}function Ks(){if(!pm&&Ir!==null){pm=!0;var t=0,e=Te;try{var n=Ir;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ir=null,Vh=!1}catch(s){throw Ir!==null&&(Ir=Ir.slice(t+1)),gx(jg,Ks),s}finally{Te=e,pm=!1}}return null}var Vo=[],Oo=0,Ld=null,jd=0,En=[],xn=0,Ni=null,xr=1,Tr="";function ci(t,e){Vo[Oo++]=jd,Vo[Oo++]=Ld,Ld=t,jd=e}function Hx(t,e,n){En[xn++]=xr,En[xn++]=Tr,En[xn++]=Ni,Ni=t;var r=xr;t=Tr;var s=32-jn(r)-1;r&=~(1<<s),n+=1;var i=32-jn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,xr=1<<32-jn(e)+s|n<<s|r,Tr=i+t}else xr=1<<i|n<<s|r,Tr=t}function Gg(t){t.return!==null&&(ci(t,1),Hx(t,1,0))}function Kg(t){for(;t===Ld;)Ld=Vo[--Oo],Vo[Oo]=null,jd=Vo[--Oo],Vo[Oo]=null;for(;t===Ni;)Ni=En[--xn],En[xn]=null,Tr=En[--xn],En[xn]=null,xr=En[--xn],En[xn]=null}var pn=null,fn=null,je=!1,On=null;function Gx(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function j0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,fn=Ss(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:xr,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,fn=null,!0):!1;default:return!1}}function vp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ip(t){if(je){var e=fn;if(e){var n=e;if(!j0(t,e)){if(vp(t))throw Error(B(418));e=Ss(n.nextSibling);var r=pn;e&&j0(t,e)?Gx(r,n):(t.flags=t.flags&-4097|2,je=!1,pn=t)}}else{if(vp(t))throw Error(B(418));t.flags=t.flags&-4097|2,je=!1,pn=t}}}function F0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Dc(t){if(t!==pn)return!1;if(!je)return F0(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gp(t.type,t.memoizedProps)),e&&(e=fn)){if(vp(t))throw Kx(),Error(B(418));for(;e;)Gx(t,e),e=Ss(e.nextSibling)}if(F0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Ss(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=pn?Ss(t.stateNode.nextSibling):null;return!0}function Kx(){for(var t=fn;t;)t=Ss(t.nextSibling)}function ra(){fn=pn=null,je=!1}function Qg(t){On===null?On=[t]:On.push(t)}var xC=Br.ReactCurrentBatchConfig;function pl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Vc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U0(t){var e=t._init;return e(t._payload)}function Qx(t){function e(w,_){if(t){var v=w.deletions;v===null?(w.deletions=[_],w.flags|=16):v.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=Rs(w,_),w.index=0,w.sibling=null,w}function i(w,_,v){return w.index=v,t?(v=w.alternate,v!==null?(v=v.index,v<_?(w.flags|=2,_):v):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,_,v,C){return _===null||_.tag!==6?(_=Em(v,w.mode,C),_.return=w,_):(_=s(_,v),_.return=w,_)}function l(w,_,v,C){var F=v.type;return F===Ao?d(w,_,v.props.children,C,v.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===as&&U0(F)===_.type)?(C=s(_,v.props),C.ref=pl(w,_,v),C.return=w,C):(C=ud(v.type,v.key,v.props,null,w.mode,C),C.ref=pl(w,_,v),C.return=w,C)}function c(w,_,v,C){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=xm(v,w.mode,C),_.return=w,_):(_=s(_,v.children||[]),_.return=w,_)}function d(w,_,v,C,F){return _===null||_.tag!==7?(_=Si(v,w.mode,C,F),_.return=w,_):(_=s(_,v),_.return=w,_)}function f(w,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Em(""+_,w.mode,v),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xc:return v=ud(_.type,_.key,_.props,null,w.mode,v),v.ref=pl(w,null,_),v.return=w,v;case ko:return _=xm(_,w.mode,v),_.return=w,_;case as:var C=_._init;return f(w,C(_._payload),v)}if(Sl(_)||cl(_))return _=Si(_,w.mode,v,null),_.return=w,_;Vc(w,_)}return null}function p(w,_,v,C){var F=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return F!==null?null:a(w,_,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xc:return v.key===F?l(w,_,v,C):null;case ko:return v.key===F?c(w,_,v,C):null;case as:return F=v._init,p(w,_,F(v._payload),C)}if(Sl(v)||cl(v))return F!==null?null:d(w,_,v,C,null);Vc(w,v)}return null}function y(w,_,v,C,F){if(typeof C=="string"&&C!==""||typeof C=="number")return w=w.get(v)||null,a(_,w,""+C,F);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case xc:return w=w.get(C.key===null?v:C.key)||null,l(_,w,C,F);case ko:return w=w.get(C.key===null?v:C.key)||null,c(_,w,C,F);case as:var M=C._init;return y(w,_,v,M(C._payload),F)}if(Sl(C)||cl(C))return w=w.get(v)||null,d(_,w,C,F,null);Vc(_,C)}return null}function E(w,_,v,C){for(var F=null,M=null,b=_,I=_=0,T=null;b!==null&&I<v.length;I++){b.index>I?(T=b,b=null):T=b.sibling;var S=p(w,b,v[I],C);if(S===null){b===null&&(b=T);break}t&&b&&S.alternate===null&&e(w,b),_=i(S,_,I),M===null?F=S:M.sibling=S,M=S,b=T}if(I===v.length)return n(w,b),je&&ci(w,I),F;if(b===null){for(;I<v.length;I++)b=f(w,v[I],C),b!==null&&(_=i(b,_,I),M===null?F=b:M.sibling=b,M=b);return je&&ci(w,I),F}for(b=r(w,b);I<v.length;I++)T=y(b,w,I,v[I],C),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?I:T.key),_=i(T,_,I),M===null?F=T:M.sibling=T,M=T);return t&&b.forEach(function(P){return e(w,P)}),je&&ci(w,I),F}function k(w,_,v,C){var F=cl(v);if(typeof F!="function")throw Error(B(150));if(v=F.call(v),v==null)throw Error(B(151));for(var M=F=null,b=_,I=_=0,T=null,S=v.next();b!==null&&!S.done;I++,S=v.next()){b.index>I?(T=b,b=null):T=b.sibling;var P=p(w,b,S.value,C);if(P===null){b===null&&(b=T);break}t&&b&&P.alternate===null&&e(w,b),_=i(P,_,I),M===null?F=P:M.sibling=P,M=P,b=T}if(S.done)return n(w,b),je&&ci(w,I),F;if(b===null){for(;!S.done;I++,S=v.next())S=f(w,S.value,C),S!==null&&(_=i(S,_,I),M===null?F=S:M.sibling=S,M=S);return je&&ci(w,I),F}for(b=r(w,b);!S.done;I++,S=v.next())S=y(b,w,I,S.value,C),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?I:S.key),_=i(S,_,I),M===null?F=S:M.sibling=S,M=S);return t&&b.forEach(function(N){return e(w,N)}),je&&ci(w,I),F}function R(w,_,v,C){if(typeof v=="object"&&v!==null&&v.type===Ao&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xc:e:{for(var F=v.key,M=_;M!==null;){if(M.key===F){if(F=v.type,F===Ao){if(M.tag===7){n(w,M.sibling),_=s(M,v.props.children),_.return=w,w=_;break e}}else if(M.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===as&&U0(F)===M.type){n(w,M.sibling),_=s(M,v.props),_.ref=pl(w,M,v),_.return=w,w=_;break e}n(w,M);break}else e(w,M);M=M.sibling}v.type===Ao?(_=Si(v.props.children,w.mode,C,v.key),_.return=w,w=_):(C=ud(v.type,v.key,v.props,null,w.mode,C),C.ref=pl(w,_,v),C.return=w,w=C)}return o(w);case ko:e:{for(M=v.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(w,_.sibling),_=s(_,v.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=xm(v,w.mode,C),_.return=w,w=_}return o(w);case as:return M=v._init,R(w,_,M(v._payload),C)}if(Sl(v))return E(w,_,v,C);if(cl(v))return k(w,_,v,C);Vc(w,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,v),_.return=w,w=_):(n(w,_),_=Em(v,w.mode,C),_.return=w,w=_),o(w)):n(w,_)}return R}var sa=Qx(!0),Yx=Qx(!1),Fd=Gs(null),Ud=null,Mo=null,Yg=null;function Jg(){Yg=Mo=Ud=null}function Xg(t){var e=Fd.current;Me(Fd),t._currentValue=e}function Ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qo(t,e){Ud=t,Yg=Mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ht=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Yg!==t)if(t={context:t,memoizedValue:e,next:null},Mo===null){if(Ud===null)throw Error(B(308));Mo=t,Ud.dependencies={lanes:0,firstContext:t}}else Mo=Mo.next=t;return e}var Ii=null;function Zg(t){Ii===null?Ii=[t]:Ii.push(t)}function Jx(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Zg(e)):(n.next=s.next,s.next=n),e.interleaved=n,Dr(t,r)}function Dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ls=!1;function ey(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ks(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Dr(t,n)}return s=r.interleaved,s===null?(e.next=e,Zg(r)):(e.next=s.next,s.next=e),r.interleaved=e,Dr(t,n)}function rd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fg(t,n)}}function $0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $d(t,e,n,r){var s=t.updateQueue;ls=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var f=s.baseState;o=0,d=c=l=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,k=a;switch(p=e,y=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){f=E.call(y,f,p);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,p=typeof E=="function"?E.call(y,f,p):E,p==null)break e;f=ze({},f,p);break e;case 2:ls=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=f):d=d.next=y,o|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(d===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=f}}function B0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var $u={},lr=Gs($u),pu=Gs($u),gu=Gs($u);function Ei(t){if(t===$u)throw Error(B(174));return t}function ty(t,e){switch(Pe(gu,e),Pe(pu,t),Pe(lr,$u),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=np(e,t)}Me(lr),Pe(lr,e)}function ia(){Me(lr),Me(pu),Me(gu)}function Zx(t){Ei(gu.current);var e=Ei(lr.current),n=np(e,t.type);e!==n&&(Pe(pu,t),Pe(lr,n))}function ny(t){pu.current===t&&(Me(lr),Me(pu))}var $e=Gs(0);function Bd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gm=[];function ry(){for(var t=0;t<gm.length;t++)gm[t]._workInProgressVersionPrimary=null;gm.length=0}var sd=Br.ReactCurrentDispatcher,ym=Br.ReactCurrentBatchConfig,Di=0,Be=null,rt=null,ht=null,zd=!1,Ul=!1,yu=0,TC=0;function bt(){throw Error(B(321))}function sy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function iy(t,e,n,r,s,i){if(Di=i,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sd.current=t===null||t.memoizedState===null?AC:PC,t=n(r,s),Ul){i=0;do{if(Ul=!1,yu=0,25<=i)throw Error(B(301));i+=1,ht=rt=null,e.updateQueue=null,sd.current=RC,t=n(r,s)}while(Ul)}if(sd.current=qd,e=rt!==null&&rt.next!==null,Di=0,ht=rt=Be=null,zd=!1,e)throw Error(B(300));return t}function oy(){var t=yu!==0;return yu=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Be.memoizedState=ht=t:ht=ht.next=t,ht}function kn(){if(rt===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=ht===null?Be.memoizedState:ht.next;if(e!==null)ht=e,rt=t;else{if(t===null)throw Error(B(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ht===null?Be.memoizedState=ht=t:ht=ht.next=t}return ht}function _u(t,e){return typeof e=="function"?e(t):e}function _m(t){var e=kn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=rt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,c=i;do{var d=c.lane;if((Di&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Be.lanes|=d,Vi|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=a,Bn(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Be.lanes|=i,Vi|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wm(t){var e=kn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Bn(i,e.memoizedState)||(Ht=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function eT(){}function tT(t,e){var n=Be,r=kn(),s=e(),i=!Bn(r.memoizedState,s);if(i&&(r.memoizedState=s,Ht=!0),r=r.queue,ay(sT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,wu(9,rT.bind(null,n,r,s,e),void 0,null),pt===null)throw Error(B(349));Di&30||nT(n,e,s)}return s}function nT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rT(t,e,n,r){e.value=n,e.getSnapshot=r,iT(e)&&oT(t)}function sT(t,e,n){return n(function(){iT(e)&&oT(t)})}function iT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function oT(t){var e=Dr(t,1);e!==null&&Fn(e,t,1,-1)}function z0(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_u,lastRenderedState:t},e.queue=t,t=t.dispatch=kC.bind(null,Be,t),[e.memoizedState,t]}function wu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function aT(){return kn().memoizedState}function id(t,e,n,r){var s=Jn();Be.flags|=t,s.memoizedState=wu(1|e,n,void 0,r===void 0?null:r)}function Oh(t,e,n,r){var s=kn();r=r===void 0?null:r;var i=void 0;if(rt!==null){var o=rt.memoizedState;if(i=o.destroy,r!==null&&sy(r,o.deps)){s.memoizedState=wu(e,n,i,r);return}}Be.flags|=t,s.memoizedState=wu(1|e,n,i,r)}function q0(t,e){return id(8390656,8,t,e)}function ay(t,e){return Oh(2048,8,t,e)}function lT(t,e){return Oh(4,2,t,e)}function uT(t,e){return Oh(4,4,t,e)}function cT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dT(t,e,n){return n=n!=null?n.concat([t]):null,Oh(4,4,cT.bind(null,e,t),n)}function ly(){}function hT(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fT(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mT(t,e,n){return Di&21?(Bn(n,e)||(n=wx(),Be.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=n)}function bC(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=ym.transition;ym.transition={};try{t(!1),e()}finally{Te=n,ym.transition=r}}function pT(){return kn().memoizedState}function SC(t,e,n){var r=Ps(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gT(t))yT(e,n);else if(n=Jx(t,e,n,r),n!==null){var s=Lt();Fn(n,t,r,s),_T(n,e,r)}}function kC(t,e,n){var r=Ps(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gT(t))yT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(s.next=s,Zg(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=Jx(t,e,s,r),n!==null&&(s=Lt(),Fn(n,t,r,s),_T(n,e,r))}}function gT(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function yT(t,e){Ul=zd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _T(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fg(t,n)}}var qd={readContext:Sn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},AC={readContext:Sn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:q0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,id(4194308,4,cT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return id(4194308,4,t,e)},useInsertionEffect:function(t,e){return id(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SC.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:z0,useDebugValue:ly,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=z0(!1),e=t[0];return t=bC.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,s=Jn();if(je){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),pt===null)throw Error(B(349));Di&30||nT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,q0(sT.bind(null,r,i,t),[t]),r.flags|=2048,wu(9,rT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Jn(),e=pt.identifierPrefix;if(je){var n=Tr,r=xr;n=(r&~(1<<32-jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=yu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PC={readContext:Sn,useCallback:hT,useContext:Sn,useEffect:ay,useImperativeHandle:dT,useInsertionEffect:lT,useLayoutEffect:uT,useMemo:fT,useReducer:_m,useRef:aT,useState:function(){return _m(_u)},useDebugValue:ly,useDeferredValue:function(t){var e=kn();return mT(e,rt.memoizedState,t)},useTransition:function(){var t=_m(_u)[0],e=kn().memoizedState;return[t,e]},useMutableSource:eT,useSyncExternalStore:tT,useId:pT,unstable_isNewReconciler:!1},RC={readContext:Sn,useCallback:hT,useContext:Sn,useEffect:ay,useImperativeHandle:dT,useInsertionEffect:lT,useLayoutEffect:uT,useMemo:fT,useReducer:wm,useRef:aT,useState:function(){return wm(_u)},useDebugValue:ly,useDeferredValue:function(t){var e=kn();return rt===null?e.memoizedState=t:mT(e,rt.memoizedState,t)},useTransition:function(){var t=wm(_u)[0],e=kn().memoizedState;return[t,e]},useMutableSource:eT,useSyncExternalStore:tT,useId:pT,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mh={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),s=Ps(t),i=Pr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ks(t,i,s),e!==null&&(Fn(e,t,s,r),rd(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),s=Ps(t),i=Pr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ks(t,i,s),e!==null&&(Fn(e,t,s,r),rd(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=Ps(t),s=Pr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ks(t,s,r),e!==null&&(Fn(e,t,r,n),rd(e,t,r))}};function W0(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!du(n,r)||!du(s,i):!0}function wT(t,e,n){var r=!1,s=Ls,i=e.contextType;return typeof i=="object"&&i!==null?i=Sn(i):(s=Jt(e)?Ci:Nt.current,r=e.contextTypes,i=(r=r!=null)?na(t,s):Ls),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function H0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mh.enqueueReplaceState(e,e.state,null)}function Tp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ey(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Sn(i):(i=Jt(e)?Ci:Nt.current,s.context=na(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(xp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Mh.enqueueReplaceState(s,s.state,null),$d(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,e){try{var n="",r=e;do n+=sR(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function vm(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CC=typeof WeakMap=="function"?WeakMap:Map;function vT(t,e,n){n=Pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hd||(Hd=!0,Op=r),bp(t,e)},n}function IT(t,e,n){n=Pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){bp(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bp(t,e),typeof r!="function"&&(As===null?As=new Set([this]):As.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function G0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CC;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=WC.bind(null,t,e,n),e.then(t,t))}function K0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Q0(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pr(-1,1),e.tag=2,ks(n,e,1))),n.lanes|=1),t)}var NC=Br.ReactCurrentOwner,Ht=!1;function Mt(t,e,n,r){e.child=t===null?Yx(e,null,n,r):sa(e,t.child,n,r)}function Y0(t,e,n,r,s){n=n.render;var i=e.ref;return qo(e,s),r=iy(t,e,n,r,i,s),n=oy(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Vr(t,e,s)):(je&&n&&Gg(e),e.flags|=1,Mt(t,e,r,s),e.child)}function J0(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!gy(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ET(t,e,i,r,s)):(t=ud(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:du,n(o,r)&&t.ref===e.ref)return Vr(t,e,s)}return e.flags|=1,t=Rs(i,r),t.ref=e.ref,t.return=e,e.child=t}function ET(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(du(i,r)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ht=!0);else return e.lanes=t.lanes,Vr(t,e,s)}return Sp(t,e,n,r,s)}function xT(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(jo,cn),cn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(jo,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Pe(jo,cn),cn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Pe(jo,cn),cn|=r;return Mt(t,e,s,n),e.child}function TT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sp(t,e,n,r,s){var i=Jt(n)?Ci:Nt.current;return i=na(e,i),qo(e,s),n=iy(t,e,n,r,i,s),r=oy(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Vr(t,e,s)):(je&&r&&Gg(e),e.flags|=1,Mt(t,e,n,s),e.child)}function X0(t,e,n,r,s){if(Jt(n)){var i=!0;Md(e)}else i=!1;if(qo(e,s),e.stateNode===null)od(t,e),wT(e,n,r),Tp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=Jt(n)?Ci:Nt.current,c=na(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&H0(e,o,r,c),ls=!1;var p=e.memoizedState;o.state=p,$d(e,r,o,s),l=e.memoizedState,a!==r||p!==l||Yt.current||ls?(typeof d=="function"&&(xp(e,n,d,r),l=e.memoizedState),(a=ls||W0(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Jt(n)?Ci:Nt.current,l=na(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&H0(e,o,r,l),ls=!1,p=e.memoizedState,o.state=p,$d(e,r,o,s);var E=e.memoizedState;a!==f||p!==E||Yt.current||ls?(typeof y=="function"&&(xp(e,n,y,r),E=e.memoizedState),(c=ls||W0(e,n,c,r,p,E,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return kp(t,e,n,r,i,s)}function kp(t,e,n,r,s,i){TT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&L0(e,n,!1),Vr(t,e,i);r=e.stateNode,NC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=sa(e,t.child,null,i),e.child=sa(e,null,a,i)):Mt(t,e,a,i),e.memoizedState=r.state,s&&L0(e,n,!0),e.child}function bT(t){var e=t.stateNode;e.pendingContext?M0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&M0(t,e.context,!1),ty(t,e.containerInfo)}function Z0(t,e,n,r,s){return ra(),Qg(s),e.flags|=256,Mt(t,e,n,r),e.child}var Ap={dehydrated:null,treeContext:null,retryLane:0};function Pp(t){return{baseLanes:t,cachePool:null,transitions:null}}function ST(t,e,n){var r=e.pendingProps,s=$e.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Pe($e,s&1),t===null)return Ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Fh(o,r,0,null),t=Si(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Pp(n),e.memoizedState=Ap,t):uy(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return DC(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Rs(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Rs(a,i):(i=Si(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Pp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Ap,r}return i=t.child,t=i.sibling,r=Rs(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uy(t,e){return e=Fh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oc(t,e,n,r){return r!==null&&Qg(r),sa(e,t.child,null,n),t=uy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DC(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=vm(Error(B(422))),Oc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Fh({mode:"visible",children:r.children},s,0,null),i=Si(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&sa(e,t.child,null,o),e.child.memoizedState=Pp(o),e.memoizedState=Ap,i);if(!(e.mode&1))return Oc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=vm(i,r,void 0),Oc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ht||a){if(r=pt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Dr(t,s),Fn(r,t,s,-1))}return py(),r=vm(Error(B(421))),Oc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=HC.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,fn=Ss(s.nextSibling),pn=e,je=!0,On=null,t!==null&&(En[xn++]=xr,En[xn++]=Tr,En[xn++]=Ni,xr=t.id,Tr=t.overflow,Ni=e),e=uy(e,r.children),e.flags|=4096,e)}function ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ep(t.return,e,n)}function Im(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function kT(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Mt(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ev(t,n,e);else if(t.tag===19)ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe($e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Bd(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Im(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Bd(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Im(e,!0,n,null,i);break;case"together":Im(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function od(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Rs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VC(t,e,n){switch(e.tag){case 3:bT(e),ra();break;case 5:Zx(e);break;case 1:Jt(e.type)&&Md(e);break;case 4:ty(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Pe(Fd,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?ST(t,e,n):(Pe($e,$e.current&1),t=Vr(t,e,n),t!==null?t.sibling:null);Pe($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kT(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Pe($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,xT(t,e,n)}return Vr(t,e,n)}var AT,Rp,PT,RT;AT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rp=function(){};PT=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ei(lr.current);var i=null;switch(n){case"input":s=Xm(t,s),r=Xm(t,r),i=[];break;case"select":s=ze({},s,{value:void 0}),r=ze({},r,{value:void 0}),i=[];break;case"textarea":s=tp(t,s),r=tp(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vd)}rp(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(su.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(su.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&De("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};RT=function(t,e,n,r){n!==r&&(e.flags|=4)};function gl(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OC(t,e,n){var r=e.pendingProps;switch(Kg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Jt(e.type)&&Od(),St(e),null;case 3:return r=e.stateNode,ia(),Me(Yt),Me(Nt),ry(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(jp(On),On=null))),Rp(t,e),St(e),null;case 5:ny(e);var s=Ei(gu.current);if(n=e.type,t!==null&&e.stateNode!=null)PT(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return St(e),null}if(t=Ei(lr.current),Dc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[er]=e,r[mu]=i,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(s=0;s<Al.length;s++)De(Al[s],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":u0(r,i),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},De("invalid",r);break;case"textarea":d0(r,i),De("invalid",r)}rp(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Nc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Nc(r.textContent,a,t),s=["children",""+a]):su.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":Tc(r),c0(r,i,!0);break;case"textarea":Tc(r),h0(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vd)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[mu]=r,AT(t,e,!1,!1),e.stateNode=t;e:{switch(o=sp(n,r),n){case"dialog":De("cancel",t),De("close",t),s=r;break;case"iframe":case"object":case"embed":De("load",t),s=r;break;case"video":case"audio":for(s=0;s<Al.length;s++)De(Al[s],t);s=r;break;case"source":De("error",t),s=r;break;case"img":case"image":case"link":De("error",t),De("load",t),s=r;break;case"details":De("toggle",t),s=r;break;case"input":u0(t,r),s=Xm(t,r),De("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ze({},r,{value:void 0}),De("invalid",t);break;case"textarea":d0(t,r),s=tp(t,r),De("invalid",t);break;default:s=r}rp(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?ax(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ix(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&iu(t,l):typeof l=="number"&&iu(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(su.hasOwnProperty(i)?l!=null&&i==="onScroll"&&De("scroll",t):l!=null&&Dg(t,i,l,o))}switch(n){case"input":Tc(t),c0(t,r,!1);break;case"textarea":Tc(t),h0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ms(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Uo(t,!!r.multiple,i,!1):r.defaultValue!=null&&Uo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Vd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)RT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ei(gu.current),Ei(lr.current),Dc(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(i=r.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:Nc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return St(e),null;case 13:if(Me($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&fn!==null&&e.mode&1&&!(e.flags&128))Kx(),ra(),e.flags|=98560,i=!1;else if(i=Dc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[er]=e}else ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),i=!1}else On!==null&&(jp(On),On=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?ot===0&&(ot=3):py())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return ia(),Rp(t,e),t===null&&hu(e.stateNode.containerInfo),St(e),null;case 10:return Xg(e.type._context),St(e),null;case 17:return Jt(e.type)&&Od(),St(e),null;case 19:if(Me($e),i=e.memoizedState,i===null)return St(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)gl(i,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bd(t),o!==null){for(e.flags|=128,gl(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe($e,$e.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ye()>aa&&(e.flags|=128,r=!0,gl(i,!1),e.lanes=4194304)}else{if(!r)if(t=Bd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!je)return St(e),null}else 2*Ye()-i.renderingStartTime>aa&&n!==1073741824&&(e.flags|=128,r=!0,gl(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ye(),e.sibling=null,n=$e.current,Pe($e,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return my(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?cn&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function MC(t,e){switch(Kg(e),e.tag){case 1:return Jt(e.type)&&Od(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ia(),Me(Yt),Me(Nt),ry(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ny(e),null;case 13:if(Me($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me($e),null;case 4:return ia(),null;case 10:return Xg(e.type._context),null;case 22:case 23:return my(),null;case 24:return null;default:return null}}var Mc=!1,Pt=!1,LC=typeof WeakSet=="function"?WeakSet:Set,K=null;function Lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function Cp(t,e,n){try{n()}catch(r){He(t,e,r)}}var tv=!1;function jC(t,e){if(mp=Cd,t=Ox(),Hg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var y;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===t)break t;if(p===n&&++c===s&&(a=o),p===i&&++d===r&&(l=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pp={focusedElem:t,selectionRange:n},Cd=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,R=E.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:Nn(e.type,k),R);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(C){He(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return E=tv,tv=!1,E}function $l(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Cp(e,n,i)}s=s.next}while(s!==r)}}function Lh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CT(t){var e=t.alternate;e!==null&&(t.alternate=null,CT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[mu],delete e[_p],delete e[vC],delete e[IC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function NT(t){return t.tag===5||t.tag===3||t.tag===4}function nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||NT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vd));else if(r!==4&&(t=t.child,t!==null))for(Dp(t,e,n),t=t.sibling;t!==null;)Dp(t,e,n),t=t.sibling}function Vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vp(t,e,n),t=t.sibling;t!==null;)Vp(t,e,n),t=t.sibling}var wt=null,Dn=!1;function ts(t,e,n){for(n=n.child;n!==null;)DT(t,e,n),n=n.sibling}function DT(t,e,n){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(Ph,n)}catch{}switch(n.tag){case 5:Pt||Lo(n,e);case 6:var r=wt,s=Dn;wt=null,ts(t,e,n),wt=r,Dn=s,wt!==null&&(Dn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Dn?(t=wt,n=n.stateNode,t.nodeType===8?mm(t.parentNode,n):t.nodeType===1&&mm(t,n),uu(t)):mm(wt,n.stateNode));break;case 4:r=wt,s=Dn,wt=n.stateNode.containerInfo,Dn=!0,ts(t,e,n),wt=r,Dn=s;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Cp(n,e,o),s=s.next}while(s!==r)}ts(t,e,n);break;case 1:if(!Pt&&(Lo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}ts(t,e,n);break;case 21:ts(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,ts(t,e,n),Pt=r):ts(t,e,n);break;default:ts(t,e,n)}}function rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LC),e.forEach(function(r){var s=GC.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,Dn=!1;break e;case 3:wt=a.stateNode.containerInfo,Dn=!0;break e;case 4:wt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(wt===null)throw Error(B(160));DT(i,o,s),wt=null,Dn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){He(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)VT(e,t),e=e.sibling}function VT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Yn(t),r&4){try{$l(3,t,t.return),Lh(3,t)}catch(k){He(t,t.return,k)}try{$l(5,t,t.return)}catch(k){He(t,t.return,k)}}break;case 1:Cn(e,t),Yn(t),r&512&&n!==null&&Lo(n,n.return);break;case 5:if(Cn(e,t),Yn(t),r&512&&n!==null&&Lo(n,n.return),t.flags&32){var s=t.stateNode;try{iu(s,"")}catch(k){He(t,t.return,k)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&nx(s,i),sp(a,o);var c=sp(a,i);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ax(s,f):d==="dangerouslySetInnerHTML"?ix(s,f):d==="children"?iu(s,f):Dg(s,d,f,c)}switch(a){case"input":Zm(s,i);break;case"textarea":rx(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Uo(s,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Uo(s,!!i.multiple,i.defaultValue,!0):Uo(s,!!i.multiple,i.multiple?[]:"",!1))}s[mu]=i}catch(k){He(t,t.return,k)}}break;case 6:if(Cn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(k){He(t,t.return,k)}}break;case 3:if(Cn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uu(e.containerInfo)}catch(k){He(t,t.return,k)}break;case 4:Cn(e,t),Yn(t);break;case 13:Cn(e,t),Yn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(hy=Ye())),r&4&&rv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(c=Pt)||d,Cn(e,t),Pt=c):Cn(e,t),Yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(K=t,d=t.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,y=p.child,p.tag){case 0:case 11:case 14:case 15:$l(4,p,p.return);break;case 1:Lo(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(k){He(r,n,k)}}break;case 5:Lo(p,p.return);break;case 22:if(p.memoizedState!==null){iv(f);continue}}y!==null?(y.return=p,K=y):iv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ox("display",o))}catch(k){He(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){He(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),Yn(t),r&4&&rv(t);break;case 21:break;default:Cn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(NT(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(iu(s,""),r.flags&=-33);var i=nv(t);Vp(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nv(t);Dp(t,a,o);break;default:throw Error(B(161))}}catch(l){He(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FC(t,e,n){K=t,OT(t)}function OT(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Mc;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=Mc;var c=Pt;if(Mc=o,(Pt=l)&&!c)for(K=s;K!==null;)o=K,l=o.child,o.tag===22&&o.memoizedState!==null?ov(s):l!==null?(l.return=o,K=l):ov(s);for(;i!==null;)K=i,OT(i),i=i.sibling;K=s,Mc=a,Pt=c}sv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):sv(t)}}function sv(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||Lh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&B0(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}B0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&uu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Pt||e.flags&512&&Np(e)}catch(p){He(e,e.return,p)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function iv(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function ov(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lh(4,e)}catch(l){He(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){He(e,s,l)}}var i=e.return;try{Np(e)}catch(l){He(e,i,l)}break;case 5:var o=e.return;try{Np(e)}catch(l){He(e,o,l)}}}catch(l){He(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var UC=Math.ceil,Wd=Br.ReactCurrentDispatcher,cy=Br.ReactCurrentOwner,bn=Br.ReactCurrentBatchConfig,pe=0,pt=null,et=null,It=0,cn=0,jo=Gs(0),ot=0,vu=null,Vi=0,jh=0,dy=0,Bl=null,qt=null,hy=0,aa=1/0,vr=null,Hd=!1,Op=null,As=null,Lc=!1,vs=null,Gd=0,zl=0,Mp=null,ad=-1,ld=0;function Lt(){return pe&6?Ye():ad!==-1?ad:ad=Ye()}function Ps(t){return t.mode&1?pe&2&&It!==0?It&-It:xC.transition!==null?(ld===0&&(ld=wx()),ld):(t=Te,t!==0||(t=window.event,t=t===void 0?16:Sx(t.type)),t):1}function Fn(t,e,n,r){if(50<zl)throw zl=0,Mp=null,Error(B(185));ju(t,n,r),(!(pe&2)||t!==pt)&&(t===pt&&(!(pe&2)&&(jh|=n),ot===4&&cs(t,It)),Xt(t,r),n===1&&pe===0&&!(e.mode&1)&&(aa=Ye()+500,Vh&&Ks()))}function Xt(t,e){var n=t.callbackNode;xR(t,e);var r=Rd(t,t===pt?It:0);if(r===0)n!==null&&p0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&p0(n),e===1)t.tag===0?EC(av.bind(null,t)):Wx(av.bind(null,t)),_C(function(){!(pe&6)&&Ks()}),n=null;else{switch(vx(r)){case 1:n=jg;break;case 4:n=yx;break;case 16:n=Pd;break;case 536870912:n=_x;break;default:n=Pd}n=zT(n,MT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function MT(t,e){if(ad=-1,ld=0,pe&6)throw Error(B(327));var n=t.callbackNode;if(Wo()&&t.callbackNode!==n)return null;var r=Rd(t,t===pt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kd(t,r);else{e=r;var s=pe;pe|=2;var i=jT();(pt!==t||It!==e)&&(vr=null,aa=Ye()+500,bi(t,e));do try{zC();break}catch(a){LT(t,a)}while(!0);Jg(),Wd.current=i,pe=s,et!==null?e=0:(pt=null,It=0,e=ot)}if(e!==0){if(e===2&&(s=up(t),s!==0&&(r=s,e=Lp(t,s))),e===1)throw n=vu,bi(t,0),cs(t,r),Xt(t,Ye()),n;if(e===6)cs(t,r);else{if(s=t.current.alternate,!(r&30)&&!$C(s)&&(e=Kd(t,r),e===2&&(i=up(t),i!==0&&(r=i,e=Lp(t,i))),e===1))throw n=vu,bi(t,0),cs(t,r),Xt(t,Ye()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:di(t,qt,vr);break;case 3:if(cs(t,r),(r&130023424)===r&&(e=hy+500-Ye(),10<e)){if(Rd(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=yp(di.bind(null,t,qt,vr),e);break}di(t,qt,vr);break;case 4:if(cs(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-jn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UC(r/1960))-r,10<r){t.timeoutHandle=yp(di.bind(null,t,qt,vr),r);break}di(t,qt,vr);break;case 5:di(t,qt,vr);break;default:throw Error(B(329))}}}return Xt(t,Ye()),t.callbackNode===n?MT.bind(null,t):null}function Lp(t,e){var n=Bl;return t.current.memoizedState.isDehydrated&&(bi(t,e).flags|=256),t=Kd(t,e),t!==2&&(e=qt,qt=n,e!==null&&jp(e)),t}function jp(t){qt===null?qt=t:qt.push.apply(qt,t)}function $C(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Bn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cs(t,e){for(e&=~dy,e&=~jh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),r=1<<n;t[n]=-1,e&=~r}}function av(t){if(pe&6)throw Error(B(327));Wo();var e=Rd(t,0);if(!(e&1))return Xt(t,Ye()),null;var n=Kd(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=Lp(t,r))}if(n===1)throw n=vu,bi(t,0),cs(t,e),Xt(t,Ye()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,di(t,qt,vr),Xt(t,Ye()),null}function fy(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(aa=Ye()+500,Vh&&Ks())}}function Oi(t){vs!==null&&vs.tag===0&&!(pe&6)&&Wo();var e=pe;pe|=1;var n=bn.transition,r=Te;try{if(bn.transition=null,Te=1,t)return t()}finally{Te=r,bn.transition=n,pe=e,!(pe&6)&&Ks()}}function my(){cn=jo.current,Me(jo)}function bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yC(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(Kg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Od();break;case 3:ia(),Me(Yt),Me(Nt),ry();break;case 5:ny(r);break;case 4:ia();break;case 13:Me($e);break;case 19:Me($e);break;case 10:Xg(r.type._context);break;case 22:case 23:my()}n=n.return}if(pt=t,et=t=Rs(t.current,null),It=cn=e,ot=0,vu=null,dy=jh=Vi=0,qt=Bl=null,Ii!==null){for(e=0;e<Ii.length;e++)if(n=Ii[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ii=null}return t}function LT(t,e){do{var n=et;try{if(Jg(),sd.current=qd,zd){for(var r=Be.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}zd=!1}if(Di=0,ht=rt=Be=null,Ul=!1,yu=0,cy.current=null,n===null||n.return===null){ot=1,vu=e,et=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=K0(o);if(y!==null){y.flags&=-257,Q0(y,o,a,i,e),y.mode&1&&G0(i,c,e),e=y,l=c;var E=e.updateQueue;if(E===null){var k=new Set;k.add(l),e.updateQueue=k}else E.add(l);break e}else{if(!(e&1)){G0(i,c,e),py();break e}l=Error(B(426))}}else if(je&&a.mode&1){var R=K0(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Q0(R,o,a,i,e),Qg(oa(l,a));break e}}i=l=oa(l,a),ot!==4&&(ot=2),Bl===null?Bl=[i]:Bl.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=vT(i,l,e);$0(i,w);break e;case 1:a=l;var _=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(As===null||!As.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var C=IT(i,a,e);$0(i,C);break e}}i=i.return}while(i!==null)}UT(n)}catch(F){e=F,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function jT(){var t=Wd.current;return Wd.current=qd,t===null?qd:t}function py(){(ot===0||ot===3||ot===2)&&(ot=4),pt===null||!(Vi&268435455)&&!(jh&268435455)||cs(pt,It)}function Kd(t,e){var n=pe;pe|=2;var r=jT();(pt!==t||It!==e)&&(vr=null,bi(t,e));do try{BC();break}catch(s){LT(t,s)}while(!0);if(Jg(),pe=n,Wd.current=r,et!==null)throw Error(B(261));return pt=null,It=0,ot}function BC(){for(;et!==null;)FT(et)}function zC(){for(;et!==null&&!mR();)FT(et)}function FT(t){var e=BT(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?UT(t):et=e,cy.current=null}function UT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MC(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,et=null;return}}else if(n=OC(n,e,cn),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);ot===0&&(ot=5)}function di(t,e,n){var r=Te,s=bn.transition;try{bn.transition=null,Te=1,qC(t,e,n,r)}finally{bn.transition=s,Te=r}return null}function qC(t,e,n,r){do Wo();while(vs!==null);if(pe&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(TR(t,i),t===pt&&(et=pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lc||(Lc=!0,zT(Pd,function(){return Wo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=bn.transition,bn.transition=null;var o=Te;Te=1;var a=pe;pe|=4,cy.current=null,jC(t,n),VT(n,t),cC(pp),Cd=!!mp,pp=mp=null,t.current=n,FC(n),pR(),pe=a,Te=o,bn.transition=i}else t.current=n;if(Lc&&(Lc=!1,vs=t,Gd=s),i=t.pendingLanes,i===0&&(As=null),_R(n.stateNode),Xt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Hd)throw Hd=!1,t=Op,Op=null,t;return Gd&1&&t.tag!==0&&Wo(),i=t.pendingLanes,i&1?t===Mp?zl++:(zl=0,Mp=t):zl=0,Ks(),null}function Wo(){if(vs!==null){var t=vx(Gd),e=bn.transition,n=Te;try{if(bn.transition=null,Te=16>t?16:t,vs===null)var r=!1;else{if(t=vs,vs=null,Gd=0,pe&6)throw Error(B(331));var s=pe;for(pe|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:$l(8,d,i)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,y=d.return;if(CT(d),d===c){K=null;break}if(p!==null){p.return=y,K=p;break}K=y}}}var E=i.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$l(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,K=w;break e}K=i.return}}var _=t.current;for(K=_;K!==null;){o=K;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,K=v;else e:for(o=_;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lh(9,a)}}catch(F){He(a,a.return,F)}if(a===o){K=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,K=C;break e}K=a.return}}if(pe=s,Ks(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(Ph,t)}catch{}r=!0}return r}finally{Te=n,bn.transition=e}}return!1}function lv(t,e,n){e=oa(n,e),e=vT(t,e,1),t=ks(t,e,1),e=Lt(),t!==null&&(ju(t,1,e),Xt(t,e))}function He(t,e,n){if(t.tag===3)lv(t,t,n);else for(;e!==null;){if(e.tag===3){lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(As===null||!As.has(r))){t=oa(n,t),t=IT(e,t,1),e=ks(e,t,1),t=Lt(),e!==null&&(ju(e,1,t),Xt(e,t));break}}e=e.return}}function WC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(It&n)===n&&(ot===4||ot===3&&(It&130023424)===It&&500>Ye()-hy?bi(t,0):dy|=n),Xt(t,e)}function $T(t,e){e===0&&(t.mode&1?(e=kc,kc<<=1,!(kc&130023424)&&(kc=4194304)):e=1);var n=Lt();t=Dr(t,e),t!==null&&(ju(t,e,n),Xt(t,n))}function HC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$T(t,n)}function GC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),$T(t,n)}var BT;BT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ht=!1,VC(t,e,n);Ht=!!(t.flags&131072)}else Ht=!1,je&&e.flags&1048576&&Hx(e,jd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;od(t,e),t=e.pendingProps;var s=na(e,Nt.current);qo(e,n),s=iy(null,e,r,t,s,n);var i=oy();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(i=!0,Md(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ey(e),s.updater=Mh,e.stateNode=s,s._reactInternals=e,Tp(e,r,t,n),e=kp(null,e,r,!0,i,n)):(e.tag=0,je&&i&&Gg(e),Mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(od(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=QC(r),t=Nn(r,t),s){case 0:e=Sp(null,e,r,t,n);break e;case 1:e=X0(null,e,r,t,n);break e;case 11:e=Y0(null,e,r,t,n);break e;case 14:e=J0(null,e,r,Nn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),Sp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),X0(t,e,r,s,n);case 3:e:{if(bT(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Xx(t,e),$d(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=oa(Error(B(423)),e),e=Z0(t,e,r,n,s);break e}else if(r!==s){s=oa(Error(B(424)),e),e=Z0(t,e,r,n,s);break e}else for(fn=Ss(e.stateNode.containerInfo.firstChild),pn=e,je=!0,On=null,n=Yx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),r===s){e=Vr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return Zx(e),t===null&&Ip(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,gp(r,s)?o=null:i!==null&&gp(r,i)&&(e.flags|=32),TT(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&Ip(e),null;case 13:return ST(t,e,n);case 4:return ty(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=sa(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),Y0(t,e,r,s,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Pe(Fd,r._currentValue),r._currentValue=o,i!==null)if(Bn(i.value,o)){if(i.children===s.children&&!Yt.current){e=Vr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Pr(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ep(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ep(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,qo(e,n),s=Sn(s),r=r(s),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,s=Nn(r,e.pendingProps),s=Nn(r.type,s),J0(t,e,r,s,n);case 15:return ET(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),od(t,e),e.tag=1,Jt(r)?(t=!0,Md(e)):t=!1,qo(e,n),wT(e,r,s),Tp(e,r,s,n),kp(null,e,r,!0,t,n);case 19:return kT(t,e,n);case 22:return xT(t,e,n)}throw Error(B(156,e.tag))};function zT(t,e){return gx(t,e)}function KC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,r){return new KC(t,e,n,r)}function gy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QC(t){if(typeof t=="function")return gy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Og)return 11;if(t===Mg)return 14}return 2}function Rs(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ud(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")gy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ao:return Si(n.children,s,i,e);case Vg:o=8,s|=8;break;case Km:return t=Tn(12,n,e,s|2),t.elementType=Km,t.lanes=i,t;case Qm:return t=Tn(13,n,e,s),t.elementType=Qm,t.lanes=i,t;case Ym:return t=Tn(19,n,e,s),t.elementType=Ym,t.lanes=i,t;case ZE:return Fh(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case JE:o=10;break e;case XE:o=9;break e;case Og:o=11;break e;case Mg:o=14;break e;case as:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Si(t,e,n,r){return t=Tn(7,t,r,e),t.lanes=n,t}function Fh(t,e,n,r){return t=Tn(22,t,r,e),t.elementType=ZE,t.lanes=n,t.stateNode={isHidden:!1},t}function Em(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function xm(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YC(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rm(0),this.expirationTimes=rm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rm(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function yy(t,e,n,r,s,i,o,a,l){return t=new YC(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Tn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ey(i),t}function JC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ko,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qT(t){if(!t)return Ls;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Jt(n))return qx(t,n,e)}return e}function WT(t,e,n,r,s,i,o,a,l){return t=yy(n,r,!0,t,s,i,o,a,l),t.context=qT(null),n=t.current,r=Lt(),s=Ps(n),i=Pr(r,s),i.callback=e??null,ks(n,i,s),t.current.lanes=s,ju(t,s,r),Xt(t,r),t}function Uh(t,e,n,r){var s=e.current,i=Lt(),o=Ps(s);return n=qT(n),e.context===null?e.context=n:e.pendingContext=n,e=Pr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ks(s,e,o),t!==null&&(Fn(t,s,o,i),rd(t,s,o)),o}function Qd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _y(t,e){uv(t,e),(t=t.alternate)&&uv(t,e)}function XC(){return null}var HT=typeof reportError=="function"?reportError:function(t){console.error(t)};function wy(t){this._internalRoot=t}$h.prototype.render=wy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Uh(t,e,null,null)};$h.prototype.unmount=wy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oi(function(){Uh(null,t,null,null)}),e[Nr]=null}};function $h(t){this._internalRoot=t}$h.prototype.unstable_scheduleHydration=function(t){if(t){var e=xx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<us.length&&e!==0&&e<us[n].priority;n++);us.splice(n,0,t),n===0&&bx(t)}};function vy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cv(){}function ZC(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Qd(o);i.call(c)}}var o=WT(e,r,t,0,null,!1,!1,"",cv);return t._reactRootContainer=o,t[Nr]=o.current,hu(t.nodeType===8?t.parentNode:t),Oi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=Qd(l);a.call(c)}}var l=yy(t,0,!1,null,null,!1,!1,"",cv);return t._reactRootContainer=l,t[Nr]=l.current,hu(t.nodeType===8?t.parentNode:t),Oi(function(){Uh(e,l,n,r)}),l}function zh(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Qd(o);a.call(l)}}Uh(e,o,t,s)}else o=ZC(n,e,t,s,r);return Qd(o)}Ix=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=kl(e.pendingLanes);n!==0&&(Fg(e,n|1),Xt(e,Ye()),!(pe&6)&&(aa=Ye()+500,Ks()))}break;case 13:Oi(function(){var r=Dr(t,1);if(r!==null){var s=Lt();Fn(r,t,1,s)}}),_y(t,1)}};Ug=function(t){if(t.tag===13){var e=Dr(t,134217728);if(e!==null){var n=Lt();Fn(e,t,134217728,n)}_y(t,134217728)}};Ex=function(t){if(t.tag===13){var e=Ps(t),n=Dr(t,e);if(n!==null){var r=Lt();Fn(n,t,e,r)}_y(t,e)}};xx=function(){return Te};Tx=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};op=function(t,e,n){switch(e){case"input":if(Zm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Dh(r);if(!s)throw Error(B(90));tx(r),Zm(r,s)}}}break;case"textarea":rx(t,n);break;case"select":e=n.value,e!=null&&Uo(t,!!n.multiple,e,!1)}};cx=fy;dx=Oi;var eN={usingClientEntryPoint:!1,Events:[Uu,No,Dh,lx,ux,fy]},yl={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tN={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mx(t),t===null?null:t.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||XC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{Ph=jc.inject(tN),ar=jc}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eN;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vy(e))throw Error(B(200));return JC(t,e,null,n)};vn.createRoot=function(t,e){if(!vy(t))throw Error(B(299));var n=!1,r="",s=HT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=yy(t,1,!1,null,null,n,!1,r,s),t[Nr]=e.current,hu(t.nodeType===8?t.parentNode:t),new wy(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=mx(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Oi(t)};vn.hydrate=function(t,e,n){if(!Bh(e))throw Error(B(200));return zh(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!vy(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=HT;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=WT(e,null,t,1,n??null,s,!1,i,o),t[Nr]=e.current,hu(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new $h(e)};vn.render=function(t,e,n){if(!Bh(e))throw Error(B(200));return zh(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Bh(t))throw Error(B(40));return t._reactRootContainer?(Oi(function(){zh(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1};vn.unstable_batchedUpdates=fy;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return zh(t,e,n,!1,r)};vn.version="18.3.1-next-f1338f8080-20240426";function GT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GT)}catch(t){console.error(t)}}GT(),GE.exports=vn;var nN=GE.exports,KT,dv=nN;KT=dv.createRoot,dv.hydrateRoot;const rN="modulepreload",sN=function(t){return"/"+t},hv={},QT=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=sN(l),l in hv)return;hv[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":rN,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,y)=>{f.addEventListener("load",p),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let iN={data:""},oN=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||iN},aN=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,lN=/\/\*[^]*?\*\/|  +/g,fv=/\n+/g,ds=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?ds(o,i):i+"{"+ds(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=ds(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=ds.p?ds.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},wr={},YT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+YT(t[n]);return e}return t},uN=(t,e,n,r,s)=>{let i=YT(t),o=wr[i]||(wr[i]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(i));if(!wr[o]){let l=i!==t?t:(c=>{let d,f,p=[{}];for(;d=aN.exec(c.replace(lN,""));)d[4]?p.shift():d[3]?(f=d[3].replace(fv," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][d[1]]=d[2].replace(fv," ").trim();return p[0]})(t);wr[o]=ds(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&wr.g?wr.g:null;return n&&(wr.g=wr[o]),((l,c,d,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})(wr[o],e,r,a),o},cN=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":ds(a,""):a===!1?"":a}return r+s+(o??"")},"");function qh(t){let e=this||{},n=t.call?t(e.p):t;return uN(n.unshift?n.raw?cN(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,oN(e.target),e.g,e.o,e.k)}let JT,Fp,Up;qh.bind({g:1});let Or=qh.bind({k:1});function dN(t,e,n,r){ds.p=e,JT=t,Fp=n,Up=r}function Qs(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:Fp&&Fp()},a),n.o=/ *go\d+/.test(l),a.className=qh.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),Up&&c[0]&&Up(a),JT(c,a)}return s}}var hN=t=>typeof t=="function",Yd=(t,e)=>hN(t)?t(e):t,fN=(()=>{let t=0;return()=>(++t).toString()})(),XT=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),mN=20,Iy="default",ZT=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return ZT(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},cd=[],e1={toasts:[],pausedAt:void 0,settings:{toastLimit:mN}},rr={},t1=(t,e=Iy)=>{rr[e]=ZT(rr[e]||e1,t),cd.forEach(([n,r])=>{n===e&&r(rr[e])})},n1=t=>Object.keys(rr).forEach(e=>t1(t,e)),pN=t=>Object.keys(rr).find(e=>rr[e].toasts.some(n=>n.id===t)),Wh=(t=Iy)=>e=>{t1(e,t)},gN={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},yN=(t={},e=Iy)=>{let[n,r]=L.useState(rr[e]||e1),s=L.useRef(rr[e]);L.useEffect(()=>(s.current!==rr[e]&&r(rr[e]),cd.push([e,r]),()=>{let o=cd.findIndex(([a])=>a===e);o>-1&&cd.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||gN[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:i}},_N=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||fN()}),Bu=t=>(e,n)=>{let r=_N(e,t,n);return Wh(r.toasterId||pN(r.id))({type:2,toast:r}),r.id},st=(t,e)=>Bu("blank")(t,e);st.error=Bu("error");st.success=Bu("success");st.loading=Bu("loading");st.custom=Bu("custom");st.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Wh(e)(n):n1(n)};st.dismissAll=t=>st.dismiss(void 0,t);st.remove=(t,e)=>{let n={type:4,toastId:t};e?Wh(e)(n):n1(n)};st.removeAll=t=>st.remove(void 0,t);st.promise=(t,e,n)=>{let r=st.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?Yd(e.success,s):void 0;return i?st.success(i,{id:r,...n,...n==null?void 0:n.success}):st.dismiss(r),s}).catch(s=>{let i=e.error?Yd(e.error,s):void 0;i?st.error(i,{id:r,...n,...n==null?void 0:n.error}):st.dismiss(r)}),t};var wN=1e3,vN=(t,e="default")=>{let{toasts:n,pausedAt:r}=yN(t,e),s=L.useRef(new Map).current,i=L.useCallback((f,p=wN)=>{if(s.has(f))return;let y=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},p);s.set(f,y)},[]);L.useEffect(()=>{if(r)return;let f=Date.now(),p=n.map(y=>{if(y.duration===1/0)return;let E=(y.duration||0)+y.pauseDuration-(f-y.createdAt);if(E<0){y.visible&&st.dismiss(y.id);return}return setTimeout(()=>st.dismiss(y.id,e),E)});return()=>{p.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=L.useCallback(Wh(e),[e]),a=L.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=L.useCallback((f,p)=>{o({type:1,toast:{id:f,height:p}})},[o]),c=L.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=L.useCallback((f,p)=>{let{reverseOrder:y=!1,gutter:E=8,defaultPosition:k}=p||{},R=n.filter(v=>(v.position||k)===(f.position||k)&&v.height),w=R.findIndex(v=>v.id===f.id),_=R.filter((v,C)=>C<w&&v.visible).length;return R.filter(v=>v.visible).slice(...y?[_+1]:[0,_]).reduce((v,C)=>v+(C.height||0)+E,0)},[n]);return L.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let p=s.get(f.id);p&&(clearTimeout(p),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:d}}},IN=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,EN=Or`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xN=Or`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,TN=Qs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${IN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${EN} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${xN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,bN=Or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,SN=Qs("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${bN} 1s linear infinite;
`,kN=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,AN=Or`
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
}`,PN=Qs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${AN} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,RN=Qs("div")`
  position: absolute;
`,CN=Qs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,NN=Or`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,DN=Qs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${NN} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,VN=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?L.createElement(DN,null,e):e:n==="blank"?null:L.createElement(CN,null,L.createElement(SN,{...r}),n!=="loading"&&L.createElement(RN,null,n==="error"?L.createElement(TN,{...r}):L.createElement(PN,{...r})))},ON=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,MN=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,LN="0%{opacity:0;} 100%{opacity:1;}",jN="0%{opacity:1;} 100%{opacity:0;}",FN=Qs("div")`
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
`,UN=Qs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$N=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=XT()?[LN,jN]:[ON(n),MN(n)];return{animation:e?`${Or(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Or(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},BN=L.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?$N(t.position||e||"top-center",t.visible):{opacity:0},i=L.createElement(VN,{toast:t}),o=L.createElement(UN,{...t.ariaProps},Yd(t.message,t));return L.createElement(FN,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):L.createElement(L.Fragment,null,i,o))});dN(L.createElement);var zN=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=L.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return L.createElement("div",{ref:i,className:e,style:n},s)},qN=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:XT()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},WN=qh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Fc=16,HN=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=vN(n,i);return L.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Fc,left:Fc,right:Fc,bottom:Fc,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let f=d.position||e,p=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),y=qN(f,p);return L.createElement(zN,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?WN:"",style:y},d.type==="custom"?Yd(d.message,d):s?s(d):L.createElement(BN,{toast:d,position:f}))}))},_e=st;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ae=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>L.createElement("svg",{ref:d,...GN,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${KN(t)}`,a].join(" "),...c},[...e.map(([f,p])=>L.createElement(f,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=ae("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ae("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=ae("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=ae("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=ae("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=ae("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=ae("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=ae("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=ae("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=ae("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=ae("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=ae("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=ae("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=ae("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=ae("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=ae("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=ae("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=ae("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=ae("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=ae("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=ae("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=ae("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=ae("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=ae("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=ae("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=ae("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=ae("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=ae("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=ae("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=ae("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),g2=()=>{};var mv={};/**
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
 */const o1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},y2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},a1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(p=64)),r.push(n[d],n[f],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):y2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new _2;const p=i<<2|a>>4;if(r.push(p),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w2=function(t){const e=o1(t);return a1.encodeByteArray(e,!0)},Xd=function(t){return w2(t).replace(/\./g,"")},l1=function(t){try{return a1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function u1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v2=()=>u1().__FIREBASE_DEFAULTS__,I2=()=>{if(typeof process>"u"||typeof mv>"u")return;const t=mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&l1(t[1]);return e&&JSON.parse(e)},Kh=()=>{try{return g2()||v2()||I2()||E2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c1=t=>{var e,n;return(n=(e=Kh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},d1=t=>{const e=c1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h1=()=>{var t;return(t=Kh())==null?void 0:t.config},f1=t=>{var e;return(e=Kh())==null?void 0:e[`_${t}`]};/**
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
 */class x2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function zr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qh(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function m1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xd(JSON.stringify(n)),Xd(JSON.stringify(o)),""].join(".")}const ql={};function T2(){const t={prod:[],emulator:[]};for(const e of Object.keys(ql))ql[e]?t.emulator.push(e):t.prod.push(e);return t}function b2(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let pv=!1;function by(t,e){if(typeof window>"u"||typeof document>"u"||!zr(window.location.host)||ql[t]===e||ql[t]||pv)return;ql[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=T2().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{pv=!0,o()},p}function d(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=b2(r),y=n("text"),E=document.getElementById(y)||document.createElement("span"),k=n("learnmore"),R=document.getElementById(k)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const v=p.element;a(v),d(R,k);const C=c();l(_,w),v.append(_,E,R,C),document.body.appendChild(v)}i?(E.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function p1(){var e;const t=(e=Kh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function k2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function g1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function A2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P2(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y1(){return!p1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _1(){return!p1()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Sy(){try{return typeof indexedDB=="object"}catch{return!1}}function w1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function R2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const C2="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=C2,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?N2(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Rn(s,a,r)}}function N2(t,e){return t.replace(D2,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const D2=/\{\$([^}]+)}/g;function V2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function An(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gv(i)&&gv(o)){if(!An(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
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
 */function zu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Rl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function O2(t,e){const n=new M2(t,e);return n.subscribe.bind(n)}class M2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");L2(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bm),s.error===void 0&&(s.error=bm),s.complete===void 0&&(s.complete=bm);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bm(){}/**
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
 */const j2=1e3,F2=2,U2=4*60*60*1e3,$2=.5;function yv(t,e=j2,n=F2){const r=e*Math.pow(n,t),s=Math.round($2*r*(Math.random()-.5)*2);return Math.min(U2,r+s)}/**
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
 */function de(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hi="[DEFAULT]";/**
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
 */class B2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new x2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(q2(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:z2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z2(t){return t===hi?void 0:t}function q2(t){return t.instantiationMode==="EAGER"}/**
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
 */class W2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new B2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const H2={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},G2=ue.INFO,K2={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Q2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=K2[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=G2,this._logHandler=Q2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?H2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Y2=(t,e)=>e.some(n=>t instanceof n);let _v,wv;function J2(){return _v||(_v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X2(){return wv||(wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v1=new WeakMap,zp=new WeakMap,I1=new WeakMap,Sm=new WeakMap,ky=new WeakMap;function Z2(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&v1.set(n,t)}).catch(()=>{}),ky.set(e,t),e}function eD(t){if(zp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zp.set(t,e)}let qp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tD(t){qp=t(qp)}function nD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(km(this),e,...n);return I1.set(r,e.sort?e.sort():[e]),Cs(r)}:X2().includes(t)?function(...e){return t.apply(km(this),e),Cs(v1.get(this))}:function(...e){return Cs(t.apply(km(this),e))}}function rD(t){return typeof t=="function"?nD(t):(t instanceof IDBTransaction&&eD(t),Y2(t,J2())?new Proxy(t,qp):t)}function Cs(t){if(t instanceof IDBRequest)return Z2(t);if(Sm.has(t))return Sm.get(t);const e=rD(t);return e!==t&&(Sm.set(t,e),ky.set(e,t)),e}const km=t=>ky.get(t);function E1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Cs(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cs(o.result),l.oldVersion,l.newVersion,Cs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sD=["get","getKey","getAll","getAllKeys","count"],iD=["put","add","delete","clear"],Am=new Map;function vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Am.get(e))return Am.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sD.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Am.set(e,i),i}tD(t=>({...t,get:(e,n,r)=>vv(e,n)||t.get(e,n,r),has:(e,n)=>!!vv(e,n)||t.has(e,n)}));/**
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
 */class oD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wp="@firebase/app",Iv="0.14.8";/**
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
 */const Mr=new Yh("@firebase/app"),lD="@firebase/app-compat",uD="@firebase/analytics-compat",cD="@firebase/analytics",dD="@firebase/app-check-compat",hD="@firebase/app-check",fD="@firebase/auth",mD="@firebase/auth-compat",pD="@firebase/database",gD="@firebase/data-connect",yD="@firebase/database-compat",_D="@firebase/functions",wD="@firebase/functions-compat",vD="@firebase/installations",ID="@firebase/installations-compat",ED="@firebase/messaging",xD="@firebase/messaging-compat",TD="@firebase/performance",bD="@firebase/performance-compat",SD="@firebase/remote-config",kD="@firebase/remote-config-compat",AD="@firebase/storage",PD="@firebase/storage-compat",RD="@firebase/firestore",CD="@firebase/ai",ND="@firebase/firestore-compat",DD="firebase",VD="12.9.0";/**
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
 */const Zd="[DEFAULT]",OD={[Wp]:"fire-core",[lD]:"fire-core-compat",[cD]:"fire-analytics",[uD]:"fire-analytics-compat",[hD]:"fire-app-check",[dD]:"fire-app-check-compat",[fD]:"fire-auth",[mD]:"fire-auth-compat",[pD]:"fire-rtdb",[gD]:"fire-data-connect",[yD]:"fire-rtdb-compat",[_D]:"fire-fn",[wD]:"fire-fn-compat",[vD]:"fire-iid",[ID]:"fire-iid-compat",[ED]:"fire-fcm",[xD]:"fire-fcm-compat",[TD]:"fire-perf",[bD]:"fire-perf-compat",[SD]:"fire-rc",[kD]:"fire-rc-compat",[AD]:"fire-gcs",[PD]:"fire-gcs-compat",[RD]:"fire-fst",[ND]:"fire-fst-compat",[CD]:"fire-vertex","fire-js":"fire-js",[DD]:"fire-js-all"};/**
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
 */const eh=new Map,MD=new Map,Hp=new Map;function Ev(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(Hp.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Hp.set(e,t);for(const n of eh.values())Ev(n,t);for(const n of MD.values())Ev(n,t);return!0}function pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function LD(t,e,n=Zd){pr(t,e).clearInstance(n)}function hn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const jD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ns=new eo("app","Firebase",jD);/**
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
 */class FD{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ns.create("app-deleted",{appName:this._name})}}/**
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
 */const to=VD;function x1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Zd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ns.create("bad-app-name",{appName:String(s)});if(n||(n=h1()),!n)throw Ns.create("no-options");const i=eh.get(s);if(i){if(An(n,i.options)&&An(r,i.config))return i;throw Ns.create("duplicate-app",{appName:s})}const o=new W2(s);for(const l of Hp.values())o.addComponent(l);const a=new FD(n,r,o);return eh.set(s,a),a}function Jh(t=Zd){const e=eh.get(t);if(!e&&t===Zd&&h1())return x1();if(!e)throw Ns.create("no-app",{appName:t});return e}function Zt(t,e,n){let r=OD[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(o.join(" "));return}qn(new Pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UD="firebase-heartbeat-database",$D=1,Iu="firebase-heartbeat-store";let Pm=null;function T1(){return Pm||(Pm=E1(UD,$D,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Iu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ns.create("idb-open",{originalErrorMessage:t.message})})),Pm}async function BD(t){try{const n=(await T1()).transaction(Iu),r=await n.objectStore(Iu).get(b1(t));return await n.done,r}catch(e){if(e instanceof Rn)Mr.warn(e.message);else{const n=Ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function xv(t,e){try{const r=(await T1()).transaction(Iu,"readwrite");await r.objectStore(Iu).put(e,b1(t)),await r.done}catch(n){if(n instanceof Rn)Mr.warn(n.message);else{const r=Ns.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function b1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zD=1024,qD=30;class WD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>qD){const o=KD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tv(),{heartbeatsToSend:r,unsentEntries:s}=HD(this._heartbeatsCache.heartbeats),i=Xd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mr.warn(n),""}}}function Tv(){return new Date().toISOString().substring(0,10)}function HD(t,e=zD){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sy()?w1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bv(t){return Xd(JSON.stringify({version:2,heartbeats:t})).length}function KD(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function QD(t){qn(new Pn("platform-logger",e=>new oD(e),"PRIVATE")),qn(new Pn("heartbeat",e=>new WD(e),"PRIVATE")),Zt(Wp,Iv,t),Zt(Wp,Iv,"esm2020"),Zt("fire-js","")}QD("");function S1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YD=S1,k1=new eo("auth","Firebase",S1());/**
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
 */const th=new Yh("@firebase/auth");function JD(t,...e){th.logLevel<=ue.WARN&&th.warn(`Auth (${to}): ${t}`,...e)}function dd(t,...e){th.logLevel<=ue.ERROR&&th.error(`Auth (${to}): ${t}`,...e)}/**
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
 */function Wn(t,...e){throw Ay(t,...e)}function ur(t,...e){return Ay(t,...e)}function A1(t,e,n){const r={...YD(),[e]:n};return new eo("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return A1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ay(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return k1.create(t,...e)}function ee(t,e,...n){if(!t)throw Ay(e,...n)}function br(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dd(e),new Error(e)}function Lr(t,e){t||br(e)}/**
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
 */function Gp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function XD(){return Sv()==="http:"||Sv()==="https:"}function Sv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ZD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XD()||g1()||"connection"in navigator)?navigator.onLine:!0}function eV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lr(n>e,"Short delay should be less than long delay!"),this.isMobile=S2()||A2()}get(){return ZD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Py(t,e){Lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class P1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nV=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rV=new qu(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function gr(t,e,n,r,s={}){return R1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zu({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...i};return k2()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&zr(t.emulatorConfig.host)&&(c.credentials="include"),P1.fetch()(await C1(t,t.config.apiHost,n,a),c)})}async function R1(t,e,n){t._canInitEmulator=!1;const r={...tV,...e};try{const s=new iV(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Uc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Uc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Uc(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw A1(t,d,c);Wn(t,d)}}catch(s){if(s instanceof Rn)throw s;Wn(t,"network-request-failed",{message:String(s)})}}async function Wu(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function C1(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Py(t.config,s):`${t.config.apiScheme}://${s}`;return nV.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function sV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ur(this.auth,"network-request-failed")),rV.get())})}}function Uc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ur(t,e,r);return s.customData._tokenResponse=n,s}function kv(t){return t!==void 0&&t.enterprise!==void 0}class oV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aV(t,e){return gr(t,"GET","/v2/recaptchaConfig",qr(t,e))}/**
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
 */async function lV(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function nh(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uV(t,e=!1){const n=de(t),r=await n.getIdToken(e),s=Ry(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wl(Rm(s.auth_time)),issuedAtTime:Wl(Rm(s.iat)),expirationTime:Wl(Rm(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rm(t){return Number(t)*1e3}function Ry(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dd("JWT malformed, contained fewer than 3 sections"),null;try{const s=l1(n);return s?JSON.parse(s):(dd("Failed to decode base64 JWT payload"),null)}catch(s){return dd("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Av(t){const e=Ry(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function la(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&cV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wl(this.lastLoginAt),this.creationTime=Wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rh(t){var f;const e=t.auth,n=await t.getIdToken(),r=await la(t,nh(e,{idToken:n}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?N1(s.providerUserInfo):[],o=fV(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Kp(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function hV(t){const e=de(t);await rh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fV(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function N1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function mV(t,e){const n=await R1(t,{},async()=>{const r=zu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await C1(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&zr(t.emulatorConfig.host)&&(l.credentials="include"),P1.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pV(t,e){return gr(t,"POST","/v2/accounts:revokeToken",qr(t,e))}/**
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
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Av(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Av(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mV(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ho;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
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
 */function ns(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new dV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await la(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uV(this,e)}reload(){return hV(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await la(this,lV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:y,providerData:E,stsTokenManager:k}=n;ee(f&&k,e,"internal-error");const R=Ho.fromJSON(this.name,k);ee(typeof f=="string",e,"internal-error"),ns(r,e.name),ns(s,e.name),ee(typeof p=="boolean",e,"internal-error"),ee(typeof y=="boolean",e,"internal-error"),ns(i,e.name),ns(o,e.name),ns(a,e.name),ns(l,e.name),ns(c,e.name),ns(d,e.name);const w=new Ln({uid:f,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:c,lastLoginAt:d});return E&&Array.isArray(E)&&(w.providerData=E.map(_=>({..._}))),l&&(w._redirectEventId=l),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ho;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rh(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?N1(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ho;a.updateFromIdToken(r);const l=new Ln({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const Pv=new Map;function Sr(t){Lr(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(Lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}/**
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
 */class D1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D1.type="NONE";const Rv=D1;/**
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
 */function hd(t,e,n){return`firebase:${t}:${e}:${n}`}class Go{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hd(this.userKey,s.apiKey,i),this.fullPersistenceKey=hd("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nh(this.auth,{idToken:e}).catch(()=>{});return n?Ln._fromGetAccountInfoResponse(this.auth,n,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Go(Sr(Rv),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Sr(Rv);const o=hd(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const p=await nh(e,{idToken:d}).catch(()=>{});if(!p)break;f=await Ln._fromGetAccountInfoResponse(e,p,d)}else f=Ln._fromJSON(e,d);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Go(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Go(i,e,r))}}/**
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
 */function Cv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F1(e))return"Blackberry";if(U1(e))return"Webos";if(O1(e))return"Safari";if((e.includes("chrome/")||M1(e))&&!e.includes("edge/"))return"Chrome";if(j1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V1(t=at()){return/firefox\//i.test(t)}function O1(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M1(t=at()){return/crios\//i.test(t)}function L1(t=at()){return/iemobile/i.test(t)}function j1(t=at()){return/android/i.test(t)}function F1(t=at()){return/blackberry/i.test(t)}function U1(t=at()){return/webos/i.test(t)}function Cy(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gV(t=at()){var e;return Cy(t)&&!!((e=window.navigator)!=null&&e.standalone)}function yV(){return P2()&&document.documentMode===10}function $1(t=at()){return Cy(t)||j1(t)||U1(t)||F1(t)||/windows phone/i.test(t)||L1(t)}/**
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
 */function B1(t,e=[]){let n;switch(t){case"Browser":n=Cv(at());break;case"Worker":n=`${Cv(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${r}`}/**
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
 */class _V{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function wV(t,e={}){return gr(t,"GET","/v2/passwordPolicy",qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const vV=6;class IV{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vV,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class EV{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nv(this),this.idTokenSubscription=new Nv(this),this.beforeStateQueue=new _V(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Go.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nh(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Rr(this));const n=e?de(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wV(this),n=new IV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Go.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=B1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&JD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ys(t){return de(t)}class Nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=O2(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xV(t){Xh=t}function z1(t){return Xh.loadJS(t)}function TV(){return Xh.recaptchaEnterpriseScript}function bV(){return Xh.gapiScript}function SV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kV{constructor(){this.enterprise=new AV}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class AV{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const PV="recaptcha-enterprise",q1="NO_RECAPTCHA";class RV{constructor(e){this.type=PV,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{aV(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new oV(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;kv(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(q1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kV().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&kv(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TV();l.length!==0&&(l+=a),z1(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dv(t,e,n,r=!1,s=!1){const i=new RV(t);let o;if(s)o=q1;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function sh(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Dv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Dv(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function CV(t,e){const n=pr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(An(i,e??{}))return s;Wn(s,"already-initialized")}return n.initialize({options:e})}function NV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DV(t,e,n){const r=Ys(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=W1(e),{host:o,port:a}=VV(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(An(c,r.config.emulator)&&An(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,zr(o)?(Qh(`${i}//${o}${l}`),by("Auth",!0)):OV()}function W1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VV(t){const e=W1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vv(o)}}}function Vv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ny{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,n){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}async function MV(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function LV(t,e){return Wu(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}async function jV(t,e){return gr(t,"POST","/v1/accounts:sendOobCode",qr(t,e))}async function FV(t,e){return jV(t,e)}/**
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
 */async function UV(t,e){return Wu(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function $V(t,e){return Wu(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
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
 */class Eu extends Ny{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Eu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Eu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sh(e,n,"signInWithPassword",LV);case"emailLink":return UV(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sh(e,r,"signUpPassword",MV);case"emailLink":return $V(e,{idToken:n,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ko(t,e){return Wu(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
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
 */const BV="http://localhost";class ji extends Ny{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ji(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ko(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ko(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ko(e,n)}buildRequest(){const e={requestUri:BV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zu(n)}return e}}/**
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
 */function zV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qV(t){const e=Pl(Rl(t)).link,n=e?Pl(Rl(e)).deep_link_id:null,r=Pl(Rl(t)).deep_link_id;return(r?Pl(Rl(r)).link:null)||r||n||e||t}class Dy{constructor(e){const n=Pl(Rl(e)),r=n.apiKey??null,s=n.oobCode??null,i=zV(n.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=qV(e);try{return new Dy(n)}catch{return null}}}/**
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
 */class Va{constructor(){this.providerId=Va.PROVIDER_ID}static credential(e,n){return Eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dy.parseLink(n);return ee(r,"argument-error"),Eu._fromEmailAndCode(e,r.code,r.tenantId)}}Va.PROVIDER_ID="password";Va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class H1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hu extends H1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hs extends Hu{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.FACEBOOK_SIGN_IN_METHOD="facebook.com";hs.PROVIDER_ID="facebook.com";/**
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
 */class fs extends Hu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ji._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fs.credential(n,r)}catch{return null}}}fs.GOOGLE_SIGN_IN_METHOD="google.com";fs.PROVIDER_ID="google.com";/**
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
 */class ms extends Hu{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
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
 */class ps extends Hu{constructor(){super("twitter.com")}static credential(e,n){return ji._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ps.credential(n,r)}catch{return null}}}ps.TWITTER_SIGN_IN_METHOD="twitter.com";ps.PROVIDER_ID="twitter.com";/**
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
 */async function WV(t,e){return Wu(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
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
 */class Fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=Ov(r);return new Fi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ov(r);return new Fi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ih extends Rn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ih.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ih(e,n,r,s)}}function G1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ih._fromErrorAndOperation(t,i,e,r):i})}async function HV(t,e,n=!1){const r=await la(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fi._forOperation(t,"link",r)}/**
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
 */async function GV(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(Rr(r));const s="reauthenticate";try{const i=await la(t,G1(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Ry(i.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Fi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wn(r,"user-mismatch"),i}}/**
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
 */async function K1(t,e,n=!1){if(hn(t.app))return Promise.reject(Rr(t));const r="signIn",s=await G1(t,r,e),i=await Fi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KV(t,e){return K1(Ys(t),e)}/**
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
 */async function Q1(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QV(t,e,n){const r=Ys(t);await sh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",FV)}async function YV(t,e,n){if(hn(t.app))return Promise.reject(Rr(t));const r=Ys(t),o=await sh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WV).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Q1(t),l}),a=await Fi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function JV(t,e,n){return hn(t.app)?Promise.reject(Rr(t)):KV(de(t),Va.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Q1(t),r})}/**
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
 */async function XV(t,e){return gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Qp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=de(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await la(r,XV(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ZV(t,e,n,r){return de(t).onIdTokenChanged(e,n,r)}function eO(t,e,n){return de(t).beforeAuthStateChanged(e,n)}function tO(t,e,n,r){return de(t).onAuthStateChanged(e,n,r)}function nO(t){return de(t).signOut()}const oh="__sak";/**
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
 */class Y1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oh,"1"),this.storage.removeItem(oh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rO=1e3,sO=10;class J1 extends Y1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yV()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J1.type="LOCAL";const iO=J1;/**
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
 */class X1 extends Y1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X1.type="SESSION";const Z1=X1;/**
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
 */function oO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await oO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zh.receivers=[];/**
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
 */function Vy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Vy("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cr(){return window}function lO(t){cr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function eb(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function uO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dO(){return eb()?self:null}/**
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
 */const tb="firebaseLocalStorageDb",hO=1,ah="firebaseLocalStorage",nb="fbase_key";class Gu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ef(t,e){return t.transaction([ah],e?"readwrite":"readonly").objectStore(ah)}function fO(){const t=indexedDB.deleteDatabase(tb);return new Gu(t).toPromise()}function Yp(){const t=indexedDB.open(tb,hO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ah,{keyPath:nb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ah)?e(r):(r.close(),await fO(),e(await Yp()))})})}async function Mv(t,e,n){const r=ef(t,!0).put({[nb]:e,value:n});return new Gu(r).toPromise()}async function mO(t,e){const n=ef(t,!1).get(e),r=await new Gu(n).toPromise();return r===void 0?null:r.value}function Lv(t,e){const n=ef(t,!0).delete(e);return new Gu(n).toPromise()}const pO=800,gO=3;class rb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zh._getInstance(dO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await uO(),!this.activeServiceWorker)return;this.sender=new aO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yp();return await Mv(e,oh,"1"),await Lv(e,oh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ef(s,!1).getAll();return new Gu(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rb.type="LOCAL";const yO=rb;new qu(3e4,6e4);/**
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
 */function _O(t,e){return e?Sr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Oy extends Ny{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ko(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ko(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wO(t){return K1(t.auth,new Oy(t),t.bypassAuthState)}function vO(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),GV(n,new Oy(t),t.bypassAuthState)}async function IO(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),HV(n,new Oy(t),t.bypassAuthState)}/**
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
 */class sb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wO;case"linkViaPopup":case"linkViaRedirect":return IO;case"reauthViaPopup":case"reauthViaRedirect":return vO;default:Wn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EO=new qu(2e3,1e4);class Fo extends sb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fo.currentPopupAction&&Fo.currentPopupAction.cancel(),Fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=Vy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EO.get())};e()}}Fo.currentPopupAction=null;/**
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
 */const xO="pendingRedirect",fd=new Map;class TO extends sb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fd.get(this.auth._key());if(!e){try{const r=await bO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fd.set(this.auth._key(),e)}return this.bypassAuthState||fd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bO(t,e){const n=AO(e),r=kO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function SO(t,e){fd.set(t._key(),e)}function kO(t){return Sr(t._redirectPersistence)}function AO(t){return hd(xO,t.config.apiKey,t.name)}async function PO(t,e,n=!1){if(hn(t.app))return Promise.reject(Rr(t));const r=Ys(t),s=_O(r,e),o=await new TO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const RO=10*60*1e3;class CO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ib(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ur(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RO&&this.cachedEventUids.clear(),this.cachedEventUids.has(jv(e))}saveEventToCache(e){this.cachedEventUids.add(jv(e)),this.lastProcessedEventTime=Date.now()}}function jv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ib({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ib(t);default:return!1}}/**
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
 */async function DO(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
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
 */const VO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OO=/^https?/;async function MO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DO(t);for(const n of e)try{if(LO(n))return}catch{}Wn(t,"unauthorized-domain")}function LO(t){const e=Gp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OO.test(n))return!1;if(VO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const jO=new qu(3e4,6e4);function Fv(){const t=cr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FO(t){return new Promise((e,n)=>{var s,i,o;function r(){Fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fv(),n(ur(t,"network-request-failed"))},timeout:jO.get()})}if((i=(s=cr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=cr().gapi)!=null&&o.load)r();else{const a=SV("iframefcb");return cr()[a]=()=>{gapi.load?r():n(ur(t,"network-request-failed"))},z1(`${bV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw md=null,e})}let md=null;function UO(t){return md=md||FO(t),md}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $O=new qu(5e3,15e3),BO="__/auth/iframe",zO="emulator/auth/iframe",qO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HO(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Py(e,zO):`https://${t.config.authDomain}/${BO}`,r={apiKey:e.apiKey,appName:t.name,v:to},s=WO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zu(r).slice(1)}`}async function GO(t){const e=await UO(t),n=cr().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:HO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ur(t,"network-request-failed"),a=cr().setTimeout(()=>{i(o)},$O.get());function l(){cr().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const KO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QO=500,YO=600,JO="_blank",XO="http://localhost";class Uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZO(t,e,n,r=QO,s=YO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...KO,width:r.toString(),height:s.toString(),top:i,left:o},c=at().toLowerCase();n&&(a=M1(c)?JO:n),V1(c)&&(e=e||XO,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[y,E])=>`${p}${y}=${E},`,"");if(gV(c)&&a!=="_self")return eM(e||"",a),new Uv(null);const f=window.open(e||"",a,d);ee(f,t,"popup-blocked");try{f.focus()}catch{}return new Uv(f)}function eM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tM="__/auth/handler",nM="emulator/auth/handler",rM=encodeURIComponent("fac");async function $v(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:to,eventId:s};if(e instanceof H1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",V2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Hu){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${rM}=${encodeURIComponent(l)}`:"";return`${sM(t)}?${zu(a).slice(1)}${c}`}function sM({config:t}){return t.emulator?Py(t,nM):`https://${t.authDomain}/${tM}`}/**
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
 */const Cm="webStorageSupport";class iM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z1,this._completeRedirectFn=PO,this._overrideRedirectResult=SO}async _openPopup(e,n,r,s){var o;Lr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await $v(e,n,r,Gp(),s);return ZO(e,i,Vy())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $v(e,n,r,Gp(),s);return lO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Lr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GO(e),r=new CO(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cm,{type:Cm},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Cm];i!==void 0&&n(!!i),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $1()||O1()||Cy()}}const oM=iM;var Bv="@firebase/auth",zv="1.12.0";/**
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
 */class aM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uM(t){qn(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:B1(t)},c=new EV(r,s,i,l);return NV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qn(new Pn("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new aM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Bv,zv,lM(t)),Zt(Bv,zv,"esm2020")}/**
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
 */const cM=5*60,dM=f1("authIdTokenMaxAge")||cM;let qv=null;const hM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dM)return;const s=n==null?void 0:n.token;qv!==s&&(qv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fM(t=Jh()){const e=pr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CV(t,{popupRedirectResolver:oM,persistence:[yO,iO,Z1]}),r=f1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=hM(i.toString());eO(n,o,()=>o(n.currentUser)),ZV(n,a=>o(a))}}const s=c1("auth");return s&&DV(n,`http://${s}`),n}function mM(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}xV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ur("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uM("Browser");var Wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ds,ob;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,I){function T(){}T.prototype=I.prototype,b.F=I.prototype,b.prototype=new T,b.prototype.constructor=b,b.D=function(S,P,N){for(var A=Array(arguments.length-2),he=2;he<arguments.length;he++)A[he-2]=arguments[he];return I.prototype[P].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,I,T){T||(T=0);const S=Array(16);if(typeof I=="string")for(var P=0;P<16;++P)S[P]=I.charCodeAt(T++)|I.charCodeAt(T++)<<8|I.charCodeAt(T++)<<16|I.charCodeAt(T++)<<24;else for(P=0;P<16;++P)S[P]=I[T++]|I[T++]<<8|I[T++]<<16|I[T++]<<24;I=b.g[0],T=b.g[1],P=b.g[2];let N=b.g[3],A;A=I+(N^T&(P^N))+S[0]+3614090360&4294967295,I=T+(A<<7&4294967295|A>>>25),A=N+(P^I&(T^P))+S[1]+3905402710&4294967295,N=I+(A<<12&4294967295|A>>>20),A=P+(T^N&(I^T))+S[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(I^P&(N^I))+S[3]+3250441966&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(N^T&(P^N))+S[4]+4118548399&4294967295,I=T+(A<<7&4294967295|A>>>25),A=N+(P^I&(T^P))+S[5]+1200080426&4294967295,N=I+(A<<12&4294967295|A>>>20),A=P+(T^N&(I^T))+S[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(I^P&(N^I))+S[7]+4249261313&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(N^T&(P^N))+S[8]+1770035416&4294967295,I=T+(A<<7&4294967295|A>>>25),A=N+(P^I&(T^P))+S[9]+2336552879&4294967295,N=I+(A<<12&4294967295|A>>>20),A=P+(T^N&(I^T))+S[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(I^P&(N^I))+S[11]+2304563134&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(N^T&(P^N))+S[12]+1804603682&4294967295,I=T+(A<<7&4294967295|A>>>25),A=N+(P^I&(T^P))+S[13]+4254626195&4294967295,N=I+(A<<12&4294967295|A>>>20),A=P+(T^N&(I^T))+S[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(I^P&(N^I))+S[15]+1236535329&4294967295,T=P+(A<<22&4294967295|A>>>10),A=I+(P^N&(T^P))+S[1]+4129170786&4294967295,I=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(I^T))+S[6]+3225465664&4294967295,N=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(N^I))+S[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^I&(P^N))+S[0]+3921069994&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(P^N&(T^P))+S[5]+3593408605&4294967295,I=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(I^T))+S[10]+38016083&4294967295,N=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(N^I))+S[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^I&(P^N))+S[4]+3889429448&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(P^N&(T^P))+S[9]+568446438&4294967295,I=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(I^T))+S[14]+3275163606&4294967295,N=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(N^I))+S[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^I&(P^N))+S[8]+1163531501&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(P^N&(T^P))+S[13]+2850285829&4294967295,I=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(I^T))+S[2]+4243563512&4294967295,N=I+(A<<9&4294967295|A>>>23),A=P+(I^T&(N^I))+S[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^I&(P^N))+S[12]+2368359562&4294967295,T=P+(A<<20&4294967295|A>>>12),A=I+(T^P^N)+S[5]+4294588738&4294967295,I=T+(A<<4&4294967295|A>>>28),A=N+(I^T^P)+S[8]+2272392833&4294967295,N=I+(A<<11&4294967295|A>>>21),A=P+(N^I^T)+S[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^I)+S[14]+4259657740&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(T^P^N)+S[1]+2763975236&4294967295,I=T+(A<<4&4294967295|A>>>28),A=N+(I^T^P)+S[4]+1272893353&4294967295,N=I+(A<<11&4294967295|A>>>21),A=P+(N^I^T)+S[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^I)+S[10]+3200236656&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(T^P^N)+S[13]+681279174&4294967295,I=T+(A<<4&4294967295|A>>>28),A=N+(I^T^P)+S[0]+3936430074&4294967295,N=I+(A<<11&4294967295|A>>>21),A=P+(N^I^T)+S[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^I)+S[6]+76029189&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(T^P^N)+S[9]+3654602809&4294967295,I=T+(A<<4&4294967295|A>>>28),A=N+(I^T^P)+S[12]+3873151461&4294967295,N=I+(A<<11&4294967295|A>>>21),A=P+(N^I^T)+S[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^I)+S[2]+3299628645&4294967295,T=P+(A<<23&4294967295|A>>>9),A=I+(P^(T|~N))+S[0]+4096336452&4294967295,I=T+(A<<6&4294967295|A>>>26),A=N+(T^(I|~P))+S[7]+1126891415&4294967295,N=I+(A<<10&4294967295|A>>>22),A=P+(I^(N|~T))+S[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~I))+S[5]+4237533241&4294967295,T=P+(A<<21&4294967295|A>>>11),A=I+(P^(T|~N))+S[12]+1700485571&4294967295,I=T+(A<<6&4294967295|A>>>26),A=N+(T^(I|~P))+S[3]+2399980690&4294967295,N=I+(A<<10&4294967295|A>>>22),A=P+(I^(N|~T))+S[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~I))+S[1]+2240044497&4294967295,T=P+(A<<21&4294967295|A>>>11),A=I+(P^(T|~N))+S[8]+1873313359&4294967295,I=T+(A<<6&4294967295|A>>>26),A=N+(T^(I|~P))+S[15]+4264355552&4294967295,N=I+(A<<10&4294967295|A>>>22),A=P+(I^(N|~T))+S[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~I))+S[13]+1309151649&4294967295,T=P+(A<<21&4294967295|A>>>11),A=I+(P^(T|~N))+S[4]+4149444226&4294967295,I=T+(A<<6&4294967295|A>>>26),A=N+(T^(I|~P))+S[11]+3174756917&4294967295,N=I+(A<<10&4294967295|A>>>22),A=P+(I^(N|~T))+S[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~I))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+I&4294967295,b.g[1]=b.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+N&4294967295}r.prototype.v=function(b,I){I===void 0&&(I=b.length);const T=I-this.blockSize,S=this.C;let P=this.h,N=0;for(;N<I;){if(P==0)for(;N<=T;)s(this,b,N),N+=this.blockSize;if(typeof b=="string"){for(;N<I;)if(S[P++]=b.charCodeAt(N++),P==this.blockSize){s(this,S),P=0;break}}else for(;N<I;)if(S[P++]=b[N++],P==this.blockSize){s(this,S),P=0;break}}this.h=P,this.o+=I},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var I=1;I<b.length-8;++I)b[I]=0;I=this.o*8;for(var T=b.length-8;T<b.length;++T)b[T]=I&255,I/=256;for(this.v(b),b=Array(16),I=0,T=0;T<4;++T)for(let S=0;S<32;S+=8)b[I++]=this.g[T]>>>S&255;return b};function i(b,I){var T=a;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=I(b)}function o(b,I){this.h=I;const T=[];let S=!0;for(let P=b.length-1;P>=0;P--){const N=b[P]|0;S&&N==I||(T[P]=N,S=!1)}this.g=T}var a={};function l(b){return-128<=b&&b<128?i(b,function(I){return new o([I|0],I<0?-1:0)}):new o([b|0],b<0?-1:0)}function c(b){if(isNaN(b)||!isFinite(b))return f;if(b<0)return R(c(-b));const I=[];let T=1;for(let S=0;b>=T;S++)I[S]=b/T|0,T*=4294967296;return new o(I,0)}function d(b,I){if(b.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(b.charAt(0)=="-")return R(d(b.substring(1),I));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(I,8));let S=f;for(let N=0;N<b.length;N+=8){var P=Math.min(8,b.length-N);const A=parseInt(b.substring(N,N+P),I);P<8?(P=c(Math.pow(I,P)),S=S.j(P).add(c(A))):(S=S.j(T),S=S.add(c(A)))}return S}var f=l(0),p=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();let b=0,I=1;for(let T=0;T<this.g.length;T++){const S=this.i(T);b+=(S>=0?S:4294967296+S)*I,I*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(E(this))return"0";if(k(this))return"-"+R(this).toString(b);const I=c(Math.pow(b,6));var T=this;let S="";for(;;){const P=C(T,I).g;T=w(T,P.j(I));let N=((T.g.length>0?T.g[0]:T.h)>>>0).toString(b);if(T=P,E(T))return N+S;for(;N.length<6;)N="0"+N;S=N+S}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function E(b){if(b.h!=0)return!1;for(let I=0;I<b.g.length;I++)if(b.g[I]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=w(this,b),k(b)?-1:E(b)?0:1};function R(b){const I=b.g.length,T=[];for(let S=0;S<I;S++)T[S]=~b.g[S];return new o(T,~b.h).add(p)}t.abs=function(){return k(this)?R(this):this},t.add=function(b){const I=Math.max(this.g.length,b.g.length),T=[];let S=0;for(let P=0;P<=I;P++){let N=S+(this.i(P)&65535)+(b.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);S=A>>>16,N&=65535,A&=65535,T[P]=A<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(b,I){return b.add(R(I))}t.j=function(b){if(E(this)||E(b))return f;if(k(this))return k(b)?R(this).j(R(b)):R(R(this).j(b));if(k(b))return R(this.j(R(b)));if(this.l(y)<0&&b.l(y)<0)return c(this.m()*b.m());const I=this.g.length+b.g.length,T=[];for(var S=0;S<2*I;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(let P=0;P<b.g.length;P++){const N=this.i(S)>>>16,A=this.i(S)&65535,he=b.i(P)>>>16,Qe=b.i(P)&65535;T[2*S+2*P]+=A*Qe,_(T,2*S+2*P),T[2*S+2*P+1]+=N*Qe,_(T,2*S+2*P+1),T[2*S+2*P+1]+=A*he,_(T,2*S+2*P+1),T[2*S+2*P+2]+=N*he,_(T,2*S+2*P+2)}for(b=0;b<I;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=I;b<2*I;b++)T[b]=0;return new o(T,0)};function _(b,I){for(;(b[I]&65535)!=b[I];)b[I+1]+=b[I]>>>16,b[I]&=65535,I++}function v(b,I){this.g=b,this.h=I}function C(b,I){if(E(I))throw Error("division by zero");if(E(b))return new v(f,f);if(k(b))return I=C(R(b),I),new v(R(I.g),R(I.h));if(k(I))return I=C(b,R(I)),new v(R(I.g),I.h);if(b.g.length>30){if(k(b)||k(I))throw Error("slowDivide_ only works with positive integers.");for(var T=p,S=I;S.l(b)<=0;)T=F(T),S=F(S);var P=M(T,1),N=M(S,1);for(S=M(S,2),T=M(T,2);!E(S);){var A=N.add(S);A.l(b)<=0&&(P=P.add(T),N=A),S=M(S,1),T=M(T,1)}return I=w(b,P.j(I)),new v(P,I)}for(P=f;b.l(I)>=0;){for(T=Math.max(1,Math.floor(b.m()/I.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),N=c(T),A=N.j(I);k(A)||A.l(b)>0;)T-=S,N=c(T),A=N.j(I);E(N)&&(N=p),P=P.add(N),b=w(b,A)}return new v(P,b)}t.B=function(b){return C(this,b).h},t.and=function(b){const I=Math.max(this.g.length,b.g.length),T=[];for(let S=0;S<I;S++)T[S]=this.i(S)&b.i(S);return new o(T,this.h&b.h)},t.or=function(b){const I=Math.max(this.g.length,b.g.length),T=[];for(let S=0;S<I;S++)T[S]=this.i(S)|b.i(S);return new o(T,this.h|b.h)},t.xor=function(b){const I=Math.max(this.g.length,b.g.length),T=[];for(let S=0;S<I;S++)T[S]=this.i(S)^b.i(S);return new o(T,this.h^b.h)};function F(b){const I=b.g.length+1,T=[];for(let S=0;S<I;S++)T[S]=b.i(S)<<1|b.i(S-1)>>>31;return new o(T,b.h)}function M(b,I){const T=I>>5;I%=32;const S=b.g.length-T,P=[];for(let N=0;N<S;N++)P[N]=I>0?b.i(N+T)>>>I|b.i(N+T+1)<<32-I:b.i(N+T);return new o(P,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ob=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ds=o}).apply(typeof Wv<"u"?Wv:typeof self<"u"?self:typeof window<"u"?window:{});var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ab,Cl,lb,pd,Jp,ub,cb,db;(function(){var t,e=Object.defineProperty;function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $c=="object"&&$c];for(var m=0;m<u.length;++m){var g=u[m];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(u,m){if(m)e:{var g=r;u=u.split(".");for(var x=0;x<u.length-1;x++){var V=u[x];if(!(V in g))break e;g=g[V]}u=u[u.length-1],x=g[u],m=m(x),m!=x&&m!=null&&e(g,u,{configurable:!0,writable:!0,value:m})}}s("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(u){return u||function(m){var g=[],x;for(x in m)Object.prototype.hasOwnProperty.call(m,x)&&g.push([x,m[x]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function l(u,m,g){return u.call.apply(u.bind,arguments)}function c(u,m,g){return c=l,c.apply(null,arguments)}function d(u,m){var g=Array.prototype.slice.call(arguments,1);return function(){var x=g.slice();return x.push.apply(x,arguments),u.apply(this,x)}}function f(u,m){function g(){}g.prototype=m.prototype,u.Z=m.prototype,u.prototype=new g,u.prototype.constructor=u,u.Ob=function(x,V,j){for(var H=Array(arguments.length-2),se=2;se<arguments.length;se++)H[se-2]=arguments[se];return m.prototype[V].apply(x,H)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function y(u){const m=u.length;if(m>0){const g=Array(m);for(let x=0;x<m;x++)g[x]=u[x];return g}return[]}function E(u,m){for(let x=1;x<arguments.length;x++){const V=arguments[x];var g=typeof V;if(g=g!="object"?g:V?Array.isArray(V)?"array":g:"null",g=="array"||g=="object"&&typeof V.length=="number"){g=u.length||0;const j=V.length||0;u.length=g+j;for(let H=0;H<j;H++)u[g+H]=V[H]}else u.push(V)}}class k{constructor(m,g){this.i=m,this.j=g,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function R(u){o.setTimeout(()=>{throw u},0)}function w(){var u=b;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class _{constructor(){this.h=this.g=null}add(m,g){const x=v.get();x.set(m,g),this.h?this.h.next=x:this.g=x,this.h=x}}var v=new k(()=>new C,u=>u.reset());class C{constructor(){this.next=this.g=this.h=null}set(m,g){this.h=m,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let F,M=!1,b=new _,I=()=>{const u=Promise.resolve(void 0);F=()=>{u.then(T)}};function T(){for(var u;u=w();){try{u.h.call(u.g)}catch(g){R(g)}var m=v;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}M=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};o.addEventListener("test",g,m),o.removeEventListener("test",g,m)}catch{}return u}();function A(u){return/^[\s\xa0]*$/.test(u)}function he(u,m){P.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}f(he,P),he.prototype.init=function(u,m){const g=this.type=u.type,x=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(g=="mouseover"?m=u.fromElement:g=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&he.Z.h.call(this)},he.prototype.h=function(){he.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Qe="closure_listenable_"+(Math.random()*1e6|0),_t=0;function ge(u,m,g,x,V){this.listener=u,this.proxy=null,this.src=m,this.type=g,this.capture=!!x,this.ha=V,this.key=++_t,this.da=this.fa=!1}function z(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function X(u,m,g){for(const x in u)m.call(g,u[x],x,u)}function ne(u,m){for(const g in u)m.call(void 0,u[g],g,u)}function Z(u){const m={};for(const g in u)m[g]=u[g];return m}const me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yr(u,m){let g,x;for(let V=1;V<arguments.length;V++){x=arguments[V];for(g in x)u[g]=x[g];for(let j=0;j<me.length;j++)g=me[j],Object.prototype.hasOwnProperty.call(x,g)&&(u[g]=x[g])}}function $t(u){this.src=u,this.g={},this.h=0}$t.prototype.add=function(u,m,g,x,V){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const H=sn(u,m,x,V);return H>-1?(m=u[H],g||(m.fa=!1)):(m=new ge(m,this.src,j,!!x,V),m.fa=g,u.push(m)),m};function _r(u,m){const g=m.type;if(g in u.g){var x=u.g[g],V=Array.prototype.indexOf.call(x,m,void 0),j;(j=V>=0)&&Array.prototype.splice.call(x,V,1),j&&(z(m),u.g[g].length==0&&(delete u.g[g],u.h--))}}function sn(u,m,g,x){for(let V=0;V<u.length;++V){const j=u[V];if(!j.da&&j.listener==m&&j.capture==!!g&&j.ha==x)return V}return-1}var Gn="closure_lm_"+(Math.random()*1e6|0),Ga={};function Bt(u,m,g,x,V){if(Array.isArray(m)){for(let j=0;j<m.length;j++)Bt(u,m[j],g,x,V);return null}return g=lw(g),u&&u[Qe]?u.J(m,g,a(x)?!!x.capture:!1,V):zt(u,m,g,!1,x,V)}function zt(u,m,g,x,V,j){if(!m)throw Error("Invalid event type");const H=a(V)?!!V.capture:!!V;let se=Df(u);if(se||(u[Gn]=se=new $t(u)),g=se.add(m,g,x,H,j),g.proxy)return g;if(x=on(),g.proxy=x,x.src=u,x.listener=g,u.addEventListener)N||(V=H),V===void 0&&(V=!1),u.addEventListener(m.toString(),x,V);else if(u.attachEvent)u.attachEvent(uo(m.toString()),x);else if(u.addListener&&u.removeListener)u.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return g}function on(){function u(g){return m.call(u.src,u.listener,g)}const m=nP;return u}function an(u,m,g,x,V){if(Array.isArray(m))for(var j=0;j<m.length;j++)an(u,m[j],g,x,V);else x=a(x)?!!x.capture:!!x,g=lw(g),u&&u[Qe]?(u=u.i,j=String(m).toString(),j in u.g&&(m=u.g[j],g=sn(m,g,x,V),g>-1&&(z(m[g]),Array.prototype.splice.call(m,g,1),m.length==0&&(delete u.g[j],u.h--)))):u&&(u=Df(u))&&(m=u.g[m.toString()],u=-1,m&&(u=sn(m,g,x,V)),(g=u>-1?m[u]:null)&&ln(g))}function ln(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Qe])_r(m.i,u);else{var g=u.type,x=u.proxy;m.removeEventListener?m.removeEventListener(g,x,u.capture):m.detachEvent?m.detachEvent(uo(g),x):m.addListener&&m.removeListener&&m.removeListener(x),(g=Df(m))?(_r(g,u),g.h==0&&(g.src=null,m[Gn]=null)):z(u)}}}function uo(u){return u in Ga?Ga[u]:Ga[u]="on"+u}function nP(u,m){if(u.da)u=!0;else{m=new he(m,this);const g=u.listener,x=u.ha||u.src;u.fa&&ln(u),u=g.call(x,m)}return u}function Df(u){return u=u[Gn],u instanceof $t?u:null}var Vf="__closure_events_fn_"+(Math.random()*1e9>>>0);function lw(u){return typeof u=="function"?u:(u[Vf]||(u[Vf]=function(m){return u.handleEvent(m)}),u[Vf])}function Tt(){S.call(this),this.i=new $t(this),this.M=this,this.G=null}f(Tt,S),Tt.prototype[Qe]=!0,Tt.prototype.removeEventListener=function(u,m,g,x){an(this,u,m,g,x)};function Dt(u,m){var g,x=u.G;if(x)for(g=[];x;x=x.G)g.push(x);if(u=u.M,x=m.type||m,typeof m=="string")m=new P(m,u);else if(m instanceof P)m.target=m.target||u;else{var V=m;m=new P(x,u),yr(m,V)}V=!0;let j,H;if(g)for(H=g.length-1;H>=0;H--)j=m.g=g[H],V=cc(j,x,!0,m)&&V;if(j=m.g=u,V=cc(j,x,!0,m)&&V,V=cc(j,x,!1,m)&&V,g)for(H=0;H<g.length;H++)j=m.g=g[H],V=cc(j,x,!1,m)&&V}Tt.prototype.N=function(){if(Tt.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const g=u.g[m];for(let x=0;x<g.length;x++)z(g[x]);delete u.g[m],u.h--}}this.G=null},Tt.prototype.J=function(u,m,g,x){return this.i.add(String(u),m,!1,g,x)},Tt.prototype.K=function(u,m,g,x){return this.i.add(String(u),m,!0,g,x)};function cc(u,m,g,x){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let V=!0;for(let j=0;j<m.length;++j){const H=m[j];if(H&&!H.da&&H.capture==g){const se=H.listener,nt=H.ha||H.src;H.fa&&_r(u.i,H),V=se.call(nt,x)!==!1&&V}}return V&&!x.defaultPrevented}function rP(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=c(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:o.setTimeout(u,m||0)}function uw(u){u.g=rP(()=>{u.g=null,u.i&&(u.i=!1,uw(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class sP extends S{constructor(m,g){super(),this.m=m,this.l=g,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:uw(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ka(u){S.call(this),this.h=u,this.g={}}f(Ka,S);var cw=[];function dw(u){X(u.g,function(m,g){this.g.hasOwnProperty(g)&&ln(m)},u),u.g={}}Ka.prototype.N=function(){Ka.Z.N.call(this),dw(this)},Ka.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Of=o.JSON.stringify,iP=o.JSON.parse,oP=class{stringify(u){return o.JSON.stringify(u,void 0)}parse(u){return o.JSON.parse(u,void 0)}};function hw(){}function fw(){}var Qa={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mf(){P.call(this,"d")}f(Mf,P);function Lf(){P.call(this,"c")}f(Lf,P);var si={},mw=null;function dc(){return mw=mw||new Tt}si.Ia="serverreachability";function pw(u){P.call(this,si.Ia,u)}f(pw,P);function Ya(u){const m=dc();Dt(m,new pw(m))}si.STAT_EVENT="statevent";function gw(u,m){P.call(this,si.STAT_EVENT,u),this.stat=m}f(gw,P);function Vt(u){const m=dc();Dt(m,new gw(m,u))}si.Ja="timingevent";function yw(u,m){P.call(this,si.Ja,u),this.size=m}f(yw,P);function Ja(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){u()},m)}function Xa(){this.g=!0}Xa.prototype.ua=function(){this.g=!1};function aP(u,m,g,x,V,j){u.info(function(){if(u.g)if(j){var H="",se=j.split("&");for(let ke=0;ke<se.length;ke++){var nt=se[ke].split("=");if(nt.length>1){const ct=nt[0];nt=nt[1];const Qn=ct.split("_");H=Qn.length>=2&&Qn[1]=="type"?H+(ct+"="+nt+"&"):H+(ct+"=redacted&")}}}else H=null;else H=j;return"XMLHTTP REQ ("+x+") [attempt "+V+"]: "+m+`
`+g+`
`+H})}function lP(u,m,g,x,V,j,H){u.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+V+"]: "+m+`
`+g+`
`+j+" "+H})}function co(u,m,g,x){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+cP(u,g)+(x?" "+x:"")})}function uP(u,m){u.info(function(){return"TIMEOUT: "+m})}Xa.prototype.info=function(){};function cP(u,m){if(!u.g)return m;if(!m)return null;try{const j=JSON.parse(m);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var g=j[u];if(!(g.length<2)){var x=g[1];if(Array.isArray(x)&&!(x.length<1)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(let H=1;H<x.length;H++)x[H]=""}}}}return Of(j)}catch{return m}}var hc={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_w={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ww;function jf(){}f(jf,hw),jf.prototype.g=function(){return new XMLHttpRequest},ww=new jf;function Za(u){return encodeURIComponent(String(u))}function dP(u){var m=1;u=u.split(":");const g=[];for(;m>0&&u.length;)g.push(u.shift()),m--;return u.length&&g.push(u.join(":")),g}function Qr(u,m,g,x){this.j=u,this.i=m,this.l=g,this.S=x||1,this.V=new Ka(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vw}function vw(){this.i=null,this.g="",this.h=!1}var Iw={},Ff={};function Uf(u,m,g){u.M=1,u.A=mc(Kn(m)),u.u=g,u.R=!0,Ew(u,null)}function Ew(u,m){u.F=Date.now(),fc(u),u.B=Kn(u.A);var g=u.B,x=u.S;Array.isArray(x)||(x=[String(x)]),Ow(g.i,"t",x),u.C=0,g=u.j.L,u.h=new vw,u.g=Zw(u.j,g?m:null,!u.u),u.P>0&&(u.O=new sP(c(u.Y,u,u.g),u.P)),m=u.V,g=u.g,x=u.ba;var V="readystatechange";Array.isArray(V)||(V&&(cw[0]=V.toString()),V=cw);for(let j=0;j<V.length;j++){const H=Bt(g,V[j],x||m.handleEvent,!1,m.h||m);if(!H)break;m.g[H.key]=H}m=u.J?Z(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),Ya(),aP(u.i,u.v,u.B,u.l,u.S,u.u)}Qr.prototype.ba=function(u){u=u.target;const m=this.O;m&&Xr(u)==3?m.j():this.Y(u)},Qr.prototype.Y=function(u){try{if(u==this.g)e:{const se=Xr(this.g),nt=this.g.ya(),ke=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||Bw(this.g)))){this.K||se!=4||nt==7||(nt==8||ke<=0?Ya(3):Ya(2)),$f(this);var m=this.g.ca();this.X=m;var g=hP(this);if(this.o=m==200,lP(this.i,this.v,this.B,this.l,this.S,se,m),this.o){if(this.U&&!this.L){t:{if(this.g){var x,V=this.g;if((x=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(x)){var j=x;break t}}j=null}if(u=j)co(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Bf(this,u);else{this.o=!1,this.m=3,Vt(12),ii(this),el(this);break e}}if(this.R){u=!0;let ct;for(;!this.K&&this.C<g.length;)if(ct=fP(this,g),ct==Ff){se==4&&(this.m=4,Vt(14),u=!1),co(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Iw){this.m=4,Vt(15),co(this.i,this.l,g,"[Invalid Chunk]"),u=!1;break}else co(this.i,this.l,ct,null),Bf(this,ct);if(xw(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||g.length!=0||this.h.h||(this.m=1,Vt(16),u=!1),this.o=this.o&&u,!u)co(this.i,this.l,g,"[Invalid Chunked Response]"),ii(this),el(this);else if(g.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Yf(H),H.P=!0,Vt(11))}}else co(this.i,this.l,g,null),Bf(this,g);se==4&&ii(this),this.o&&!this.K&&(se==4?Qw(this.j,this):(this.o=!1,fc(this)))}else kP(this.g),m==400&&g.indexOf("Unknown SID")>0?(this.m=3,Vt(12)):(this.m=0,Vt(13)),ii(this),el(this)}}}catch{}finally{}};function hP(u){if(!xw(u))return u.g.la();const m=Bw(u.g);if(m==="")return"";let g="";const x=m.length,V=Xr(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return ii(u),el(u),"";u.h.i=new o.TextDecoder}for(let j=0;j<x;j++)u.h.h=!0,g+=u.h.i.decode(m[j],{stream:!(V&&j==x-1)});return m.length=0,u.h.g+=g,u.C=0,u.h.g}function xw(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function fP(u,m){var g=u.C,x=m.indexOf(`
`,g);return x==-1?Ff:(g=Number(m.substring(g,x)),isNaN(g)?Iw:(x+=1,x+g>m.length?Ff:(m=m.slice(x,x+g),u.C=x+g,m)))}Qr.prototype.cancel=function(){this.K=!0,ii(this)};function fc(u){u.T=Date.now()+u.H,Tw(u,u.H)}function Tw(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Ja(c(u.aa,u),m)}function $f(u){u.D&&(o.clearTimeout(u.D),u.D=null)}Qr.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(uP(this.i,this.B),this.M!=2&&(Ya(),Vt(17)),ii(this),this.m=2,el(this)):Tw(this,this.T-u)};function el(u){u.j.I==0||u.K||Qw(u.j,u)}function ii(u){$f(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,dw(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Bf(u,m){try{var g=u.j;if(g.I!=0&&(g.g==u||zf(g.h,u))){if(!u.L&&zf(g.h,u)&&g.I==3){try{var x=g.Ba.g.parse(m)}catch{x=null}if(Array.isArray(x)&&x.length==3){var V=x;if(V[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<u.F)wc(g),yc(g);else break e;Qf(g),Vt(18)}}else g.xa=V[1],0<g.xa-g.K&&V[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Ja(c(g.Va,g),6e3));kw(g.h)<=1&&g.ta&&(g.ta=void 0)}else ai(g,11)}else if((u.L||g.g==u)&&wc(g),!A(m))for(V=g.Ba.g.parse(m),m=0;m<V.length;m++){let ke=V[m];const ct=ke[0];if(!(ct<=g.K))if(g.K=ct,ke=ke[1],g.I==2)if(ke[0]=="c"){g.M=ke[1],g.ba=ke[2];const Qn=ke[3];Qn!=null&&(g.ka=Qn,g.j.info("VER="+g.ka));const li=ke[4];li!=null&&(g.za=li,g.j.info("SVER="+g.za));const Zr=ke[5];Zr!=null&&typeof Zr=="number"&&Zr>0&&(x=1.5*Zr,g.O=x,g.j.info("backChannelRequestTimeoutMs_="+x)),x=g;const es=u.g;if(es){const Ic=es.g?es.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ic){var j=x.h;j.g||Ic.indexOf("spdy")==-1&&Ic.indexOf("quic")==-1&&Ic.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(qf(j,j.h),j.h=null))}if(x.G){const Jf=es.g?es.g.getResponseHeader("X-HTTP-Session-Id"):null;Jf&&(x.wa=Jf,Ne(x.J,x.G,Jf))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-u.F,g.j.info("Handshake RTT: "+g.T+"ms")),x=g;var H=u;if(x.na=Xw(x,x.L?x.ba:null,x.W),H.L){Aw(x.h,H);var se=H,nt=x.O;nt&&(se.H=nt),se.D&&($f(se),fc(se)),x.g=H}else Gw(x);g.i.length>0&&_c(g)}else ke[0]!="stop"&&ke[0]!="close"||ai(g,7);else g.I==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?ai(g,7):Kf(g):ke[0]!="noop"&&g.l&&g.l.qa(ke),g.A=0)}}Ya(4)}catch{}}var mP=class{constructor(u,m){this.g=u,this.map=m}};function bw(u){this.l=u||10,o.PerformanceNavigationTiming?(u=o.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sw(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function kw(u){return u.h?1:u.g?u.g.size:0}function zf(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function qf(u,m){u.g?u.g.add(m):u.h=m}function Aw(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}bw.prototype.cancel=function(){if(this.i=Pw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Pw(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const g of u.g.values())m=m.concat(g.G);return m}return y(u.i)}var Rw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pP(u,m){if(u){u=u.split("&");for(let g=0;g<u.length;g++){const x=u[g].indexOf("=");let V,j=null;x>=0?(V=u[g].substring(0,x),j=u[g].substring(x+1)):V=u[g],m(V,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Yr(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Yr?(this.l=u.l,tl(this,u.j),this.o=u.o,this.g=u.g,nl(this,u.u),this.h=u.h,Wf(this,Mw(u.i)),this.m=u.m):u&&(m=String(u).match(Rw))?(this.l=!1,tl(this,m[1]||"",!0),this.o=rl(m[2]||""),this.g=rl(m[3]||"",!0),nl(this,m[4]),this.h=rl(m[5]||"",!0),Wf(this,m[6]||"",!0),this.m=rl(m[7]||"")):(this.l=!1,this.i=new il(null,this.l))}Yr.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(sl(m,Cw,!0),":");var g=this.g;return(g||m=="file")&&(u.push("//"),(m=this.o)&&u.push(sl(m,Cw,!0),"@"),u.push(Za(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&u.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(sl(g,g.charAt(0)=="/"?_P:yP,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",sl(g,vP)),u.join("")},Yr.prototype.resolve=function(u){const m=Kn(this);let g=!!u.j;g?tl(m,u.j):g=!!u.o,g?m.o=u.o:g=!!u.g,g?m.g=u.g:g=u.u!=null;var x=u.h;if(g)nl(m,u.u);else if(g=!!u.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var V=m.h.lastIndexOf("/");V!=-1&&(x=m.h.slice(0,V+1)+x)}if(V=x,V==".."||V==".")x="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){x=V.lastIndexOf("/",0)==0,V=V.split("/");const j=[];for(let H=0;H<V.length;){const se=V[H++];se=="."?x&&H==V.length&&j.push(""):se==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),x&&H==V.length&&j.push("")):(j.push(se),x=!0)}x=j.join("/")}else x=V}return g?m.h=x:g=u.i.toString()!=="",g?Wf(m,Mw(u.i)):g=!!u.m,g&&(m.m=u.m),m};function Kn(u){return new Yr(u)}function tl(u,m,g){u.j=g?rl(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function nl(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function Wf(u,m,g){m instanceof il?(u.i=m,IP(u.i,u.l)):(g||(m=sl(m,wP)),u.i=new il(m,u.l))}function Ne(u,m,g){u.i.set(m,g)}function mc(u){return Ne(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function rl(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function sl(u,m,g){return typeof u=="string"?(u=encodeURI(u).replace(m,gP),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function gP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Cw=/[#\/\?@]/g,yP=/[#\?:]/g,_P=/[#\?]/g,wP=/[#\?@]/g,vP=/#/g;function il(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function oi(u){u.g||(u.g=new Map,u.h=0,u.i&&pP(u.i,function(m,g){u.add(decodeURIComponent(m.replace(/\+/g," ")),g)}))}t=il.prototype,t.add=function(u,m){oi(this),this.i=null,u=ho(this,u);let g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(m),this.h+=1,this};function Nw(u,m){oi(u),m=ho(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Dw(u,m){return oi(u),m=ho(u,m),u.g.has(m)}t.forEach=function(u,m){oi(this),this.g.forEach(function(g,x){g.forEach(function(V){u.call(m,V,x,this)},this)},this)};function Vw(u,m){oi(u);let g=[];if(typeof m=="string")Dw(u,m)&&(g=g.concat(u.g.get(ho(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)g=g.concat(u[m]);return g}t.set=function(u,m){return oi(this),this.i=null,u=ho(this,u),Dw(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},t.get=function(u,m){return u?(u=Vw(this,u),u.length>0?String(u[0]):m):m};function Ow(u,m,g){Nw(u,m),g.length>0&&(u.i=null,u.g.set(ho(u,m),y(g)),u.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let x=0;x<m.length;x++){var g=m[x];const V=Za(g);g=Vw(this,g);for(let j=0;j<g.length;j++){let H=V;g[j]!==""&&(H+="="+Za(g[j])),u.push(H)}}return this.i=u.join("&")};function Mw(u){const m=new il;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function ho(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function IP(u,m){m&&!u.j&&(oi(u),u.i=null,u.g.forEach(function(g,x){const V=x.toLowerCase();x!=V&&(Nw(this,x),Ow(this,V,g))},u)),u.j=m}function EP(u,m){const g=new Xa;if(o.Image){const x=new Image;x.onload=d(Jr,g,"TestLoadImage: loaded",!0,m,x),x.onerror=d(Jr,g,"TestLoadImage: error",!1,m,x),x.onabort=d(Jr,g,"TestLoadImage: abort",!1,m,x),x.ontimeout=d(Jr,g,"TestLoadImage: timeout",!1,m,x),o.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=u}else m(!1)}function xP(u,m){const g=new Xa,x=new AbortController,V=setTimeout(()=>{x.abort(),Jr(g,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:x.signal}).then(j=>{clearTimeout(V),j.ok?Jr(g,"TestPingServer: ok",!0,m):Jr(g,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(V),Jr(g,"TestPingServer: error",!1,m)})}function Jr(u,m,g,x,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),x(g)}catch{}}function TP(){this.g=new oP}function Hf(u){this.i=u.Sb||null,this.h=u.ab||!1}f(Hf,hw),Hf.prototype.g=function(){return new pc(this.i,this.h)};function pc(u,m){Tt.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(pc,Tt),t=pc.prototype,t.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,al(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||o).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ol(this)),this.readyState=0},t.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,al(this)),this.g&&(this.readyState=3,al(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Lw(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Lw(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}t.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ol(this):al(this),this.readyState==3&&Lw(this)}},t.Oa=function(u){this.g&&(this.response=this.responseText=u,ol(this))},t.Na=function(u){this.g&&(this.response=u,ol(this))},t.ga=function(){this.g&&ol(this)};function ol(u){u.readyState=4,u.l=null,u.j=null,u.B=null,al(u)}t.setRequestHeader=function(u,m){this.A.append(u,m)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var g=m.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=m.next();return u.join(`\r
`)};function al(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(pc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function jw(u){let m="";return X(u,function(g,x){m+=x,m+=":",m+=g,m+=`\r
`}),m}function Gf(u,m,g){e:{for(x in g){var x=!1;break e}x=!0}x||(g=jw(g),typeof u=="string"?g!=null&&Za(g):Ne(u,m,g))}function We(u){Tt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(We,Tt);var bP=/^https?$/i,SP=["POST","PUT"];t=We.prototype,t.Fa=function(u){this.H=u},t.ea=function(u,m,g,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ww.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(j){Fw(this,j);return}if(u=g||"",g=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var V in x)g.set(V,x[V]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const j of x.keys())g.set(j,x.get(j));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),V=o.FormData&&u instanceof o.FormData,!(Array.prototype.indexOf.call(SP,m,void 0)>=0)||x||V||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,H]of g)this.g.setRequestHeader(j,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){Fw(this,j)}};function Fw(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,Uw(u),gc(u)}function Uw(u){u.A||(u.A=!0,Dt(u,"complete"),Dt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,Dt(this,"complete"),Dt(this,"abort"),gc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gc(this,!0)),We.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?$w(this):this.Xa())},t.Xa=function(){$w(this)};function $w(u){if(u.h&&typeof i<"u"){if(u.v&&Xr(u)==4)setTimeout(u.Ca.bind(u),0);else if(Dt(u,"readystatechange"),Xr(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var g;if(!(g=m)){var x;if(x=j===0){let H=String(u.D).match(Rw)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),x=!bP.test(H?H.toLowerCase():"")}g=x}if(g)Dt(u,"complete"),Dt(u,"success");else{u.o=6;try{var V=Xr(u)>2?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.ca()+"]",Uw(u)}}finally{gc(u)}}}}function gc(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const g=u.g;u.g=null,m||Dt(u,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Xr(u){return u.g?u.g.readyState:0}t.ca=function(){try{return Xr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),iP(m)}};function Bw(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function kP(u){const m={};u=(u.g&&Xr(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<u.length;x++){if(A(u[x]))continue;var g=dP(u[x]);const V=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=m[V]||[];m[V]=j,j.push(g)}ne(m,function(x){return x.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ll(u,m,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||m}function zw(u){this.za=0,this.i=[],this.j=new Xa,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ll("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ll("baseRetryDelayMs",5e3,u),this.Za=ll("retryDelaySeedMs",1e4,u),this.Ta=ll("forwardChannelMaxRetries",2,u),this.va=ll("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new bw(u&&u.concurrentRequestLimit),this.Ba=new TP,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=zw.prototype,t.ka=8,t.I=1,t.connect=function(u,m,g,x){Vt(0),this.W=u,this.H=m||{},g&&x!==void 0&&(this.H.OSID=g,this.H.OAID=x),this.F=this.X,this.J=Xw(this,null,this.W),_c(this)};function Kf(u){if(qw(u),u.I==3){var m=u.V++,g=Kn(u.J);if(Ne(g,"SID",u.M),Ne(g,"RID",m),Ne(g,"TYPE","terminate"),ul(u,g),m=new Qr(u,u.j,m),m.M=2,m.A=mc(Kn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(m.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=m.A,g=!0),g||(m.g=Zw(m.j,null),m.g.ea(m.A)),m.F=Date.now(),fc(m)}Jw(u)}function yc(u){u.g&&(Yf(u),u.g.cancel(),u.g=null)}function qw(u){yc(u),u.v&&(o.clearTimeout(u.v),u.v=null),wc(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&o.clearTimeout(u.m),u.m=null)}function _c(u){if(!Sw(u.h)&&!u.m){u.m=!0;var m=u.Ea;F||I(),M||(F(),M=!0),b.add(m,u),u.D=0}}function AP(u,m){return kw(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Ja(c(u.Ea,u,m),Yw(u,u.D)),u.D++,!0)}t.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const V=new Qr(this,this.j,u);let j=this.o;if(this.U&&(j?(j=Z(j),yr(j,this.U)):j=this.U),this.u!==null||this.R||(V.J=j,j=null),this.S)e:{for(var m=0,g=0;g<this.i.length;g++){t:{var x=this.i[g];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(m+=x,m>4096){m=g;break e}if(m===4096||g===this.i.length-1){m=g+1;break e}}m=1e3}else m=1e3;m=Hw(this,V,m),g=Kn(this.J),Ne(g,"RID",u),Ne(g,"CVER",22),this.G&&Ne(g,"X-HTTP-Session-Id",this.G),ul(this,g),j&&(this.R?m="headers="+Za(jw(j))+"&"+m:this.u&&Gf(g,this.u,j)),qf(this.h,V),this.Ra&&Ne(g,"TYPE","init"),this.S?(Ne(g,"$req",m),Ne(g,"SID","null"),V.U=!0,Uf(V,g,null)):Uf(V,g,m),this.I=2}}else this.I==3&&(u?Ww(this,u):this.i.length==0||Sw(this.h)||Ww(this))};function Ww(u,m){var g;m?g=m.l:g=u.V++;const x=Kn(u.J);Ne(x,"SID",u.M),Ne(x,"RID",g),Ne(x,"AID",u.K),ul(u,x),u.u&&u.o&&Gf(x,u.u,u.o),g=new Qr(u,u.j,g,u.D+1),u.u===null&&(g.J=u.o),m&&(u.i=m.G.concat(u.i)),m=Hw(u,g,1e3),g.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),qf(u.h,g),Uf(g,x,m)}function ul(u,m){u.H&&X(u.H,function(g,x){Ne(m,x,g)}),u.l&&X({},function(g,x){Ne(m,x,g)})}function Hw(u,m,g){g=Math.min(u.i.length,g);const x=u.l?c(u.l.Ka,u.l,u):null;e:{var V=u.i;let se=-1;for(;;){const nt=["count="+g];se==-1?g>0?(se=V[0].g,nt.push("ofs="+se)):se=0:nt.push("ofs="+se);let ke=!0;for(let ct=0;ct<g;ct++){var j=V[ct].g;const Qn=V[ct].map;if(j-=se,j<0)se=Math.max(0,V[ct].g-100),ke=!1;else try{j="req"+j+"_"||"";try{var H=Qn instanceof Map?Qn:Object.entries(Qn);for(const[li,Zr]of H){let es=Zr;a(Zr)&&(es=Of(Zr)),nt.push(j+li+"="+encodeURIComponent(es))}}catch(li){throw nt.push(j+"type="+encodeURIComponent("_badmap")),li}}catch{x&&x(Qn)}}if(ke){H=nt.join("&");break e}}H=void 0}return u=u.i.splice(0,g),m.G=u,H}function Gw(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;F||I(),M||(F(),M=!0),b.add(m,u),u.A=0}}function Qf(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Ja(c(u.Da,u),Yw(u,u.A)),u.A++,!0)}t.Da=function(){if(this.v=null,Kw(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Ja(c(this.Wa,this),u)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Vt(10),yc(this),Kw(this))};function Yf(u){u.B!=null&&(o.clearTimeout(u.B),u.B=null)}function Kw(u){u.g=new Qr(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=Kn(u.na);Ne(m,"RID","rpc"),Ne(m,"SID",u.M),Ne(m,"AID",u.K),Ne(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ne(m,"TO",u.ia),Ne(m,"TYPE","xmlhttp"),ul(u,m),u.u&&u.o&&Gf(m,u.u,u.o),u.O&&(u.g.H=u.O);var g=u.g;u=u.ba,g.M=1,g.A=mc(Kn(m)),g.u=null,g.R=!0,Ew(g,u)}t.Va=function(){this.C!=null&&(this.C=null,yc(this),Qf(this),Vt(19))};function wc(u){u.C!=null&&(o.clearTimeout(u.C),u.C=null)}function Qw(u,m){var g=null;if(u.g==m){wc(u),Yf(u),u.g=null;var x=2}else if(zf(u.h,m))g=m.G,Aw(u.h,m),x=1;else return;if(u.I!=0){if(m.o)if(x==1){g=m.u?m.u.length:0,m=Date.now()-m.F;var V=u.D;x=dc(),Dt(x,new yw(x,g)),_c(u)}else Gw(u);else if(V=m.m,V==3||V==0&&m.X>0||!(x==1&&AP(u,m)||x==2&&Qf(u)))switch(g&&g.length>0&&(m=u.h,m.i=m.i.concat(g)),V){case 1:ai(u,5);break;case 4:ai(u,10);break;case 3:ai(u,6);break;default:ai(u,2)}}}function Yw(u,m){let g=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(g*=2),g*m}function ai(u,m){if(u.j.info("Error code "+m),m==2){var g=c(u.bb,u),x=u.Ua;const V=!x;x=new Yr(x||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||tl(x,"https"),mc(x),V?EP(x.toString(),g):xP(x.toString(),g)}else Vt(2);u.I=0,u.l&&u.l.pa(m),Jw(u),qw(u)}t.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Jw(u){if(u.I=0,u.ja=[],u.l){const m=Pw(u.h);(m.length!=0||u.i.length!=0)&&(E(u.ja,m),E(u.ja,u.i),u.h.i.length=0,y(u.i),u.i.length=0),u.l.oa()}}function Xw(u,m,g){var x=g instanceof Yr?Kn(g):new Yr(g);if(x.g!="")m&&(x.g=m+"."+x.g),nl(x,x.u);else{var V=o.location;x=V.protocol,m=m?m+"."+V.hostname:V.hostname,V=+V.port;const j=new Yr(null);x&&tl(j,x),m&&(j.g=m),V&&nl(j,V),g&&(j.h=g),x=j}return g=u.G,m=u.wa,g&&m&&Ne(x,g,m),Ne(x,"VER",u.ka),ul(u,x),x}function Zw(u,m,g){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new We(new Hf({ab:g})):new We(u.ma),m.Fa(u.L),m}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function e0(){}t=e0.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function vc(){}vc.prototype.g=function(u,m){return new un(u,m)};function un(u,m){Tt.call(this),this.g=new zw(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!A(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!A(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new fo(this)}f(un,Tt),un.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Kf(this.g)},un.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.v&&(g={},g.__data__=Of(u),u=g);m.i.push(new mP(m.Ya++,u)),m.I==3&&_c(m)},un.prototype.N=function(){this.g.l=null,delete this.j,Kf(this.g),delete this.g,un.Z.N.call(this)};function t0(u){Mf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const g in m){u=g;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}f(t0,Mf);function n0(){Lf.call(this),this.status=1}f(n0,Lf);function fo(u){this.g=u}f(fo,e0),fo.prototype.ra=function(){Dt(this.g,"a")},fo.prototype.qa=function(u){Dt(this.g,new t0(u))},fo.prototype.pa=function(u){Dt(this.g,new n0)},fo.prototype.oa=function(){Dt(this.g,"b")},vc.prototype.createWebChannel=vc.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,db=function(){return new vc},cb=function(){return dc()},ub=si,Jp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hc.NO_ERROR=0,hc.TIMEOUT=8,hc.HTTP_ERROR=6,pd=hc,_w.COMPLETE="complete",lb=_w,fw.EventType=Qa,Qa.OPEN="a",Qa.CLOSE="b",Qa.ERROR="c",Qa.MESSAGE="d",Tt.prototype.listen=Tt.prototype.J,Cl=fw,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,ab=We}).apply(typeof $c<"u"?$c:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Oa="12.9.0";function pM(t){Oa=t}/**
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
 *//**
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
 */const js=new Yh("@firebase/firestore");function xo(){return js.logLevel}function gM(t){js.setLogLevel(t)}function $(t,...e){if(js.logLevel<=ue.DEBUG){const n=e.map(My);js.debug(`Firestore (${Oa}): ${t}`,...n)}}function Je(t,...e){if(js.logLevel<=ue.ERROR){const n=e.map(My);js.error(`Firestore (${Oa}): ${t}`,...n)}}function rn(t,...e){if(js.logLevel<=ue.WARN){const n=e.map(My);js.warn(`Firestore (${Oa}): ${t}`,...n)}}function My(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,hb(t,r,n)}function hb(t,e,n){let r=`FIRESTORE (${Oa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Je(r),new Error(r)}function Q(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||hb(e,s,r)}function yM(t,e){t||G(57014,e)}function W(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class fb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class _M{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wM{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new fb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class vM{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class IM{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new vM(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EM{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Q(this.o===void 0,3512);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Xp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class xM{getToken(){return Promise.resolve(new Xp(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */function TM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=TM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Zp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Nm(s)===Nm(i)?te(s,i):Nm(s)?1:-1}return te(t.length,e.length)}const bM=55296,SM=57343;function Nm(t){const e=t.charCodeAt(0);return e>=bM&&e<=SM}function ua(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function pb(t){return t+"\0"}/**
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
 */const eg="__name__";class Xn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Xn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return te(e.length,n.length)}static compareSegments(e,n){const r=Xn.isNumericId(e),s=Xn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Xn.extractNumericId(e).compare(Xn.extractNumericId(n)):Zp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ds.fromString(e.substring(4,e.length-2))}}class ie extends Xn{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const kM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Xn{construct(e,n,r){return new Oe(e,n,r)}static isValidIdentifier(e){return kM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===eg}static keyField(){return new Oe([eg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ie.fromString(e))}static fromName(e){return new q(ie.fromString(e).popFirst(5))}static empty(){return new q(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ie(e.slice()))}}/**
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
 */function Ly(t,e,n){if(!n)throw new U(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gb(t,e,n,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hv(t){if(!q.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gv(t){if(q.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function oe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nf(t);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function _b(t,e){if(e<=0)throw new U(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function no(t,e){if(!yb(t))throw new U(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new U(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const Kv=-62135596800,Qv=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Qv);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Kv)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qv}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(no(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:tt("string",we._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new we(0,0))}static max(){return new Y(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ca=-1;class da{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function tg(t){return t.fields.find(e=>e.kind===2)}function fi(t){return t.fields.filter(e=>e.kind!==2)}function AM(t,e){let n=te(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=PM(t.fields[r],e.fields[r]),n!==0)return n;return te(t.fields.length,e.fields.length)}da.UNKNOWN_ID=-1;class ki{constructor(e,n){this.fieldPath=e,this.kind=n}}function PM(t,e){const n=Oe.comparator(t.fieldPath,e.fieldPath);return n!==0?n:te(t.kind,e.kind)}class ha{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ha(0,wn.min())}}function wb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new wn(s,q.empty(),e)}function vb(t){return new wn(t.readTime,t.key,ca)}class wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wn(Y.min(),q.empty(),ca)}static max(){return new wn(Y.max(),q.empty(),ca)}}function jy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Eb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Js(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Ib)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(s=>s?D.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new D((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new D((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */const dn="SimpleDb";class rf{static open(e,n,r,s){try{return new rf(n,e.transaction(s,r))}catch(i){throw new Hl(n,i)}}constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.S=new gt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{n.error?this.S.reject(new Hl(e,n.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=Fy(r.target.error);this.S.reject(new Hl(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||($(dn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new CM(n)}}class dr{static delete(e){return $(dn,"Removing database:",e),gi(u1().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Sy())return!1;if(dr.F())return!0;const e=at(),n=dr.M(e),r=0<n&&n<10,s=xb(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,n){return e.store(n)}static M(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,n,r){this.name=e,this.version=n,this.N=r,this.B=null,dr.M(at())===12.2&&Je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||($(dn,"Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Hl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new U(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Hl(e,o))},s.onupgradeneeded=i=>{$(dn,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{$(dn,"Database upgrade to version "+this.version+" complete")})}})),this.K&&(this.db.onversionchange=n=>this.K(n)),this.db}q(e){this.K=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=rf.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.C(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return l.catch(()=>{}),await a.D,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if($(dn,"Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function xb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class RM{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return gi(this.U.delete())}}class Hl extends U{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Xs(t){return t.name==="IndexedDbTransactionError"}class CM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?($(dn,"PUT",this.store.name,e,n),r=this.store.put(n,e)):($(dn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),gi(r)}add(e){return $(dn,"ADD",this.store.name,e,e),gi(this.store.add(e))}get(e){return gi(this.store.get(e)).next(n=>(n===void 0&&(n=null),$(dn,"GET",this.store.name,e,n),n))}delete(e){return $(dn,"DELETE",this.store.name,e),gi(this.store.delete(e))}count(){return $(dn,"COUNT",this.store.name),gi(this.store.count())}H(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new D((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.J(i,(a,l)=>{o.push(l)}).next(()=>o)}}Z(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}X(e,n){$(dn,"DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const s=this.cursor(r);return this.J(s,(i,o,a)=>a.delete())}ee(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.J(s,n)}te(e){const n=this.cursor({});return new D((r,s)=>{n.onerror=i=>{const o=Fy(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}J(e,n){const r=[];return new D((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new RM(a),c=n(a.primaryKey,a.value,l);if(c instanceof D){const d=c.catch(f=>(l.done(),D.reject(f)));r.push(d)}l.isDone?s():l.G===null?a.continue():a.continue(l.G)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function gi(t){return new D((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Fy(r.target.error);n(s)}})}let Yv=!1;function Fy(t){const e=dr.M(at());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yv||(Yv=!0,setTimeout(()=>{throw r},0)),r}}return t}const Gl="IndexBackfiller";class NM{constructor(e,n){this.asyncQueue=e,this.ne=n,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){$(Gl,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const n=await this.ne.ie();$(Gl,`Documents written: ${n}`)}catch(n){Xs(n)?$(Gl,"Ignoring IndexedDB error during index backfill: ",n):await Js(n)}await this.re(6e4)})}}class DM{constructor(e,n){this.localStore=e,this.persistence=n}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.se(n,e))}se(e,n){const r=new Set;let s=n,i=!0;return D.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $(Gl,`Processing collection: ${o}`),this.oe(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}oe(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(s,i)).next(a=>($(Gl,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}_e(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=vb(i);jy(o,r)>0&&(r=o)}),new wn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Gt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Gt.ce=-1;/**
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
 */const Vs=-1;function Ku(t){return t==null}function xu(t){return t===0&&1/t==-1/0}function Tb(t){return typeof t=="number"&&Number.isInteger(t)&&!xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const lh="";function Rt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jv(e)),e=VM(t.get(n),e);return Jv(e)}function VM(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case lh:n+="";break;default:n+=i}}return n}function Jv(t){return t+lh+""}function sr(t){const e=t.length;if(Q(e>=2,64408,{path:t}),e===2)return Q(t.charAt(0)===lh&&t.charAt(1)==="",56145,{path:t}),ie.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf(lh,i);switch((o<0||o>n)&&G(50515,{path:t}),t.charAt(o+1)){case"":const a=t.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:G(61167,{path:t})}i=o+2}return new ie(r)}/**
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
 */const mi="remoteDocuments",Qu="owner",po="owner",Tu="mutationQueues",OM="userId",Vn="mutations",Xv="batchId",xi="userMutationsIndex",Zv=["userId","batchId"];/**
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
 */function gd(t,e){return[t,Rt(e)]}function bb(t,e,n){return[t,Rt(e),n]}const MM={},fa="documentMutations",uh="remoteDocumentsV14",LM=["prefixPath","collectionGroup","readTime","documentId"],yd="documentKeyIndex",jM=["prefixPath","collectionGroup","documentId"],Sb="collectionGroupIndex",FM=["collectionGroup","readTime","prefixPath","documentId"],bu="remoteDocumentGlobal",ng="remoteDocumentGlobalKey",ma="targets",kb="queryTargetsIndex",UM=["canonicalId","targetId"],pa="targetDocuments",$M=["targetId","path"],Uy="documentTargetsIndex",BM=["path","targetId"],ch="targetGlobalKey",Ai="targetGlobal",Su="collectionParents",zM=["collectionId","parent"],ga="clientMetadata",qM="clientId",sf="bundles",WM="bundleId",of="namedQueries",HM="name",$y="indexConfiguration",GM="indexId",rg="collectionGroupIndex",KM="collectionGroup",Kl="indexState",QM=["indexId","uid"],Ab="sequenceNumberIndex",YM=["uid","sequenceNumber"],Ql="indexEntries",JM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Pb="documentKeyIndex",XM=["indexId","uid","orderedDocumentKey"],af="documentOverlays",ZM=["userId","collectionPath","documentId"],sg="collectionPathOverlayIndex",e4=["userId","collectionPath","largestBatchId"],Rb="collectionGroupOverlayIndex",t4=["userId","collectionGroup","largestBatchId"],By="globals",n4="name",Cb=[Tu,Vn,fa,mi,ma,Qu,Ai,pa,ga,bu,Su,sf,of],r4=[...Cb,af],Nb=[Tu,Vn,fa,uh,ma,Qu,Ai,pa,ga,bu,Su,sf,of,af],Db=Nb,zy=[...Db,$y,Kl,Ql],s4=zy,Vb=[...zy,By],i4=Vb;/**
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
 */class ig extends Eb{constructor(e,n){super(),this.le=e,this.currentSequenceNumber=n}}function ut(t,e){const n=W(t);return dr.O(n.le,e)}/**
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
 */function eI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ob(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function Mb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bc(this.root,e,this.comparator,!0)}}class Bc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tI(this.data.getIterator())}getIteratorFrom(e){return new tI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class tI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function go(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new be(Oe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ua(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Lb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function o4(){return typeof atob<"u"}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lb("Invalid base64 string: "+i):i}}(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const a4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Q(!!t,39018),typeof t=="string"){let e=0;const n=a4.exec(t);if(Q(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */const jb="server_timestamp",Fb="__type__",Ub="__previous_value__",$b="__local_write_time__";function lf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Fb])==null?void 0:r.stringValue)===jb}function uf(t){const e=t.mapValue.fields[Ub];return lf(e)?uf(e):e}function ku(t){const e=jr(t.mapValue.fields[$b].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class l4{constructor(e,n,r,s,i,o,a,l,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const Au="(default)";class Fs{constructor(e,n){this.projectId=e,this.database=n||Au}static empty(){return new Fs("","")}get isDefaultDatabase(){return this.database===Au}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}function u4(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(t.options.projectId,e)}/**
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
 */const qy="__type__",Bb="__max__",Is={mapValue:{fields:{__type__:{stringValue:Bb}}}},Wy="__vector__",ya="value",_d={nullValue:"NULL_VALUE"};function Us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lf(t)?4:zb(t)?9007199254740991:cf(t)?10:11:G(28295,{value:t})}function mr(t,e){if(t===e)return!0;const n=Us(t);if(n!==Us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ku(t).isEqual(ku(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=jr(s.timestampValue),a=jr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),a=Le(i.doubleValue);return o===a?xu(o)===xu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ua(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(eI(o)!==eI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!mr(o[l],a[l])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Pu(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Us(t),r=Us(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Le(i.integerValue||i.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return nI(t.timestampValue,e.timestampValue);case 4:return nI(ku(t),ku(e));case 5:return Zp(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Fr(i),l=Fr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=te(a[c],l[c]);if(d!==0)return d}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=te(Le(i.latitude),Le(o.latitude));return a!==0?a:te(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return rI(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,y,E,k;const a=i.fields||{},l=o.fields||{},c=(p=a[ya])==null?void 0:p.arrayValue,d=(y=l[ya])==null?void 0:y.arrayValue,f=te(((E=c==null?void 0:c.values)==null?void 0:E.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return f!==0?f:rI(c,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Is.mapValue&&o===Is.mapValue)return 0;if(i===Is.mapValue)return 1;if(o===Is.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const p=Zp(l[f],d[f]);if(p!==0)return p;const y=$s(a[l[f]],c[d[f]]);if(y!==0)return y}return te(l.length,d.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function nI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=jr(t),r=jr(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function rI(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$s(n[s],r[s]);if(i)return i}return te(n.length,r.length)}function _a(t){return og(t)}function og(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=og(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${og(n.fields[o])}`;return s+"}"}(t.mapValue):G(61005,{value:t})}function wd(t){switch(Us(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uf(t);return e?16+wd(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+wd(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Zs(r.fields,(i,o)=>{s+=i.length+wd(o)}),s}(t.mapValue);default:throw G(13486,{value:t})}}function Ui(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ag(t){return!!t&&"integerValue"in t}function Ru(t){return!!t&&"arrayValue"in t}function sI(t){return!!t&&"nullValue"in t}function iI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vd(t){return!!t&&"mapValue"in t}function cf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[qy])==null?void 0:r.stringValue)===Wy}function Yl(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yl(t.arrayValue.values[n]);return e}return{...t}}function zb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Bb}const qb={mapValue:{fields:{[qy]:{stringValue:Wy},[ya]:{arrayValue:{}}}}};function c4(t){return"nullValue"in t?_d:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ui(Fs.empty(),q.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?cf(t)?qb:{mapValue:{}}:G(35942,{value:t})}function d4(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ui(Fs.empty(),q.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?qb:"mapValue"in t?cf(t)?{mapValue:{}}:Is:G(61959,{value:t})}function oI(t,e){const n=$s(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function aI(t,e){const n=$s(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yl(n)}setAll(e){let n=Oe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Yl(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vd(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(Yl(this.value))}}function Wb(t){const e=[];return Zs(t.fields,(n,r)=>{const s=new Oe([n]);if(vd(r)){const i=Wb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class Ve{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,Y.min(),Y.min(),Y.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ve(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new Ve(e,2,n,Y.min(),Y.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,Y.min(),Y.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bs{constructor(e,n){this.position=e,this.inclusive=n}}function lI(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Cu{constructor(e,n="asc"){this.field=e,this.dir=n}}function h4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hb{}class ce extends Hb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new f4(e,n,r):n==="array-contains"?new g4(e,r):n==="in"?new Xb(e,r):n==="not-in"?new y4(e,r):n==="array-contains-any"?new _4(e,r):new ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new m4(e,r):new p4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($s(n,this.value)):n!==null&&Us(this.value)===Us(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ee extends Hb{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ee(e,n)}matches(e){return wa(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function wa(t){return t.op==="and"}function lg(t){return t.op==="or"}function Hy(t){return Gb(t)&&wa(t)}function Gb(t){for(const e of t.filters)if(e instanceof Ee)return!1;return!0}function ug(t){if(t instanceof ce)return t.field.canonicalString()+t.op.toString()+_a(t.value);if(Hy(t))return t.filters.map(e=>ug(e)).join(",");{const e=t.filters.map(n=>ug(n)).join(",");return`${t.op}(${e})`}}function Kb(t,e){return t instanceof ce?function(r,s){return s instanceof ce&&r.op===s.op&&r.field.isEqual(s.field)&&mr(r.value,s.value)}(t,e):t instanceof Ee?function(r,s){return s instanceof Ee&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Kb(o,s.filters[a]),!0):!1}(t,e):void G(19439)}function Qb(t,e){const n=t.filters.concat(e);return Ee.create(n,t.op)}function Yb(t){return t instanceof ce?function(n){return`${n.field.canonicalString()} ${n.op} ${_a(n.value)}`}(t):t instanceof Ee?function(n){return n.op.toString()+" {"+n.getFilters().map(Yb).join(" ,")+"}"}(t):"Filter"}class f4 extends ce{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class m4 extends ce{constructor(e,n){super(e,"in",n),this.keys=Jb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class p4 extends ce{constructor(e,n){super(e,"not-in",n),this.keys=Jb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jb(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class g4 extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ru(n)&&Pu(n.arrayValue,this.value)}}class Xb extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pu(this.value.arrayValue,n)}}class y4 extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Pu(this.value.arrayValue,n)}}class _4 extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pu(this.value.arrayValue,r))}}/**
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
 */class w4{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function cg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new w4(t,e,n,r,s,i,o)}function $i(t){const e=W(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ug(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_a(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_a(r)).join(",")),e.Te=n}return e.Te}function Yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!h4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uI(t.startAt,e.startAt)&&uI(t.endAt,e.endAt)}function dh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function hh(t,e){return t.filters.filter(n=>n instanceof ce&&n.field.isEqual(e))}function cI(t,e,n){let r=_d,s=!0;for(const i of hh(t,e)){let o=_d,a=!0;switch(i.op){case"<":case"<=":o=c4(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=_d}oI({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];oI({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function dI(t,e,n){let r=Is,s=!0;for(const i of hh(t,e)){let o=Is,a=!0;switch(i.op){case">=":case">":o=d4(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Is}aI({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];aI({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Wr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Zb(t,e,n,r,s,i,o,a){return new Wr(t,e,n,r,s,i,o,a)}function Ma(t){return new Wr(t)}function hI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function v4(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Gy(t){return t.collectionGroup!==null}function Qo(t){const e=W(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new be(Oe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Cu(i,r))}),n.has(Oe.keyField().canonicalString())||e.Ie.push(new Cu(Oe.keyField(),r))}return e.Ie}function Ct(t){const e=W(t);return e.Ee||(e.Ee=tS(e,Qo(t))),e.Ee}function eS(t){const e=W(t);return e.Re||(e.Re=tS(e,t.explicitOrderBy)),e.Re}function tS(t,e){if(t.limitType==="F")return cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Cu(s.field,i)});const n=t.endAt?new Bs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bs(t.startAt.position,t.startAt.inclusive):null;return cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dg(t,e){const n=t.filters.concat([e]);return new Wr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function I4(t,e){const n=t.explicitOrderBy.concat([e]);return new Wr(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function fh(t,e,n){return new Wr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function E4(t,e){return new Wr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}function x4(t,e){return new Wr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}function Ju(t,e){return Yu(Ct(t),Ct(e))&&t.limitType===e.limitType}function nS(t){return`${$i(Ct(t))}|lt:${t.limitType}`}function To(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Yb(s)).join(", ")}]`),Ku(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_a(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_a(s)).join(",")),`Target(${r})`}(Ct(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=lI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Qo(r),s)||r.endAt&&!function(o,a,l){const c=lI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Qo(r),s))}(t,e)}function rS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sS(t){return(e,n)=>{let r=!1;for(const s of Qo(t)){const i=T4(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function T4(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?$s(l,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
 */class Hr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mb(this.inner)}size(){return this.innerSize}}/**
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
 */const b4=new Ce(q.comparator);function Qt(){return b4}const iS=new Ce(q.comparator);function Nl(...t){let e=iS;for(const n of t)e=e.insert(n.key,n);return e}function oS(t){let e=iS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return Jl()}function aS(){return Jl()}function Jl(){return new Hr(t=>t.toString(),(t,e)=>t.isEqual(e))}const S4=new Ce(q.comparator),k4=new be(q.comparator);function re(...t){let e=k4;for(const n of t)e=e.add(n);return e}const A4=new be(te);function Ky(){return A4}/**
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
 */function Qy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function lS(t){return{integerValue:""+t}}function uS(t,e){return Tb(e)?lS(e):Qy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class df{constructor(){this._=void 0}}function P4(t,e,n){return t instanceof va?function(s,i){const o={fields:{[Fb]:{stringValue:jb},[$b]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lf(i)&&(i=uf(i)),i&&(o.fields[Ub]=i),{mapValue:o}}(n,e):t instanceof Bi?dS(t,e):t instanceof zi?hS(t,e):function(s,i){const o=cS(s,i),a=fI(o)+fI(s.Ae);return ag(o)&&ag(s.Ae)?lS(a):Qy(s.serializer,a)}(t,e)}function R4(t,e,n){return t instanceof Bi?dS(t,e):t instanceof zi?hS(t,e):n}function cS(t,e){return t instanceof Ia?function(r){return ag(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class va extends df{}class Bi extends df{constructor(e){super(),this.elements=e}}function dS(t,e){const n=fS(e);for(const r of t.elements)n.some(s=>mr(s,r))||n.push(r);return{arrayValue:{values:n}}}class zi extends df{constructor(e){super(),this.elements=e}}function hS(t,e){let n=fS(e);for(const r of t.elements)n=n.filter(s=>!mr(s,r));return{arrayValue:{values:n}}}class Ia extends df{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function fI(t){return Le(t.integerValue||t.doubleValue)}function fS(t){return Ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Zu{constructor(e,n){this.field=e,this.transform=n}}function C4(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Bi&&s instanceof Bi||r instanceof zi&&s instanceof zi?ua(r.elements,s.elements,mr):r instanceof Ia&&s instanceof Ia?mr(r.Ae,s.Ae):r instanceof va&&s instanceof va}(t.transform,e.transform)}class N4{constructor(e,n){this.version=e,this.transformResults=n}}class Fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Id(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hf{}function mS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ja(t.key,Fe.none()):new La(t.key,t.data,Fe.none());{const n=t.data,r=mt.empty();let s=new be(Oe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gr(t.key,r,new Kt(s.toArray()),Fe.none())}}function D4(t,e,n){t instanceof La?function(s,i,o){const a=s.value.clone(),l=pI(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(s,i,o){if(!Id(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=pI(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(pS(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xl(t,e,n,r){return t instanceof La?function(i,o,a,l){if(!Id(i.precondition,o))return a;const c=i.value.clone(),d=gI(i.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(i,o,a,l){if(!Id(i.precondition,o))return a;const c=gI(i.fieldTransforms,l,o),d=o.data;return d.setAll(pS(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Id(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function V4(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cS(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function mI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ua(r,s,(i,o)=>C4(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends hf{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gr extends hf{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pI(t,e,n){const r=new Map;Q(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,R4(o,a,n[s]))}return r}function gI(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,P4(i,o,e))}return r}class ja extends hf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yy extends hf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jy{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&D4(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aS();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=mS(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ua(this.mutations,e.mutations,(n,r)=>mI(n,r))&&ua(this.baseMutations,e.baseMutations,(n,r)=>mI(n,r))}}class Xy{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return S4}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xy(e,n,r,s)}}/**
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
 */class Zy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class gS{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class O4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,fe;function yS(t){switch(t){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function _S(t){if(t===void 0)return Je("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ze.OK:return O.OK;case Ze.CANCELLED:return O.CANCELLED;case Ze.UNKNOWN:return O.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return O.INTERNAL;case Ze.UNAVAILABLE:return O.UNAVAILABLE;case Ze.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ze.NOT_FOUND:return O.NOT_FOUND;case Ze.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ze.ABORTED:return O.ABORTED;case Ze.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ze.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:t})}}(fe=Ze||(Ze={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Zl=null;function M4(t){if(Zl)throw new Error("a TestingHooksSpi instance is already set");Zl=t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function wS(){return new TextEncoder}/**
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
 */const L4=new Ds([4294967295,4294967295],0);function yI(t){const e=wS().encode(t),n=new ob;return n.update(e),new Uint8Array(n.digest())}function _I(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ds([n,r],0),new Ds([s,i],0)]}class e_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Dl(`Invalid padding: ${n}`);if(r<0)throw new Dl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Dl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Dl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ds.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Ds.fromNumber(r)));return s.compare(L4)===1&&(s=new Ds([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=yI(e),[r,s]=_I(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new e_(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=yI(e),[r,s]=_I(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ec{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(Y.min(),s,new Ce(te),Qt(),re())}}class tc{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tc(r,n,re(),re(),re())}}/**
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
 */class Ed{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class vS{constructor(e,n){this.targetId=e,this.Ce=n}}class IS{constructor(e,n,r=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wI{constructor(){this.ve=0,this.Fe=vI(),this.Me=qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new tc(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=vI()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class j4{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qt(),this.He=zc(),this.Je=zc(),this.Ze=new Ce(te)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(dh(i))if(r===0){const o=new q(i.path);this.et(n,o,Ve.newNoDocument(o,Y.min()))}else Q(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}Zl==null||Zl.lt(function(d,f,p,y,E){var w,_,v;const k={localCacheCount:d,existenceFilterCount:f.count,databaseId:p.database,projectId:p.projectId},R=f.unchangedNames;return R&&(k.bloomFilter={applied:E===0,hashCount:(R==null?void 0:R.hashCount)??0,bitmapLength:((_=(w=R==null?void 0:R.bits)==null?void 0:w.bitmap)==null?void 0:_.length)??0,padding:((v=R==null?void 0:R.bits)==null?void 0:v.padding)??0,mightContain:C=>(y==null?void 0:y.mightContain(C))??!1}),k}(o,e.Ce,this.Ge.ht(),a,l))}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Fr(r).toUint8Array()}catch(l){if(l instanceof Lb)return rn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new e_(o,s,i)}catch(l){return rn(l instanceof Dl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&dh(a.target)){const l=new q(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ve.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=re();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ot(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ec(e,n,this.Ze,this.je,r);return this.je=Qt(),this.He=zc(),this.Je=zc(),this.Ze=new Ce(te),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new wI,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new be(te),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new be(te),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wI),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function zc(){return new Ce(q.comparator)}function vI(){return new Ce(q.comparator)}const F4={asc:"ASCENDING",desc:"DESCENDING"},U4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$4={and:"AND",or:"OR"};class B4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hg(t,e){return t.useProto3Json||Ku(e)?e:{value:e}}function Ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ES(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function z4(t,e){return Ea(t,e.toTimestamp())}function Xe(t){return Q(!!t,49232),Y.fromTimestamp(function(n){const r=jr(n);return new we(r.seconds,r.nanos)}(t))}function t_(t,e){return fg(t,e).canonicalString()}function fg(t,e){const n=function(s){return new ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xS(t){const e=ie.fromString(t);return Q(NS(e),10190,{key:e.toString()}),e}function Nu(t,e){return t_(t.databaseId,e.path)}function hr(t,e){const n=xS(e);if(n.get(1)!==t.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(SS(n))}function TS(t,e){return t_(t.databaseId,e)}function bS(t){const e=xS(t);return e.length===4?ie.emptyPath():SS(e)}function mg(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function SS(t){return Q(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function II(t,e,n){return{name:Nu(t,e),fields:n.value.mapValue.fields}}function ff(t,e,n){const r=hr(t,e.name),s=Xe(e.updateTime),i=e.createTime?Xe(e.createTime):Y.min(),o=new mt({mapValue:{fields:e.fields}}),a=Ve.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function q4(t,e){return"found"in e?function(r,s){Q(!!s.found,43571),s.found.name,s.found.updateTime;const i=hr(r,s.found.name),o=Xe(s.found.updateTime),a=s.found.createTime?Xe(s.found.createTime):Y.min(),l=new mt({mapValue:{fields:s.found.fields}});return Ve.newFoundDocument(i,o,a,l)}(t,e):"missing"in e?function(r,s){Q(!!s.missing,3894),Q(!!s.readTime,22933);const i=hr(r,s.missing),o=Xe(s.readTime);return Ve.newNoDocument(i,o)}(t,e):G(7234,{result:e})}function W4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(Q(d===void 0||typeof d=="string",58123),qe.fromBase64String(d||"")):(Q(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?O.UNKNOWN:_S(c.code);return new U(d,c.message||"")}(o);n=new IS(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hr(t,r.document.name),i=Xe(r.document.updateTime),o=r.document.createTime?Xe(r.document.createTime):Y.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=Ve.newFoundDocument(s,i,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ed(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hr(t,r.document),i=r.readTime?Xe(r.readTime):Y.min(),o=Ve.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ed([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hr(t,r.document),i=r.removedTargetIds||[];n=new Ed([],i,s,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new O4(s,i),a=r.targetId;n=new vS(a,o)}}return n}function Du(t,e){let n;if(e instanceof La)n={update:II(t,e.key,e.value)};else if(e instanceof ja)n={delete:Nu(t,e.key)};else if(e instanceof Gr)n={update:II(t,e.key,e.data),updateMask:J4(e.fieldMask)};else{if(!(e instanceof Yy))return G(16599,{dt:e.type});n={verify:Nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:z4(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(t,e.precondition)),n}function pg(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Fe.updateTime(Xe(i.updateTime)):i.exists!==void 0?Fe.exists(i.exists):Fe.none()}(e.currentDocument):Fe.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let l=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new va;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Bi(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new zi(d)}else"increment"in a?l=new Ia(o,a.increment):G(16584,{proto:a});const c=Oe.fromServerFormat(a.fieldPath);return new Zu(c,l)}(t,s)):[];if(e.update){e.update.name;const s=hr(t,e.update.name),i=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Kt(c.map(d=>Oe.fromServerFormat(d)))}(e.updateMask);return new Gr(s,i,o,n,r)}return new La(s,i,n,r)}if(e.delete){const s=hr(t,e.delete);return new ja(s,n)}if(e.verify){const s=hr(t,e.verify);return new Yy(s,n)}return G(1463,{proto:e})}function H4(t,e){return t&&t.length>0?(Q(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Xe(s.updateTime):Xe(i);return o.isEqual(Y.min())&&(o=Xe(i)),new N4(o,s.transformResults||[])}(n,e))):[]}function kS(t,e){return{documents:[TS(t,e.path)]}}function mf(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TS(t,s);const i=function(c){if(c.length!==0)return CS(Ee.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:gs(p.field),direction:K4(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function AS(t,e,n,r){const{ft:s,parent:i}=mf(t,e),o={},a=[];let l=0;return n.forEach(c=>{const d=r?c.alias:"aggregate_"+l++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:gs(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:gs(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function PS(t){let e=bS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Q(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const p=RS(f);return p instanceof Ee&&Hy(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(E){return new Cu(bo(E.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Ku(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,y=f.values||[];return new Bs(y,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,y=f.values||[];return new Bs(y,p)}(n.endAt)),Zb(e,s,o,i,a,"F",l,c)}function G4(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function RS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bo(n.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bo(n.unaryFilter.field);return ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bo(n.unaryFilter.field);return ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bo(n.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return ce.create(bo(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ee.create(n.compositeFilter.filters.map(r=>RS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function K4(t){return F4[t]}function Q4(t){return U4[t]}function Y4(t){return $4[t]}function gs(t){return{fieldPath:t.canonicalString()}}function bo(t){return Oe.fromServerFormat(t.fieldPath)}function CS(t){return t instanceof ce?function(n){if(n.op==="=="){if(iI(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NAN"}};if(sI(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(iI(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NAN"}};if(sI(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(n.field),op:Q4(n.op),value:n.value}}}(t):t instanceof Ee?function(n){const r=n.getFilters().map(s=>CS(s));return r.length===1?r[0]:{compositeFilter:{op:Y4(n.op),filters:r}}}(t):G(54877,{filter:t})}function J4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function DS(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class kr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VS{constructor(e){this.yt=e}}function X4(t,e){let n;if(e.document)n=ff(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),s=Wi(e.noDocument.readTime);n=Ve.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return G(56709);{const r=q.fromSegments(e.unknownDocument.path),s=Wi(e.unknownDocument.version);n=Ve.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(s){const i=new we(s[0],s[1]);return Y.fromTimestamp(i)}(e.readTime)),n}function EI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:mh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Nu(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ea(i,o.version.toTimestamp()),createTime:Ea(i,o.createTime.toTimestamp())}}(t.yt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:qi(e.version)};else{if(!e.isUnknownDocument())return G(57904,{document:e});r.unknownDocument={path:n.path.toArray(),version:qi(e.version)}}return r}function mh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wi(t){const e=new we(t.seconds,t.nanoseconds);return Y.fromTimestamp(e)}function yi(t,e){const n=(e.baseMutations||[]).map(i=>pg(t.yt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>pg(t.yt,i)),s=we.fromMillis(e.localWriteTimeMs);return new Jy(e.batchId,s,n,r)}function Vl(t){const e=Wi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Wi(t.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(i){return i.documents!==void 0}(t.query)?function(i){const o=i.documents.length;return Q(o===1,1966,{count:o}),Ct(Ma(bS(i.documents[0])))}(t.query):function(i){return Ct(PS(i))}(t.query),new kr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,qe.fromBase64String(t.resumeToken))}function OS(t,e){const n=qi(e.snapshotVersion),r=qi(e.lastLimboFreeSnapshotVersion);let s;s=dh(e.target)?kS(t.yt,e.target):mf(t.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:$i(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function pf(t){const e=PS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fh(e,e.limit,"L"):e}function Dm(t,e){return new Zy(e.largestBatchId,pg(t.yt,e.overlayMutation))}function xI(t,e){const n=e.path.lastSegment();return[t,Rt(e.path.popLast()),n]}function TI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:qi(r.readTime),documentKey:Rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Z4{getBundleMetadata(e,n){return bI(e).get(n).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Wi(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,n){return bI(e).put(function(s){return{bundleId:s.id,createTime:qi(Xe(s.createTime)),version:s.version}}(n))}getNamedQuery(e,n){return SI(e).get(n).next(r=>{if(r)return function(i){return{name:i.name,query:pf(i.bundledQuery),readTime:Wi(i.readTime)}}(r)})}saveNamedQuery(e,n){return SI(e).put(function(s){return{name:s.name,readTime:qi(Xe(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function bI(t){return ut(t,sf)}function SI(t){return ut(t,of)}/**
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
 */class gf{constructor(e,n){this.serializer=e,this.userId=n}static wt(e,n){const r=n.uid||"";return new gf(e,r)}getOverlay(e,n){return _l(e).get(xI(this.userId,n)).next(r=>r?Dm(this.serializer,r):null)}getOverlays(e,n){const r=ir();return D.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Zy(n,o);s.push(this.bt(e,a))}),D.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(Rt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(_l(e).X(sg,a))}),D.waitFor(i)}getOverlaysForCollection(e,n,r){const s=ir(),i=Rt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return _l(e).H(sg,o).next(a=>{for(const l of a){const c=Dm(this.serializer,l);s.set(c.getKey(),c)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=ir();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return _l(e).ee({index:Rb,range:a},(l,c,d)=>{const f=Dm(this.serializer,c);i.size()<s||f.largestBatchId===o?(i.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>i)}bt(e,n){return _l(e).put(function(s,i,o){const[a,l,c]=xI(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Du(s.yt,o.mutation)}}(this.serializer,this.userId,n))}}function _l(t){return ut(t,af)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class eL{St(e){return ut(e,By)}getSessionToken(e){return this.St(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?qe.fromUint8Array(r):qe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.St(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class _i{constructor(){}Dt(e,n){this.Ct(e,n),n.vt()}Ct(e,n){if("nullValue"in e)this.Ft(n,5);else if("booleanValue"in e)this.Ft(n,10),n.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(n,15),n.Mt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Ft(n,13):(this.Ft(n,15),xu(r)?n.Mt(0):n.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(n,20),typeof r=="string"&&(r=jr(r)),n.xt(`${r.seconds||""}`),n.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,n),this.Nt(n);else if("bytesValue"in e)this.Ft(n,30),n.Bt(Fr(e.bytesValue)),this.Nt(n);else if("referenceValue"in e)this.Lt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(n,45),n.Mt(r.latitude||0),n.Mt(r.longitude||0)}else"mapValue"in e?zb(e)?this.Ft(n,Number.MAX_SAFE_INTEGER):cf(e)?this.kt(e.mapValue,n):(this.Kt(e.mapValue,n),this.Nt(n)):"arrayValue"in e?(this.qt(e.arrayValue,n),this.Nt(n)):G(19022,{Ut:e})}Ot(e,n){this.Ft(n,25),this.$t(e,n)}$t(e,n){n.xt(e)}Kt(e,n){const r=e.fields||{};this.Ft(n,55);for(const s of Object.keys(r))this.Ot(s,n),this.Ct(r[s],n)}kt(e,n){var o,a;const r=e.fields||{};this.Ft(n,53);const s=ya,i=((a=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.Ft(n,15),n.Mt(Le(i)),this.Ot(s,n),this.Ct(r[s],n)}qt(e,n){const r=e.values||[];this.Ft(n,50);for(const s of r)this.Ct(s,n)}Lt(e,n){this.Ft(n,37),q.fromName(e).path.forEach(r=>{this.Ft(n,60),this.$t(r,n)})}Ft(e,n){e.Mt(n)}Nt(e){e.Mt(2)}}_i.Wt=new _i;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=255;function tL(t){if(t===0)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function kI(t){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=tL(255&r[i]);if(s+=o,o!==8)break}return s}(t);return Math.ceil(e/8)}class nL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Gt(r.value),r=n.next();this.zt()}jt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ht(r.value),r=n.next();this.Jt()}Zt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=n.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ht(r);else if(r<2048)this.Ht(960|r>>>6),this.Ht(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ht(480|r>>>12),this.Ht(128|63&r>>>6),this.Ht(128|63&r);else{const s=n.codePointAt(0);this.Ht(240|s>>>18),this.Ht(128|63&s>>>12),this.Ht(128|63&s>>>6),this.Ht(128|63&s)}}this.Jt()}Yt(e){const n=this.en(e),r=kI(n);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}nn(e){const n=this.en(e),r=kI(n);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}rn(){this.sn(yo),this.sn(255)}_n(){this.an(yo),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const n=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&n[0]);n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Gt(e){const n=255&e;n===0?(this.sn(0),this.sn(255)):n===yo?(this.sn(yo),this.sn(0)):this.sn(n)}Ht(e){const n=255&e;n===0?(this.an(0),this.an(255)):n===yo?(this.an(yo),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Jt(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class rL{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class sL{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class wl{constructor(){this.cn=new nL,this.ascending=new rL(this.cn),this.descending=new sL(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class wi{constructor(e,n,r,s){this.hn=e,this.Pn=n,this.Tn=r,this.In=s}En(){const e=this.In.length,n=e===0||this.In[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.In,0),n!==e?r.set([0],this.In.length):++r[r.length-1],new wi(this.hn,this.Pn,this.Tn,r)}Rn(e,n,r){return{indexId:this.hn,uid:e,arrayValue:xd(this.Tn),directionalValue:xd(this.In),orderedDocumentKey:xd(n),documentKey:r.path.toArray()}}An(e,n,r){const s=this.Rn(e,n,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function rs(t,e){let n=t.hn-e.hn;return n!==0?n:(n=AI(t.Tn,e.Tn),n!==0?n:(n=AI(t.In,e.In),n!==0?n:q.comparator(t.Pn,e.Pn)))}function AI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}function xd(t){return _1()?function(n){let r="";for(let s=0;s<n.length;s++)r+=String.fromCharCode(n[s]);return r}(t):t}function PI(t){return typeof t!="string"?t:function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(t)}class RI{constructor(e){this.Vn=new be((n,r)=>Oe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(Q(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const n=tg(e);if(n!==void 0&&!this.pn(n))return!1;const r=fi(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.pn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.yn(a,l)||!this.wn(this.dn[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.dn.length||!this.wn(this.dn[o++],a))return!1}return!0}bn(){if(this.fn)return null;let e=new be(Oe.comparator);const n=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new ki(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new ki(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new ki(r.field,r.dir==="asc"?0:1)));return new da(da.UNKNOWN_ID,this.collectionId,n,ha.empty())}pn(e){for(const n of this.mn)if(this.yn(n,e))return!0;return!1}yn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}wn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function MS(t){var n,r;if(Q(t instanceof ce||t instanceof Ee,20012),t instanceof ce){if(t instanceof Xb){const s=((r=(n=t.value.arrayValue)==null?void 0:n.values)==null?void 0:r.map(i=>ce.create(t.field,"==",i)))||[];return Ee.create(s,"or")}return t}const e=t.filters.map(s=>MS(s));return Ee.create(e,t.op)}function iL(t){if(t.getFilters().length===0)return[];const e=_g(MS(t));return Q(LS(e),7391),gg(e)||yg(e)?[e]:e.getFilters()}function gg(t){return t instanceof ce}function yg(t){return t instanceof Ee&&Hy(t)}function LS(t){return gg(t)||yg(t)||function(n){if(n instanceof Ee&&lg(n)){for(const r of n.getFilters())if(!gg(r)&&!yg(r))return!1;return!0}return!1}(t)}function _g(t){if(Q(t instanceof ce||t instanceof Ee,34018),t instanceof ce)return t;if(t.filters.length===1)return _g(t.filters[0]);const e=t.filters.map(r=>_g(r));let n=Ee.create(e,t.op);return n=ph(n),LS(n)?n:(Q(n instanceof Ee,64498),Q(wa(n),40251),Q(n.filters.length>1,57927),n.filters.reduce((r,s)=>n_(r,s)))}function n_(t,e){let n;return Q(t instanceof ce||t instanceof Ee,38388),Q(e instanceof ce||e instanceof Ee,25473),n=t instanceof ce?e instanceof ce?function(s,i){return Ee.create([s,i],"and")}(t,e):CI(t,e):e instanceof ce?CI(e,t):function(s,i){if(Q(s.filters.length>0&&i.filters.length>0,48005),wa(s)&&wa(i))return Qb(s,i.getFilters());const o=lg(s)?s:i,a=lg(s)?i:s,l=o.filters.map(c=>n_(c,a));return Ee.create(l,"or")}(t,e),ph(n)}function CI(t,e){if(wa(e))return Qb(e,t.getFilters());{const n=e.filters.map(r=>n_(t,r));return Ee.create(n,"or")}}function ph(t){if(Q(t instanceof ce||t instanceof Ee,11850),t instanceof ce)return t;const e=t.getFilters();if(e.length===1)return ph(e[0]);if(Gb(t))return t;const n=e.map(s=>ph(s)),r=[];return n.forEach(s=>{s instanceof ce?r.push(s):s instanceof Ee&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ee.create(r,t.op)}/**
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
 */class oL{constructor(){this.Sn=new r_}addToCollectionParentIndex(e,n){return this.Sn.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(wn.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class r_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new be(ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(ie.comparator)).toArray()}}/**
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
 */const NI="IndexedDbIndexManager",qc=new Uint8Array(0);class aL{constructor(e,n){this.databaseId=n,this.Dn=new r_,this.Cn=new Hr(r=>$i(r),(r,s)=>Yu(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Dn.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Dn.add(n)});const i={collectionId:r,parent:Rt(s)};return DI(e).put(i)}return D.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[pb(n),""],!1,!0);return DI(e).H(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(sr(o.parent))}return r})}addFieldIndex(e,n){const r=vl(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=wo(e);return i.next(a=>{o.put(TI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=vl(e),s=wo(e),i=_o(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=vl(e),r=_o(e),s=wo(e);return n.X().next(()=>r.X()).next(()=>s.X())}createTargetIndexes(e,n){return D.forEach(this.vn(n),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new RI(r).bn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,n){const r=_o(e);let s=!0;const i=new Map;return D.forEach(this.vn(n),o=>this.Fn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=re();const a=[];return D.forEach(i,(l,c)=>{$(NI,`Using index ${function(v){return`id=${v.indexId}|cg=${v.collectionGroup}|f=${v.fields.map(C=>`${C.fieldPath}:${C.kind}`).join(",")}`}(l)} to execute ${$i(n)}`);const d=function(v,C){const F=tg(C);if(F===void 0)return null;for(const M of hh(v,F.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(c,l),f=function(v,C){const F=new Map;for(const M of fi(C))for(const b of hh(v,M.fieldPath))switch(b.op){case"==":case"in":F.set(M.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return F.set(M.fieldPath.canonicalString(),b.value),Array.from(F.values())}return null}(c,l),p=function(v,C){const F=[];let M=!0;for(const b of fi(C)){const I=b.kind===0?cI(v,b.fieldPath,v.startAt):dI(v,b.fieldPath,v.startAt);F.push(I.value),M&&(M=I.inclusive)}return new Bs(F,M)}(c,l),y=function(v,C){const F=[];let M=!0;for(const b of fi(C)){const I=b.kind===0?dI(v,b.fieldPath,v.endAt):cI(v,b.fieldPath,v.endAt);F.push(I.value),M&&(M=I.inclusive)}return new Bs(F,M)}(c,l),E=this.Mn(l,c,p),k=this.Mn(l,c,y),R=this.xn(l,c,f),w=this.On(l.indexId,d,E,p.inclusive,k,y.inclusive,R);return D.forEach(w,_=>r.Z(_,n.limit).next(v=>{v.forEach(C=>{const F=q.fromSegments(C.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return D.resolve(null)})}vn(e){let n=this.Cn.get(e);return n||(e.filters.length===0?n=[e]:n=iL(Ee.create(e.filters,"and")).map(r=>cg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,n),n)}On(e,n,r,s,i,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,i.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const p=n?this.Nn(n[f/c]):qc,y=this.Bn(e,p,r[f%c],s),E=this.Ln(e,p,i[f%c],o),k=a.map(R=>this.Bn(e,p,R,!0));d.push(...this.createRange(y,E,k))}return d}Bn(e,n,r,s){const i=new wi(e,q.empty(),n,r);return s?i:i.En()}Ln(e,n,r,s){const i=new wi(e,q.empty(),n,r);return s?i.En():i}Fn(e,n){const r=new RI(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.gn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.vn(n);return D.forEach(s,i=>this.Fn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new be(Oe.comparator),d=!1;for(const f of l.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?d=!0:c=c.add(p.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&s.length>1&&r===2?1:r)}kn(e,n){const r=new wl;for(const s of fi(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.ln(s.kind);_i.Wt.Dt(i,o)}return r.un()}Nn(e){const n=new wl;return _i.Wt.Dt(e,n.ln(0)),n.un()}Kn(e,n){const r=new wl;return _i.Wt.Dt(Ui(this.databaseId,n),r.ln(function(i){const o=fi(i);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,n,r){if(r===null)return[];let s=[];s.push(new wl);let i=0;for(const o of fi(e)){const a=r[i++];for(const l of s)if(this.qn(n,o.fieldPath)&&Ru(a))s=this.Un(s,o,a);else{const c=l.ln(o.kind);_i.Wt.Dt(a,c)}}return this.$n(s)}Mn(e,n,r){return this.xn(e,n,r.position)}$n(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].un();return n}Un(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new wl;l.seed(a.un()),_i.Wt.Dt(o,l.ln(n.kind)),i.push(l)}return i}qn(e,n){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=vl(e),s=wo(e);return(n?r.H(rg,IDBKeyRange.bound(n,n)):r.H()).next(i=>{const o=[];return D.forEach(i,a=>s.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const p=f?new ha(f.sequenceNumber,new wn(Wi(f.readTime),new q(sr(f.documentKey)),f.largestBatchId)):ha.empty(),y=d.fields.map(([E,k])=>new ki(Oe.fromServerFormat(E),k));return new da(d.indexId,d.collectionGroup,y,p)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:te(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=vl(e),i=wo(e);return this.Wn(e).next(o=>s.H(rg,IDBKeyRange.bound(n,n)).next(a=>D.forEach(a,l=>i.put(TI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return D.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),D.forEach(a,l=>this.Qn(e,s,l).next(c=>{const d=this.Gn(i,l);return c.isEqual(d)?D.resolve():this.zn(e,i,l,c,d)}))))})}jn(e,n,r,s){return _o(e).put(s.Rn(this.uid,this.Kn(r,n.key),n.key))}Hn(e,n,r,s){return _o(e).delete(s.An(this.uid,this.Kn(r,n.key),n.key))}Qn(e,n,r){const s=_o(e);let i=new be(rs);return s.ee({index:Pb,range:IDBKeyRange.only([r.indexId,this.uid,xd(this.Kn(r,n))])},(o,a)=>{i=i.add(new wi(r.indexId,n,PI(a.arrayValue),PI(a.directionalValue)))}).next(()=>i)}Gn(e,n){let r=new be(rs);const s=this.kn(n,e);if(s==null)return r;const i=tg(n);if(i!=null){const o=e.data.field(i.fieldPath);if(Ru(o))for(const a of o.arrayValue.values||[])r=r.add(new wi(n.indexId,e.key,this.Nn(a),s))}else r=r.add(new wi(n.indexId,e.key,qc,s));return r}zn(e,n,r,s,i){$(NI,"Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,p){const y=l.getIterator(),E=c.getIterator();let k=go(y),R=go(E);for(;k||R;){let w=!1,_=!1;if(k&&R){const v=d(k,R);v<0?_=!0:v>0&&(w=!0)}else k!=null?_=!0:w=!0;w?(f(R),R=go(E)):_?(p(k),k=go(y)):(k=go(y),R=go(E))}}(s,i,rs,a=>{o.push(this.jn(e,n,r,a))},a=>{o.push(this.Hn(e,n,r,a))}),D.waitFor(o)}Wn(e){let n=1;return wo(e).ee({index:Ab,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>rs(o,a)).filter((o,a,l)=>!a||rs(o,l[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=rs(o,e),l=rs(o,n);if(a===0)s[0]=e.En();else if(a>0&&l<0)s.push(o),s.push(o.En());else if(l>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.Jn(s[o],s[o+1]))return[];const a=s[o].An(this.uid,qc,q.empty()),l=s[o+1].An(this.uid,qc,q.empty());i.push(IDBKeyRange.bound(a,l))}return i}Jn(e,n){return rs(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(VI)}getMinOffset(e,n){return D.mapArray(this.vn(n),r=>this.Fn(e,r).next(s=>s||G(44426))).next(VI)}}function DI(t){return ut(t,Su)}function _o(t){return ut(t,Ql)}function vl(t){return ut(t,$y)}function wo(t){return ut(t,Kl)}function VI(t){Q(t.length!==0,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;jy(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new wn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const OI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jS=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function FS(t,e,n){const r=t.store(Vn),s=t.store(fa),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.ee({range:o},(d,f,p)=>(a++,p.delete()));i.push(l.next(()=>{Q(a===1,47070,{batchId:n.batchId})}));const c=[];for(const d of n.mutations){const f=bb(e,d.key.path,n.batchId);i.push(s.delete(f)),c.push(d.key)}return D.waitFor(i).next(()=>c)}function gh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw G(14731);e=t.noDocument}return JSON.stringify(e).length}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(jS,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);class yf{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static wt(e,n,r,s){Q(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new yf(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ss(e).ee({index:xi,range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=So(e),o=ss(e);return o.add({}).next(a=>{Q(typeof a=="number",49019);const l=new Jy(a,n,r,s),c=function(y,E,k){const R=k.baseMutations.map(_=>Du(y.yt,_)),w=k.mutations.map(_=>Du(y.yt,_));return{userId:E,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:R,mutations:w}}(this.serializer,this.userId,l),d=[];let f=new be((p,y)=>te(p.canonicalString(),y.canonicalString()));for(const p of s){const y=bb(this.userId,p.key.path,a);f=f.add(p.key.path.popLast()),d.push(o.put(c)),d.push(i.put(y,MM))}return f.forEach(p=>{d.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Zn[a]=l.keys()}),D.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return ss(e).get(n).next(r=>r?(Q(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:n}),yi(this.serializer,r)):null)}Xn(e,n){return this.Zn[n]?D.resolve(this.Zn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.Zn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return ss(e).ee({index:xi,range:s},(o,a,l)=>{a.userId===this.userId&&(Q(a.batchId>=r,47524,{Yn:r}),i=yi(this.serializer,a)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Vs;return ss(e).ee({index:xi,range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,Vs],[this.userId,Number.POSITIVE_INFINITY]);return ss(e).H(xi,n).next(r=>r.map(s=>yi(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=gd(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return So(e).ee({range:s},(o,a,l)=>{const[c,d,f]=o,p=sr(d);if(c===this.userId&&n.path.isEqual(p))return ss(e).get(f).next(y=>{if(!y)throw G(61480,{er:o,batchId:f});Q(y.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:y.userId,batchId:f}),i.push(yi(this.serializer,y))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(te);const s=[];return n.forEach(i=>{const o=gd(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=So(e).ee({range:a},(c,d,f)=>{const[p,y,E]=c,k=sr(y);p===this.userId&&i.path.isEqual(k)?r=r.add(E):f.done()});s.push(l)}),D.waitFor(s).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=gd(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new be(te);return So(e).ee({range:o},(l,c,d)=>{const[f,p,y]=l,E=sr(p);f===this.userId&&r.isPrefixOf(E)?E.length===s&&(a=a.add(y)):d.done()}).next(()=>this.tr(e,a))}tr(e,n){const r=[],s=[];return n.forEach(i=>{s.push(ss(e).get(i).next(o=>{if(o===null)throw G(35274,{batchId:i});Q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(yi(this.serializer,o))}))}),D.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return FS(e.le,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.nr(n.batchId)}),D.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return So(e).ee({range:r},(i,o,a)=>{if(i[0]===this.userId){const l=sr(i[1]);s.push(l)}else a.done()}).next(()=>{Q(s.length===0,56720,{rr:s.map(i=>i.canonicalString())})})})}containsKey(e,n){return US(e,this.userId,n)}ir(e){return $S(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:Vs,lastStreamToken:""})}}function US(t,e,n){const r=gd(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return So(t).ee({range:i,Y:!0},(a,l,c)=>{const[d,f,p]=a;d===e&&f===s&&(o=!0),c.done()}).next(()=>o)}function ss(t){return ut(t,Vn)}function So(t){return ut(t,fa)}function $S(t){return ut(t,Tu)}/**
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
 */class Hi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Hi(0)}static ar(){return new Hi(-1)}}/**
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
 */class lL{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.ur(e).next(n=>{const r=new Hi(n.highestTargetId);return n.highestTargetId=r.next(),this.cr(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(n=>Y.fromTimestamp(new we(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.ur(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.cr(e,s)))}addTargetData(e,n){return this.lr(e,n).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(n,r),this.cr(e,r))))}updateTargetData(e,n){return this.lr(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>vo(e).delete(n.targetId)).next(()=>this.ur(e)).next(r=>(Q(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return vo(e).ee((o,a)=>{const l=Vl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(i)).next(()=>s)}forEachTarget(e,n){return vo(e).ee((r,s)=>{const i=Vl(s);n(i)})}ur(e){return MI(e).get(ch).next(n=>(Q(n!==null,2888),n))}cr(e,n){return MI(e).put(ch,n)}lr(e,n){return vo(e).put(OS(this.serializer,n))}hr(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(n=>n.targetCount)}getTargetData(e,n){const r=$i(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return vo(e).ee({range:s,index:kb},(o,a,l)=>{const c=Vl(a);Yu(n,c.target)&&(i=c,l.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=ys(e);return n.forEach(o=>{const a=Rt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(s)}removeMatchingKeys(e,n,r){const s=ys(e);return D.forEach(n,i=>{const o=Rt(i.path);return D.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=ys(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=ys(e);let i=re();return s.ee({range:r,Y:!0},(o,a,l)=>{const c=sr(o[1]),d=new q(c);i=i.add(d)}).next(()=>i)}containsKey(e,n){const r=Rt(n.path),s=IDBKeyRange.bound([r],[pb(r)],!1,!0);let i=0;return ys(e).ee({index:Uy,Y:!0,range:s},([o,a],l,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}At(e,n){return vo(e).get(n).next(r=>r?Vl(r):null)}}function vo(t){return ut(t,ma)}function MI(t){return ut(t,Ai)}function ys(t){return ut(t,pa)}/**
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
 */const LI="LruGarbageCollector",BS=1048576;function jI([t,e],[n,r]){const s=te(t,n);return s===0?te(e,r):s}class uL{constructor(e){this.Pr=e,this.buffer=new be(jI),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();jI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(LI,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xs(n)?$(LI,"Ignoring IndexedDB error during garbage collection: ",n):await Js(n)}await this.Ar(3e5)})}}class cL{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return D.resolve(Gt.ce);const r=new uL(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(OI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),OI):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),xo()<=ue.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function qS(t,e){return new cL(t,e)}/**
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
 */class dL{constructor(e,n){this.db=e,this.garbageCollector=qS(this,n)}dr(e){const n=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}mr(e,n){return this.yr(e,(r,s)=>n(s))}addReference(e,n,r){return Wc(e,r)}removeReference(e,n,r){return Wc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Wc(e,n)}wr(e,n){return function(s,i){let o=!1;return $S(s).te(a=>US(s,a,i).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,(o,a)=>{if(a<=n){const l=this.wr(e,o).next(c=>{if(!c)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),ys(e).delete(function(f){return[0,Rt(f.path)]}(o))))});s.push(l)}}).next(()=>D.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Wc(e,n)}yr(e,n){const r=ys(e);let s,i=Gt.ce;return r.ee({index:Uy},([o,a],{path:l,sequenceNumber:c})=>{o===0?(i!==Gt.ce&&n(new q(sr(s)),i),i=c,s=l):i=Gt.ce}).next(()=>{i!==Gt.ce&&n(new q(sr(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wc(t,e){return ys(t).put(function(r,s){return{targetId:0,path:Rt(r.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
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
 */class WS{constructor(){this.changes=new Hr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hL{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ui(e).put(r)}removeEntry(e,n,r){return ui(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],mh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.br(e,r)))}getEntry(e,n){let r=Ve.newInvalidDocument(n);return ui(e).ee({index:yd,range:IDBKeyRange.only(Il(n))},(s,i)=>{r=this.Sr(n,i)}).next(()=>r)}Dr(e,n){let r={size:0,document:Ve.newInvalidDocument(n)};return ui(e).ee({index:yd,range:IDBKeyRange.only(Il(n))},(s,i)=>{r={document:this.Sr(n,i),size:gh(i)}}).next(()=>r)}getEntries(e,n){let r=Qt();return this.Cr(e,n,(s,i)=>{const o=this.Sr(s,i);r=r.insert(s,o)}).next(()=>r)}vr(e,n){let r=Qt(),s=new Ce(q.comparator);return this.Cr(e,n,(i,o)=>{const a=this.Sr(i,o);r=r.insert(i,a),s=s.insert(i,gh(o))}).next(()=>({documents:r,Fr:s}))}Cr(e,n,r){if(n.isEmpty())return D.resolve();let s=new be($I);n.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Il(s.first()),Il(s.last())),o=s.getIterator();let a=o.getNext();return ui(e).ee({index:yd,range:i},(l,c,d)=>{const f=q.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&$I(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.j(Il(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s,i){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),mh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ui(e).H(IDBKeyRange.bound(a,l,!0)).next(c=>{i==null||i.incrementDocumentReadCount(c.length);let d=Qt();for(const f of c){const p=this.Sr(q.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(Xu(n,p)||s.has(p.key))&&(d=d.insert(p.key,p))}return d})}getAllFromCollectionGroup(e,n,r,s){let i=Qt();const o=UI(n,r),a=UI(n,wn.max());return ui(e).ee({index:Sb,range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.Sr(q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(f.key,f),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new fL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return FI(e).get(ng).next(n=>(Q(!!n,20021),n))}br(e,n){return FI(e).put(ng,n)}Sr(e,n){if(n){const r=X4(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return Ve.newInvalidDocument(e)}}function HS(t){return new hL(t)}class fL extends WS{constructor(e,n){super(),this.Mr=e,this.trackRemovals=n,this.Or=new Hr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new be((i,o)=>te(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Or.get(i);if(n.push(this.Mr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=EI(this.Mr.serializer,o);s=s.add(i.path.popLast());const c=gh(l);r+=c-a.size,n.push(this.Mr.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=EI(this.Mr.serializer,o.convertToNoDocument(Y.min()));n.push(this.Mr.addEntry(e,i,l))}}),s.forEach(i=>{n.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Mr.updateMetadata(e,r)),D.waitFor(n)}getFromCache(e,n){return this.Mr.Dr(e,n).next(r=>(this.Or.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Mr.vr(e,n).next(({documents:r,Fr:s})=>(s.forEach((i,o)=>{this.Or.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function FI(t){return ut(t,bu)}function ui(t){return ut(t,uh)}function Il(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function UI(t,e){const n=e.documentKey.path.toArray();return[t,mh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function $I(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=te(n[i],r[i]),s)return s;return s=te(n.length,r.length),s||(s=te(n[n.length-2],r[r.length-2]),s||te(n[n.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class mL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class GS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xl(r.mutation,s,Kt.empty(),we.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Nl();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Qt();const o=Jl(),a=function(){return Jl()}();return n.forEach((l,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof Gr)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Xl(d.mutation,c,d.mutation.getFieldMask(),we.now())):o.set(c.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>a.set(c,new mL(d,o.get(c)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Jl();let s=new Ce((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Kt.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(s.get(a.batchId)||re()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=aS();d.forEach(p=>{if(!i.has(p)){const y=mS(n.get(p),r.get(p));y!==null&&f.set(p,y),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return v4(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):D.resolve(ir());let a=ca,l=i;return o.next(c=>D.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,re())).next(d=>({batchId:a,changes:oS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Nl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Nl();return this.indexManager.getCollectionParents(e,i).next(a=>D.forEach(a,l=>{const c=function(f,p){return new Wr(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ve.newInvalidDocument(d)))});let a=Nl();return o.forEach((l,c)=>{const d=i.get(l);d!==void 0&&Xl(d.mutation,c,Kt.empty(),we.now()),Xu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class pL{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return D.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:pf(s.bundledQuery),readTime:Xe(s.readTime)}}(n)),D.resolve()}}/**
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
 */class gL{constructor(){this.overlays=new Ce(q.comparator),this.Lr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return D.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const s=ir(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=ir(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ir(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=s)););return D.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Zy(n,r));let i=this.Lr.get(n);i===void 0&&(i=re(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class yL{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,D.resolve()}}/**
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
 */class s_{constructor(){this.kr=new be(dt.Kr),this.qr=new be(dt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new dt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new ie([])),r=new dt(n,e),s=new dt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new q(new ie([])),r=new dt(n,e),s=new dt(n,e+1);let i=re();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return q.comparator(e.key,n.key)||te(e.Hr,n.Hr)}static Ur(e,n){return te(e.Hr,n.Hr)||q.comparator(e.key,n.key)}}/**
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
 */class _L{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new be(dt.Kr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jy(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new dt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Vs:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(te);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),D.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new dt(new q(i),0);let a=new be(te);return this.Jr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.Hr)),!0)},o),D.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Q(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return D.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new dt(n,0),s=this.Jr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wL{constructor(e){this.ti=e,this.docs=function(){return new Ce(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=Qt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ve.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qt();const o=n.path,a=new q(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||jy(vb(d),r)<=0||(s.has(d.key)||Xu(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G(9500)}ni(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vL(this)}getSize(e){return D.resolve(this.size)}}class vL extends WS{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class IL{constructor(e){this.persistence=e,this.ri=new Hr(n=>$i(n),Yu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new s_,this.targetCount=0,this.oi=Hi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),D.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.lr(n),D.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.si.containsKey(n))}}/**
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
 */class i_{constructor(e,n){this._i={},this.overlays={},this.ai=new Gt(0),this.ui=!1,this.ui=!0,this.ci=new yL,this.referenceDelegate=e(this),this.li=new IL(this),this.indexManager=new oL,this.remoteDocumentCache=function(s){return new wL(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new VS(n),this.Pi=new pL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new _L(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new EL(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return D.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class EL extends Eb{constructor(e){super(),this.currentSequenceNumber=e}}class _f{constructor(e){this.persistence=e,this.Ri=new s_,this.Ai=null}static Vi(e){return new _f(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),D.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,r=>{const s=q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return D.or([()=>D.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class yh{constructor(e,n){this.persistence=e,this.fi=new Hr(r=>Rt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qS(this,n)}static Vi(e,n){return new yh(e,n)}Ti(){}Ii(e){return D.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return D.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?D.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),D.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),D.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wd(e.data.value)),n}wr(e,n,r){return D.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xL{constructor(e){this.serializer=e}k(e,n,r,s){const i=new rf("createOrUpgrade",n);r<1&&s>=1&&(function(l){l.createObjectStore(Qu)}(e),function(l){l.createObjectStore(Tu,{keyPath:OM}),l.createObjectStore(Vn,{keyPath:Xv,autoIncrement:!0}).createIndex(xi,Zv,{unique:!0}),l.createObjectStore(fa)}(e),BI(e),function(l){l.createObjectStore(mi)}(e));let o=D.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore(pa),l.deleteObjectStore(ma),l.deleteObjectStore(Ai)}(e),BI(e)),o=o.next(()=>function(l){const c=l.store(Ai),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put(ch,d)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store(Vn).H().next(f=>{l.deleteObjectStore(Vn),l.createObjectStore(Vn,{keyPath:Xv,autoIncrement:!0}).createIndex(xi,Zv,{unique:!0});const p=c.store(Vn),y=f.map(E=>p.put(E));return D.waitFor(y)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(ga,{keyPath:qM})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.gi(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(bu)}(e),this.pi(i)))),r<7&&s>=7&&(o=o.next(()=>this.yi(i))),r<8&&s>=8&&(o=o.next(()=>this.wi(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.bi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(sf,{keyPath:WM})})(e),function(l){l.createObjectStore(of,{keyPath:HM})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore(af,{keyPath:ZM});c.createIndex(sg,e4,{unique:!1}),c.createIndex(Rb,t4,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore(uh,{keyPath:LM});c.createIndex(yd,jM),c.createIndex(Sb,FM)}(e)).next(()=>this.Si(e,i)).next(()=>e.deleteObjectStore(mi))),r<14&&s>=14&&(o=o.next(()=>this.Di(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore($y,{keyPath:GM,autoIncrement:!0}).createIndex(rg,KM,{unique:!1}),l.createObjectStore(Kl,{keyPath:QM}).createIndex(Ab,YM,{unique:!1}),l.createObjectStore(Ql,{keyPath:JM}).createIndex(Pb,XM,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{n.objectStore(Kl).clear()}).next(()=>{n.objectStore(Ql).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(By,{keyPath:n4})})(e)})),r<18&&s>=18&&_1()&&(o=o.next(()=>{n.objectStore(Kl).clear()}).next(()=>{n.objectStore(Ql).clear()})),o}pi(e){let n=0;return e.store(mi).ee((r,s)=>{n+=gh(s)}).next(()=>{const r={byteSize:n};return e.store(bu).put(ng,r)})}gi(e){const n=e.store(Tu),r=e.store(Vn);return n.H().next(s=>D.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Vs],[i.userId,i.lastAcknowledgedBatchId]);return r.H(xi,o).next(a=>D.forEach(a,l=>{Q(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const c=yi(this.serializer,l);return FS(e,i.userId,c).next(()=>{})}))}))}yi(e){const n=e.store(pa),r=e.store(mi);return e.store(Ai).get(ch).next(s=>{const i=[];return r.ee((o,a)=>{const l=new ie(o),c=function(f){return[0,Rt(f)]}(l);i.push(n.get(c).next(d=>d?D.resolve():(f=>n.put({targetId:0,path:Rt(f),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(i))})}wi(e,n){e.createObjectStore(Su,{keyPath:zM});const r=n.store(Su),s=new r_,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Rt(l)})}};return n.store(mi).ee({Y:!0},(o,a)=>{const l=new ie(o);return i(l.popLast())}).next(()=>n.store(fa).ee({Y:!0},([o,a,l],c)=>{const d=sr(a);return i(d.popLast())}))}bi(e){const n=e.store(ma);return n.ee((r,s)=>{const i=Vl(s),o=OS(this.serializer,i);return n.put(o)})}Si(e,n){const r=n.store(mi),s=[];return r.ee((i,o)=>{const a=n.store(uh),l=function(f){return f.document?new q(ie.fromString(f.document.name).popFirst(5)):f.noDocument?q.fromSegments(f.noDocument.path):f.unknownDocument?q.fromSegments(f.unknownDocument.path):G(36783)}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(c))}).next(()=>D.waitFor(s))}Di(e,n){const r=n.store(Vn),s=HS(this.serializer),i=new i_(_f.Vi,this.serializer.yt);return r.H().next(o=>{const a=new Map;return o.forEach(l=>{let c=a.get(l.userId)??re();yi(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),D.forEach(a,(l,c)=>{const d=new ft(c),f=gf.wt(this.serializer,d),p=i.getIndexManager(d),y=yf.wt(d,this.serializer,p,i.referenceDelegate);return new GS(s,y,f,p).recalculateAndSaveOverlaysForDocumentKeys(new ig(n,Gt.ce),l).next()})})}}function BI(t){t.createObjectStore(pa,{keyPath:$M}).createIndex(Uy,BM,{unique:!0}),t.createObjectStore(ma,{keyPath:"targetId"}).createIndex(kb,UM,{unique:!0}),t.createObjectStore(Ai)}const is="IndexedDbPersistence",Vm=18e5,Om=5e3,Mm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",KS="main";class o_{constructor(e,n,r,s,i,o,a,l,c,d,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ci=i,this.window=o,this.document=a,this.Fi=c,this.Mi=d,this.xi=f,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=p=>Promise.resolve(),!o_.v())throw new U(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dL(this,s),this.Ki=n+KS,this.serializer=new VS(l),this.qi=new dr(this.Ki,this.xi,new xL(this.serializer)),this.ci=new eL,this.li=new lL(this.referenceDelegate,this.serializer),this.remoteDocumentCache=HS(this.serializer),this.Pi=new Z4,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&Je(is,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,Mm);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new Gt(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.qi&&this.qi.close(),Promise.reject(e)))}zi(e){return this.ki=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.q(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(n=>{n||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Hi(e)).next(n=>this.isPrimary&&!n?this.Ji(e).next(()=>!1):!!n&&this.Zi(e).next(()=>!0))).catch(e=>{if(Xs(e))return $(is,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $(is,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return El(e).get(po).next(n=>D.resolve(this.Xi(n)))}Yi(e){return Hc(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Vm)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ut(n,ga);return r.H().next(s=>{const i=this.ns(s,Vm),o=s.filter(a=>i.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const n of e)this.Ui.removeItem(this.rs(n.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.Mi?D.resolve(!0):El(e).get(po).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,Om)&&!this.ss(n.ownerId)){if(this.Xi(n)&&this.networkEnabled)return!0;if(!this.Xi(n)){if(!n.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,Mm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hc(e).H().next(r=>this.ns(r,Om).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&$(is,`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[Qu,ga],e=>{const n=new ig(e,Gt.ce);return this.Ji(n).next(()=>this.Yi(n))}),this.qi.close(),this.ls()}ns(e,n){return e.filter(r=>this.ts(r.updateTimeMs,n)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>Hc(e).H().next(n=>this.ns(n,Vm).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,n){return yf.wt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new aL(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return gf.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,n,r){$(is,"Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=function(l){return l===18?i4:l===17?Vb:l===16?s4:l===15?zy:l===14?Db:l===13?Nb:l===12?r4:l===11?Cb:void G(60245)}(this.xi);let o;return this.qi.runTransaction(e,s,i,a=>(o=new ig(a,this.ai?this.ai.next():Gt.ce),n==="readwrite-primary"?this.ji(o).next(l=>!!l||this.Hi(o)).next(l=>{if(!l)throw Je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new U(O.FAILED_PRECONDITION,Ib);return r(o)}).next(l=>this.Zi(o).next(()=>l)):this.Ps(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ps(e){return El(e).get(po).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,Om)&&!this.ss(n.ownerId)&&!this.Xi(n)&&!(this.Mi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new U(O.FAILED_PRECONDITION,Mm)})}Zi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return El(e).put(po,n)}static v(){return dr.v()}Ji(e){const n=El(e);return n.get(po).next(r=>this.Xi(r)?($(is,"Releasing primary lease."),n.delete(po)):D.resolve())}ts(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const n=/(?:Version|Mobile)\/1[456]/;y1()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var n;try{const r=((n=this.Ui)==null?void 0:n.getItem(this.rs(e)))!==null;return $(is,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Je(is,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){Je("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function El(t){return ut(t,Qu)}function Hc(t){return ut(t,ga)}function a_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class l_{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new l_(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class TL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return y1()?8:xb(at())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TL;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(xo()<=ue.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",To(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(xo()<=ue.DEBUG&&$("QueryEngine","Query:",To(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(xo()<=ue.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",To(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(n))):D.resolve())}gs(e,n){if(hI(n))return D.resolve(null);let r=Ct(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=fh(n,null,"F"),r=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.bs(n,a);return this.Ss(n,c,o,l.readTime)?this.gs(e,fh(n,null,"F")):this.Ds(e,c,n,l)}))})))}ps(e,n,r,s){return hI(n)||s.isEqual(Y.min())?D.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?D.resolve(null):(xo()<=ue.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),To(n)),this.Ds(e,o,n,wb(s,ca)).next(a=>a))})}bs(e,n){let r=new be(sS(e));return n.forEach((s,i)=>{Xu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return xo()<=ue.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",To(n)),this.fs.getDocumentsMatchingQuery(e,n,wn.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const u_="LocalStore",bL=3e8;class SL{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ce(te),this.Fs=new Hr(i=>$i(i),Yu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GS(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function YS(t,e,n,r){return new SL(t,e,n,r)}async function JS(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=re();for(const c of s){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of i){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:a}))})})}function kL(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,p=f.keys();let y=D.resolve();return p.forEach(E=>{y=y.next(()=>d.getEntry(l,E)).next(k=>{const R=c.docVersions.get(E);Q(R!==null,48541),k.version.compareTo(R)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function XS(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function AL(t,e){const n=W(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((d,f)=>{const p=s.get(f);if(!p)return;a.push(n.li.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,d.addedDocuments,f)));let y=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(f,y),function(k,R,w){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=bL?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(p,y,d)&&a.push(n.li.updateTargetData(i,y))});let l=Qt(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(ZS(i,o,e.documentUpdates).next(d=>{l=d.Bs,c=d.Ls})),!r.isEqual(Y.min())){const d=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.vs=s,i))}function ZS(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qt();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$(u_,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function PL(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Vs),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xa(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ta(t,e,n){const r=W(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xs(o))throw o;$(u_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function _h(t,e,n){const r=W(t);let s=Y.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=W(l),p=f.Fs.get(d);return p!==void 0?D.resolve(f.vs.get(p)):f.li.getTargetData(c,d)}(r,o,Ct(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:re())).next(a=>(nk(r,rS(e),a),{documents:a,ks:i})))}function ek(t,e){const n=W(t),r=W(n.li),s=n.vs.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.At(i,e).next(o=>o?o.target:null))}function tk(t,e){const n=W(t),r=n.Ms.get(e)||Y.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.xs.getAllFromCollectionGroup(s,e,wb(r,ca),Number.MAX_SAFE_INTEGER)).then(s=>(nk(n,e,s),s))}function nk(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}async function RL(t,e,n,r){const s=W(t);let i=re(),o=Qt();for(const c of n){const d=e.Ks(c.metadata.name);c.document&&(i=i.add(d));const f=e.qs(c);f.setReadTime(e.Us(c.metadata.readTime)),o=o.insert(d,f)}const a=s.xs.newChangeBuffer({trackRemovals:!0}),l=await xa(s,function(d){return Ct(Ma(ie.fromString(`__bundle__/docs/${d}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",c=>ZS(c,a,o).next(d=>(a.apply(c),d)).next(d=>s.li.removeMatchingKeysForTargetId(c,l.targetId).next(()=>s.li.addMatchingKeys(c,i,l.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(c,d.Bs,d.Ls)).next(()=>d.Bs)))}async function CL(t,e,n=re()){const r=await xa(t,Ct(pf(e.bundledQuery))),s=W(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Xe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Pi.saveNamedQuery(i,e);const a=r.withResumeToken(qe.EMPTY_BYTE_STRING,o);return s.vs=s.vs.insert(a.targetId,a),s.li.updateTargetData(i,a).next(()=>s.li.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.li.addMatchingKeys(i,n,r.targetId)).next(()=>s.Pi.saveNamedQuery(i,e))})}/**
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
 */const rk="firestore_clients";function zI(t,e){return`${rk}_${t}_${e}`}const sk="firestore_mutations";function qI(t,e,n){let r=`${sk}_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const ik="firestore_targets";function Lm(t,e){return`${ik}_${t}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Zn="SharedClientState";class wh{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static $s(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new U(s.error.code,s.error.message))),o?new wh(e,n,s.state,i):(Je(Zn,`Failed to parse mutation state for ID '${n}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new U(r.error.code,r.error.message))),i?new eu(e,r.state,s):(Je(Zn,`Failed to parse target state for ID '${e}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Ky();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Tb(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new vh(e,i):(Je(Zn,`Failed to parse client data for instance '${e}': ${n}`),null)}}class c_{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new c_(n.clientId,n.onlineState):(Je(Zn,`Failed to parse online state: ${e}`),null)}}class wg{constructor(){this.activeTargetIds=Ky()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jm{constructor(e,n,r,s,i){this.window=e,this.Ci=n,this.persistenceKey=r,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Hs.bind(this),this.Js=new Ce(te),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=zI(this.persistenceKey,this.zs),this.Ys=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Js=this.Js.insert(this.zs,new wg),this.eo=new RegExp(`^${rk}_${o}_([^_]*)$`),this.no=new RegExp(`^${sk}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${ik}_${o}_(\\d+)$`),this.io=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.so=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.hs();for(const r of e){if(r===this.zs)continue;const s=this.getItem(zI(this.persistenceKey,r));if(s){const i=vh.$s(r,s);i&&(this.Js=this.Js.insert(i.clientId,i))}}this.oo();const n=this.storage.getItem(this.io);if(n){const r=this._o(n);r&&this.ao(r)}for(const r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Js)}isActiveQueryTarget(e){let n=!1;return this.Js.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,n,r){this.co(e,n,r),this.lo(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Lm(this.persistenceKey,e));if(s){const i=eu.$s(e,s);i&&(r=i.state)}}return n&&this.ho.Qs(e),this.oo(),r}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lm(this.persistenceKey,e))}updateQueryState(e,n,r){this.Po(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.lo(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Io(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return $(Zn,"READ",e,n),n}setItem(e,n){$(Zn,"SET",e,n),this.storage.setItem(e,n)}removeItem(e){$(Zn,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const n=e;if(n.storageArea===this.storage){if($(Zn,"EVENT",n.key,n.newValue),n.key===this.Xs)return void Je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.eo.test(n.key)){if(n.newValue==null){const r=this.Eo(n.key);return this.Ro(r,null)}{const r=this.Ao(n.key,n.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.no.test(n.key)){if(n.newValue!==null){const r=this.Vo(n.key,n.newValue);if(r)return this.mo(r)}}else if(this.ro.test(n.key)){if(n.newValue!==null){const r=this.fo(n.key,n.newValue);if(r)return this.po(r)}}else if(n.key===this.io){if(n.newValue!==null){const r=this._o(n.newValue);if(r)return this.ao(r)}}else if(n.key===this.Ys){const r=function(i){let o=Gt.ce;if(i!=null)try{const a=JSON.parse(i);Q(typeof a=="number",30636,{yo:i}),o=a}catch(a){Je(Zn,"Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Gt.ce&&this.sequenceNumberHandler(r)}else if(n.key===this.so){const r=this.wo(n.newValue);await Promise.all(r.map(s=>this.syncEngine.bo(s)))}}}else this.Zs.push(n)})}}get ho(){return this.Js.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,n,r){const s=new wh(this.currentUser,e,n,r),i=qI(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}lo(e){const n=qI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}To(e){const n={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(n))}Po(e,n,r){const s=Lm(this.persistenceKey,e),i=new eu(e,n,r);this.setItem(s,i.Ws())}Io(e){const n=JSON.stringify(Array.from(e));this.setItem(this.so,n)}Eo(e){const n=this.eo.exec(e);return n?n[1]:null}Ao(e,n){const r=this.Eo(e);return vh.$s(r,n)}Vo(e,n){const r=this.no.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return wh.$s(new ft(i),s,n)}fo(e,n){const r=this.ro.exec(e),s=Number(r[1]);return eu.$s(s,n)}_o(e){return c_.$s(e)}wo(e){return JSON.parse(e)}async mo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.So(e.batchId,e.state,e.error);$(Zn,`Ignoring mutation for non-active user ${e.user.uid}`)}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,n){const r=n?this.Js.insert(e,n):this.Js.remove(e),s=this.uo(this.Js),i=this.uo(r),o=[],a=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||a.push(l)}),this.syncEngine.Co(o,a).then(()=>{this.Js=r})}ao(e){this.Js.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let n=Ky();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class ok{constructor(){this.vo=new wg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NL{Mo(e){}shutdown(){}}/**
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
 */const WI="ConnectivityMonitor";class HI{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(WI,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(WI,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Gc=null;function vg(){return Gc===null?Gc=function(){return 268435456+Math.round(2147483648*Math.random())}():Gc++,"0x"+Gc.toString(16)}/**
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
 */const Fm="RestConnection",DL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class VL{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Au?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=vg(),a=this.Qo(e,n.toUriEncodedString());$(Fm,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:c}=new URL(a),d=zr(c);return this.zo(e,a,l,r,d).then(f=>($(Fm,`Received RPC '${e}' ${o}: `,f),f),f=>{throw rn(Fm,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=DL[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class OL{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const kt="WebChannelConnection",xl=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Yo extends VL{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yo.c_){const e=cb();xl(e,ub.STAT_EVENT,n=>{n.stat===Jp.PROXY?$(kt,"STAT_EVENT: detected buffering proxy"):n.stat===Jp.NOPROXY&&$(kt,"STAT_EVENT: detected no buffering proxy")}),Yo.c_=!0}}zo(e,n,r,s,i){const o=vg();return new Promise((a,l)=>{const c=new ab;c.setWithCredentials(!0),c.listenOnce(lb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pd.NO_ERROR:const f=c.getResponseJson();$(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case pd.TIMEOUT:$(kt,`RPC '${e}' ${o} timed out`),l(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case pd.HTTP_ERROR:const p=c.getStatus();if($(kt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const E=y==null?void 0:y.error;if(E&&E.status&&E.message){const k=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(_)>=0?_:O.UNKNOWN}(E.status);l(new U(k,E.message))}else l(new U(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new U(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(kt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);$(kt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",d,r,15)})}T_(e,n,r){const s=vg(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=i.join("");$(kt,`Creating RPC '${e}' stream ${s}: ${c}`,a);const d=o.createWebChannel(c,a);this.I_(d);let f=!1,p=!1;const y=new OL({Ho:E=>{p?$(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(f||($(kt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),f=!0),$(kt,`RPC '${e}' stream ${s} sending:`,E),d.send(E))},Jo:()=>d.close()});return xl(d,Cl.EventType.OPEN,()=>{p||($(kt,`RPC '${e}' stream ${s} transport opened.`),y.i_())}),xl(d,Cl.EventType.CLOSE,()=>{p||(p=!0,$(kt,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.E_(d))}),xl(d,Cl.EventType.ERROR,E=>{p||(p=!0,rn(kt,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),y.o_(new U(O.UNAVAILABLE,"The operation could not be completed")))}),xl(d,Cl.EventType.MESSAGE,E=>{var k;if(!p){const R=E.data[0];Q(!!R,16349);const w=R,_=(w==null?void 0:w.error)||((k=w[0])==null?void 0:k.error);if(_){$(kt,`RPC '${e}' stream ${s} received error:`,_);const v=_.status;let C=function(b){const I=Ze[b];if(I!==void 0)return _S(I)}(v),F=_.message;v==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&rn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),C===void 0&&(C=O.INTERNAL,F="Unknown error status: "+v+" with message "+_.message),p=!0,y.o_(new U(C,F)),d.close()}else $(kt,`RPC '${e}' stream ${s} received:`,R),y.__(R)}}),Yo.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return db()}}/**
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
 */function ML(t){return new Yo(t)}/**
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
 */function ak(){return typeof window<"u"?window:null}function Td(){return typeof document<"u"?document:null}/**
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
 */function ro(t){return new B4(t,!0)}/**
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
 */Yo.c_=!1;class d_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const GI="PersistentStream";class lk{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new d_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Je(n.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(GI,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(GI,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LL extends lk{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=W4(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Xe(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=mg(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=dh(l)?{documents:kS(i,l)}:{query:mf(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ES(i,o.resumeToken);const c=hg(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Ea(i,o.snapshotVersion.toTimestamp());const c=hg(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=G4(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=mg(this.serializer),n.removeTarget=e,this.K_(n)}}class jL extends lk{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=H4(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=mg(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Du(this.serializer,r))};this.K_(n)}}/**
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
 */class FL{}class UL extends FL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,fg(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(O.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,fg(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function $L(t,e,n,r){return new UL(t,e,n,r)}class BL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Je(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Gi="RemoteStore";class zL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ei(this)&&($(Gi,"Restarting streams for network reachability change."),await async function(l){const c=W(l);c.Ea.add(4),await Fa(c),c.Va.set("Unknown"),c.Ea.delete(4),await nc(c)}(this))})}),this.Va=new BL(r,s)}}async function nc(t){if(ei(t))for(const e of t.Ra)await e(!0)}async function Fa(t){for(const e of t.Ra)await e(!1)}function wf(t,e){const n=W(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),m_(n)?f_(n):$a(n).O_()&&h_(n,e))}function ba(t,e){const n=W(t),r=$a(n);n.Ia.delete(e),r.O_()&&uk(n,e),n.Ia.size===0&&(r.O_()?r.L_():ei(n)&&n.Va.set("Unknown"))}function h_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$a(t).Z_(e)}function uk(t,e){t.da.$e(e),$a(t).X_(e)}function f_(t){t.da=new j4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),$a(t).start(),t.Va.ua()}function m_(t){return ei(t)&&!$a(t).x_()&&t.Ia.size>0}function ei(t){return W(t).Ea.size===0}function ck(t){t.da=void 0}async function qL(t){t.Va.set("Online")}async function WL(t){t.Ia.forEach((e,n)=>{h_(t,e)})}async function HL(t,e){ck(t),m_(t)?(t.Va.ha(e),f_(t)):t.Va.set("Unknown")}async function GL(t,e,n){if(t.Va.set("Online"),e instanceof IS&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){$(Gi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ih(t,r)}else if(e instanceof Ed?t.da.Xe(e):e instanceof vS?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await XS(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(c);d&&i.Ia.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(qe.EMPTY_BYTE_STRING,d.snapshotVersion)),uk(i,l);const f=new kr(d.target,l,c,d.sequenceNumber);h_(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$(Gi,"Failed to raise snapshot:",r),await Ih(t,r)}}async function Ih(t,e,n){if(!Xs(e))throw e;t.Ea.add(1),await Fa(t),t.Va.set("Offline"),n||(n=()=>XS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Gi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await nc(t)})}function dk(t,e){return e().catch(n=>Ih(t,n,e))}async function Ua(t){const e=W(t),n=zs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vs;for(;KL(e);)try{const s=await PL(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,QL(e,s)}catch(s){await Ih(e,s)}hk(e)&&fk(e)}function KL(t){return ei(t)&&t.Ta.length<10}function QL(t,e){t.Ta.push(e);const n=zs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function hk(t){return ei(t)&&!zs(t).x_()&&t.Ta.length>0}function fk(t){zs(t).start()}async function YL(t){zs(t).ra()}async function JL(t){const e=zs(t);for(const n of t.Ta)e.ea(n.mutations)}async function XL(t,e,n){const r=t.Ta.shift(),s=Xy.from(r,e,n);await dk(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ua(t)}async function ZL(t,e){e&&zs(t).Y_&&await async function(r,s){if(function(o){return yS(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();zs(r).B_(),await dk(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ua(r)}}(t,e),hk(t)&&fk(t)}async function KI(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),$(Gi,"RemoteStore received new credentials");const r=ei(n);n.Ea.add(3),await Fa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await nc(n)}async function Ig(t,e){const n=W(t);e?(n.Ea.delete(2),await nc(n)):e||(n.Ea.add(2),await Fa(n),n.Va.set("Unknown"))}function $a(t){return t.ma||(t.ma=function(n,r,s){const i=W(n);return i.sa(),new LL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:qL.bind(null,t),Yo:WL.bind(null,t),t_:HL.bind(null,t),J_:GL.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),m_(t)?f_(t):t.Va.set("Unknown")):(await t.ma.stop(),ck(t))})),t.ma}function zs(t){return t.fa||(t.fa=function(n,r,s){const i=W(n);return i.sa(),new jL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:YL.bind(null,t),t_:ZL.bind(null,t),ta:JL.bind(null,t),na:XL.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ua(t)):(await t.fa.stop(),t.Ta.length>0&&($(Gi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class p_{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new p_(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ba(t,e){if(Je("AsyncQueue",`${e}: ${t}`),Xs(t))return new U(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Pi{static emptySet(e){return new Pi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Nl(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class QI{constructor(){this.ga=new Ce(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ki(e,n,Pi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ej{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class tj{constructor(){this.queries=YI(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=W(n),i=s.queries;s.queries=YI(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new U(O.ABORTED,"Firestore shutting down"))}}function YI(){return new Hr(t=>nS(t),Ju)}async function g_(t,e){const n=W(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new ej,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ba(o,`Initialization of query '${To(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&__(n)}async function y_(t,e){const n=W(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nj(t,e){const n=W(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&__(n)}function rj(t,e,n){const r=W(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function __(t){t.Ca.forEach(e=>{e.next()})}var Eg,JI;(JI=Eg||(Eg={})).Ma="default",JI.Cache="cache";class w_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Eg.Cache}}/**
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
 */class mk{constructor(e,n){this.qa=e,this.byteLength=n}Ua(){return"metadata"in this.qa}}/**
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
 */class XI{constructor(e){this.serializer=e}Ks(e){return hr(this.serializer,e)}qs(e){return e.metadata.exists?ff(this.serializer,e.document,!1):Ve.newNoDocument(this.Ks(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return Xe(e)}}class v_{constructor(e,n){this.$a=e,this.serializer=n,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=pk(e)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.qa.namedQuery)this.Wa.push(e.qa.namedQuery);else if(e.qa.documentMetadata){this.Qa.push({metadata:e.qa.documentMetadata}),e.qa.documentMetadata.exists||++n;const r=ie.fromString(e.qa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.qa.document&&(this.Qa[this.Qa.length-1].document=e.qa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,{...this.progress}):null}za(e){const n=new Map,r=new XI(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Ks(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||re()).add(i);n.set(o,a)}}return n}async ja(e){const n=await RL(e,new XI(this.serializer),this.Qa,this.$a.id),r=this.za(this.documents);for(const s of this.Wa)await CL(e,s,r.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ha:this.collectionGroups,Ja:n}}}function pk(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class gk{constructor(e){this.key=e}}class yk{constructor(e){this.key=e}}class _k{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=sS(e),this.tu=new Pi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new QI,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const p=s.get(d),y=Xu(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let R=!1;p&&y?p.data.isEqual(y.data)?E!==k&&(r.track({type:3,doc:y}),R=!0):this.su(p,y)||(r.track({type:2,doc:y}),R=!0,(l&&this.eu(y,l)>0||c&&this.eu(y,c)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),R=!0):p&&!y&&(r.track({type:1,doc:p}),R=!0,(l||c)&&(a=!0)),R&&(y?(o=o.add(y),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(y,E){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:R})}};return k(y)-k(E)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,c=l!==this.Xa;return this.Xa=l,o.length!==0||c?{snapshot:new Ki(this.query,e.tu,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new QI,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new yk(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new gk(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ki.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ti="SyncEngine";class sj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ij{constructor(e){this.key=e,this.hu=!1}}class oj{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Hr(a=>nS(a),Ju),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ce(q.comparator),this.Au=new Map,this.Vu=new s_,this.du={},this.mu=new Map,this.fu=Hi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function aj(t,e,n=!0){const r=vf(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await wk(r,e,n,!0),s}async function lj(t,e){const n=vf(t);await wk(n,e,!0,!1)}async function wk(t,e,n,r){const s=await xa(t.localStore,Ct(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await I_(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&wf(t.remoteStore,s),a}async function I_(t,e,n,r,s){t.pu=(f,p,y)=>async function(k,R,w,_){let v=R.view.ru(w);v.Ss&&(v=await _h(k.localStore,R.query,!1).then(({documents:b})=>R.view.ru(b,v)));const C=_&&_.targetChanges.get(R.targetId),F=_&&_.targetMismatches.get(R.targetId)!=null,M=R.view.applyChanges(v,k.isPrimaryClient,C,F);return xg(k,R.targetId,M.au),M.snapshot}(t,f,p,y);const i=await _h(t.localStore,e,!0),o=new _k(e,i.ks),a=o.ru(i.documents),l=tc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);xg(t,n,c.au);const d=new sj(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function uj(t,e,n){const r=W(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Ju(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ta(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ba(r.remoteStore,s.targetId),Sa(r,s.targetId)}).catch(Js)):(Sa(r,s.targetId),await Ta(r.localStore,s.targetId,!0))}async function cj(t,e){const n=W(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ba(n.remoteStore,r.targetId))}async function dj(t,e,n){const r=b_(t);try{const s=await function(o,a){const l=W(o),c=we.now(),d=a.reduce((y,E)=>y.add(E.key),re());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let E=Qt(),k=re();return l.xs.getEntries(y,d).next(R=>{E=R,E.forEach((w,_)=>{_.isValidDocument()||(k=k.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,E)).next(R=>{f=R;const w=[];for(const _ of a){const v=V4(_,f.get(_.key).overlayedDocument);v!=null&&w.push(new Gr(_.key,v,Wb(v.value.mapValue),Fe.exists(!0)))}return l.mutationQueue.addMutationBatch(y,c,w,a)}).next(R=>{p=R;const w=R.applyToLocalDocumentSet(f,k);return l.documentOverlayCache.saveOverlays(y,R.batchId,w)})}).then(()=>({batchId:p.batchId,changes:oS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.du[o.currentUser.toKey()];c||(c=new Ce(te)),c=c.insert(a,l),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await Kr(r,s.changes),await Ua(r.remoteStore)}catch(s){const i=Ba(s,"Failed to persist write");n.reject(i)}}async function vk(t,e){const n=W(t);try{const r=await AL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Q(o.hu,14607):s.removedDocuments.size>0&&(Q(o.hu,42227),o.hu=!1))}),await Kr(n,r,e)}catch(r){await Js(r)}}function ZI(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const p of f.ba)p.va(a)&&(c=!0)}),c&&__(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hj(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ce(q.comparator);o=o.insert(i,Ve.newNoDocument(i,Y.min()));const a=re().add(i),l=new ec(Y.min(),new Map,new Ce(te),o,a);await vk(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),T_(r)}else await Ta(r.localStore,e,!1).then(()=>Sa(r,e,n)).catch(Js)}async function fj(t,e){const n=W(t),r=e.batch.batchId;try{const s=await kL(n.localStore,e);x_(n,r,null),E_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(n,s)}catch(s){await Js(s)}}async function mj(t,e,n){const r=W(t);try{const s=await function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Q(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);x_(r,e,n),E_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Kr(r,s)}catch(s){await Js(s)}}async function pj(t,e){const n=W(t);ei(n.remoteStore)||$(ti,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=W(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===Vs)return void e.resolve();const s=n.mu.get(r)||[];s.push(e),n.mu.set(r,s)}catch(r){const s=Ba(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function E_(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function x_(t,e,n){const r=W(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Sa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Ik(t,r)})}function Ik(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(ba(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),T_(t))}function xg(t,e,n){for(const r of n)r instanceof gk?(t.Vu.addReference(r.key,e),gj(t,r)):r instanceof yk?($(ti,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Ik(t,r.key)):G(19791,{wu:r})}function gj(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||($(ti,"New document in limbo: "+n),t.Eu.add(r),T_(t))}function T_(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(ie.fromString(e)),r=t.fu.next();t.Au.set(r,new ij(n)),t.Ru=t.Ru.insert(n,r),wf(t.remoteStore,new kr(Ct(Ma(n.path)),r,"TargetPurposeLimboResolution",Gt.ce))}}async function Kr(t,e,n){const r=W(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){s.push(c);const f=l_.Es(l.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,c){const d=W(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,p=>D.forEach(p.Ts,y=>d.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>D.forEach(p.Is,y=>d.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!Xs(f))throw f;$(u_,"Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const y=d.vs.get(p),E=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(E);d.vs=d.vs.insert(p,k)}}}(r.localStore,i))}async function yj(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){$(ti,"User change. New user:",e.toKey());const r=await JS(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new U(O.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(n,r.Ns)}}function _j(t,e){const n=W(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let s=re();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}async function wj(t,e){const n=W(t),r=await _h(n.localStore,e.query,!0),s=e.view.cu(r);return n.isPrimaryClient&&xg(n,e.targetId,s.au),s}async function vj(t,e){const n=W(t);return tk(n.localStore,e).then(r=>Kr(n,r))}async function Ij(t,e,n,r){const s=W(t),i=await function(a,l){const c=W(a),d=W(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Xn(f,l).next(p=>p?c.localDocuments.getDocuments(f,p):D.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await Ua(s.remoteStore):n==="acknowledged"||n==="rejected"?(x_(s,e,r||null),E_(s,e),function(a,l){W(W(a).mutationQueue).nr(l)}(s.localStore,e)):G(6720,"Unknown batchState",{bu:n}),await Kr(s,i)):$(ti,"Cannot apply mutation batch with id: "+e)}async function Ej(t,e){const n=W(t);if(vf(n),b_(n),e===!0&&n.gu!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await eE(n,r.toArray());n.gu=!0,await Ig(n.remoteStore,!0);for(const i of s)wf(n.remoteStore,i)}else if(e===!1&&n.gu!==!1){const r=[];let s=Promise.resolve();n.Iu.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Sa(n,o),Ta(n.localStore,o,!0))),ba(n.remoteStore,o)}),await s,await eE(n,r),function(o){const a=W(o);a.Au.forEach((l,c)=>{ba(a.remoteStore,c)}),a.Vu.zr(),a.Au=new Map,a.Ru=new Ce(q.comparator)}(n),n.gu=!1,await Ig(n.remoteStore,!1)}}async function eE(t,e,n){const r=W(t),s=[],i=[];for(const o of e){let a;const l=r.Iu.get(o);if(l&&l.length!==0){a=await xa(r.localStore,Ct(l[0]));for(const c of l){const d=r.Tu.get(c),f=await wj(r,d);f.snapshot&&i.push(f.snapshot)}}else{const c=await ek(r.localStore,o);a=await xa(r.localStore,c),await I_(r,Ek(c),o,!1,a.resumeToken)}s.push(a)}return r.Pu.J_(i),s}function Ek(t){return Zb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function xj(t){return function(n){return W(W(n).persistence).hs()}(W(t).localStore)}async function Tj(t,e,n,r){const s=W(t);if(s.gu)return void $(ti,"Ignoring unexpected query state notification.");const i=s.Iu.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await tk(s.localStore,rS(i[0])),a=ec.createSynthesizedRemoteEventForCurrentChange(e,n==="current",qe.EMPTY_BYTE_STRING);await Kr(s,o,a);break}case"rejected":await Ta(s.localStore,e,!0),Sa(s,e,r);break;default:G(64155,n)}}async function bj(t,e,n){const r=vf(t);if(r.gu){for(const s of e){if(r.Iu.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){$(ti,"Adding an already active target "+s);continue}const i=await ek(r.localStore,s),o=await xa(r.localStore,i);await I_(r,Ek(i),o.targetId,!1,o.resumeToken),wf(r.remoteStore,o)}for(const s of n)r.Iu.has(s)&&await Ta(r.localStore,s,!1).then(()=>{ba(r.remoteStore,s),Sa(r,s)}).catch(Js)}}function vf(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_j.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hj.bind(null,e),e.Pu.J_=nj.bind(null,e.eventManager),e.Pu.yu=rj.bind(null,e.eventManager),e}function b_(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mj.bind(null,e),e}function Sj(t,e,n){const r=W(t);(async function(i,o,a){try{const l=await o.getMetadata();if(await function(y,E){const k=W(y),R=Xe(E.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",w=>k.Pi.getBundleMetadata(w,E.id)).then(w=>!!w&&w.createTime.compareTo(R)>=0)}(i.localStore,l))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(pk(l));const c=new v_(l,o.serializer);let d=await o.Su();for(;d;){const p=await c.Ga(d);p&&a._updateProgress(p),d=await o.Su()}const f=await c.ja(i.localStore);return await Kr(i,f.Ja,void 0),await function(y,E){const k=W(y);return k.persistence.runTransaction("Save bundle","readwrite",R=>k.Pi.saveBundleMetadata(R,E))}(i.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Ha)}catch(l){return rn(ti,`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ro(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return YS(this.persistence,new QS,e.initialUser,this.serializer)}Cu(e){return new i_(_f.Vi,this.serializer)}Du(e){return new ok}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ka.provider={build:()=>new ka};class S_ extends ka{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Q(this.persistence.referenceDelegate instanceof yh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zS(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new i_(r=>yh.Vi(r,n),this.serializer)}}class k_ extends ka{constructor(e,n,r){super(),this.xu=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await b_(this.xu.syncEngine),await Ua(this.xu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return YS(this.persistence,new QS,e.initialUser,this.serializer)}Fu(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new zS(r,e.asyncQueue,n)}Mu(e,n){const r=new DM(n,this.persistence);return new NM(e.asyncQueue,r)}Cu(e){const n=a_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new o_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,ak(),Td(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new ok}}class xk extends k_{constructor(e,n){super(e,n,!1),this.xu=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xu.syncEngine;this.sharedClientState instanceof jm&&(this.sharedClientState.syncEngine={So:Ij.bind(null,n),Do:Tj.bind(null,n),Co:bj.bind(null,n),hs:xj.bind(null,n),bo:vj.bind(null,n)},await this.sharedClientState.start()),await this.persistence.zi(async r=>{await Ej(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Du(e){const n=ak();if(!jm.v(n))throw new U(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=a_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class qs{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ZI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yj.bind(null,this.syncEngine),await Ig(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tj}()}createDatastore(e){const n=ro(e.databaseInfo.databaseId),r=ML(e.databaseInfo);return $L(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new zL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ZI(this.syncEngine,n,0),function(){return HI.v()?new HI:new NL}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,d){const f=new oj(s,i,o,a,l,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=W(s);$(Gi,"RemoteStore shutting down."),i.Ea.add(5),await Fa(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}qs.provider={build:()=>new qs};function tE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class If{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class kj{constructor(e,n){this.Bu=e,this.serializer=n,this.metadata=new gt,this.buffer=new Uint8Array,this.Lu=function(){return new TextDecoder("utf-8")}(),this.ku().then(r=>{r&&r.Ua()?this.metadata.resolve(r.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.qa)}`))},r=>this.metadata.reject(r))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.Ku();if(e===null)return null;const n=this.Lu.decode(e),r=Number(n);isNaN(r)&&this.qu(`length string (${n}) is not valid number`);const s=await this.Uu(r);return new mk(JSON.parse(s),e.length+r)}$u(){return this.buffer.findIndex(e=>e===123)}async Ku(){for(;this.$u()<0&&!await this.Wu(););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.qu("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Uu(e){for(;this.buffer.length<e;)await this.Wu()&&this.qu("Reached the end of bundle when more is expected.");const n=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Wu(){const e=await this.Bu.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Aj{constructor(e,n){this.bundleData=e,this.serializer=n,this.cursor=0,this.elements=[];let r=this.Su();if(!r||!r.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r==null?void 0:r.qa)}`);this.metadata=r;do r=this.Su(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Qu(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const e=this.Ku(),n=this.Uu(e);return new mk(JSON.parse(n),e)}Uu(e){if(this.cursor+e>this.bundleData.length)throw new U(O.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}Ku(){const e=this.cursor;let n=this.cursor;for(;n<this.bundleData.length;){if(this.bundleData[n]==="{"){if(n===e)throw new Error("First character is a bracket and not a number");return this.cursor=n,Number(this.bundleData.slice(e,n))}n++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */let Pj=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=W(s),a={documents:i.map(f=>Nu(o.serializer,f))},l=await o.jo("BatchGetDocuments",o.serializer.databaseId,ie.emptyPath(),a,i.length),c=new Map;l.forEach(f=>{const p=q4(o.serializer,f);c.set(p.key.toString(),p)});const d=[];return i.forEach(f=>{const p=c.get(f.toString());Q(!!p,55234,{key:f}),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ja(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=q.fromPath(r);this.mutations.push(new Yy(s,this.precondition(s)))}),await async function(r,s){const i=W(r),o={writes:s.map(a=>Du(i.serializer,a))};await i.Wo("Commit",i.serializer.databaseId,ie.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw G(50498,{Gu:e.constructor.name});n=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new U(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Y.min())?Fe.exists(!1):Fe.updateTime(n):Fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Y.min()))throw new U(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Fe.updateTime(n)}return Fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class Rj{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new d_(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Hu()}Hu(){this.M_.p_(async()=>{const e=new Pj(this.datastore),n=this.Ju(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Zu(s)}))}).catch(r=>{this.Zu(r)})})}Ju(e){try{const n=this.updateFunction(e);return!Ku(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Hu(),Promise.resolve()))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!yS(n)}return!1}}/**
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
 */const Ws="FirestoreClient";class Cj{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$(Ws,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Ws,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ba(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Um(t,e){t.asyncQueue.verifyOperationInProgress(),$(Ws,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await JS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await A_(t);$(Ws,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>KI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>KI(e.remoteStore,s)),t._onlineComponents=e}async function A_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Ws,"Using user provided OfflineComponentProvider");try{await Um(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rn("Error using user provided cache. Falling back to memory cache: "+n),await Um(t,new ka)}}else $(Ws,"Using default OfflineComponentProvider"),await Um(t,new S_(void 0));return t._offlineComponents}async function Ef(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Ws,"Using user provided OnlineComponentProvider"),await nE(t,t._uninitializedComponentsProvider._online)):($(Ws,"Using default OnlineComponentProvider"),await nE(t,new qs))),t._onlineComponents}function Tk(t){return A_(t).then(e=>e.persistence)}function za(t){return A_(t).then(e=>e.localStore)}function bk(t){return Ef(t).then(e=>e.remoteStore)}function P_(t){return Ef(t).then(e=>e.syncEngine)}function Sk(t){return Ef(t).then(e=>e.datastore)}async function Aa(t){const e=await Ef(t),n=e.eventManager;return n.onListen=aj.bind(null,e.syncEngine),n.onUnlisten=uj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cj.bind(null,e.syncEngine),n}function Nj(t){return t.asyncQueue.enqueue(async()=>{const e=await Tk(t),n=await bk(t);return e.setNetworkEnabled(!0),function(s){const i=W(s);return i.Ea.delete(0),nc(i)}(n)})}function Dj(t){return t.asyncQueue.enqueue(async()=>{const e=await Tk(t),n=await bk(t);return e.setNetworkEnabled(!1),async function(s){const i=W(s);i.Ea.add(0),await Fa(i),i.Va.set("Offline")}(n)})}function Vj(t,e,n,r){const s=new If(r),i=new w_(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>g_(await Aa(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>y_(await Aa(t),i))}}function Oj(t,e){const n=new gt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(c,d){const f=W(c);return f.persistence.runTransaction("read document","readonly",p=>f.localDocuments.getDocument(p,d))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new U(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Ba(a,`Failed to get document '${i} from cache`);o.reject(l)}}(await za(t),e,n)),n.promise}function kk(t,e,n={}){const r=new gt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const d=new If({next:p=>{d.Nu(),o.enqueueAndForget(()=>y_(i,f));const y=p.docs.has(a);!y&&p.fromCache?c.reject(new U(O.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new w_(Ma(a.path),d,{includeMetadataChanges:!0,Ka:!0});return g_(i,f)}(await Aa(t),t.asyncQueue,e,n,r)),r.promise}function Mj(t,e){const n=new gt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await _h(s,i,!0),l=new _k(i,a.ks),c=l.ru(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=Ba(a,`Failed to execute query '${i} against cache`);o.reject(l)}}(await za(t),e,n)),n.promise}function Ak(t,e,n={}){const r=new gt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const d=new If({next:p=>{d.Nu(),o.enqueueAndForget(()=>y_(i,f)),p.fromCache&&l.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new w_(a,d,{includeMetadataChanges:!0,Ka:!0});return g_(i,f)}(await Aa(t),t.asyncQueue,e,n,r)),r.promise}function Lj(t,e,n){const r=new gt;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await Sk(t);r.resolve(async function(o,a,l){var k;const c=W(o),{request:d,gt:f,parent:p}=AS(c.serializer,eS(a),l);c.connection.Ko||delete d.parent;const y=(await c.jo("RunAggregationQuery",c.serializer.databaseId,p,d,1)).filter(R=>!!R.result);Q(y.length===1,64727);const E=(k=y[0].result)==null?void 0:k.aggregateFields;return Object.keys(E).reduce((R,w)=>(R[f[w]]=E[w],R),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}function jj(t,e){const n=new gt;return t.asyncQueue.enqueueAndForget(async()=>dj(await P_(t),e,n)),n.promise}function Fj(t,e){const n=new If(e);return t.asyncQueue.enqueueAndForget(async()=>function(s,i){W(s).Ca.add(i),i.next()}(await Aa(t),n)),()=>{n.Nu(),t.asyncQueue.enqueueAndForget(async()=>function(s,i){W(s).Ca.delete(i)}(await Aa(t),n))}}function Uj(t,e,n){const r=new gt;return t.asyncQueue.enqueueAndForget(async()=>{const s=await Sk(t);new Rj(t.asyncQueue,s,n,e,r).ju()}),r.promise}function $j(t,e,n,r){const s=function(o,a){let l;return l=typeof o=="string"?wS().encode(o):o,function(d,f){return new kj(d,f)}(function(d,f){if(d instanceof Uint8Array)return tE(d,f);if(d instanceof ArrayBuffer)return tE(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,ro(e));t.asyncQueue.enqueueAndForget(async()=>{Sj(await P_(t),s,r)})}function Bj(t,e){return t.asyncQueue.enqueue(async()=>function(r,s){const i=W(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.Pi.getNamedQuery(o,s))}(await za(t),e))}function Pk(t,e){return function(r,s){return new Aj(r,s)}(t,e)}function zj(t,e){return t.asyncQueue.enqueue(async()=>async function(r,s){const i=W(r),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",l=>o.getFieldIndexes(l).next(c=>function(f,p,y,E,k){f=[...f],p=[...p],f.sort(y),p.sort(y);const R=f.length,w=p.length;let _=0,v=0;for(;_<w&&v<R;){const C=y(f[v],p[_]);C<0?k(f[v++]):C>0?E(p[_++]):(_++,v++)}for(;_<w;)E(p[_++]);for(;v<R;)k(f[v++])}(c,s,AM,d=>{a.push(o.addFieldIndex(l,d))},d=>{a.push(o.deleteFieldIndex(l,d))})).next(()=>D.waitFor(a)))}(await za(t),e))}function qj(t,e){return t.asyncQueue.enqueue(async()=>function(r,s){W(r).Cs.As=s}(await za(t),e))}function Wj(t){return t.asyncQueue.enqueue(async()=>function(n){const r=W(n),s=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await za(t)))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Rk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hj="ComponentProvider",rE=new Map;function Gj(t,e,n,r,s){return new l4(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Rk(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Ck="firestore.googleapis.com",sE=!0;class iE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ck,this.ssl=sE}else this.host=e.host,this.ssl=e.ssl??sE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BS)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rk(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mb;switch(r.type){case"firstParty":return new IM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rE.get(n);r&&($(Hj,"Removing Datastore"),rE.delete(n),r.terminate())}(this),Promise.resolve()}}function Nk(t,e,n,r={}){var c;t=oe(t,rc);const s=zr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Qh(`https://${a}`),by("Firestore",!0)),i.host!==Ck&&i.host!==a&&rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!An(l,o)&&(t._setSettings(l),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=ft.MOCK_USER;else{d=m1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(p)}t._authCredentials=new _M(new fb(d,f))}}/**
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
 */class lt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lt(this.firestore,e,this._query)}}class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(no(n,xe._jsonSchema))return new xe(e,r||null,new q(ie.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:tt("string",xe._jsonSchemaVersion),referencePath:tt("string")};class Un extends lt{constructor(e,n,r){super(e,n,Ma(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new q(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function ye(t,e,...n){if(t=de(t),Ly("collection","path",e),t instanceof rc){const r=ie.fromString(e,...n);return Gv(r),new Un(t,null,r)}{if(!(t instanceof xe||t instanceof Un))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return Gv(r),new Un(t.firestore,null,r)}}function Kj(t,e){if(t=oe(t,rc),Ly("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lt(t,null,function(r){return new Wr(ie.emptyPath(),r)}(e))}function Re(t,e,...n){if(t=de(t),arguments.length===1&&(e=tf.newId()),Ly("doc","path",e),t instanceof rc){const r=ie.fromString(e,...n);return Hv(r),new xe(t,null,new q(r))}{if(!(t instanceof xe||t instanceof Un))throw new U(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return Hv(r),new xe(t.firestore,t instanceof Un?t.converter:null,new q(r))}}function Qj(t,e){return t=de(t),e=de(e),(t instanceof xe||t instanceof Un)&&(e instanceof xe||e instanceof Un)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function R_(t,e){return t=de(t),e=de(e),t instanceof lt&&e instanceof lt&&t.firestore===e.firestore&&Ju(t._query,e._query)&&t.converter===e.converter}/**
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
 */const oE="AsyncQueue";class aE{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new d_(this,"async_queue_retry"),this._c=()=>{const r=Td();r&&$(oE,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Td();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Td();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Xs(e))throw e;$(oE,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",lE(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=p_.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:lE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function lE(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */class Dk{constructor(){this._progressObserver={},this._taskCompletionResolver=new gt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Yj=-1;class Se extends rc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new aE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new aE(e),this._firestoreClient=void 0,await e}}}function Jj(t,e,n){n||(n=Au);const r=pr(t,"firestore");if(r.isInitialized(n)){const s=r.getImmediate({identifier:n}),i=r.getOptions(n);if(An(i,e))return s;throw new U(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BS)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&zr(e.host)&&Qh(e.host),r.initialize({options:e,instanceIdentifier:n})}function Vk(t,e){const n=typeof t=="object"?t:Jh(),r=typeof t=="string"?t:e||Au,s=pr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=d1("firestore");i&&Nk(s,...i)}return s}function Ue(t){if(t._terminated)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ok(t),t._firestoreClient}function Ok(t){var r,s,i,o;const e=t._freezeSettings(),n=Gj(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Cj(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}function Xj(t,e){rn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return Mk(t,qs.provider,{build:r=>new k_(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Zj(t){rn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();Mk(t,qs.provider,{build:n=>new xk(n,e.cacheSizeBytes)})}function Mk(t,e,n){if((t=oe(t,Se))._firestoreClient||t._terminated)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new U(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},Ok(t)}function eF(t){if(t._initialized&&!t._terminated)throw new U(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new gt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!dr.v())return Promise.resolve();const s=r+KS;await dr.delete(s)}(a_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function tF(t){return function(n){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>pj(await P_(n),r)),r.promise}(Ue(t=oe(t,Se)))}function nF(t){return Nj(Ue(t=oe(t,Se)))}function rF(t){return Dj(Ue(t=oe(t,Se)))}function sF(t){return LD(t.app,"firestore",t._databaseId.database),t._delete()}function Tg(t,e){const n=Ue(t=oe(t,Se)),r=new Dk;return $j(n,t._databaseId,e,r),r}function Lk(t,e){return Bj(Ue(t=oe(t,Se)),e).then(n=>n?new lt(t,null,n.query):null)}/**
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
 */class Wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wt(qe.fromBase64String(e))}catch(n){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wt(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(no(e,Wt._jsonSchema))return Wt.fromBase64String(e.bytes)}}Wt._jsonSchemaVersion="firestore/bytes/1.0",Wt._jsonSchema={type:tt("string",Wt._jsonSchemaVersion),bytes:tt("string")};/**
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
 */class so{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function iF(){return new so(eg)}/**
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
 */class ni{constructor(e){this._methodName=e}}/**
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
 */class $n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$n._jsonSchemaVersion}}static fromJSON(e){if(no(e,$n._jsonSchema))return new $n(e.latitude,e.longitude)}}$n._jsonSchemaVersion="firestore/geoPoint/1.0",$n._jsonSchema={type:tt("string",$n._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class gn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(no(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new gn(e.vectorValues);throw new U(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:tt("string",gn._jsonSchemaVersion),vectorValues:tt("object")};/**
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
 */const oF=/^__.*__$/;class aF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}class jk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class xf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new xf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Eh(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Fk(this.dataSource)&&oF.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class lF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ro(e)}createContext(e,n,r,s=!1){return new xf({dataSource:e,methodName:n,targetDoc:r,path:Oe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function io(t){const e=t._freezeSettings(),n=ro(t._databaseId);return new lF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tf(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);L_("Data must be an object, but it was:",o,r);const a=Bk(r,o);let l,c;if(i.merge)l=new Kt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const p=Ur(e,f,n);if(!o.contains(p))throw new U(O.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qk(d,p)||d.push(p)}l=new Kt(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new aF(new mt(a),l,c)}class sc extends ni{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sc}}function Uk(t,e,n){return new xf({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class C_ extends ni{_toFieldTransform(e){return new Zu(e.path,new va)}isEqual(e){return e instanceof C_}}class N_ extends ni{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=Uk(this,e,!0),r=this.Ac.map(i=>oo(i,n)),s=new Bi(r);return new Zu(e.path,s)}isEqual(e){return e instanceof N_&&An(this.Ac,e.Ac)}}class D_ extends ni{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=Uk(this,e,!0),r=this.Ac.map(i=>oo(i,n)),s=new zi(r);return new Zu(e.path,s)}isEqual(e){return e instanceof D_&&An(this.Ac,e.Ac)}}class V_ extends ni{constructor(e,n){super(e),this.Vc=n}_toFieldTransform(e){const n=new Ia(e.serializer,uS(e.serializer,this.Vc));return new Zu(e.path,n)}isEqual(e){return e instanceof V_&&this.Vc===e.Vc}}function O_(t,e,n,r){const s=t.createContext(1,e,n);L_("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();Zs(r,(l,c)=>{const d=j_(e,l,n);c=de(c);const f=s.childContextForFieldPath(d);if(c instanceof sc)i.push(d);else{const p=oo(c,f);p!=null&&(i.push(d),o.set(d,p))}});const a=new Kt(i);return new jk(o,a,s.fieldTransforms)}function M_(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[Ur(e,r,n)],l=[s];if(i.length%2!=0)throw new U(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Ur(e,i[p])),l.push(i[p+1]);const c=[],d=mt.empty();for(let p=a.length-1;p>=0;--p)if(!qk(c,a[p])){const y=a[p];let E=l[p];E=de(E);const k=o.childContextForFieldPath(y);if(E instanceof sc)c.push(y);else{const R=oo(E,k);R!=null&&(c.push(y),d.set(y,R))}}const f=new Kt(c);return new jk(d,f,o.fieldTransforms)}function $k(t,e,n,r=!1){return oo(n,t.createContext(r?4:3,e))}function oo(t,e){if(zk(t=de(t)))return L_("Unsupported field value:",e,t),Bk(t,e);if(t instanceof ni)return function(r,s){if(!Fk(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=oo(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:Ea(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ea(s.serializer,i)}}if(r instanceof $n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wt)return{bytesValue:ES(s.serializer,r._byteString)};if(r instanceof xe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:t_(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gn)return function(o,a){const l=o instanceof gn?o.toArray():o;return{mapValue:{fields:{[qy]:{stringValue:Wy},[ya]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw a.createError("VectorValues must only contain numeric values.");return Qy(a.serializer,d)})}}}}}}(r,s);if(DS(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${nf(r)}`)}(t,e)}function Bk(t,e){const n={};return Mb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(t,(r,s)=>{const i=oo(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof $n||t instanceof Wt||t instanceof xe||t instanceof ni||t instanceof gn||DS(t))}function L_(t,e,n){if(!zk(n)||!yb(n)){const r=nf(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ur(t,e,n){if((e=de(e))instanceof so)return e._internalPath;if(typeof e=="string")return j_(t,e);throw Eh("Field path arguments must be of type string or ",t,!1,void 0,n)}const uF=new RegExp("[~\\*/\\[\\]]");function j_(t,e,n){if(e.search(uF)>=0)throw Eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new so(...e.split("."))._internalPath}catch{throw Eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eh(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(O.INVALID_ARGUMENT,a+t+l)}function qk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class F_{convertValue(e,n="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ya].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Le(o.doubleValue));return new gn(n)}convertGeoPoint(e){return new $n(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ku(e));default:return null}}convertTimestamp(e){const n=jr(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);Q(NS(r),9688,{name:e});const s=new Fs(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||Je(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ri extends F_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}/**
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
 */function cF(){return new sc("deleteField")}function Os(){return new C_("serverTimestamp")}function dF(...t){return new N_("arrayUnion",t)}function hF(...t){return new D_("arrayRemove",t)}function fF(t){return new V_("increment",t)}function mF(t){return new gn(t)}/**
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
 */function pF(t){var r;const e=Ue(oe(t.firestore,Se)),n=(r=e._onlineComponents)==null?void 0:r.datastore.serializer;return n===void 0?null:mf(n,Ct(t._query)).ft}function gF(t,e){var i;const n=Ob(e,(o,a)=>new gS(a,o.aggregateType,o._internalFieldPath)),r=Ue(oe(t.firestore,Se)),s=(i=r._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:AS(s,eS(t._query),n,!0).request}const uE="@firebase/firestore",cE="4.11.0";/**
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
 */function Jo(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class Pa{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class Wk{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new mt({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */class Vu{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ur("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yF extends Vu{data(){return super.data()}}/**
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
 */function Hk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class U_{}class qa extends U_{}function Ae(t,e,...n){let r=[];e instanceof U_&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ao).length,a=i.filter(l=>l instanceof Wa).length;if(o>1||o>0&&a>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Wa extends qa{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Wa(e,n,r)}_apply(e){const n=this._parse(e);return Kk(e._query,n),new lt(e.firestore,e.converter,dg(e._query,n))}_parse(e){const n=io(e.firestore);return function(i,o,a,l,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hE(f,d);const E=[];for(const k of f)E.push(dE(l,i,k));p={arrayValue:{values:E}}}else p=dE(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hE(f,d),p=$k(a,o,f,d==="in"||d==="not-in");return ce.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ve(t,e,n){const r=e,s=Ur("where",t);return Wa._create(s,r,n)}class ao extends U_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ao(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ee.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Kk(o,l),o=dg(o,l)}(e._query,n),new lt(e.firestore,e.converter,dg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _F(...t){return t.forEach(e=>Qk("or",e)),ao._create("or",t)}function wF(...t){return t.forEach(e=>Qk("and",e)),ao._create("and",t)}class bf extends qa{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cu(i,o)}(e._query,this._field,this._direction);return new lt(e.firestore,e.converter,I4(e._query,n))}}function en(t,e="asc"){const n=e,r=Ur("orderBy",t);return bf._create(r,n)}class ic extends qa{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ic(e,n,r)}_apply(e){return new lt(e.firestore,e.converter,fh(e._query,this._limit,this._limitType))}}function $_(t){return _b("limit",t),ic._create("limit",t,"F")}function vF(t){return _b("limitToLast",t),ic._create("limitToLast",t,"L")}class oc extends qa{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new oc(e,n,r)}_apply(e){const n=Gk(e,this.type,this._docOrFields,this._inclusive);return new lt(e.firestore,e.converter,E4(e._query,n))}}function IF(...t){return oc._create("startAt",t,!0)}function EF(...t){return oc._create("startAfter",t,!1)}class ac extends qa{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ac(e,n,r)}_apply(e){const n=Gk(e,this.type,this._docOrFields,this._inclusive);return new lt(e.firestore,e.converter,x4(e._query,n))}}function xF(...t){return ac._create("endBefore",t,!1)}function TF(...t){return ac._create("endAt",t,!0)}function Gk(t,e,n,r){if(n[0]=de(n[0]),n[0]instanceof Vu)return function(i,o,a,l,c){if(!l)throw new U(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Qo(i))if(f.field.isKeyField())d.push(Ui(o,l.key));else{const p=l.data.field(f.field);if(lf(p))throw new U(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const y=f.field.canonicalString();throw new U(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(p)}return new Bs(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=io(t.firestore);return function(o,a,l,c,d,f){const p=o.explicitOrderBy;if(d.length>p.length)throw new U(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let E=0;E<d.length;E++){const k=d[E];if(p[E].field.isKeyField()){if(typeof k!="string")throw new U(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!Gy(o)&&k.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const R=o.path.child(ie.fromString(k));if(!q.isDocumentKey(R))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${R}' is not because it contains an odd number of segments.`);const w=new q(R);y.push(Ui(a,w))}else{const R=$k(l,c,k);y.push(R)}}return new Bs(y,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function dE(t,e,n){if(typeof(n=de(n))=="string"){if(n==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gy(e)&&n.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!q.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ui(t,new q(r))}if(n instanceof xe)return Ui(t,n._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nf(n)}.`)}function hE(t,e){if(!Array.isArray(t)||t.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kk(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Qk(t,e){if(!(e instanceof Wa||e instanceof ao))throw new U(O.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function Sf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class B_ extends F_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}/**
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
 */function bF(t){return new Pa("sum",Ur("sum",t))}function SF(t){return new Pa("avg",Ur("average",t))}function Yk(){return new Pa("count")}function kF(t,e){var n,r;return t instanceof Pa&&e instanceof Pa&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)==null?void 0:n.canonicalString())===((r=e._internalFieldPath)==null?void 0:r.canonicalString())}function AF(t,e){return R_(t.query,e.query)&&An(t.data(),e.data())}/**
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
 */function PF(t){return Jk(t,{count:Yk()})}function Jk(t,e){const n=oe(t.firestore,Se),r=Ue(n),s=Ob(e,(i,o)=>new gS(o,i.aggregateType,i._internalFieldPath));return Lj(r,t._query,s).then(i=>function(a,l,c){const d=new ri(a);return new Wk(l,d,c)}(n,t,i))}class RF{constructor(e){this.kind="memory",this._onlineComponentProvider=qs.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new S_(void 0)}}toJSON(){return{kind:this.kind}}}class CF{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=Xk(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class NF{constructor(){this.kind="memoryEager",this._offlineComponentProvider=ka.provider}toJSON(){return{kind:this.kind}}}class DF{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new S_(e)}}toJSON(){return{kind:this.kind}}}function VF(){return new NF}function OF(t){return new DF(t==null?void 0:t.cacheSizeBytes)}function MF(t){return new RF(t)}function LF(t){return new CF(t)}class jF{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=qs.provider,this._offlineComponentProvider={build:n=>new k_(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class FF{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=qs.provider,this._offlineComponentProvider={build:n=>new xk(n,e==null?void 0:e.cacheSizeBytes)}}}function Xk(t){return new jF(t==null?void 0:t.forceOwnership)}function UF(){return new FF}/**
 * @license
 * Copyright 2025 Google LLC
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
 *//**
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
 */const Zk="NOT SUPPORTED";class Ar{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tn extends Vu{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ur("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=tn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}function $F(t,e,n){if(no(e,tn._jsonSchema)){if(e.bundle===Zk)throw new U(O.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=ro(t._databaseId),s=Pk(e.bundle,r),i=s.t(),o=new v_(s.getMetadata(),r);for(const d of i)o.o(d);const a=o.documents;if(a.length!==1)throw new U(O.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const l=ff(r,a[0].document),c=new q(ie.fromString(e.bundleName));return new tn(t,new B_(t),c,l,new Ar(!1,!1),n||null)}}tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",tn._jsonSchema={type:tt("string",tn._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class tu extends tn{data(e={}){return super.data(e)}}class nn{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ar(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tu(this._firestore,this._userDataWriter,r.key,r,new Ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new tu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ar(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new tu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ar(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:zF(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=nn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BF(t,e,n){if(no(e,nn._jsonSchema)){if(e.bundle===Zk)throw new U(O.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=ro(t._databaseId),s=Pk(e.bundle,r),i=s.t(),o=new v_(s.getMetadata(),r);for(const p of i)o.o(p);if(o.queries.length!==1)throw new U(O.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=pf(o.queries[0].bundledQuery),l=o.documents;let c=new Pi;l.map(p=>{const y=ff(r,p.document);c=c.add(y)});const d=Ki.fromInitialDocuments(a,c,re(),!1,!1),f=new lt(t,n||null,a);return new nn(t,new B_(t),f,d)}}function zF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}function qF(t,e){return t instanceof tn&&e instanceof tn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof nn&&e instanceof nn&&t._firestore===e._firestore&&R_(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */nn._jsonSchemaVersion="firestore/querySnapshot/1.0",nn._jsonSchema={type:tt("string",nn._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};const WF={maxAttempts:5};/**
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
 */class eA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=io(e)}set(e,n,r){this._verifyNotCommitted();const s=Es(e,this._firestore),i=Sf(s.converter,n,r),o=Tf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Fe.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Es(e,this._firestore);let o;return o=typeof(n=de(n))=="string"||n instanceof so?M_(this._dataReader,"WriteBatch.update",i._key,n,r,s):O_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Es(e,this._firestore);return this._mutations=this._mutations.concat(new ja(n._key,Fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Es(t,e){if((t=de(t)).firestore!==e)throw new U(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class HF{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=io(e)}get(e){const n=Es(e,this._firestore),r=new B_(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return G(24041);const i=s[0];if(i.isFoundDocument())return new Vu(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Vu(this._firestore,r,n._key,null,n.converter);throw G(18433,{doc:i})})}set(e,n,r){const s=Es(e,this._firestore),i=Sf(s.converter,n,r),o=Tf(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Es(e,this._firestore);let o;return o=typeof(n=de(n))=="string"||n instanceof so?M_(this._dataReader,"Transaction.update",i._key,n,r,s):O_(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Es(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class tA extends HF{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Es(e,this._firestore),r=new ri(this._firestore);return super.get(e).then(s=>new tn(this._firestore,r,n._key,s._document,new Ar(!1,!1),n.converter))}}function GF(t,e,n){t=oe(t,Se);const r={...WF,...n};(function(o){if(o.maxAttempts<1)throw new U(O.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=Ue(t);return Uj(s,i=>e(new tA(t,i)),r)}/**
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
 */function fr(t){t=oe(t,xe);const e=oe(t.firestore,Se),n=Ue(e);return kk(n,t._key).then(r=>z_(e,t,r))}function KF(t){t=oe(t,xe);const e=oe(t.firestore,Se),n=Ue(e),r=new ri(e);return Oj(n,t._key).then(s=>new tn(e,r,t._key,s,new Ar(s!==null&&s.hasLocalMutations,!0),t.converter))}function QF(t){t=oe(t,xe);const e=oe(t.firestore,Se),n=Ue(e);return kk(n,t._key,{source:"server"}).then(r=>z_(e,t,r))}function Mn(t){t=oe(t,lt);const e=oe(t.firestore,Se),n=Ue(e),r=new ri(e);return Hk(t._query),Ak(n,t._query).then(s=>new nn(e,r,t,s))}function YF(t){t=oe(t,lt);const e=oe(t.firestore,Se),n=Ue(e),r=new ri(e);return Mj(n,t._query).then(s=>new nn(e,r,t,s))}function JF(t){t=oe(t,lt);const e=oe(t.firestore,Se),n=Ue(e),r=new ri(e);return Ak(n,t._query,{source:"server"}).then(s=>new nn(e,r,t,s))}function Ou(t,e,n){t=oe(t,xe);const r=oe(t.firestore,Se),s=Sf(t.converter,e,n),i=io(r);return Ha(r,[Tf(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Fe.none())])}function xh(t,e,n,...r){t=oe(t,xe);const s=oe(t.firestore,Se),i=io(s);let o;return o=typeof(e=de(e))=="string"||e instanceof so?M_(i,"updateDoc",t._key,e,n,r):O_(i,"updateDoc",t._key,e),Ha(s,[o.toMutation(t._key,Fe.exists(!0))])}function kf(t){return Ha(oe(t.firestore,Se),[new ja(t._key,Fe.none())])}function Xo(t,e){const n=oe(t.firestore,Se),r=Re(t),s=Sf(t.converter,e),i=io(t.firestore);return Ha(n,[Tf(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Fe.exists(!1))]).then(()=>r)}function it(t,...e){var c,d,f;t=de(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Jo(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Jo(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(d=p.error)==null?void 0:d.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,a;if(t instanceof xe)o=oe(t.firestore,Se),a=Ma(t._key.path),i={next:p=>{e[r]&&e[r](z_(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=oe(t,lt);o=oe(p.firestore,Se),a=p._query;const y=new ri(o);i={next:E=>{e[r]&&e[r](new nn(o,y,p,E))},error:e[r+1],complete:e[r+2]},Hk(t._query)}const l=Ue(o);return Vj(l,a,s,i)}function XF(t,e,...n){const r=de(t),s=function(l){const c={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const f of d){if(!(f in l)){c.error=`snapshotJson missing required field: ${f}`;break}const p=l[f];if(typeof p!="string"){c.error=`snapshotJson field '${f}' must be a string.`;break}if(p.length===0){c.error=`snapshotJson field '${f}' cannot be an empty string.`;break}f==="bundle"?c.bundle=p:f==="bundleName"?c.bundleName=p:f==="bundleSource"&&(c.bundleSource=p)}return c}(e);if(s.error)throw new U(O.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof n[o]!="object"||Jo(n[o])||(i=n[o++]),s.bundleSource==="QuerySnapshot"){let a=null;if(typeof n[o]=="object"&&Jo(n[o])){const l=n[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:n[o++],error:n[o++],complete:n[o++]};return function(c,d,f,p,y){let E,k=!1;return Tg(c,d.bundle).then(()=>Lk(c,d.bundleName)).then(w=>{w&&!k&&(y&&w.withConverter(y),E=it(w,f||{},p))}).catch(w=>(p.error&&p.error(w),()=>{})),()=>{k||(k=!0,E&&E())}}(r,s,i,a,n[o])}if(s.bundleSource==="DocumentSnapshot"){let a=null;if(typeof n[o]=="object"&&Jo(n[o])){const l=n[o++];a={next:l.next,error:l.error,complete:l.complete}}else a={next:n[o++],error:n[o++],complete:n[o++]};return function(c,d,f,p,y){let E,k=!1;return Tg(c,d.bundle).then(()=>{if(!k){const w=new xe(c,y||null,q.fromPath(d.bundleName));E=it(w,f||{},p)}}).catch(w=>(p.error&&p.error(w),()=>{})),()=>{k||(k=!0,E&&E())}}(r,s,i,a,n[o])}throw new U(O.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function ZF(t,e){t=oe(t,Se);const n=Ue(t),r=Jo(e)?e:{next:e};return Fj(n,r)}function Ha(t,e){const n=Ue(t);return jj(n,e)}function z_(t,e,n){const r=n.docs.get(e._key),s=new ri(t);return new tn(t,s,e._key,r,new Ar(n.hasPendingWrites,n.fromCache),e.converter)}function q_(t){return t=oe(t,Se),Ue(t),new eA(t,e=>Ha(t,e))}/**
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
 */function e3(t,e){t=oe(t,Se);const n=Ue(t);if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return rn("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(c){try{return JSON.parse(c)}catch(d){throw new U(O.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const c=fE(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const f of l.fields){const p=fE(f,"fieldPath"),y=j_("setIndexConfiguration",p);f.arrayConfig==="CONTAINS"?d.push(new ki(y,2)):f.order==="ASCENDING"?d.push(new ki(y,0)):f.order==="DESCENDING"&&d.push(new ki(y,1))}a.push(new da(da.UNKNOWN_ID,c,d,ha.empty()))}return a}(e);return zj(n,r)}function fE(t,e){if(typeof t[e]!="string")throw new U(O.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class nA{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function t3(t){var s;t=oe(t,Se);const e=mE.get(t);if(e)return e;if(((s=Ue(t)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const r=new nA(t);return mE.set(t,r),r}function n3(t){rA(t,!0)}function r3(t){rA(t,!1)}function s3(t){const e=Ue(t._firestore);Wj(e).then(n=>$("deleting all persistent cache indexes succeeded")).catch(n=>rn("deleting all persistent cache indexes failed",n))}function rA(t,e){const n=Ue(t._firestore);qj(n,e).then(r=>$(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(r=>rn(`setting persistent cache index auto creation isEnabled=${e} failed`,r))}const mE=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
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
 */class i3{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return W_.instance.onExistenceFilterMismatch(e)}}class W_{constructor(){this.i=new Map}static get instance(){return Kc||(Kc=new W_,M4(Kc)),Kc}u(e){this.i.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.i;return r.set(n,e),()=>r.delete(n)}}let Kc=null;(function(e,n=!0){pM(to),qn(new Pn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Se(new wM(r.getProvider("auth-internal")),new EM(o,r.getProvider("app-check-internal")),u4(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Zt(uE,cE,e),Zt(uE,cE,"esm2020")})();const sA=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:F_,AggregateField:Pa,AggregateQuerySnapshot:Wk,Bytes:Wt,CACHE_SIZE_UNLIMITED:Yj,CollectionReference:Un,DocumentReference:xe,DocumentSnapshot:tn,FieldPath:so,FieldValue:ni,Firestore:Se,FirestoreError:U,GeoPoint:$n,LoadBundleTask:Dk,PersistentCacheIndexManager:nA,Query:lt,QueryCompositeFilterConstraint:ao,QueryConstraint:qa,QueryDocumentSnapshot:tu,QueryEndAtConstraint:ac,QueryFieldFilterConstraint:Wa,QueryLimitConstraint:ic,QueryOrderByConstraint:bf,QuerySnapshot:nn,QueryStartAtConstraint:oc,SnapshotMetadata:Ar,Timestamp:we,Transaction:tA,VectorValue:gn,WriteBatch:eA,_AutoId:tf,_ByteString:qe,_DatabaseId:Fs,_DocumentKey:q,_EmptyAppCheckTokenProvider:xM,_EmptyAuthCredentialsProvider:mb,_FieldPath:Oe,_TestingHooks:i3,_cast:oe,_debugAssert:yM,_internalAggregationQueryToProtoRunAggregationQueryRequest:gF,_internalQueryToProtoQueryTarget:pF,_isBase64Available:o4,_logWarn:rn,_validateIsNotUsedTogether:gb,addDoc:Xo,aggregateFieldEqual:kF,aggregateQuerySnapshotEqual:AF,and:wF,arrayRemove:hF,arrayUnion:dF,average:SF,clearIndexedDbPersistence:eF,collection:ye,collectionGroup:Kj,connectFirestoreEmulator:Nk,count:Yk,deleteAllPersistentCacheIndexes:s3,deleteDoc:kf,deleteField:cF,disableNetwork:rF,disablePersistentCacheIndexAutoCreation:r3,doc:Re,documentId:iF,documentSnapshotFromJSON:$F,enableIndexedDbPersistence:Xj,enableMultiTabIndexedDbPersistence:Zj,enableNetwork:nF,enablePersistentCacheIndexAutoCreation:n3,endAt:TF,endBefore:xF,ensureFirestoreConfigured:Ue,executeWrite:Ha,getAggregateFromServer:Jk,getCountFromServer:PF,getDoc:fr,getDocFromCache:KF,getDocFromServer:QF,getDocs:Mn,getDocsFromCache:YF,getDocsFromServer:JF,getFirestore:Vk,getPersistentCacheIndexManager:t3,increment:fF,initializeFirestore:Jj,limit:$_,limitToLast:vF,loadBundle:Tg,memoryEagerGarbageCollector:VF,memoryLocalCache:MF,memoryLruGarbageCollector:OF,namedQuery:Lk,onSnapshot:it,onSnapshotResume:XF,onSnapshotsInSync:ZF,or:_F,orderBy:en,persistentLocalCache:LF,persistentMultipleTabManager:UF,persistentSingleTabManager:Xk,query:Ae,queryEqual:R_,querySnapshotFromJSON:BF,refEqual:Qj,runTransaction:GF,serverTimestamp:Os,setDoc:Ou,setIndexConfiguration:e3,setLogLevel:gM,snapshotEqual:qF,startAfter:EF,startAt:IF,sum:bF,terminate:sF,updateDoc:xh,vector:mF,waitForPendingWrites:tF,where:ve,writeBatch:q_},Symbol.toStringTag,{value:"Module"}));var o3="firebase",a3="12.9.0";/**
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
 */Zt(o3,a3,"app");/**
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
 */const iA="firebasestorage.googleapis.com",oA="storageBucket",l3=2*60*1e3,u3=10*60*1e3;/**
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
 */class Ke extends Rn{constructor(e,n,r=0){super($m(e),`Firebase Storage: ${n} (${$m(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $m(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ge||(Ge={}));function $m(t){return"storage/"+t}function H_(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(Ge.UNKNOWN,t)}function c3(t){return new Ke(Ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function d3(t){return new Ke(Ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function h3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(Ge.UNAUTHENTICATED,t)}function f3(){return new Ke(Ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function m3(t){return new Ke(Ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function p3(){return new Ke(Ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g3(){return new Ke(Ge.CANCELED,"User canceled the upload/download.")}function y3(t){return new Ke(Ge.INVALID_URL,"Invalid URL '"+t+"'.")}function _3(t){return new Ke(Ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function w3(){return new Ke(Ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oA+"' property when initializing the app?")}function v3(){return new Ke(Ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I3(){return new Ke(Ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function E3(t){return new Ke(Ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bg(t){return new Ke(Ge.INVALID_ARGUMENT,t)}function aA(){return new Ke(Ge.APP_DELETED,"The Firebase app was deleted.")}function x3(t){return new Ke(Ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nu(t,e){return new Ke(Ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Tl(t){throw new Ke(Ge.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw _3(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${s}/o${p}`,"i"),E={bucket:1,path:3},k=n===iA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",w=new RegExp(`^https?://${k}/${s}/${R}`,"i"),v=[{regex:a,indices:l,postModify:i},{regex:y,indices:E,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<v.length;C++){const F=v[C],M=F.regex.exec(e);if(M){const b=M[F.indices.bucket];let I=M[F.indices.path];I||(I=""),r=new mn(b,I),F.postModify(r);break}}if(r==null)throw y3(e);return r}}class T3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function b3(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...R){c||(c=!0,e.apply(null,R))}function f(R){s=setTimeout(()=>{s=null,t(y,l())},R)}function p(){i&&clearTimeout(i)}function y(R,...w){if(c){p();return}if(R){p(),d.call(null,R,...w);return}if(l()||o){p(),d.call(null,R,...w);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,f(v)}let E=!1;function k(R){E||(E=!0,p(),!c&&(s!==null?(R||(a=2),clearTimeout(s),f(0)):R||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function S3(t){t(!1)}/**
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
 */function k3(t){return t!==void 0}function A3(t){return typeof t=="object"&&!Array.isArray(t)}function G_(t){return typeof t=="string"||t instanceof String}function pE(t){return K_()&&t instanceof Blob}function K_(){return typeof Blob<"u"}function gE(t,e,n,r){if(r<e)throw bg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Q_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ri||(Ri={}));/**
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
 */function P3(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class R3{constructor(e,n,r,s,i,o,a,l,c,d,f,p=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=p,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,k)=>{this.resolve_=E,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Qc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ri.NO_ERROR,l=i.getStatus();if(!a||P3(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Ri.ABORT;r(!1,new Qc(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Qc(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());k3(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=H_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?aA():g3();o(l)}else{const l=p3();o(l)}};this.canceled_?n(!1,new Qc(!1,null,!0)):this.backoffId_=b3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&S3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function C3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function N3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function D3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function V3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function O3(t,e,n,r,s,i,o=!0,a=!1){const l=lA(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return D3(d,e),C3(d,n),N3(d,i),V3(d,r),new R3(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function M3(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function L3(...t){const e=M3();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(K_())return new Blob(t);throw new Ke(Ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function j3(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function F3(t){if(typeof atob>"u")throw E3("base-64");return atob(t)}/**
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
 */const or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bm{constructor(e,n){this.data=e,this.contentType=n||null}}function U3(t,e){switch(t){case or.RAW:return new Bm(uA(e));case or.BASE64:case or.BASE64URL:return new Bm(cA(t,e));case or.DATA_URL:return new Bm(B3(e),z3(e))}throw H_()}function uA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $3(t){let e;try{e=decodeURIComponent(t)}catch{throw nu(or.DATA_URL,"Malformed data URL.")}return uA(e)}function cA(t,e){switch(t){case or.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw nu(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case or.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw nu(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=F3(e)}catch(s){throw s.message.includes("polyfill")?s:nu(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class dA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw nu(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=q3(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function B3(t){const e=new dA(t);return e.base64?cA(or.BASE64,e.rest):$3(e.rest)}function z3(t){return new dA(t).contentType}function q3(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class _s{constructor(e,n){let r=0,s="";pE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(pE(this.data_)){const r=this.data_,s=j3(r,e,n);return s===null?null:new _s(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new _s(r,!0)}}static getBlob(...e){if(K_()){const n=e.map(r=>r instanceof _s?r.data_:r);return new _s(L3.apply(null,n))}else{const n=e.map(o=>G_(o)?U3(or.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new _s(s,!0)}}uploadData(){return this.data_}}/**
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
 */function hA(t){let e;try{e=JSON.parse(t)}catch{return null}return A3(e)?e:null}/**
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
 */function W3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function H3(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function fA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function G3(t,e){return e}class Ot{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||G3}}let Yc=null;function K3(t){return!G_(t)||t.length<2?t:fA(t)}function mA(){if(Yc)return Yc;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(i,o){return K3(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ot("size");return s.xform=r,t.push(s),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),Yc=t,Yc}function Q3(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new mn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Y3(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Q3(r,t),r}function pA(t,e,n){const r=hA(e);return r===null?null:Y3(t,r,n)}function J3(t,e,n,r){const s=hA(e);if(s===null||!G_(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,f=t.fullPath,p="/b/"+o(d)+"/o/"+o(f),y=Q_(p,n,r),E=lA({alt:"media",token:c});return y+E})[0]}function X3(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class gA{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function yA(t){if(!t)throw H_()}function Z3(t,e){function n(r,s){const i=pA(t,s,e);return yA(i!==null),i}return n}function e6(t,e){function n(r,s){const i=pA(t,s,e);return yA(i!==null),J3(i,s,t.host,t._protocol)}return n}function _A(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=f3():s=h3():n.getStatus()===402?s=d3(t.bucket):n.getStatus()===403?s=m3(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function t6(t){const e=_A(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=c3(t.path)),i.serverResponse=s.serverResponse,i}return n}function n6(t,e,n){const r=e.fullServerUrl(),s=Q_(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new gA(s,i,e6(t,n),o);return a.errorHandler=t6(e),a}function r6(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function s6(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=r6(null,e)),r}function i6(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let C=0;C<2;C++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=s6(e,r,s),d=X3(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",y=_s.getBlob(f,r,p);if(y===null)throw v3();const E={name:c.fullPath},k=Q_(i,t.host,t._protocol),R="POST",w=t.maxUploadRetryTime,_=new gA(k,R,Z3(t,n),w);return _.urlParams=E,_.headers=o,_.body=y.uploadData(),_.errorHandler=_A(e),_}class o6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Tl("cannot .send() more than once");if(zr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Tl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Tl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Tl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Tl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class a6 extends o6{initXhr(){this.xhr_.responseType="text"}}function wA(){return new a6}/**
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
 */class Qi{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qi(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fA(this._location.path)}get storage(){return this._service}get parent(){const e=W3(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new Qi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw x3(e)}}function l6(t,e,n){t._throwIfRoot("uploadBytes");const r=i6(t.storage,t._location,mA(),new _s(e,!0),n);return t.storage.makeRequestWithTokens(r,wA).then(s=>({metadata:s,ref:t}))}function u6(t){t._throwIfRoot("getDownloadURL");const e=n6(t.storage,t._location,mA());return t.storage.makeRequestWithTokens(e,wA).then(n=>{if(n===null)throw I3();return n})}function c6(t,e){const n=H3(t._location.path,e),r=new mn(t._location.bucket,n);return new Qi(t.storage,r)}/**
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
 */function d6(t){return/^[A-Za-z]+:\/\//.test(t)}function h6(t,e){return new Qi(t,e)}function vA(t,e){if(t instanceof Y_){const n=t;if(n._bucket==null)throw w3();const r=new Qi(n,n._bucket);return e!=null?vA(r,e):r}else return e!==void 0?c6(t,e):t}function f6(t,e){if(e&&d6(e)){if(t instanceof Y_)return h6(t,e);throw bg("To use ref(service, url), the first argument must be a Storage instance.")}else return vA(t,e)}function yE(t,e){const n=e==null?void 0:e[oA];return n==null?null:mn.makeFromBucketSpec(n,t)}function m6(t,e,n,r={}){t.host=`${e}:${n}`;const s=zr(e);s&&(Qh(`https://${t.host}/b`),by("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:m1(i,t.app.options.projectId))}class Y_{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=iA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l3,this._maxUploadRetryTime=u3,this._requests=new Set,s!=null?this._bucket=mn.makeFromBucketSpec(s,this._host):this._bucket=yE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=yE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qi(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new T3(aA());{const o=O3(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _E="@firebase/storage",wE="0.14.0";/**
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
 */const IA="storage";function p6(t,e,n){return t=de(t),l6(t,e,n)}function g6(t){return t=de(t),u6(t)}function y6(t,e){return t=de(t),f6(t,e)}function _6(t=Jh(),e){t=de(t);const r=pr(t,IA).getImmediate({identifier:e}),s=d1("storage");return s&&w6(r,...s),r}function w6(t,e,n,r={}){m6(t,e,n,r)}function v6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Y_(n,r,s,e,to)}function I6(){qn(new Pn(IA,v6,"PUBLIC").setMultipleInstances(!0)),Zt(_E,wE,""),Zt(_E,wE,"esm2020")}I6();const EA="@firebase/installations",J_="0.6.19";/**
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
 */const xA=1e4,TA=`w:${J_}`,bA="FIS_v2",E6="https://firebaseinstallations.googleapis.com/v1",x6=60*60*1e3,T6="installations",b6="Installations";/**
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
 */const S6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yi=new eo(T6,b6,S6);function SA(t){return t instanceof Rn&&t.code.includes("request-failed")}/**
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
 */function kA({projectId:t}){return`${E6}/projects/${t}/installations`}function AA(t){return{token:t.token,requestStatus:2,expiresIn:A6(t.expiresIn),creationTime:Date.now()}}async function PA(t,e){const r=(await e.json()).error;return Yi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function k6(t,{refreshToken:e}){const n=RA(t);return n.append("Authorization",P6(e)),n}async function CA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A6(t){return Number(t.replace("s","000"))}function P6(t){return`${bA} ${t}`}/**
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
 */async function R6({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=kA(t),s=RA(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:bA,appId:t.appId,sdkVersion:TA},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await CA(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:AA(c.authToken)}}else throw await PA("Create Installation",l)}/**
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
 */function NA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function C6(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const N6=/^[cdef][\w-]{21}$/,Sg="";function D6(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=V6(t);return N6.test(n)?n:Sg}catch{return Sg}}function V6(t){return C6(t).substr(0,22)}/**
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
 */function Af(t){return`${t.appName}!${t.appId}`}/**
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
 */const DA=new Map;function VA(t,e){const n=Af(t);OA(n,e),O6(n,e)}function OA(t,e){const n=DA.get(t);if(n)for(const r of n)r(e)}function O6(t,e){const n=M6();n&&n.postMessage({key:t,fid:e}),L6()}let Ti=null;function M6(){return!Ti&&"BroadcastChannel"in self&&(Ti=new BroadcastChannel("[Firebase] FID Change"),Ti.onmessage=t=>{OA(t.data.key,t.data.fid)}),Ti}function L6(){DA.size===0&&Ti&&(Ti.close(),Ti=null)}/**
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
 */const j6="firebase-installations-database",F6=1,Ji="firebase-installations-store";let zm=null;function X_(){return zm||(zm=E1(j6,F6,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ji)}}})),zm}async function Th(t,e){const n=Af(t),s=(await X_()).transaction(Ji,"readwrite"),i=s.objectStore(Ji),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&VA(t,e.fid),e}async function MA(t){const e=Af(t),r=(await X_()).transaction(Ji,"readwrite");await r.objectStore(Ji).delete(e),await r.done}async function Pf(t,e){const n=Af(t),s=(await X_()).transaction(Ji,"readwrite"),i=s.objectStore(Ji),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&VA(t,a.fid),a}/**
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
 */async function Z_(t){let e;const n=await Pf(t.appConfig,r=>{const s=U6(r),i=$6(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Sg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function U6(t){const e=t||{fid:D6(),registrationStatus:0};return LA(e)}function $6(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yi.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=B6(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:z6(t)}:{installationEntry:e}}async function B6(t,e){try{const n=await R6(t,e);return Th(t.appConfig,n)}catch(n){throw SA(n)&&n.customData.serverCode===409?await MA(t.appConfig):await Th(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function z6(t){let e=await vE(t.appConfig);for(;e.registrationStatus===1;)await NA(100),e=await vE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Z_(t);return r||n}return e}function vE(t){return Pf(t,e=>{if(!e)throw Yi.create("installation-not-found");return LA(e)})}function LA(t){return q6(t)?{fid:t.fid,registrationStatus:0}:t}function q6(t){return t.registrationStatus===1&&t.registrationTime+xA<Date.now()}/**
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
 */async function W6({appConfig:t,heartbeatServiceProvider:e},n){const r=H6(t,n),s=k6(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:TA,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await CA(()=>fetch(r,a));if(l.ok){const c=await l.json();return AA(c)}else throw await PA("Generate Auth Token",l)}function H6(t,{fid:e}){return`${kA(t)}/${e}/authTokens:generate`}/**
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
 */async function ew(t,e=!1){let n;const r=await Pf(t.appConfig,i=>{if(!jA(i))throw Yi.create("not-registered");const o=i.authToken;if(!e&&Q6(o))return i;if(o.requestStatus===1)return n=G6(t,e),i;{if(!navigator.onLine)throw Yi.create("app-offline");const a=J6(i);return n=K6(t,a),a}});return n?await n:r.authToken}async function G6(t,e){let n=await IE(t.appConfig);for(;n.authToken.requestStatus===1;)await NA(100),n=await IE(t.appConfig);const r=n.authToken;return r.requestStatus===0?ew(t,e):r}function IE(t){return Pf(t,e=>{if(!jA(e))throw Yi.create("not-registered");const n=e.authToken;return X6(n)?{...e,authToken:{requestStatus:0}}:e})}async function K6(t,e){try{const n=await W6(t,e),r={...e,authToken:n};return await Th(t.appConfig,r),n}catch(n){if(SA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await MA(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Th(t.appConfig,r)}throw n}}function jA(t){return t!==void 0&&t.registrationStatus===2}function Q6(t){return t.requestStatus===2&&!Y6(t)}function Y6(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x6}function J6(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function X6(t){return t.requestStatus===1&&t.requestTime+xA<Date.now()}/**
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
 */async function Z6(t){const e=t,{installationEntry:n,registrationPromise:r}=await Z_(e);return r?r.catch(console.error):ew(e).catch(console.error),n.fid}/**
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
 */async function e5(t,e=!1){const n=t;return await t5(n),(await ew(n,e)).token}async function t5(t){const{registrationPromise:e}=await Z_(t);e&&await e}/**
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
 */function n5(t){if(!t||!t.options)throw qm("App Configuration");if(!t.name)throw qm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qm(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qm(t){return Yi.create("missing-app-config-values",{valueName:t})}/**
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
 */const FA="installations",r5="installations-internal",s5=t=>{const e=t.getProvider("app").getImmediate(),n=n5(e),r=pr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},i5=t=>{const e=t.getProvider("app").getImmediate(),n=pr(e,FA).getImmediate();return{getId:()=>Z6(n),getToken:s=>e5(n,s)}};function o5(){qn(new Pn(FA,s5,"PUBLIC")),qn(new Pn(r5,i5,"PRIVATE"))}o5();Zt(EA,J_);Zt(EA,J_,"esm2020");/**
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
 */const bh="analytics",a5="firebase_id",l5="origin",u5=60*1e3,c5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tw="https://www.googletagmanager.com/gtag/js";/**
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
 */const jt=new Yh("@firebase/analytics");/**
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
 */const d5={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new eo("analytics","Analytics",d5);/**
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
 */function h5(t){if(!t.startsWith(tw)){const e=yn.create("invalid-gtag-resource",{gtagURL:t});return jt.warn(e.message),""}return t}function UA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function f5(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function m5(t,e){const n=f5("firebase-js-sdk-policy",{createScriptURL:h5}),r=document.createElement("script"),s=`${tw}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function p5(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function g5(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await UA(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){jt.error(a)}t("config",s,i)}async function y5(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await UA(n);for(const l of o){const c=a.find(f=>f.measurementId===l),d=c&&e[c.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){jt.error(i)}}function _5(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await y5(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await g5(t,e,n,r,a,l)}else if(i==="consent"){const[a,l]=o;t("consent",a,l)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){jt.error(a)}}return s}function w5(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=_5(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function v5(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(tw)&&n.src.includes(t))return n;return null}/**
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
 */const I5=30,E5=1e3;class x5{constructor(e={},n=E5){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $A=new x5;function T5(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function b5(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:T5(n)},s=c5.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const l=await i.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function S5(t,e=$A,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw yn.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw yn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new P5;return setTimeout(async()=>{a.abort()},u5),BA({appId:r,apiKey:s,measurementId:i},o,a,e)}async function BA(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=$A){var a;const{appId:i,measurementId:o}=t;try{await k5(r,e)}catch(l){if(o)return jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw l}try{const l=await b5(t);return s.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!A5(c)){if(s.deleteThrottleMetadata(i),o)return jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw l}const d=Number((a=c==null?void 0:c.customData)==null?void 0:a.httpStatus)===503?yv(n,s.intervalMillis,I5):yv(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,f),jt.debug(`Calling attemptFetch again in ${d} millis`),BA(t,f,r,s)}}function k5(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(yn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function A5(t){if(!(t instanceof Rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class P5{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function R5(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function C5(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function N5(){if(Sy())try{await w1()}catch(t){return jt.warn(yn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return jt.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function D5(t,e,n,r,s,i,o){const a=S5(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&jt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>jt.error(p)),e.push(a);const l=N5().then(p=>{if(p)return r.getId()}),[c,d]=await Promise.all([a,l]);v5(i)||m5(i,c.measurementId),s("js",new Date);const f=(o==null?void 0:o.config)??{};return f[l5]="firebase",f.update=!0,d!=null&&(f[a5]=d),s("config",c.measurementId,f),c.measurementId}/**
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
 */class V5{constructor(e){this.app=e}_delete(){return delete Zo[this.app.options.appId],Promise.resolve()}}let Zo={},EE=[];const xE={};let Wm="dataLayer",O5="gtag",TE,nw,bE=!1;function M5(){const t=[];if(g1()&&t.push("This is a browser extension environment."),R2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:e});jt.warn(n.message)}}function L5(t,e,n){M5();const r=t.options.appId;if(!r)throw yn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(Zo[r]!=null)throw yn.create("already-exists",{id:r});if(!bE){p5(Wm);const{wrappedGtag:i,gtagCore:o}=w5(Zo,EE,xE,Wm,O5);nw=i,TE=o,bE=!0}return Zo[r]=D5(t,EE,xE,e,TE,Wm,n),new V5(t)}function j5(t=Jh()){t=de(t);const e=pr(t,bh);return e.isInitialized()?e.getImmediate():F5(t)}function F5(t,e={}){const n=pr(t,bh);if(n.isInitialized()){const s=n.getImmediate();if(An(e,n.getOptions()))return s;throw yn.create("already-initialized")}return n.initialize({options:e})}function U5(t,e,n){t=de(t),C5(nw,Zo[t.app.options.appId],e,n).catch(r=>jt.error(r))}function $5(t,e,n,r){t=de(t),R5(nw,Zo[t.app.options.appId],e,n,r).catch(s=>jt.error(s))}const SE="@firebase/analytics",kE="0.10.19";function B5(){qn(new Pn(bh,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return L5(r,s,n)},"PUBLIC")),qn(new Pn("analytics-internal",t,"PRIVATE")),Zt(SE,kE),Zt(SE,kE,"esm2020");function t(e){try{const n=e.getProvider(bh).getImmediate();return{logEvent:(r,s,i)=>$5(n,r,s,i),setUserProperties:(r,s)=>U5(n,r,s)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}B5();const z5={apiKey:"AIzaSyAwQrXDVJ5i-kxezvYDi_3REghtIjqtAP8",authDomain:"on-news-a3c1d.firebaseapp.com",projectId:"on-news-a3c1d",storageBucket:"on-news-a3c1d.firebasestorage.app",messagingSenderId:"1062808607218",appId:"1:1062808607218:web:9b0519631f23145d2db36b",measurementId:"G-V9BRY0P3D6"},Rf=x1(z5),Er=fM(Rf),J=Vk(Rf),q5=_6(Rf);typeof window<"u"&&j5(Rf);const zA=L.createContext(void 0),xt=()=>{const t=L.useContext(zA);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},W5=({children:t})=>{const[e,n]=L.useState(null),[r,s]=L.useState(null),[i,o]=L.useState(!0),a=async p=>{const{email:y,password:E,fullName:k,username:R,description:w}=p;if((await fr(Re(J,"usernames",R))).exists())throw new Error("Nome de usuário já existe");const C=(await YV(Er,y,E)).user;await Qp(C,{displayName:k});const F={uid:C.uid,email:C.email,displayName:k,username:R,description:w||"",createdAt:new Date};await Promise.all([Ou(Re(J,"users",C.uid),F),Ou(Re(J,"usernames",R),{uid:C.uid})])},l=async(p,y)=>{await JV(Er,p,y)},c=async()=>{await nO(Er)},d=async p=>{await QV(Er,p)};L.useEffect(()=>tO(Er,async y=>{if(o(!0),s(y),y){const E=await fr(Re(J,"users",y.uid));if(E.exists()){const k=E.data();n({...k,createdAt:k.createdAt instanceof Date?k.createdAt:new Date(k.createdAt)})}}else n(null);o(!1)}),[]);const f={currentUser:e,firebaseUser:r,loading:i,login:l,signup:a,logout:c,resetPassword:d};return h.jsx(zA.Provider,{value:f,children:t})},qA=L.createContext(void 0),WA=()=>{const t=L.useContext(qA);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t},H5=({children:t})=>{const[e,n]=L.useState(()=>localStorage.getItem("theme")||"light");L.useEffect(()=>{localStorage.setItem("theme",e),document.documentElement.classList.toggle("dark",e==="dark")},[e]);const r=()=>{n(s=>s==="light"?"dark":"light")};return h.jsx(qA.Provider,{value:{theme:e,toggleTheme:r},children:t})},G5=({activeItem:t,onItemChange:e})=>{const{theme:n,toggleTheme:r}=WA(),{logout:s,currentUser:i}=xt(),o=[{id:"feed",label:"Página Inicial",icon:r1},{id:"search",label:"Pesquisa",icon:Jd},{id:"categories",label:"Explorar",icon:Ey},{id:"create-post",label:"Criar",icon:Hh},{id:"notifications",label:"Notificações",icon:zn},{id:"profile",label:"Perfil",icon:Hn}],a=async()=>{try{await s()}catch(l){console.error("Error logging out:",l)}};return h.jsxs("aside",{className:"fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col z-50",children:[h.jsx("div",{className:"px-6 py-10 mb-2",children:h.jsx("div",{className:"font-serif italic text-2xl font-black text-gray-900 dark:text-white tracking-tight cursor-pointer",onClick:()=>e("feed"),children:"On News"})}),h.jsx("nav",{className:"flex-1 px-3",children:h.jsx("ul",{className:"space-y-2",children:o.map(l=>{const c=l.icon,d=t===l.id;return h.jsx("li",{children:h.jsxs("button",{"aria-label":l.label,onClick:()=>e(l.id),className:`w-full flex items-center space-x-4 px-3 py-3 rounded-xl transition-all duration-200 group ${d?"bg-gray-100/80 dark:bg-gray-800/80":"hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[h.jsx(c,{className:`w-7 h-7 transition-transform group-hover:scale-105 ${d?"text-primary dark:text-white":"text-gray-900 dark:text-white"}`,strokeWidth:d?2.5:1.5}),h.jsx("span",{className:`text-base transition-all ${d?"font-black text-primary dark:text-white":"font-medium text-gray-900 dark:text-white"}`,children:l.label})]})},l.id)})})}),h.jsxs("div",{className:"p-3 mb-4 space-y-2",children:[h.jsxs("button",{onClick:r,className:"w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group",children:[n==="light"?h.jsx(c2,{className:"w-7 h-7",strokeWidth:1.5}):h.jsx(m2,{className:"w-7 h-7",strokeWidth:1.5}),h.jsx("span",{className:"text-gray-900 dark:text-white",children:"Mudar aparência"})]}),i&&h.jsxs("button",{onClick:a,className:"w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-red-500",children:[h.jsx(u2,{className:"w-7 h-7",strokeWidth:1.5}),h.jsx("span",{children:"Sair"})]})]})]})},K5=({activeItem:t,onItemChange:e})=>{const n=[{id:"feed",label:"Feed",icon:r1},{id:"search",label:"Search",icon:Jd},{id:"create-post",label:"Create",icon:Hh},{id:"notifications",label:"Activity",icon:zn},{id:"profile",label:"Profile",icon:Hn}];return h.jsx("nav",{className:"fixed bottom-0 left-0 right-0 w-full max-w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-2 md:hidden z-50 overflow-hidden",children:h.jsx("div",{className:"flex justify-between items-center max-w-lg mx-auto",children:n.map(r=>{const s=r.icon,i=t===r.id;return h.jsx("button",{"aria-label":r.label,onClick:()=>e(r.id),className:`flex flex-col items-center justify-center flex-1 py-1 transition-all duration-200 ${i?"scale-110":"opacity-80 hover:opacity-100"}`,children:h.jsx(s,{className:`w-7 h-7 transition-colors ${i?"text-primary dark:text-white":"text-gray-900 dark:text-white"}`,strokeWidth:i?2.5:2})},r.id)})})})},Q5=()=>{const[t,e]=L.useState(null),[n,r]=L.useState(!1),[s,i]=L.useState(!1),[o,a]=L.useState(!1),[l,c]=L.useState(!1);L.useEffect(()=>{(()=>{const E=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;a(E),E||r(!0)})();const p=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());i(p);const y=E=>{E.preventDefault(),e(E),o||r(!0)};return window.addEventListener("beforeinstallprompt",y),()=>{window.removeEventListener("beforeinstallprompt",y)}},[o]);const d=async()=>{if(t){t.prompt();const{outcome:f}=await t.userChoice;f==="accepted"&&r(!1),e(null)}else c(!l)};return o||!n?null:h.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-md mx-auto relative",children:[h.jsx("button",{"aria-label":"close",onClick:()=>r(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1",children:h.jsx(Da,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsxs("div",{className:"flex items-start space-x-4",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("img",{src:"/pwa-192x192.png",alt:"OnNews",className:"w-12 h-12 rounded-lg shadow-sm"})}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:"Instalar App"}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Tenha a melhor experiência lendo notícias direto da sua tela inicial."})]})]}),h.jsx("div",{className:"mt-1",children:l?h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 animate-fade-in",children:[h.jsx("p",{className:"font-semibold mb-2",children:"Como instalar manualmente:"}),s?h.jsxs("ul",{className:"space-y-2",children:[h.jsxs("li",{className:"flex items-center gap-2",children:["1. Toque em ",h.jsx(Gh,{className:"w-4 h-4 text-blue-500"})," ",h.jsx("strong",{children:"Compartilhar"})]}),h.jsxs("li",{className:"flex items-center gap-2",children:["2. Selecione"," ",h.jsx("span",{className:"font-bold",children:'"Adicionar à Tela de Início"'})]})]}):h.jsxs("ul",{className:"space-y-2",children:[h.jsxs("li",{className:"flex items-center gap-2",children:["1. Toque no menu ",h.jsx(d2,{className:"w-4 h-4"})," ","(três pontos)"]}),h.jsxs("li",{className:"flex items-center gap-2",children:["2. Selecione"," ",h.jsx("span",{className:"font-bold",children:'"Instalar aplicativo"'})," ","ou"," ",h.jsx("span",{className:"font-bold",children:'"Adicionar à tela inicial"'})]})]})]}):h.jsxs("button",{"aria-label":"download",onClick:d,className:"w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm",children:[h.jsx(i2,{className:"w-4 h-4"}),h.jsx("span",{children:"Instalar Agora"})]})})]})]})})};const Y5=!1,J5={financas:"business",saude:"health",educacao:"general",esportes:"sports",ciencias:"science",tecnologia:"technology"};function X5(t){if(!t||!Array.isArray(t.articles))return(t==null?void 0:t.status)==="error"&&console.error("NewsAPI Error:",t.message),{totalArticles:0,articles:[]};const e=t.articles.filter(n=>n.title&&n.url).map((n,r)=>{var o,a;return{id:`${n.url?btoa(n.url):`news-${Date.now()}`}-${r}`,title:n.title||"Sem título",description:n.description||"",content:n.content||"",url:n.url,image:n.urlToImage||"https://placehold.co/600x400?text=Sem+Imagem",publishedAt:n.publishedAt||new Date().toISOString(),lang:"pt",source:{id:((o=n.source)==null?void 0:o.id)||null,name:((a=n.source)==null?void 0:a.name)||"Fonte Desconhecida"}}});return{totalArticles:t.totalResults||e.length,articles:e}}async function Hm(t){try{let e="";const{endpoint:n,...r}=t;Y5||(e=`/api/news?${new URLSearchParams({...r,endpoint:n}).toString()}`);const s=await fetch(e),i=await s.json();if(!s.ok)throw console.error(`Erro na requisição (${s.status}):`,i),new Error(`Erro na requisição: ${s.status}`);return X5(i)}catch(e){return console.error("Error fetching news:",e),{totalArticles:0,articles:[]}}}class Io{static async getFeedNews(){return Hm({endpoint:"everything",domains:"globo.com,uol.com.br,folha.com.br,estadao.com.br,cnnbrasil.com.br,r7.com,terra.com.br,abril.com.br,g1.globo.com,poder360.com.br,metropoles.com,brasildefato.com.br,agenciabrasil.ebc.com.br,jovempan.com.br,valor.globo.com",language:"pt",pageSize:"100"})}static async getCategoryNews(e){const n=J5[e]||"general";return Hm({endpoint:"everything",language:"pt",q:n,pageSize:"100"})}static async searchNews(e){return Hm({endpoint:"everything",q:e,language:"pt",sortBy:"publishedAt",pageSize:"100"})}}const HA=6048e5,Z5=864e5,Jc=43200,AE=1440,PE=Symbol.for("constructDateFrom");function $r(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&PE in t?t[PE](e):t instanceof Date?new t.constructor(e):new Date(e)}function yt(t,e){return $r(e||t,t)}let e9={};function lc(){return e9}function Mu(t,e){var a,l,c,d;const n=lc(),r=(e==null?void 0:e.weekStartsOn)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??0,s=yt(t,e==null?void 0:e.in),i=s.getDay(),o=(i<r?7:0)+i-r;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function Sh(t,e){return Mu(t,{...e,weekStartsOn:1})}function GA(t,e){const n=yt(t,e==null?void 0:e.in),r=n.getFullYear(),s=$r(n,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=Sh(s),o=$r(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const a=Sh(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=a.getTime()?r:r-1}function kh(t){const e=yt(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Cf(t,...e){const n=$r.bind(null,t||e.find(r=>typeof r=="object"));return e.map(n)}function RE(t,e){const n=yt(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function t9(t,e,n){const[r,s]=Cf(n==null?void 0:n.in,t,e),i=RE(r),o=RE(s),a=+i-kh(i),l=+o-kh(o);return Math.round((a-l)/Z5)}function n9(t,e){const n=GA(t,e),r=$r(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Sh(r)}function bd(t,e){const n=+yt(t)-+yt(e);return n<0?-1:n>0?1:n}function r9(t){return $r(t,Date.now())}function s9(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function i9(t){return!(!s9(t)&&typeof t!="number"||isNaN(+yt(t)))}function o9(t,e,n){const[r,s]=Cf(n==null?void 0:n.in,t,e),i=r.getFullYear()-s.getFullYear(),o=r.getMonth()-s.getMonth();return i*12+o}function a9(t){return e=>{const r=(t?Math[t]:Math.trunc)(e);return r===0?0:r}}function l9(t,e){return+yt(t)-+yt(e)}function u9(t,e){const n=yt(t,e==null?void 0:e.in);return n.setHours(23,59,59,999),n}function c9(t,e){const n=yt(t,e==null?void 0:e.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function d9(t,e){const n=yt(t,e==null?void 0:e.in);return+u9(n,e)==+c9(n,e)}function h9(t,e,n){const[r,s,i]=Cf(n==null?void 0:n.in,t,t,e),o=bd(s,i),a=Math.abs(o9(s,i));if(a<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-o*a);let l=bd(s,i)===-o;d9(r)&&a===1&&bd(r,i)===1&&(l=!1);const c=o*(a-+l);return c===0?0:c}function f9(t,e,n){const r=l9(t,e)/1e3;return a9(n==null?void 0:n.roundingMethod)(r)}function m9(t,e){const n=yt(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const p9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},g9=(t,e,n)=>{let r;const s=p9[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ea(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const y9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},w9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v9={date:ea({formats:y9,defaultWidth:"full"}),time:ea({formats:_9,defaultWidth:"full"}),dateTime:ea({formats:w9,defaultWidth:"full"})},I9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},E9=(t,e,n,r)=>I9[t];function tr(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let s;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;s=t.values[a]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(e):e;return s[i]}}const x9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},T9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},b9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},S9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},k9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},A9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},P9=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},R9={ordinalNumber:P9,era:tr({values:x9,defaultWidth:"wide"}),quarter:tr({values:T9,defaultWidth:"wide",argumentCallback:t=>t-1}),month:tr({values:b9,defaultWidth:"wide"}),day:tr({values:S9,defaultWidth:"wide"}),dayPeriod:tr({values:k9,defaultWidth:"wide",formattingValues:A9,defaultFormattingWidth:"wide"})};function nr(t){return(e,n={})=>{const r=n.width,s=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(s);if(!i)return null;const o=i[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?N9(a,f=>f.test(o)):C9(a,f=>f.test(o));let c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(o.length);return{value:c,rest:d}}}function C9(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function N9(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function KA(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const s=r[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(s.length);return{value:o,rest:a}}}const D9=/^(\d+)(th|st|nd|rd)?/i,V9=/\d+/i,O9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},M9={any:[/^b/i,/^(a|c)/i]},L9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},j9={any:[/1/i,/2/i,/3/i,/4/i]},F9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},U9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},B9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},z9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},q9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},W9={ordinalNumber:KA({matchPattern:D9,parsePattern:V9,valueCallback:t=>parseInt(t,10)}),era:nr({matchPatterns:O9,defaultMatchWidth:"wide",parsePatterns:M9,defaultParseWidth:"any"}),quarter:nr({matchPatterns:L9,defaultMatchWidth:"wide",parsePatterns:j9,defaultParseWidth:"any",valueCallback:t=>t+1}),month:nr({matchPatterns:F9,defaultMatchWidth:"wide",parsePatterns:U9,defaultParseWidth:"any"}),day:nr({matchPatterns:$9,defaultMatchWidth:"wide",parsePatterns:B9,defaultParseWidth:"any"}),dayPeriod:nr({matchPatterns:z9,defaultMatchWidth:"any",parsePatterns:q9,defaultParseWidth:"any"})},QA={code:"en-US",formatDistance:g9,formatLong:v9,formatRelative:E9,localize:R9,match:W9,options:{weekStartsOn:0,firstWeekContainsDate:1}};function H9(t,e){const n=yt(t,e==null?void 0:e.in);return t9(n,m9(n))+1}function G9(t,e){const n=yt(t,e==null?void 0:e.in),r=+Sh(n)-+n9(n);return Math.round(r/HA)+1}function YA(t,e){var d,f,p,y;const n=yt(t,e==null?void 0:e.in),r=n.getFullYear(),s=lc(),i=(e==null?void 0:e.firstWeekContainsDate)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((y=(p=s.locale)==null?void 0:p.options)==null?void 0:y.firstWeekContainsDate)??1,o=$r((e==null?void 0:e.in)||t,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const a=Mu(o,e),l=$r((e==null?void 0:e.in)||t,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const c=Mu(l,e);return+n>=+a?r+1:+n>=+c?r:r-1}function K9(t,e){var a,l,c,d;const n=lc(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??1,s=YA(t,e),i=$r((e==null?void 0:e.in)||t,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),Mu(i,e)}function Q9(t,e){const n=yt(t,e==null?void 0:e.in),r=+Mu(n,e)-+K9(n,e);return Math.round(r/HA)+1}function Ie(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const os={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Ie(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):Ie(n+1,2)},d(t,e){return Ie(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return Ie(t.getHours()%12||12,e.length)},H(t,e){return Ie(t.getHours(),e.length)},m(t,e){return Ie(t.getMinutes(),e.length)},s(t,e){return Ie(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),s=Math.trunc(r*Math.pow(10,n-3));return Ie(s,e.length)}},Eo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},CE={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),s=r>0?r:1-r;return n.ordinalNumber(s,{unit:"year"})}return os.y(t,e)},Y:function(t,e,n,r){const s=YA(t,r),i=s>0?s:1-s;if(e==="YY"){const o=i%100;return Ie(o,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):Ie(i,e.length)},R:function(t,e){const n=GA(t);return Ie(n,e.length)},u:function(t,e){const n=t.getFullYear();return Ie(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Ie(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Ie(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return os.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Ie(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const s=Q9(t,r);return e==="wo"?n.ordinalNumber(s,{unit:"week"}):Ie(s,e.length)},I:function(t,e,n){const r=G9(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):Ie(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):os.d(t,e)},D:function(t,e,n){const r=H9(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Ie(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const s=t.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Ie(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(s,{width:"short",context:"formatting"});case"eeee":default:return n.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const s=t.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Ie(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(s,{width:"narrow",context:"standalone"});case"cccccc":return n.day(s,{width:"short",context:"standalone"});case"cccc":default:return n.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return Ie(s,e.length);case"io":return n.ordinalNumber(s,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let s;switch(r===12?s=Eo.noon:r===0?s=Eo.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let s;switch(r>=17?s=Eo.evening:r>=12?s=Eo.afternoon:r>=4?s=Eo.morning:s=Eo.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return os.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):os.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Ie(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):Ie(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):os.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):os.s(t,e)},S:function(t,e){return os.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return DE(r);case"XXXX":case"XX":return pi(r);case"XXXXX":case"XXX":default:return pi(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return DE(r);case"xxxx":case"xx":return pi(r);case"xxxxx":case"xxx":default:return pi(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+NE(r,":");case"OOOO":default:return"GMT"+pi(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+NE(r,":");case"zzzz":default:return"GMT"+pi(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return Ie(r,e.length)},T:function(t,e,n){return Ie(+t,e.length)}};function NE(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),s=Math.trunc(r/60),i=r%60;return i===0?n+String(s):n+String(s)+e+Ie(i,2)}function DE(t,e){return t%60===0?(t>0?"-":"+")+Ie(Math.abs(t)/60,2):pi(t,e)}function pi(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),s=Ie(Math.trunc(r/60),2),i=Ie(r%60,2);return n+s+e+i}const VE=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},JA=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Y9=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],s=n[2];if(!s)return VE(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",VE(r,e)).replace("{{time}}",JA(s,e))},J9={p:JA,P:Y9},X9=/^D+$/,Z9=/^Y+$/,eU=["D","DD","YY","YYYY"];function tU(t){return X9.test(t)}function nU(t){return Z9.test(t)}function rU(t,e,n){const r=sU(t,e,n);if(console.warn(r),eU.includes(t))throw new RangeError(r)}function sU(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const iU=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,oU=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,aU=/^'([^]*?)'?$/,lU=/''/g,uU=/[a-zA-Z]/;function XA(t,e,n){var d,f,p,y,E,k,R,w;const r=lc(),s=(n==null?void 0:n.locale)??r.locale??QA,i=(n==null?void 0:n.firstWeekContainsDate)??((f=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(p=r.locale)==null?void 0:p.options)==null?void 0:y.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((k=(E=n==null?void 0:n.locale)==null?void 0:E.options)==null?void 0:k.weekStartsOn)??r.weekStartsOn??((w=(R=r.locale)==null?void 0:R.options)==null?void 0:w.weekStartsOn)??0,a=yt(t,n==null?void 0:n.in);if(!i9(a))throw new RangeError("Invalid time value");let l=e.match(oU).map(_=>{const v=_[0];if(v==="p"||v==="P"){const C=J9[v];return C(_,s.formatLong)}return _}).join("").match(iU).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const v=_[0];if(v==="'")return{isToken:!1,value:cU(_)};if(CE[v])return{isToken:!0,value:_};if(v.match(uU))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:_}});s.localize.preprocessor&&(l=s.localize.preprocessor(a,l));const c={firstWeekContainsDate:i,weekStartsOn:o,locale:s};return l.map(_=>{if(!_.isToken)return _.value;const v=_.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&nU(v)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&tU(v))&&rU(v,e,String(t));const C=CE[v[0]];return C(a,v,s.localize,c)}).join("")}function cU(t){const e=t.match(aU);return e?e[1].replace(lU,"'"):t}function dU(t,e,n){const r=lc(),s=(n==null?void 0:n.locale)??r.locale??QA,i=2520,o=bd(t,e);if(isNaN(o))throw new RangeError("Invalid time value");const a=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:o}),[l,c]=Cf(n==null?void 0:n.in,...o>0?[e,t]:[t,e]),d=f9(c,l),f=(kh(c)-kh(l))/1e3,p=Math.round((d-f)/60);let y;if(p<2)return n!=null&&n.includeSeconds?d<5?s.formatDistance("lessThanXSeconds",5,a):d<10?s.formatDistance("lessThanXSeconds",10,a):d<20?s.formatDistance("lessThanXSeconds",20,a):d<40?s.formatDistance("halfAMinute",0,a):d<60?s.formatDistance("lessThanXMinutes",1,a):s.formatDistance("xMinutes",1,a):p===0?s.formatDistance("lessThanXMinutes",1,a):s.formatDistance("xMinutes",p,a);if(p<45)return s.formatDistance("xMinutes",p,a);if(p<90)return s.formatDistance("aboutXHours",1,a);if(p<AE){const E=Math.round(p/60);return s.formatDistance("aboutXHours",E,a)}else{if(p<i)return s.formatDistance("xDays",1,a);if(p<Jc){const E=Math.round(p/AE);return s.formatDistance("xDays",E,a)}else if(p<Jc*2)return y=Math.round(p/Jc),s.formatDistance("aboutXMonths",y,a)}if(y=h9(c,l),y<12){const E=Math.round(p/Jc);return s.formatDistance("xMonths",E,a)}else{const E=y%12,k=Math.trunc(y/12);return E<3?s.formatDistance("aboutXYears",k,a):E<9?s.formatDistance("overXYears",k,a):s.formatDistance("almostXYears",k+1,a)}}function uc(t,e){return dU(t,r9(t),e)}const hU={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},fU=(t,e,n)=>{let r;const s=hU[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",String(e)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"em "+r:"há "+r:r},mU={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},pU={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},gU={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yU={date:ea({formats:mU,defaultWidth:"full"}),time:ea({formats:pU,defaultWidth:"full"}),dateTime:ea({formats:gU,defaultWidth:"full"})},_U={lastWeek:t=>{const e=t.getDay();return"'"+(e===0||e===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},wU=(t,e,n,r)=>{const s=_U[t];return typeof s=="function"?s(e):s},vU={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},IU={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},EU={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},xU={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},TU={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},bU={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},SU=(t,e)=>{const n=Number(t);return(e==null?void 0:e.unit)==="week"?n+"ª":n+"º"},kU={ordinalNumber:SU,era:tr({values:vU,defaultWidth:"wide"}),quarter:tr({values:IU,defaultWidth:"wide",argumentCallback:t=>t-1}),month:tr({values:EU,defaultWidth:"wide"}),day:tr({values:xU,defaultWidth:"wide"}),dayPeriod:tr({values:TU,defaultWidth:"wide",formattingValues:bU,defaultFormattingWidth:"wide"})},AU=/^(\d+)[ºªo]?/i,PU=/\d+/i,RU={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},CU={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},NU={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},DU={any:[/1/i,/2/i,/3/i,/4/i]},VU={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},OU={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},MU={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},LU={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},jU={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},FU={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},UU={ordinalNumber:KA({matchPattern:AU,parsePattern:PU,valueCallback:t=>parseInt(t,10)}),era:nr({matchPatterns:RU,defaultMatchWidth:"wide",parsePatterns:CU,defaultParseWidth:"any"}),quarter:nr({matchPatterns:NU,defaultMatchWidth:"wide",parsePatterns:DU,defaultParseWidth:"any",valueCallback:t=>t+1}),month:nr({matchPatterns:VU,defaultMatchWidth:"wide",parsePatterns:OU,defaultParseWidth:"any"}),day:nr({matchPatterns:MU,defaultMatchWidth:"wide",parsePatterns:LU,defaultParseWidth:"any"}),dayPeriod:nr({matchPatterns:jU,defaultMatchWidth:"any",parsePatterns:FU,defaultParseWidth:"any"})},lo={code:"pt-BR",formatDistance:fU,formatLong:yU,formatRelative:wU,localize:kU,match:UU,options:{weekStartsOn:0,firstWeekContainsDate:1}},rw=t=>{const[e,n]=L.useState({articleId:(t==null?void 0:t.id)||"",comments:[],likes:[],likesCount:0,commentsCount:0}),[r,s]=L.useState(!1),[i,o]=L.useState(!0),{currentUser:a}=xt(),l=t.type==="opinion";L.useEffect(()=>{if(!(t!=null&&t.id))return;const E=Ae(ye(J,"comments"),ve("articleId","==",t.id),en("createdAt","desc")),k=Ae(ye(J,"likes"),ve("articleId","==",t.id)),R=it(E,_=>{const v=_.docs.map(C=>{var F;return{id:C.id,...C.data(),createdAt:((F=C.data().createdAt)==null?void 0:F.toDate())||new Date}});n(C=>({...C,comments:v,commentsCount:v.length}))}),w=it(k,_=>{const v=_.docs.map(F=>{var M;return{id:F.id,...F.data(),createdAt:((M=F.data().createdAt)==null?void 0:M.toDate())||new Date}}),C=v.find(F=>F.userId===(a==null?void 0:a.uid));s(!!C),n(F=>({...F,likes:v,likesCount:v.length})),o(!1)});return()=>{R(),w()}},[t==null?void 0:t.id,a==null?void 0:a.uid]);const c=()=>{var k,R;if(!t)return null;if(l){const w=t;return{id:w.id,title:w.title,content:w.content,authorName:w.authorName,userName:w.userName,userPhoto:w.userPhoto,color:w.color,publishedAt:w.publishedAt instanceof Date?w.publishedAt.toISOString():w.publishedAt,type:"opinion"}}const E=t;return{id:E.id||"",title:E.title||"Sem título",description:E.description||"",content:E.content||"",url:E.url||"",image:E.image||"",publishedAt:E.publishedAt||new Date().toISOString(),source:{id:((k=E.source)==null?void 0:k.id)||null,name:((R=E.source)==null?void 0:R.name)||"Fonte Desconhecida"},type:"news"}},d=async(E,k,R)=>{if(!(!a||a.uid===k))try{await Xo(ye(J,"notifications"),{toUserId:k,fromUserId:a.uid,fromUserName:a.username,fromUserPhoto:a.photoURL||"",type:E,articleId:t.id,articleTitle:t.title,commentContent:R,read:!1,createdAt:Os()})}catch(w){console.error("Error creating notification:",w)}};return{interactions:e,isLiked:r,loading:i,addComment:async(E,k)=>{if(!a){_e.error("Você precisa fazer login para comentar");return}try{const R=c();await Xo(ye(J,"comments"),{articleId:t.id,userId:a.uid,username:a.username,userPhoto:a.photoURL||"",content:E,createdAt:Os(),articleSnapshot:R,parentCommentId:k||null}),l&&await d("comment",t.userId,E),_e.success("Comentário adicionado!")}catch(R){_e.error("Erro ao adicionar comentário"),console.error("Error adding comment:",R)}},toggleLike:async()=>{if(!a){_e.error("Você precisa fazer login para curtir");return}try{if(r){const E=e.likes.find(k=>k.userId===a.uid);E&&await kf(Re(J,"likes",E.id))}else{const E=c();await Xo(ye(J,"likes"),{articleId:t.id,userId:a.uid,username:a.username,userPhoto:a.photoURL||"",createdAt:Os(),articleSnapshot:E}),l&&await d("like",t.userId)}}catch(E){_e.error("Erro ao curtir notícia"),console.error("Error toggling like:",E)}},shareArticle:(E,k)=>{navigator.share?navigator.share({title:k,url:E}).catch(console.error):navigator.clipboard.writeText(E).then(()=>{_e.success("Link copiado para a área de transferência!")}).catch(()=>{_e.error("Erro ao copiar link")})}}},ZA=({comment:t,articleId:e,onUserClick:n,onLoginRequired:r,onAddComment:s,isReply:i})=>{const{currentUser:o}=xt(),[a,l]=L.useState(!1),[c,d]=L.useState(""),[f,p]=L.useState([]),[y,E]=L.useState(!1),[k,R]=L.useState([]),[w,_]=L.useState(!1);L.useEffect(()=>{if(!i){const M=Ae(ye(J,"comments"),ve("parentCommentId","==",t.id),ve("articleId","==",e));return it(M,I=>{const T=I.docs.map(S=>{var P;return{id:S.id,...S.data(),createdAt:((P=S.data().createdAt)==null?void 0:P.toDate())||new Date}});p(T.sort((S,P)=>S.createdAt.getTime()-P.createdAt.getTime()))})}},[t.id,e,i]),L.useEffect(()=>{const M=Ae(ye(J,"commentLikes"),ve("commentId","==",t.id));return it(M,I=>{const T=I.docs.map(S=>({id:S.id,...S.data()}));R(T),_(T.some(S=>S.userId===(o==null?void 0:o.uid)))})},[t.id,o==null?void 0:o.uid]);const v=async()=>{if(!o){r==null||r();return}try{if(w){const M=k.find(b=>b.userId===o.uid);M&&await kf(Re(J,"commentLikes",M.id))}else await Xo(ye(J,"commentLikes"),{commentId:t.id,userId:o.uid,createdAt:Os()})}catch{_e.error("Erro ao curtir comentário")}},C=async M=>{if(M.preventDefault(),!o){r==null||r();return}c.trim()&&(await s(c.trim(),t.id),d(""),l(!1))},F=y?f:f.slice(-2);return h.jsx("div",{className:`flex flex-col ${i?"ml-8 mt-2":"mt-4"}`,children:h.jsxs("div",{className:"flex space-x-3",children:[h.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-medium cursor-pointer overflow-hidden shrink-0",onClick:()=>n==null?void 0:n(t.userId),children:t.userPhoto?h.jsx("img",{src:t.userPhoto,alt:t.username,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-4 h-4"})}),h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"bg-gray-100 dark:bg-gray-700/50 rounded-2xl px-4 py-2",children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsxs("span",{className:"text-sm font-bold text-gray-900 dark:text-white cursor-pointer hover:underline",onClick:()=>n==null?void 0:n(t.userId),children:["@",t.username]}),h.jsx("span",{className:"text-[10px] text-gray-500 dark:text-gray-400",children:t.createdAt?XA(t.createdAt,"dd/MM/yy HH:mm",{locale:lo}):""})]}),h.jsx("p",{className:"text-sm text-gray-800 dark:text-gray-200",children:t.content})]}),h.jsxs("div",{className:"flex items-center space-x-4 mt-1 ml-2 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[h.jsxs("button",{onClick:v,className:`hover:text-red-500 transition-colors flex items-center gap-1 ${w?"text-red-500":""}`,children:[h.jsx(zn,{className:`w-3 h-3 ${w?"fill-current":""}`}),k.length>0&&h.jsx("span",{children:k.length}),"Curtir"]}),!i&&h.jsxs("button",{onClick:()=>l(!a),className:"hover:text-blue-500 transition-colors flex items-center gap-1",children:[h.jsx(Li,{className:"w-3 h-3"}),"Responder"]})]}),a&&h.jsxs("form",{onSubmit:C,className:"mt-2 flex gap-2",children:[h.jsx("input",{type:"text",value:c,onChange:M=>d(M.target.value),placeholder:"Escreva uma resposta...",className:"flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none",autoFocus:!0}),h.jsx("button",{type:"submit",disabled:!c.trim(),className:"text-primary disabled:opacity-50",children:h.jsx(Ty,{className:"w-4 h-4"})})]}),!i&&f.length>0&&h.jsxs("div",{className:"mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700",children:[f.length>2&&!y&&h.jsxs("button",{onClick:()=>E(!0),className:"text-xs text-primary font-bold ml-8 flex items-center gap-1 hover:underline mt-1",children:[h.jsx(t2,{className:"w-3 h-3"}),"Ver mais ",f.length-2," comentários"]}),F.map(M=>h.jsx(ZA,{comment:M,articleId:e,onUserClick:n,onLoginRequired:r,onAddComment:s,isReply:!0},M.id)),y&&h.jsxs("button",{onClick:()=>E(!1),className:"text-xs text-gray-500 font-bold ml-8 flex items-center gap-1 hover:underline mt-1",children:[h.jsx(r2,{className:"w-3 h-3"}),"Ver menos"]})]})]})]})})},sw=({articleId:t,comments:e,onLoginRequired:n,onUserClick:r,onAddComment:s})=>{var p;const[i,o]=L.useState(""),[a,l]=L.useState(!1),{currentUser:c}=xt(),d=async y=>{if(y.preventDefault(),!c){n==null||n();return}i.trim()&&(l(!0),await s(i.trim()),o(""),l(!1))},f=e.filter(y=>!y.parentCommentId);return h.jsxs("section",{className:"space-y-4",children:[c&&h.jsxs("form",{onSubmit:d,className:"flex space-x-3",children:[h.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-sm font-medium overflow-hidden",children:c.photoURL?h.jsx("img",{src:c.photoURL,alt:c.displayName,className:"w-full h-full object-cover"}):(p=c.displayName)==null?void 0:p.charAt(0).toUpperCase()}),h.jsxs("div",{className:"flex-1 flex space-x-2",children:[h.jsx("input",{type:"text",value:i,onChange:y=>o(y.target.value),placeholder:"Escreva um comentário...",className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary",disabled:a}),h.jsx("button",{"aria-label":"submit",type:"submit",disabled:!i.trim()||a,className:"p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50",children:h.jsx(Ty,{className:"w-4 h-4"})})]})]}),h.jsx("div",{className:"space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar",children:f.length===0?h.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm text-center py-4",children:"Seja o primeiro a comentar!"}):f.map(y=>h.jsx(ZA,{comment:y,articleId:t,onUserClick:r,onLoginRequired:n,onAddComment:s},y.id))})]})},Nf=({article:t,onLoginRequired:e,onUserClick:n,onPostClick:r})=>{var R,w;const[s,i]=L.useState(!1),{currentUser:o}=xt();if(!t)return null;const{interactions:a,isLiked:l,toggleLike:c,shareArticle:d,addComment:f}=rw(t),p=()=>{if(!o){e==null||e();return}c()},y=()=>{if(!o){e==null||e();return}i(!s)},E=()=>{d(t.url,t.title)},k=_=>{try{const v=new Date(_);return uc(v,{addSuffix:!0,locale:lo})}catch{return"há algum tempo"}};return h.jsxs("article",{className:"bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between p-3",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden",children:h.jsx(JN,{className:"w-4 h-4 text-gray-500"})}),h.jsx("div",{children:h.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white leading-tight",children:((R=t.source)==null?void 0:R.name)||"Fonte desconhecida"})})]}),h.jsx("button",{className:"text-gray-500 dark:text-gray-400",children:h.jsx(xy,{className:"w-5 h-5"})})]}),t.image&&h.jsx("div",{className:"relative aspect-square w-full bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer",onDoubleClick:p,children:h.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover",onError:_=>{_.target.style.display="none"}})}),h.jsxs("div",{className:"p-3 pb-0",children:[h.jsx("div",{className:"flex items-center justify-between mb-2",children:h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("button",{"aria-label":"like",onClick:p,className:`transition-all ${l?"text-red-500":"text-gray-900 dark:text-white"}`,children:h.jsx(zn,{className:`w-7 h-7 ${l?"fill-current":""}`,strokeWidth:2})}),h.jsx("button",{"aria-label":"comment",onClick:y,className:"text-gray-900 dark:text-white",children:h.jsx(Li,{className:"w-7 h-7",strokeWidth:2})}),h.jsx("button",{"aria-label":"share",onClick:E,className:"text-gray-900 dark:text-white",children:h.jsx(Gh,{className:"w-7 h-7",strokeWidth:2})})]})}),a.likesCount>0&&h.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white mb-1",children:[a.likesCount.toLocaleString()," curtidas"]}),h.jsxs("div",{className:"space-y-1 mb-2",children:[h.jsxs("p",{className:"text-sm text-gray-900 dark:text-white leading-snug",children:[h.jsx("span",{className:"font-bold mr-2",children:(w=t.source)==null?void 0:w.name}),t.title]}),t.description&&h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug",children:t.description})]}),h.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-tight mb-2",children:k(t.publishedAt)}),a.commentsCount>0&&!s&&h.jsxs("button",{onClick:y,className:"text-sm text-gray-500 dark:text-gray-400 mb-2 hover:underline",children:["Ver todos os ",a.commentsCount," comentários"]})]}),h.jsx("div",{className:"px-3 pb-3",children:h.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm",children:"Ler matéria completa"})}),s&&h.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 p-3",children:h.jsx(sw,{articleId:t.id,comments:a.comments,onLoginRequired:e,onUserClick:n,onAddComment:f})})]})},iw=({post:t,onLoginRequired:e,onUserClick:n,onEdit:r,onPostClick:s})=>{const[i,o]=L.useState(!1),{currentUser:a}=xt(),{interactions:l,isLiked:c,toggleLike:d,shareArticle:f,addComment:p}=rw(t),y=t.status==="draft",E=(a==null?void 0:a.uid)===t.userId,k=()=>{if(!y){if(!a){e==null||e();return}d()}},R=()=>{if(!y){if(!a){e==null||e();return}o(!i)}},w=_=>{try{const v=_ instanceof Date?_:typeof _.toDate=="function"?_.toDate():new Date(_);return uc(v,{addSuffix:!0,locale:lo})}catch{return"há algum tempo"}};return h.jsxs("article",{className:"bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between p-3",children:[h.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>n==null?void 0:n(t.userId),children:[h.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]",children:h.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-800 p-[1.5px]",children:h.jsx("div",{className:"w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden",children:t.userPhoto?h.jsx("img",{src:t.userPhoto,alt:t.userName,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-4 h-4 text-gray-500"})})})}),h.jsx("div",{children:h.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white leading-tight",children:[t.userName,y&&h.jsx("span",{className:"ml-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-1.5 py-0.5 rounded uppercase font-black",children:"Rascunho"})]})})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[y&&E&&r&&h.jsxs("button",{onClick:()=>r(t),className:"flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary/20 transition-colors",children:[h.jsx(f2,{className:"w-3 h-3"})," Continuar Editando"]}),h.jsx("button",{className:"text-gray-500 dark:text-gray-400",children:h.jsx(xy,{className:"w-5 h-5"})})]})]}),h.jsxs("div",{onClick:()=>s==null?void 0:s(t),className:"aspect-[4/3] w-full rounded-2xl p-6 flex flex-col justify-end shadow-lg relative overflow-hidden cursor-pointer group",style:{background:`linear-gradient(135deg, ${t.cardColor||"#10b981"} 0%, ${t.cardColor||"#10b981"}dd 100%)`},children:[h.jsx("div",{className:"absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"}),h.jsx("h2",{className:"text-xl md:text-2xl font-black text-white mb-2 leading-tight drop-shadow-md",children:t.title}),h.jsx("div",{className:"w-10 h-1 bg-white/30 rounded-full mb-3"}),h.jsx("p",{className:"text-sm font-medium text-white/90",children:t.authorName})]}),h.jsxs("div",{className:"p-3 pb-0",children:[h.jsx("div",{className:"flex items-center justify-between mb-2",children:h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("button",{"aria-label":"like",onClick:k,className:`transition-all ${c?"text-red-500":"text-gray-900 dark:text-white"}`,children:h.jsx(zn,{className:`w-7 h-7 ${c?"fill-current":""}`,strokeWidth:2})}),h.jsx("button",{"aria-label":"comment",onClick:R,className:"text-gray-900 dark:text-white",children:h.jsx(Li,{className:"w-7 h-7",strokeWidth:2})}),h.jsx("button",{"aria-label":"share",onClick:()=>f(`${window.location.origin}/post/${t.id}`,t.title),className:"text-gray-900 dark:text-white",children:h.jsx(Gh,{className:"w-7 h-7",strokeWidth:2})})]})}),l.likesCount>0&&h.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white mb-1",children:[l.likesCount.toLocaleString()," curtidas"]}),h.jsxs("div",{onClick:()=>s==null?void 0:s(t),className:"space-y-1 mb-2 cursor-pointer group",children:[h.jsxs("p",{className:"text-sm text-gray-900 dark:text-white leading-snug",children:[h.jsx("span",{className:"font-bold mr-2",children:t.userName}),h.jsxs("span",{className:"font-medium italic",children:['"',t.title,'"']})]}),h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug",children:t.content}),h.jsx("button",{className:"text-[11px] font-bold text-gray-400 group-hover:text-primary transition-colors",children:"ver todos os detalhes..."})]}),h.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-tight mb-2",children:w(t.publishedAt)}),l.commentsCount>0&&!i&&h.jsxs("button",{onClick:R,className:"text-sm text-gray-500 dark:text-gray-400 mb-2 hover:underline",children:["Ver todos os ",l.commentsCount," comentários"]})]}),h.jsx("div",{className:"px-3 pb-3",children:h.jsx("button",{onClick:()=>s==null?void 0:s(t),className:"block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm",children:"Ler artigo na íntegra"})}),i&&h.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 p-3",children:h.jsx(sw,{articleId:t.id,comments:l.comments,onLoginRequired:e,onUserClick:n,onAddComment:p})})]})};async function $U(t,e){if(t===e)return;const n=`${t}_${e}`;await Ou(Re(J,"follows",n),{followerId:t,followingId:e,createdAt:Os()})}async function BU(t,e){const n=`${t}_${e}`;await kf(Re(J,"follows",n))}async function zU(t,e){if(t===e)return;const n=q_(J),r=`${t}_${e}`;n.set(Re(J,"blocks",r),{blockerId:t,blockedId:e,createdAt:Os()}),n.delete(Re(J,"follows",`${t}_${e}`)),n.delete(Re(J,"follows",`${e}_${t}`)),await n.commit()}const ow=({userId:t,onLoginRequired:e,className:n})=>{const{currentUser:r}=xt(),[s,i]=L.useState(!1),[o,a]=L.useState(!0);L.useEffect(()=>{if(!r||!t){a(!1);return}const c=`${r.uid}_${t}`,d=it(Re(J,"follows",c),f=>{i(f.exists()),a(!1)});return()=>d()},[r,t]);const l=async c=>{if(c.stopPropagation(),!r){e==null||e();return}try{s?await BU(r.uid,t):(await $U(r.uid,t),_e.success("Agora você está seguindo!"))}catch{_e.error("Erro ao processar solicitação")}};return(r==null?void 0:r.uid)===t?null:h.jsx("button",{onClick:l,disabled:o,className:`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${s?"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30":"bg-primary text-white hover:bg-primary/90"} ${n}`,children:o?"...":s?"Seguindo":"Seguir"})},eP=({onUserClick:t,onLoginRequired:e})=>{const{currentUser:n}=xt(),[r,s]=L.useState([]),[i,o]=L.useState(!0);return L.useEffect(()=>{(async()=>{try{let d=(await Mn(Ae(ye(J,"users"),$_(50)))).docs.map(f=>({uid:f.id,...f.data()})).filter(f=>f.uid!==(n==null?void 0:n.uid));if(n){const f=await Mn(Ae(ye(J,"follows"),ve("followerId","==",n.uid))),p=new Set(f.docs.map(R=>R.data().followingId)),y=await Mn(Ae(ye(J,"blocks"),ve("blockerId","==",n.uid))),E=await Mn(Ae(ye(J,"blocks"),ve("blockedId","==",n.uid))),k=new Set([...y.docs.map(R=>R.data().blockedId),...E.docs.map(R=>R.data().blockerId)]);d=d.filter(R=>!p.has(R.uid)&&!k.has(R.uid))}s(d.slice(0,15)),o(!1)}catch(l){console.error("Error fetching suggestions:",l),o(!1)}})()},[n]),i||r.length===0?null:h.jsxs("div",{className:"py-4 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4 px-4",children:[h.jsx("h3",{className:"font-bold text-sm text-gray-500 dark:text-gray-400",children:"Sugestões para você"}),h.jsx("button",{className:"text-xs font-bold text-primary hover:text-gray-900 dark:hover:text-white transition-colors",children:"Ver tudo"})]}),h.jsx("div",{className:"flex overflow-x-auto gap-3 pb-2 px-4 custom-scrollbar snap-x no-scrollbar",children:r.map(a=>h.jsxs("div",{className:"flex-shrink-0 w-44 bg-white dark:bg-gray-800 rounded-lg p-5 flex flex-col items-center text-center snap-start border border-gray-100 dark:border-gray-700 shadow-sm",children:[h.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] cursor-pointer mb-3",onClick:()=>t(a.uid),children:h.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-800 p-[2px]",children:a.photoURL?h.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-full h-full rounded-full object-cover"}):h.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center",children:h.jsx(Hn,{className:"w-8 h-8 text-gray-400"})})})}),h.jsxs("div",{className:"mb-4 w-full",children:[h.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white truncate cursor-pointer hover:underline",onClick:()=>t(a.uid),children:a.username}),h.jsx("p",{className:"text-xs text-gray-400 truncate",children:a.displayName})]}),h.jsx(ow,{userId:a.uid,onLoginRequired:e,className:"w-full py-1 text-xs"})]},a.uid))})]})},qU=({onSuccess:t,onBackToLogin:e})=>{const[n,r]=L.useState({fullName:"",username:"",email:"",password:"",confirmPassword:"",description:""}),[s,i]=L.useState(!1),[o,a]=L.useState(!1),[l,c]=L.useState(!1),{signup:d}=xt(),f=async y=>{if(y.preventDefault(),n.password!==n.confirmPassword){_e.error("As senhas não coincidem");return}if(n.password.length<6){_e.error("A senha deve ter pelo menos 6 caracteres");return}c(!0);try{await d({email:n.email,password:n.password,fullName:n.fullName,username:n.username,description:n.description}),_e.success("Conta criada com sucesso!"),t()}catch(E){_e.error(E.message||"Erro ao criar conta")}finally{c(!1)}},p=y=>{r(E=>({...E,[y.target.name]:y.target.value}))};return h.jsxs("form",{onSubmit:f,children:[h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome Completo"}),h.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:p,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome de Usuário"}),h.jsx("input",{type:"text",name:"username",value:n.username,onChange:p,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",pattern:"^[a-zA-Z0-9_]+$",title:"Apenas letras, números e underscore são permitidos",required:!0}),h.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"Apenas letras, números e _ são permitidos"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),h.jsx("input",{type:"email",name:"email",value:n.email,onChange:p,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Senha"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:s?"text":"password",name:"password",value:n.password,onChange:p,className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",minLength:6,required:!0}),h.jsx("button",{"aria-label":"showpassword",type:"button",onClick:()=>i(!s),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:s?h.jsx($p,{className:"w-4 h-4"}):h.jsx(Bp,{className:"w-4 h-4"})})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirmar Senha"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:o?"text":"password",name:"confirmPassword",value:n.confirmPassword,onChange:p,className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),h.jsx("button",{"aria-label":"confirmpassword",type:"button",onClick:()=>a(!o),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:o?h.jsx($p,{className:"w-4 h-4"}):h.jsx(Bp,{className:"w-4 h-4"})})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Descrição do Perfil (Opcional)"}),h.jsx("textarea",{name:"description",value:n.description,onChange:p,rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none",placeholder:"Conte um pouco sobre você..."})]}),h.jsx("button",{"aria-label":"submitbutton",type:"submit",disabled:l,className:"w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",children:l?"Criando conta...":"Criar Conta"})]}),h.jsx("div",{className:"mt-6 text-center",children:h.jsx("button",{"aria-label":"backlogin",type:"button",onClick:e,className:"text-sm text-primary hover:underline",children:"Já tem conta? Fazer login"})})]})},aw=({isOpen:t,onClose:e})=>{const[n,r]=L.useState("login"),[s,i]=L.useState(""),[o,a]=L.useState(""),[l,c]=L.useState(!1),[d,f]=L.useState(!1),{login:p,resetPassword:y}=xt();if(!t)return null;const E=async _=>{if(_.preventDefault(),!(!s||!o)){f(!0);try{await p(s,o),_e.success("Login realizado com sucesso!"),e(),R()}catch(v){_e.error(v.message||"Erro ao fazer login")}finally{f(!1)}}},k=async _=>{if(_.preventDefault(),!s){_e.error("Digite seu email");return}f(!0);try{await y(s),_e.success("Email de recuperação enviado!"),r("login")}catch{_e.error("Erro ao enviar email de recuperação")}finally{f(!1)}},R=()=>{i(""),a(""),c(!1),r("login")},w=()=>{R(),e()};return h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("img",{src:"/OnNewsBr.webp",alt:"OnNews",className:"h-10 w-auto"}),h.jsxs("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:[n==="login"&&"Entrar",n==="signup"&&"Criar Conta",n==="reset-password"&&"Recuperar Senha"]}),h.jsx("button",{"aria-label":"closeModal",onClick:w,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:h.jsx(Da,{className:"w-5 h-5 text-gray-500"})})]}),h.jsxs("div",{className:"p-6",children:[n==="signup"?h.jsx(qU,{onSuccess:w,onBackToLogin:()=>r("login")}):h.jsx("form",{onSubmit:n==="login"?E:k,children:h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),h.jsx("input",{type:"email",value:s,onChange:_=>i(_.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),n==="login"&&h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Senha"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:l?"text":"password",value:o,onChange:_=>a(_.target.value),className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),h.jsx("button",{"aria-label":"showpassword",type:"button",onClick:()=>c(!l),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:l?h.jsx($p,{className:"w-4 h-4"}):h.jsx(Bp,{className:"w-4 h-4"})})]})]}),h.jsx("button",{"aria-label":"submitbutton",type:"submit",disabled:d,className:"w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",children:d?"Carregando...":n==="login"?"Entrar":"Enviar Email"})]})}),n!=="signup"&&h.jsxs("div",{className:"mt-6 space-y-3 text-center",children:[n==="login"&&h.jsxs(h.Fragment,{children:[h.jsx("button",{"aria-label":"resetpassword",onClick:()=>r("reset-password"),className:"text-sm text-primary hover:underline block w-full",children:"Esqueci minha senha"}),h.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Não tem conta?"," ",h.jsx("button",{"aria-label":"sigup",onClick:()=>r("signup"),className:"text-primary hover:underline font-medium",children:"Criar conta"})]})]}),n==="reset-password"&&h.jsx("button",{"aria-label":"login",onClick:()=>r("login"),className:"text-sm text-primary hover:underline",children:"Voltar ao login"})]})]})]})})},ru=({category:t,searchQuery:e,onUserClick:n,userId:r,status:s="published",onEdit:i,onPostClick:o})=>{const[a,l]=L.useState([]),[c,d]=L.useState([]),[f,p]=L.useState(!0),[y,E]=L.useState(!1),[k,R]=L.useState(!1),[w,_]=L.useState(0),v=L.useRef(null),C=L.useRef(null),F=20,M=L.useCallback(async()=>{p(!0);try{let T={articles:[]};r||(e?T=await Io.searchNews(e):t?T=await Io.getCategoryNews(t):T=await Io.getFeedNews())}catch(T){console.error("Error fetching news:",T),_e.error("Erro ao carregar notícias")}finally{p(!1)}},[t,e,r]);L.useEffect(()=>{M()},[M]),L.useEffect(()=>{let T;r?T=Ae(ye(J,"opinionPosts"),ve("userId","==",r),ve("status","==",s),en("publishedAt","desc")):T=Ae(ye(J,"opinionPosts"),ve("status","==",s),en("publishedAt","desc"));const S=it(T,P=>{const N=P.docs.map(he=>{var Qe;return{id:he.id,...he.data(),publishedAt:((Qe=he.data().publishedAt)==null?void 0:Qe.toDate())||new Date}});(async()=>{let he=[];if(!r)try{let _t;e?_t=await Io.searchNews(e):t?_t=await Io.getCategoryNews(t):_t=await Io.getFeedNews(),he=_t.articles}catch{}const Qe=[...he,...N].sort((_t,ge)=>{const z=new Date(_t.publishedAt).getTime();return new Date(ge.publishedAt).getTime()-z});l(Qe),d(Qe.slice(0,F)),p(!1)})()});return()=>S()},[t,e,r]);const b=L.useCallback(()=>{if(y)return;E(!0);const T=w+1,S=T*F,P=S+F,N=a.slice(S,P);N.length>0?setTimeout(()=>{d(A=>[...A,...N]),_(T),E(!1)},500):E(!1)},[a,w,y]);if(L.useEffect(()=>(v.current&&v.current.disconnect(),v.current=new IntersectionObserver(T=>{T[0].isIntersecting&&!y&&b()},{threshold:.1}),C.current&&c.length>0&&v.current.observe(C.current),()=>{v.current&&v.current.disconnect()}),[c.length,y,b]),f)return h.jsx("section",{className:"flex items-center justify-center py-12",children:h.jsxs("div",{className:"text-center",children:[h.jsx(Mi,{className:"w-8 h-8 animate-spin text-primary mx-auto mb-2"}),h.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Carregando feed..."})]})});const I=c.length<a.length;return h.jsxs("section",{className:"space-y-6",children:[c.length===0?h.jsx("div",{className:"text-center py-12",children:h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:e?"Nenhuma publicação encontrada para sua pesquisa.":"Nenhuma publicação disponível no momento."})}):h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"grid gap-6 w-full max-w-full overflow-hidden px-1",children:c.map((T,S)=>{const N=T.type==="opinion"?h.jsx(iw,{post:T,onLoginRequired:()=>R(!0),onUserClick:n,onEdit:i,onPostClick:o},T.id):h.jsx(Nf,{article:T,onLoginRequired:()=>R(!0),onUserClick:n},T.id);return h.jsxs(WP.Fragment,{children:[N,S===2&&!r&&!e&&h.jsx("div",{className:"my-2",children:h.jsx(eP,{onUserClick:n,onLoginRequired:()=>R(!0)})})]},T.id)})}),I&&h.jsx("div",{ref:C,className:"flex items-center justify-center py-8",children:y&&h.jsxs("div",{className:"text-center",children:[h.jsx(Mi,{className:"w-6 h-6 animate-spin text-primary mx-auto mb-2"}),h.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Carregando mais..."})]})})]}),h.jsx(aw,{isOpen:k,onClose:()=>R(!1)})]})},WU=({onCategorySelect:t})=>{const e=[{id:"financas",name:"Finanças",icon:s2,color:"from-green-500 to-emerald-500",bgColor:"bg-green-50 dark:bg-green-900/20",description:"Economia, investimentos e mercado financeiro"},{id:"saude",name:"Saúde",icon:zn,color:"from-red-500 to-pink-500",bgColor:"bg-red-50 dark:bg-red-900/20",description:"Medicina, bem-estar e saúde pública"},{id:"educacao",name:"Educação",icon:a2,color:"from-blue-500 to-cyan-500",bgColor:"bg-blue-50 dark:bg-blue-900/20",description:"Ensino, pesquisa e desenvolvimento acadêmico"},{id:"esportes",name:"Esportes",icon:p2,color:"from-orange-500 to-amber-500",bgColor:"bg-orange-50 dark:bg-orange-900/20",description:"Futebol, olimpíadas e competições esportivas"},{id:"ciencias",name:"Ciências",icon:YN,color:"from-purple-500 to-violet-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",description:"Descobertas científicas e pesquisas"},{id:"tecnologia",name:"Tecnologia",icon:l2,color:"from-indigo-500 to-blue-500",bgColor:"bg-indigo-50 dark:bg-indigo-900/20",description:"Inovação, inteligência artificial e digital"}];return h.jsxs("section",{children:[h.jsxs("div",{className:"mb-10 px-4 md:px-0",children:[h.jsx("h1",{className:"text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight",children:"Explorar"}),h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:"Descubra notícias e artigos por área de interesse"})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(n=>{const r=n.icon;return h.jsxs("button",{"aria-label":n.name,onClick:()=>t(n.id),className:`${n.bgColor} rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:scale-105`,children:[h.jsx("div",{className:`w-12 h-12 rounded-lg bg-gradient-to-r ${n.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`,children:h.jsx(r,{className:"w-6 h-6 text-white"})}),h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:n.name}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed",children:n.description})]},n.id)})})]})},HU=({onUserClick:t})=>{const{currentUser:e}=xt(),[n,r]=L.useState(""),[s,i]=L.useState(""),[o,a]=L.useState("news"),[l,c]=L.useState([]),[d,f]=L.useState(!1),p=async E=>{if(E.preventDefault(),!!n.trim()&&(i(n.trim()),o==="users")){f(!0);try{const k=ye(J,"users"),R=Ae(k,ve("username",">=",n.trim().toLowerCase()),ve("username","<=",n.trim().toLowerCase()+""),$_(20));let v=(await Mn(R)).docs.map(C=>({uid:C.id,...C.data()})).filter(C=>C.uid!==(e==null?void 0:e.uid));if(e){const C=await Promise.all(v.map(async F=>{const M=await fr(Re(J,"blocks",`${e.uid}_${F.uid}`)),b=await fr(Re(J,"blocks",`${F.uid}_${e.uid}`));return M.exists()||b.exists()}));v=v.filter((F,M)=>!C[M])}c(v)}catch(k){console.error("Error searching users",k)}finally{f(!1)}}},y=()=>{r(""),i(""),c([])};return h.jsxs("section",{className:"max-w-2xl mx-auto",children:[h.jsxs("div",{className:"sticky top-0 z-10 bg-white dark:bg-gray-900 pt-2 pb-4 px-4 md:px-0",children:[h.jsx("form",{onSubmit:p,className:"relative",children:h.jsxs("div",{className:"relative group",children:[h.jsx(Jd,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors group-focus-within:text-gray-600 dark:group-focus-within:text-gray-200"}),h.jsx("input",{type:"text",value:n,onChange:E=>r(E.target.value),placeholder:"Pesquisar",className:"w-full pl-11 pr-10 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-0 transition-all placeholder:text-gray-500"}),n&&h.jsx("button",{type:"button",onClick:y,className:"absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-0.5 text-white dark:text-gray-300 hover:opacity-80 transition-opacity",children:h.jsx(Da,{className:"w-3 h-3"})})]})}),h.jsxs("div",{className:"flex border-b border-gray-100 dark:border-gray-800 mt-4",children:[h.jsx("button",{onClick:()=>{a("news"),y()},className:`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${o==="news"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:"Notícias"}),h.jsx("button",{onClick:()=>{a("users"),y()},className:`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${o==="users"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:"Contas"})]})]}),h.jsx("div",{className:"px-4 md:px-0",children:o==="news"?s?h.jsx("div",{className:"mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300",children:h.jsx(ru,{searchQuery:s,onUserClick:t})}):h.jsxs("div",{className:"mt-20 text-center px-10",children:[h.jsx("div",{className:"w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700",children:h.jsx(Jd,{className:"w-10 h-10 text-gray-300",strokeWidth:1.5})}),h.jsx("h2",{className:"text-xl font-bold dark:text-white mb-2",children:"Descubra Novas Histórias"}),h.jsx("p",{className:"text-sm text-gray-500",children:"Pesquise por temas, locais ou categorias de notícias."})]}):h.jsxs("div",{className:"mt-4 space-y-6",children:[!s&&h.jsx("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500",children:h.jsx(eP,{onUserClick:t,onLoginRequired:()=>{}})}),d&&h.jsx("div",{className:"flex justify-center py-10",children:h.jsx(Mi,{className:"w-8 h-8 animate-spin text-gray-400"})}),s&&!d&&l.length===0&&h.jsx("p",{className:"text-center text-gray-500 py-10",children:"Nenhum usuário encontrado."}),h.jsx("div",{className:"divide-y dark:divide-gray-800",children:l.map(E=>h.jsxs("div",{onClick:()=>t(E.uid),className:"flex items-center gap-3 py-3 cursor-pointer hover:opacity-70 transition-opacity",children:[h.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0",children:E.photoURL?h.jsx("img",{src:E.photoURL,alt:E.username,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-6 h-6 text-gray-300"})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white truncate",children:E.username}),h.jsx("p",{className:"text-sm text-gray-500 truncate",children:E.displayName})]}),h.jsx(n2,{className:"w-4 h-4 text-gray-300"})]},E.uid))})]})})]})},tP=({isOpen:t,onClose:e,title:n,userIds:r,onUserClick:s})=>{const[i,o]=L.useState([]),[a,l]=L.useState(!0);return L.useEffect(()=>{if(!t||r.length===0){o([]),l(!1);return}(async()=>{l(!0);try{const d=r.map(async p=>{const y=await fr(Re(J,"users",p));return y.exists()?{uid:y.id,...y.data()}:null}),f=(await Promise.all(d)).filter(p=>p!==null);o(f)}catch(d){console.error("Error fetching users for list:",d)}finally{l(!1)}})()},[t,r]),t?h.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:h.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]",children:[h.jsxs("div",{className:"p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between",children:[h.jsx("h3",{className:"font-bold text-lg text-gray-900 dark:text-white",children:n}),h.jsx("button",{onClick:e,className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",children:h.jsx(Da,{className:"w-6 h-6 text-gray-500"})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-4 custom-scrollbar",children:a?h.jsx("div",{className:"flex justify-center py-8",children:h.jsx(Mi,{className:"w-8 h-8 animate-spin text-primary"})}):i.length===0?h.jsx("div",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:"Ninguém encontrado."}):h.jsx("div",{className:"space-y-4",children:i.map(c=>h.jsxs("div",{className:"flex items-center justify-between group",children:[h.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>{s(c.uid),e()},children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex-shrink-0 overflow-hidden",children:c.photoURL?h.jsx("img",{src:c.photoURL,alt:c.displayName,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-full h-full p-2 text-gray-400"})}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold text-sm text-gray-900 dark:text-white group-hover:underline",children:c.displayName}),h.jsxs("p",{className:"text-xs text-gray-500",children:["@",c.username]})]})]}),h.jsx(ow,{userId:c.uid,className:"px-3 py-1"})]},c.uid))})})]})}):null},GU=({onUserClick:t,onEditDraft:e,onPostClick:n})=>{const{currentUser:r,logout:s}=xt(),{theme:i,toggleTheme:o}=WA(),[a,l]=L.useState(!1),[c,d]=L.useState(!1),[f,p]=L.useState("grid"),y=L.useRef(null),[E,k]=L.useState([]),[R,w]=L.useState([]),[_,v]=L.useState([]),[C,F]=L.useState([]),[M,b]=L.useState([]),[I,T]=L.useState({type:null,userIds:[]}),[S,P]=L.useState(!1),[N,A]=L.useState({displayName:(r==null?void 0:r.displayName)||"",description:(r==null?void 0:r.description)||""});if(L.useEffect(()=>{if(!r)return;const ge=Ae(ye(J,"follows"),ve("followingId","==",r.uid)),z=it(ge,Bt=>{k(Bt.docs.map(zt=>zt.data().followerId))}),X=Ae(ye(J,"follows"),ve("followerId","==",r.uid)),ne=it(X,Bt=>{w(Bt.docs.map(zt=>zt.data().followingId))}),Z=Ae(ye(J,"opinion_posts"),ve("userId","==",r.uid),en("publishedAt","desc")),me=it(Z,Bt=>{v(Bt.docs.map(zt=>({id:zt.id,...zt.data()})))}),yr=Ae(ye(J,"blocks"),ve("blockerId","==",r.uid)),$t=it(yr,async Bt=>{const zt=Bt.docs.map(async an=>{const ln=await fr(Re(J,"users",an.data().blockedId));return{uid:an.data().blockedId,...ln.data()}}),on=await Promise.all(zt);b(on)}),_r=Ae(ye(J,"likes"),ve("userId","==",r.uid),en("createdAt","desc")),sn=it(_r,Bt=>{const zt=Bt.docs.map(on=>{var an;return{type:"like",data:on.data(),date:((an=on.data().createdAt)==null?void 0:an.toDate())||new Date}});F(on=>[...on.filter(ln=>ln.type!=="like"),...zt].sort((ln,uo)=>uo.date.getTime()-ln.date.getTime()))}),Gn=Ae(ye(J,"comments"),ve("userId","==",r.uid),en("createdAt","desc")),Ga=it(Gn,Bt=>{const zt=Bt.docs.map(on=>{var an;return{type:"comment",data:on.data(),date:((an=on.data().createdAt)==null?void 0:an.toDate())||new Date}});F(on=>[...on.filter(ln=>ln.type!=="comment"),...zt].sort((ln,uo)=>uo.date.getTime()-ln.date.getTime()))});return()=>{z(),ne(),me(),$t(),sn(),Ga()}},[r]),!r)return h.jsx("div",{className:"text-center py-20",children:h.jsx("p",{className:"text-gray-500",children:"Faça login para ver seu perfil."})});const he=()=>{var ge;(ge=y.current)==null||ge.click()},Qe=async ge=>{var X;const z=(X=ge.target.files)==null?void 0:X[0];if(z){d(!0);try{const ne=y6(q5,`profiles/${r.uid}/${Date.now()}_${z.name}`);await p6(ne,z);const Z=await g6(ne);Er.currentUser&&await Qp(Er.currentUser,{photoURL:Z}),await xh(Re(J,"users",r.uid),{photoURL:Z}),window.location.reload()}catch{_e.error("Erro ao atualizar foto")}finally{d(!1)}}},_t=async()=>{try{await xh(Re(J,"users",r.uid),{displayName:N.displayName,description:N.description}),Er.currentUser&&await Qp(Er.currentUser,{displayName:N.displayName}),_e.success("Perfil atualizado!"),l(!1)}catch{_e.error("Erro ao atualizar perfil")}};return h.jsxs("section",{className:"max-w-4xl mx-auto px-4 py-6 md:py-10",children:[h.jsx("input",{type:"file",ref:y,onChange:Qe,accept:"image/*",className:"hidden"}),h.jsxs("header",{className:"flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10",children:[h.jsxs("div",{className:"relative shrink-0 mx-auto md:mx-0",children:[h.jsx("div",{className:"w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px] cursor-pointer",onClick:he,children:h.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]",children:h.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden",children:c?h.jsx(Mi,{className:"w-8 h-8 animate-spin text-gray-400"}):r.photoURL?h.jsx("img",{src:r.photoURL,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-12 h-12 md:w-20 md:h-20 text-gray-300"})})})}),h.jsx("button",{onClick:he,className:"absolute bottom-1 right-1 md:bottom-3 md:right-3 bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-600",children:h.jsx(ZN,{className:"w-4 h-4 text-gray-900 dark:text-white"})})]}),h.jsxs("div",{className:"flex-1 w-full space-y-6",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[h.jsxs("h1",{className:"text-xl font-normal dark:text-white truncate",children:["@",r.username]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>l(!0),className:"flex-1 md:flex-none px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",children:"Editar perfil"}),h.jsx("button",{onClick:()=>P(!S),className:"p-1.5 text-gray-900 dark:text-white hover:opacity-70 transition-opacity",children:h.jsx(h2,{className:"w-6 h-6"})})]})]}),h.jsxs("div",{className:"flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800",children:[h.jsxs("div",{className:"text-center md:text-left",children:[h.jsx("span",{className:"block md:inline font-bold dark:text-white",children:_.length}),h.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"publicações"})]}),h.jsxs("button",{onClick:()=>T({type:"followers",userIds:E}),className:"text-center md:text-left hover:opacity-70 transition-opacity",children:[h.jsx("span",{className:"block md:inline font-bold dark:text-white",children:E.length}),h.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguidores"})]}),h.jsxs("button",{onClick:()=>T({type:"following",userIds:R}),className:"text-center md:text-left hover:opacity-70 transition-opacity",children:[h.jsx("span",{className:"block md:inline font-bold dark:text-white",children:R.length}),h.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguindo"})]})]}),h.jsxs("div",{className:"hidden md:block",children:[h.jsx("p",{className:"font-bold dark:text-white",children:r.displayName}),h.jsx("p",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:r.description})]})]})]}),h.jsxs("div",{className:"md:hidden mb-10",children:[h.jsx("p",{className:"font-bold dark:text-white",children:r.displayName}),h.jsx("p",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:r.description})]}),h.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800",children:h.jsxs("div",{className:"flex justify-center gap-8 sm:gap-16 -mt-[1px]",children:[h.jsxs("button",{onClick:()=>p("grid"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${f==="grid"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[h.jsx(Ey,{className:"w-3 h-3"}),h.jsx("span",{className:"hidden sm:inline",children:"Publicações"})]}),h.jsxs("button",{onClick:()=>p("drafts"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${f==="drafts"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[h.jsx(o2,{className:"w-3 h-3"}),h.jsx("span",{className:"hidden sm:inline",children:"Rascunhos"})]}),h.jsxs("button",{onClick:()=>p("list"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${f==="list"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[h.jsx(s1,{className:"w-3 h-3"}),h.jsx("span",{className:"hidden sm:inline",children:"Atividade"})]})]})}),h.jsx("div",{className:"mt-6",children:f==="grid"?h.jsxs("div",{className:"grid grid-cols-3 gap-1 md:gap-8",children:[_.map(ge=>h.jsxs("div",{className:`aspect-square ${ge.color} relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg`,children:[h.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-2 text-center text-white opacity-0 group-hover:opacity-100 bg-black/20 backdrop-blur-[2px] transition-all duration-300",children:h.jsx("p",{className:"text-[10px] md:text-sm font-bold line-clamp-3",children:ge.title})}),h.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-4 text-center text-white",children:h.jsx("p",{className:"text-[8px] md:text-xs font-black uppercase opacity-20 rotate-12 select-none",children:"OPINIÃO"})})]},ge.id)),_.length===0&&h.jsxs("div",{className:"col-span-3 py-20 text-center",children:[h.jsx("div",{className:"w-16 h-16 border-2 border-gray-900 dark:border-white rounded-full flex items-center justify-center mx-auto mb-4",children:h.jsx(Hh,{className:"w-8 h-8"})}),h.jsx("p",{className:"text-xl font-bold dark:text-white",children:"Nenhuma publicação ainda"})]})]}):f==="drafts"?h.jsx("div",{className:"space-y-4",children:h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsx("div",{className:"col-span-full",children:h.jsx("p",{className:"text-sm text-gray-500 mb-4 italic",children:"Seus rascunhos salvos aparecem aqui. Clique em um deles para continuar editando."})}),h.jsx("div",{className:"col-span-full",children:h.jsx(ru,{userId:r.uid,status:"draft",onUserClick:t,onEdit:e,onPostClick:n})})]})}):h.jsxs("div",{className:"space-y-6",children:[C.map((ge,z)=>{var X;return h.jsxs("div",{className:"bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm",children:[h.jsxs("div",{className:"p-3 flex items-center gap-2 text-xs text-gray-500",children:[ge.type==="like"?h.jsx(Heart,{className:"w-3 h-3 text-red-500 fill-current"}):h.jsx(MessageCircle,{className:"w-3 h-3 text-blue-500"}),h.jsxs("span",{children:[ge.type==="like"?"Curtiu":"Comentou"," • ",uc(ge.date,{addSuffix:!0,locale:lo})]})]}),((X=ge.data.articleSnapshot)==null?void 0:X.type)==="opinion"?h.jsx(iw,{post:ge.data.articleSnapshot,onUserClick:t,onPostClick:n}):h.jsx(Nf,{article:ge.data.articleSnapshot,onUserClick:t,onPostClick:n})]},z)}),C.length===0&&h.jsx("div",{className:"py-20 text-center text-gray-500 italic",children:"Nenhuma atividade recente encontrada."})]})}),a&&h.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:h.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 space-y-6 shadow-2xl",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("h3",{className:"text-xl font-bold dark:text-white",children:"Editar Perfil"}),h.jsx("button",{onClick:()=>l(!1),children:h.jsx(Da,{className:"w-6 h-6 text-gray-400"})})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase mb-1 block",children:"Nome"}),h.jsx("input",{type:"text",value:N.displayName,onChange:ge=>A(z=>({...z,displayName:ge.target.value})),className:"w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase mb-1 block",children:"Bio"}),h.jsx("textarea",{rows:4,value:N.description,onChange:ge=>A(z=>({...z,description:ge.target.value})),className:"w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white resize-none"})]})]}),h.jsxs("button",{onClick:_t,className:"w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",children:[h.jsx(i1,{className:"w-5 h-5"})," Salvar Alterações"]})]})}),S&&h.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:h.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl divide-y dark:divide-gray-800",children:[h.jsxs("button",{onClick:()=>{o(),P(!1)},className:"w-full py-4 text-sm font-bold dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:["Mudar Tema (",i==="light"?"Escuro":"Claro",")"]}),h.jsx("button",{onClick:()=>{T({type:"followers",userIds:E}),P(!1)},className:"w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:"Gerenciar Seguidores"}),h.jsx("button",{onClick:s,className:"w-full py-4 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",children:"Sair da Conta"}),h.jsx("button",{onClick:()=>P(!1),className:"w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:"Cancelar"})]})}),h.jsx(tP,{isOpen:I.type!==null,onClose:()=>T({type:null,userIds:[]}),title:I.type==="followers"?"Seguidores":"Seguindo",userIds:I.userIds,onUserClick:t})]})},KU=({onUserClick:t})=>{const[e,n]=L.useState("notifications"),[r,s]=L.useState([]),[i,o]=L.useState([]),[a,l]=L.useState([]),[c,d]=L.useState(!0),[f,p]=L.useState(!1),{currentUser:y}=xt();L.useEffect(()=>{if(!y)return;const w=Ae(ye(J,"likes"),ve("userId","==",y.uid),en("createdAt","desc")),_=Ae(ye(J,"comments"),ve("userId","==",y.uid),en("createdAt","desc")),v=Ae(ye(J,"notifications"),ve("toUserId","==",y.uid),en("createdAt","desc")),C=it(w,b=>{const I=b.docs.map(T=>{var S;return{id:T.id,...T.data(),createdAt:((S=T.data().createdAt)==null?void 0:S.toDate())||new Date}});s(I)}),F=it(_,b=>{const I=b.docs.map(T=>{var S;return{id:T.id,...T.data(),createdAt:((S=T.data().createdAt)==null?void 0:S.toDate())||new Date}});o(I)}),M=it(v,b=>{const I=b.docs.map(T=>{var S;return{id:T.id,...T.data(),createdAt:((S=T.data().createdAt)==null?void 0:S.toDate())||new Date}});l(I),d(!1)});return()=>{C(),F(),M()}},[y]);const E=async()=>{if(!y)return;const w=q_(J);a.filter(_=>!_.read).forEach(_=>{const v=Re(J,"notifications",_.id);w.update(v,{read:!0})}),await w.commit()};if(!y)return h.jsx("div",{className:"text-center py-12",children:h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Você precisa fazer login para ver suas ações."})});const k=[{id:"notifications",name:"Notificações",icon:Tm,count:a.filter(w=>!w.read).length},{id:"likes",name:"Curtidas",icon:zn,count:r.length},{id:"comments",name:"Comentários",icon:Li,count:i.length}],R=()=>{if(e==="notifications")return a.length===0?h.jsxs("div",{className:"text-center py-12",children:[h.jsx(Tm,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}),h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Você ainda não tem notificações"})]}):h.jsxs("div",{className:"space-y-4",children:[h.jsx("div",{className:"flex justify-end mb-2",children:h.jsxs("button",{onClick:E,className:"text-xs text-primary font-bold hover:underline flex items-center gap-1",children:[h.jsx(e2,{className:"w-3 h-3"}),"Marcar todas como lidas"]})}),a.map(_=>h.jsx("div",{className:`p-4 rounded-xl border ${_.read?"bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700":"bg-blue-50/50 dark:bg-primary/5 border-primary/20"} transition-colors cursor-pointer`,onClick:()=>xh(Re(J,"notifications",_.id),{read:!0}),children:h.jsxs("div",{className:"flex gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden cursor-pointer",onClick:v=>{v.stopPropagation(),t==null||t(_.fromUserId)},children:_.fromUserPhoto?h.jsx("img",{src:_.fromUserPhoto,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-full h-full p-2 text-gray-400"})}),h.jsxs("div",{className:"flex-1",children:[h.jsxs("p",{className:"text-sm text-gray-900 dark:text-white",children:[h.jsxs("span",{className:"font-bold hover:underline cursor-pointer",onClick:v=>{v.stopPropagation(),t==null||t(_.fromUserId)},children:["@",_.fromUserName]})," ",_.type==="like"&&"curtiu seu artigo",_.type==="comment"&&"comentou no seu artigo",_.type==="reply"&&"respondeu seu comentário",_.type==="system"&&"enviou uma mensagem",h.jsxs("span",{className:"font-medium text-primary",children:[' "',_.articleTitle,'"']})]}),_.commentContent&&h.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1 italic border-l-2 border-gray-200 dark:border-gray-700 pl-2",children:['"',_.commentContent,'"']}),h.jsx("p",{className:"text-[10px] text-gray-400 mt-2",children:XA(_.createdAt,"dd 'de' MMMM 'às' HH:mm",{locale:lo})})]}),!_.read&&h.jsx("div",{className:"w-2 h-2 bg-primary rounded-full self-center"})]})},_.id))]});const w=e==="likes"?r:i;return w.length===0?h.jsxs("div",{className:"text-center py-12",children:[e==="likes"?h.jsx(zn,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}):h.jsx(Li,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}),h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:e==="likes"?"Você ainda não curtiu nenhuma notícia":"Você ainda não fez nenhum comentário"})]}):h.jsx("div",{className:"space-y-6",children:w.map(_=>_.articleSnapshot?h.jsxs("div",{className:"relative pl-4 border-l-2 border-gray-200 dark:border-gray-700",children:[e==="comments"&&h.jsxs("div",{className:"mb-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300 text-sm italic",children:['"',_.content,'"']}),_.articleSnapshot.type==="opinion"?h.jsx(iw,{post:_.articleSnapshot,onLoginRequired:()=>p(!0),onUserClick:t}):h.jsx(Nf,{article:_.articleSnapshot,onLoginRequired:()=>p(!0),onUserClick:t})]},_.id):null)})};return h.jsxs("section",{className:"max-w-4xl mx-auto",children:[h.jsxs("div",{className:"mb-10 px-4 md:px-0",children:[h.jsx("h1",{className:"text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight",children:e==="notifications"?"Notificações":"Minhas Ações"}),h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:e==="notifications"?"Fique por dentro de todas as suas interações":"Seu histórico completo de interações na plataforma"})]}),h.jsx("div",{className:"border-b border-gray-100 dark:border-gray-800 mb-6",children:h.jsx("nav",{className:"flex w-full",children:k.map(w=>{const _=w.icon;return h.jsxs("button",{id:w.id,"aria-label":w.name,onClick:()=>n(w.id),className:`flex-1 flex items-center justify-center space-x-2 py-3 px-1 border-b-2 font-bold text-xs uppercase tracking-wider transition-colors ${e===w.id?"border-primary text-primary":"border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`,children:[h.jsx(_,{className:"w-5 h-5 shrink-0"}),h.jsx("span",{className:"hidden sm:inline",children:w.name}),w.count>0&&h.jsx("span",{className:`${w.id==="notifications"?"bg-primary text-white":"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"} px-1.5 py-0.5 rounded-full text-[9px] font-black min-w-[18px] text-center`,children:w.count})]},w.id)})})}),c?h.jsxs("div",{className:"text-center py-8 flex flex-col items-center gap-2 text-gray-500",children:[h.jsx(Tm,{className:"w-8 h-8 animate-bounce"}),"Carregando..."]}):R(),h.jsx(aw,{isOpen:f,onClose:()=>p(!1)})]})},QU=({userId:t,onBack:e,onUserClick:n,onLoginRequired:r})=>{const{currentUser:s}=xt(),[i,o]=L.useState(null),[a,l]=L.useState("grid"),[c,d]=L.useState([]),[f,p]=L.useState([]),[y,E]=L.useState(!0),[k,R]=L.useState(!1),[w,_]=L.useState(!1),[v,C]=L.useState([]),[F,M]=L.useState([]),[b,I]=L.useState({type:null,userIds:[]});if(L.useEffect(()=>{(async()=>{try{if(E(!0),s){const[Z,me]=await Promise.all([fr(Re(J,"blocks",`${s.uid}_${t}`)),fr(Re(J,"blocks",`${t}_${s.uid}`))]);if(me.exists()){_(!0),E(!1);return}R(Z.exists())}const[P,N,A,he]=await Promise.all([fr(Re(J,"users",t)),Mn(Ae(ye(J,"follows"),ve("followingId","==",t))),Mn(Ae(ye(J,"follows"),ve("followerId","==",t))),Mn(Ae(ye(J,"opinion_posts"),ve("userId","==",t),en("publishedAt","desc")))]);P.exists()&&o(P.data()),C(N.docs.map(Z=>Z.data().followerId)),M(A.docs.map(Z=>Z.data().followingId)),p(he.docs.map(Z=>({id:Z.id,...Z.data()})));const Qe=Ae(ye(J,"likes"),ve("userId","==",t),en("createdAt","desc")),_t=Ae(ye(J,"comments"),ve("userId","==",t),en("createdAt","desc")),[ge,z]=await Promise.all([Mn(Qe),Mn(_t)]),X=ge.docs.map(Z=>{var me;return{type:"like",data:Z.data(),date:(me=Z.data().createdAt)!=null&&me.toDate?Z.data().createdAt.toDate():new Date(Z.data().createdAt)}}),ne=z.docs.map(Z=>{var me;return{type:"comment",data:Z.data(),date:(me=Z.data().createdAt)!=null&&me.toDate?Z.data().createdAt.toDate():new Date(Z.data().createdAt)}});d([...X,...ne].sort((Z,me)=>me.date.getTime()-Z.date.getTime()).filter(Z=>Z.data.articleSnapshot))}catch(P){console.error("Error fetching public profile:",P)}finally{E(!1)}})()},[t,s]),y)return h.jsx("div",{className:"text-center py-20",children:h.jsx(Mi,{className:"w-8 h-8 animate-spin mx-auto text-gray-400"})});if(!i||w)return h.jsxs("div",{className:"text-center py-20",children:[h.jsx("p",{className:"text-gray-500",children:"Usuário não encontrado."}),h.jsx("button",{onClick:e,className:"mt-4 text-primary font-bold",children:"Voltar"})]});const T=async()=>{if(!s){r();return}window.confirm("Bloquear este usuário?")&&(await zU(s.uid,t),_e.success("Usuário bloqueado"),e())};return h.jsxs("section",{className:"max-w-4xl mx-auto px-4 py-6 md:py-10",children:[h.jsxs("button",{onClick:e,className:"mb-6 flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors",children:[h.jsx(QN,{className:"w-5 h-5 mr-2"})," ",h.jsxs("span",{className:"font-bold",children:["@",i.username]})]}),h.jsxs("header",{className:"flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10",children:[h.jsx("div",{className:"relative shrink-0 mx-auto md:mx-0",children:h.jsx("div",{className:"w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px]",children:h.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]",children:h.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden",children:i.photoURL?h.jsx("img",{src:i.photoURL,alt:i.displayName,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-12 h-12 md:w-20 md:h-20 text-gray-300"})})})})}),h.jsxs("div",{className:"flex-1 w-full space-y-6",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[h.jsxs("h1",{className:"text-xl font-normal dark:text-white truncate",children:["@",i.username]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(ow,{userId:t,onLoginRequired:r,className:"flex-1 md:flex-none px-6 py-1.5"}),h.jsx("button",{onClick:T,className:"p-1.5 text-gray-400 hover:text-red-500 transition-colors",title:"Bloquear",children:h.jsx(xy,{className:"w-6 h-6"})})]})]}),h.jsxs("div",{className:"flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800",children:[h.jsxs("div",{className:"text-center md:text-left",children:[h.jsx("span",{className:"block md:inline font-bold dark:text-white",children:f.length}),h.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"publicações"})]}),h.jsxs("button",{onClick:()=>I({type:"followers",userIds:v}),className:"text-center md:text-left",children:[h.jsx("span",{className:"block md:inline font-bold dark:text-white",children:v.length}),h.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguidores"})]}),h.jsxs("button",{onClick:()=>I({type:"following",userIds:F}),className:"text-center md:text-left",children:[h.jsx("span",{className:"block md:inline font-bold dark:text-white",children:F.length}),h.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguindo"})]})]}),h.jsxs("div",{className:"hidden md:block",children:[h.jsx("p",{className:"font-bold dark:text-white",children:i.displayName}),h.jsx("p",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:i.description})]})]})]}),h.jsxs("div",{className:"md:hidden mb-10",children:[h.jsx("p",{className:"font-bold dark:text-white",children:i.displayName}),h.jsx("p",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:i.description})]}),h.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800",children:h.jsxs("div",{className:"flex justify-center gap-16 -mt-[1px]",children:[h.jsxs("button",{onClick:()=>l("grid"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${a==="grid"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[h.jsx(Ey,{className:"w-3 h-3"})," ",h.jsx("span",{className:"hidden sm:inline",children:"Publicações"})]}),h.jsxs("button",{onClick:()=>l("list"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${a==="list"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[h.jsx(s1,{className:"w-3 h-3"})," ",h.jsx("span",{className:"hidden sm:inline",children:"Atividade"})]})]})}),a==="grid"?h.jsxs("div",{className:"grid grid-cols-3 gap-1 md:gap-8",children:[f.map(S=>h.jsx("div",{className:`aspect-square ${S.color} relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg`,children:h.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-2 text-center text-white opacity-0 group-hover:opacity-100 bg-black/20 backdrop-blur-[2px] transition-all duration-300",children:h.jsx("p",{className:"text-[10px] md:text-sm font-bold line-clamp-3",children:S.title})})},S.id)),f.length===0&&h.jsx("div",{className:"col-span-3 py-20 text-center text-gray-400",children:"Nenhuma publicação ainda."})]}):h.jsxs("div",{className:"space-y-6",children:[c.map((S,P)=>h.jsxs("div",{className:"bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm",children:[h.jsxs("div",{className:"p-3 flex items-center gap-2 text-xs text-gray-500",children:[S.type==="like"?h.jsx(zn,{className:"w-3 h-3 text-red-500 fill-current"}):h.jsx(Li,{className:"w-3 h-3 text-blue-500"}),h.jsxs("span",{children:[S.type==="like"?"Curtiu":"Comentou"," • ",uc(S.date,{addSuffix:!0,locale:lo})]})]}),h.jsx(Nf,{article:S.data.articleSnapshot,onUserClick:n,onLoginRequired:r})]},P)),c.length===0&&h.jsx("div",{className:"text-center py-10 text-gray-400",children:"Nenhuma atividade recente."})]}),h.jsx(tP,{isOpen:b.type!==null,onClose:()=>I({type:null,userIds:[]}),title:b.type==="followers"?"Seguidores":"Seguindo",userIds:b.userIds,onUserClick:n})]})},OE=[{name:"Blue",value:"bg-blue-600"},{name:"Red",value:"bg-red-600"},{name:"Green",value:"bg-green-600"},{name:"Purple",value:"bg-purple-600"},{name:"Orange",value:"bg-orange-600"},{name:"Pink",value:"bg-pink-600"},{name:"Slate",value:"bg-slate-800"}],YU=({onSuccess:t,onCancel:e,editingPost:n})=>{const{currentUser:r}=xt(),[s,i]=L.useState((n==null?void 0:n.title)||""),[o,a]=L.useState((n==null?void 0:n.content)||""),[l,c]=L.useState((n==null?void 0:n.authorName)||(r==null?void 0:r.displayName)||""),[d,f]=L.useState((n==null?void 0:n.color)||OE[0].value),[p,y]=L.useState(!1),[E,k]=L.useState(!1),R=async _=>{if(r){if(!s||!o){_e.error("Preencha o título e o conteúdo");return}k(!0);try{if(_==="published"){y(!0);const v=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:`${s}
${o}`})});if(!v.ok){_e.error("Erro na análise da IA. O post será salvo como rascunho."),await w("draft"),t();return}const C=await v.json();if(y(!1),!C.safe){_e.error(`Violação: ${C.reason}. O post será salvo como rascunho.`),await w("draft"),t();return}}await w(_),_==="published"?_e.success("Artigo publicado!"):_e.success('Rascunho salvo! Você pode encontrá-lo na aba "Rascunhos" do seu perfil.'),t()}catch(v){console.error("Error saving post:",v),_e.error("Erro ao salvar post")}finally{k(!1),y(!1)}}},w=async _=>{const v={userId:r==null?void 0:r.uid,userName:(r==null?void 0:r.displayName)||"Usuário",userPhoto:r==null?void 0:r.photoURL,title:s,content:o,authorName:l,color:d,status:_,publishedAt:Os(),likesCount:(n==null?void 0:n.likesCount)||0,commentsCount:(n==null?void 0:n.commentsCount)||0,type:"opinion"};if(n!=null&&n.id){const{doc:C,updateDoc:F}=await QT(async()=>{const{doc:M,updateDoc:b}=await Promise.resolve().then(()=>sA);return{doc:M,updateDoc:b}},void 0);await F(C(J,"opinionPosts",n.id),v)}else await Xo(ye(J,"opinionPosts"),v)};return h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Criar Artigo de Opinião"}),h.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 dark:text-gray-400",children:"Cancelar"})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Título do Artigo"}),h.jsx("input",{type:"text",value:s,onChange:_=>i(_.target.value),placeholder:"Dê um título impactante",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Conteúdo"}),h.jsx("textarea",{rows:6,value:o,onChange:_=>a(_.target.value),placeholder:"Escreva seu artigo aqui...",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome do Autor (Como aparecerá)"}),h.jsx("input",{type:"text",value:l,onChange:_=>c(_.target.value),className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Cor do Card"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:OE.map(_=>h.jsx("button",{onClick:()=>f(_.value),className:`w-8 h-8 rounded-full ${_.value} ${d===_.value?"ring-2 ring-offset-2 ring-primary":""} transition-all`},_.value))})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-gray-100 dark:border-gray-700",children:[h.jsx("p",{className:"text-sm font-medium text-gray-500 mb-2",children:"Prévia do Card:"}),h.jsxs("div",{className:`${d} rounded-xl p-6 text-white shadow-lg min-h-[200px] flex flex-col justify-between`,children:[h.jsx("h3",{className:"text-2xl font-bold line-clamp-3",children:s||"Título do seu Artigo"}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm opacity-90",children:l||"Seu Nome"}),h.jsxs("p",{className:"text-xs opacity-70",children:["@",(r==null?void 0:r.displayName)||"usuario"]})]})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-6",children:[h.jsxs("button",{onClick:()=>R("draft"),disabled:E,className:"flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50",children:[h.jsx(i1,{className:"w-4 h-4"}),"Salvar Rascunho"]}),h.jsx("button",{onClick:()=>R("published"),disabled:E,className:"flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50",children:p?h.jsxs(h.Fragment,{children:[h.jsx(Mi,{className:"w-4 h-4 animate-spin"}),"Analisando com IA..."]}):h.jsxs(h.Fragment,{children:[h.jsx(Ty,{className:"w-4 h-4"}),"Publicar Artigo"]})})]})]})]})},JU=({post:t,onClose:e,onUserClick:n})=>{const{interactions:r,isLiked:s,addComment:i,toggleLike:o,shareArticle:a}=rw(t);return h.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm md:p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-3xl md:rounded-2xl overflow-y-auto flex flex-col relative",children:[h.jsxs("div",{className:"sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center",children:[h.jsxs("button",{onClick:()=>n==null?void 0:n(t.userId),className:"flex items-center gap-3 group",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden",children:t.userPhoto?h.jsx("img",{src:t.userPhoto,alt:t.userName,className:"w-full h-full object-cover"}):h.jsx(Hn,{className:"w-6 h-6 text-primary"})}),h.jsxs("div",{className:"text-left",children:[h.jsx("p",{className:"font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors",children:t.userName}),h.jsxs("p",{className:"text-xs text-gray-500",children:["@",t.userName.toLowerCase().replace(/ /g,"")]})]})]}),h.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",children:h.jsx(Da,{className:"w-6 h-6 text-gray-500"})})]}),h.jsxs("div",{className:"flex-1 p-6 space-y-6",children:[h.jsxs("div",{className:"aspect-[4/3] w-full rounded-2xl p-8 flex flex-col justify-end shadow-2xl relative overflow-hidden",style:{background:`linear-gradient(135deg, ${t.cardColor||"#10b981"} 0%, ${t.cardColor||"#10b981"}dd 100%)`},children:[h.jsx("div",{className:"absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-wider",children:"Artigo de Opinião"}),h.jsx("h1",{className:"text-2xl md:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg",children:t.title}),h.jsxs("div",{className:"flex items-center gap-2 text-white/90 text-sm font-medium",children:[h.jsx(XN,{className:"w-4 h-4"}),(()=>{var c,d;const l=t.publishedAt instanceof Date?t.publishedAt:((d=(c=t.publishedAt)==null?void 0:c.toDate)==null?void 0:d.call(c))||new Date(t.publishedAt);return uc(l,{addSuffix:!0,locale:lo})})()]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("h2",{className:"text-xl font-bold dark:text-white",children:"Conteúdo"}),h.jsx("div",{className:"text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-lg",children:t.content})]}),h.jsx("div",{className:"pt-6 border-t border-gray-100 dark:border-gray-800",children:h.jsx("div",{className:"flex items-center justify-between mb-6",children:h.jsxs("div",{className:"flex items-center space-x-6",children:[h.jsxs("button",{onClick:o,className:`flex items-center gap-2 transition-all ${s?"text-red-500":"text-gray-900 dark:text-white"}`,children:[h.jsx(zn,{className:`w-8 h-8 ${s?"fill-current":""}`,strokeWidth:2.5}),h.jsx("span",{className:"font-bold",children:r.likesCount})]}),h.jsxs("div",{className:"flex items-center gap-2 text-gray-900 dark:text-white",children:[h.jsx(Li,{className:"w-8 h-8",strokeWidth:2.5}),h.jsx("span",{className:"font-bold",children:r.commentsCount})]}),h.jsx("button",{onClick:()=>a(`${window.location.origin}/post/${t.id}`,t.title),className:"text-gray-900 dark:text-white hover:text-primary transition-colors",children:h.jsx(Gh,{className:"w-8 h-8",strokeWidth:2.5})})]})})}),h.jsx(sw,{articleId:t.id,comments:r.comments,onUserClick:n,onAddComment:i})]})]})})},XU=(t,e)=>{if(!t)return()=>{};const n=Ae(ye(J,"notifications"),ve("toUserId","==",t),ve("read","==",!1),en("createdAt","desc"));return it(n,s=>{e(s.size)})},ZU=()=>{const{currentUser:t}=xt();L.useEffect(()=>{if(!t)return;(async()=>{try{if(!("serviceWorker"in navigator)||!("PushManager"in window))return;const n=await navigator.serviceWorker.register("/push-sw.js");let r=await n.pushManager.getSubscription();if(!r){if(await Notification.requestPermission()!=="granted")return;r=await n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:"BMxqvAzS_x-hWg_XeedbM9lN0EzH_5F-ZpMid_aQJCFC07mdhRya0Rw9doypEYVLEBCi69XygQucwpW6Wo9jXis"})}r&&await Ou(Re(J,"pushSubscriptions",t.uid),{subscription:JSON.stringify(r),updatedAt:new Date})}catch(n){console.error("Push registration error:",n)}})()},[t])},e$=()=>{const[t,e]=L.useState("feed"),[n,r]=L.useState(null),[s,i]=L.useState(null),[o,a]=L.useState(""),[l,c]=L.useState(null),[d,f]=L.useState(!1),[p,y]=L.useState(0),{currentUser:E}=xt();L.useEffect(()=>{const M=async()=>{var T;const I=window.location.pathname.match(/^\/post\/([^/]+)/);if(I){const S=I[1];if((s==null?void 0:s.id)===S)return;try{const{doc:P,getDoc:N}=await QT(async()=>{const{doc:he,getDoc:Qe}=await Promise.resolve().then(()=>sA);return{doc:he,getDoc:Qe}},void 0),A=await N(P(J,"opinionPosts",S));if(A.exists()){const he=A.data();i({id:A.id,...he,publishedAt:((T=he.publishedAt)==null?void 0:T.toDate())||new Date})}}catch(P){console.error("Error loading deep-linked post:",P)}}else i(null)};return M(),window.addEventListener("popstate",M),()=>window.removeEventListener("popstate",M)},[s==null?void 0:s.id]);const k=M=>{i(M),window.history.pushState({postId:M.id},"",`/post/${M.id}`)},R=M=>{r(M),e("create-post")};ZU(),L.useEffect(()=>{if(E){const M=XU(E.uid,b=>{y(b)});return()=>M()}},[E]);const w=M=>{if(!E&&(M==="profile"||M==="my-actions"||M==="create-post"||M==="notifications")){f(!0);return}e(M),c(null),M!=="categories"&&a("")},_=M=>{a(M)},v=M=>{E&&M===E.uid?w("profile"):(c(M),e("user-profile"))},C=()=>{if(t==="user-profile"&&l)return h.jsx(QU,{userId:l,onBack:()=>{c(null),e("feed")},onUserClick:v,onLoginRequired:()=>f(!0)});if(t==="categories"&&o)return h.jsx("div",{className:"pb-16 md:pb-0",children:h.jsx(ru,{category:o,onUserClick:v})});switch(t){case"feed":return h.jsx(ru,{onUserClick:v,onPostClick:k});case"categories":return h.jsx(WU,{onCategorySelect:_});case"search":return h.jsx(HU,{onUserClick:v,onPostClick:k});case"profile":return h.jsx(GU,{onUserClick:v,onEditDraft:R,onPostClick:k});case"my-actions":case"notifications":return h.jsx(KU,{onUserClick:v,onPostClick:k});case"create-post":return h.jsx("div",{className:"max-w-2xl mx-auto py-4",children:h.jsx(YU,{editingPost:n,onSuccess:()=>{r(null),e("feed")},onCancel:()=>{r(null),e("feed")}})});default:return h.jsx(ru,{onUserClick:v})}},F=()=>t==="categories"&&o?{financas:"Finanças",saude:"Saúde",educacao:"Educação",esportes:"Esportes",ciencias:"Ciências",tecnologia:"Tecnologia"}[o]||o:null;return h.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors flex flex-col",children:[h.jsx("header",{className:"md:hidden fixed top-0 left-0 right-0 z-40 glass border-b border-gray-100 dark:border-gray-800 w-full max-w-full overflow-hidden",children:h.jsxs("div",{className:"flex items-center justify-between px-4 h-14 w-full",children:[h.jsx("div",{className:"flex items-center space-x-1 cursor-pointer select-none",onClick:()=>w("feed"),children:h.jsx("span",{className:"font-serif italic text-xl font-black text-gray-900 dark:text-white tracking-tight",children:"On News"})}),h.jsxs("div",{className:"flex items-center space-x-5",children:[h.jsx("button",{onClick:()=>w("create-post"),className:"text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity",children:h.jsx(Hh,{className:"w-6 h-6",strokeWidth:2})}),h.jsxs("button",{onClick:()=>w("notifications"),className:"relative text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity",children:[h.jsx(zn,{className:"w-6 h-6",strokeWidth:2}),p>0&&h.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"})]})]})]})}),h.jsxs("div",{className:"flex flex-1 w-full mt-14 md:mt-0",children:[h.jsx("div",{className:"hidden md:block",children:h.jsx(G5,{activeItem:t,onItemChange:w})}),h.jsx("main",{className:"flex-1 min-w-0 pb-20 md:pb-0 md:pl-64",children:h.jsxs("div",{className:"max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-10",children:[(o||t==="categories")&&!l&&h.jsx("div",{className:"mb-6",children:o&&h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("button",{onClick:()=>a(""),className:"text-primary dark:text-white hover:underline text-sm",children:"← Voltar"}),h.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:F()})]})}),h.jsx("div",{className:"animate-in fade-in duration-500",children:C()})]})})]}),h.jsx(K5,{activeItem:t,onItemChange:w}),h.jsx(Q5,{}),h.jsx(aw,{isOpen:d,onClose:()=>f(!1)}),s&&h.jsx(JU,{post:s,onClose:()=>{i(null),window.history.pushState({},"","/")},onUserClick:M=>{i(null),window.history.pushState({},"","/"),v(M)}}),h.jsx(HN,{position:"top-right",toastOptions:{duration:4e3,className:"dark:bg-gray-800 dark:text-white"}})]})};function t$(){return h.jsx(H5,{children:h.jsx(W5,{children:h.jsx(e$,{})})})}KT(document.getElementById("root")).render(h.jsx(L.StrictMode,{children:h.jsx(t$,{})}));
