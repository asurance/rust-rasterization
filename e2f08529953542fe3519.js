!function(e){function n(n){for(var t,o,i=n[0],u=n[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(f&&f(n);s.length;)s.shift()()}var t={},r={0:0};var o={};var i={3:function(){return{"./index_bg.js":{__wbindgen_debug_string:function(e,n){return t[2].exports.h(e,n)},__wbindgen_object_drop_ref:function(e){return t[2].exports.j(e)},__wbg_getContext_554fc171434d411b:function(e,n,r){return t[2].exports.c(e,n,r)},__wbg_instanceof_CanvasRenderingContext2d_1112667cc1f23532:function(e){return t[2].exports.e(e)},__wbg_width_fe8c60ee753fcbd0:function(e){return t[2].exports.g(e)},__wbg_height_144b34836e4e98e5:function(e){return t[2].exports.d(e)},__wbindgen_string_new:function(e,n){return t[2].exports.k(e,n)},__wbg_setfillStyle_379229e7549f4190:function(e,n){return t[2].exports.f(e,n)},__wbg_fillRect_45e261a0d8e4d566:function(e,n,r,o,i){return t[2].exports.b(e,n,r,o,i)},__wbindgen_json_serialize:function(e,n){return t[2].exports.i(e,n)},__wbindgen_throw:function(e,n){return t[2].exports.l(e,n)}}}}};function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=c);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=function(e){return u.p+""+{1:"f9fc853301f18d100a81"}[e]+".js"}(e);var f=new Error;s=function(n){a.onerror=a.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return({1:[3]}[e]||[]).forEach((function(e){var t=o[e];if(t)n.push(t);else{var r,c=i[e](),s=fetch(u.p+""+{3:"952ac2d9995a0f9f58e4"}[e]+".module.wasm");if(c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(s),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(s,c);else{r=s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)}))}n.push(o[e]=r.then((function(n){return u.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e},u.w={};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var f=s;u(u.s=0)}([function(e,n,t){"use strict";const r=document.createElement("canvas");r.width=512,r.height=512,document.body.appendChild(r),t.e(1).then(t.bind(null,1)).then(e=>{const n=new e.Context(r);n.clearWithColor("#00FF00"),n.drawMesh({position:[0,0,256,256]},"#FF0000"),n.free()}).catch(console.error)}]);