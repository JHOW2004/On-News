var As=Object.defineProperty;var Cs=(e,t,r)=>t in e?As(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var je=(e,t,r)=>Cs(e,typeof t!="symbol"?t+"":t,r);import{r as m,a as Es,g as Tr,R as H}from"./react-F9Y4d3HK.js";import{_ as We,C as Be,r as Me,S as _s,a as Is,F as Sr,g as ke,b as st,c as Ds,d as Ar,i as qa,p as Os,u as Ps,e as Ms,E as Cr,o as Er,L as Rs,f as $s,h as Ha,v as Wa,j as ra,k as Ls,l as Ba,m as Gt,n as Fs,q as Us,s as qs,t as Hs,w as X,x as F,y as Ws,z as Bs,A as Pe,B as zs,D as mr,G as hr,H as Vs,I as $,J as ne,K as C,M as _,N as mt,O as ze,P as _r,Q as za,R as ye,T as Va,U as _t,V as Ys}from"./firebase-W_O5dJXb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Ya={exports:{}},Lt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=m,Gs=Symbol.for("react.element"),Xs=Symbol.for("react.fragment"),Qs=Object.prototype.hasOwnProperty,Js=Ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zs={key:!0,ref:!0,__self:!0,__source:!0};function Ka(e,t,r){var a,s={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)Qs.call(t,a)&&!Zs.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)s[a]===void 0&&(s[a]=t[a]);return{$$typeof:Gs,type:e,key:i,ref:o,props:s,_owner:Js.current}}Lt.Fragment=Xs;Lt.jsx=Ka;Lt.jsxs=Ka;Ya.exports=Lt;var n=Ya.exports,Ga,aa=Es;Ga=aa.createRoot,aa.hydrateRoot;var It={},ei=()=>{window.va||(window.va=function(...t){window.vaq||(window.vaq=[]),window.vaq.push(t)})},ti="@vercel/analytics",ri="2.0.1";function Xa(){return typeof window<"u"}function Qa(){try{const e="production"}catch{}return"production"}function ai(e="auto"){if(e==="auto"){window.vam=Qa();return}window.vam=e}function ni(){return(Xa()?window.vam:Qa())||"production"}function Ir(){return ni()==="development"}function si(e){return e.scriptSrc?et(e.scriptSrc):Ir()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?et(`${e.basePath}/insights/script.js`):"/_vercel/insights/script.js"}function ii(e,t){var r;let a=e;if(t)try{a={...(r=JSON.parse(t))==null?void 0:r.analytics,...e}}catch{}ai(a.mode);const s={sdkn:ti+(a.framework?`/${a.framework}`:""),sdkv:ri};return a.disableAutoTrack&&(s.disableAutoTrack="1"),a.viewEndpoint&&(s.viewEndpoint=et(a.viewEndpoint)),a.eventEndpoint&&(s.eventEndpoint=et(a.eventEndpoint)),a.sessionEndpoint&&(s.sessionEndpoint=et(a.sessionEndpoint)),Ir()&&a.debug===!1&&(s.debug="false"),a.dsn&&(s.dsn=a.dsn),a.endpoint?s.endpoint=a.endpoint:a.basePath&&(s.endpoint=et(`${a.basePath}/insights`)),{beforeSend:a.beforeSend,src:si(a),dataset:s}}function et(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function oi(e={debug:!0},t){var r;if(!Xa())return;const{beforeSend:a,src:s,dataset:i}=ii(e,t);if(ei(),a&&((r=window.va)==null||r.call(window,"beforeSend",a)),document.head.querySelector(`script[src*="${s}"]`))return;const o=document.createElement("script");o.src=s;for(const[c,l]of Object.entries(i))o.dataset[c]=l;o.defer=!0,o.onerror=()=>{const c=Ir()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${s}. ${c}`)},document.head.appendChild(o)}function ci({route:e,path:t}){var r;(r=window.va)==null||r.call(window,"pageview",{route:e,path:t})}function li(){if(!(typeof process>"u"||typeof It>"u"))return It.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function di(){if(!(typeof process>"u"||typeof It>"u"))return It.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function ui(e){return m.useEffect(()=>{var t;e.beforeSend&&((t=window.va)==null||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),m.useEffect(()=>{oi({framework:e.framework||"react",basePath:e.basePath??li(),...e.route!==void 0&&{disableAutoTrack:!0},...e},e.configString??di())},[]),m.useEffect(()=>{e.route&&e.path&&ci({route:e.route,path:e.path})},[e.route,e.path]),null}var mi=typeof Element<"u",hi=typeof Map=="function",fi=typeof Set=="function",pi=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Tt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,s;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!Tt(e[a],t[a]))return!1;return!0}var i;if(hi&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(a=i.next()).done;)if(!t.has(a.value[0]))return!1;for(i=e.entries();!(a=i.next()).done;)if(!Tt(a.value[1],t.get(a.value[0])))return!1;return!0}if(fi&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(a=i.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(pi&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[a]))return!1;if(mi&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((s[a]==="_owner"||s[a]==="__v"||s[a]==="__o")&&e.$$typeof)&&!Tt(e[s[a]],t[s[a]]))return!1;return!0}return e!==e&&t!==t}var gi=function(t,r){try{return Tt(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}};const yi=Tr(gi);var xi=function(e,t,r,a,s,i,o,c){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,a,s,i,o,c],u=0;l=new Error(t.replace(/%s/g,function(){return d[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},bi=xi;const na=Tr(bi);var wi=function(t,r,a,s){var i=a?a.call(s,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var o=Object.keys(t),c=Object.keys(r);if(o.length!==c.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(r),d=0;d<o.length;d++){var u=o[d];if(!l(u))return!1;var h=t[u],f=r[u];if(i=a?a.call(s,h,f,u):void 0,i===!1||i===void 0&&h!==f)return!1}return!0};const vi=Tr(wi);var Ja=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Ja||{}),Xt={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},sa=Object.values(Ja),Ft={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Za=Object.entries(Ft).reduce((e,[t,r])=>(e[r]=t,e),{}),fe="data-rh",tt={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},rt=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const a=e[r];if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}return null},ki=e=>{let t=rt(e,"title");const r=rt(e,tt.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,()=>t);const a=rt(e,tt.DEFAULT_TITLE);return t||a||void 0},Ni=e=>rt(e,tt.ON_CHANGE_CLIENT_STATE)||(()=>{}),Qt=(e,t)=>t.filter(r=>typeof r[e]<"u").map(r=>r[e]).reduce((r,a)=>({...r,...a}),{}),ji=(e,t)=>t.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,a)=>{if(!r.length){const s=Object.keys(a);for(let i=0;i<s.length;i+=1){const c=s[i].toLowerCase();if(e.indexOf(c)!==-1&&a[c])return r.concat(a)}}return r},[]),Ti=e=>console&&typeof console.warn=="function"&&console.warn(e),ot=(e,t,r)=>{const a={};return r.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&Ti(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,i)=>{const o={};i.filter(l=>{let d;const u=Object.keys(l);for(let f=0;f<u.length;f+=1){const p=u[f],g=p.toLowerCase();t.indexOf(g)!==-1&&!(d==="rel"&&l[d].toLowerCase()==="canonical")&&!(g==="rel"&&l[g].toLowerCase()==="stylesheet")&&(d=g),t.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(d=p)}if(!d||!l[d])return!1;const h=l[d].toLowerCase();return a[d]||(a[d]={}),o[d]||(o[d]={}),a[d][h]?!1:(o[d][h]=!0,!0)}).reverse().forEach(l=>s.push(l));const c=Object.keys(o);for(let l=0;l<c.length;l+=1){const d=c[l],u={...a[d],...o[d]};a[d]=u}return s},[]).reverse()},Si=(e,t)=>{if(Array.isArray(e)&&e.length){for(let r=0;r<e.length;r+=1)if(e[r][t])return!0}return!1},Ai=e=>({baseTag:ji(["href"],e),bodyAttributes:Qt("bodyAttributes",e),defer:rt(e,tt.DEFER),encode:rt(e,tt.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Qt("htmlAttributes",e),linkTags:ot("link",["rel","href"],e),metaTags:ot("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:ot("noscript",["innerHTML"],e),onChangeClientState:Ni(e),scriptTags:ot("script",["src","innerHTML"],e),styleTags:ot("style",["cssText"],e),title:ki(e),titleAttributes:Qt("titleAttributes",e),prioritizeSeoTags:Si(e,tt.PRIORITIZE_SEO_TAGS)}),en=e=>Array.isArray(e)?e.join(""):e,Ci=(e,t)=>{const r=Object.keys(e);for(let a=0;a<r.length;a+=1)if(t[r[a]]&&t[r[a]].includes(e[r[a]]))return!0;return!1},Jt=(e,t)=>Array.isArray(e)?e.reduce((r,a)=>(Ci(a,t)?r.priority.push(a):r.default.push(a),r),{priority:[],default:[]}):{default:e,priority:[]},ia=(e,t)=>({...e,[t]:void 0}),Ei=["noscript","script","style"],fr=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),tn=e=>Object.keys(e).reduce((t,r)=>{const a=typeof e[r]<"u"?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${a}`:a},""),_i=(e,t,r,a)=>{const s=tn(r),i=en(t);return s?`<${e} ${fe}="true" ${s}>${fr(i,a)}</${e}>`:`<${e} ${fe}="true">${fr(i,a)}</${e}>`},Ii=(e,t,r=!0)=>t.reduce((a,s)=>{const i=s,o=Object.keys(i).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const h=typeof i[u]>"u"?u:`${u}="${fr(i[u],r)}"`;return d?`${d} ${h}`:h},""),c=i.innerHTML||i.cssText||"",l=Ei.indexOf(e)===-1;return`${a}<${e} ${fe}="true" ${o}${l?"/>":`>${c}</${e}>`}`},""),rn=(e,t={})=>Object.keys(e).reduce((r,a)=>{const s=Ft[a];return r[s||a]=e[a],r},t),Di=(e,t,r)=>{const a={key:t,[fe]:!0},s=rn(r,a);return[H.createElement("title",s,t)]},St=(e,t)=>t.map((r,a)=>{const s={key:a,[fe]:!0};return Object.keys(r).forEach(i=>{const c=Ft[i]||i;if(c==="innerHTML"||c==="cssText"){const l=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[c]=r[i]}),H.createElement(e,s)}),ce=(e,t,r=!0)=>{switch(e){case"title":return{toComponent:()=>Di(e,t.title,t.titleAttributes),toString:()=>_i(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>rn(t),toString:()=>tn(t)};default:return{toComponent:()=>St(e,t),toString:()=>Ii(e,t,r)}}},Oi=({metaTags:e,linkTags:t,scriptTags:r,encode:a})=>{const s=Jt(e,Xt.meta),i=Jt(t,Xt.link),o=Jt(r,Xt.script);return{priorityMethods:{toComponent:()=>[...St("meta",s.priority),...St("link",i.priority),...St("script",o.priority)],toString:()=>`${ce("meta",s.priority,a)} ${ce("link",i.priority,a)} ${ce("script",o.priority,a)}`},metaTags:s.default,linkTags:i.default,scriptTags:o.default}},Pi=e=>{const{baseTag:t,bodyAttributes:r,encode:a=!0,htmlAttributes:s,noscriptTags:i,styleTags:o,title:c="",titleAttributes:l,prioritizeSeoTags:d}=e;let{linkTags:u,metaTags:h,scriptTags:f}=e,p={toComponent:()=>[],toString:()=>""};return d&&({priorityMethods:p,linkTags:u,metaTags:h,scriptTags:f}=Oi(e)),{priority:p,base:ce("base",t,a),bodyAttributes:ce("bodyAttributes",r,a),htmlAttributes:ce("htmlAttributes",s,a),link:ce("link",u,a),meta:ce("meta",h,a),noscript:ce("noscript",i,a),script:ce("script",f,a),style:ce("style",o,a),title:ce("title",{title:c,titleAttributes:l},a)}},pr=Pi,wt=[],Dr=!!(typeof window<"u"&&window.document&&window.document.createElement),gr=class{constructor(e,t){je(this,"instances",[]);je(this,"canUseDOM",Dr);je(this,"context");je(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?wt:this.instances,add:e=>{(this.canUseDOM?wt:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?wt:this.instances).indexOf(e);(this.canUseDOM?wt:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=pr({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Mi=parseInt(H.version.split(".")[0],10),yr=Mi>=19,Ri={},an=H.createContext(Ri),qe,nn=(qe=class extends m.Component{constructor(r){super(r);je(this,"helmetData");yr?this.helmetData=null:this.helmetData=new gr(this.props.context||{},qe.canUseDOM)}render(){return yr?H.createElement(H.Fragment,null,this.props.children):H.createElement(an.Provider,{value:this.helmetData.value},this.props.children)}},je(qe,"canUseDOM",Dr),qe),Qe=(e,t)=>{const r=document.head||document.querySelector("head"),a=r.querySelectorAll(`${e}[${fe}]`),s=[].slice.call(a),i=[];let o;return t&&t.length&&t.forEach(c=>{const l=document.createElement(e);for(const d in c)if(Object.prototype.hasOwnProperty.call(c,d))if(d==="innerHTML")l.innerHTML=c.innerHTML;else if(d==="cssText"){const u=c.cssText;l.appendChild(document.createTextNode(u))}else{const u=d,h=typeof c[u]>"u"?"":c[u];l.setAttribute(d,h)}l.setAttribute(fe,"true"),s.some((d,u)=>(o=u,l.isEqualNode(d)))?s.splice(o,1):i.push(l)}),s.forEach(c=>{var l;return(l=c.parentNode)==null?void 0:l.removeChild(c)}),i.forEach(c=>r.appendChild(c)),{oldTags:s,newTags:i}},xr=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const a=r.getAttribute(fe),s=a?a.split(","):[],i=[...s],o=Object.keys(t);for(const c of o){const l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),s.indexOf(c)===-1&&s.push(c);const d=i.indexOf(c);d!==-1&&i.splice(d,1)}for(let c=i.length-1;c>=0;c-=1)r.removeAttribute(i[c]);s.length===i.length?r.removeAttribute(fe):r.getAttribute(fe)!==o.join(",")&&r.setAttribute(fe,o.join(","))},$i=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=en(e)),xr("title",t)},oa=(e,t)=>{const{baseTag:r,bodyAttributes:a,htmlAttributes:s,linkTags:i,metaTags:o,noscriptTags:c,onChangeClientState:l,scriptTags:d,styleTags:u,title:h,titleAttributes:f}=e;xr("body",a),xr("html",s),$i(h,f);const p={baseTag:Qe("base",r),linkTags:Qe("link",i),metaTags:Qe("meta",o),noscriptTags:Qe("noscript",c),scriptTags:Qe("script",d),styleTags:Qe("style",u)},g={},v={};Object.keys(p).forEach(w=>{const{newTags:b,oldTags:y}=p[w];b.length&&(g[w]=b),y.length&&(v[w]=p[w].oldTags)}),t&&t(),l(e,g,v)},ct=null,Li=e=>{ct&&cancelAnimationFrame(ct),e.defer?ct=requestAnimationFrame(()=>{oa(e,()=>{ct=null})}):(oa(e),ct=null)},Fi=Li,ca=class extends m.Component{constructor(){super(...arguments);je(this,"rendered",!1)}shouldComponentUpdate(t){return!vi(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:r}=this.props.context;let a=null;const s=Ai(t.get().map(i=>{const{context:o,...c}=i.props;return c}));nn.canUseDOM?Fi(s):pr&&(a=pr(s)),r(a)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},At=[],la=e=>{const t={};for(const r of Object.keys(e))t[Za[r]||r]=e[r];return t},Le=e=>{const t={};for(const r of Object.keys(e)){const a=Ft[r];t[a||r]=e[r]}return t},da=(e,t)=>{if(!Dr)return;const r=document.getElementsByTagName(e)[0];if(!r)return;const a="data-rh-managed",s=r.getAttribute(a),i=s?s.split(","):[],o=Object.keys(t);for(const c of i)o.includes(c)||r.removeAttribute(c);for(const c of o){const l=t[c];l==null||l===!1?r.removeAttribute(c):l===!0?r.setAttribute(c,""):r.setAttribute(c,String(l))}o.length>0?r.setAttribute(a,o.join(",")):r.removeAttribute(a)},Zt=()=>{const e={},t={};for(const r of At){const{htmlAttributes:a,bodyAttributes:s}=r.props;a&&Object.assign(e,la(a)),s&&Object.assign(t,la(s))}da("html",e),da("body",t)},Ui=class extends m.Component{componentDidMount(){At.push(this),Zt()}componentDidUpdate(){Zt()}componentWillUnmount(){const e=At.indexOf(this);e!==-1&&At.splice(e,1),Zt()}resolveTitle(){const{title:e,titleTemplate:t,defaultTitle:r}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(""):e):e||r||void 0}renderTitle(){const e=this.resolveTitle();if(e===void 0)return null;const t=this.props.titleAttributes||{};return H.createElement("title",Le(t),e)}renderBase(){const{base:e}=this.props;return e?H.createElement("base",Le(e)):null}renderMeta(){const{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,r)=>H.createElement("meta",{key:r,...Le(t)}))}renderLink(){const{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,r)=>H.createElement("link",{key:r,...Le(t)}))}renderScript(){const{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,r)=>{const{innerHTML:a,...s}=t,i=Le(s);return a&&(i.dangerouslySetInnerHTML={__html:a}),H.createElement("script",{key:r,...i})})}renderStyle(){const{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,r)=>{const{cssText:a,...s}=t,i=Le(s);return a&&(i.dangerouslySetInnerHTML={__html:a}),H.createElement("style",{key:r,...i})})}renderNoscript(){const{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,r)=>{const{innerHTML:a,...s}=t,i=Le(s);return a&&(i.dangerouslySetInnerHTML={__html:a}),H.createElement("noscript",{key:r,...i})})}render(){return H.createElement(H.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},ur,sn=(ur=class extends m.Component{shouldComponentUpdate(e){return!yi(ia(this.props,"helmetData"),ia(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,a){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,a)}]}}mapObjectTypeChildren(e,t,r,a){switch(e.type){case"title":return{...t,[e.type]:a,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach(a=>{r={...r,[a]:e[a]}}),r}warnOnInvalidChildren(e,t){return na(sa.some(r=>e.type===r),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${sa.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),na(!t||typeof t=="string"||Array.isArray(t)&&!t.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return H.Children.forEach(e,a=>{if(!a||!a.props)return;const{children:s,...i}=a.props,o=Object.keys(i).reduce((l,d)=>(l[Za[d]||d]=i[d],l),{});let{type:c}=a;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(a,s),c){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(a,r,o,s);break;default:t=this.mapObjectTypeChildren(a,t,o,s);break}}),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:a}=t;if(e&&(r=this.mapChildrenToProps(e,r)),a&&!(a instanceof gr)){const s=a;a=new gr(s.context,!0),delete r.helmetData}return yr?H.createElement(Ui,{...r}):a?H.createElement(ca,{...r,context:a.value}):H.createElement(an.Consumer,null,s=>H.createElement(ca,{...r,context:s}))}},je(ur,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ur);const qi="modulepreload",Hi=function(e){return"/"+e},ua={},on=function(t,r,a){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(r.map(l=>{if(l=Hi(l),l in ua)return;ua[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":qi,d||(h.as="script"),h.crossOrigin="",h.href=l,c&&h.setAttribute("nonce",c),document.head.appendChild(h),d)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};let Wi={data:""},Bi=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Wi},zi=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Vi=/\/\*[^]*?\*\/|  +/g,ma=/\n+/g,De=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+o+";":a+=i[1]=="f"?De(o,i):i+"{"+De(o,i[1]=="k"?"":t)+"}":typeof o=="object"?a+=De(o,t?t.replace(/([^,])+/g,c=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=De.p?De.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},Te={},cn=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+cn(e[r]);return t}return e},Yi=(e,t,r,a,s)=>{let i=cn(e),o=Te[i]||(Te[i]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(i));if(!Te[o]){let l=i!==e?e:(d=>{let u,h,f=[{}];for(;u=zi.exec(d.replace(Vi,""));)u[4]?f.shift():u[3]?(h=u[3].replace(ma," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][u[1]]=u[2].replace(ma," ").trim();return f[0]})(e);Te[o]=De(s?{["@keyframes "+o]:l}:l,r?"":"."+o)}let c=r&&Te.g?Te.g:null;return r&&(Te.g=Te[o]),((l,d,u,h)=>{h?d.data=d.data.replace(h,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(Te[o],t,a,c),o},Ki=(e,t,r)=>e.reduce((a,s,i)=>{let o=t[i];if(o&&o.call){let c=o(r),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;o=l?"."+l:c&&typeof c=="object"?c.props?"":De(c,""):c===!1?"":c}return a+s+(o??"")},"");function Ut(e){let t=this||{},r=e.call?e(t.p):e;return Yi(r.unshift?r.raw?Ki(r,[].slice.call(arguments,1),t.p):r.reduce((a,s)=>Object.assign(a,s&&s.call?s(t.p):s),{}):r,Bi(t.target),t.g,t.o,t.k)}let ln,br,wr;Ut.bind({g:1});let Ce=Ut.bind({k:1});function Gi(e,t,r,a){De.p=t,ln=e,br=r,wr=a}function $e(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let c=Object.assign({},i),l=c.className||s.className;r.p=Object.assign({theme:br&&br()},c),r.o=/ *go\d+/.test(l),c.className=Ut.apply(r,a)+(l?" "+l:"");let d=e;return e[0]&&(d=c.as||e,delete c.as),wr&&d[0]&&wr(c),ln(d,c)}return s}}var Xi=e=>typeof e=="function",Dt=(e,t)=>Xi(e)?e(t):e,Qi=(()=>{let e=0;return()=>(++e).toString()})(),dn=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ji=20,Or="default",un=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:a}=t;return un(e,{type:e.toasts.find(o=>o.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Ct=[],mn={toasts:[],pausedAt:void 0,settings:{toastLimit:Ji}},we={},hn=(e,t=Or)=>{we[t]=un(we[t]||mn,e),Ct.forEach(([r,a])=>{r===t&&a(we[t])})},fn=e=>Object.keys(we).forEach(t=>hn(e,t)),Zi=e=>Object.keys(we).find(t=>we[t].toasts.some(r=>r.id===e)),qt=(e=Or)=>t=>{hn(t,e)},eo={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},to=(e={},t=Or)=>{let[r,a]=m.useState(we[t]||mn),s=m.useRef(we[t]);m.useEffect(()=>(s.current!==we[t]&&a(we[t]),Ct.push([t,a]),()=>{let o=Ct.findIndex(([c])=>c===t);o>-1&&Ct.splice(o,1)}),[t]);let i=r.toasts.map(o=>{var c,l,d;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((c=e[o.type])==null?void 0:c.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((l=e[o.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||eo[o.type],style:{...e.style,...(d=e[o.type])==null?void 0:d.style,...o.style}}});return{...r,toasts:i}},ro=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Qi()}),gt=e=>(t,r)=>{let a=ro(t,e,r);return qt(a.toasterId||Zi(a.id))({type:2,toast:a}),a.id},z=(e,t)=>gt("blank")(e,t);z.error=gt("error");z.success=gt("success");z.loading=gt("loading");z.custom=gt("custom");z.dismiss=(e,t)=>{let r={type:3,toastId:e};t?qt(t)(r):fn(r)};z.dismissAll=e=>z.dismiss(void 0,e);z.remove=(e,t)=>{let r={type:4,toastId:e};t?qt(t)(r):fn(r)};z.removeAll=e=>z.remove(void 0,e);z.promise=(e,t,r)=>{let a=z.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(s=>{let i=t.success?Dt(t.success,s):void 0;return i?z.success(i,{id:a,...r,...r==null?void 0:r.success}):z.dismiss(a),s}).catch(s=>{let i=t.error?Dt(t.error,s):void 0;i?z.error(i,{id:a,...r,...r==null?void 0:r.error}):z.dismiss(a)}),e};var ao=1e3,no=(e,t="default")=>{let{toasts:r,pausedAt:a}=to(e,t),s=m.useRef(new Map).current,i=m.useCallback((h,f=ao)=>{if(s.has(h))return;let p=setTimeout(()=>{s.delete(h),o({type:4,toastId:h})},f);s.set(h,p)},[]);m.useEffect(()=>{if(a)return;let h=Date.now(),f=r.map(p=>{if(p.duration===1/0)return;let g=(p.duration||0)+p.pauseDuration-(h-p.createdAt);if(g<0){p.visible&&z.dismiss(p.id);return}return setTimeout(()=>z.dismiss(p.id,t),g)});return()=>{f.forEach(p=>p&&clearTimeout(p))}},[r,a,t]);let o=m.useCallback(qt(t),[t]),c=m.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=m.useCallback((h,f)=>{o({type:1,toast:{id:h,height:f}})},[o]),d=m.useCallback(()=>{a&&o({type:6,time:Date.now()})},[a,o]),u=m.useCallback((h,f)=>{let{reverseOrder:p=!1,gutter:g=8,defaultPosition:v}=f||{},w=r.filter(x=>(x.position||v)===(h.position||v)&&x.height),b=w.findIndex(x=>x.id===h.id),y=w.filter((x,k)=>k<b&&x.visible).length;return w.filter(x=>x.visible).slice(...p?[y+1]:[0,y]).reduce((x,k)=>x+(k.height||0)+g,0)},[r]);return m.useEffect(()=>{r.forEach(h=>{if(h.dismissed)i(h.id,h.removeDelay);else{let f=s.get(h.id);f&&(clearTimeout(f),s.delete(h.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:l,startPause:c,endPause:d,calculateOffset:u}}},so=Ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,io=Ce`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oo=Ce`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,co=$e("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${so} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${io} 0.15s ease-out forwards;
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
    animation: ${oo} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,lo=Ce`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,uo=$e("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${lo} 1s linear infinite;
`,mo=Ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ho=Ce`
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
}`,fo=$e("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mo} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ho} 0.2s ease-out forwards;
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
`,po=$e("div")`
  position: absolute;
`,go=$e("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,yo=Ce`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xo=$e("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${yo} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,bo=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?m.createElement(xo,null,t):t:r==="blank"?null:m.createElement(go,null,m.createElement(uo,{...a}),r!=="loading"&&m.createElement(po,null,r==="error"?m.createElement(co,{...a}):m.createElement(fo,{...a})))},wo=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,vo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ko="0%{opacity:0;} 100%{opacity:1;}",No="0%{opacity:1;} 100%{opacity:0;}",jo=$e("div")`
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
`,To=$e("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,So=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=dn()?[ko,No]:[wo(r),vo(r)];return{animation:t?`${Ce(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ce(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ao=m.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?So(e.position||t||"top-center",e.visible):{opacity:0},i=m.createElement(bo,{toast:e}),o=m.createElement(To,{...e.ariaProps},Dt(e.message,e));return m.createElement(jo,{className:e.className,style:{...s,...r,...e.style}},typeof a=="function"?a({icon:i,message:o}):m.createElement(m.Fragment,null,i,o))});Gi(m.createElement);var Co=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=m.useCallback(o=>{if(o){let c=()=>{let l=o.getBoundingClientRect().height;a(e,l)};c(),new MutationObserver(c).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return m.createElement("div",{ref:i,className:t,style:r},s)},Eo=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...s}},_o=Ut`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,vt=16,Io=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:i,containerStyle:o,containerClassName:c})=>{let{toasts:l,handlers:d}=no(r,i);return m.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:vt,left:vt,right:vt,bottom:vt,pointerEvents:"none",...o},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(u=>{let h=u.position||t,f=d.calculateOffset(u,{reverseOrder:e,gutter:a,defaultPosition:t}),p=Eo(h,f);return m.createElement(Co,{id:u.id,key:u.id,onHeightUpdate:d.updateHeight,className:u.visible?_o:"",style:p},u.type==="custom"?Dt(u.message,u):s?s(u):m.createElement(Ao,{toast:u,position:h}))}))},E=z;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Do={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),A=(e,t)=>{const r=m.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:l,...d},u)=>m.createElement("svg",{ref:u,...Do,width:s,height:s,stroke:a,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Oo(e)}`,c].join(" "),...d},[...t.map(([h,f])=>m.createElement(h,f)),...Array.isArray(l)?l:[l]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=A("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=A("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=A("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=A("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=A("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=A("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=A("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=A("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=A("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=A("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=A("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=A("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=A("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=A("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=A("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=A("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=A("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=A("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=A("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=A("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=A("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=A("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=A("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=A("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=A("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=A("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=A("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=A("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=A("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=A("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=A("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=A("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=A("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=A("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=A("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=A("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=A("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
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
 */const xn="firebasestorage.googleapis.com",bn="storageBucket",tc=2*60*1e3,rc=10*60*1e3;/**
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
 */class B extends Sr{constructor(t,r,a=0){super(tr(t),`Firebase Storage: ${r} (${tr(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,B.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return tr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var W;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(W||(W={}));function tr(e){return"storage/"+e}function $r(){const e="An unknown error occurred, please check the error payload for server response.";return new B(W.UNKNOWN,e)}function ac(e){return new B(W.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function nc(e){return new B(W.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sc(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new B(W.UNAUTHENTICATED,e)}function ic(){return new B(W.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function oc(e){return new B(W.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function cc(){return new B(W.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lc(){return new B(W.CANCELED,"User canceled the upload/download.")}function dc(e){return new B(W.INVALID_URL,"Invalid URL '"+e+"'.")}function uc(e){return new B(W.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function mc(){return new B(W.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bn+"' property when initializing the app?")}function hc(){return new B(W.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function fc(){return new B(W.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function pc(e){return new B(W.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nr(e){return new B(W.INVALID_ARGUMENT,e)}function wn(){return new B(W.APP_DELETED,"The Firebase app was deleted.")}function gc(e){return new B(W.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dt(e,t){return new B(W.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function lt(e){throw new B(W.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class ae{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let a;try{a=ae.makeFromUrl(t,r)}catch{return new ae(t,"")}if(a.path==="")return a;throw uc(t)}static makeFromUrl(t,r){let a=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=r.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},v=r===xn?"(?:storage.googleapis.com|storage.cloud.google.com)":r,w="([^?#]*)",b=new RegExp(`^https?://${v}/${s}/${w}`,"i"),x=[{regex:c,indices:l,postModify:i},{regex:p,indices:g,postModify:d},{regex:b,indices:{bucket:1,path:2},postModify:d}];for(let k=0;k<x.length;k++){const S=x[k],N=S.regex.exec(t);if(N){const L=N[S.indices.bucket];let O=N[S.indices.path];O||(O=""),a=new ae(L,O),S.postModify(a);break}}if(a==null)throw dc(t);return a}}class yc{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function xc(e,t,r){let a=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let d=!1;function u(...w){d||(d=!0,t.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,e(p,l())},w)}function f(){i&&clearTimeout(i)}function p(w,...b){if(d){f();return}if(w){f(),u.call(null,w,...b);return}if(l()||o){f(),u.call(null,w,...b);return}a<64&&(a*=2);let x;c===1?(c=2,x=0):x=(a+Math.random())*1e3,h(x)}let g=!1;function v(w){g||(g=!0,f(),!d&&(s!==null?(w||(c=2),clearTimeout(s),h(0)):w||(c=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},r),v}function bc(e){e(!1)}/**
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
 */function wc(e){return e!==void 0}function vc(e){return typeof e=="object"&&!Array.isArray(e)}function Lr(e){return typeof e=="string"||e instanceof String}function ha(e){return Fr()&&e instanceof Blob}function Fr(){return typeof Blob<"u"}function fa(e,t,r,a){if(a<t)throw Nr(`Invalid value for '${e}'. Expected ${t} or greater.`);if(a>r)throw Nr(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function Ur(e,t,r){let a=t;return r==null&&(a=`https://${t}`),`${r}://${a}/v0${e}`}function vn(e){const t=encodeURIComponent;let r="?";for(const a in e)if(e.hasOwnProperty(a)){const s=t(a)+"="+t(e[a]);r=r+s+"&"}return r=r.slice(0,-1),r}var He;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(He||(He={}));/**
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
 */function kc(e,t){const r=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return r||s||i}/**
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
 */class Nc{constructor(t,r,a,s,i,o,c,l,d,u,h,f=!0,p=!1){this.url_=t,this.method_=r,this.headers_=a,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.isUsingEmulator=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const t=(a,s)=>{if(s){a(!1,new kt(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===He.NO_ERROR,l=i.getStatus();if(!c||kc(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===He.ABORT;a(!1,new kt(!1,null,u));return}const d=this.successCodes_.indexOf(l)!==-1;a(!0,new kt(d,i))})},r=(a,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());wc(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=$r();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?wn():lc();o(l)}else{const l=cc();o(l)}};this.canceled_?r(!1,new kt(!1,null,!0)):this.backoffId_=xc(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&bc(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class kt{constructor(t,r,a){this.wasSuccessCode=t,this.connection=r,this.canceled=!!a}}function jc(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Tc(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Sc(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ac(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Cc(e,t,r,a,s,i,o=!0,c=!1){const l=vn(e.urlParams),d=e.url+l,u=Object.assign({},e.headers);return Sc(u,t),jc(u,r),Tc(u,i),Ac(u,a),new Nc(d,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o,c)}/**
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
 */function Ec(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _c(...e){const t=Ec();if(t!==void 0){const r=new t;for(let a=0;a<e.length;a++)r.append(e[a]);return r.getBlob()}else{if(Fr())return new Blob(e);throw new B(W.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ic(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}/**
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
 */function Dc(e){if(typeof atob>"u")throw pc("base-64");return atob(e)}/**
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
 */const ve={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rr{constructor(t,r){this.data=t,this.contentType=r||null}}function Oc(e,t){switch(e){case ve.RAW:return new rr(kn(t));case ve.BASE64:case ve.BASE64URL:return new rr(Nn(e,t));case ve.DATA_URL:return new rr(Mc(t),Rc(t))}throw $r()}function kn(e){const t=[];for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);if(a<=127)t.push(a);else if(a<=2047)t.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(r<e.length-1&&(e.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const i=a,o=e.charCodeAt(++r);a=65536|(i&1023)<<10|o&1023,t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?t.push(239,191,189):t.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(t)}function Pc(e){let t;try{t=decodeURIComponent(e)}catch{throw dt(ve.DATA_URL,"Malformed data URL.")}return kn(t)}function Nn(e,t){switch(e){case ve.BASE64:{const s=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(s||i)throw dt(e,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ve.BASE64URL:{const s=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(s||i)throw dt(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=Dc(t)}catch(s){throw s.message.includes("polyfill")?s:dt(e,"Invalid character found")}const a=new Uint8Array(r.length);for(let s=0;s<r.length;s++)a[s]=r.charCodeAt(s);return a}class jn{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw dt(ve.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=r[1]||null;a!=null&&(this.base64=$c(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=t.substring(t.indexOf(",")+1)}}function Mc(e){const t=new jn(e);return t.base64?Nn(ve.BASE64,t.rest):Pc(t.rest)}function Rc(e){return new jn(e).contentType}function $c(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Oe{constructor(t,r){let a=0,s="";ha(t)?(this.data_=t,a=t.size,s=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),a=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),a=t.length),this.size_=a,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,r){if(ha(this.data_)){const a=this.data_,s=Ic(a,t,r);return s===null?null:new Oe(s)}else{const a=new Uint8Array(this.data_.buffer,t,r-t);return new Oe(a,!0)}}static getBlob(...t){if(Fr()){const r=t.map(a=>a instanceof Oe?a.data_:a);return new Oe(_c.apply(null,r))}else{const r=t.map(o=>Lr(o)?Oc(ve.RAW,o).data:o.data_);let a=0;r.forEach(o=>{a+=o.byteLength});const s=new Uint8Array(a);let i=0;return r.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Oe(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Tn(e){let t;try{t=JSON.parse(e)}catch{return null}return vc(t)?t:null}/**
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
 */function Lc(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Fc(e,t){const r=t.split("/").filter(a=>a.length>0).join("/");return e.length===0?r:e+"/"+r}function Sn(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Uc(e,t){return t}class Z{constructor(t,r,a,s){this.server=t,this.local=r||t,this.writable=!!a,this.xform=s||Uc}}let Nt=null;function qc(e){return!Lr(e)||e.length<2?e:Sn(e)}function An(){if(Nt)return Nt;const e=[];e.push(new Z("bucket")),e.push(new Z("generation")),e.push(new Z("metageneration")),e.push(new Z("name","fullPath",!0));function t(i,o){return qc(o)}const r=new Z("name");r.xform=t,e.push(r);function a(i,o){return o!==void 0?Number(o):o}const s=new Z("size");return s.xform=a,e.push(s),e.push(new Z("timeCreated")),e.push(new Z("updated")),e.push(new Z("md5Hash",null,!0)),e.push(new Z("cacheControl",null,!0)),e.push(new Z("contentDisposition",null,!0)),e.push(new Z("contentEncoding",null,!0)),e.push(new Z("contentLanguage",null,!0)),e.push(new Z("contentType",null,!0)),e.push(new Z("metadata","customMetadata",!0)),Nt=e,Nt}function Hc(e,t){function r(){const a=e.bucket,s=e.fullPath,i=new ae(a,s);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:r})}function Wc(e,t,r){const a={};a.type="file";const s=r.length;for(let i=0;i<s;i++){const o=r[i];a[o.local]=o.xform(a,t[o.server])}return Hc(a,e),a}function Cn(e,t,r){const a=Tn(t);return a===null?null:Wc(e,a,r)}function Bc(e,t,r,a){const s=Tn(t);if(s===null||!Lr(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const u=e.bucket,h=e.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=Ur(f,r,a),g=vn({alt:"media",token:d});return p+g})[0]}function zc(e,t){const r={},a=t.length;for(let s=0;s<a;s++){const i=t[s];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}class En{constructor(t,r,a,s){this.url=t,this.method=r,this.handler=a,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _n(e){if(!e)throw $r()}function Vc(e,t){function r(a,s){const i=Cn(e,s,t);return _n(i!==null),i}return r}function Yc(e,t){function r(a,s){const i=Cn(e,s,t);return _n(i!==null),Bc(i,s,e.host,e._protocol)}return r}function In(e){function t(r,a){let s;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?s=ic():s=sc():r.getStatus()===402?s=nc(e.bucket):r.getStatus()===403?s=oc(e.path):s=a,s.status=r.getStatus(),s.serverResponse=a.serverResponse,s}return t}function Kc(e){const t=In(e);function r(a,s){let i=t(a,s);return a.getStatus()===404&&(i=ac(e.path)),i.serverResponse=s.serverResponse,i}return r}function Gc(e,t,r){const a=t.fullServerUrl(),s=Ur(a,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,c=new En(s,i,Yc(e,r),o);return c.errorHandler=Kc(t),c}function Xc(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Qc(e,t,r){const a=Object.assign({},r);return a.fullPath=e.path,a.size=t.size(),a.contentType||(a.contentType=Xc(null,t)),a}function Jc(e,t,r,a,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let x="";for(let k=0;k<2;k++)x=x+Math.random().toString().slice(2);return x}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=Qc(t,a,s),u=zc(d,r),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Oe.getBlob(h,a,f);if(p===null)throw hc();const g={name:d.fullPath},v=Ur(i,e.host,e._protocol),w="POST",b=e.maxUploadRetryTime,y=new En(v,w,Vc(e,r),b);return y.urlParams=g,y.headers=o,y.body=p.uploadData(),y.errorHandler=In(t),y}class Zc{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=He.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=He.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=He.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,a,s,i){if(this.sent_)throw lt("cannot .send() more than once");if(qa(t)&&a&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(r,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw lt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw lt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw lt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw lt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class el extends Zc{initXhr(){this.xhr_.responseType="text"}}function Dn(){return new el}/**
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
 */class Ye{constructor(t,r){this._service=t,r instanceof ae?this._location=r:this._location=ae.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new Ye(t,r)}get root(){const t=new ae(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Sn(this._location.path)}get storage(){return this._service}get parent(){const t=Lc(this._location.path);if(t===null)return null;const r=new ae(this._location.bucket,t);return new Ye(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw gc(t)}}function tl(e,t,r){e._throwIfRoot("uploadBytes");const a=Jc(e.storage,e._location,An(),new Oe(t,!0),r);return e.storage.makeRequestWithTokens(a,Dn).then(s=>({metadata:s,ref:e}))}function rl(e){e._throwIfRoot("getDownloadURL");const t=Gc(e.storage,e._location,An());return e.storage.makeRequestWithTokens(t,Dn).then(r=>{if(r===null)throw fc();return r})}function al(e,t){const r=Fc(e._location.path,t),a=new ae(e._location.bucket,r);return new Ye(e.storage,a)}/**
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
 */function nl(e){return/^[A-Za-z]+:\/\//.test(e)}function sl(e,t){return new Ye(e,t)}function On(e,t){if(e instanceof qr){const r=e;if(r._bucket==null)throw mc();const a=new Ye(r,r._bucket);return t!=null?On(a,t):a}else return t!==void 0?al(e,t):e}function il(e,t){if(t&&nl(t)){if(e instanceof qr)return sl(e,t);throw Nr("To use ref(service, url), the first argument must be a Storage instance.")}else return On(e,t)}function pa(e,t){const r=t==null?void 0:t[bn];return r==null?null:ae.makeFromBucketSpec(r,e)}function ol(e,t,r,a={}){e.host=`${t}:${r}`;const s=qa(t);s&&(Os(`https://${e.host}/b`),Ps("Storage",!0)),e._isUsingEmulator=!0,e._protocol=s?"https":"http";const{mockUserToken:i}=a;i&&(e._overrideAuthToken=typeof i=="string"?i:Ms(i,e.app.options.projectId))}class qr{constructor(t,r,a,s,i,o=!1){this.app=t,this._authProvider=r,this._appCheckProvider=a,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=xn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tc,this._maxUploadRetryTime=rc,this._requests=new Set,s!=null?this._bucket=ae.makeFromBucketSpec(s,this._host):this._bucket=pa(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ae.makeFromBucketSpec(this._url,t):this._bucket=pa(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){fa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){fa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){if(Is(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ye(this,t)}_makeRequest(t,r,a,s,i=!0){if(this._deleted)return new yc(wn());{const o=Cc(t,this._appId,a,s,r,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,r){const[a,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,a,s).getPromise()}}const ga="@firebase/storage",ya="0.14.0";/**
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
 */const Pn="storage";function cl(e,t,r){return e=ke(e),tl(e,t,r)}function ll(e){return e=ke(e),rl(e)}function dl(e,t){return e=ke(e),il(e,t)}function ul(e=Ar(),t){e=ke(e);const a=st(e,Pn).getImmediate({identifier:t}),s=Ds("storage");return s&&ml(a,...s),a}function ml(e,t,r,a={}){ol(e,t,r,a)}function hl(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new qr(r,a,s,t,_s)}function fl(){We(new Be(Pn,hl,"PUBLIC").setMultipleInstances(!0)),Me(ga,ya,""),Me(ga,ya,"esm2020")}fl();const Mn="@firebase/installations",Hr="0.6.19";/**
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
 */const Rn=1e4,$n=`w:${Hr}`,Ln="FIS_v2",pl="https://firebaseinstallations.googleapis.com/v1",gl=60*60*1e3,yl="installations",xl="Installations";/**
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
 */const bl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ke=new Cr(yl,xl,bl);function Fn(e){return e instanceof Sr&&e.code.includes("request-failed")}/**
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
 */function Un({projectId:e}){return`${pl}/projects/${e}/installations`}function qn(e){return{token:e.token,requestStatus:2,expiresIn:vl(e.expiresIn),creationTime:Date.now()}}async function Hn(e,t){const a=(await t.json()).error;return Ke.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Wn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function wl(e,{refreshToken:t}){const r=Wn(e);return r.append("Authorization",kl(t)),r}async function Bn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function vl(e){return Number(e.replace("s","000"))}function kl(e){return`${Ln} ${e}`}/**
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
 */async function Nl({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const a=Un(e),s=Wn(e),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:r,authVersion:Ln,appId:e.appId,sdkVersion:$n},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Bn(()=>fetch(a,c));if(l.ok){const d=await l.json();return{fid:d.fid||r,registrationStatus:2,refreshToken:d.refreshToken,authToken:qn(d.authToken)}}else throw await Hn("Create Installation",l)}/**
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
 */function zn(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function jl(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tl=/^[cdef][\w-]{21}$/,jr="";function Sl(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const r=Al(e);return Tl.test(r)?r:jr}catch{return jr}}function Al(e){return jl(e).substr(0,22)}/**
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
 */function Bt(e){return`${e.appName}!${e.appId}`}/**
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
 */const Vn=new Map;function Yn(e,t){const r=Bt(e);Kn(r,t),Cl(r,t)}function Kn(e,t){const r=Vn.get(e);if(r)for(const a of r)a(t)}function Cl(e,t){const r=El();r&&r.postMessage({key:e,fid:t}),_l()}let Ue=null;function El(){return!Ue&&"BroadcastChannel"in self&&(Ue=new BroadcastChannel("[Firebase] FID Change"),Ue.onmessage=e=>{Kn(e.data.key,e.data.fid)}),Ue}function _l(){Vn.size===0&&Ue&&(Ue.close(),Ue=null)}/**
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
 */const Il="firebase-installations-database",Dl=1,Ge="firebase-installations-store";let ar=null;function Wr(){return ar||(ar=Er(Il,Dl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ge)}}})),ar}async function Pt(e,t){const r=Bt(e),s=(await Wr()).transaction(Ge,"readwrite"),i=s.objectStore(Ge),o=await i.get(r);return await i.put(t,r),await s.done,(!o||o.fid!==t.fid)&&Yn(e,t.fid),t}async function Gn(e){const t=Bt(e),a=(await Wr()).transaction(Ge,"readwrite");await a.objectStore(Ge).delete(t),await a.done}async function zt(e,t){const r=Bt(e),s=(await Wr()).transaction(Ge,"readwrite"),i=s.objectStore(Ge),o=await i.get(r),c=t(o);return c===void 0?await i.delete(r):await i.put(c,r),await s.done,c&&(!o||o.fid!==c.fid)&&Yn(e,c.fid),c}/**
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
 */async function Br(e){let t;const r=await zt(e.appConfig,a=>{const s=Ol(a),i=Pl(e,s);return t=i.registrationPromise,i.installationEntry});return r.fid===jr?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}function Ol(e){const t=e||{fid:Sl(),registrationStatus:0};return Xn(t)}function Pl(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ke.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Ml(e,r);return{installationEntry:r,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Rl(e)}:{installationEntry:t}}async function Ml(e,t){try{const r=await Nl(e,t);return Pt(e.appConfig,r)}catch(r){throw Fn(r)&&r.customData.serverCode===409?await Gn(e.appConfig):await Pt(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function Rl(e){let t=await xa(e.appConfig);for(;t.registrationStatus===1;)await zn(100),t=await xa(e.appConfig);if(t.registrationStatus===0){const{installationEntry:r,registrationPromise:a}=await Br(e);return a||r}return t}function xa(e){return zt(e,t=>{if(!t)throw Ke.create("installation-not-found");return Xn(t)})}function Xn(e){return $l(e)?{fid:e.fid,registrationStatus:0}:e}function $l(e){return e.registrationStatus===1&&e.registrationTime+Rn<Date.now()}/**
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
 */async function Ll({appConfig:e,heartbeatServiceProvider:t},r){const a=Fl(e,r),s=wl(e,r),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:$n,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Bn(()=>fetch(a,c));if(l.ok){const d=await l.json();return qn(d)}else throw await Hn("Generate Auth Token",l)}function Fl(e,{fid:t}){return`${Un(e)}/${t}/authTokens:generate`}/**
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
 */async function zr(e,t=!1){let r;const a=await zt(e.appConfig,i=>{if(!Qn(i))throw Ke.create("not-registered");const o=i.authToken;if(!t&&Hl(o))return i;if(o.requestStatus===1)return r=Ul(e,t),i;{if(!navigator.onLine)throw Ke.create("app-offline");const c=Bl(i);return r=ql(e,c),c}});return r?await r:a.authToken}async function Ul(e,t){let r=await ba(e.appConfig);for(;r.authToken.requestStatus===1;)await zn(100),r=await ba(e.appConfig);const a=r.authToken;return a.requestStatus===0?zr(e,t):a}function ba(e){return zt(e,t=>{if(!Qn(t))throw Ke.create("not-registered");const r=t.authToken;return zl(r)?{...t,authToken:{requestStatus:0}}:t})}async function ql(e,t){try{const r=await Ll(e,t),a={...t,authToken:r};return await Pt(e.appConfig,a),r}catch(r){if(Fn(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Gn(e.appConfig);else{const a={...t,authToken:{requestStatus:0}};await Pt(e.appConfig,a)}throw r}}function Qn(e){return e!==void 0&&e.registrationStatus===2}function Hl(e){return e.requestStatus===2&&!Wl(e)}function Wl(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+gl}function Bl(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function zl(e){return e.requestStatus===1&&e.requestTime+Rn<Date.now()}/**
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
 */async function Vl(e){const t=e,{installationEntry:r,registrationPromise:a}=await Br(t);return a?a.catch(console.error):zr(t).catch(console.error),r.fid}/**
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
 */async function Yl(e,t=!1){const r=e;return await Kl(r),(await zr(r,t)).token}async function Kl(e){const{registrationPromise:t}=await Br(e);t&&await t}/**
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
 */function Gl(e){if(!e||!e.options)throw nr("App Configuration");if(!e.name)throw nr("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw nr(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function nr(e){return Ke.create("missing-app-config-values",{valueName:e})}/**
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
 */const Jn="installations",Xl="installations-internal",Ql=e=>{const t=e.getProvider("app").getImmediate(),r=Gl(t),a=st(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Jl=e=>{const t=e.getProvider("app").getImmediate(),r=st(t,Jn).getImmediate();return{getId:()=>Vl(r),getToken:s=>Yl(r,s)}};function Zl(){We(new Be(Jn,Ql,"PUBLIC")),We(new Be(Xl,Jl,"PRIVATE"))}Zl();Me(Mn,Hr);Me(Mn,Hr,"esm2020");/**
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
 */const Mt="analytics",ed="firebase_id",td="origin",rd=60*1e3,ad="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vr="https://www.googletagmanager.com/gtag/js";/**
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
 */const ee=new Rs("@firebase/analytics");/**
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
 */const nd={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},se=new Cr("analytics","Analytics",nd);/**
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
 */function sd(e){if(!e.startsWith(Vr)){const t=se.create("invalid-gtag-resource",{gtagURL:e});return ee.warn(t.message),""}return e}function Zn(e){return Promise.all(e.map(t=>t.catch(r=>r)))}function id(e,t){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(e,t)),r}function od(e,t){const r=id("firebase-js-sdk-policy",{createScriptURL:sd}),a=document.createElement("script"),s=`${Vr}?l=${e}&id=${t}`;a.src=r?r==null?void 0:r.createScriptURL(s):s,a.async=!0,document.head.appendChild(a)}function cd(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ld(e,t,r,a,s,i){const o=a[s];try{if(o)await t[o];else{const l=(await Zn(r)).find(d=>d.measurementId===s);l&&await t[l.appId]}}catch(c){ee.error(c)}e("config",s,i)}async function dd(e,t,r,a,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Zn(r);for(const l of o){const d=c.find(h=>h.measurementId===l),u=d&&t[d.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",a,s||{})}catch(i){ee.error(i)}}function ud(e,t,r,a){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await dd(e,t,r,c,l)}else if(i==="config"){const[c,l]=o;await ld(e,t,r,a,c,l)}else if(i==="consent"){const[c,l]=o;e("consent",c,l)}else if(i==="get"){const[c,l,d]=o;e("get",c,l,d)}else if(i==="set"){const[c]=o;e("set",c)}else e(i,...o)}catch(c){ee.error(c)}}return s}function md(e,t,r,a,s){let i=function(...o){window[a].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ud(i,e,t,r),{gtagCore:i,wrappedGtag:window[s]}}function hd(e){const t=window.document.getElementsByTagName("script");for(const r of Object.values(t))if(r.src&&r.src.includes(Vr)&&r.src.includes(e))return r;return null}/**
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
 */const fd=30,pd=1e3;class gd{constructor(t={},r=pd){this.throttleMetadata=t,this.intervalMillis=r}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,r){this.throttleMetadata[t]=r}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const es=new gd;function yd(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function xd(e){var o;const{appId:t,apiKey:r}=e,a={method:"GET",headers:yd(r)},s=ad.replace("{app-id}",t),i=await fetch(s,a);if(i.status!==200&&i.status!==304){let c="";try{const l=await i.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw se.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function bd(e,t=es,r){const{appId:a,apiKey:s,measurementId:i}=e.options;if(!a)throw se.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:a};throw se.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new kd;return setTimeout(async()=>{c.abort()},rd),ts({appId:a,apiKey:s,measurementId:i},o,c,t)}async function ts(e,{throttleEndTimeMillis:t,backoffCount:r},a,s=es){var c;const{appId:i,measurementId:o}=e;try{await wd(a,t)}catch(l){if(o)return ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw l}try{const l=await xd(e);return s.deleteThrottleMetadata(i),l}catch(l){const d=l;if(!vd(d)){if(s.deleteThrottleMetadata(i),o)return ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:o};throw l}const u=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?ra(r,s.intervalMillis,fd):ra(r,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:r+1};return s.setThrottleMetadata(i,h),ee.debug(`Calling attemptFetch again in ${u} millis`),ts(e,h,a,s)}}function wd(e,t){return new Promise((r,a)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(r,s);e.addEventListener(()=>{clearTimeout(i),a(se.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function vd(e){if(!(e instanceof Sr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class kd{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Nd(e,t,r,a,s){if(s&&s.global){e("event",r,a);return}else{const i=await t,o={...a,send_to:i};e("event",r,o)}}async function jd(e,t,r,a){if(a&&a.global){const s={};for(const i of Object.keys(r))s[`user_properties.${i}`]=r[i];return e("set",s),Promise.resolve()}else{const s=await t;e("config",s,{update:!0,user_properties:r})}}/**
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
 */async function Td(){if(Ha())try{await Wa()}catch(e){return ee.warn(se.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ee.warn(se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sd(e,t,r,a,s,i,o){const c=bd(e);c.then(f=>{r[f.measurementId]=f.appId,e.options.measurementId&&f.measurementId!==e.options.measurementId&&ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ee.error(f)),t.push(c);const l=Td().then(f=>{if(f)return a.getId()}),[d,u]=await Promise.all([c,l]);hd(i)||od(i,d.measurementId),s("js",new Date);const h=(o==null?void 0:o.config)??{};return h[td]="firebase",h.update=!0,u!=null&&(h[ed]=u),s("config",d.measurementId,h),d.measurementId}/**
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
 */class Ad{constructor(t){this.app=t}_delete(){return delete at[this.app.options.appId],Promise.resolve()}}let at={},wa=[];const va={};let sr="dataLayer",Cd="gtag",ka,Yr,Na=!1;function Ed(){const e=[];if($s()&&e.push("This is a browser extension environment."),Ba()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,s)=>`(${s+1}) ${a}`).join(" "),r=se.create("invalid-analytics-context",{errorInfo:t});ee.warn(r.message)}}function _d(e,t,r){Ed();const a=e.options.appId;if(!a)throw se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw se.create("no-api-key");if(at[a]!=null)throw se.create("already-exists",{id:a});if(!Na){cd(sr);const{wrappedGtag:i,gtagCore:o}=md(at,wa,va,sr,Cd);Yr=i,ka=o,Na=!0}return at[a]=Sd(e,wa,va,t,ka,sr,r),new Ad(e)}function Id(e=Ar()){e=ke(e);const t=st(e,Mt);return t.isInitialized()?t.getImmediate():Dd(e)}function Dd(e,t={}){const r=st(e,Mt);if(r.isInitialized()){const s=r.getImmediate();if(Ls(t,r.getOptions()))return s;throw se.create("already-initialized")}return r.initialize({options:t})}function Od(e,t,r){e=ke(e),jd(Yr,at[e.app.options.appId],t,r).catch(a=>ee.error(a))}function Pd(e,t,r,a){e=ke(e),Nd(Yr,at[e.app.options.appId],t,r,a).catch(s=>ee.error(s))}const ja="@firebase/analytics",Ta="0.10.19";function Md(){We(new Be(Mt,(t,{options:r})=>{const a=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return _d(a,s,r)},"PUBLIC")),We(new Be("analytics-internal",e,"PRIVATE")),Me(ja,Ta),Me(ja,Ta,"esm2020");function e(t){try{const r=t.getProvider(Mt).getImmediate();return{logEvent:(a,s,i)=>Pd(r,a,s,i),setUserProperties:(a,s)=>Od(r,a,s)}}catch(r){throw se.create("interop-component-reg-failed",{reason:r})}}}Md();/**
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
 */const Rd="/firebase-messaging-sw.js",$d="/firebase-cloud-messaging-push-scope",rs="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ld="https://fcmregistrations.googleapis.com/v1",as="google.c.a.c_id",Fd="google.c.a.c_l",Ud="google.c.a.ts",qd="google.c.a.e",Sa=1e4;var Aa;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Aa||(Aa={}));/**
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
 */var ht;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(ht||(ht={}));/**
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
 */function Se(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Hd(e){const t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(r),s=new Uint8Array(a.length);for(let i=0;i<a.length;++i)s[i]=a.charCodeAt(i);return s}/**
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
 */const ir="fcm_token_details_db",Wd=5,Ca="fcm_token_object_Store";async function Bd(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(ir))return null;let t=null;return(await Er(ir,Wd,{upgrade:async(a,s,i,o)=>{if(s<2||!a.objectStoreNames.contains(Ca))return;const c=o.objectStore(Ca),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(s===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Se(d.vapidKey)}}}else if(s===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Se(d.auth),p256dh:Se(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Se(d.vapidKey)}}}else if(s===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Se(d.auth),p256dh:Se(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Se(d.vapidKey)}}}}}})).close(),await Gt(ir),await Gt("fcm_vapid_details_db"),await Gt("undefined"),zd(t)?t:null}function zd(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Vd="firebase-messaging-database",Yd=1,ft="firebase-messaging-store";let or=null;function ns(){return or||(or=Er(Vd,Yd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ft)}}})),or}async function Kd(e){const t=ss(e),a=await(await ns()).transaction(ft).objectStore(ft).get(t);if(a)return a;{const s=await Bd(e.appConfig.senderId);if(s)return await Kr(e,s),s}}async function Kr(e,t){const r=ss(e),s=(await ns()).transaction(ft,"readwrite");return await s.objectStore(ft).put(t,r),await s.done,t}function ss({appConfig:e}){return e.appId}/**
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
 */const Gd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Q=new Cr("messaging","Messaging",Gd);/**
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
 */async function Xd(e,t){const r=await Xr(e),a=is(t),s={method:"POST",headers:r,body:JSON.stringify(a)};let i;try{i=await(await fetch(Gr(e.appConfig),s)).json()}catch(o){throw Q.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Q.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Q.create("token-subscribe-no-token");return i.token}async function Qd(e,t){const r=await Xr(e),a=is(t.subscriptionOptions),s={method:"PATCH",headers:r,body:JSON.stringify(a)};let i;try{i=await(await fetch(`${Gr(e.appConfig)}/${t.token}`,s)).json()}catch(o){throw Q.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Q.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Q.create("token-update-no-token");return i.token}async function Jd(e,t){const a={method:"DELETE",headers:await Xr(e)};try{const i=await(await fetch(`${Gr(e.appConfig)}/${t}`,a)).json();if(i.error){const o=i.error.message;throw Q.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Q.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Gr({projectId:e}){return`${Ld}/projects/${e}/registrations`}async function Xr({appConfig:e,installations:t}){const r=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function is({p256dh:e,auth:t,endpoint:r,vapidKey:a}){const s={web:{endpoint:r,auth:t,p256dh:e}};return a!==rs&&(s.web.applicationPubKey=a),s}/**
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
 */const Zd=7*24*60*60*1e3;async function eu(e){const t=await ru(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Se(t.getKey("auth")),p256dh:Se(t.getKey("p256dh"))},a=await Kd(e.firebaseDependencies);if(a){if(au(a.subscriptionOptions,r))return Date.now()>=a.createTime+Zd?tu(e,{token:a.token,createTime:Date.now(),subscriptionOptions:r}):a.token;try{await Jd(e.firebaseDependencies,a.token)}catch(s){console.warn(s)}return Ea(e.firebaseDependencies,r)}else return Ea(e.firebaseDependencies,r)}async function tu(e,t){try{const r=await Qd(e.firebaseDependencies,t),a={...t,token:r,createTime:Date.now()};return await Kr(e.firebaseDependencies,a),r}catch(r){throw r}}async function Ea(e,t){const a={token:await Xd(e,t),createTime:Date.now(),subscriptionOptions:t};return await Kr(e,a),a.token}async function ru(e,t){const r=await e.pushManager.getSubscription();return r||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Hd(t)})}function au(e,t){const r=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,s=t.auth===e.auth,i=t.p256dh===e.p256dh;return r&&a&&s&&i}/**
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
 */function _a(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return nu(t,e),su(t,e),iu(t,e),t}function nu(e,t){if(!t.notification)return;e.notification={};const r=t.notification.title;r&&(e.notification.title=r);const a=t.notification.body;a&&(e.notification.body=a);const s=t.notification.image;s&&(e.notification.image=s);const i=t.notification.icon;i&&(e.notification.icon=i)}function su(e,t){t.data&&(e.data=t.data)}function iu(e,t){var s,i,o,c;if(!t.fcmOptions&&!((s=t.notification)!=null&&s.click_action))return;e.fcmOptions={};const r=((i=t.fcmOptions)==null?void 0:i.link)??((o=t.notification)==null?void 0:o.click_action);r&&(e.fcmOptions.link=r);const a=(c=t.fcmOptions)==null?void 0:c.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
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
 */function ou(e){return typeof e=="object"&&!!e&&as in e}/**
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
 */function cu(e){if(!e||!e.options)throw cr("App Configuration Object");if(!e.name)throw cr("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:r}=e;for(const a of t)if(!r[a])throw cr(a);return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function cr(e){return Q.create("missing-app-config-values",{valueName:e})}/**
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
 */class lu{constructor(t,r,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=cu(t);this.firebaseDependencies={app:t,appConfig:s,installations:r,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
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
 */async function du(e){try{e.swRegistration=await navigator.serviceWorker.register(Rd,{scope:$d}),e.swRegistration.update().catch(()=>{}),await uu(e.swRegistration)}catch(t){throw Q.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function uu(e){return new Promise((t,r)=>{const a=setTimeout(()=>r(new Error(`Service worker not registered after ${Sa} ms`)),Sa),s=e.installing||e.waiting;e.active?(clearTimeout(a),t()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(a),t())}:(clearTimeout(a),r(new Error("No incoming service worker found.")))})}/**
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
 */async function mu(e,t){if(!t&&!e.swRegistration&&await du(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw Q.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function hu(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=rs)}/**
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
 */async function os(e,t){if(!navigator)throw Q.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Q.create("permission-blocked");return await hu(e,t==null?void 0:t.vapidKey),await mu(e,t==null?void 0:t.serviceWorkerRegistration),eu(e)}/**
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
 */async function fu(e,t,r){const a=pu(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:r[as],message_name:r[Fd],message_time:r[Ud],message_device_time:Math.floor(Date.now()/1e3)})}function pu(e){switch(e){case ht.NOTIFICATION_CLICKED:return"notification_open";case ht.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function gu(e,t){const r=t.data;if(!r.isFirebaseMessaging)return;e.onMessageHandler&&r.messageType===ht.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(_a(r)):e.onMessageHandler.next(_a(r)));const a=r.data;ou(a)&&a[qd]==="1"&&await fu(e,r.messageType,a)}const Ia="@firebase/messaging",Da="0.12.23";/**
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
 */const yu=e=>{const t=new lu(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>gu(t,r)),t},xu=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:a=>os(t,a)}};function bu(){We(new Be("messaging",yu,"PUBLIC")),We(new Be("messaging-internal",xu,"PRIVATE")),Me(Ia,Da),Me(Ia,Da,"esm2020")}/**
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
 */async function wu(){try{await Wa()}catch{return!1}return typeof window<"u"&&Ha()&&Ba()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function vu(e,t){if(!navigator)throw Q.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function ku(e=Ar()){return wu().then(t=>{if(!t)throw Q.create("unsupported-browser")},t=>{throw Q.create("indexed-db-unsupported")}),st(ke(e),"messaging").getImmediate()}async function Nu(e,t){return e=ke(e),os(e,t)}function ju(e,t){return e=ke(e),vu(e,t)}bu();const Tu={apiKey:"AIzaSyAwQrXDVJ5i-kxezvYDi_3REghtIjqtAP8",authDomain:"on-news-a3c1d.firebaseapp.com",projectId:"on-news-a3c1d",storageBucket:"on-news-a3c1d.firebasestorage.app",messagingSenderId:"1062808607218",appId:"1:1062808607218:web:9b0519631f23145d2db36b",measurementId:"G-V9BRY0P3D6"},yt=Fs(Tu),Ae=Us(yt),j=qs(yt),Su=ul(yt),lr=typeof window<"u"?ku(yt):null;typeof window<"u"&&Id(yt);const cs=m.createContext(void 0),J=()=>{const e=m.useContext(cs);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e},Au=({children:e})=>{const[t,r]=m.useState(null),[a,s]=m.useState(null),[i,o]=m.useState(!0),c=async f=>{const{email:p,password:g,fullName:v,username:w,description:b}=f;if((await Pe(F(j,"usernames",w))).exists())throw new Error("Nome de usuário já existe");const k=(await zs(Ae,p,g)).user;await mr(k,{displayName:v});const S={uid:k.uid,email:k.email,displayName:v,username:w,description:b||"",createdAt:new Date};await Promise.all([hr(F(j,"users",k.uid),S),hr(F(j,"usernames",w),{uid:k.uid})])},l=async(f,p)=>{await Vs(Ae,f,p)},d=async()=>{await Bs(Ae)},u=async f=>{await Ws(Ae,f)};m.useEffect(()=>{let f=null;const p=Hs(Ae,async g=>{o(!0),s(g),f&&(f(),f=null),g?f=X(F(j,"users",g.uid),v=>{var w;if(v.exists()){const b=v.data();r({...b,createdAt:b.createdAt instanceof Date?b.createdAt:typeof((w=b.createdAt)==null?void 0:w.toDate)=="function"?b.createdAt.toDate():new Date(b.createdAt)})}o(!1)}):(r(null),o(!1))});return()=>{p(),f&&f()}},[]);const h={currentUser:t,firebaseUser:a,loading:i,login:l,signup:c,logout:d,resetPassword:u};return n.jsx(cs.Provider,{value:h,children:e})},ls=m.createContext(void 0),ds=()=>{const e=m.useContext(ls);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},Cu=({children:e})=>{const[t,r]=m.useState(()=>localStorage.getItem("theme")||"light");m.useEffect(()=>{localStorage.setItem("theme",t),document.documentElement.classList.toggle("dark",t==="dark")},[t]);const a=()=>{r(s=>s==="light"?"dark":"light")};return n.jsx(ls.Provider,{value:{theme:t,toggleTheme:a},children:e})},Eu=({activeItem:e,onItemChange:t})=>{const{theme:r,toggleTheme:a}=ds(),{logout:s,currentUser:i}=J(),o=[{id:"feed",label:"Página Inicial",icon:pn},{id:"search",label:"Pesquisa",icon:Ot},{id:"categories",label:"Explorar",icon:Pr},{id:"create-post",label:"Criar",icon:Ht},{id:"notifications",label:"Notificações",icon:le},{id:"profile",label:"Perfil",icon:pe}],c=async()=>{try{await s()}catch(l){console.error("Error logging out:",l)}};return n.jsxs("aside",{className:"fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col z-50",children:[n.jsx("div",{className:"px-6 py-10 mb-2",children:n.jsx("div",{className:"font-serif italic text-2xl font-black text-gray-900 dark:text-white tracking-tight cursor-pointer",onClick:()=>t("feed"),children:"On News"})}),n.jsx("nav",{className:"flex-1 px-3",children:n.jsx("ul",{className:"space-y-2",children:o.map(l=>{const d=l.icon,u=e===l.id;return n.jsx("li",{children:n.jsxs("button",{"aria-label":l.label,onClick:()=>t(l.id),className:`w-full flex items-center space-x-4 px-3 py-3 rounded-xl transition-all duration-200 group ${u?"bg-gray-100/80 dark:bg-gray-800/80":"hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[n.jsx(d,{className:`w-7 h-7 transition-transform group-hover:scale-105 ${u?"text-primary dark:text-white":"text-gray-900 dark:text-white"}`,strokeWidth:u?2.5:1.5}),n.jsx("span",{className:`text-base transition-all ${u?"font-black text-primary dark:text-white":"font-medium text-gray-900 dark:text-white"}`,children:l.label})]})},l.id)})})}),n.jsxs("div",{className:"p-3 mb-4 space-y-2",children:[n.jsxs("button",{onClick:a,className:"w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group",children:[r==="light"?n.jsx(Go,{className:"w-7 h-7",strokeWidth:1.5}):n.jsx(Zo,{className:"w-7 h-7",strokeWidth:1.5}),n.jsx("span",{className:"text-gray-900 dark:text-white",children:"Mudar aparência"})]}),i&&n.jsxs("button",{onClick:c,className:"w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-red-500",children:[n.jsx(Ko,{className:"w-7 h-7",strokeWidth:1.5}),n.jsx("span",{children:"Sair"})]})]})]})},_u=({activeItem:e,onItemChange:t})=>{const r=[{id:"feed",label:"Feed",icon:pn},{id:"search",label:"Search",icon:Ot},{id:"create-post",label:"Create",icon:Ht},{id:"notifications",label:"Activity",icon:le},{id:"profile",label:"Profile",icon:pe}];return n.jsx("nav",{className:"w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-2 md:hidden z-50",children:n.jsx("div",{className:"flex justify-between items-center max-w-lg mx-auto",children:r.map(a=>{const s=a.icon,i=e===a.id;return n.jsx("button",{"aria-label":a.label,onClick:()=>t(a.id),className:`flex flex-col items-center justify-center flex-1 py-1 transition-all duration-200 ${i?"scale-110":"opacity-80 hover:opacity-100"}`,children:n.jsx(s,{className:`w-7 h-7 transition-colors ${i?"text-primary dark:text-white":"text-gray-900 dark:text-white"}`,strokeWidth:i?2.5:2})},a.id)})})})},Iu=()=>{const[e,t]=m.useState(null),[r,a]=m.useState(!1),[s,i]=m.useState(!1),[o,c]=m.useState(!1),[l,d]=m.useState(!1);m.useEffect(()=>{(()=>{const g=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;c(g),g||a(!0)})();const f=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());i(f);const p=g=>{g.preventDefault(),t(g),o||a(!0)};return window.addEventListener("beforeinstallprompt",p),()=>{window.removeEventListener("beforeinstallprompt",p)}},[o]);const u=async()=>{if(e){e.prompt();const{outcome:h}=await e.userChoice;h==="accepted"&&a(!1),t(null)}else d(!l)};return o||!r?null:n.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up",children:n.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-md mx-auto relative",children:[n.jsx("button",{"aria-label":"close",onClick:()=>a(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1",children:n.jsx(it,{className:"w-5 h-5"})}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsxs("div",{className:"flex items-start space-x-4",children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{src:"/pwa-192x192.png",alt:"OnNews",className:"w-12 h-12 rounded-lg shadow-sm"})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h3",{className:"font-bold text-gray-900 dark:text-white",children:"Instalar App"}),n.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Tenha a melhor experiência lendo notícias direto da sua tela inicial."})]})]}),n.jsx("div",{className:"mt-1",children:l?n.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 animate-fade-in",children:[n.jsx("p",{className:"font-semibold mb-2",children:"Como instalar manualmente:"}),s?n.jsxs("ul",{className:"space-y-2",children:[n.jsxs("li",{className:"flex items-center gap-2",children:["1. Toque em ",n.jsx(Wt,{className:"w-4 h-4 text-blue-500"})," ",n.jsx("strong",{children:"Compartilhar"})]}),n.jsxs("li",{className:"flex items-center gap-2",children:["2. Selecione"," ",n.jsx("span",{className:"font-bold",children:'"Adicionar à Tela de Início"'})]})]}):n.jsxs("ul",{className:"space-y-2",children:[n.jsxs("li",{className:"flex items-center gap-2",children:["1. Toque no menu ",n.jsx(Xo,{className:"w-4 h-4"})," ","(três pontos)"]}),n.jsxs("li",{className:"flex items-center gap-2",children:["2. Selecione"," ",n.jsx("span",{className:"font-bold",children:'"Instalar aplicativo"'})," ","ou"," ",n.jsx("span",{className:"font-bold",children:'"Adicionar à tela inicial"'})]})]})]}):n.jsxs("button",{"aria-label":"download",onClick:u,className:"w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm",children:[n.jsx(Bo,{className:"w-4 h-4"}),n.jsx("span",{children:"Instalar Agora"})]})})]})]})})};const Du=!1,Ou={financas:"business",saude:"health",educacao:"general",esportes:"sports",ciencias:"science",tecnologia:"technology"};function Pu(e){if(!e||!Array.isArray(e.articles))return(e==null?void 0:e.status)==="error"&&console.error("NewsAPI Error:",e.message),{totalArticles:0,articles:[]};const t=e.articles.filter(r=>r.title&&r.url).map((r,a)=>{var o,c;return{id:`${r.url?btoa(r.url):`news-${Date.now()}`}-${a}`,title:r.title||"Sem título",description:r.description||"",content:r.content||"",url:r.url,image:r.urlToImage||"https://placehold.co/600x400?text=Sem+Imagem",publishedAt:r.publishedAt||new Date().toISOString(),lang:"pt",source:{id:((o=r.source)==null?void 0:o.id)||null,name:((c=r.source)==null?void 0:c.name)||"Fonte Desconhecida"}}});return{totalArticles:e.totalResults||t.length,articles:t}}async function dr(e){try{let t="";const{endpoint:r,...a}=e;Du||(t=`/api/news?${new URLSearchParams({...a,endpoint:r}).toString()}`);const s=await fetch(t),i=await s.json();if(!s.ok)throw console.error(`Erro na requisição (${s.status}):`,i),new Error(`Erro na requisição: ${s.status}`);return Pu(i)}catch(t){return console.error("Error fetching news:",t),{totalArticles:0,articles:[]}}}class Je{static async getFeedNews(){return dr({endpoint:"everything",domains:"globo.com,uol.com.br,folha.com.br,estadao.com.br,cnnbrasil.com.br,r7.com,terra.com.br,abril.com.br,g1.globo.com,poder360.com.br,metropoles.com,brasildefato.com.br,agenciabrasil.ebc.com.br,jovempan.com.br,valor.globo.com",language:"pt",pageSize:"100"})}static async getCategoryNews(t){const r=Ou[t]||"general";return dr({endpoint:"everything",language:"pt",q:r,pageSize:"100"})}static async searchNews(t){return dr({endpoint:"everything",q:t,language:"pt",sortBy:"publishedAt",pageSize:"100"})}}const us=6048e5,Mu=864e5,jt=43200,Oa=1440,Pa=Symbol.for("constructDateFrom");function Ee(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Pa in e?e[Pa](t):e instanceof Date?new e.constructor(t):new Date(t)}function Y(e,t){return Ee(t||e,e)}let Ru={};function xt(){return Ru}function pt(e,t){var c,l,d,u;const r=xt(),a=(t==null?void 0:t.weekStartsOn)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,s=Y(e,t==null?void 0:t.in),i=s.getDay(),o=(i<a?7:0)+i-a;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function Rt(e,t){return pt(e,{...t,weekStartsOn:1})}function ms(e,t){const r=Y(e,t==null?void 0:t.in),a=r.getFullYear(),s=Ee(r,0);s.setFullYear(a+1,0,4),s.setHours(0,0,0,0);const i=Rt(s),o=Ee(r,0);o.setFullYear(a,0,4),o.setHours(0,0,0,0);const c=Rt(o);return r.getTime()>=i.getTime()?a+1:r.getTime()>=c.getTime()?a:a-1}function $t(e){const t=Y(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Vt(e,...t){const r=Ee.bind(null,e||t.find(a=>typeof a=="object"));return t.map(r)}function Ma(e,t){const r=Y(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function $u(e,t,r){const[a,s]=Vt(r==null?void 0:r.in,e,t),i=Ma(a),o=Ma(s),c=+i-$t(i),l=+o-$t(o);return Math.round((c-l)/Mu)}function Lu(e,t){const r=ms(e,t),a=Ee(e,0);return a.setFullYear(r,0,4),a.setHours(0,0,0,0),Rt(a)}function Et(e,t){const r=+Y(e)-+Y(t);return r<0?-1:r>0?1:r}function Fu(e){return Ee(e,Date.now())}function Uu(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function qu(e){return!(!Uu(e)&&typeof e!="number"||isNaN(+Y(e)))}function Hu(e,t,r){const[a,s]=Vt(r==null?void 0:r.in,e,t),i=a.getFullYear()-s.getFullYear(),o=a.getMonth()-s.getMonth();return i*12+o}function Wu(e){return t=>{const a=(e?Math[e]:Math.trunc)(t);return a===0?0:a}}function Bu(e,t){return+Y(e)-+Y(t)}function zu(e,t){const r=Y(e,t==null?void 0:t.in);return r.setHours(23,59,59,999),r}function Vu(e,t){const r=Y(e,t==null?void 0:t.in),a=r.getMonth();return r.setFullYear(r.getFullYear(),a+1,0),r.setHours(23,59,59,999),r}function Yu(e,t){const r=Y(e,t==null?void 0:t.in);return+zu(r,t)==+Vu(r,t)}function Ku(e,t,r){const[a,s,i]=Vt(r==null?void 0:r.in,e,e,t),o=Et(s,i),c=Math.abs(Hu(s,i));if(c<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-o*c);let l=Et(s,i)===-o;Yu(a)&&c===1&&Et(a,i)===1&&(l=!1);const d=o*(c-+l);return d===0?0:d}function Gu(e,t,r){const a=Bu(e,t)/1e3;return Wu(r==null?void 0:r.roundingMethod)(a)}function Xu(e,t){const r=Y(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Qu={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ju=(e,t,r)=>{let a;const s=Qu[e];return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a};function nt(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const Zu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},em={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},tm={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rm={date:nt({formats:Zu,defaultWidth:"full"}),time:nt({formats:em,defaultWidth:"full"}),dateTime:nt({formats:tm,defaultWidth:"full"})},am={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nm=(e,t,r,a)=>am[e];function xe(e){return(t,r)=>{const a=r!=null&&r.context?String(r.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):o;s=e.formattingValues[c]||e.formattingValues[o]}else{const o=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[c]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return s[i]}}const sm={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},im={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},om={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},cm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},lm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},um=(e,t)=>{const r=Number(e),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},mm={ordinalNumber:um,era:xe({values:sm,defaultWidth:"wide"}),quarter:xe({values:im,defaultWidth:"wide",argumentCallback:e=>e-1}),month:xe({values:om,defaultWidth:"wide"}),day:xe({values:cm,defaultWidth:"wide"}),dayPeriod:xe({values:lm,defaultWidth:"wide",formattingValues:dm,defaultFormattingWidth:"wide"})};function be(e){return(t,r={})=>{const a=r.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(s);if(!i)return null;const o=i[0],c=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(c)?fm(c,h=>h.test(o)):hm(c,h=>h.test(o));let d;d=e.valueCallback?e.valueCallback(l):l,d=r.valueCallback?r.valueCallback(d):d;const u=t.slice(o.length);return{value:d,rest:u}}}function hm(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function fm(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function hs(e){return(t,r={})=>{const a=t.match(e.matchPattern);if(!a)return null;const s=a[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=r.valueCallback?r.valueCallback(o):o;const c=t.slice(s.length);return{value:o,rest:c}}}const pm=/^(\d+)(th|st|nd|rd)?/i,gm=/\d+/i,ym={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xm={any:[/^b/i,/^(a|c)/i]},bm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},wm={any:[/1/i,/2/i,/3/i,/4/i]},vm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},km={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Nm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},jm={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Tm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Sm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Am={ordinalNumber:hs({matchPattern:pm,parsePattern:gm,valueCallback:e=>parseInt(e,10)}),era:be({matchPatterns:ym,defaultMatchWidth:"wide",parsePatterns:xm,defaultParseWidth:"any"}),quarter:be({matchPatterns:bm,defaultMatchWidth:"wide",parsePatterns:wm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:be({matchPatterns:vm,defaultMatchWidth:"wide",parsePatterns:km,defaultParseWidth:"any"}),day:be({matchPatterns:Nm,defaultMatchWidth:"wide",parsePatterns:jm,defaultParseWidth:"any"}),dayPeriod:be({matchPatterns:Tm,defaultMatchWidth:"any",parsePatterns:Sm,defaultParseWidth:"any"})},fs={code:"en-US",formatDistance:Ju,formatLong:rm,formatRelative:nm,localize:mm,match:Am,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Cm(e,t){const r=Y(e,t==null?void 0:t.in);return $u(r,Xu(r))+1}function Em(e,t){const r=Y(e,t==null?void 0:t.in),a=+Rt(r)-+Lu(r);return Math.round(a/us)+1}function ps(e,t){var u,h,f,p;const r=Y(e,t==null?void 0:t.in),a=r.getFullYear(),s=xt(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((p=(f=s.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??1,o=Ee((t==null?void 0:t.in)||e,0);o.setFullYear(a+1,0,i),o.setHours(0,0,0,0);const c=pt(o,t),l=Ee((t==null?void 0:t.in)||e,0);l.setFullYear(a,0,i),l.setHours(0,0,0,0);const d=pt(l,t);return+r>=+c?a+1:+r>=+d?a:a-1}function _m(e,t){var c,l,d,u;const r=xt(),a=(t==null?void 0:t.firstWeekContainsDate)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,s=ps(e,t),i=Ee((t==null?void 0:t.in)||e,0);return i.setFullYear(s,0,a),i.setHours(0,0,0,0),pt(i,t)}function Im(e,t){const r=Y(e,t==null?void 0:t.in),a=+pt(r,t)-+_m(r,t);return Math.round(a/us)+1}function M(e,t){const r=e<0?"-":"",a=Math.abs(e).toString().padStart(t,"0");return r+a}const Ie={y(e,t){const r=e.getFullYear(),a=r>0?r:1-r;return M(t==="yy"?a%100:a,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):M(r+1,2)},d(e,t){return M(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return M(e.getHours()%12||12,t.length)},H(e,t){return M(e.getHours(),t.length)},m(e,t){return M(e.getMinutes(),t.length)},s(e,t){return M(e.getSeconds(),t.length)},S(e,t){const r=t.length,a=e.getMilliseconds(),s=Math.trunc(a*Math.pow(10,r-3));return M(s,t.length)}},Ze={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ra={G:function(e,t,r){const a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const a=e.getFullYear(),s=a>0?a:1-a;return r.ordinalNumber(s,{unit:"year"})}return Ie.y(e,t)},Y:function(e,t,r,a){const s=ps(e,a),i=s>0?s:1-s;if(t==="YY"){const o=i%100;return M(o,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):M(i,t.length)},R:function(e,t){const r=ms(e);return M(r,t.length)},u:function(e,t){const r=e.getFullYear();return M(r,t.length)},Q:function(e,t,r){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return M(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,r){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return M(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,r){const a=e.getMonth();switch(t){case"M":case"MM":return Ie.M(e,t);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,r){const a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return M(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,r,a){const s=Im(e,a);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):M(s,t.length)},I:function(e,t,r){const a=Em(e);return t==="Io"?r.ordinalNumber(a,{unit:"week"}):M(a,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Ie.d(e,t)},D:function(e,t,r){const a=Cm(e);return t==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):M(a,t.length)},E:function(e,t,r){const a=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,r,a){const s=e.getDay(),i=(s-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return M(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,a){const s=e.getDay(),i=(s-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return M(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){const a=e.getDay(),s=a===0?7:a;switch(t){case"i":return String(s);case"ii":return M(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,r){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){const a=e.getHours();let s;switch(a===12?s=Ze.noon:a===0?s=Ze.midnight:s=a/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){const a=e.getHours();let s;switch(a>=17?s=Ze.evening:a>=12?s=Ze.afternoon:a>=4?s=Ze.morning:s=Ze.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let a=e.getHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return Ie.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Ie.H(e,t)},K:function(e,t,r){const a=e.getHours()%12;return t==="Ko"?r.ordinalNumber(a,{unit:"hour"}):M(a,t.length)},k:function(e,t,r){let a=e.getHours();return a===0&&(a=24),t==="ko"?r.ordinalNumber(a,{unit:"hour"}):M(a,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Ie.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Ie.s(e,t)},S:function(e,t){return Ie.S(e,t)},X:function(e,t,r){const a=e.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return La(a);case"XXXX":case"XX":return Fe(a);case"XXXXX":case"XXX":default:return Fe(a,":")}},x:function(e,t,r){const a=e.getTimezoneOffset();switch(t){case"x":return La(a);case"xxxx":case"xx":return Fe(a);case"xxxxx":case"xxx":default:return Fe(a,":")}},O:function(e,t,r){const a=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+$a(a,":");case"OOOO":default:return"GMT"+Fe(a,":")}},z:function(e,t,r){const a=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+$a(a,":");case"zzzz":default:return"GMT"+Fe(a,":")}},t:function(e,t,r){const a=Math.trunc(+e/1e3);return M(a,t.length)},T:function(e,t,r){return M(+e,t.length)}};function $a(e,t=""){const r=e>0?"-":"+",a=Math.abs(e),s=Math.trunc(a/60),i=a%60;return i===0?r+String(s):r+String(s)+t+M(i,2)}function La(e,t){return e%60===0?(e>0?"-":"+")+M(Math.abs(e)/60,2):Fe(e,t)}function Fe(e,t=""){const r=e>0?"-":"+",a=Math.abs(e),s=M(Math.trunc(a/60),2),i=M(a%60,2);return r+s+t+i}const Fa=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},gs=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Dm=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],a=r[1],s=r[2];if(!s)return Fa(e,t);let i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Fa(a,t)).replace("{{time}}",gs(s,t))},Om={p:gs,P:Dm},Pm=/^D+$/,Mm=/^Y+$/,Rm=["D","DD","YY","YYYY"];function $m(e){return Pm.test(e)}function Lm(e){return Mm.test(e)}function Fm(e,t,r){const a=Um(e,t,r);if(console.warn(a),Rm.includes(e))throw new RangeError(a)}function Um(e,t,r){const a=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const qm=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Hm=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Wm=/^'([^]*?)'?$/,Bm=/''/g,zm=/[a-zA-Z]/;function ys(e,t,r){var u,h,f,p,g,v,w,b;const a=xt(),s=(r==null?void 0:r.locale)??a.locale??fs,i=(r==null?void 0:r.firstWeekContainsDate)??((h=(u=r==null?void 0:r.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??a.firstWeekContainsDate??((p=(f=a.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??1,o=(r==null?void 0:r.weekStartsOn)??((v=(g=r==null?void 0:r.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??a.weekStartsOn??((b=(w=a.locale)==null?void 0:w.options)==null?void 0:b.weekStartsOn)??0,c=Y(e,r==null?void 0:r.in);if(!qu(c))throw new RangeError("Invalid time value");let l=t.match(Hm).map(y=>{const x=y[0];if(x==="p"||x==="P"){const k=Om[x];return k(y,s.formatLong)}return y}).join("").match(qm).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const x=y[0];if(x==="'")return{isToken:!1,value:Vm(y)};if(Ra[x])return{isToken:!0,value:y};if(x.match(zm))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:y}});s.localize.preprocessor&&(l=s.localize.preprocessor(c,l));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:s};return l.map(y=>{if(!y.isToken)return y.value;const x=y.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Lm(x)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&$m(x))&&Fm(x,t,String(e));const k=Ra[x[0]];return k(c,x,s.localize,d)}).join("")}function Vm(e){const t=e.match(Wm);return t?t[1].replace(Bm,"'"):e}function Ym(e,t,r){const a=xt(),s=(r==null?void 0:r.locale)??a.locale??fs,i=2520,o=Et(e,t);if(isNaN(o))throw new RangeError("Invalid time value");const c=Object.assign({},r,{addSuffix:r==null?void 0:r.addSuffix,comparison:o}),[l,d]=Vt(r==null?void 0:r.in,...o>0?[t,e]:[e,t]),u=Gu(d,l),h=($t(d)-$t(l))/1e3,f=Math.round((u-h)/60);let p;if(f<2)return r!=null&&r.includeSeconds?u<5?s.formatDistance("lessThanXSeconds",5,c):u<10?s.formatDistance("lessThanXSeconds",10,c):u<20?s.formatDistance("lessThanXSeconds",20,c):u<40?s.formatDistance("halfAMinute",0,c):u<60?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",1,c):f===0?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",f,c);if(f<45)return s.formatDistance("xMinutes",f,c);if(f<90)return s.formatDistance("aboutXHours",1,c);if(f<Oa){const g=Math.round(f/60);return s.formatDistance("aboutXHours",g,c)}else{if(f<i)return s.formatDistance("xDays",1,c);if(f<jt){const g=Math.round(f/Oa);return s.formatDistance("xDays",g,c)}else if(f<jt*2)return p=Math.round(f/jt),s.formatDistance("aboutXMonths",p,c)}if(p=Ku(d,l),p<12){const g=Math.round(f/jt);return s.formatDistance("xMonths",g,c)}else{const g=p%12,v=Math.trunc(p/12);return g<3?s.formatDistance("aboutXYears",v,c):g<9?s.formatDistance("overXYears",v,c):s.formatDistance("almostXYears",v+1,c)}}function bt(e,t){return Ym(e,Fu(e),t)}const Km={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},Gm=(e,t,r)=>{let a;const s=Km[e];return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"em "+a:"há "+a:a},Xm={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},Qm={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Jm={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Zm={date:nt({formats:Xm,defaultWidth:"full"}),time:nt({formats:Qm,defaultWidth:"full"}),dateTime:nt({formats:Jm,defaultWidth:"full"})},eh={lastWeek:e=>{const t=e.getDay();return"'"+(t===0||t===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},th=(e,t,r,a)=>{const s=eh[e];return typeof s=="function"?s(t):s},rh={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},ah={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},nh={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},sh={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},ih={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},oh={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},ch=(e,t)=>{const r=Number(e);return(t==null?void 0:t.unit)==="week"?r+"ª":r+"º"},lh={ordinalNumber:ch,era:xe({values:rh,defaultWidth:"wide"}),quarter:xe({values:ah,defaultWidth:"wide",argumentCallback:e=>e-1}),month:xe({values:nh,defaultWidth:"wide"}),day:xe({values:sh,defaultWidth:"wide"}),dayPeriod:xe({values:ih,defaultWidth:"wide",formattingValues:oh,defaultFormattingWidth:"wide"})},dh=/^(\d+)[ºªo]?/i,uh=/\d+/i,mh={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},hh={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},fh={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},ph={any:[/1/i,/2/i,/3/i,/4/i]},gh={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},yh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},xh={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},bh={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},wh={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},vh={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},kh={ordinalNumber:hs({matchPattern:dh,parsePattern:uh,valueCallback:e=>parseInt(e,10)}),era:be({matchPatterns:mh,defaultMatchWidth:"wide",parsePatterns:hh,defaultParseWidth:"any"}),quarter:be({matchPatterns:fh,defaultMatchWidth:"wide",parsePatterns:ph,defaultParseWidth:"any",valueCallback:e=>e+1}),month:be({matchPatterns:gh,defaultMatchWidth:"wide",parsePatterns:yh,defaultParseWidth:"any"}),day:be({matchPatterns:xh,defaultMatchWidth:"wide",parsePatterns:bh,defaultParseWidth:"any"}),dayPeriod:be({matchPatterns:wh,defaultMatchWidth:"any",parsePatterns:vh,defaultParseWidth:"any"})},Xe={code:"pt-BR",formatDistance:Gm,formatLong:Zm,formatRelative:th,localize:lh,match:kh,options:{weekStartsOn:0,firstWeekContainsDate:1}},Nh=(e,t)=>{if(!e)return()=>{};const r=$(_(j,"notifications"),C("toUserId","==",e),C("read","==",!1),ne("createdAt","desc"));return X(r,s=>{t(s.size)})},xs=async e=>{if(e.fromUserId!==e.toUserId)try{await mt(_(j,"notifications"),{...e,read:!1,createdAt:ze()}),fetch("/api/send-push",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toUserId:e.toUserId,title:"On News",body:`${e.fromUserName} ${e.type==="like"?"curtiu seu artigo":e.type==="comment"?"comentou no seu artigo":e.type==="reply"?"respondeu seu comentário":e.type==="follow"?"começou a seguir você":"enviou uma mensagem"}${e.articleTitle?`: "${e.articleTitle}"`:""}`,data:{url:e.articleId?`/post/${e.articleId}`:"/notifications"}})}).catch(t=>console.error("Push trigger error:",t))}catch(t){console.error("Error sending notification:",t)}},Qr=e=>{const[t,r]=m.useState({articleId:(e==null?void 0:e.id)||"",comments:[],likes:[],likesCount:0,commentsCount:0}),[a,s]=m.useState(!1),[i,o]=m.useState(!0),{currentUser:c}=J(),l=e.type==="opinion";m.useEffect(()=>{if(!(e!=null&&e.id))return;const g=$(_(j,"comments"),C("articleId","==",e.id),ne("createdAt","desc")),v=$(_(j,"likes"),C("articleId","==",e.id)),w=X(g,y=>{const x=y.docs.map(k=>{var S;return{id:k.id,...k.data(),createdAt:((S=k.data().createdAt)==null?void 0:S.toDate())||new Date}});r(k=>({...k,comments:x,commentsCount:x.length}))}),b=X(v,y=>{const x=y.docs.map(S=>{var N;return{id:S.id,...S.data(),createdAt:((N=S.data().createdAt)==null?void 0:N.toDate())||new Date}}),k=x.find(S=>S.userId===(c==null?void 0:c.uid));s(!!k),r(S=>({...S,likes:x,likesCount:x.length})),o(!1)});return()=>{w(),b()}},[e==null?void 0:e.id,c==null?void 0:c.uid]);const d=()=>{var v,w;if(!e)return null;if(l){const b=e;return{id:b.id,title:b.title,content:b.content,authorName:b.authorName,userName:b.userName,userPhoto:b.userPhoto,color:b.color,publishedAt:b.publishedAt instanceof Date?b.publishedAt.toISOString():b.publishedAt,type:"opinion"}}const g=e;return{id:g.id||"",title:g.title||"Sem título",description:g.description||"",content:g.content||"",url:g.url||"",image:g.image||"",publishedAt:g.publishedAt||new Date().toISOString(),source:{id:((v=g.source)==null?void 0:v.id)||null,name:((w=g.source)==null?void 0:w.name)||"Fonte Desconhecida"},type:"news"}},u=async(g,v,w)=>{c&&await xs({toUserId:v,fromUserId:c.uid,fromUserName:c.username,fromUserPhoto:c.photoURL||"",type:g,articleId:e.id,articleTitle:e.title,commentContent:w})};return{interactions:t,isLiked:a,loading:i,addComment:async(g,v)=>{if(!c){E.error("Você precisa fazer login para comentar");return}try{const w=d();if(await mt(_(j,"comments"),{articleId:e.id,userId:c.uid,username:c.username,userPhoto:c.photoURL||"",content:g,createdAt:ze(),articleSnapshot:w,parentCommentId:v||null}),l&&await u("comment",e.userId,g),v){const b=t.comments.find(y=>y.id===v);b&&b.userId!==c.uid&&await u("reply",b.userId,g)}E.success("Comentário adicionado!")}catch(w){E.error("Erro ao adicionar comentário"),console.error("Error adding comment:",w)}},toggleLike:async()=>{if(!c){E.error("Você precisa fazer login para curtir");return}try{if(a){const g=t.likes.find(v=>v.userId===c.uid);g&&await _r(F(j,"likes",g.id))}else{const g=d();await mt(_(j,"likes"),{articleId:e.id,userId:c.uid,username:c.username,userPhoto:c.photoURL||"",createdAt:ze(),articleSnapshot:g}),l&&await u("like",e.userId)}}catch(g){E.error("Erro ao curtir notícia"),console.error("Error toggling like:",g)}},shareArticle:(g,v)=>{navigator.share?navigator.share({title:v,url:g}).catch(console.error):navigator.clipboard.writeText(g).then(()=>{E.success("Link copiado para a área de transferência!")}).catch(()=>{E.error("Erro ao copiar link")})}}},bs=({comment:e,articleId:t,onUserClick:r,onLoginRequired:a,onAddComment:s,isReply:i})=>{const{currentUser:o}=J(),[c,l]=m.useState(!1),[d,u]=m.useState(""),[h,f]=m.useState([]),[p,g]=m.useState(!1),[v,w]=m.useState([]),[b,y]=m.useState(!1);m.useEffect(()=>{if(!i){const N=$(_(j,"comments"),C("parentCommentId","==",e.id),C("articleId","==",t));return X(N,O=>{const I=O.docs.map(T=>{var U;return{id:T.id,...T.data(),createdAt:((U=T.data().createdAt)==null?void 0:U.toDate())||new Date}});f(I.sort((T,U)=>T.createdAt.getTime()-U.createdAt.getTime()))})}},[e.id,t,i]),m.useEffect(()=>{const N=$(_(j,"commentLikes"),C("commentId","==",e.id));return X(N,O=>{const I=O.docs.map(T=>({id:T.id,...T.data()}));w(I),y(I.some(T=>T.userId===(o==null?void 0:o.uid)))})},[e.id,o==null?void 0:o.uid]);const x=async()=>{if(!o){a==null||a();return}try{if(b){const N=v.find(L=>L.userId===o.uid);N&&await _r(F(j,"commentLikes",N.id))}else await mt(_(j,"commentLikes"),{commentId:e.id,userId:o.uid,createdAt:ze()})}catch{E.error("Erro ao curtir comentário")}},k=async N=>{if(N.preventDefault(),!o){a==null||a();return}d.trim()&&(await s(d.trim(),e.id),u(""),l(!1))},S=p?h:h.slice(-2);return n.jsx("div",{className:`flex flex-col ${i?"ml-8 mt-2":"mt-4"}`,children:n.jsxs("div",{className:"flex space-x-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-medium cursor-pointer overflow-hidden shrink-0",onClick:()=>r==null?void 0:r(e.userId),children:e.userPhoto?n.jsx("img",{src:e.userPhoto,alt:e.username,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-4 h-4"})}),n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"bg-gray-100 dark:bg-gray-700/50 rounded-2xl px-4 py-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-1",children:[n.jsxs("span",{className:"text-sm font-bold text-gray-900 dark:text-white cursor-pointer hover:underline",onClick:()=>r==null?void 0:r(e.userId),children:["@",e.username]}),n.jsx("span",{className:"text-[10px] text-gray-500 dark:text-gray-400",children:e.createdAt?ys(e.createdAt,"dd/MM/yy HH:mm",{locale:Xe}):""})]}),n.jsx("p",{className:"text-sm text-gray-800 dark:text-gray-200",children:e.content})]}),n.jsxs("div",{className:"flex items-center space-x-4 mt-1 ml-2 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[n.jsxs("button",{onClick:x,className:`hover:text-red-500 transition-colors flex items-center gap-1 ${b?"text-red-500":""}`,children:[n.jsx(le,{className:`w-3 h-3 ${b?"fill-current":""}`}),v.length>0&&n.jsx("span",{children:v.length}),"Curtir"]}),!i&&n.jsxs("button",{onClick:()=>l(!c),className:"hover:text-blue-500 transition-colors flex items-center gap-1",children:[n.jsx(Re,{className:"w-3 h-3"}),"Responder"]})]}),c&&n.jsxs("form",{onSubmit:k,className:"mt-2 flex gap-2",children:[n.jsx("input",{type:"text",value:d,onChange:N=>u(N.target.value),placeholder:"Escreva uma resposta...",className:"flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none",autoFocus:!0}),n.jsx("button",{type:"submit",disabled:!d.trim(),className:"text-primary disabled:opacity-50",children:n.jsx(Rr,{className:"w-4 h-4"})})]}),!i&&h.length>0&&n.jsxs("div",{className:"mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700",children:[h.length>2&&!p&&n.jsxs("button",{onClick:()=>g(!0),className:"text-xs text-primary font-bold ml-8 flex items-center gap-1 hover:underline mt-1",children:[n.jsx(Uo,{className:"w-3 h-3"}),"Ver mais ",h.length-2," comentários"]}),S.map(N=>n.jsx(bs,{comment:N,articleId:t,onUserClick:r,onLoginRequired:a,onAddComment:s,isReply:!0},N.id)),p&&n.jsxs("button",{onClick:()=>g(!1),className:"text-xs text-gray-500 font-bold ml-8 flex items-center gap-1 hover:underline mt-1",children:[n.jsx(Ho,{className:"w-3 h-3"}),"Ver menos"]})]})]})]})})},Jr=({articleId:e,comments:t,onLoginRequired:r,onUserClick:a,onAddComment:s})=>{var f;const[i,o]=m.useState(""),[c,l]=m.useState(!1),{currentUser:d}=J(),u=async p=>{if(p.preventDefault(),!d){r==null||r();return}i.trim()&&(l(!0),await s(i.trim()),o(""),l(!1))},h=t.filter(p=>!p.parentCommentId);return n.jsxs("section",{className:"space-y-4",children:[d&&n.jsxs("form",{onSubmit:u,className:"flex space-x-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-sm font-medium overflow-hidden",children:d.photoURL?n.jsx("img",{src:d.photoURL,alt:d.displayName,className:"w-full h-full object-cover"}):(f=d.displayName)==null?void 0:f.charAt(0).toUpperCase()}),n.jsxs("div",{className:"flex-1 flex space-x-2",children:[n.jsx("input",{type:"text",value:i,onChange:p=>o(p.target.value),placeholder:"Escreva um comentário...",className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary",disabled:c}),n.jsx("button",{"aria-label":"submit",type:"submit",disabled:!i.trim()||c,className:"p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50",children:n.jsx(Rr,{className:"w-4 h-4"})})]})]}),n.jsx("div",{className:"space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar",children:h.length===0?n.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm text-center py-4",children:"Seja o primeiro a comentar!"}):h.map(p=>n.jsx(bs,{comment:p,articleId:e,onUserClick:a,onLoginRequired:r,onAddComment:s},p.id))})]})},Yt=({article:e,onLoginRequired:t,onUserClick:r,onPostClick:a})=>{var w,b;const[s,i]=m.useState(!1),{currentUser:o}=J();if(!e)return null;const{interactions:c,isLiked:l,toggleLike:d,shareArticle:u,addComment:h}=Qr(e),f=()=>{if(!o){t==null||t();return}d()},p=()=>{if(!o){t==null||t();return}i(!s)},g=()=>{u(e.url,e.title)},v=y=>{try{const x=new Date(y);return bt(x,{addSuffix:!0,locale:Xe})}catch{return"há algum tempo"}};return n.jsxs("article",{className:"bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between p-3",children:[n.jsxs("div",{className:"flex items-center space-x-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden",children:n.jsx(Ro,{className:"w-4 h-4 text-gray-500"})}),n.jsx("div",{children:n.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white leading-tight",children:((w=e.source)==null?void 0:w.name)||"Fonte desconhecida"})})]}),n.jsx("button",{className:"text-gray-500 dark:text-gray-400",children:n.jsx(Mr,{className:"w-5 h-5"})})]}),e.image&&n.jsx("div",{className:"relative aspect-square w-full bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer",onDoubleClick:f,children:n.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover",onError:y=>{y.target.style.display="none"}})}),n.jsxs("div",{className:"p-3 pb-0",children:[n.jsx("div",{className:"flex items-center justify-between mb-2",children:n.jsxs("div",{className:"flex items-center space-x-4",children:[n.jsx("button",{"aria-label":"like",onClick:f,className:`transition-all ${l?"text-red-500":"text-gray-900 dark:text-white"}`,children:n.jsx(le,{className:`w-7 h-7 ${l?"fill-current":""}`,strokeWidth:2})}),n.jsx("button",{"aria-label":"comment",onClick:p,className:"text-gray-900 dark:text-white",children:n.jsx(Re,{className:"w-7 h-7",strokeWidth:2})}),n.jsx("button",{"aria-label":"share",onClick:g,className:"text-gray-900 dark:text-white",children:n.jsx(Wt,{className:"w-7 h-7",strokeWidth:2})})]})}),c.likesCount>0&&n.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white mb-1",children:[c.likesCount.toLocaleString()," curtidas"]}),n.jsxs("div",{className:"space-y-1 mb-2",children:[n.jsxs("p",{className:"text-sm text-gray-900 dark:text-white leading-snug",children:[n.jsx("span",{className:"font-bold mr-2",children:(b=e.source)==null?void 0:b.name}),e.title]}),e.description&&n.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug",children:e.description})]}),n.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-tight mb-2",children:v(e.publishedAt)}),c.commentsCount>0&&!s&&n.jsxs("button",{onClick:p,className:"text-sm text-gray-500 dark:text-gray-400 mb-2 hover:underline",children:["Ver todos os ",c.commentsCount," comentários"]})]}),n.jsx("div",{className:"px-3 pb-3",children:n.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm",children:"Ler matéria completa"})}),s&&n.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 p-3",children:n.jsx(Jr,{articleId:e.id,comments:c.comments,onLoginRequired:t,onUserClick:r,onAddComment:h})})]})},Zr=({post:e,onLoginRequired:t,onUserClick:r,onEdit:a,onPostClick:s})=>{const[i,o]=m.useState(!1),{currentUser:c}=J(),{interactions:l,isLiked:d,toggleLike:u,shareArticle:h,addComment:f}=Qr(e),p=e.status==="draft",g=(c==null?void 0:c.uid)===e.userId,v=()=>{if(!p){if(!c){t==null||t();return}u()}},w=()=>{if(!p){if(!c){t==null||t();return}o(!i)}},b=y=>{try{const x=y instanceof Date?y:typeof y.toDate=="function"?y.toDate():new Date(y);return bt(x,{addSuffix:!0,locale:Xe})}catch{return"há algum tempo"}};return n.jsxs("article",{className:"bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between p-3",children:[n.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>r==null?void 0:r(e.userId),children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]",children:n.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-800 p-[1.5px]",children:n.jsx("div",{className:"w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden",children:e.userPhoto?n.jsx("img",{src:e.userPhoto,alt:e.userName,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-4 h-4 text-gray-500"})})})}),n.jsx("div",{children:n.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white leading-tight",children:[e.userName,p&&n.jsx("span",{className:"ml-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-1.5 py-0.5 rounded uppercase font-black",children:"Rascunho"})]})})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[p&&g&&a&&n.jsxs("button",{onClick:()=>a(e),className:"flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary/20 transition-colors",children:[n.jsx(Jo,{className:"w-3 h-3"})," Continuar Editando"]}),n.jsx("button",{className:"text-gray-500 dark:text-gray-400",children:n.jsx(Mr,{className:"w-5 h-5"})})]})]}),n.jsxs("div",{onClick:()=>s==null?void 0:s(e),className:"w-full min-h-[280px] h-auto rounded-2xl p-6 pt-16 flex flex-col justify-end shadow-lg relative overflow-hidden cursor-pointer group",style:{background:`linear-gradient(135deg, ${e.cardColor||"#10b981"} 0%, ${e.cardColor||"#10b981"}dd 100%)`},children:[n.jsx("div",{className:"absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"}),n.jsx("h2",{className:"text-xl md:text-2xl font-black text-white mb-2 leading-tight drop-shadow-md",children:e.title}),n.jsx("div",{className:"w-10 h-1 bg-white/30 rounded-full mb-3"}),n.jsx("p",{className:"text-sm font-medium text-white/90",children:e.authorName})]}),n.jsxs("div",{className:"p-3 pb-0",children:[n.jsx("div",{className:"flex items-center justify-between mb-2",children:n.jsxs("div",{className:"flex items-center space-x-4",children:[n.jsx("button",{"aria-label":"like",onClick:v,className:`transition-all ${d?"text-red-500":"text-gray-900 dark:text-white"}`,children:n.jsx(le,{className:`w-7 h-7 ${d?"fill-current":""}`,strokeWidth:2})}),n.jsx("button",{"aria-label":"comment",onClick:w,className:"text-gray-900 dark:text-white",children:n.jsx(Re,{className:"w-7 h-7",strokeWidth:2})}),n.jsx("button",{"aria-label":"share",onClick:()=>h(`${window.location.origin}/post/${e.id}`,e.title),className:"text-gray-900 dark:text-white",children:n.jsx(Wt,{className:"w-7 h-7",strokeWidth:2})})]})}),l.likesCount>0&&n.jsxs("p",{className:"text-sm font-bold text-gray-900 dark:text-white mb-1",children:[l.likesCount.toLocaleString()," curtidas"]}),n.jsxs("div",{onClick:()=>s==null?void 0:s(e),className:"space-y-1 mb-2 cursor-pointer group",children:[n.jsxs("p",{className:"text-sm text-gray-900 dark:text-white leading-snug",children:[n.jsx("span",{className:"font-bold mr-2",children:e.userName}),n.jsxs("span",{className:"font-medium italic",children:['"',e.title,'"']})]}),n.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug",children:e.content}),n.jsx("button",{className:"text-[11px] font-bold text-gray-400 group-hover:text-primary transition-colors",children:"ver todos os detalhes..."})]}),n.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-tight mb-2",children:b(e.publishedAt)}),l.commentsCount>0&&!i&&n.jsxs("button",{onClick:w,className:"text-sm text-gray-500 dark:text-gray-400 mb-2 hover:underline",children:["Ver todos os ",l.commentsCount," comentários"]})]}),n.jsx("div",{className:"px-3 pb-3",children:n.jsx("button",{onClick:()=>s==null?void 0:s(e),className:"block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm",children:"Ler artigo na íntegra"})}),i&&n.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800 p-3",children:n.jsx(Jr,{articleId:e.id,comments:l.comments,onLoginRequired:t,onUserClick:r,onAddComment:f})})]})};async function jh(e,t){if(e===t)return;const r=`${e}_${t}`;await hr(F(j,"follows",r),{followerId:e,followingId:t,createdAt:ze()})}async function Th(e,t){const r=`${e}_${t}`;await _r(F(j,"follows",r))}async function Sh(e,t){if(e===t)return;const r=za(j),a=`${e}_${t}`;r.set(F(j,"blocks",a),{blockerId:e,blockedId:t,createdAt:ze()}),r.delete(F(j,"follows",`${e}_${t}`)),r.delete(F(j,"follows",`${t}_${e}`)),await r.commit()}const ea=({userId:e,onLoginRequired:t,className:r})=>{const{currentUser:a}=J(),[s,i]=m.useState(!1),[o,c]=m.useState(!0);m.useEffect(()=>{if(!a||!e){c(!1);return}const d=`${a.uid}_${e}`,u=X(F(j,"follows",d),h=>{i(h.exists()),c(!1)});return()=>u()},[a,e]);const l=async d=>{if(d.stopPropagation(),!a){t==null||t();return}try{s?await Th(a.uid,e):(await jh(a.uid,e),await xs({toUserId:e,fromUserId:a.uid,fromUserName:a.username,fromUserPhoto:a.photoURL||"",type:"follow"}),E.success("Agora você está seguindo!"))}catch{E.error("Erro ao processar solicitação")}};return(a==null?void 0:a.uid)===e?null:n.jsx("button",{onClick:l,disabled:o,className:`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${s?"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30":"bg-primary text-white hover:bg-primary/90"} ${r}`,children:o?"...":s?"Seguindo":"Seguir"})},ws=({onUserClick:e,onLoginRequired:t})=>{const{currentUser:r}=J(),[a,s]=m.useState([]),[i,o]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{let u=(await ye($(_(j,"users"),Va(50)))).docs.map(h=>({uid:h.id,...h.data()})).filter(h=>h.uid!==(r==null?void 0:r.uid));if(r){const h=await ye($(_(j,"follows"),C("followerId","==",r.uid))),f=new Set(h.docs.map(w=>w.data().followingId)),p=await ye($(_(j,"blocks"),C("blockerId","==",r.uid))),g=await ye($(_(j,"blocks"),C("blockedId","==",r.uid))),v=new Set([...p.docs.map(w=>w.data().blockedId),...g.docs.map(w=>w.data().blockerId)]);u=u.filter(w=>!f.has(w.uid)&&!v.has(w.uid))}s(u.slice(0,15)),o(!1)}catch(l){console.error("Error fetching suggestions:",l),o(!1)}})()},[r]),i||a.length===0?null:n.jsxs("div",{className:"py-4 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4 px-4",children:[n.jsx("h3",{className:"font-bold text-sm text-gray-500 dark:text-gray-400",children:"Sugestões para você"}),n.jsx("button",{className:"text-xs font-bold text-primary hover:text-gray-900 dark:hover:text-white transition-colors",children:"Ver tudo"})]}),n.jsx("div",{className:"flex overflow-x-auto gap-3 pb-2 px-4 custom-scrollbar snap-x no-scrollbar",children:a.map(c=>n.jsxs("div",{className:"flex-shrink-0 w-44 bg-white dark:bg-gray-800 rounded-lg p-5 flex flex-col items-center text-center snap-start border border-gray-100 dark:border-gray-700 shadow-sm",children:[n.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] cursor-pointer mb-3",onClick:()=>e(c.uid),children:n.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-800 p-[2px]",children:c.photoURL?n.jsx("img",{src:c.photoURL,alt:c.displayName,className:"w-full h-full rounded-full object-cover"}):n.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center",children:n.jsx(pe,{className:"w-8 h-8 text-gray-400"})})})}),n.jsxs("div",{className:"mb-4 w-full",children:[n.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white truncate cursor-pointer hover:underline",onClick:()=>e(c.uid),children:c.username}),n.jsx("p",{className:"text-xs text-gray-400 truncate",children:c.displayName})]}),n.jsx(ea,{userId:c.uid,onLoginRequired:t,className:"w-full py-1 text-xs"})]},c.uid))})]})},Ah=({onSuccess:e,onBackToLogin:t})=>{const[r,a]=m.useState({fullName:"",username:"",email:"",password:"",confirmPassword:"",description:""}),[s,i]=m.useState(!1),[o,c]=m.useState(!1),[l,d]=m.useState(!1),{signup:u}=J(),h=async p=>{if(p.preventDefault(),r.password!==r.confirmPassword){E.error("As senhas não coincidem");return}if(r.password.length<6){E.error("A senha deve ter pelo menos 6 caracteres");return}d(!0);try{await u({email:r.email,password:r.password,fullName:r.fullName,username:r.username,description:r.description}),E.success("Conta criada com sucesso!"),e()}catch(g){E.error(g.message||"Erro ao criar conta")}finally{d(!1)}},f=p=>{a(g=>({...g,[p.target.name]:p.target.value}))};return n.jsxs("form",{onSubmit:h,children:[n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome Completo"}),n.jsx("input",{type:"text",name:"fullName",value:r.fullName,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome de Usuário"}),n.jsx("input",{type:"text",name:"username",value:r.username,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",pattern:"^[a-zA-Z0-9_]+$",title:"Apenas letras, números e underscore são permitidos",required:!0}),n.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"Apenas letras, números e _ são permitidos"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),n.jsx("input",{type:"email",name:"email",value:r.email,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Senha"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:s?"text":"password",name:"password",value:r.password,onChange:f,className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",minLength:6,required:!0}),n.jsx("button",{"aria-label":"showpassword",type:"button",onClick:()=>i(!s),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:s?n.jsx(vr,{className:"w-4 h-4"}):n.jsx(kr,{className:"w-4 h-4"})})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirmar Senha"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:o?"text":"password",name:"confirmPassword",value:r.confirmPassword,onChange:f,className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),n.jsx("button",{"aria-label":"confirmpassword",type:"button",onClick:()=>c(!o),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:o?n.jsx(vr,{className:"w-4 h-4"}):n.jsx(kr,{className:"w-4 h-4"})})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Descrição do Perfil (Opcional)"}),n.jsx("textarea",{name:"description",value:r.description,onChange:f,rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none",placeholder:"Conte um pouco sobre você..."})]}),n.jsx("button",{"aria-label":"submitbutton",type:"submit",disabled:l,className:"w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",children:l?"Criando conta...":"Criar Conta"})]}),n.jsx("div",{className:"mt-6 text-center",children:n.jsx("button",{"aria-label":"backlogin",type:"button",onClick:t,className:"text-sm text-primary hover:underline",children:"Já tem conta? Fazer login"})})]})},ta=({isOpen:e,onClose:t})=>{const[r,a]=m.useState("login"),[s,i]=m.useState(""),[o,c]=m.useState(""),[l,d]=m.useState(!1),[u,h]=m.useState(!1),{login:f,resetPassword:p}=J();if(!e)return null;const g=async y=>{if(y.preventDefault(),!(!s||!o)){h(!0);try{await f(s,o),E.success("Login realizado com sucesso!"),t(),w()}catch(x){E.error(x.message||"Erro ao fazer login")}finally{h(!1)}}},v=async y=>{if(y.preventDefault(),!s){E.error("Digite seu email");return}h(!0);try{await p(s),E.success("Email de recuperação enviado!"),a("login")}catch{E.error("Erro ao enviar email de recuperação")}finally{h(!1)}},w=()=>{i(""),c(""),d(!1),a("login")},b=()=>{w(),t()};return n.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[n.jsx("img",{src:"/OnNewsBr.webp",alt:"OnNews",className:"h-10 w-auto"}),n.jsxs("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:[r==="login"&&"Entrar",r==="signup"&&"Criar Conta",r==="reset-password"&&"Recuperar Senha"]}),n.jsx("button",{"aria-label":"closeModal",onClick:b,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:n.jsx(it,{className:"w-5 h-5 text-gray-500"})})]}),n.jsxs("div",{className:"p-6",children:[r==="signup"?n.jsx(Ah,{onSuccess:b,onBackToLogin:()=>a("login")}):n.jsx("form",{onSubmit:r==="login"?g:v,children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),n.jsx("input",{type:"email",value:s,onChange:y=>i(y.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]}),r==="login"&&n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Senha"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:l?"text":"password",value:o,onChange:y=>c(y.target.value),className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),n.jsx("button",{"aria-label":"showpassword",type:"button",onClick:()=>d(!l),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:l?n.jsx(vr,{className:"w-4 h-4"}):n.jsx(kr,{className:"w-4 h-4"})})]})]}),n.jsx("button",{"aria-label":"submitbutton",type:"submit",disabled:u,className:"w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",children:u?"Carregando...":r==="login"?"Entrar":"Enviar Email"})]})}),r!=="signup"&&n.jsxs("div",{className:"mt-6 space-y-3 text-center",children:[r==="login"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{"aria-label":"resetpassword",onClick:()=>a("reset-password"),className:"text-sm text-primary hover:underline block w-full",children:"Esqueci minha senha"}),n.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Não tem conta?"," ",n.jsx("button",{"aria-label":"sigup",onClick:()=>a("signup"),className:"text-primary hover:underline font-medium",children:"Criar conta"})]})]}),r==="reset-password"&&n.jsx("button",{"aria-label":"login",onClick:()=>a("login"),className:"text-sm text-primary hover:underline",children:"Voltar ao login"})]})]})]})})},ut=({category:e,searchQuery:t,onUserClick:r,userId:a,status:s="published",onEdit:i,onPostClick:o})=>{const[c,l]=m.useState([]),[d,u]=m.useState([]),[h,f]=m.useState(!0),[p,g]=m.useState(!1),[v,w]=m.useState(!1),[b,y]=m.useState(0),x=m.useRef(null),k=m.useRef(null),S=20,N=m.useCallback(async()=>{f(!0);try{a||(t?await Je.searchNews(t):e?await Je.getCategoryNews(e):await Je.getFeedNews())}catch(T){console.error("Error fetching news:",T),E.error("Erro ao carregar notícias")}finally{f(!1)}},[e,t,a]);m.useEffect(()=>{N()},[N]),m.useEffect(()=>{let T;a?T=$(_(j,"opinionPosts"),C("userId","==",a),C("status","==",s),ne("publishedAt","desc")):T=$(_(j,"opinionPosts"),C("status","==",s),ne("publishedAt","desc"));const U=X(T,R=>{const q=R.docs.map(K=>{var re;return{id:K.id,...K.data(),publishedAt:((re=K.data().publishedAt)==null?void 0:re.toDate())||new Date}});(async()=>{let K=[];if(!a)try{let G;t?G=await Je.searchNews(t):e?G=await Je.getCategoryNews(e):G=await Je.getFeedNews(),K=G.articles}catch{}const re=[...K,...q].sort((G,D)=>{const V=new Date(G.publishedAt).getTime();return new Date(D.publishedAt).getTime()-V});l(re),u(re.slice(0,S)),f(!1)})()});return()=>U()},[e,t,a]);const L=m.useCallback(()=>{if(p)return;g(!0);const T=b+1,U=T*S,R=U+S,q=c.slice(U,R);q.length>0?setTimeout(()=>{u(te=>[...te,...q]),y(T),g(!1)},500):g(!1)},[c,b,p]);m.useEffect(()=>(x.current&&x.current.disconnect(),x.current=new IntersectionObserver(T=>{T[0].isIntersecting&&!p&&L()},{threshold:.1}),k.current&&d.length>0&&x.current.observe(k.current),()=>{x.current&&x.current.disconnect()}),[d.length,p,L]);const O=()=>n.jsx("div",{className:"grid gap-6 w-full max-w-full overflow-hidden px-1",children:[1,2,3].map(T=>n.jsxs("article",{className:"bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden animate-pulse",children:[n.jsx("div",{className:"flex items-center justify-between p-3",children:n.jsxs("div",{className:"flex items-center space-x-3 w-full",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0"}),n.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3"})]})}),n.jsx("div",{className:"aspect-video md:aspect-square w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center",children:n.jsx(Ve,{className:"w-8 h-8 animate-spin text-gray-300 dark:text-gray-700"})}),n.jsxs("div",{className:"p-3 space-y-3",children:[n.jsxs("div",{className:"flex space-x-4",children:[n.jsx("div",{className:"w-7 h-7 rounded bg-gray-200 dark:bg-gray-800"}),n.jsx("div",{className:"w-7 h-7 rounded bg-gray-200 dark:bg-gray-800"}),n.jsx("div",{className:"w-7 h-7 rounded bg-gray-200 dark:bg-gray-800"})]}),n.jsxs("div",{className:"space-y-2 pt-1",children:[n.jsx("div",{className:"h-5 bg-gray-200 dark:bg-gray-800 rounded w-full"}),n.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"}),n.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"})]})]}),n.jsx("div",{className:"px-3 pb-3",children:n.jsx("div",{className:"h-9 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"})})]},`skeleton-${T}`))});if(h)return n.jsx("section",{className:"space-y-6",children:O()});const I=d.length<c.length;return n.jsxs("section",{className:"space-y-6",children:[d.length===0?n.jsxs("div",{className:"space-y-6",children:[n.jsx("div",{className:"text-center py-6",children:n.jsx("p",{className:"text-gray-500 dark:text-gray-400 font-medium",children:t?"Nenhuma publicação encontrada para sua pesquisa.":"Carregando as últimas notícias em tempo real..."})}),!t&&O()]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"grid gap-6 w-full max-w-full overflow-hidden px-1",children:d.map((T,U)=>{const R=T.type==="opinion",q=n.jsx("div",{className:"min-w-0 w-full",children:R?n.jsx(Zr,{post:T,onLoginRequired:()=>w(!0),onUserClick:r,onEdit:i,onPostClick:o}):n.jsx(Yt,{article:T,onLoginRequired:()=>w(!0),onUserClick:r})},`card-${T.id}`);return n.jsxs(H.Fragment,{children:[q,U===2&&!a&&!t&&n.jsx("div",{className:"my-2 min-w-0 w-full",children:n.jsx(ws,{onUserClick:r,onLoginRequired:()=>w(!0)})})]},T.id)})}),I&&n.jsx("div",{ref:k,className:"flex items-center justify-center py-8",children:p&&n.jsxs("div",{className:"text-center",children:[n.jsx(Ve,{className:"w-6 h-6 animate-spin text-primary mx-auto mb-2"}),n.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Carregando mais..."})]})})]}),n.jsx("div",{className:"h-28 md:hidden"}),n.jsx(ta,{isOpen:v,onClose:()=>w(!1)})]})},Ch=({onCategorySelect:e})=>{const t=[{id:"financas",name:"Finanças",icon:Wo,color:"from-green-500 to-emerald-500",bgColor:"bg-green-50 dark:bg-green-900/20",description:"Economia, investimentos e mercado financeiro"},{id:"saude",name:"Saúde",icon:le,color:"from-red-500 to-pink-500",bgColor:"bg-red-50 dark:bg-red-900/20",description:"Medicina, bem-estar e saúde pública"},{id:"educacao",name:"Educação",icon:Vo,color:"from-blue-500 to-cyan-500",bgColor:"bg-blue-50 dark:bg-blue-900/20",description:"Ensino, pesquisa e desenvolvimento acadêmico"},{id:"esportes",name:"Esportes",icon:ec,color:"from-orange-500 to-amber-500",bgColor:"bg-orange-50 dark:bg-orange-900/20",description:"Futebol, olimpíadas e competições esportivas"},{id:"ciencias",name:"Ciências",icon:Mo,color:"from-purple-500 to-violet-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",description:"Descobertas científicas e pesquisas"},{id:"tecnologia",name:"Tecnologia",icon:Yo,color:"from-indigo-500 to-blue-500",bgColor:"bg-indigo-50 dark:bg-indigo-900/20",description:"Inovação, inteligência artificial e digital"}];return n.jsxs("section",{children:[n.jsxs("div",{className:"mb-10 px-4 md:px-0",children:[n.jsx("h1",{className:"text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight",children:"Explorar"}),n.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:"Descubra notícias e artigos por área de interesse"})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(r=>{const a=r.icon;return n.jsxs("button",{"aria-label":r.name,onClick:()=>e(r.id),className:`${r.bgColor} rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:scale-105`,children:[n.jsx("div",{className:`w-12 h-12 rounded-lg bg-gradient-to-r ${r.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`,children:n.jsx(a,{className:"w-6 h-6 text-white"})}),n.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:r.name}),n.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 leading-relaxed",children:r.description})]},r.id)})})]})},Eh=({onUserClick:e})=>{const{currentUser:t}=J(),[r,a]=m.useState(""),[s,i]=m.useState(""),[o,c]=m.useState("news"),[l,d]=m.useState([]),[u,h]=m.useState(!1),f=async g=>{if(g.preventDefault(),!!r.trim()&&(i(r.trim()),o==="users")){h(!0);try{const v=_(j,"users"),w=$(v,C("username",">=",r.trim().toLowerCase()),C("username","<=",r.trim().toLowerCase()+""),Va(20));let x=(await ye(w)).docs.map(k=>({uid:k.id,...k.data()})).filter(k=>k.uid!==(t==null?void 0:t.uid));if(t){const k=await Promise.all(x.map(async S=>{const N=await Pe(F(j,"blocks",`${t.uid}_${S.uid}`)),L=await Pe(F(j,"blocks",`${S.uid}_${t.uid}`));return N.exists()||L.exists()}));x=x.filter((S,N)=>!k[N])}d(x)}catch(v){console.error("Error searching users",v)}finally{h(!1)}}},p=()=>{a(""),i(""),d([])};return n.jsxs("section",{className:"max-w-2xl mx-auto",children:[n.jsxs("div",{className:"sticky top-0 z-10 bg-white dark:bg-gray-900 pt-2 pb-4 px-4 md:px-0",children:[n.jsx("form",{onSubmit:f,className:"relative",children:n.jsxs("div",{className:"relative group",children:[n.jsx(Ot,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors group-focus-within:text-gray-600 dark:group-focus-within:text-gray-200"}),n.jsx("input",{type:"text",value:r,onChange:g=>a(g.target.value),placeholder:"Pesquisar",className:"w-full pl-11 pr-10 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-0 transition-all placeholder:text-gray-500"}),r&&n.jsx("button",{type:"button",onClick:p,className:"absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-0.5 text-white dark:text-gray-300 hover:opacity-80 transition-opacity",children:n.jsx(it,{className:"w-3 h-3"})})]})}),n.jsxs("div",{className:"flex border-b border-gray-100 dark:border-gray-800 mt-4",children:[n.jsx("button",{onClick:()=>{c("news"),p()},className:`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${o==="news"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:"Notícias"}),n.jsx("button",{onClick:()=>{c("users"),p()},className:`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${o==="users"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:"Contas"})]})]}),n.jsx("div",{className:"px-4 md:px-0",children:o==="news"?s?n.jsx("div",{className:"mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300",children:n.jsx(ut,{searchQuery:s,onUserClick:e})}):n.jsxs("div",{className:"mt-20 text-center px-10",children:[n.jsx("div",{className:"w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700",children:n.jsx(Ot,{className:"w-10 h-10 text-gray-300",strokeWidth:1.5})}),n.jsx("h2",{className:"text-xl font-bold dark:text-white mb-2",children:"Descubra Novas Histórias"}),n.jsx("p",{className:"text-sm text-gray-500",children:"Pesquise por temas, locais ou categorias de notícias."})]}):n.jsxs("div",{className:"mt-4 space-y-6",children:[!s&&n.jsx("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500",children:n.jsx(ws,{onUserClick:e,onLoginRequired:()=>{}})}),u&&n.jsx("div",{className:"flex justify-center py-10",children:n.jsx(Ve,{className:"w-8 h-8 animate-spin text-gray-400"})}),s&&!u&&l.length===0&&n.jsx("p",{className:"text-center text-gray-500 py-10",children:"Nenhum usuário encontrado."}),n.jsx("div",{className:"divide-y dark:divide-gray-800",children:l.map(g=>n.jsxs("div",{onClick:()=>e(g.uid),className:"flex items-center gap-3 py-3 cursor-pointer hover:opacity-70 transition-opacity",children:[n.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0",children:g.photoURL?n.jsx("img",{src:g.photoURL,alt:g.username,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-6 h-6 text-gray-300"})}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white truncate",children:g.username}),n.jsx("p",{className:"text-sm text-gray-500 truncate",children:g.displayName})]}),n.jsx(qo,{className:"w-4 h-4 text-gray-300"})]},g.uid))})]})})]})},vs=({isOpen:e,onClose:t,title:r,userIds:a,onUserClick:s})=>{const[i,o]=m.useState([]),[c,l]=m.useState(!0);return m.useEffect(()=>{if(!e||a.length===0){o([]),l(!1);return}(async()=>{l(!0);try{const u=a.map(async f=>{const p=await Pe(F(j,"users",f));return p.exists()?{uid:p.id,...p.data()}:null}),h=(await Promise.all(u)).filter(f=>f!==null);o(h)}catch(u){console.error("Error fetching users for list:",u)}finally{l(!1)}})()},[e,a]),e?n.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:n.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]",children:[n.jsxs("div",{className:"p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between",children:[n.jsx("h3",{className:"font-bold text-lg text-gray-900 dark:text-white",children:r}),n.jsx("button",{onClick:t,className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",children:n.jsx(it,{className:"w-6 h-6 text-gray-500"})})]}),n.jsx("div",{className:"flex-1 overflow-y-auto p-4 custom-scrollbar",children:c?n.jsx("div",{className:"flex justify-center py-8",children:n.jsx(Ve,{className:"w-8 h-8 animate-spin text-primary"})}):i.length===0?n.jsx("div",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:"Ninguém encontrado."}):n.jsx("div",{className:"space-y-4",children:i.map(d=>n.jsxs("div",{className:"flex items-center justify-between group",children:[n.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>{s(d.uid),t()},children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex-shrink-0 overflow-hidden",children:d.photoURL?n.jsx("img",{src:d.photoURL,alt:d.displayName,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-full h-full p-2 text-gray-400"})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-bold text-sm text-gray-900 dark:text-white group-hover:underline",children:d.displayName}),n.jsxs("p",{className:"text-xs text-gray-500",children:["@",d.username]})]})]}),n.jsx(ea,{userId:d.uid,className:"px-3 py-1"})]},d.uid))})})]})}):null},_h=({onUserClick:e,onEditDraft:t,onPostClick:r})=>{const{currentUser:a,logout:s}=J(),{theme:i,toggleTheme:o}=ds(),[c,l]=m.useState(!1),[d,u]=m.useState(!1),[h,f]=m.useState("grid"),p=m.useRef(null),[g,v]=m.useState([]),[w,b]=m.useState([]),[y,x]=m.useState([]),[k,S]=m.useState([]),[N,L]=m.useState([]),[O,I]=m.useState({type:null,userIds:[]}),[T,U]=m.useState(!1),[R,q]=m.useState({displayName:(a==null?void 0:a.displayName)||"",description:(a==null?void 0:a.description)||""});if(m.useEffect(()=>{if(!a)return;const D=$(_(j,"follows"),C("followingId","==",a.uid)),V=X(D,me=>{v(me.docs.map(oe=>oe.data().followerId))}),de=$(_(j,"follows"),C("followerId","==",a.uid)),ie=X(de,me=>{b(me.docs.map(oe=>oe.data().followingId))}),_e=$(_(j,"opinionPosts"),C("userId","==",a.uid),C("status","==","published"),ne("publishedAt","desc")),P=X(_e,me=>{x(me.docs.map(oe=>({id:oe.id,...oe.data()})))}),ue=$(_(j,"blocks"),C("blockerId","==",a.uid)),ks=X(ue,async me=>{const oe=me.docs.map(async ge=>{const Ne=await Pe(F(j,"users",ge.data().blockedId));return{uid:ge.data().blockedId,...Ne.data()}}),he=await Promise.all(oe);L(he)}),Ns=$(_(j,"likes"),C("userId","==",a.uid),ne("createdAt","desc")),js=X(Ns,me=>{const oe=me.docs.map(he=>{var ge;return{type:"like",data:he.data(),date:((ge=he.data().createdAt)==null?void 0:ge.toDate())||new Date}});S(he=>[...he.filter(Ne=>Ne.type!=="like"),...oe].sort((Ne,Kt)=>Kt.date.getTime()-Ne.date.getTime()))}),Ts=$(_(j,"comments"),C("userId","==",a.uid),ne("createdAt","desc")),Ss=X(Ts,me=>{const oe=me.docs.map(he=>{var ge;return{type:"comment",data:he.data(),date:((ge=he.data().createdAt)==null?void 0:ge.toDate())||new Date}});S(he=>[...he.filter(Ne=>Ne.type!=="comment"),...oe].sort((Ne,Kt)=>Kt.date.getTime()-Ne.date.getTime()))});return()=>{V(),ie(),P(),ks(),js(),Ss()}},[a]),!a)return n.jsx("div",{className:"text-center py-20",children:n.jsx("p",{className:"text-gray-500",children:"Faça login para ver seu perfil."})});const te=()=>{var D;(D=p.current)==null||D.click()},K=async D=>{var de;const V=(de=D.target.files)==null?void 0:de[0];if(V){u(!0);try{const ie=dl(Su,`profiles/${a.uid}/${Date.now()}_${V.name}`);await cl(ie,V);const _e=await ll(ie);Ae.currentUser&&await mr(Ae.currentUser,{photoURL:_e}),await _t(F(j,"users",a.uid),{photoURL:_e}),window.location.reload()}catch{E.error("Erro ao atualizar foto")}finally{u(!1)}}},re=async()=>{try{await _t(F(j,"users",a.uid),{displayName:R.displayName,description:R.description}),Ae.currentUser&&await mr(Ae.currentUser,{displayName:R.displayName}),E.success("Perfil atualizado!"),l(!1)}catch{E.error("Erro ao atualizar perfil")}},G=D=>{if(!D)return null;const V=/((?:https?:\/\/|www\.)[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}[^\s]*)/gi;return D.split(V).map((ie,_e)=>{if(ie.match(V)){let P=ie;return P.match(/^https?:\/\//i)||(P=`https://${P}`),n.jsx("a",{href:P,target:"_blank",rel:"noopener noreferrer",className:"text-primary dark:text-white font-medium hover:underline break-all",children:ie},_e)}return ie})};return n.jsxs("section",{className:"max-w-4xl mx-auto px-4 py-6 md:py-10",children:[n.jsx("input",{type:"file",ref:p,onChange:K,accept:"image/*",className:"hidden"}),n.jsxs("header",{className:"flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10",children:[n.jsxs("div",{className:"relative shrink-0 mx-auto md:mx-0",children:[n.jsx("div",{className:"w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px] cursor-pointer",onClick:te,children:n.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]",children:n.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden",children:d?n.jsx(Ve,{className:"w-8 h-8 animate-spin text-gray-400"}):a.photoURL?n.jsx("img",{src:a.photoURL,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-12 h-12 md:w-20 md:h-20 text-gray-300"})})})}),n.jsx("button",{onClick:te,className:"absolute bottom-1 right-1 md:bottom-3 md:right-3 bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-600",children:n.jsx(Lo,{className:"w-4 h-4 text-gray-900 dark:text-white"})})]}),n.jsxs("div",{className:"flex-1 w-full space-y-6",children:[n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[n.jsxs("h1",{className:"text-xl font-normal dark:text-white truncate",children:["@",a.username]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:()=>l(!0),className:"flex-1 md:flex-none px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",children:"Editar perfil"}),n.jsx("button",{onClick:()=>U(!T),className:"p-1.5 text-gray-900 dark:text-white hover:opacity-70 transition-opacity",children:n.jsx(Qo,{className:"w-6 h-6"})})]})]}),n.jsxs("div",{className:"flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800",children:[n.jsxs("div",{className:"text-center md:text-left",children:[n.jsx("span",{className:"block md:inline font-bold dark:text-white",children:y.length}),n.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"publicações"})]}),n.jsxs("button",{onClick:()=>I({type:"followers",userIds:g}),className:"text-center md:text-left hover:opacity-70 transition-opacity",children:[n.jsx("span",{className:"block md:inline font-bold dark:text-white",children:g.length}),n.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguidores"})]}),n.jsxs("button",{onClick:()=>I({type:"following",userIds:w}),className:"text-center md:text-left hover:opacity-70 transition-opacity",children:[n.jsx("span",{className:"block md:inline font-bold dark:text-white",children:w.length}),n.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguindo"})]})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("p",{className:"font-bold dark:text-white",children:a.displayName}),n.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:G(a.description)})]})]})]}),n.jsxs("div",{className:"md:hidden mb-10",children:[n.jsx("p",{className:"font-bold dark:text-white",children:a.displayName}),n.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:G(a.description)})]}),n.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800",children:n.jsxs("div",{className:"flex justify-center gap-8 sm:gap-16 -mt-[1px]",children:[n.jsxs("button",{onClick:()=>f("grid"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${h==="grid"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[n.jsx(Pr,{className:"w-3 h-3"}),n.jsx("span",{className:"hidden sm:inline",children:"Publicações"})]}),n.jsxs("button",{onClick:()=>f("drafts"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${h==="drafts"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[n.jsx(zo,{className:"w-3 h-3"}),n.jsx("span",{className:"hidden sm:inline",children:"Rascunhos"})]}),n.jsxs("button",{onClick:()=>f("list"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${h==="list"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[n.jsx(gn,{className:"w-3 h-3"}),n.jsx("span",{className:"hidden sm:inline",children:"Atividade"})]})]})}),n.jsx("div",{className:"mt-6",children:h==="grid"?n.jsxs("div",{className:"grid grid-cols-3 gap-1 md:gap-8",children:[y.map(D=>n.jsx("div",{onClick:()=>r==null?void 0:r(D),className:`aspect-square ${D.color} relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg`,children:n.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-2 text-center text-white bg-black/20 backdrop-blur-[1px]",children:n.jsx("p",{className:"text-[10px] md:text-sm font-bold line-clamp-4 px-1",children:D.title})})},D.id)),y.length===0&&n.jsxs("div",{className:"col-span-3 py-20 text-center",children:[n.jsx("div",{className:"w-16 h-16 border-2 border-gray-900 dark:border-white rounded-full flex items-center justify-center mx-auto mb-4",children:n.jsx(Ht,{className:"w-8 h-8"})}),n.jsx("p",{className:"text-xl font-bold dark:text-white",children:"Nenhuma publicação ainda"})]})]}):h==="drafts"?n.jsx("div",{className:"space-y-4",children:n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[n.jsx("div",{className:"col-span-full",children:n.jsx("p",{className:"text-sm text-gray-500 mb-4 italic",children:"Seus rascunhos salvos aparecem aqui. Clique em um deles para continuar editando."})}),n.jsx("div",{className:"col-span-full",children:n.jsx(ut,{userId:a.uid,status:"draft",onUserClick:e,onEdit:t,onPostClick:r})})]})}):n.jsxs("div",{className:"space-y-6",children:[k.map((D,V)=>{var de;return n.jsxs("div",{className:"bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm",children:[n.jsxs("div",{className:"p-3 flex items-center gap-2 text-xs text-gray-500",children:[D.type==="like"?n.jsx(le,{className:"w-3 h-3 text-red-500 fill-current"}):n.jsx(Re,{className:"w-3 h-3 text-blue-500"}),n.jsxs("span",{children:[D.type==="like"?"Curtiu":"Comentou"," • ",bt(D.date,{addSuffix:!0,locale:Xe})]})]}),((de=D.data.articleSnapshot)==null?void 0:de.type)==="opinion"?n.jsx(Zr,{post:D.data.articleSnapshot,onUserClick:e,onPostClick:r}):n.jsx(Yt,{article:D.data.articleSnapshot,onUserClick:e,onPostClick:r})]},V)}),k.length===0&&n.jsx("div",{className:"py-20 text-center text-gray-500 italic",children:"Nenhuma atividade recente encontrada."})]})}),c&&n.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:n.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 space-y-6 shadow-2xl",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("h3",{className:"text-xl font-bold dark:text-white",children:"Editar Perfil"}),n.jsx("button",{onClick:()=>l(!1),children:n.jsx(it,{className:"w-6 h-6 text-gray-400"})})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase mb-1 block",children:"Nome"}),n.jsx("input",{type:"text",value:R.displayName,onChange:D=>q(V=>({...V,displayName:D.target.value})),className:"w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase mb-1 block",children:"Bio"}),n.jsx("textarea",{rows:4,value:R.description,onChange:D=>q(V=>({...V,description:D.target.value})),className:"w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white resize-none"})]})]}),n.jsxs("button",{onClick:re,className:"w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",children:[n.jsx(yn,{className:"w-5 h-5"})," Salvar Alterações"]})]})}),T&&n.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:n.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl divide-y dark:divide-gray-800",children:[n.jsxs("button",{onClick:()=>{o(),U(!1)},className:"w-full py-4 text-sm font-bold dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:["Mudar Tema (",i==="light"?"Escuro":"Claro",")"]}),n.jsx("button",{onClick:()=>{I({type:"followers",userIds:g}),U(!1)},className:"w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:"Gerenciar Seguidores"}),n.jsx("button",{onClick:s,className:"w-full py-4 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",children:"Sair da Conta"}),n.jsx("button",{onClick:()=>U(!1),className:"w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:"Cancelar"})]})}),n.jsx(vs,{isOpen:O.type!==null,onClose:()=>I({type:null,userIds:[]}),title:O.type==="followers"?"Seguidores":"Seguindo",userIds:O.userIds,onUserClick:e})]})},Ih=({onUserClick:e})=>{const[t,r]=m.useState("notifications"),[a,s]=m.useState([]),[i,o]=m.useState([]),[c,l]=m.useState([]),[d,u]=m.useState(!0),[h,f]=m.useState(!1),{currentUser:p}=J();m.useEffect(()=>{if(!p)return;const b=$(_(j,"likes"),C("userId","==",p.uid),ne("createdAt","desc")),y=$(_(j,"comments"),C("userId","==",p.uid),ne("createdAt","desc")),x=$(_(j,"notifications"),C("toUserId","==",p.uid),ne("createdAt","desc")),k=X(b,L=>{const O=L.docs.map(I=>{var T;return{id:I.id,...I.data(),createdAt:((T=I.data().createdAt)==null?void 0:T.toDate())||new Date}});s(O)}),S=X(y,L=>{const O=L.docs.map(I=>{var T;return{id:I.id,...I.data(),createdAt:((T=I.data().createdAt)==null?void 0:T.toDate())||new Date}});o(O)}),N=X(x,L=>{const O=L.docs.map(I=>{var T;return{id:I.id,...I.data(),createdAt:((T=I.data().createdAt)==null?void 0:T.toDate())||new Date}});l(O),u(!1)});return()=>{k(),S(),N()}},[p]);const g=async()=>{if(!p)return;const b=za(j);c.filter(y=>!y.read).forEach(y=>{const x=F(j,"notifications",y.id);b.update(x,{read:!0})}),await b.commit()};if(!p)return n.jsx("div",{className:"text-center py-12",children:n.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Você precisa fazer login para ver suas ações."})});const v=[{id:"notifications",name:"Notificações",icon:er,count:c.filter(b=>!b.read).length},{id:"likes",name:"Curtidas",icon:le,count:a.length},{id:"comments",name:"Comentários",icon:Re,count:i.length}],w=()=>{if(t==="notifications")return c.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx(er,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}),n.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Você ainda não tem notificações"})]}):n.jsxs("div",{className:"space-y-4",children:[n.jsx("div",{className:"flex justify-end mb-2",children:n.jsxs("button",{onClick:g,className:"text-xs text-primary font-bold hover:underline flex items-center gap-1",children:[n.jsx(Fo,{className:"w-3 h-3"}),"Marcar todas como lidas"]})}),c.map(y=>n.jsx("div",{className:`p-4 rounded-xl border ${y.read?"bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700":"bg-blue-50/50 dark:bg-primary/5 border-primary/20"} transition-colors cursor-pointer`,onClick:()=>_t(F(j,"notifications",y.id),{read:!0}),children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden cursor-pointer",onClick:x=>{x.stopPropagation(),e==null||e(y.fromUserId)},children:y.fromUserPhoto?n.jsx("img",{src:y.fromUserPhoto,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-full h-full p-2 text-gray-400"})}),n.jsxs("div",{className:"flex-1",children:[n.jsxs("p",{className:"text-sm text-gray-900 dark:text-white",children:[n.jsxs("span",{className:"font-bold hover:underline cursor-pointer",onClick:x=>{x.stopPropagation(),e==null||e(y.fromUserId)},children:["@",y.fromUserName]})," ",y.type==="like"&&"curtiu seu artigo",y.type==="comment"&&"comentou no seu artigo",y.type==="reply"&&"respondeu seu comentário",y.type==="follow"&&"começou a seguir você",y.type==="system"&&"enviou uma mensagem",y.articleTitle&&n.jsxs("span",{className:"font-medium text-primary",children:[' "',y.articleTitle,'"']})]}),y.commentContent&&n.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1 italic border-l-2 border-gray-200 dark:border-gray-700 pl-2",children:['"',y.commentContent,'"']}),n.jsx("p",{className:"text-[10px] text-gray-400 mt-2",children:ys(y.createdAt,"dd 'de' MMMM 'às' HH:mm",{locale:Xe})})]}),!y.read&&n.jsx("div",{className:"w-2 h-2 bg-primary rounded-full self-center"})]})},y.id))]});const b=t==="likes"?a:i;return b.length===0?n.jsxs("div",{className:"text-center py-12",children:[t==="likes"?n.jsx(le,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}):n.jsx(Re,{className:"w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3"}),n.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:t==="likes"?"Você ainda não curtiu nenhuma notícia":"Você ainda não fez nenhum comentário"})]}):n.jsx("div",{className:"space-y-6",children:b.map(y=>y.articleSnapshot?n.jsxs("div",{className:"relative pl-4 border-l-2 border-gray-200 dark:border-gray-700",children:[t==="comments"&&n.jsxs("div",{className:"mb-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300 text-sm italic",children:['"',y.content,'"']}),y.articleSnapshot.type==="opinion"?n.jsx(Zr,{post:y.articleSnapshot,onLoginRequired:()=>f(!0),onUserClick:e}):n.jsx(Yt,{article:y.articleSnapshot,onLoginRequired:()=>f(!0),onUserClick:e})]},y.id):null)})};return n.jsxs("section",{className:"max-w-4xl mx-auto",children:[n.jsxs("div",{className:"mb-10 px-4 md:px-0",children:[n.jsx("h1",{className:"text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight",children:t==="notifications"?"Notificações":"Minhas Ações"}),n.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:t==="notifications"?"Fique por dentro de todas as suas interações":"Seu histórico completo de interações na plataforma"})]}),n.jsx("div",{className:"border-b border-gray-100 dark:border-gray-800 mb-6",children:n.jsx("nav",{className:"flex w-full",children:v.map(b=>{const y=b.icon;return n.jsxs("button",{id:b.id,"aria-label":b.name,onClick:()=>r(b.id),className:`flex-1 flex items-center justify-center space-x-2 py-3 px-1 border-b-2 font-bold text-xs uppercase tracking-wider transition-colors ${t===b.id?"border-primary text-primary":"border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`,children:[n.jsx(y,{className:"w-5 h-5 shrink-0"}),n.jsx("span",{className:"hidden sm:inline",children:b.name}),b.count>0&&n.jsx("span",{className:`${b.id==="notifications"?"bg-primary text-white":"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"} px-1.5 py-0.5 rounded-full text-[9px] font-black min-w-[18px] text-center`,children:b.count})]},b.id)})})}),d?n.jsxs("div",{className:"text-center py-8 flex flex-col items-center gap-2 text-gray-500",children:[n.jsx(er,{className:"w-8 h-8 animate-bounce"}),"Carregando..."]}):w(),n.jsx("div",{className:"h-28 md:hidden"}),n.jsx(ta,{isOpen:h,onClose:()=>f(!1)})]})},Dh=({userId:e,onBack:t,onUserClick:r,onLoginRequired:a,onPostClick:s})=>{const{currentUser:i}=J(),[o,c]=m.useState(null),[l,d]=m.useState("grid"),[u,h]=m.useState([]),[f,p]=m.useState([]),[g,v]=m.useState(!0),[w,b]=m.useState(!1),[y,x]=m.useState(!1),[k,S]=m.useState([]),[N,L]=m.useState([]),[O,I]=m.useState({type:null,userIds:[]});if(m.useEffect(()=>{(async()=>{try{if(v(!0),i){const[P,ue]=await Promise.all([Pe(F(j,"blocks",`${i.uid}_${e}`)),Pe(F(j,"blocks",`${e}_${i.uid}`))]);if(ue.exists()){x(!0),v(!1);return}b(P.exists())}const[q,te,K,re]=await Promise.all([Pe(F(j,"users",e)),ye($(_(j,"follows"),C("followingId","==",e))),ye($(_(j,"follows"),C("followerId","==",e))),ye($(_(j,"opinionPosts"),C("userId","==",e),C("status","==","published"),ne("publishedAt","desc")))]);q.exists()&&c(q.data()),S(te.docs.map(P=>P.data().followerId)),L(K.docs.map(P=>P.data().followingId)),p(re.docs.map(P=>({id:P.id,...P.data()})));const G=$(_(j,"likes"),C("userId","==",e),ne("createdAt","desc")),D=$(_(j,"comments"),C("userId","==",e),ne("createdAt","desc")),[V,de]=await Promise.all([ye(G),ye(D)]),ie=V.docs.map(P=>{var ue;return{type:"like",data:P.data(),date:(ue=P.data().createdAt)!=null&&ue.toDate?P.data().createdAt.toDate():new Date(P.data().createdAt)}}),_e=de.docs.map(P=>{var ue;return{type:"comment",data:P.data(),date:(ue=P.data().createdAt)!=null&&ue.toDate?P.data().createdAt.toDate():new Date(P.data().createdAt)}});h([...ie,..._e].sort((P,ue)=>ue.date.getTime()-P.date.getTime()).filter(P=>P.data.articleSnapshot))}catch(q){console.error("Error fetching public profile:",q)}finally{v(!1)}})()},[e,i]),g)return n.jsx("div",{className:"text-center py-20",children:n.jsx(Ve,{className:"w-8 h-8 animate-spin mx-auto text-gray-400"})});if(!o||y)return n.jsxs("div",{className:"text-center py-20",children:[n.jsx("p",{className:"text-gray-500",children:"Usuário não encontrado."}),n.jsx("button",{onClick:t,className:"mt-4 text-primary font-bold",children:"Voltar"})]});const T=async()=>{if(!i){a();return}window.confirm("Bloquear este usuário?")&&(await Sh(i.uid,e),E.success("Usuário bloqueado"),t())},U=R=>{if(!R)return null;const q=/((?:https?:\/\/|www\.)[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}[^\s]*)/gi;return R.split(q).map((K,re)=>{if(K.match(q)){let G=K;return G.match(/^https?:\/\//i)||(G=`https://${G}`),n.jsx("a",{href:G,target:"_blank",rel:"noopener noreferrer",className:"text-primary dark:text-white font-medium hover:underline break-all",children:K},re)}return K})};return n.jsxs("section",{className:"max-w-4xl mx-auto px-4 py-6 md:py-10",children:[n.jsxs("button",{onClick:t,className:"mb-6 flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors",children:[n.jsx(Po,{className:"w-5 h-5 mr-2"})," ",n.jsxs("span",{className:"font-bold",children:["@",o.username]})]}),n.jsxs("header",{className:"flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10",children:[n.jsx("div",{className:"relative shrink-0 mx-auto md:mx-0",children:n.jsx("div",{className:"w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px]",children:n.jsx("div",{className:"w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]",children:n.jsx("div",{className:"w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden",children:o.photoURL?n.jsx("img",{src:o.photoURL,alt:o.displayName,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-12 h-12 md:w-20 md:h-20 text-gray-300"})})})})}),n.jsxs("div",{className:"flex-1 w-full space-y-6",children:[n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[n.jsxs("h1",{className:"text-xl font-normal dark:text-white truncate",children:["@",o.username]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(ea,{userId:e,onLoginRequired:a,className:"flex-1 md:flex-none px-6 py-1.5"}),n.jsx("button",{onClick:T,className:"p-1.5 text-gray-400 hover:text-red-500 transition-colors",title:"Bloquear",children:n.jsx(Mr,{className:"w-6 h-6"})})]})]}),n.jsxs("div",{className:"flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800",children:[n.jsxs("div",{className:"text-center md:text-left",children:[n.jsx("span",{className:"block md:inline font-bold dark:text-white",children:f.length}),n.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"publicações"})]}),n.jsxs("button",{onClick:()=>I({type:"followers",userIds:k}),className:"text-center md:text-left",children:[n.jsx("span",{className:"block md:inline font-bold dark:text-white",children:k.length}),n.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguidores"})]}),n.jsxs("button",{onClick:()=>I({type:"following",userIds:N}),className:"text-center md:text-left",children:[n.jsx("span",{className:"block md:inline font-bold dark:text-white",children:N.length}),n.jsx("span",{className:"text-sm text-gray-500 md:ml-1",children:"seguindo"})]})]}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("p",{className:"font-bold dark:text-white",children:o.displayName}),n.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:U(o.description)})]})]})]}),n.jsxs("div",{className:"md:hidden mb-10",children:[n.jsx("p",{className:"font-bold dark:text-white",children:o.displayName}),n.jsx("div",{className:"text-sm dark:text-gray-300 whitespace-pre-wrap",children:U(o.description)})]}),n.jsx("div",{className:"border-t border-gray-100 dark:border-gray-800",children:n.jsxs("div",{className:"flex justify-center gap-16 -mt-[1px]",children:[n.jsxs("button",{onClick:()=>d("grid"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${l==="grid"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[n.jsx(Pr,{className:"w-3 h-3"})," ",n.jsx("span",{className:"hidden sm:inline",children:"Publicações"})]}),n.jsxs("button",{onClick:()=>d("list"),className:`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${l==="list"?"border-gray-900 dark:border-white text-gray-900 dark:text-white":"border-transparent text-gray-400"}`,children:[n.jsx(gn,{className:"w-3 h-3"})," ",n.jsx("span",{className:"hidden sm:inline",children:"Atividade"})]})]})}),l==="grid"?n.jsxs("div",{className:"grid grid-cols-3 gap-1 md:gap-8",children:[f.map(R=>n.jsx("div",{onClick:()=>s==null?void 0:s(R),className:`aspect-square ${R.color} relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg`,children:n.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-2 text-center text-white bg-black/20 backdrop-blur-[1px]",children:n.jsx("p",{className:"text-[10px] md:text-sm font-bold line-clamp-4 px-1",children:R.title})})},R.id)),f.length===0&&n.jsx("div",{className:"col-span-3 py-20 text-center text-gray-400",children:"Nenhuma publicação ainda."})]}):n.jsxs("div",{className:"space-y-6",children:[u.map((R,q)=>n.jsxs("div",{className:"bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm",children:[n.jsxs("div",{className:"p-3 flex items-center gap-2 text-xs text-gray-500",children:[R.type==="like"?n.jsx(le,{className:"w-3 h-3 text-red-500 fill-current"}):n.jsx(Re,{className:"w-3 h-3 text-blue-500"}),n.jsxs("span",{children:[R.type==="like"?"Curtiu":"Comentou"," • ",bt(R.date,{addSuffix:!0,locale:Xe})]})]}),n.jsx(Yt,{article:R.data.articleSnapshot,onUserClick:r,onLoginRequired:a})]},q)),u.length===0&&n.jsx("div",{className:"text-center py-10 text-gray-400",children:"Nenhuma atividade recente."})]}),n.jsx(vs,{isOpen:O.type!==null,onClose:()=>I({type:null,userIds:[]}),title:O.type==="followers"?"Seguidores":"Seguindo",userIds:O.userIds,onUserClick:r})]})},Ua=[{name:"Blue",value:"bg-blue-600"},{name:"Red",value:"bg-red-600"},{name:"Green",value:"bg-green-600"},{name:"Purple",value:"bg-purple-600"},{name:"Orange",value:"bg-orange-600"},{name:"Pink",value:"bg-pink-600"},{name:"Slate",value:"bg-slate-800"}],Oh=({onSuccess:e,onCancel:t,editingPost:r})=>{const{currentUser:a}=J(),[s,i]=m.useState((r==null?void 0:r.title)||""),[o,c]=m.useState((r==null?void 0:r.content)||""),[l,d]=m.useState((r==null?void 0:r.authorName)||(a==null?void 0:a.displayName)||""),[u,h]=m.useState((r==null?void 0:r.color)||Ua[0].value),[f,p]=m.useState(!1),[g,v]=m.useState(!1),w=async y=>{if(a){if(!s||!o){E.error("Preencha o título e o conteúdo");return}v(!0);try{if(y==="published"){p(!0);const x=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:`${s}
${o}`})});if(!x.ok){E.error("Erro na análise da IA. O post será salvo como rascunho."),await b("draft"),e();return}const k=await x.json();if(p(!1),!k.safe){E.error(`Violação: ${k.reason}. O post será salvo como rascunho.`),await b("draft"),e();return}}await b(y),y==="published"?E.success("Artigo publicado!"):E.success('Rascunho salvo! Você pode encontrá-lo na aba "Rascunhos" do seu perfil.'),e()}catch(x){console.error("Error saving post:",x),E.error("Erro ao salvar post")}finally{v(!1),p(!1)}}},b=async y=>{const x={userId:a==null?void 0:a.uid,userName:(a==null?void 0:a.displayName)||"Usuário",userPhoto:a==null?void 0:a.photoURL,title:s,content:o,authorName:l,color:u,status:y,publishedAt:ze(),likesCount:(r==null?void 0:r.likesCount)||0,commentsCount:(r==null?void 0:r.commentsCount)||0,type:"opinion"};if(r!=null&&r.id){const{doc:k,updateDoc:S}=await on(async()=>{const{doc:N,updateDoc:L}=await import("./firebase-W_O5dJXb.js").then(O=>O.W);return{doc:N,updateDoc:L}},[]);await S(k(j,"opinionPosts",r.id),x)}else await mt(_(j,"opinionPosts"),x)};return n.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Criar Artigo de Opinião"}),n.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-700 dark:text-gray-400",children:"Cancelar"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Título do Artigo"}),n.jsx("input",{type:"text",value:s,onChange:y=>i(y.target.value),placeholder:"Dê um título impactante",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Conteúdo"}),n.jsx("textarea",{rows:6,value:o,onChange:y=>c(y.target.value),placeholder:"Escreva seu artigo aqui...",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome do Autor (Como aparecerá)"}),n.jsx("input",{type:"text",value:l,onChange:y=>d(y.target.value),className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Cor do Card"}),n.jsx("div",{className:"flex flex-wrap gap-2",children:Ua.map(y=>n.jsx("button",{onClick:()=>h(y.value),className:`w-8 h-8 rounded-full ${y.value} ${u===y.value?"ring-2 ring-offset-2 ring-primary":""} transition-all`},y.value))})]})]}),n.jsxs("div",{className:"mt-8 pt-6 border-t border-gray-100 dark:border-gray-700",children:[n.jsx("p",{className:"text-sm font-medium text-gray-500 mb-2",children:"Prévia do Card:"}),n.jsxs("div",{className:`${u} rounded-xl p-6 text-white shadow-lg min-h-[200px] flex flex-col justify-between`,children:[n.jsx("h3",{className:"text-2xl font-bold line-clamp-3",children:s||"Título do seu Artigo"}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm opacity-90",children:l||"Seu Nome"}),n.jsxs("p",{className:"text-xs opacity-70",children:["@",(a==null?void 0:a.displayName)||"usuario"]})]})]})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-6",children:[n.jsxs("button",{onClick:()=>w("draft"),disabled:g,className:"flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50",children:[n.jsx(yn,{className:"w-4 h-4"}),"Salvar Rascunho"]}),n.jsx("button",{onClick:()=>w("published"),disabled:g,className:"flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50",children:f?n.jsxs(n.Fragment,{children:[n.jsx(Ve,{className:"w-4 h-4 animate-spin"}),"Analisando com IA..."]}):n.jsxs(n.Fragment,{children:[n.jsx(Rr,{className:"w-4 h-4"}),"Publicar Artigo"]})})]})]})]})},Ph=({post:e,onClose:t,onUserClick:r})=>{var h,f;const{interactions:a,isLiked:s,addComment:i,toggleLike:o,shareArticle:c}=Qr(e),l=`https://on-news-br.jhowtech.com.br/post/${e.id}`,d=e.content.replace(/\s+/g," ").trim().slice(0,160),u=e.publishedAt instanceof Date?e.publishedAt:((f=(h=e.publishedAt)==null?void 0:h.toDate)==null?void 0:f.call(h))||new Date(e.publishedAt);return n.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm md:p-4",children:[n.jsxs(sn,{children:[n.jsxs("title",{children:[e.title," | On News BR"]}),n.jsx("meta",{name:"description",content:d}),n.jsx("link",{rel:"canonical",href:l}),n.jsx("meta",{property:"og:type",content:"article"}),n.jsx("meta",{property:"og:title",content:e.title}),n.jsx("meta",{property:"og:description",content:d}),n.jsx("meta",{property:"og:url",content:l}),n.jsx("meta",{property:"article:published_time",content:u.toISOString()}),n.jsx("meta",{name:"twitter:title",content:e.title}),n.jsx("meta",{name:"twitter:description",content:d}),n.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Article",headline:e.title,description:d,datePublished:u.toISOString(),author:{"@type":"Person",name:e.authorName||e.userName},mainEntityOfPage:l})})]}),n.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-3xl md:rounded-2xl overflow-y-auto flex flex-col relative",children:[n.jsxs("div",{className:"sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center",children:[n.jsxs("button",{onClick:()=>r==null?void 0:r(e.userId),className:"flex items-center gap-3 group",children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden",children:e.userPhoto?n.jsx("img",{src:e.userPhoto,alt:e.userName,className:"w-full h-full object-cover"}):n.jsx(pe,{className:"w-6 h-6 text-primary"})}),n.jsxs("div",{className:"text-left",children:[n.jsx("p",{className:"font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors",children:e.userName}),n.jsxs("p",{className:"text-xs text-gray-500",children:["@",e.userName.toLowerCase().replace(/ /g,"")]})]})]}),n.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors",children:n.jsx(it,{className:"w-6 h-6 text-gray-500"})})]}),n.jsxs("div",{className:"flex-1 p-6 space-y-6",children:[n.jsxs("div",{className:"w-full min-h-[320px] md:min-h-[400px] rounded-2xl p-8 pt-20 flex flex-col justify-end shadow-2xl relative overflow-hidden",style:{background:`linear-gradient(135deg, ${e.cardColor||"#10b981"} 0%, ${e.cardColor||"#10b981"}dd 100%)`},children:[n.jsx("div",{className:"absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-wider",children:"Artigo de Opinião"}),n.jsx("h1",{className:"text-2xl md:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg",children:e.title}),n.jsxs("div",{className:"flex items-center gap-2 text-white/90 text-sm font-medium",children:[n.jsx($o,{className:"w-4 h-4"}),(()=>{var g,v;const p=e.publishedAt instanceof Date?e.publishedAt:((v=(g=e.publishedAt)==null?void 0:g.toDate)==null?void 0:v.call(g))||new Date(e.publishedAt);return bt(p,{addSuffix:!0,locale:Xe})})()]})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsx("h2",{className:"text-xl font-bold dark:text-white",children:"Conteúdo"}),n.jsx("div",{className:"text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-lg",children:e.content})]}),n.jsx("div",{className:"pt-6 border-t border-gray-100 dark:border-gray-800",children:n.jsx("div",{className:"flex items-center justify-between mb-6",children:n.jsxs("div",{className:"flex items-center space-x-6",children:[n.jsxs("button",{onClick:o,className:`flex items-center gap-2 transition-all ${s?"text-red-500":"text-gray-900 dark:text-white"}`,children:[n.jsx(le,{className:`w-8 h-8 ${s?"fill-current":""}`,strokeWidth:2.5}),n.jsx("span",{className:"font-bold",children:a.likesCount})]}),n.jsxs("div",{className:"flex items-center gap-2 text-gray-900 dark:text-white",children:[n.jsx(Re,{className:"w-8 h-8",strokeWidth:2.5}),n.jsx("span",{className:"font-bold",children:a.commentsCount})]}),n.jsx("button",{onClick:()=>c(`${window.location.origin}/post/${e.id}`,e.title),className:"text-gray-900 dark:text-white hover:text-primary transition-colors",children:n.jsx(Wt,{className:"w-8 h-8",strokeWidth:2.5})})]})})}),n.jsx(Jr,{articleId:e.id,comments:a.comments,onUserClick:r,onAddComment:i})]})]})]})},Mh=e=>{m.useEffect(()=>{if(!e||!lr)return;(async()=>{try{if(await Notification.requestPermission()==="granted"){const s=await Nu(lr,{vapidKey:void 0});if(s){const i=F(j,"users",e.uid);await _t(i,{fcmTokens:Ys(s)})}}}catch(a){console.error("Error getting push token:",a)}})();const r=ju(lr,a=>{console.log("Foreground message received:",a),a.notification&&E(s=>{var i,o;return n.jsxs("div",{className:"flex flex-col gap-1",children:[n.jsx("span",{className:"font-bold",children:(i=a.notification)==null?void 0:i.title}),n.jsx("span",{className:"text-sm",children:(o=a.notification)==null?void 0:o.body})]})},{icon:"🔔",duration:5e3})});return()=>r()},[e])},Rh=()=>{const[e,t]=m.useState("feed"),[r,a]=m.useState(null),[s,i]=m.useState(null),[o,c]=m.useState(""),[l,d]=m.useState(null),[u,h]=m.useState(!1),[f,p]=m.useState(0),{currentUser:g}=J();Mh(g),m.useEffect(()=>{const N=async()=>{var I;const O=window.location.pathname.match(/^\/post\/([^/]+)/);if(O){const T=O[1];if((s==null?void 0:s.id)===T)return;try{const{doc:U,getDoc:R}=await on(async()=>{const{doc:te,getDoc:K}=await import("./firebase-W_O5dJXb.js").then(re=>re.W);return{doc:te,getDoc:K}},[]),q=await R(U(j,"opinionPosts",T));if(q.exists()){const te=q.data();i({id:q.id,...te,publishedAt:((I=te.publishedAt)==null?void 0:I.toDate())||new Date})}}catch(U){console.error("Error loading deep-linked post:",U)}}else i(null)};return N(),window.addEventListener("popstate",N),()=>window.removeEventListener("popstate",N)},[s==null?void 0:s.id]);const v=N=>{i(N),window.history.pushState({postId:N.id},"",`/post/${N.id}`)},w=N=>{a(N),t("create-post")};m.useEffect(()=>{if(g){const N=Nh(g.uid,L=>{p(L)});return()=>N()}},[g]);const b=N=>{if(!g&&(N==="profile"||N==="my-actions"||N==="create-post"||N==="notifications")){h(!0);return}t(N),d(null),N!=="categories"&&c("")},y=N=>{c(N)},x=N=>{g&&N===g.uid?b("profile"):(d(N),t("user-profile"))},k=()=>{if(e==="user-profile"&&l)return n.jsx(Dh,{userId:l,onBack:()=>{d(null),t("feed")},onUserClick:x,onLoginRequired:()=>h(!0),onPostClick:v});if(e==="categories"&&o)return n.jsx("div",{className:"pb-16 md:pb-0",children:n.jsx(ut,{category:o,onUserClick:x})});switch(e){case"feed":return n.jsx(ut,{onUserClick:x,onPostClick:v});case"categories":return n.jsx(Ch,{onCategorySelect:y});case"search":return n.jsx(Eh,{onUserClick:x,onPostClick:v});case"profile":return n.jsx(_h,{onUserClick:x,onEditDraft:w,onPostClick:v});case"my-actions":case"notifications":return n.jsx(Ih,{onUserClick:x,onPostClick:v});case"create-post":return n.jsx("div",{className:"max-w-2xl mx-auto py-4",children:n.jsx(Oh,{editingPost:r,onSuccess:()=>{a(null),t("feed")},onCancel:()=>{a(null),t("feed")}})});default:return n.jsx(ut,{onUserClick:x})}},S=()=>e==="categories"&&o?{financas:"Finanças",saude:"Saúde",educacao:"Educação",esportes:"Esportes",ciencias:"Ciências",tecnologia:"Tecnologia"}[o]||o:null;return n.jsxs("div",{className:"h-screen w-full max-w-full bg-white dark:bg-gray-900 transition-colors flex flex-col overflow-hidden",children:[n.jsxs(sn,{children:[n.jsx("title",{children:"On News BR | Portal de Notícias e Rede Social"}),n.jsx("meta",{name:"description",content:"Acompanhe as últimas notícias do Brasil em tempo real no On News BR. Atualizações sobre política, economia, esportes e tecnologia. Crie seu perfil e participe das discussões."}),n.jsx("link",{rel:"canonical",href:"https://on-news-br.jhowtech.com.br/"}),n.jsx("meta",{property:"og:title",content:"On News BR | Conecte-se com a informação"}),n.jsx("meta",{property:"og:description",content:"Descubra o que está acontecendo no mundo agora. Leia, curta e debata as notícias mais importantes do dia no On News BR."}),n.jsx("meta",{property:"og:url",content:"https://on-news-br.jhowtech.com.br/"})]}),n.jsx("header",{className:"md:hidden glass border-b border-gray-100 dark:border-gray-800 w-full overflow-hidden flex-shrink-0",children:n.jsxs("div",{className:"flex items-center justify-between px-4 h-14 w-full",children:[n.jsx("div",{className:"flex items-center space-x-1 cursor-pointer select-none",onClick:()=>b("feed"),children:n.jsx("span",{className:"font-serif italic text-xl font-black text-gray-900 dark:text-white tracking-tight",children:"On News"})}),n.jsxs("div",{className:"flex items-center space-x-5",children:[n.jsx("button",{onClick:()=>b("create-post"),className:"text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity",children:n.jsx(Ht,{className:"w-6 h-6",strokeWidth:2})}),n.jsxs("button",{onClick:()=>b("notifications"),className:"relative text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity",children:[n.jsx(le,{className:"w-6 h-6",strokeWidth:2}),f>0&&n.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"})]})]})]})}),n.jsxs("div",{className:"flex flex-1 w-full overflow-hidden",children:[n.jsx("div",{className:"hidden md:block",children:n.jsx(Eu,{activeItem:e,onItemChange:b})}),n.jsx("main",{className:"flex-1 w-full max-w-full min-w-0 overflow-y-auto overflow-x-hidden md:pl-64 custom-scrollbar",children:n.jsxs("div",{className:"w-full max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-10",children:[(o||e==="categories")&&!l&&n.jsx("div",{className:"mb-6",children:o&&n.jsxs("div",{className:"flex items-center space-x-4",children:[n.jsx("button",{onClick:()=>c(""),className:"text-primary dark:text-white hover:underline text-sm",children:"← Voltar"}),n.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:S()})]})}),n.jsx("div",{className:"animate-in fade-in duration-500",children:k()})]})})]}),n.jsx(_u,{activeItem:e,onItemChange:b}),n.jsx(Iu,{}),n.jsx(ta,{isOpen:u,onClose:()=>h(!1)}),s&&n.jsx(Ph,{post:s,onClose:()=>{i(null),window.history.pushState({},"","/")},onUserClick:N=>{i(null),window.history.pushState({},"","/"),x(N)}}),n.jsx(Io,{position:"top-right",toastOptions:{duration:4e3,className:"dark:bg-gray-800 dark:text-white"}})]})};function $h(){return n.jsx(Cu,{children:n.jsx(Au,{children:n.jsx(Rh,{})})})}Ga(document.getElementById("root")).render(n.jsx(m.StrictMode,{children:n.jsxs(nn,{children:[n.jsx($h,{}),n.jsx(ui,{})]})}));
