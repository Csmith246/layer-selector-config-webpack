(function(){(this||window).webpackJsonp.registerAbsMids({"esri/tasks/ServiceAreaTask":787,"esri/geometry/support/normalizeUtils":899,"esri/tasks/geometry/cut":1008,"esri/tasks/geometry/simplify":1009,"esri/tasks/Task":1049,"esri/tasks/support/GPMessage":1174,"esri/core/queryUtils":1214,"esri/tasks/mixins/NAServiceDescription":1215,"esri/tasks/support/NAMessage":1216,"esri/tasks/support/ServiceAreaSolveResult":1522})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1008:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(7),t(11),t(10),t(32),t(76),t(37),t(36)],void 0===(i=function(e,r,t,n,i,o,s,a,u){Object.defineProperty(r,"__esModule",{value:!0}),r.cut=function(e,r,l,p){return n(this,void 0,void 0,(function(){var n,c,f,y,d,v,h;return i(this,(function(i){switch(i.label){case 0:return n="string"==typeof e?a.urlToObject(e):e,c=r[0].spatialReference,f=t({},p,{query:t({},n.query,{f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:u.getJsonType(r[0]),geometries:r}),cutter:JSON.stringify(l)})}),[4,s(n.path+"/cut",f)];case 1:return y=i.sent(),d=y.data,v=d.cutIndexes,h=d.geometries,[2,{cutIndexes:v,geometries:(void 0===h?[]:h).map((function(e){return o.fromJSON(e).set(c)}))}]}}))}))}}.apply(null,n))||(e.exports=i)},1009:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(7),t(11),t(10),t(76),t(37),t(36)],void 0===(i=function(e,r,t,n,i,o,s,a){function u(e){return{geometryType:a.getJsonType(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function l(e,r,t){var n=a.getGeometryType(r);return e.map((function(e){var r=n.fromJSON(e);return r.spatialReference=t,r}))}Object.defineProperty(r,"__esModule",{value:!0}),r.simplify=function(e,r,p){return n(this,void 0,void 0,(function(){var n,c,f,y;return i(this,(function(i){switch(i.label){case 0:return n="string"==typeof e?s.urlToObject(e):e,c=r[0].spatialReference,f=a.getJsonType(r[0]),y=t({},p,{query:t({},n.query,{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c),geometries:JSON.stringify(u(r))})}),[4,o(n.path+"/simplify",y)];case 1:return[2,l(i.sent().data,f,c)]}}))}))}}.apply(null,n))||(e.exports=i)},1049:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(103),t(7),t(8),t(37),t(2)],void 0===(i=function(e,r,t,n,i,o,s,a,u){return function(e){function r(r){var t=e.call(this,r)||this;return t.requestOptions=null,t.url=null,t}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"!=typeof e?e:o({url:e},r)},Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this._parseUrl(this.url)},enumerable:!0,configurable:!0}),r.prototype._parseUrl=function(e){return e?a.urlToObject(e):null},r.prototype._encode=function(e,r,t){var n={};for(var i in e)if("declaredClass"!==i){var o=e[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){n[i]=[];for(var s=0;s<o.length;s++)n[i][s]=this._encode(o[s])}else if("object"==typeof o)if(o.toJSON){var a=o.toJSON(t&&t[i]);n[i]=r?a:JSON.stringify(a)}else n[i]=r?o:JSON.stringify(o);else n[i]=o}return n},n([u.property({readOnly:!0,dependsOn:["url"]})],r.prototype,"parsedUrl",null),n([u.property()],r.prototype,"requestOptions",void 0),n([u.property({type:String})],r.prototype,"url",void 0),n([u.subclass("esri.tasks.Task")],r)}(u.declared(s))}.apply(null,n))||(e.exports=i)},1174:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(18),t(4),t(2)],void 0===(i=function(e,r,t,n,i,o,s){var a=new i.default({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return function(e){function r(r){var t=e.call(this,r)||this;return t.description=null,t.type=null,t}return t(r,e),n([s.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),n([s.property({type:String,json:{read:a.read,write:a.write}})],r.prototype,"type",void 0),n([s.subclass("esri.tasks.support.GPMessage")],r)}(s.declared(o.JSONSupport))}.apply(null,n))||(e.exports=i)},1214:function(e,r,t){var n,i;n=[t.dj.c(e.i),r],void 0===(i=function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e){void 0===e&&(e={}),this._options=e}return e.prototype.toQueryParams=function(e){var r=this;if(!e)return null;var t=e.toJSON(),n={};return Object.keys(t).forEach((function(e){var i=r._options[e];if(i){var o="boolean"!=typeof i&&i.name?i.name:e,s="boolean"!=typeof i&&i.getter?i.getter(t):t[e];null!=s&&(n[o]=function(e){if(!Array.isArray(e))return!1;var r=e[0];return"number"==typeof r||"string"==typeof r}(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else n[e]=t[e]}),this),n},e}();r.createQueryParamsHelper=function(e){return new t(e)}}.apply(null,n))||(e.exports=i)},1215:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(0),t(1),t(10),t(11),t(76),t(9),t(16),t(34),t(37),t(2),t(1049)],void 0===(i=function(e,r,t,n,i,o,s,a,u,l,p,c,f){Object.defineProperty(r,"__esModule",{value:!0}),r.NAServiceDescriptionMixin=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.getServiceDescription=function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),[2,this._serviceDescriptionPromise]}))}))},r.prototype._fetchServiceDescription=function(){return o(this,void 0,void 0,(function(){var e,r,t,n,u,c;return i(this,(function(f){switch(f.label){case 0:if(!this.url||!this.parsedUrl)throw new a("network-service:missing-url","Url to Network service is missing");return e=this.url,[4,s(e,{query:{f:"json"}})];case 1:for((r=f.sent().data).supportedTravelModes||(r.supportedTravelModes=[]),t=0;t<r.supportedTravelModes.length;t++)r.supportedTravelModes[t].id||(r.supportedTravelModes[t].id=r.supportedTravelModes[t].itemId);return[4,r.currentVersion>=10.4?function(e){return o(this,void 0,void 0,(function(){var r,t,n,o;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,s(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}})];case 1:return r=i.sent().data,t=r.supportedTravelModes,n=r.defaultTravelMode,[2,{supportedTravelModes:t,defaultTravelMode:n}];case 2:throw o=i.sent(),new a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:o});case 3:return[2]}}))}))}(e):function(e){return o(this,void 0,void 0,(function(){var r,t,n,o,a,u,c,f,y,d,v,h,g,m,b,M;return i(this,(function(i){switch(i.label){case 0:return[4,s(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}})];case 1:return(r=i.sent().data)&&r.owningSystemUrl?(e=r.owningSystemUrl,[4,s(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 2:return t=i.sent().data,(n=l.getDeepValue("helperServices.routingUtilities.url",t))?(o=p.urlToObject(e),a=/\/solveClosestFacility$/.test(o.path)?"Route":/\/solveClosestFacility$/.test(o.path)?"ClosestFacility":"ServiceAreas",[4,s(n+("/"===n[n.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:a}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 3:if(u=i.sent(),c=[],f=null,u&&u.data&&u.data.results&&u.data.results.length)for(y=u.data.results,d=0,v=y;d<v.length;d++)if("supportedTravelModes"===(h=v[d]).paramName){if(h.value&&h.value.features)for(g=0,m=h.value.features;g<m.length;g++)(b=m[g].attributes)&&(M=JSON.parse(b.TravelMode),c.push(M))}else"defaultTravelMode"===h.paramName&&(f=h.value);return[2,{supportedTravelModes:c,defaultTravelMode:f}]}}))}))}(e)];case 2:return n=f.sent(),u=n.defaultTravelMode,c=n.supportedTravelModes,r.defaultTravelMode=u,r.supportedTravelModes=c,[2,r]}}))}))},r.prototype._isInputGeometryZAware=function(e,r){for(var t=0;t<r.length;t++){var n=e[r[t]];if(n&&n.length)for(var i=0,o=n;i<o.length;i++){var s=o[i];if(u.isSome(s)&&s.hasZ)return!0}}return!1},r.prototype._dropZValuesOffInputGeometry=function(e,r){for(var t=0;t<r.length;t++){var n=e[r[t]];if(n&&n.length)for(var i=0,o=n;i<o.length;i++)o[i].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")},t([c.subclass("esri.tasks.mixins.NAServiceDescription")],r)}(c.declared(e))};var y=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),t([c.subclass("esri.tasks.mixins.NAServiceDescription")],r)}(c.declared(r.NAServiceDescriptionMixin(f)));r.NAServiceDescription=y}.apply(null,n))||(e.exports=i)},1216:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(18),t(2),t(1174)],void 0===(i=function(e,r,t,n,i,o,s){var a=new i.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function r(r){var t=e.call(this,r)||this;return t.type=null,t}return t(r,e),n([o.property({type:String,json:{read:a.read,write:a.write}})],r.prototype,"type",void 0),n([o.subclass("esri.tasks.support.NAMessage")],r)}(o.declared(s))}.apply(null,n))||(e.exports=i)},1522:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(1),t(0),t(32),t(242),t(4),t(16),t(2),t(28),t(1216)],void 0===(i=function(e,r,t,n,i,o,s,a,u,l,p){function c(e){return e.features.map((function(r){var t=l.fromJSON(e.spatialReference),n=o.fromJSON(r);return a.expect(n.geometry).spatialReference=t,n}))}function f(e){return e.features.map((function(r){return r.geometry.spatialReference=e.spatialReference,i.fromJSON(r.geometry)}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.facilities=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.serviceAreaPolylines=null,t.serviceAreaPolygons=null,t}return t(r,e),r.prototype.readFacilities=function(e){return f(e)},r.prototype.readPointBarriers=function(e,r){return f(r.barriers)},r.prototype.readPolylineBarriers=function(e){return f(e)},r.prototype.readPolygonBarriers=function(e){return f(e)},r.prototype.readIncidents=function(e,r){return c(r.saPolylines)},r.prototype.readServiceAreaPolygons=function(e,r){return c(r.saPolygons)},n([u.property({type:[i.Point]})],r.prototype,"facilities",void 0),n([u.reader("facilities")],r.prototype,"readFacilities",null),n([u.property({type:[p]})],r.prototype,"messages",void 0),n([u.property({type:[i.Point]})],r.prototype,"pointBarriers",void 0),n([u.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),n([u.property({type:[i.Polyline]})],r.prototype,"polylineBarriers",void 0),n([u.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),n([u.property({type:[i.Polygon]})],r.prototype,"polygonBarriers",void 0),n([u.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),n([u.property({type:[o]})],r.prototype,"serviceAreaPolylines",void 0),n([u.reader("serviceAreaPolylines",["saPolylines"])],r.prototype,"readIncidents",null),n([u.property({type:[o]})],r.prototype,"serviceAreaPolygons",void 0),n([u.reader("serviceAreaPolygons",["saPolygons"])],r.prototype,"readServiceAreaPolygons",null),n([u.subclass("esri.tasks.support.ServiceAreaSolveResult")],r)}(u.declared(s.JSONSupport))}.apply(null,n))||(e.exports=i)},787:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(7),t(1),t(0),t(76),t(6),t(1214),t(2),t(899),t(1049),t(1215),t(1522)],void 0===(i=function(e,r,t,n,i,o,s,a,u,l,p,c,f){var y=a.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return n(r,e),r.prototype.solve=function(e,r){var n=this,i=[],a=[],u={},p={};return e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,a,"facilities.features",u),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",u),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",u),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",u),l.normalizeCentralMeridian(a).then((function(e){for(var r in u){var t=u[r];i.push(r),p[r]=e.slice(t[0],t[1])}return n._isInputGeometryZAware(p,i)?n.getServiceDescription():s.resolve({dontCheck:!0})})).then((function(s){("dontCheck"in s?s.dontCheck:s.hasZ)||n._dropZValuesOffInputGeometry(p,i);var a=function(r){p[r].forEach((function(t,n){e.get(r)[n].geometry=t}))};for(var u in p)a(u);var l={query:t({},n.parsedUrl.query,{f:"json"},y.toQueryParams(e))};return(n.requestOptions||r)&&(l=t({},n.requestOptions,r,l)),o(n.parsedUrl.path+"/solveServiceArea",l)})).then((function(e){return f.fromJSON(e.data)}))},r.prototype._collectGeometries=function(e,r,t,n){n[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},i([u.property()],r.prototype,"url",void 0),i([u.subclass("esri.tasks.ServiceAreaTask")],r)}(u.declared(c.NAServiceDescriptionMixin(p)))}.apply(null,n))||(e.exports=i)},899:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(10),t(11),t(45),t(9),t(5),t(16),t(6),t(146),t(148),t(28),t(38),t(31),t(1008),t(1009)],void 0===(i=function(e,r,t,n,i,o,s,a,u,l,p,c,f,y,d,v){Object.defineProperty(r,"__esModule",{value:!0});var h=s.getLogger("esri.geometry.support.normalizeUtils"),g={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new p({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:c.WebMercator}),minus180Line:new p({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:c.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new p({paths:[[[180,-180],[180,180]]],spatialReference:c.WGS84}),minus180Line:new p({paths:[[[-180,-180],[-180,180]]],spatialReference:c.WGS84})}};function m(e){return"polygon"===e.type}function b(e){return m(e)?e.rings:e.paths}function M(e,r){return Math.ceil((e-r)/(2*r))}function S(e,r){for(var t=0,n=b(e);t<n.length;t++)for(var i=0,o=n[t];i<o.length;i++)o[i][0]+=r;return e}function w(e){for(var r=[],t=0,n=0,i=0;i<e.length;i++){for(var o=e[i],s=null,a=0;a<o.length;a++)s=o[a],r.push(s),0===a?n=t=s[0]:(t=Math.min(t,s[0]),n=Math.max(n,s[0]));s&&r.push([(t+n)/2,0])}return r}function x(e,r){if(!(e instanceof p||e instanceof l)){var t="straightLineDensify: the input geometry is neither polyline nor polygon";throw h.error(t),new o(t)}for(var n=[],i=0,s=b(e);i<s.length;i++){var a=s[i],u=[];n.push(u),u.push([a[0][0],a[0][1]]);for(var c=0;c<a.length-1;c++){var f=a[c][0],y=a[c][1],d=a[c+1][0],v=a[c+1][1],g=Math.sqrt((d-f)*(d-f)+(v-y)*(v-y)),M=(v-y)/g,S=(d-f)/g,w=g/r;if(w>1){for(var x=1;x<=w-1;x++){var T=x*r,P=S*T+f,A=M*T+y;u.push([P,A])}var O=(g+Math.floor(w-1)*r)/2,N=S*O+f,k=M*O+y;u.push([N,k])}u.push([d,v])}}return m(e)?new l({rings:n,spatialReference:e.spatialReference}):new p({paths:n,spatialReference:e.spatialReference})}function T(e,r,t){if(r){var n=x(e,1e6);e=y.webMercatorToGeographic(n,!0)}return t&&(e=S(e,t)),e}function P(e,r,t){var n;if(Array.isArray(e))if((n=e[0])>r){var i=M(n,r);e[0]=n+i*(-2*r)}else n<t&&(i=M(n,t),e[0]=n+i*(-2*t));else(n=e.x)>r?(i=M(n,r),e=e.clone().offset(i*(-2*r),0)):n<t&&(i=M(n,t),e=e.clone().offset(i*(-2*t),0));return e}r.straightLineDensify=x,r.normalizeCentralMeridian=function e(r,o,s){return n(this,void 0,void 0,(function(){var n,c,h,m,w,x,A,O,N,k,j,J,B,_,R,D,q,G,I,U,C,z,L,W,Z,X,E,F,V,Q,H,$,K,Y,ee,re,te;return t(this,(function(t){switch(t.label){case 0:if(!Array.isArray(r))return[2,e([r],o)];for(n=o?o.url:i.geometryServiceUrl,k=0,j=[],J=[],B=0,_=r;B<_.length;B++)R=_[B],a.isNone(R)?J.push(R):(c||(c=R.spatialReference,h=f.getInfo(c),m=c.isWebMercator,w=g[A=m?102100:4326].maxX,x=g[A].minX,O=g[A].plus180Line,N=g[A].minus180Line),h?"mesh"===R.type?J.push(R):"point"===R.type?J.push(P(R.clone(),w,x)):"multipoint"===R.type?((D=R.clone()).points=D.points.map((function(e){return P(e,w,x)})),J.push(D)):"extent"===R.type?(G=R.clone(),q=G._normalize(!1,!1,h),J.push(q.rings?new l(q):q)):R.extent?(G=R.extent,I=M(G.xmin,x),C=0==(U=I*(2*w))?R.clone():S(R.clone(),U),G.offset(U,0),G.intersects(O)&&G.xmax!==w?(k=G.xmax>k?G.xmax:k,C=T(C,m),j.push(C),J.push("cut")):G.intersects(N)&&G.xmin!==x?(k=G.xmax*(2*w)>k?G.xmax*(2*w):k,C=T(C,m,360),j.push(C),J.push("cut")):J.push(C)):J.push(R.clone()):J.push(R));for(z=M(k,w),L=-90,W=z,Z=new p;z>0;)X=360*z-180,Z.addPath([[X,L],[X,-1*L]]),L*=-1,z--;return j.length>0&&W>0?[4,d.cut(n,j,Z,s)]:[3,3];case 1:for(E=t.sent(),F=function(e,r){for(var t=-1,n=function(n){for(var i=r.cutIndexes[n],o=r.geometries[n],s=b(o),a=function(e){var r=s[e];r.some((function(t){if(t[0]<180)return!0;for(var n=0,i=0;i<r.length;i++){var s=r[i][0];n=s>n?s:n}for(var a=-360*M(n=Number(n.toFixed(9)),180),u=0;u<r.length;u++){var l=o.getPoint(e,u);o.setPoint(e,u,l.clone().offset(a,0))}return!0}))},u=0;u<s.length;u++)a(u);if(i===t){if("polygon"===e[0].type)for(var l=0,p=b(o);l<p.length;l++){var c=p[l];e[i]=e[i].addRing(c)}else if(function(e){return"polyline"===e[0].type}(e))for(var f=0,y=b(o);f<y.length;f++){var d=y[f];e[i]=e[i].addPath(d)}}else t=i,e[i]=o},i=0;i<r.cutIndexes.length;i++)n(i);return e}(j,E),V=[],Q=[],ee=0;ee<J.length;ee++)"cut"!==(re=J[ee])?Q.push(re):(te=F.shift(),H=r[ee],a.isSome(H)&&"polygon"===H.type&&H.rings&&H.rings.length>1&&te.rings.length>=H.rings.length?(V.push(te),Q.push("simplify")):Q.push(m?y.geographicToWebMercator(te):te));return V.length?[4,v.simplify(n,V,s)]:[2,Q];case 2:for($=t.sent(),K=[],ee=0;ee<Q.length;ee++)"simplify"!==(re=Q[ee])?K.push(re):K.push(m?y.geographicToWebMercator($.shift()):$.shift());return[2,K];case 3:for(Y=[],ee=0;ee<J.length;ee++)"cut"!==(re=J[ee])?Y.push(re):(te=j.shift(),Y.push(!0===m?y.geographicToWebMercator(te):te));return[2,u.resolve(Y)]}}))}))},r.getDenormalizedExtent=function(e){var r;if(!e)return null;var t=e.extent;if(!t)return null;var n=e.spatialReference&&f.getInfo(e.spatialReference);if(!n)return t;var i,o=n.valid,s=o[0],a=o[1],u=2*a,l=t.width,p=t.xmin,c=t.xmax;if(p=(r=[c,p])[0],c=r[1],"extent"===e.type||0===l||l<=a||l>u||p<s||c>a)return t;switch(e.type){case"polygon":if(!(e.rings.length>1))return t;i=w(e.rings);break;case"polyline":if(!(e.paths.length>1))return t;i=w(e.paths);break;case"multipoint":i=e.points}for(var y=t.clone(),d=0;d<i.length;d++){var v=i[d][0];v<0?(v+=a,c=Math.max(v,c)):(v-=a,p=Math.min(v,p))}return y.xmin=p,y.xmax=c,y.width<l?(y.xmin-=a,y.xmax-=a,y):t},r.normalizeMapX=function(e,r){var t=f.getInfo(r);if(t){var n=t.valid,i=n[0],o=n[1],s=o-i;if(e<i)for(;e<i;)e+=s;if(e>o)for(;e>o;)e-=s}return e}}.apply(null,n))||(e.exports=i)}}]);