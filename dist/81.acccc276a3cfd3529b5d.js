(function(){(this||window).webpackJsonp.registerAbsMids({"esri/renderers/support/utils":842,"esri/renderers/visualVariables/support/ColorStop":851,"esri/renderers/support/numberUtils":852,"esri/layers/support/commonProperties":853,"esri/layers/BingMapsLayer":855,"esri/layers/mixins/OperationalLayer":871,"esri/symbols/support/ElevationInfo":907,"esri/symbols/support/FeatureExpressionInfo":909,"esri/symbols/support/unitConversionUtils":910,"esri/layers/mixins/ScaleRangeLayer":913,"esri/layers/mixins/RefreshableLayer":1014,"esri/layers/BaseTileLayer":1312})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[81,17,31,89,90,91,92,93,94],{1014:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(2)],void 0===(i=function(e,r,t,n,i){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t(r,e),r.prototype.refresh=function(){this.emit("refresh")},n([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),n([i.subclass("esri.layers.mixins.RefreshableLayer")],r)}(i.declared(e))}}.apply(null,n))||(e.exports=i)},1312:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(7),t(1),t(0),t(10),t(11),t(76),t(9),t(2),t(30),t(28),t(240),t(144),t(1014),t(913),t(251)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u,p,c,d,y,f,v,g){var h={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.tileInfo=g.create({spatialReference:c.WebMercator,size:256}),r.type="base-tile",r.fullExtent=new p(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,c.WebMercator),r.spatialReference=c.WebMercator,r}return n(r,e),r.prototype.getTileBounds=function(e,r,t,n){var i=n||d.create();return h.level=e,h.row=r,h.col=t,h.extent=i,this.tileInfo.updateTileInfo(h),h.extent=null,i},r.prototype.fetchTile=function(e,r,t,n){void 0===n&&(n={});var i=n.signal,a=n.timestamp,o=this.getTileUrl(e,r,t),s={responseType:"image",signal:i};return null!=a&&(s.query={_ts:n.timestamp}),l(o,s).then((function(e){return e.data}))},r.prototype.getTileUrl=function(){throw new s("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},i([u.property({type:g})],r.prototype,"tileInfo",void 0),i([u.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([u.property({readOnly:!0,value:"base-tile"})],r.prototype,"type",void 0),i([u.property()],r.prototype,"fullExtent",void 0),i([u.property()],r.prototype,"spatialReference",void 0),i([u.subclass("esri.layers.BaseTileLayer")],r)}(u.declared(v.ScaleRangeLayer(f.RefreshableLayer(y))))}.apply(null,n))||(e.exports=i)},842:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(7),t(25),t(5),t(97),t(99),t(852),t(851)],void 0===(i=function(e,r,t,n,i,a,o,l,s){Object.defineProperty(r,"__esModule",{value:!0});var u=i.getLogger("esri.renderers.support.utils"),p={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},c={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"};function d(e,r,t){var n="";return 0===r?n="< ":r===t&&(n="> "),n+e}function y(e){var r=e.minValue,t=e.maxValue,n=e.isFirstBreak?"":"> ",i="percent-of-total"===e.normalizationType?"%":"";return n+(r=null==r?"":l.format(r))+i+" – "+(t=null==t?"":l.format(t))+i}function f(e,r){return"normalizationField"in e&&e.normalizationField?{type:"normalized-field",field:e.field,normalizationField:e.normalizationField}:"field"in e&&e.field?v(e.field):"valueExpression"in e&&e.valueExpression?{type:"expression",expression:e.valueExpression,title:e.valueExpressionTitle,returnType:r}:null}function v(e){return{type:"field",field:e}}r.meterIn={inches:a.convertUnit(1,"meters","inches"),feet:a.convertUnit(1,"meters","feet"),"us-feet":a.convertUnit(1,"meters","us-feet"),yards:a.convertUnit(1,"meters","yards"),miles:a.convertUnit(1,"meters","miles"),"nautical-miles":a.convertUnit(1,"meters","nautical-miles"),millimeters:a.convertUnit(1,"meters","millimeters"),centimeters:a.convertUnit(1,"meters","centimeters"),decimeters:a.convertUnit(1,"meters","decimeters"),meters:a.convertUnit(1,"meters","meters"),kilometers:a.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/a.lengthToDegrees(1,"meters")},r.timelineDateFormatOptions=o.convertDateFormatToIntlOptions("short-date"),r.createColorStops=function(e){var r=e.values,t=e.colors,n=e.labelIndexes,i=e.isDate,a=e.dateFormatOptions;return r.map((function(e,u){var p=null;if(!n||n.indexOf(u)>-1){var c;(c=i?o.formatDate(e,a):l.format(e))&&(p=d(c,u,r.length-1))}return new s({value:e,color:t[u],label:p})}))},r.updateColorStops=function(e){for(var r=e.stops,t=e.changes,n=e.isDate,i=e.dateFormatOptions,a=r.map((function(e){return e.value})),s=[],u=0,p=t;u<p.length;u++){var c=p[u];s.push(c.index),a[c.index]=c.value}var y=l.round(a,{indexes:s});r.forEach((function(e,t){if(e.value=a[t],null!=e.label){var s,u=null;(s=n?o.formatDate(y[t],i):l.format(y[t]))&&(u=d(s,t,r.length-1)),e.label=u}}))},r.createClassBreakLabel=y,r.setLabelsForClassBreaks=function(e){var r=e.classBreakInfos,t=e.normalizationType,n=[];if(r&&r.length)if("standard-deviation"!==e.classificationMethod)if(e.round){n.push(r[0].minValue);for(var i=0,a=r;i<a.length;i++){var o=a[i];n.push(o.maxValue)}n=l.round(n),r.forEach((function(e,r){e.label=y({minValue:0===r?n[0]:n[r],maxValue:n[r+1],isFirstBreak:0===r,normalizationType:t})}))}else r.forEach((function(e,r){e.label=y({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===r,normalizationType:t})}));else u.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.")},r.updateClassBreak=function(e){if("standard-deviation"!==e.classificationMethod){var r=e.classBreaks,t=e.change,n=t.index,i=t.value,a=r.length,o=-1,l=-1;0===n?o=n:n===a?l=n-1:(l=n-1,o=n);var s=e.normalizationType,p=null;o>-1&&o<a&&((p=r[o]).minValue=i,p.label=y({minValue:p.minValue,maxValue:p.maxValue,isFirstBreak:0===o,normalizationType:s})),l>-1&&l<a&&((p=r[l]).maxValue=i,p.label=y({minValue:p.minValue,maxValue:p.maxValue,isFirstBreak:0===l,normalizationType:s}))}else u.warn("updateClassBreak","cannot update labels for class breaks generated using 'standard-deviation' method.")},r.calculateDateFormatInterval=function(e){for(var r=e.map((function(e){return new Date(e)})),t=r.length,n=1/0,i=null,a=0;a<t-1;a++){for(var o=r[a],l=[],s=1/0,u=null,c=a+1;c<t;c++){var d=r[c],y=(o.getFullYear()!==d.getFullYear()?"year":o.getMonth()!==d.getMonth()&&"month")||o.getDate()!==d.getDate()&&"day"||o.getHours()!==d.getHours()&&"hour"||o.getMinutes()!==d.getMinutes()&&"minute"||o.getSeconds()!==d.getSeconds()&&"second"||"millisecond",f=p[y];f<s&&(s=f,u=y),l.push(y)}s<n&&(n=s,i=u)}return i},r.createUniqueValueLabel=function(e){var r=e.value,t=e.domain,n=e.fieldInfo,i=e.dateFormatInterval,a=String(r),s=t&&"codedValues"in t&&t.codedValues?t.getName(r):null;return s?a=s:"number"==typeof r&&(a=n&&"date"===n.type?o.formatDate(r,i&&o.convertDateFormatToIntlOptions(c[i])):l.format(r)),a},r.getAttributes=function(e,r){var t=[];if("class-breaks"===e.type||"heatmap"===e.type)t.push(f(e,"number"));else if("unique-value"===e.type){var i=e.uniqueValueInfos[0],a=null;if(i&&i.value){var o=typeof e.uniqueValueInfos[0].value;"string"!==o&&"number"!==o||(a=o)}t.push(f(e,a)),[e.field2,e.field3].forEach((function(e){return e&&t.push(v(e))}))}else"dot-density"===e.type&&e.attributes.forEach((function(e){return t.push(f(e,"number"))}));var l=r?r(e):"visualVariables"in e?e.visualVariables:null;return l&&l.forEach((function(e){return t.push(f(e,"number"))})),n.unique(t.filter(Boolean),(function(e,r){return"field"===e.type&&"field"===r.type?e.field===r.field:"normalized-field"===e.type&&"normalized-field"===r.type?e.field===r.field&&e.normalizationField===r.normalizationField:"expression"===e.type&&"expression"===r.type&&e.expression===r.expression}))}}.apply(null,n))||(e.exports=i)},851:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(40),t(4),t(2),t(17)],void 0===(i=function(e,r,t,n,i,a,o,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.color=null,t.label=null,t.value=null,t}var a;return t(r,e),a=r,r.prototype.writeValue=function(e,r,t){r[t]=null==e?0:e},r.prototype.clone=function(){return new a({color:this.color&&this.color.clone(),label:this.label,value:this.value})},n([o.property({type:i,json:{type:[l.Integer],write:!0}})],r.prototype,"color",void 0),n([o.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),n([o.property({type:Number,json:{write:{allowNull:!0}}})],r.prototype,"value",void 0),n([o.writer("value")],r.prototype,"writeValue",null),a=n([o.subclass("esri.renderers.visualVariables.support.ColorStop")],r)}(o.declared(a.JSONSupport))}.apply(null,n))||(e.exports=i)},852:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(248)],void 0===(i=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=/^-?(\d+)(\.(\d+))?$/i;function i(e,r){return e-r}function a(e,r){var t,n;return(t=Number(e.toFixed(r)))<e?n=t+1/Math.pow(10,r):(n=t,t-=1/Math.pow(10,r)),[t=Number(t.toFixed(r)),n=Number(n.toFixed(r))]}function o(e,r,t,n,i){var a=s(e,r,t,n),o=null==a.previous||a.previous<=i,l=null==a.next||a.next<=i;return o&&l||a.previous+a.next<=2*i}function l(e){var r=String(e),t=r.match(n);if(t&&t[1])return{integer:t[1].split("").length,fractional:t[3]?t[3].split("").length:0};if(r.toLowerCase().indexOf("e")>-1){var i=r.split("e"),a=i[0],o=i[1];if(a&&o){var s=Number(a),u=Number(o),p=u>0;p||(u=Math.abs(u));var c=l(s);return p?(c.integer+=u,u>c.fractional?c.fractional=0:c.fractional-=u):(c.fractional+=u,u>c.integer?c.integer=1:c.integer-=u),c}}return{integer:0,fractional:0}}function s(e,r,t,n){var i,a={previous:null,next:null};if(null!=t){var o=r-t-(i=e-t);a.previous=Math.floor(Math.abs(100*o/i))}null!=n&&(o=n-r-(i=n-e),a.next=Math.floor(Math.abs(100*o/i)));return a}r.numDigits=l,r.percentChange=s,r.round=function(e,r){void 0===r&&(r={});var t=e.slice(0),n=r.tolerance,s=void 0===n?2:n,u=r.strictBounds,p=void 0!==u&&u,c=r.indexes,d=void 0===c?t.map((function(e,r){return r})):c;d.sort(i);for(var y=0;y<d.length;y++){var f=d[y],v=t[f],g=0===f?null:t[f-1],h=f===t.length-1?null:t[f+1],m=l(v).fractional;if(m){for(var b=0,w=!1,S=void 0;b<=m&&!w;){var I=a(v,b);w=o(v,S=p&&0===y?I[1]:I[0],g,h,s),b++}w&&(t[f]=S)}}return t};var u={maximumFractionDigits:20};r.format=function(e){return t.formatNumber(e,u)}}.apply(null,n))||(e.exports=i)},853:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(7),t(37),t(33),t(141),t(907),t(256)],void 0===(i=function(e,r,t,n,i,a,o,l){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,n){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||a.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},n))&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,value:!0,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:o,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0}}}},r.opacityDrawingInfo=t({},r.opacity,{json:t({},r.opacity.json,{origins:{"web-document":t({},r.opacity.json.origins["web-document"],{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?l.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:l.transparencyToOpacity(r.drawingInfo.transparency)}}})})}.apply(null,n))||(e.exports=i)},855:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(10),t(11),t(76),t(9),t(18),t(16),t(249),t(6),t(2),t(28),t(1312),t(871),t(251)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u,p,c,d,y,f,v,g){var h=new s.default({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});return function(e){function r(r){var t=e.call(this,r)||this;return t.type="bing-maps",t.tileInfo=new g({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:y.WebMercator},spatialReference:y.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),t.key=null,t.style="road",t.culture="en-US",t.region=null,t.portalUrl=null,t.hasAttributionData=!0,t}return t(r,e),Object.defineProperty(r.prototype,"bingMetadata",{get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"copyright",{get:function(){return u.isSome(this.bingMetadata)?this.bingMetadata.copyright:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bingLogo",{get:function(){return u.isSome(this.bingMetadata)?this.bingMetadata.brandLogoUri:null},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return r._getMetadata()}))):this.addResolvingPromise(c.reject(new l("bingmapslayer:load","Bing layer must have bing key."))),c.resolve(this)},r.prototype.getTileUrl=function(e,r,t){if(!this.loaded||u.isNone(this.bingMetadata))return null;var n=this.bingMetadata.resourceSets[0].resources[0],i=n.imageUrlSubdomains[r%n.imageUrlSubdomains.length],a=this._getQuadKey(e,r,t);return n.imageUrl.replace("{subdomain}",i).replace("{quadkey}",a)},r.prototype.fetchAttributionData=function(){return a(this,void 0,void 0,(function(){var e=this;return i(this,(function(r){return[2,this.load().then((function(){return u.isNone(e.bingMetadata)?null:{contributors:e.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}}))]}))}))},r.prototype._getMetadata=function(){var e=this,r={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return o("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+r,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(r){var t=r.data;if(200!==t.statusCode)throw new l("bingmapslayer:getmetadata",t.statusDescription);if(e.bingMetadata=t,0===e.bingMetadata.resourceSets.length)throw new l("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new l("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new l("bingmapslayer:getmetadata",e.message)}))},r.prototype._getPortalBingKey=function(){var e=this;return o(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(r){if(!r.data.bingKey)throw new l("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=r.data.bingKey})).catch((function(e){throw new l("bingmapslayer:getportalbingkey",e.message)}))},r.prototype._getQuadKey=function(e,r,t){for(var n="",i=e;i>0;i--){var a=0,o=1<<i-1;0!=(t&o)&&(a+=1),0!=(r&o)&&(a+=2),n+=a.toString()}return n},n([d.property({json:{read:!1,write:!1},value:null})],r.prototype,"bingMetadata",null),n([d.property({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],r.prototype,"type",void 0),n([d.property({type:g})],r.prototype,"tileInfo",void 0),n([d.property({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],r.prototype,"copyright",null),n([d.property({type:String,json:{write:!1,read:!1}})],r.prototype,"key",void 0),n([d.property({type:String,json:{write:{target:"layerType",writer:h.write},read:{source:"layerType",reader:h.read}}})],r.prototype,"style",void 0),n([d.property({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],readOnly:!0,json:{read:{source:"layerType"}}})],r.prototype,"operationalLayerType",void 0),n([d.property({type:String,json:{write:!1,read:!1}})],r.prototype,"culture",void 0),n([d.property({type:String,json:{write:!1,read:!1}})],r.prototype,"region",void 0),n([d.property({type:String,json:{write:!0,read:!0}})],r.prototype,"portalUrl",void 0),n([d.property({type:Boolean,json:{write:!1,read:!1}})],r.prototype,"hasAttributionData",void 0),n([d.property({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],r.prototype,"bingLogo",null),n([d.subclass("esri.layers.BingMapsLayer")],r)}(d.declared(v.OperationalLayer(p.MultiOriginJSONMixin(f))))}.apply(null,n))||(e.exports=i)},871:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(9),t(6),t(2),t(104),t(141),t(853)],void 0===(i=function(e,r,n,i,a,o,l,s,u,p){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return n(t,e),t.prototype.writeListMode=function(e,r,t,n){(n&&"ground"===n.layerContainerType||e&&u.willPropertyWrite(this,t,{},n))&&(r[t]=e)},t.prototype.writeTitle=function(e,r){r.title=e||"Layer"},t.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},t.prototype.read=function(e,r){var t=this,n=arguments;r&&(r.layer=this),s.readLoadable(this,e,(function(r){return t.inherited(n,[e,r])}),r)},t.prototype.write=function(e,t){if(t&&t.origin){var n=t.origin+"/"+(t.layerContainerType||"operational-layers"),i=r.supportedTypes[n],o=i&&i[this.operationalLayerType];if("write"!==o&&"readwrite"!==o)return t.messages&&t.messages.push(new a("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var l=this.inherited(arguments,[e,t]),s=!!t&&!!t.messages&&!!t.messages.filter((function(e){return e instanceof a&&"web-document-write:property-required"===e.name})).length;return!this.url&&s?null:l},i([l.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"id",void 0),i([l.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"listMode",void 0),i([l.writer("listMode")],t.prototype,"writeListMode",null),i([l.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"title",void 0),i([l.writer("title")],t.prototype,"writeTitle",null),i([l.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0}}})],t.prototype,"operationalLayerType",void 0),i([l.writer("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),i([l.property(p.opacity)],t.prototype,"opacity",void 0),i([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"},origins:{"web-document":{read:{source:"visibility"},write:{target:"visibility"},default:!0}}}})],t.prototype,"visible",void 0),i([l.subclass("esri.layers.mixins.OperationalLayer")],t)}(l.declared(e))},r.typeModuleMap={ArcGISFeatureLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(98)]).then(function(){var r=[t(919)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(3),t.e(7),t.e(11),t.e(63)]).then(function(){var r=[t(1026)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISImageServiceVectorLayer:function(){return o.resolve(null)},ArcGISMapServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(80)]).then(function(){var r=[t(1021)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISSceneServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(85)]).then(function(){var r=[t(1029)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISStreamLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(22)]).then(function(){var r=[t(1033)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledElevationServiceLayer:function(){return o.create((function(e){return t.e(14).then(function(){var r=[t(783)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledImageServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(28)]).then(function(){var r=[t(905)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ArcGISTiledMapServiceLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(28)]).then(function(){var r=[t(905)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsAerial:function(){return o.create((function(e){return t.e(17).then(function(){var r=[t(855)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsRoad:function(){return o.create((function(e){return t.e(17).then(function(){var r=[t(855)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BingMapsHybrid:function(){return o.create((function(e){return t.e(17).then(function(){var r=[t(855)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BuildingSceneLayer:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(20)]).then(function(){var r=[t(1030)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},CSV:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(87)]).then(function(){var r=[t(1024)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GeoRSS:function(){return o.create((function(e){return t.e(103).then(function(){var r=[t(1025)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GroupLayer:function(){return o.create((function(e){return t.e(112).then(function(){var r=[t(1022)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},IntegratedMeshLayer:function(){return o.create((function(e){return t.e(96).then(function(){var r=[t(1027)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},KML:function(){return o.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(27)]).then(function(){var r=[t(1031)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},OpenStreetMap:function(){return o.create((function(e){return t.e(97).then(function(){var r=[t(1028)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},PointCloudLayer:function(){return o.create((function(e){return t.e(21).then(function(){var r=[t(1032)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},VectorTileLayer:function(){return o.create((function(e){return Promise.all([t.e(15),t.e(25)]).then(function(){var r=[t(1034)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WebTiledLayer:function(){return o.create((function(e){return t.e(99).then(function(){var r=[t(1019)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WFS:function(){return o.resolve(null)},WMS:function(){return o.create((function(e){return t.e(30).then(function(){var r=[t(1035)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},RasterDataLayer:function(){return o.resolve(null)},RasterDataElevationLayer:function(){return o.resolve(null)}},r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",BuildingSceneLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",KML:"readwrite",RasterDataLayer:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite",RasterDataElevationLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",ArcGISFeatureLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WFS:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite"}}}.apply(null,n))||(e.exports=i)},907:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(10),t(11),t(18),t(4),t(16),t(2),t(909),t(910)],void 0===(i=function(e,r,t,n,i,a,o,l,s,u,p,c){var d=o.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),y=new o.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.offset=null,r}var i;return t(r,e),i=r,r.prototype.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},r.prototype.writeFeatureExpressionInfo=function(e,r,t,n){r[t]=e.write(null,n),"0"===e.expression&&(r.featureExpression={value:0})},Object.defineProperty(r.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):s.isSome(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),r.prototype.write=function(){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},r.prototype.clone=function(){return new i({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},n([u.property({type:p,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),n([u.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),n([u.writer("featureExpressionInfo",{featureExpressionInfo:{type:p},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),n([u.property({type:d.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:d.jsonValues,read:d.read,write:{writer:d.write,isRequired:!0}}})],r.prototype,"mode",null),n([u.property({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),n([u.property({type:c.supportedUnits,json:{type:String,read:y.read,write:y.write}})],r.prototype,"unit",null),i=n([u.subclass("esri.layers.support.ElevationInfo")],r)}(u.declared(l.JSONSupport))}.apply(null,n))||(e.exports=i)},909:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(10),t(11),t(4),t(2),t(140)],void 0===(i=function(e,r,t,n,i,a,o,l,s){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var o;return t(r,e),o=r,r.prototype.collectRequiredFields=function(e,r){return a(this,void 0,void 0,(function(){return i(this,(function(t){return[2,s.collectArcadeFieldNames(e,r,this.expression)]}))}))},r.prototype.clone=function(){return new o({expression:this.expression,title:this.title})},n([l.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),n([l.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),o=n([l.subclass("esri.layers.support.FeatureExpressionInfo")],r)}(l.declared(o.JSONSupport))}.apply(null,n))||(e.exports=i)},910:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(842)],void 0===(i=function(e,r,t){var n;Object.defineProperty(r,"__esModule",{value:!0}),r.supportsUnit=function(e){return null!=t.meterIn[e]},r.getMetersPerUnit=function(e){return 1/(t.meterIn[e]||1)},r.supportedUnits=((n=Object.keys(t.meterIn)).sort(),n)}.apply(null,n))||(e.exports=i)},913:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(2)],void 0===(i=function(e,r,t,n,i){Object.defineProperty(r,"__esModule",{value:!0}),r.ScaleRangeLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.minScale=0,r.maxScale=0,r}return t(r,e),Object.defineProperty(r.prototype,"scaleRangeId",{get:function(){return this.minScale+","+this.maxScale},enumerable:!0,configurable:!0}),n([i.property({type:Number,json:{write:!0}})],r.prototype,"minScale",void 0),n([i.property({type:Number,json:{write:!0}})],r.prototype,"maxScale",void 0),n([i.property({readOnly:!0,dependsOn:["minScale","maxScale"]})],r.prototype,"scaleRangeId",null),n([i.subclass("esri.layers.mixins.ScaleRangeLayer")],r)}(i.declared(e))}}.apply(null,n))||(e.exports=i)}}]);