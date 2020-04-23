(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/features/Pipeline":792,"esri/tasks/support/QuantizationParameters":853,"esri/core/libs/rbush/rbush":1045,"esri/core/libs/quickselect/quickselect":1067,"esri/views/2d/layers/features/support/Tile":1072,"esri/views/2d/layers/features/support/TileStore":1079,"esri/views/2d/layers/features/controllers":1620,"esri/views/2d/layers/features/processors":1621})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1045:function(t,e,i){var n,r;n=[i(1067)],void 0===(r=function(t){"use strict";function e(t,i){if(!(this instanceof e))return new e(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function i(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function n(t,e){r(t,0,t.children.length,e,t)}function r(t,e,i,n,r){r||(r=d(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var s,a=e;a<i;a++)s=t.children[a],o(r,t.leaf?n(s):s);return r}function o(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function s(t,e){return t.minX-e.minX}function a(t,e){return t.minY-e.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function h(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function c(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function d(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function p(e,i,n,r,o){for(var s,a=[i,n];a.length;)(n=a.pop())-(i=a.pop())<=r||(s=i+Math.ceil((n-i)/r/2)*r,t(e,s,i,n,o),a.push(i,s,s,n))}return e.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],n=this.toBBox;if(!c(t,e))return i;for(var r,o,s,a,l=[];e;){for(r=0,o=e.children.length;r<o;r++)s=e.children[r],c(t,a=e.leaf?n(s):s)&&(e.leaf?i.push(s):h(t,a)?this._all(s,i):l.push(s));e=l.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!c(t,e))return!1;for(var n,r,o,s,a=[];e;){for(n=0,r=e.children.length;n<r;n++)if(o=e.children[n],c(t,s=e.leaf?i(o):o)){if(e.leaf||h(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=d([]),this},remove:function(t,e){if(!t)return this;for(var n,r,o,s,a=this.data,l=this.toBBox(t),u=[],c=[];a||u.length;){if(a||(a=u.pop(),r=u[u.length-1],n=c.pop(),s=!0),a.leaf&&-1!==(o=i(t,a.children,e)))return a.children.splice(o,1),u.push(a),this._condense(u),this;s||a.leaf||!h(a,l)?r?(n++,a=r.children[n],s=!1):a=null:(u.push(a),c.push(n),n=0,r=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:s,compareMinY:a,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,r){var o,s=i-e+1,a=this._maxEntries;if(s<=a)return n(o=d(t.slice(e,i+1)),this.toBBox),o;r||(r=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/Math.pow(a,r-1))),(o=d([])).leaf=!1,o.height=r;var l,u,h,c,f=Math.ceil(s/a),m=f*Math.ceil(Math.sqrt(a));for(p(t,e,i,m,this.compareMinX),l=e;l<=i;l+=m)for(p(t,l,h=Math.min(l+m-1,i),f,this.compareMinY),u=l;u<=h;u+=f)c=Math.min(u+f-1,h),o.children.push(this._build(t,u,c,r-1));return n(o,this.toBBox),o},_chooseSubtree:function(t,e,i,n){for(var r,o,s,a,u,h,c,d,p,f;n.push(e),!e.leaf&&n.length-1!==i;){for(c=d=1/0,r=0,o=e.children.length;r<o;r++)u=l(s=e.children[r]),p=t,f=s,(h=(Math.max(f.maxX,p.maxX)-Math.min(f.minX,p.minX))*(Math.max(f.maxY,p.maxY)-Math.min(f.minY,p.minY))-u)<d?(d=h,c=u<c?u:c,a=s):h===d&&u<c&&(c=u,a=s);e=a||e.children[0]}return e},_insert:function(t,e,i){var n=this.toBBox,r=i?t:n(t),s=[],a=this._chooseSubtree(r,this.data,e,s);for(a.children.push(t),o(a,r);e>=0&&s[e].children.length>this._maxEntries;)this._split(s,e),e--;this._adjustParentBBoxes(r,s,e)},_split:function(t,e){var i=t[e],r=i.children.length,o=this._minEntries;this._chooseSplitAxis(i,o,r);var s=this._chooseSplitIndex(i,o,r),a=d(i.children.splice(s,i.children.length-s));a.height=i.height,a.leaf=i.leaf,n(i,this.toBBox),n(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)},_splitRoot:function(t,e){this.data=d([t,e]),this.data.height=t.height+1,this.data.leaf=!1,n(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var n,o,s,a,u,h,c,d,p,f,m,v,y,x;for(h=c=1/0,n=e;n<=i-e;n++)p=o=r(t,0,n,this.toBBox),f=s=r(t,n,i,this.toBBox),void 0,void 0,void 0,void 0,m=Math.max(p.minX,f.minX),v=Math.max(p.minY,f.minY),y=Math.min(p.maxX,f.maxX),x=Math.min(p.maxY,f.maxY),a=Math.max(0,y-m)*Math.max(0,x-v),u=l(o)+l(s),a<h?(h=a,d=n,c=u<c?u:c):a===h&&u<c&&(c=u,d=n);return d},_chooseSplitAxis:function(t,e,i){var n=t.leaf?this.compareMinX:s,r=t.leaf?this.compareMinY:a;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,r)&&t.children.sort(n)},_allDistMargin:function(t,e,i,n){t.children.sort(n);var s,a,l=this.toBBox,h=r(t,0,e,l),c=r(t,i-e,i,l),d=u(h)+u(c);for(s=e;s<i-e;s++)a=t.children[s],o(h,t.leaf?l(a):a),d+=u(h);for(s=i-e-1;s>=e;s--)a=t.children[s],o(c,t.leaf?l(a):a),d+=u(c);return d},_adjustParentBBoxes:function(t,e,i){for(var n=i;n>=0;n--)o(e[n],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)0===t[i].children.length?i>0?(e=t[i-1].children).splice(e.indexOf(t[i]),1):this.clear():n(t[i],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},e}.apply(null,n))||(t.exports=r)},1067:function(t,e,i){var n;void 0===(n=function(){"use strict";function t(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function e(t,e){return t<e?-1:t>e?1:0}return function(i,n,r,o,s){!function e(i,n,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,l=n-r+1,u=Math.log(a),h=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*h*(a-h)/a)*(l-a/2<0?-1:1);e(i,n,Math.max(r,Math.floor(n-l*h/a+c)),Math.min(o,Math.floor(n+(a-l)*h/a+c)),s)}var d=i[n],p=r,f=o;for(t(i,r,n),s(i[o],d)>0&&t(i,r,o);p<f;){for(t(i,p,f),p++,f--;s(i[p],d)<0;)p++;for(;s(i[f],d)>0;)f--}0===s(i[r],d)?t(i,r,f):t(i,++f,o),f<=n&&(r=f+1),n<=f&&(o=f-1)}}(i,n,r||0,o||i.length-1,s||e)}}.apply(null,[]))||(t.exports=n)},1072:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(82),i(30),i(236),i(853),i(77)],void 0===(r=function(t,e,i,n,r,o,s){function a(t,e){var i=t.bounds,n=e.bounds;return t.key.id!==e.key.id&&t.key.world===e.key.world&&i[0]<=n[0]&&i[1]<=n[1]&&i[2]>=n[2]&&i[3]>=n[3]}Object.defineProperty(e,"__esModule",{value:!0}),e.isParentOf=a,e.isChildOf=function(t,e){return a(e,t)};var l=function(){function t(t,e){this.bounds=r.create(),this.key=new s(0,0,0,0),this.objectIds=new Set,this.key.set(e);var i=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=i.resolution,this.scale=i.scale,this.level=i.level,this.needsClear=!0}return Object.defineProperty(t.prototype,"id",{get:function(){return this.key.id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"extent",{get:function(){return n.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transform",{get:function(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t(this.tileInfoView,this.id)},t.prototype.createChildTiles=function(){for(var e=this.key.getChildKeys(),n=i.acquire(),r=0;r<e.length;r++)n[r]=new t(this.tileInfoView,e[r]);return n},t.prototype.getQuantizationParameters=function(){return o.default.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})},t}();e.Tile=l,e.default=l}.apply(null,n))||(t.exports=r)},1079:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(14),i(0),i(43),i(13),i(1045),i(1072),i(162),i(77)],void 0===(r=function(t,e,i,n,r,o,s,a,l,u){Object.defineProperty(e,"__esModule",{value:!0});var h={added:[],removed:[]},c=new Set,d=new u(0,0,0,0),p=function(t){function e(e){var i=t.call(this)||this;return i._tiles=new Map,i._index=s(9,o("csp-restrictions")?function(t){return{minX:t.bounds[0],minY:t.bounds[1],maxX:t.bounds[2],maxY:t.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileScheme=e,i}return i(e,t),e.prototype.destroy=function(){this._tiles.clear()},e.prototype.clear=function(){this._tiles.clear(),this._index.clear()},e.prototype.has=function(t){return this._tiles.has(t)},e.prototype.get=function(t){return this._tiles.get(t)},e.prototype.findByKey=function(t){return this._tiles.get(t.id)},e.prototype.intersections=function(t,e){var i="string"==typeof t?this.get(t):t;if(!i)return[];for(var n=e*i.resolution,r=i.bounds[0]-n,o=i.bounds[1]-n,s=i.bounds[2]+n,a=i.bounds[3]+n,l=[],u=0,h=this._index.search({minX:r,minY:o,maxX:s,maxY:a});u<h.length;u++){var c=h[u],d=c.bounds.slice();d[0]=Math.max(d[0],r),d[1]=Math.max(d[1],o),d[2]=Math.min(d[2],s),d[3]=Math.min(d[3],a),d[2]-d[0]>0&&d[3]-d[1]>0&&l.push({bounds:d,tile:c})}return l},e.prototype.boundsIntersections=function(t){return this._index.search({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]})},e.prototype.setViewState=function(t){var e=this.tileScheme.getTileCoverage(t,0);if(e){var i=e.spans,n=e.lodInfo,r=n.level;if(i.length>0)for(var o=0,s=i;o<s.length;o++)for(var u=s[o],p=u.row,f=u.colFrom,m=u.colTo,v=f;v<=m;v++){var y=d.set(r,p,n.normalizeCol(v),n.getWorldForColumn(v)).id;if(c.add(y),!this.has(y)){var x=new a.default(this.tileScheme,y);this._tiles.set(y,x),this._index.insert(x),this.tiles.push(x),h.added.push(x)}}for(var g=this.tiles.length-1;g>=0;g--)x=this.tiles[g],c.has(x.id)||(this._tiles.delete(x.id),this.tiles.splice(g,1),this._index.remove(x),h.removed.push(x));(h.added.length||h.removed.length)&&this.emit("update",h),l.pool.release(e),c.clear(),h.added.length=0,h.removed.length=0}},e}(r);e.default=p}.apply(null,n))||(t.exports=r)},1620:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(8),i(10),i(11),i(9),i(6)],void 0===(r=function(t,e,n,r,o,s,a){Object.defineProperty(e,"__esModule",{value:!0}),e.loadControllerModule=function(t){switch(t){case"on-demand":return a.create((function(t){return Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(36)]).then(function(){var e=[i(1960)];t.apply(null,e)}.bind(this)).catch(i.oe)}));case"stream":return a.create((function(t){return Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(35)]).then(function(){var e=[i(1966)];t.apply(null,e)}.bind(this)).catch(i.oe)}));default:return a.reject(new s("mapview-controller:bad-type","Unable to create controller for unknown type: "+t))}}}.apply(null,n))||(t.exports=r)},1621:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(8),i(6)],void 0===(r=function(t,e,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.loadProcessorModule=function(t){return"heatmap"===t?r.create((function(t){return i.e(110).then(function(){var e=[i(1971)];t.apply(null,e)}.bind(this)).catch(i.oe)})):r.create((function(t){return Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(54)]).then(function(){var e=[i(1972)];t.apply(null,e)}.bind(this)).catch(i.oe)}))}}.apply(null,n))||(t.exports=r)},792:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(1),i(0),i(11),i(10),i(8),i(7),i(9),i(13),i(5),i(6),i(2),i(247),i(294),i(1620),i(1621),i(1079),i(269)],void 0===(r=function(t,e,i,n,r,o,s,a,l,u,h,c,d,p,f,m,v,y,x){Object.defineProperty(e,"__esModule",{value:!0});var g=h.getLogger("esri.views.2d.layers.features.Pipeline"),w=new Set;e.getInstances=function(){return w};var b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.controller=null,e.processor=null,e.remoteClient=null,e.tileStore=null,e.service=null,e.viewState=null,e}return i(e,t),e.prototype.initialize=function(){var t=this;this.watch("updating",(function(e){t.remoteClient.invoke("setUpdating",e)})),u("esri-performance-tests")&&!u("esri-workers")&&w.add(this)},e.prototype.destroy=function(){u("esri-performance-tests")&&!u("esri-workers")&&w.delete(this),this.controller&&this.controller.destroy(),this.processor&&this.processor.destroy()},Object.defineProperty(e.prototype,"updating",{get:function(){var t=this.controller,e=this.processor;return!t||!e||t.updating||e.updating||!1},enumerable:!0,configurable:!0}),e.prototype.startup=function(t){var e=t.service,i=t.config,n=t.tileInfo,s=t.options;return r(this,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return this.service=e,this.tileStore||(t=new x(p.fromJSON(n)),this.tileStore=new y.default(t)),[4,this._configure(i,s)];case 1:return r.sent(),this.viewState&&(this.tileStore.clear(),this.tileStore.setViewState(this.viewState)),[2]}}))}))},e.prototype.update=function(t){var e=t.config,i=t.options;return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return this.processor&&this.controller?i.layerFilterChanged||i.invalidateFeatureData||i.invalidateMesh?[4,this.controller.update(e,i.layerFilterChanged)]:[3,2]:(g.error(new l("mapview-pipeline","Tried to update an unconfigured pipeline.")),[2]);case 1:t.sent(),t.label=2;case 2:return i.invalidateMesh?[4,this.processor.update(e)]:[3,4];case 3:t.sent(),this.controller.invalidate(),t.label=4;case 4:return[4,this.remoteClient.invoke("setUpdating",this.updating)];case 5:return t.sent(),[2]}}))}))},e.prototype.setViewState=function(t){var e=f.fromJSON(t);this._set("viewState",e),this.tileStore&&this.tileStore.setViewState(e),this.controller&&this.controller.setViewState(e)},e.prototype._configure=function(t,e){return r(this,void 0,void 0,(function(){return o(this,(function(i){switch(i.label){case 0:return[4,c.all([this._handleControllerConfig(t),this._handleProcessorConfig(t)])];case 1:return i.sent(),this.controller.processor=this.processor,this.viewState&&this.controller.setViewState(this.viewState),[4,this.update({config:t,options:e})];case 2:return i.sent(),[2]}}))}))},e.prototype._handleControllerConfig=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(i){switch(i.label){case 0:return[4,this._createController(this.service,t)];case 1:return[4,(e=i.sent()).startup()];case 2:return i.sent(),[2,e]}}))}))},e.prototype._handleProcessorConfig=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,this._createProcessor(this.service,t)]}))}))},e.prototype._createController=function(t,e){return r(this,void 0,void 0,(function(){var i,n,r,s,a;return o(this,(function(o){switch(o.label){case 0:return this.controller&&this.controller.destroy(),[4,m.loadControllerModule(t.type)];case 1:return i=o.sent().default,r=(n=this).tileStore,s=n.remoteClient,a=new i({service:t,config:e,tileStore:r,remoteClient:s}),this.controller=a,[2,a]}}))}))},e.prototype._createProcessor=function(t,e){return r(this,void 0,void 0,(function(){var i,n,r,s,a;return o(this,(function(o){switch(o.label){case 0:return[4,v.loadProcessorModule(e.renderer.type)];case 1:return i=o.sent().default,r=(n=this).remoteClient,s=n.tileStore,a=new i({service:t,config:e,tileStore:s,remoteClient:r}),this.processor&&this.processor.destroy(),this.processor=a,[2,a]}}))}))},n([d.property()],e.prototype,"controller",void 0),n([d.property()],e.prototype,"processor",void 0),n([d.property({dependsOn:["controller.updating","processor.updating"]})],e.prototype,"updating",null),n([d.property()],e.prototype,"viewState",void 0),n([d.subclass("esri.views.2d.layers.features.Pipeline")],e)}(d.declared(a));e.default=b}.apply(null,n))||(t.exports=r)},853:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(1),i(0),i(32),i(18),i(4),i(3),i(2)],void 0===(r=function(t,e,i,n,r,o,s,a,l){Object.defineProperty(e,"__esModule",{value:!0});var u=new o.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),h=function(t){function e(e){var i=t.call(this,e)||this;return i.extent=null,i.mode="view",i.originPosition="upper-left",i.tolerance=1,i}var o;return i(e,t),o=e,e.prototype.clone=function(){return new o(a.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},n([l.property({type:r.Extent,json:{write:!0}})],e.prototype,"extent",void 0),n([l.property({type:["view","edit"],json:{write:!0}})],e.prototype,"mode",void 0),n([l.property({type:String,json:{read:u.read,write:u.write}})],e.prototype,"originPosition",void 0),n([l.property({type:Number,json:{write:!0}})],e.prototype,"tolerance",void 0),o=n([l.subclass("esri.tasks.support.QuantizationParameters")],e)}(l.declared(s.JSONSupport));e.default=h}.apply(null,n))||(t.exports=r)}}]);