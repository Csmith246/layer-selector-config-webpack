(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/LercWorker":787})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{787:function(e,t,n){var r,i;r=[n.dj.c(e.i),t,n(7),n(14),n(6),n(265)],void 0===(i=function(e,t,r,i,o,u){function c(){return o.create((function(e){return n.e(125).then(function(){var t=[n(1236)];e.apply(null,t)}.bind(this)).catch(n.oe)}))}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.prototype._decode=function(e){return c().then((function(t){var n=(0,t.decode)(e.buffer,e.options);return{result:n,transferList:[n.pixelData.buffer]}}))},e}(),s=function(e){function t(t){var n=e.call(this)||this;return n.scheduler=t,n._threadInitialized=o.create((function(e){u.open("LercWorker",{strategy:"dedicated",scheduler:t}).then((function(t){void 0===n._thread?(n._thread=t,e()):(t.close(),e())}),(function(){return e()}))})),n}return i(t,e),t.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},Object.defineProperty(t.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0}),t.prototype.decode=function(e,t,n){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e],signal:n}):c().then((function(r){var i=r.decode;return o.throwIfAborted(n),i(e,t)})):o.resolve(null)},t}(a);t.LercWorkerMaster=s;var d=new Map;t.acquireInstance=function(e){var t=d.get(e);return t||(t={instance:new s(e),ref:0},d.set(e,t)),++t.ref,t.instance},t.releaseInstance=function(e){if(null!=e){var t=e.scheduler,n=d.get(t);n&&--n.ref<=0&&(n.instance.destroy(),d.delete(t))}},t.default=function(){return new a}}.apply(null,r))||(e.exports=i)}}]);