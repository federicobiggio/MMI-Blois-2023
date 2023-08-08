(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}pa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=pa;
function w(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.wa=b.prototype}
function va(){this.U=!1;this.m=null;this.i=void 0;this.h=1;this.s=this.l=0;this.A=this.j=null}
function wa(a){if(a.U)throw new TypeError("Generator is already running");a.U=!0}
va.prototype.ja=function(a){this.i=a};
function xa(a,b){a.j={exception:b,pd:!0};a.h=a.l||a.s}
va.prototype.return=function(a){this.j={return:a};this.h=this.s};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.v=function(a){this.h=a};
function ya(a,b,c){a.l=b;void 0!=c&&(a.s=c)}
function za(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.pd?a.h=a.l||a.s:void 0!=b.v&&a.s<b.v?(a.h=b.v,a.j=null):a.h=a.s:a.h=0}
function Ba(a){this.h=new va;this.i=a}
function Ca(a,b){wa(a.h);var c=a.h.m;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.U=!1,e;var f=e.value}catch(g){return a.h.m=null,xa(a.h,g),Ea(a)}a.h.m=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.U=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.U=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.pd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){wa(a.h);a.h.m?b=Da(a,a.h.m.next,b,a.h.ja):(a.h.ja(b),b=Ea(a));return b};
this.throw=function(b){wa(a.h);a.h.m?b=Da(a,a.h.m["throw"],b,a.h.ja):(xa(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ga(new Fa(new Ba(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return oa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.U=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.X),reject:g(this.m)}};
b.prototype.X=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.W(g):this.s(g)}};
b.prototype.W=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.na(h,g):this.s(g)};
b.prototype.m=function(g){this.ja(2,g)};
b.prototype.s=function(g){this.ja(1,g)};
b.prototype.ja=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.aa();this.A()};
b.prototype.aa=function(){var g=this;e(function(){if(g.P()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.P=function(){if(this.U)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Vb(h.resolve,h.reject)};
b.prototype.na=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(x){try{l(t(x))}catch(z){n(z)}}:p}
var l,n,r=new b(function(t,p){l=t;n=p});
this.Vb(k(g,l),k(h,n));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Vb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.U=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Vb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function r(x){return function(z){t[x]=z;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).Vb(r(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&ja(h[0],l))for(h=0;h<n.length;h++){var r=n[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:h,entry:r}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ra:Sa;return Ta.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.wa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},bb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},db=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
bb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function fb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function gb(a,b){b=ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a){for(var b in a)return!1;return!0}
function mb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function nb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ob(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function pb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function qb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=qb(a[c]);return b}
var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var tb;function ub(){if(void 0===tb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){C.console&&C.console.error(c.message)}tb=a}else tb=a}return tb}
;function vb(a,b){this.j=a===wb&&b||""}
vb.prototype.i=!0;vb.prototype.h=function(){return this.j};
function xb(a){return new vb(wb,a)}
var wb={};xb("");var yb={};function zb(a){this.j=a;this.i=!0}
zb.prototype.toString=function(){return this.j.toString()};
zb.prototype.h=function(){return this.j.toString()};function Ab(a){this.j=a}
Ab.prototype.toString=function(){return this.j+""};
Ab.prototype.i=!0;Ab.prototype.h=function(){return this.j.toString()};
function Bb(a){if(a instanceof Ab&&a.constructor===Ab)return a.j;La(a);return"type_error:TrustedResourceUrl"}
var Cb={};function Db(a){var b=ub();a=b?b.createScriptURL(a):a;return new Ab(a,Cb)}
;var Eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Fb(a){this.j=a}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.i=!0;Fb.prototype.h=function(){return this.j.toString()};
function Gb(a){if(a instanceof Fb&&a.constructor===Fb)return a.j;La(a);return"type_error:SafeUrl"}
var Hb;try{new URL("s://g"),Hb=!0}catch(a){Hb=!1}var Ib=Hb,Jb={},Kb=new Fb("about:invalid#zClosurez",Jb);var Lb,Mb=E("CLOSURE_FLAGS"),Nb=Mb&&Mb[610401301];Lb=null!=Nb?Nb:!1;function Ob(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=C.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Lb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Lb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:F("Opera")}
function Ub(){return Sb()?!1:F("Trident")||F("MSIE")}
function Vb(){return F("Firefox")||F("FxiOS")}
function Wb(){return Sb()?Rb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Sb()?0:F("Edge"))||F("Silk")}
;function Xb(a){this.j=a;this.i=!0}
Xb.prototype.h=function(){return this.j.toString()};
Xb.prototype.toString=function(){return this.j.toString()};function Yb(){a:{var a=C.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Zb.test(a))break a;a=""}return a}
var Zb=/^[\w+/_-]+[=]{0,2}$/;function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function hc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)ic(a[b],a[b+1],c);return c.join("&")}
function kc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function lc(a,b){var c=2==arguments.length?jc(arguments[1],0):jc(arguments,1);return hc(a,c)}
function mc(a,b){b=kc(b);return hc(a,b)}
function nc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return hc(a,b+c)}
function oc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var pc=/#|$/,qc=/[?&]($|#)/;function rc(a,b){for(var c=a.search(pc),d=0,e,f=[];0<=(e=oc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(qc,"$1")}
;function sc(a){this.dd=a}
;function tc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.pb=new Map}
m=tc.prototype;m.Sd=function(a){var b=B.apply(1,arguments),c=this.yc(b);c?c.push(new sc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.kd(B.apply(1,arguments));this.pb.set(b,[new sc(a)])};
m.yc=function(){var a=this.kd(B.apply(0,arguments));return this.pb.has(a)?this.pb.get(a):void 0};
m.ke=function(){var a=this.yc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.pb.clear()};
m.kd=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function uc(a,b){tc.call(this,a,3,b)}
w(uc,tc);uc.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ke(b);d&&(c=d.dd);this.Cd(c+a,b)};function vc(a,b){tc.call(this,a,2,b)}
w(vc,tc);vc.prototype.record=function(a){this.Sd(a,B.apply(1,arguments))};function wc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function xc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?xc.apply(null,d):wc(d)}}
;function G(){this.ja=this.ja;this.U=this.U}
G.prototype.ja=!1;G.prototype.h=function(){return this.ja};
G.prototype.dispose=function(){this.ja||(this.ja=!0,this.M())};
function yc(a,b){zc(a,Ua(wc,b))}
function zc(a,b){a.ja?b():(a.U||(a.U=[]),a.U.push(b))}
G.prototype.M=function(){if(this.U)for(;this.U.length;)this.U.shift()()};function Ac(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ac.prototype.stopPropagation=function(){this.j=!0};
Ac.prototype.preventDefault=function(){this.defaultPrevented=!0};function Bc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Dc[c])c=Dc[c];else{c=String(c);if(!Dc[c]){var f=/function\s+([^\(]+)/m.exec(c);Dc[c]=f?f[1]:"[Anonymous]"}c=Dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Cc(a,b){b||(b={});b[Ec(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ec(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Cc(a,b));return c}
function Ec(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Dc={};var Fc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Gc(){return Lb?!!Pb&&!!Pb.platform:!1}
function Hc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Ic(a){Ic[" "](a);return a}
Ic[" "]=function(){};var Jc=Tb(),Kc=Ub(),Lc=F("Edge"),Mc=F("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Nc=-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge");Nc&&F("Mobile");Gc()||F("Macintosh");Gc()||F("Windows");(Gc()?"Linux"===Pb.platform:F("Linux"))||Gc()||F("CrOS");var Oc=C.navigator||null;Oc&&(Oc.appVersion||"").indexOf("X11");var Pc=Gc()?"Android"===Pb.platform:F("Android");Hc();F("iPad");F("iPod");Hc()||F("iPad")||F("iPod");Ob().toLowerCase().indexOf("kaios");
function Qc(){var a=C.document;return a?a.documentMode:void 0}
var Rc;a:{var Sc="",Tc=function(){var a=Ob();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Tc&&(Sc=Tc?Tc[1]:"");if(Kc){var Uc=Qc();if(null!=Uc&&Uc>parseFloat(Sc)){Rc=String(Uc);break a}}Rc=Sc}var Vc=Rc,Wc;if(C.document&&Kc){var Xc=Qc();Wc=Xc?Xc:parseInt(Vc,10)||void 0}else Wc=void 0;var Yc=Wc;function Zc(a,b){Ac.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Va(Zc,Ac);var $c={2:"touch",3:"pen",4:"mouse"};
Zc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Mc){a:{try{Ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:$c[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Zc.wa.preventDefault.call(this)};
Zc.prototype.stopPropagation=function(){Zc.wa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Zc.prototype.preventDefault=function(){Zc.wa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ad="closure_listenable_"+(1E6*Math.random()|0);var bd=0;function cd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Zb=e;this.key=++bd;this.Qb=this.Ub=!1}
function dd(a){a.Qb=!0;a.listener=null;a.proxy=null;a.src=null;a.Zb=null}
;function ed(a){this.src=a;this.listeners={};this.h=0}
ed.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=fd(a,b,d,e);-1<g?(b=a[g],c||(b.Ub=!1)):(b=new cd(b,this.src,f,!!d,e),b.Ub=c,a.push(b));return b};
ed.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=fd(e,b,c,d);return-1<b?(dd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function gd(a,b){var c=b.type;c in a.listeners&&gb(a.listeners[c],b)&&(dd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function fd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qb&&f.listener==b&&f.capture==!!c&&f.Zb==d)return e}return-1}
;var hd="closure_lm_"+(1E6*Math.random()|0),id={},jd=0;function kd(a,b,c,d,e){if(d&&d.once)ld(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)kd(a,b[f],c,d,e);else c=md(c),a&&a[ad]?a.listen(b,c,Na(d)?!!d.capture:!!d,e):nd(a,b,c,!1,d,e)}
function nd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=od(a);h||(a[hd]=h=new ed(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=pd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Fc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jd++}}
function pd(){function a(c){return b.call(a.src,a.listener,c)}
var b=rd;return a}
function ld(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else c=md(c),a&&a[ad]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):nd(a,b,c,!0,d,e)}
function sd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sd(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=md(c),a&&a[ad])?a.i.remove(String(b),c,d,e):a&&(a=od(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=fd(b,c,d,e)),(c=-1<a?b[a]:null)&&td(c))}
function td(a){if("number"!==typeof a&&a&&!a.Qb){var b=a.src;if(b&&b[ad])gd(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jd--;(c=od(b))?(gd(c,a),0==c.h&&(c.src=null,b[hd]=null)):dd(a)}}}
function qd(a){return a in id?id[a]:id[a]="on"+a}
function rd(a,b){if(a.Qb)a=!0;else{b=new Zc(b,this);var c=a.listener,d=a.Zb||a.src;a.Ub&&td(a);a=c.call(d,b)}return a}
function od(a){a=a[hd];return a instanceof ed?a:null}
var ud="__closure_events_fn_"+(1E9*Math.random()>>>0);function md(a){if("function"===typeof a)return a;a[ud]||(a[ud]=function(b){return a.handleEvent(b)});
return a[ud]}
;function vd(){G.call(this);this.i=new ed(this);this.Hb=this;this.xa=null}
Va(vd,G);vd.prototype[ad]=!0;m=vd.prototype;m.addEventListener=function(a,b,c,d){kd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){sd(this,a,b,c,d)};
function wd(a,b){var c=a.xa;if(c){var d=[];for(var e=1;c;c=c.xa)d.push(c),++e}a=a.Hb;c=b.type||b;"string"===typeof b?b=new Ac(b,a):b instanceof Ac?b.target=b.target||a:(e=b,b=new Ac(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=xd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=xd(g,c,!0,b)&&e,b.j||(e=xd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=xd(g,c,!1,b)&&e}
m.M=function(){vd.wa.M.call(this);this.removeAllListeners();this.xa=null};
m.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,dd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function xd(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Qb&&g.capture==c){var h=g.listener,k=g.Zb||g.src;g.Ub&&gd(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function yd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
yd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function zd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Ad(a,b){return a+Math.random()*(b-a)}
;function Bd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Bd.prototype;m.clone=function(){return new Bd(this.x,this.y)};
m.equals=function(a){return a instanceof Bd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Cd(a,b){this.width=a;this.height=b}
m=Cd.prototype;m.clone=function(){return new Cd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Dd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ed(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Fd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Gd;function Hd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Ed("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Id(a){C.setTimeout(function(){throw a;},0)}
;function Jd(){this.i=this.h=null}
Jd.prototype.add=function(a,b){var c=Kd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Jd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Kd=new yd(function(){return new Ld},function(a){return a.reset()});
function Ld(){this.next=this.scope=this.fn=null}
Ld.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
Ld.prototype.reset=function(){this.next=this.scope=this.fn=null};var Md,Nd=!1,Od=new Jd;function Pd(a,b){Md||Qd();Nd||(Md(),Nd=!0);Od.add(a,b)}
function Qd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Md=function(){a.then(Rd)}}else Md=function(){var b=Rd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Sb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Gd||(Gd=Hd()),Gd(b)):C.setImmediate(b)}}
function Rd(){for(var a;a=Od.remove();){try{a.fn.call(a.scope)}catch(b){Id(b)}zd(Kd,a)}Nd=!1}
;function Sd(a){this.h=0;this.U=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){Td(b,2,c)},function(c){Td(b,3,c)})}catch(c){Td(this,3,c)}}
function Ud(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Ud.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Vd=new yd(function(){return new Ud},function(a){a.reset()});
function Wd(a,b,c){var d=Vd.get();d.i=a;d.h=b;d.context=c;return d}
function Xd(a){if(a instanceof Sd)return a;var b=new Sd(Za);Td(b,2,a);return b}
function Yd(a){return new Sd(function(b,c){c(a)})}
function Zd(a,b,c){$d(a,b,c,null)||Pd(Ua(b,a))}
function ae(a){return new Sd(function(b){var c=a.length,d=[];if(c)for(var e=function(h,k,l){c--;d[h]=k?{fulfilled:!0,value:l}:{fulfilled:!1,reason:l};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Zd(g,Ua(e,f,!0),Ua(e,f,!1));
else b(d)})}
Sd.prototype.then=function(a,b,c){return be(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Sd.prototype.$goog_Thenable=!0;m=Sd.prototype;m.oc=function(a,b){return be(this,null,a,b)};
m.catch=Sd.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new ce(a);Pd(function(){de(this,b)},this)}};
function de(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?de(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ee(c),fe(c,e,3,b)))}a.j=null}else Td(a,3,b)}
function ge(a,b){a.i||2!=a.h&&3!=a.h||he(a);a.l?a.l.next=b:a.i=b;a.l=b}
function be(a,b,c,d){var e=Wd(null,null,null);e.child=new Sd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ce?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ge(a,e);return e.child}
m.Ze=function(a){this.h=0;Td(this,2,a)};
m.af=function(a){this.h=0;Td(this,3,a)};
function Td(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,$d(c,a.Ze,a.af,a)||(a.U=c,a.h=b,a.j=null,he(a),3!=b||c instanceof ce||ie(a,c)))}
function $d(a,b,c,d){if(a instanceof Sd)return ge(a,Wd(b||Za,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Na(a))try{var f=a.then;if("function"===typeof f)return je(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function je(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function he(a){a.s||(a.s=!0,Pd(a.de,a))}
function ee(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.de=function(){for(var a;a=ee(this);)fe(this,a,this.h,this.U);this.s=!1};
function fe(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,ke(b,c,d);else try{b.j?b.i.call(b.context):ke(b,c,d)}catch(e){le.call(null,e)}zd(Vd,b)}
function ke(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ie(a,b){a.m=!0;Pd(function(){a.m&&le.call(null,b)})}
var le=Id;function ce(a){Xa.call(this,a)}
Va(ce,Xa);ce.prototype.name="cancel";function me(a,b){vd.call(this);this.l=a||1;this.j=b||C;this.m=Ta(this.Ye,this);this.s=Date.now()}
Va(me,vd);m=me.prototype;m.enabled=!1;m.Da=null;m.setInterval=function(a){this.l=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
m.Ye=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.Da=this.j.setTimeout(this.m,this.l-a):(this.Da&&(this.j.clearTimeout(this.Da),this.Da=null),wd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Da||(this.Da=this.j.setTimeout(this.m,this.l),this.s=Date.now())};
m.stop=function(){this.enabled=!1;this.Da&&(this.j.clearTimeout(this.Da),this.Da=null)};
m.M=function(){me.wa.M.call(this);this.stop();delete this.j};
function ne(a,b,c){if("function"===typeof a)c&&(a=Ta(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ta(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function oe(a){G.call(this);this.P=a;this.j=new Map;this.A=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new me(this.flushInterval);this.i.listen("tick",this.nb,!1,this);yc(this,this.i);this.s=!1}
w(oe,G);m=oe.prototype;m.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function pe(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.nb()}
m.nb=function(){var a=this.j.values();a=[].concat(ia(a)).filter(function(b){return b.pb.size});
a.length&&this.P.flush(a,this.s);qe(a);this.l=0;this.i.enabled&&this.i.stop()};
m.Xc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new uc(a,b))};
m.Yc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new vc(a,b))};
function re(a,b){return a.A.has(b)?void 0:a.j.get(b)}
m.pc=function(a){this.Od.apply(this,[a,1].concat(ia(B.apply(1,arguments))))};
m.Od=function(a,b){var c=B.apply(2,arguments),d=re(this,a);d&&d instanceof uc&&(d.j(b,c),pe(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=re(this,a);d&&d instanceof vc&&(d.record(b,c),pe(this))};
function qe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function se(a){this.h=a;this.h.Xc("/client_streamz/bg/fiec",{sb:3,rb:"rk"},{sb:2,rb:"ec"},{sb:3,rb:"em"})}
function te(a,b,c,d){a.h.pc("/client_streamz/bg/fiec",b,c,d)}
function ue(a){this.h=a;this.h.Yc("/client_streamz/bg/fil",{sb:3,rb:"rk"})}
ue.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function ve(a){this.h=a;this.h.Xc("/client_streamz/bg/fsc",{sb:3,rb:"rk"})}
function we(a){this.h=a;this.h.Yc("/client_streamz/bg/fsl",{sb:3,rb:"rk"})}
we.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var xe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ye(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ze(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ae(a,h),d+=Ae(a,h+4),e+=Ae(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return xe.toString(e)}
function ze(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ae(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Vb();var Be=Hc()||F("iPod"),Ce=F("iPad");!F("Android")||Wb()||Vb()||Tb()||F("Silk");Wb();var De=F("Safari")&&!(Wb()||(Sb()?0:F("Coast"))||Tb()||(Sb()?0:F("Edge"))||(Sb()?Rb("Microsoft Edge"):F("Edg/"))||(Sb()?Rb("Opera"):F("OPR"))||Vb()||F("Silk")||F("Android"))&&!(Hc()||F("iPad")||F("iPod"));var Ee={},Fe=null;function Ge(a,b){Ma(a);void 0===b&&(b=0);He();b=Ee[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ie(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Je(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Je(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Fe[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
He();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function He(){if(!Fe){Fe={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ee[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Fe[f]&&(Fe[f]=e)}}}}
;var Ke="undefined"!==typeof Uint8Array,Le=!Kc&&"function"===typeof btoa;function Me(a){if(!Le)return Ge(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ne=/[-_.]/g,Oe={"-":"+",_:"/",".":"="};function Pe(a){return Oe[a]||""}
function Qe(a){return Ke&&null!=a&&a instanceof Uint8Array}
var Re={};var Se;function Te(a){if(a!==Re)throw Error("illegal external caller");}
function Ue(a,b){Te(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ue.prototype.isEmpty=function(){return null==this.value_};
Ue.prototype.sizeBytes=function(){Te(Re);var a=this.value_;if(null!=a&&!Qe(a))if("string"===typeof a)if(Le){Ne.test(a)&&(a=a.replace(Ne,Pe));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ie(a);else La(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Ve(a){return Array.prototype.slice.call(a)}
;var We="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ia(Object.values({Af:1,zf:2,yf:4,Df:8,Cf:16,Bf:32,rf:64,Ef:128,xf:256,wf:512})));var Xe=We?function(a,b){a[We]|=b}:function(a,b){void 0!==a.Ba?a.Ba|=b:Object.defineProperties(a,{Ba:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ye(a){var b=Ze(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Ve(a)),$e(a,b|1));return a}
var af=We?function(a,b){a[We]&=~b}:function(a,b){void 0!==a.Ba&&(a.Ba&=~b)},Ze=We?function(a){return a[We]|0}:function(a){return a.Ba|0},bf=We?function(a){return a[We]}:function(a){return a.Ba},$e=We?function(a,b){a[We]=b}:function(a,b){void 0!==a.Ba?a.Ba=b:Object.defineProperties(a,{Ba:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function cf(a,b){Object.isFrozen(a)&&(a=Ve(a));$e(a,b);return a}
function df(a){Xe(a,1);return a}
function ef(a,b){$e(b,(a|0)&-255)}
function ff(a,b){$e(b,(a|34)&-221)}
function gf(a){a=a>>10&1023;return 0===a?536870912:a}
;var hf={};function jf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var kf,lf,mf=[];$e(mf,39);lf=Object.freeze(mf);function nf(a){if(a&2)throw Error();}
;function of(a){return a.displayName||a.name||"unknown type name"}
function pf(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+La(a)+": "+a);a=!!a}return a}
function qf(a){if(null!=a&&"number"!==typeof a)throw Error();return a}
function rf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function sf(a){if(null!=a&&!("number"===typeof a&&!Number.isNaN(a)||a&&"string"===typeof a&&!isNaN(a)))throw Error("Expected an int64 value encoded as a number or a string but got "+a+" a "+La(a));return a}
function tf(a){return Number.isNaN(a)?void 0:a}
function uf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function vf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+of(b)+" but got "+(a&&of(a.constructor)));}
function wf(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Ic===hf)return a;if(d){var e=d=Ze(a);0===e&&(e|=c&32);e|=c&2;e!==d&&$e(a,e);return new b(a)}}
;var xf;function yf(a,b){Ze(b);xf=b;a=new a(b);xf=void 0;return a}
function zf(a,b,c){null==a&&(a=xf);xf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-1047553|(b&1023)<<10)}else{if(!Array.isArray(a))throw Error();d=Ze(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(jf(g)){d|=256;b=(d>>9&1)-1;e=f-b;1024<=e&&(Af(c,b,g),e=1023);d=d&-1047553|(e&1023)<<10;break a}}b&&(g=(d>>9&1)-1,b=Math.max(b,e-g),1024<b&&(Af(c,g,{}),d|=256,b=1023),d=d&-1047553|(b&1023)<<10)}}$e(a,d);return a}
function Af(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Bf(a,b){return Cf(b)}
function Cf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Qe(a))return Me(a);if(a instanceof Ue){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Me(b)}}}return a}
;function Df(a,b,c){a=Ve(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ef(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ze(a)&1?void 0:f&&Ze(a)&2?a:Ff(a,b,c,void 0!==d,e,f);else if(jf(a)){var g={},h;for(h in a)g[h]=Ef(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Ff(a,b,c,d,e,f){var g=d||c?Ze(a):0;d=d?!!(g&32):void 0;a=Ve(a);for(var h=0;h<a.length;h++)a[h]=Ef(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Gf(a){return a.Ic===hf?a.toJSON():Cf(a)}
;function Hf(a,b,c){c=void 0===c?ff:c;if(null!=a){if(Ke&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ze(a);return d&2?a:!b||d&68||!(d&32||0===d)?Ff(a,Hf,d&4?ff:c,!0,!1,!0):($e(a,d|34),a)}a.Ic===hf&&(b=a.B,c=bf(b),a=c&2?a:yf(a.constructor,If(b,c,!0)));return a}}
function If(a,b,c){var d=c||b&2?ff:ef,e=!!(b&32);a=Df(a,b,function(f){return Hf(f,e,d)});
Xe(a,32|(c?2:0));return a}
function Jf(a){var b=a.B,c=bf(b);return c&2?yf(a.constructor,If(b,c,!1)):a}
;function Kf(a,b){a=a.B;return Lf(a,bf(a),b)}
function Lf(a,b,c,d){if(-1===c)return null;if(c>=gf(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+((b>>9&1)-1);if(b<e)return a[b]}}
function J(a,b,c,d){var e=a.B,f=bf(e);nf(f);Mf(e,f,b,c,d);return a}
function Mf(a,b,c,d,e){jf(d);var f=gf(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+((b>>9&1)-1)]={};e|=256}f[c]=d;e!==b&&$e(a,e)}else a[c+((b>>9&1)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Nf(a){return void 0!==Of(a,Pf,11,!1)}
function Qf(a,b,c,d){a=a.B;var e=bf(a);nf(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Lf(a,e,h)&&(0!==f&&Mf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Mf(a,e,c);Mf(a,e,b,d)}
function Of(a,b,c,d){a=a.B;var e=bf(a),f=Lf(a,e,c,d);b=wf(f,b,e);b!==f&&null!=b&&Mf(a,e,c,b,d);return b}
function Rf(a,b,c,d){d=void 0===d?!1:d;b=Of(a,b,c,d);if(null==b)return b;a=a.B;var e=bf(a);if(!(e&2)){var f=Jf(b);f!==b&&(b=f,Mf(a,e,c,b,d))}return b}
function Sf(a,b,c,d){null!=d?vf(d,b):d=void 0;return J(a,c,d)}
function Tf(a,b,c,d){var e=a.B,f=bf(e);nf(f);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];vf(k,b);g=g&&!(Ze(k.B)&2)}b=Ze(d);h=b|1;h=(g?h|8:h&-9)|4;h!=b&&(d=cf(d,h))}null==d&&(d=void 0);Mf(e,f,c,d);return a}
function Uf(a,b){a=Kf(a,b);var c;null!=a?"number"===typeof a?c=tf(a):c="string"===typeof a?isNaN(a)?void 0:a:void 0:c=a;return c}
function Vf(a){a=Kf(a,1);a=null==a?a:"string"===typeof a?isNaN(a)?void 0:a:"number"===typeof a?tf(a):void 0;return a}
function Wf(){var a=new Xf;return J(a,1,1)}
;function Yf(a,b,c){this.B=zf(a,b,c)}
m=Yf.prototype;m.toJSON=function(){if(kf)var a=Zf(this,this.B,!1);else a=Ff(this.B,Gf,void 0,void 0,!1,!1),a=Zf(this,a,!0);return a};
m.serialize=function(){kf=!0;try{return JSON.stringify(this.toJSON(),Bf)}finally{kf=!1}};
m.clone=function(){var a=this.B,b=bf(a);return yf(this.constructor,If(a,b,!1))};
m.Ic=hf;m.toString=function(){return Zf(this,this.B,!1).toString()};
function Zf(a,b,c){var d=a.constructor.Va,e=bf(c?a.B:b),f=gf(e);e=!1;if(d){if(!c){b=Ve(b);var g;if(b.length&&jf(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=bf(a.B);a=gf(f);f=(f>>9&1)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?lf:df([]):c&&n!==lf&&Ye(n)}else h||(n=void 0,g.length&&jf(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?lf:df([]):c&&n!==lf&&Ye(n)}d=b.length;if(!d)return b;var r;
if(jf(h=b[d-1])){a:{var t=h;g={};c=!1;for(var p in t)a=t[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(r=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var z=!0}if(!r&&!z)return b;var y;e?y=b:y=Array.prototype.slice.call(b,0,d);b=y;e&&(b.length=d);t&&b.push(t);return b}
;function $f(a){this.B=zf(a)}
w($f,Yf);var ag=[1,2,3];function bg(a){this.B=zf(a)}
w(bg,Yf);var cg=[1,2,3];function dg(a){this.B=zf(a)}
w(dg,Yf);dg.Va=[1];function eg(a){this.B=zf(a)}
w(eg,Yf);eg.Va=[3,6,4];function fg(a){this.B=zf(a)}
w(fg,Yf);fg.Va=[1];function gg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function hg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var t=g,p=0;64>p;p+=4)t[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(r<<1|r>>>31)&4294967295;r=e[0];var x=e[1],z=e[2],y=e[3],H=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var I=y^x&(z^y);var L=1518500249}else I=x^z^y,L=1859775393;else 60>p?(I=x&z|y&(x|z),L=2400959708):(I=x^z^y,L=3395469782);I=((r<<5|r>>>27)&4294967295)+I+H+L+t[p]&4294967295;H=y;y=z;z=(x<<30|x>>>2)&4294967295;x=r;r=I}e[0]=e[0]+r&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+H&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],x=0,z=r.length;x<z;++x)p.push(r.charCodeAt(x));r=p}t||(t=r.length);p=0;if(0==l)for(;p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var x=24;0<=x;x-=8)r[t++]=e[p]>>x&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Zd:function(){for(var r=d(),t="",p=0;p<r.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return t}}}
;function ig(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,jg(gg(d),a,c||null)].join(" "):null}
function jg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],bb(d,function(h){e.push(h)}),kg(e.join(" "));
var f=[],g=[];bb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];bb(d,function(h){e.push(h)});
a=kg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function kg(a){var b=hg();b.update(a);return b.Zd().toLowerCase()}
;var lg={};function mg(a){this.h=a||{cookie:""}}
m=mg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{dc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Vf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.dc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Eb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{dc:0,path:b,domain:c});return d};
m.Bc=function(){return ng(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=ng(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ng(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Eb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var og=new mg("undefined"==typeof document?null:document);function pg(a){return!!lg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function qg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;pg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new mg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");pg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function rg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new mg(document)).get(b));return a?ig(a,c,d):null}
function sg(a,b){b=void 0===b?!1:b;var c=gg(String(C.location.href)),d=[];if(qg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new mg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ig(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&pg(b)&&((b=rg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=rg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function tg(a){this.B=zf(a)}
w(tg,Yf);tg.Va=[2];function ug(a){this.B=zf(a)}
w(ug,Yf);function vg(a){this.B=zf(a)}
w(vg,Yf);function wg(a){this.h=this.i=this.j=a}
wg.prototype.reset=function(){this.h=this.i=this.j};
wg.prototype.getValue=function(){return this.i};function xg(){}
xg.prototype.serialize=function(a){var b=[];yg(this,a,b);return b.join("")};
function yg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),yg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),zg(d,c),c.push(":"),yg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ag={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Cg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zg(a,b){b.push('"',a.replace(Cg,function(c){var d=Ag[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ag[c]=d);return d}),'"')}
;function Dg(){}
Dg.prototype.h=null;Dg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Eg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Fg;function Gg(){}
Va(Gg,Dg);function Hg(a){return(a=Eg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Eg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Fg=new Gg;function Ig(a){vd.call(this);this.headers=new Map;this.X=a||null;this.j=!1;this.W=this.H=null;this.m=this.na="";this.l=this.da=this.A=this.aa=!1;this.s=0;this.P=null;this.Qa="";this.ya=this.Ea=!1}
Va(Ig,vd);var Jg=/^https?$/i,Kg=["POST","PUT"],Lg=[];function Mg(a,b,c,d,e,f,g){var h=new Ig;Lg.push(h);b&&h.listen("complete",b);h.i.add("ready",h.Yd,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.Ea=g);h.send(a,c,d,e)}
m=Ig.prototype;m.Yd=function(){this.dispose();gb(Lg,this)};
m.send=function(a,b,c,d){if(this.H)throw Error("[goog.net.XhrIo] Object is active with another request="+this.na+"; newUri="+a);b=b?b.toUpperCase():"GET";this.na=a;this.m="";this.aa=!1;this.j=!0;this.H=this.X?Hg(this.X):Hg(Fg);this.W=this.X?this.X.getOptions():Fg.getOptions();this.H.onreadystatechange=Ta(this.td,this);try{this.getStatus(),this.da=!0,this.H.open(b,String(a),!0),this.da=!1}catch(g){this.getStatus();Ng(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=ab(Kg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.H.setRequestHeader(d,c);this.Qa&&(this.H.responseType=this.Qa);"withCredentials"in this.H&&this.H.withCredentials!==this.Ea&&(this.H.withCredentials=this.Ea);try{Og(this),0<this.s&&(this.ya=Pg(this.H),this.getStatus(),this.ya?(this.H.timeout=this.s,this.H.ontimeout=Ta(this.Hd,
this)):this.P=ne(this.Hd,this.s,this)),this.getStatus(),this.A=!0,this.H.send(a),this.A=!1}catch(g){this.getStatus(),Ng(this,g)}};
function Pg(a){return Kc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Hd=function(){"undefined"!=typeof Ka&&this.H&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),wd(this,"timeout"),this.abort(8))};
function Ng(a,b){a.j=!1;a.H&&(a.l=!0,a.H.abort(),a.l=!1);a.m=b;Qg(a);Rg(a)}
function Qg(a){a.aa||(a.aa=!0,wd(a,"complete"),wd(a,"error"))}
m.abort=function(){this.H&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.H.abort(),this.l=!1,wd(this,"complete"),wd(this,"abort"),Rg(this))};
m.M=function(){this.H&&(this.j&&(this.j=!1,this.l=!0,this.H.abort(),this.l=!1),Rg(this,!0));Ig.wa.M.call(this)};
m.td=function(){this.h()||(this.da||this.A||this.l?Sg(this):this.Ce())};
m.Ce=function(){Sg(this)};
function Sg(a){if(a.j&&"undefined"!=typeof Ka)if(a.W[1]&&4==Tg(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Tg(a))ne(a.td,0,a);else if(wd(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Ug(a))wd(a,"complete"),wd(a,"success");else{try{var b=2<Tg(a)?a.H.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Qg(a)}}finally{Rg(a)}}}
function Rg(a,b){if(a.H){Og(a);var c=a.H,d=a.W[0]?function(){}:null;
a.H=null;a.W=null;b||wd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Og(a){a.H&&a.ya&&(a.H.ontimeout=null);a.P&&(C.clearTimeout(a.P),a.P=null)}
m.isActive=function(){return!!this.H};
m.isComplete=function(){return 4==Tg(this)};
function Ug(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=cc(1,String(a.na)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Jg.test(a?a.toLowerCase():"");c=b}return c}
function Tg(a){return a.H?a.H.readyState:0}
m.getStatus=function(){try{return 2<Tg(this)?this.H.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function Vg(a){this.B=zf(a)}
w(Vg,Yf);function Wg(a){this.B=zf(a)}
w(Wg,Yf);Wg.Va=[1];function Pf(a){this.B=zf(a)}
w(Pf,Yf);var Xg=["platform","platformVersion","architecture","model","uaFullVersion"];new Wg;function Xf(a){this.B=zf(a)}
w(Xf,Yf);function Yg(a){this.B=zf(a)}
w(Yg,Yf);function Zg(a){this.B=zf(a,34)}
w(Zg,Yf);Zg.Va=[3,20,27];function $g(a){this.B=zf(a,19)}
w($g,Yf);$g.Va=[3,5];function ah(a){this.B=zf(a,6)}
w(ah,Yf);var bh=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Xe(b,32);b=yf(a,b)}return b}}(ah);
ah.Va=[5];function ch(a){this.B=zf(a)}
w(ch,Yf);var dh;dh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Rf;this.defaultValue=void 0}(175237375,{Nf:0},ch);function eh(a){G.call(this);var b=this;this.componentId="";this.j=[];this.xa="";this.ya=this.da=-1;this.na=!1;this.P=this.experimentIds=null;this.A=this.m=0;this.Ea=1;this.timeoutMillis=0;this.W=!1;this.logSource=a.logSource;this.tb=a.tb||function(){};
this.l=new fh(a.logSource,a.xb);this.network=a.network;this.Eb=a.Eb||null;this.bufferSize=1E3;this.Qa=Ua(Ad,0,1);this.aa=a.bf||null;this.sessionIndex=a.sessionIndex||null;this.Lb=a.Lb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.gd;this.xb=a.xb||!1;var c=Wf();gh(this.l,c);this.s=new wg(1E4);this.i=new me(this.s.getValue());yc(this,this.i);a=hh(this,a.Ud);kd(this.i,"tick",a,!1,this);this.X=new me(6E5);yc(this,this.X);kd(this.X,"tick",a,!1,this);this.Lb||this.X.start();this.xb||
(kd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.wc()}),kd(document,"pagehide",this.wc,!1,this))}
w(eh,G);function hh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=eh.prototype;m.M=function(){this.wc();G.prototype.M.call(this)};
function ih(a){a.aa||(a.aa=.01>a.Qa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.aa}
function jh(a,b){a.s=new wg(1>b?1:b);a.i.setInterval(a.s.getValue())}
m.log=function(a){a=a.clone();var b=this.Ea++;a=J(a,21,sf(b));this.componentId&&J(a,26,uf(this.componentId));if(!Vf(a)){b=a;var c=Date.now().toString();J(b,1,sf(c))}null==Uf(a,15)&&J(a,15,sf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),Sf(a,tg,16,b));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Lb||this.i.enabled||this.i.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.W)kh(this.l,3),lh(this);else{var d=Date.now();if(this.ya>d&&this.da<d)b&&b("throttled");else{kh(this.l,1);var e=mh(this.l,this.j,this.m,this.A,this.Eb);d={};var f=this.tb();f&&(d.Authorization=f);var g=ih(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=nc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=nc(g,"pageId",this.pageId));if(f&&this.xa===f)b&&b("stale-auth-token");else{this.j=
[];this.i.enabled&&this.i.stop();this.m=0;var h=e.serialize(),k;this.P&&this.P.isSupported(h.length)&&(k=this.P.compress(h));var l={url:g,body:h,Wd:1,Nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(p){c.s.reset();c.i.setInterval(c.s.getValue());if(p){var x=null;try{var z=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));x=bh(z)}catch(H){}if(x){p=Number;z="-1";z=void 0===z?"0":z;var y=Vf(x);p=p(null!=y?y:z);0<p&&(c.da=Date.now(),c.ya=c.da+
p);x=dh.ctor?dh.i(x,dh.ctor,dh.h,!0):dh.i(x,dh.h,null,!0);if(p=null===x?void 0:x)x=-1,x=void 0===x?0:x,p=rf(Kf(p,1)),x=null!=p?p:x,-1!==x&&(c.na||jh(c,x))}}a&&a();c.A=0},r=function(p,x){var z=e.B,y=bf(z),H=!!(y&2);
var I=H?1:2,L=!!(y&2);var M=y&2;var K=Lf(z,y,3);Array.isArray(K)||(K=lf);var V=Ze(K);V&1||df(K);M?V&2||Xe(K,34):V&32&&!(V&2)&&af(K,32);M=K;if(M!==lf&&Ze(M)&4)3!==I&&(L?2===I&&(I=Ze(M),M=Ve(M),$e(M,I),Mf(z,y,3,M)):(L=Object.isFrozen(M),1===I?L||Object.freeze(M):(I=Ze(M),K=I&-35,L&&(M=Ve(M),I=0,Mf(z,y,3,M)),I!==K&&$e(M,K)))),z=M;else{K=M;M=!!(y&2);var Z=!!(Ze(K)&2);L=K;!M&&Z&&(K=Ve(K));V=y|(Z?2:0);Z=Z||void 0;for(var ea=0,qa=0;ea<K.length;ea++){var na=wf(K[ea],Zg,V);void 0!==na&&(Z=Z||bf(na.B)&2,K[qa++]=
na)}qa<ea&&(K.length=qa);Z=!Z;V=Ze(K);ea=V|5;Z=Z?ea|8:ea&-9;V!=Z&&(K=cf(K,Z));L!==K&&Mf(z,y,3,K);(M&&2!==I||1===I)&&Object.freeze(K);z=K}if(!(H||Ze(z)&8)){for(H=0;H<z.length;H++)y=z[H],I=Jf(y),y!==I&&(z[H]=I);Xe(z,8)}H=Uf(e,14);y=c.s;y.h=Math.min(3E5,2*y.h);y.i=Math.min(3E5,y.h+Math.round(.2*(Math.random()-.5)*y.h));c.i.setInterval(c.s.getValue());401===p&&f&&(c.xa=f);H&&(c.m+=H);void 0===x&&(x=c.isRetryable(p));x&&(c.j=z.concat(c.j),c.Lb||c.i.enabled||c.i.start());b&&b("net-send-failed",p);++c.A},
t=function(){c.network&&c.network.send(l,n,r)};
k?k.then(function(p){l.Nc["Content-Encoding"]="gzip";l.Nc["Content-Type"]="application/binary";l.body=p;l.Wd=2;t()},function(){t()}):t()}}}};
m.wc=function(){nh(this.l,!0);this.flush();nh(this.l,!1)};
function lh(a){oh(a,function(b,c){b=nc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.W&&!d&&(a.W=!1);return d})}
function oh(a,b){if(0!==a.j.length){var c=rc(ih(a),"format");c=lc(c,"auth",a.tb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=mh(a.l,e,a.m,a.A,a.Eb);if(!b(c,f)){++a.A;break}a.m=0;a.A=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function fh(a,b){this.xb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new $g;Number.isInteger(a)&&J(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));gh(this,new Xf)}
function gh(a,b){Sf(a.h,Xf,1,b);Kf(b,1)||J(b,1,1);if(!a.xb){b=ph(a);var c=Kf(b,5);(null==c||"string"===typeof c)&&c||J(b,5,uf(a.locale))}a.uach&&(b=ph(a),Rf(b,Wg,9)||Sf(b,Wg,9,a.uach))}
function kh(a,b){Nf(Rf(a.h,Xf,1))&&(a=qh(a),J(a,1,b))}
function nh(a,b){Nf(Rf(a.h,Xf,1))&&(a=qh(a),J(a,2,pf(b)))}
function rh(a,b){var c=void 0===c?Xg:c;b(window,c).then(function(d){a.uach=d;d=ph(a);Sf(d,Wg,9,a.uach);return!0}).catch(function(){return!1})}
function ph(a){a=Rf(a.h,Xf,1);var b=Rf(a,Pf,11);b||(b=new Pf,Sf(a,Pf,11,b));return b}
function qh(a){a=ph(a);var b=Rf(a,Vg,10);b||(b=new Vg,J(b,2,pf(!1)),Sf(a,Vg,10,b));return b}
function mh(a,b,c,d,e){c=void 0===c?0:c;d=void 0===d?0:d;if(Nf(Rf(a.h,Xf,1))){var f=qh(a);J(f,3,qf(d))}a=a.h.clone();d=Date.now().toString();a=J(a,4,sf(d));b=Tf(a,Zg,3,b);e&&(a=new ug,e=J(a,13,qf(e)),a=new vg,e=Sf(a,ug,2,e),a=new Yg,e=Sf(a,vg,1,e),Sf(b,Yg,18,e));c&&J(b,14,sf(c));return b}
;function sh(){}
sh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Mg(a.url,function(d){d=d.target;if(Ug(d)){try{var e=d.H?d.H.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Nc,a.timeoutMillis,a.withCredentials)};function th(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.l=!1;this.componentId="";this.network=new sh}
w(th,G);th.prototype.gd=function(){this.aa=!0;return this};function uh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);f?a=f:(a=new th(a,"0"),a.componentId=b,yc(this,a),""!=c&&(a.j=c),d&&(a.l=!0),e&&(a.i=e),b=new eh({logSource:a.logSource,tb:a.tb?a.tb:sg,sessionIndex:a.sessionIndex,bf:a.j,xb:a.l,Lb:!1,gd:a.aa,pageId:void 0,Ud:void 0,network:a.network?a.network:void 0}),yc(a,b),a.A&&gh(b.l,a.A),a.i&&(c=a.i,d=ph(b.l),J(d,7,uf(c))),a.s&&(b.P=a.s),a.componentId&&(b.componentId=a.componentId),
a.Eb&&(b.Eb=a.Eb),a.m&&((c=a.m)?(b.experimentIds||(b.experimentIds=new tg),c=c.serialize(),J(b.experimentIds,4,uf(c))):b.experimentIds&&J(b.experimentIds,4,void 0,!1)),a.W&&(e=a.W,b.experimentIds||(b.experimentIds=new tg),c=b.experimentIds.B,d=bf(c),nf(d),e=null==e?lf:Ye(e),Mf(c,d,2,e)),a.P&&(c=a.P,b.na=!0,jh(b,c)),a.X&&rh(b.l,a.X),a=b);this.i=a}
w(uh,G);
uh.prototype.flush=function(a){var b=a||[];if(b.length){a=new fg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new eg;g=J(g,1,uf(f.i));for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].rb);h=g.B;l=bf(h);nf(l);if(null==k)Mf(h,l,3);else{if(!(Ze(k)&4)){Object.isFrozen(k)&&(k=Ve(k));for(var n=0;n<k.length;n++){var r=k,t=n,p=k[n];if("string"!==typeof p)throw Error();r[t]=p}$e(k,5)}Mf(h,l,3,k)}k=[];h=[];l=v(f.pb.keys());for(n=l.next();!n.done;n=l.next())h.push(n.value.split(","));for(l=0;l<h.length;l++){n=
h[l];r=f.l;t=f.yc(n)||[];p=[];for(var x=0;x<t.length;x++){var z=t[x],y=z&&z.dd;z=new bg;switch(r){case 3:var H=Number(y);Number.isFinite(H)&&Qf(z,1,cg,sf(H));break;case 2:H=z;y=Number(y);if(null!=y&&"number"!==typeof y)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof y+": "+y);Qf(H,2,cg,y)}p.push(z)}r=p;for(t=0;t<r.length;t++){p=r[t];x=new dg;p=Sf(x,bg,2,p);x=n;z=[];H=f;y=[];for(var I=0;I<H.h.length;I++)y.push(H.h[I].sb);H=y;for(y=0;y<H.length;y++){var L=H[y],
M=x[y];I=new $f;switch(L){case 3:Qf(I,1,ag,uf(String(M)));break;case 2:L=Number(M);Number.isFinite(L)&&Qf(I,2,ag,qf(L));break;case 1:Qf(I,3,ag,pf("true"==M))}z.push(I)}Tf(p,$f,1,z);k.push(p)}}Tf(g,dg,4,k);c.push(g);e.clear()}Tf(a,eg,1,c);b=this.i;a instanceof Zg?b.log(a):(c=new Zg,a=a.serialize(),a=J(c,8,uf(a)),b.log(a));this.i.flush()}};function vh(a){this.U=wh();this.m=new uh(1828);this.h=new oe(this.m);this.s=new ue(this.h);this.j=new ve(this.h);this.l=new we(this.h);this.i=new se(this.h);this.Oa=ye(a)}
function wh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function xh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function yh(a){function b(x,z){Promise.resolve().then(function(){var y;null!=(y=c.qa)&&y.s.record(wh()-y.U,y.Oa);h.resolve({Td:x,Ue:z})})}
var c=this;this.i=!1;var d=a.program;var e=a.me;var f;a.Mc=null!=(f=a.Mc)?f:!0;if(a.Mc){var g;this.qa=null!=(g=a.qa)?g:new vh(e)}var h=new xh;this.j=h.promise;if(!C[e]){var k;null!=(k=this.qa)&&te(k.i,k.Oa,1,"");var l;null!=(l=this.qa)&&l.h.nb()}else if(!C[e].a){var n;null!=(n=this.qa)&&te(n.i,n.Oa,2,"");var r;null!=(r=this.qa)&&r.h.nb()}try{this.l=v((0,C[e].a)(d,b,!0,a.dg)).next().value,this.Te=h.promise.then(function(){})}catch(x){var t;
null!=(t=this.qa)&&te(t.i,t.Oa,4,x.message);var p;null!=(p=this.qa)&&p.h.nb();throw x;}}
yh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=wh(),d;null!=(d=this.qa)&&d.j.h.pc("/client_streamz/bg/fsc",d.Oa);return this.j.then(function(e){var f=e.Td;return new Promise(function(g){f(function(h){var k;null!=(k=b.qa)&&k.l.record(wh()-c,k.Oa);g(h)},[a.ed,
a.Ve,a.df])})})};
yh.prototype.Ed=function(a){if(this.i)throw Error("Already disposed");var b=wh(),c;null!=(c=this.qa)&&c.j.h.pc("/client_streamz/bg/fsc",c.Oa);a=this.l([a.ed,a.Ve,a.df]);var d;null!=(d=this.qa)&&d.l.record(wh()-b,d.Oa);return a};
yh.prototype.dispose=function(){var a;null!=(a=this.qa)&&a.h.nb();this.i=!0;this.j.then(function(b){(b=b.Ue)&&b()})};
yh.prototype.h=function(){return this.i};var zh=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ah;try{new URL("s://g"),Ah=!0}catch(a){Ah=!1}var Bh=Ah;function Ch(a){if(a instanceof Fb)a=Gb(a);else{b:if(Bh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var Dh={};function Eh(){}
function Fh(a){this.h=a}
w(Fh,Eh);Fh.prototype.toString=function(){return this.h};function Gh(a){var b="true".toString(),c=[new Fh(Hh[0].toLowerCase(),Dh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Fh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Ih(){throw Error("unknown trace type");}
;var Jh="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Kh(a,b){if(b instanceof Ab)a.href=Bb(b).toString();else{if(-1===Jh.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Ch(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Lh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Mh(a,b){a.src=Bb(b);Lh(a)}
;(function(){return""}).toString().indexOf("`");function Nh(a){this.ue=a}
function Oh(a){return new Nh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ph=[Oh("data"),Oh("http"),Oh("https"),Oh("mailto"),Oh("ftp"),new Nh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Qh(a){var b=Rh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Sh(){var a=[];Qh(function(b){a.push(b)});
return a}
var Rh={ef:"allow-forms",ff:"allow-modals",gf:"allow-orientation-lock",hf:"allow-pointer-lock",jf:"allow-popups",kf:"allow-popups-to-escape-sandbox",lf:"allow-presentation",mf:"allow-same-origin",nf:"allow-scripts",pf:"allow-top-navigation",qf:"allow-top-navigation-by-user-activation"},Th=$a(function(){return Sh()});
function Uh(){var a=Vh(),b={};bb(Th(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Vh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Wh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Xh=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var Yh="undefined"!==typeof TextEncoder?new TextEncoder:null,Zh=Yh?function(a){return Yh.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function $h(a){vd.call(this);var b=this;this.A=this.l=0;this.Ca=null!=a?a:{ka:function(e,f){return setTimeout(e,f)},
za:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return A(function(e){return e.yield(ai(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||bi(this)}
w($h,vd);function ci(){var a=di;$h.h||($h.h=new $h(a));return $h.h}
$h.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Ca.za(this.A);delete $h.h};
$h.prototype.ra=function(){return this.j};
function bi(a){a.A=a.Ca.ka(function(){var b;return A(function(c){if(1==c.h)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(ai(a),3):c.yield(ai(a),3);bi(a);c.h=0})},3E4)}
function ai(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.Ca.ka(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.A=[h.j];h.l=0;h.s=0;a.s=void 0;a.l&&(a.Ca.za(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?wd(a,"networkstatus-online"):wd(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:za(h),g=!1,h.v(3)}})})}
;function ei(){this.data=[];this.h=-1}
ei.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
ei.prototype.get=function(a){return!!this.data[a]};
function fi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function gi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
gi.prototype[Symbol.iterator]=function(){return this};
gi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function hi(a,b){return new gi(a,b)}
;function ii(){this.blockSize=-1}
;function ji(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Va(ji,ii);ji.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ki(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ji.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ki(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ki(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ki(this,e);f=0;break}}this.i=f;this.l+=b}};
ji.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ki(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function li(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function mi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ni(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:li(a).match(/\S+/g)||[],b=0<=ab(a,b));return b}
function oi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ni(a,"inverted-hdpi")&&mi(a,Array.prototype.filter.call(a.classList?a.classList:li(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function pi(){}
pi.prototype.next=function(){return qi};
var qi={done:!0,value:void 0};function ri(a){return{value:a,done:!1}}
pi.prototype.Fa=function(){return this};function si(a){if(a instanceof ti||a instanceof ui||a instanceof vi)return a;if("function"==typeof a.next)return new ti(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ti(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new ti(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function ti(a){this.i=a}
ti.prototype.Fa=function(){return new ui(this.i())};
ti.prototype[Symbol.iterator]=function(){return new vi(this.i())};
ti.prototype.h=function(){return new vi(this.i())};
function ui(a){this.i=a}
w(ui,pi);ui.prototype.next=function(){return this.i.next()};
ui.prototype[Symbol.iterator]=function(){return new vi(this.i)};
ui.prototype.h=function(){return new vi(this.i)};
function vi(a){ti.call(this,function(){return a});
this.j=a}
w(vi,ti);vi.prototype.next=function(){return this.j.next()};function wi(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof wi)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=wi.prototype;m.Bc=function(){xi(this);return this.h.concat()};
m.has=function(a){return yi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||zi;xi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function zi(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return yi(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&xi(this),!0):!1};
function xi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];yi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],yi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return yi(this.i,a)?this.i[a]:b};
m.set=function(a,b){yi(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new wi(this)};
m.keys=function(){return si(this.Fa(!0)).h()};
m.values=function(){return si(this.Fa(!1)).h()};
m.entries=function(){var a=this;return hi(this.keys(),function(b){return[b,a.get(b)]})};
m.Fa=function(a){xi(this);var b=0,c=this.Xa,d=this,e=new pi;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return qi;var f=d.h[b++];return ri(a?f:d.i[f])};
return e};
function yi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function N(a){G.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Va(N,G);m=N.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Ai(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Gb(b)}}
m.Gb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&gb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.Za=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Bi(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Gb(c)}}return 0!=e}return!1};
function Bi(a,b,c){Pd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Gb,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.M=function(){N.wa.M.call(this);this.clear();this.l.length=0};function Ci(a){this.h=a}
Ci.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new xg).serialize(b))};
Ci.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ci.prototype.remove=function(a){this.h.remove(a)};function Di(a){this.h=a}
Va(Di,Ci);function Ei(a){this.data=a}
function Fi(a){return void 0===a||a instanceof Ei?a:new Ei(a)}
Di.prototype.set=function(a,b){Di.wa.set.call(this,a,Fi(b))};
Di.prototype.i=function(a){a=Di.wa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Di.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Gi(a){this.h=a}
Va(Gi,Di);Gi.prototype.set=function(a,b,c){if(b=Fi(b)){if(c){if(c<Date.now()){Gi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Gi.wa.set.call(this,a,b)};
Gi.prototype.i=function(a){var b=Gi.wa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Gi.prototype.remove.call(this,a);else return b}};function Hi(){}
;function Ii(){}
Va(Ii,Hi);Ii.prototype[Symbol.iterator]=function(){return si(this.Fa(!0)).h()};
Ii.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ji(a){this.h=a}
Va(Ji,Ii);m=Ji.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Fa=function(a){var b=0,c=this.h,d=new pi;d.next=function(){if(b>=c.length)return qi;var e=c.key(b++);if(a)return ri(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ri(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ki(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Va(Ki,Ji);function Li(a,b){this.i=a;this.h=null;var c;if(c=Kc)c=!(9<=Number(Yc));if(c){Mi||(Mi=new wi);this.h=Mi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Mi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Va(Li,Ii);var Ni={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Mi=null;function Oi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ni[b]})}
m=Li.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Oi(a),b);Pi(this)};
m.get=function(a){a=this.h.getAttribute(Oi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Oi(a));Pi(this)};
m.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new pi;d.next=function(){if(b>=c.length)return qi;var e=c[b++];if(a)return ri(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ri(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Pi(this)};
function Pi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Qi(a,b){this.i=a;this.h=b+"::"}
Va(Qi,Ii);Qi.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Qi.prototype.get=function(a){return this.i.get(this.h+a)};
Qi.prototype.remove=function(a){this.i.remove(this.h+a)};
Qi.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new pi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return ri(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Ri="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Si={ob:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
jd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ti={ob:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
jd:function(a){return[].concat.apply([],a)}};
O.Se=function(){Ri?(O.mb=Uint8Array,O.Ha=Uint16Array,O.Nd=Int32Array,O.assign(O,Si)):(O.mb=Array,O.Ha=Array,O.Nd=Array,O.assign(O,Ti))};
O.Se();var Ui=!0;try{new Uint8Array(1)}catch(a){Ui=!1}
function Vi(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.mb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Wi={};Wi=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Xi={},Yi,Zi=[],$i=0;256>$i;$i++){Yi=$i;for(var aj=0;8>aj;aj++)Yi=Yi&1?3988292384^Yi>>>1:Yi>>>1;Zi[$i]=Yi}Xi=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Zi[(a^b[d])&255];return a^-1};var bj={};bj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function cj(a){for(var b=a.length;0<=--b;)a[b]=0}
var dj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ej=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],fj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],gj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],hj=Array(576);cj(hj);var ij=Array(60);cj(ij);var jj=Array(512);cj(jj);var kj=Array(256);cj(kj);var lj=Array(29);cj(lj);var mj=Array(30);cj(mj);function nj(a,b,c,d,e){this.Fd=a;this.ge=b;this.ee=c;this.ae=d;this.ze=e;this.nd=a&&a.length}
var oj,pj,qj;function rj(a,b){this.hd=a;this.Bb=0;this.Wa=b}
function sj(a,b){a.T[a.pending++]=b&255;a.T[a.pending++]=b>>>8&255}
function tj(a,b,c){a.ba>16-c?(a.ia|=b<<a.ba&65535,sj(a,a.ia),a.ia=b>>16-a.ba,a.ba+=c-16):(a.ia|=b<<a.ba&65535,a.ba+=c)}
function uj(a,b,c){tj(a,c[2*b],c[2*b+1])}
function vj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function wj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=vj(d[e]++,e))}
function xj(a){var b;for(b=0;286>b;b++)a.la[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ea[2*b]=0;a.la[512]=1;a.Na=a.Fb=0;a.ta=a.matches=0}
function yj(a){8<a.ba?sj(a,a.ia):0<a.ba&&(a.T[a.pending++]=a.ia);a.ia=0;a.ba=0}
function zj(a,b,c){yj(a);sj(a,c);sj(a,~c);O.ob(a.T,a.window,b,c,a.pending);a.pending+=c}
function Aj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Bj(a,b,c){for(var d=a.V[c],e=c<<1;e<=a.La;){e<a.La&&Aj(b,a.V[e+1],a.V[e],a.depth)&&e++;if(Aj(b,d,a.V[e],a.depth))break;a.V[c]=a.V[e];c=e;e<<=1}a.V[c]=d}
function Cj(a,b,c){var d=0;if(0!==a.ta){do{var e=a.T[a.Kb+2*d]<<8|a.T[a.Kb+2*d+1];var f=a.T[a.Fc+d];d++;if(0===e)uj(a,f,b);else{var g=kj[f];uj(a,g+256+1,b);var h=dj[g];0!==h&&(f-=lj[g],tj(a,f,h));e--;g=256>e?jj[e]:jj[256+(e>>>7)];uj(a,g,c);h=ej[g];0!==h&&(e-=mj[g],tj(a,e,h))}}while(d<a.ta)}uj(a,256,b)}
function Dj(a,b){var c=b.hd,d=b.Wa.Fd,e=b.Wa.nd,f=b.Wa.ae,g,h=-1;a.La=0;a.vb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.V[++a.La]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.La;){var k=a.V[++a.La]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.Fb-=d[2*k+1])}b.Bb=h;for(g=a.La>>1;1<=g;g--)Bj(a,c,g);k=f;do g=a.V[1],a.V[1]=a.V[a.La--],Bj(a,c,1),d=a.V[1],a.V[--a.vb]=g,a.V[--a.vb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.V[1]=k++,Bj(a,c,1);while(2<=a.La);a.V[--a.vb]=
a.V[1];g=b.hd;k=b.Bb;d=b.Wa.Fd;e=b.Wa.nd;f=b.Wa.ge;var l=b.Wa.ee,n=b.Wa.ze,r,t=0;for(r=0;15>=r;r++)a.Ia[r]=0;g[2*a.V[a.vb]+1]=0;for(b=a.vb+1;573>b;b++){var p=a.V[b];r=g[2*g[2*p+1]+1]+1;r>n&&(r=n,t++);g[2*p+1]=r;if(!(p>k)){a.Ia[r]++;var x=0;p>=l&&(x=f[p-l]);var z=g[2*p];a.Na+=z*(r+x);e&&(a.Fb+=z*(d[2*p+1]+x))}}if(0!==t){do{for(r=n-1;0===a.Ia[r];)r--;a.Ia[r]--;a.Ia[r+1]+=2;a.Ia[n]--;t-=2}while(0<t);for(r=n;0!==r;r--)for(p=a.Ia[r];0!==p;)d=a.V[--b],d>k||(g[2*d+1]!==r&&(a.Na+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),p--)}wj(c,h,a.Ia)}
function Ej(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ea[2*l]+=g:0!==l?(l!==e&&a.ea[2*l]++,a.ea[32]++):10>=g?a.ea[34]++:a.ea[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Fj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do uj(a,l,a.ea);while(0!==--g)}else 0!==l?(l!==e&&(uj(a,l,a.ea),g--),uj(a,16,a.ea),tj(a,g-3,2)):10>=g?(uj(a,17,a.ea),tj(a,g-3,3)):(uj(a,18,a.ea),tj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Gj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.la[2*c])return 0;if(0!==a.la[18]||0!==a.la[20]||0!==a.la[26])return 1;for(c=32;256>c;c++)if(0!==a.la[2*c])return 1;return 0}
var Hj=!1;function Ij(a,b,c){a.T[a.Kb+2*a.ta]=b>>>8&255;a.T[a.Kb+2*a.ta+1]=b&255;a.T[a.Fc+a.ta]=c&255;a.ta++;0===b?a.la[2*c]++:(a.matches++,b--,a.la[2*(kj[c]+256+1)]++,a.bb[2*(256>b?jj[b]:jj[256+(b>>>7)])]++);return a.ta===a.Nb-1}
;function Jj(a,b){a.msg=bj[b];return b}
function Kj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Lj(a){var b=a.state,c=b.pending;c>a.J&&(c=a.J);0!==c&&(O.ob(a.output,b.T,b.Pb,c,a.Cb),a.Cb+=c,b.Pb+=c,a.Rc+=c,a.J-=c,b.pending-=c,0===b.pending&&(b.Pb=0))}
function Mj(a,b){var c=0<=a.oa?a.oa:-1,d=a.o-a.oa,e=0;if(0<a.level){2===a.G.vc&&(a.G.vc=Gj(a));Dj(a,a.cc);Dj(a,a.Xb);Ej(a,a.la,a.cc.Bb);Ej(a,a.bb,a.Xb.Bb);Dj(a,a.Zc);for(e=18;3<=e&&0===a.ea[2*gj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.Fb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)tj(a,b?1:0,3),zj(a,c,d);else if(4===a.strategy||g===f)tj(a,2+(b?1:0),3),Cj(a,hj,ij);else{tj(a,4+(b?1:0),3);c=a.cc.Bb+1;d=a.Xb.Bb+1;e+=1;tj(a,c-257,5);tj(a,d-1,5);tj(a,e-4,4);for(f=0;f<e;f++)tj(a,a.ea[2*
gj[f]+1],3);Fj(a,a.la,c-1);Fj(a,a.bb,d-1);Cj(a,a.la,a.bb)}xj(a);b&&yj(a);a.oa=a.o;Lj(a.G)}
function P(a,b){a.T[a.pending++]=b}
function Nj(a,b){a.T[a.pending++]=b>>>8&255;a.T[a.pending++]=b&255}
function Oj(a,b){var c=a.qd,d=a.o,e=a.sa,f=a.sd,g=a.o>a.ga-262?a.o-(a.ga-262):0,h=a.window,k=a.Ya,l=a.Ga,n=a.o+258,r=h[d+e-1],t=h[d+e];a.sa>=a.md&&(c>>=2);f>a.u&&(f=a.u);do{var p=b;if(h[p+e]===t&&h[p+e-1]===r&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<n;);p=258-(n-d);d=n-258;if(p>e){a.Ab=b;e=p;if(p>=f)break;r=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Pj(a){var b=a.ga,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){O.ob(a.window,a.window,b,b,0);a.Ab-=b;a.o-=b;a.oa-=b;var e=c=a.ac;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.G.ha)break;e=a.G;c=a.window;f=a.o+a.u;var g=e.ha;g>d&&(g=d);0===g?c=0:(e.ha-=g,O.ob(c,e.input,e.hb,g,f),1===e.state.wrap?e.F=Wi(e.F,c,g,f):2===e.state.wrap&&(e.F=Xi(e.F,c,g,f)),e.hb+=g,e.lb+=g,c=g);a.u+=c;if(3<=a.u+a.ma)for(d=a.o-a.ma,a.I=a.window[d],
a.I=(a.I<<a.Ka^a.window[d+1])&a.Ja;a.ma&&!(a.I=(a.I<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Ya]=a.head[a.I],a.head[a.I]=d,d++,a.ma--,3>a.u+a.ma););}while(262>a.u&&0!==a.G.ha)}
function Qj(a,b){for(var c;;){if(262>a.u){Pj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o);0!==c&&a.o-c<=a.ga-262&&(a.K=Oj(a,c));if(3<=a.K)if(c=Ij(a,a.o-a.Ab,a.K-3),a.u-=a.K,a.K<=a.Gc&&3<=a.u){a.K--;do a.o++,a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o;while(0!==--a.K);a.o++}else a.o+=a.K,a.K=0,a.I=a.window[a.o],a.I=(a.I<<a.Ka^a.window[a.o+1])&a.Ja;else c=Ij(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Mj(a,!1),0===a.G.J))return 1}a.ma=2>a.o?a.o:2;return 4===b?(Mj(a,!0),0===a.G.J?3:4):a.ta&&(Mj(a,!1),0===a.G.J)?1:2}
function Rj(a,b){for(var c,d;;){if(262>a.u){Pj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o);a.sa=a.K;a.vd=a.Ab;a.K=2;0!==c&&a.sa<a.Gc&&a.o-c<=a.ga-262&&(a.K=Oj(a,c),5>=a.K&&(1===a.strategy||3===a.K&&4096<a.o-a.Ab)&&(a.K=2));if(3<=a.sa&&a.K<=a.sa){d=a.o+a.u-3;c=Ij(a,a.o-1-a.vd,a.sa-3);a.u-=a.sa-1;a.sa-=2;do++a.o<=d&&(a.I=(a.I<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Ya]=a.head[a.I],a.head[a.I]=a.o);
while(0!==--a.sa);a.fb=0;a.K=2;a.o++;if(c&&(Mj(a,!1),0===a.G.J))return 1}else if(a.fb){if((c=Ij(a,0,a.window[a.o-1]))&&Mj(a,!1),a.o++,a.u--,0===a.G.J)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(Ij(a,0,a.window[a.o-1]),a.fb=0);a.ma=2>a.o?a.o:2;return 4===b?(Mj(a,!0),0===a.G.J?3:4):a.ta&&(Mj(a,!1),0===a.G.J)?1:2}
function Sj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Pj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.K=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.K=258-(e-d);a.K>a.u&&(a.K=a.u)}3<=a.K?(c=Ij(a,1,a.K-3),a.u-=a.K,a.o+=a.K,a.K=0):(c=Ij(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Mj(a,!1),0===a.G.J))return 1}a.ma=0;return 4===b?(Mj(a,!0),0===a.G.J?3:4):
a.ta&&(Mj(a,!1),0===a.G.J)?1:2}
function Tj(a,b){for(var c;;){if(0===a.u&&(Pj(a),0===a.u)){if(0===b)return 1;break}a.K=0;c=Ij(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Mj(a,!1),0===a.G.J))return 1}a.ma=0;return 4===b?(Mj(a,!0),0===a.G.J?3:4):a.ta&&(Mj(a,!1),0===a.G.J)?1:2}
function Uj(a,b,c,d,e){this.ne=a;this.ye=b;this.Be=c;this.xe=d;this.je=e}
var Vj;Vj=[new Uj(0,0,0,0,function(a,b){var c=65535;for(c>a.va-5&&(c=a.va-5);;){if(1>=a.u){Pj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.oa+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Mj(a,!1),0===a.G.J)return 1;if(a.o-a.oa>=a.ga-262&&(Mj(a,!1),0===a.G.J))return 1}a.ma=0;if(4===b)return Mj(a,!0),0===a.G.J?3:4;a.o>a.oa&&Mj(a,!1);return 1}),
new Uj(4,4,8,4,Qj),new Uj(4,5,16,8,Qj),new Uj(4,6,32,32,Qj),new Uj(4,4,16,16,Rj),new Uj(8,16,32,32,Rj),new Uj(8,16,128,128,Rj),new Uj(8,32,128,256,Rj),new Uj(32,128,258,1024,Rj),new Uj(32,258,258,4096,Rj)];
function Wj(){this.G=null;this.status=0;this.T=null;this.wrap=this.pending=this.Pb=this.va=0;this.D=null;this.Aa=0;this.method=8;this.yb=-1;this.Ya=this.Tc=this.ga=0;this.window=null;this.Ld=0;this.head=this.Ga=null;this.sd=this.md=this.strategy=this.level=this.Gc=this.qd=this.sa=this.u=this.Ab=this.o=this.fb=this.vd=this.K=this.oa=this.Ka=this.Ja=this.Cc=this.ac=this.I=0;this.la=new O.Ha(1146);this.bb=new O.Ha(122);this.ea=new O.Ha(78);Kj(this.la);Kj(this.bb);Kj(this.ea);this.Zc=this.Xb=this.cc=
null;this.Ia=new O.Ha(16);this.V=new O.Ha(573);Kj(this.V);this.vb=this.La=0;this.depth=new O.Ha(573);Kj(this.depth);this.ba=this.ia=this.ma=this.matches=this.Fb=this.Na=this.Kb=this.ta=this.Nb=this.Fc=0}
function Xj(a,b){if(!a||!a.state||5<b||0>b)return a?Jj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ha||666===c.status&&4!==b)return Jj(a,0===a.J?-5:-2);c.G=a;var d=c.yb;c.yb=b;if(42===c.status)if(2===c.wrap)a.F=0,P(c,31),P(c,139),P(c,8),c.D?(P(c,(c.D.text?1:0)+(c.D.Ta?2:0)+(c.D.Sa?4:0)+(c.D.name?8:0)+(c.D.comment?16:0)),P(c,c.D.time&255),P(c,c.D.time>>8&255),P(c,c.D.time>>16&255),P(c,c.D.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.D.os&255),c.D.Sa&&c.D.Sa.length&&
(P(c,c.D.Sa.length&255),P(c,c.D.Sa.length>>8&255)),c.D.Ta&&(a.F=Xi(a.F,c.T,c.pending,0)),c.Aa=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Tc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Nj(c,e+(31-e%31));0!==c.o&&(Nj(c,a.F>>>16),Nj(c,a.F&65535));a.F=1}if(69===c.status)if(c.D.Sa){for(e=c.pending;c.Aa<(c.D.Sa.length&65535)&&(c.pending!==c.va||(c.D.Ta&&
c.pending>e&&(a.F=Xi(a.F,c.T,c.pending-e,e)),Lj(a),e=c.pending,c.pending!==c.va));)P(c,c.D.Sa[c.Aa]&255),c.Aa++;c.D.Ta&&c.pending>e&&(a.F=Xi(a.F,c.T,c.pending-e,e));c.Aa===c.D.Sa.length&&(c.Aa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.D.name){e=c.pending;do{if(c.pending===c.va&&(c.D.Ta&&c.pending>e&&(a.F=Xi(a.F,c.T,c.pending-e,e)),Lj(a),e=c.pending,c.pending===c.va)){var f=1;break}f=c.Aa<c.D.name.length?c.D.name.charCodeAt(c.Aa++)&255:0;P(c,f)}while(0!==f);c.D.Ta&&c.pending>e&&(a.F=Xi(a.F,
c.T,c.pending-e,e));0===f&&(c.Aa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.D.comment){e=c.pending;do{if(c.pending===c.va&&(c.D.Ta&&c.pending>e&&(a.F=Xi(a.F,c.T,c.pending-e,e)),Lj(a),e=c.pending,c.pending===c.va)){f=1;break}f=c.Aa<c.D.comment.length?c.D.comment.charCodeAt(c.Aa++)&255:0;P(c,f)}while(0!==f);c.D.Ta&&c.pending>e&&(a.F=Xi(a.F,c.T,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.D.Ta?(c.pending+2>c.va&&Lj(a),c.pending+2<=c.va&&(P(c,a.F&255),P(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(Lj(a),0===a.J)return c.yb=-1,0}else if(0===a.ha&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Jj(a,-5);if(666===c.status&&0!==a.ha)return Jj(a,-5);if(0!==a.ha||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Tj(c,b):3===c.strategy?Sj(c,b):Vj[c.level].je(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.J&&(c.yb=-1),0;if(2===d&&(1===b?(tj(c,2,3),uj(c,256,hj),16===c.ba?(sj(c,c.ia),c.ia=0,c.ba=0):8<=c.ba&&(c.T[c.pending++]=
c.ia&255,c.ia>>=8,c.ba-=8)):5!==b&&(tj(c,0,3),zj(c,0,0),3===b&&(Kj(c.head),0===c.u&&(c.o=0,c.oa=0,c.ma=0))),Lj(a),0===a.J))return c.yb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.F&255),P(c,a.F>>8&255),P(c,a.F>>16&255),P(c,a.F>>24&255),P(c,a.lb&255),P(c,a.lb>>8&255),P(c,a.lb>>16&255),P(c,a.lb>>24&255)):(Nj(c,a.F>>>16),Nj(c,a.F&65535));Lj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Yj={};Yj=function(){this.input=null;this.lb=this.ha=this.hb=0;this.output=null;this.Rc=this.J=this.Cb=0;this.msg="";this.state=null;this.vc=2;this.F=0};var Zj=Object.prototype.toString;
function ak(a){if(!(this instanceof ak))return new ak(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.G=new Yj;this.G.J=0;var b=this.G;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Jj(b,-2);else{8===e&&(e=9);var k=new Wj;b.state=k;k.G=b;k.wrap=h;k.D=null;k.Tc=e;k.ga=1<<k.Tc;k.Ya=k.ga-1;k.Cc=f+7;k.ac=1<<k.Cc;k.Ja=k.ac-1;k.Ka=~~((k.Cc+3-1)/3);k.window=new O.mb(2*k.ga);k.head=new O.Ha(k.ac);k.Ga=new O.Ha(k.ga);k.Nb=1<<f+6;k.va=4*k.Nb;k.T=new O.mb(k.va);k.Kb=1*k.Nb;k.Fc=3*k.Nb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.lb=b.Rc=0;b.vc=2;c=b.state;c.pending=0;c.Pb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.yb=0;if(!Hj){d=Array(16);for(f=g=0;28>f;f++)for(lj[f]=g,e=0;e<1<<dj[f];e++)kj[g++]=f;kj[g-1]=f;for(f=g=0;16>f;f++)for(mj[f]=g,e=0;e<1<<ej[f];e++)jj[g++]=f;for(g>>=7;30>f;f++)for(mj[f]=g<<7,e=0;e<1<<ej[f]-7;e++)jj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)hj[2*e+1]=8,e++,d[8]++;for(;255>=e;)hj[2*e+1]=9,e++,d[9]++;for(;279>=e;)hj[2*e+1]=7,e++,d[7]++;for(;287>=e;)hj[2*e+1]=8,e++,d[8]++;wj(hj,287,d);for(e=0;30>e;e++)ij[2*e+1]=5,ij[2*e]=vj(e,5);oj=new nj(hj,dj,257,286,15);pj=new nj(ij,
ej,0,30,15);qj=new nj([],fj,0,19,7);Hj=!0}c.cc=new rj(c.la,oj);c.Xb=new rj(c.bb,pj);c.Zc=new rj(c.ea,qj);c.ia=0;c.ba=0;xj(c);c=0}else c=Jj(b,-2);0===c&&(b=b.state,b.Ld=2*b.ga,Kj(b.head),b.Gc=Vj[b.level].ye,b.md=Vj[b.level].ne,b.sd=Vj[b.level].Be,b.qd=Vj[b.level].xe,b.o=0,b.oa=0,b.u=0,b.ma=0,b.K=b.sa=2,b.fb=0,b.I=0);b=c}}else b=-2;if(0!==b)throw Error(bj[b]);a.header&&(b=this.G)&&b.state&&2===b.state.wrap&&(b.state.D=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=Vi(a.dictionary):
"[object ArrayBuffer]"===Zj.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.G;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=Wi(a.F,f,g,0));l.wrap=0;g>=l.ga&&(0===b&&(Kj(l.head),l.o=0,l.oa=0,l.ma=0),c=new O.mb(l.ga),O.ob(c,f,g-l.ga,l.ga,0),f=c,g=l.ga);c=a.ha;d=a.hb;e=a.input;a.ha=g;a.hb=0;a.input=f;for(Pj(l);3<=l.u;){f=l.o;g=l.u-2;do l.I=(l.I<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Ya]=l.head[l.I],l.head[l.I]=f,f++;while(--g);
l.o=f;l.u=2;Pj(l)}l.o+=l.u;l.oa=l.o;l.ma=l.u;l.u=0;l.K=l.sa=2;l.fb=0;a.hb=d;a.input=e;a.ha=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(bj[b]);this.Ff=!0}}
ak.prototype.push=function(a,b){var c=this.G,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Vi(a):"[object ArrayBuffer]"===Zj.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ha=c.input.length;do{0===c.J&&(c.output=new O.mb(d),c.Cb=0,c.J=d);a=Xj(c,e);if(1!==a&&0!==a)return bk(this,a),this.ended=!0,!1;if(0===c.J||0===c.ha&&(4===e||2===e))if("string"===this.options.to){var f=O.Qc(c.output,c.Cb);b=f;f=f.length;if(65537>f&&(b.subarray&&Ui||!b.subarray))b=
String.fromCharCode.apply(null,O.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Qc(c.output,c.Cb),this.chunks.push(b)}while((0<c.ha||0===c.J)&&1!==a);if(4===e)return(c=this.G)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Jj(c,-2):(c.state=null,a=113===d?Jj(c,-3):0)):a=-2,bk(this,a),this.ended=!0,0===a;2===e&&(bk(this,0),c.J=0);return!0};
function bk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):O.jd(a.chunks));a.chunks=[];a.err=b;a.msg=a.G.msg}
function ck(a,b){b=b||{};b.gzip=!0;b=new ak(b);b.push(a,!0);if(b.err)throw b.msg||bj[b.err];return b.result}
;function dk(a){return Db(null===a?"null":void 0===a?"undefined":a)}
;function ek(a){this.name=a}
;var fk=new ek("rawColdConfigGroup");var gk=new ek("rawHotConfigGroup");var hk=new ek("commandExecutorCommand");function ik(a){this.B=zf(a)}
w(ik,Yf);var jk=new ek("continuationCommand");var kk=new ek("signalAction");var lk=new ek("webCommandMetadata");var mk=new ek("signalServiceEndpoint");var nk={vf:"EMBEDDED_PLAYER_MODE_UNKNOWN",sf:"EMBEDDED_PLAYER_MODE_DEFAULT",uf:"EMBEDDED_PLAYER_MODE_PFP",tf:"EMBEDDED_PLAYER_MODE_PFL"};var ok=new ek("feedbackEndpoint");function pk(a){this.B=zf(a)}
w(pk,Yf);var qk=new ek("webPlayerShareEntityServiceEndpoint");var rk=new ek("playlistEditEndpoint");var sk=new ek("modifyChannelNotificationPreferenceEndpoint");var tk=new ek("unsubscribeEndpoint");var uk=new ek("subscribeEndpoint");function vk(){var a=wk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function xk(a){D("yt.ads.biscotti.lastId_",a)}
;function yk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var zk=C.window,Ak,Bk,Ck=(null==zk?void 0:null==(Ak=zk.yt)?void 0:Ak.config_)||(null==zk?void 0:null==(Bk=zk.ytcfg)?void 0:Bk.data_)||{};D("yt.config_",Ck);function Dk(){yk(Ck,arguments)}
function R(a,b){return a in Ck?Ck[a]:b}
function Ek(a){var b=Ck.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Fk=[];function Gk(a){Fk.forEach(function(b){return b(a)})}
function Hk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ik(b)}}:a}
function Ik(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Dk("ERRORS",b));Gk(a)}
function Jk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Dk("ERRORS",f))}
;var Kk=/^[\w.]*$/,Lk={q:!0,search_query:!0};function Mk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Nk(f[0]||""),h=Nk(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,l=f[0],n=String(Mk);k.args=[{key:l,value:f[1],query:a,method:Ok==n?"unchanged":n}];Lk.hasOwnProperty(l)||Jk(k)}}return c}
var Ok=String(Mk);function Pk(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];bb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Qk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Mk(a,"&")}
function Rk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Qk(1<a.length?a[1]:a[0])):{}}
function Sk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Qk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
function Tk(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(cc(4,b))||null)==(Number(cc(4,a))||null):!0;return a}
function Nk(a){return a&&a.match(Kk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Uk(a){var b=Vk;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Xh;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ha){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?zh:g;try{var h=g.history.length}catch(Ha){h=0}e.u_his=h;var k;e.u_h=null==(k=zh.screen)?void 0:k.height;var l;e.u_w=null==(l=zh.screen)?void 0:l.width;var n;e.u_ah=null==(n=zh.screen)?void 0:n.availHeight;var r;e.u_aw=
null==(r=zh.screen)?void 0:r.availWidth;var t;e.u_cd=null==(t=zh.screen)?void 0:t.colorDepth}catch(Ha){}h=b.h;try{var p=h.screenX;var x=h.screenY}catch(Ha){}try{var z=h.outerWidth;var y=h.outerHeight}catch(Ha){}try{var H=h.innerWidth;var I=h.innerHeight}catch(Ha){}try{var L=h.screenLeft;var M=h.screenTop}catch(Ha){}try{H=h.innerWidth,I=h.innerHeight}catch(Ha){}try{var K=h.screen.availWidth;var V=h.screen.availTop}catch(Ha){}p=[L,M,p,x,K,V,z,y,H,I];try{var Z=(b.h.top||window).document,ea="CSS1Compat"==
Z.compatMode?Z.documentElement:Z.body;var qa=(new Cd(ea.clientWidth,ea.clientHeight)).round()}catch(Ha){qa=new Cd(-12245933,-12245933)}Z=qa;qa={};var na=void 0===na?C:na;ea=new ei;"SVGElement"in na&&"createElementNS"in na.document&&ea.set(0);x=Uh();x["allow-top-navigation-by-user-activation"]&&ea.set(1);x["allow-popups-to-escape-sandbox"]&&ea.set(2);na.crypto&&na.crypto.subtle&&ea.set(3);"TextDecoder"in na&&"TextEncoder"in na&&ea.set(4);na=fi(ea);qa.bc=na;qa.bih=Z.height;qa.biw=Z.width;qa.brdim=p.join();
b=b.i;b=(qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,qa.wgl=!!zh.WebGLRenderingContext,qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Vk=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Pk(Uk(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=Wk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Xk(a,b){a=Wk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Wk(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function Yk(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Zk="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function $k(){if(!Zk)return null;var a=Zk();return"open"in a?a:null}
function al(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function bl(a,b){"function"===typeof a&&(a=Hk(a));return window.setTimeout(a,b)}
;var cl="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ia(cl),["client_dev_set_cookie"]);var dl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},el="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(cl)),fl=!1;
function gl(a,b){b=void 0===b?{}:b;var c=Tk(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in dl){var f=R(dl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&dc(a)||d&&void 0!==b[e]||(!S("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}S("move_vss_away_from_login_info_cookie")&&c&&R("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==R("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=Pk(Uk()));return b}
function hl(a){var b=window.location.search,c=dc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Tk(a)&&(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Qk(b),f={};bb(el,function(g){e[g]&&(f[g]=e[g])});
return Sk(a,f||{},!1)}
function il(a,b){var c=b.format||"JSON";a=jl(a,b);var d=kl(a,b),e=!1,f=ll(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=al(k),n=null,r=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||r||t)n=ml(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};r=b.context||C;l?b.onSuccess&&b.onSuccess.call(r,k,n):b.onError&&b.onError.call(r,k,n);b.onFinish&&b.onFinish.call(r,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=bl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function jl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Sk(a,b||{},!0);return a}
function kl(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Qk(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):kc(e));f=e||f&&!lb(f);!fl&&f&&"POST"!=b.method&&(fl=!0,Ik(Error("AJAX request with postData should use POST")));return e}
function ml(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Jk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?nl(a):null)e={},bb(a.getElementsByTagName("*"),function(g){e[g.tagName]=ol(g)})}d&&pl(e);
return e}
function pl(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=ub();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else pl(a[b])}}
function nl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ol(a){var b="";bb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ql(a,b){b.method="POST";b.postParams||(b.postParams={});return il(a,b)}
function ll(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Hk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=$k();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=hl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=gl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var rl=[{Hc:function(a){return"Cannot read property '"+a.key+"'"},
ic:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Hc:function(a){return"Cannot call '"+a.key+"'"},
ic:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Hc:function(a){return a.key+" is not defined"},
ic:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var tl={Ua:[],Ra:[{callback:sl,weight:500}]};function sl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ul(){this.Ra=[];this.Ua=[]}
var vl;function wl(){if(!vl){var a=vl=new ul;a.Ua.length=0;a.Ra.length=0;tl.Ua&&a.Ua.push.apply(a.Ua,tl.Ua);tl.Ra&&a.Ra.push.apply(a.Ra,tl.Ra)}return vl}
;var xl=new N;function yl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=zl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=zl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=zl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function zl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Al(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Bl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=yl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Bl(e+".ve",f,g,h):0;d+=g;d+=Bl(e,a[e],b,c);if(500<d)break}}else c[b]=Cl(a),d+=c[b].length;else c[b]=Cl(a),d+=c[b].length;return d}
function Bl(a,b,c,d){c+="."+a;a=Cl(b);d[c]=a;return c.length+a.length}
function Cl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Dl(){this.We=!0}
function El(){Dl.h||(Dl.h=new Dl);return Dl.h}
function Fl(a,b){a={};var c=sg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Ck||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Ck&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Gl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Hl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Il(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Jl(a,b,c,d,e){og.set(""+a,b,{dc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Kl(a){return og.get(""+a,void 0)}
function Ll(a,b,c){og.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Ml(){if(!og.isEnabled())return!1;if(!og.isEmpty())return!0;og.set("TESTCOOKIESENABLED","1",{dc:60});if("1"!==og.get("TESTCOOKIESENABLED"))return!1;og.remove("TESTCOOKIESENABLED");return!0}
;var Nl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Nl);function Ol(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Kl(this.h);a&&this.parse(a)}
var Pl;function Ql(){Pl||(Pl=new Ol);return Pl}
m=Ol.prototype;m.get=function(a,b){Rl(a);Sl(a);a=void 0!==Nl[a]?Nl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Rl(a);Sl(a);if(null==b)throw Error("ExpectedNotNull");Nl[a]=b.toString()};
function Tl(a){return!!((Ul("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Rl(a);Sl(a);delete Nl[a]};
m.clear=function(){for(var a in Nl)delete Nl[a]};
function Sl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Rl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ul(a){a=void 0!==Nl[a]?Nl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Nl[d]=c.toString())}};var Vl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Wl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Xl(){var a=C.navigator;return a?a.connection:void 0}
function Yl(){var a=Xl();if(a){var b=Vl[a.type||"unknown"]||"CONN_UNKNOWN";a=Vl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Zl(){var a=Xl();if(null!=a&&a.effectiveType)return Wl.hasOwnProperty(a.effectiveType)?Wl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function $l(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
w($l,Error);function am(){try{return bm(),!0}catch(a){return!1}}
function bm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new $l("Datasync ID not set",void 0===a?"unknown":a);}
;function cm(){}
function dm(a,b){return em(a,0,b)}
cm.prototype.ka=function(a,b){return em(a,1,b)};
function fm(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function gm(){cm.apply(this,arguments)}
w(gm,cm);function hm(){gm.h||(gm.h=new gm);return gm.h}
function em(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):bl(a,c||0)}
gm.prototype.za=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
gm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
gm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var di=hm();function im(a){var b=new Ki;(b=b.isAvailable()?a?new Qi(b,a):b:null)||(a=new Li(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Gi(a):null;this.i=document.domain||window.location.hostname}
im.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new xg).serialize(b))}catch(f){return}else e=escape(b);Jl(a,e,c,this.i)};
im.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Kl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
im.prototype.remove=function(a){this.h&&this.h.remove(a);Ll(a,"/",this.i)};var jm=function(){var a;return function(){a||(a=new im("ytidb"));return a}}();
function km(){var a;return null==(a=jm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var lm=[],mm,nm=!1;function om(){var a={};for(mm=new pm(void 0===a.handleError?qm:a.handleError,void 0===a.logEvent?rm:a.logEvent);0<lm.length;)switch(a=lm.shift(),a.type){case "ERROR":mm.handleError(a.payload);break;case "EVENT":mm.logEvent(a.eventType,a.payload)}}
function sm(a){nm||(mm?mm.handleError(a):(lm.push({type:"ERROR",payload:a}),10<lm.length&&lm.shift()))}
function tm(a,b){nm||(mm?mm.logEvent(a,b):(lm.push({type:"EVENT",eventType:a,payload:b}),10<lm.length&&lm.shift()))}
;function um(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function wm(a){return a.substr(0,a.indexOf(":"))||a}
;var xm=Be||Ce;function ym(a){var b=Ob();return b?0<=b.toLowerCase().indexOf(a):!1}
;var zm={},Am=(zm.AUTH_INVALID="No user identifier specified.",zm.EXPLICIT_ABORT="Transaction was explicitly aborted.",zm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",zm.MISSING_INDEX="Index not created.",zm.MISSING_OBJECT_STORES="Object stores not created.",zm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",zm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",zm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
zm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",zm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",zm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",zm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",zm),Bm={},Cm=(Bm.AUTH_INVALID="ERROR",Bm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Bm.EXPLICIT_ABORT="IGNORED",Bm.IDB_NOT_SUPPORTED="ERROR",Bm.MISSING_INDEX=
"WARNING",Bm.MISSING_OBJECT_STORES="ERROR",Bm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Bm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Bm.QUOTA_EXCEEDED="WARNING",Bm.QUOTA_MAYBE_EXCEEDED="WARNING",Bm.UNKNOWN_ABORT="WARNING",Bm.INCOMPATIBLE_DB_VERSION="WARNING",Bm),Dm={},Em=(Dm.AUTH_INVALID=!1,Dm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Dm.EXPLICIT_ABORT=!1,Dm.IDB_NOT_SUPPORTED=!1,Dm.MISSING_INDEX=!1,Dm.MISSING_OBJECT_STORES=!1,Dm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Dm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Dm.QUOTA_EXCEEDED=!1,Dm.QUOTA_MAYBE_EXCEEDED=!0,Dm.UNKNOWN_ABORT=!0,Dm.INCOMPATIBLE_DB_VERSION=!1,Dm);function Fm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Am[a]:c;d=void 0===d?Cm[a]:d;e=void 0===e?Em[a]:e;$l.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Fm.prototype)}
w(Fm,$l);function Gm(a,b){Fm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Am.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gm.prototype)}
w(Gm,Fm);function Hm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hm.prototype)}
w(Hm,Error);var Im=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jm(a,b,c,d){b=wm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Fm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Fm("QUOTA_EXCEEDED",a);if(De&&"UnknownError"===e.name)return new Fm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hm)return new Fm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Im.some(function(f){return e.message.includes(f)}))return new Fm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Fm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ud:e.name})];e.level="WARNING";return e}
function Km(a,b,c){var d=km();return new Fm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Lm(a){if(!a)throw Error();throw a;}
function Mm(a){return a}
function Nm(a){this.h=a}
function Om(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Om.all=function(a){return new Om(new Nm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={wb:0};f.wb<a.length;f={wb:f.wb},++f.wb)Om.resolve(a[f.wb]).then(function(g){return function(h){d[g.wb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Om.resolve=function(a){return new Om(new Nm(function(b,c){a instanceof Om?a.then(b,c):b(a)}))};
Om.reject=function(a){return new Om(new Nm(function(b,c){c(a)}))};
Om.prototype.then=function(a,b){var c=this,d=null!=a?a:Mm,e=null!=b?b:Lm;return new Om(new Nm(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Pm(c,c,d,f,g)}),c.i.push(function(){Qm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Pm(c,c,d,f,g):"REJECTED"===c.state.status&&Qm(c,c,e,f,g)}))};
Om.prototype.catch=function(a){return this.then(void 0,a)};
function Pm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Om?Rm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Om?Rm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Om?Rm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Sm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Tm(a){return new Promise(function(b,c){Sm(a,b,c)})}
function Um(a){return new Om(new Nm(function(b,c){Sm(a,b,c)}))}
;function Vm(a,b){return new Om(new Nm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Wm=window,T=Wm.ytcsi&&Wm.ytcsi.now?Wm.ytcsi.now:Wm.performance&&Wm.performance.timing&&Wm.performance.now&&Wm.performance.timing.navigationStart?function(){return Wm.performance.timing.navigationStart+Wm.performance.now()}:function(){return(new Date).getTime()};function Xm(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
m=Xm.prototype;m.add=function(a,b,c){return Ym(this,[a],{mode:"readwrite",fa:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Ym(this,[a],{mode:"readwrite",fa:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Ym(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).count(b)})};
function Zm(a,b,c){a=a.h.createObjectStore(b,c);return new $m(a)}
m.delete=function(a,b){return Ym(this,[a],{mode:"readwrite",fa:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Ym(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).get(b)})};
function an(a,b,c){return Ym(a,[b],{mode:"readwrite",fa:!0},function(d){d=d.objectStore(b);return Um(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Ym(a,b,c,d){var e,f,g,h,k,l,n,r,t,p,x,z;return A(function(y){switch(y.h){case 1:var H={mode:"readonly",fa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.fa?3:1;g=0;case 2:if(h){y.v(4);break}g++;k=Math.round(T());ya(y,5);l=a.h.transaction(b,e.mode);H=y.yield;var I=new bn(l);I=cn(I,d);return H.call(y,I,7);case 7:return n=y.i,r=Math.round(T()),dn(a,k,r,g,void 0,b.join(),e),y.return(n);case 5:t=za(y);p=Math.round(T());x=Jm(t,
a.h.name,b.join(),a.h.version);if((z=x instanceof Fm&&!x.h)||g>=f)dn(a,k,p,g,x,b.join(),e),h=x;y.v(2);break;case 4:return y.return(Promise.reject(h))}})}
function dn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Fm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&tm("QUOTA_EXCEEDED",{dbName:wm(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Fm&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),tm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),en(a,!1,d,f,b,g.tag),sm(e)):en(a,!0,d,f,b,g.tag)}
function en(a,b,c,d,e,f){tm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function $m(a){this.h=a}
m=$m.prototype;m.add=function(a,b){return Um(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Um(this.h.clear()).then(function(){})};
function fn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Um(this.h.count(a))};
function gn(a,b){return hn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?gn(this,a):Um(this.h.delete(a))};
m.get=function(a){return Um(this.h.get(a))};
m.index=function(a){try{return new jn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hm(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function hn(a,b,c){a=a.h.openCursor(b.query,b.direction);return kn(a).then(function(d){return Vm(d,c)})}
function bn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Fm;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function cn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
bn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Fm("EXPLICIT_ABORT");};
bn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new $m(a),this.i.set(a,b));return b};
function jn(a){this.h=a}
m=jn.prototype;m.count=function(a){return Um(this.h.count(a))};
m.delete=function(a){return ln(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Um(this.h.get(a))};
m.getKey=function(a){return Um(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function ln(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return kn(a).then(function(d){return Vm(d,c)})}
function mn(a,b){this.request=a;this.cursor=b}
function kn(a){return Um(a).then(function(b){return b?new mn(a,b):null})}
m=mn.prototype;m.advance=function(a){this.cursor.advance(a);return kn(this.request)};
m.continue=function(a){this.cursor.continue(a);return kn(this.request)};
m.delete=function(){return Um(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Um(this.cursor.update(a))};function nn(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Xm(g.result,{closed:r}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Vd,k=c.blocking,l=c.Xe,n=c.upgrade,r=c.closed,t;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&tm("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:wm(a)});var x=f(),z=new bn(g.transaction);
n&&n(x,function(y){return p.oldVersion<y&&p.newVersion>=y},z);
z.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){tm("IDB_UNEXPECTEDLY_CLOSED",{dbName:wm(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function on(a,b,c){c=void 0===c?{}:c;return nn(a,b,c)}
function pn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Vd)&&c.addEventListener("blocked",function(){e()}),g.yield(Tm(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=za(g),Jm(f,a,"",-1);})}
;function qn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
qn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return on(a,b,c)};
qn.prototype.delete=function(a){a=void 0===a?{}:a;return pn(this.name,a)};
function rn(a,b){return new Fm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function sn(a,b){if(!b)throw Km("openWithToken",wm(a.name));return a.open()}
qn.prototype.open=function(){function a(){var f,g,h,k,l,n,r,t,p,x;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",ya(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:h=z.i;for(var y=c.options,H=[],I=v(Object.keys(y.Db)),L=I.next();!L.done;L=I.next()){L=L.value;var M=y.Db[L],K=void 0===M.Fe?Number.MAX_VALUE:M.Fe;!(h.h.version>=M.Ib)||h.h.version>=K||h.h.objectStoreNames.contains(L)||H.push(L)}k=H;if(0===k.length){z.v(5);break}l=Object.keys(c.options.Db);n=h.objectStoreNames();
if(c.m<Xk("ytidb_reopen_db_retries",0))return c.m++,h.close(),sm(new Fm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.l<Xk("ytidb_remake_db_retries",1))){z.v(6);break}c.l++;return z.yield(c.delete(),7);case 7:return sm(new Fm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());case 6:throw new Gm(n,l);case 5:return z.return(h);case 2:r=za(z);if(r instanceof DOMException?
"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){z.v(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=z.i;p=t.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw t.close(),c.j=!1,rn(c,p);return z.return(t);case 8:throw b(),r instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Jm(r,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw rn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Xe:b,upgrade:this.options.upgrade};return this.h=d=a()};var tn=new qn("YtIdbMeta",{Db:{databases:{Ib:1}},upgrade:function(a,b){b(1)&&Zm(a,"databases",{keyPath:"actualName"})}});
function un(a,b){var c;return A(function(d){if(1==d.h)return d.yield(sn(tn,b),2);c=d.i;return d.return(Ym(c,["databases"],{fa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Um(f.h.put(a,void 0)).then(function(){})})}))})}
function vn(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(sn(tn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function wn(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(sn(tn,b),2)):3!=e.h?(d=e.i,e.yield(Ym(d,["databases"],{fa:!0,mode:"readonly"},function(f){c.length=0;return hn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function xn(a){return wn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function yn(a,b,c){return wn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function zn(a){var b,c;return A(function(d){if(1==d.h)return b=bm("YtIdbMeta hasAnyMeta other"),d.yield(wn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var An,Bn=new function(){}(new function(){});
function Cn(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=km();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=xm)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(un(d,Bn),4);case 4:return e.yield(vn("yt-idb-test-do-not-use",Bn),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Dn(){if(void 0!==An)return An;nm=!0;return An=Cn().then(function(a){nm=!1;var b;if(null!=(b=jm())&&b.h){var c;b={hasSucceededOnce:(null==(c=km())?void 0:c.hasSucceededOnce)||a};var d;null==(d=jm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function En(){return E("ytglobal.idbToken_")||void 0}
function Fn(){var a=En();return a?Promise.resolve(a):Dn().then(function(b){(b=b?Bn:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Gn=0;function Hn(a,b){Gn||(Gn=di.ka(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Fn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(yn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(pn(f.actualName),7);case 7:return h.yield(vn(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=za(h),sm(g),d=!1;case 4:di.za(Gn),Gn=0,d&&Hn(a,b),h.h=0}})}))}
function In(){var a;return A(function(b){return 1==b.h?b.yield(Fn(),2):(a=b.i)?b.return(zn(a)):b.return(!1)})}
new xh;function Jn(a){if(!am())throw a=new Fm("AUTH_INVALID",{dbName:a}),sm(a),a;var b=bm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Kn(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Fn(),2);case 2:g=n.i;if(!g)throw h=Km("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),sm(h),h;um(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Jn(a);ya(n,3);return n.yield(un(k,g),5);case 5:return n.yield(on(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=za(n),ya(n,7),n.yield(vn(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:za(n);case 8:throw l;}})}
function Ln(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!1,c)}
function Mn(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!0,c)}
function Nn(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Fn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();um(a);d=Jn(a);return e.yield(pn(d.actualName,b),3)}return e.yield(vn(d.actualName,c),0)})}
function On(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(pn(d.actualName,b),2):e.yield(vn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Pn(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Fn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();um("LogsDatabaseV2");return d.yield(xn(b),3)}c=d.i;return d.yield(On(c,a,b),0)})}
function Qn(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Fn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();um(a);return d.yield(pn(a,b),3)}return d.yield(vn(a,c),0)})}
;function Rn(a,b){qn.call(this,a,b);this.options=b;um(a)}
w(Rn,qn);function Sn(a,b){var c;return function(){c||(c=new Rn(a,b));return c}}
Rn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Mn:Ln)(a,b,Object.assign({},c))};
Rn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Qn:Nn)(this.name,a)};
function Tn(a,b){return Sn(a,b)}
;var Un={},Vn=Tn("ytGcfConfig",{Db:(Un.coldConfigStore={Ib:1},Un.hotConfigStore={Ib:1},Un),nc:!1,upgrade:function(a,b){b(1)&&(fn(Zm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),fn(Zm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Wn(a){return sn(Vn(),a)}
function Xn(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},g.yield(Wn(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(an(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Yn(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},h.yield(Wn(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(an(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Zn(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Ym(b,["coldConfigStore"],{mode:"readwrite",fa:!0},function(e){return ln(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function $n(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Ym(b,["hotConfigStore"],{mode:"readwrite",fa:!0},function(e){return ln(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ao(){G.apply(this,arguments);this.i=[]}
w(ao,G);ao.prototype.M=function(){this.i.length=0;G.prototype.M.call(this)};function bo(){this.h=0;this.i=new ao}
function co(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:null}
function eo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;D("yt.gcf.config.hotHashData",a.hotHashData||null);d=En();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield($n(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Xn(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.i),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function fo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("start_client_gcf"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=En())?c?h.v(4):h.yield(Zn(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Yn(c,b,g,d),0)})}
function go(){if(!bo.h){var a=new bo;bo.h=a}a=bo.h;var b=T()-a.h;if(!(0!==a.h&&b<Xk("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=T());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
;function ho(){return"INNERTUBE_API_KEY"in Ck&&"INNERTUBE_API_VERSION"in Ck}
function io(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),oe:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),od:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Mf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:R("INNERTUBE_CONTEXT_HL"),pe:R("INNERTUBE_CONTEXT_GL"),re:R("INNERTUBE_HOST_OVERRIDE")||"",te:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),se:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function jo(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.od,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Yk();0<c.length&&(b.request={internalExperimentFlags:c});c=a.od;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Il()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Yl())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=Zl())&&
b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=go())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Qk(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function ko(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Gf:(a=Fl(El()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function lo(a,b){this.version=a;this.args=b}
lo.prototype.serialize=function(){return{version:this.version,args:this.args}};function mo(a,b){this.topic=a;this.h=b}
mo.prototype.toString=function(){return this.topic};var no=E("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Gb;N.prototype.publish=N.prototype.Za;N.prototype.clear=N.prototype.clear;D("ytPubsub2Pubsub2Instance",no);var oo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",oo);var po=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",po);var qo=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",qo);
D("ytPubsub2Pubsub2SkipSubKey",null);function ro(a,b){var c=so();c&&c.publish.call(c,a.toString(),a,b)}
function to(a){var b=uo,c=so();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(oo[d])try{if(f&&b instanceof mo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(y){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var r=n.construct;
var t=k.args,p=t.length;if(0<p){var x=Array(p);for(k=0;k<p;k++)x[k]=t[k];var z=x}else z=[];f=r.call(n,h,z)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){Ik(y)}},qo[b.toString()]?E("yt.scheduler.instance")?di.ka(g):bl(g,0):g())});
oo[d]=!0;po[b.toString()]||(po[b.toString()]=[]);po[b.toString()].push(d);return d}
function vo(){var a=wo,b=to(function(c){a.apply(void 0,arguments);xo(b)});
return b}
function xo(a){var b=so();b&&("number"===typeof a&&(a=[a]),bb(a,function(c){b.unsubscribeByKey(c);delete oo[c]}))}
function so(){return E("ytPubsub2Pubsub2Instance")}
;function yo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&ro("meta_logging_csi_event",{timerName:a,cg:b})}
;var zo=Xk("max_body_size_to_compress",5E5),Ao=Xk("min_body_size_to_compress",500),Bo=!0,Co=0,Do=0,Eo=Xk("compression_performance_threshold_lr",250),Fo=Xk("slow_compressions_before_abandon_count",4);
function Go(a,b,c,d){var e=T(),f={startTime:e,ticks:{},infos:{}};if(Bo)try{var g=Ho(b);if(null==g||!(g>zo||g<Ao)){var h=ck(Zh(b)),k=T();f.ticks.gelc=k;Do++;S("disable_compression_due_to_performance_degredation")&&k-e>=Eo&&(Co++,S("abandon_compression_after_N_slow_zips")?Do===Xk("compression_disable_point")&&Co>Fo&&(Bo=!1):Bo=!1);Io(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Jk(l),d(a,c)}else d(a,c)}
function Jo(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=T(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Bo&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Ho(g);if(null!=h&&(h>zo||h<Ao))return a;f=ck(Zh(g),b?{level:1}:void 0);var k=T();e.ticks.gelc=k;if(b){Do++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Eo)if(Co++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Co/Do;var l=Fo/Xk("compression_disable_point");0<Do&&0===Do%Xk("compression_disable_point")&&b>=l&&(Bo=!1)}else Bo=!1;Io(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Jk(n),a}}else return a}
function Ho(a){try{return(new Blob(a.split(""))).size}catch(b){return Jk(b),null}}
function Io(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||yo("gel_compression",a,{sampleRate:.1})}
;function Ko(a){a=Object.assign({},a);delete a.Authorization;var b=sg();if(b){var c=new ji;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Ge(c.digest(),3)}return a}
;var Lo;function Mo(){Lo||(Lo=new im("yt.innertube"));return Lo}
function No(a,b,c,d){if(d)return null;d=Mo().get("nextId",!0)||1;var e=Mo().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ko(c),requestTime:Math.round(T())};Mo().set("nextId",d+1,86400,!0);Mo().set("requests",e,86400,!0);return d}
function Oo(a){var b=Mo().get("requests",!0)||{};delete b[a];Mo().set("requests",b,86400,!0)}
function Po(a){var b=Mo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Ko(ko(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Qo(a,d.method,e,{}));delete b[c]}}Mo().set("requests",b,86400,!0)}}
;function Ro(a){this.Tb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ub=function(){};
this.now=Date.now;this.Mb=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.yd=null!=(d=a.yd)?d:2592E6;var e;this.wd=null!=(e=a.wd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.R=null!=(g=a.R)?g:void 0;this.Yb=!!a.Yb;var h;this.Wb=null!=(h=a.Wb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.ub&&(this.ub=a.ub);a.Mb&&(this.Mb=a.Mb);a.Tb&&(this.Tb=a.Tb);this.S=a.S;this.Ca=a.Ca;this.Z=a.Z;this.Y=a.Y;this.Pa=a.Pa;this.Kc=
a.Kc;this.Jc=a.Jc;So(this)&&(!this.S||this.S("networkless_logging"))&&To(this)}
function To(a){So(a)&&!a.Mb&&(a.h=!0,a.Yb&&Math.random()<=a.Wb&&a.Z.Xd(a.R),Uo(a),a.Y.ra()&&a.Rb(),a.Y.listen(a.Kc,a.Rb.bind(a)),a.Y.listen(a.Jc,a.bd.bind(a)))}
m=Ro.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(So(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z.set(d,this.R).then(function(e){d.id=e;c.Y.ra()&&Vo(c,d)}).catch(function(e){Vo(c,d);
Wo(c,e)})}else this.Pa(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(So(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.S&&this.S("nwl_skip_retry")&&(e.skipRetry=c);if(this.Y.ra()||this.S&&this.S("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.Z.set(e,d.R).catch(function(l){Wo(d,l)}),2);
f(g,h);k.h=0})}}this.Pa(a,b,e.skipRetry)}else this.Z.set(e,this.R).catch(function(g){d.Pa(a,b,e.skipRetry);
Wo(d,g)})}else this.Pa(a,b,this.S&&this.S("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(So(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Z.qb(d.id,c.R):e=!0;c.Y.gb&&c.S&&c.S("vss_network_hint")&&c.Y.gb(!0);f(g,h)};
this.Pa(d.url,d.options);this.Z.set(d,this.R).then(function(g){d.id=g;e&&c.Z.qb(d.id,c.R)}).catch(function(g){Wo(c,g)})}else this.Pa(a,b)};
m.Rb=function(){var a=this;if(!So(this))throw Km("throttleSend");this.i||(this.i=this.Ca.ka(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.Z.ld("NEW",a.R),2);if(3!=c.h)return b=c.i,b?c.yield(Vo(a,b),3):(a.bd(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.Gd))};
m.bd=function(){this.Ca.za(this.i);this.i=0};
function Vo(a,b){var c,d;return A(function(e){switch(e.h){case 1:if(!So(a))throw c=Km("immediateSend"),c;if(void 0===b.id){e.v(2);break}return e.yield(a.Z.we(b.id,a.R),3);case 3:(d=e.i)||a.ub(Error("The request cannot be found in the database."));case 2:if(Xo(a,b,a.yd)){e.v(4);break}a.ub(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return e.yield(a.Z.qb(b.id,a.R),5);case 5:return e.return();case 4:b.skipRetry||(b=Yo(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return e.yield(a.Z.qb(b.id,a.R),8);case 8:a.Pa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Yo(a,b){if(!So(a))throw Km("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Zo(f);(h=$o(f))&&a.S&&a.S("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.S&&a.S("nwl_consider_error_code")&&g||a.S&&!a.S("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.v(2);break}if(!a.Y.mc){n.v(3);break}return n.yield(a.Y.mc(),3);case 3:if(a.Y.ra()){n.v(2);break}c(e,f);if(!a.S||!a.S("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.Z.Oc(b.id,a.R,!1),6);case 6:return n.return();case 2:if(a.S&&a.S("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.Ad?n.yield(a.Z.Oc(b.id,a.R,!0,h?!1:void 0),12):n.yield(a.Z.qb(b.id,a.R),8);case 12:a.Ca.ka(function(){a.Y.ra()&&a.Rb()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.Z.qb(b.id,a.R),2);a.Y.gb&&a.S&&a.S("vss_network_hint")&&a.Y.gb(!0);d(e,f);h.h=0})};
return b}
function Xo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Uo(a){if(!So(a))throw Km("retryQueuedRequests");a.Z.ld("QUEUED",a.R).then(function(b){b&&!Xo(a,b,a.wd)?a.Ca.ka(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.Z.Oc(b.id,a.R),2);Uo(a);c.h=0})}):a.Y.ra()&&a.Rb()})}
function Wo(a,b){a.Md&&!a.Y.ra()?a.Md(b):a.handleError(b)}
function So(a){return!!a.R||a.Tb}
function Zo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function $o(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var ap;
function bp(){if(ap)return ap();var a={};ap=Tn("LogsDatabaseV2",{Db:(a.LogsRequestsStore={Ib:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Zm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),fn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return ap()}
;function cp(a){return sn(bp(),a)}
function dp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(cp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(an(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();ep(c);return g.return(f)})}
function fp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(cp(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Ym(d,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(n){return ln(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===
a&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=T();ep(c);return l.return(k)})}
function gp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(cp(b),2);c=d.i;return d.return(Ym(c,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Um(f.h.put(g,void 0)).then(function(){return g})})}))})}
function hp(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(cp(b),2);e=f.i;return f.return(Ym(e,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Um(h.h.put(k,void 0)).then(function(){return k})):Om.resolve(void 0)})}))})}
function ip(a,b){var c;return A(function(d){if(1==d.h)return d.yield(cp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function jp(a){var b,c;return A(function(d){if(1==d.h)return d.yield(cp(a),2);b=d.i;c=T()-2592E6;return d.yield(Ym(b,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){return hn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function kp(){A(function(a){return a.yield(Pn(),0)})}
function ep(a){S("nwl_csi_killswitch")||yo("networkless_performance",a,{sampleRate:1})}
;var lp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481};var mp={},np=Tn("ServiceWorkerLogsDatabase",{Db:(mp.SWHealthLog={Ib:1},mp),nc:!0,upgrade:function(a,b){b(1)&&fn(Zm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function op(a){return sn(np(),a)}
function pp(a){var b,c;A(function(d){if(1==d.h)return d.yield(op(a),2);b=d.i;c=T()-2592E6;return d.yield(Ym(b,["SWHealthLog"],{mode:"readwrite",fa:!0},function(e){return hn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function qp(a){var b;return A(function(c){if(1==c.h)return c.yield(op(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var rp={},sp=0;function tp(a){var b=new Image,c=""+sp++;rp[c]=b;b.onload=b.onerror=function(){delete rp[c]};
b.src=a}
;function up(){this.h=new Map;this.i=!1}
function vp(){if(!up.h){var a=E("yt.networkRequestMonitor.instance")||new up;D("yt.networkRequestMonitor.instance",a);up.h=a}return up.h}
up.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
up.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
up.prototype.removeParams=function(a){return a.split("?")[0]};
up.prototype.removeParams=up.prototype.removeParams;up.prototype.isEndpointCFR=up.prototype.isEndpointCFR;up.prototype.requestComplete=up.prototype.requestComplete;up.getInstance=vp;var wp;function xp(){wp||(wp=new im("yt.offline"));return wp}
function yp(a){if(S("offline_error_handling")){var b=xp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);xp().set("errors",b,2592E3,!0)}}
;function zp(){vd.call(this);var a=this;this.l=!1;this.j=ci();this.j.listen("networkstatus-online",function(){if(a.l&&S("offline_error_handling")){var b=xp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new $l(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ik(d)}xp().set("errors",{},2592E3,!0)}}})}
w(zp,vd);function Ap(){if(!zp.h){var a=E("yt.networkStatusManager.instance")||new zp;D("yt.networkStatusManager.instance",a);zp.h=a}return zp.h}
m=zp.prototype;m.ra=function(){return this.j.ra()};
m.gb=function(a){this.j.j=a};
m.le=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.be=function(){this.l=!0};
m.listen=function(a,b){return this.j.listen(a,b)};
m.mc=function(a){a=ai(this.j,a);a.then(function(b){S("use_cfr_monitor")&&vp().requestComplete("generate_204",b)});
return a};
zp.prototype.sendNetworkCheckRequest=zp.prototype.mc;zp.prototype.listen=zp.prototype.listen;zp.prototype.enableErrorFlushing=zp.prototype.be;zp.prototype.getWindowStatus=zp.prototype.le;zp.prototype.networkStatusHint=zp.prototype.gb;zp.prototype.isNetworkAvailable=zp.prototype.ra;zp.getInstance=Ap;function Bp(a){a=void 0===a?{}:a;vd.call(this);var b=this;this.j=this.s=0;this.l=Ap();var c=E("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.lc?(this.lc=a.lc,c("networkstatus-online",function(){Cp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Cp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){wd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){wd(b,"publicytnetworkstatus-offline")})))}
w(Bp,vd);Bp.prototype.ra=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Bp.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Bp.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return S("skip_network_check_if_cfr")&&vp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ra())})):c?d.return(c(a)):d.return(!0)})};
function Cp(a,b){a.lc?a.j?(di.za(a.s),a.s=di.ka(function(){a.m!==b&&(wd(a,b),a.m=b,a.j=T())},a.lc-(T()-a.j))):(wd(a,b),a.m=b,a.j=T()):wd(a,b)}
;var Dp;function Ep(){var a=Ro.call;Dp||(Dp=new Bp({Rf:!0,Kf:!0}));a.call(Ro,this,{Z:{Xd:jp,qb:ip,ld:fp,we:gp,Oc:hp,set:dp},Y:Dp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Jk(new $l(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Ik(b)},
ub:Jk,Pa:Fp,now:T,Md:yp,Ca:hm(),Kc:"publicytnetworkstatus-online",Jc:"publicytnetworkstatus-offline",Yb:!0,Wb:.1,jc:Xk("potential_esf_error_limit",10),S:S,Mb:!(am()&&Gp())});this.j=new xh;S("networkless_immediately_drop_all_requests")&&kp();Qn("LogsDatabaseV2")}
w(Ep,Ro);function Hp(){var a=E("yt.networklessRequestController.instance");a||(a=new Ep,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&Fn().then(function(b){a.R=b;To(a);a.j.resolve();a.Yb&&Math.random()<=a.Wb&&a.R&&pp(a.R);S("networkless_immediately_drop_sw_health_store")&&Ip(a)}));
return a}
Ep.prototype.writeThenSend=function(a,b){b||(b={});am()||(this.h=!1);Ro.prototype.writeThenSend.call(this,a,b)};
Ep.prototype.sendThenWrite=function(a,b,c){b||(b={});am()||(this.h=!1);Ro.prototype.sendThenWrite.call(this,a,b,c)};
Ep.prototype.sendAndWrite=function(a,b){b||(b={});am()||(this.h=!1);Ro.prototype.sendAndWrite.call(this,a,b)};
Ep.prototype.awaitInitialization=function(){return this.j.promise};
function Ip(a){var b;A(function(c){if(!a.R)throw b=Km("clearSWHealthLogsDb"),b;return c.return(qp(a.R).catch(function(d){a.handleError(d)}))})}
function Fp(a,b,c){b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Jp(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)ll(a,void 0,"POST",e);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ll(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new Ya({url:a});if(h.j&&h.i||h.l){var k=bc(cc(5,a)),l;if(!(l=!k||!k.endsWith("/aclk"))){var n=a.search(pc),r=oc(a,0,"ri",n);if(0>r)var t=null;else{var p=a.indexOf("&",r);if(0>p||p>n)p=n;t=decodeURIComponent(a.slice(r+3,-1!==p?p:0).replace(/\+/g," "))}l="1"!==t}var x=!l;break b}}catch(y){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(y){}z=!1}c=z?!0:!1}else c=!1;c||tp(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Go(a,b.postBody,b,il)):Go(a,JSON.stringify(b.postParams),b,ql):il(a,b)}
function Jp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){vp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){vp().requestComplete(a,!0);d(e,f)}}
function Gp(){return"www.youtube-nocookie.com"!==dc(document.location.toString())}
;var Kp=!1,Lp=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Kp};D("ytNetworklessLoggingInitializationOptions",Lp);function Mp(){var a;A(function(b){if(1==b.h)return b.yield(Fn(),2);a=b.i;if(!a||!am()&&!S("nwl_init_require_datasync_id_killswitch")||!Gp())return b.v(0);Kp=!0;Lp.isNwlInitialized=Kp;return b.yield(Hp().awaitInitialization(),0)})}
;function Np(a){var b=this;this.config_=null;a?this.config_=a:ho()&&(this.config_=io());dm(function(){Po(b)},5E3)}
Np.prototype.isReady=function(){!this.config_&&ho()&&(this.config_=io());return!!this.config_};
function Qo(a,b,c,d){function e(x){x=void 0===x?!1:x;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=No(b,c,l,k)),z)){var y=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(L,M){Oo(z);y(L,M)};
c.onFetchSuccess=function(L,M){Oo(z);H(L,M)}}try{if(x&&d.retry&&!d.rd.bypassNetworkless)g.method="POST",d.rd.writeThenSend?Hp().writeThenSend(p,g):Hp().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Go(p,I,g,il)}else Go(p,JSON.stringify(g.postParams),g,ql);else S("web_all_payloads_via_jspb")?il(p,g):ql(p,g)}catch(L){if("InvalidAccessError"==L.name)z&&(Oo(z),z=0),Jk(Error("An extension is blocking network request."));else throw L;}z&&dm(function(){Po(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Jk(new $l("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new $l("innertube xhrclient not ready",b,c,d);Ik(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,z){if(d.onError)d.onError(z)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.te||!1,l=ko(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},t=a.config_.se&&f;t=t&&f.startsWith("Bearer");t||(r.key=a.config_.innertubeApiKey);var p=Sk(""+h+n,r||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Lp.isNwlInitialized:Kp)?Dn().then(function(x){e(x)}):e(!1)}
;var Op=0,Pp=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Op});var Qp={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Rp(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Qp||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Sp(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Rp.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Rp.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Rp.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",kb);var Tp=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Tp);
function Up(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Vp=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Wp(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Up(a,b,c,d);if(e)return e;e=++Tp.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Rp(h);if(!Fd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Rp(h);
h.currentTarget=a;return c.call(a,h)};
g=Hk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Vp()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
function Xp(a){a&&("string"==typeof a&&(a=[a]),bb(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Vp()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
;function Yp(a){this.P=a;this.i=null;this.m=0;this.A=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.X=Wp(window,"mousemove",Ta(this.aa,this));a=Ta(this.W,this);"function"===typeof a&&(a=Hk(a));this.da=window.setInterval(a,25)}
Va(Yp,G);Yp.prototype.aa=function(a){void 0===a.h&&Sp(a);var b=a.h;void 0===a.i&&Sp(a);this.i=new Bd(b,a.i)};
Yp.prototype.W=function(){if(this.i){var a=T();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.P();this.s=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Yp.prototype.M=function(){window.clearInterval(this.da);Xp(this.X)};var Zp=new Set([174,173,175]),$p={};
function aq(a){var b=void 0===a?{}:a;a=void 0===b.De?!1:b.De;b=void 0===b.ce?!0:b.ce;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&bq();Wp(document,"keydown",bq);Wp(document,"keyup",bq);Wp(document,"mousedown",bq);Wp(document,"mouseup",bq);a?Wp(window,"touchmove",function(){cq("touchmove",200)},{passive:!0}):(Wp(window,"resize",function(){cq("resize",200)}),b&&Wp(window,"scroll",function(){cq("scroll",
200)}));
new Yp(function(){cq("mouse",100)});
Wp(document,"touchstart",bq,{passive:!0});Wp(document,"touchend",bq,{passive:!0})}}
function cq(a,b){$p[a]||($p[a]=!0,di.ka(function(){bq();$p[a]=!1},b))}
function bq(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Zp.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&aq(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function dq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var eq=C.ytPubsubPubsubInstance||new N,fq=C.ytPubsubPubsubSubscribedKeys||{},gq=C.ytPubsubPubsubTopicToKeys||{},hq=C.ytPubsubPubsubIsSynchronous||{};function iq(a,b){var c=jq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){fq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{hq[a]?f():bl(f,0)}catch(g){Ik(g)}},void 0);
fq[d]=!0;gq[a]||(gq[a]=[]);gq[a].push(d);return d}return 0}
function kq(a){var b=jq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),bb(a,function(c){b.unsubscribeByKey(c);delete fq[c]}))}
function lq(a,b){var c=jq();c&&c.publish.apply(c,arguments)}
function mq(a){var b=jq();if(b)if(b.clear(a),a)nq(a);else for(var c in gq)nq(c)}
function jq(){return C.ytPubsubPubsubInstance}
function nq(a){gq[a]&&(a=gq[a],bb(a,function(b){fq[b]&&delete fq[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Gb;N.prototype.publish=N.prototype.Za;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",eq);D("ytPubsubPubsubTopicToKeys",gq);D("ytPubsubPubsubIsSynchronous",hq);D("ytPubsubPubsubSubscribedKeys",fq);var oq=Symbol("injectionDeps");function sq(a){this.name=a}
sq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function tq(a){this.key=a}
function uq(){this.h=new Map;this.i=new Map}
uq.prototype.resolve=function(a){return a instanceof tq?vq(this,a.key,[],!0):vq(this,a,[])};
function vq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Jd)var e=d.Jd;else if(d.cf)e=d[oq]?wq(a,d[oq],c):[],e=d.cf.apply(d,ia(e));else if(d.Id){e=d.Id;var f=e[oq]?wq(a,e[oq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Zf||a.i.set(b,e);return e}
function wq(a,b,c){return b?b.map(function(d){return d instanceof tq?vq(a,d.key,c,!0):vq(a,d,c)}):[]}
;var xq;function yq(){xq||(xq=new uq);return xq}
;var zq=window;function Aq(){var a,b;return"h5vcc"in zq&&(null==(a=zq.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=zq.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in zq&&zq.performance.mark&&zq.performance.measure?2:0}
function Bq(a){switch(Aq()){case 1:zq.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:zq.performance.mark(a+"-start");break;case 0:break;default:Ih()}}
function Cq(a){switch(Aq()){case 1:zq.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";zq.performance.mark(c);zq.performance.measure(a,b,c);break;case 0:break;default:Ih()}}
;var Dq=S("web_enable_lifecycle_monitoring")&&0!==Aq(),Eq=S("web_enable_lifecycle_monitoring");function Fq(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?hm():d;this.j=c;this.scheduler=d;this.i=new xh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={Ob:a.Ob,cb:a.cb},a.cb++)a.Ob=this.h[a.cb],c=function(e){return function(){e.Ob.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.Ob),d=em(c,d),this.h[a.cb]=Object.assign({},a.Ob,{Ec:c,
jobId:d})}
function Gq(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.za(c.jobId),em(c.Ec,10))}
Fq.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.za(b.jobId),b.kc=!0;this.i.resolve()};
Fq.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Hq(a){this.state=a;this.plugins=[];this.l=void 0;this.U={};Dq&&Bq(this.state)}
m=Hq.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Dq&&Cq(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Gq(this.j),this.j=void 0);Iq(this,a,b);this.state=a;Dq&&Bq(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Jq(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Jq(a,b){var c=b.filter(function(e){return 10===Kq(a,e)}),d=b.filter(function(e){return 10!==Kq(a,e)});
return a.U.Yf?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ie.apply(a,[c].concat(ia(e))),2);a.Dd.apply(a,[d].concat(ia(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Je.apply(a,[c].concat(ia(e)));a.Dd.apply(a,[d].concat(ia(e)))}}
m.Je=function(a){var b=B.apply(1,arguments);hm();for(var c=v(a),d=c.next(),e={};!d.done;e={zb:e.zb},d=c.next())e.zb=d.value,fm(function(f){return function(){Lq(f.zb.name);f.zb.callback.apply(f.zb,ia(b));Mq(f.zb.name)}}(e))};
m.Ie=function(a){var b=B.apply(1,arguments),c,d,e,f;return A(function(g){1==g.h&&(hm(),c=v(a),d=c.next(),e={});if(3!=g.h){if(d.done)return g.v(0);e.eb=d.value;e.Jb=void 0;f=function(h){return function(){Lq(h.eb.name);var k=h.eb.callback.apply(h.eb,ia(b));"function"===typeof(null==k?void 0:k.then)?h.Jb=k.then(function(){Mq(h.eb.name)}):Mq(h.eb.name)}}(e);
fm(f);return e.Jb?g.yield(e.Jb,3):g.v(3)}e={eb:e.eb,Jb:e.Jb};d=c.next();return g.v(2)})};
m.Dd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Lq(e.name);e.callback.apply(e,ia(b));Mq(e.name)},
priority:Kq(c,e)}});
d.length&&(this.j=new Fq(d))};
function Kq(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Lq(a){Dq&&a&&Bq(a)}
function Mq(a){Dq&&a&&Cq(a)}
function Iq(a,b,c){Eq&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Hq.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Nq(a){Hq.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Oq;w(Nq,Hq);Nq.prototype.i=function(a,b){var c=this;this.h=dm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Nq.prototype.m=function(a,b){this.h&&(di.za(this.h),this.h=null);a(null==b?void 0:b.event)};
function Pq(){Oq||(Oq=new Nq);return Oq}
;function Qq(){this.store={};this.h={}}
Qq.prototype.storePayload=function(a,b){a=Rq(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Qq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Sq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
Qq.prototype.extractMatchingEntries=function(a){a=Sq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
Qq.prototype.getSequenceCount=function(a){a=Sq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Sq(a,b){var c=Rq(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Rq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Tq(b.auth,g[0])){var h=b.isJspb;Tq(void 0===h?"undefined":h?"true":"false",g[1])&&Tq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Tq(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Tq(a,b){return void 0===a||"undefined"===a?!0:a===b}
Qq.prototype.getSequenceCount=Qq.prototype.getSequenceCount;Qq.prototype.extractMatchingEntries=Qq.prototype.extractMatchingEntries;Qq.prototype.smartExtractMatchingEntries=Qq.prototype.smartExtractMatchingEntries;Qq.prototype.storePayload=Qq.prototype.storePayload;function Rq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function U(a,b){if(a)return a[b.name]}
;var Uq=Xk("initial_gel_batch_timeout",2E3),Vq=Xk("gel_queue_timeout_max_ms",6E4),Wq=Math.pow(2,16)-1,Xq=Xk("gel_min_batch_size",5),Yq=void 0;function Zq(){this.l=this.h=this.i=0;this.j=!1}
var $q=new Zq,ar=new Zq,br=new Zq,cr=new Zq,dr,er=!0,fr=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",fr);var gr={};function hr(){var a=E("yt.logging.ims");a||(a=new Qq,D("yt.logging.ims",a));return a}
function ir(a,b){if("log_event"===a.endpoint){var c=jr(a),d=kr(a.payload)||"";a:if(S("enable_web_tiered_gel")){var e=lp[d||""];var f,g,h,k=null==yq().resolve(new tq(bo))?void 0:null==(f=co())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=lr(k[f].tier);break a}e=200}else e=void 0;400===e?mr(a,b):(gr[c]=!0,e={cttAuthInfo:c,isJspb:!1,tier:e},hr().storePayload(e,a.payload),nr(b,c,e,"gelDebuggingEvent"===
d))}}
function nr(a,b,c,d){function e(){or({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Yq=new a);a=Xk("tvhtml5_logging_max_batch_ads_fork")||Xk("web_logging_max_batch")||100;var g=T(),h=pr(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=hr().getSequenceCount(c));1E3<=d?e():d>=a?dr||(dr=qr(function(){e();dr=void 0},0)):10<=g-k&&(rr(f,c.tier),h.l=g)}
function mr(a,b){if("log_event"===a.endpoint){var c=jr(a),d=new Map;d.set(c,[a.payload]);var e=kr(a.payload)||"";b&&(Yq=new b);return new Sd(function(f,g){Yq&&Yq.isReady()?sr(d,Yq,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function jr(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);fr[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function or(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Sd(function(e,f){var g=pr(c,d),h=g.j;g.j=!1;tr(g.i);tr(g.h);g.h=0;Yq&&Yq.isReady()?void 0===d&&S("enable_web_tiered_gel")?ur(e,f,a,b,c,300,h):ur(e,f,a,b,c,d,h):(rr(c,d),e())})}
function ur(a,b,c,d,e,f,g){var h=Yq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?hr().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):hr().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(gr)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?hr().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):hr().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete gr[l];sr(k,h,a,b,c,!1,g)}
function rr(a,b){function c(){or({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=pr(a,b),e=d===cr||d===br?5E3:Vq;S("web_gel_timeout_cap")&&!d.h&&(e=qr(function(){c()},e),d.h=e);
tr(d.i);e=R("LOGGING_BATCH_TIMEOUT",Xk("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&er&&(e=Uq);e=qr(function(){0<Xk("gel_min_batch_size")?hr().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Xq&&c():c()},e);
d.i=e}
function sr(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(T()),k=a.size,l=(void 0===g?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={ec:g.ec,ab:g.ab,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,hc:g.hc,fc:g.fc},n=a.next()){var r=v(n.value);n=r.next().value;r=r.next().value;g.ab=qb({context:jo(b.config_||io())});if(!Ma(r)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.ab.events=r;(r=fr[n])&&vr(g.ab,n,r);
delete fr[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;wr(g.ab,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.hc=function(t){S("start_client_gcf")&&di.ka(function(){return A(function(p){return p.yield(xr(t),0)})});
k--;k||c()};
g.ec=0;g.fc=function(t){return function(){t.ec++;if(e.bypassNetworkless&&1===t.ec)try{Qo(b,l,t.ab,yr({writeThenSend:!0},t.dangerousLogToVisitorSession,t.hc,t.fc,f)),er=!1}catch(p){Ik(p),d()}k--;k||c()}}(g);
try{Qo(b,l,g.ab,yr(e,g.dangerousLogToVisitorSession,g.hc,g.fc,f)),er=!1}catch(t){Ik(t),d()}}}
function yr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,rd:a,dangerousLogToVisitorSession:b,Hf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};zr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function wr(a,b,c){zr()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Wq/2)),c++,c>Wq&&(c=1),Dk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function vr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function zr(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function qr(a,b){return S("transport_use_scheduler")?S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?dm(function(){if("none"===Pq().currentState)a();else{var c={};Pq().install((c.none={callback:a},c))}},b):dm(a,b):bl(a,b)}
function tr(a){S("transport_use_scheduler")?di.za(a):window.clearTimeout(a)}
function xr(a){var b,c,d,e,f,g,h,k,l,n;return A(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=U(d,gk),g=null==(f=d)?void 0:f.hotHashData,h=U(d,fk),l=null==(k=d)?void 0:k.coldHashData,(n=yq().resolve(new tq(bo)))?g?e?r.yield(eo(n,g,e),2):r.yield(eo(n,g),2):r.v(2):r.return()):l?h?r.yield(fo(n,l,h),0):r.yield(fo(n,l),0):r.v(0)})}
function pr(a,b){b=void 0===b?200:b;return a?300===b?cr:ar:300===b?br:$q}
function kr(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,lp[b])return b}
function lr(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ar=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ar);
function Br(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=dq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ar[b]=b in Ar?Ar[b]+1:0,a.sequence={index:Ar[b],groupKey:b},d.endOfSequence&&delete Ar[d.sequenceGroup]);(d.sendIsolatedPayload?mr:ir)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function rm(a,b,c){c=void 0===c?{}:c;var d=Np;R("ytLoggingEventsDefaultDisabled",!1)&&Np===Np&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=dq(),c.timestamp=T());Br(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Cr=new Set,Dr=0,Er=0,Fr=0,Gr=[],Hr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qm(a){Ir(a)}
function Jr(a){Ir(a,"WARNING")}
function Kr(a){a instanceof Error?Ir(a):(a=Na(a)?JSON.stringify(a):String(a),a=new $l(a),a.name="RejectedPromiseError",Jr(a))}
function Ir(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Dr))){d=Gr;var k=Bc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var r=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(r=Al(a.args[t],"params."+t,c,r),
500<=r);t++);else if(a.hasOwnProperty("params")&&a.params){var p=a.params;if("object"===typeof a.params)for(t in p){if(p[t]){var x="params."+t,z=Cl(p[t]);c[x]=z;r+=x.length+z.length;if(500<r)break}}else c.params=Cl(p)}if(d.length)for(t=0;t<d.length&&!(r=Al(d[t],"params.context."+t,c,r),500<=r);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=wl();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Sf)){a=d.weight;break a}a=v(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(rl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ic[t.name])for(e=v(c.ic[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Hc(f);break}t.params||(t.params={});a=wl();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==vb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Cr.has(t.message)){if(g&&S("web_enable_error_204"))Lr(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(xl.Za("handleError",t),S("record_app_crashed_web")&&0===Fr&&1===t.sampleWeight&&(Fr++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),rm("appCrashed",g)),Er++):"WARNING"===b&&xl.Za("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Hr);for(c=a.next();!c.done;c=a.next())if(ym(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Ek("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(rm("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&or(void 0,void 0,!1))}S("suppress_error_204_logging")||Lr(b,t)}try{Cr.add(t.message)}catch(y){}Dr++}}}
function Lr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}il(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Mr(){this.register=new Map}
function Nr(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Uf("ABORTED")}
Mr.prototype.clear=function(){Nr(this);this.register.clear()};
var Or=new Mr;var Pr=Date.now().toString();
function Qr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Pr)for(a=1,b=0;b<Pr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Pr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Rr,Sr=C.ytLoggingDocDocumentNonce_;Sr||(Sr=Qr(),D("ytLoggingDocDocumentNonce_",Sr));Rr=Sr;function Tr(a){this.h=a}
m=Tr.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new pk;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Ue(b,Re):Se||(Se=new Ue(null,Re));else if(b.constructor!==Ue)if(Qe(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Ue(new Uint8Array(b),Re):Se||(Se=new Ue(null,Re));else throw Error();J(a,1,b)}else void 0!==this.h.veType&&J(a,2,qf(this.h.veType)),void 0!==this.h.veCounter&&J(a,6,qf(this.h.veCounter)),void 0!==this.h.elementIndex&&J(a,3,qf(this.h.elementIndex)),
this.h.isCounterfactual&&J(a,5,pf(!0));void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),Sf(a,pk,7,b));void 0!==this.h.youtubeData&&Sf(a,ik,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Ur(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function Vr(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Dk("client-screen-nonce-store",c));c[b]=a}
function Wr(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Xr(a){return R(Wr(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Xr);function Yr(){var a=R("csn-to-ctt-auth-info");a||(a={},Dk("csn-to-ctt-auth-info",a));return a}
function Zr(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function $r(a){a=Ur(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",$r);function as(a,b,c){var d=Yr();(c=$r(c))&&delete d[c];b&&(d[a]=b)}
function bs(a){return Yr()[a]}
D("yt_logging_screen.getCttAuthInfo",bs);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Ur(c)||b!==R(Wr(c)))if(as(a,d,c),Vr(a,c),Dk(Wr(c),b),b=function(){setTimeout(function(){a&&rm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Rr,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var cs=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",cs);function ds(a){yk(cs,arguments)}
;function es(){var a=pb(gs),b;return(new Sd(function(c,d){a.onSuccess=function(e){al(e)?c(new hs(e)):d(new is("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new is("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new is("Request timed out","net.timeout",e))};
b=il("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){c instanceof ce&&b.abort();
return Yd(c)})}
function is(a,b,c){Xa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(is,Xa);function hs(a){this.xhr=a}
;function js(){this.h=0;this.value_=null}
js.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:ks(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:ls(a):this};
js.prototype.getValue=function(){return this.value_};
js.prototype.isRejected=function(){return 2==this.h};
js.prototype.$goog_Thenable=!0;function ls(a){var b=new js;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function ks(a){var b=new js;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function ms(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Tk(a)?"same-origin":"cors",credentials:Tk(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function ns(){return qg()||(Be||Ce)&&ym("applewebkit")&&!ym("version")&&(!ym("safari")||ym("gsa/"))||Pc&&ym("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function ps(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in nk)if(nk[d]==c.embeddedPlayerMode){b=nk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function qs(a){Xa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof rs;this.isTimeout=a instanceof is&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ce}
w(qs,Xa);qs.prototype.name="BiscottiError";function rs(){Xa.call(this,"Biscotti ID is missing from server")}
w(rs,Xa);rs.prototype.name="BiscottiMissingError";var gs={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ss=null;function ts(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!ns())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==nb(a))return Error("Biscotti ID is not available in private embed mode");if(ps(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function wk(){var a=ts();if(void 0!==a)return Yd(a);ss||(ss=es().then(us).oc(function(b){return vs(2,b)}));
return ss}
function us(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new rs;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new rs;a=a.id;xk(a);ss=ks(a);ws(18E5,2);return a}
function vs(a,b){b=new qs(b);xk("");ss=ls(b);0<a&&ws(12E4,a-1);throw b;}
function ws(a,b){bl(function(){es().then(us,function(c){return vs(b,c)}).oc(Za)},a)}
function xs(){try{var a=E("yt.ads.biscotti.getId_");return a?a():wk()}catch(b){return Yd(b)}}
;function ys(a){if("1"!=nb(R("PLAYER_VARS",{}))){a&&vk();try{xs().then(function(){},function(){}),bl(ys,18E5)}catch(b){Ik(b)}}}
;function zs(){var a=Ql(),b=Tl(119),c=1<window.devicePixelRatio;if(document.body&&ni(document.body,"exp-invert-logo"))if(c&&!ni(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ni(d,"inverted-hdpi")){var e=li(d);mi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ni(document.body,"inverted-hdpi")&&oi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Ul(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Nl[b]:(c=d.toString(16),Nl[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Nl)Nl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Nl[f])));var f=d.join("&");Jl(b,f,63072E3,a.i,c)}}
;var As=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Bs(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;bc(cc(5,a));try{var b=Rk(a).theme;return As.get(b)||null}catch(c){}return null}
;function Cs(){this.h={};if(this.i=Ml()){var a=Kl("CONSISTENCY");a&&Ds(this,{encryptedTokenJarContents:a})}}
Cs.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Ma.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Ds(this,a)}};
function Ds(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Jl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Es=window.location.hostname.split(".").slice(-2).join(".");function Fs(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=Gs(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Hs;function Is(){Hs=E("yt.clientLocationService.instance");Hs||(Hs=new Fs,D("yt.clientLocationService.instance",Hs));return Hs}
m=Fs.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=Gs(this))&&this.h.set("yt-location-playability-token",a,15552E3):Jl("YT_CL",JSON.stringify({loctok:a}),15552E3,Es,!0))};
function Gs(a){return void 0===a.h?new im("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Gs(this))&&this.h.remove("yt-location-playability-token"):Ll("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Js(a,b){if(!a)return!1;var c,d=null==(c=U(a,mk))?void 0:c.signal;if(d&&b.kb)return!!b.kb[d];var e;if((c=null==(e=U(a,jk))?void 0:e.request)&&b.uc)return!!b.uc[c];for(var f in a)if(b.sc[f])return!0;return!1}
function Ks(a,b){var c,d=null==(c=U(a,mk))?void 0:c.signal;if(d&&b.kb&&(c=b.kb[d]))return c();var e;if((c=null==(e=U(a,jk))?void 0:e.request)&&b.uc&&(e=b.uc[c]))return e();for(var f in a)if(b.sc[f]&&(a=b.sc[f]))return a()}
;function Ls(a){return function(){return new a}}
;var Ms={},Ns=(Ms.WEB_UNPLUGGED="^unplugged/",Ms.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Ms.WEB_UNPLUGGED_OPS="^unplugged/",Ms.WEB_UNPLUGGED_PUBLIC="^unplugged/",Ms.WEB_CREATOR="^creator/",Ms.WEB_KIDS="^kids/",Ms.WEB_EXPERIMENTS="^experiments/",Ms.WEB_MUSIC="^music/",Ms.WEB_REMIX="^music/",Ms.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Ms.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Ms);
function Os(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Ns[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Ns).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Ps(){}
Ps.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Gl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=qb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Ql();var l="USER_INTERFACE_THEME_LIGHT";Tl(165)?l="USER_INTERFACE_THEME_DARK":Tl(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:Bs()||l;h.userInterfaceTheme=k;if(!f){if(k=Yl())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=Zl())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var r;n=null==(r=C.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}S("web_gcf_hashes_innertube")&&(k=go())&&(r=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=r,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);r=Rk(C.location.href);!S("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Hl.h&&(r=Hl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Il(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(r=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=Yk();Cs.h||(Cs.h=new Cs);h=Cs.h.h;r=[];n=0;for(var p in h)r[n++]=h[p];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:r});!S("web_prequest_context_killswitch")&&(p=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=p);t=Ql();p=Tl(58);t=t.get("gsml","");g.user=Object.assign({},g.user);p&&(g.user.enableSafetyMode=p);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=$r())&&(g.clientScreenNonce=f):
!f&&(f=$r())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Is().setLocationOnInnerTubeContext(g);try{var x=Uk(),z=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:z};var y=v(Object.entries(x));for(var H=y.next();!H.done;H=y.next()){var I=v(H.value),L=I.next().value,M=I.next().value;x=L;z=M;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+z})}}catch(V){Ir(V)}y=g}else Ir(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
y={};y={context:y};if(H=this.h(a)){this.i(y,H,b);var K;b="/youtubei/v1/"+Os(this.j());(H=null==(K=U(a.commandMetadata,lk))?void 0:K.apiUrl)&&(b=H);K=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(K=String(b)+String(ec(K)));b={};b.key=R("INNERTUBE_API_KEY");S("json_condensed_response")&&(b.prettyPrint="false");K=Sk(K,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:K,ib:ms(K),Ma:y,config:a};a.config.Sb?a.config.Sb.identity=c:a.config.Sb={identity:c};return a}Ir(new $l("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(Ps.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Qs(){}
w(Qs,Ps);Qs.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:ms("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
Qs.prototype.j=function(){return[]};
Qs.prototype.h=function(){};
Qs.prototype.i=function(){};var Rs={},Ss=(Rs.GET_DATASYNC_IDS=Ls(Qs),Rs);function Ts(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=dc(window.location.href);e&&d.push(e);e=dc(a);if(0<=ab(d,e)||!e&&0==a.lastIndexOf("/",0)){d=document.createElement("a");if(a instanceof Fb)var f=a;else if(a instanceof Fb)f=a;else{a="object"==typeof a&&a.i?a.h():String(a);b:if(e=a,Ib){try{f=new URL(e)}catch(h){f="https:";break b}f=f.protocol}else c:{f=document.createElement("a");try{f.href=e}catch(h){f=void 0;break c}f=f.protocol;f=":"===f||""===f?"https:":f}"javascript:"!==
f||(a="about:invalid#zClosurez");f=new Fb(a,Jb)}d.href=Gb(f);if(a=d.href)if(d=ec(a),d=fc(d))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:$r()},b)),g){var g=parseInt(g,10);isFinite(g)&&0<g&&Us(d,b,g)}else Us(d,b)}}
function Us(a,b,c){a="ST-"+$b(a).toString(36);b=b?kc(b):"";c=c||5;ns()&&Jl(a,b,c)}
;function Vs(){try{return!!self.localStorage}catch(a){return!1}}
;function Ws(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Xs(a){if(Vs()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ws(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Ys(){if(!Vs())return!1;var a=bm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Ws(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Zs(){return S("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))}
function $s(a){if(qg()&&Zs()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=dc(window.location.href);c&&b.push(c);c=dc(a);0<=ab(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=ec(a),(b=fc(b))?(b="ST-"+$b(b).toString(36),b=(b=Kl(b)||null)?Qk(b):{}):b=null):b=null;null==b&&(b={});c=void 0;Zs()&&(c||(c=R("LOGIN_INFO")),c&&(b.session_logininfo=c));Ts(a,b)}}
;function at(a){var b=B.apply(1,arguments);if(!bt(a)||b.some(function(d){return!bt(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())ct(a,c.value);return a}
function ct(a,b){for(var c in b)if(bt(b[c])){if(c in a&&!bt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ct(a[c],b[c])}else if(dt(b[c])){if(c in a&&!dt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);et(a[c],b[c])}else a[c]=b[c];return a}
function et(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,bt(c)?a.push(ct({},c)):dt(c)?a.push(et([],c)):a.push(c);return a}
function bt(a){return"object"===typeof a&&!Array.isArray(a)}
function dt(a){return"object"===typeof a&&Array.isArray(a)}
;function ft(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function gt(){var a=ft();a.info||(a.info={});return a.info}
function ht(a){a=ft(a);a.metadata||(a.metadata={});return a.metadata}
function jt(a){a=ft(a);a.tick||(a.tick={});return a.tick}
function kt(a){a=ft(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function lt(a){a=kt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function mt(a){var b=ft(a).nonce;b||(b=Qr(),ft(a).nonce=b);return b}
;function nt(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function ot(a){a=a||"";var b=E("ytcsi.reference");b||(nt(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=nt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},pt=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",
W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]=
"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]=
"LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",
W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},qt=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop=
"creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",
X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",
X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",
X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),rt="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
st={},tt=(st.ccs="CANARY_STATE_",st.mver="MEASUREMENT_VERSION_",st.pis="PLAYER_INITIALIZED_STATE_",st.yt_pt="LATENCY_PLAYER_",st.pa="LATENCY_ACTION_",st.ctop="TOP_ENTITY_TYPE_",st.yt_vst="VIDEO_STREAM_TYPE_",st),ut="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function vt(a,b,c){c=kt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in qt){c=qt[a];0<=ab(rt,c)&&(b=!!b);a in tt&&"string"===typeof b&&(b=tt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return at({},d)}0<=ab(ut,a)||Jr(new $l("Unknown label logged with GEL CSI",a))}
;function wt(a,b){lo.call(this,1,arguments);this.timer=b}
w(wt,lo);var xt=new mo("aft-recorded",wt);var zt=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",zt);function At(){this.h=0}
function Bt(){At.h||(At.h=new At);return At.h}
At.prototype.tick=function(a,b,c,d){Ct(this,"tick_"+a+"_"+b)||rm("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
At.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Ct(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,rm("latencyActionInfo",a,{cttAuthInfo:c}))};
At.prototype.jspbInfo=function(){};
At.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Ct(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,rm("latencyActionSpan",a,{cttAuthInfo:c}))};
function Ct(a,b){zt[b]=zt[b]||{count:0};var c=zt[b];c.count++;c.time=T();a.h||(a.h=dm(function(){var d=T(),e;for(e in zt)zt[e]&&6E4<d-zt[e].time&&delete zt[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new $l("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Jr(c)),!0):!1}
;var Dt=window;function Et(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Ft(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Gt(e.requestStart),e.responseEnd=Gt(e.responseEnd),e.redirectStart=Gt(e.redirectStart),e.redirectEnd=Gt(e.redirectEnd),e.domainLookupEnd=Gt(e.domainLookupEnd),e.connectStart=Gt(e.connectStart),e.connectEnd=
Gt(e.connectEnd),e.responseStart=Gt(e.responseStart),e.secureConnectionStart=Gt(e.secureConnectionStart),e.domainLookupStart=Gt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function Gt(a){return Math.round(Ht()+a)}
function Ht(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Dt.performance||Dt.mozPerformance||Dt.msPerformance||Dt.webkitPerformance||new Et;var It=!1,Jt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ta(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Za,Y);function Kt(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;ht(c).loadType=d}(a=vt(a,b,c))&&Lt(a,c)}}
function Lt(a,b){var c=ot(b||"");at(c.info,a);a.loadType&&(c=a.loadType,ht(b).loadType=c);at(lt(b),a);c=mt(b);b=ft(b).cttAuthInfo;Bt().info(a,c,b)}
function Mt(a){var b,c,d,e,f=(null!=(e=null==yq().resolve(new tq(bo))?void 0:null==(b=co())?void 0:null==(c=b.loggingHotConfig)?void 0:null==(d=c.csiConfig)?void 0:d.debugTicks)?e:[]).map(function(g){return Object.values(g)[0]});
if(0<f.length)for(b=0;b<f.length;b++)if(a===f[b])return!0;return!1}
function Nt(a,b,c){var d=mt(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){var f,g,h;e=(null==yq().resolve(new tq(bo))?void 0:null==(f=co())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(0!==e&&Mt(a)){for(g=f=0;g<d.length;g++)f=(31*f+d.charCodeAt(g))%Number.MAX_SAFE_INTEGER;e=0!==f%1E5%e;ft(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Lt(f,c));ft(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(0==e.lastIndexOf("mark_",
0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=ot(c||"");e.tick[a]=b||T();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=kt(c);e.gelTicks&&(e.gelTicks[a]=!0);f=jt(c);e=b||T();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=ft(c).cttAuthInfo;"_start"===a?(a=Bt(),Ct(a,"baseline_"+d)||rm("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Bt().tick(a,d,b,f);Ot(c);return e}}
function Pt(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Pp+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Qt(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Yb()&&a.setAttribute("nonce",Yb());return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Ht(),Nt("rsf_"+b,c+Math.round(a.fetchStart)),Nt("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Rt(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=cb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=eb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Nt("wffs",Gt(b.startTime)),Nt("wffe",Gt(b.responseEnd)))}
function St(a){var b=Tt("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Tt(b[d],a);if(e)return e}return NaN}
function Tt(a,b){if(a=jt(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Ot(a){var b=Tt("_start",a),c=St(a);b&&c&&!It&&(ro(xt,new wt(Math.round(c-b),a)),It=!0)}
function Ut(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Ut(a[d],b[d]))return!1;return!0}
function Vt(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=fb(a,function(b){return"first-paint"===b.name}))return Gt(a.startTime)}a=Y.timing;
return a.Ae?Math.max(0,a.Ae):0}
;function Wt(a,b){Hk(function(){ot("").info.actionType=a;b&&Dk("TIMING_AFT_KEYS",b);Dk("TIMING_ACTION",a);var c=R("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&Kt(d,c[d]);c={isNavigation:!0,actionType:pt[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=pt[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=$r())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Pt();if(1===d||-1===d)c.isVisible=
!0;ht();gt();c.loadType="cold";d=gt();var e=Ft(),f=Ht(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Nt("srt",e.responseStart),1!==d.prerender&&Nt("_start",f,void 0));d=Vt();0<d&&Nt("fpt",d);d=Ft();d.isPerformanceNavigationTiming&&Lt({performanceNavigationTiming:!0});Nt("nreqs",d.requestStart,void 0);Nt("nress",d.responseStart,void 0);Nt("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Nt("nrs",d.redirectStart,void 0),Nt("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Nt("ndnss",d.domainLookupStart,void 0),Nt("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Nt("ntcps",d.connectStart,void 0),Nt("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Ht()&&0<d.connectEnd-d.secureConnectionStart&&(Nt("nstcps",d.secureConnectionStart,void 0),Nt("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Rt();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Jt)Jt.hasOwnProperty(h)&&
(e=Jt[h],Qt(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Lt(c);c=gt();h=lt();if("cold"===ht().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=jt();e=kt();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Nt(k,Tt(k));else if(S("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Nt(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=vt(f,c[f]))&&!Ut(lt(),f)&&(at(h,f),at(k,f),d=!0);d&&Lt(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Xt()&&St()&&Ot()})()}
function Yt(a,b,c,d){Hk(Kt)(a,b,c,d)}
function Zt(a,b,c){return Hk(Nt)(a,b,c)}
function Xt(){return Hk(function(){return"_start"in jt()})()}
function $t(){Hk(function(){var a=mt();requestAnimationFrame(function(){setTimeout(function(){a===mt()&&Zt("ol",void 0,void 0)},0)})})()}
var au=window;au.ytcsi&&(au.ytcsi.info=Yt,au.ytcsi.tick=Zt);var bu="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),cu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function du(a,b,c,d){this.j=a;this.Y=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.kb||(a.kb={});a.kb=Object.assign({},Ss,a.kb)}
function eu(a,b,c,d){if(void 0!==du.h){if(d=du.h,a=[a!==d.j,b!==d.Y,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new $l("InnerTubeTransportService is already initialized",a);
}else du.h=new du(a,b,c,d)}
function fu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Gl:c;var d=Ks(b,a.j);if(!d)return Yd(new $l("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?($s(e.input),new Sd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.m.We){var n=e.config,r;n=null==n?void 0:null==(r=n.Sb)?void 0:r.sessionIndex;r=Fl(0,{sessionIndex:n});k=Object.assign({},gu(h),r);return l.v(2)}return l.yield(hu(e.config,
h),3)}2!=l.h&&(k=l.i);f(iu(a,e,k));l.h=0})})):Yd(new $l("Error: Failed to build request for command.",b))}
function ju(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Wf)?0:d.ag)&&a.l){d=v(bu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function iu(a,b,c){var d,e,f,g,h,k,l,n,r,t,p,x,z,y,H,I,L,M,K,V,Z,ea,qa,na,Ha,Bg,pq,qq,rq;return A(function(ka){switch(ka.h){case 1:ka.v(2);break;case 3:if((d=ka.i)&&!d.isExpired())return ka.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Ma)?0:f.context)){ka.v(4);break}g=b.Ma.context;ka.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ka.v(4);break}l=k.value;return ka.yield(l.Tf(g),8);case 8:k=h.next();ka.v(7);break;case 4:if(null==(n=a.i)||!n.Xf(b.input,b.Ma)){ka.v(11);
break}return ka.yield(a.i.Qf(b.input,b.Ma),12);case 12:return r=ka.i,S("kevlar_process_local_innertube_responses_killswitch")||ju(a,r,b),ka.return(r);case 11:return(x=null==(p=b.config)?void 0:p.Oa)&&a.h.has(x)&&S("web_memoize_inflight_requests")?t=a.h.get(x):(z=JSON.stringify(b.Ma),I=null!=(H=null==(y=b.ib)?void 0:y.headers)?H:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},I,c)}),L=Object.assign({},b.ib),"POST"===b.ib.method&&(L=Object.assign({},L,{body:z})),(null==(M=b.config)?0:M.Ge)&&
Zt(b.config.Ge),K=function(){return a.Y.fetch(b.input,L,b.config)},t=K(),x&&a.h.set(x,t)),ka.yield(t,13);
case 13:if((V=ka.i)&&"error"in V&&(null==(Z=V)?0:null==(ea=Z.error)?0:ea.details))for(qa=V.error.details,na=v(qa),Ha=na.next();!Ha.done;Ha=na.next())Bg=Ha.value,(pq=Bg["@type"])&&-1<cu.indexOf(pq)&&(delete Bg["@type"],V=Bg);x&&a.h.has(x)&&a.h.delete(x);(null==(qq=b.config)?0:qq.He)&&Zt(b.config.He);if(V||null==(rq=a.i)||!rq.If(b.input,b.Ma)){ka.v(14);break}return ka.yield(a.i.Pf(b.input,b.Ma),15);case 15:V=ka.i;case 14:return ju(a,V,b),ka.return(V||void 0)}})}
function hu(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Sb)?void 0:d.sessionIndex;var h=g.yield;var k=Xd(Fl(0,{sessionIndex:e}));return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},gu(b),f)))})}
function gu(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var ku=new sq("INNERTUBE_TRANSPORT_TOKEN");var lu=["share/get_web_player_share_panel"],mu=["feedback"],nu=["notification/modify_channel_preference"],ou=["browse/edit_playlist"],pu=["subscription/subscribe"],qu=["subscription/unsubscribe"];function ru(){}
w(ru,Ps);ru.prototype.j=function(){return pu};
ru.prototype.h=function(a){return U(a,uk)||void 0};
ru.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(ru.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function su(){}
w(su,Ps);su.prototype.j=function(){return qu};
su.prototype.h=function(a){return U(a,tk)||void 0};
su.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(su.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function tu(){}
w(tu,Ps);tu.prototype.j=function(){return mu};
tu.prototype.h=function(a){return U(a,ok)||void 0};
tu.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(tu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function uu(){}
w(uu,Ps);uu.prototype.j=function(){return nu};
uu.prototype.h=function(a){return U(a,sk)||void 0};
uu.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function vu(){}
w(vu,Ps);vu.prototype.j=function(){return ou};
vu.prototype.h=function(a){return U(a,rk)||void 0};
vu.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function wu(){}
w(wu,Ps);wu.prototype.j=function(){return lu};
wu.prototype.h=function(a){return U(a,qk)};
wu.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var xu=new sq("NETWORK_SLI_TOKEN");function yu(a){this.h=a}
yu.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=bc(cc(5,rc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;S("wug_networking_gzip_request")&&(e=Jo(b));f=new window.Request(a,e);return S("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Jr(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Jr(h)}))})};
yu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Lf(),b=b.then(function(c){Jr(new $l("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
yu[oq]=[new tq(xu)];var zu=new sq("NETWORK_MANAGER_TOKEN");var Au;function Bu(){var a=Cu,b=Du,c=Eu;this.l=Fu;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function Gu(a,b,c){if(Hu(b))Iu(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.qc)d.qc=c.qc;0===d.type?a.navigate?Ju(d.command)?Ku(a,d.command)||(S("logging_avoid_blocking_during_navigation")&&Pq().transition("application_navigating"),b=a.navigate(d)||[],ae(b).then(function(){a.h.delete(d.command)})):Ir(Error("Error: Command handler page requests need to specify a url.")):Ir(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?Ku(a,d.command)||(b=a.i(d),ae(b).then(function(){a.h.delete(d.command)})):
Ir(Error("Error: Command handler handle service request function was called but not set.")):2===d.type&&(a.j?a.j(d):Ir(Error("Error: Command handler send action was called but not set.")))}}
function Ku(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function Hu(a){var b=!!U(a,hk),c;a="CLIENT_SIGNAL"===(null==(c=U(a,mk))?void 0:c.signal);return b||a}
function Iu(a,b,c){var d=U(b,hk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=U(b,mk))?void 0:f.signal)){var g;e=(null==(g=U(b,mk))?void 0:g.actions)||[]}}if(e)for(b=v(e),e=b.next();!e.done;e=b.next()){e=e.value;try{Gu(a,e,c)}catch(h){h instanceof Error&&Ir(h)}}else Ir(Error("Could not handle the meta command."))}
function Ju(a){var b;return!(null==(b=U(null==a?void 0:a.commandMetadata,lk))||!b.url)}
;function Lu(){var a,b,c;return A(function(d){if(1==d.h)return a=yq().resolve(ku),a?d.yield(fu(a),2):(Jr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Jr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Jf;return d.return(c)}Jr(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Mu=C.caches,Nu;function Ou(a){var b=a.indexOf(":");return-1===b?{ud:a}:{ud:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Pu(){return A(function(a){if(void 0!==Nu)return a.return(Nu);Nu=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(Mu.open("test-only"),4);case 4:return d.yield(Mu.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=za(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Nu)})}
function Qu(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Pu(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Mu.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Ou(f),h=g.datasyncId,!h||a.includes(h)||b.push(Mu.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Ru(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Pu(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=bm("cache contains other");return h.yield(Mu.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Ou(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Su(){Lu().then(function(a){a&&(Hn(a),Qu(a),Xs(a))})}
function Tu(){var a=new Bp;di.ka(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=bm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Hn(g);Qu(g);Xs(g);return f.return()}c=Ys();return f.yield(Ru(),3);case 3:return d=f.i,f.yield(In(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ra()?Su():a.i.add("publicytnetworkstatus-online",Su,!0,void 0,void 0),f.h=0}})})}
;var Hh=ha(["data-"]);function Uu(a){a&&(a.dataset?a.dataset[Vu("loaded")]="true":Gh(a))}
function Wu(a,b){return a?a.dataset?a.dataset[Vu(b)]:a.getAttribute("data-"+b):null}
var Xu={};function Vu(a){return Xu[a]||(Xu[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Yu=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Zu=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function $u(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Yu,""),c=c.replace(Zu,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else av(a,b,c)}
function av(a,b,c){c=void 0===c?null:c;var d=bv(a),e=document.getElementById(d),f=e&&Wu(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=iq(d,b),b=""+Oa(b),cv[b]=f),g||(e=dv(a,d,function(){if(!Wu(e,"loaded")){Uu(e);lq(d);var h=Ua(mq,d);bl(h,0)}},c)))}
function dv(a,b,c,d){d=void 0===d?null:d;var e=Ed("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Mh(e,dk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ev(a){a=bv(a);var b=document.getElementById(a);b&&(mq(a),b.parentNode.removeChild(b))}
function fv(a,b){a&&b&&(a=""+Oa(b),(a=cv[a])&&kq(a))}
function bv(a){var b=document.createElement("a");a=Ch(a);void 0!==a&&(b.href=a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(b)}
var cv={};var gv=[],hv=!1;function iv(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&ns()){var a=R("PLAYER_VARS",{});if("1"!=nb(a)&&!ps(a)){var b=function(){hv=!0;"google_ad_status"in window?Dk("DCLKSTAT",1):Dk("DCLKSTAT",2)};
try{$u("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}gv.push(di.ka(function(){if(!(hv||"google_ad_status"in window)){try{fv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}hv=!0;Dk("DCLKSTAT",3)}},5E3))}}}
function jv(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function kv(a){Hq.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ja},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.s},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.s},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(kv,Hq);kv.prototype.ja=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
kv.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
kv.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
kv.prototype.i=function(){this.h=new Map};function lv(a){Hq.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.s},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.s},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(lv,Hq);lv.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
lv.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
lv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
lv.prototype.s=function(a,b){a(null==b?void 0:b.event)};function mv(){this.l=new kv;this.m=new lv}
mv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function nv(a){lo.call(this,1,arguments);this.csn=a}
w(nv,lo);var uo=new mo("screen-created",nv),ov=[],pv=0,qv=new Map,rv=new Map,sv=new Map;
function tv(a,b,c,d,e){e=void 0===e?!1:e;for(var f=uv({cttAuthInfo:bs(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(lb(k)||!k.trackingParams&&!k.veType)&&Jr(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=vv(h,b);if(k.veType&&!rv.has(l)&&!sv.has(l)&&!e){qv.set(l,[a,b,c,h]);return}h=vv(c,b);qv.has(h)?wv(c,b):sv.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:db(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?xv("visualElementAttached",f,c):a?Br("visualElementAttached",c,a,f):rm("visualElementAttached",c,f)}
function xv(a,b,c){ov.push({payloadName:a,payload:c,Of:void 0,options:b});pv||(pv=vo())}
function wo(a){if(ov){for(var b=v(ov),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,rm(c.payloadName,c.payload,c.options));ov.length=0}pv=0}
function vv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function wv(a,b){a=vv(a,b);qv.has(a)&&(b=qv.get(a)||[],tv(b[0],b[1],b[2],[b[3]],!0),qv.delete(a))}
function uv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function yv(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
yv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=$r(void 0===c?0:c)){a=this.client;d=new Tr({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=vv(d,c);rv.set(f,!0);wv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=uv({cttAuthInfo:bs(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?xv("visualElementGestured",f,d):a?Br("visualElementGestured",d,a,f):rm("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
yv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=$r(d);a||(a=(a=Xr(void 0===d?0:d))?new Tr({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=uv({cttAuthInfo:bs(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?xv("visualElementStateChanged",d,b):a?Br("visualElementStateChanged",b,a,d):rm("visualElementStateChanged",b,d))}};
function zv(a,b){if(void 0===b)for(var c=Zr(),d=0;d<c.length;d++)void 0!==c[d]&&zv(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&tv(a.client,b,f,e)}),a.i.clear(),a.h.clear(),a.m=void 0}
;function Av(){mv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(Av,mv);Av.prototype.j=function(){rm("finalPayload",{csn:$r()})};
Av.prototype.h=function(){Nr(Or)};
Av.prototype.i=function(){var a=zv;yv.h||(yv.h=new yv);a(yv.h)};function Bv(){}
function Cv(){var a=E("ytglobal.storage_");a||(a=new Bv,D("ytglobal.storage_",a));return a}
Bv.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Dv()):d.return()})};
function Dv(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Bv);function pm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Xk("ytidb_transaction_ended_event_rate_limit_session",.2)}
pm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ev(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Xk("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ev(a,b){Cv().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Fv(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Fv(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Fv(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Gv(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var Hv=new Map;function Iv(a,b){if(!a)return null;a=Object.keys(a);a=v(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function Jv(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function Kv(a,b){b=new Gv(b);Jv(a,"yt-action",b);return b.returnValue}
function Lv(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=Iv(e,"action")||Iv(e,"command")||Iv(e,"endpoint");if(f){var g="yt"+f;var h=Hv.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),Hv.set(g,f),g=f);U(e,kk)&&(g+="-"+U(e,kk).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(S("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?Mv(c?c:a,[e]):Kv(a,[e,c,d]))})}
function Mv(a,b){var c=[a];b&&c.push.apply(c,b);b=Kv(a,c);return 0<b.length&&(b=b[0],Jv(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){Jv(a,"yt-service-request-completed",d)},function(d){Jv(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):Xd()}
;function Fu(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=U(a.commandMetadata,lk))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(S("kevlar_service_command_check")){if(c=yq().resolve(ku),Js(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=U(a.commandMetadata,lk))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function Du(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[Mv(b,[a.command,c,a.qc])]}return[]}
function Eu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&Lv(b,[a.command],b,c)}}
;function Nv(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.P=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.P&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.s||0<=ab(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.i=this.m=null;window.addEventListener("message",this.A)}
w(Nv,G);Nv.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Jk(d)}}};
Nv.prototype.M=function(){window.removeEventListener("message",this.A);G.prototype.M.call(this)};function Ov(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Nv(!!R("WIDGET_ID_ENFORCE")),b=this.Ee.bind(this);a.m=b;a.s=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=Ov.prototype;m.Ee=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Uc(a,b,c)};
m.Uc=function(){};
m.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.he=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");bb(this.i,this.Bd,this);this.i=[]};
m.Ac=function(){return null};
function Pv(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Qv={},Rv=(Qv["api.invalidparam"]=2,Qv.auth=150,Qv["drm.auth"]=150,Qv["heartbeat.net"]=150,Qv["heartbeat.servererror"]=150,Qv["heartbeat.stop"]=150,Qv["html5.unsupportedads"]=5,Qv["fmt.noneavailable"]=5,Qv["fmt.decode"]=5,Qv["fmt.unplayable"]=5,Qv["html5.missingapi"]=5,Qv["html5.unsupportedlive"]=5,Qv["drm.unavailable"]=5,Qv["mrm.blocked"]=151,Qv);var Sv=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Tv(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Uv(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Sv);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Vv(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Wv(a){Ov.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Pe.bind(this));this.addEventListener("onVolumeChange",this.Qe.bind(this));this.addEventListener("onApiChange",this.Ke.bind(this));this.addEventListener("onPlaybackQualityChange",this.Me.bind(this));this.addEventListener("onPlaybackRateChange",this.Ne.bind(this));this.addEventListener("onStateChange",this.Oe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Re.bind(this))}
w(Wv,Ov);m=Wv.prototype;
m.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Tv(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Uv(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Uv(e);break;case "loadPlaylist":case "cuePlaylist":e=Vv(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Tv(a)&&Pv(this,this.Ac())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Ov.prototype.Dc.call(this,a,b)};
m.xc=function(a,b){var c=this,d=Ov.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.he.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Rv[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();gb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Oe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Pv(this,a)};
m.Me=function(a){Pv(this,{playbackQuality:a})};
m.Ne=function(a){Pv(this,{playbackRate:a})};
m.Ke=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Qe=function(){Pv(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Pe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Pv(this,a)};
m.Re=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Pv(this,a)};
m.dispose=function(){Ov.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Xv(a){G.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.xd,this)}
w(Xv,G);m=Xv.prototype;m.start=function(){this.started||this.h()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.h()&&this.connection.jb(a,b)};
m.xd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Yv(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Zv(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Le.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Le=function(a,b){this.started&&!this.h()&&this.connection.jb(a,this.zc(a,b))};
m.zc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.M=function(){var a=this.connection;a.h()||Ai(a.i,"command",this.xd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);G.prototype.M.call(this)};function $v(a,b){Xv.call(this,b);this.api=a;this.start()}
w($v,Xv);$v.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
$v.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Yv(a,b){switch(a){case "loadVideoById":return a=Uv(b),[a];case "cueVideoById":return a=Uv(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Vv(b),[a];case "cuePlaylist":return a=Vv(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Zv(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
$v.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Xv.prototype.zc.call(this,a,b)};
$v.prototype.M=function(){Xv.prototype.M.call(this);delete this.api};function aw(a){a=void 0===a?!1:a;G.call(this);this.i=new N(a);yc(this,this.i)}
Va(aw,G);aw.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
aw.prototype.m=function(a,b){this.h()||this.i.Za.apply(this.i,arguments)};function bw(a,b,c){aw.call(this);this.l=a;this.j=b;this.id=c}
w(bw,aw);bw.prototype.jb=function(a,b){this.h()||this.l.jb(this.j,this.id,a,b)};
bw.prototype.M=function(){this.j=this.l=null;aw.prototype.M.call(this)};function cw(a,b,c){G.call(this);this.i=a;this.origin=c;this.j=Wp(window,"message",this.l.bind(this));this.connection=new bw(this,a,b);yc(this,this.connection)}
w(cw,G);cw.prototype.jb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
cw.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
cw.prototype.M=function(){Xp(this.j);this.i=null;G.prototype.M.call(this)};function dw(){this.state=1;this.h=null}
m=dw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=ub();d=f?f.createScript(d):d;d=new zb(d,yb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,xb("From proto message. b/166824318"),e=Db(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());ew(this,d,e,a.program,b,c)}else Jr(Error("Cannot initialize botguard without program"))};
function ew(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,$u(c,function(){window[g]?fw(a,d,g,e):(a.state=3,ev(c),Jr(new $l("Unable to load Botguard","from "+c)))},f)):b?(f=Ed("SCRIPT"),b instanceof zb?(b instanceof zb&&b.constructor===zb?b=b.j:(La(b),b="type_error:SafeScript"),f.textContent=b,Lh(f)):f.textContent=b,f.nonce=Yb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?fw(a,d,g,e):(a.state=4,Jr(new $l("Unable to load Botguard from JS")))):Jr(new $l("Unable to load VM; no url or JS provided"))}
function fw(a,b,c,d){a.state=5;try{var e=new yh({program:b,me:c,Mc:S("att_web_record_metrics")});e.Te.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&Jr(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Sc()?this.Kd({ed:a}):null};
m.dispose=function(){this.Vc()};
m.Vc=function(){this.Pc(null);this.state=8};
m.Sc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Pc=function(a){wc(this.h);this.h=a};function gw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function hw(){dw.apply(this,arguments)}
w(hw,dw);hw.prototype.Vc=function(){this.state=8};
hw.prototype.Pc=function(a){var b;null==(b=gw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
hw.prototype.Sc=function(){return!!gw()};
hw.prototype.Kd=function(a){return gw().bgvmc(a)};var iw=new hw;function jw(){return iw.Sc()}
function kw(a){a=void 0===a?{}:a;return iw.invoke(a)}
;function lw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||pb(b);this.assets=a.assets||{};this.attrs=a.attrs||pb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
lw.prototype.clone=function(){var a=new lw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=pb(c):a[b]=c}return a};var mw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function nw(a){a=a||"";if(window.spf){var b=a.match(mw);spf.style.load(a,b?b[1]:"",void 0)}else ow(a)}
function ow(a){var b=pw(a),c=document.getElementById(b),d=c&&Wu(c,"loaded");d||c&&!d||(c=qw(a,b,function(){if(!Wu(c,"loaded")){Uu(c);lq(b);var e=Ua(mq,b);bl(e,0)}}))}
function qw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=dk(a);Kh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function pw(a){var b=Ed("A");a=Ch(new Fb(a,Jb));void 0!==a&&(b.href=a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(b)}
;function rw(){G.call(this);this.i=[]}
w(rw,G);rw.prototype.M=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}G.prototype.M.call(this)};function sw(){rw.apply(this,arguments)}
w(sw,rw);function tw(a,b,c,d,e){G.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Pd=e;this.Qa=!1;this.api={};this.xa=this.s=null;this.X=new N;this.i={};this.da=this.ya=this.elementId=this.Hb=this.config=null;this.aa=!1;this.l=this.P=null;this.Ea={};this.Qd=["onReady"];this.lastError=null;this.Wc=NaN;this.W={};this.Rd=new sw(this);this.na=0;this.j=this.m=a;yc(this,this.X);uw(this);vw(this);yc(this,this.Rd);c?this.na=bl(function(){f.loadNewVideoConfig(c)},0):d&&(ww(this),xw(this))}
w(tw,G);m=tw.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.h()){this.na&&(window.clearTimeout(this.na),this.na=0);var b=a||{};b instanceof lw||(b=new lw(b));this.config=b;this.setConfig(a);xw(this);this.isReady()&&yw(this)}};
function ww(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Hb=a;this.config=zw(a);ww(this);if(!this.ya){var b;this.ya=Aw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Wh(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Wh(Number(a)||a))};
function yw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Bw(a){var b=!0,c=Cw(a);c&&a.config&&(a=Dw(a),b=Wu(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function xw(a){if(!a.h()&&!a.aa){var b=Bw(a);if(b&&"html5"===(Cw(a)?"html5":null))a.da="html5",a.isReady()||Ew(a);else if(Fw(a),a.da="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Ew(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.P=function(){c=!0;var d=Gw(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?zw(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Pd);Ew(a)};
a.aa=!0;b?a.P():($u(Dw(a),a.P),(b=Hw(a))&&nw(b),Iw(a)&&!c&&D("yt.player.Application.create",null))}}}
function Cw(a){var b=Dd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Ew(a){if(!a.h()){var b=Cw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.aa=!1;if(!Gw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Jw(a)}else a.Wc=bl(function(){Ew(a)},50)}}
function Jw(a){uw(a);a.Qa=!0;var b=Cw(a);if(b){a.s=Kw(a,b,"addEventListener");a.xa=Kw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Kw(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);yw(a);a.ya&&a.ya(a.api);a.X.Za("onReady",a.api)}
function Kw(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Jr(f))}}}
function uw(a){a.Qa=!1;if(a.xa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.xa(b,a.i[b]);for(var c in a.W)a.W.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.W={};a.s=null;a.xa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Hb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Qa};
function vw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){lq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){lq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=Aw(this,b);d&&(0<=ab(this.Qd,a)||this.i[a]||(b=Lw(this,a),this.s&&this.s(a,b)),this.X.subscribe(a,d),"onReady"===a&&this.isReady()&&bl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h()||(b=Aw(this,b))&&Ai(this.X,a,b)};
function Aw(a,b){var c=b;if("string"===typeof b){if(a.Ea[b])return a.Ea[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){Ir(f)}};
a.Ea[b]=c}return c?c:null}
function Lw(a,b){var c="ytPlayer"+b+a.A;a.i[b]=c;C[c]=function(d){var e=bl(function(){if(!a.h()){try{a.X.Za(b,null!=d?d:void 0)}catch(h){Jr(new $l("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d}))}var f=a.W,g=String(e);g in f&&delete f[g]}},0);
mb(a.W,String(e))};
return c}
m.getPlayerType=function(){return this.da||(Cw(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Fw(a){a.cancel();uw(a);a.da=null;a.config&&(a.config.loaded=!1);var b=Cw(a);b&&(Bw(a)||!Iw(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.P&&fv(Dw(this),this.P);window.clearTimeout(this.Wc);this.aa=!1};
m.M=function(){Fw(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Ir(b)}this.Ea=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(C[this.i[a]]=null);this.Hb=this.config=this.api=null;delete this.m;delete this.j;G.prototype.M.call(this)};
function Iw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Dw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Hw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Gw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Mk(c||"","&")[b]}
function zw(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?pb(e):e}return b}
;var Mw={},Nw="player_uid_"+(1E9*Math.random()>>>0);function Ow(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Dd(c):c;var e=Nw+"_"+Oa(c),f=Mw[e];if(f&&d)return Pw(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new tw(c,e,a,b,void 0);Mw[e]=f;lq("player-added",f.api);zc(f,function(){delete Mw[f.getId()]});
return f.api}
function Pw(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Qw=null,Rw=null,Sw=null;function Tw(){Uw()}
function Vw(){Uw()}
function Uw(){var a=Qw.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Cu(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Ch(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function Ww(){Qw&&Qw.sendAbandonmentPing&&Qw.sendAbandonmentPing();R("PL_ATT")&&iw.dispose();for(var a=di,b=0,c=gv.length;b<c;b++)a.za(gv[b]);gv.length=0;ev("//static.doubleclick.net/instream/ad_status.js");hv=!1;Dk("DCLKSTAT",0);xc(Sw,Rw);Qw&&(Qw.removeEventListener("onVideoDataChange",Tw),Qw.destroy())}
;function Xw(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Ts(a,b);if(c)return!1;$s(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=mc(a,e);$s(a);g=g.location;f=a+f;var h=void 0===h?Ph:h;a:{h=void 0===h?Ph:h;for(a=0;a<h.length;++a)if(b=h[a],b instanceof Nh&&b.ue(f)){h=new Fb(f,Jb);break a}h=void 0}h=Ch(h||Kb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",Dk);D("yt.config.set",Dk);D("yt.setMsg",ds);D("yt.msgs.set",ds);D("yt.logging.errors.log",Ir);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}ys(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Wt("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Rk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Wt("watch",["pbs","pbu","pbp"]);Qw=Ow(a,c);S("embeds_enable_server_driven_watch_again_on_youtube")&&!Bu.h&&(Bu.h=new Bu);Qw.addEventListener("onVideoDataChange",Tw);Qw.addEventListener("onReady",Vw);S("embeds_enable_server_driven_watch_again_on_youtube")&&Qw.addEventListener("innertubeCommand",function(f){Gu(Bu.h,f)});
a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Sw=new Wv(Qw):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Rw=new cw(window.parent,a,b),Sw=new $v(Qw,Rw.connection));iv();S("ytidb_create_logger_embed_killswitch")||om();a={};Av.h||(Av.h=new Av);Av.h.install((a.flush_logs={callback:function(){or()}},a));
Mp();S("ytidb_clear_embedded_player")&&di.ka(function(){var f,g;if(!Au){var h=yq(),k={Lc:zu,Id:yu};h.h.set(k.Lc,k);k={sc:{feedbackEndpoint:Ls(tu),modifyChannelNotificationPreferenceEndpoint:Ls(uu),playlistEditEndpoint:Ls(vu),subscribeEndpoint:Ls(ru),unsubscribeEndpoint:Ls(su),webPlayerShareEntityServiceEndpoint:Ls(wu)}};var l=Is(),n={};l&&(n.client_location=l);void 0===f&&(f=El());void 0===g&&(g=h.resolve(zu));eu(k,g,f,n);f={Lc:ku,Jd:du.h};h.h.set(f.Lc,f);Au=h.resolve(ku)}Tu()})});
var Yw=Hk(function(){$t();zs()}),Zw=Hk(function(a){a.persisted||($t(),zs())}),$w=Hk(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ww():a.persisted||Ww()}),ax=Hk(Ww);
window.addEventListener?(window.addEventListener("load",Yw),window.addEventListener("pageshow",Zw),window.addEventListener("pagehide",$w)):window.attachEvent&&(window.attachEvent("onload",Yw),window.attachEvent("onunload",ax));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Ek("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new $l(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Ir(e):Jr(e))};
le=Kr;window.addEventListener("unhandledrejection",function(a){Kr(a.reason)});
bb(R("ERRORS")||[],function(a){Ir.apply(null,a)});
Dk("ERRORS",[]);D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||jw);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||kw);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||jv);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Xw);D("yt.util.activity.init",E("yt.util.activity.init")||aq);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||dq);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||bq);}).call(this);
