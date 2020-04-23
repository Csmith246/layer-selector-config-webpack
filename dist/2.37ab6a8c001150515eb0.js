(function(){(this||window).webpackJsonp.registerAbsMids({"esri/renderers/support/jsonUtils":1005,"esri/renderers/SimpleRenderer":1032,"esri/renderers/DictionaryRenderer":1040,"esri/renderers/DotDensityRenderer":1041,"esri/renderers/HeatmapRenderer":1042,"esri/core/MemCache":1063,"esri/core/LRUCache":1092,"esri/renderers/support/AttributeColorInfo":1591,"esri/renderers/support/DotDensityLegendOptions":1592,"esri/renderers/support/HeatmapColorStop":1593})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1005:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(29),r(9),r(34),r(107),r(1031),r(1040),r(1041),r(1042),r(1032),r(1033)],void 0===(o=function(e,t,r,i,o,n,s,l,u,a,p,c){Object.defineProperty(t,"__esModule",{value:!0});var h={simple:p,uniqueValue:c,classBreaks:s,heatmap:a,dotDensity:u,dictionary:l};function d(e,t,r){if(!e)return null;if(e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type)return r&&r.messages&&r.messages.push(new n("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null;var i=function(e){return e&&h[e.type]||null}(e);if(i){var o=new i;return o.read(e,r),o}return r&&r.messages&&e&&r.messages.push(new n("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}function y(e,t,o){return e?function(e,t){if(!t||"web-scene"!==t.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":return!1;default:return r.neverReached(e),!1}}(e,o)?e.write(t,o):(o.messages&&o.messages.push(new i("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:o})),null):null}t.read=d,t.writeTarget=function(e,t,r,i){var n=y(e,{},i);n&&o.setDeepValue(r,n,t)},t.write=y,t.fromJSON=function(e,t){return d(e,0,t)}}.apply(null,i))||(e.exports=o)},1032:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(1),r(0),r(10),r(11),r(142),r(3),r(6),r(2),r(1021),r(1179),r(143)],void 0===(o=function(e,t,r,i,o,n,s,l,u,a,p,c,h){return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.symbol=null,r.type="simple",r}var p;return r(t,e),p=t,t.prototype.writeSymbolWebScene=function(e,t,r,i){h.writeTarget(e,t,r,i)},t.prototype.writeSymbol=function(e,t,r,i){h.writeTarget(e,t,r,i)},t.prototype.readSymbol=function(e,t,r){return h.read(e,t,r)},t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,u.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])];case 1:return r.sent(),[2]}}))}))},t.prototype.collectSymbolFields=function(e,t){return n(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,u.all(this.getSymbols().map((function(r){return r.collectRequiredFields(e,t)})))];case 1:return r.sent(),[2]}}))}))},t.prototype.getSymbol=function(e,t){return this.symbol},t.prototype.getSymbolAsync=function(e,t){return n(this,void 0,void 0,(function(){return o(this,(function(e){return[2,this.symbol]}))}))},t.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.getSymbols().reduce((function(e,t){return e+JSON.stringify(t)}),"")},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new p({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},i([a.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([a.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([a.property({types:s.symbolTypesRenderer})],t.prototype,"symbol",void 0),i([a.writer("web-scene","symbol",{symbol:{types:s.symbolTypesRenderer3D}})],t.prototype,"writeSymbolWebScene",null),i([a.writer("symbol")],t.prototype,"writeSymbol",null),i([a.reader("symbol")],t.prototype,"readSymbol",null),i([a.enumeration.serializable()({simple:"simple"})],t.prototype,"type",void 0),p=i([a.subclass("esri.renderers.SimpleRenderer")],t)}(a.declared(c.VisualVariablesMixin(p)))}.apply(null,i))||(e.exports=o)},1040:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(1),r(0),r(8),r(10),r(11),r(38),r(76),r(9),r(3),r(5),r(1092),r(15),r(6),r(64),r(2),r(140),r(1021),r(1179),r(145),r(176)],void 0===(o=function(e,t,r,i,o,n,s,l,u,a,p,c,h,d,y,f,m,b,v,g,_,S){var w=c.getLogger("esri.renderers.DictionaryRenderer");return function(e){function t(t){var r=e.call(this,t)||this;return r._ongoingRequests=new Map,r._symbolCache=new h(100),r.config=null,r.description=null,r.fieldMap=null,r.label=null,r.scaleExpression=null,r.url=null,r.type="dictionary",r}var c;return r(t,e),c=t,t.prototype.clone=function(){return new c({config:p.clone(this.config),scaleExpression:p.clone(this.scaleExpression),description:p.clone(this.description),fieldMap:p.clone(this.fieldMap),label:p.clone(this.label),url:p.clone(this.url),visualVariables:p.clone(this.visualVariables)})},t.prototype.getSymbolAsync=function(e,t){return s(this,void 0,void 0,(function(){var r,i,o,s,u,a,p,c,h,d,f,m,b,v,g,_,S,w,R,x,j,z,O,M,N,V,P=this;return n(this,(function(n){switch(n.label){case 0:this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t)),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this._dictionaryPromise];case 2:return r=n.sent(),[3,4];case 3:return i=n.sent(),y.isAbortError(i)?(this._dictionaryPromise=null,[2,null]):[3,4];case 4:for(o={},s=0,u=this._symbolAttributes;s<u.length;s++)a=u[s],(p=this.fieldMap[a])&&null!==e.attributes[p]&&void 0!==e.attributes[p]?(c=""+e.attributes[p],o[a]=c):o[a]="";if(!(h=r(o,t))||"string"!=typeof h)return[2,null];for(d=h.split(";"),f=[],m=[],b=0,v=d;b<v.length;b++)if((g=v[b])&&0!==g.length)if(-1===g.indexOf("po:"))if(-1!==g.indexOf("|"))for(j=0,z=g.split("|");j<z.length;j++)O=z[j],this._itemNames.has(O)&&f.push(O);else this._itemNames.has(g)&&f.push(g);else 3===(_=g.substr(3).split("|")).length&&(S=_[0],w=_[1],R=_[2],"DashTemplate"===w?R=R.split(" ").map((function(e){return Number(e)})):"Color"===w?(x=new l(R).toRgba(),R=[x[0],x[1],x[2],255*x[3]]):R=Number(R),m.push({primitiveName:S,propertyName:w,value:R}));return M=f.join(";")+m.map((function(e){return e.primitiveName+";"+e.propertyName+";"+e.value})),(N=this._symbolCache.get(M))?(N.catch((function(){P._symbolCache.pop(M)})),[2,N]):(V=this._cimPartsToCIMSymbol(f,m,t),this._symbolCache.put(M,V,1),[2,V])}}))}))},t.prototype.collectRequiredFields=function(e,t){return s(this,void 0,void 0,(function(){var r,i;return n(this,(function(o){switch(o.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:return o.sent(),this.scaleExpression?[4,b.collectArcadeFieldNames(e,t,this.scaleExpression)]:[3,3];case 2:o.sent(),o.label=3;case 3:for(i in r=t.map((function(e){return e.name})),this.fieldMap)r.indexOf(this.fieldMap[i])<0||e.add(this.fieldMap[i]);return[2]}}))}))},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.fetchResources=function(e){return s(this,void 0,void 0,(function(){var t,r,i,s,l,p,c,h,m,b,v,g,S,R,x,j,z;return n(this,(function(n){switch(n.label){case 0:return this.url?(t=d.isSome(e)?e.abortOptions:null,r=u(this.url+"/resources/styles/dictionary-info.json",o({responseType:"json",query:{f:"json"}},t)),[4,y.all([r,_.loadArcade()])]):(w.error("no valid URL!"),[2,void 0]);case 1:if(!(i=n.sent()[0].data))throw new a("esri.renderers.DictionaryRenderer","Bad dictionary data!");if(s=i.expression,l=i.authoringInfo,this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=f.createSetFromValues(i.itemsNames),this._symbolAttributes=l.symbol,p={},this.config)for(x in c=this.config)p[x]=c[x];for(h=0,m=l.configuration;h<m.length;h++)x=m[h],p.hasOwnProperty(x.name)||(p[x.name]=x.value);if(b=[],d.isSome(e)&&e.fields)for(v=function(t){var r=g.fieldMap[t],i=e.fields.filter((function(e){return e.name===r}));i.length>0&&b.push(o({},i[0],{name:t}))},g=this,S=0,R=this._symbolAttributes;S<R.length;S++)x=R[S],v(x);return[4,_.createDictionaryExpression(s,d.isSome(e)?e.spatialReference:null,b,p)];case 2:return j=n.sent(),z={scale:0},[2,function(e,t){var r=j.repurposeFeature({geometry:null,attributes:e});return z.scale=d.isSome(t)?t.scale:void 0,j.evaluate({$feature:r,$view:z})}]}}))}))},t.prototype.getSymbol=function(){return null},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return this.url+"-"+JSON.stringify(this.fieldMap)},t.prototype._getSymbolPart=function(e,t){return s(this,void 0,void 0,(function(){var r,i,s;return n(this,(function(n){switch(n.label){case 0:if(this._ongoingRequests.has(e))return[2,this._ongoingRequests.get(e).then((function(e){return e.data}))];r=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=u(r,o({responseType:"json",query:{f:"json"}},t)),this._ongoingRequests.set(e,i),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,i];case 2:return[2,n.sent().data];case 3:return s=n.sent(),this._ongoingRequests.delete(e),[2,y.reject(s)];case 4:return[2]}}))}))},t.prototype._combineSymbolParts=function(e,t){var r;if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:t};var i=o({},e[0]);i.symbolLayers=[];for(var n=0,s=e;n<s.length;n++){var l=s[n];(r=i.symbolLayers).unshift.apply(r,l.symbolLayers)}return{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}},t.prototype._cimPartsToCIMSymbol=function(e,t,r){return s(this,void 0,void 0,(function(){var i,o,s;return n(this,(function(n){switch(n.label){case 0:for(i=new Array(e.length),o=0;o<e.length;o++)i[o]=this._getSymbolPart(e[o],r);return[4,y.all(i)];case 1:return s=n.sent(),[2,new S({data:this._combineSymbolParts(s,t)})]}}))}))},i([m.property({type:Object,json:{write:!0}})],t.prototype,"config",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([m.property({type:Object,json:{write:!0}})],t.prototype,"fieldMap",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"scaleExpression",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),c=i([m.subclass("esri.renderers.DictionaryRenderer")],t)}(m.declared(g.VisualVariablesMixin(v)))}.apply(null,i))||(e.exports=o)},1041:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(1),r(0),r(8),r(10),r(11),r(38),r(3),r(2),r(140),r(1021),r(1179),r(1591),r(1592),r(150),r(62)],void 0===(o=function(e,t,r,i,o,n,s,l,u,a,p,c,h,d,y,f,m){return function(e){function t(t){var r=e.call(this,t)||this;return r.attributes=null,r.backgroundColor=new l([0,0,0,0]),r.blendDots=!0,r.dotBlendingEnabled=!0,r.dotShape="square",r.dotSize=1,r.legendOptions=null,r.outline=new m,r.dotValue=null,r.referenceDotValue=null,r.referenceScale=null,r.seed=1,r.type="dot-density",r}var o;return r(t,e),o=t,t.prototype.calculateDotValue=function(e){if(null==this.referenceScale)return this.dotValue;var t=e/this.referenceScale*this.dotValue;return t<1?1:t},t.prototype.getSymbol=function(){return new f({outline:this.outline})},t.prototype.getSymbolAsync=function(){return s(this,void 0,void 0,(function(){return n(this,(function(e){return[2,this.getSymbol()]}))}))},t.prototype.getSymbols=function(){return[this.getSymbol()]},t.prototype.getAttributeHash=function(){return this.attributes&&this.attributes.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.outline)},t.prototype.clone=function(){return new o({attributes:u.clone(this.attributes),backgroundColor:u.clone(this.backgroundColor),dotBlendingEnabled:u.clone(this.dotBlendingEnabled),dotShape:u.clone(this.dotShape),dotSize:u.clone(this.dotSize),dotValue:u.clone(this.dotValue),legendOptions:u.clone(this.legendOptions),outline:u.clone(this.outline),referenceScale:u.clone(this.referenceScale),visualVariables:u.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.getControllerHash=function(){return this.attributes.map((function(e){return e.field||e.valueExpression||""}))+"-"+(this.outline&&JSON.stringify(this.outline.toJSON())||"")},t.prototype.collectRequiredFields=function(e,t){return s(this,void 0,void 0,(function(){var r,i,o;return n(this,(function(n){switch(n.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:n.sent(),r=0,i=this.attributes,n.label=2;case 2:return r<i.length?(o=i[r]).valueExpression?[4,p.collectArcadeFieldNames(e,t,o.valueExpression)]:[3,4]:[3,6];case 3:n.sent(),n.label=4;case 4:o.field&&e.add(o.field),n.label=5;case 5:return r++,[3,2];case 6:return[2]}}))}))},i([a.property({type:[d],json:{write:!0}})],t.prototype,"attributes",void 0),i([a.property({type:l,json:{write:!0}})],t.prototype,"backgroundColor",void 0),i([a.property({type:Boolean}),a.aliasOf("dotBlendingEnabled")],t.prototype,"blendDots",void 0),i([a.property({type:Boolean,json:{write:!0}})],t.prototype,"dotBlendingEnabled",void 0),i([a.property({type:String,json:{write:!0}})],t.prototype,"dotShape",void 0),i([a.property({type:Number,json:{write:!0}})],t.prototype,"dotSize",void 0),i([a.property({type:y,json:{write:!0}})],t.prototype,"legendOptions",void 0),i([a.property({type:m,json:{default:null,write:!0}})],t.prototype,"outline",void 0),i([a.property({type:Number,json:{write:!0}})],t.prototype,"dotValue",void 0),i([a.property({type:Number}),a.aliasOf("dotValue")],t.prototype,"referenceDotValue",void 0),i([a.property({type:Number,json:{write:!0}})],t.prototype,"referenceScale",void 0),i([a.property({type:Number,json:{write:!0}})],t.prototype,"seed",void 0),i([a.enumeration.serializable()({dotDensity:"dot-density"})],t.prototype,"type",void 0),o=i([a.subclass("esri.renderers.DotDensityRenderer")],t)}(a.declared(h.VisualVariablesMixin(c)))}.apply(null,i))||(e.exports=o)},1042:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(1),r(0),r(10),r(11),r(38),r(3),r(2),r(140),r(1021),r(1593)],void 0===(o=function(e,t,r,i,o,n,s,l,u,a,p,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.blurRadius=10,r.colorStops=[new c.HeatmapColorStop({ratio:0,color:new s("rgba(255, 140, 0, 0)")}),new c.HeatmapColorStop({ratio:.75,color:new s("rgba(255, 140, 0, 1)")}),new c.HeatmapColorStop({ratio:.9,color:new s("rgba(255, 0,   0, 1)")})],r.field=null,r.fieldOffset=0,r.maxPixelIntensity=100,r.minPixelIntensity=0,r.type="heatmap",r}var p;return r(t,e),p=t,t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,(function(){var r;return o(this,(function(i){return(r=this.field)&&"string"==typeof r&&a.collectField(e,t,r),[2]}))}))},t.prototype.getAttributeHash=function(){return null},t.prototype.getMeshHash=function(){return JSON.stringify(this.colorStops)+"."+this.blurRadius},t.prototype.clone=function(){return new p({blurRadius:this.blurRadius,colorStops:l.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})},i([u.property({type:Number,json:{write:!0}})],t.prototype,"blurRadius",void 0),i([u.property({type:[c.HeatmapColorStop],json:{write:!0}})],t.prototype,"colorStops",void 0),i([u.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),i([u.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:null==r}}}}})],t.prototype,"fieldOffset",void 0),i([u.property({type:Number,json:{write:!0}})],t.prototype,"maxPixelIntensity",void 0),i([u.property({type:Number,json:{write:!0}})],t.prototype,"minPixelIntensity",void 0),i([u.enumeration.serializable()({heatmap:"heatmap"})],t.prototype,"type",void 0),p=i([u.subclass("esri.renderers.HeatmapRenderer")],t)}(u.declared(p))}.apply(null,i))||(e.exports=o)},1063:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(98),r(157),r(52)],void 0===(o=function(e,t,r,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MIN_PRIORITY=-3;var n=function(){function e(e,t,r){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",r&&(this._storage.registerRemoveFunc(this._namespace,r),this._removeFunc=!0)}return Object.defineProperty(e.prototype,"namespace",{get:function(){return this._namespace.slice(0,-1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hitRate",{get:function(){return this._hit/(this._hit+this._miss)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._storage.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},enumerable:!0,configurable:!0}),e.prototype.resetHitRate=function(){this._hit=this._miss=0},e.prototype.destroy=function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)},e.prototype.put=function(e,t,r,i){void 0===i&&(i=0),this._storage.put(this._namespace+e,t,r,i)},e.prototype.get=function(e){var t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t},e.prototype.pop=function(e){var t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t},e.prototype.updateSize=function(e,t,r){this._storage.updateSize(this._namespace+e,t,r)},e.prototype.clear=function(){this._storage.clear(this._namespace)},e.prototype.clearAll=function(){this._storage.clearAll()},e.prototype.getStats=function(){return this._storage.getStats()},e.prototype.resetStats=function(){this._storage.resetStats()},e}();t.MemCache=n;var s=function(){function e(e){void 0===e&&(e=10485760),this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new i}return e.prototype.register=function(e){this._users.push(e)},e.prototype.deregister=function(e){this._users.removeUnordered(e)},e.prototype.registerRemoveFunc=function(e,t){this._removeFuncs.push([e,t])},e.prototype.deregisterRemoveFunc=function(e){this._removeFuncs=this._removeFuncs.filter((function(t){return t[0]!==e}))},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._maxSize},set:function(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,r,i,o){var n=this._db.get(e);if(n&&(this._size-=n.size,this._db.delete(e),n.entry!==r&&this._notifyRemoved(e,n.entry)),i>this._maxSize)this._notifyRemoved(e,r);else if(void 0!==r)if(!i||i<0)console.warn("Refusing to cache entry with invalid size "+i);else{var s=1+Math.max(o,t.MIN_PRIORITY)-t.MIN_PRIORITY;this._db.set(e,{entry:r,size:i,lifetime:s,lives:s}),this._size+=i,this._checkSizeLimit()}else console.warn("Refusing to cache undefined entry ")},e.prototype.updateSize=function(e,t,r){var i=this._db.get(e);i&&i.entry===t&&(this._size-=i.size,r>this._maxSize?this._notifyRemoved(e,t):(i.size=r,this._size+=r,this._checkSizeLimit()))},e.prototype.pop=function(e){var t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss},e.prototype.get=function(e){var t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss},e.prototype.getStats=function(){var e=this,r={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},i={},n=new Array;this._db.forEach((function(t,r){var s=t.lifetime;n[s]=(n[s]||0)+t.size,e._users.forEach((function(e){var n=e.namespace;if(o.startsWith(r,n)){var s=i[n]||0;i[n]=s+t.size}}))}));var s={};this._users.forEach((function(e){var t=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){var r=i[t]||0;i[t]=r,s[t]=Math.round(100*e.hitRate)+"%"}else s[t]="0%"}));var l=Object.keys(i);l.forEach((function(t){return i[t]=i[t]/e._size*100})),l.sort((function(e,t){return i[t]-i[e]})),l.forEach((function(e){return r[e]=Math.round(i[e])+"% / "+s[e]}));for(var u=n.length-1;u>=0;--u){var a=n[u];a&&(r["Priority "+(u+t.MIN_PRIORITY-1)]=Math.round(a/this.size*100)+"%")}return r},e.prototype.resetStats=function(){this._hit=this._miss=0,this._users.forEach((function(e){return e.resetHitRate()}))},e.prototype.clear=function(e){var t=this;this._db.forEach((function(r,i){o.startsWith(i,e)&&(t._size-=r.size,t._db.delete(i),t._notifyRemoved(i,r.entry))}))},e.prototype.clearAll=function(){var e=this;this._db.forEach((function(t,r){e._notifyRemoved(r,t.entry)})),this._size=0,this._db.clear()},e.prototype._getHitRate=function(){return this._hit/(this._hit+this._miss)},e.prototype._notifyRemoved=function(e,t){this._removeFuncs.forEach((function(r){o.startsWith(e,r[0])&&r[1](t)}))},e.prototype._checkSizeLimit=function(){var e=this;this._size<=this._maxSize||r.someMap(this._db,(function(t,r){return e._db.delete(r),t.lives<=1?(e._size-=t.size,e._notifyRemoved(r,t.entry)):(--t.lives,e._db.set(r,t)),e._size<=.9*e.maxSize}))},e}();t.MemCacheStorage=s}.apply(null,i))||(e.exports=o)},1092:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(1063)],void 0===(o=function(e,t,r){return function(){function e(e,t){this._storage=new r.MemCacheStorage,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}return e.prototype.put=function(e,t,r){this._storage.put(e,t,r,1)},e.prototype.pop=function(e){return this._storage.pop(e)},e.prototype.get=function(e){return this._storage.get(e)},e.prototype.clear=function(){this._storage.clearAll()},e.prototype.destroy=function(){this._storage.clearAll()},Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._storage.maxSize},set:function(e){this._storage.maxSize=e},enumerable:!0,configurable:!0}),e}()}.apply(null,i))||(e.exports=o)},1591:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(1),r(0),r(38),r(4),r(5),r(2),r(17)],void 0===(o=function(e,t,r,i,o,n,s,l,u){var a=s.getLogger("esri.renderers.support.AttributeColorInfo");return function(e){function t(t){var r=e.call(this,t)||this;return r.color=null,r.field=null,r.label=null,r.valueExpression=null,r.valueExpressionTitle=null,r}var n;return r(t,e),n=t,t.prototype.castField=function(e){return null==e?e:"function"==typeof e?(a.error(".field: field must be a string value"),null):u.ensureString(e)},t.prototype.getAttributeHash=function(){return this.field+"-"+this.valueExpression},t.prototype.clone=function(){return new n({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})},i([l.property({type:o,json:{type:[Number],write:!0}})],t.prototype,"color",void 0),i([l.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),i([l.cast("field")],t.prototype,"castField",null),i([l.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([l.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),i([l.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),n=i([l.subclass("esri.renderers.support.AttributeColorInfo")],t)}(l.declared(n.JSONSupport))}.apply(null,i))||(e.exports=o)},1592:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(0),r(1),r(4),r(2)],void 0===(o=function(e,t,r,i,o,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.unit=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({unit:this.unit})},r([n.property({type:String,json:{write:!0}})],t.prototype,"unit",void 0),o=r([n.subclass("esri.renderers.support.DotDensityLegendOptions")],t)}(n.declared(o.JSONSupport))}.apply(null,i))||(e.exports=o)},1593:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(1),r(0),r(38),r(4),r(2)],void 0===(o=function(e,t,r,i,o,n,s){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t){var r=e.call(this,t)||this;return r.color=null,r.ratio=null,r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n({color:this.color,ratio:this.ratio})},i([s.property({type:o,json:{write:!0}})],t.prototype,"color",void 0),i([s.property({type:Number,json:{write:!0}})],t.prototype,"ratio",void 0),n=i([s.subclass("esri.renderers.support.HeatmapColorStop")],t)}(s.declared(n.JSONSupport));t.HeatmapColorStop=l,t.default=l}.apply(null,i))||(e.exports=o)}}]);