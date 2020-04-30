(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/Field":854,"esri/tasks/support/QuantizationParameters":856,"esri/renderers/visualVariables/support/sizeVariableUtils":892,"esri/tasks/support/Query":894,"esri/tasks/support/StatisticDefinition":899,"esri/layers/MapImageLayer":1009,"esri/renderers/visualVariables/support/visualVariableUtils":1059,"esri/layers/support/TimeInfo":1071,"esri/layers/mixins/TemporalLayer":1078,"esri/layers/support/TimeReference":1079,"esri/layers/support/ExportImageParameters":1161,"esri/geometry/support/scaleUtils":1169})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[80,98],{1009:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(8),r(1),r(0),r(103),r(10),r(11),r(76),r(9),r(102),r(108),r(15),r(246),r(6),r(2),r(17),r(110),r(1169),r(144),r(1201),r(1030),r(859),r(862),r(1002),r(901),r(1202),r(1078),r(841),r(1161),r(1177),r(1130)],void 0===(a=function(e,t,r,i,a,n,o,s,l,p,u,c,y,d,m,v,f,h,b,g,w,S,x,V,j,O,T,F,R,N,D,P){return function(e){function t(t,r){var i=e.call(this,t)||this;return i.alwaysRefetch=!1,i.dpi=96,i.gdbVersion=null,i.imageFormat="png24",i.imageMaxHeight=2048,i.imageMaxWidth=2048,i.imageTransparency=!0,i.labelsVisible=!1,i.isReference=null,i.operationalLayerType="ArcGISMapServiceLayer",i.sourceJSON=null,i.sublayers=null,i.type="map-image",i.url=null,i}return i(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},t.prototype.load=function(e){var t=this,r=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}))),m.resolve(this)},t.prototype.readImageFormat=function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"},t.prototype.writeSublayers=function(e,t,i,a){if(this.loaded&&e){var n=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var s=h.nameToId(a.origin);if(3===s){var l=this.createSublayersForOrigin("service").sublayers;o=P.shouldWriteSublayerStructure(n,l,2)}else if(s>3){var p=this.createSublayersForOrigin("portal-item");o=P.shouldWriteSublayerStructure(n,p.sublayers,h.nameToId(p.origin))}}var u=[],c=r({writeSublayerStructure:o},a),y=o;n.forEach((function(e){var t=e.write({},c);u.push(t),y=y||"user"===e.originOf("visible")})),u.some((function(e){return Object.keys(e).length>1}))&&(t.layers=u),y&&(t.visibleLayers=n.filter((function(e){return e.visible})).map((function(e){return e.id})))}},t.prototype.createExportImageParameters=function(e,t,i,a){var n=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new N.ExportImageParameters({layer:this,scale:b.getScale({extent:e,width:t})*n}),s=o.toJSON();o.layer=null,o.destroy();var l=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},p=e&&e.spatialReference,u=p.wkid||JSON.stringify(p.toJSON());s.dpi*=n;var c={};if(a&&a.timeExtent){var y=a.timeExtent.toJSON(),d=y.start,m=y.end;d&&m&&d===m?c.time=""+d:null==d&&null==m||(c.time=(null==d?"null":d)+","+(null==m?"null":m))}return r({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:t+","+i},s,l,c)},t.prototype.fetchImage=function(e,t,i,a){var n={responseType:"image"};a&&a.timestamp&&(n.query={_ts:a.timestamp}),a&&a.signal&&(n.signal=a.signal);var o=this.parsedUrl.path+"/export",s=r({},this.parsedUrl.query,this.createExportImageParameters(e,t,i,a),{f:"image",_ts:this.alwaysRefetch?Date.now():null});return null==s.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(n.query?n.query=r({},s,n.query):n.query=s,l(o,n).then((function(e){return e.data})).catch((function(e){if(m.isAbortError(e))throw e;throw new p("mapimagelayer:image-fetch-error","Unable to load image: "+o,{error:e})}))):m.reject(new p("mapimagelayer:dynamiclayer-not-supported","service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:s}))},t.prototype.loadAll=function(){var e=this;return c.default(this,(function(t){t(e.allSublayers)}))},t.prototype._fetchService=function(e){return s(this,void 0,void 0,(function(){var t,i;return o(this,(function(a){switch(a.label){case 0:return this.sourceJSON?(this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),[2]):[4,l(this.parsedUrl.path,{query:r({f:"json"},this.parsedUrl.query),signal:e})];case 1:return t=a.sent(),i=t.data,t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl}),[2]}}))}))},a([v.property()],t.prototype,"alwaysRefetch",void 0),a([v.property()],t.prototype,"dpi",void 0),a([v.property()],t.prototype,"gdbVersion",void 0),a([v.property({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),a([v.property()],t.prototype,"imageFormat",void 0),a([v.reader("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),a([v.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0),a([v.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0),a([v.property()],t.prototype,"imageTransparency",void 0),a([v.property({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0),a([v.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),a([v.property({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),a([v.property()],t.prototype,"sourceJSON",void 0),a([v.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),a([v.writer("sublayers",{layers:{type:[D]},visibleLayers:{type:[f.Integer]}})],t.prototype,"writeSublayers",null),a([v.property({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),a([v.property({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0),a([v.property(R.url)],t.prototype,"url",void 0),a([v.subclass("esri.layers.MapImageLayer")],t)}(v.declared(F.TemporalLayer(O.ScaleRangeLayer(j.RefreshableLayer(T.SublayersOwner(w.ArcGISMapService(S.ArcGISService(x.OperationalLayer(V.PortalLayer(d.MultiOriginJSONMixin(u.HandleOwnerMixin(g))))))))))))}.apply(null,i))||(e.exports=a)},1059:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(38),r(241),r(29),r(5),r(15),r(830),r(892)],void 0===(a=function(e,t,r,i,a,n,o,s,l){Object.defineProperty(t,"__esModule",{value:!0});var p=n.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new i,c=Math.PI;function y(e,t,i){var a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"color"===e.type}))[0]:e;if(a)if("esri.renderers.visualVariables.ColorVariable"===a.declaredClass){var n="number"==typeof t,s=n?null:t,l=s&&s.attributes,u=n?t:null,c=a.field,y=a.cache,d=y.ipData,m=y.hasExpression,v=a.cache.compiledFunc;if(!c&&!m){var f=a.stops;return f&&f[0]&&f[0].color}if("number"!=typeof u)if(m){if(!o.isSome(i)||!o.isSome(i.arcade))return void p.error("Use of arcade expressions requires an arcade context");var h={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},b=i.arcade.arcadeUtils,w=b.getViewInfo(h),S=b.createExecContext(s,w);if(!v){var x=b.createSyntaxTree(a.valueExpression);v=b.createFunction(x),a.cache.compiledFunc=v}u=b.executeFunction(v,S)}else l&&(u=l[c]);var V=a.normalizationField,j=l?parseFloat(l[V]):void 0;if(null!=u&&(!V||n||!isNaN(j)&&0!==j)){isNaN(j)||n||(u/=j);var O=g(u,d);if(O){var T=O[0],F=O[1],R=T===F?a.stops[T].color:r.blendColors(a.stops[T].color,a.stops[F].color,O[2],o.isSome(i)?i.color:void 0);return new r(R)}}}else p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable")}function d(e,t,r){var i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"opacity"===e.type}))[0]:e;if(i)if("esri.renderers.visualVariables.OpacityVariable"===i.declaredClass){var a="number"==typeof t,n=a?null:t,s=n&&n.attributes,l=a?t:null,u=i.field,c=i.cache,y=c.ipData,d=c.hasExpression,m=i.cache.compiledFunc;if(!u&&!d){var v=i.stops;return v&&v[0]&&v[0].opacity}if("number"!=typeof l)if(d){if(o.isNone(r)||o.isNone(r.arcade))return void p.error("Use of arcade expressions requires an arcade context");var f={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},h=r.arcade.arcadeUtils,b=h.getViewInfo(f),w=h.createExecContext(n,b);if(!m){var S=h.createSyntaxTree(i.valueExpression);m=h.createFunction(S),i.cache.compiledFunc=m}l=h.executeFunction(m,w)}else s&&(l=s[u]);var x=i.normalizationField,V=s?parseFloat(s[x]):void 0;if(null!=l&&(!x||a||!isNaN(V)&&0!==V)){isNaN(V)||a||(l/=V);var j=g(l,y);if(j){var O=j[0],T=j[1];if(O===T)return i.stops[O].opacity;var F=i.stops[O].opacity;return F+(i.stops[T].opacity-F)*j[2]}}}else p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable")}function m(e,t,r){var i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"rotation"===e.type}))[0]:e;if(i){if("esri.renderers.visualVariables.RotationVariable"===i.declaredClass){var a=i.axis||"heading",n="heading"===a&&"arithmetic"===i.rotationType?90:0,s="heading"===a&&"arithmetic"===i.rotationType?-1:1,l="number"==typeof t?null:t,u=l&&l.attributes,c=i.field,y=i.cache.hasExpression,d=i.cache.compiledFunc,m=0;if(!c&&!y)return m;if(y){if(o.isNone(r)||o.isNone(r.arcade))return void p.error("Use of arcade expressions requires an arcade context");var v={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},f=r.arcade.arcadeUtils,h=f.getViewInfo(v),b=f.createExecContext(l,h);if(!d){var g=f.createSyntaxTree(i.valueExpression);d=f.createFunction(g),i.cache.compiledFunc=d}m=f.executeFunction(d,b)}else u&&(m=u[c]||0);return"number"!=typeof m||isNaN(m)?null:n+s*m}p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable")}}function v(e,t,r){var i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"size"===e.type}))[0]:e;if(i){if("esri.renderers.visualVariables.SizeVariable"===i.declaredClass){var a=b(function(e,t,r){var i="number"==typeof t,a=i?null:t,n=a&&a.attributes,s=i?t:null,u=e.cache.isScaleDriven,c=e.cache.compiledFunc;if(u){var y=o.isSome(r)?r.scale:void 0,d=o.isSome(r)?r.view:void 0;s=null==y||d&&"3d"===d.type?function(e){var t=null,r=null,i=e.stops;return i?(t=i[0].value,r=i[i.length-1].value):(t=e.minDataValue||0,r=e.maxDataValue||0),(t+r)/2}(e):y}else if(!i)switch(e.inputValueType){case"expression":if(o.isNone(r)||o.isNone(r.arcade))return void p.error("Use of arcade expressions requires an arcade context");var m={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},v=r.arcade.arcadeUtils,f=v.getViewInfo(m),h=v.createExecContext(a,f);if(!c){var b=v.createSyntaxTree(e.valueExpression);c=v.createFunction(b),e.cache.compiledFunc=c}s=v.executeFunction(c,h);break;case"field":n&&(s=n[e.field]);break;case"unknown":s=null}if(!l.isValidNumber(s))return null;if(i||!e.normalizationField)return s;var g=n?parseFloat(n[e.normalizationField]):null;return l.isValidNumber(g)&&0!==g?s/g:null}(i,t,r),i,t,r,i.cache.ipData);return null==a||isNaN(a)?0:a}p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable")}}function f(e,t,r){return null==e?null:l.isSizeVariable(e)?v(e,t,r):l.isValidNumber(e)?e:null}function h(e,t,r){return l.isValidNumber(r)&&e>r?r:l.isValidNumber(t)&&e<t?t:e}function b(e,t,r,i,a){switch(t.transformationType){case"additive":return function(e,t,r,i){return e+(f(t.minSize,r,i)||t.minDataValue)}(e,t,r,i);case"constant":return function(e,t,r){var i=e.stops,a=i&&i.length&&i[0].size;return null==a&&(a=e.minSize),f(a,t,r)}(t,r,i);case"clamped-linear":return function(e,t,r,i){var a=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),n=f(t.minSize,r,i),s=f(t.maxSize,r,i),l=o.isSome(i)?i.shape:void 0;if(e<=t.minDataValue)return n;if(e>=t.maxDataValue)return s;if("area"===t.scaleBy&&l){var p="circle"===l,u=p?c*Math.pow(n/2,2):n*n,y=u+a*((p?c*Math.pow(s/2,2):s*s)-u);return p?2*Math.sqrt(y/c):Math.sqrt(y)}return n+a*(s-n)}(e,t,r,i);case"proportional":return function(e,t,r,i){var a=o.isSome(i)?i.shape:void 0,n=e/t.minDataValue,s=f(t.minSize,r,i),l=f(t.maxSize,r,i);return h("circle"===a?2*Math.sqrt(n*Math.pow(s/2,2)):"square"===a||"diamond"===a||"image"===a?Math.sqrt(n*Math.pow(s,2)):n*s,s,l)}(e,t,r,i);case"stops":return function(e,t,r,i,a){var n=g(e,a),o=n[0],s=n[1],l=n[2];if(o===s)return f(t.stops[o].size,r,i);var p=f(t.stops[o].size,r,i);return p+(f(t.stops[s].size,r,i)-p)*l}(e,t,r,i,a);case"real-world-size":return function(e,t,r,i){var a=(o.isSome(i)&&i.resolution?i.resolution:1)*s.meterIn[t.valueUnit],n=f(t.minSize,r,i),l=f(t.maxSize,r,i),p=t.valueRepresentation;return h("area"===p?2*Math.sqrt(e/c)/a:"radius"===p||"distance"===p?2*e/a:e/a,n,l)}(e,t,r,i);case"identity":return e;case"unknown":return null}}function g(e,t){if(t){var r=0,i=t.length-1;return t.some((function(t,a){return e<t?(i=a,!0):(r=a,!1)})),[r,i,(e-t[r])/(t[i]-t[r])]}}t.viewScaleRE=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,t.getColor=y,t.getOpacity=d,t.getRotationAngle=m,t.getSize=v,t.getSizeFromNumberOrVariable=f,t.getSizeForValue=b,t.getSizeRangeAtScale=function(e,t,r){var i=e.cache.isScaleDriven,a=r&&"3d"===r.type;if(!(i&&a||t))return null;var n={scale:t,view:r},o=f(e.minSize,u,n),s=f(e.maxSize,u,n);if(null!=o||null!=s){if(o>s){var l=s;s=o,o=l}return{minSize:o,maxSize:s}}},t.getVisualVariableValues=function(e,t,r){if(e.visualVariables){for(var i=[],a=[],n=[],o=[],s=[],l=0,p=e.visualVariables;l<p.length;l++){var u=p[l];switch(u.type){case"color":a.push(u);break;case"opacity":n.push(u);break;case"rotation":s.push(u);break;case"size":o.push(u)}}return a.forEach((function(e){var a=y(e,t,r);i.push({variable:e,value:a})})),n.forEach((function(e){var a=d(e,t,r);i.push({variable:e,value:a})})),s.forEach((function(e){var a=m(e,t,r);i.push({variable:e,value:a})})),o.forEach((function(e){var a=v(e,t,r);i.push({variable:e,value:a})})),i.filter((function(e){return null!=e.value}))}},t.getAllSizes=function(e,t,r){for(var i=["proportional","proportional","proportional"],n=0,o=e;n<o.length;n++){var s=o[n],l=s.useSymbolValue?"symbol-value":v(s,t,r);switch(s.axis){case"width":i[0]=l;break;case"depth":i[1]=l;break;case"height":i[2]=l;break;case"width-and-depth":i[0]=l,i[1]=l;break;case"all":case void 0:case null:i[0]=l,i[1]=l,i[2]=l;break;default:a.neverReached(s.axis)}}return i}}.apply(null,i))||(e.exports=a)},1071:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(1),r(0),r(100),r(263),r(4),r(3),r(2),r(1079),r(106)],void 0===(a=function(e,t,r,i,a,n,o,s,l,p,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}var o;return r(t,e),o=t,t.prototype.readFullTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;var r=t.timeExtent[0],i=t.timeExtent[1];return new a({start:r,end:i})},t.prototype.writeFullTimeExtent=function(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},t.prototype.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new n({value:t.timeInterval,unit:u.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new n({value:t.defaultTimeInterval,unit:u.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},t.prototype.writeInterval=function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},t.prototype.clone=function(){var e=this,t=e.cumulative,r=e.endField,i=e.hasLiveData,a=e.interval,n=e.startField,l=e.timeReference,p=e.fullTimeExtent,u=e.trackIdField,c=e.useTime;return new o({cumulative:t,endField:r,hasLiveData:i,interval:a,startField:n,timeReference:s.clone(l),fullTimeExtent:s.clone(p),trackIdField:u,useTime:c})},i([l.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],t.prototype,"cumulative",void 0),i([l.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],t.prototype,"endField",void 0),i([l.property({type:a,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"fullTimeExtent",void 0),i([l.reader("fullTimeExtent",["timeExtent"])],t.prototype,"readFullTimeExtent",null),i([l.writer("fullTimeExtent")],t.prototype,"writeFullTimeExtent",null),i([l.property({type:Boolean,json:{write:!0}})],t.prototype,"hasLiveData",void 0),i([l.property({type:n,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"interval",void 0),i([l.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],t.prototype,"readInterval",null),i([l.writer("interval")],t.prototype,"writeInterval",null),i([l.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],t.prototype,"startField",void 0),i([l.property({type:p,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeReference",void 0),i([l.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"trackIdField",void 0),i([l.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],t.prototype,"useTime",void 0),o=i([l.subclass("esri.layers.support.TimeInfo")],t)}(l.declared(o.JSONSupport))}.apply(null,i))||(e.exports=a)},1078:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(1),r(0),r(100),r(263),r(2),r(1071),r(140),r(106)],void 0===(a=function(e,t,r,i,a,n,o,s,l,p){Object.defineProperty(t,"__esModule",{value:!0}),t.TemporalLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.timeExtent=null,t.timeOffset=null,t.useViewTime=!0,t}return r(t,e),t.prototype.readOffset=function(e,t){var r=t.timeInfo.exportOptions;if(!r)return null;var i=r.timeOffset,a=p.timeUnitKebabDictionary.fromJSON(r.timeOffsetUnits);return i&&a?new n({value:i,unit:a}):null},Object.defineProperty(t.prototype,"timeInfo",{set:function(e){l.fixTimeInfoFields(e,this.fields),this._set("timeInfo",e)},enumerable:!0,configurable:!0}),i([o.property({type:a,json:{write:!1}})],t.prototype,"timeExtent",void 0),i([o.property({type:n})],t.prototype,"timeOffset",void 0),i([o.reader("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),i([o.property({value:null,type:s,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),i([o.property({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),i([o.subclass("esri.layers.mixins.TemporalLayer")],t)}(o.declared(e))}}.apply(null,i))||(e.exports=a)},1079:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(1),r(0),r(4),r(2)],void 0===(a=function(e,t,r,i,a,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.respectsDaylightSaving=!1,r.timezone=null,r}var a;return r(t,e),a=t,t.prototype.readRespectsDaylightSaving=function(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving},t.prototype.clone=function(){var e=this.respectsDaylightSaving,t=this.timezone;return new a({respectsDaylightSaving:e,timezone:t})},i([n.property({type:Boolean,json:{write:!0}})],t.prototype,"respectsDaylightSaving",void 0),i([n.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],t.prototype,"readRespectsDaylightSaving",null),i([n.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],t.prototype,"timezone",void 0),a=i([n.subclass("esri.layers.support.TimeReference")],t)}(n.declared(a.JSONSupport))}.apply(null,i))||(e.exports=a)},1161:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(8),r(1),r(0),r(7),r(2),r(1130),r(106),r(278)],void 0===(a=function(e,t,r,i,a,n,o,s,l,p){Object.defineProperty(t,"__esModule",{value:!0});var u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._scale=null,t.view=null,t}return i(t,e),Object.defineProperty(t.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var e=this.visibleSublayers.map((function(e){return e.toExportImageJSON()}));return e.length?JSON.stringify(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasDynamicLayers",{get:function(){return this.layer&&s.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.forEach((function(e){return e.remove()})),this._layerHandles.length=0),e&&(this._layerHandles=[e.allSublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return t.notifyChange(u[e.propertyName])}))]))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layers",{get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layerDefs",{get:function(){var e=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression}));return e.length?JSON.stringify(e.reduce((function(e,t){return e[t.id]=t.definitionExpression,e}),{})):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){this.layers,this.layerDefs,this.dynamicLayers,this.timeExtent;var e=this.layer;return e&&(e.dpi,e.imageFormat,e.imageTransparency,e.gdbVersion),(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this,t=[];if(!this.layer)return t;var r=this.layer.sublayers,i=function(r){var a=e.scale,n=0===a,o=0===r.minScale||a<=r.minScale,s=0===r.maxScale||a>=r.maxScale;r.visible&&(n||o&&s)&&(r.sublayers?r.sublayers.forEach(i):t.unshift(r))};r&&r.forEach(i);var a=this._get("visibleSublayers");return!a||a.length!==t.length||a.some((function(e,r){return t[r]!==e}))?t:a},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this.layer,t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t=r({},t,{layers:this.layers,layerDefs:this.layerDefs}),t},a([o.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],t.prototype,"dynamicLayers",null),a([o.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],t.prototype,"hasDynamicLayers",null),a([o.property()],t.prototype,"layer",null),a([o.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layers",null),a([o.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layerDefs",null),a([o.property({type:Number,dependsOn:["view.scale"]})],t.prototype,"scale",null),a([o.property(l.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),a([o.property({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],t.prototype,"version",null),a([o.property({type:p})],t.prototype,"view",void 0),a([o.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],t.prototype,"visibleSublayers",null),a([o.subclass("esri.layers.mixins.ExportImageParameters")],t)}(o.declared(n));t.ExportImageParameters=c}.apply(null,i))||(e.exports=a)},1169:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(97)],void 0===(a=function(e,t,r){function i(e,t){return e/(r.getMetersPerUnitForSR(t)*r.inchesPerMeter*96)}Object.defineProperty(t,"__esModule",{value:!0}),t.getScale=function(e,t){var i=t||e.extent,a=e.width,n=r.getMetersPerUnitForSR(i&&i.spatialReference);return i&&a?i.width/a*n*r.inchesPerMeter*96:0},t.getResolutionForScale=i,t.getScaleForResolution=function(e,t){return e*(r.getMetersPerUnitForSR(t)*r.inchesPerMeter*96)},t.getExtentForScale=function(e,t){var r=e.extent,a=e.width,n=i(t,r.spatialReference);return r.clone().expand(n*a/r.width)}}.apply(null,i))||(e.exports=a)},854:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(1),r(0),r(18),r(4),r(2),r(17),r(250),r(249)],void 0===(a=function(e,t,r,i,a,n,o,s,l,p){var u=new a.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}var a;return r(t,e),a=t,t.prototype.readDescription=function(e,t){var r,i=t.description;try{r=JSON.parse(i)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,i=t.description;try{r=JSON.parse(i)}catch(e){}return r?u.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new a({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},i([o.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),i([o.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),i([o.property()],t.prototype,"description",void 0),i([o.reader("description")],t.prototype,"readDescription",null),i([o.property({types:l.types,json:{read:{reader:l.fromJSON},write:!0}})],t.prototype,"domain",void 0),i([o.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),i([o.property({type:s.Integer,json:{write:!0}})],t.prototype,"length",void 0),i([o.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),i([o.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),i([o.enumeration.serializable()(p.kebabDict)],t.prototype,"type",void 0),i([o.property()],t.prototype,"valueType",void 0),i([o.reader("valueType",["description"])],t.prototype,"readValueType",null),a=i([o.subclass("esri.layers.support.Field")],t)}(o.declared(n.JSONSupport))}.apply(null,i))||(e.exports=a)},856:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(1),r(0),r(32),r(18),r(4),r(3),r(2)],void 0===(a=function(e,t,r,i,a,n,o,s,l){Object.defineProperty(t,"__esModule",{value:!0});var p=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),u=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},i([l.property({type:a.Extent,json:{write:!0}})],t.prototype,"extent",void 0),i([l.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),i([l.property({type:String,json:{read:p.read,write:p.write}})],t.prototype,"originPosition",void 0),i([l.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),n=i([l.subclass("esri.tasks.support.QuantizationParameters")],t)}(l.declared(o.JSONSupport));t.default=u}.apply(null,i))||(e.exports=a)},892:function(e,t,r){var i,a;i=[r.dj.c(e.i),t],void 0===(a=function(e,t){function r(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}Object.defineProperty(t,"__esModule",{value:!0}),t.isSizeVariable=function(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass},t.isValidNumber=function(e){return null!=e&&!isNaN(e)&&isFinite(e)},t.getInputValueType=r,t.getTransformationType=function(e,t){var i=t||r(e),a=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}}.apply(null,i))||(e.exports=a)},894:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(1),r(0),r(32),r(32),r(142),r(100),r(18),r(4),r(3),r(2),r(17),r(35),r(143),r(856),r(899)],void 0===(a=function(e,t,r,i,a,n,o,s,l,p,u,c,y,d,m,v,f){var h=new l.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),b=new l.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.cacheHint=!1,r.datumTransformation=null,r.distance=void 0,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.units=null,r.where=null,r}var l;return r(t,e),l=t,t.from=function(e){return y.ensureClass(l,e)},t.prototype.castDatumTransformation=function(e){return"number"==typeof e||"object"==typeof e?e:null},t.prototype.writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.writeParameterValues=function(e,t){if(e){var r={};for(var i in e){var a=e[i];Array.isArray(a)?r[i]=a.map((function(e){return e instanceof Date?e.getTime():e})):a instanceof Date?r[i]=a.getTime():r[i]=a}t.parameterValues=r}},t.prototype.writeStart=function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"},t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.clone=function(){return new l(u.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))},t.MAX_MAX_RECORD_COUNT_FACTOR=5,i([c.property({type:Boolean,json:{write:!0,default:!1}})],t.prototype,"cacheHint",void 0),i([c.property({json:{write:!0}})],t.prototype,"datumTransformation",void 0),i([c.cast("datumTransformation")],t.prototype,"castDatumTransformation",null),i([c.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),i([c.property({types:n.geometryTypes,json:{read:d.fromJSON,write:!0}})],t.prototype,"geometry",void 0),i([c.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"groupByFieldsForStatistics",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"having",void 0),i([c.property({type:Date})],t.prototype,"historicMoment",void 0),i([c.writer("historicMoment")],t.prototype,"writeHistoricMoment",null),i([c.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),i([c.property({type:Number,cast:function(e){return e<1?1:e>l.MAX_MAX_RECORD_COUNT_FACTOR?l.MAX_MAX_RECORD_COUNT_FACTOR:e},json:{write:{overridePolicy:function(e){return{enabled:e>1}}}}})],t.prototype,"maxRecordCountFactor",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"multipatchOption",void 0),i([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),i([c.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),i([c.property({type:a.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),i([c.property({type:[f],json:{write:!0}})],t.prototype,"outStatistics",void 0),i([c.property({json:{write:!0}})],t.prototype,"parameterValues",void 0),i([c.writer("parameterValues")],t.prototype,"writeParameterValues",null),i([c.property({types:o.symbolTypes,json:{read:m.read,write:!0}})],t.prototype,"pixelSize",void 0),i([c.property({type:v.default,json:{write:!0}})],t.prototype,"quantizationParameters",void 0),i([c.property({type:[Object],json:{write:!0}})],t.prototype,"rangeValues",void 0),i([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],t.prototype,"relationParameter",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"resultType",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnCentroid",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnDistinctValues",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:!e}}}}})],t.prototype,"returnExceededLimitFeatures",void 0),i([c.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnQueryGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnM",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnZ",void 0),i([c.property({json:{write:!0}})],t.prototype,"source",void 0),i([c.property({type:String,json:{read:{source:"spatialRel",reader:h.read},write:{target:"spatialRel",writer:h.write}}})],t.prototype,"spatialRelationship",void 0),i([c.property({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),i([c.writer("start"),c.writer("num")],t.prototype,"writeStart",null),i([c.property({type:String,json:{write:!0}})],t.prototype,"sqlFormat",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),i([c.property({type:s,json:{write:!0}})],t.prototype,"timeExtent",void 0),i([c.property({type:String,json:{read:b.read,write:{writer:b.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),i([c.property({type:String,json:{write:{overridePolicy:function(e){return{enabled:null!=e||this.start>0}}}}})],t.prototype,"where",void 0),i([c.writer("where")],t.prototype,"writeWhere",null),l=i([c.subclass("esri.tasks.support.Query")],t)}(c.declared(p.JSONSupport))}.apply(null,i))||(e.exports=a)},899:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(1),r(0),r(18),r(4),r(3),r(2)],void 0===(a=function(e,t,r,i,a,n,o,s){var l=new a.default({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});return function(e){function t(t){var r=e.call(this,t)||this;return r.maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r.statisticParameters=null,r}var a;return r(t,e),a=t,t.prototype.writeStatisticParameters=function(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=o.clone(e))},t.prototype.clone=function(){return new a({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:o.clone(this.statisticParameters)})},i([s.property({type:Number,json:{write:!0}})],t.prototype,"maxPointCount",void 0),i([s.property({type:Number,json:{write:!0}})],t.prototype,"maxRecordCount",void 0),i([s.property({type:Number,json:{write:!0}})],t.prototype,"maxVertexCount",void 0),i([s.property({type:String,json:{write:!0}})],t.prototype,"onStatisticField",void 0),i([s.property({type:String,json:{write:!0}})],t.prototype,"outStatisticFieldName",void 0),i([s.property({type:String,json:{read:{source:"statisticType",reader:l.read},write:{target:"statisticType",writer:l.write}}})],t.prototype,"statisticType",void 0),i([s.property({type:Object})],t.prototype,"statisticParameters",void 0),i([s.writer("statisticParameters")],t.prototype,"writeStatisticParameters",null),a=i([s.subclass("esri.tasks.support.StatisticDefinition")],t)}(s.declared(n.JSONSupport))}.apply(null,i))||(e.exports=a)}}]);