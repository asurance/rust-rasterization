(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(n,t,e){"use strict";e.r(t);var r=e(2);e.d(t,"Context",(function(){return r.a})),e.d(t,"__wbindgen_object_drop_ref",(function(){return r.l})),e.d(t,"__wbg_getContext_554fc171434d411b",(function(){return r.c})),e.d(t,"__wbg_instanceof_CanvasRenderingContext2d_1112667cc1f23532",(function(){return r.e})),e.d(t,"__wbg_width_fe8c60ee753fcbd0",(function(){return r.i})),e.d(t,"__wbg_height_144b34836e4e98e5",(function(){return r.d})),e.d(t,"__wbindgen_string_new",(function(){return r.n})),e.d(t,"__wbg_setfillStyle_379229e7549f4190",(function(){return r.h})),e.d(t,"__wbg_fillRect_45e261a0d8e4d566",(function(){return r.b})),e.d(t,"__wbindgen_json_serialize",(function(){return r.k})),e.d(t,"__wbg_newwithu8clampedarrayandsh_e53f440c9ae68467",(function(){return r.f})),e.d(t,"__wbg_putImageData_b290181a4e24024c",(function(){return r.g})),e.d(t,"__wbindgen_debug_string",(function(){return r.j})),e.d(t,"__wbindgen_throw",(function(){return r.o})),e.d(t,"__wbindgen_rethrow",(function(){return r.m}))},function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return x})),e.d(t,"l",(function(){return j})),e.d(t,"c",(function(){return O})),e.d(t,"e",(function(){return C})),e.d(t,"i",(function(){return k})),e.d(t,"d",(function(){return S})),e.d(t,"n",(function(){return A})),e.d(t,"h",(function(){return D})),e.d(t,"b",(function(){return I})),e.d(t,"k",(function(){return T})),e.d(t,"f",(function(){return $})),e.d(t,"g",(function(){return E})),e.d(t,"j",(function(){return P})),e.d(t,"o",(function(){return J})),e.d(t,"m",(function(){return R}));var r=e(3);const u=new Array(32).fill(void 0);function o(n){return u[n]}u.push(void 0,null,!0,!1);let i=u.length;function c(n){const t=o(n);return function(n){n<36||(u[n]=i,i=n)}(n),t}let f=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let l=null;function d(){return null!==l&&l.buffer===r.h.buffer||(l=new Uint8Array(r.h.buffer)),l}function a(n,t){return f.decode(d().subarray(n,n+t))}function s(n){i===u.length&&u.push(u.length+1);const t=i;return i=u[t],u[t]=n,t}let _=0;let b=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const g="function"==typeof b.encodeInto?function(n,t){return b.encodeInto(n,t)}:function(n,t){const e=b.encode(n);return t.set(e),{read:n.length,written:e.length}};function h(n,t,e){if(void 0===e){const e=b.encode(n),r=t(e.length);return d().subarray(r,r+e.length).set(e),_=e.length,r}let r=n.length,u=t(r);const o=d();let i=0;for(;i<r;i++){const t=n.charCodeAt(i);if(t>127)break;o[u+i]=t}if(i!==r){0!==i&&(n=n.slice(i)),u=e(u,r,r=i+3*n.length);const t=d().subarray(u+i,u+r);i+=g(n,t).written}return _=i,u}let w=null;function p(){return null!==w&&w.buffer===r.h.buffer||(w=new Int32Array(r.h.buffer)),w}let y=null;function m(n,t){return(null!==y&&y.buffer===r.h.buffer||(y=new Uint8ClampedArray(r.h.buffer)),y).subarray(n/1,n/1+t)}function v(n){return function(){try{return n.apply(this,arguments)}catch(n){r.b(s(n))}}}class x{static __wrap(n){const t=Object.create(x.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,r.a(n)}constructor(n){var t=r.g(s(n));return x.__wrap(t)}clearWithColor(n){var t=h(n,r.c,r.d),e=_;r.e(this.ptr,t,e)}drawMesh(n,t){var e=h(t,r.c,r.d),u=_;r.f(this.ptr,s(n),e,u)}}const j=function(n){c(n)},O=v((function(n,t,e){var r=o(n).getContext(a(t,e));return null==r?0:s(r)})),C=function(n){return o(n)instanceof CanvasRenderingContext2D},k=function(n){return o(n).width},S=function(n){return o(n).height},A=function(n,t){return s(a(n,t))},D=function(n,t){o(n).fillStyle=o(t)},I=function(n,t,e,r,u){o(n).fillRect(t,e,r,u)},T=function(n,t){const e=o(t);var u=h(JSON.stringify(void 0===e?null:e),r.c,r.d),i=_;p()[n/4+1]=i,p()[n/4+0]=u},$=v((function(n,t,e,r){return s(new ImageData(m(n,t),e>>>0,r>>>0))})),E=v((function(n,t,e,r){o(n).putImageData(o(t),e,r)})),P=function(n,t){var e=h(function n(t){const e=typeof t;if("number"==e||"boolean"==e||null==t)return""+t;if("string"==e)return`"${t}"`;if("symbol"==e){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==e){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const e=t.length;let r="[";e>0&&(r+=n(t[0]));for(let u=1;u<e;u++)r+=", "+n(t[u]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(t));let u;if(!(r.length>1))return toString.call(t);if(u=r[1],"Object"==u)try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:u}(o(t)),r.c,r.d),u=_;p()[n/4+1]=u,p()[n/4+0]=e},J=function(n,t){throw new Error(a(n,t))},R=function(n){throw c(n)}}).call(this,e(4)(n))},function(n,t,e){"use strict";var r=e.w[n.i];n.exports=r;e(2);r.i()},function(n,t){n.exports=function(n){if(!n.webpackPolyfill){var t=Object.create(n);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]]);