(function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/layersCreator":177,"esri/portal/support/portalLayers":777,"esri/renderers/support/styleUtils":1097,"esri/layers/support/lazyLayerLoader":1137,"esri/portal/support/featureCollectionUtils":1485})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[16,118],{1097:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(10),t(11),t(166),t(6),t(107)],void 0===(a=function(e,r,t,n,a,i,o){Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=function(e,r,u){return n(this,void 0,void 0,(function(){var n,c,l;return t(this,(function(t){switch(t.label){case 0:return(n=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin))&&"unique-value"===n.type&&n.styleOrigin?[4,a.result(n.populateFromStyle())]:[3,2];case 1:c=t.sent(),i.throwIfAborted(u),!1===c.ok&&(l=c.error,r&&r.messages&&r.messages.push(new o("renderer:style-reference","Failed to create unique value renderer from style reference: "+l.message,{error:l,context:r})),e.clear("renderer",r.origin)),t.label=2;case 2:return[2]}}))}))}}.apply(null,n))||(e.exports=a)},1137:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(6)],void 0===(a=function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.layerLookupMap={BingMapsLayer:function(){return n.create((function(e){return t.e(81).then(function(){var r=[t(846)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},BuildingSceneLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(20),t.e(89)]).then(function(){var r=[t(1021)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},CSVLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(70)]).then(function(){var r=[t(1015)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ElevationLayer:function(){return n.create((function(e){return Promise.all([t.e(14),t.e(31)]).then(function(){var r=[t(774)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},FeatureLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(76)]).then(function(){var r=[t(910)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GroupLayer:function(){return n.create((function(e){return t.e(29).then(function(){var r=[t(1013)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},GeoRSSLayer:function(){return n.create((function(e){return t.e(82).then(function(){var r=[t(1016)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},ImageryLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(3),t.e(7),t.e(11),t.e(59)]).then(function(){var r=[t(1017)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},IntegratedMeshLayer:function(){return n.create((function(e){return t.e(74).then(function(){var r=[t(1018)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},KMLLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(27),t.e(90)]).then(function(){var r=[t(1022)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},MapImageLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(65)]).then(function(){var r=[t(1012)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},MapNotesLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(72)]).then(function(){var r=[t(1240)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},OpenStreetMapLayer:function(){return n.create((function(e){return t.e(75).then(function(){var r=[t(1019)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},PointCloudLayer:function(){return n.create((function(e){return Promise.all([t.e(21),t.e(91)]).then(function(){var r=[t(1023)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},RouteLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(73)]).then(function(){var r=[t(1242)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},SceneLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(6),t.e(67)]).then(function(){var r=[t(1020)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},StreamLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(22),t.e(92)]).then(function(){var r=[t(1024)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},TileImageryLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(3),t.e(11),t.e(62)]).then(function(){var r=[t(1243)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},TileLayer:function(){return n.create((function(e){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(9),t.e(68)]).then(function(){var r=[t(896)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},UnknownLayer:function(){return n.create((function(e){return t.e(113).then(function(){var r=[t(1246)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},UnsupportedLayer:function(){return n.create((function(e){return t.e(114).then(function(){var r=[t(1247)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},VectorTileLayer:function(){return n.create((function(e){return Promise.all([t.e(15),t.e(25),t.e(93)]).then(function(){var r=[t(1025)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WebTileLayer:function(){return n.create((function(e){return t.e(77).then(function(){var r=[t(1010)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WMSLayer:function(){return n.create((function(e){return Promise.all([t.e(30),t.e(94)]).then(function(){var r=[t(1026)];e.apply(null,r)}.bind(this)).catch(t.oe)}))},WMTSLayer:function(){return n.create((function(e){return t.e(69).then(function(){var r=[t(1248)];e.apply(null,r)}.bind(this)).catch(t.oe)}))}}}.apply(null,n))||(e.exports=a)},1485:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(10),t(11),t(78),t(283)],void 0===(a=function(e,r,t,n,a,i){function o(e,r,o,u){return n(this,void 0,void 0,(function(){var n;return t(this,(function(t){switch(t.label){case 0:return e.layerType&&"ArcGISFeatureLayer"===e.layerType?e.url?[2,!1]:e.featureCollectionType&&e.featureCollectionType===o?[2,!0]:e.itemId?[4,(n=new a({id:e.itemId,portal:r})).load()]:[3,2]:[2,!1];case 1:return t.sent(),[2,"Feature Collection"===n.type&&i.hasTypeKeyword(n,u)];case 2:return[2,!1]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.isMapNotesLayer=function(e,r){return o(e,r,"notes","Map Notes")},r.isRouteLayer=function(e,r){return o(e,r,"route","Route Layer")}}.apply(null,n))||(e.exports=a)},177:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(10),t(11),t(15),t(13),t(6),t(1137),t(78),t(1485),t(777),t(1097)],void 0===(a=function(e,r,t,n,a,i,o,u,c,l,s,y){Object.defineProperty(r,"__esModule",{value:!0});var p=i("dojo-debug-messages"),L={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},f={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},h={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},v={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function S(e,r,a){return n(this,void 0,void 0,(function(){var n;return t(this,(function(t){switch(t.label){case 0:return(n=new e).read(r,a.context),"group"===n.type&&g(r)?[4,b(n,r,a.context)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[4,y.loadStyleRenderer(n,a.context)];case 3:return t.sent(),[2,n]}}))}))}function m(e,r){return n(this,void 0,void 0,(function(){return t(this,(function(t){switch(t.label){case 0:return[4,M(e,r)];case 1:return[2,S(t.sent(),e,r)]}}))}))}function M(e,r){return n(this,void 0,void 0,(function(){var n,a,i,o,y,p,S,m,M;return t(this,(function(t){switch(t.label){case 0:return n=r.context,a=function(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=d;break;case"ground":r=f;break;default:r=L}break;default:switch(e.layerContainerType){case"basemap":r=v;break;default:r=h}}return r}(n),!(i=e.layerType||e.type)&&r&&r.defaultLayerType&&(i=r.defaultLayerType),o=a[i],y=o?u.layerLookupMap[o]:u.layerLookupMap.UnknownLayer,p=n&&n.portal,I(e)?e.itemId?[4,(S=new c({id:e.itemId,portal:p})).load()]:[3,3]:[3,4];case 1:return t.sent(),[4,s.selectLayerClassPath(S)];case 2:m=t.sent(),M=m.className||"UnknownLayer",y=u.layerLookupMap[M],t.label=3;case 3:return[3,8];case 4:return"ArcGISFeatureLayer"!==i?[3,8]:[4,l.isMapNotesLayer(e,p)];case 5:return t.sent()?(y=u.layerLookupMap.MapNotesLayer,[3,8]):[3,6];case 6:return[4,l.isRouteLayer(e,p)];case 7:t.sent()?y=u.layerLookupMap.RouteLayer:g(e)&&(y=u.layerLookupMap.GroupLayer),t.label=8;case 8:return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(y=u.layerLookupMap.WMTSLayer),[2,y()]}}))}))}function g(e){if("ArcGISFeatureLayer"!==e.layerType||I(e))return!1;var r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function I(e){return"Feature Collection"===e.type}function T(e,r,i){return n(this,void 0,void 0,(function(){var n,o,u;return t(this,(function(t){switch(t.label){case 0:return n=new a,o=w(n,Array.isArray(r.layers)?r.layers:[],i),[4,e];case 1:return u=t.sent(),[4,o];case 2:return t.sent(),"group"===u.type?(u.layers.addMany(n),[2,u]):[2,void 0]}}))}))}function b(e,r,a){return n(this,void 0,void 0,(function(){var n,i,o,c;return t(this,(function(t){switch(t.label){case 0:return[4,(0,u.layerLookupMap.FeatureLayer)()];case 1:return n=t.sent(),i=r.featureCollection,o=i.showLegend,c=i.layers.map((function(e){var r=new n;return r.read(e,a),null!=o&&r.read({showLegend:o},a),r})),e.layers.addMany(c),[2]}}))}))}function w(e,r,a){return n(this,void 0,void 0,(function(){var n,i,u,c,l,s,y,L,f;return t(this,(function(t){switch(t.label){case 0:if(!r)return[2];for(n=[],i=0,u=r;i<u.length;i++)c=u[i],l=m(c,a),"GroupLayer"===c.layerType?n.push(T(l,c,a)):n.push(l);return[4,o.eachAlways(n)];case 1:for(s=t.sent(),y=0,L=s;y<L.length;y++)f=L[y],p&&f.error?console.error(f.error.toString?f.error.toString():f.error):!f.value||a.filter&&!a.filter(f.value)||e.add(f.value);return[2]}}))}))}r.createLayer=m,r.populateOperationalLayers=function(e,r,a){return n(this,void 0,void 0,(function(){return t(this,(function(t){return[2,w(e,r,a)]}))}))}}.apply(null,n))||(e.exports=a)},777:function(e,r,t){var n,a;n=[t.dj.c(e.i),r,t(7),t(10),t(11),t(76),t(15),t(9),t(6),t(1137),t(78),t(283)],void 0===(a=function(e,r,t,n,a,i,o,u,c,l,s,y){function p(e){switch(e.type){case"Map Service":return function(e){return f(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}))}(e);case"Feature Service":return function(e){return d(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return a(this,void 0,void 0,(function(){var r;return n(this,(function(t){switch(t.label){case 0:return[4,e.load()];case 1:return t.sent(),y.hasTypeKeyword(e,"Map Notes")?[2,{className:"MapNotesLayer"}]:y.hasTypeKeyword(e,"Route Layer")?[2,{className:"RouteLayer"}]:[4,e.fetchData()];case 2:return(r=t.sent())&&Array.isArray(r.layers)&&1===r.layers.length?[2,{className:"FeatureLayer"}]:[2,{className:"GroupLayer"}]}}))}))}(e);case"Scene Service":return function(e){return d(e).then((function(r){if("object"==typeof r){var t={},n=void 0;if(null!=r.id?(t.layerId=r.id,n=e.url+"/layers/"+r.id):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},i=0,o=Object.keys(a);i<o.length;i++){var u=o[i];if(-1!==e.typeKeywords.indexOf(u))return{className:a[u]}}return h(n).then((function(e){var r="SceneLayer",n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&n[e.layerType]&&(r=n[e.layerType]),{className:r,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return f(e).then((function(r){var t=new o(e.typeKeywords);return r?t.find((function(e){return"elevation 3d layer"===e.toLowerCase()}))?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}}))}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return c.reject(new u("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function L(e){return(0,l.layerLookupMap[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function f(e){return h(e.url).then((function(e){return e.tileInfo}))}function d(e){return!e.url||e.url.match(/\/\d+$/)?c.resolve({}):e.load().then((function(){return e.fetchData()})).then((function(r){return r&&Array.isArray(r.layers)?1===r.layers.length&&{id:r.layers[0].id}:h(e.url).then((function(e){return e&&Array.isArray(e.layers)?1===e.layers.length&&{id:e.layers[0].id}:{}}))}))}function h(e){return i(e,{responseType:"json",query:{f:"json"}}).then((function(e){return e.data}))}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=function(e){return!e.portalItem||e.portalItem instanceof s||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=t({},e,{portalItem:new s(e.portalItem)})),(r=e.portalItem,r.load().then(p).then(L)).then((function(r){var n=t({portalItem:e.portalItem},r.properties),a=r.constructor;return c.resolve(new a(n))}));var r},r.selectLayerClassPath=p}.apply(null,n))||(e.exports=a)}}]);