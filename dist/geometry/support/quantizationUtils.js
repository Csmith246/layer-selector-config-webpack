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

define(["require","exports","./jsonUtils"],(function(n,t,r){function e(n){return n&&"upperLeft"===n.originPosition}Object.defineProperty(t,"__esModule",{value:!0});var i=function(n,t,r){return[t,r]},u=function(n,t,r){return[t,r,n[2]]},a=function(n,t,r){return[t,r,n[2],n[3]]};function o(n,t){var r=n.scale,e=n.translate;return Math.round((t-e[0])/r[0])}function l(n,t){var r=n.scale,e=n.translate;return Math.round((e[1]-t)/r[1])}function s(n,t,r){for(var e,i,u,a,s=[],m=0;m<r.length;m++){var f=r[m];m>0?(u=o(n,f[0]),a=l(n,f[1]),u===e&&a===i||(s.push(t(f,u-e,a-i)),e=u,i=a)):(e=o(n,f[0]),i=l(n,f[1]),s.push(t(f,e,i)))}return s.length>0?s:null}function m(n,t,r,e){return s(n,r?e?a:u:e?u:i,t)}function f(n,t,r,e){for(var o=[],l=r?e?a:u:e?u:i,m=0;m<t.length;m++){var f=s(n,l,t[m]);f&&f.length>=3&&o.push(f)}return o.length?o:null}function c(n,t,r,e){for(var o=[],l=r?e?a:u:e?u:i,m=0;m<t.length;m++){var f=s(n,l,t[m]);f&&f.length>=2&&o.push(f)}return o.length?o:null}function h(n,t){var r=n.scale,e=n.translate;return t*r[0]+e[0]}function x(n,t){var r=n.scale;return n.translate[1]-t*r[1]}function y(n,t,r){var e=new Array(r.length);if(!r.length)return e;var i=n.scale,u=i[0],a=i[1],o=h(n,r[0][0]),l=x(n,r[0][1]);e[0]=t(r[0],o,l);for(var s=1;s<r.length;s++){var m=r[s];o+=m[0]*u,l-=m[1]*a,e[s]=t(m,o,l)}return e}function g(n,t,r){for(var e=new Array(r.length),i=0;i<r.length;i++)e[i]=y(n,t,r[i]);return e}function d(n,t,r,e){return y(n,r?e?a:u:e?u:i,t)}function z(n,t,r,e){return g(n,r?e?a:u:e?u:i,t)}function I(n,t,r,e){return g(n,r?e?a:u:e?u:i,t)}function v(n,t,r){for(var e=r[0],i=e[0],u=e[1],a=Math.min(i,t[0]),o=Math.min(u,t[1]),l=Math.max(i,t[2]),s=Math.max(u,t[3]),m=1;m<r.length;m++){var f=r[m],c=f[0],h=f[1];i+=c,u+=h,c<0&&(a=Math.min(a,i)),c>0&&(l=Math.max(l,i)),h<0?o=Math.min(o,u):h>0&&(s=Math.max(s,u))}return n[0]=a,n[1]=o,n[2]=l,n[3]=s,n}function P(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(var r=0;r<t.length;r++)v(n,n,t[r]);return n}function p(n,t,r,e,i){return t.xmin=o(n,r.xmin),t.ymin=l(n,r.ymin),t.xmax=o(n,r.xmax),t.ymax=l(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),i&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function N(n,t,r,e,i){return t.points=m(n,r.points,e,i),t}function q(n,t,r,e,i){return t.x=o(n,r.x),t.y=l(n,r.y),t!==r&&(e&&(t.z=r.z),i&&(t.m=r.m)),t}function M(n,t,r,e,i){var u=f(n,r.rings,e,i);return u?(t.rings=u,t):null}function T(n,t,r,e,i){var u=c(n,r.paths,e,i);return u?(t.paths=u,t):null}t.toQuantizationTransform=function(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:[n.tolerance,n.tolerance],translate:[n.extent.xmin,n.extent.ymax]}:null},t.equals=function(n,t){return n===t||null==n&&null==t||null!=n&&null!=t&&(e(n)?(r=n.translate[0],i=n.translate[1],u=n.scale[0]):(r=n.extent.xmin,i=n.extent.ymax,u=n.tolerance),e(t)?(a=t.translate[0],o=t.translate[1],l=t.scale[0]):(a=t.extent.xmin,o=t.extent.ymax,l=t.tolerance),r===a&&i===o&&u===l);var r,i,u,a,o,l},t.quantizeX=o,t.quantizeY=l,t.quantizeBounds=function(n,t,r){return t[0]=o(n,r[0]),t[3]=l(n,r[1]),t[2]=o(n,r[2]),t[1]=l(n,r[3]),t},t.quantizePoints=m,t.quantizeRings=f,t.quantizePaths=c,t.hydrateX=h,t.hydrateY=x,t.hydrateCoordsArray=y,t.hydrateCoordsArrayArray=g,t.hydrateBounds=function(n,t,r){return r?(t[0]=h(n,r[0]),t[1]=x(n,r[3]),t[2]=h(n,r[2]),t[3]=x(n,r[1]),t):[h(n,t[0]),x(n,t[3]),h(n,t[2]),x(n,t[1])]},t.hydratePoints=d,t.hydratePaths=z,t.hydrateRings=I,t.getQuantizedBoundsCoordsArray=v,t.getQuantizedBoundsCoordsArrayArray=P,t.getQuantizedBoundsPoints=function(n){var t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return v(t,t,n)},t.getQuantizedBoundsPaths=function(n){return P([0,0,0,0],n)},t.getQuantizedBoundsRings=function(n){return P([0,0,0,0],n)},t.quantizeExtent=p,t.quantizeMultipoint=N,t.quantizePoint=q,t.quantizePolygon=M,t.quantizePolyline=T,t.quantizeGeometry=function(n,t){return n&&t?r.isPoint(t)?q(n,{},t,!1,!1):r.isPolyline(t)?T(n,{},t,!1,!1):r.isPolygon(t)?M(n,{},t,!1,!1):r.isMultipoint(t)?N(n,{},t,!1,!1):r.isExtent(t)?p(n,{},t,!1,!1):null:null},t.hydrateExtent=function(n,t,r,e,i){return t.xmin=h(n,r.xmin),t.ymin=x(n,r.ymin),t.xmax=h(n,r.xmax),t.ymax=x(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),i&&(t.mmin=r.mmin,t.mmax=r.mmax)),t},t.hydrateMultipoint=function(n,t,r,e,i){return t.points=d(n,r.points,e,i),t},t.hydratePoint=function(n,t,r,e,i){return t.x=h(n,r.x),t.y=x(n,r.y),t!==r&&(e&&(t.z=r.z),i&&(t.m=r.m)),t},t.hydratePolygon=function(n,t,r,e,i){return t.rings=I(n,r.rings,e,i),t},t.hydratePolyline=function(n,t,r,e,i){return t.paths=z(n,r.paths,e,i),t}}));