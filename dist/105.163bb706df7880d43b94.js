(function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/layersLoader":1038,"esri/renderers/support/styleUtils":1091,"esri/layers/support/lazyLayerLoader":1131,"esri/portal/support/jsonContext":1309})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1038:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(10),r(11),r(76),r(9),r(6),r(1131),r(63),r(1309),r(1091)],void 0===(a=function(e,n,r,t,a,i,o,u,l,c,s){function p(e,n){return t(this,void 0,void 0,(function(){var t,a,i,o,u,l;return r(this,(function(r){switch(r.label){case 0:return t=e.instance,a=t.portalItem,i=a.url,o=a.title,u=c.createForItem(a),"group"===t.type?(t.read({title:o},u),[2,f(t,e)]):(i&&t.read({url:i},u),[4,d(e,n)]);case 1:return(l=r.sent())&&t.read(l,u),t.read({title:o},u),[2,s.loadStyleRenderer(t,u)]}}))}))}function f(e,n){var r,t,l=e.portalItem.type;switch(l){case"Feature Service":r=u.layerLookupMap.FeatureLayer;break;case"Stream Service":r=u.layerLookupMap.StreamLayer;break;case"Scene Service":r=u.layerLookupMap.SceneLayer;break;case"Feature Collection":r=u.layerLookupMap.FeatureLayer;break;default:throw new i("portal:unsupported-item-type-as-group","The item type '"+l+"' is not supported as a 'GroupLayer'")}return r().then((function(e){return t=e,d(n)})).then((function(n){return n&&Array.isArray(n.layers)?y(e,t,n):function(e,n){return e.portalItem.url?a(e.portalItem.url,{responseType:"json",query:{f:"json"}}).then((function(r){var t=r.data;if(t&&Array.isArray(t.layers)){var a=t.layers.map((function(e){return{id:e.id,name:e.name}}));return y(e,n,{layers:a})}})):o.resolve()}(e,t)}))}function y(e,n,r){var t=r.showLegend,a=r.layers.slice();a.reverse(),a.forEach((function(r){var a=new n({portalItem:e.portalItem,layerId:r.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var i={origin:"portal-item",portal:e.portalItem.portal||l.getDefault()};a.read(r,i),null!=t&&a.read({showLegend:t},i)}e.add(a)}))}function d(e,n){if(!1===e.supportsData)return o.resolve();var r=e.instance;return r.portalItem.fetchData("json",n).catch((function(){return null})).then((function(e){var n,t=e;if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){var a=!0;if(e&&Array.isArray(t.layers)){null==r.layerId&&(r.layerId=t.layers[0].id);for(var i=0;i<t.layers.length;i++)if(t.layers[i].id===r.layerId){n=t.layers[i];break}n&&(1===t.layers.length&&(a=!1),null!=e.showLegend&&(n.showLegend=e.showLegend))}return a&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),n}return e}))}Object.defineProperty(n,"__esModule",{value:!0}),n.load=function(e,n){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return(t=e.instance.portalItem)&&t.id?[4,t.load(n)]:[2,o.resolve()];case 1:return r.sent(),function(e){var n=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(n.type))throw new i("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:n.type,expectedType:e.supportedTypes.join(", ")})}(e),[2,p(e,n)]}}))}))}}.apply(null,t))||(e.exports=a)},1091:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(10),r(11),r(166),r(6),r(107)],void 0===(a=function(e,n,r,t,a,i,o){Object.defineProperty(n,"__esModule",{value:!0}),n.loadStyleRenderer=function(e,n,u){return t(this,void 0,void 0,(function(){var t,l,c;return r(this,(function(r){switch(r.label){case 0:return(t=e&&e.getAtOrigin&&e.getAtOrigin("renderer",n.origin))&&"unique-value"===t.type&&t.styleOrigin?[4,a.result(t.populateFromStyle())]:[3,2];case 1:l=r.sent(),i.throwIfAborted(u),!1===l.ok&&(c=l.error,n&&n.messages&&n.messages.push(new o("renderer:style-reference","Failed to create unique value renderer from style reference: "+c.message,{error:c,context:n})),e.clear("renderer",n.origin)),r.label=2;case 2:return[2]}}))}))}}.apply(null,t))||(e.exports=a)},1131:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(6)],void 0===(a=function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.layerLookupMap={BingMapsLayer:function(){return t.create((function(e){return r.e(81).then(function(){var n=[r(840)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},BuildingSceneLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(20),r.e(89)]).then(function(){var n=[r(1015)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},CSVLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(6),r.e(70)]).then(function(){var n=[r(1009)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},ElevationLayer:function(){return t.create((function(e){return Promise.all([r.e(14),r.e(31)]).then(function(){var n=[r(768)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},FeatureLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(6),r.e(76)]).then(function(){var n=[r(904)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},GroupLayer:function(){return t.create((function(e){return r.e(29).then(function(){var n=[r(1007)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},GeoRSSLayer:function(){return t.create((function(e){return r.e(82).then(function(){var n=[r(1010)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},ImageryLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(3),r.e(7),r.e(11),r.e(59)]).then(function(){var n=[r(1011)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},IntegratedMeshLayer:function(){return t.create((function(e){return r.e(74).then(function(){var n=[r(1012)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},KMLLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(27),r.e(90)]).then(function(){var n=[r(1016)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},MapImageLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(9),r.e(65)]).then(function(){var n=[r(1006)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},MapNotesLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(6),r.e(72)]).then(function(){var n=[r(1234)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},OpenStreetMapLayer:function(){return t.create((function(e){return r.e(75).then(function(){var n=[r(1013)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},PointCloudLayer:function(){return t.create((function(e){return Promise.all([r.e(21),r.e(91)]).then(function(){var n=[r(1017)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},RouteLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(6),r.e(73)]).then(function(){var n=[r(1236)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},SceneLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(6),r.e(67)]).then(function(){var n=[r(1014)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},StreamLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(22),r.e(92)]).then(function(){var n=[r(1018)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},TileImageryLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(3),r.e(11),r.e(62)]).then(function(){var n=[r(1237)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},TileLayer:function(){return t.create((function(e){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(9),r.e(68)]).then(function(){var n=[r(890)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},UnknownLayer:function(){return t.create((function(e){return r.e(113).then(function(){var n=[r(1240)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},UnsupportedLayer:function(){return t.create((function(e){return r.e(114).then(function(){var n=[r(1241)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},VectorTileLayer:function(){return t.create((function(e){return Promise.all([r.e(15),r.e(25),r.e(93)]).then(function(){var n=[r(1019)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},WebTileLayer:function(){return t.create((function(e){return r.e(77).then(function(){var n=[r(1004)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},WMSLayer:function(){return t.create((function(e){return Promise.all([r.e(30),r.e(94)]).then(function(){var n=[r(1020)];e.apply(null,n)}.bind(this)).catch(r.oe)}))},WMTSLayer:function(){return t.create((function(e){return r.e(69).then(function(){var n=[r(1242)];e.apply(null,n)}.bind(this)).catch(r.oe)}))}}}.apply(null,t))||(e.exports=a)},1309:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(36),r(63)],void 0===(a=function(e,n,r,t){Object.defineProperty(n,"__esModule",{value:!0}),n.createForItem=function(e){return{origin:"portal-item",url:r.urlToObject(e.itemUrl),portal:e.portal||t.getDefault()}}}.apply(null,t))||(e.exports=a)}}]);