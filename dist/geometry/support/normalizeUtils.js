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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../config","../../core/Error","../../core/Logger","../../core/maybe","../../core/promiseUtils","../Polygon","../Polyline","../SpatialReference","./spatialReferenceUtils","./webMercatorUtils","../../tasks/geometry/cut","../../tasks/geometry/simplify"],(function(e,r,n,t,i,a,o,s,l,f,u,p,h,c,g,m){Object.defineProperty(r,"__esModule",{value:!0});var v=o.getLogger("esri.geometry.support.normalizeUtils"),x={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new u({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:p.WebMercator}),minus180Line:new u({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:p.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new u({paths:[[[180,-180],[180,180]]],spatialReference:p.WGS84}),minus180Line:new u({paths:[[[-180,-180],[-180,180]]],spatialReference:p.WGS84})}};function y(e){return"polygon"===e.type}function d(e){return y(e)?e.rings:e.paths}function M(e,r){return Math.ceil((e-r)/(2*r))}function w(e,r){for(var n=0,t=d(e);n<t.length;n++)for(var i=0,a=t[n];i<a.length;i++){a[i][0]+=r}return e}function b(e){for(var r=[],n=0,t=0,i=0;i<e.length;i++){for(var a=e[i],o=null,s=0;s<a.length;s++)o=a[s],r.push(o),0===s?t=n=o[0]:(n=Math.min(n,o[0]),t=Math.max(t,o[0]));o&&r.push([(n+t)/2,0])}return r}function R(e,r){if(!(e instanceof u||e instanceof f)){var n="straightLineDensify: the input geometry is neither polyline nor polygon";throw v.error(n),new a(n)}for(var t=[],i=0,o=d(e);i<o.length;i++){var s=o[i],l=[];t.push(l),l.push([s[0][0],s[0][1]]);for(var p=0;p<s.length-1;p++){var h=s[p][0],c=s[p][1],g=s[p+1][0],m=s[p+1][1],x=Math.sqrt((g-h)*(g-h)+(m-c)*(m-c)),M=(m-c)/x,w=(g-h)/x,b=x/r;if(b>1){for(var R=1;R<=b-1;R++){var L=R*r,W=w*L+h,P=M*L+c;l.push([W,P])}var S=(x+Math.floor(b-1)*r)/2,X=w*S+h,z=M*S+c;l.push([X,z])}l.push([g,m])}}return y(e)?new f({rings:t,spatialReference:e.spatialReference}):new u({paths:t,spatialReference:e.spatialReference})}function L(e,r,n){if(r){var t=R(e,1e6);e=c.webMercatorToGeographic(t,!0)}return n&&(e=w(e,n)),e}function W(e,r,n){var t;if(Array.isArray(e)){if((t=e[0])>r){var i=M(t,r);e[0]=t+i*(-2*r)}else if(t<n){i=M(t,n);e[0]=t+i*(-2*n)}}else if((t=e.x)>r){i=M(t,r);e=e.clone().offset(i*(-2*r),0)}else if(t<n){i=M(t,n);e=e.clone().offset(i*(-2*n),0)}return e}r.straightLineDensify=R,r.normalizeCentralMeridian=function e(r,a,o){return t(this,void 0,void 0,(function(){var t,p,v,y,b,R,P,S,X,z,I,U,k,A,T,D,G,_,q,E,H,N,j,C,F,O,B,J,K,Q,V,Y,Z,$,ee,re,ne;return n(this,(function(n){switch(n.label){case 0:if(!Array.isArray(r))return[2,e([r],a)];for(t=a?a.url:i.geometryServiceUrl,z=0,I=[],U=[],k=0,A=r;k<A.length;k++)T=A[k],s.isNone(T)?U.push(T):(p||(p=T.spatialReference,v=h.getInfo(p),y=p.isWebMercator,b=x[P=y?102100:4326].maxX,R=x[P].minX,S=x[P].plus180Line,X=x[P].minus180Line),v?"mesh"===T.type?U.push(T):"point"===T.type?U.push(W(T.clone(),b,R)):"multipoint"===T.type?((D=T.clone()).points=D.points.map((function(e){return W(e,b,R)})),U.push(D)):"extent"===T.type?(_=T.clone(),G=_._normalize(!1,!1,v),U.push(G.rings?new f(G):G)):T.extent?(_=T.extent,q=M(_.xmin,R),H=0===(E=q*(2*b))?T.clone():w(T.clone(),E),_.offset(E,0),_.intersects(S)&&_.xmax!==b?(z=_.xmax>z?_.xmax:z,H=L(H,y),I.push(H),U.push("cut")):_.intersects(X)&&_.xmin!==R?(z=_.xmax*(2*b)>z?_.xmax*(2*b):z,H=L(H,y,360),I.push(H),U.push("cut")):U.push(H)):U.push(T.clone()):U.push(T));for(N=M(z,b),j=-90,C=N,F=new u;N>0;)O=360*N-180,F.addPath([[O,j],[O,-1*j]]),j*=-1,N--;return I.length>0&&C>0?[4,g.cut(t,I,F,o)]:[3,3];case 1:for(B=n.sent(),J=function(e,r){for(var n=-1,t=function(t){for(var i=r.cutIndexes[t],a=r.geometries[t],o=d(a),s=function(e){var r=o[e];r.some((function(n){if(n[0]<180)return!0;for(var t=0,i=0;i<r.length;i++){var o=r[i][0];t=o>t?o:t}for(var s=-360*M(t=Number(t.toFixed(9)),180),l=0;l<r.length;l++){var f=a.getPoint(e,l);a.setPoint(e,l,f.clone().offset(s,0))}return!0}))},l=0;l<o.length;l++)s(l);if(i===n){if("polygon"===e[0].type)for(var f=0,u=d(a);f<u.length;f++){var p=u[f];e[i]=e[i].addRing(p)}else if(function(e){return"polyline"===e[0].type}(e))for(var h=0,c=d(a);h<c.length;h++){var g=c[h];e[i]=e[i].addPath(g)}}else n=i,e[i]=a},i=0;i<r.cutIndexes.length;i++)t(i);return e}(I,B),K=[],Q=[],ee=0;ee<U.length;ee++)"cut"!==(re=U[ee])?Q.push(re):(ne=J.shift(),V=r[ee],s.isSome(V)&&"polygon"===V.type&&V.rings&&V.rings.length>1&&ne.rings.length>=V.rings.length?(K.push(ne),Q.push("simplify")):Q.push(y?c.geographicToWebMercator(ne):ne));return K.length?[4,m.simplify(t,K,o)]:[2,Q];case 2:for(Y=n.sent(),Z=[],ee=0;ee<Q.length;ee++)"simplify"!==(re=Q[ee])?Z.push(re):Z.push(y?c.geographicToWebMercator(Y.shift()):Y.shift());return[2,Z];case 3:for($=[],ee=0;ee<U.length;ee++)"cut"!==(re=U[ee])?$.push(re):(ne=I.shift(),$.push(!0===y?c.geographicToWebMercator(ne):ne));return[2,l.resolve($)]}}))}))},r.getDenormalizedExtent=function(e){var r;if(!e)return null;var n=e.extent;if(!n)return null;var t=e.spatialReference&&h.getInfo(e.spatialReference);if(!t)return n;var i,a=t.valid,o=a[0],s=a[1],l=2*s,f=n.width,u=n.xmin,p=n.xmax;if(u=(r=[p,u])[0],p=r[1],"extent"===e.type||0===f||f<=s||f>l||u<o||p>s)return n;switch(e.type){case"polygon":if(!(e.rings.length>1))return n;i=b(e.rings);break;case"polyline":if(!(e.paths.length>1))return n;i=b(e.paths);break;case"multipoint":i=e.points}for(var c=n.clone(),g=0;g<i.length;g++){var m=i[g][0];m<0?(m+=s,p=Math.max(m,p)):(m-=s,u=Math.min(m,u))}return c.xmin=u,c.xmax=p,c.width<f?(c.xmin-=s,c.xmax-=s,c):n},r.normalizeMapX=function(e,r){var n=h.getInfo(r);if(n){var t=n.valid,i=t[0],a=t[1],o=a-i;if(e<i)for(;e<i;)e+=o;if(e>a)for(;e>a;)e-=o}return e}}));