// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry","../../../Ground","../../../core/promiseUtils","../../../core/unitUtils","../../Mesh","../../../layers/ElevationLayer","../../../layers/support/types"],(function(e,t,r,n,a,i,o,s,u,c,l){function f(e,t,r){var n=s.getMetersPerUnitForSR(t.spatialReference),a=e.demResolution.min/n,i=Math.round(t.width/a),o=Math.round(t.height/a),c=i+1,l=o+1,f=new Float64Array(c*l*3),p=new Float32Array(c*l*2),h=0,v=0,m=new Uint32Array(i*o*2*3),y=0,w=0;d.spatialReference=t.spatialReference;for(var R=0;R<l;R++)for(var g=t.ymin+t.height*(R/o),A=0;A<c;A++){var b=t.xmin+t.width*(A/i);d.x=b,d.y=g,f[h++]=b,f[h++]=g,f[h++]=e.elevationAt(d)||0;var M=A/i,x=R/o;p[v++]=M,p[v++]=x,R!==o&&A!==i&&(m[w++]=y+1,m[w++]=y+c+1,m[w++]=y+c,m[w++]=y,m[w++]=y+1,m[w++]=y+c),y++}return new u({vertexAttributes:{position:f,uv:p},components:[{faces:m,shading:"smooth",material:r&&r.material||null}],spatialReference:t.spatialReference})}function p(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return function(e){return l.isOfType(e,"elevation")}(e)?[2,e.load()]:[4,e.load()];case 1:return t.sent(),[4,o.eachAlways(e.layers.map((function(e){return e.load()})))];case 2:return t.sent(),[2,e]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(e,t,a){return n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:return e instanceof c||e instanceof i?[4,p(e)]:[3,3];case 1:return[4,r.sent().createElevationSampler(t,{demResolution:a&&a.demResolution||"finest-contiguous"})];case 2:return n=r.sent(),[3,4];case 3:n=e,r.label=4;case 4:return[2,f(n,t,a)]}}))}))};var d=new a.Point}));