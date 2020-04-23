(function(){(this||window).webpackJsonp.registerAbsMids({"esri/renderers/support/utils":827,"esri/renderers/visualVariables/support/ColorStop":836,"esri/renderers/support/numberUtils":837,"esri/layers/support/commonProperties":838,"esri/layers/mixins/OperationalLayer":856,"esri/symbols/support/ElevationInfo":892,"esri/symbols/support/FeatureExpressionInfo":894,"esri/symbols/support/unitConversionUtils":895})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[94,31,89,90,91,92,93],{827:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(8),t(25),t(5),t(97),t(99),t(837),t(836)],void 0===(i=function(e,r,t,n,i,a,o,l,s){Object.defineProperty(r,"__esModule",{value:!0});var u=i.getLogger("esri.renderers.support.utils"),c={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},p={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"};function d(e,r,t){var n="";return 0===r?n="< ":r===t&&(n="> "),n+e}function f(e){var r=e.minValue,t=e.maxValue,n=e.isFirstBreak?"":"> ",i="percent-of-total"===e.normalizationType?"%":"";return n+(r=null==r?"":l.format(r))+i+" – "+(t=null==t?"":l.format(t))+i}function y(e,r){return"normalizationField"in e&&e.normalizationField?{type:"normalized-field",field:e.field,normalizationField:e.normalizationField}:"field"in e&&e.field?v(e.field):"valueExpression"in e&&e.valueExpression?{type:"expression",expression:e.valueExpression,title:e.valueExpressionTitle,returnType:r}:null}function v(e){return{type:"field",field:e}}r.meterIn={inches:a.convertUnit(1,"meters","inches"),feet:a.convertUnit(1,"meters","feet"),"us-feet":a.convertUnit(1,"meters","us-feet"),yards:a.convertUnit(1,"meters","yards"),miles:a.convertUnit(1,"meters","miles"),"nautical-miles":a.convertUnit(1,"meters","nautical-miles"),millimeters:a.convertUnit(1,"meters","millimeters"),centimeters:a.convertUnit(1,"meters","centimeters"),decimeters:a.convertUnit(1,"meters","decimeters"),meters:a.convertUnit(1,"meters","meters"),kilometers:a.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/a.lengthToDegrees(1,"meters")},r.timelineDateFormatOptions=o.convertDateFormatToIntlOptions("short-date"),r.createColorStops=function(e){var r=e.values,t=e.colors,n=e.labelIndexes,i=e.isDate,a=e.dateFormatOptions;return r.map((function(e,u){var c=null;if(!n||n.indexOf(u)>-1){var p;(p=i?o.formatDate(e,a):l.format(e))&&(c=d(p,u,r.length-1))}return new s({value:e,color:t[u],label:c})}))},r.updateColorStops=function(e){for(var r=e.stops,t=e.changes,n=e.isDate,i=e.dateFormatOptions,a=r.map((function(e){return e.value})),s=[],u=0,c=t;u<c.length;u++){var p=c[u];s.push(p.index),a[p.index]=p.value}var f=l.round(a,{indexes:s});r.forEach((function(e,t){if(e.value=a[t],null!=e.label){var s,u=null;(s=n?o.formatDate(f[t],i):l.format(f[t]))&&(u=d(s,t,r.length-1)),e.label=u}}))},r.createClassBreakLabel=f,r.setLabelsForClassBreaks=function(e){var r=e.classBreakInfos,t=e.normalizationType,n=[];if(r&&r.length)if("standard-deviation"!==e.classificationMethod)if(e.round){n.push(r[0].minValue);for(var i=0,a=r;i<a.length;i++){var o=a[i];n.push(o.maxValue)}n=l.round(n),r.forEach((function(e,r){e.label=f({minValue:0===r?n[0]:n[r],maxValue:n[r+1],isFirstBreak:0===r,normalizationType:t})}))}else r.forEach((function(e,r){e.label=f({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===r,normalizationType:t})}));else u.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.")},r.updateClassBreak=function(e){if("standard-deviation"!==e.classificationMethod){var r=e.classBreaks,t=e.change,n=t.index,i=t.value,a=r.length,o=-1,l=-1;0===n?o=n:n===a?l=n-1:(l=n-1,o=n);var s=e.normalizationType,c=null;o>-1&&o<a&&((c=r[o]).minValue=i,c.label=f({minValue:c.minValue,maxValue:c.maxValue,isFirstBreak:0===o,normalizationType:s})),l>-1&&l<a&&((c=r[l]).maxValue=i,c.label=f({minValue:c.minValue,maxValue:c.maxValue,isFirstBreak:0===l,normalizationType:s}))}else u.warn("updateClassBreak","cannot update labels for class breaks generated using 'standard-deviation' method.")},r.calculateDateFormatInterval=function(e){for(var r=e.map((function(e){return new Date(e)})),t=r.length,n=1/0,i=null,a=0;a<t-1;a++){for(var o=r[a],l=[],s=1/0,u=null,p=a+1;p<t;p++){var d=r[p],f=(o.getFullYear()!==d.getFullYear()?"year":o.getMonth()!==d.getMonth()&&"month")||o.getDate()!==d.getDate()&&"day"||o.getHours()!==d.getHours()&&"hour"||o.getMinutes()!==d.getMinutes()&&"minute"||o.getSeconds()!==d.getSeconds()&&"second"||"millisecond",y=c[f];y<s&&(s=y,u=f),l.push(f)}s<n&&(n=s,i=u)}return i},r.createUniqueValueLabel=function(e){var r=e.value,t=e.domain,n=e.fieldInfo,i=e.dateFormatInterval,a=String(r),s=t&&"codedValues"in t&&t.codedValues?t.getName(r):null;return s?a=s:"number"==typeof r&&(a=n&&"date"===n.type?o.formatDate(r,i&&o.convertDateFormatToIntlOptions(p[i])):l.format(r)),a},r.getAttributes=function(e,r){var t=[];if("class-breaks"===e.type||"heatmap"===e.type)t.push(y(e,"number"));else if("unique-value"===e.type){var i=e.uniqueValueInfos[0],a=null;if(i&&i.value){var o=typeof e.uniqueValueInfos[0].value;"string"!==o&&"number"!==o||(a=o)}t.push(y(e,a)),[e.field2,e.field3].forEach((function(e){return e&&t.push(v(e))}))}else"dot-density"===e.type&&e.attributes.forEach((function(e){return t.push(y(e,"number"))}));var l=r?r(e):"visualVariables"in e?e.visualVariables:null;return l&&l.forEach((function(e){return t.push(y(e,"number"))})),n.unique(t.filter(Boolean),(function(e,r){return"field"===e.type&&"field"===r.type?e.field===r.field:"normalized-field"===e.type&&"normalized-field"===r.type?e.field===r.field&&e.normalizationField===r.normalizationField:"expression"===e.type&&"expression"===r.type&&e.expression===r.expression}))}}.apply(null,n))||(e.exports=i)},836:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(38),t(4),t(2),t(17)],void 0===(i=function(e,r,t,n,i,a,o,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.color=null,t.label=null,t.value=null,t}var a;return t(r,e),a=r,r.prototype.writeValue=function(e,r,t){r[t]=null==e?0:e},r.prototype.clone=function(){return new a({color:this.color&&this.color.clone(),label:this.label,value:this.value})},n([o.property({type:i,json:{type:[l.Integer],write:!0}})],r.prototype,"color",void 0),n([o.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),n([o.property({type:Number,json:{write:{allowNull:!0}}})],r.prototype,"value",void 0),n([o.writer("value")],r.prototype,"writeValue",null),a=n([o.subclass("esri.renderers.visualVariables.support.ColorStop")],r)}(o.declared(a.JSONSupport))}.apply(null,n))||(e.exports=i)},837:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(244)],void 0===(i=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=/^-?(\d+)(\.(\d+))?$/i;function i(e,r){return e-r}function a(e,r){var t,n;return(t=Number(e.toFixed(r)))<e?n=t+1/Math.pow(10,r):(n=t,t-=1/Math.pow(10,r)),[t=Number(t.toFixed(r)),n=Number(n.toFixed(r))]}function o(e,r,t,n,i){var a=s(e,r,t,n),o=null==a.previous||a.previous<=i,l=null==a.next||a.next<=i;return o&&l||a.previous+a.next<=2*i}function l(e){var r=String(e),t=r.match(n);if(t&&t[1])return{integer:t[1].split("").length,fractional:t[3]?t[3].split("").length:0};if(r.toLowerCase().indexOf("e")>-1){var i=r.split("e"),a=i[0],o=i[1];if(a&&o){var s=Number(a),u=Number(o),c=u>0;c||(u=Math.abs(u));var p=l(s);return c?(p.integer+=u,u>p.fractional?p.fractional=0:p.fractional-=u):(p.fractional+=u,u>p.integer?p.integer=1:p.integer-=u),p}}return{integer:0,fractional:0}}function s(e,r,t,n){var i,a={previous:null,next:null};if(null!=t){var o=r-t-(i=e-t);a.previous=Math.floor(Math.abs(100*o/i))}null!=n&&(o=n-r-(i=n-e),a.next=Math.floor(Math.abs(100*o/i)));return a}r.numDigits=l,r.percentChange=s,r.round=function(e,r){void 0===r&&(r={});var t=e.slice(0),n=r.tolerance,s=void 0===n?2:n,u=r.strictBounds,c=void 0!==u&&u,p=r.indexes,d=void 0===p?t.map((function(e,r){return r})):p;d.sort(i);for(var f=0;f<d.length;f++){var y=d[f],v=t[y],m=0===y?null:t[y-1],h=y===t.length-1?null:t[y+1],g=l(v).fractional;if(g){for(var w=0,b=!1,S=void 0;w<=g&&!b;){var I=a(v,w);b=o(v,S=c&&0===f?I[1]:I[0],m,h,s),w++}b&&(t[y]=S)}}return t};var u={maximumFractionDigits:20};r.format=function(e){return t.formatNumber(e,u)}}.apply(null,n))||(e.exports=i)},838:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(8),t(36),t(33),t(141),t(892),t(252)],void 0===(i=function(e,r,t,n,i,a,o,l){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,n){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||a.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},n))&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:o,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0}}}},r.opacityDrawingInfo=t({},r.opacity,{json:t({},r.opacity.json,{origins:{"web-document":t({},r.opacity.json.origins["web-document"],{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?l.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:l.transparencyToOpacity(r.drawingInfo.transparency)}}})})}.apply(null,n))||(e.exports=i)},856:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(9),t(6),t(2),t(104),t(141),t(838)],void 0===(i=function(e,r,n,i,a,o,l,s,u,c){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return n(t,e),t.prototype.writeListMode=function(e,r,t,n){(n&&"ground"===n.layerContainerType||e&&u.willPropertyWrite(this,t,{},n))&&(r[t]=e)},t.prototype.writeTitle=function(e,r){r.title=e||"Layer"},t.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},t.prototype.read=function(e,r){var t=this,n=arguments;r&&(r.layer=this),s.readLoadable(this,e,(function(r){return t.inherited(n,[e,r])}),r)},t.prototype.write=function(e,t){if(t&&t.origin){var n=t.origin+"/"+(t.layerContainerType||"operational-layers"),i=r.supportedTypes[n],o=i&&i[this.operationalLayerType];if("write"!==o&&"readwrite"!==o)return t.messages&&t.messages.push(new a("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var l=this.inherited(arguments,[e,t]),s=!!t&&!!t.messages&&!!t.messages.filter((function(e){return e instanceof a&&"web-document-write:property-required"===e.name})).length;return!this.url&&s?null:l},i([l.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"id",void 0),i([l.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"listMode",void 0),i([l.writer("listMode")],t.prototype,"writeListMode",null),i([l.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"title",void 0),i([l.writer("title")],t.prototype,"writeTitle",null),i([l.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0}}})],t.prototype,"operationalLayerType",void 0),i([l.writer("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),i([l.property(c.opacity)],t.prototype,"opacity",void 0),i([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"},origins:{"web-document":{read:{source:"visibility"},write:{target:"visibility"},default:!0}}}})],t.prototype,"visible",void 0),i([l.subclass("esri.layers.mixins.OperationalLayer")],t)}(l.declared(e))},r.typeModuleMap={ArcGISFeatureLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(98)]).then(function(){var r=[t(904)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(3),t.e(7),t.e(11),t.e(63)]).then(function(){var r=[t(1011)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceVectorLayer:function(){return o.resolve(null)},ArcGISMapServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(80)]).then(function(){var r=[t(1006)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISSceneServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(85)]).then(function(){var r=[t(1014)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISStreamLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(22)]).then(function(){var r=[t(1018)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledElevationServiceLayer:function(){return o.create((function(e){return t.e(14).then(function(){var r=[t(768)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledImageServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(28)]).then(function(){var r=[t(890)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledMapServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(28)]).then(function(){var r=[t(890)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsAerial:function(){return o.create((function(e){return t.e(17).then(function(){var r=[t(840)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsRoad:function(){return o.create((function(e){return t.e(17).then(function(){var r=[t(840)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsHybrid:function(){return o.create((function(e){return t.e(17).then(function(){var r=[t(840)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BuildingSceneLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(20)]).then(function(){var r=[t(1015)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},CSV:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(87)]).then(function(){var r=[t(1009)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GeoRSS:function(){return o.create((function(e){return t.e(103).then(function(){var r=[t(1010)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GroupLayer:function(){return o.create((function(e){return t.e(112).then(function(){var r=[t(1007)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},IntegratedMeshLayer:function(){return o.create((function(e){return t.e(96).then(function(){var r=[t(1012)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},KML:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(27)]).then(function(){var r=[t(1016)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},OpenStreetMap:function(){return o.create((function(e){return t.e(97).then(function(){var r=[t(1013)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},PointCloudLayer:function(){return o.create((function(e){return t.e(21).then(function(){var r=[t(1017)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},VectorTileLayer:function(){return o.create((function(e){return Promise.all([t.e(15),t.e(25)]).then(function(){var r=[t(1019)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WebTiledLayer:function(){return o.create((function(e){return t.e(99).then(function(){var r=[t(1004)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WFS:function(){return o.resolve(null)},WMS:function(){return o.create((function(e){return t.e(30).then(function(){var r=[t(1020)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},RasterDataLayer:function(){return o.resolve(null)},RasterDataElevationLayer:function(){return o.resolve(null)}},r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",BuildingSceneLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",KML:"readwrite",RasterDataLayer:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite",RasterDataElevationLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",ArcGISFeatureLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WFS:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite"}}}.apply(null,n))||(e.exports=i)},892:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(10),t(11),t(18),t(4),t(15),t(2),t(894),t(895)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u,c,p){var d=o.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),f=new o.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.offset=null,r}var i;return t(r,e),i=r,r.prototype.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},r.prototype.writeFeatureExpressionInfo=function(e,r,t,n){r[t]=e.write(null,n),"0"===e.expression&&(r.featureExpression={value:0})},Object.defineProperty(r.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):s.isSome(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),r.prototype.write=function(){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},r.prototype.clone=function(){return new i({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},n([u.property({type:c,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),n([u.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),n([u.writer("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),n([u.property({type:d.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:d.jsonValues,read:d.read,write:{writer:d.write,isRequired:!0}}})],r.prototype,"mode",null),n([u.property({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),n([u.property({type:p.supportedUnits,json:{type:String,read:f.read,write:f.write}})],r.prototype,"unit",null),i=n([u.subclass("esri.layers.support.ElevationInfo")],r)}(u.declared(l.JSONSupport))}.apply(null,n))||(e.exports=i)},894:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(10),t(11),t(4),t(2),t(140)],void 0===(i=function(e,r,t,n,i,a,o,l,s){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var o;return t(r,e),o=r,r.prototype.collectRequiredFields=function(e,r){return a(this,void 0,void 0,(function(){return i(this,(function(t){return[2,s.collectArcadeFieldNames(e,r,this.expression)]}))}))},r.prototype.clone=function(){return new o({expression:this.expression,title:this.title})},n([l.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),n([l.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),o=n([l.subclass("esri.layers.support.FeatureExpressionInfo")],r)}(l.declared(o.JSONSupport))}.apply(null,n))||(e.exports=i)},895:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(827)],void 0===(i=function(e,r,t){var n;Object.defineProperty(r,"__esModule",{value:!0}),r.supportsUnit=function(e){return null!=t.meterIn[e]},r.getMetersPerUnit=function(e){return 1/(t.meterIn[e]||1)},r.supportedUnits=((n=Object.keys(t.meterIn)).sort(),n)}.apply(null,n))||(e.exports=i)}}]);