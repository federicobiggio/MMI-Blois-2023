/*-------------------------------------------------------------------------

	1.	Plugin Init
	2.	Helper Functions
	3.	Shortcode Stuff
	4.	Header + Search
	5.	Page Specific
	6.  Scroll to top 
	7.	Cross Browser Fixes


-------------------------------------------------------------------------*/


/*-------------------------------------------------------------------------*/
/*	1.	Plugin Init
/*-------------------------------------------------------------------------*/


/* Touch swipe */
(function(d){var m="left",l="right",c="up",s="down",b="in",t="out",j="none",o="auto",i="swipe",p="pinch",u="tap",x="horizontal",q="vertical",g="all",e="start",h="move",f="end",n="cancel",a="ontouchstart" in window,v="TouchSwipe";var k={fingers:1,threshold:75,cancelThreshold:25,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};d.fn.swipe=function(A){var z=d(this),y=z.data(v);if(y&&typeof A==="string"){if(y[A]){return y[A].apply(this,Array.prototype.slice.call(arguments,1))}else{d.error("Method "+A+" does not exist on jQuery.swipe")}}else{if(!y&&(typeof A==="object"||!A)){return r.apply(this,arguments)}}return z};d.fn.swipe.defaults=k;d.fn.swipe.phases={PHASE_START:e,PHASE_MOVE:h,PHASE_END:f,PHASE_CANCEL:n};d.fn.swipe.directions={LEFT:m,RIGHT:l,UP:c,DOWN:s,IN:b,OUT:t};d.fn.swipe.pageScroll={NONE:j,HORIZONTAL:x,VERTICAL:q,AUTO:o};d.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:g};function r(y){if(y&&(y.allowPageScroll===undefined&&(y.swipe!==undefined||y.swipeStatus!==undefined))){y.allowPageScroll=j}if(y.click!==undefined&&y.tap===undefined){y.tap=y.click}if(!y){y={}}y=d.extend({},d.fn.swipe.defaults,y);return this.each(function(){var A=d(this);var z=A.data(v);if(!z){z=new w(this,y);A.data(v,z)}})}function w(S,ag){var aJ=(a||!ag.fallbackToMouseEvents),az=aJ?"touchstart":"mousedown",U=aJ?"touchmove":"mousemove",av=aJ?"touchend":"mouseup",D=aJ?null:"mouseleave",R="touchcancel";var ad=0,N=null,ah=0,aF=0,A=0,aj=1,aA=0,aN=0,Z=null;var H=d(S);var O="start";var aI=0;var ai=null;var I=0,Y=0,aD=0,aP=0;try{H.bind(az,at);H.bind(R,L)}catch(aG){d.error("events not supported "+az+","+R+" on jQuery.swipe")}this.enable=function(){H.bind(az,at);H.bind(R,L);return H};this.disable=function(){Q();return H};this.destroy=function(){Q();H.data(v,null);return H};this.option=function(aR,aQ){if(ag[aR]!==undefined){if(aQ===undefined){return ag[aR]}else{ag[aR]=aQ}}else{d.error("Option "+aR+" does not exist on jQuery.swipe.options")}};function at(aS){if(X()){return}if(d(aS.target).closest(ag.excludedElements,H).length>0){return}var aT=aS.originalEvent?aS.originalEvent:aS;var aR,aQ=a?aT.touches[0]:aT;O=e;if(a){aI=aT.touches.length}else{aS.preventDefault()}ad=0;N=null;aN=null;ah=0;aF=0;A=0;aj=1;aA=0;ai=T();Z=aE();z();if(!a||(aI===ag.fingers||ag.fingers===g)||ap()){aO(0,aQ);I=B();if(aI==2){aO(1,aT.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}if(ag.swipeStatus||ag.pinchStatus){aR=aH(aT,O)}}else{aR=false}if(aR===false){O=n;aH(aT,O);return aR}else{ak(true)}}function P(aT){var aW=aT.originalEvent?aT.originalEvent:aT;if(O===f||O===n||af()){return}var aS,aR=a?aW.touches[0]:aW;var aU=V(aR);Y=B();if(a){aI=aW.touches.length}O=h;if(aI==2){if(aF==0){aO(1,aW.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}else{V(aW.touches[1]);A=aa(ai[0].end,ai[1].end);aN=ao(ai[0].end,ai[1].end)}aj=y(aF,A);aA=Math.abs(aF-A)}if((aI===ag.fingers||ag.fingers===g)||!a||ap()){N=ar(aU.start,aU.end);C(aT,N);ad=G(aU.start,aU.end);ah=K();aK(N,ad);if(ag.swipeStatus||ag.pinchStatus){aS=aH(aW,O)}if(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave){var aQ=true;if(ag.triggerOnTouchLeave){var aV=au(this);aQ=aC(aU.end,aV)}if(!ag.triggerOnTouchEnd&&aQ){O=aM(h)}else{if(ag.triggerOnTouchLeave&&!aQ){O=aM(f)}}if(O==n||O==f){aH(aW,O)}}}else{O=n;aH(aW,O)}if(aS===false){O=n;aH(aW,O)}}function ab(aS){var aU=aS.originalEvent;if(a){if(aU.touches.length>0){aw();return true}}if(af()){aI=aP}aS.preventDefault();Y=B();if(ag.triggerOnTouchEnd||(ag.triggerOnTouchEnd==false&&O===h)){O=f;var aR=((aI===ag.fingers||ag.fingers===g)||!a);var aQ=ai[0].end.x!==0;var aT=aR&&aQ&&(an()||aB());if(aT){aH(aU,O)}else{O=n;aH(aU,O)}}else{if(!ag.triggerOnTouchEnd&&ay()){O=f;am(aU,O,u)}else{if(O===h){O=n;aH(aU,O)}}}ak(false)}function L(){aI=0;Y=0;I=0;aF=0;A=0;aj=1;z();ak(false)}function W(aQ){var aR=aQ.originalEvent;if(ag.triggerOnTouchLeave){O=aM(f);aH(aR,O)}}function Q(){H.unbind(az,at);H.unbind(R,L);H.unbind(U,P);H.unbind(av,ab);if(D){H.unbind(D,W)}ak(false)}function aM(aT){var aS=aT;var aR=aq();var aQ=ae();if(!aR){aS=n}else{if(aQ&&aT==h&&(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave)){aS=f}else{if(!aQ&&aT==f&&ag.triggerOnTouchLeave){aS=n}}}return aS}function aH(aS,aQ){var aR=undefined;if(ac()){aR=am(aS,aQ,i)}if(ap()&&aR!==false){aR=am(aS,aQ,p)}if(ay()&&aR!==false){aR=am(aS,aQ,u)}if(aQ===n){L(aS)}if(aQ===f){if(a){if(aS.touches.length==0){L(aS)}}else{L(aS)}}return aR}function am(aT,aQ,aS){var aR=undefined;if(aS==i){H.trigger("swipeStatus",[aQ,N||null,ad||0,ah||0,aI]);if(ag.swipeStatus){aR=ag.swipeStatus.call(H,aT,aQ,N||null,ad||0,ah||0,aI);if(aR===false){return false}}if(aQ==f&&aB()){H.trigger("swipe",[N,ad,ah,aI]);if(ag.swipe){aR=ag.swipe.call(H,aT,N,ad,ah,aI);if(aR===false){return false}}switch(N){case m:H.trigger("swipeLeft",[N,ad,ah,aI]);if(ag.swipeLeft){aR=ag.swipeLeft.call(H,aT,N,ad,ah,aI)}break;case l:H.trigger("swipeRight",[N,ad,ah,aI]);if(ag.swipeRight){aR=ag.swipeRight.call(H,aT,N,ad,ah,aI)}break;case c:H.trigger("swipeUp",[N,ad,ah,aI]);if(ag.swipeUp){aR=ag.swipeUp.call(H,aT,N,ad,ah,aI)}break;case s:H.trigger("swipeDown",[N,ad,ah,aI]);if(ag.swipeDown){aR=ag.swipeDown.call(H,aT,N,ad,ah,aI)}break}}}if(aS==p){H.trigger("pinchStatus",[aQ,aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchStatus){aR=ag.pinchStatus.call(H,aT,aQ,aN||null,aA||0,ah||0,aI,aj);if(aR===false){return false}}if(aQ==f&&an()){switch(aN){case b:H.trigger("pinchIn",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchIn){aR=ag.pinchIn.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break;case t:H.trigger("pinchOut",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchOut){aR=ag.pinchOut.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break}}}if(aS==u){if(aQ===n||aQ===f){if((aI===1||!a)&&(isNaN(ad)||ad===0)){H.trigger("tap",[aT.target]);if(ag.tap){aR=ag.tap.call(H,aT,aT.target)}}}}return aR}function ae(){var aQ=true;if(ag.threshold!==null){aQ=ad>=ag.threshold}if(aQ&&ag.cancelThreshold!==null){aQ=(M(N)-ad)<ag.cancelThreshold}return aQ}function al(){if(ag.pinchThreshold!==null){return aA>=ag.pinchThreshold}return true}function aq(){var aQ;if(ag.maxTimeThreshold){if(ah>=ag.maxTimeThreshold){aQ=false}else{aQ=true}}else{aQ=true}return aQ}function C(aQ,aR){if(ag.allowPageScroll===j||ap()){aQ.preventDefault()}else{var aS=ag.allowPageScroll===o;switch(aR){case m:if((ag.swipeLeft&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case l:if((ag.swipeRight&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case c:if((ag.swipeUp&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break;case s:if((ag.swipeDown&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break}}}function an(){return al()}function ap(){return !!(ag.pinchStatus||ag.pinchIn||ag.pinchOut)}function ax(){return !!(an()&&ap())}function aB(){var aQ=aq();var aS=ae();var aR=aS&&aQ;return aR}function ac(){return !!(ag.swipe||ag.swipeStatus||ag.swipeLeft||ag.swipeRight||ag.swipeUp||ag.swipeDown)}function E(){return !!(aB()&&ac())}function ay(){return !!(ag.tap)}function aw(){aD=B();aP=event.touches.length+1}function z(){aD=0;aP=0}function af(){var aQ=false;if(aD){var aR=B()-aD;if(aR<=ag.fingerReleaseThreshold){aQ=true}}return aQ}function X(){return !!(H.data(v+"_intouch")===true)}function ak(aQ){if(aQ===true){H.bind(U,P);H.bind(av,ab);if(D){H.bind(D,W)}}else{H.unbind(U,P,false);H.unbind(av,ab,false);if(D){H.unbind(D,W,false)}}H.data(v+"_intouch",aQ===true)}function aO(aR,aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;ai[aR].identifier=aS;ai[aR].start.x=ai[aR].end.x=aQ.pageX||aQ.clientX;ai[aR].start.y=ai[aR].end.y=aQ.pageY||aQ.clientY;return ai[aR]}function V(aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;var aR=J(aS);aR.end.x=aQ.pageX||aQ.clientX;aR.end.y=aQ.pageY||aQ.clientY;return aR}function J(aR){for(var aQ=0;aQ<ai.length;aQ++){if(ai[aQ].identifier==aR){return ai[aQ]}}}function T(){var aQ=[];for(var aR=0;aR<=5;aR++){aQ.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return aQ}function aK(aQ,aR){aR=Math.max(aR,M(aQ));Z[aQ].distance=aR}function M(aQ){return Z[aQ].distance}function aE(){var aQ={};aQ[m]=aL(m);aQ[l]=aL(l);aQ[c]=aL(c);aQ[s]=aL(s);return aQ}function aL(aQ){return{direction:aQ,distance:0}}function K(){return Y-I}function aa(aT,aS){var aR=Math.abs(aT.x-aS.x);var aQ=Math.abs(aT.y-aS.y);return Math.round(Math.sqrt(aR*aR+aQ*aQ))}function y(aQ,aR){var aS=(aR/aQ)*1;return aS.toFixed(2)}function ao(){if(aj<1){return t}else{return b}}function G(aR,aQ){return Math.round(Math.sqrt(Math.pow(aQ.x-aR.x,2)+Math.pow(aQ.y-aR.y,2)))}function F(aT,aR){var aQ=aT.x-aR.x;var aV=aR.y-aT.y;var aS=Math.atan2(aV,aQ);var aU=Math.round(aS*180/Math.PI);if(aU<0){aU=360-Math.abs(aU)}return aU}function ar(aR,aQ){var aS=F(aR,aQ);if((aS<=45)&&(aS>=0)){return m}else{if((aS<=360)&&(aS>=315)){return m}else{if((aS>=135)&&(aS<=225)){return l}else{if((aS>45)&&(aS<135)){return s}else{return c}}}}}function B(){var aQ=new Date();return aQ.getTime()}function au(aQ){aQ=d(aQ);var aS=aQ.offset();var aR={left:aS.left,right:aS.left+aQ.outerWidth(),top:aS.top,bottom:aS.top+aQ.outerHeight()};return aR}function aC(aQ,aR){return(aQ.x>aR.left&&aQ.x<aR.right&&aQ.y>aR.top&&aQ.y<aR.bottom)}}})(jQuery);


/*!
 * imagesLoaded PACKAGED v3.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e){function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===f.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var c=this;setTimeout(function(){c.check()})}function f(e){this.img=e}function a(e){this.src=e,h[e]=this}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&c&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))}),f.prototype=new e,f.prototype.check=function(){var e=h[this.img.src]||new a(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var h={};return a.prototype=new e,a.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},a.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},a.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},a.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},a.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},r}var o=e.jQuery,s=e.console,c=s!==void 0,f=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);	


/*jQuery Waypoints */
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*/

jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})


/*! Mousewheel by Brandon Aaron (http://brandon.aaron.sh) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
!function(e){e.flexslider=function(t,n){var a=e(t),i=e.extend({},e.flexslider.defaults,n),o=i.namespace,s="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,r=s?"touchend":"click",l="vertical"===i.direction,c=i.reverse,d=0<i.itemWidth,u="fade"===i.animation,p=""!==i.asNavFor,m={};e.data(t,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=i.startAt,a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=i.selector.substr(0,i.selector.search(" ")),a.slides=e(i.selector,a),a.container=e(a.containerSelector,a),a.count=a.slides.length,a.syncExists=0<e(i.sync).length,"slide"===i.animation&&(i.animation="swing"),a.prop=l?"top":"marginLeft",a.args={},a.manualPause=!1;var t,n=a;if((t=!i.video)&&(t=!u)&&(t=i.useCSS))e:{t=document.createElement("div");var o,r=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(o in r)if(void 0!==t.style[r[o]]){a.pfx=r[o].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",t=!0;break e}t=!1}n.transitions=t,""!==i.controlsContainer&&(a.controlsContainer=0<e(i.controlsContainer).length&&e(i.controlsContainer)),""!==i.manualControls&&(a.manualControls=0<e(i.manualControls).length&&e(i.manualControls)),i.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),p&&m.asNav.setup(),a.setup("init"),i.controlNav&&m.controlNav.setup(),i.directionNav&&m.directionNav.setup(),i.keyboard&&(1===e(a.containerSelector).length||i.multipleKeyboard)&&e(document).bind("keyup",function(e){e=e.keyCode,a.animating||39!==e&&37!==e||(e=39===e?a.getTarget("next"):37===e?a.getTarget("prev"):!1,a.flexAnimate(e,i.pauseOnAction))}),i.mousewheel&&a.bind("mousewheel",function(e,t){e.preventDefault();var n=a.getTarget(0>t?"next":"prev");a.flexAnimate(n,i.pauseOnAction)}),i.pausePlay&&m.pausePlay.setup(),i.slideshow&&(i.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<i.initDelay?setTimeout(a.play,i.initDelay):a.play()),s&&i.touch&&m.touch(),(!u||u&&i.smoothHeight)&&e(window).bind("resize focus",m.resize),setTimeout(function(){i.start(a)},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(o+"active-slide").eq(a.currentItem).addClass(o+"active-slide"),a.slides.click(function(t){t.preventDefault(),t=e(this);var n=t.index();!e(i.asNavFor).data("flexslider").animating&&!t.hasClass("active")&&(a.direction=a.currentItem<n?"next":"prev",a.flexAnimate(n,i.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var t,n=1;if(a.controlNavScaffold=e('<ol class="'+o+"control-nav "+o+("thumbnails"===i.controlNav?"control-thumbs":"control-paging")+'"></ol>'),1<a.pagingCount)for(var l=0;l<a.pagingCount;l++)t="thumbnails"===i.controlNav?'<img src="'+a.slides.eq(l).attr("data-thumb")+'"/>':"<a>"+n+"</a>",a.controlNavScaffold.append("<li>"+t+"</li>"),n++;a.controlsContainer?e(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(t){t.preventDefault(),t=e(this);var n=a.controlNav.index(t);t.hasClass(o+"active")||(a.direction=n>a.currentSlide?"next":"prev",a.flexAnimate(n,i.pauseOnAction))}),s&&a.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.live(r,function(t){t.preventDefault(),t=e(this);var n=a.controlNav.index(t);t.hasClass(o+"active")||(a.direction=n>a.currentSlide?"next":"prev",a.flexAnimate(n,i.pauseOnAction))}),s&&a.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){a.controlNav=e("."+o+"control-nav li "+("thumbnails"===i.controlNav?"img":"a"),a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(o+"active").eq(a.animatingTo).addClass(o+"active")},update:function(t,n){1<a.pagingCount&&"add"===t?a.controlNavScaffold.append(e("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(n).closest("li").remove(),m.controlNav.set(),1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(n,t):m.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+o+'direction-nav"><li><a class="'+o+'prev" href="#">'+i.prevText+'</a></li><li><a class="'+o+'next" href="#">'+i.nextText+"</a></li></ul>");a.controlsContainer?(e(a.controlsContainer).append(t),a.directionNav=e("."+o+"direction-nav li a",a.controlsContainer)):(a.append(t),a.directionNav=e("."+o+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(t){t.preventDefault(),t=a.getTarget(e(this).hasClass(o+"next")?"next":"prev"),a.flexAnimate(t,i.pauseOnAction)}),s&&a.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=o+"disabled";1===a.pagingCount?a.directionNav.addClass(e):i.animationLoop?a.directionNav.removeClass(e):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+o+"prev").addClass(e):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+o+"next").addClass(e):a.directionNav.removeClass(e)}},pausePlay:{setup:function(){var t=e('<div class="'+o+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(t),a.pausePlay=e("."+o+"pauseplay a",a.controlsContainer)):(a.append(t),a.pausePlay=e("."+o+"pauseplay a",a)),m.pausePlay.update(i.slideshow?o+"pause":o+"play"),a.pausePlay.bind(r,function(t){t.preventDefault(),e(this).hasClass(o+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())}),s&&a.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?a.pausePlay.removeClass(o+"pause").addClass(o+"play").text(i.playText):a.pausePlay.removeClass(o+"play").addClass(o+"pause").text(i.pauseText)}},touch:function(){function e(e){m=l?o-e.touches[0].pageY:o-e.touches[0].pageX,f=l?Math.abs(m)<Math.abs(e.touches[0].pageX-s):Math.abs(m)<Math.abs(e.touches[0].pageY-s),(!f||500<Number(new Date)-v)&&(e.preventDefault(),!u&&a.transitions&&(i.animationLoop||(m/=0===a.currentSlide&&0>m||a.currentSlide===a.last&&m>0?Math.abs(m)/p+2:1),a.setProps(r+m,"setTouch")))}function n(){if(t.removeEventListener("touchmove",e,!1),a.animatingTo===a.currentSlide&&!f&&null!==m){var l=c?-m:m,d=a.getTarget(l>0?"next":"prev");a.canAdvance(d)&&(550>Number(new Date)-v&&50<Math.abs(l)||Math.abs(l)>p/2)?a.flexAnimate(d,i.pauseOnAction):u||a.flexAnimate(a.currentSlide,i.pauseOnAction,!0)}t.removeEventListener("touchend",n,!1),r=m=s=o=null}var o,s,r,p,m,v,f=!1;t.addEventListener("touchstart",function(u){a.animating?u.preventDefault():1===u.touches.length&&(a.pause(),p=l?a.h:a.w,v=Number(new Date),r=d&&c&&a.animatingTo===a.last?0:d&&c?a.limit-(a.itemW+i.itemMargin)*a.move*a.animatingTo:d&&a.currentSlide===a.last?a.limit:d?(a.itemW+i.itemMargin)*a.move*a.currentSlide:c?(a.last-a.currentSlide+a.cloneOffset)*p:(a.currentSlide+a.cloneOffset)*p,o=l?u.touches[0].pageY:u.touches[0].pageX,s=l?u.touches[0].pageX:u.touches[0].pageY,t.addEventListener("touchmove",e,!1),t.addEventListener("touchend",n,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(d||a.doMath(),u?m.smoothHeight():d?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(i.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!l||u){var t=u?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(t){var n=e(i.sync).data("flexslider"),o=a.animatingTo;switch(t){case"animate":n.flexAnimate(o,i.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}}},a.flexAnimate=function(t,n,r,v,f){if(p&&1===a.pagingCount&&(a.direction=a.currentItem<t?"next":"prev"),!a.animating&&(a.canAdvance(t,f)||r)&&a.is(":visible")){if(p&&v){if(r=e(i.asNavFor).data("flexslider"),a.atEnd=0===t||t===a.count-1,r.flexAnimate(t,!0,!1,!0,f),a.direction=a.currentItem<t?"next":"prev",r.direction=a.direction,Math.ceil((t+1)/a.visible)-1===a.currentSlide||0===t)return a.currentItem=t,a.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),!1;a.currentItem=t,a.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),t=Math.floor(t/a.visible)}if(a.animating=!0,a.animatingTo=t,i.before(a),n&&a.pause(),a.syncExists&&!f&&m.sync("animate"),i.controlNav&&m.controlNav.active(),d||a.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),a.atEnd=0===t||t===a.last,i.directionNav&&m.directionNav.update(),t===a.last&&(i.end(a),i.animationLoop||a.pause()),u)s?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(t).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){i.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(i.animationSpeed,i.easing),a.slides.eq(t).fadeIn(i.animationSpeed,i.easing,a.wrapup));else{var g=l?a.slides.filter(":first").height():a.computedW;d?(t=i.itemWidth>a.w?2*i.itemMargin:i.itemMargin,t=(a.itemW+t)*a.move*a.animatingTo,t=t>a.limit&&1!==a.visible?a.limit:t):t=0===a.currentSlide&&t===a.count-1&&i.animationLoop&&"next"!==a.direction?c?(a.count+a.cloneOffset)*g:0:a.currentSlide===a.last&&0===t&&i.animationLoop&&"prev"!==a.direction?c?0:(a.count+1)*g:c?(a.count-1-t+a.cloneOffset)*g:(t+a.cloneOffset)*g,a.setProps(t,"",i.animationSpeed),a.transitions?(i.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(g)})):a.container.animate(a.args,i.animationSpeed,i.easing,function(){a.wrapup(g)})}i.smoothHeight&&m.smoothHeight(i.animationSpeed)}},a.wrapup=function(e){!u&&!d&&(0===a.currentSlide&&a.animatingTo===a.last&&i.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&i.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,i.after(a)},a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.playing=!1,i.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.animatedSlides=setInterval(a.animateSlides,i.slideshowSpeed),a.playing=!0,i.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?i.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var o,s=e?e:(a.itemW+i.itemMargin)*a.move*a.animatingTo;o=-1*function(){if(d)return"setTouch"===t?e:c&&a.animatingTo===a.last?0:c?a.limit-(a.itemW+i.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:s;switch(t){case"setTotal":return c?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return c?e:a.count*e;case"jumpStart":return c?a.count*e:e;default:return e}}()+"px",a.transitions&&(o=l?"translate3d(0,"+o+",0)":"translate3d("+o+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n)),a.args[a.prop]=o,(a.transitions||void 0===n)&&a.container.css(a.args)},a.setup=function(t){if(u)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(s?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.animationSpeed/1e3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(i.animationSpeed,i.easing)),i.smoothHeight&&m.smoothHeight();else{var n,r;"init"===t&&(a.viewport=e('<div class="'+o+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,c&&(r=e.makeArray(a.slides).reverse(),a.slides=e(r),a.container.empty().append(a.slides))),i.animationLoop&&!d&&(a.cloneCount=2,a.cloneOffset=1,"init"!==t&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone"))),a.newSlides=e(i.selector,a),n=c?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,l&&!d?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(n*a.h,"init")},"init"===t?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(n*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),i.smoothHeight&&m.smoothHeight()},"init"===t?100:0))}d||a.slides.removeClass(o+"active-slide").eq(a.currentSlide).addClass(o+"active-slide")},a.doMath=function(){var e=a.slides.first(),t=i.itemMargin,n=i.minItems,o=i.maxItems;a.w=a.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),d?(a.itemT=i.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=o?o*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-t*n)/n:a.maxW<a.w?(a.w-t*o)/o:i.itemWidth>a.w?a.w:i.itemWidth,a.visible=Math.floor(a.w/(a.itemW+t)),a.move=0<i.move&&i.move<a.visible?i.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:i.itemWidth>a.w?(a.itemW+2*t)*a.count-a.w-t:(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),d||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),i.controlNav&&!a.manualControls&&("add"===t&&!d||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!d||a.pagingCount<a.controlNav.length)&&(d&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),i.directionNav&&m.directionNav.update()},a.addSlide=function(t,n){var o=e(t);a.count+=1,a.last=a.count-1,l&&c?void 0!==n?a.slides.eq(a.count-n).after(o):a.container.prepend(o):void 0!==n?a.slides.eq(n).before(o):a.container.append(o),a.update(n,"add"),a.slides=e(i.selector+":not(.clone)",a),a.setup(),i.added(a)},a.removeSlide=function(t){var n=isNaN(t)?a.slides.index(e(t)):t;a.count-=1,a.last=a.count-1,isNaN(t)?e(t,a.slides).remove():l&&c?a.slides.eq(a.last).remove():a.slides.eq(t).remove(),a.doMath(),a.update(n,"remove"),a.slides=e(i.selector+":not(.clone)",a),a.setup(),i.removed(a)},m.init()},e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var n=e(this),a=n.find(t.selector?t.selector:".slides > li");1===a.length?(a.fadeIn(400),t.start&&t.start(n)):void 0==n.data("flexslider")&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof t&&n.flexAnimate(t,!0)}}}(jQuery);



jQuery(document).ready(function($){
	

/***************** Pretty Photo ******************/
	
	function prettyPhotoInit(){
		
		//add galleries to portfolios
		$('.portfolio-items').each(function(){
			var $unique_id = Math.floor(Math.random()*10000);
			$(this).find('.pretty_photo').attr('rel','prettyPhoto['+$unique_id+'_gal]').removeClass('pretty_photo');
		});
		
		$("a[data-rel='prettyPhoto[product-gallery]'], a[data-rel='prettyPhoto']").each(function(){
			$(this).attr('rel',$(this).attr('data-rel'));
			$(this).removeAttr('data-rel');
		});
		
		//nectar auto lightbox
		if($('body').hasClass('nectar-auto-lightbox')){
			$('.gallery').each(function(){
				if($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
					var $unique_id = Math.floor(Math.random()*10000);
					$(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').attr('rel','prettyPhoto['+$unique_id+'_gal]').removeClass('pretty_photo');
				}
			});
			$('.main-content img').each(function(){
				if($(this).parent().is("[href]") && !$(this).parent().is("[rel*='prettyPhoto']") && $(this).parents('.product-image').length == 0 && $(this).parents('.iosSlider.product-slider').length == 0) {
					var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);
					if(match) $(this).parent().attr('rel','prettyPhoto');
				} 
			});
		}
		
		
		//convert class usage into rel
		$('a.pp').removeClass('pp').attr('rel','prettyPhoto');
		
		 var loading_animation = ($('body[data-loading-animation]').attr('data-loading-animation') != 'none') ? $('body').attr('data-loading-animation') : null ;
		 var ascend_loader = ($('body').hasClass('ascend')) ? '<span class="default-loading-icon spin"></span>' :'';
		 var ascend_loader_class = ($('body').hasClass('ascend')) ? 'default_loader ' : '';
		$("a[rel^='prettyPhoto']").prettyPhoto({
			theme: 'dark_rounded',
			allow_resize: true,
			default_width: 1024,
			opacity: 0.85, 
			animation_speed: 'normal',
			deeplinking: false,
			default_height: 576,
			social_tools: '',
			markup: '<div class="pp_pic_holder"> \
						   <div class="ppt">&nbsp;</div> \
							<div class="pp_details"> \
								<div class="pp_nav"> \
								    <a href="#" class="pp_arrow_previous"> <i class="icon-salient-left-arrow-thin icon-default-style"></i> </a> \
									<a href="#" class="pp_arrow_next"> <i class="icon-salient-right-arrow-thin icon-default-style"></i> </a> \
									<p class="currentTextHolder">0/0</p> \
								</div> \
								<a class="pp_close" href="#"><span class="icon-salient-x icon-default-style"></span></a> \
							</div> \
							<div class="pp_content_container"> \
								<div class="pp_left"> \
								<div class="pp_right"> \
									<div class="pp_content"> \
										<div class="pp_fade"> \
											<div class="pp_hoverContainer"> \
											</div> \
											<div id="pp_full_res"></div> \
											<p class="pp_description"></p> \
										</div> \
									</div> \
								</div> \
								</div> \
							</div> \
						</div> \
						<div class="pp_loaderIcon ' + ascend_loader_class + loading_animation+'"> '+ascend_loader+' </div> \
						<div class="pp_overlay"></div>'
		});
		
	}


	function magnificInit() {
		
		//convert old pp links
		$('a.pp').removeClass('pp').addClass('magnific-popup');
		$("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr('rel').addClass('magnific-popup');


		//add galleries to portfolios
		$('.portfolio-items').each(function(){
			if($(this).find('.pretty_photo').length > 0) {
				$(this).find('.pretty_photo').removeClass('pretty_photo').addClass('gallery').addClass('magnific');
			} else if($(this).find('a[rel*="prettyPhoto["]').length > 0){
				$(this).find('a[rel*="prettyPhoto["]').removeAttr('rel').addClass('gallery').addClass('magnific');
			}

		});
		
		$("a[data-rel='prettyPhoto[product-gallery]']").each(function(){
			$(this).removeAttr('data-rel').addClass('magnific').addClass('gallery');
		});
		
		//nectar auto lightbox
		if($('body').hasClass('nectar-auto-lightbox')){
			$('.gallery').each(function(){
				if($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
					var $unique_id = Math.floor(Math.random()*10000);
					$(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').addClass('magnific').addClass('gallery').removeClass('pretty_photo');
				}
			});
			$('.main-content img').each(function(){
				if($(this).parent().is("[href]") && !$(this).parent().is(".magnific-popup") && $(this).parents('.product-image').length == 0 && $(this).parents('.iosSlider.product-slider').length == 0) {
					var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);
					if(match) $(this).parent().addClass('magnific-popup').addClass('image-link');
				} 
			});
		}
		

		//regular
		$('a.magnific-popup:not(.gallery):not(.nectar_video_lightbox)').magnificPopup({ 
			type: 'image', 
			callbacks: {
				
				imageLoadComplete: function()  {	
					var $that = this;
					setTimeout( function() { $that.wrap.addClass('mfp-image-loaded'); }, 10);
				},
				beforeOpen: function() {
				    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			    },
			    open: function() {
					    	
					$.magnificPopup.instance.next = function() {
						var $that = this;

						this.wrap.removeClass('mfp-image-loaded');
						setTimeout( function() { $.magnificPopup.proto.next.call($that); }, 100);
					}

					$.magnificPopup.instance.prev = function() {
						var $that = this;

						this.wrap.removeClass('mfp-image-loaded');
						setTimeout( function() { $.magnificPopup.proto.prev.call($that); }, 100);
					}
					
				}
			},
			fixedContentPos: false,
		    mainClass: 'mfp-zoom-in', 
		    removalDelay: 400 
		});

		//video
		$('a.magnific-popup.nectar_video_lightbox, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo]').magnificPopup({ 
			type: 'iframe', 
			fixedContentPos: false,
		    mainClass: 'mfp-zoom-in', 
		    removalDelay: 400 
		});


		//galleries
		$('a.magnific.gallery').each(function(){

			var $parentRow = ($(this).parents('.wpb_row').length > 0) ? $(this).parents('.wpb_row') : $(this).parents('.row');
			if($parentRow.length > 0 && !$parentRow.hasClass('lightbox-row')) {

				$parentRow.magnificPopup({
					type: 'image',
					delegate: 'a.magnific',
					mainClass: 'mfp-zoom-in',
					fixedContentPos: false,
					callbacks: {

						elementParse: function(item) {
			
							 if($(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('iframe=true') != -1) {
						         item.type = 'iframe';
						      } else {
						         item.type = 'image';
						      }
						},

						imageLoadComplete: function()  {	
							var $that = this;
							setTimeout( function() { $that.wrap.addClass('mfp-image-loaded'); }, 10);
						},

						beforeOpen: function() {
					       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					    },

					    open: function() {
					    	
							$.magnificPopup.instance.next = function() {
								var $that = this;

								this.wrap.removeClass('mfp-image-loaded');
								setTimeout( function() { $.magnificPopup.proto.next.call($that); }, 100);
							}

							$.magnificPopup.instance.prev = function() {
								var $that = this;

								this.wrap.removeClass('mfp-image-loaded');
								setTimeout( function() { $.magnificPopup.proto.prev.call($that); }, 100);
							}
							
						}
					},
					removalDelay: 400, 
					gallery: {
			          enabled:true
			        }
				});

				$parentRow.addClass('lightbox-row');
			}
			
		});

	}

	function lightBoxInit() {
		if($('body[data-ls="pretty_photo"]').length > 0) {
			prettyPhotoInit();
		} else if($('body[data-ls="magnific"]').length > 0) {
			magnificInit();
		}
	}

	lightBoxInit();
	//check for late links
	setTimeout(lightBoxInit,500);
	
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);




  // ========================= smartresize ===============================

  /*
   * smartresize: debounced resize event for jQuery
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery.smartresize.js
   *
   * Copyright 2011 @louis_remi
   * Licensed under the MIT license.
   */

  var $event = $.event,
      dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
      resizeTimeout;

  $event.special.smartresize = {
    setup: function() {
      $(this).bind( "resize", $event.special.smartresize.handler );
    },
    teardown: function() {
      $(this).unbind( "resize", $event.special.smartresize.handler );
    },
    handler: function( event, execAsap ) {
      // Save the context
      var context = this,
          args = arguments;

      // set correct event type
      event.type = "smartresize";

      if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
      resizeTimeout = setTimeout(function() {
        $event[ dispatchMethod ].apply( context, args );
      }, execAsap === "execAsap"? 0 : 100 );
    }
  };

  $.fn.smartresize = function( fn ) {
    return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
  };



/***************** Smooth Scrolling ******************/

	function niceScrollInit(){
		$("html").niceScroll({
			scrollspeed: 60,
			mousescrollstep: 40,
			cursorwidth: 15,
			cursorborder: 0,
			cursorcolor: '#303030',
			cursorborderradius: 6,
			autohidemode: false,
			horizrailenabled: false
		});
		
		
		if($('#boxed').length == 0){
			$('body, body #header-outer, body #header-secondary-outer, body #search-outer').css('padding-right','16px');
		} else if($('body[data-ext-responsive="true"]').length == 0 ) {
			$('body').css('padding-right','16px');
		}
		
		$('html').addClass('no-overflow-y');
	}

	var $smoothActive = $('body').attr('data-smooth-scrolling'); 
	var $smoothCache = ( $smoothActive == 1 ) ? true : false;
	
	if( $smoothActive == 1 && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){ niceScrollInit(); } else {
		$('body').attr('data-smooth-scrolling','0');
	}
	
	//chrome ss
	if($smoothCache == false && navigator.platform.toUpperCase().indexOf('MAC') === -1 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && $(window).width() > 690) {
		!function(){function e(){var e=!1;e&&c("keydown",r),v.keyboardSupport&&!e&&u("keydown",r)}function t(){if(document.body){var t=document.body,n=document.documentElement,o=window.innerHeight,r=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?n:t,w=t,e(),x=!0,top!=self)y=!0;else if(r>o&&(t.offsetHeight<=o||n.offsetHeight<=o)){var a=!1,i=function(){a||n.scrollHeight==document.height||(a=!0,setTimeout(function(){n.style.height=document.height+"px",a=!1},500))};if(n.style.height="auto",setTimeout(i,10),S.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",n.style.backgroundAttachment="scroll")}}function n(e,t,n,o){if(o||(o=1e3),d(t,n),1!=v.accelerationMax){var r=+new Date,a=r-C;if(a<v.accelerationDelta){var i=(1+30/a)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,n*=i)}C=+new Date}if(M.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(){for(var r=+new Date,a=0,i=0,c=0;c<M.length;c++){var s=M[c],d=r-s.start,f=d>=v.animationTime,h=f?1:d/v.animationTime;v.pulseAlgorithm&&(h=p(h));var m=s.x*h-s.lastX>>0,w=s.y*h-s.lastY>>0;a+=m,i+=w,s.lastX+=m,s.lastY+=w,f&&(M.splice(c,1),c--)}l?window.scrollBy(a,i):(a&&(e.scrollLeft+=a),i&&(e.scrollTop+=i)),t||n||(M=[]),M.length?N(u,e,o/v.frameRate+1):T=!1};N(u,e,0),T=!0}}function o(e){x||t();var o=e.target,r=l(o);if(!r||e.defaultPrevented||s(w,"embed")||s(o,"embed")&&/\.pdf/i.test(o.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return a||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(a)>1.2&&(a*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),n(r,-a,-i),void e.preventDefault())}function r(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var r,a=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-v.arrowScroll;break;case H.down:i=v.arrowScroll;break;case H.spacebar:r=e.shiftKey?1:-1,i=-r*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}n(u,a,i),e.preventDefault()}function a(e){w=e.target}function i(e,t){for(var n=e.length;n--;)E[A(e[n])]=t;return t}function l(e){var t=[],n=S.scrollHeight;do{var o=E[A(e)];if(o)return i(t,o);if(t.push(e),n===e.scrollHeight){if(!y||S.clientHeight+10<n)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,n){window.addEventListener(e,t,n||!1)}function c(e,t,n){window.removeEventListener(e,t,n||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(z);var t=h(D[0],120)&&h(D[1],120)&&h(D[2],120);return!t}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,n,o;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=n+o*(1-n)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w,g={frameRate:150,animationTime:500,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=g,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=g,M=[],T=!1,C=+new Date,E={};setInterval(function(){E={}},1e4);var z,A=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),N=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L=null;"onwheel"in document.createElement("div")?L="wheel":"onmousewheel"in document.createElement("div")&&(L="mousewheel"),L&&K&&(u(L,o),u("mousedown",a),u("load",t))}();
	}







/***************** Sliders ******************/

	//gallery
	function flexsliderInit(){
		$('.flex-gallery').each(function(){
			
			var $that = $(this);
			
			imagesLoaded($(this),function(instance){
			
				 $that.flexslider({
			        animation: 'fade',
			        smoothHeight: false, 
			        animationSpeed: 500,
			        useCSS: false, 
			        touch: true
			    });
				
				////gallery slider add arrows
				$('.flex-gallery .flex-direction-nav li a.flex-next').html('<i class="icon-angle-right"></i>');
				$('.flex-gallery .flex-direction-nav li a.flex-prev').html('<i class="icon-angle-left"></i>');
			
			});
			
		});
	}
	flexsliderInit();


	function flickityInit() {
		if($('.nectar-flickity:not(.masonry)').length == 0) return false;

		$('.nectar-flickity:not(.masonry)').flickity({
		  contain: true,
		  draggable: true,
		  lazyLoad: false,
		  imagesLoaded: true,
		  percentPosition: true,
		  prevNextButtons: false,
		  pageDots: true,
		  resize: true,
		  setGallerySize: true,
		  wrapAround: true,
		  accessibility: false
		});
	
	}
	setTimeout(flickityInit,100);

	function flickityBlogInit() {
		if($('.nectar-flickity.masonry.not-initialized').length == 0) return false;

		$('.nectar-flickity.masonry.not-initialized').each(function(){

			//move pos for large_featured
			if($(this).parents('article').hasClass('large_featured')) 
				$(this).insertBefore( $(this).parents('article').find('.content-inner') );
			
		});


		$('.nectar-flickity.masonry.not-initialized').flickity({
		  contain: true,
		  draggable: false,
		  lazyLoad: false,
		  imagesLoaded: true,
		  percentPosition: true,
		  prevNextButtons: true,
		  pageDots: false,
		  resize: true,
		  setGallerySize: true,
		  wrapAround: true,
		  accessibility: false

		});

		$('.nectar-flickity.masonry').removeClass('not-initialized');

		//add count
		$('.nectar-flickity.masonry:not(.not-initialized)').each(function(){
			if($(this).find('.item-count').length == 0) {
				$('<div class="item-count"/>').insertBefore($(this).find('.flickity-prev-next-button.next'));
				$(this).find('.item-count').html('<span class="current">1</span>/<span class="total">' + $(this).find('.flickity-slider .cell').length + '</span>');

				$(this).find('.flickity-prev-next-button, .item-count').wrapAll('<div class="control-wrap" />');

				//move pos for wide_tall
				if($(this).parents('article').hasClass('wide_tall')) 
					$(this).find('.control-wrap').insertBefore( $(this) );
			}
		});

		//update count
		$('.masonry .flickity-prev-next-button.previous,  .masonry .flickity-prev-next-button.next').click(function(){
			if($(this).parents('.wide_tall').length > 0) 
				$(this).parent().find('.item-count .current').html($(this).parents('article').find('.nectar-flickity .cell.is-selected').index()+1);
			else 
				$(this).parent().find('.item-count .current').html($(this).parents('.nectar-flickity').find('.cell.is-selected').index()+1);
		});

		$('body').on('mouseover','.flickity-prev-next-button.next',function(){
			$(this).parent().find('.flickity-prev-next-button.previous, .item-count').addClass('next-hovered');
		});
		$('body').on('mouseleave','.flickity-prev-next-button.next',function(){
			$(this).parent().find('.flickity-prev-next-button.previous, .item-count').removeClass('next-hovered');
		});
	
	}
/****************twenty twenty******************/
	$('.twentytwenty-container').each(function(){
		var $that = $(this);
		$(this).imagesLoaded(function(){
			$that.twentytwenty();
		});
	});


/***************** Home Slider ******************/

	var sliderAdvanceSpeed = parseInt($('#featured').attr('data-advance-speed'));
	var sliderAnimationSpeed = parseInt($('#featured').attr('data-animation-speed'));
	var sliderAutoplay = parseInt($('#featured').attr('data-autoplay'));
	
	if( isNaN(sliderAdvanceSpeed) ) { sliderAdvanceSpeed = 5500;}
	if( isNaN(sliderAnimationSpeed) ) { sliderAnimationSpeed = 800;}
	
	var $yPos;
	

	var img_urls=[];
	$('[style*="background"]').each(function() {
	    var style = $(this).attr('style');
	    var pattern = /background.*?url\('(.*?)'\)/g
	    var match = pattern.exec(style);
	    if (match) {        
	        img_urls.push(match[1]);
	    }
	});
	
	var imgArray = [];
	
	for(i=0;i<img_urls.length;i++){
		imgArray[i] = new Image();
		imgArray[i].src = img_urls[i];
	}
	 
	
	//home slider height
	var sliderHeight = parseInt($('#featured').attr('data-slider-height'));
	if( isNaN(sliderHeight) ) { sliderHeight = 650 } else { sliderHeight = sliderHeight -12 }; 
	
	////min height if video
	if( $('#featured .video').length > 0 && sliderHeight < 500) sliderHeight = 500;
	
	function customSliderHeight(){
		if(!$('body').hasClass('mobile')){
			$('#featured').attr('style', 'height: '+sliderHeight+'px !important');
			$('#featured article').css('height',sliderHeight+headerPadding2-23+'px')
		}
		else {
			$('#featured').attr('style', 'height: '+sliderHeight+'px');
		}

		//transparent header fix
		if($('#header-outer[data-transparent-header="true"]').length > 0) $('.orbit-wrapper').addClass('transparent-header');
	}
	
	customSliderHeight();
	
	

	
	//take into account header height when calculating the controls and info positioning 
	var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
	var headerPadding = parseInt($('#header-outer').attr('data-padding'));
	var headerPadding2 = parseInt($('#header-outer').attr('data-padding'));
	var extraDef = 10;
	var headerResize = ($('body').hasClass('pp-video-function')) ? '1' : $('#header-outer').attr('data-header-resize');
	var headerResizeOffExtra = 0;
	var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar
	var usingLogoImage = true;
    var mediaElement = ($('.wp-video-shortcode').length > 0) ? 36 : 0;
    var secondaryHeader = ($('#header-outer').attr('data-using-secondary') == '1') ? 32 : 0 ;
    
	if( isNaN(logoHeight) ) { usingLogoImage = false; logoHeight = 30;}
	if( isNaN(headerPadding) ) { headerPadding = 28; headerPadding2 = 28;}
	if( headerResize.length == 0 ) { extraDef = 0; headerResizeOffExtra = headerPadding2; }
    if( $('header#top #logo img').length == 0 ) { logoHeight = 30; }
    
	var $captionPos = (((sliderHeight-70)/2 - $('div.slider-nav span.left span.white').height()/2) + headerPadding2 - headerResizeOffExtra) - 75;
	var $controlsPos = (((sliderHeight-70)/2 - $('div.slider-nav span.left span.white').height()/2) + logoHeight + headerPadding*2 + extraHeight + secondaryHeader) -10;
	
	var $scrollTop = 0;
	var $videoHeight; 
	
	
	function homeSliderInit(){
		$('#featured').orbit({
         	 animation: 'fade',
         	 advanceSpeed: sliderAdvanceSpeed,
         	 animationSpeed: sliderAnimationSpeed, 
         	 timer: sliderAutoplay
    	 });
    	 
    	 customSliderHeight();
		 sliderAfterSetup();
		 
		  //test for slider arrows
	 	 if(!$('body').hasClass('mobile')){
			$('.orbit-wrapper #featured article').css('top', ((- $scrollTop / 5)+logoHeight+headerPadding2+headerResizeOffExtra+extraHeight-extraDef+secondaryHeader)  + 'px');
			$('.orbit-wrapper div.slider-nav span.right, .orbit-wrapper div.slider-nav span.left').html('<span class="white"></span><span class="shadow"></span>');
		 } else {
			$('.orbit-wrapper div.slider-nav span.right').html('<i class="icon-angle-right"></i>');
			$('.orbit-wrapper div.slider-nav span.left').html('<i class="icon-angle-left"></i>');
		 }
	}
	
	//home slider init
	function homeSliderInit2(){
		if($('#featured').length > 0 && $().orbit) {

			$('#featured article .post-title h2 span').show();


			//home slider bg color
			var sliderBackgroundColor = $('#featured').attr('data-bg-color');
			if( sliderBackgroundColor.length == 0 ) sliderBackgroundColor = '#000000'; 
			
			$('#featured article').css('background-color',sliderBackgroundColor);
		
	
			 
			 var $firstBg = $('#featured').find('.slide:first-child > article').attr('style');

		     var pattern = /url\(["']?([^'")]+)['"]?\)/;
		     var match = pattern.exec($firstBg);
	 
		     if (match && match[1].indexOf('.') !== -1) {       
		        var slideImg = new Image();
				slideImg.onload = function(){ 
					homeSliderInit();
				}
				slideImg.src = match[1];
			 } else {
			 	homeSliderInit();
			 }
	 
	    	////add hover effect to slider nav
	    	if($('.slider-nav > span').find('.white').length == 0) {
	    		$('.slider-nav > span').append('<span class="white"></span><span class="shadow"></span>');	
	    	}

	    	////swipe for home slider
	    	if($('body').hasClass('mobile')){
		    	$('#featured h2, #featured .video').swipe({
		    		swipeRight : function(e) {
						$('.slider-nav .left').trigger('click');
						e.stopImmediatePropagation();
						return false;
					 },
					 swipeLeft : function(e) {
						$('.slider-nav .right').trigger('click');
						e.stopImmediatePropagation();
						return false;
					 }    
		    	})
	    	}
	   
		
		}
	}
	homeSliderInit2();
	
	
	
	//inital load
	function sliderAfterSetup(){
		//webkit video fix
		$('#featured .mejs-container').css('width',$('#featured .video').width());
		$('#featured .mejs-container').css('height',$('#featured .video').width()/1.7777);
		//$(window).trigger('resize');
		
		$('body:not(.mobile) .orbit-wrapper #featured .orbit-slide:not(".has-video") article .container').css('top', $captionPos +"px");
		$('body:not(.mobile) .orbit-wrapper #featured .orbit-slide.has-video article .container').css('top', $videoHeight +"px");
		$('body:not(.mobile) .orbit-wrapper .slider-nav > span').css('top', $controlsPos +"px");	
		$('body:not(.mobile) .orbit-wrapper #featured .slide article').css({'top': ((- $scrollTop / 5)+logoHeight+headerPadding2+headerResizeOffExtra+extraHeight-extraDef+secondaryHeader)  + 'px' });
		
		//height fix for when resize on scroll if off
		if(!$('body').hasClass('mobile') && headerResize.length == 0){
			$('#featured article').css('height',sliderHeight-32+'px')
		}
		
		$(window).trigger('resize');
	}
	
	
	function videoSlidePos(){
		$('#featured > div').has('.video').each(function(){
			if( $(window).width() > 1300 ) {
				$('#featured .orbit-slide.has-video .video, #featured .orbit-slide.has-video h2').css('top','0');
				$('#featured .orbit-slide.has-video .post-title > a').css('top','10px');

				$videoHeight = ((sliderHeight-28)/2) - ((410-mediaElement)/2) + headerPadding2 - headerResizeOffExtra;
			}
			
			else if( $(window).width() > 1000 && $(window).width() < 1081 ){
				$('#featured .orbit-slide.has-video .video, #featured .orbit-slide.has-video h2').css('top','0');
				$('#featured .orbit-slide.has-video .post-title > a').css('top','10px');
				
				$videoHeight = ((sliderHeight-28)/2) - ((290-mediaElement)/2) + headerPadding2 - headerResizeOffExtra;
			}
			
			else {
				$videoHeight = ((sliderHeight-28)/2) - ((336-mediaElement)/2) +headerPadding2 - headerResizeOffExtra;
			}
	
		});
	}
	
	videoSlidePos();
	
	//dynamic controls and info positioning
	function controlsAndInfoPos(){
		$scrollTop = $(window).scrollTop();
		
		$('body:not(.mobile) .orbit-wrapper #featured .orbit-slide:not(".has-video") article .container').css({ 
			'opacity' : 1-($scrollTop/(sliderHeight-130)),
			'top' : ($scrollTop*-0.2) + $captionPos +"px"
		});
		
		//video slides
		$('body:not(.mobile) .orbit-wrapper #featured .orbit-slide.has-video article .container').css({ 
			'opacity' : 1-($scrollTop/(sliderHeight-130)),
			'top' : ($scrollTop*-0.2) + $videoHeight +"px"
		});
		
		if($('#boxed').length == 0){
			$('body:not(.mobile) .orbit-wrapper .slider-nav > span').css({ 
				'opacity' : 1-($scrollTop/(sliderHeight-130)),
				'top' : ($scrollTop*-0.4) + $controlsPos +"px"
			});
		}
		
	}
	
	controlsInit();
	function controlsInit(){

		if($('#boxed').length > 0) {
			if(1-$scrollTop/(sliderHeight-$controlsPos-20) >= 0){
				$(window).off('scroll',hideControls);
				$(window).on('scroll',showControls);
			} else {
				$(window).off('scroll',showControls);
				$(window).on('scroll',hideControls);
			}
		} else {
			$(window).off('scroll',showControls);
			$(window).off('scroll',hideControls);
		}
	
	}
	
	function showControls(){

		if(1-$scrollTop/(sliderHeight-$controlsPos-20) >= 0){
			$('body:not(.mobile) .orbit-wrapper .slider-nav > span.left').stop(true,true).animate({ 'left' : '0px'},450,'easeOutCubic');
			if($('body').attr('data-smooth-scrolling')=='1'){
				$('body:not(.mobile) .orbit-wrapper .slider-nav > span.right').stop(true,true).animate({ 'right' : '15px'},450,'easeOutCubic');
			} else {
				$('body:not(.mobile) .orbit-wrapper .slider-nav > span.right').stop(true,true).animate({ 'right' : '0px'},450,'easeOutCubic');
			}
			$(window).off('scroll',showControls);
			$(window).on('scroll',hideControls);
		}
	}
	
	function hideControls(){
		
		if(1-$scrollTop/(sliderHeight-$controlsPos-20) < 0){
			$('body:not(.mobile) .orbit-wrapper .slider-nav > span.left').stop(true,true).animate({ 'left' : '-80px'},450,'easeOutCubic');
			$('body:not(.mobile) .orbit-wrapper .slider-nav > span.right').stop(true,true).animate({ 'right' : '-80px'},450,'easeOutCubic');
			$(window).off('scroll',hideControls);
			$(window).on('scroll',showControls);
		}
		
	}
	

	function homeSliderParallaxScroll(){
		    
	    //hide video to not mess up parallax section
	    $('#featured .mejs-mediaelement, #featured .iframe-embed').each(function(){
	    
	    	if( $(this).parents('.container').css('opacity') <= 0){
		    	$(this).css('visibility','hidden').hide();
		    } else {
		    	$(this).css('visibility','visible').show();
		    }
	    });
	    
	    if(!$('body').hasClass('mobile')){
	    	
	    	controlsAndInfoPos();
			$('body:not(.mobile) .orbit-wrapper #featured .slide:not(:transparent) article').css({'top': ((- $scrollTop / 5)+logoHeight+headerPadding2+headerResizeOffExtra+extraHeight-extraDef+secondaryHeader)  + 'px' });	
		
		}
	}

	function homeSliderMobile() {

		if(!$('body').hasClass('mobile')){
			$('.orbit-wrapper #featured article').css('top', ((- $scrollTop / 5)+logoHeight+headerPadding2+headerResizeOffExtra+extraHeight-extraDef+secondaryHeader)  + 'px');
			$('.orbit-wrapper div.slider-nav span.right, .orbit-wrapper div.slider-nav span.left').html('<span class="white"></span><span class="shadow"></span>');
		} else {
			$('.orbit-wrapper div.slider-nav span.right').html('<i class="icon-angle-right"></i>');
			$('.orbit-wrapper div.slider-nav span.left').html('<i class="icon-angle-left"></i>');
		}

		videoSlidePos();
		controlsAndInfoPos();
		customSliderHeight();
		
		//height fix for when resize on scroll if off
		if(!$('body').hasClass('mobile') && headerResize.length == 0){
			$('#featured article').css('height',sliderHeight-32+'px')
		}
		
	}


	if( $('#featured').length > 0){
		
		$(window).off('scroll.hsps');
		$(window).on('scroll.hsps',homeSliderParallaxScroll);
				
		//disable parallax for mobile
		$(window).off('resize.hsps');
		$(window).on('resize.hsps',homeSliderMobile);
		
	}

    
    //webkit self-hosted video fix
    $('.jp-video-container .jp-play, jp-video-container .jp-seek-bar').click(function(){
    	$(this).parents('.jp-video-container').prev('.jp-jplayer').find('video').show().css('display','block');
    	$(this).parents('.jp-video-container').prev('.jp-jplayer').find('.jp-jplayer > img').hide();
    });
    
    //mobile video more info
    $('#featured .span_12 a.more-info').click(function(){
    	if( !$(this).find('.btv').is(":visible")){
    		$(this).parent().parent().find('h2, > a').css('opacity',1);
    		$(this).parent().parent().find('.video').stop().animate({'top':'-400px'},800,'easeOutCubic');
	    	$(this).parent().parent().find('h2').stop().animate({'top':'-400px'},800,'easeOutCubic');
	    	$(this).parent().parent().find('> a').stop().animate({'top':'-380px'},800,'easeOutCubic');
	    	$(this).find('.btv').show();
	    	$(this).find('.mi').hide();
    	}
    	else {
    		$(this).parent().parent().find('.video').stop().animate({'top':'0px'},800,'easeOutCubic');
	    	$(this).parent().parent().find('h2').stop().animate({'top':'0px'},800,'easeOutCubic');
	    	$(this).parent().parent().find('> a').stop().animate({'top':'0px'},800,'easeOutCubic');
	    	$(this).find('.mi').show();
	    	$(this).find('.btv').hide();
    	}
    	
    	return false;
    });

/***************** Superfish ******************/
	
	function initSF(){

		$(".sf-menu").superfish({
			 delay: 700,
			 speed: 'fast',
			 speedOut:      'fast',             
			 animation:   {opacity:'show'}
		}); 

	}
	
	var $navLeave;
	
	function addOrRemoveSF(){
		
		if( window.innerWidth < 1000 && $('body').attr('data-responsive') == '1'){
			$('body').addClass('mobile');
			$('header#top nav').hide();
		}
		else {
			$('body').removeClass('mobile');
			$('header#top nav').show();
			$('#mobile-menu').hide();
			
			//recalc height of dropdown arrow
			$('.sf-sub-indicator').css('height',$('a.sf-with-ul').height());
		}

		//add specific class if on device for better tablet tracking
		if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) $('body').addClass('using-mobile-browser');

	}
	
	//addOrRemoveSF();
	//initSF();
	
	$(window).resize(addOrRemoveSF);

	
	function SFArrows(){

		//set height of dropdown arrow
		$('.sf-sub-indicator').css('height',$('a.sf-with-ul').height());
	}
	
	SFArrows();
	

	//deactivate hhun on phone
	if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
		$('body').attr('data-hhun','0');


/***************** Caroufredsel ******************/
	
	function standardCarouselInit() {
		$('.carousel:not(".clients")').each(function(){
	    	var $that = $(this); 
	    	var maxCols = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : 3 ;
	    	var scrollNum = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : '' ;
	    	var colWidth = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 500 : 453 ;
	    	var scrollSpeed, easing;
	    	var $autoplayBool = ($(this).attr('data-autorotate') == 'true') ? true : false;
			
			if($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
				if($(this).find('li').length % 3 === 0) {
					var $themeSkin = true;
					var $themeSkin2 = true;
				} else {
					var $themeSkin = false;
					var $themeSkin2 = true;
				}
	
			} else {
				var $themeSkin = true;
				var $themeSkin2 = true;
			}

			(parseInt($(this).attr('data-scroll-speed'))) ? scrollSpeed = parseInt($(this).attr('data-scroll-speed')) : scrollSpeed = 700;
			($(this).attr('data-easing').length > 0) ? easing = $(this).attr('data-easing') : easing = 'linear';
			
			
			var $element = $that;
			if($that.find('img').length == 0) $element = $('body');
			
			imagesLoaded($element,function(instance){
	
				
		    	$that.carouFredSel({
		    		circular: $themeSkin,
		    		infinite: $themeSkin2,
		    		height : 'auto',
		    		responsive: true,
			        items       : {
						width : colWidth,
				        visible     : {
				            min         : 1,
				            max         : maxCols
				        }
				    },
				    swipe       : {
				        onTouch     : true,
				        onMouse         : true,
				        options      : {
				        	excludedElements: "button, input, select, textarea, .noSwipe",
				        	tap: function(event, target){ if($(target).attr('href') && !$(target).is('[target="_blank"]') && !$(target).is('[rel^="prettyPhoto"]') && !$(target).is('.magnific-popup') && !$(target).is('.magnific')) window.open($(target).attr('href'), '_self'); }
				        },
				        onBefore : function(){
				    		//hover effect fix
				    		$that.find('.work-item').trigger('mouseleave');
				    		$that.find('.work-item .work-info a').trigger('mouseup');
				    	}
				    },
				    scroll: {
				    	items			: scrollNum,
				    	easing          : easing,
			            duration        : scrollSpeed,
			            onBefore	: function( data ) {
			            	
			            	 if($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
			            	 	$that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('li').length / $that.triggerHandler("currentVisible").length));

			            	 }	
						},
						onAfter	: function( data ) {
			            	 if($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
			            	 	$that.parents('.carousel-wrap').find('.item-count .current').html( $that.triggerHandler('currentPage') +1);
			            	 	$that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('li').length / $that.triggerHandler("currentVisible").length));

			            	 }	
						}

				    },
			        prev    : {
				        button  : function() {
				           return $that.parents('.carousel-wrap').find('.carousel-prev');
				        }
			    	},
				    next    : {
			       		button  : function() {
				           return $that.parents('.carousel-wrap').find('.carousel-next');
				        }
				    },
				    auto    : {
				    	play: $autoplayBool
				    }
			    }, { transition: true }).animate({'opacity': 1},1300);
			    
			    $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');

			    if($that.parents('.carousel-wrap').attr('data-full-width') == 'true') $that.parents('.carousel-outer').css('overflow','visible');

			    //add count for non full width ascend skin
			    if($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
					$('<div class="item-count"><span class="current">1</span>/<span class="total">'+$that.find('li').length / $that.triggerHandler("currentVisible").length +'</span></div>').insertAfter($that.parents('.carousel-wrap').find('.carousel-prev'));
				}
			    
			    $that.addClass('finished-loading');

			    carouselHeightCalcs();
			    
			    //reinit panr
			    if(!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
					$(".portfolio-items.carousel .work-item.style-3 img").panr({
						scaleDuration: .28
					}); 
					$(".portfolio-items:not(.carousel) .work-item.style-3-alt img").panr({ scaleDuration: .28, sensitivity: 12.6, scaleTo: 1.08, panDuration: 3 }); 
				}
				
			    
		     });//images loaded
		     	     
	    });//each
    }
    if($('.carousel').length > 0) standardCarouselInit();




    function productCarouselInit() {
		$('.products-carousel').each(function(){
	    	var $that = $(this).find('ul'); 
	    	var maxCols = 'auto';
	    	var scrollNum = 'auto';
	    	var colWidth = ($(this).parents('.full-width-content ').length > 0) ? 400 : 353 ;
			var scrollSpeed = 800;
			var easing = 'easeInOutQuart';
			
			
			var $element = $that;
			if($that.find('img').length == 0) $element = $('body');
			
			//controls on hover
			$(this).append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>')

			imagesLoaded($element,function(instance){
	
				
		    	$that.carouFredSel({
		    		circular: true,
		    		responsive: true,
			        items       : {
						width : colWidth,
				        visible     : {
				            min         : 1,
				            max         : maxCols
				        }
				    },
				    swipe       : {
				        onTouch     : true,
				        onMouse         : true,
				        options      : {
				        	excludedElements: "button, input, select, textarea, .noSwipe",
				        	tap: function(event, target){ 
				        		if($(target).attr('href') && !$(target).is('[target="_blank"]') && !$(target).hasClass('add_to_wishlist') && !$(target).hasClass('add_to_cart_button') && !$(target).is('[rel^="prettyPhoto"]')) 
				        			window.open($(target).attr('href'), '_self'); 
				        		if($(target).parent().attr('href') && !$(target).parent().is('[target="_blank"]') && !$(target).parent().hasClass('add_to_wishlist') && !$(target).parent().hasClass('add_to_cart_button') && !$(target).parent().is('[rel^="prettyPhoto"]')) 
				        			window.open($(target).parent().attr('href'), '_self'); 
				        	}
				        },
				        onBefore : function(){
				    		//hover effect fix
				    		$that.find('.product-wrap').trigger('mouseleave');
				    		$that.find('.product a').trigger('mouseup');
				    	}
				    },
				    scroll: {
				    	items			: scrollNum,
				    	easing          : easing,
			            duration        : scrollSpeed
				    },
			        prev    : {
				        button  : function() {
				           return $that.parents('.carousel-wrap').find('.carousel-prev');
				        }
			    	},
				    next    : {
			       		button  : function() {
				           return $that.parents('.carousel-wrap').find('.carousel-next');
				        }
				    },
				    auto    : {
				    	play: false
				    }
			    }).animate({'opacity': 1},1300);
			    
			    $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
			    
			    $that.addClass('finished-loading');
			    fullWidthContentColumns();
			    $(window).trigger('resize');

		     });//images loaded
		     	     
	    });//each
    }
    if($('.products-carousel').length > 0) productCarouselInit();




    
    //fullwidth carousel swipe link fix
    function fwCarouselLinkFix() {
	    var $mousePosStart = 0;
	    var $mousePosEnd = 0;
	    $('.carousel-wrap .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a').mousedown(function(e){
	    	$mousePosStart = e.clientX;
	    });
	    
	    $('.carousel-wrap .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a').mouseup(function(e){
	    	$mousePosEnd = e.clientX;
	    });
	    
	    $('.carousel-wrap .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a').click(function(e){
	    	if(Math.abs($mousePosStart - $mousePosEnd) > 10)  return false;
	    });
	}
	fwCarouselLinkFix();
    
     
	function carouselHeightCalcs(){
		
		//recent work carousel
		$('.carousel.portfolio-items.finished-loading').each(function(){

			var bottomSpace = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true' && $(this).find('.style-2, .style-3, .style-4').length > 0) ? 0 : 28 ;
			
			var tallestMeta = 0;
			
			$(this).find('> li').each(function(){
				($(this).find('.work-meta').height() > tallestMeta) ? tallestMeta = $(this).find('.work-meta').height() : tallestMeta = tallestMeta;
			});	
    	 
     		$(this).parents('.caroufredsel_wrapper').css({
     			'height' : ($(this).find('.work-item').outerHeight() + tallestMeta + bottomSpace -2) + 'px'
     		});

     		 if($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
        	 	$(this).parents('.carousel-wrap').find('.item-count .current').html(Math.ceil(($(this).triggerHandler("currentPosition")+1)/$(this).triggerHandler("currentVisible").length));
        	 	$(this).parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($(this).find('li').length / $(this).triggerHandler("currentVisible").length));
        	 }	
   	  	});
   	  	
   	  	//standard carousel
   	  	$('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function(){
			
			var tallestColumn = 0;
			
			$(this).find('> li').each(function(){
				($(this).height() > tallestColumn) ? tallestColumn = $(this).height() : tallestColumn = tallestColumn;
			});	

         	$(this).css('height',tallestColumn + 5);
         	$(this).parents('.caroufredsel_wrapper').css('height',tallestColumn + 5);

         	 if($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
        	 	$(this).parents('.carousel-wrap').find('.item-count .current').html(Math.ceil(($(this).triggerHandler("currentPosition")+1)/$(this).triggerHandler("currentVisible").length));
        	 	$(this).parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($(this).find('li').length / $(this).triggerHandler("currentVisible").length));
        	 }	
			
   	  	});
   	  	
	}


	function clientsCarouselInit(){
	     $('.carousel.clients').each(function(){
	    	var $that = $(this);
	    	var columns; 
	    	var $autoRotate = (!$(this).hasClass('disable-autorotate')) ? true : false;
	    	(parseInt($(this).attr('data-max'))) ? columns = parseInt($(this).attr('data-max')) : columns = 5;
	    	if($(window).width() < 690 && $('body').attr('data-responsive') == '1') { columns = 2; $(this).addClass('phone') }
	    	
	    	var $element = $that;
			if($that.find('img').length == 0) $element = $('body');
			
			imagesLoaded($element,function(instance){
	    		
		    	$that.carouFredSel({
			    		circular: true,
			    		responsive: true, 
				        items       : {
							
							height : $that.find('> div:first').height(),
							width  : $that.find('> div:first').width(),
					        visible     : {
					            min         : 1,
					            max         : columns
					        }
					    },
					    swipe       : {
					        onTouch     : true,
					        onMouse         : true
					    },
					    scroll: {
					    	items           : 1,
					    	easing          : 'easeInOutCubic',
				            duration        : '800',
				            pauseOnHover    : true
					    },
					    auto    : {
					    	play            : $autoRotate,
					    	timeoutDuration : 2700
					    }
			    }).animate({'opacity': 1},1300);
			    
			    $that.addClass('finished-loading');

			    $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
			     

			    $(window).trigger('resize');
			    
		    
		    });
	
	    });
    }
   if($('.carousel').length > 0)  clientsCarouselInit();
    

    function clientsCarouselHeightRecalc(){

    	var tallestImage = 0;
		  			
    	 $('.carousel.clients.finished-loading').each(function(){
    	 	
    	 	$(this).find('> div').each(function(){
				($(this).height() > tallestImage) ? tallestImage = $(this).height() : tallestImage = tallestImage;
			});	
    	 	
         	$(this).css('height',tallestImage);
         	$(this).parent().css('height',tallestImage);
         });
    }


    //carousel grabbing class
    function carouselfGrabbingClass() {
	    $('body').on('mousedown','.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){
	    	$(this).addClass('active');
	    });
	    
	    $('body').on('mouseup','.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-item .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){
	    	$(this).removeClass('active');
	    });
	}
	carouselfGrabbingClass();
	    

	//ascend arrow hover class
	$('body.ascend').on('mouseover','.carousel-next',function(){
		$(this).parent().find('.carousel-prev, .item-count').addClass('next-hovered');
	});
	$('body.ascend').on('mouseleave','.carousel-next',function(){
		$(this).parent().find('.carousel-prev, .item-count').removeClass('next-hovered');
	});

	//fadein for clients / carousels
	function clientsFadeIn() {

		$('.clients.fade-in-animation').each(function() {

			var $that = $(this);
			var waypoint = new Waypoint({
 			element: $that,
 			 handler: function(direction) {
				
				if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
					 waypoint.destroy();
					return;
				}

				 $that.find('> div').each(function(i){
					$(this).delay(i*80).transition({'opacity':"1"},450);
				});
				
				
				//add the css transition class back in after the aniamtion is done
				setTimeout(function(){ $that.addClass('completed'); },($that.find('> div').length*80) + 450);
			

				$that.addClass('animated-in');
				waypoint.destroy();
			},
			offset: 'bottom-in-view'

			}); 
		}); 
	}
	 
	if($('.nectar-box-roll').length == 0) clientsFadeIn();
	
	
/*-------------------------------------------------------------------------*/
/*	2.	Helper Functions
/*-------------------------------------------------------------------------*/

	jQuery.fn.setCursorPosition = function(position){
	    if(this.lengh == 0) return this;
	    return $(this).setSelection(position, position);
	}
	
	jQuery.fn.setSelection = function(selectionStart, selectionEnd) {
	    if(this.lengh == 0) return this;
	    input = this[0];
	
	    if (input.createTextRange) {
	        var range = input.createTextRange();
	        range.collapse(true);
	        range.moveEnd('character', selectionEnd);
	        range.moveStart('character', selectionStart);
	        range.select();
	    } else if (input.setSelectionRange) {
	        input.focus();
	        input.setSelectionRange(selectionStart, selectionEnd);
	    }
	
	    return this;
	}
	
	

	$.extend($.expr[':'], {
	    transparent: function(elem, i, attr){
	      return( $(elem).css("opacity") === "0" );
	    }
	});
	

	function getQueryParams(qs) {
	    qs = qs.split("+").join(" ");
	    var params = {},
	        tokens,
	        re = /[?&]?([^=]+)=([^&]*)/g;

	    while (tokens = re.exec(qs)) {
	        params[decodeURIComponent(tokens[1])]
	            = decodeURIComponent(tokens[2]);
	    }

	    return params;
	}

	var $_GET = getQueryParams(document.location.search);

	
	//count
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
	
	
	
	
/*-------------------------------------------------------------------------*/
/*	3.	Shortcode Stuff
/*-------------------------------------------------------------------------*/


/***************** Milestone Counter ******************/
	
	function milestoneInit() {
		$('.nectar-milestone').each(function() {
	
			//symbol
			if($(this).is('[data-symbol]')) {
				if($(this).attr('data-symbol-pos') == 'before') {
					$(this).find('.number').prepend('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>');
				} else {
					$(this).find('.number').append('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>');
				}

				$symbol_size = (  $(this).attr('data-symbol-size') == $(this).find('.number').attr('data-number-size') && $(this).attr('data-symbol-alignment') == 'superscript' ) ? 32 :  parseInt($(this).attr('data-symbol-size'));
			
				$(this).find('.symbol-wrap').css({'font-size': $symbol_size + 'px', 'line-height': $symbol_size + 'px'});
			}

			$(this).find('.number').css({'font-size': $(this).find('.number').attr('data-number-size') +'px', 'line-height': $(this).find('.number').attr('data-number-size') + 'px'});
		});
		
		if(!$('body').hasClass('mobile')) {
			

			//blur effect
			var $blurCssString = '';
			$('.nectar-milestone.motion_blur').each(function(i){
					
				$(this).addClass('instance-'+i);

				var $currentColor = $(this).find('.number').css('color');
				var colorInt = parseInt($currentColor.substring(1),16);
		   		var R = (colorInt & 0xFF0000) >> 16;
		    	var G = (colorInt & 0x00FF00) >> 8;
		   		var B = (colorInt & 0x0000FF) >> 0;
		   		
		   		var $rgbaColorStart = 'rgba('+R+','+G+','+B+',0.2)';
				var $rgbaColorEnd = 'rgba('+R+','+G+','+B+',1)';
				var $numberSize = parseInt($(this).find('.number').attr('data-number-size'));

				$blurCssString += '@keyframes motion-blur-number-'+i+' { ' +
				   ' 0% { '+
				   		'opacity: 0;'+
						'color: '+$rgbaColorStart+'; '+
   						'text-shadow: 0 '+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/4+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/4+'px 0 '+$rgbaColorStart+'; '+
    					'transform: translateZ(0px) translateY(-100%); '+
    					'-webkit-transform: translateZ(0px) translateY(-100%); '+
    				'} '+
    				'33% { opacity: 1 }' +
    				'100% { '+
						'color: '+$rgbaColorEnd+'; '+
   						'text-shadow: none; '+
    					'transform: translateZ(0px) translateY(0px); '+
    					'-webkit-transform: translateZ(0px) translateY(0px); '+
    				'} '+
    			'} '+
    			'@-webkit-keyframes motion-blur-number-'+i+' { ' +
				   ' 0% { '+
				  	    'opacity: 0;'+
						'color: '+$rgbaColorStart+'; '+
   						'text-shadow: 0 '+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/4+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/4+'px 0 '+$rgbaColorStart+'; '+
    					'transform: translateZ(0px) translateY(-100%); '+
    					'-webkit-transform: translateZ(0px) translateY(-100%); '+
    				'} '+
    				'33% { opacity: 1 }' +
    				'100% { '+
						'color: '+$rgbaColorEnd+'; '+
   						'text-shadow: none; '+
    					'transform: translateZ(0px) translateY(0px); '+
    					'-webkit-transform: translateZ(0px) translateY(0px); '+
    				'} '+
    			'} '+
    			'.nectar-milestone.motion_blur.instance-'+i+' .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-'+i+'; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-'+i+'; } ';
    			
    			//separate each character into spans
    			$symbol = $(this).find('.symbol-wrap').clone();
    			$(this).find('.symbol-wrap').remove();
    			var characters = $(this).find('.number').text().split("");
    			$this = $(this).find('.number');
				$this.empty();
    			$.each(characters, function (i, el) {
				    $this.append("<span>" + el + "</span");
				});

				//handle symbol
				if($(this).has('[data-symbol]')) {
	    			if($(this).attr('data-symbol-pos') == 'after') {
	    				$this.append($symbol);
	    			} else {
	    				$this.prepend($symbol);
	    			}
	    		}
				
			});

			var head = document.head || document.getElementsByTagName('head')[0];
				var style = document.createElement('style');

				style.type = 'text/css';
			if (style.styleSheet){
			  style.styleSheet.cssText = $blurCssString;
			} else {
			  style.appendChild(document.createTextNode($blurCssString));
			}

			head.appendChild(style);


			//activate
			milestoneWaypoint();

		}

	}

	function milestoneWaypoint() {
		$('.nectar-milestone').each(function() {
			//animation
			var $offset = ($(this).hasClass('motion_blur')) ? '90%' : '105%';


			var $that = $(this);
			var waypoint = new Waypoint({
	 			element: $that,
	 			 handler: function(direction) {

	 			 	if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
					     waypoint.destroy();
					     return;
					}

	 			 	var $endNum = parseInt($that.find('.number span:not(.symbol)').text());
					if(!$that.hasClass('motion_blur')) {
						$that.find('.number span:not(.symbol)').countTo({
							from: 0,
							to: $endNum,
							speed: 1500,
							refreshInterval: 30
						});
					} else {
						$that.find('span').each(function(i){
							var $that = $(this);
							setTimeout(function(){ $that.addClass('in-sight'); },200*i);
						});
					}


					$that.addClass('animated-in');
					waypoint.destroy();
				},
				offset: 'bottom-in-view'

			}); 

		}); 
	}

	var $animationOnScrollTimeOut = ($('.nectar-box-roll').length > 0) ? 850: 125;	
	if($('.nectar-box-roll').length == 0) setTimeout(function(){  milestoneInit(); },125); 
	
/***************** Tabbed ******************/
	
	$tabbedClickCount = 0;
	$('body').on('click','.tabbed > ul li:not(.cta-button) a',function(){
		var $id = $(this).parents('li').index()+1;
		
		if(!$(this).hasClass('active-tab') && !$(this).hasClass('loading')){
			$(this).parents('ul').find('a').removeClass('active-tab');
			$(this).addClass('active-tab');
			
			$(this).parents('.tabbed').find('> div:not(.clear)').css({'visibility':'hidden','position':'absolute','opacity':'0','left':'-9999px','display':'none'});
			$(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').css({'visibility':'visible', 'position' : 'relative','left':'0','display':'block'}).stop().transition({'opacity':1},300);
			
			if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+') .iframe-embed').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type('+$id+') .portfolio-items').length > 0) setTimeout(function(){ $(window).resize(); },10); 
		}
		
		//waypoint checking
		if($tabbedClickCount != 0) {
			if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.nectar-progress-bar').length > 0 ) 
				progressBars();
			if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('img.img-with-animation').length > 0 ||
			   $(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.col.has-animation').length > 0  || 
			   $(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.wpb_column.has-animation').length > 0 ) 
				colAndImgAnimations();
			if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.nectar-milestone').length > 0 ) 
				milestoneWaypoint();
			if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.nectar-fancy-ul').length > 0 ) 
				nectar_fancy_ul_init();
			if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.nectar-split-heading').length > 0 ) 
				splitLineHeadings();
			if($(this).parents('.wpb_row').length > 0) {
				if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.vc_pie_chart').length > 0  ||
				   $(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.wp-video-shortcode').length > 0 ||
				   $(this).parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.twentytwenty-container').length > 0 ||
				   $(this).parents('.wpb_row').next().hasClass('parallax_section'))
					$(window).trigger('resize');
			}
		}

		//fix columns inside tabs
		$(this).parents('.tabbed').find('.wpb_row').each(function(){
			if(typeof $(this).find('[class*="vc_col-"]').first().offset() != 'undefined') {
				
				var $firstChildOffset = $(this).find('[class*="vc_col-"]').first().offset().left;
				$(this).find('[class*="vc_col-"]').each(function(){
					$(this).removeClass('no-left-margin');
					if($(this).offset().left < $firstChildOffset + 15) { 
						$(this).addClass('no-left-margin');
					} else {
						$(this).removeClass('no-left-margin');
					}
				});
			}
		});

		$tabbedClickCount++;

		return false;
	});
	
	//make sure the tabs don't have a nectar slider - we'll init this after the sliders load in that case
	function tabbedInit(){ 
		$('.tabbed').each(function(){
			if($(this).find('.swiper-container').length == 0 && $(this).find('.testimonial_slider').length == 0 && $(this).find('.portfolio-items:not(".carousel")').length == 0 && $(this).find('.wpb_gallery .portfolio-items').length == 0 && $(this).find('iframe').length == 0){
				$(this).find('> ul li:first-child a').click();
			}	
			if($(this).find('.testimonial_slider').length > 0 || $(this).find('.portfolio-items:not(".carousel")').length > 0 || $(this).find('.wpb_gallery .portfolio-items').length > 0 || $(this).find('iframe').length > 0 ){
				var $that = $(this);
				
				$(this).find('.wpb_tab').show().css({'opacity':0,'height':'1px'});
				$(this).find('> ul li a').addClass('loading');
				
				setTimeout(function(){ 
					$that.find('.wpb_tab').hide().css({'opacity':1,'height':'auto'}); 
					$that.find('> ul li a').removeClass('loading');
					$that.find('> ul li:first-child a').click(); 
				},900);
			}
		});
	}
	tabbedInit();

	//deep linking
	function tabbbedDeepLinking(){
		if(typeof $_GET['tab'] != 'undefined'){
			$('.wpb_tabs_nav').each(function(){

				$(this).find('li').each(function(){
					var $currentText = $(this).find('a').text();
					var $getText = $_GET['tab'];
					var $that = $(this);

					$currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
					$getText = $getText.replace(/\s+/g, '-').toLowerCase();

					if($currentText == $getText)  { 

			          $(this).find('a').click(); 
			           setTimeout(function(){ 
			              $that.find('a').click(); 
			           },901);
			        }
				})
			});
		}
	}
	tabbbedDeepLinking();

/***************** Toggle ******************/
	
	//toggles
	$('body').on('click','.toggle h3 a', function(){
		
		if(!$(this).parents('.toggles').hasClass('accordion')) { 
			$(this).parents('.toggle').find('> div').slideToggle(300);
			$(this).parents('.toggle').toggleClass('open');
			
			//switch icon
			if( $(this).parents('.toggle').hasClass('open') ){
				$(this).find('i').attr('class','icon-minus-sign');
			} else {
				$(this).find('i').attr('class','icon-plus-sign');
			}

			if($(this).parents('.toggle').find('> div .iframe-embed').length > 0 && $(this).parents('.toggle').find('> div .iframe-embed iframe').height() == '0') responsiveVideoIframes();
			if($(this).parents('.full-width-content').length > 0) setTimeout(function(){ fullWidthContentColumns(); },300);
			return false;
		}
	});
	
	//accordion
	$('body').on('click','.accordion .toggle h3 a', function(){
		
		if($(this).parents('.toggle').hasClass('open')) return false;
		
		$(this).parents('.toggles').find('.toggle > div').slideUp(300);
		$(this).parents('.toggles').find('.toggle h3 a i').attr('class','icon-plus-sign');
		$(this).parents('.toggles').find('.toggle').removeClass('open');
		
		$(this).parents('.toggle').find('> div').slideDown(300);
		$(this).parents('.toggle').addClass('open');
		
		//switch icon
		if( $(this).parents('.toggle').hasClass('open') ){
			$(this).find('i').attr('class','icon-minus-sign');
		} else {
			$(this).find('i').attr('class','icon-plus-sign');
		}

		if($(this).parents('.full-width-content').length > 0) { 
			clearTimeout($t);
			var $t = setTimeout(function(){ fullWidthContentColumns(); },400);
		}
		
		return false;
	});
	
	//accordion start open
	function accordionInit(){ 
		$('.accordion').each(function(){
			$(this).find('> .toggle').first().addClass('open').find('> div').show();
			$(this).find('> .toggle').first().find('a i').attr('class','icon-minus-sign');
		});
		
		
		$('.toggles').each(function(){
			
			var $isAccordion = ($(this).hasClass('accordion')) ? true : false;
			
			$(this).find('.toggle').each(function(){
				if($(this).find('> div .testimonial_slider').length > 0 || $(this).find('> div iframe').length > 0) {
					var $that = $(this);
					$(this).find('> div').show().css({'opacity':0,'height':'1px', 'padding':'0'});
					
					testimonialHeightResize();
					
					setTimeout(function(){
						$that.find('> div').hide().css({'opacity':1,'height':'auto', 'padding':'10px 14px'}); 
						if($isAccordion == true && $that.index() == 0) $that.find('> div').slideDown(300);
					},900);
				} 
			});
		})
	}
	accordionInit();

	//deep linking
	function accordionDeepLinking(){
		if(typeof $_GET['toggle'] != 'undefined'){
			$('.toggles').each(function(){

				$(this).find('.toggle').each(function(){
					var $currentText = $(this).find('h3 a').clone();
					var $getText = $_GET['toggle'];

					$($currentText).find('i').remove();
					$currentText = $currentText.text();
					$currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
					$getText = $getText.replace(/\s+/g, '-').toLowerCase();

					if($currentText == $getText) $(this).find('h3 a').click();
				});
			});
		}
	}
	accordionDeepLinking();

/***************** Button ******************/
	
	$.cssHooks.color = {
	    get: function(elem) {
	        if (elem.currentStyle)
	            var color = elem.currentStyle["color"];
	        else if (window.getComputedStyle)
	            var color = document.defaultView.getComputedStyle(elem,
	                null).getPropertyValue("color");
	        if (color.search("rgb") == -1)
	            return color;
	        else {
	            color = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	            function hex(x) {
	                return ("0" + parseInt(x).toString(16)).slice(-2);
	            }
	            if(color) {
	            	return "#" + hex(color[1]) + hex(color[2]) + hex(color[3]);
	            }
	        }
	    }
	}

	$.cssHooks.backgroundColor = {
	    get: function(elem) {
	        if (elem.currentStyle)
	            var bg = elem.currentStyle["backgroundColor"];
	        else if (window.getComputedStyle)
	            var bg = document.defaultView.getComputedStyle(elem,
	                null).getPropertyValue("background-color");
	        if (bg.search("rgb") == -1)
	            return bg;
	        else {
	            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	            function hex(x) {
	                return ("0" + parseInt(x).toString(16)).slice(-2);
	            }
	            if(bg) {
	            	return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
	            }
	        }
	    }
	}
	
	function shadeColor(hex, lum) {

	  // validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;

		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}

		return rgb;
	}

	//color
	function coloredButtons() {
		$('.nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]').each(function(){
			
			$(this).css('visibility','visible');
			
			//if($(this).attr('data-color-override') != 'false'){

				if($(this).attr('data-color-override') != 'false') {
					var $color = $(this).attr('data-color-override') ;
				} else {
					if($(this).parents('.dark').length > 0) 
						var $color = '#000000';
					else 
						var $color = '#ffffff';
				}

				if(!$(this).hasClass('see-through-3')) $(this).css('color',$color);
				$(this).find('i').css('color',$color);
				
				var colorInt = parseInt($color.substring(1),16);
				var $hoverColor = ($(this).has('[data-hover-color-override]')) ? $(this).attr('data-hover-color-override') : 'no-override';
				var $hoverTextColor = ($(this).has('[data-hover-text-color-override]')) ? $(this).attr('data-hover-text-color-override') : '#fff';
				
		   		var R = (colorInt & 0xFF0000) >> 16;
		    	var G = (colorInt & 0x00FF00) >> 8;
		   		var B = (colorInt & 0x0000FF) >> 0;
		   		
		   		$opacityStr = ($(this).hasClass('see-through-3')) ? '1': '0.75';

				$(this).css('border-color','rgba('+R+','+G+','+B+','+$opacityStr+')');
				
				if($(this).hasClass('see-through')) {
					$(this).hover(function(){
						$(this).css('border-color','rgba('+R+','+G+','+B+',1)');
					},function(){
						$(this).css('border-color','rgba('+R+','+G+','+B+','+$opacityStr+')');
					});
				} else {
					
					$(this).find('i').css('color', $hoverTextColor);
					
					if($hoverColor != 'no-override'){
						$(this).hover(function(){
				
							$(this).css({
								'border-color': $hoverColor,
								'background-color': $hoverColor,
								'color': $hoverTextColor
							});
						},function(){
							$opacityStr = ($(this).hasClass('see-through-3')) ? '1': '0.75';

							if(!$(this).hasClass('see-through-3')) {
								$(this).css({
									'border-color':'rgba('+R+','+G+','+B+','+$opacityStr+')',
									'background-color': 'transparent',
									'color': $color
								});
							} else {
								$(this).css({
									'border-color':'rgba('+R+','+G+','+B+','+$opacityStr+')',
									'background-color': 'transparent'
								});
							}
						});
					
					} else {
						$(this).hover(function(){
							$(this).css({
								'border-color': $hoverColor,
								'color': $hoverTextColor
							});
						},function(){
							$opacityStr = ($(this).hasClass('see-through-3')) ? '1': '0.75';
							$(this).css({
								'border-color':'rgba('+R+','+G+','+B+','+$opacityStr+')',
								'color':  $hoverTextColor
							});
						});
					
					}
			//	}
			
			}
		});
		
		$('.nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]').each(function(){
			
			$(this).css('visibility','visible');
			
			if($(this).attr('data-color-override') != 'false'){
				
				var $color = $(this).attr('data-color-override');
				$(this).removeClass('accent-color').removeClass('extra-color-1').removeClass('extra-color-2').removeClass('extra-color-3');
				$(this).css('background-color',$color);
				
			}
			
		});


		//solid color tilt 
		if($('.swiper-slide .solid_color_2').length > 0 || $('.tilt-button-inner').length > 0) {

			var $tiltButtonCssString = '';

			$('.swiper-slide .solid_color_2 a').each(function(i){
				
				$(this).addClass('instance-'+i);

				if($(this).attr('data-color-override') != 'false') {
					var $color = $(this).attr('data-color-override');
				} else {
					if($(this).parents('.dark').length > 0) 
						var $color = '#000000';
					else 
						var $color = '#ffffff';
				}

				$(this).css('color',$color);
				$(this).find('i').css('color',$color);
				
				var $currentColor = $(this).css('background-color');
				var $topColor = shadeColor($currentColor, 0.13);
				var $bottomColor = shadeColor($currentColor, -0.15);
	
				$tiltButtonCssString += '.swiper-slide .solid_color_2 a.instance-'+i + ':after { background-color: '+$topColor+';  }' + ' .swiper-slide .solid_color_2 a.instance-'+i + ':before { background-color: '+$bottomColor+'; } ';

			});


			$('.tilt-button-wrap a').each(function(i){
				
				$(this).addClass('instance-'+i);

				var $currentColor = $(this).css('background-color');

				if($(this).attr('data-color-override') != 'false') {
					var $color = $(this).attr('data-color-override');
					$(this).css('background-color',$color);
					$currentColor = $color;
				} 
			
				var $topColor = shadeColor($currentColor, 0.13);
				var $bottomColor = shadeColor($currentColor, -0.15);
	
				$tiltButtonCssString += '.tilt-button-wrap a.instance-'+i + ':after { background-color: '+$topColor+';  }' + ' .tilt-button-wrap a.instance-'+i + ':before { background-color: '+$bottomColor+'; } ';

			});

			var head = document.head || document.getElementsByTagName('head')[0];
   			var style = document.createElement('style');

   			style.type = 'text/css';
			if (style.styleSheet){
			  style.styleSheet.cssText = $tiltButtonCssString;
			} else {
			  style.appendChild(document.createTextNode($tiltButtonCssString));
			}

			head.appendChild(style);
		}

	}

	coloredButtons();


	//large icon hover
	function largeIconHover(){
		$('.icon-3x').each(function(){
			$(this).closest('.col').hover(function(){
				$(this).find('.icon-3x').addClass('hovered')
			},function(){
				$('.icon-3x').removeClass('hovered')
			});
		});
	}
	largeIconHover();



/***************** Column Hover BG ******************/

function columnBGColors() {	
	
	var $columnColorCSS = '';

	$('.wpb_column').each(function(i){

		$(this).addClass('instance-'+i);

		//bg color
		if($(this).attr('data-has-bg-color') == 'true') {
			if($(this).is('[data-animation*="reveal"]') && $(this).hasClass('has-animation')) 
				$columnColorCSS += '.wpb_column.instance-'+i+ ' .column-inner-wrap .column-inner:before { background-color:' + $(this).attr('data-bg-color') + ';  opacity: '+$(this).attr('data-bg-opacity')+'; }';
			else 
				$columnColorCSS += '.wpb_column.instance-'+i+ ':before { background-color:' + $(this).attr('data-bg-color') + ';  opacity: '+$(this).attr('data-bg-opacity')+'; }';
		}

		//hover bg color
		if($(this).is('[data-hover-bg^=#]')) {
			if($(this).is('[data-animation*="reveal"]') && $(this).hasClass('has-animation')) 
				$columnColorCSS += '.wpb_column.instance-'+i+ ':hover .column-inner:before { background-color: '+$(this).attr('data-hover-bg') + '; opacity: '+$(this).attr('data-hover-bg-opacity')+'; }';
			else 
	   			$columnColorCSS += '.wpb_column.instance-'+i+ ':hover:before { background-color: '+$(this).attr('data-hover-bg') + '; opacity: '+$(this).attr('data-hover-bg-opacity')+'; }';

		}
	});

	if($columnColorCSS.length > 1) {
		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = $columnColorCSS;
		} else {
		  style.appendChild(document.createTextNode($columnColorCSS));
		}

		head.appendChild(style);
	}

}
columnBGColors();



/***************** Row Color Overlay ******************/
function rowColorOverlay() {	
	
	var $rowOverlayCSS = '';

	$('.row > .wpb_row > .row-bg-wrap > .row-bg[data-color_overlay], #portfolio-extra > .wpb_row > .row-bg-wrap > .row-bg[data-color_overlay], .single #post-area .content-inner > .wpb_row > .row-bg-wrap > .row-bg[data-color_overlay]').each(function(i){

		$(this).parent().addClass('instance-'+i);

		$overlayOpacity = ($(this).attr('data-overlay_strength').length > 0) ? $(this).attr('data-overlay_strength') : '1';
		$overlay1 = ($(this).attr('data-color_overlay').length > 0) ? $(this).attr('data-color_overlay') : 'transparent';
		$overlay2 = ($(this).attr('data-color_overlay_2').length > 0) ? $(this).attr('data-color_overlay_2') : 'transparent';
		$gradientDirection = ($(this).attr('data-gradient_direction').length > 0) ? $(this).attr('data-gradient_direction') : 'left_t_right';
		switch($gradientDirection) {
			case 'left_to_right' : 
				var $gradientDirectionDeg = '90deg';
				break;
			case 'left_t_to_right_b' : 
				var $gradientDirectionDeg = '135deg';
				break;
			case 'left_b_to_right_t' : 
				var $gradientDirectionDeg = '45deg';
				break;
			case 'top_to_bottom' : 
				var $gradientDirectionDeg = 'to bottom';
				break;
		} 
		$enableGradient = ($(this).attr('data-enable_gradient') == 'true') ? true : false;

		if($enableGradient) {
			
			//safari transparent white fix
			if($overlay1 == '#ffffff' && $overlay2 == 'transparent') $overlay2 = 'rgba(255,255,255,0.001)';
			if($overlay1 == 'transparent' && $overlay2 == '#ffffff') $overlay1 = 'rgba(255,255,255,0.001)';
			
			if($gradientDirection == 'top_to_bottom') {
				if($overlay2 == 'transparent' || $overlay2 == 'rgba(255,255,255,0.001)') $rowOverlayCSS += '.row-bg-wrap.instance-'+i+ ':after { background: linear-gradient('+$gradientDirectionDeg+',' + $overlay1 + ' 0%,' + $overlay2 + ' 75%);  opacity: '+$overlayOpacity+'; }';
				if($overlay1 == 'transparent' || $overlay1 == 'rgba(255,255,255,0.001)') $rowOverlayCSS += '.row-bg-wrap.instance-'+i+ ':after { background: linear-gradient('+$gradientDirectionDeg+',' + $overlay1 + ' 25%,' + $overlay2 + ' 100%);  opacity: '+$overlayOpacity+'; }';
				
				if( $overlay1 != 'transparent' && $overlay2 != 'transparent') $rowOverlayCSS += '.row-bg-wrap.instance-'+i+ ':after { background: linear-gradient('+$gradientDirectionDeg+',' + $overlay1 + ' 0%,' + $overlay2 + ' 100%);  opacity: '+$overlayOpacity+'; }';
			
			} else
				$rowOverlayCSS += '.row-bg-wrap.instance-'+i+ ':after { background: linear-gradient('+$gradientDirectionDeg+',' + $overlay1 + ' 0%,' + $overlay2 + ' 100%);  opacity: '+$overlayOpacity+'; }';


		} else {

			if($(this).attr('data-color_overlay').length > 0) {
				$rowOverlayCSS += '.row-bg-wrap.instance-'+i+ ':after { background-color:' + $overlay1 + ';  opacity: '+$overlayOpacity+'; }';
			}

		}
	


	});
	
	if($rowOverlayCSS.length > 1) {
		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = $rowOverlayCSS;
		} else {
		  style.appendChild(document.createTextNode($rowOverlayCSS));
		}

		head.appendChild(style);
	}

}

rowColorOverlay();


/***************** morphing button ******************/

function morphingOutlines() {

	if($('.morphing-outline').length > 0) {

		$morphingOutlineCSS = '';

		$('.morphing-outline').each(function(i){
			$(this).addClass('instance-'+i).css({'visibility':'visible'});
			var $width = $(this).find('.inner').width();
			var $height = $(this).find('.inner').height();
			var $border = parseInt($(this).attr("data-border-thickness"));
			var $hover = ($('body[data-button-style="rounded"]').length > 0) ? ':hover': '';
			var $hover2 = ($('body[data-button-style="rounded"]').length > 0) ? '': ':hover';

			$morphingOutlineCSS += 'body .morphing-outline.instance-'+i+' .inner > * { color: '+$(this).attr("data-starting-color")+'; } ';
			$morphingOutlineCSS += 'body .morphing-outline.instance-'+i+' .inner:after  { border-width:'+$(this).attr("data-border-thickness")+'px ; border-color: '+$(this).attr("data-starting-color")+'; } ';
			
			$morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper > .morphing-outline.instance-'+i+' .inner > * { color: '+$(this).attr("data-hover-color")+'; } ';
			$morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper > .morphing-outline.instance-'+i+' .inner:after  { border-color: '+$(this).attr("data-hover-color")+'; } ';
			//padding calcs
			$morphingOutlineCSS += 'body .wpb_column'+$hover2+' > .wpb_wrapper > .morphing-outline.instance-'+i+' .inner:after { padding: '+(($width+100 + $border*2 - $height)/2 - $border) +'px 50px}';
			$morphingOutlineCSS += '.morphing-outline.instance-'+i+' { padding: '+(30+($width+80 + $border*2 - $height)/2 - $border) +'px 50px}'; //extra space on the outer for mobile/close elements
			$morphingOutlineCSS += 'body .wpb_column'+$hover2+' > .wpb_wrapper > .morphing-outline.instance-'+i+' .inner:after { top: -'+ parseInt((($width+100 + $border*2 - $height)/2 - $border) + $border)+ 'px }';

			$morphingOutlineCSS += 'body .wpb_column > .wpb_wrapper > .morphing-outline.instance-'+i+' .inner:after { left: -' + parseInt(50+$border) + 'px }';
			////hover
			$morphingOutlineCSS += 'body .wpb_column'+$hover+' > .wpb_wrapper > .morphing-outline.instance-'+i+' .inner:after { padding: 50px 50px}';
			$morphingOutlineCSS += 'body .wpb_column'+$hover+' > .wpb_wrapper > .morphing-outline.instance-'+i+' .inner:after { top: -'+parseInt(50+$border) +'px }';

		});

		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');

		style.type = 'text/css';
		style.id = 'morphing-outlines';
		if (style.styleSheet){
		  style.styleSheet.cssText = $morphingOutlineCSS;
		} else {
		  style.appendChild(document.createTextNode($morphingOutlineCSS));
		}

		$('#morphing-outlines').remove();
		head.appendChild(style);
	}
}

setTimeout(morphingOutlines,100); 
setTimeout(fullWidthContentColumns,126);


/***************** svg icons *******************/

function svgAnimations() {
	var $icon = [];

	$('.svg-icon-holder').each(function(i){
		var $that = $(this);

		if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)) $that.attr('data-animation','false');

		//size
		$that.css({'height': parseInt($that.attr('data-size')) +'px', 'width': parseInt($that.attr('data-size')) +'px'});

		//animation
		$(this).attr('id','nectar-svg-animation-instance-'+i);
		var $animationSpeed = ($that.is('[data-animation-speed]') && $that.attr('data-animation-speed').length > 0) ? $that.attr('data-animation-speed') : 200;
		if($that.attr('data-animation') == 'false') { 
			$animationSpeed = 1;
			$that.css('opacity','1');
		}

		$icon[i] = new Vivus($that.attr('id'), {type: 'delayed', pathTimingFunction: Vivus.EASE_OUT, animTimingFunction: Vivus.LINEAR, duration: $animationSpeed, file: $that.text(), onReady: svgInit });
		$that.find('span').remove();
		if($animationSpeed !== 1) {

			var $that = $(this);
			var waypoint = new Waypoint({
	 			element: $that,
	 			 handler: function(direction) {
	 			 	if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
					     waypoint.destroy();
					     return;
					}

	 			 	checkIfReady();
					$that.addClass('animated-in');
					waypoint.destroy();
				},
				offset: 'bottom-in-view'

			}); 

		} else {
			checkIfReady();
		}

		function checkIfReady() {
			var $animationDelay = ($that.is('[data-animation-delay]') && $that.attr('data-animation-delay').length > 0 && $that.attr('data-animation') != 'false') ? $that.attr('data-animation-delay') : 0;
			if($icon[$that.attr('id').slice(-1)].isReady == true) {
				$that.css('opacity','1');
				 setTimeout(function(){ $icon[$that.attr('id').slice(-1)].reset().play(); },$animationDelay);
			} else {
				setTimeout(checkIfReady,50);
			}
		}

		function svgInit() {

			//set size
			$that.find('object').css({'height': parseInt($that.attr('data-size')) +'px', 'width': parseInt($that.attr('data-size')) +'px'});

			//stop animation until user scrolls to it
			$icon[$that.attr('id').slice(-1)].reset().stop();

			//set color
			var svgDoc = $that.find('object')[0].contentDocument;

			var styleElement = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
			styleElement.textContent = "svg, svg path { stroke: "+$that.css('color')+" }"; 
			svgDoc.getElementById("Layer_1").appendChild(styleElement);

		}

	});	
}
if($('.nectar-box-roll').length == 0 || $('body.mobile').length > 0) setTimeout(svgAnimations,100);

/***************** fancy ul ******************/
	function nectar_fancy_ul_init() {
		$('.nectar-fancy-ul').each(function(){


			var $icon = $(this).attr('data-list-icon');
			var $color = $(this).attr('data-color');
			var $animation = $(this).attr('data-animation');
			
			if($(this).find('li i').length == 0) 
				$(this).find('li').prepend('<i class="icon-default-style '+$icon+ ' ' + $color +'"></i> ');
			
			if($animation == 'true') {


				var $that = $(this);
				var waypoint = new Waypoint({
		 			element: $that,
		 			 handler: function(direction) {

		 			 	if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
						     waypoint.destroy();
						     return;
						}

		 			 	$that.find('li').each(function(i){
		 			 		var $that = $(this);
							$that.delay(i*220).transition({
								'opacity': '1',
								'left' : '0'
							},220,'easeOutCubic');
						});

						$that.addClass('animated-in');
						waypoint.destroy();
					},
					offset: 'bottom-in-view'

				}); 

			} 
			
			
			
		});
	}
	setTimeout(function(){ 
		if($('.nectar-box-roll').length == 0) nectar_fancy_ul_init();
	},$animationOnScrollTimeOut); 

	

/***************** PARALLAX SECTIONS ******************/
	
	// Create cross browser requestAnimationFrame method:
    window.requestAnimationFrame = window.requestAnimationFrame
     || window.mozRequestAnimationFrame
     || window.webkitRequestAnimationFrame
     || window.msRequestAnimationFrame
     || function(f){setTimeout(f, 1000/60)}


	var $window = $(window);
	var windowHeight = $window.height();
	
	$window.unbind('scroll.parallaxSections').unbind('resize.parallaxSections');
	$window.unbind('resize.parallaxSectionsUpdateHeight');
	$window.unbind('load.parallaxSectionsOffsetL');
	$window.unbind('resize.parallaxSectionsOffsetR');

	$window.on('resize.parallaxSectionsUpdateHeight',psUpdateWindowHeight);

	function psUpdateWindowHeight() {
		windowHeight = $window.height();
	}

	function psUpdateOffset($this) {
		$this.each(function(){
	  	    firstTop = $this.offset().top;
		});
	}
	
	$.fn.parallaxScroll = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});
		
		
		$window.on('resize.parallaxSectionsOffsetR',psUpdateOffset($this));
		$window.on('load.parallaxSectionsOffsetL',psUpdateOffset($this));
	
		getHeight = function(jqo) {
			return jqo.outerHeight(true);
		};
		 
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized

		var $element, top, height, pos;

		function update(){

			pos = $window.scrollTop();				
			
			$this.each(function(){

				firstTop = $this.offset().top;

				$element = $(this);
				top = $element.offset().top;
				height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				var ua = window.navigator.userAgent;
		        var msie = ua.indexOf("MSIE ");

		        //for IE, Safari or any setup using the styled scrollbar default to animating the BG pos
		        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		        	$this.find('.row-bg.using-image').css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
		        }
		       	//for Firefox/Chrome use a higher performing method
		        else  {
		        	var $ifFast = ($this.find('.row-bg[data-parallax-speed="fast"]').length > 0) ? ($element.find('.row-bg').height() - height)/2 : 0;
		        	$this.find('.row-bg.using-image').addClass('translate').css({ 'transform':  'translate3d(0, ' + Math.round(((window.innerHeight + pos -  firstTop) * speedFactor) -($ifFast)) + 'px, 0), scale(1.005)' });
		        }              
				
			});
		}		

		if (window.addEventListener) {
			 window.addEventListener('scroll', function(){ 
	          requestAnimationFrame(update); 
	        }, false);
		}

		$window.on('resize.parallaxSections',update);

		update();
	};



	
/***************** Full Width Section ******************/
	function fullWidthSections(){
		
		var $scrollBar = ($('#ascrail2000').length > 0 && window.innerWidth > 1000) ? -13 : 4;
			 
		if($('#boxed').length == 1){
			$justOutOfSight = ((parseInt($('.container-wrap').width()) - parseInt($('.main-content').width())) / 2) + 4;
		} else {
			
			//if the ext responsive mode is on - add the extra padding into the calcs
			var $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && window.innerWidth >= 1000) ? 180 : 0;
			
			if($(window).width() <= parseInt($('.main-content').css('max-width'))) { 
				var $windowWidth = parseInt($('.main-content').css('max-width'));

				//no need for the scrollbar calcs with ext responsive on desktop views
				if($extResponsivePadding == 180) $windowWidth = $windowWidth - $scrollBar;

			} else { 
				var $windowWidth = $(window).width();
			}

			
			$contentWidth = parseInt($('.main-content').css('max-width'));

			//single post fullwidth
			if($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 ) {
				$contentWidth = $('#post-area').width();
				$extResponsivePadding = 0;
			}
			
			$justOutOfSight = Math.ceil( (($windowWidth + $extResponsivePadding + $scrollBar - $contentWidth) / 2) )
		}
		
		$('.full-width-section').each(function(){
			
			if(!$(this).parents('.span_9').length > 0 && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner' && $(this).parent().attr('id') != 'portfolio-extra' &&
			!$(this).hasClass('non-fw')){

				$(this).css({
					'margin-left': - $justOutOfSight,
					'padding-left': $justOutOfSight,
					'padding-right': $justOutOfSight,
					'visibility': 'visible'
				});	
			}  else if($(this).parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) {
				$(this).css({
					'margin-left': - $justOutOfSight,
					'padding-left': $justOutOfSight,
					'padding-right': $justOutOfSight,
					'visibility': 'visible'
				});	
			}
			
			else {
				$(this).css({
					'margin-left': 0,
					'padding-left': 0,
					'padding-right': 0,
					'visibility': 'visible'
				});	
			}
			
		});
	
	
	    //full width content sections
	    $('.carousel-outer').has('.carousel-wrap[data-full-width="true"]').css('overflow','visible');
	    
	    $('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"], .full-width-content').each(function(){
			
			//single post fullwidth
			if($('#boxed').length == 1){
				if($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('#post-area').length > 0) {
					$contentWidth = $('#post-area').width();
					$extResponsivePadding = 0;
					$windowWidth = $(window).width();
					$justOutOfSight = Math.ceil( (($windowWidth + $extResponsivePadding + $scrollBar - $contentWidth) / 2) )
				} else {
					$justOutOfSight = ((parseInt($('.container-wrap').width()) - parseInt($('.main-content').width())) / 2) + 4;
				}
			} else {
				if($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('#post-area').length > 0) {
					$contentWidth = $('#post-area').width();
					$extResponsivePadding = 0;
					$windowWidth = $(window).width();
				} else {

					if($(window).width() <= parseInt($('.main-content').css('max-width'))) { 
						$windowWidth = parseInt($('.main-content').css('max-width'));
						//no need for the scrollbar calcs with ext responsive on desktop views
						if($extResponsivePadding == 180) $windowWidth = $windowWidth - $scrollBar;
					}
					$contentWidth = parseInt($('.main-content').css('max-width'));
					$extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && window.innerWidth >= 1000) ? 180 : 0;
				}
				console.log('Windows width'+$windowWidth);
				console.log('extResponsivePadding'+$extResponsivePadding);
				console.log('scrollBar'+$scrollBar);
				console.log('contentWidth'+$contentWidth);
				// $justOutOfSight = Math.ceil( (($windowWidth + $extResponsivePadding + $scrollBar - $contentWidth) / 2) ) - 150;
				$justOutOfSight = Math.ceil( (($windowWidth + $extResponsivePadding + $scrollBar - $contentWidth) / 2) );
			}

			$extraSpace = ($(this).hasClass('carousel-wrap')) ? 1 : 4;
	    	$carouselWidth = ($('#boxed').length == 1) ? parseInt($('.main-content').width()) + parseInt($justOutOfSight*2) : $(window).width() + $extraSpace  + $scrollBar ;
	    	
	    	if($(this).parent().hasClass('default-style')) { 
	    		
	    		if($('#boxed').length != 0) {
	    			$carouselWidth = ($('#boxed').length == 1) ? parseInt($('.main-content').width()) + parseInt($justOutOfSight*2) : $(window).width() + $extraSpace + $scrollBar ;
				}
				else {
					$carouselWidth = ($('#boxed').length == 1) ? parseInt($('.main-content').width()) + parseInt($justOutOfSight*2) : $(window).width()  - ($(window).width()*.025) + $extraSpace + $scrollBar ;
					$windowWidth = ($(window).width() <= parseInt($('.main-content').width())) ? parseInt($('.main-content').width()) : $(window).width() - ($(window).width()*.025);
					$justOutOfSight = Math.ceil( (($windowWidth + $scrollBar - parseInt($('.main-content').width())) / 2) )
				}
			}

			else if($(this).parent().hasClass('spaced')) { 

				if($('#boxed').length != 0) {
	    			$carouselWidth = ($('#boxed').length == 1) ? parseInt($('.main-content').width()) + parseInt($justOutOfSight*2) - ($(window).width()*.02) : $(window).width() + $extraSpace + $scrollBar ;
				} else {
					$carouselWidth = ($('#boxed').length == 1) ? parseInt($('.main-content').width()) + parseInt($justOutOfSight*2) : $(window).width()  - Math.ceil($(window).width()*.02) + $extraSpace + $scrollBar ;
					var $windowWidth2 = ($(window).width() <= parseInt($('.main-content').width())) ? parseInt($('.main-content').width()) : $(window).width() - ($(window).width()*.02);
					$justOutOfSight = Math.ceil( (($windowWidth2 + $scrollBar - parseInt($('.main-content').width())) / 2) +2)
				}
			}
	    	
	    	if(!$(this).parents('.span_9').length > 0 && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner' && $(this).parent().attr('id') != 'portfolio-extra' 
	        && !$(this).find('.carousel-wrap[data-full-width="true"]').length > 0
	    	&& !$(this).find('.portfolio-items:not(".carousel")[data-col-num="elastic"]').length > 0){

	    		//escape if inside woocoommerce page and not using applicable layout
	    		if($('.single-product').length > 0 && $(this).parents('#tab-description').length > 0 && $(this).parents('.full-width-tabs').length == 0) {
	    			$(this).css({
						'visibility': 'visible'
					});	
	    		} else {
	    			if($(this).hasClass('portfolio-items')) {
	    				$(this).css({
							'transform': 'translateX(-'+ $justOutOfSight + 'px)',
							'margin-left': 0,
							'width': $carouselWidth,
							'visibility': 'visible'
						});	
	    			} else {
	    				// css adjust for full-width-content element
	    				$(this).css({
							'margin-left': - $justOutOfSight,
							'color': 'red',
							'width': $carouselWidth,
							'visibility': 'visible'
						});	
	    			}
					
				}
			}  else if($(this).parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) {
				$(this).css({
					'margin-left': - $justOutOfSight,
					'width': $carouselWidth,
					'position':'relative',
					'visibility': 'visible'
				});	
			}
			
			else {
				$(this).css({
					'margin-left': 0,
					'visibility': 'visible'
				});	
			}
	    	
	    });

	}
	
	var $contentElementsNum = ($('#portfolio-extra').length == 0) ? $('.main-content > .row > *').length : $('.main-content > .row #portfolio-extra > *').length ;

	function parallaxSrollSpeed(speedString) {

		var ua = window.navigator.userAgent;	
		var msie = ua.indexOf("MSIE ");
		var speed;

		 //not as modern browsers
		 if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			 switch(speedString) {
			   	  case 'slow':
			   	      speed = 0.2;
			   	      break;
			   	  case 'medium': 
			   	  	  speed = 0.4;
			   	      break;
			   	  case 'fast': 
			    	  speed = 0.6;
			   	       break;
			   }
		}
		 //chrome/ff
		 else {
		 	 switch(speedString) {
			   	  case 'slow':
			   	      speed = 0.6;
			   	      break;
			   	  case 'medium': 
			   	  	  speed = 0.4;
			   	      break;
			   	  case 'fast': 
			    	  speed = 0.25;
			   	       break;
			   }
		}

		   return speed;
	}

	function parallaxScrollInit(){
		 parallaxRowsBGCals();
		$('.full-width-section.parallax_section, .full-width-content.parallax_section').each(function(){
		   var $id = $(this).attr('id');	
		  
		    var ua = window.navigator.userAgent;	
		    var msie = ua.indexOf("MSIE ");

			if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  {
		   		if($(this).find('[data-parallax-speed="fixed"]').length == 0) $('#'+$id + ".parallax_section").parallaxScroll("50%", parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed')) );
		   	} else if($(this).find('[data-parallax-speed="fixed"]').length == 0) {
		   		$('#'+$id + ".parallax_section").parallaxScroll("50%", parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed')) );
		   	}
		});
	}

	
	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)){
		parallaxScrollInit();
		$(window).load(parallaxRowsBGCals);
	}

	function parallaxRowsBGCals(){
		$('.full-width-section.parallax_section, .full-width-content.parallax_section').each(function(){

			 var ua = window.navigator.userAgent;
		     var msie = ua.indexOf("MSIE ");

			 if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || $smoothCache == true || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			 	$(this).find('.row-bg').css({'height': $(this).outerHeight(true)*2.8, 'margin-top': '-' + ($(this).outerHeight(true)*2.8)/2 + 'px' });
			 } else {
			 	$(this).find('.row-bg').css({'height': Math.ceil( $(window).height() * parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed')) ) + $(this).outerHeight(true)   });
			 }
			 
		});
	}
	
	//if fullwidth section is first or last, remove the margins so it fits flush against header/footer
	function fwsClasses() {
		
		$('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function(){
			if(!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner'){
				if($(this).parents('.wpb_row').index() == '0'){
					$(this).addClass('first-nectar-slider');
				} 
			}
		});

		$contentElementsNum = ($('#portfolio-extra').length == 0) ? $('.main-content > .row > *').length : $('.main-content > .row #portfolio-extra > *').length ;

		$('.full-width-section, .full-width-content:not(.page-submenu .full-width-content), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer, .portfolio-items[data-col-num="elastic"]').each(function(){
			
			if(!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner'){
				
				if($(this).parents('.wpb_row').length > 0){ 
				
					if($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
					
					////first
					if($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length != 0 || $(this).parents('.wpb_row').index() == '0' && $('.parallax_slider_outer').length != 0){
						//$(this).css('margin-top','-2.1em').addClass('first-section nder-page-header');
					} 
					else if($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length == 0 && $('.page-header-no-bg').length == 0 
					         && $('.project-title').length == 0 && $(this).parents('.wpb_row').index() == '0' 
					         && $('.parallax_slider_outer').length == 0 && $('.project-title').length == 0 
					         && $('body[data-bg-header="true"]').length == 0) {

					     if($('body[data-header-resize="0"]').length == 1 && $('.single').length == 0) {
					     	$('.container-wrap').css('padding-top','0px');
					     } else {
					     	$(this).css('margin-top','-70px').addClass('first-section');
					     } 	
						
					} 
					
					//check if it's also last (i.e. the only fws)
					if($(this).parents('.wpb_row').index() == $contentElementsNum-1 && $('#respond').length == 0 ) { 
						if($(this).attr('id') != 'portfolio-filters-inline') {
							$('.container-wrap').css('padding-bottom','0px');
							$('#call-to-action .triangle').remove();
						}
					} 
				
				} else {
					
					if($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
					
					if( $(this).find('.portfolio-filters-inline').length == 0 && $(this).attr('id') != 'post-area' ) {
						
						////first
						if($(this).index() == '0' && $('#page-header-bg').length != 0 || $(this).index() == '0' && $('.parallax_slider_outer').length != 0){
							//$(this).css('margin-top','-2.1em').addClass('first-section nder-page-header');
			
						} 
						else if($(this).index() == '0' && $('#page-header-bg').length == 0 && $(this).index() == '0' && $('.page-header-no-bg').length == 0 && 
						        $(this).index() == '0' && $('.parallax_slider_outer').length == 0 && !$(this).hasClass('blog_next_prev_buttons') ) {
						     
						      if($('body[data-header-resize="0"]').length == 1 && $('.single').length == 0) { 
						          $('.container-wrap').css('padding-top','0px');
						      } else {
						      	  $(this).css('margin-top','-70px').addClass('first-section');
						      }   	
							
						} 
						
						//check if it's also last (i.e. the only fws)
						if($(this).index() == $contentElementsNum-1 && $('#respond').length == 0 ) { 
							$('.container-wrap').css('padding-bottom','0px');
							$('.bottom_controls').css('margin-top','0px');
							$('#call-to-action .triangle').remove();
						} 
					}
					
				}
			}
		});


		//add first class for rows for page header trans effect (zoom only as of now)
		$('.full-width-section.wpb_row, .full-width-content.wpb_row').each(function(){
			
			if(!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner'){
				
				
				if($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
					
				if($(this).index() == '0' && $('#page-header-bg').length == 0 && $('.page-header-no-bg').length == 0 
				         && $('.project-title').length == 0 && $('body.single').length == 0 
				         && $('.parallax_slider_outer').length == 0 && $('.project-title').length == 0 ) {

					$(this).addClass('first-section');
					var $that = $(this);
					setTimeout( function() { $that.addClass('loaded'); },50);
					
				} 
					
	
			}
		});	


		
		$('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function(){
			//check if it's last 
			if($(this).index() == $contentElementsNum-1 && $('#commentform').length == 0 && $('#pagination').length == 0) { 
				$(this).css('margin-bottom','-40px');
				$('#call-to-action .triangle').remove();
			}
		});
		
		
		
		$('.portfolio-filters').each(function(){
			////first
			if($(this).index() == '0' && $('#page-header-bg').length != 0 || $(this).index() == '0' && $('.parallax_slider_outer').length != 0){
				$(this).css({'margin-top':'-2.1em'}).addClass('first-section nder-page-header');
			}  else if($(this).index() == '0' && $('#page-header-bg').length == 0 || $(this).index() == '0' && $('.parallax_slider_outer').length == 0){
				$(this).css({'margin-top':'0px'}).addClass('first-section');
			}
		});
		
		$('.portfolio-filters-inline').each(function(){
			////first
			if($(this).parents('.wpb_row').length > 0){ 
				
				if($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length != 0 || $(this).parents('.wpb_row').index() == '0' && $('.parallax_slider_outer').length != 0){
					if($('body[data-header-resize="0"]').length == 0) $(this).css({'margin-top':'-2.1em', 'padding-top' : '19px'}).addClass('first-section nder-page-header');
				}  else if($(this).parents('.wpb_row').index() == '0' && $('#page-header-bg').length == 0 || $(this).parents('.wpb_row').index() == '0' && $('.parallax_slider_outer').length == 0){
					
					 if($('body[data-header-resize="0"]').length == 1) { 
				          // $(this).css({'margin-top':'-30px', 'padding-top' : '50px'}).addClass('first-section');
				      } else {
				      	  $(this).css({'margin-top':'-70px', 'padding-top' : '50px'}).addClass('first-section');
				      } 

				}
				
			} else {
				if($(this).index() == '0' && $('#page-header-bg').length != 0 || $(this).index() == '0' && $('.parallax_slider_outer').length != 0){
					$(this).css({'margin-top':'-2.1em', 'padding-top' : '19px'}).addClass('first-section nder-page-header');
				}  else if($(this).index() == '0' && $('#page-header-bg').length == 0 || $(this).index() == '0' && $('.parallax_slider_outer').length == 0){
					
					if($('body[data-header-resize="0"]').length == 1) { 
				          $(this).css({'margin-top':'-30px', 'padding-top' : '50px'}).addClass('first-section');
				      } else {
				      	  $(this).css({'margin-top':'-70px', 'padding-top' : '50px'}).addClass('first-section');
				      } 

				
				}
			}
			
		});
		
		
		
		$('.parallax_slider_outer').each(function(){
			if(!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner'){
				
				if($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) return false;
				////first
				if($(this).parent().index() == '0' && $('#page-header-bg').length != 0){
					$(this).addClass('first-section nder-page-header');

				} 
				else if($(this).parent().index() == '0' && $('#page-header-bg').length == 0){
					$(this).css('margin-top','-40px').addClass('first-section');
					if(!$('body').hasClass('single-post')) $('.container-wrap').css('padding-top', '0px');
				} 
				
				//check if it's also last (i.e. the only fws)
				if($(this).parent().index() == $contentElementsNum-1 && $('#post-area').length == 0) {
					$('#call-to-action .triangle').remove();
					$('.container-wrap').hide();
				}
			}
		});
	}
	
	//if not using a fullwidth slider first, ajdust the top padding
	//if( $('.nectar-slider-wrap.first-section').length > 0 && $('.nectar-slider-wrap.first-section').attr('data-full-width') != 'true' || $('.nectar-slider-wrap.first-section').length > 0 && $('.nectar-slider-wrap.first-section').attr('data-full-width') != 'boxed-full-width' ) $('body').attr('data-bg-header','false');
	//if( $('.wpb_row.first-section:not(".full-width-content") .nectar-slider-wrap').length > 0 && $('.wpb_row.first-section:not(".full-width-content") .nectar-slider-wrap').attr('data-full-width') != 'true' || $('.wpb_row.first-section:not(".full-width-content") .nectar-slider-wrap').length > 0 && $('.wpb_row.first-section:not(".full-width-content") .nectar-slider-wrap').attr('data-full-width') != 'boxed-full-width' ) $('body').attr('data-bg-header','false');
	
	
	//set sizes
	fullWidthSections();
	fwsClasses();
	
	//sizing for fullwidth sections that are image only

	function fullwidthImgOnlySizingInit(){
		////set inital sizes
		$('.full-width-section:not(.custom-skip)').each(function(){
			
			var $fwsHeight = $(this).outerHeight(true);

			//make sure it's empty and also not being used as a small dvider
			if($(this).find('.span_12 *').length == 0 && $.trim( $(this).find('.span_12').text() ).length == 0  && $fwsHeight > 40){
				$(this).addClass('bg-only');
				$(this).css({'height': $fwsHeight, 'padding-top': '0px', 'padding-bottom': '0px'});
				$(this).attr('data-image-height',$fwsHeight);
			}

		});
	}

	function fullwidthImgOnlySizing(){

		$('.full-width-section.bg-only').each(function(){
			var $initialHeight = $(this).attr('data-image-height');
			
			if( window.innerWidth < 1000 && window.innerWidth > 690 ) {
				$(this).css('height', $initialHeight - $initialHeight*.60);
			} 
			
			else if( window.innerWidth <= 690 ) {
				$(this).css('height', $initialHeight - $initialHeight*.78);
			} 
			
			else if( window.innerWidth < 1300 && window.innerWidth >= 1000  ) {
				$(this).css('height', $initialHeight - $initialHeight*.33);
			} 
			
			else {
				$(this).css('height', $initialHeight);
			}
			
		});
		
	}

	fullwidthImgOnlySizingInit();
	fullwidthImgOnlySizing();
	
	
	
	//change % padding on rows to be relative to screen
	function fullWidthRowPaddingAdjustInit(){
		if($('#boxed').length == 0){
			$('.full-width-section, .full-width-content').each(function(){
				var $topPadding = $(this)[0].style.paddingTop;
				var $bottomPadding = $(this)[0].style.paddingBottom;

				if($topPadding.indexOf("%") >= 0) $(this).attr('data-top-percent',$topPadding);
				if($bottomPadding.indexOf("%") >= 0) $(this).attr('data-bottom-percent',$bottomPadding);
				

			});
		}
	}

	function fullWidthRowPaddingAdjustCalc(){
		if($('#boxed').length == 0){
			$('.full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent],  .full-width-content[data-bottom-percent]').each(function(){

				var $windowHeight = $(window).width();
				var $topPadding = ($(this).attr('data-top-percent')) ? $(this).attr('data-top-percent') : 'skip';
				var $bottomPadding = ($(this).attr('data-bottom-percent')) ? $(this).attr('data-bottom-percent') : 'skip';

				//top
				if($topPadding != 'skip') {
					$(this).css('padding-top',$windowHeight*(parseInt($topPadding)/100));
				}

				//bottom
				if($bottomPadding != 'skip'){
					$(this).css('padding-bottom',$windowHeight*(parseInt($bottomPadding)/100));
				}
				

			});
		}
	}
	fullWidthRowPaddingAdjustInit();
	fullWidthRowPaddingAdjustCalc();

	
	//full width content column sizing
	function fullWidthContentColumns(){

		//standard carousel
   	  	$('.main-content > .row > .full-width-content, #portfolio-extra > .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, #post-area.span_12 article .content-inner > .full-width-content').each(function(){
			
			//only set the height if more than one column
			if($(this).find('> .span_12 > .col').length > 1){
				
				var tallestColumn = 0;
				var $columnInnerHeight = 0;
				
				$(this).find('> .span_12 > .col').each(function(){
					
					var $padding = parseInt($(this).css('padding-top'));
					($(this).find('> .wpb_wrapper').height() + ($padding*2) > tallestColumn) ? tallestColumn = $(this).find('> .wpb_wrapper').height() + ($padding*2)  : tallestColumn = tallestColumn;
				});	
	    	 	
	    	 	$(this).find('> .span_12 > .col').each(function(){

	    	 		//columns with content
		    	 	if($(this).find('> .wpb_wrapper > *').length > 0){
		    	 		$(this).css('height',tallestColumn);
		    	 	} 
		    	 	//empty columns
		    	 	else {
		    	 		$(this).css('min-height',tallestColumn);
		    	 		if($(this).is('[data-animation*="reveal"]')) $(this).find('.column-inner').css('min-height',tallestColumn);
		    	 	}
	    	 	});
	         	
	         	//nested column height
	         	var $childRows = $(this).find('> .span_12 > .col .wpb_row').length;
	         	if(window.innerWidth > 1000) { 
	         		
	         		var $padding = parseInt($(this).find('> .span_12 > .col').css('padding-top'));
	         		
	         		//$(this).find('> .span_12 > .col .wpb_row .col').css('min-height',(tallestColumn-($padding*2))/$childRows + 'px'); 
	         	} else {
	         		$(this).find('> .span_12 > .col .wpb_row .col').css('min-height','0px'); 
	         	}
	         	
	         	
	         	//vertically center
	         	if($(this).hasClass('vertically-align-columns') && window.innerWidth > 1000){
	         		
	         		//parent columns
		         	$(this).find('> .span_12 > .col').each(function(){
						
						$columnInnerHeight = $(this).find('> .wpb_wrapper').height();
						var $marginCalc = ($(this).height()/2)-($columnInnerHeight/2);
						if($marginCalc <= 0) $marginCalc = 0;
						
						$(this).find('> .wpb_wrapper').css('margin-top',$marginCalc);
						$(this).find('> .wpb_wrapper').css('margin-bottom',$marginCalc);
						
					});	
	
					
				}
			
			}
			
   	  	});
		
	}
	
	fullWidthContentColumns();
	
	


function mouseParallaxInit(){
	$('.wpb_row:has(.nectar-parallax-scene)').each(function(){

		if($(this).hasClass('first-section')) { 
			$('body #header-outer[data-transparent-header="true"] .ns-loading-cover').show();

			if($('body #header-outer[data-transparent-header="true"]').length > 0) { 
				$(this).css('overflow','hidden');
				$(this).find('.nectar-slider-loading').css({
					'top': $('#header-space').height(),
					'margin-top' : '-1px'
				});
				$(this).find('.nectar-slider-loading .loading-icon').css({
					'height' :  $('.first-section .nectar-parallax-scene').height() - $('#header-space').height() + 'px',
					'opacity' : '1'
				});
			}
		}

		var $strength = parseInt($(this).find('.nectar-parallax-scene').attr('data-scene-strength'));

		$(this).find('.nectar-parallax-scene').parallax({
			scalarX: $strength,
	  		scalarY: $strength
		});

		//wait until the images in the scene have loaded
		var images = $(this).find('.nectar-parallax-scene li');
		
		$.each(images, function(){
			if($(this).find('div').length > 0) {
			    var el = $(this).find('div'),
			    image = el.css('background-image').replace(/"/g, '').replace(/url\(|\)$/ig, '');
			    if(image && image !== '' && image !== 'none')
			        images = images.add($('<img>').attr('src', image));
			}
		});

		var $that = $(this);
		images.imagesLoaded(function(){
			$that.find('> .nectar-slider-loading').fadeOut(800,'easeInOutExpo');
			if($that.hasClass('first-section')) { 
				$('body #header-outer[data-transparent-header="true"] .ns-loading-cover').fadeOut(800,'easeInOutExpo',function(){
    				$(this).remove();
    			});
			}
		});

	});
}
mouseParallaxInit();

	
/***************** Checkmarks ******************/

function ulChecks() {
	$('ul.checks li').prepend('<i class="icon-ok-sign"></i>');
}
ulChecks();

/***************** Image with Animation / Col Animation *******************/


	
function colAndImgAnimations(){
	$('img.img-with-animation').each(function() {
		
		var $that = $(this);
		var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
		var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';

		var waypoint = new Waypoint({
 			element: $that,
 			 handler: function(direction) {
			   
					if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
						 waypoint.destroy();
						return;
					}

					if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
				
						if($that.attr('data-animation') == 'fade-in-from-left'){
							$that.delay($that.attr('data-delay')).transition({
								'opacity' : 1,
								'left' : '0px'
							},$animationDuration, $animationEasing);
						} else if($that.attr('data-animation') == 'fade-in-from-right'){
							$that.delay($that.attr('data-delay')).transition({
								'opacity' : 1,
								'right' : '0px'
							},$animationDuration, $animationEasing);
						} else if($that.attr('data-animation') == 'fade-in-from-bottom'){
							$that.delay($that.attr('data-delay')).transition({
								'opacity' : 1,
								'y' : '0px'
							},$animationDuration, $animationEasing);
						} else if($that.attr('data-animation') == 'fade-in') {
							$that.delay($that.attr('data-delay')).transition({
								'opacity' : 1
							},$animationDuration, $animationEasing);	
						} else if($that.attr('data-animation') == 'grow-in') {
							setTimeout(function(){ 
								$that.transition({ scale: 1, 'opacity':1 },$animationDuration,'cubic-bezier(0.15, 0.84, 0.35, 1.25)');
							},$that.attr('data-delay'));
						}
						else if($that.attr('data-animation') == 'flip-in') {
							setTimeout(function(){ 
								$that.transition({  rotateY: 0, 'opacity':1 },$animationDuration, $animationEasing);
							},$that.attr('data-delay'));
						}

						$that.addClass('animated-in');
						
					}

					waypoint.destroy();

			  },
			  offset: '85%'
		});

		
	
	});

	
	$('.col.has-animation:not([data-animation*="reveal"]), .wpb_column.has-animation:not([data-animation*="reveal"])').each(function() {
	    
		var $that = $(this);
		var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
		var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';

		var waypoint = new Waypoint({
 			element: $that,
 			 handler: function(direction) {
				
				if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
					 waypoint.destroy();
					return;
				}

				if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
				 	
					if($that.attr('data-animation') == 'fade-in-from-left'){
						$that.delay($that.attr('data-delay')).transition({
							'opacity' : 1,
							'left' : '0px'
						},$animationDuration,$animationEasing);
					} else if($that.attr('data-animation') == 'fade-in-from-right'){
						$that.delay($that.attr('data-delay')).transition({
							'opacity' : 1,
							'right' : '0px'
						},$animationDuration,$animationEasing);
					} else if($that.attr('data-animation') == 'fade-in-from-bottom'){
						$that.delay($that.attr('data-delay')).transition({
							'opacity' : 1,
							'y' : '0px'
						},$animationDuration,$animationEasing);
					} else if($that.attr('data-animation') == 'fade-in') {
						$that.delay($that.attr('data-delay')).transition({
							'opacity' : 1
						},$animationDuration,$animationEasing);	
					} else if($that.attr('data-animation') == 'grow-in') {
						setTimeout(function(){ 
							$that.transition({ scale: 1, 'opacity':1 },$animationDuration,'cubic-bezier(0.15, 0.84, 0.35, 1.25)');
						},$that.attr('data-delay'));
					} else if($that.attr('data-animation') == 'flip-in') {
						setTimeout(function(){ 
							$that.transition({  rotateY: 0, 'opacity':1 },$animationDuration, $animationEasing);
						},$that.attr('data-delay'));
					}

					$that.addClass('animated-in');
				
				}

				waypoint.destroy();
			},
			offset: '85%'
		});
	
	});

	
	$('.wpb_column.has-animation[data-animation*="reveal"]').each(function() {
	    
		var $that = $(this);
		var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
		var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';

		var waypoint = new Waypoint({
 			element: $that,
 			 handler: function(direction) {
				
				if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
					 waypoint.destroy();
					return;
				}

				if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
					
					if($that.attr('data-animation') == 'reveal-from-bottom' || $that.attr('data-animation') == 'reveal-from-top') {
						setTimeout(function(){ 
							$that.find('.column-inner-wrap, .column-inner').transition({  'y': 0 },$animationDuration, $animationEasing);
						},$that.attr('data-delay'));
					} else if($that.attr('data-animation') == 'reveal-from-right' || $that.attr('data-animation') == 'reveal-from-left') {
						setTimeout(function(){ 
							$that.find('.column-inner-wrap, .column-inner').transition({  'x': 0 },$animationDuration, $animationEasing);
						},$that.attr('data-delay'));
					} 

					$that.addClass('animated-in');
				
				}

				waypoint.destroy();
			},
			offset: '70%'
		});
	
	}); 	

	
}

setTimeout(function(){ 
	if($('.nectar-box-roll').length == 0) colAndImgAnimations();
},$animationOnScrollTimeOut); 	



function splitLineHeadings() {

	$('.nectar-split-heading').each(function() {

		var $that = $(this);
		var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
		var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';

		var waypoint = new Waypoint({
				element: $that,
				 handler: function(direction) {
				
				if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
					 waypoint.destroy();
					return;
				}

				if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) || $('body[data-responsive="0"]').length > 0) {
				 	
					
					$that.find('.heading-line').each(function(i){
						if($that.parents('.first-section').length > 0 && $('body[data-aie="zoom-out"]').length > 0) i = i+4;
						$(this).find('> span').delay(i*70).transition({
							'y' : '0px'
						},$animationDuration,$animationEasing);

					});
					

					$that.addClass('animated-in');
				
				}

				waypoint.destroy();
			},
			offset: 'bottom-in-view'
		});

	});
}

setTimeout(function() { splitLineHeadings(); },100);
	
/***************** 4 Col Grid in iPad ******************/
	
	//add one-fourth class
	function oneFourthClasses() {
		$('.col.span_3, .vc_span3, .vc_col-sm-3').each(function(){
			var $currentDiv = $(this);
			var $nextDiv = $(this).next('div');
			if( $nextDiv.hasClass('span_3') && !$currentDiv.hasClass('one-fourths') || $nextDiv.hasClass('vc_span3') && !$currentDiv.hasClass('one-fourths') || $nextDiv.hasClass('vc_col-sm-3') && !$currentDiv.hasClass('one-fourths') ) {
				$currentDiv.addClass('one-fourths clear-both');
				$nextDiv.addClass('one-fourths right-edge');
			}
		});
		
		/*$('.vc_span4').each(function(){
			if($(this).find('.team-member').length > 0 && $(this).parents('.full-width-content').length > 0) {
				var $currentDiv = $(this);
				var $nextDiv = $(this).next('div');
				if( !$currentDiv.hasClass('one-fourths')) {
					$currentDiv.addClass('one-fourths clear-both');
					$nextDiv.addClass('one-fourths right-edge');
				}
			}
		});*/
		
		//make empty second 1/2 half columsn display right on iPad
		$('.span_12 .col.span_6').each(function(){
			if($(this).next('div').hasClass('span_6') && $.trim( $(this).next('div').html() ).length == 0 ) {
				$(this).addClass('empty-second')
			}
		}); 
	}
	oneFourthClasses();
	
/***************** Bar Graph ******************/
function progressBars(){
	$('.nectar-progress-bar').parent().each(function(i){

		var $that = $(this);
		var waypoint = new Waypoint({
 			element: $that,
 			 handler: function(direction) {
			   
					if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) { 
						 waypoint.destroy();
						return;
					}

					$that.find('.nectar-progress-bar').each(function(i){


						var percent = $(this).find('span').attr('data-width');
						var $endNum = parseInt($(this).find('span strong i').text());
						var $that = $(this);
						
						$that.find('span').delay(i*90).transition({
							'width' : percent + '%'
						},1050, 'easeInOutQuint',function(){
						});
						
	
					
						setTimeout(function(){
							$that.find('span strong i').countTo({
								from: 0,
								to: $endNum,
								speed: 850,
								refreshInterval: 30,
								onComplete: function(){
						
								}
							});	

							$that.find('span strong').transition({
								'opacity' : 1
							},550, 'easeInCirc');
						}, (i*90) );
					
						////100% progress bar 
						if(percent == '100'){
							$that.find('span strong').addClass('full');
						}
					});

					$that.addClass('completed');

					waypoint.destroy();

			  },
			  offset: 'bottom-in-view'
		});

	});
}

if($('.nectar-box-roll').length == 0) progressBars();
	



/***************** Pricing Tables ******************/


var $tallestCol;

function pricingTableHeight(){
	$('.pricing-table[data-style="default"]').each(function(){
		$tallestCol = 0;
		
		$(this).find('> div ul').each(function(){
			($(this).height() > $tallestCol) ? $tallestCol = $(this).height() : $tallestCol = $tallestCol;
		});	
		
		//safety net incase pricing tables height couldn't be determined
		if($tallestCol == 0) $tallestCol = 'auto';
		
		//set even height
		$(this).find('> div ul').css('height',$tallestCol);

	});
}

pricingTableHeight();

 
/***************** Testimonial Slider ******************/

//testimonial slider controls
$('body').on('click','.testimonial_slider:not([data-style="multiple_visible"]) .controls li', function(){
	
	if($(this).find('span').hasClass('active')) return false;
	
	var $index = $(this).index();
	var currentHeight = $(this).parents('.testimonial_slider').find('.slides blockquote').eq($index).height();
	
	$(this).parents('.testimonial_slider').find('li span').removeClass('active');
	$(this).find('span').addClass('active');
	
	$(this).parents('.testimonial_slider').find('.slides blockquote').stop().css({'opacity':'0', 'left':'-25px', 'z-index': '1'});
	$(this).parents('.testimonial_slider').find('.slides blockquote').eq($index).stop(true,true).animate({'opacity':'1','left':'0'},550,'easeOutCubic').css('z-index','20');
	$(this).parents('.testimonial_slider:not(.disable-height-animation)').find('.slides').stop(true,true).animate({'height' : currentHeight + 40 + 'px' },450,'easeOutCubic');
	
	resizeVideoToCover();
});


var $tallestQuote;

//create controls
function createTestimonialControls() {

	//fadeIn
	$('.testimonial_slider:not([data-style="multiple_visible"])').animate({'opacity':'1'},800);

	$('.testimonial_slider:not([data-style="multiple_visible"])').each(function(){
		
		if($(this).find('blockquote').length > 1 && $(this).find('.controls').length == 0) {
			$(this).append('<div class="controls"><ul></ul></div>');
			
			var slideNum = $(this).find('blockquote').length;
			var $that = $(this);
			
			for(var i=0;i<slideNum;i++) {
				$that.find('.controls ul').append('<li><span class="pagination-switch"></span></li>')
			}
			
			//activate first slide
			$(this).find('.controls ul li').first().click();
			
			//autorotate
			if($(this).attr('data-autorotate').length > 0) {
				slide_interval = (parseInt($(this).attr('data-autorotate')) < 100) ? 4000 : parseInt($(this).attr('data-autorotate'));
				var $that = $(this);
				var $rotate = setInterval(function(){ testimonialRotate($that) },slide_interval);
			}
			
			$(this).find('.controls li').click(function(e){
				if(typeof e.clientX != 'undefined') clearInterval($rotate);
			});
			
			////swipe for testimonials
			$(this).swipe({
			
				swipeLeft : function(e) {
					$(this).find('.controls ul li span.active').parent().next('li').find('span').trigger('click');
					e.stopImmediatePropagation();
					clearInterval($rotate);
					return false;
				 },
				 swipeRight : function(e) {
					$(this).find('.controls ul li span.active').parent().prev('li').find('span').trigger('click');
					e.stopImmediatePropagation();
					clearInterval($rotate);
					return false;
				 }    
			});
		} 
		//only one testimonial
		else if($(this).find('.controls').length == 0) {
			var currentHeight = $(this).find('.slides blockquote').height();
			$(this).find('.slides blockquote').stop().css({'opacity':'0', 'left':'-25px', 'z-index': '1'});
			$(this).find('.slides blockquote').stop(true,true).transition({'opacity':'1','left':'0'},550,'easeOutCubic').css('z-index','20');
			$(this).find('.slides').stop(true,true).animate({'height' : currentHeight + 20 + 'px' },450,'easeOutCubic');
		}
	});



		
	$('.testimonial_slider[data-style="multiple_visible"] .slides').each(function(){
	    	var $that = $(this); 
	    	var $element = $that;
	    	var $autoplay = ($that.parents('.testimonial_slider').attr('data-autorotate').length > 1 && parseInt($that.parents('.testimonial_slider').attr('data-autorotate')) > 100) ? parseInt($that.parents('.testimonial_slider').attr('data-autorotate')) : 4000;
			if($that.find('img').length == 0) $element = $('body');

			//move img pos
			$(this).find('blockquote').each(function(){
				$(this).find('.image-icon').insertAfter($(this).find('p'));
			});
			

			imagesLoaded($element,function(instance){

		    	$that.flickity({
		    		  contain: true,
					  draggable: true,
					  lazyLoad: false,
					  imagesLoaded: true,
					  percentPosition: true,
					  prevNextButtons: false,
					  pageDots: true,
					  resize: true,
					  setGallerySize: true,
					  wrapAround: true,
					  autoPlay: $autoplay,
					  accessibility: false
		    	});

			    $that.parents('.testimonial_slider').css('opacity','1');
			    

		     });//images loaded
		     	     
	    });//each	


}
createTestimonialControls();

function testimonialRotate(slider){
	
	var $testimonialLength = slider.find('li').length;
	var $currentTestimonial = slider.find('.pagination-switch.active').parent().index();
	
	//stop the rotation when toggles are closed
	if( slider.parents('.toggle').length > 0 && slider.parents('.toggle').hasClass('open') ) {

		if( $currentTestimonial+1 == $testimonialLength) {
			slider.find('ul li:first-child').click();
		} else {
			slider.find('.pagination-switch.active').parent().next('li').click();
		}
		
	} else {
		
		if( $currentTestimonial+1 == $testimonialLength) {
			slider.find('ul li:first-child').click();
		} else {
			slider.find('.pagination-switch.active').parent().next('li').click();
		}
	
	}

}

function testimonialHeightResize(){
	$('.testimonial_slider:not(.disable-height-animation):not([data-style="multiple_visible"])').each(function(){
		
		var $index = $(this).find('.controls ul li span.active').parent().index();
		var currentHeight = $(this).find('.slides blockquote').eq($index).height();
		$(this).find('.slides').stop(true,true).css({'height' : currentHeight + 40 + 'px' });
		
	});
}


function testimonialSliderHeight() {
		
	$('.testimonial_slider.disable-height-animation:not([data-style="multiple_visible"])').each(function(){
		$tallestQuote = 0;
			
		$(this).find('blockquote').each(function(){
			($(this).height() > $tallestQuote) ? $tallestQuote = $(this).height() : $tallestQuote = $tallestQuote;
		});	
		
		//safety net incase height couldn't be determined
		if($tallestQuote == 0) $tallestQuote = 100;
		
		//set even height
		$(this).find('.slides').css('height',$tallestQuote+40+'px');
		
		//show the slider once height is set
		$(this).animate({'opacity':'1'});

		fullWidthContentColumns();

	});

}

testimonialSliderHeight(); 



/***************** WP Media Embed / External Embed ******************/

//this isn't the for the video shortcode* This is to help any external iframe embed fit & resize correctly 
function responsiveVideoIframesInit(){
	$('iframe').each(function(){
		
		//make sure the iframe has a src (things like adsense don't)
		if(typeof $(this).attr('src') != 'undefined' && !$(this).parent().hasClass('iframe-embed') && $(this).parents('.ls-slide').length == 0 && $(this).parents('.esg-entry-media').length == 0){
			
			if( $(this).attr('src').toLowerCase().indexOf("youtube") >= 0 || $(this).attr('src').toLowerCase().indexOf("vimeo") >= 0  || $(this).attr('src').toLowerCase().indexOf("twitch.tv") >= 0 || $(this).attr('src').toLowerCase().indexOf("kickstarter") >= 0 || $(this).attr('src').toLowerCase().indexOf("embed-ssl.ted") >= 0  || $(this).attr('src').toLowerCase().indexOf("dailymotion") >= 0) {
				$(this).wrap('<div class="iframe-embed"/>');	
				
				$(this).attr('data-aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
	
				//add wmode=transparent to all youytube embeds to fix z-index issues in IE
				if($(this).attr('src').indexOf('wmode=transparent') == -1) {
					if($(this).attr('src').indexOf('?') == -1){
						$(this).attr('src',$(this).attr('src') + '?wmode=transparent');
					} else {
						$(this).attr('src',$(this).attr('src') + '&wmode=transparent');
					}
				}
			}
			 
		} else {
			//if($(this).parents('ins').length == 0){ 
			//	$(this).wrap('<div class="iframe-embed-standard"/>');	
			//}
		}
		
	});


}

function responsiveVideoIframes(){
	 $('iframe[data-aspectRatio]').each(function() {
	 	var newWidth = $(this).parent().width();
	 	 
		var $el = $(this);
		
		//in nectar slider
		if($(this).parents('.swiper-slide').length > 0) {
			if($(this).is(':visible')) $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
		} 
		//all others
		else {
			$el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
		}
		
		
	});
}


function videoshortcodeSize(){
	$('.wp-video').each(function(){

		$(this).attr('data-aspectRatio', parseInt($(this).find('.mejs-overlay').height()) / parseInt($(this).find('.wp-video-shortcode').css('width')));

		var newWidth = $(this).width();
	 	 
		var $el = $(this).find('.wp-video-shortcode');
		$(this).width(newWidth).height(newWidth * $(this).attr('data-aspectRatio'));
	});
}

responsiveVideoIframesInit();
responsiveVideoIframes();
videoshortcodeSize();

//unwrap post and protfolio videos
$('.video-wrap iframe').unwrap();
$('#sidebar iframe[src]').unwrap();

$('video:not(.slider-video)').attr('width','100%');
$('video:not(.slider-video)').attr('height','100%'); 

$('audio').attr('width','100%');
$('audio').attr('height','100%');

$('audio').css('visibility','visible');

if($('body').hasClass('mobile')){
	$('video').css('visibility','hidden');
} else {
	$('video').css('visibility','visible');
}


$(window).load(function(){
	$('video').css('visibility','visible');
	showLateIframes();
	videoshortcodeSize();
});

$('.wp-video').each(function(){
	 video = $(this).find('video').get(0);
	 video.addEventListener('loadeddata', function() {
	   videoshortcodeSize();
	   $(window).trigger('resize');
	 }, false);
});

//webkit video back button fix 
$('.main-content iframe[src]').each(function(){
	$(this).attr('src',$(this).attr('src'));
	$(this).css({'opacity':'1', 'visibility':'visible'});
});

showLateIframes();

function showLateIframes(){
	$('iframe[src]').css('opacity','1');
	setTimeout(function(){ $('iframe[src]').css('opacity','1'); }, 100);
	setTimeout(function(){ $('iframe[src]').css('opacity','1'); }, 500);
	setTimeout(function(){ $('iframe[src]').css('opacity','1'); }, 1000);
	setTimeout(function(){ $('iframe[src]').css('opacity','1'); }, 1500);
	setTimeout(function(){ $('iframe[src]').css('opacity','1'); }, 2500);
}


/***************** Nectar Video BG ******************/


	
	$('.wpb_row:has(".nectar-video-wrap")').each(function(i){
		$(this).css('z-index',100 + i);
	});

	var min_w = 1200; // minimum video width allowed
	var vid_w_orig;  // original video dimensions
	var vid_h_orig;
	
    vid_w_orig = 1280;
    vid_h_orig = 720;
 
	function resizeVideoToCover() {
		$('.nectar-video-wrap').each(function(i){
			
			if($(this).parents('#page-header-bg').length > 0) {
				if($('.container-wrap.auto-height').length > 0) return false;
				var $containerHeight = $(this).parents('#page-header-bg').outerHeight();			
				var $containerWidth = $(this).parents('#page-header-bg').outerWidth();
			} else {
				var $containerHeight = $(this).parents('.wpb_row').outerHeight();			
				var $containerWidth = $(this).parents('.wpb_row').outerWidth();
			}
			
		    // set the video viewport to the window size
		    $(this).width($containerWidth);
		    $(this).height($containerHeight);
		
		    // use largest scale factor of horizontal/vertical
		    var scale_h = $containerWidth / vid_w_orig;
		    var scale_v = ($containerHeight - $containerHeight) / vid_h_orig; 
		    var scale = scale_h > scale_v ? scale_h : scale_v;
			
			//update minium width to never allow excess space
		    min_w = 1280/720 * ($containerHeight+40);
		    
		    // don't allow scaled width < minimum video width
		    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;}
		        
		    // now scale the video
		    $(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * vid_w_orig +0));
		    $(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * vid_h_orig +0));
		    
		    // and center it by scrolling the video viewport
		    $(this).scrollLeft(($(this).find('video').width() - $containerWidth) / 2);
		    $(this).scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);
		    $(this).find('.mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);


		    //align bottom
		    if($(this).attr('data-bg-alignment') == 'center bottom' || $(this).attr('data-bg-alignment') == 'bottom'){
		    	$(this).scrollTop(($(this).find('video').height() - ($containerHeight+6)));
		    }
		    //align top
		    else if($(this).attr('data-bg-alignment') == 'center top' || $(this).attr('data-bg-alignment') == 'top') {
		    	$(this).scrollTop(0);
		    } 

		});
	}
    
    //init
    function videoBGInit(){
	    setTimeout(function(){
	    	resizeVideoToCover();
	    	$('.video-color-overlay').each(function(){
	    		$(this).css('background-color',$(this).attr('data-color'));
	    	});
	    	$('.nectar-video-wrap').each(function(i){
	    		var $headerVideo = ($(this).parents('#page-header-bg').length > 0) ? true : false;
	    		var $that = $(this);

	    		 var videoReady = setInterval(function(){

        			if($that.find('video').get(0).readyState > 3) {

        				$that.transition({'opacity':'1'},400);
		    			$that.find('video').transition({'opacity':'1'},400);
		    			$that.parent().find('.video-color-overlay').transition({'opacity':'0.7'},400);

		    			if($headerVideo == true) {
			    			pageHeaderTextEffect();
						}

						//remove page loading screen
						$('#ajax-loading-screen').addClass('loaded');
						setTimeout(function(){ $('#ajax-loading-screen').addClass('hidden'); },1000);
				

						clearInterval(videoReady);
					}
	    		},60);
	    		
	    	});
	    },300);

		if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)){
			$('.wpb_row .mobile-video-image, #page-header-wrap .mobile-video-image, .fullscreen-header .mobile-video-image').show();
			$('.nectar-video-wrap').remove();
		}

		
		 if(navigator.userAgent.indexOf('Chrome') > 0 && !/Edge\/12./i.test(navigator.userAgent) && !/Edge\/13./i.test(navigator.userAgent)) { 
		 	$('.nectar-video-wrap').each(function(i){
		 		if(jQuery(this).find('video source[type="video/webm"]').length > 0 ) {
				  	var webmSource = jQuery(this).find('video source[type="video/webm"]').attr('src') + "?id="+Math.ceil(Math.random()*10000);
		          	var firstVideo = jQuery(this).find('video').get(0);
		          	firstVideo.src = webmSource;
		          	firstVideo.load();
		         }
            });
	    }
	}
	videoBGInit();


/*-------------------------------------------------------------------------*/
/*	4.	Header + Search
/*-------------------------------------------------------------------------*/	 

/***************** Slide Out Widget Area **********/

$('body').on('click','.slide-out-widget-area-toggle a.closed:not(.animating)',function(){
	if(animating == 'true') return false;
	var $that = $(this);

	//slide out from right
	if($('#slide-out-widget-area').hasClass('slide-out-from-right')) {

		//calc height if used bottom meta
		$('#slide-out-widget-area .inner').css({'height':'auto', 'min-height': $('#slide-out-widget-area').height() - 25 - $('.bottom-meta-wrap').height() });

		if($('#boxed').length == 0) {
			$('.container-wrap, .home-wrap, #header-secondary-outer, #footer-outer, .nectar-box-roll, .parallax_slider_outer .swiper-slide .image-bg, .parallax_slider_outer .swiper-slide .video-wrap, .parallax_slider_outer .swiper-slide .mobile-video-image, .parallax_slider_outer .swiper-slide .container, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({ x: '-300px' },700,'easeInOutCubic');

			if($('#header-outer[data-transparency-option="1"]').length == 0) {
				$('#header-outer').stop(true).css('transform','translateY(0)').transition({ x: '-300px'},700,'easeInOutCubic');
			} else {
				$('#header-outer').stop(true).css('transform','translateY(0)').transition({ x: '-300px', 'background-color':'transparent', 'border-bottom': '1px solid rgba(255,255,255,0.22)' },700,'easeInOutCubic');
			}

			$('#ascrail2000').transition({ 'x': '-300px' },700,'easeInOutCubic');
			$('body:not(.ascend) #header-outer .cart-menu').stop(true).transition({ 'x': '300px' },700,'easeInOutCubic');
		}

		$('#slide-out-widget-area').stop(true).transition({ x: '0' },700,'easeInOutCubic').addClass('open');


		if($('#boxed').length == 0) {
			//full width menu adjustments
			if($('#header-outer[data-full-width="true"]').length > 0 && !$('body').hasClass('mobile')) { 
				$('#header-outer').addClass('highzI'); 
				$('#ascrail2000').addClass('z-index-adj');
				$('header#top #logo').stop(true).transition({ x: '300px' },700,'easeInOutCubic'); 
				
				$('header#top nav > ul > li.megamenu > ul.sub-menu').stop(true).transition({'width': $(window).width() - 360, 'left': '300px' },700,'easeInOutCubic');
				$('header#top .slide-out-widget-area-toggle .lines-button').addClass('close');

				if($('#header-outer[data-remove-border="true"]').length > 0) {
					$('body:not(.ascend) #header-outer[data-full-width="true"] header#top nav > ul.product_added').stop(true).transition({ x: '64px' },700,'easeInOutCubic');
				} else {
					$('body:not(.ascend) #header-outer[data-full-width="true"] header#top nav > ul.product_added').stop(true).transition({ x: '89px' },700,'easeInOutCubic'); 
				}

				$('body #header-outer nav > ul > li > a').css({'margin-bottom':'0'});
				
			}
		}

		$('#header-outer').addClass('style-slide-out-from-right');

		//fade In BG Overlay
		$('#slide-out-widget-area-bg').css({'height':'100%','width':'100%'}).stop(true).transition({
			'opacity' : 1
		},700,'easeInOutCubic',function(){
			$('.slide-out-widget-area-toggle > div > a').removeClass('animating');
		});
		
		//hide menu if no space
		$logoWidth = ($('#logo img:visible').length > 0) ? $('#logo img:visible').width() : $('#logo').width();
		if($('header#top nav > .sf-menu').offset().left - $logoWidth - 300 < 20) $('#header-outer').addClass('hidden-menu');



	} else if($('#slide-out-widget-area').hasClass('fullscreen')) {

		//scroll away from fixed reveal footer if shown (firefox bug with bluring over it)
		var $scrollDelay = 0;
		var $scrollDelay2 = 0;

		if($(window).scrollTop() + $(window).height() > $('.blurred-wrap').height()) {
			$('body,html').stop().animate({
				scrollTop: $('.blurred-wrap').height() - $(window).height()
			},600,'easeInOutCubic');
			$scrollDelay = 550;
			$scrollDelay2 = 200;
		}

		$('header#top .slide-out-widget-area-toggle .lines-button').addClass('close');
		setTimeout(function(){ $('.blurred-wrap').addClass('blurred'); },$scrollDelay);
		$('#slide-out-widget-area.fullscreen').show().addClass('open');

		hideToTop();

		//remove box shadow incase at the top of the page with nectar box roll above
		$('.container-wrap').addClass('no-shadow');
		$('#header-outer').stop(true).css('transform','translateY(0)');

		setTimeout(function(){

			$('.off-canvas-menu-container .menu > li').each(function(i){
				$(this).delay(i*50).transition({y: 0, 'opacity': 1},800,'easeOutExpo');
			});

			$('#slide-out-widget-area.fullscreen .widget').each(function(i){
				$(this).delay(i*100).transition({y: 0, 'opacity': 1},800,'easeOutExpo');
			});
		},300+$scrollDelay2);

		setTimeout(function(){
			$('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');

			$('#slide-out-widget-area .off-canvas-social-links li').each(function(i){
				$(this).delay(i*50).transition({'scale':1},400,'easeOutCubic');
			});
			$('#slide-out-widget-area .bottom-text').transition({'opacity':0.7},400,'easeOutCubic');
		},700+$scrollDelay2);
		
		//fade In BG Overlay
		setTimeout(function(){
			$easing = ($('body.mobile').length > 0) ? 'easeOutCubic' : 'easeInOutQuint';
			$('#slide-out-widget-area-bg').css({'height':'100%','width':'100%'}).show().stop(true).transition({
				'y' : '0%'
			},920,$easing,function(){
				$('.slide-out-widget-area-toggle > div > a').removeClass('animating');
			});
		},50+$scrollDelay2);

		//overflow state 
		slideOutWidgetOverflowState();
		if($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) $('#ajax-content-wrap').addClass('at-content');
		if($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || $('.mobile').length == 0 && $('#header-outer.transparent').length == 0) $('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', $('#header-outer').height());
	}



	
		

	//add open class
	$('#header-outer').removeClass('side-widget-closed').addClass('side-widget-open');

	//give header transparent state
	if($('#header-outer[data-transparency-option="1"]').length > 0 && $('#boxed').length == 0 && $('#header-outer[data-full-width="true"]').length > 0) {
		$('#header-outer').addClass('transparent');
	}

	//dark slide transparent nav
	if($('#header-outer.dark-slide.transparent').length > 0  && $('#boxed').length == 0) $('#header-outer').removeClass('dark-slide').addClass('temp-removed-dark-slide');
	
	$('.slide-out-widget-area-toggle > div > a').removeClass('closed').addClass('open');
	$('.slide-out-widget-area-toggle > div > a').addClass('animating');

	return false;
});

$('body').on('click','.slide-out-widget-area-toggle a.open:not(.animating), #slide-out-widget-area .slide_out_area_close',function(){

	var $that = $(this);

	$('.slide-out-widget-area-toggle a').removeClass('open').addClass('closed');
	$('.slide-out-widget-area-toggle a').addClass('animating');

	//slide out from right
	if($('#slide-out-widget-area').hasClass('slide-out-from-right')) {

		$('.container-wrap, .home-wrap, #header-secondary-outer, #footer-outer, .nectar-box-roll, .parallax_slider_outer .swiper-slide .image-bg, .parallax_slider_outer .swiper-slide .container, .parallax_slider_outer .swiper-slide .video-wrap, .parallax_slider_outer .swiper-slide .mobile-video-image, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({ x: '0px' },700,'easeInOutCubic');

		if($('#header-outer[data-transparency-option="1"]').length > 0  && $('#boxed').length == 0) {
			$currentRowBG = ($('#header-outer[data-current-row-bg-color]').length > 0) ? $('#header-outer').attr('data-current-row-bg-color') : $('#header-outer').attr('data-user-set-bg');
			$('#header-outer').stop(true).transition({ x: '0px', 'background-color': $currentRowBG },700,'easeInOutCubic');
		} else {
			$('#header-outer').stop(true).transition({ x: '0px' },700,'easeInOutCubic');
		}

		$('#ascrail2000').stop(true).transition({ 'x': '0px' },700,'easeInOutCubic');
		$('body:not(.ascend) #header-outer .cart-menu').stop(true).transition({ 'x': '0px' },700,'easeInOutCubic');

		$('#slide-out-widget-area').stop(true).transition({ x: '301px' },700,'easeInOutCubic').removeClass('open');


		if($('#boxed').length == 0) {
			if($('#header-outer[data-full-width="true"]').length > 0) {  
				$('#header-outer').removeClass('highzI'); 
				$('header#top #logo').stop(true).transition({ x: '0px' },700,'easeInOutCubic'); 
				$('header#top nav > ul > li.megamenu > ul.sub-menu').stop(true).transition({'width': '100%', 'left': '0' },700,'easeInOutCubic');
				$('.lines-button').removeClass('close');

				$('body:not(.ascend) #header-outer[data-full-width="true"] header#top nav > ul.product_added').stop(true).transition({ x: '0px' },700,'easeInOutCubic');

			}
		}

		//fade out overlay
		$('#slide-out-widget-area-bg').stop(true).transition({
			'opacity' : 0
		},700,'easeInOutCubic',function(){
			$('.slide-out-widget-area-toggle a').removeClass('animating');
			$(this).css({'height':'1px','width':'1px'});

			//hide menu if transparent, user has scrolled down and hhun is on
			if($('#header-outer').hasClass('parallax-contained') && $(window).scrollTop() > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
				$('#header-outer').removeClass('parallax-contained').addClass('detached').removeClass('transparent');
			}
			else if($(window).scrollTop() == 0 && $('body[data-hhun="1"]').length > 0 && $('#page-header-bg[data-parallax="1"]').length > 0 ||
				$(window).scrollTop() == 0 && $('body[data-hhun="1"]').length > 0 && $('.parallax_slider_outer').length > 0) {

				if($('#header-outer[data-transparency-option="1"]').length > 0) $('#header-outer').addClass('transparent');
				$('#header-outer').addClass('parallax-contained').removeClass('detached');
			}

			//fix for fixed subpage menu
			$('.container-wrap').css('transform','none');
		});


		$('#header-outer').removeClass('style-slide-out-from-right');


	} else if($('#slide-out-widget-area').hasClass('fullscreen')) {


		$('.lines-button').removeClass('close');
		//$('.slide-out-widget-area-toggle a').removeClass('animating');
		$('.blurred-wrap').removeClass('blurred');
		$('#slide-out-widget-area.fullscreen').transition({'opacity': 0 },700,'easeOutQuad',function(){ $('#slide-out-widget-area.fullscreen').hide().css('opacity','1'); }).removeClass('open');
		$('#slide-out-widget-area.fullscreen .widget').transition({'opacity': 0},700,'easeOutQuad',function(){
			$(this).transition({y: '110px'},0);
		});

		setTimeout(function(){
			$('.off-canvas-menu-container .menu > li').transition({y: '80px', 'opacity': 0},0);		
			$('#slide-out-widget-area .off-canvas-social-links li').transition({'scale':0},0);
			$('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
			$('#slide-out-widget-area .bottom-text').transition({'opacity':0},0);	

			//close submenu items
			$('#slide-out-widget-area .menuwrapper .menu').removeClass( 'subview' );
			$('#slide-out-widget-area .menuwrapper .menu li').removeClass( 'subview subviewopen' );
			$('#slide-out-widget-area.fullscreen .inner .off-canvas-menu-container').css('height','auto');
		},800);

		setTimeout(function(){
			showToTop();
			$('.container-wrap').removeClass('no-shadow');
		},500);

		//fade out overlay
		$('#slide-out-widget-area-bg').stop(true).transition({'opacity': 0},900,'easeOutQuad',function(){
			if($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) $('#ajax-content-wrap').removeClass('at-content');
			if($('.mobile #header-outer[data-permanent-transparent="false"]').length == 0) $('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', '0');
			$('.slide-out-widget-area-toggle a').removeClass('animating');
			if($('#slide-out-widget-area-bg').hasClass('dark')) $opacity = 0.93;
			if($('#slide-out-widget-area-bg').hasClass('medium')) $opacity = 0.6;
			if($('#slide-out-widget-area-bg').hasClass('light')) $opacity = 0.4;
			$(this).css({'height':'1px','width':'1px', 'opacity': $opacity}).transition({ y : '-100%'},0);
		});

		
	}


	//dark slide transparent nav
	if($('#header-outer.temp-removed-dark-slide.transparent').length > 0  && $('#boxed').length == 0) $('#header-outer').removeClass('temp-removed-dark-slide').addClass('dark-slide');

	//remove header transparent state

	if($('#header-outer[data-permanent-transparent="1"]').length == 0) {

		if($('.nectar-box-roll').length == 0) {
			if($('#header-outer.small-nav').length > 0 || $('#header-outer.scrolled-down').length > 0 || $('#header-outer.detached').length > 0) $('#header-outer').removeClass('transparent');
		} else {
			if($('#header-outer.small-nav').length > 0 || $('#header-outer.scrolled-down').length > 0 || $('.container-wrap.auto-height').length > 0) $('#header-outer').removeClass('transparent');
		}
	} 



	//remove hidden menu
	$('#header-outer').removeClass('hidden-menu');

	$('#header-outer').removeClass('side-widget-open').addClass('side-widget-closed');

	return false;
});

function slideOutWidgetOverflowState() {


	//switch position of social media/extra info based on screen size
	if(window.innerWidth < 1000 || $('body > #boxed').length > 0) {
		$('#slide-out-widget-area.fullscreen .off-canvas-social-links').appendTo('#slide-out-widget-area .inner');
		$('#slide-out-widget-area.fullscreen .bottom-text').appendTo('#slide-out-widget-area .inner');
	} else {
		$('#slide-out-widget-area.fullscreen .off-canvas-social-links').appendTo('#slide-out-widget-area .inner-wrap');
		$('#slide-out-widget-area.fullscreen .bottom-text').appendTo('#slide-out-widget-area .inner-wrap');
	}

	//add overflow
	if( $('#slide-out-widget-area.fullscreen .inner').height() >= $(window).height()-100) { $('#slide-out-widget-area.fullscreen .inner, #slide-out-widget-area.fullscreen').addClass('overflow-state'); }
	else { $('#slide-out-widget-area.fullscreen .inner, #slide-out-widget-area.fullscreen').removeClass('overflow-state'); }

	$('#slide-out-widget-area.fullscreen .inner').transition({ y : '-' + ($('#slide-out-widget-area.fullscreen .inner').height()/2) + 'px' },0);

	//close mobile only slide out widget area if switching back to desktop
	if($('.slide-out-from-right.open .off-canvas-menu-container.mobile-only').length > 0 && $('body.mobile').length == 0) $('#slide-out-widget-area .slide_out_area_close').trigger('click');

}

function fullWidthHeaderSlidingWidgetMenuCalc() {
	$('header#top nav > ul > li.megamenu > ul.sub-menu').stop(true).transition({'width': $(window).width() - 360, 'left': '300px' },700,'easeInOutCubic');
}

//slide out widget area scrolling 
function slideOutWidgetAreaScrolling(){ 
	$('#slide-out-widget-area').mousewheel(function(event, delta) {

	     this.scrollTop -= (delta * 30);
	    
	     event.preventDefault();

	});
}
slideOutWidgetAreaScrolling();


//handle mobile scrolling
if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
	$('#slide-out-widget-area').addClass('mobile');
}


//fullscreen submenu


/**
 * jquery.dlmenu.js v1.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

	'use strict';

	// global
	var Modernizr = window.Modernizr, $body = $( 'body' );

	$.DLMenu = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.DLMenu.defaults = {
		// classes for the animation effects
		animationClasses : { classin : 'dl-animate-in-1', classout : 'dl-animate-out-1' },
		// callback: click a link that has a sub menu
		// el is the link element (li); name is the level name
		onLevelClick : function( el, name ) { return false; },
		// callback: click a link that does not have a sub menu
		// el is the link element (li); ev is the event obj
		onLinkClick : function( el, ev ) { return false; }
	};

	$.DLMenu.prototype = {
		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.DLMenu.defaults, options );
			// cache some elements and initialize some variables
			this._config();
			
			var animEndEventNames = {
					'WebkitAnimation' : 'webkitAnimationEnd',
					'OAnimation' : 'oAnimationEnd',
					'msAnimation' : 'MSAnimationEnd',
					'animation' : 'animationend'
				},
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			// animation end event name
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ] + '.menu';
			// transition end event name
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.menu',
			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations,
			this.supportTransitions = Modernizr.csstransitions;

			this._initEvents();

		},
		_config : function() {
			this.open = false;
			this.$trigger = this.$el.children( '.trigger' );
			this.$menu = this.$el.children( 'ul.menu' );
			this.$menuitems = this.$menu.find( 'li:not(.back) > a' );
			this.$el.find( 'ul.sub-menu' ).prepend( '<li class="back"><a href="#"> '+$('#slide-out-widget-area').attr('data-back-txt')+' </a></li>' );
			this.$back = this.$menu.find( 'li.back' );
		},
		_initEvents : function() {

			var self = this;

			this.$trigger.on( 'click.menu', function() {
				
				if( self.open ) {
					self._closeMenu();
				} 
				else {
					self._openMenu();
				}
				return false;

			} );
			
			this.$menuitems.on( 'click.menu', function( event ) {
				
				//event.stopPropagation();

				var $item = $(this).parent('li'),
					$submenu = $item.children( 'ul.sub-menu' );

				//exit if clicking on background LI (avoids effect wrongly triggering)
				//if( $item.find('> a').length > 0 && $item.find('> a').css('display') === 'none') return false;
			
				if( $submenu.length > 0 ) {

					var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu ),
						onAnimationEndFn = function() {
							self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'subview' );
							$item.addClass( 'subviewopen' ).parents( '.subviewopen:first' ).removeClass( 'subviewopen' ).addClass( 'subview' );
							$flyin.remove();
						};

					setTimeout( function() {
						$flyin.addClass( self.options.animationClasses.classin );
						self.$menu.addClass( self.options.animationClasses.classout );
						if( self.supportAnimations ) {
							self.$menu.on( self.animEndEventName, onAnimationEndFn );
						}
						else {
							onAnimationEndFn.call();
						}

						self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
					} );


					//adjust height for mobile / widgets below
					$item.parents('.off-canvas-menu-container').css('height',$item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height()).transition({ 'height': $flyin.height() },500,'easeInOutQuad' );

					return false;

				}
				else {
		
					self.options.onLinkClick( $item.find('> a'), event );
				}

			});

			


			this.$back.on( 'click.menu', function( event ) {
				
				var $this = $( this ),
					$submenu = $this.parents( 'ul.sub-menu:first' ),
					$item = $submenu.parent(),

					$flyin = $submenu.clone().insertAfter( self.$menu );

				var onAnimationEndFn = function() {
					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classin );
					$flyin.remove();
				};

				setTimeout( function() {
					$flyin.addClass( self.options.animationClasses.classout );
					self.$menu.addClass( self.options.animationClasses.classin );
					if( self.supportAnimations ) {
						self.$menu.on( self.animEndEventName, onAnimationEndFn );
					}
					else {
						onAnimationEndFn.call();
					}

					$item.removeClass( 'subviewopen' );
					
					var $subview = $this.parents( '.subview:first' );
					if( $subview.is( 'li' ) ) {
						$subview.addClass( 'subviewopen' );
					}
					$subview.removeClass( 'subview' );
				} );

		
				//adjust height for mobile / widgets below
				$item.parents('.off-canvas-menu-container').css('height', $item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height())
				setTimeout(function() { 
					$item.parents('.off-canvas-menu-container').transition({ 'height': $item.parent().height() },500,'easeInOutQuad');
				},50);


				return false;

			} );
			
		},
		closeMenu : function() {
			if( this.open ) {
				this._closeMenu();
			}
		},
		_closeMenu : function() {
			var self = this,
				onTransitionEndFn = function() {
					self.$menu.off( self.transEndEventName );
					self._resetMenu();
				};
			
			this.$menu.removeClass( 'menuopen' );
			this.$menu.addClass( 'menu-toggle' );
			this.$trigger.removeClass( 'active' );
			
			if( this.supportTransitions ) {
				this.$menu.on( this.transEndEventName, onTransitionEndFn );
			}
			else {
				onTransitionEndFn.call();
			}

			this.open = false;
		},
		openMenu : function() {
			if( !this.open ) {
				this._openMenu();
			}
		},
		_openMenu : function() {
			var self = this;
			// clicking somewhere else makes the menu close
			$body.off( 'click' ).on( 'click.menu', function() {
				self._closeMenu() ;
			} );
			this.$menu.addClass( 'menuopen menu-toggle' ).on( this.transEndEventName, function() {
				$( this ).removeClass( 'menu-toggle' );
			} );
			this.$trigger.addClass( 'active' );
			this.open = true;
		},
		// resets the menu to its original state (first level of options)
		_resetMenu : function() {
			this.$menu.removeClass( 'subview' );
			this.$menuitems.removeClass( 'subview subviewopen' );
		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.dlmenu = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'menu' );
				if ( !instance ) {
					logError( "cannot call methods on menu prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for menu instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {	
				var instance = $.data( this, 'menu' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'menu', new $.DLMenu( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );

function fullscreenMenuInit() {
	$('#slide-out-widget-area .off-canvas-menu-container .menu').wrap('<div class="menu-wrap menuwrapper" />');
	$('#slide-out-widget-area .off-canvas-menu-container .menu').addClass('menuopen');
	$('#slide-out-widget-area .off-canvas-menu-container .menu-wrap').dlmenu({ animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' } });
}
fullscreenMenuInit();

//submenu link hover fix
$('body').on('mouseover','#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a',function(){
	var $currentTxt = $(this).text();
	$('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
	$('.off-canvas-menu-container .menuwrapper .menu li > a:contains('+$currentTxt+')').addClass('hovered');
});
$('body').on('mouseover','.off-canvas-menu-container .menuwrapper .menu li > a',function(){
	$('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
});



/***************** Page Headers ******************/

var pageHeaderHeight;
var pageHeaderHeightCopy;
var pageHeadingHeight;
var extraSpaceFromResize = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.nectar-box-roll').length == 0) ? 51 : 1;
//full screen header
function fullScreenHeaderInit(){

	pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
	pageHeaderHeightCopy = parseInt($('#page-header-bg').attr('data-height'));

	if($('.fullscreen-header').length > 0) {

		if($('#header-outer[data-transparency-option]').length > 0 && $('#header-outer').attr('data-transparency-option') != '0'){
			var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() : $(window).height() - parseInt($('#header-outer').height()) ;
		} else {
			var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() - parseInt($('#header-space').height()) + extraSpaceFromResize : $(window).height() - parseInt($('#header-outer').height()) ;
		}
		var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar
		if($('.nectar-box-roll').length > 0) extraHeight = 0;
		pageHeaderHeight =   calculatedNum  - extraHeight; 
		pageHeaderHeightCopy = calculatedNum - extraHeight; 
	}

	$('#page-header-bg').css('height',pageHeaderHeight+'px').removeClass('not-loaded');
	setTimeout(function(){ $('#page-header-bg').css('overflow','visible') },800);

}

fullScreenHeaderInit();

function pageHeader(){
	
	//add loaded class
	$('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass('loaded');

	var $scrollTop = $(window).scrollTop();

	//full screen header
	if($('.fullscreen-header').length > 0) {
		if($('#header-outer[data-transparency-option]').length > 0 && $('#header-outer').attr('data-transparency-option') != '0'){
			var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() : $(window).height() - parseInt($('#header-outer').height()) ;
			if($('body[data-permanent-transparent="1"]').length > 0) calculatedNum = $(window).height();
		} else {
			var calculatedNum = (!$('body').hasClass('mobile')) ? $(window).height() - parseInt($('#header-space').height()) + extraSpaceFromResize : $(window).height() - parseInt($('#header-outer').height()) ;
		}
		var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar
		if($('.nectar-box-roll').length > 0) extraHeight = 0;
		pageHeaderHeight =   calculatedNum  - extraHeight; 
		pageHeaderHeightCopy = calculatedNum - extraHeight; 
	}

	if( window.innerWidth < 1000 && window.innerWidth > 690 && !$('body').hasClass('salient_non_responsive') ) {
		var $multiplier = ($('.fullscreen-header').length > 0) ? 1 : 1.6;
		$('#page-header-bg').attr('data-height', pageHeaderHeightCopy/$multiplier).css('height',pageHeaderHeightCopy/$multiplier +'px');
		$('#page-header-wrap').css('height',pageHeaderHeightCopy/$multiplier +'px');
		
	} else if( window.innerWidth <= 690 && window.innerWidth > 480 && !$('body').hasClass('salient_non_responsive')) {
		var $multiplier = ($('.fullscreen-header').length > 0) ? 1 : 2.1;
		$('#page-header-bg').attr('data-height', pageHeaderHeightCopy/$multiplier).css('height',pageHeaderHeightCopy/$multiplier +'px');
		$('#page-header-wrap').css('height',pageHeaderHeightCopy/$multiplier +'px');
		
	} else if( window.innerWidth <= 480 && !$('body').hasClass('salient_non_responsive')) {
		var $multiplier = ($('.fullscreen-header').length > 0) ? 1 : 2.5;
		$('#page-header-bg').attr('data-height', pageHeaderHeightCopy/$multiplier).css('height',pageHeaderHeightCopy/$multiplier +'px');
		$('#page-header-wrap').css('height',pageHeaderHeightCopy/$multiplier +'px');
		
	} else {
		$('#page-header-bg').attr('data-height', pageHeaderHeightCopy).css('height',pageHeaderHeightCopy +'px');
		if($('.fullscreen-header').length > 0){
			$('#page-header-wrap').css('height',pageHeaderHeightCopy +'px');
		} else {
			$('#page-header-wrap').css('height',pageHeaderHeightCopy +'px');
		}

		if($('#page-header-bg[data-parallax="1"]').length == 0) $('#page-header-wrap').css('height',pageHeaderHeightCopy +'px');
	}

	
	
	if(!$('body').hasClass('mobile')){
		
		//recalc
		pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
		$('#page-header-bg .container > .row').css('top',0);
		var $divisionMultipler = ($('#header-outer[data-remove-border="true"]').length > 0) ? 2 : 1;

		//center the heading
		pageHeadingHeight = $('#page-header-bg .col.span_6').height();
		
		if($('#header-outer[data-transparent-header="true"]').length > 0 && $('.fullscreen-header').length == 0) {
			$('#page-header-bg:not("[data-parallax=1]") .col.span_6').css('top', ((pageHeaderHeight+$('#header-space').height()/$divisionMultipler)/2) - (pageHeadingHeight/2));
		} else {
			var $extraResizeHeight = ($('#header-outer[data-header-resize="1"]').length > 0) ? 22: 0;
			$('#page-header-bg:not("[data-parallax=1]") .col.span_6').css('top', (pageHeaderHeight/2) - (pageHeadingHeight/2) + $extraResizeHeight);
		}
		
		//center portfolio filters
		$('#page-header-bg:not("[data-parallax=1]") .portfolio-filters').css('top', (pageHeaderHeight/2) + 2);	
		
		if($('#page-header-bg[data-parallax="1"] .span_6').css('opacity') > 0) {
			
			if($('#header-outer[data-transparent-header="true"]').length > 0 && $('body.single-post .fullscreen-header').length == 0) {
				//center the parallax heading

			    $('#page-header-bg[data-parallax="1"] .span_6').css({ 
					'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+60)),
					'top' : (((pageHeaderHeight+$('#header-space').height()/$divisionMultipler)/2) - (pageHeadingHeight/2)) +"px"
			    });
			    
			    //center parllax portfolio filters
			    $('#page-header-bg[data-parallax="1"] .portfolio-filters').css({ 
					'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+75)),
					'top' : ($scrollTop*-0.10) + ((pageHeaderHeight/2)) - 7 +"px"
			    });
		  } else {
		  		//center the parallax heading
			    $('#page-header-bg[data-parallax="1"] .span_6').css({ 
					'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+60)),
					'top' : ((pageHeaderHeight/2) - (pageHeadingHeight/2)) +10 +"px"
			    });
			    
			    //center parllax portfolio filters
			    $('#page-header-bg[data-parallax="1"] .portfolio-filters').css({ 
					'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+75)),
					'top' : ($scrollTop*-0.10) + ((pageHeaderHeight/2)) - 7 +"px"
			    });
		  }
	   }
	}
	
	else {
		//recalc
		pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
		
		//center the heading
		var pageHeadingHeight = $('#page-header-bg .container > .row').height();
		$('#page-header-bg .container > .row').css('top', (pageHeaderHeight/2) - (pageHeadingHeight/2) + 5);
		
	}


	$('#page-header-bg .container > .row').css('visibility','visible');
}

var $pt_timeout = ($('body[data-ajax-transitions="true"]').length > 0 && $('#page-header-bg[data-animate-in-effect="slide-down"]').length > 0) ? 350 : 0; 
setTimeout(function(){ pageHeader(); },$pt_timeout);


if($('#header-outer').attr('data-header-resize') == '' || $('#header-outer').attr('data-header-resize') == '0'){
	$('#page-header-wrap').css('margin-top','0');
}


function extractUrl(input) {
	return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
}
 
/***************** Parallax Page Headers ******************/
if($('#page-header-bg[data-parallax="1"]').length > 0) {

	//fadeIn

	var img = new Image();
	
	var imgX, imgY, aspectRatio;
	var diffX, diffY;
	var pageHeadingHeight = $('#page-header-bg .col.span_6').height();
	var pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
	var headerPadding2 = parseInt($('#header-outer').attr('data-padding'))*2;
	var wooCommerceHeader = ($('.demo_store').length > 0) ? 32 : 0 ;
	
	
	var $initialImgCheck = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
	
	if ($initialImgCheck && $initialImgCheck.indexOf('.') !== -1) {    
		img.onload = function() {
		   pageHeaderInit(); 
		}
		
		img.src = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
		
	} else {
		 pageHeaderInit();
	}
	
	
	
	var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar


	 if($('body[data-hhun="1"]').length > 0)  $('#header-outer').addClass('parallax-contained');

	 window.addEventListener('scroll', function(){ 
        window.requestAnimationFrame(bindHeaderParallax);
    }, false);

}


function bindHeaderParallax(){

	var $scrollTop = $(window).scrollTop();
	var pageHeadingHeight = $('#page-header-bg .col.span_6').height();
	
	
	if(!$('body').hasClass('mobile') && navigator.userAgent.match(/iPad/i) == null){

		var $multiplier1 =  ($('body[data-hhun="1"]').length > 0) ? 0.40: 0.2;
   	    var $multiplier2 = ($('body[data-hhun="1"]').length > 0) ? 0.09: 0.14;
   	    var $parallaxHeaderHUN = ($('#header-outer[data-transparency-option="1"]').length > 0) ? 0.49: 0.4;

		//calc bg pos
		//$('#page-header-bg[data-parallax="1"]').css({'top': ((- $scrollTop / 5)+logoHeight+headerPadding+headerResizeOffExtra+extraHeight-extraDef+secondaryHeader)  + 'px' });
		if($('#page-header-bg .nectar-particles').length == 0 && $('#page-header-bg.out-of-sight').length == 0) {

			$('#page-header-bg[data-parallax="1"]').css({ 'transform': 'translateY('+ $scrollTop*-$multiplier1 +'px)' });	
		
			var multipler = ($('body').hasClass('single')) ? 1 : 2;
			$('#page-header-bg[data-parallax="1"] .span_6,  #page-header-bg[data-parallax="1"][data-post-hs="default_minimal"] .author-section').css({ 
				'opacity' : 1-($scrollTop/(pageHeaderHeight-60))
			});
			
			$('#page-header-bg[data-parallax="1"] .span_6, body[data-button-style="rounded"] #page-header-bg[data-parallax="1"] .section-down-arrow, #page-header-bg[data-parallax="1"][data-post-hs="default_minimal"] .author-section').css({ 'transform': 'translateY('+ $scrollTop*- $multiplier2+'px)' });
			
			
			if($('#page-header-bg[data-parallax="1"] .span_6').css('opacity') == 0){
				$('#page-header-bg[data-parallax="1"] .span_6, #page-header-bg[data-parallax="1"] .portfolio-filters').hide();
			} else {
				$('#page-header-bg[data-parallax="1"] .span_6, #page-header-bg[data-parallax="1"] .portfolio-filters').show();
			}

			if($('body[data-hhun="1"]').length > 0  && !$('#header-outer').hasClass('side-widget-open') && !$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')) { 
	            $('#header-outer.parallax-contained').css({ 'transform': 'translateY('+$scrollTop*-$parallaxHeaderHUN+'px)' });
	        }
			
		
		}
		else if($('#page-header-bg.out-of-sight').length == 0) {
			//alt parallax effect
			var multipler = ($('body').hasClass('single')) ? 1 : 2;
			$('#page-header-wrap .nectar-particles .fade-out').css({ 
				'opacity' : 0+($scrollTop/(pageHeaderHeight+pageHeaderHeight*$multiplier))
			});
		}


		//hide elements to allow other parallax sections to work in webkit browsers
		if( ($scrollTop / (pageHeaderHeight + $('#header-space').height() + extraHeight)) > 1 ) {
			$('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility','hidden').hide().addClass('out-of-sight');
		}
		else {
		 	$('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility','visible').show().removeClass('out-of-sight');

		 		//ensure header is centered
		 		pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
				$('#page-header-bg .container > .row').css('top',0);
				var $divisionMultipler = ($('#header-outer[data-remove-border="true"]').length > 0) ? 2 : 1;
				pageHeadingHeight = $('#page-header-bg .col.span_6').height();

				if($('#header-outer[data-transparent-header="true"]').length > 0 && $('body.single-post .fullscreen-header').length == 0) {
					//center the parallax heading
				    $('#page-header-bg[data-parallax="1"] .span_6').css({ 
						'top' : (((pageHeaderHeight+$('#header-space').height()/$divisionMultipler)/2) - (pageHeadingHeight/2)) +"px"
				    });

			  	} else {
			  		//center the parallax heading
				    $('#page-header-bg[data-parallax="1"] .span_6').css({ 
						'top' : ((pageHeaderHeight/2) - (pageHeadingHeight/2)) +10 +"px"
				    });
			  	}
	    }
		

	}

}

if($('#page-header-bg').length > 0) {
	var $initialImgCheckAscend = extractUrl($('#page-header-bg').css('background-image'));
	if ($initialImgCheckAscend && $initialImgCheckAscend.indexOf('.') !== -1) {    
		   $('#page-header-bg').addClass('has-bg');
	}
}


function pageHeaderInit(){

	 var wooCommerceHeader = ($('.demo_store').length > 0) ? 32 : 0 ;
	 var centeredNavAltSpace = ($('#header-outer[data-format="centered-menu-under-logo"]').length > 0) ? $('header#top nav > .sf-menu').height() -20 : null;
	 //transparent
	  if($('#header-outer[data-transparent-header="true"]').length > 0) {	
	     $('#page-header-bg[data-parallax="1"]').css({'top': extraHeight+wooCommerceHeader });
	  } else {
	  	 if($('body[data-header-resize="0"]').length == 0) $('#page-header-bg[data-parallax="1"]').css({'top': (logoHeight+headerPadding+centeredNavAltSpace+headerResizeOffExtra+extraHeight-extraDef+secondaryHeader+wooCommerceHeader)  + 'px' });
	  }
	  
	  //fade in header
	  if($('#ajax-content-wrap').length == 0 || !$('body').hasClass('ajax-loaded')){
	  	$('#page-header-bg[data-parallax="1"]').animate({ 'opacity' : 1},650,'easeInCubic');
	  } else if($('#ajax-content-wrap').length == 1) {
	  	$('#page-header-bg[data-parallax="1"]').css({ 'opacity' : 1});
	  }

	  //$('#page-header-wrap').css({'height' : pageHeaderHeight});
	  
	  //verify smooth scorlling
	  if( $smoothCache == true && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)){ niceScrollInit(); $(window).trigger('resize') } 
	  
	  /* $('#page-header-bg[data-parallax="1"] .span_6').css({ 
			'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+60))
			'top' : ((pageHeaderHeight/2) - (pageHeadingHeight/2)) +10 +"px"
	   });
	   
	   $('#page-header-bg[data-parallax="1"] #portfolio-filters').css({ 
			'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+75)),
			'top' : ($scrollTop*-0.10) + ((pageHeaderHeight/2)) - 7 +"px"
	   }); */
	  
	  $('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />');
}




function nectarPageHeader() {

	if($('#page-header-bg').length > 0) {
		fullScreenHeaderInit();
		pageHeader();
	}


	if($('#page-header-bg[data-parallax="1"]').length > 0) {

		var img = new Image();
		var $initialImgCheck = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
			
		if ($initialImgCheck && $initialImgCheck.indexOf('.') !== -1) {    
			img.onload = function() {
			   pageHeaderInit();    
					
			}
			
			img.src = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
			
		} else {
			 pageHeaderInit();
		}

		//bindHeaderParallax();
		$('#page-header-bg[data-parallax="1"] .span_6').css({ 
			'opacity' : 1
		});

		

		if (window.addEventListener) {
			 window.addEventListener('scroll', function(){ 
	          requestAnimationFrame(bindHeaderParallax); 
	        }, false);
		}

	} 

	if($('#page-header-bg').length > 0) {
		var $initialImgCheckAscend = extractUrl($('#page-header-bg').css('background-image'));
		if ($initialImgCheckAscend && $initialImgCheckAscend.indexOf('.') !== -1) {    
			   $('#page-header-bg').addClass('has-bg');
		}
	}
}

if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
	window.onunload = function(){ nectarPageHeader(); };
}


/***************** header text effects *****************/

// rotate in
function pageHeaderTextEffectInit() {
	$('#page-header-bg').each(function(){
		if($(this).attr('data-text-effect') == 'rotate_in') {
			var $topHeading = 'none';

			if($(this).find('.span_6 h1').length > 0) {
				$topHeading = 'h1';
			} 
			//else if ($(this).find('.span_6 h2').length > 0) {
			//	$topHeading = 'h2';
			//}

			if($topHeading != 'none') {

				var $selector = ($(this).find('.nectar-particles').length > 0) ? '.inner-wrap.shape-1' : '.span_6';

				$(this).find($selector).find($topHeading).addClass('top-heading').contents().filter(function () {
			        return this.nodeType === 3 && typeof this.data != 'undefined' && this.data.replace(/\s+/, "");
			    }).wrap('<span class="wraped"></span>');

			    $(this).find($selector).find('.wraped').each(function () {

				    textNode = $(this);

				    text = textNode.text().split(' ');
				    replace = '';

				    $.each(text, function (index, value) {
				        if (value.replace(/\s+/, "")) {
				            replace += '<span class="wraped"><span>' + value + '</span></span> ';
				        }
				    });
				    textNode.replaceWith($(replace));
				    
				});
			}//make sure suitable heading was found

		}//tilt
	});
	
}
function pageHeaderTextEffect() {

	if($('#page-header-bg .nectar-particles').length == 0 && $('#page-header-bg[data-text-effect="none"]').length == 0 || $('.nectar-box-roll').length > 0 && $('#page-header-bg .nectar-particles').length == 0) {

		var $selector = ($('.nectar-box-roll').length == 0) ? '#page-header-bg .span_6' : '.nectar-box-roll .overlaid-content .span_6';

		$($selector).find('.wraped').each(function(i){
			$(this).find('span').delay(i*370).transition({ rotateX: '0', 'opacity' : 1, y: 0},400,'easeOutQuad');
		});

		setTimeout(function(){

			$($selector).find('.inner-wrap > *:not(.top-heading)').each(function(i){
				$(this).delay(i*370).transition({ rotateX: '0', 'opacity' : 1, y: 0 },650,'easeOutQuad');
			});

			$('.scroll-down-wrap').removeClass('hidden');

		}, $($selector).find('.wraped').length * 370);
	}

}
var $effectTimeout = ($('#ajax-loading-screen').length > 0) ? 800 : 0;
pageHeaderTextEffectInit();
if($('#page-header-bg .nectar-video-wrap video').length == 0) setTimeout(pageHeaderTextEffect,$effectTimeout);




 //submenu fix
  if($('header#top nav > ul.sf-menu ul').length > 0) {

  	var $midnightSubmenuTimeout;
  	$('body').on('mouseover','#header-outer .midnightHeader .sf-with-ul, #header-outer .midnightHeader .cart-menu',function(){

  		if($(this).parents('.midnightHeader').offset().top - $(window).scrollTop() < 50){
  		
  			$(this).parents('.midnightHeader').css({'z-index': '9999'}).addClass('overflow');
  			$(this).parents('.midnightInner').css('overflow','visible');
  		}
  	});
  	$('body').on('mouseleave','#header-outer .midnightHeader',function(){
  		var $that = $(this);
  		clearTimeout($midnightSubmenuTimeout);
  		$midnightSubmenuTimeout = setTimeout(function(){
  			if(!$that.is(':hover')) {
  				$that.css({'z-index': 'auto'}).removeClass('overflow');
  				$that.find('.midnightInner').css('overflow','hidden');
  		
  			}

  		},900);
  	});
  }

  function midnightInit() {
  	if( $('#header-outer[data-permanent-transparent="1"]').length > 0 && $('body[data-bg-header="true"]').length > 0) {
  		 $('#header-outer').midnight();

  		 //no menu
  		 if($('#header-outer[data-has-menu="false"]').length > 0) {
  			 //fix the pointer events
  			 //var enableHandler = false;

  			 var $buttonsOffset = $('#header-outer header#top nav > ul.buttons').position();
  			 if($('#header-outer #logo img').length > 0) {
  			 	var $logoOffset = $('#header-outer #logo img:visible').position();
  			 	var $logoOffsetTop = $('#header-outer #logo img:visible').position().top;
  			 	var $logoMargin = parseInt($('#header-outer #logo img:visible').css('margin-top'));
  			 	var $logoWidth = $('#header-outer #logo img:visible').width();
  			 } else {
  			 	var $logoOffset = $('#header-outer .span_3 #logo:visible').offset();
  			 	var $logoOffsetTop = $('#header-outer .span_3 #logo:visible').offset().top - $(window).scrollTop();
  			 	var $logoMargin = parseInt($('#header-outer .span_3 #logo:visible').css('margin-top'));
  			 	var $logoWidth = $('#header-outer #logo').width();
  			 }
  			 
  			 var $containerMargin = parseInt($('#header-outer header > .container').css('padding-left'));
  			 var $headerOffset = $('#header-outer').position();
  			 //recalc offsets
  			 $(window).on('smartresize', function(){
  			 	if($('#header-outer #logo img').length > 0) {
  				 	$logoMargin = parseInt($('#header-outer #logo img:visible').css('margin-top'));
  				 	$logoOffset = $('#header-outer #logo img:visible').position();
  				 	$logoOffsetTop = $('#header-outer #logo img:visible').position().top;
  				 	$logoWidth = $('#header-outer #logo img:visible').width();
  				 } else {
  				 	$logoMargin = parseInt($('#header-outer .span_3 #logo:visible').css('margin-top'));
  				 	$logoOffset = $('#header-outer .span_3 #logo:visible').offset();
  				 	$logoOffsetTop = $('#header-outer .span_3 #logo:visible').offset().top - $(window).scrollTop();
  				 	$logoWidth = $('#header-outer #logo').width();
  				 }
  			 	$containerMargin = parseInt($('#header-outer header > .container').css('padding-left'));
  			    $buttonsOffset = $('#header-outer header#top nav > ul.buttons').position();
  			    $headerOffset = $('#header-outer').position();
  			 });

  			 $('body').mousemove(function(e){
  			 	if($('body.mobile').length == 0) {
  			 	
  					 	//hover over buttons || logo check
  					 	if(e.clientX >= $buttonsOffset.left + $containerMargin && 
  					 	   e.clientY >= $buttonsOffset.top  && 
  					 	   e.clientY <= $buttonsOffset.top + $headerOffset.top + $('#header-outer header#top nav > ul.buttons').height() ||
  					 	   e.clientX <= $logoOffset.left + $containerMargin + $logoWidth &&
  					 	   e.clientY >= $logoOffsetTop && 
  					 	   e.clientY <= $logoOffsetTop + $logoMargin + $headerOffset.top + $('#header-outer #logo img:visible').height() ) {
  					 		$('.midnightHeader, #header-outer').removeClass('no-pointer-events');

  					 	} else {
  					 		$('.midnightHeader, #header-outer').addClass('no-pointer-events');
  					 	}

  					
  				} else {
  					$('.midnightHeader, #header-outer').removeClass('no-pointer-events');
  				}
  			 });

  	
  		}

  		//using menu
  		else if($('#header-outer[data-has-menu="true"]').length > 0) {

  			 var $headerPos = $('header#top .container').position();
  			 var $headerOffset = $('header#top .container').offset();
  			 //recalc offsets
  			 $(window).on('smartresize', function(){
  			 	
  			    $headerPos = $('header#top .container').position();
  			    $headerOffset = $('header#top .container').offset();

  			 });

  			 $('body').mousemove(function(e){
  			 	if($('body.mobile').length == 0) {

  					 	//hover over buttons || logo check
  					 	if(e.clientX >= $headerOffset.left &&
  					 	   e.clientY >= $headerPos.top  && 
  					 	   e.clientY <= $('header#top .container .row').height()) {
  					 		$('.midnightHeader, #header-outer').removeClass('no-pointer-events');
  					 	} else if($('li.sfHover').length == 0) {
  					 		$('.midnightHeader, #header-outer').addClass('no-pointer-events');
  					 	}

  					
  				} else {
  					$('.midnightHeader, #header-outer').removeClass('no-pointer-events');
  				}
  			 });

  		}
  	}
  }



//box roll
function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}


function boxRollInit() {
	if($('.nectar-box-roll').length > 0) { 

		$('body').attr('data-scrollbar-width',getScrollbarWidth());

		$('body, html, #ajax-content-wrap, .container-wrap, .blurred-wrap').addClass('no-scroll');
		$('body,html').stop().animate({ scrollTop:0 },0);
		$('.container-wrap').css('opacity',0).addClass('no-transform-animation-bottom-out').addClass('bottomBoxOut');
		//keep loading icon centered if scrollbar is going away
		if($('.mobile').length == 0) $('#ajax-loading-screen .loading-icon > span').css({ 'left' : '-'+getScrollbarWidth()/2 +'px'});

		//change content pos
		var $overlaid = $('#page-header-bg .overlaid-content').clone();
		var $scrollDownOverlaid = $('.scroll-down-wrap').clone();
		$('#page-header-bg').removeAttr('data-midnight');
		$('#page-header-bg .overlaid-content, #page-header-bg .scroll-down-wrap').remove();
		$('.nectar-box-roll').append($overlaid).attr('data-midnight','light');
		$('.overlaid-content').append($scrollDownOverlaid);


		nectarBoxRollContentHeight();
		setTimeout(function() { pageLoadHash(); },700);
	} else {
		$('#ajax-content-wrap, .blurred-wrap').addClass('at-content');
		$('body, html, #ajax-content-wrap, .container-wrap, .blurred-wrap').removeClass('no-scroll');
		$('.container-wrap').css('opacity',1).removeClass('no-transform-animation-bottom-out').removeClass('bottomBoxOut').removeClass('bottomBoxIn');
		perspect = 'not-rolled';
	}
}
boxRollInit();

function nectarBoxRollContentHeight() {
	/*if($('#header-outer[data-transparent-header="true"]').length == 0 && $('.mobile').length == 0) {
		$('.nectar-box-roll').css('top',$('#header-space').height());
	} else {
		$('.nectar-box-roll').css('top','0');
	}*/
	
	if($('#header-outer[data-transparent-header="true"]').length == 0) {
		$('.nectar-box-roll .overlaid-content, .nectar-box-roll .canvas-bg, .container-wrap').css({'height':window.innerHeight - $('#header-space').height(), 'min-height':window.innerHeight - $('#header-space').height() });
		if($('.mobile').length == 0) $('#ajax-content-wrap').css('margin-top',$('#header-space').height());
		else $('#ajax-content-wrap').css('margin-top','0');
	} else {
		$('.nectar-box-roll .overlaid-content, .nectar-box-roll .canvas-bg, .container-wrap').css('height',window.innerHeight);
	}
}

if($('.nectar-box-roll').length > 0) $(window).on('resize',nectarBoxRollContentHeight);


var perspect = 'not-rolled';
var animating = 'false';
function boxRoll(e,d) {
	
	if($('#slide-out-widget-area.open').length > 0) return false;
	if( $('.nectar-box-roll canvas').length > 0 && $('.nectar-box-roll canvas[data-loaded="true"]').length == 0) return false;

	if(perspect == 'not-rolled' && animating == 'false' && d == -1) {
		perspect = 'rolled';
		animating = 'true';
		$('body').addClass('box-animating').addClass('box-perspective-rolled').addClass('box-rolling');

		$('.nectar-box-roll #page-header-bg').removeClass('topBoxIn').addClass('topBoxOut').css('will-change','transform');
		
		$('.nectar-box-roll .overlaid-content').removeClass('topBoxIn2').removeClass('topBoxIn').addClass('topBoxOut2').css('will-change','transform');
		
		$('.container-wrap').removeClass('bottomBoxOut').addClass('bottomBoxIn').removeClass('no-transform-animation-bottom-out').addClass('nectar-box-roll-class').css('will-change','transform');
		if($('#header-outer[data-transparent-header="true"]').length == 0) {
			$('.container-wrap').css({'height':$(window).height() - $('#header-space').height(), 'opacity': 1});
		} else {
			$('.container-wrap').css({'height':$(window).height(), 'opacity': 1});
		}
		

		$('.nectar-slider-wrap').css({'opacity':0});

		updateRowRightPadding(d);
		pauseVideoBG();

		//old browser workaround
		var timeout1 = 1220;
		var timeout2 = 1650;
		var timeout3 = 1700;
		var timeout4 = 1350;
		if( $('html.no-cssanimations').length > 0) {
			timeout1 = 1;
			timeout2 = 1;
			timeout3 = 1;
			timeout4 = 1;
		}

		$('.container-wrap').css('padding-right',$('body').attr('data-scrollbar-width') + 'px');
		setTimeout(function(){
			$('#header-outer, #wpadminbar, .cart-outer .cart-menu, .midnightHeader .midnightInner').animate({'padding-right': $('body').attr('data-scrollbar-width')},250);
			$('.nectar-box-roll .canvas-bg').addClass('out-of-sight');
			if($('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent');

			if($('body.mobile').length > 0) $('.nectar-box-roll').css({'z-index':'1'});
		},timeout1);
		setTimeout(function(){ 
			updateRowRightPadding(1);
			$('body,html,#ajax-content-wrap, .container-wrap, .blurred-wrap').removeClass('no-scroll'); 
			$('#ajax-content-wrap, .blurred-wrap').addClass('at-content');
			$('.container-wrap, #footer-outer').removeClass('bottomBoxIn').removeClass('nectar-box-roll-class').addClass('auto-height');
			$('#header-outer, #wpadminbar, .container-wrap, .cart-outer .cart-menu, .midnightHeader .midnightInner').stop().css('padding-right',0);

			if( $smoothActive == 1 && $(window).width() > 690  && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){ 
				niceScrollInit();
			}
			
			$('.nectar-box-roll').css({'z-index':'-1000'}).transition({'y': '-200%'},0);
			$('.nectar-box-roll canvas').hide();
			$('body').removeClass('box-rolling');
			$('.nectar-slider-wrap').transition({'opacity':1},600,'easeOutCubic');

			$('.nectar-box-roll #page-header-bg, .nectar-box-roll .overlaid-content, .container-wrap').css('will-change','auto');
			if($waypointsBound == false) waypoints();	
		},timeout2);
		
		//fadeIn
		setTimeout(function(){ 
			$('.container-wrap .main-content > .row > div > div[class*="col"]').css({'opacity':1});
		},timeout4);

		setTimeout(function(){ 
					animating ='false'; 
					$('body').removeClass('box-animating');		
		},timeout3);

		//header position when transparent nav was used
		if($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('.mobile').length == 0 && $('#header-outer[data-transparent-header="true"]').length != 0) { 
			$('#ajax-content-wrap').transition({'margin-top':$('#header-outer').outerHeight(true) + $('#header-outer').offset().top},2000,'easeInOutQuad');
		}
		/*if($('#header-outer[data-transparent-header="true"]').length == 0 && $('.mobile').length == 0) {
			$('.nectar-box-roll').transition({'top': 0},2000,'easeInOutQuad');
		}*/
		

		//remove header if not fixed
		if($('.mobile #header-outer[data-permanent-transparent="1"]').length > 0 && $('.mobile #header-outer[data-mobile-fixed="false"]').length == 1) $('#header-outer').transition({'y':'-100%'},400,'easeOutCubic');

	}

	else if(perspect == 'rolled' && animating == 'false' && d == 1 && $(window).scrollTop() < 100) {

		$('.container-wrap').removeClass('auto-height');
		if($('#header-outer[data-transparent-header="true"]').length == 0) {
			$('.container-wrap').css({'height':$(window).height() - $('#header-space').height(), 'opacity': 1});
		} else {
			$('.container-wrap').css({'height':$(window).height(), 'opacity': 1});
		}
		
		$('#footer-outer').removeClass('auto-height');
		$('body').addClass('box-rolling');

		perspect = 'not-rolled';
		animating = 'true';
		$('body').addClass('box-animating').addClass('box-perspective-not-rolled');

		$('#header-outer, #wpadminbar, .container-wrap, .cart-outer .cart-menu, .midnightHeader .midnightInner').css('padding-right',$('body').attr('data-scrollbar-width') + 'px');
		$('.nectar-slider-wrap').transition({'opacity':0},600,'easeOutCubic');
		$('.container-wrap .main-content > .row > div > div[class*="col"]').stop(true).css({'opacity':0});
		setTimeout(function(){
			$('#header-outer, #wpadminbar, .cart-outer .cart-menu, .midnightHeader .midnightInner').animate({'padding-right': 0},250);
			$('.nectar-box-roll .canvas-bg').removeClass('out-of-sight');
			resizeVideoToCover();
			//header position when transparent nav was used
			if($('#header-outer[data-transparent-header="true"]').length != 0) $('#ajax-content-wrap').stop(true,true).transition({'margin-top':0},2000,'easeInOutCubic');
			//if($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('.mobile').length == 0 ) $('.nectar-box-roll').transition({'top': $('#header-space').height() },2000,'easeInOutQuad');
			
		},30);

		//old browser workaround
		var timeout1 = 1700;
		var timeout2 = 1600;
		var timeout3 = 1300;
		if( $('html.no-cssanimations').length > 0) {
			timeout1 = 1;
			timeout2 = 1;
			timeout3 = 1;
		}

		if($('body.mobile').length > 0) {
			setTimeout(function(){
				$('.nectar-box-roll').css('z-index','1000');
			},timeout3);
		} else {
			$('.nectar-box-roll').css('z-index','1000');
		}

		updateRowRightPadding(d);
		removeNiceScroll();
		$('.nectar-box-roll').transition({'y': '0'},0);
		$('.nectar-box-roll canvas').show();
		setTimeout(function(){ 
			updateRowRightPadding(1);
			animating ='false'; 
			$('body').removeClass('box-animating');
			$('#page-header-bg').removeClass('topBoxIn');
			$('.overlaid-content').removeClass('topBoxIn2');	
			$('body').removeClass('box-rolling');
			resumeVideoBG();
			$('.nectar-box-roll #page-header-bg, .nectar-box-roll .overlaid-content, .container-wrap').css('will-change','auto');
		},timeout1);

		setTimeout(function(){
			if($('.mobile #header-outer[data-permanent-transparent="1"]').length > 0 && $('.mobile #header-outer[data-mobile-fixed="false"]').length == 1) $('#header-outer').transition({'y':'0%'},400,'easeOutCubic');
		},timeout2);

		$('body,html,#ajax-content-wrap, .container-wrap, .blurred-wrap').addClass('no-scroll');
		$('#ajax-content-wrap, .blurred-wrap').removeClass('at-content');
		$('.container-wrap').addClass('nectar-box-roll-class');
		$('.nectar-box-roll #page-header-bg').removeClass('topBoxOut').addClass('topBoxIn').css('will-change','transform');
		
		$('.container-wrap').removeClass('bottomBoxIn').addClass('bottomBoxOut').css('will-change','transform');

		if($('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').addClass('transparent');

		$('.nectar-box-roll .overlaid-content').removeClass('topBoxOut2').removeClass('topBoxOut').addClass('topBoxIn2').css('will-change','transform');
	
		if($('#header-outer[data-header-resize="1"]').length > 0) { bigNav(); }

		$('.nectar-box-roll .trigger-scroll-down').removeClass('hovered');
	}

	
}

function boxScrollEvent(event, delta) {
	if($('#slide-out-widget-area.open.fullscreen').length > 0) return false;
	boxRoll(event,delta);
}

function boxRollMouseWheelInit() {
	if($('.nectar-box-roll').length > 0) {
		$('body').on("mousewheel", boxScrollEvent);
	} else {
		$('body').off("mousewheel", boxScrollEvent);
	}
}

boxRollMouseWheelInit();

$('body').on('click','.nectar-box-roll .section-down-arrow',function(){
	boxRoll(null,-1);
	$(this).addClass('hovered');
	setTimeout(function(){ $('.nectar-box-roll .section-down-arrow').removeClass('hovered'); },2000);
	return false;
});



function updateRowRightPadding(d){
	$('.wpb_row.full-width-section').each(function(){
		if($(this).hasClass('extraPadding') && d == 1) {
			$(this).css('padding-right',parseInt($(this).css('padding-right')) - parseInt($('body').attr('data-scrollbar-width')) + 'px' ).removeClass('extraPadding');
		} else {
			$(this).css('padding-right',parseInt($('body').attr('data-scrollbar-width')) + parseInt($(this).css('padding-right')) + 'px' ).addClass('extraPadding');
		}	
	});
	$('.wpb_row.full-width-content').each(function(){
		if($(this).find('.row-bg.using-image').length == 0) {
			if($(this).hasClass('extraPadding') && d == 1) {
				$(this).find('.row-bg').css('width',parseInt($(this).width()) - parseInt($('body').attr('data-scrollbar-width')) + 'px' ).removeClass('extraPadding');
			} else {
				$(this).find('.row-bg').css('width',parseInt($('body').attr('data-scrollbar-width')) + $(this).width() + 'px' ).addClass('extraPadding');
			}	
		}
	});
}

function pauseVideoBG() {
	if($('.nectar-box-roll video').length > 0) $('.nectar-box-roll video')[0].pause(); 
}
function resumeVideoBG() {
	if($('.nectar-box-roll video').length > 0) $('.nectar-box-roll video')[0].play(); 
}

//touch 
if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && $('.nectar-box-roll').length > 0) {
	$('body').swipe({
		swipeStatus: function(event, phase, direction, distance, duration, fingers) {
			if($('#slide-out-widget-area.open').length > 0) return false;
			if(direction == 'up') {
				boxRoll(null,-1);
				if($('#ajax-content-wrap.no-scroll').length == 0) $('body').swipe("option", "allowPageScroll", 'vertical');
			} else if(direction == "down" && $(window).scrollTop() == 0) {
				boxRoll(null,1);
				$('body').swipe("option", "allowPageScroll", 'auto');
			}
		}
	});

}

function removeNiceScroll() {
		if($().niceScroll && $("html").getNiceScroll()){
			var nice = $("html").getNiceScroll();
			nice.stop();
			
			$('html').removeClass('no-overflow-y');
			$('.nicescroll-rails').hide();
			if($('#boxed').length == 0){
				$('body, body #header-outer, body #header-secondary-outer, body #search-outer, .midnightHeader .midnightInner').css('padding-right','0px');
			} else if($('body[data-ext-responsive="true"]').length == 0 ) {
				$('body').css('padding-right','0px');
			}

			$('body').attr('data-smooth-scrolling','0');
		}
	}
//called after box roll
$waypointsBound = false;
function waypoints() {
	colAndImgAnimations(); 
	progressBars(); 
	clientsFadeIn(); 
	svgAnimations(); 
	milestoneInit();
	nectar_fancy_ul_init();
	headerRowColorInheritInit();
	morphingOutlines(); 
	$waypointsBound = true;
}



/***************** WooCommerce Cart *****************/
var timeout;
var productToAdd;

//notification
$('body').on('click','.product .add_to_cart_button', function(){
	productToAdd = $(this).parents('li').find('h3').text();
	$('#header-outer .cart-notification span.item-name').html(productToAdd);

	//if($('.cart-menu-wrap').hasClass('first-load')) $('.cart-menu-wrap').removeClass('first-load').addClass('static');
});

//notification hover
$('body').on('mouseenter','#header-outer .cart-notification',function(){
	$(this).fadeOut(400);
	$('#header-outer .widget_shopping_cart').stop(true,true).fadeIn(400);
	$('#header-outer .cart_list').stop(true,true).fadeIn(400);
	clearTimeout(timeout);
});

//cart dropdown
// $('#header-outer div.cart-outer').hoverIntent(function(){
// 	$('#header-outer .widget_shopping_cart').stop(true,true).fadeIn(400);
// 	$('#header-outer .cart_list').stop(true,true).fadeIn(400);
// 	clearTimeout(timeout);
// 	$('#header-outer .cart-notification').fadeOut(300);
// });


$('body').on('mouseleave','#header-outer div.cart-outer',function(){
	var $that = $(this);
	setTimeout(function(){
		if(!$that.is(':hover')){
			$('#header-outer .widget_shopping_cart').stop(true,true).fadeOut(300);
			$('#header-outer .cart_list').stop(true,true).fadeOut(300);
		}
	},100);
});

$('body').on('added_to_cart', shopping_cart_dropdown_show);
$('body').on('added_to_cart', shopping_cart_dropdown);

function shopping_cart_dropdown() {
		
		if(!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 ) {
			$('.cart-menu-wrap').addClass('has_products');
			$('header#top nav > ul, #search-outer #search #close a').addClass('product_added');

			if(!$('.cart-menu-wrap').hasClass('static')) $('.cart-menu-wrap').addClass('first-load');

			//nectar slider nav directional effect
			if($('#header-outer').hasClass('directional-nav-effect') && $('#header-outer .cart-icon-wrap .dark').length == 0 && $('body.ascend').length > 0){
				$('#header-outer .cart-outer .cart-icon-wrap').each(function(){
                    $(this).find('> i, > span.light, > span.dark, > span.original').remove();
                    $(this).append('<span class="dark"><span><i class="icon-salient-cart"></i></span></span><span class="light"><span><i class="icon-salient-cart"></i></span></span><span class="original"><span><i class="icon-salient-cart"></i></span></span>');
                	$(this).find('.original').attr('data-w',$(this).find('span.original').width()+1);
                });
			}
		}

}


function shopping_cart_dropdown_show(e) {
		
		clearTimeout(timeout);
		
		if(!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 && typeof e.type != 'undefined' ) {
			//before cart has slide in
			if(!$('#header-outer .cart-menu-wrap').hasClass('has_products')) {
				setTimeout(function(){ $('#header-outer .cart-notification').fadeIn(400); },400);
			}
			else if(!$('#header-outer .cart-notification').is(':visible')) {
				$('#header-outer .cart-notification').fadeIn(400);
			} else {
				$('#header-outer .cart-notification').show();
			}
			timeout = setTimeout(hideCart,2700);

			$('.cart-menu a, .widget_shopping_cart a').addClass('no-ajaxy');
		}
}

function hideCart() {
	$('#header-outer .cart-notification').stop(true,true).fadeOut();
}

function checkForWooItems(){ 
	var checkForCartItems = setInterval(shopping_cart_dropdown,250);
	setTimeout(function(){ clearInterval(checkForCartItems); },4500);
}
checkForWooItems();

var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar
var secondaryHeader = ($('#header-outer').attr('data-using-secondary') == '1') ? 32 : 0 ;
function searchFieldCenter(){
	$('#search-outer').css('top',$('#header-outer').outerHeight() + extraHeight + secondaryHeader);
	$('#search-outer > #search #search-box').css('top',($(window).height()/2) - ($('#search-outer > #search input').height()/2) - $('#header-outer').outerHeight() );
}

//text on hover effect
$('body').on('mouseover','.text_on_hover .product-wrap',function(){
	$(this).parent().addClass('hovered');
	//if($(this).find('.star-rating span').length > 0) $(this).find('.star-rating span').stop().animate({ width: $(this).find('.star-rating span').attr('data-width') },400,'easeOutCirc');
});
$('body').on('mouseover','.text_on_hover > a:first-child',function(){
	$(this).parent().addClass('hovered');
});

$('body').on('mouseout','.text_on_hover .product-wrap',function(){
	$(this).parent().removeClass('hovered');
	//if($(this).find('.star-rating span').length > 0) $(this).find('.star-rating span').stop().animate({ width: $(this).find('.star-rating span').attr('data-width') - 40 },500);
});
$('body').on('mouseout','.text_on_hover > a:first-child',function(){
	$(this).parent().removeClass('hovered');
});

/*
$('.text_on_hover.product .star-rating span').each(function(){
	$(this).attr('data-width',$(this).width());
	$(this).css('width', $(this).attr('data-width') - 40);
});*/


/***************** Search ******************/
	var $placeholder = $('#search input[type=text]').attr('data-placeholder');
	var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
	
	////search box event
	$('body').on('click', '#search-btn a', function(){ return false; });
	$('body').on('mousedown', '#search-btn a:not(.inactive)', function(){

		if($(this).hasClass('open-search')) { return false; } 

		if($('body').hasClass('ascend')){ 
			$('#search-outer > #search form, #search-outer #search .span_12 span').css('opacity',0);
			$('#search-outer > #search form').css('bottom','10px');
			$('#search-outer #search .span_12 span').css('top','10px');
			$('#search-outer').show();
			$('#search-outer').stop().transition({scale: '1,0', 'opacity': 1},0).transition({ scale: '1,1'},400,'easeInOutCubic');

			$('#search-outer > #search form').delay(400).animate({'opacity':1, 'bottom':0},'easeOutCirc');
			$('#search-outer #search .span_12 span').delay(470).animate({'opacity':1, 'top':0},'easeOutCirc');
			
		} else {
			$('#search-outer').stop(true).fadeIn(600,'easeOutExpo');
		}

		$('body:not(.ascend) #search-outer > #search input[type="text"]').css({
			'top' : $('#search-outer').height()/2 - $('#search-outer > #search input[type="text"]').height()/2
		});
		
		setTimeout(function(){

			$('#search input[type=text]').focus();
			
			if($('#search input[type=text]').attr('value') == $placeholder){
				$('#search input[type=text]').setCursorPosition(0);	
			}

		},300);

		//ascend
		if($('body').hasClass('ascend')){ 
			searchFieldCenter();
		}

		$(this).toggleClass('open-search');

		//close slide out widget area
		$('.slide-out-widget-area-toggle a.open:not(.animating)').trigger('click');

		return false;
	});
	
	$('body').on('keydown','#search input[type=text]',function(){
		if($(this).attr('value') == $placeholder){
			$(this).attr('value', '');
		}
	});
	
	$('body').on('keyup','#search input[type=text]',function(){
		if($(this).attr('value') == ''){
			$(this).attr('value', $placeholder);
			$(this).setCursorPosition(0);
		}
	});
	
	
	////close search btn event
	$('body').on('click','#close',function(){
		closeSearch();
		$('#search-btn a').removeClass('open-search');
		return false;
	});

	//if user clicks away from the search close it
	$('body').on('blur','#search-box input[type=text]',function(e){
		closeSearch();
		$('#search-btn a').removeClass('open-search');
	});
	
	
	function closeSearch(){
		if($('body').hasClass('ascend')){ 
			$('#search-outer').stop().transition({'opacity' :0},300,'easeOutCubic');
			$('#search-btn a').addClass('inactive');
			setTimeout(function(){ $('#search-outer').hide(); $('#search-btn a').removeClass('inactive'); },300);
		} else {
			$('#search-outer').stop(true).fadeOut(450,'easeOutExpo');
		}
	}
	
	
	//mobile search
	$('body').on('click', '#mobile-menu #mobile-search .container a#show-search',function(){
		$('#mobile-menu .container > ul').slideUp(500);
		return false;
	});
	
/***************** Nav ******************/
	
	var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
	var headerPadding = parseInt($('#header-outer').attr('data-padding'));
	var usingLogoImage = $('#header-outer').attr('data-using-logo');
	
	if( isNaN(headerPadding) || headerPadding.length == 0 ) { headerPadding = 28; }
	if( isNaN(logoHeight) || usingLogoImage.length == 0 ) { usingLogoImage = false; logoHeight = 30;}
	
	//inital calculations
	function headerInit() {
			
		$('#header-outer #logo img').css({
			'height' : logoHeight,				
		});	
		
		$('#header-outer').css({
			'padding-top' : headerPadding
		});	
		
		if($('body.mobile').length == 0) {
			$('header#top nav > ul > li > a').css({
				'padding-bottom' : Math.floor( ((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding),
				'padding-top' : Math.floor( (logoHeight/2) - ($('header#top nav > ul > li > a').height()/2))
			});	
		}
		
		if($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
			$('#header-outer .cart-menu').css({  
				'padding-bottom' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding),
				'padding-top' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding)
			});	
		} else {
			$('#header-outer .cart-menu').css({  
				'padding-bottom' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding + logoHeight/2 + 7),
				'padding-top' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding + logoHeight/2 + 7)
			});	
		}
		
			
		$('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').css({
			'padding-bottom' : (logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2),
			'padding-top' : (logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2)
		});	
		
		if($('body.ascend ').length > 0 && $('#header-outer[data-full-width="true"]').length > 0) {
			$('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').css({
				'padding-top': 0,
				'padding-bottom': 0
			});

			$('header#top nav > ul.buttons').css({
				'margin-top' : - headerPadding,
				'height' : Math.floor(logoHeight + headerPadding*2) -1
			});

			$('header#top nav > ul li#search-btn a, header#top nav > ul li.slide-out-widget-area-toggle a').css({
				'visibility' : 'visible',
				'padding-top': Math.floor((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding),
				'padding-bottom': Math.floor((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding)
			});
		}
		
		$('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').css({
			'top' : $('header#top nav > ul > li > a').outerHeight() 
		});	
		
		
		setTimeout(function(){ 
			$('body:not(.ascend) #search-outer #search-box .ui-autocomplete').css({
				'top': parseInt($('#header-outer').outerHeight())+'px'
			}); 
		},1000);
		
		$('body:not(.ascend) #search-outer #search-box .ui-autocomplete').css({
			'top': parseInt($('#header-outer').outerHeight())+'px'
		});

		//header space
		if($('.nectar-parallax-scene.first-section').length == 0) {

			if($('#header-outer').attr('data-using-secondary') == '1'){
				if($('#header-outer[data-mobile-fixed="false"]').length > 0  || $('body.mobile').length == 0 ) {
					$('#header-space').css('height', parseInt($('#header-outer').outerHeight()) + $('#header-secondary-outer').height());
					
				} else {
					$('#header-space').css('height', parseInt($('#header-outer').outerHeight()));
					
				}
				
			} else {

				$('#header-space').css('height', $('#header-outer').outerHeight() );
			} 
		}
		
		$('#header-outer .container, #header-outer .cart-menu').css('visibility','visible');
		
		if($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
			$('body:not(.ascend) #search-outer, #search .container').css({
				'height' : logoHeight + headerPadding*2
			});	
			
			$('body:not(.ascend) #search-outer > #search input[type="text"]').css({
				'font-size'  : 43,
				'height' : '59px',
				'top' : ((logoHeight + headerPadding*2)/2) - $('#search-outer > #search input[type="text"]').height()/2
			});
			
			$('body:not(.ascend) #search-outer > #search #close a').css({
				'top' : ((logoHeight + headerPadding*2)/2) - 8
			});	
		} else {
			$('body:not(.ascend) #search-outer, #search .container').css({
				'height' : logoHeight + headerPadding*2 + logoHeight + 17
			});	
			
			$('body:not(.ascend) #search-outer > #search input[type="text"]').css({
				'font-size'  : 43,
				'height' : '59px',
				'top' : ((logoHeight + headerPadding*2)/2) - ($('#search-outer > #search input[type="text"]').height()/2) + logoHeight/2 + 17
			});
			
			$('body:not(.ascend) #search-outer > #search #close a').css({
				'top' : ((logoHeight + headerPadding*2)/2) - 8 + logoHeight/2 + 17
			});	
		}
		
		//if no image is being used
		//if(usingLogoImage == false) $('header#top #logo').addClass('no-image');
		
	}
	
	//one last check to make sure the header space is correct (only if the user hasn't scrolled yet)
	$(window).load(function(){
		if($(window).scrollTop() == 0 ) headerSpace();
	});
	
	
	//is header resize on scroll enabled?
	var headerResize = $('#header-outer').attr('data-header-resize');
	var headerHideUntilNeeded = $('body').attr('data-hhun');

	//transparent fix
	if($(window).scrollTop() != 0 && $('#header-outer.transparent[data-permanent-transparent="false"]').length == 1) $('#header-outer').removeClass('transparent');

	if( headerResize == 1 && headerHideUntilNeeded != '1'){
		
		headerInit();

		$(window).off('scroll.headerResizeEffect');
		$(window).on('scroll.headerResizeEffect',smallNav);
	} else if(headerHideUntilNeeded != '1') {
		headerInit();
		$(window).off('scroll.headerResizeEffectOpaque');
-		$(window).on('scroll.headerResizeEffectOpaque',opaqueCheck);
		
	} else if(headerHideUntilNeeded == '1') {

		headerInit();

		if($('.nectar-box-roll').length > 0) $('#header-outer').addClass('at-top-before-box');

		var previousScroll = 0, // previous scroll position
        menuOffset = $('#header-space').height()*2, // height of menu (once scroll passed it, menu is hidden)
        detachPoint = ($('body.mobile').length > 0) ? 150 : 600, // point of detach (after scroll passed it, menu is fixed)
        hideShowOffset = 6; // scrolling value after which triggers hide/show menu

	    // on scroll hide/show menu
	    function hhunCalcs(e) {

	     //stop scrolling while animated anchors
	     if($('body.animated-scrolling').length > 0 && $('#header-outer.detached').length > 0) return false;

	     //stop on mobile if not using sticky option
	      if($('#header-outer[data-mobile-fixed="false"]').length > 0 && $('body.mobile').length > 0) {  $('#header-outer').removeClass('detached'); return false; }

	      var currentScroll = $(this).scrollTop(), // gets current scroll position
	            scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling

	      if (!$('#header-outer').hasClass('side-widget-open') && !$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')) {
	       
	        // if scrolled past menu
	        if (currentScroll > menuOffset) {
	          // if scrolled past detach point add class to fix menu
	          if (currentScroll > detachPoint) {
	            if (!$('#header-outer').hasClass('detached'))
	              $('#header-outer').addClass('detached').removeClass('parallax-contained');
	         
	          	  if($('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent');
	          }

	          // if scrolling faster than hideShowOffset hide/show menu
	          if (scrollDifference >= hideShowOffset) {
	            if (currentScroll > previousScroll) {
	              // scrolling down; hide menu
	              if (!$('#header-outer').hasClass('invisible'))
	                $('#header-outer').addClass('invisible').removeClass('at-top');
	                $('.page-submenu.stuck').css('transform','translateY(0px)').addClass('header-not-visible');
	            	
	            } else {
	              // scrolling up; show menu
	              if ($('#header-outer').hasClass('invisible'))
	                $('#header-outer').removeClass('invisible');
	          	    $('.page-submenu.stuck').css('transform','translateY('+$('#header-outer').outerHeight()+'px)').removeClass('header-not-visible');
	            }
	          }
	        } else {
	          // only remove “detached” class if user is at the top of document (menu jump fix)
	          $topDetachNum = ($('#header-outer[data-using-secondary="1"]').length > 0) ? 32 : 0;
	          if (currentScroll <= $topDetachNum){
	            $('#header-outer').removeClass('detached').addClass('at-top');
	            
	            if($('#header-outer[data-transparent-header="true"]').length > 0 && $('.nectar-box-roll').length == 0) $('#header-outer').addClass('transparent').css('transform','translateY(0)');
	            else if($('.nectar-box-roll').length > 0) $('#header-outer').css('transform','translateY(0)').addClass('at-top-before-box');

	            if($('.parallax_slider_outer').length > 0 || $('#page-header-bg[data-parallax="1"]').length > 0) $('#header-outer').addClass('parallax-contained').css('transform','translateY(0)');
	          }
	        }

	        // if user is at the bottom of document show menu
	        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	          $('#header-outer').removeClass('invisible');
	          $('.page-submenu.stuck').css('transform','translateY('+$('#header-outer').outerHeight()+'px)').removeClass('header-not-visible');
	        }

	      }

	      // replace previous scroll position with new one
	      previousScroll = currentScroll;

	    }

	    hhunCalcs();
	    $(window).scroll(hhunCalcs);


	}//end if hhun
	
	midnightInit(); //init midnight	

	var shrinkNum = 6;
	var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar
	
	if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');

	function smallNav(){
		var $offset = $(window).scrollTop();
		var $windowWidth = $(window).width();

		if($offset > 0 && $windowWidth > 1000) {
			
			if($('#header-outer').attr('data-transparent-header') == 'true' && $('#header-outer.side-widget-open').length == 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent');
			$('.ns-loading-cover').hide();
			
			$('#header-outer').addClass('small-nav');
			
			$('#header-outer #logo img').stop(true,true).animate({
				'height' : logoHeight - shrinkNum
			},{queue:false, duration:250, easing: 'easeOutCubic'});	
				
			$('#header-outer').stop(true,true).animate({
				'padding-top' : Math.ceil(headerPadding / 1.8)
			},{queue:false, duration:250, easing: 'easeOutCubic'});	
			
				if($('body.ascend[data-slide-out-widget-area="true"] #header-outer[data-has-menu="false"][data-permanent-transparent="false"][data-full-width="false"] header#top').length > 0 || $('body:not(.ascend)[data-slide-out-widget-area="true"] #header-outer[data-has-menu="false"][data-permanent-transparent="false"] header#top').length > 0) {

					$('#header-outer header#top').stop(true,true).animate({
						'padding-bottom' : Math.ceil(headerPadding / 1.8)
					},{queue:false, duration:250, easing: 'easeOutCubic'});
				}

			$('header#top nav > ul > li > a').stop(true,true).animate({
				'padding-bottom' :  Math.floor((((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding / 1.8) ,
				'padding-top' :  Math.floor(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2)) 
			},{queue:false, duration:250, easing: 'easeOutCubic'});	 
			
			if($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
				$('#header-outer .cart-menu').stop(true,true).animate({
					'padding-top' : Math.ceil(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding/ 1.7),
					'padding-bottom' : Math.ceil(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding/ 1.7) +1
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			} else {
				/*$('#header-outer img.starting-logo').stop(true,true).animate({
					'margin-top' :  '-' + (logoHeight + 17 - shrinkNum) + 'px'
				},{queue:false, duration:250, easing: 'easeOutCubic'});	*/

				$('#header-outer .cart-menu').stop(true,true).animate({
					'padding-bottom' : Math.floor((((logoHeight-shrinkNum)/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding / 1.7) + (logoHeight-shrinkNum)/2 + 9,
					'padding-top' : Math.floor((((logoHeight-shrinkNum)/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding / 1.7) + (logoHeight-shrinkNum)/2 + 9
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}
			
			if($('body.ascend ').length > 0 && $('#header-outer[data-full-width="true"]').length > 0) {
				$('header#top nav > ul.buttons').stop(true,true).animate({
					'margin-top' : - Math.ceil(headerPadding/ 1.8),
					'height' : Math.floor((headerPadding*2)/ 1.8 + logoHeight-shrinkNum)
				},{queue:false, duration:250, easing: 'easeOutCubic'});	

				$('header#top nav > ul li#search-btn a, header#top nav > ul li.slide-out-widget-area-toggle a').stop(true,true).animate({
					'padding-top' : Math.ceil(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding/ 1.7),
					'padding-bottom' : Math.ceil(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding/ 1.7) +1
				},{queue:false, duration:250, easing: 'easeOutCubic'});	

			} else {
				$('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').stop(true,true).animate({
					'padding-bottom' : Math.ceil(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2)),
					'padding-top' : Math.ceil(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2))
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}

			$('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true,true).animate({
				'top' : Math.floor($('header#top nav > ul > li > a').height() + (((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2))*2 + headerPadding / 1.8),
			},{queue:false, duration:250, easing: 'easeOutCubic'});		
			
			
			$('body:not(.ascend) #search-outer #search-box .ui-autocomplete').stop(true,true).animate({
				'top': Math.floor((logoHeight-shrinkNum) + (headerPadding*2)/ 1.8) +'px'
			},{queue:false, duration:250, easing: 'easeOutCubic'});	
		

			if($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
				$('body:not(.ascend) #search-outer, #search .container').stop(true,true).animate({
					'height' : Math.floor((logoHeight-shrinkNum) + (headerPadding*2)/ 1.8)
				},{queue:false, duration:250, easing: 'easeOutCubic'});	

				$('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true,true).animate({
					'font-size'  : 30,
					'line-height' : '30px',
					'height' : '44px',
					'top' : ((logoHeight-shrinkNum+headerPadding+5)/2) - ($('#search-outer > #search input[type="text"]').height()-15)/2
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			
				$('body:not(.ascend) #search-outer > #search #close a').stop(true,true).animate({
					'top' : ((logoHeight-shrinkNum + headerPadding+5)/2) - 10
				},{queue:false, duration:250, easing: 'easeOutCubic'});	

			} else {
				$('body:not(.ascend) #search-outer, #search .container').stop(true,true).animate({
					'height' : Math.floor((logoHeight-shrinkNum) + (headerPadding*2)/ 1.8) + logoHeight - shrinkNum + 17
				},{queue:false, duration:250, easing: 'easeOutCubic'});	

				$('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true,true).animate({
					'font-size'  : 30,
					'line-height' : '30px',
					'height' : '44px',
					'top' : ((logoHeight-shrinkNum+headerPadding+5)/2) - ($('#search-outer > #search input[type="text"]').height()-15)/2 + (logoHeight- shrinkNum)/2 + 8
				},{queue:false, duration:250, easing: 'easeOutCubic'});	

				$('body:not(.ascend) #search-outer > #search #close a').stop(true,true).animate({
					'top' : ((logoHeight-shrinkNum + headerPadding+5)/2) - 10 + (logoHeight- shrinkNum)/2 + 8
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}

		

			//box roll
			if($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#ajax-content-wrap').animate({'margin-top':  (Math.floor((logoHeight-shrinkNum) +(headerPadding*2)/ 1.8 + extraHeight + secondaryHeader))  },{queue:false, duration:250, easing: 'easeOutCubic'})
			
			
			if($('body').hasClass('ascend')){ 
				$('#search-outer').stop(true,true).animate({
					'top' : Math.floor((logoHeight-shrinkNum) +(headerPadding*2)/ 1.8 + extraHeight + secondaryHeader)
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}
			
			//if no image is being used
			if(usingLogoImage == false) $('header#top #logo').stop(true,true).animate({
				'margin-top' : 0
			},{queue:false, duration:450, easing: 'easeOutExpo'});	
			
			$(window).off('scroll',smallNav);
			$(window).on('scroll',bigNav);

			//dark slider coloring border fix
			$('#header-outer[data-transparent-header="true"]').css('transition','background-color 0.40s ease, box-shadow 0.40s ease');
			$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','none');
			setTimeout(function(){ 
				$('#header-outer[data-transparent-header="true"]').css('transition','background-color 0.40s ease, box-shadow 0.40s ease, border-color 0.40s ease'); 
				$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','border-color 0.40s ease');
			},300);

		}

	}
	
	function bigNav(){
		var $offset = $(window).scrollTop();
		var $windowWidth = $(window).width();

		if($offset == 0 && $windowWidth > 1000 || $('.small-nav').length > 0 && $('#ajax-content-wrap.no-scroll').length > 0) {
			
			$('#header-outer').removeClass('small-nav');
			
			if($('#header-outer').attr('data-transparent-header') == 'true'  && $('.nectar-box-roll').length == 0) $('#header-outer').addClass('transparent');
			$('.ns-loading-cover').show();
			
			$('#header-outer #logo img').stop(true,true).animate({
				'height' : logoHeight,				
			},{queue:false, duration:250, easing: 'easeOutCubic'});	
			

			$('#header-outer').stop(true,true).animate({
				'padding-top' : headerPadding 
			},{queue:false, duration:250, easing: 'easeOutCubic'});	

				if($('body.ascend[data-slide-out-widget-area="true"] #header-outer[data-has-menu="false"][data-permanent-transparent="false"][data-full-width="false"] header#top').length > 0 || $('body:not(.ascend)[data-slide-out-widget-area="true"] #header-outer[data-has-menu="false"][data-permanent-transparent="false"] header#top').length > 0) {
					$('#header-outer header#top').stop(true,true).animate({
						'padding-bottom' : headerPadding 
					},{queue:false, duration:250, easing: 'easeOutCubic'});
				}
			
			$('header#top nav > ul > li > a').stop(true,true).animate({
				'padding-bottom' : ((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding,
				'padding-top' : (logoHeight/2) - ($('header#top nav > ul > li > a').height()/2) 
			},{queue:false, duration:250, easing: 'easeOutCubic'});	
			
			if($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
				$('#header-outer .cart-menu').stop(true,true).animate({
					'padding-bottom' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding),
					'padding-top' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding)
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			} else {
				/*$('#header-outer img.starting-logo').stop(true,true).animate({
					'margin-top' :  '-' + (logoHeight + 17) + 'px'
				},{queue:false, duration:250, easing: 'easeOutCubic'});	*/

				$('#header-outer .cart-menu').stop(true,true).animate({
					'padding-bottom' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding) + logoHeight/2 + 7,
					'padding-top' : Math.ceil(((logoHeight/2) - ($('header#top nav ul #search-btn a').height()/2)) + headerPadding) + logoHeight/2 + 7
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}

			if($('body.ascend ').length > 0 && $('#header-outer[data-full-width="true"]').length > 0) {
				$('header#top nav > ul.buttons').stop(true,true).animate({
					'margin-top' : - Math.ceil(headerPadding),
					'height' : Math.floor(headerPadding*2 + logoHeight) -1
				},{queue:false, duration:250, easing: 'easeOutCubic'});	

				$('header#top nav > ul li#search-btn a, header#top nav > ul li.slide-out-widget-area-toggle a').stop(true,true).animate({
					'padding-top': Math.floor((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding),
					'padding-bottom': Math.floor((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2) + headerPadding)
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			} else {
				$('header#top nav > ul li#search-btn, header#top nav > ul li.slide-out-widget-area-toggle').stop(true,true).animate({
					'padding-bottom' : Math.floor((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2)),
					'padding-top' : Math.ceil((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2))
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}
			
			$('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true,true).animate({
				'top' : Math.ceil($('header#top nav > ul > li > a').height() + (((logoHeight)/2) - ($('header#top nav > ul > li > a').height()/2))*2 + headerPadding),
			},{queue:false, duration:250, easing: 'easeOutCubic'});		
			
			$('body:not(.ascend) #search-outer #search-box .ui-autocomplete').stop(true,true).animate({
				'top': Math.ceil(logoHeight + headerPadding*2) +'px'
			},{queue:false, duration:250, easing: 'easeOutCubic'});	
			
			
			if($('#header-outer[data-format="centered-menu-under-logo"]').length == 0) {
				$('body:not(.ascend) #search-outer, #search .container').stop(true,true).animate({
					'height' : Math.ceil(logoHeight + headerPadding*2)
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
				
				$('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true,true).animate({
					'font-size'  : 43,
					'line-height' : '43px',
					'height' : '59px',
					'top' : ((logoHeight + headerPadding*2)/2) - 30
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
				
				
				$('body:not(.ascend) #search-outer > #search #close a').stop(true,true).animate({
					'top' : ((logoHeight + headerPadding*2)/2) - 8
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
				
			} else {
				$('body:not(.ascend) #search-outer, #search .container').stop(true,true).animate({
					'height' : Math.ceil(logoHeight + headerPadding*2) + logoHeight + 17
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
				
				$('body:not(.ascend) #search-outer > #search input[type="text"]').stop(true,true).animate({
					'font-size'  : 43,
					'line-height' : '43px',
					'height' : '59px',
					'top' : ((logoHeight + headerPadding*2)/2) - 30 + (logoHeight)/2 + 8
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
				
				
				$('body:not(.ascend) #search-outer > #search #close a').stop(true,true).animate({
					'top' : ((logoHeight + headerPadding*2)/2) - 8 + (logoHeight)/2 + 8
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}


			if($('body').hasClass('ascend')){ 
				$('#search-outer').stop(true,true).animate({
					'top' : (logoHeight) +(headerPadding*2) + extraHeight + secondaryHeader
				},{queue:false, duration:250, easing: 'easeOutCubic'});	
			}

			//if no image is being used
			if(usingLogoImage == false) $('header#top #logo').stop(true,true).animate({
				'margin-top' : 4
			},{queue:false, duration:450, easing: 'easeOutExpo'});	
			

				//box roll
			if($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#ajax-content-wrap').animate({'margin-top':  (Math.floor((logoHeight) +(headerPadding*2) + extraHeight + secondaryHeader))  },{queue:false, duration:250, easing: 'easeOutCubic'})
			

			$(window).off('scroll',bigNav);
			$(window).on('scroll',smallNav);


			//dark slider coloring border fix
			$('#header-outer[data-transparent-header="true"]').css('transition','background-color 0.40s ease, box-shadow 0.40s ease');
			$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','none');
			setTimeout(function(){ 
				$('#header-outer[data-transparent-header="true"]').css('transition','background-color 0.40s ease, box-shadow 0.40s ease, border-color 0.40s ease'); 
				$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','border-color 0.40s ease');
			},300);
		}

	}
	
	
	function headerSpace() {
		if($('.mobile').length > 0) {
			if(window.innerHeight < window.innerWidth && window.innerWidth > 1000) {
				$('#header-space').css('height', $('#header-outer').outerHeight() + $('#header-secondary-outer').height());
			} else {
				$('#header-space').css('height', $('#header-outer').outerHeight());
			}
			
		} else {
			if($('.nectar-parallax-scene.first-section').length == 0) {

				var shrinkNum = 6;	
				var headerPadding = parseInt($('#header-outer').attr('data-padding'));
				if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');
				var headerPadding2 = headerPadding - headerPadding/1.8;
				var $headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.small-nav').length > 0 ) ? $('#header-outer').outerHeight() + (parseInt(shrinkNum) + headerPadding2*2) : $('#header-outer').outerHeight();

				if($('#header-outer').attr('data-using-secondary') == '1'){
					$('#header-space').css('height', $headerHeight + $('#header-secondary-outer').height());
				} else {
					$('#header-space').css('height', $headerHeight);
				} 
			}
		}
		
	}

	var lastPosition = -1;
	function headerOffsetAdjust(){
				
		var $scrollTop = $(window).scrollTop();

		 if (lastPosition == $scrollTop) {
            requestAnimationFrame(headerOffsetAdjust);
            return false;
        } else lastPosition = $scrollTop;
		if($('body.mobile').length > 0) {
			var $eleHeight = 0;
			var $endOffset = ($('#wpadminbar').css('position') == 'fixed') ? $('#wpadminbar').height() : 0;
			if($('#header-secondary-outer').length > 0) $eleHeight += $('#header-secondary-outer').height();
			if($('#wpadminbar').length > 0) $eleHeight += $('#wpadminbar').height();

			if( $eleHeight - $scrollTop > $endOffset) { 
				$('#header-outer').css('top', $eleHeight - $scrollTop + 'px');
			}
			else { $('#header-outer').css('top', $endOffset); }

		} else {
			var $eleHeight = 0;
			if($('#header-secondary-outer').length > 0) $eleHeight += $('#header-secondary-outer').height();
			if($('#wpadminbar').length > 0) $eleHeight += $('#wpadminbar').height();
			$('#header-outer').css('top',$eleHeight+'px');
		}

		requestAnimationFrame(headerOffsetAdjust);

	}

	if($('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#wpadminbar').length > 0 || $('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#header-secondary-outer').length > 0) {
		requestAnimationFrame(headerOffsetAdjust);
	}
		

	function footerRevealCalcs() {
		if($(window).height() - $('#wpadminbar').height() - $('#header-outer').outerHeight() - $('#footer-outer').height() - 1 -$('#page-header-bg').height() -$('.parallax_slider_outer').height() - $('.page-header-no-bg').height() > 0) {
			$resizeExtra = ($('#header-outer[data-header-resize="1"]').length > 0) ? 55: 0;
			$('.container-wrap').css({'margin-bottom': $('#footer-outer').height()-1, 'min-height': $(window).height() - $('#wpadminbar').height() - $('#header-outer').outerHeight() - $('#footer-outer').height() -1  - $('.page-header-no-bg').height() -$('#page-header-bg').height() -$('.parallax_slider_outer').height() + $resizeExtra });
		} else {
			$('.container-wrap').css({'margin-bottom': $('#footer-outer').height()-1 });
		}
		
		if( $(window).width() < 1000) $('#footer-outer').attr('data-midnight','light');
		else $('#footer-outer').removeAttr('data-midnight');
	}
	if($('body[data-footer-reveal="1"]').length > 0) { 
		footerRevealCalcs();
		//set shadow to match BG color if applicable
		if($('body[data-footer-reveal-shadow="large_2"]').length > 0) $('.container-wrap').css({ boxShadow: '0 70px 110px -30px '+$('#footer-outer').css('backgroundColor') });
	}
	
	function opaqueCheck(){
		var $offset = $(window).scrollTop();
		var $windowWidth = $(window).width();

		if($offset > 0 && $windowWidth > 1000) {
			
			if($('#header-outer').attr('data-transparent-header') == 'true' && $('#header-outer[data-permanent-transparent="1"]').length == 0) $('#header-outer').removeClass('transparent').addClass('scrolled-down');
			$('.ns-loading-cover').hide();
			
			$(window).off('scroll',opaqueCheck);
			$(window).on('scroll',transparentCheck);
		}
	}
	
	
	function transparentCheck(){
		var $offset = $(window).scrollTop();
		var $windowWidth = $(window).width();

		if($offset == 0 && $windowWidth > 1000) {
			
			if($('#header-outer').attr('data-transparent-header') == 'true') $('#header-outer').addClass('transparent').removeClass('scrolled-down');
			$('.ns-loading-cover').show();
			
			$(window).off('scroll',transparentCheck);
			$(window).on('scroll',opaqueCheck);
		}
	}
	
	var adminBarHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar

	//header inherit row color effect
	function headerRowColorInheritInit(){
		if($('body[data-header-inherit-rc="true"]').length > 0 && $('.mobile').length == 0){
			
			var headerOffset = ($('#header-outer[data-permanent-transparent="1"]').length == 0) ? (logoHeight - shrinkNum) + Math.ceil((headerPadding*2) / 1.8) + adminBarHeight : logoHeight/2 + headerPadding + adminBarHeight;
			
			$('.main-content > .row > .wpb_row').each(function(){


				var $that = $(this);
				var waypoint = new Waypoint({
	 				element: $that,
		 			handler: function(direction) {
	

						if(direction == 'down') {
							
							if($that.find('.row-bg.using-bg-color').length > 0) {
								
								var $textColor = ($that.find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
								$('#header-outer').css('background-color',$that.find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);
								$('#header-outer').attr('data-current-row-bg-color',$that.find('.row-bg').css('background-color'));
							} else {
								$('#header-outer').css('background-color',$('#header-outer').attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');
								$('#header-outer').attr('data-current-row-bg-color',$('#header-outer').attr('data-user-set-bg'));
							}
						
						} else {

							if($that.prev('div.wpb_row').find('.row-bg.using-bg-color').length > 0) {
								var $textColor = ($that.prev('div.wpb_row').find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
								$('#header-outer').css('background-color',$that.prev('div.wpb_row').find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);
								$('#header-outer').attr('data-current-row-bg-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color'));
							} else {
								$('#header-outer').css('background-color',$('#header-outer').attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');
								$('#header-outer').attr('data-current-row-bg-color',$('#header-outer').attr('data-user-set-bg'));
							}

						} 

				
					},
					offset: headerOffset

				}); 


			});
		}
	}

	if($('.nectar-box-roll').length == 0) headerRowColorInheritInit();









/****************sticky page submenu******************/
	if($('.page-submenu[data-sticky="true"]').length > 0) {
		
		(function() {
		  'use strict'

		  var $ = window.jQuery
		  var Waypoint = window.Waypoint
		  var $offsetHeight = 0; 
		  var shrinkNum = 6;	
		  var headerPadding = parseInt($('#header-outer').attr('data-padding'));
		  if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');
		  var headerPadding2 = headerPadding - headerPadding/1.8;
		  var $headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('body.mobile').length == 0) ? $('#header-outer').outerHeight() - (parseInt(shrinkNum) + headerPadding2*2) : $('#header-outer').outerHeight();

		  if($('#header-secondary-outer').length > 0 && $('body.mobile').length == 0) $headerHeight += $('#header-secondary-outer').height();

		  

		  $(window).on('smartresize',function(){
		  	
		  	$headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.small-nav').length == 0 && $('body.mobile').length == 0) ? $('#header-outer').outerHeight() - (parseInt(shrinkNum) + headerPadding2*2) : $('#header-outer').outerHeight();
		  	if($('#header-secondary-outer').length > 0  && $('body.mobile').length == 0) $headerHeight += $('#header-secondary-outer').height();

		  	$offsetHeight = 0; 
		
		  	  if($('#wpadminbar').length > 0 && $('#wpadminbar').css('position') == 'fixed') $offsetHeight += $('#wpadminbar').height();
 			  if($('body[data-hhun="0"] #header-outer').length > 0 && !($('body.mobile').length > 0 && $('#header-outer[data-mobile-fixed="false"]').length > 0) ) $offsetHeight += $headerHeight;
 	
 			 // else if($('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0) $offsetHeight += $headerHeight;
 			
 			 //recalc for resizing (same as stuck/unstuck logic below)
 			 if($('.page-submenu.stuck').length > 0) {

		        	$('.page-submenu.stuck').addClass('no-trans').css('top',$offsetHeight).css('transform','translateY(0)').addClass('stuck');
		        	var $that = this;
		        	setTimeout(function(){ $('.page-submenu.stuck').removeClass('no-trans'); },50);
		        	$('.page-submenu.stuck').parents('.wpb_row').css('z-index',10000);

		        	//boxed
		        	if($('#boxed').length > 0) { 
		        		var $negMargin = ($(window).width() > 1000) ? $('.container-wrap').width()*0.04 :39;
		        		$('.page-submenu.stuck').css({'margin-left':'-'+$negMargin+'px', 'width' : $('.container-wrap').width()});
		        	}

		        }
		        else { 
		        	$('.page-submenu.stuck').css('top','0').removeClass('stuck');
		       	   $('.page-submenu.stuck').parents('.wpb_row').css('z-index','auto');

		       	    if($('#boxed').length > 0) $('.page-submenu.stuck').css({'margin-left':'0px', 'width' : '100%'});
		       	}

		  });

		  /* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
		  function Sticky(options) {
		    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options)
		    this.element = this.options.element
		    this.$element = $(this.element)
		    this.createWrapper()
		    this.createWaypoint()
		  }

		  /* Private */
		  Sticky.prototype.createWaypoint = function() {
		    var originalHandler = this.options.handler

		    $offsetHeight = 0; 
		    if($('#wpadminbar').length > 0 && $('#wpadminbar').css('position') == 'fixed') $offsetHeight += $('#wpadminbar').height();
 			if($('body[data-hhun="0"] #header-outer').length > 0 && !($('body.mobile').length > 0 && $('#header-outer[data-mobile-fixed="false"]').length > 0)) $offsetHeight += $headerHeight;

 		
		    this.waypoint = new Waypoint($.extend({}, this.options, {
		      element: this.wrapper,
		      handler: $.proxy(function(direction) {
		        var shouldBeStuck = this.options.direction.indexOf(direction) > -1
		        var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : ''

		        this.$wrapper.height(wrapperHeight)
		        if(shouldBeStuck) {
		        	this.$element.addClass('no-trans').css('top',$offsetHeight).css('transform','translateY(0)').addClass('stuck');
		        	var $that = this;
		        	setTimeout(function(){ $that.$element.removeClass('no-trans'); },50);
		        	this.$element.parents('.wpb_row').css('z-index',10000);

		        	//boxed
		        	if($('#boxed').length > 0) { 
		        		var $negMargin = ($(window).width() > 1000) ? $('.container-wrap').width()*0.04 :39;
		        		this.$element.css({'margin-left':'-'+$negMargin+'px', 'width' : $('.container-wrap').width()});
		        	}

		        }
		        else { 
		        	this.$element.css('top','0').removeClass('stuck');
		       	    //this.$element.parents('.wpb_row').css('z-index','10000');

		       	    if($('#boxed').length > 0) this.$element.css({'margin-left':'0px', 'width' : '100%'});
		       	}

		        if (originalHandler) {
		          originalHandler.call(this, direction)
		        }
		      }, this),
		      offset: $offsetHeight
		    }))

		    var $that = this;

		   // if($('body[data-hhun="1"]').length > 0 ) {
			    setInterval(function(){ 

			    	if($('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0)
		        		$that.waypoint.options.offset = $offsetHeight + $headerHeight;
		        	else 
		        		$that.waypoint.options.offset = $offsetHeight;
			    	Waypoint.refreshAll();
			
			    },100); 
			//}

		  }

		  /* Private */
		  Sticky.prototype.createWrapper = function() {
		    if (this.options.wrapper) {
		      this.$element.wrap(this.options.wrapper)
		    }
		    this.$wrapper = this.$element.parent()
		    this.wrapper = this.$wrapper[0]
		  }

		  /* Public */
		  Sticky.prototype.destroy = function() {
		    if (this.$element.parent()[0] === this.wrapper) {
		      this.waypoint.destroy()
		      this.$element.removeClass(this.options.stuckClass)
		      if (this.options.wrapper) {
		        this.$element.unwrap()
		      }
		    }
		  }

		  Sticky.defaults = {
		    wrapper: '<div class="sticky-wrapper" />',
		    stuckClass: 'stuck',
		    direction: 'down right'
		  }

		  Waypoint.Sticky = Sticky
		}())
		;

		//remove outside of column setups 
		if($('.page-submenu').parents('.span_12').find('> .wpb_column').length > 1){
			var pageMenu = $('.page-submenu').clone();
			var pageMenuParentRow = $('.page-submenu').parents('.wpb_row');
			$('.page-submenu').remove();
			pageMenuParentRow.before(pageMenu);
		}

		var sticky = new Waypoint.Sticky({
		  element: $('.page-submenu[data-sticky="true"]')[0]
		});
	}

	$('.page-submenu').parents('.wpb_row').css('z-index',10000);
	$('.page-submenu .mobile-menu-link').on('click',function(){
		$(this).parents('.page-submenu').find('ul').stop(true).slideToggle(350);
		return false;
	});

	$('.page-submenu ul li a').on('click',function(){
		if($('body.mobile').length > 0) $(this).parents('.page-submenu').find('ul').stop(true).slideToggle(350);
	});


	// Mobile nav
	$('body').on('click', '#toggle-nav', function(){
		
		$(this).toggleClass("active");
		
		if($(this).hasClass("active"))
			$(this).html('<i class="fa fa-times" aria-hidden="true"></i>');
		else
			$(this).html("Menu");

		$('#mobile-menu').stop(true,true).slideToggle(500);

		return false;
	});
	
	
	//add wpml to mobile menu
	if($('header#top nav > ul > li.menu-item-language').length > 0 && $('#header-secondary-outer ul > li.menu-item-language').length == 0){
		var $langSelector = $('header#top nav > ul > li.menu-item-language').clone();
		$langSelector.insertBefore('#mobile-menu ul #mobile-search');
	}
	
	////append dropdown indicators / give classes
	$('#mobile-menu .container ul li').each(function(){
		if($(this).find('> ul').length > 0) {
			 $(this).addClass('has-ul');
			 $(this).find('> a').append('<span class="sf-sub-indicator"><i class="icon-angle-down"></i></span>');
		}
	});
	
	////events
	$('#mobile-menu .container ul li:has(">ul") > a .sf-sub-indicator').click(function(){
		$(this).find("> i").toggleClass("icon-angle-down");
		$(this).find("> i").toggleClass("icon-angle-up");
		$(this).parent().parent().toggleClass('open');
		$(this).parent().parent().find('> ul').stop(true,true).slideToggle();
		return false;
	});
	


/*-------------------------------------------------------------------------*/
/*	5.	Page Specific
/*-------------------------------------------------------------------------*/	

	//recent work
	function piVertCenter() {
		$('.portfolio-items  > .col').each(function(){
				
			//style 4
			$(this).find('.style-4 .work-info .bottom-meta:not(.shown)').stop().animate({
				'bottom' : '-'+$(this).find('.work-info .bottom-meta').outerHeight()-2+'px'
			},420,'easeOutCubic');

			
		});	 
	}
	
	$(window).load(function(){
	 	 portfolioCommentOrder();
	 	 fullWidthContentColumns();
	 	 resizeVideoToCover();
	});
	
	
	//ie8 width fix
	function ie8Width(){
		if( $(window).width() >= 1300 ) {
			$('.container').css('max-width','1100px');
		} else {
			$('.container').css('max-width','880px');
		}
	}
	
	if( $(window).width() >= 1300 && $('html').hasClass('no-video')) { $('.container').css('max-width','1100px'); $(window).resize(ie8Width); };
	


	function smartResizeInit() {

		 //carousel height calcs
		 carouselHeightCalcs();
		 clientsCarouselHeightRecalc();

		 //portfolio comment order
		 portfolioCommentOrder();
		 
		 //testimonial slider height
		 testimonialHeightResize(); //animated
		 testimonialSliderHeight(); //non-animated
		 
		 //full width content columns sizing
		 fullWidthContentColumns();

		 //parallax BG Calculations
		 if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)){
		   parallaxRowsBGCals();
		 }

		 slideOutWidgetOverflowState();
		 recentPostHeight();

		 morphingOutlines();

		 //full width menu megamenu adjust
		if($('.slide-out-widget-area-toggle a.open').length > 0 && $('#header-outer[data-full-width="true"]').length > 0) fullWidthHeaderSlidingWidgetMenuCalc();
		  
	}

    $(window).off('smartresize.srInit'); 
	$(window).on('smartresize.srInit', smartResizeInit); 
	
	
	
	function resizeInit() {
		 portfolioDeviceCheck();

		 //fullwidth page section calcs
		 fullWidthSections(); 
		 fullwidthImgOnlySizing();
		 fullWidthContentColumns();
	  	 fullWidthRowPaddingAdjustCalc();
		 
		 //iframe video emebeds
		 responsiveVideoIframes();
		 videoshortcodeSize();
		 
		 if($('.nectar-social.full-width').length > 0) {
		 	nectarLoveFWCenter();
		 }

		 if($('body').hasClass('ascend')){ 
			searchFieldCenter();
		 }

		 if($('body').hasClass('single-post')) centerPostNextButtonImg();
		 
		 //fixed sidebar for portfolio
		 sidebarPxConversion();

		 headerSpace();

		 //vc mobile columns
		 if($('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0) vcMobileColumns();

		 if($('body[data-footer-reveal="1"]').length > 0) footerRevealCalcs();

		 if($('#page-header-bg').length > 0) pageHeader();

		 if($('.nectar-video-bg').length > 0) {
		 	resizeVideoToCover();
		 }
	}

	$(window).off('resize.srInit'); 
	$(window).on('resize.srInit', resizeInit); 

	$(window).on("orientationchange",function(){
	  setTimeout(clientsCarouselHeightRecalc,200);
	});
	
	//blog next post button
	function postNextButtonEffect(){

		$('.blog_next_prev_buttons').imagesLoaded(function(){

			centerPostNextButtonImg();
			
			$('.blog_next_prev_buttons img').css('opacity','1');

			if(!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
				$('.blog_next_prev_buttons img').panr({
					scaleDuration: .28,
					sensitivity: 22,
					scaleTo: 1.06
				}); 
			}

		});
	}

	function centerPostNextButtonImg(){
		
		if($('.blog_next_prev_buttons').length == 0) return false;

		if( $('.blog_next_prev_buttons img').height() >= $('.blog_next_prev_buttons').height() + 50 ) {
			var $height = 'auto';
			var $width = $('.blog_next_prev_buttons').width();
		} else {

			if( $('.blog_next_prev_buttons').width() < $('.blog_next_prev_buttons img').width()) {
				var $height = $('.blog_next_prev_buttons').height() + 49;
				var $width = 'auto';
			} else {
				var $height = 'auto';
				var $width = '100%';
			}
			
		}

		$('.blog_next_prev_buttons img').css({ 'height' : $height, 'width': $width });

		$('.blog_next_prev_buttons img').css({
			'top' : ($('.blog_next_prev_buttons').height()/2) - ($('.blog_next_prev_buttons img').height()/2) + 'px',
			'left' : ($('.blog_next_prev_buttons').width()/2) - ($('.blog_next_prev_buttons img').width()/2) + 'px'
		});

		$('.blog_next_prev_buttons .inner').each(function(){
			$(this).css({'top': $(this).parent().height()/2 - ($(this).height()/2), 'opacity':'1' });
		})
	}
	
	postNextButtonEffect();


	function recentPostHeight() {
		$('.blog-recent[data-style="title_only"]').each(function(){
			if($(this).find('> .col').length > 1) return false;
			if($(this).parent().parent().hasClass('vc_col-sm-3') || 
				$(this).parent().parent().hasClass('vc_col-sm-4') || 
				$(this).parent().parent().hasClass('vc_col-sm-6') || 
				$(this).parent().parent().hasClass('vc_col-sm-8') || 
				$(this).parent().parent().hasClass('vc_col-sm-9')) {
				
				if($('body.mobile').length == 0 && $(this).next('div').length == 0) {
					var tallestColumn = 0;
					
					$(this).find('> .col').css('padding', '50px 20px');

					$(this).parents('.wpb_row').find('> .span_12 > .wpb_column').each(function(){
						(Math.floor($(this).height()) > tallestColumn) ? tallestColumn = Math.floor($(this).height()) : tallestColumn = tallestColumn;
					});	
			
					if(Math.floor($(this).find('> .col').outerHeight(true)) < Math.floor($(this).parents('.wpb_row').height()) - 1) {
						$(this).find('> .col').css('padding-top',(tallestColumn-$(this).find('> .col').height())/2 + 'px');
						$(this).find('> .col').css('padding-bottom',(tallestColumn-$(this).find('> .col').height())/2 + 'px');
					}
					
				}
				 else {
				 		$(this).find('> .col').css('padding', '50px 20px');
				}
			}
		});
	}
	recentPostHeight();


	//recent post slider
	function recentPostsFlickityInit() {

		if($('.nectar-recent-posts-slider-inner').length == 0) return false;

		var $rpF = $('.nectar-recent-posts-slider-inner').flickity({
			  contain: true,
			  draggable: true,
			  lazyLoad: false,
			  imagesLoaded: true,
			  percentPosition: true,
			  prevNextButtons: false,
			  pageDots: true,
			  resize: true,
			  setGallerySize: true,
			  wrapAround: true,
			  accessibility: false
		});

		setTimeout(function(){
			$('.nectar-recent-posts-slider-inner').addClass('loaded');
		},1150);
		var flkty = $rpF.data('flickity');
	
		//$rpF.on( 'cellSelect', function() {
		// $(flkty.element).parents('.nectar-recent-posts-slider').find('h2:not(.post-ref-'+flkty.selectedIndex+')').hide().css('opacity','0');
		// $(flkty.element).parents('.nectar-recent-posts-slider').find('h2.post-ref-'+flkty.selectedIndex).show().transition({ 'opacity':1},600);
		//});

		$rpF.on( 'dragStart', function() {
			$('.flickity-viewport').addClass('is-moving');
		});
		$rpF.on( 'dragEnd', function() {
			$('.flickity-viewport').removeClass('is-moving');
		});

		recentPostSliderHeight();
		$(window).resize(recentPostSliderHeight);

		if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
			$(window).resize(recentPostSliderParallaxMargins);

		function recentPostSliderHeight(){

			$('.nectar-recent-posts-slider').each(function(){
					
						var $heightCalc;
						var $minHeight = 250;
						var $windowWidth = $(window).width();
						var $definedHeight = parseInt($(this).attr('data-height'));

						var dif = ($('body[data-ext-responsive="true"]').length > 0) ? $(window).width() / 1400 : $(window).width() / 1100;

						if( window.innerWidth > 1000 && $('#boxed').length == 0) {

							if($(this).parents('.full-width-content').length == 0) {
								if($('body[data-ext-responsive="true"]').length > 0 && window.innerWidth >= 1400){
									$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',Math.ceil($definedHeight));
								} else if($('body[data-ext-responsive="true"]').length == 0 && window.innerWidth >= 1100) {
									$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',Math.ceil($definedHeight));
								} else {
									$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',Math.ceil($definedHeight*dif));
								}
								
							} else {
								$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',Math.ceil($definedHeight*dif));
							}
							
						} else {
							
							//column sliders
							var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col') ;
							if($parentCol.length == 0) $parentCol = $('.main-content');
								
							if(!$parentCol.hasClass('vc_span12') && !$parentCol.hasClass('main-content') && !$parentCol.hasClass('span_12') && !$parentCol.hasClass('vc_col-sm-12') ) {
							
								var $parentColWidth = sliderColumnDesktopWidth($parentCol);
								var $aspectRatio = $definedHeight/$parentColWidth;

								
								//min height
								if( $aspectRatio*$parentCol.width() <= $minHeight ){
									$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',$minHeight);
								} else {
									$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',$aspectRatio*$parentCol.width());
								}
							  
							} 
							
							

							//regular
							else {
								
								//min height
								if( $definedHeight*dif <= $minHeight ){
									$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',$minHeight);
								} else {
									$(this).find('.nectar-recent-post-slide, .flickity-viewport').css('height',Math.ceil($definedHeight*dif));
								}
								
							}
							
						}
						
	
					
				});
		
		}

		////helper function
		function sliderColumnDesktopWidth(parentCol) {
			
			var $parentColWidth = 1100;
			var $columnNumberParsed = $(parentCol).attr('class').match(/\d+/);
			
			if($columnNumberParsed == '2') { $parentColWidth = 170 }
			else if($columnNumberParsed == '3') { $parentColWidth = 260 } 
			else if($columnNumberParsed == '4') { $parentColWidth = 340 } 
			else if($columnNumberParsed == '6') { $parentColWidth = 530 } 
			else if($columnNumberParsed == '8') { $parentColWidth = 700 } 
			else if($columnNumberParsed == '9') { $parentColWidth = 805 }
			else if($columnNumberParsed == '10') { $parentColWidth = 916.3 }
			else if($columnNumberParsed == '12') { $parentColWidth = 1100 }
		
			return $parentColWidth;
		}

	
	}
	
	recentPostsFlickityInit();

	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
		window.requestAnimationFrame(recentPostSliderParallax);

	function recentPostSliderParallax(){

		$('.nectar-recent-posts-slider').each(function(){
			var $offset = parseInt($(this).find('.flickity-slider').position().left);
			var $slideLength = $(this).find('.nectar-recent-post-slide').length;
			var $lastChildIndex = $(this).find('.nectar-recent-post-slide:last-child').index();
			var $slideWidth = $(this).find('.nectar-recent-post-slide').width();
			//wrapped fix

			////first going to first
			if($offset >= -3) {
				$(this).find('.nectar-recent-post-slide:last-child .nectar-recent-post-bg').css('margin-left',parseInt(Math.ceil($slideWidth/3.5))+'px');
			} else {
				$(this).find('.nectar-recent-post-slide:last-child .nectar-recent-post-bg').css('margin-left','-'+parseInt(Math.ceil($slideWidth/3.5*$lastChildIndex))+'px');
			}
			////last going to first
			if(Math.abs($offset) >= ($slideLength-1) * $slideWidth) {
				$(this).find('.nectar-recent-post-slide:first-child .nectar-recent-post-bg').css('margin-left','-'+parseInt(Math.ceil(($slideWidth/3.5)*$slideLength))+'px');
			} else {
				$(this).find('.nectar-recent-post-slide:first-child .nectar-recent-post-bg').css('margin-left','0px');
			}

			$(this).find('.nectar-recent-post-bg').css('transform','translateX('+Math.ceil($(this).find('.flickity-slider').position().left/-3.5)+'px)');
			
			
		});
		requestAnimationFrame(recentPostSliderParallax);
	}

	function recentPostSliderParallaxMargins(){

		$('.nectar-recent-posts-slider').each(function(){		
			var $slideWidth = $(this).find('.nectar-recent-post-slide').width();
			$(this).find('.nectar-recent-post-slide').each(function(i){
				$(this).find('.nectar-recent-post-bg').css('margin-left','-'+  parseInt(Math.ceil($slideWidth/3.5)*i)+'px');
			});
		
		});
	}

	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
		recentPostSliderParallaxMargins();


	//portfolio item hover effect
	
	////desktop event 
	function portfolioHoverEffects() { 

		if(!$('body').hasClass('mobile') && !navigator.userAgent.match(/(iPad|IEMobile)/)) {
			
			//style 1 & 2
			$('.portfolio-items .col .work-item:not(.style-3-alt):not(.style-3):not([data-custom-content="on"])').hover(function(){
				$(this).find('.work-info .vert-center').css({'margin-top' : 0});
				$(this).find('.work-info, .work-info .vert-center *, .work-info > i').css({'opacity' : 1});
				$(this).find('.work-info-bg').css({ 'opacity' : 0.9 });
			},function(){
				$(this).find('.work-info .vert-center').css({ 'margin-top' : -20 });
				$(this).find('.work-info, .work-info .vert-center *, .work-info > i').css({ 'opacity' : 0 });
				$(this).find('.work-info-bg').css({ 'opacity' : 0 });
			});
			
			
			//style 3
			$('.portfolio-items .col .work-item.style-3').hover(function(){

				$(this).find('.work-info-bg').css({ 'opacity' : 0 });

			},function(){
				
				$(this).find('.work-info-bg').css({ 'opacity' : 0.45 });

			});
			
			
			//style 4
			$('.portfolio-items .col .work-item.style-4').hover(function(){
				
				$(this).find('img').stop().animate({
					'top' : '-'+$(this).find('.work-info .bottom-meta').outerHeight()/2+'px'
				},250,'easeOutCubic');
				
				$(this).find('.work-info .bottom-meta').addClass('shown').stop().animate({
					'bottom' : '0px'
				},320,'easeOutCubic');

			},function(){
				
				$(this).find('img').stop().animate({
					'top' : '0px'
				},250,'easeOutCubic');
				
				$(this).find('.work-info .bottom-meta').removeClass('shown').stop().animate({
					'bottom' : '-'+$(this).find('.work-info .bottom-meta').outerHeight()-2+'px'
				},320,'easeOutCubic');
				
			});
		
		} 
		////mobile event
		else {
			portfolioDeviceCheck();
		}

	}

	portfolioHoverEffects();

	function style6Img(){

		//change sizer pos
		$('.style-5').each(function(){
			$(this).find('.sizer').insertBefore($(this).find('.parallaxImg'));
		});

		//set parent zindex
		$('.style-5').parents('.wpb_row').css('z-index','100');

		var d = document,
			de = d.documentElement,
			bd = d.getElementsByTagName('body')[0],
			htm = d.getElementsByTagName('html')[0],
			win = window,
			imgs = d.querySelectorAll('.parallaxImg'),
			totalImgs = imgs.length,
			supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;

		if(totalImgs <= 0){
			return;
		}

		// build HTML
		for(var l=0;l<totalImgs;l++){

			var thisImg = imgs[l],
				layerElems = thisImg.querySelectorAll('.parallaxImg-layer'),
				totalLayerElems = layerElems.length;

			if(totalLayerElems <= 0){
				continue;
			}

			while(thisImg.firstChild) {
				thisImg.removeChild(thisImg.firstChild);
			}
			
			var lastMove = 0;

			//throttle performance for all browser other than chrome
			var eventThrottle = $('html').hasClass('cssreflections') ? 1 : 80;
			if(eventThrottle == 80) $('body').addClass('cssreflections');

			var containerHTML = d.createElement('div'),
				shineHTML = d.createElement('div'),
				shadowHTML = d.createElement('div'),
				layersHTML = d.createElement('div'),
				layers = [];

			thisImg.id = 'parallaxImg__'+l;
			containerHTML.className = 'parallaxImg-container';
			//shineHTML.className = 'parallaxImg-shine';
			shadowHTML.className = 'parallaxImg-shadow';
			layersHTML.className = 'parallaxImg-layers';

			for(var i=0;i<totalLayerElems;i++){
				var layer = d.createElement('div'),
					layerInner = d.createElement('div'),
					imgSrc = layerElems[i].getAttribute('data-img');

				$(layer).html($(layerElems[i]).html());
				layer.className = 'parallaxImg-rendered-layer';
				layer.setAttribute('data-layer',i);

				if(i==0) { 
					layerInner.className = 'bg-img';
					layerInner.style.backgroundImage = 'url('+imgSrc+')';
					layer.appendChild(layerInner);
				}
				layersHTML.appendChild(layer);

				layers.push(layer);
			}

			containerHTML.appendChild(layersHTML);
			//containerHTML.appendChild(shineHTML);
			thisImg.appendChild(containerHTML);
			$(thisImg).wrap('<div class="parallaxImg-wrap" />');
			if(!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) { $(thisImg).parent().append(shadowHTML); }

			var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
			//thisImg.style.transform = 'perspective('+ w*3 +'px)';

			if(supportsTouch){
				/*win.preventScroll = false;

		        (function(_thisImg,_layers,_totalLayers,_shine) {
					$(thisImg).parents('.style-5').on('touchmove', function(e){
						if (win.preventScroll){
							e.preventDefault();
						}
						window.requestAnimationFrame(function(){
							processMovement(e,true,_thisImg,_layers,_totalLayers,_shine);
						});		
					});
		            $(thisImg).parents('.style-5').on('touchstart', function(e){
		            	win.preventScroll = true;
						processEnter(e,_thisImg,_layers,_totalLayers,_shine);		
					});
					$(thisImg).parents('.style-5').on('touchend', function(e){
						win.preventScroll = false;
						processExit(e,_thisImg,_layers,_totalLayers,_shine);		
					});
		        })(thisImg,layers,totalLayerElems,shineHTML); */
		    } else {
		    	(function(_thisImg,_layers,_totalLayers,_shine) {
					$(thisImg).parents('.style-5').on('mousemove', function(e){

					 	var now = Date.now();
				        if (now > lastMove + eventThrottle) {
				            lastMove = now;
							window.requestAnimationFrame(function(){
								processMovement(e,false,_thisImg,_layers,_totalLayers,_shine);		
							});
						}

						//window.requestAnimationFrame(function(){
						//	processShineMovement(e,false,_thisImg,_layers,_totalLayers,_shine);		
						//});
					});
		            $(thisImg).parents('.style-5').on('mouseenter', function(e){
						processEnter(e,_thisImg,_layers,_totalLayers,_shine);		
					});
					$(thisImg).parents('.style-5').on('mouseleave', function(e){
						processExit(e,_thisImg,_layers,_totalLayers,_shine);		
					});
		        })(thisImg,layers,totalLayerElems,shineHTML);
		    }

		    //set the depths
		    (function(_thisImg,_layers,_totalLayers,_shine) {
			    depths(false,_thisImg,_layers,_totalLayers,_shine);
			     window.addEventListener('resize', function(e){
			    	  depths(false,_thisImg,_layers,_totalLayers,_shine);
			    });
			 })(thisImg,layers,totalLayerElems,shineHTML);
		}

		function processMovement(e, touchEnabled, elem, layers, totalLayers, shine){

			//stop raf if exit already called
			if(!$(elem.firstChild).hasClass('over')) { processExit(e,elem,layers,totalLayers,shine); return false }

			//set up multipliers

			if($(elem).parents('.col.wide').length > 0 ) {
				var yMult = 0.03;
				var xMult = 0.063;
			} else if( $(elem).parents('.col.regular').length > 0  ) {
				var yMult = 0.045;
				var xMult = 0.045;
			} else if($(elem).parents('.col.tall').length > 0 ) {
				var yMult = 0.05;
				var xMult = 0.015;
			} else if($(elem).parents('.col.wide_tall').length > 0) {
				var yMult = 0.04;
				var xMult = 0.04;
			} else {
				var yMult = 0.045;
				var xMult = 0.075;
			}
			
			var bdst = bd.scrollTop || htm.scrollTop,
				bdsl = bd.scrollLeft,
				pageX = (touchEnabled)? e.touches[0].pageX : e.pageX,
				pageY = (touchEnabled)? e.touches[0].pageY : e.pageY,
				offsets = elem.getBoundingClientRect(),
				w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth, // width
				h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight, // height
				wMultiple = 320/w,
				offsetX = 0.52 - (pageX - offsets.left - bdsl)/w, //cursor position X
				offsetY = 0.52 - (pageY - offsets.top - bdst)/h, //cursor position Y
				dy = (pageY - offsets.top - bdst) - h / 2, //@h/2 = center of container
				dx = (pageX - offsets.left - bdsl) - w / 2, //@w/2 = center of container
				yRotate = (offsetX - dx)*(yMult * wMultiple), //rotation for container Y
				xRotate = (dy - offsetY)*(xMult * wMultiple); //rotation for container X //old
				//imgCSS = ' rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg) translateZ(0)'; //img transform
				if($(elem).parents('.wide_tall').length == 0 && $(elem).parents('.wide').length == 0 && $(elem).parents('.tall').length == 0) {
					var imgCSS = ' perspective('+ w*3 +'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY('+offsetY*-10+'px) translateX('+offsetX*-10+'px) scale(1.03)'; //img transform
				} else {
					var imgCSS = ' perspective('+ w*3 +'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY('+offsetY*-10+'px) translateX('+offsetX*-10+'px) scale(1.013)'; //img transform	
				}
				//imgCSS2 = 'perspective('+ w*3 +'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg) translateZ(0) translateY('+offsetY*-10+'px) translateX('+offsetX*-10+'px)'; //img transform //old

				
			//container transform
			if(elem.firstChild.className.indexOf(' over') != -1){
				if($(elem).parents('.portfolio-items.masonry-items').length > 0){
					//imgCSS2 = ' scale3d(1.025,1.025,1.025)';
				} else {
					//imgCSS2 = ' scale3d(1.06,1.06,1.06)';
				}
			
				

			}
		
			//elem.firstChild.style.transform = imgCSS;
			$(elem).find('.parallaxImg-container').css('transform',imgCSS);

			if(!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
				$(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform',imgCSS);
			}
			//elem.style.transform = imgCSS2;

			
		}

		function processShineMovement(e, touchEnabled, elem, layers, totalLayers, shine){

			var bdst = bd.scrollTop || htm.scrollTop,
				bdsl = bd.scrollLeft,
				pageX = (touchEnabled)? e.touches[0].pageX : e.pageX,
				pageY = (touchEnabled)? e.touches[0].pageY : e.pageY,
				offsets = elem.getBoundingClientRect(),
				w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth, // width
				h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight, // height
				wMultiple = 320/w,
				offsetX = 0.52 - (pageX - offsets.left - bdsl)/w, //cursor position X
				offsetY = 0.52 - (pageY - offsets.top - bdst)/h, //cursor position Y
				dy = (pageY - offsets.top - bdst) - h / 2, //@h/2 = center of container
				dx = (pageX - offsets.left - bdsl) - w / 2, //@w/2 = center of container
				yRotate = (offsetX - dx)*(0.040 * wMultiple), //rotation for container Y
				xRotate = (dy - offsetY)*(0.070 * wMultiple), //rotation for container X
				
				arad = Math.atan2(dy, dx), //angle between cursor and center of container in RAD
				angle = arad * 180 / Math.PI - 90; //convert rad in degrees


			//get angle between 0-360
			if (angle < 0) {
				angle = angle + 360;
			}

			//gradient angle and opacity for shine
			shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst)/h * 0.3 + ') 0%,rgba(255,255,255,0) 80%)';
			shine.style.transform = 'translateX(' + (offsetX * totalLayers) - 0.1 + 'px) translateY(' + (offsetY * totalLayers) - 0.1 + 'px) ';	

			
		}

		function processEnter(e, elem, layers, totalLayers, shine){
			//var sAgent = window.navigator.userAgent;
  			//var Idx = sAgent.indexOf("Edge");

			elem.firstChild.className += ' over';
			elem.className += ' over';

			//if(Idx == -1) {
				//$('body').addClass('cssreflections');
				//$(elem).addClass('transition');
			//	//var $timeout = setTimeout(function(){ $(elem).removeClass('transition'); },150);
			//} else {
				$(elem).addClass('transition');
				var $timeout = setTimeout(function(){ $(elem).removeClass('transition'); },200);
			//}

			//depths(false, elem, layers, totalLayers, shine);
		}

		function processExit(e, elem, layers, totalLayers, shine){

			var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
			var container = elem.firstChild;

			container.className = container.className.replace(' over','');
			elem.className = elem.className.replace(' over','');
			$(container).css('transform', 'perspective('+ w*3 +'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
			$(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform','perspective('+ w*3 +'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
			//elem.style.transform = 'perspective('+ w*3 +'px) rotateX(0deg) rotateY(0deg) translateZ(0) translateX(0) translateY(0)';
			//shine.style.cssText = '';
			
			//for(var ly=0;ly<totalLayers;ly++){
				//layers[ly].style.transform = '';
			//}

			$(elem).addClass('transition');
				var $timeout = setTimeout(function(){ $(elem).removeClass('transition'); },200);

			//removeDepths(false, elem, layers, totalLayers, shine);

		}

		function depths(touchEnabled, elem, layers, totalLayers, shine) {
			
			var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
			var revNum = totalLayers;
			var container = elem.firstChild;
			
			//set z
			for(var ly=0;ly<totalLayers;ly++){
				//layers[ly].style.transform = 'translateX(' + (offsetX * revNum) * ((ly * 2.5) / wMultiple) + 'px) translateY(' + (offsetY * totalLayers) * ((ly * 2.5) / wMultiple) + 'px) translateZ(0)';
				if(ly == 0) $(layers[ly]).css('transform', 'translateZ(0px)');
				else $(layers[ly]).css('transform','translateZ(' +(w*3)/27*(ly*1.1) + 'px) ');

				revNum--;
			}
			
			totalLayers = totalLayers + 3;

			//set perspective from beginning
			$(container).css('transform','perspective('+ w*3 +'px)');

			//$(elem).parents('.col').find('.parallaxImg-shine').css('transform','translateZ('+(w*3)/70*(totalLayers*1.1) +'px)');
		}

		function removeDepths(touchEnabled, elem, layers, totalLayers, shine) {
			
			var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
			var revNum = totalLayers;
			
			//set z
			for(var ly=0;ly<totalLayers;ly++){
				
				if(ly == 0) $(layers[ly]).css('transform', 'translateZ(' +(w*3)/45*(ly*1.1) + 'px) scale(1)');
				else $(layers[ly]).css('transform', 'translateZ(' +(w*3)/45*(ly*1.1) + 'px) scale(1)');

				revNum--;
			}
			
			totalLayers = totalLayers + 3;
			
		}
	}

	style6Img();

	function portfolioDeviceCheck(){
		if($('body').hasClass('mobile') || navigator.userAgent.match(/(iPad|IEMobile)/) ){
			
			//if using more details
			if($('.portfolio-items .col .work-item').find('a:not(".pp")').length > 0){
				$('.portfolio-items .col .work-item').find('a.pp').css('display','none');
			} 
			
			//if only using pp
			else {
				$('.portfolio-items .col .work-item').find('a:not(".pp")').css('display','none');
			}
		
		} else {
			$('.portfolio-items .col .work-item').find('a').css('display','inline');
		}
	}
	
	
	//portfolio accent color
	function portfolioAccentColor() {

		var portfolioSocialColorCss = '';

		$('.portfolio-items .col').each(function(){
			if ($(this).has('[data-project-color]')) { 
				$(this).find('.work-info-bg, .bottom-meta').css('background-color',$(this).attr('data-project-color'));

				//style5
				$(this).find('.parallaxImg-rendered-layer .bg-overlay').css('border-color',$(this).attr('data-project-color'));

				var	$projColor = $(this).attr('data-project-color');
				if($(this).find('.custom-content .nectar-social').length > 0 && $('body[data-button-style="rounded"]') ) portfolioSocialColorCss += 'body[data-button-style="rounded"] .col[data-project-color="'+$projColor+'"] .custom-content .nectar-social > *:hover i { color: '+ $projColor +'!important; } ';

			}
		});
		
		if(portfolioSocialColorCss.length > 1) {

			var head = document.head || document.getElementsByTagName('head')[0];
			var style = document.createElement('style');

				style.type = 'text/css';
			if (style.styleSheet){
			  style.styleSheet.cssText = portfolioSocialColorCss;
			} else {
			  style.appendChild(document.createTextNode(portfolioSocialColorCss));
			}

			head.appendChild(style);
		}
	}
	portfolioAccentColor();
	
	//portfolio sort
	$('body').on('mouseenter','.portfolio-filters',function(){
		$(this).find('> ul').stop(true,true).slideDown(500,'easeOutExpo');
		$(this).find('a#sort-portfolio span').html($(this).find('a#sort-portfolio').attr('data-sortable-label'));
	});

	$('body').on('mouseleave','.portfolio-filters',function(){
		var $activeCat = $(this).find('a.active').html();
		if( typeof $activeCat == 'undefined' || $activeCat.length == 0) $activeCat = $(this).attr('data-sortable-label');
		$(this).find('a#sort-portfolio span').html($activeCat);
		$(this).find('> ul').stop(true,true).slideUp(500,'easeOutExpo');
	});
	
	//portfolio selected category
	$('body').on('click','.portfolio-filters ul li a', function(){
		$(this).parents('.portfolio-filters').find('#sort-portfolio span').html($(this).html());
	});
	
	//inline portfolio selected category
	$('body').on('click','.portfolio-filters-inline ul li a',function(){

		$(this).parents('ul').find('li a').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.portfolio-filters-inline').find('#current-category').html($(this).html());
		
	});
	

	function portfolioFiltersInit() {
		//mobile sort menu fix
		if($('body').hasClass('mobile') || navigator.userAgent.match(/(iPad|IEMobile)/)){
			$('.portfolio-filters').unbind('mouseenter mouseleave');
			$('.portfolio-filters > a, .portfolio-filters ul li a').click(function(e){
				if(e.originalEvent !== undefined) $(this).parents('.portfolio-filters').find('> ul').stop(true,true).slideToggle(600,'easeOutCubic');
			});
		}

		$('.portfolio-filters-inline .container > ul > li:nth-child(2) a').click();
		
		//portfolio more details page menu highlight
		$('body.single-portfolio #header-outer nav > ul > li > a:contains("Portfolio")').parents('li').addClass('current-menu-item');
		
		//blog page highlight
		$('body.single-post #header-outer nav > ul > li > a:contains("Blog")').parents('li').addClass('current-menu-item');
	}

	portfolioFiltersInit();

	
	//blog love center
	function centerLove(){
		$('.post').each(function(){
			
			var $loveWidth = $(this).find('.post-meta .nectar-love').outerWidth();
			var $loveWrapWidth = $(this).find('.post-meta  .nectar-love-wrap').width();
			
			//center
			$(this).find('.post-meta .nectar-love').css('margin-left', $loveWrapWidth/2 - $loveWidth/2 + 'px' );
			$(this).find('.nectar-love-wrap').css('visibility','visible');
		});
	}
	
	$('.nectar-love').on('click',function(){
		centerLove();
	});
	
	centerLove();	
	

	//portfolio single comment order
	function portfolioCommentOrder(){
	
		if($('body').hasClass('mobile') && $('body').hasClass('single-portfolio') && $('#respond').length > 0){
			$('#sidebar').insertBefore('.comments-section');
		}
		 
		else if($('body').hasClass('single-portfolio') && $('#respond').length > 0) {
			$('#sidebar').insertAfter('#post-area');
		}
		
	}

	 portfolioCommentOrder();
	 
	
	//portfolio sidebar follow
	
	var sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
	
	function portfolioSidebarFollow(){

		sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
	
		if( $('body.single-portfolio').length > 0 && sidebarFollow == 1 && !$('body').hasClass('mobile') && parseInt($('#sidebar').height()) + 50 <= parseInt($('#post-area').height())) {
			
			 $('#sidebar').addClass('fixed-sidebar');
			 
			 var $footer = ($('.comment-wrap.full-width-section').length == 0) ? '#footer-outer' : '.comment-wrap';
			 if( $('#call-to-action').length > 0 ) $footer = '#call-to-action';
			 
			 //convert width into px
			 sidebarPxConversion();
			 
			 $('#sidebar').stickyMojo({footerID: $footer, contentID: '#post-area'});
			 
		}
		
	}
	
	function sidebarPxConversion(){
		
		if( $('body.single-portfolio').length > 0 && sidebarFollow == 1 && !$('body').hasClass('mobile') ) {
			
			var $containerWidth = $('.main-content > .row').width();
			var $sidebarWidth = $containerWidth*.235;
			
			if(window.innerWidth > 1300){
				$sidebarWidth = $containerWidth*.235;
			} else if(window.innerWidth < 1300 && window.innerWidth > 1000 ) {
				$sidebarWidth = $containerWidth*.273;
			}
			
			$('#sidebar').css('width',$sidebarWidth+'px');
		}
	}
	
	$(window).load(function(){
		setTimeout(portfolioSidebarFollow,200);
	});
	
	
	//remove the portfolio filters that are not found in the current page
	function isotopeCatSelection() {


		$('.portfolio-items:not(".carousel")').each(function(){

			var isotopeCatArr = [];
			var $portfolioCatCount = 0;
			$(this).parent().parent().find('div[class^=portfolio-filters] ul li').each(function(i){
				if($(this).find('a').length > 0) {
					isotopeCatArr[$portfolioCatCount] = $(this).find('a').attr('data-filter').substring(1);	
					$portfolioCatCount++;
				}
			});
			
			////ice the first (all)
			isotopeCatArr.shift();
			
			
			var itemCats = '';
			
			$(this).find('> div').each(function(i){
				itemCats += $(this).attr('data-project-cat');
			});
			itemCats = itemCats.split(' ');
			
			////remove the extra item on the end of blank space
			itemCats.pop();
			
			////make sure the array has no duplicates
			itemCats = $.unique(itemCats);
			
			////if user has chosen a set of filters to display - only show those
			if($(this).attr('data-categories-to-show').length != 0 && $(this).attr('data-categories-to-show') != 'all') {
				$userSelectedCats = $(this).attr('data-categories-to-show').replace(/,/g , ' ');
				$userSelectedCats = $userSelectedCats.split(' ');
				
				if(!$(this).hasClass('infinite_scroll')) $(this).removeAttr('data-categories-to-show');
			} else {
				$userSelectedCats = itemCats;
			}
			
			
			////Find which categories are actually on the current page
			var notFoundCats = [];
			$.grep(isotopeCatArr, function(el) {

		    	if ($.inArray(el, itemCats) == -1) notFoundCats.push(el);
		    	if ($.inArray(el, $userSelectedCats) == -1) notFoundCats.push(el);

			});
			
			//manipulate the list
			if(notFoundCats.length != 0){
				$(this).parent().parent().find('div[class^=portfolio-filters] ul li').each(function(){
					if($(this).find('a').length > 0) {
						if( $.inArray($(this).find('a').attr('data-filter').substring(1), notFoundCats) != -1 ){ 
							$(this).hide(); 
						} else {
							$(this).show();
						}
					}
				})
			}
		});
	}
	
	isotopeCatSelection();
	
	
	//sharing buttons
	/*jQuery.sharedCount = function(url, fn) {
		url = encodeURIComponent(url || location.href);
		var arg = {
			url: "//" + (location.protocol == "https:" ? "sharedcount.appspot" : "api.sharedcount") + ".com/?url=" + url,
			cache: true,
			dataType: "json"
		};
		if ('withCredentials' in new XMLHttpRequest) {
			arg.success = fn;
		}
		else {
			var cb = "sc_" + url.replace(/\W/g, '');
			window[cb] = fn;
			arg.jsonpCallback = cb;
			arg.dataType += "p";
		}
		return jQuery.ajax(arg);
	};*/
	
	
	
	
	var completed = 0;
	var windowLocation = window.location.href.replace(window.location.hash, '');

	function facebookShare(){
		windowLocation = window.location.href.replace(window.location.hash, '');
		window.open( 'https://www.facebook.com/sharer/sharer.php?u='+windowLocation, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}

	function googlePlusShare(){
		windowLocation = window.location.href.replace(window.location.hash, '');
		window.open( 'https://plus.google.com/share?url='+windowLocation, "googlePlusWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}

	function twitterShare(){
        windowLocation = window.location.href.replace(window.location.hash, '');		
		if($(".section-title h1").length > 0) {
			var $pageTitle = encodeURIComponent($(".section-title h1").text());
		} else {
			var $pageTitle = encodeURIComponent($(document).find("title").text());
		}
		window.open( 'http://twitter.com/intent/tweet?text='+$pageTitle +' '+windowLocation, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}

	function wooTwitterShare(){
		windowLocation = window.location.href.replace(window.location.hash, '');
		window.open( 'http://twitter.com/intent/tweet?text='+$("h1.product_title").text() +' '+windowLocation, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}

	function linkedInShare(){
	    windowLocation = window.location.href.replace(window.location.hash, '');	
		if($(".section-title h1").length > 0) {
			var $pageTitle = encodeURIComponent($(".section-title h1").text());
		} else {
			var $pageTitle = encodeURIComponent($(document).find("title").text());
		}
		window.open( 'http://www.linkedin.com/shareArticle?mini=true&url='+windowLocation+'&title='+$pageTitle+'', "linkedInWindow", "height=480,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}

	function woolinkedInShare(){
	    windowLocation = window.location.href.replace(window.location.hash, '');	
		window.open( 'http://www.linkedin.com/shareArticle?mini=true&url='+windowLocation+'&title='+$("h1.product_title").text(), "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}

	function pinterestShare(){
		windowLocation = window.location.href.replace(window.location.hash, '');
		var $sharingImg = ($('.single-portfolio').length > 0 && $('div[data-featured-img]').attr('data-featured-img') != 'empty' ) ? $('div[data-featured-img]').attr('data-featured-img') : $('#ajax-content-wrap img').first().attr('src'); 
		
		if($(".section-title h1").length > 0) {
			var $pageTitle = encodeURIComponent($(".section-title h1").text());
		} else {
			var $pageTitle = encodeURIComponent($(document).find("title").text());
		}
		
		window.open( 'http://pinterest.com/pin/create/button/?url='+windowLocation+'&media='+$sharingImg+'&description='+$pageTitle, "pinterestWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}
	
	function wooPinterestShare(){
		$imgToShare = ($('img.attachment-shop_single').length > 0) ? $('img.attachment-shop_single').first().attr('src') : $('.single-product-main-image img').first().attr('src');
		windowLocation = window.location.href.replace(window.location.hash, '');
		window.open( 'http://pinterest.com/pin/create/button/?url='+windowLocation+'&media='+$imgToShare+'&description='+$('h1.product_title').text(), "pinterestWindow", "height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}


	function socialFade(){
			if(completed == $('a.nectar-sharing').length && $('a.nectar-sharing').parent().hasClass('in-sight')) {

				//$timeout = ($('#page-header-bg[data-animate-in-effect="slide-down"] .nectar-social').length > 0 ) ? 500 : 1;
			//	setTimeout(function(){
					//$('.nectar-social > a').stop(true,true).transition({'padding-right':'15px'},350,'easeOutSine');
					
					//love fadein
					$('.nectar-social .nectar-love span').show(350,'easeOutSine',function(){
						$(this).stop().animate({'opacity':1},800);
					});
					
					//sharing loadin
					$('.nectar-social > a').each(function(i){
						var $that = $(this);
						
						$(this).find('> span').show(350,'easeOutSine',function(){
							$that.find('> span').stop().animate({'opacity':1},800);
						});
						
					});
				//},$timeout);

				//alt blog layout total share count
				var $totalShares = 0;
				$('.nectar-social > a .count').each(function(){
					$totalShares += parseInt($(this).html());
				});

				if($totalShares != 1){
					$('.single .meta-share-count .plural').css({'opacity':'1', 'display':'inline'});
					$('.single .meta-share-count .singular').remove();
				} else {
					$('.single .meta-share-count .singular').css({'opacity':'1', 'position':'relative',  'display':'inline'});
					$('.single .meta-share-count .plural').remove();
				}

				$('.meta-share-count .share-count-total').html($totalShares).css('opacity',1);
			}
		}

	$('body').on('click','#single-below-header .nectar-social a', function(){ return false; });

	$('body').on('click','.facebook-share:not(.inactive)', facebookShare);
	$('body').on('click','.google-plus-share:not(.inactive)', googlePlusShare);
	$('body').on('click','.nectar-social:not(".woo") .twitter-share:not(.inactive)', twitterShare);
	$('body').on('click','.nectar-social.woo .twitter-share', wooTwitterShare);
	$('body').on('click','.nectar-social:not(".woo") .linkedin-share:not(.inactive)', linkedInShare);
	$('body').on('click','.nectar-social.woo .linkedin-share', woolinkedInShare);
	$('body').on('click','.nectar-social:not(".woo") .pinterest-share:not(.inactive)', pinterestShare);
	$('body').on('click','.nectar-social.woo .pinterest-share', wooPinterestShare);


	function socialSharingInit() {

		//mobile fullscreen blog class for click event fix
		if($('body').hasClass('mobile') && $('.single-post .fullscreen-header').length > 0) {
			$('#single-below-header .nectar-social .nectar-sharing, #single-below-header .nectar-social .nectar-sharing-alt').addClass('inactive');
		}

		completed = 0;

		if( $('a.facebook-share').length > 0 || $('a.twitter-share').length > 0 || $('a.google-plus-share').length > 0 || $('a.linkedin-share').length > 0 || $('a.pinterest-share').length > 0) {
  
		 
			////facebook
			if($('a.facebook-share:not(.sharing-default-minimal a.facebook-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.facebook-share').length > 0 || $('#single-meta a.facebook-share').length > 0 || $('#single-below-header .facebook-share').length > 0) {
				
				//load share count on load  
				$.getJSON("https://graph.facebook.com/?id="+ windowLocation +'&callback=?', function(data) {
					if((data.shares != 0) && (data.shares != undefined) && (data.shares != null)) { 
						$('.facebook-share a span.count, a.facebook-share span.count').html( data.shares );	
					}
					else {
						$('.facebook-share a span.count, a.facebook-share span.count').html( 0 );	
					}
					completed++;
					socialFade();
				});
			 
				
				
			} else if($('a.facebook-share').length > 0 && $('body[data-button-style="rounded"]').length > 0 || $('.sharing-default-minimal a.facebook-share').length > 0) {
				completed++;
				socialFade();
			}
			
			
			////twitter
			if($('a.twitter-share:not(.sharing-default-minimal a.twitter-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.twitter-share').length > 0 || $('#single-meta a.twitter-share').length > 0 || $('#single-below-header .twitter-share').length > 0) {
				//load tweet count on load 
				//$.getJSON('https://cdn.api.twitter.com/1/urls/count.json?url='+windowLocation+'&callback=?', function(data) {
				//	if((data.count != 0) && (data.count != undefined) && (data.count != null)) { 
					//	$('.twitter-share a span.count, a.twitter-share span.count').html( data.count );
					//}
					//else {
					$('.twitter-share a span.count, a.twitter-share span.count').html( 0 );
					//}
					completed++;
					socialFade();
				//});


			} else if($('a.twitter-share').length > 0 && $('body[data-button-style="rounded"]').length > 0 || $('.sharing-default-minimal a.twitter-share').length > 0 ) {
				completed++;
				socialFade();
			}
			
			
			////linkedIn
			if($('a.linkedin-share:not(.sharing-default-minimal a.linkedin-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.linkedin-share').length > 0 || $('#single-meta a.linkedin-share').length > 0 || $('#single-below-header .linkedin-share').length > 0) {
				//load share count on load 
				$.getJSON('https://www.linkedin.com/countserv/count/share?url='+windowLocation+'&callback=?', function(data) {
					if((data.count != 0) && (data.count != undefined) && (data.count != null)) { 
						$('.linkedin-share a span.count, a.linkedin-share span.count').html( data.count );
					}
					else {
						$('.linkedin-share a span.count, a.linkedin-share span.count').html( 0 );
					}
					completed++;
					socialFade();
				});

				
			} else if($('a.linkedin-share').length > 0 && $('body[data-button-style="rounded"]').length > 0 || $('.sharing-default-minimal a.linkedin-share').length > 0) {
				completed++;
				socialFade();
			}
			
			
			////pinterest
			if($('a.pinterest-share:not(.sharing-default-minimal a.pinterest-share)').length > 0 && $('body[data-button-style="rounded"]').length == 0 || $('#project-meta a.pinterest-share').length > 0 || $('#single-meta a.pinterest-share').length > 0 || $('#single-below-header .pinterest-share').length > 0) {
				//load pin count on load 
				$.getJSON('https://api.pinterest.com/v1/urls/count.json?url='+windowLocation+'&callback=?', function(data) {
					if((data.count != 0) && (data.count != undefined) && (data.count != null)) { 
						$('.pinterest-share a span.count, a.pinterest-share span.count').html( data.count );
					}
					else {
						$('.pinterest-share a span.count, a.pinterest-share span.count').html( 0 );
					}
					completed++;
					socialFade();
				});

			} else if($('a.pinterest-share').length > 0 && $('body[data-button-style="rounded"]').length >  0 || $('.sharing-default-minimal a.pinterest-share').length > 0) {
				completed++;
				socialFade();

			}
			
			
			//fadeIn
			$('a.nectar-sharing > span.count, a.nectar-sharing-alt > span.count').hide().css('width','auto');


			//social light up

			$('.nectar-social').each(function() {
				if($(this).parents('.custom-content').length == 0) {


					var $that = $(this);
					var waypoint = new Waypoint({
		 			element: $that,
		 			 handler: function(direction) {

						$slide_timeout = ($('#page-header-bg[data-animate-in-effect="slide-down"] .nectar-social').length > 0 ) ? 900 : 1;

						setTimeout(function(){

							$that.addClass('in-sight');
							socialFade();
							
							if($('#page-header-bg .nectar-social').length == 0) {
								$that.find('> *').each(function(i){
									
									var $that = $(this);
									var $timeout = ($('body[data-button-style="rounded"]').length > 0) ? 0: 750;

									setTimeout(function(){ 
										
										$that.delay(i*80).queue(function(){ 
											
											var $that = $(this); $(this).addClass('hovered'); 
											
											setTimeout(function(){ 
												$that.removeClass('hovered');
											},300); 
											
										});
									
									},$timeout);
								});
							}

						},$slide_timeout );

						$that.addClass('animated-in');
						waypoint.destroy();
					},
					offset: 'bottom-in-view'

				}); 


					
				}
			}); 

		}

	}
	
	socialSharingInit();


	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {

		var $socialTimeout;
		$('body').on('mouseenter','#single-meta .meta-share-count, #project-meta .meta-share-count', function(){
			clearTimeout($socialTimeout);

			if($(this).parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0) 
				$(this).find('.nectar-social').show().stop(true).animate({'opacity': 1, 'right':'0px'},0);
			else 
				$(this).find('.nectar-social').show().stop(true).animate({'opacity': 1, 'left':'0px'},0);

			$(this).parents('[id*="-meta"]').addClass('social-hovered');

			$(this).parents('[id*="-meta"]').find('.n-shortcode a, .meta-comment-count a, .meta-share-count > a ').stop(true).animate({'opacity':0},250);
			$(this).find('.nectar-social a').each(function(i){
				$(this).stop(true).delay(i*40).animate({'opacity': 1,  'left':'0px'}, 150);
			});

		});

	
		$('body').on('mouseleave','#single-meta .meta-share-count, #project-meta .meta-share-count', function(){
			$(this).parents('[id*="-meta"]').removeClass('social-hovered');

			if($(this).parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0) 
				$(this).find('.nectar-social').stop(true).animate({'opacity': 0,  'right':'-20px'}, 200);
			else 
				$(this).find('.nectar-social').stop(true).animate({'opacity': 0,  'left':'-20px'}, 200);

			$(this).parents('[id*="-meta"]').find('.n-shortcode a, .meta-comment-count a, .meta-share-count > a ').stop(true).animate({'opacity':1},250);

			var $that = $(this);
			
			$socialTimeout = setTimeout(function(){ 
				$that.find('.nectar-social').hide(); 
				if($that.parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0) 
					$that.find('.nectar-social a').stop(true).animate({'opacity': 0,  'left':'20px'},0);   
				else 
					$that.find('.nectar-social a').stop(true).animate({'opacity': 0,  'left':'-20px'},0);   
			}, 200);
		});
	} else {
		var $socialTimeout;
		$('body').on('click','#single-meta .meta-share-count, #project-meta .meta-share-count', function(){
			clearTimeout($socialTimeout);

			if($(this).parents('[id*="single-meta"]').length > 0 && $('[data-tab-pos="fullwidth"]').length == 0) 
				$(this).find('.nectar-social').show().stop(true).animate({'opacity': 1, 'right':'0px'},0);
			else 
				$(this).find('.nectar-social').show().stop(true).animate({'opacity': 1, 'left':'0px'},0);

			$(this).parents('[id*="-meta"]').addClass('social-hovered');

			$(this).parents('[id*="-meta"]').find('.n-shortcode a, .meta-comment-count a, .meta-share-count > a ').stop(true).animate({'opacity':0},250);
			$(this).find('.nectar-social a').each(function(i){
				$(this).stop(true).delay(i*40).animate({'opacity': 1,  'left':'0px'}, 150);
			});

			return false;
		});

	}

	$('body').on('mouseenter','.fullscreen-header  .meta-share-count', function(){
		$(this).find('> a, > i').stop(true).animate({'opacity': 0},400);
		$(this).find('.nectar-social > *').each(function(i){
			$(this).stop(true).delay(i*50).animate({'opacity':'1', 'top': '0px'},250,'easeOutCubic');
		});
		//allow clickable on mobile
		setTimeout(function(){ $('.meta-share-count .nectar-sharing, .meta-share-count .nectar-sharing-alt').removeClass('inactive'); },300);
	});

	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
		$('body').on('mouseleave','.fullscreen-header  .meta-share-count', function(){
			$(this).find('> a, > i').stop(true).animate({'opacity': 1},300,'easeInCubic');
			$(this).find('.nectar-social > *').each(function(i){
				$(this).stop(true).animate({'opacity':'0', 'top': '10px'},200,'easeInCubic');
			});
		});
	}




	//full width love center
	function nectarLoveFWCenter(){
		$('.nectar-social.full-width').each(function(){ 
			$(this).find('.n-shortcode .nectar-love').css('padding-top', $(this).find('> a').css('padding-top'));
		});
	}
	
	nectarLoveFWCenter();
	

	//-----------------------------------------------------------------
	// NectarLove
	//-----------------------------------------------------------------
	
	$('body').on('click','.nectar-love', function() {
			

			var $loveLink = $(this);
			var $id = $(this).attr('id');
			var $that = $(this);
			
			if($loveLink.hasClass('loved')) return false;
			if($(this).hasClass('inactive')) return false;
			
			var $dataToPass = {
				action: 'nectar-love', 
				loves_id: $id 
			}
			
			$.post(nectarLove.ajaxurl, $dataToPass, function(data){
				$loveLink.find('span').html(data);
				$loveLink.addClass('loved').attr('title','You already love this!');
				$loveLink.find('span').css({'opacity': 1,'width':'auto'});
				//ascend
				if($('body').hasClass('ascend') && $that.parents('.classic_enhanced').length == 0 ){
					$loveLink.find('.icon-salient-heart.loved').show().transition({ scale: 1 },800,'cubic-bezier(0.15, 0.84, 0.35, 1.5)');
					setTimeout(function(){ $loveLink.find('.icon-salient-heart-2').css('opacity','0'); },400);
					if($loveLink.parents('.sharing-default-minimal').length > 0 && $loveLink.parents('.bottom-meta').length >0 ) $loveLink.find('.icon-salient-heart-2').remove();
				} else if($that.parents('.classic_enhanced').length > 0 ) {
					$that.find('.icon-salient-heart-2').addClass('loved');
				}
			});
			
			$(this).addClass('inactive');
			
			return false;
	});


	
	//infinite scroll
	function infiniteScrollInit() {

		if($('.infinite_scroll').length > 0) {
			
			//portfolio
			$('.portfolio-items.infinite_scroll').infinitescroll({
		    	navSelector  : "div#pagination",            
		   	    nextSelector : "div#pagination a:first",    
		   	    itemSelector : ".portfolio-items.infinite_scroll .element",
		   	    finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
		        msgText: " ",         
		   },function(newElements){
		   	

				var $container = $('.portfolio-items.infinite_scroll:not(.carousel)');
				//loading effect   

		        var $newElems = $( newElements ).css('opacity',0);
		        //// ensure that images load before adding to masonry layout
		        $newElems.imagesLoaded(function(){
		          
		          $( newElements ).css('opacity',1);

		          $container.isotope( 'appended', $( newElements ));
		          
		          $( newElements ).find('.work-item').addClass('ajax-loaded');
		          $( newElements ).addClass('ajax-loaded');
		          ///// show elems now they're ready
		          
		          $(newElements).find('.work-meta, .nectar-love-wrap').css({'opacity':1});
		          
		          //keep filtering
		          if($('.portfolio-filters-inline').length > 0 || $('.portfolio-filters').length > 0) {
		          	
		          	  if($('.portfolio-filters-inline').length > 0) {
		          	  	 var selector = $('.portfolio-filters-inline a.active').attr('data-filter');
		          	  } else {
		          	  	 var selector = $('.portfolio-filters a.active').attr('data-filter');
		          	  }
		          	  
		          	  $('.portfolio-filters-inline a.active').attr('data-filter');
			  	 	  $container.isotope({ filter: selector });
		          }
		          
			  	//set width
			  	portfolioItemWidths();
			  	reLayout();

		        if($(newElements).find('.work-item.style-5').length > 0) style6Img();

	          	if($(newElements).find('.inner-wrap').attr('data-animation') == 'none') {
					$('.portfolio-items .col .inner-wrap').removeClass('animated');
				} else {

					$(newElements).each(function(i){

						$(this).delay(130*i).queue(function(next){
						    $(this).addClass("animated-in");
						    next();
						});
	
					}); //each
				}

		       
		        portfolioHoverEffects();	
				portfolioAccentColor();
		         
		        //verify smooth scorlling
				if( $smoothCache == true && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){ niceScrollInit(); $(window).trigger('resize') } 
				
				
				//Panr 
				if(!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
					
					$(".portfolio-items:not(.carousel) .work-item.style-3 img").panr({
						scaleDuration: .28
					}); 
					$(".portfolio-items:not(.carousel) .work-item.style-3-alt img").panr({ scaleDuration: .28, sensitivity: 12.6, scaleTo: 1.08, panDuration: 3 }); 
					
				}
				
				//prettyphoto
				$('.portfolio-items').each(function(){
					var $unique_id = Math.floor(Math.random()*10000);
					$(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr('rel','prettyPhoto['+$unique_id+'_gal]').removeClass('pretty_photo');
				});
		
				lightBoxInit();
				
				piVertCenter();

				setTimeout(function(){masonryZindex(); reLayout(); $( newElements ).removeClass('ajax-loaded'); },700);
		        
		        //recalc the filters
		        isotopeCatSelection();

		        parallaxRowsBGCals();
	          
	          }); 
		          
		       
				
				
				
		   });
			
			
			
			//blog
			$('#post-area.infinite_scroll .posts-container').infinitescroll({
		    	navSelector  : "div#pagination",            
		   	    nextSelector : "div#pagination a:first",    
		   	    itemSelector : "#post-area .posts-container .post",
		   	    finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
		        msgText: " " 
		   },function(newElements){
		   	
		   	if($('.masonry.meta_overlaid').length == 0) { 
			   	//reinit js
			   	centerLove();
			   	
			   	//gallery
				$(newElements).find('.flex-gallery').each(function(){
					
					var $that = $(this);
					
					 $that.flexslider({
				        animation: 'fade',
				        smoothHeight: false, 
				        animationSpeed: 500,
				        useCSS: false, 
				        touch: true
				    });
					
					////gallery slider add arrows
					$('.flex-gallery .flex-direction-nav li a.flex-next').html('<i class="icon-angle-right"></i>');
					$('.flex-gallery .flex-direction-nav li a.flex-prev').html('<i class="icon-angle-left"></i>');

				});
			   	
			   	
			   	//media players
			   	if($().mediaelementplayer) $(newElements).find('.wp-audio-shortcode, .wp-video-shortcode').mediaelementplayer();
			   	
			   	
			   	//lightbox
			    lightBoxInit();
			   	
			   	//carousels
			   	if($('.carousel').length > 0) {
				   	standardCarouselInit();
			    	clientsCarouselInit();
			    }
			   	
			   	//iframes
			   	showLateIframes();

			   	//milestone
			   	$(newElements).find('.nectar-milestone').each(function() {
					//symbol
					if($(this).has('[data-symbol]')) {
						if($(this).attr('data-symbol-pos') == 'before') {
							$(this).find('.number').prepend($(this).attr('data-symbol'));
						} else {
							$(this).find('.number').append($(this).attr('data-symbol'));
						}
					}
				});
				
				if(!$('body').hasClass('mobile')) {
					
					$(newElements).find('.nectar-milestone').each(function() {
						//animation

							var $that = $(this);
							var waypoint = new Waypoint({
				 			element: $that,
				 			 handler: function(direction) {
								if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
								     waypoint.destroy();
								     return;
								}

								var $endNum = parseInt($that.find('.number span').text());
								$that.find('.number span').countTo({
									from: 0,
									to: $endNum,
									speed: 1500,
									refreshInterval: 30
								});

								$that.addClass('animated-in');
								waypoint.destroy();
							},
							offset: 'bottom-in-view'

						}); 

						
					}); 
				}
				
				//pie chart		
			    if($().vcChat) $(newElements).find('.vc_pie_chart').vcChat();
		    	
		    	//fancy ul
		    	nectar_fancy_ul_init();
		    	
		    	//testimonial slider
		    	$('.testimonial_slider').animate({'opacity':'1'},800);
		    	createTestimonialControls();
				testimonialSliderHeight(); 
				testimonialHeightResize();
		    	
				//bar graph
				$(newElements).find('.nectar-progress-bar').each(function(i){
				

				var $that = $(this);
				var waypoint = new Waypoint({
		 			element: $that,
		 			 handler: function(direction) {
						if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
						     waypoint.destroy();
						     return;
						}

						var percent = $that.find('span').attr('data-width');
						var $endNum = parseInt($that.find('span strong i').text());
						
						$that.find('span').transition({
							'width' : percent + '%'
						},1600, 'easeInOutCirc',function(){
						});
						
						$that.find('span strong').transition({
							'opacity' : 1
						},1350);
						
						
						$that.find('span strong i').countTo({
							from: 0,
							to: $endNum,
							speed: 1100,
							refreshInterval: 30,
							onComplete: function(){
					
							}
						});	
						
						////100% progress bar 
						if(percent == '100'){
							$that.find('span strong').addClass('full');
						}


						$that.addClass('animated-in');
						waypoint.destroy();
					},
					offset: 'bottom-in-view'

				}); 


			
				});
				
				
				//columns & images with animation
				colAndImgAnimations();
				splitLineHeadings();

				setTimeout(function(){
					videoshortcodeSize();
					responsiveVideoIframesInit();
					responsiveVideoIframes();
					$(window).trigger('resize');
				},500);


				parallaxRowsBGCals();

				$(window).trigger('resize');
			   	
		   	}//non meta overlaid style 
		   	else {
		   		parallaxRowsBGCals();

				$(window).trigger('resize');
		   	}

		   	// trigger Masonry as a callback
		   	var $container = $('.posts-container');
		    if($container.parent().hasClass('masonry')) { 
		    	 
		    	$(newElements).addClass('masonry-blog-item');
				$(newElements).prepend('<span class="bottom-line"></span>');
				
				//move the meta to the bottom
				$(newElements).each(function(){
					
					var $metaClone = $(this).find('.post-meta').clone();
		
					$(this).find('.post-meta').remove();
					
					if($('#post-area.meta_overlaid').length > 0){
						$(this).find('.post-header h2').after($metaClone);
					} else {
						$(this).find('.content-inner').after($metaClone);
					}
					
				});
			
		    	}//if masonry


		    	//loading effect   
		    	
		        //// hide new items while they are loading
		        var $newElems = $( newElements );
		        //// ensure that images load before adding to masonry layout

		        if($newElems.find('img').length == 0) $newElems = $('body');
		        
		        $newElems.imagesLoaded(function(){

		          $container.isotope( 'appended', $( newElements ));

		          flickityBlogInit();

		          $( newElements ).addClass('ajax-loaded');
		          ///// show elems now they're ready


		        //classic enhanced specific 
		        if($container.parent().hasClass('classic_enhanced')){
					$container.find('.large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img').each(function(){
						var $src = $(this).find('img').attr('src');
						$(this).css('background-image','url('+$src+')');
					});

					$container.find('.large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity').each(function(){

						$(this).find('.cell').each(function(){
							var $src = $(this).find('img').attr('src');
							$(this).css('background-image','url('+$src+')');
						});
						
					});
				}


		          if($(newElements).parents('.posts-container').attr('data-animation') == 'none') {
						$( newElements ).find('.inner-wrap').removeClass('animated');
					} else {

						$(newElements).each(function(i){

							$(this).delay(130*i).queue(function(next){
							    $(this).addClass("animated-in");
							    next();
							});
		
						}); //each
					}

					setTimeout(function(){$( newElements ).removeClass('ajax-loaded'); },700);

		        
		        });
		        
		    
		   	
		   });
		   
	   }

}

infiniteScrollInit();

function destroyInfiniteScroll(){
	$('#post-area.infinite_scroll .posts-container').infinitescroll('destroy');
	$('.portfolio-items.infinite_scroll').infinitescroll('destroy');
}
	
/*-------------------------------------------------------------------------*/
/*	6.	Scroll to top
/*-------------------------------------------------------------------------*/	

var $scrollTop = $(window).scrollTop();

//starting bind
function toTopBind() {
	if( $('#to-top').length > 0 && $(window).width() > 1020 || $('#to-top').length > 0 &&  $('#to-top.mobile-enabled').length > 0 ) {
		
		if($scrollTop > 350){
			$(window).on('scroll',hideToTop);
		}
		else {
			$(window).on('scroll',showToTop);
		}
	}
}
toTopBind();

function showToTop(){
	
	if( $scrollTop > 350 && $('#slide-out-widget-area.fullscreen.open').length == 0){

		$('#to-top').stop().transition({
			'bottom' : '17px'
		},350,'easeInOutCubic');	
		
		$(window).off('scroll',showToTop);
		$(window).on('scroll',hideToTop);
	}

}

function hideToTop(){
	
	if( $scrollTop < 350 || $('#slide-out-widget-area.fullscreen.open').length > 0){

		$animationTiming = ($('#slide-out-widget-area.fullscreen.open').length > 0) ? 1150 : 350;

		$('#to-top').stop().transition({
			'bottom' : '-30px'
		},$animationTiming,'easeInOutQuint');	
		
		$(window).off('scroll',hideToTop);
		$(window).on('scroll',showToTop);	
		
	}
}


//to top color
if( $('#to-top').length > 0 ) {
	
	var $windowHeight, $pageHeight, $footerHeight, $ctaHeight;
	
	function calcToTopColor(){
		$scrollTop = $(window).scrollTop();
		$windowHeight = $(window).height();
		$pageHeight = $('body').height();
		$footerHeight = $('#footer-outer').height();
		$ctaHeight = ($('#call-to-action').length > 0) ? $('#call-to-action').height() : 0;
		
		if( ($scrollTop-35 + $windowHeight) >= ($pageHeight - $footerHeight) && $('#boxed').length == 0){
			$('#to-top').addClass('dark');
		}
		
		else {
			$('#to-top').removeClass('dark');
		}
	}
	
	//calc on scroll
	$(window).scroll(calcToTopColor);
	
	//calc on resize
	$(window).resize(calcToTopColor);

}

//alt style
if($('body[data-button-style="rounded"]').length > 0){
	var $clone = $('#to-top .icon-angle-up').clone();
	$clone.addClass('top-icon');
	$('#to-top').prepend($clone)
}

//scroll up event
$('body').on('click','#to-top, a[href="#top"]',function(){
	$('body,html').stop().animate({
		scrollTop:0
	},800,'easeOutQuad',function(){
		if($('.nectar-box-roll').length > 0) {
			$('body').trigger('mousewheel', [1, 0, 0]);
		}
	})
	return false;
});


/* one page scrolling */
function scrollSpyInit(){ 

	//remove full page URLs from hash if located on same page to fix current menu class
	//if(location.pathname.length > 1) {
		$("#header-outer a[href*='" + location.pathname + "']").each(function(){
			var $href = $(this).attr('href');
			
			if($href.indexOf("#") != -1 && $('div'+$href.substr($href.indexOf("#"))).length > 0 ) {

				$(this).attr('href',$href.substr($href.indexOf("#")));
				$(this).parent().removeClass('current_page_item').removeClass('current-menu-item');
			}
		});
	//}

	$target = ($('.page-submenu[data-sticky="true"]').length == 0) ? '#header-outer nav': '.page-submenu';
	$('body').scrollspy({
		target: $target,
		offset: $('#header-outer').height() + adminBarHeight + 40
	});

}

function pageLoadHash() {
	var $hash = window.location.hash;
	if($hash && $($hash).length > 0) {

		$timeoutVar = 0;
		if($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
			boxRoll(null,-1);
			$timeoutVar = 2050;
		} 
		setTimeout(function(){
		
			if( $('body[data-permanent-transparent="1"]').length == 0 ) {
				
				if(!$('body').hasClass('mobile')){
					$resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(shrinkNum) + headerPadding2*2;
					var $scrollTopDistance =  $($hash).offset().top - parseInt($('#header-space').height()) +$resize + 3 - adminBarHeight;
				} else {
					var $scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $($hash).offset().top + 2 - $('#header-space').height() + adminBarHeight : $($hash).offset().top - adminBarHeight + 1;	
				}

			} else {
				var $scrollTopDistance = $($hash).offset().top - adminBarHeight + 1;
			}

			var $pageSubMenu = ($('.page-submenu[data-sticky="true"]').length > 0) ? $('.page-submenu').height() : 0;

			$('body,html').stop().animate({
				scrollTop: $scrollTopDistance - $pageSubMenu
			},800,'easeInOutCubic');

		},$timeoutVar);
	}
}

if($('body[data-animated-anchors="true"]').length > 0) { 


+ function(t) {
    "use strict";

    function s(e, i) {
        var r = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(e).is("body") ? window : e), this.options = t.extend({}, s.DEFAULTS, i), this.selector = (this.options.target || "") + " ul li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
    }

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof e && e;
            r || i.data("bs.scrollspy", r = new s(this, o)), "string" == typeof e && r[e]()
        })
    }
    s.VERSION = "3.2.0", s.DEFAULTS = {
        offset: 10
    }, s.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, s.prototype.refresh = function() {
        var s = "offset",
            e = 0;
        t.isWindow(this.$scrollElement[0]) || (s = "position", e = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
                r = i.data("target") || i.attr("href"),
                o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [
                [o[s]().top + e, r]
            ] || null
        }).sort(function(t, s) {
            return t[0] - s[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, s.prototype.process = function() {
    	var $pageSubMenu = ($('.page-submenu[data-sticky="true"]').length > 0 && $('body[data-hhun="1"]').length == 0) ? $('.page-submenu').height() : 0;

        var t, s = this.$scrollElement.scrollTop() + this.options.offset + $pageSubMenu,
            e = this.getScrollHeight(),
            i = this.options.offset + e - this.$scrollElement.height() -$pageSubMenu,
            r = this.offsets,
            o = this.targets,
            l = this.activeTarget;
        if (this.scrollHeight != e && this.refresh(), s >= i) return l != (t = o[o.length - 1]) && this.activate(t);
        if (l && s <= r[0]) return l != (t = o[0]) && this.activate(t);
        for (t = r.length; t--;) l != o[t] && s >= r[t] && (!r[t + 1] || s <= r[t + 1]) && this.activate(o[t])
    }, s.prototype.activate = function(s) {
        this.activeTarget = s, t(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass('sfHover');
        var e = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"]',
            i = t(e).parents("li").addClass("current-menu-item");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("current-menu-item")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = e, t.fn.scrollspy.Constructor = s, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }
}(jQuery);


var shrinkNum = 6;	
if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');
headerPadding2 = headerPadding - headerPadding/1.8;

setTimeout(scrollSpyInit,200);

var $animatedScrollingTimeout;

$('body').on('click','#header-outer nav .sf-menu a, .container-wrap a:not(.wpb_tabs_nav a), .swiper-slide .button a, #slide-out-widget-area a, #mobile-menu .container ul li a, #slide-out-widget-area .inner div a',function(e){

	var $hash = $(this).prop("hash");	

	$('body').addClass('animated-scrolling');
	clearTimeout($animatedScrollingTimeout);
	$animatedScrollingTimeout = setTimeout(function(){ $('body').removeClass('animated-scrolling'); },850);

	if($hash && $($hash).length > 0 && $hash != '#top' && $hash != '' && $(this).attr('href').indexOf(window.location.href.split("#")[0]) !== -1 || $(this).is('[href^=#]') && $hash != '' && $($hash).length > 0 && $hash != '#top') {

		//stop scrolling for certain elements
		//if($(this).parents('.tabbed').length > 0) return false;
		
		//update hash
		if(history.pushState) {
		    history.pushState(null, null, $hash);
		}
		else {
		    location.hash = $hash;
		}

		if($(this).parents('ul').length > 0) { 
			$(this).parents('ul').find('li').removeClass('current-menu-item');
			//$(this).parents('li').addClass('current-menu-item');
		}

		//side widget area click
		if($(this).parents('#slide-out-widget-area').length > 0){
			$('#slide-out-widget-area .slide_out_area_close').trigger('click');
		}

		//mobile menu click
		if($(this).parents('#mobile-menu').length > 0) $('#toggle-nav').trigger('click');
		var $mobileMenuHeight = ($(this).parents('#mobile-menu').length > 0) ? $(this).parents('#mobile-menu').height() : null;
		
		$timeoutVar = 1;
		if($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
			boxRoll(null,-1);
			$timeoutVar = 2050;
		} 

		var $that = $(this);

		setTimeout(function(){
			
			//scrolling
			var $headerSpace = ($('body[data-permanent-transparent="1"]').length > 0) ? 0 : parseInt($('#header-space').height());

			if( $('body[data-permanent-transparent="1"]').length == 0 ) {
				
				if(!$('body').hasClass('mobile')){
					$resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(shrinkNum) + headerPadding2*2;
					var $scrollTopDistance =  $($hash).offset().top - $mobileMenuHeight - parseInt($('#header-space').height()) +$resize + 3 - adminBarHeight;
				} else {
					var $scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $($hash).offset().top + 2 - $('#header-space').height() + adminBarHeight : $($hash).offset().top - $mobileMenuHeight - adminBarHeight + 1;	
				}

			} else {
				var $scrollTopDistance = $($hash).offset().top - adminBarHeight + 1;
			}

			if($('body[data-hhun="1"]').length > 0) {
				//alter offset 
				if($('#header-outer.detached').length == 0 || $that.parents('.page-submenu[data-sticky="true"]').length > 0) 
					$scrollTopDistance = $scrollTopDistance + $('#header-space').height();

				//hide top header
				if($that.parents('.page-submenu[data-sticky="true"]').length > 0) { 
					$('#header-outer.detached').addClass('invisible');
					$('.page-submenu').addClass('header-not-visible').css('transform','translateY(0px)');
				}
			} 

			var $pageSubMenu = ($that.parents('.page-submenu[data-sticky="true"]').length > 0) ? $that.parents('.page-submenu').height() : 0;
			$('body,html').stop().animate({
				scrollTop: $scrollTopDistance - $pageSubMenu
			},800,'easeInOutCubic');

		},$timeoutVar);
		

		e.preventDefault();

	}

	if($hash == '#top') {
		//side widget area click
		if($(this).parents('#slide-out-widget-area').length > 0){
			$('#slide-out-widget-area .slide_out_area_close').trigger('click');
		}
	}


});


if($('.nectar-box-roll').length == 0) $(window).load(pageLoadHash);

}










	//portfolio colors
	if($('.portfolio-items .col .style-3-alt').length > 0 || $('.portfolio-items .col .style-3').length > 0 || $('.portfolio-items .col .style-2').length > 0 || $('.portfolio-items .col .style-5').length > 0 ) {
		var portfolioColorCss = '';
		$('.portfolio-items .col').each(function(){
			$titleColor = $(this).attr('data-title-color');
			$subTitleColor = $(this).attr('data-subtitle-color');

			 if($titleColor.length > 0 ) portfolioColorCss += '.col[data-title-color="'+$titleColor+'"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="'+$titleColor+'"] .work-meta h4 { color: '+$titleColor+'; } ';
			 if($subTitleColor.length > 0 ) portfolioColorCss += '.col[data-subtitle-color="'+$subTitleColor+'"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="'+$titleColor+'"] .work-meta p { color: '+$subTitleColor+'; } ';
		});


		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');

			style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = portfolioColorCss;
		} else {
		  style.appendChild(document.createTextNode(portfolioColorCss));
		}

		head.appendChild(style);
	}

	// masonryPortfolio

	var $portfolio_containers = [];

	$('.portfolio-items:not(.carousel)').each(function(i){
		$portfolio_containers[i] = $(this);
	});

	function masonryPortfolioInit() {

		$portfolio_containers = [];
		$('.portfolio-items:not(.carousel)').each(function(i){
			$portfolio_containers[i] = $(this);
		});

		//// cache window
		var $window = jQuery(window);	
		
			
			$.each($portfolio_containers,function(i){


				//// start up isotope with default settings
				$portfolio_containers[i].imagesLoaded(function(){
					
					//verify smooth scorlling
					if( $smoothCache == true && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){ niceScrollInit(); $(window).trigger('resize') } 
					
					//transformns enabled logic
					var $isoUseTransforms = true;
					
					//Panr 
					if(!$('body').hasClass('mobile') && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
						
						$(".portfolio-items:not(.carousel) .work-item.style-3 img").panr({ scaleDuration: .28 }); 
						$(".portfolio-items:not(.carousel) .work-item.style-3-alt img").panr({ scaleDuration: .28, sensitivity: 20, scaleTo: 1.12, panDuration: 1 }); 

						$isoUseTransforms = true;
						
					}

					piVertCenter();

					//initial call to setup isotope
					var $layoutMode = ( $portfolio_containers[i].hasClass('masonry-items')) ? 'packery' : 'fitRows';
					var $startingFilter = ($portfolio_containers[i].attr('data-starting-filter') != '' && $portfolio_containers[i].attr('data-starting-filter') != 'default') ? '.' + $portfolio_containers[i].attr('data-starting-filter') : '*';

					reLayout();
					
					$portfolio_containers[i].isotope({
					  itemSelector : '.element',
					  filter: $startingFilter,
					  layoutMode: $layoutMode,
					  transitionDuration: '0.6s',
					  packery: {
						 gutter: 0
					  }
					}).isotope( 'layout' );
					
					
					if($startingFilter != '*'){
						$('.portfolio-filters ul a[data-filter="'+$startingFilter+'"], .portfolio-filters-inline ul a[data-filter="'+$startingFilter+'"]').click();
					}

					//call the reLayout to get things rollin'
					masonryZindex();
					setTimeout(function(){masonryZindex(); },800);
					$window.resize( reLayout );
					$window.smartresize( function(){
						setTimeout(masonryZindex,700);
					});
					
					//inside fwc fix
					if($portfolio_containers[i].parents('.full-width-content').length > 0) { setTimeout(function(){ fullWidthContentColumns(); },200);  }

					//fadeout the loading animation
					$('.portfolio-loading').stop(true,true).fadeOut(200);
					
					//fadeIn items one by one

					if($portfolio_containers[i].find('.inner-wrap').attr('data-animation') == 'none') {
						$('.portfolio-items .col .inner-wrap').removeClass('animated');
					} else {

						$('.portfolio-items').each(function(){


							var $that = $(this);
							var waypoint = new Waypoint({
				 			element: $that,
				 			 handler: function(direction) {
								
								$that.find('.col').each(function(i){
									$(this).delay(130*i).queue(function(next){
									    $(this).addClass("animated-in");
									    next();
									});
								});
								
								waypoint.destroy();
							},
							offset: '90%'

							}); 

						}); //each
					}

			
				});
				


			});//each
			
		

	}

	masonryPortfolioInit();
	

	var mediaQuerySize;
	function reLayout() {

		clearTimeout(clearIsoAnimation);
	    $('.portfolio-items .col').addClass('no-transition');
	    clearIsoAnimation = setTimeout(function(){  $('.portfolio-items .col').removeClass('no-transition'); },700); 

		var windowSize = $window.width();
		var masonryObj;
		var masonryObjHolder = [];

		//remove double quotes for FF
		//if (navigator.userAgent.match('MSIE 8') == null) {
		//	mediaQuerySize = mediaQuerySize.replace(/"/g, '');
		//}
		
		//user defined cols
		var userDefinedColWidth;

		$.each($portfolio_containers,function(i){

			if( $portfolio_containers[i].attr('data-user-defined-cols') == 'span4') {
				userDefinedColWidth = 3
			} 
			
			else if( $portfolio_containers[i].attr('data-user-defined-cols') == 'span3') {
				userDefinedColWidth = 4
			} 
			
			var isFullWidth = $portfolio_containers[i].attr('data-col-num') == 'elastic';
			
			
			//chrome 33 approved method for getting column sizing
			if(window.innerWidth > 1600){
				
				if($portfolio_containers[i].hasClass('constrain-max-cols')) {
					mediaQuerySize = 'four';
				} else {
					mediaQuerySize = 'five';
				}
				
			} else if(window.innerWidth <= 1600 && window.innerWidth > 1300){
				mediaQuerySize = 'four';
			} else if(window.innerWidth <= 1300 && window.innerWidth > 990){
				
				if($portfolio_containers[i].hasClass('constrain-max-cols')) {
					mediaQuerySize = 'four';
				} else {
					mediaQuerySize = 'three';
				}
				
			} else if(window.innerWidth <= 990 && window.innerWidth > 470){
				mediaQuerySize = 'two';
			} else if(window.innerWidth <= 470){
				mediaQuerySize = 'one';
			}
			
			//boxed
			if($('#boxed').length > 0) {
				if(window.innerWidth > 1300){
					mediaQuerySize = 'four';
				} else if(window.innerWidth < 1300 && window.innerWidth > 990){
					
					if($portfolio_containers[i].hasClass('constrain-max-cols')) {
						mediaQuerySize = 'four';
					} else {
						mediaQuerySize = 'three';
					}

				} else if(window.innerWidth < 990){
					mediaQuerySize = 'one';
				}
				
			}
			
			//change masonry columns depending on screen size
			switch (mediaQuerySize) {
				case 'five':
					(isFullWidth) ? colWidth = 5 : colWidth = userDefinedColWidth;
					masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / parseInt(colWidth)) };
				break;
				
				case 'four':
					(isFullWidth) ? colWidth = 4 : colWidth = userDefinedColWidth;

					masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / parseInt(colWidth)) };
				break;
				
				case 'three':
					(isFullWidth) ? colWidth = 3 : colWidth = userDefinedColWidth;
					
					masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / parseInt(colWidth)) };
				break;
				
				case 'two':
					masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / 2) };
				break;
				
				case 'one':
					masonryObj = { columnWidth: Math.floor($portfolio_containers[i].width() / 1) };
				break;
			}


			//set widths
			portfolioItemWidths();


			//sizing for large items
			if( $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="regular"]:first:visible').length > 0) {

			//reset height for calcs
		    $portfolio_containers[i].find('.col.elastic-portfolio-item.regular img').css('height','auto');

			var tallColHeight = $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="regular"]:first:visible img').height();
			var multipler = (window.innerWidth > 470) ? 2 : 1 ;
			$portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"] img, .col.elastic-portfolio-item.wide img, .col.elastic-portfolio-item.regular img').removeClass('auto-height');
			 $portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"] img:not(.custom-thumbnail)').css('height',(tallColHeight*multipler));
			 $portfolio_containers[i].find('.col.elastic-portfolio-item.wide img:not(.custom-thumbnail), .col.elastic-portfolio-item.regular img:not(.custom-thumbnail)').css('height',tallColHeight);
			 
			 $portfolio_containers[i].find ('.col.elastic-portfolio-item[class*="tall"] .parallaxImg').css('height',(tallColHeight*multipler) + parseInt($portfolio_containers[i].find('.col.elastic-portfolio-item').css('padding-bottom'))*2 );
			 $portfolio_containers[i].find('.col.elastic-portfolio-item.regular .parallaxImg, .col.elastic-portfolio-item.wide .parallaxImg').css('height',tallColHeight);
			} else {
				$portfolio_containers[i].find('.col.elastic-portfolio-item[class*="tall"] img, .col.elastic-portfolio-item.wide img, .col.elastic-portfolio-item.regular img').addClass('auto-height');
			}

			//non masonry

			if($portfolio_containers[i].hasClass('no-masonry') && $portfolio_containers[i].find('.col:first:visible').length > 0 && $portfolio_containers[i].parents('.wpb_gallery').length == 0){
			  
			   //reset height for calcs
		   	   $portfolio_containers[i].find('.col img').css('height','auto');
		   	   var tallColHeight = $portfolio_containers[i].find('.col:first:visible img').height();
		   	   $portfolio_containers[i].find('.col img:not(.custom-thumbnail)').css('height',tallColHeight);
		   	   $portfolio_containers[i].find('.col .parallaxImg').css('height',tallColHeight);
			}


			masonryObjHolder[i] = masonryObj;
			
			if($portfolio_containers[i].isotope()) $portfolio_containers[i].isotope( 'layout' ); 
				
			

		}); //each
	
	}

	function portfolioItemWidths() {
		 $.each($portfolio_containers,function(i,v){
		 	var $colSize = 4;
		 	var $mult = (mediaQuerySize == 'one') ? 1 : 2;
		 	if(mediaQuerySize == 'five') $colSize = 5;
		 	if(mediaQuerySize == 'four') $colSize = 4;
		 	if(mediaQuerySize == 'three') $colSize = 3;
		 	if(mediaQuerySize == 'two') $colSize = 2;
		 	if(mediaQuerySize == 'one') $colSize = 1;
		 	if($(v).is('[data-ps="6"]') && $colSize == 5) $colSize = 4;

		 	if($(v).width() % $colSize == 0) {
			 	$(v).find('.elastic-portfolio-item:not(.wide):not(.wide_tall)').css('width',Math.floor($(v).width()/$colSize) +'px');
			 	$(v).find('.elastic-portfolio-item.wide, .elastic-portfolio-item.wide_tall').css('width',Math.floor($(v).width()/$colSize*$mult) +'px');
			 } else {
			 	//find closest number to give 0
			 	for(var i = 1; i<4; i++) {
			 		if(($(v).width() - i) % $colSize == 0) {
			 			$(v).find('.elastic-portfolio-item:not(.wide):not(.wide_tall)').css('width',($(v).width()- i)/$colSize +'px');
			 			$(v).find('.elastic-portfolio-item.wide, .elastic-portfolio-item.wide_tall').css('width',($(v).width()-i)/$colSize*$mult +'px');
			 		}

			 	}
			 }
		 	
		 });
	}

	//z-index for masonry
	function masonryZindex(){
		
		//escape if no browser support
		if($('body .portfolio-items:not(".carousel") .elastic-portfolio-item').css('left')) {
		
			var $coords = {};
			var $zindexRelation = {};
			
			$('body .portfolio-items:not(".carousel") .elastic-portfolio-item').each(function(){
				//$coords[$(this).index()] = $(this).css('left').substring(0, $(this).css('left').length - 2);
				$(this).css('z-index',Math.abs(Math.floor($(this).offset().left/20)));
			});
			
			/*var $corrdsArr = $.map($coords, function (value) { return value; });

			$corrdsArr = removeDuplicates($corrdsArr);
			$corrdsArr.sort(function(a,b){return a-b});

			for(var i = 0; i < $corrdsArr.length; i++){
				$zindexRelation[$corrdsArr[i]] = i*10; 
			}
	
			$.each($coords,function(k,v){
				
				var $zindex;
				var $coordCache = v;
				$.each($zindexRelation,function(k,v){
					if($coordCache == k) {
						$zindex = v;
					}
				});
	
				$('body .portfolio-items:not(".carousel") .elastic-portfolio-item:eq('+k+')').css('z-index',$zindex);
			});*/
			
		}


	}

	function blogMasonryZindex(){
		
		//escape if no browser support
		if($('body .masonry.meta_overlaid .masonry-blog-item').css('left')) {
		
			var $coords = {};
			var $zindexRelation = {};
			
			$('body .masonry.meta_overlaid .masonry-blog-item').each(function(){
				$coords[$(this).index()] = $(this).css('left').substring(0, $(this).css('left').length - 2);
			});
			
			var $corrdsArr = $.map($coords, function (value) { return value; });
			$corrdsArr = removeDuplicates($corrdsArr);
			$corrdsArr.sort(function(a,b){return a-b});
	
			for(var i = 0; i < $corrdsArr.length; i++){
				$zindexRelation[$corrdsArr[i]] = i*10; 
			}
	
			$.each($coords,function(k,v){
				
				var $zindex;
				var $coordCache = v;
				$.each($zindexRelation,function(k,v){
					if($coordCache == k) {
						$zindex = v;
					}
				});
	
				$('body .masonry.meta_overlaid .masonry-blog-item:eq('+k+')').css('z-index',$zindex);
			});
			
		}
		
	}
	
	function matrixToArray(matrix) {
	    return matrix.substr(7, matrix.length - 8).split(', ');
	}
	
	function removeDuplicates(inputArray) {
        var i;
        var len = inputArray.length;
        var outputArray = [];
        var temp = {};

        for (i = 0; i < len; i++) {
            temp[inputArray[i]] = 0;
        }
        for (i in temp) {
            outputArray.push(i);
        }
        return outputArray;
    }

    //// filter items when filter link is clicked
	var clearIsoAnimation = null;
	var $checkForScrollBar = null;


	//number portfolios so multiple sortable ones can work easily on same page
	$('.portfolio-items:not(".carousel")').each(function(i){
		$(this).attr('instance',i);
		$(this).parent().parent().find('div[class^=portfolio-filters]').attr('instance',i);
	});

    function isoClickFilter(){
		 var $timeout;		 
		 if(window.innerWidth > 690 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){
		 	

		 	/*clearInterval($checkForScrollBar);

		 	if($('html').outerHeight(true) > $(window).height()) {

			 	$checkForScrollBar = null;
			 	$checkForScrollBar = setInterval(function(){ 

			 		if($('body').height() <= $(window).height()) {
			 			fullWidthSections();
			 			$(window).trigger('resize');
			 			clearInterval($checkForScrollBar);
			 		} 
			 	},40);
			} else {

				$checkForScrollBar = null;
			 	$checkForScrollBar = setInterval(function(){ 

			 		if($('html').outerHeight(true) > $(window).height()) {
			 			fullWidthSections();
			 			$(window).trigger('resize');
			 			clearInterval($checkForScrollBar);
			 		} 
			 	},40);
			}*/	 

			 //add css animation only for sorting	 
			/*  clearTimeout(clearIsoAnimation);
			  $('.isotope, .isotope .isotope-item').css('transition-duration','0.7s');
			  clearIsoAnimation = setTimeout(function(){  $('.isotope, .isotope .isotope-item').css('transition-duration','0s'); },700); */
			  
			 clearTimeout($timeout);
			 $timeout = setTimeout(function(){masonryZindex();  },600);

			  
		 }
		  
		  var selector = $(this).attr('data-filter');
		  var $instance = $(this).parents('div[class^=portfolio-filters]').attr('instance');

		  $.each($portfolio_containers,function(i){
		  	if($portfolio_containers[i].attr('instance') == $instance) $portfolio_containers[i].isotope({ filter: selector }).attr('data-current-cat',selector);
		  });


		  //active classes
		  $(this).parent().parent().find('li a').removeClass('active');
		  $(this).addClass('active');
		  
		  //update pp
		  if($('.portfolio-items a[rel^="prettyPhoto"]').length > 0) {
		  	setTimeout(updatePrettyPhotoGallery,170);
		  }

		  else {
		  	setTimeout(updateMagPrettyPhotoGallery,170);
		  }

		  return false;
	}

	////filter event
	$('body').on('click','.portfolio-filters ul li a, .portfolio-filters-inline ul li a', isoClickFilter);


	function updatePrettyPhotoGallery(){
		$('.portfolio-items').each(function(){

			if($(this).find('a[rel^="prettyPhoto"]').length > 0) {

			var $unique_id = Math.floor(Math.random()*10000);
			var $currentCat = $(this).attr('data-current-cat');
			$(this).find('.col'+$currentCat).find('a[rel^="prettyPhoto"]').attr('rel','prettyPhoto['+$unique_id+'_sorted]');
			
			} 
			
		});
	}

	function updateMagPrettyPhotoGallery(){
		$('.portfolio-items').each(function(){
			
			var $currentCat = $(this).attr('data-current-cat');

			$(this).find('.col').each(function(){

				$(this).find('a.gallery').removeClass('gallery').removeClass('magnific');
				
				if($(this).is($currentCat))
					$(this).find('.work-info a').addClass('gallery').addClass('magnific');

			});
		
			
		});
	}



    function masonryBlogInit() {

		var $posts_container = $('.posts-container')
		
		if($posts_container.parent().hasClass('masonry')) { 
			
			$posts_container.find('article').addClass('masonry-blog-item');
			$posts_container.find('article').prepend('<span class="bottom-line"></span>');
			
			//move the meta to the bottom
			$posts_container.find('article').each(function(){
				
				var $metaClone = $(this).find('.post-meta').clone();

				$(this).find('.post-meta').remove();

				if($('#post-area.meta_overlaid').length > 0){
					$(this).find('.post-header h2').after($metaClone);
				} else {
					$(this).find('.content-inner').after($metaClone);
				}
				
			});
		
			
			if($posts_container.parent().hasClass('masonry') && $posts_container.parent().hasClass('full-width-content')){
				$posts_container.parent().wrap('<div class="full-width-content blog-fullwidth-wrap"> </div>').removeClass('full-width-content').css({'margin-left':'0','width':'auto'});
				
				//page header animation fix
				if( $posts_container.parents('.wpb_row').length > 0 ) $posts_container.parents('.wpb_row').css('z-index',100);

				if($('.masonry.meta_overlaid').length == 0) {

					if($('.masonry.classic_enhanced').length > 0) {
						$posts_container.parent().parents('.full-width-content').css({
							'padding' : '0px 0.2% 0px 2.4%'
						});
					} else {
						$posts_container.parent().parents('.full-width-content').css({
							'padding' : '0px 0.2% 0px 3.2%'
						});
					}
					
				} else {
					$posts_container.parent().parents('.full-width-content').addClass('meta-overlaid');
					$('.container-wrap').addClass('meta_overlaid_blog');
				}

				fullWidthSections(); 
			}
			
			var $cols = 3;
			var $element = $posts_container;
			
			if($posts_container.find('img').length == 0) $element = $('<img />');
		
			imagesLoaded($element,function(instance){
				
				if($('body').hasClass('mobile') || $('#post-area').hasClass('span_9')) {
					$cols = 2;
				}

				//set img as BG if masonry classic enhanced
				if($posts_container.parent().hasClass('classic_enhanced')){
					$posts_container.find('.large_featured.has-post-thumbnail .post-featured-img, .wide_tall.has-post-thumbnail .post-featured-img').each(function(){
						var $src = $(this).find('img').attr('src');
						$(this).css('background-image','url('+$src+')');
					});

					$posts_container.find('.large_featured .nectar-flickity, .wide_tall .nectar-flickity').each(function(){

						$(this).find('.cell').each(function(){
							var $src = $(this).find('img').attr('src');
							$(this).css('background-image','url('+$src+')');
						});
						
					});
				}

				$cols = blogColumnNumbCalcs();
				blogHeightCalcs($posts_container, $cols);

				if($('#post-area.meta_overlaid').length > 0) {
					$posts_container.isotope({
					   itemSelector: 'article',
					   transitionDuration: '0s',
					   layoutMode: 'packery',
					   packery: { 
					   	 gutter: 0
					   	}
					}).isotope( 'layout' );

				   
				} else {
				   if($posts_container.parent().hasClass('classic_enhanced')) {
					   	if($('.span_9.masonry').length == 0) {
					   		$multiplier = (window.innerWidth > 1600) ? .015 : .02;
					   	} else {
					   		$multiplier = .04;
					    } 
				    }
				   else {
				   	$multiplier = ($('.span_9.masonry').length == 0) ? .02: .04;
				   }	
					$posts_container.isotope({
					   itemSelector: 'article',
					   transitionDuration: '0s',
					   layoutMode: 'packery',
					   packery: { 
					   	 gutter: $('#post-area').width()*$multiplier
					   	}
					}).isotope( 'layout' );
				}

				blogLoadIn();
				flickityBlogInit();
				
				$(window).trigger('resize');

				blogMasonryZindex();
				setTimeout(blogMasonryZindex,700);
				$window.smartresize( function(){
					setTimeout(blogMasonryZindex,700);
				});
					
			});
			
			$(window).resize(function(){
				

			   //size all items in grid 
			   //sizing for large items
			    $cols = blogColumnNumbCalcs();
				blogHeightCalcs($posts_container, $cols);

				if($('#post-area.meta_overlaid').length > 0) {
				
				    $posts_container.isotope({
				      layoutMode: 'packery',
				      packery: {
				      	 gutter: 0
				      }
				   });
				} else {
				   
				   if($posts_container.parent().hasClass('classic_enhanced')) {
				   		if($('.span_9.masonry').length == 0) {
					   		$multiplier = (window.innerWidth > 1600) ? .015 : .02;
					   	} else {
					   		$multiplier = .04;
					    } 
				   } else {
				   	$multiplier = ($('.span_9.masonry').length == 0) ? .02: .04;
				   }	
				  
				   $posts_container.isotope({
				   	layoutMode: 'packery',
				      packery: { 
				      	gutter: $('#post-area').width()*$multiplier
				      }
				   });
				}

			});
			
			
	    } else {
	    	blogLoadIn();
	    }

	}
	
	masonryBlogInit();

	function blogLoadIn(){

		$('.posts-container').each(function(){

			if($(this).attr('data-load-animation') == 'none') {
			
				$(this).find('.inner-wrap').removeClass('animated');
			} else {

				var $that = $(this);
				var waypoint = new Waypoint({
	 			element: $that,
	 			 handler: function(direction) {
					
					$that.find('article').each(function(i){
						$(this).delay(130*i).queue(function(next){
						    $(this).addClass("animated-in");
						    next();
						});
					});
					
					waypoint.destroy();
				},
				offset: '90%'

				}); 
				
			}

		}); //each
	}

	function blogHeightCalcs($posts_container, cols) {
		if( $posts_container.parent().hasClass('meta_overlaid') && $posts_container.find('article[class*="regular"]').length > 0) {

			//widths
			$.each($posts_container,function(i,v){
			 	var $colSize = 4;
			 	var $mult = (cols == 1) ? 1 : 2;

			 	$(v).find('article[class*="regular"]').css('width',Math.floor($(v).width()/cols) +'px');
			 	$(v).find('article[class*="tall"]').css('width',Math.floor($(v).width()/cols*$mult) +'px');
			 	
			 });

			   //reset height for calcs
			   $posts_container.find('article[class*="regular"] img').css('height','auto');

			   var tallColHeight = Math.ceil($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote") img').first().height());
			   var multipler = (window.innerWidth > 470) ? 2 : 1 ;
			   $posts_container.find('article[class*="tall"] img, .article.wide img, article.regular img').removeClass('auto-height');
			   $posts_container.find('article[class*="tall"] img').css('height',(tallColHeight*multipler));
			   $posts_container.find('article[class*="regular"] img').css('height',(tallColHeight));
			   //quote/links
			   $posts_container.find('article.regular.format-link,article.regular.format-quote').each(function(){

			   		if(window.innerWidth > 470) {
			   			$(this).css({
			  	 			'height': tallColHeight
			   			});
			   		} else {
			   			$(this).css({
			  	 			'height': 'auto'
			   			});			 		
			   		}
			  	 	
			   	});


		} else {
			$posts_container.find('article[class*="tall"] img, article.regular img').addClass('auto-height');
		}


		if( $posts_container.parent().hasClass('classic_enhanced') && $posts_container.find('article[class*="regular"]').length > 0) {
			if($(window).width() > 690 ) 
				classicEnhancedSizing($posts_container.find('article:not(.large_featured):not(.wide_tall)'));
			else 
				classicEnhancedSizing($posts_container.find('article:not(.wide_tall)'));

			var tallColHeight = ($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().length > 0) ? Math.ceil($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().css('height','auto').height()) : 600;

			if($(window).width() > 690 ) 
				$posts_container.find('article.large_featured, article.regular, article[class*="wide_tall"]').css('height',(tallColHeight));
			else 
				$posts_container.find('article.regular, article[class*="wide_tall"]').css('height',(tallColHeight));

		//for when no regular articles exist	
		} else if( $posts_container.parent().hasClass('classic_enhanced') && $posts_container.find('article[class*="regular"]').length == 0) {
			var tallColHeight = ($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().length > 0) ? Math.ceil($posts_container.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().css('height','auto').height()) : 600;

			if($(window).width() > 690 ) 
				$posts_container.find('article.large_featured, article.regular, article[class*="wide_tall"]').css('height',(tallColHeight));
			else 
				$posts_container.find('article.regular, article[class*="wide_tall"]').css('height',(tallColHeight));
		}
	}

	function classicEnhancedSizing(elements) {

		var tallestCol = 0;
		elements.find('.article-content-wrap').css('height','auto');
		elements.filter('.has-post-thumbnail').each(function(){
			($(this).find('.article-content-wrap').outerHeight(true) > tallestCol) ? tallestCol = $(this).find('.article-content-wrap').outerHeight(true) : tallestCol = tallestCol;
		});	
		
		elements.filter('.has-post-thumbnail').find('.article-content-wrap').css('height',(tallestCol));

	}


	var blogMediaQuerySize;
	function blogColumnNumbCalcs(){
		   if($('body').hasClass('mobile') && window.innerWidth < 990 || $('#post-area').hasClass('span_9') && $('#post-area.meta_overlaid').length == 0) {
			   $cols = 2;
		   } else if( $('#post-area').hasClass('full-width-content') || $('#post-area').parent().hasClass('full-width-content') && $('#boxed').length == 0 || $('#post-area.meta_overlaid').length > 0 ){
		   		
				var windowSize = $(window).width();

				
				if(window.innerWidth > 1600){
					blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'four' :'five';
				} else if(window.innerWidth <= 1600 && window.innerWidth >= 1300){
					blogMediaQuerySize = 'four';
				} else if(window.innerWidth < 1300 && window.innerWidth >= 990){
					blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'four' :'three';
				} else if(window.innerWidth < 990 && window.innerWidth >= 470){
					blogMediaQuerySize = 'two';
				} else if(window.innerWidth < 470){
					blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'two' :'one';
				}
				
				
				//boxed
				if($('#boxed').length > 0) {
					if(window.innerWidth > 1300){
						blogMediaQuerySize = 'four';
					} else if(window.innerWidth < 1300 && window.innerWidth > 990){
						blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'four' :'three';
					} else if(window.innerWidth < 990){
						blogMediaQuerySize = ($('#post-area.meta_overlaid').length > 0) ? 'two' :'one';
					}
					
				}
				
				
				switch (blogMediaQuerySize) {
					case 'five':
						$cols = 5;
					break;
					
					case 'four':
						$cols = 4;
					break;
					
					case 'three':
						$cols = 3;
					break;
					
					case 'two':
						$cols = 2;
					break;
					
					case 'one':
						$cols = 1;
					break;
				}
		   		
			
		   } else {

		   	   $cols = 3;
		   }

		   return $cols;

	}






var shrinkNum = 6;
		
if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');

headerPadding2 = headerPadding - headerPadding/1.8;

$('body').on('click','.section-down-arrow',function(){
	
	if($(this).parents('.nectar-box-roll').length > 0) return false;

	var $currentSection = $(this).parents('#page-header-bg');
	var $topDistance = $currentSection.attr('data-height');
	var $offset = ($currentSection.parents('.first-section').length == 0 || $('body[data-transparent-header="false"]').length > 0) ? $currentSection.offset().top : 0;

	if($('body[data-permanent-transparent="1"]').length == 0) {
		//regular
		if(!$('body').hasClass('mobile')){
			if($('body[data-hhun="1"]').length > 0) {
				$('body,html').stop().animate({
					scrollTop: parseInt($topDistance) + $offset + 2
				},1000,'easeInOutCubic')
			} else {
				$resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(shrinkNum) + headerPadding2*2;
				$('body,html').stop().animate({
					scrollTop: parseInt($topDistance - $('#header-space').height()) +$resize + 3 + $offset
				},1000,'easeInOutCubic')
			}
			
		} else {
			$scrollPos = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? parseInt($topDistance) - $('#header-space').height() + parseInt($currentSection.offset().top) + 2 : parseInt($topDistance) + parseInt($currentSection.offset().top) + 2;
			$('body,html').stop().animate({
				scrollTop: $scrollPos
			},1000,'easeInOutCubic')
		}
	} else {
		//permanent transparent
		$('body,html').stop().animate({
			scrollTop: parseInt($topDistance) + parseInt($currentSection.offset().top) + 2
		},1000,'easeInOutCubic')
	}
	return false;
});







/*-------------------------------------------------------------------------*/
/*	7.	Cross Browser Fixes
/*-------------------------------------------------------------------------*/	
	 
	 function crossBrowserFixes() {

		//Fix current class in menu 
		if ($("body").hasClass("single-portfolio") || $('body').hasClass("error404") || $('body').hasClass("search-results")) {   
			$("li").removeClass("current_page_parent").removeClass("current-menu-ancestor").removeClass('current_page_ancestor');   
		}
		

		//fix for IE8 nth-child
		$('.recent_projects_widget div a:nth-child(3n+3), #sidebar #flickr div:nth-child(3n+3) a, #footer-outer #flickr div:nth-child(3n+3) a').css('margin-right','0px');
		
		//remove br's from code tag
		$('code').find('br').remove();	
		
		//if a clear is the last div, remove the padding
		if($('.container.main-content > .row > div:last-child').hasClass('clear')) {
			$('.container.main-content > .row > div:last-child').css('padding-bottom','0');
		}
		
		//homepage recent blog for IE8
		$('.container-wrap .blog-recent > div:last-child').addClass('col_last');
		
		//blog ascend bottom padding
		if($('.single .blog_next_prev_buttons').length > 0) $('.container-wrap').css('padding-bottom',0);

		//contact form
		$('.wpcf7-form p:has(input[type=submit])').css('padding-bottom','0px');

		$('.full-width-content .wpcf7-submit').on('click',function(){ setTimeout(function(){ fullWidthContentColumns() },1000); setTimeout(function(){ fullWidthContentColumns() },2000); });
		
		//no caption home slider fix
		$('#featured article').each(function(){
			if($(this).find('h2').attr('data-has-caption') == '0') {
				$(this).parents('.slide').addClass('no-caption');
			}
		});
		
		//gravity form inside fw content row
		$('.gform_body').click(function(){
		   setTimeout(function(){ fullWidthContentColumns(); },200);
		 });

		//chat post format nth child color
		$('article.post.format-chat .content-inner dt:odd').css('color','#333');
		
		//remove margin on last cols inside of full width sections 
		$('.full-width-section').each(function(){
			$(this).find('> .span_12 > div.col_last').last().css('margin-bottom','0');
		});
		
		//remove p tags from extra content editor when warpping only an img 
		$('#portfolio-extra p').each(function(){
			if($(this).find('*').length == 1 && $(this).find('img').length == 1) {
				$(this).find('img').unwrap();
			}
		});
	

		//vc text_separator color
		$('.vc_text_separator').each(function(){
			if( $(this).parents('.full-width-section').length > 0 ) $(this).find('div').css('background-color',$(this).parents('.full-width-section').find('.row-bg').css('background-color'));
		});
		
		//carousel head button alignment  
		$('.carousel-heading').each(function(){
			if($(this).find('h2').length > 0) $(this).find('.carousel-prev, .carousel-next').css('top','7px');
		});
		
		//remove carousel heading if not being used
		$('.carousel-wrap').each(function(){
			if($(this).find('.carousel-heading .container:empty').length > 0) $(this).find('.carousel-heading').remove();
		});
		
		//woocommerce product thuimbnails
		$('.woocommerce div.product div.images div.thumbnails a:nth-child(4n+4)').css('margin-right','0px');
		
		//remove extra galleries when using the nectar gallery slider on projects and posts
		$('article.post .gallery-slider .gallery,  article.post .gallery-slider .jetpack-slideshow, .single-portfolio .gallery-slider .gallery, .single-portfolio .gallery-slider .jetpack-slideshow').remove();
		
		
		$('.woocommerce .span_9 .products.related .products li:nth-child(4), .woocommerce .span_9 .products.upsells .products li:nth-child(4)').remove();
		$('.woocommerce .span_9 .products.related .products li:nth-child(3), .woocommerce .span_9 .products.upsells .products li:nth-child(3)').css('margin-right','0');	
		
		$('.cart-menu a, .widget_shopping_cart a').addClass('no-ajaxy');

		//clients no hover if no link
		$('div.clients').each(function(){
			$(this).find('> div').each(function(){
				if($(this).find('a').length == 0) {
					$(this).addClass('no-link');
				}
			});
		});

		//remove ajaxy from single posts when using disqus
		if(nectarLove.disqusComments == 'true') $('#post-area article a, .blog_next_prev_buttons a, #portfolio-nav #prev-link a, #portfolio-nav #next-link a, .portfolio-items .col .work-item .work-info a').addClass('no-ajaxy');

		//blog next color bg only 
		if($('.blog_next_prev_buttons').find('.bg-color-only-indicator').length > 0) $('.blog_next_prev_buttons').addClass('bg-color-only').find('.bg-color-only-indicator').remove();
		
		if($('#single-below-header').hasClass('fullscreen-header') && $('.blog_next_prev_buttons').length == 0 ) $('#author-bio, .comment-wrap').addClass('lighter-grey');

		//shop header parallax margin 
		if($('body.woocommerce').find('#page-header-bg').length > 0){
			$('.container-wrap').css({'margin-top':'0px','padding-top':'30px'});
		}

		//remove arrows on mega menu item
		$('header#top nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator').remove();
		
		//if using wooCommerce sitewide notice
		if($('.demo_store').length > 0) $('#header-outer, #header-space').css('margin-top','32px');
		
		//footer last column class for IE8
		$('#footer-widgets .container .row > div:last-child').addClass('col_last');
		
		//nectar slider external links
		$('.swiper-slide.external-button-1 .buttons > div:nth-child(1) a').attr('target','_blank');
		$('.swiper-slide.external-button-2 .buttons > div:nth-child(2) a').attr('target','_blank');
		
		//portfolio external links
		$(".portfolio-items a[href*='http://']:not([href*='"+window.location.hostname+"']), .recent_projects_widget a[href*='http://']:not([href*='"+window.location.hostname+"'])").attr("target","_blank"); 
		
		//remove excess inner content when empty row
		$('.container-wrap .row > .wpb_row').each(function(){
			if($(this).find('> .span_12 > .wpb_column > .wpb_wrapper').length > 0 && $(this).find('> .span_12 > .wpb_column > .wpb_wrapper').find('*').length == 0) $(this).find('> .span_12 ').remove();
		});
		
		//remove boxed style from full width content
		$('.full-width-content .col.boxed').removeClass('boxed');
		
		//remove full width attribute on slider in full width content section
		$('.full-width-content .wpb_column .nectar-slider-wrap[data-full-width="true"]').attr('data-full-width','false');	

		if( $('.nectar-slider-wrap.first-section').length == 0 && 
			$('.full-width-section.first-section > .span_12 > .vc_span12 > .wpb_wrapper > .nectar-slider-wrap').length == 0  && 
			$('.parallax_slider_outer.first-section').length == 0 && 
			$('.full-width-content.first-section .wpb_wrapper > .nectar-slider-wrap').length == 0  && 
			!($('.wpb_row.first-section > .nectar-parallax-scene').length == 1 && $('#header-outer[data-transparent-header="true"]').length == 1) ) { 
			$('#header-outer .ns-loading-cover').remove(); 
	    }

	    //portfolio description remove on hover
	    var $tmpTitle = null;
	    $('.portfolio-items > .col a[title]').hover(function(){
	    	$tmpTitle = $(this).attr('title');
	    	$(this).attr('title',' ');
	    },function(){
	    	$(this).attr('title', $tmpTitle);
	    });
	    $('.portfolio-items > .col a[title]').click(function(){
			$(this).attr('title', $tmpTitle);
	    });

	};

	crossBrowserFixes();




	function wooPriceSlider(){


		// woocommerce_price_slider_params is required to continue, ensure the object exists
		if ( typeof woocommerce_price_slider_params === 'undefined' || !$('body').hasClass('woocommerce') ) {
			return false;
		}

		// Get markup ready for slider
		$( 'input#min_price, input#max_price' ).hide();
		$( '.price_slider, .price_label' ).show();

		// Price slider uses jquery ui
		var min_price = $( '.price_slider_amount #min_price' ).data( 'min' ),
			max_price = $( '.price_slider_amount #max_price' ).data( 'max' );

		current_min_price = parseInt( min_price, 10 );
		current_max_price = parseInt( max_price, 10 );

		if ( woocommerce_price_slider_params.min_price ) current_min_price = parseInt( woocommerce_price_slider_params.min_price, 10 );
		if ( woocommerce_price_slider_params.max_price ) current_max_price = parseInt( woocommerce_price_slider_params.max_price, 10 );

		$( 'body' ).bind( 'price_slider_create price_slider_slide', function( event, min, max ) {
			if ( woocommerce_price_slider_params.currency_pos === 'left' ) {

				$( '.price_slider_amount span.from' ).html( woocommerce_price_slider_params.currency_symbol + min );
				$( '.price_slider_amount span.to' ).html( woocommerce_price_slider_params.currency_symbol + max );

			} else if ( woocommerce_price_slider_params.currency_pos === 'left_space' ) {

				$( '.price_slider_amount span.from' ).html( woocommerce_price_slider_params.currency_symbol + " " + min );
				$( '.price_slider_amount span.to' ).html( woocommerce_price_slider_params.currency_symbol + " " + max );

			} else if ( woocommerce_price_slider_params.currency_pos === 'right' ) {

				$( '.price_slider_amount span.from' ).html( min + woocommerce_price_slider_params.currency_symbol );
				$( '.price_slider_amount span.to' ).html( max + woocommerce_price_slider_params.currency_symbol );

			} else if ( woocommerce_price_slider_params.currency_pos === 'right_space' ) {

				$( '.price_slider_amount span.from' ).html( min + " " + woocommerce_price_slider_params.currency_symbol );
				$( '.price_slider_amount span.to' ).html( max + " " + woocommerce_price_slider_params.currency_symbol );

			}

			$( 'body' ).trigger( 'price_slider_updated', min, max );
		});

		$( '.price_slider' ).slider({
			range: true,
			animate: true,
			min: min_price,
			max: max_price,
			values: [ current_min_price, current_max_price ],
			create : function( event, ui ) {

				$( '.price_slider_amount #min_price' ).val( current_min_price );
				$( '.price_slider_amount #max_price' ).val( current_max_price );

				$( 'body' ).trigger( 'price_slider_create', [ current_min_price, current_max_price ] );
			},
			slide: function( event, ui ) {

				$( 'input#min_price' ).val( ui.values[0] );
				$( 'input#max_price' ).val( ui.values[1] );

				$( 'body' ).trigger( 'price_slider_slide', [ ui.values[0], ui.values[1] ] );
			},
			change: function( event, ui ) {

				$( 'body' ).trigger( 'price_slider_change', [ ui.values[0], ui.values[1] ] );

			},
		});

	}
	

//vc col mobile fixes
function vcMobileColumns() {
	$('.wpb_row').each(function(){
		if(typeof $(this).find('.span_12').offset() != 'undefined' ) {
		
			$(this).find('[class*="vc_col-"]').each(function(){

				var $firstChildOffset = $(this).parents('.span_12').offset().left;

				$(this).removeClass('no-left-margin');
				if($(this).offset().left < $firstChildOffset + 27) { 
					$(this).addClass('no-left-margin');
				} else {
					$(this).removeClass('no-left-margin');
				}
			});
		}
	});
}

if($('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0) vcMobileColumns();


/*-------------------------------------------------------------------------*/
/*	8.	Form Styling
/*-------------------------------------------------------------------------*/	

if($('body[data-form-style="minimal"]').length > 0) {

	//turn user set place holders into labels for effect
	function convertPlaceholders() {
		$('form input[placeholder], form textarea[placeholder]').each(function(i){
			if($(this).attr('placeholder').length > 1) {
				var $placeholder = $(this).attr('placeholder');
				var $inputID = ($(this).is('[id]')) ? $(this).attr('id') : 'id-'+i;
				//add placeholder as label if label doesn't already exist
				
				//skip cf7                               //|| $(this).prev('label').length == 1 && $placeholder.length > $(this).prev('label').text().length
				if($(this).parents('.wpcf7-form-control-wrap').length == 0) {
					if($(this).prev('label').length == 0 || $(this).is('textarea')) {
						$('<label for="'+$inputID+'">'+$placeholder+'</label>').insertBefore($(this));
					}
				} else {
					if($(this).parents('.wpcf7-form-control-wrap').find('label').length == 0) {
						$('<label for="'+$inputID+'">'+$placeholder+'</label>').insertBefore($(this).parents('.wpcf7-form-control-wrap '));
					}
				}
				$(this).removeAttr('placeholder');
			}
		});
	}
	convertPlaceholders();
	setTimeout(convertPlaceholders,500);
	
	//woocommerce placeholder fix
	$( '#billing_country, #shipping_country, .country_to_state' ).on('change',function(){
		convertPlaceholders();
		removeExcessLabels();
		var $wooDynamicPlaceholders = setInterval(function(){
			convertPlaceholders();
			convertToMinimalStyle('form label');
			removeExcessLabels();
		},30);
		setTimeout(function(){ clearInterval($wooDynamicPlaceholders); },600);
		
	});

	function convertToMinimalStyle(selector){

		$(selector).each(function(){
			if($(this).parent().find('input:not([type="checkbox"]):not([type="hidden"]):not(#search-outer input):not(.adminbar-input):not([type="radio"]):not([type="submit"]):not([type="button"]):not([type="date"]):not([type="color"]):not([type="range"]):not([role="button"]):not([role="combobox"]):not(.select2-focusser)').length == 1 || $(this).parent().find('textarea').length == 1) {
				
				if($(this).parents('.minimal-form-input').length == 0) {

					//if there's a direct input next to label
				
					if($(this).next('input').length == 1) {
		
						$(this).next('input').andSelf().wrapAll('<div class="minimal-form-input"/>');
					} else {
						//if we need to traverse to parent instead	
						$(this).parent().wrapInner('<div class="minimal-form-input" />');
					}
					$html = $(this).html();
					$(this)[0].innerHTML = '<span class="text"><span class="text-inner">'+$html+'</span></span>';
			
					if($(this).parent().find('textarea').length == 1) $(this).parents('.minimal-form-input').addClass('textarea');
				}
			}

		});

		//for labels that changed that already have minimal form markup - just need to update content
		$(selector).each(function(){
			if($(this).parents('.minimal-form-input').length == 1 && $(this).find('.text').length == 0) {
				
				$html = $(this).html();
				$(this)[0].innerHTML = '<span class="text"><span class="text-inner">'+$html+'</span></span>';
				
			}

		});
	}
	
	convertToMinimalStyle('form label');

	setTimeout(function(){ convertToMinimalStyle('form label'); removeExcessLabels(); checkValueOnLoad(); },501);

	//remove excess labels
	function removeExcessLabels() {
		$('.minimal-form-input').each(function(){
			if($(this).find('label').length > 1) {
				$lngth = 0;
				$(this).find('label').each(function(){
					if($(this).text().length >= $lngth) {
						$lngth = $(this).text().length;
						$(this).parents('.minimal-form-input').find('label').addClass('tbr');
						$(this).removeClass('tbr');
					}
				});
				$(this).find('label.tbr').remove();
			}
		});
	}
	removeExcessLabels();
	

	//add labels to inputs that don't have them
	$('input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not(#search-outer input):not([type="hidden"]):not([type="button"]):not([type="date"]):not([type="color"]):not([type="number"]):not([type="range"]):not([role="button"]):not([role="combobox"]):not(.select2-focusser), textarea').each(function(){
		if($(this).parents('.minimal-form-input').length == 0) {

			$('<label></label>').insertBefore($(this));
			convertToMinimalStyle($(this).prev('label'));
		}
	});


	$('body').on('focus','.minimal-form-input input, .minimal-form-input textarea',function(){
		$(this).parents('.minimal-form-input').addClass('filled').removeClass('no-text');
	});
	$('body').on('blur','.minimal-form-input input, .minimal-form-input textarea',function(){
		if($(this).val().length > 0) $(this).parents('.minimal-form-input').addClass('has-text').removeClass('no-text');
		else $(this).parents('.minimal-form-input').removeClass('has-text').addClass('no-text');
		$(this).parents('.minimal-form-input').removeClass('filled');
	});


	//on load
	function checkValueOnLoad() {
		$('.minimal-form-input input, .minimal-form-input textarea').each(function(){
			if($(this).val().length > 0) $(this).parents('.minimal-form-input').addClass('has-text').removeClass('no-text');
		});
	}
	checkValueOnLoad();

	 // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="textareahiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = 'textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');

      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }

      if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal")
                 .css('white-space', "pre");
      }




      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);


      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      }
      else {
        hiddenDiv.css('width', $(window).width()/2);
      }

      $textarea.css('height', hiddenDiv.height());
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      if ($textarea.val().length) {
        textareaAutoResize($textarea);
      }
    });

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

}


if($('body[data-fancy-form-rcs="1"]').length > 0) {

	 //radio / checkbox markup conversion 

    ////default
    $('input[type="checkbox"]').each(function(){
    	//check if for relationship exists
    	$id = $(this).attr('id');
    	if(typeof $id !== typeof undefined && $id !== false && $('label[for="'+$id+'"]').length > 0) {
    		$('label[for="'+$id+'"]').prepend('<span></span>');
    	} 

    });	

    ////for cf7
    $('.wpcf7-radio .wpcf7-list-item-label').each(function(i){
    	var $data = $(this).html();
    	var $name = $(this).parent().find('input').attr('name') + i;
    	$(this).parent().find('input').attr('id',$name);
    	$(this).replaceWith('<label for="'+$name+'">'+$data+'</label>');
    });

     $('.wpcf7-checkbox .wpcf7-list-item-label').each(function(){
    	var $data = $(this).html();
    	var $name = $(this).parent().find('input').attr('value');
    	$(this).parent().find('input').attr('id',$name);
    	$(this).replaceWith('<label for="'+$name+'"><span></span>'+$data+'</label>');
    });


    //select
    $('select:not(.comment-form-rating #rating)').each(function(){

    	//cf7
    	if($(this).parents('.wpcf7-form-control-wrap').length > 0) {

    		//select 2 already initialized
	    	if($(this).parents('.wpcf7-form-control-wrap').find('.select2-container').length > 0) {
	    		$selector = $($(this).prev('.select2-container'));
	    	} else {
	    		$selector = $(this);
	    	}

	    	//if label is found
	    	if($selector.parents('.wpcf7-form-control-wrap').parent().find('label').length == 1) {
	    		$selector.parents('.wpcf7-form-control-wrap').parent().wrapInner('<div class="fancy-select-wrap" />');
	    	} else {
	    		//default wrap
	    		$selector.wrap('<div class="fancy-select-wrap" />');
	    	}
    	} 
    	//default
    	else {

	    	//select 2 already initialized
	    	if($(this).prev('.select2-container').length > 0) {
	    		$selector = $(this).prev('.select2-container');
	    	} else {
	    		$selector = $(this);
	    	}

	    	//if label is found
	    	if($selector.prev('label').length == 1) {
	    		$selector.prev('label').andSelf().wrapAll('<div class="fancy-select-wrap" />');
	    	} else if($selector.next('label').length == 1) {
	    		$selector.next('label').andSelf().wrapAll('<div class="fancy-select-wrap" />');
	    	} else {
	    		//default wrap
	    		$selector.wrap('<div class="fancy-select-wrap" />');
	    	}
    	}
    });
	
	function select2Init(){
		$('select:not(.state_select):not(.country_select):not(.comment-form-rating #rating)' ).each( function() {
			$( this ).select2({
				minimumResultsForSearch: 7
			});
		});
	}
   
	select2Init();

}
	
	



	if($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="ajax"]').length > 0 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && $(window).width() > 690 ) {

		$('#ajax-content-wrap').ajaxify({
			'selector':'#ajax-content-wrap a:not(.no-ajaxy):not([target="_blank"]):not([href^="#"]):not(.comment-edit-link):not(#cancel-comment-reply-link):not(.comment-reply-link):not(#toggle-nav):not(.cart_list a):not(.logged-in-as a):not(.no-widget-added a):not(.add_to_cart_button):not(.product-wrap a):not(.section-down-arrow):not([data-filter]):not(.product_list_widget a):not(.pp):not([rel^="prettyPhoto"]):not(.pretty_photo), #header-outer li:not(.no-ajaxy) > a:not(.no-ajaxy), #header-outer #logo',
			'verbosity': 0, 
			requestDelay: 400,
			previewoff : true,
			memoryoff: true,
			turbo : false
		});

		$(window).on("pronto.render", initPage)
		.on("pronto.load", destroyPage)
		.on("pronto.request", transitionPage);

		initPage();

	} else if($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="standard"]').length > 0 ) {
		
		//chrome white BG flash fix
		$('html').addClass('page-trans-loaded');

		//fadeout loading animation
		if($('#ajax-loading-screen[data-effect="standard"]').length > 0) {
			if($('.nectar-particles').length == 0) setTimeout(function(){ $('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ $(this).css({'display':'none'}); }); $('#ajax-loading-screen .loading-icon').transition({'opacity':0},800) },100);

			//safari back/prev fix
			if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
				window.onunload = function(){ $('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ $(this).css({'display':'none'}); }); $('#ajax-loading-screen .loading-icon').transition({'opacity':0},600) };
				window.onpageshow = function(event) {
		    		if (event.persisted) { 
		    			$('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ 
		    				$(this).css({'display':'none'}); 
		    			}); 
		    			$('#ajax-loading-screen .loading-icon').transition({'opacity':0},600);
		    		}
		    	}
			} 

	    		
	    	
			
		} else {
			if($('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length == 0 && $('.parallax_slider_outer').length == 0 && $('.first-nectar-slider').length == 0) {
				setTimeout(function(){ 
					$('#ajax-loading-screen').addClass('loaded');
					setTimeout(function(){ $('#ajax-loading-screen').addClass('hidden'); },1000);
				},150);
			}

			//safari back/prev fix
			if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
				window.onunload = function(){ $('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ $(this).css({'display':'none'}); }); $('#ajax-loading-screen .loading-icon').transition({'opacity':0},600) };
				window.onpageshow = function(event) {
		    		if (event.persisted) { 
		    			$('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ 
		    				$(this).css({'display':'none'}); 
		    			}); 
		    			$('#ajax-loading-screen .loading-icon').transition({'opacity':0},600);
		    		}
		    	}
			} 
		}

		//remove excess loading images now
		$('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();


		if($('#ajax-loading-screen[data-disable-fade-on-click="1"]').length == 0) {
			$('a[href]:not(.no-ajaxy):not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not(.comment-edit-link):not(.magnific-popup):not(.magnific):not(.meta-comment-count a):not(.comments-link):not(#cancel-comment-reply-link):not(.comment-reply-link):not(#toggle-nav):not(.logged-in-as a):not(.add_to_cart_button):not(.section-down-arrow):not([data-filter]):not(.pp):not([rel^="prettyPhoto"]):not(.pretty_photo)').click(function(e){
				

				if($(this).parent('.menu-item-has-children').length > 0 && $(this).parents('.off-canvas-menu-container').length > 0) {

				} else {
					if(!$(this).parent().hasClass('no-ajaxy')) {

						var $targetLocation = $(this).attr('href');
						var $timeOutDur = 0;
						if($targetLocation != '') {

							$('#ajax-loading-screen').addClass('set-to-fade');

							transitionPageStandard();

							setTimeout(function(){
								window.location = $targetLocation;
							},$timeOutDur)
							
							return false;
						}
					}
				}

			});
		} // if disable fade out is not on
	}


	function transitionPage(e) {
		

		if($(window).scrollTop() > 0) {

			//stop nicescroll
			if($().niceScroll && $("html").getNiceScroll()){
				var nice = $("html").getNiceScroll();
				nice.stop();
			}
			
			$('body,html').stop(true,true).animate({
				scrollTop:0
			},500,'easeOutQuad',function(){ 
				$('#ajax-loading-screen').css({'opacity':'1', 'display':'none'});
				$('#ajax-loading-screen').stop(true,true).fadeIn(600,function(){
					$('#ajax-loading-screen .loading-icon').animate({'opacity':1},400);
					//close widget area
					setTimeout(function(){  if($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click');  },400);
				});
			});

		} else {
			$('#ajax-loading-screen').css('opacity','1').stop().fadeIn(600,function(){
				$('#ajax-loading-screen .loading-icon').animate({'opacity':1},400);
			});

			//close widget area
			setTimeout(function(){  if($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click');  },400);
		}

		
	}

	function transitionPageStandard(e) {
		
		$('#ajax-loading-screen').css('opacity','1').stop().fadeIn(500);
		//setTimeout(function(){ $('#ajax-loading-screen .loading-icon').animate({'opacity':1},500); },400);

	}

	function destroyPage(e) {
		$(window).off('scroll.appear');
	}

	function initPage(e) {

		if(!$('body').hasClass('ajax-loaded')) return false;


		//init js
		lightBoxInit();
		addOrRemoveSF();
		$(".sf-menu").superfish('destroy');
		$('#header-outer').removeClass('dark-slide');
		initSF();
		SFArrows();
		headerInit();
		var $effectTimeout = ($('#ajax-loading-screen').length > 0) ? 800 : 0;
		pageHeaderTextEffectInit();
		if($('#page-header-bg .nectar-video-wrap video').length == 0) setTimeout(pageHeaderTextEffect,$effectTimeout);
		videoSlidePos();
		controlsInit();
		coloredButtons();
		columnBGColors();
		fwCarouselLinkFix();
		if($('.carousel').length > 0) {
			standardCarouselInit();
			clientsCarouselInit();
			carouselHeightCalcs();
		}
		if($('.products-carousel').length > 0) productCarouselInit();
		flexsliderInit();
		progressBars();
		milestoneInit();
		accordionInit();
		tabbedInit();
		tabbbedDeepLinking();
		accordionDeepLinking();
		ulChecks();
		oneFourthClasses();
		carouselfGrabbingClass();
		clientsFadeIn();
		fullWidthSections();
		fwsClasses();
		fullwidthImgOnlySizingInit();
		fullwidthImgOnlySizing();
		fullWidthRowPaddingAdjustInit();
		fullWidthRowPaddingAdjustCalc();
		boxRollInit();
		setTimeout(function(){ 
		   colAndImgAnimations();
		},100); 
		if($('body[data-animated-anchors="true"]').length > 0) setTimeout(scrollSpyInit,200);
	    nectar_fancy_ul_init();
		socialSharingInit();
		pricingTableHeight();
		createTestimonialControls();
		testimonialSliderHeight(); 
		largeIconHover();
		fullscreenMenuInit();
		boxRollMouseWheelInit();
		midnightInit();
		setTimeout(morphingOutlines,100); 
		responsiveVideoIframesInit();
		responsiveVideoIframes();
		fullWidthContentColumns();
		videoBGInit();
		$window.unbind('scroll.parallaxSections').unbind('resize.parallaxSections');
		parallaxScrollInit();
		masonryBlogInit();
		masonryPortfolioInit();
		portfolioAccentColor();
		portfolioHoverEffects();
		portfolioFiltersInit();
		style6Img();
		isotopeCatSelection();
		$(window).unbind('.infscr');
		infiniteScrollInit();
		toTopBind();
		centerLove();
		postNextButtonEffect();
		if($('.nectar-box-roll').length == 0) headerRowColorInheritInit();
		pageLoadHash();
		slideOutWidgetAreaScrolling();

		//cf7
		if($().wpcf7InitForm) $('div.wpcf7 > form').wpcf7InitForm();

		//woocommerce price slider
		wooPriceSlider();

		//twitter widget 
		if(typeof twttr != 'undefined') { twttr.widgets.load(); }

		//Calendarize.it
		if(typeof init_rhc === 'function') { init_rhc(); }

		//unwrap post and protfolio videos
		$('.video-wrap iframe').unwrap();
		$('#sidebar iframe[src]').unwrap();

		$('video:not(.slider-video)').attr('width','100%');
		$('video:not(.slider-video)').attr('height','100%'); 

		$('.wp-video-shortcode.mejs-container').each(function(){
			$(this).attr('data-aspectRatio', parseInt($(this).css('height')) / parseInt($(this).css('width')));
		});

		//mediaElement
		$('video.wp-media-shortcode-ajax, audio.wp-media-shortcode-ajax').each(function(){ 
			if(!$(this).parent().hasClass('mejs-mediaelement') && $().mediaelementplayer) {
				$(this).mediaelementplayer();  
			}
		});

		$('.mejs-container').css({'height': '100%', 'width': '100%'});
		
		$('audio').attr('width','100%');
		$('audio').attr('height','100%');

		$('audio').css('visibility','visible');

		if($('body').hasClass('mobile')){
			$('video').css('visibility','hidden');
		} else {
			$('video').css('visibility','visible');
		}

		$('.wpb_row:has(".nectar-video-wrap")').each(function(i){
			$(this).css('z-index',100 + i);
		});

		showLateIframes();

		mouseParallaxInit();

		//chrome self hosted slider bg video correct
		 if(navigator.userAgent.indexOf('Chrome') > 0) { 
		 	$('.swiper-wrapper .video-wrap').each(function(i){
			  	var webmSource = jQuery(this).find('video source[type="video/webm"]').attr('src') + "?id="+Math.ceil(Math.random()*10000);
	          	var firstVideo = jQuery(this).find('video').get(0);
	          	firstVideo.src = webmSource;
	          	firstVideo.load();
            });
	    }


		if($('.nectar-video-bg').length > 0) {
			setTimeout(function(){
			    	resizeVideoToCover();
			    	$('.video-color-overlay').each(function(){
			    		$(this).css('background-color',$(this).attr('data-color'));
			    	});
			    	$('.nectar-video-wrap').transition({'opacity':'1'},0);
			    	$('.video-color-overlay').transition({'opacity':'0.7'},0);
			    	
			    },400);
		}

		
		nectarPageHeader();
	

		if( $('#featured').length > 0){
			
			customSliderHeight();
			homeSliderInit2();
			$(window).off('scroll.hsps');
			$(window).on('scroll.hsps',homeSliderParallaxScroll);
			$(window).off('resize.hsps');
			$(window).on('resize.hsps',homeSliderMobile);
			
		}

		//cart dropdown
		$('#header-outer div.cart-outer').hoverIntent(function(){
			$('#header-outer .widget_shopping_cart').stop(true,true).fadeIn(400);
			$('#header-outer .cart_list').stop(true,true).fadeIn(400);
			clearTimeout(timeout);
			$('#header-outer .cart-notification').fadeOut(300);
		});


		//remove excess loading images now
		$('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();

		setTimeout(portfolioSidebarFollow,250);
		setTimeout(portfolioSidebarFollow,500);
		setTimeout(portfolioSidebarFollow,1000);

		crossBrowserFixes();


		$(window).trigger('resize');

		//fix admin bar
		$("#wpadminbar").show();	


		//close widget area
		if($('#header-outer').hasClass('side-widget-open')) $('.slide-out-widget-area-toggle a').trigger('click'); 

		//fade in page
		setTimeout(function(){ $('#ajax-loading-screen').stop(true,true).fadeOut(500, function(){ $('#ajax-loading-screen .loading-icon').css({'opacity':0}); }); closeSearch();  },200);
		setTimeout(function(){ $('#ajax-loading-screen').stop(true,true).fadeOut(500, function(){ $('#ajax-loading-screen .loading-icon').css({'opacity':0}); }); closeSearch(); },900);
	} 







/*
 * jQuery Textarea Characters Counter Plugin v 2.0
 * Examples and documentation at: http://roy-jin.appspot.com/jsp/textareaCounter.jsp
 * Copyright (c) 2010 Roy Jin
 * Version: 2.0 (11-JUN-2010)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.4.2 or later
 */
(function($){
	if(!$.fn.textareaCount) { 
		$.fn.textareaCount = function(options, fn) {
	        var defaults = {
				maxCharacterSize: -1,
				originalStyle: 'originalTextareaInfo',
				warningStyle: 'warningTextareaInfo',
				warningNumber: 20,
				displayFormat: '#input characters | #words words'
			};

			var options = $.extend(defaults, options);

			var container = $(this);

			$("<div class='charleft'>&nbsp;</div>").insertAfter(container);


			//create charleft css
			var charLeftCss = {
				'width' : container.width()
			};

			var charLeftInfo = getNextCharLeftInformation(container);
			charLeftInfo.addClass(options.originalStyle);
			//charLeftInfo.css(charLeftCss);


			var numInput = 0;
			var maxCharacters = options.maxCharacterSize;
			var numLeft = 0;
			var numWords = 0;

			container.bind('keyup', function(event){limitTextAreaByCharacterCount();})
					 .bind('mouseover', function(event){setTimeout(function(){limitTextAreaByCharacterCount();}, 10);})
					 .bind('paste', function(event){setTimeout(function(){limitTextAreaByCharacterCount();}, 10);});

	        limitTextAreaByCharacterCount();

			function limitTextAreaByCharacterCount(){
				charLeftInfo.html(countByCharacters());

				//function call back
				if(typeof fn != 'undefined'){
					fn.call(this, getInfo());
				}
				return true;
			}

			function countByCharacters(){
				var content = container.val();
				var contentLength = content.length;
				//Start Cut
				if(options.maxCharacterSize > 0){
					//If copied content is already more than maxCharacterSize, chop it to maxCharacterSize.
					if(contentLength >= options.maxCharacterSize) {
						content = content.substring(0, options.maxCharacterSize);
					}

					var newlineCount = getNewlineCount(content);

					// newlineCount new line character. For windows, it occupies 2 characters
					var systemmaxCharacterSize = options.maxCharacterSize - newlineCount;
					if (!isWin()){
						 systemmaxCharacterSize = options.maxCharacterSize
					}
					if(contentLength > systemmaxCharacterSize){
						//avoid scroll bar moving
						var originalScrollTopPosition = this.scrollTop;
						container.val(content.substring(0, systemmaxCharacterSize));
						this.scrollTop = originalScrollTopPosition;
					}
					charLeftInfo.removeClass(options.warningStyle);
					if(systemmaxCharacterSize - contentLength <= options.warningNumber){
						charLeftInfo.addClass(options.warningStyle);
					}

					numInput = container.val().length + newlineCount;
					if(!isWin()){
						numInput = container.val().length;
					}

					numWords = countWord(getCleanedWordString(container.val()));

					numLeft = maxCharacters - numInput;
				} else {
					//normal count, no cut
					var newlineCount = getNewlineCount(content);
					numInput = container.val().length + newlineCount;
					if(!isWin()){
						numInput = container.val().length;
					}
					numWords = countWord(getCleanedWordString(container.val()));
				}

				return formatDisplayInfo();
			}

			function formatDisplayInfo(){
				var format = options.displayFormat;
				format = format.replace('#input', numInput);
				format = format.replace('#words', numWords);
				//When maxCharacters <= 0, #max, #left cannot be substituted.
				if(maxCharacters > 0){
					format = format.replace('#max', maxCharacters);
					format = format.replace('#left', numLeft);
				}
				return format;
			}

			function getInfo(){
				var info = {
					input: numInput,
					max: maxCharacters,
					left: numLeft,
					words: numWords
				};
				return info;
			}

			function getNextCharLeftInformation(container){
					return container.next('.charleft');
			}

			function isWin(){
				var strOS = navigator.appVersion;
				if (strOS.toLowerCase().indexOf('win') != -1){
					return true;
				}
				return false;
			}

			function getNewlineCount(content){
				var newlineCount = 0;
				for(var i=0; i<content.length;i++){
					if(content.charAt(i) == '\n'){
						newlineCount++;
					}
				}
				return newlineCount;
			}

			function getCleanedWordString(content){
				var fullStr = content + " ";
				var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
				var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
				var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9]+/gi;
				var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
				var splitString = cleanedStr.split(" ");
				return splitString;
			}

			function countWord(cleanedWordString){
				var word_count = cleanedWordString.length-1;
				return word_count;
			}
		};
	}
})(jQuery);	
	
	
	
	
});



function resizeIframe() {
	var element = document.getElementById("pp_full_res").getElementsByTagName("iframe");
	var height = element[0].contentWindow.document.body.scrollHeight;
    
    //iframe height
    element[0].style.height = height + 'px';
	
	//pp height
	document.getElementsByClassName("pp_content_container")[0].style.height = height+40+ 'px';
	document.getElementsByClassName("pp_content")[0].style.height = height+40+ 'px';
	
}


//don't load if mobile
if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) ){

	
	/*
	panr - v0.0.1 by Robert Bue (@robert_bue)
	*/
	;(function ( $, window, document, undefined ) {
	// Create the defaults once
				
	var pluginName = "panr",
		defaults = {
		sensitivity: 22,
		moveTarget: "parent",
		scale: false,
		scaleOnHover: false,
		scaleTo: 1.1,
		scaleDuration: .28,
		panY: true,
		panX: true,
		panDuration: 0.7,
		resetPanOnMouseLeave: true,
		onEnter: function(){},
		onLeave: function(){}
	};
	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		//console.log(element);
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	Plugin.prototype = {
		init: function () {
		if ( Modernizr.touch ) {
			return;
		}
		// call them like so: this.yourOtherFunction(this.element, this.settings).
		//console.log(this.settings);
		var settings = this.settings,
		target = $(this.element),
		w = target.width(),
		targetWidth = target.width() - settings.sensitivity,
		cx = (w-targetWidth)/targetWidth,
		x,
		y,
		panVars,
		xPanVars,
		yPanVars,
		mouseleaveVars;
		//console.log(cx);
		if ( settings.scale || (!settings.scaleOnHover && settings.scale) ) {
			TweenMax.set(target, { scale: settings.scaleTo });
		}
		// If no target provided we'll use the hovered element
		if ( !settings.moveTarget ) {
			settings.moveTarget = $(this.element);
		}
		if ( settings.moveTarget == "parent" ) {
			settings.moveTarget = $(this.element).parent();
		}
		if ( settings.moveTarget == "parent parent" ) {
			settings.moveTarget = $(this.element).parent().parent();
		}
		if ( settings.moveTarget == "parent parent parent" ) {
			settings.moveTarget = $(this.element).parent().parent().parent();
		}
	
		settings.moveTarget.on('mousemove', function(e){
			x = e.pageX - target.offset().left - target.width()/2; // mouse x coordinate relative to the container
			y = e.pageY - target.offset().top - target.height()/2; // mouse x coordinate relative to the container
			if ( settings.panX ) {
				xPanVars = { x: -cx*x };
			}
			if ( settings.panY ) {
				yPanVars = { y: -cx*y };
			}
			panVars = $.extend({}, xPanVars, yPanVars);
	
			// Pan element
			TweenMax.to(target, settings.panDuration, panVars);
		});
		// On mouseover
		settings.moveTarget.on('mouseenter', function(e){
			// Scale up element
			TweenMax.to(target, settings.scaleDuration, { scale: settings.scaleTo });
			settings.onEnter(target);
		});
		if ( !settings.scale || (!settings.scaleOnHover && !settings.scale) ) {
			mouseleaveVars = { scale: 1.005, x: 0, y: 0 };
		} else {
		
		if ( settings.resetPanOnMouseLeave ) {
			mouseleaveVars = { x: 0, y: 0 };
		}
		}
		settings.moveTarget.on('mouseleave', function(e){
		// Reset element
		TweenMax.to(target, .35, mouseleaveVars );
		settings.onLeave(target);
		});
		}
	};
	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
			$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
		}
	  });
	};
	})( jQuery, window, document ); 

}

// Fix submenu above his parent center
(function($){
	
	var selector = ".sf-menu > li.current-menu-item, .sf-menu > li.current-menu-ancestor, .sf-menu > li.current_page_parent-type-post_type, .sf-menu > li.current_page_parent";
	var liWidth = $(selector).width(); // width of the current item menu

	var position = $(selector).position();
	var liLeft = position.left; // left position of the current item menu

	var newLeft = liLeft + (liWidth/2); // center of the current item menu

	selector = ".sf-menu > li.current-menu-item > .sub-menu, .sf-menu > li.current-menu-ancestor > .sub-menu, .sf-menu > li.current_page_parent-type-post_type > .sub-menu, .sf-menu > li.current_page_parent > .sub-menu"; 
	var ulWidth = $(selector).width() - 26; // width of the current submenu
	newLeft = newLeft - (ulWidth / 2); // new left position of the current submenu
	$(selector).css('left', newLeft);

	$(selector).css('visibility', 'visible');
})(jQuery);

/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)