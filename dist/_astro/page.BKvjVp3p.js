const __vite__mapDeps=(e,t=__vite__mapDeps,n=t.f||(t.f=["_astro/SwupA11yPlugin.DoYEcDSF.js","_astro/Swup.BrBqE6xR.js","_astro/index.modern.BC8Oj8jT.js","_astro/SwupPreloadPlugin.BeqCNu-Z.js","_astro/SwupScrollPlugin.Dz44N6y9.js","_astro/SwupHeadPlugin.d6nb3Z__.js","_astro/SwupScriptsPlugin.CRD5-C2F.js"]))=>e.map((e=>n[e]));import{_ as o}from"./preload-helper.CLcXU_4U.js";function i(e){return JSON.parse(e,_)}function _(e,t){if(Array.isArray(t)&&2===t.length&&"string"==typeof t[1]){const e=t[0];if(t=t[1],":regex:"===e){const e=t.match(/\/(.*?)\/([a-z]*)?$/i)||[];return new RegExp(e[1],e[2]||"")}if(":function:"===e)return new Function(`return (${t}).apply(this, arguments);`)}return t}function d(e,{timeoutFallback:t=1e3}={}){"requestIdleCallback"in window?window.requestIdleCallback((()=>e())):setTimeout((()=>e()),t)}function c(e){"complete"===document.readyState?setTimeout((()=>e()),0):window.addEventListener("load",(()=>e()))}function l(e,{delayAfterLoad:t=0}={}){c((()=>{t>0?setTimeout((()=>d(e)),t):d(e)}))}async function f(){const[e,t,n,a,s,r]=await Promise.all([o((()=>import("./Swup.BrBqE6xR.js").then((e=>e.S))),[]).then((e=>e.default)),o((()=>import("./SwupA11yPlugin.DoYEcDSF.js")),__vite__mapDeps([0,1,2])).then((e=>e.default)),o((()=>import("./SwupPreloadPlugin.BeqCNu-Z.js")),__vite__mapDeps([3,2,1])).then((e=>e.default)),o((()=>import("./SwupScrollPlugin.Dz44N6y9.js")),__vite__mapDeps([4,2,1])).then((e=>e.default)),o((()=>import("./SwupHeadPlugin.d6nb3Z__.js")),__vite__mapDeps([5,2])).then((e=>e.default)),o((()=>import("./SwupScriptsPlugin.CRD5-C2F.js")),__vite__mapDeps([6,2])).then((e=>e.default))]),u=new e({animationSelector:'[class*="transition-swup-"]',containers:["main","#toc"],cache:!0,plugins:[new t(i("{}")),new n(i('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),new a(i("{}")),new s(i('{"awaitAssets":true}')),new r(i("{}"))]}),p=e=>document.dispatchEvent(new Event(e));u.hooks.before("content:replace",(()=>p("astro:before-swap"))),u.hooks.on("content:replace",(()=>p("astro:after-swap"))),u.hooks.on("page:view",(()=>p("astro:page-load"))),window.swup=u}l(f);