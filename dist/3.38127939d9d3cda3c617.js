(function(){(this||window).webpackJsonp.registerAbsMids({"esri/renderers/visualVariables/support/sizeVariableUtils":889,"esri/layers/support/rasterFunctions/pixelUtils":1030,"esri/renderers/visualVariables/support/visualVariableUtils":1056,"esri/layers/support/PixelBlock":1108})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1030:function(e,t,i){var r,a;r=[i.dj.c(e.i),t,i(1108)],void 0===(a=function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0};function a(e,t){var i,r,a=Math.min(Math.max(e,-100),100),n=Math.min(Math.max(t,-100),100),s=new Uint8Array(256);for(i=0;i<256;i++)a>0&&a<100?r=(200*i-25500+510*n)/(2*(100-a))+128:a<=0&&a>-100?r=(200*i-25500+510*n)*(100+a)/2e4+128:100===a?r=(r=200*i-25500+256*(100-a)+510*n)>0?255:0:-100===a&&(r=128),s[i]=r>255?255:r<0?0:r;return s}function n(e,t,i,r,a,n,s,l){return{xmin:a<=i*e?0:a<i*e+e?a-i*e:e,ymin:n<=r*t?0:n<r*t+t?n-r*t:t,xmax:a+s<=i*e?0:a+s<i*e+e?a+s-i*e:e,ymax:n+l<=r*t?0:n+l<r*t+t?n+l-r*t:t}}function s(e,t,a,s){var l=e.filter((function(e){return r(e)}))[0];if(null==l)return null;var o,u,c,f,h,p,d,m,x,v,y,g,w,b=s?s.width:t.width,k=s?s.height:t.height,V=l.width,A=l.height,M=t.width/V,S=t.height/A,U=a?a.x:0,T=a?a.y:0,C=l.pixelType,B=i.getPixelArrayConstructor(C),F=l.pixels.length,z=[];for(p=0;p<F;p++){for(u=new B(b*k),d=0;d<S;d++)for(m=0;m<M;m++)if(c=e[d*M+m])for(o=c.pixels[p],x=(y=n(V,A,m,d,U,T,b,k)).ymin;x<y.ymax;x++)for(f=(d*A+x-T)*b+(m*V-U),h=x*V,v=y.xmin;v<y.xmax;v++)u[f+v]=o[h+v];z.push(u)}if(e.some((function(e){return null==e||e.mask&&e.mask.length>0})))for(g=new Uint8Array(b*k),d=0;d<S;d++)for(m=0;m<M;m++)if(w=(c=e[d*M+m])?c.mask:null,y=n(V,A,m,d,U,T,b,k),w)for(x=y.ymin;x<y.ymax;x++)for(f=(d*A+x-T)*b+(m*V-U),h=x*V,v=y.xmin;v<y.xmax;v++)g[f+v]=w[h+v];else if(c)for(x=y.ymin;x<y.ymax;x++)for(f=(d*A+x-T)*b+(m*V-U),h=x*V,v=y.xmin;v<y.xmax;v++)g[f+v]=1;else for(x=y.ymin;x<y.ymax;x++)for(f=(d*A+x-T)*b+(m*V-U),h=x*V,v=y.xmin;v<y.xmax;v++)g[f+v]=0;var N=new i({width:b,height:k,pixels:z,pixelType:C,mask:g});return N.updateStatistics(),N}t.extractBands=function(e,t){if(!t||!r(e))return e;var a=e.pixels.length;return t&&t.some((function(e){return e>=a}))||1===a&&1===t.length&&0===t[0]?e:a!==t.length||t.some((function(e,t){return e!==t}))?new i({pixelType:e.pixelType,width:e.width,height:e.height,mask:e.mask,validPixelCount:e.validPixelCount,maskIsAlpha:e.maskIsAlpha,pixels:t.map((function(t){return e.pixels[t]})),statistics:e.statistics&&t.map((function(t){return e.statistics[t]}))}):e},t.createColormapLUT=function(e){if(e){var t=e.colormap;if(t&&0!==t.length){var i=t.sort((function(e,t){return e[0]-t[0]})),r=0;i[0][0]<0&&(r=i[0][0]);var a,n=Math.max(256,i[i.length-1][0]-r+1),s=new Uint8Array(4*n),l=[],o=0,u=0,c=5===i[0].length;if(n>65536)return i.forEach((function(e){l[e[0]-r]=c?e.slice(1):e.slice(1).concat([255])})),{indexed2DColormap:l,offset:r,alphaSpecified:c};if(e.fillUnspecified)for(o=(a=i[u])[0]-r;o<n;o++)s[4*o]=a[1],s[4*o+1]=a[2],s[4*o+2]=a[3],s[4*o+3]=c?a[4]:255,o===a[0]-r&&(a=u===i.length-1?a:i[++u]);else for(o=0;o<i.length;o++)s[u=4*((a=i[o])[0]-r)]=a[1],s[u+1]=a[2],s[u+2]=a[3],s[u+3]=c?a[4]:255;return{indexedColormap:s,offset:r,alphaSpecified:c}}}},t.colorize=function(e,t){if(!r(e))return e;if(!t&&(t.indexedColormap||t.indexed2DColormap))return e;var i=e.clone(),a=i.pixels,n=i.mask,s=i.width*i.height;if(1!==a.length)return e;var l,o=t.indexedColormap,u=t.indexed2DColormap,c=t.offset,f=t.alphaSpecified,h=o.length-1,p=0,d=a[0],m=new Uint8Array(d.length),x=new Uint8Array(d.length),v=new Uint8Array(d.length),y=0;if(o)if(n)for(p=0;p<s;p++)n[p]&&((y=4*(d[p]-c))<c||y>h?n[p]=0:(m[p]=o[y],x[p]=o[y+1],v[p]=o[y+2],n[p]=o[y+3]));else{for(n=new Uint8Array(s),p=0;p<s;p++)(y=4*(d[p]-c))<c||y>h?n[p]=0:(m[p]=o[y],x[p]=o[y+1],v[p]=o[y+2],n[p]=o[y+3]);i.mask=n}else if(n)for(p=0;p<s;p++)n[p]&&(l=u[d[p]],m[p]=l[0],x[p]=l[1],v[p]=l[2],n[p]=l[3]);else{for(n=new Uint8Array(s),p=0;p<s;p++)l=u[d[p]],m[p]=l[0],x[p]=l[1],v[p]=l[2],n[p]=l[3];i.mask=n}return i.pixels=[m,x,v],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i},t.estimateStatisticsHistograms=function(e){if(!r(e))return null;e.statistics||e.updateStatistics();var t,i,a,n,s,l,o,u,c,f,h,p,d,m,x=e.pixels,v=e.mask,y=e.pixelType,g=e.statistics,w=e.width*e.height,b=x.length,k=[],V=[];for(n=0;n<b;n++){if(l=new Uint32Array(256),u=x[n],"u8"===y)if(t=-.5,i=255.5,v)for(s=0;s<w;s++)v[s]&&l[u[s]]++;else for(s=0;s<w;s++)l[u[s]]++;else{if(t=g[n].minValue,a=((i=g[n].maxValue)-t)/256,o=new Uint32Array(257),v)for(s=0;s<w;s++)v[s]&&o[Math.floor((u[s]-t)/a)]++;else for(s=0;s<w;s++)o[Math.floor((u[s]-t)/a)]++;for(s=0;s<255;s++)l[s]=o[s];l[255]=o[255]+o[256]}for(k.push({min:t,max:i,size:256,counts:l}),c=0,f=0,d=0,s=0;s<256;s++)c+=l[s],f+=s*l[s];for(m=f/c,s=0;s<256;s++)d+=l[s]*Math.pow(s-m,2);h=(m+.5)*(a=(i-t)/256)+t,p=Math.sqrt(d/(c-1))*a,V.push({min:t,max:i,avg:h,stddev:p})}return{statistics:V,histograms:k}},t.createStretchLUT=function(e){var t=e.minCutOff,i=e.maxCutOff,r=e.gamma,n=e.pixelType,s=e.outMin||0,l=e.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(n))return null;var o,u,c=t.length,f=0;"s8"===n?f=-127:"s16"===n&&(f=-32767);var h=256;["u16","s16"].indexOf(n)>-1&&(h=65536);var p=[],d=[],m=l-s;for(o=0;o<c;o++)d[o]=i[o]-t[o],p[o]=m/(i[o]-t[o]);var x,v=r&&r.length>=c,y=[];if(v)for(o=0;o<c;o++)r[o]>1?r[o]>2?y[o]=6.5+Math.pow(r[o]-2,2.5):y[o]=6.5+100*Math.pow(2-r[o],4):y[o]=1;var g,w,b,k=[];if(v)for(o=0;o<c;o++){for(b=[],u=0;u<h;u++)x=((g=u+f)-t[o])/d[o],w=1,r[o]>1&&(w-=Math.pow(1/m,x*y[o])),g<i[o]&&g>t[o]?b[u]=Math.floor(w*m*Math.pow(x,1/r[o]))+s:g>=i[o]?b[u]=l:b[u]=s;k[o]=b}else for(o=0;o<c;o++){for(b=[],u=0;u<h;u++)(g=u+f)<=t[o]?b[u]=s:g>=i[o]?b[u]=l:b[u]=Math.floor((g-t[o])/d[o]*m)+s;k[o]=b}if(null!=e.contrastOffset){var V=a(e.contrastOffset,e.brightnessOffset);for(o=0;o<c;o++)for(b=k[o],u=0;u<h;u++)b[u]=V[b[u]]}return{lut:k,offset:f}},t.createContrastBrightnessLUT=a,t.stretch=function(e,t){if(!r(e))return null;var i,a,n,s,l,o=e.clone(),u=o.pixels,c=o.mask,f=t.minCutOff,h=t.maxCutOff,p=t.gamma,d=t.outMin||0,m=t.outMax||255,x=o.width*o.height,v=u.length,y=m-d,g=[],w=[];for(i=0;i<v;i++)w[i]=h[i]-f[i],g[i]=y/(h[i]-f[i]);var b=p&&p.length>=v,k=[];if(b)for(i=0;i<v;i++)p[i]>1?p[i]>2?k[i]=6.5+Math.pow(p[i]-2,2.5):k[i]=6.5+100*Math.pow(2-p[i],4):k[i]=1;if(b)if(null!=c){for(a=0;a<x;a++)if(c[a])for(i=0;i<v;i++)l=((n=u[i][a])-f[i])/w[i],s=1,p[i]>1&&(s-=Math.pow(1/y,l*k[i])),n<h[i]&&n>f[i]?u[i][a]=Math.floor(s*y*Math.pow(l,1/p[i]))+d:n>=h[i]?u[i][a]=m:u[i][a]=d}else for(a=0;a<x;a++)for(i=0;i<v;i++)l=((n=u[i][a])-f[i])/w[i],s=1,p[i]>1&&(s-=Math.pow(1/y,l*k[i])),n<h[i]&&n>f[i]?u[i][a]=Math.floor(s*y*Math.pow(l,1/p[i]))+d:n>=h[i]?u[i][a]=m:u[i][a]=d;else if(null!=c){for(a=0;a<x;a++)if(c[a])for(i=0;i<v;i++)(n=u[i][a])<h[i]&&n>f[i]?u[i][a]=Math.floor((n-f[i])/w[i]*y)+d:n>=h[i]?u[i][a]=m:u[i][a]=d}else for(a=0;a<x;a++)for(i=0;i<v;i++)(n=u[i][a])<h[i]&&n>f[i]?u[i][a]=Math.floor((n-f[i])/w[i]*y)+d:n>=h[i]?u[i][a]=m:u[i][a]=d;return o.pixelType="u8",o.updateStatistics(),o},t.lookupPixels=function(e,t){if(!r(e))return null;var a,n,s=e.pixels,l=e.mask,o=e.width*e.height,u=s.length,c=t.lut,f=t.offset;c&&1===c[0].length&&(c=s.map((function(){return c})));var h,p,d,m=[];if(f)if(null==l)for(a=0;a<u;a++){for(h=s[a],p=c[a],d=new Uint8Array(o),n=0;n<o;n++)d[n]=p[h[n]-f];m.push(d)}else for(a=0;a<u;a++){for(h=s[a],p=c[a],d=new Uint8Array(o),n=0;n<o;n++)l[n]&&(d[n]=p[h[n]-f]);m.push(d)}else if(null==l)for(a=0;a<u;a++){for(h=s[a],p=c[a],d=new Uint8Array(o),n=0;n<o;n++)d[n]=p[h[n]];m.push(d)}else for(a=0;a<u;a++){for(h=s[a],p=c[a],d=new Uint8Array(o),n=0;n<o;n++)l[n]&&(d[n]=p[h[n]]);m.push(d)}var x=new i({width:e.width,height:e.height,pixels:m,mask:l,pixelType:"u8"});return x.updateStatistics(),x},t.remapColor=function(e,t){if(!r(e))return null;var i,a,n,s,l,o,u=e.clone(),c=u.pixels,f=u.width*u.height,h=t.length,p=Math.floor(h/2),d=t[Math.floor(p)],m=c[0],x=!1,v=new Uint8Array(f),y=new Uint8Array(f),g=new Uint8Array(f),w=u.mask,b=4===t[0].mappedColor.length;for(w||((w=new Uint8Array(f)).fill(b?255:1),u.mask=w),l=0;l<f;l++)if(w[l]){for(i=m[l],x=!1,o=p,a=d,n=0,s=h-1;s-n>1;){if(i===a.value){x=!0;break}i>a.value?n=o:s=o,o=Math.floor((n+s)/2),a=t[Math.floor(o)]}x||(i===t[n].value?(a=t[n],x=!0):i===t[s].value?(a=t[s],x=!0):i<t[n].value?(x=!1,a=null):i>t[n].value&&(i<t[s].value?(a=t[n],x=!0):s===h-1?(x=!1,a=null):(a=t[s],x=!0))),x?(v[l]=a.mappedColor[0],y[l]=a.mappedColor[1],g[l]=a.mappedColor[2],w[l]=a.mappedColor[3]):v[l]=y[l]=g[l]=w[l]=0}return u.pixels=[v,y,g],u.mask=w,u.pixelType="u8",u.maskIsAlpha=b,u},t.getClipBounds=n,t.mosaicPixelData=function(e,t){if(!e||0===e.length)return null;var i=e.filter((function(e){return e.pixelBlock}))[0];if(!i)return null;var r=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,a=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,n=.01*Math.min(r,a),l=e.sort((function(e,t){return Math.abs(e.extent.ymax-t.extent.ymax)>n?t.extent.ymax-e.extent.ymax:Math.abs(e.extent.xmin-t.extent.xmin)>n?e.extent.xmin-t.extent.xmin:0})),o=Math.min.apply(null,l.map((function(e){return e.extent.xmin}))),u=Math.min.apply(null,l.map((function(e){return e.extent.ymin}))),c=Math.max.apply(null,l.map((function(e){return e.extent.xmax}))),f=Math.max.apply(null,l.map((function(e){return e.extent.ymax}))),h={x:Math.round((t.xmin-o)/r),y:Math.round((f-t.ymax)/a)},p={width:Math.round((c-o)/r),height:Math.round((f-u)/a)},d={width:Math.round((t.xmax-t.xmin)/r),height:Math.round((t.ymax-t.ymin)/a)};return Math.round(p.width/i.pixelBlock.width)*Math.round(p.height/i.pixelBlock.height)!==l.length||h.x<0||h.y<0||p.width<d.width||p.height<d.height?null:{extent:t,pixelBlock:s(l.map((function(e){return e.pixelBlock})),p,h,d)}},t.mosaic=s,t.setValidBoundary=function(e,t,i){if(!r(e))return null;var a=e.width,n=e.height,s=t.x,l=t.y,o=i.width+s,u=i.height+l;if(s<0||l<0||o>a||u>n)return e;if(0===s&&0===l&&o===a&&u===n)return e;e.mask||(e.mask=new Uint8Array(a*n));for(var c=e.mask,f=0;f<n;f++)for(var h=f*a,p=0;p<a;p++)c[h+p]=f<l||f>=u||p<s||p>=o?0:1;return e.updateStatistics(),e},t.clip=function(e,t,a){if(!r(e))return null;var n=t.x,s=t.y,l=t.x+a.width,o=t.x+a.height;if(o===e.height&&l===e.width)return e;for(var u,c=e.pixels,f=e.mask,h=e.width,p=h*e.height,d=c.length,m=[],x=0;x<d;x++){for(var v=c[x],y=i.createEmptyBand(e.pixelType,p),g=0,w=s;w<=o;w++)for(var b=w*h,k=n;k<=l;k++)y[g++]=v[b+k];m.push(y)}if(f)for(u=new Uint8Array(a.width*a.height),g=0,w=s;w<=o;w++)for(b=w*h,k=n;k<=l;k++)u[g++]=f[b+k];var V=new i({width:a.width,height:a.height,pixels:m,mask:u});return V.updateStatistics(),V},t.approximateTransform=function(e,t,a,n){if(!r(e))return null;for(var s,l,o,u,c,f,h,p=e.pixels,d=e.mask,m=e.pixelType,x=e.width,v=e.height,y=i.getPixelArrayConstructor(m),g=p.length,w=t.width,b=t.height,k=n.cols,V=n.rows,A=Math.ceil(w/k),M=Math.ceil(b/V),S=!1,U=0;U<a.length;U+=3)-1===a[U]&&-1===a[U+1]&&-1===a[U+2]&&(S=!0);var T,C,B=new Float32Array(w*b),F=new Float32Array(w*b),z=0;for(U=0;U<M;U++)for(var N=0;N<A;N++){l=a[s=12*(U*A+N)],o=a[s+1],u=a[s+2],c=a[s+3],f=a[s+4],h=a[s+5];for(var R=0;R<V;R++){z=(U*V+R)*w+N*k,C=(R+.5)/V;for(var P=0;P<R;P++)T=(P+.5)/k,B[z+P]=Math.round((l*T+o*C+u)*x-.5),F[z+P]=Math.round((c*T+f*C+h)*v-.5)}for(l=a[s+=6],o=a[s+1],u=a[s+2],c=a[s+3],f=a[s+4],h=a[s+5],R=0;R<V;R++)for(z=(U*V+R)*w+N*k,C=(R+.5)/V,P=R;P<k;P++)T=(P+.5)/k,B[z+P]=Math.round((l*T+o*C+u)*x-.5),F[z+P]=Math.round((c*T+f*C+h)*v-.5)}for(var D,E=function(e,t){for(var i=0;i<b;i++){s=i*w;for(var r=0;r<w;r++)S&&(B[s]<0||F[s]<0)?e[s]=0:e[s]=t[B[s]+F[s]*x],s++}},I=[],O=0;O<g;O++)E(D=new y(w*b),p[O]),I.push(D);var _=new i({width:w,height:b,pixelType:m,pixels:I});if(d)_.mask=new Uint8Array(w*b),E(_.mask,d);else if(S)for(_.mask=new Uint8Array(w*b),U=0;U<w*b;U++)_.mask[U]=B[U]<0||F[U]<0?0:1;return _.updateStatistics(),_}}.apply(null,r))||(e.exports=a)},1056:function(e,t,i){var r,a;r=[i.dj.c(e.i),t,i(38),i(240),i(29),i(5),i(15),i(827),i(889)],void 0===(a=function(e,t,i,r,a,n,s,l,o){Object.defineProperty(t,"__esModule",{value:!0});var u=n.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),c=new r,f=Math.PI;function h(e,t,r){var a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"color"===e.type}))[0]:e;if(a)if("esri.renderers.visualVariables.ColorVariable"===a.declaredClass){var n="number"==typeof t,l=n?null:t,o=l&&l.attributes,c=n?t:null,f=a.field,h=a.cache,p=h.ipData,d=h.hasExpression,m=a.cache.compiledFunc;if(!f&&!d){var x=a.stops;return x&&x[0]&&x[0].color}if("number"!=typeof c)if(d){if(!s.isSome(r)||!s.isSome(r.arcade))return void u.error("Use of arcade expressions requires an arcade context");var v={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},y=r.arcade.arcadeUtils,w=y.getViewInfo(v),b=y.createExecContext(l,w);if(!m){var k=y.createSyntaxTree(a.valueExpression);m=y.createFunction(k),a.cache.compiledFunc=m}c=y.executeFunction(m,b)}else o&&(c=o[f]);var V=a.normalizationField,A=o?parseFloat(o[V]):void 0;if(null!=c&&(!V||n||!isNaN(A)&&0!==A)){isNaN(A)||n||(c/=A);var M=g(c,p);if(M){var S=M[0],U=M[1],T=S===U?a.stops[S].color:i.blendColors(a.stops[S].color,a.stops[U].color,M[2],s.isSome(r)?r.color:void 0);return new i(T)}}}else u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable")}function p(e,t,i){var r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"opacity"===e.type}))[0]:e;if(r)if("esri.renderers.visualVariables.OpacityVariable"===r.declaredClass){var a="number"==typeof t,n=a?null:t,l=n&&n.attributes,o=a?t:null,c=r.field,f=r.cache,h=f.ipData,p=f.hasExpression,d=r.cache.compiledFunc;if(!c&&!p){var m=r.stops;return m&&m[0]&&m[0].opacity}if("number"!=typeof o)if(p){if(s.isNone(i)||s.isNone(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");var x={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},v=i.arcade.arcadeUtils,y=v.getViewInfo(x),w=v.createExecContext(n,y);if(!d){var b=v.createSyntaxTree(r.valueExpression);d=v.createFunction(b),r.cache.compiledFunc=d}o=v.executeFunction(d,w)}else l&&(o=l[c]);var k=r.normalizationField,V=l?parseFloat(l[k]):void 0;if(null!=o&&(!k||a||!isNaN(V)&&0!==V)){isNaN(V)||a||(o/=V);var A=g(o,h);if(A){var M=A[0],S=A[1];if(M===S)return r.stops[M].opacity;var U=r.stops[M].opacity;return U+(r.stops[S].opacity-U)*A[2]}}}else u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable")}function d(e,t,i){var r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"rotation"===e.type}))[0]:e;if(r){if("esri.renderers.visualVariables.RotationVariable"===r.declaredClass){var a=r.axis||"heading",n="heading"===a&&"arithmetic"===r.rotationType?90:0,l="heading"===a&&"arithmetic"===r.rotationType?-1:1,o="number"==typeof t?null:t,c=o&&o.attributes,f=r.field,h=r.cache.hasExpression,p=r.cache.compiledFunc,d=0;if(!f&&!h)return d;if(h){if(s.isNone(i)||s.isNone(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");var m={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},x=i.arcade.arcadeUtils,v=x.getViewInfo(m),y=x.createExecContext(o,v);if(!p){var g=x.createSyntaxTree(r.valueExpression);p=x.createFunction(g),r.cache.compiledFunc=p}d=x.executeFunction(p,y)}else c&&(d=c[f]||0);return"number"!=typeof d||isNaN(d)?null:n+l*d}u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable")}}function m(e,t,i){var r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((function(e){return"size"===e.type}))[0]:e;if(r){if("esri.renderers.visualVariables.SizeVariable"===r.declaredClass){var a=y(function(e,t,i){var r="number"==typeof t,a=r?null:t,n=a&&a.attributes,l=r?t:null,c=e.cache.isScaleDriven,f=e.cache.compiledFunc;if(c){var h=s.isSome(i)?i.scale:void 0,p=s.isSome(i)?i.view:void 0;l=null==h||p&&"3d"===p.type?function(e){var t=null,i=null,r=e.stops;return r?(t=r[0].value,i=r[r.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):h}else if(!r)switch(e.inputValueType){case"expression":if(s.isNone(i)||s.isNone(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");var d={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},m=i.arcade.arcadeUtils,x=m.getViewInfo(d),v=m.createExecContext(a,x);if(!f){var y=m.createSyntaxTree(e.valueExpression);f=m.createFunction(y),e.cache.compiledFunc=f}l=m.executeFunction(f,v);break;case"field":n&&(l=n[e.field]);break;case"unknown":l=null}if(!o.isValidNumber(l))return null;if(r||!e.normalizationField)return l;var g=n?parseFloat(n[e.normalizationField]):null;return o.isValidNumber(g)&&0!==g?l/g:null}(r,t,i),r,t,i,r.cache.ipData);return null==a||isNaN(a)?0:a}u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable")}}function x(e,t,i){return null==e?null:o.isSizeVariable(e)?m(e,t,i):o.isValidNumber(e)?e:null}function v(e,t,i){return o.isValidNumber(i)&&e>i?i:o.isValidNumber(t)&&e<t?t:e}function y(e,t,i,r,a){switch(t.transformationType){case"additive":return function(e,t,i,r){return e+(x(t.minSize,i,r)||t.minDataValue)}(e,t,i,r);case"constant":return function(e,t,i){var r=e.stops,a=r&&r.length&&r[0].size;return null==a&&(a=e.minSize),x(a,t,i)}(t,i,r);case"clamped-linear":return function(e,t,i,r){var a=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),n=x(t.minSize,i,r),l=x(t.maxSize,i,r),o=s.isSome(r)?r.shape:void 0;if(e<=t.minDataValue)return n;if(e>=t.maxDataValue)return l;if("area"===t.scaleBy&&o){var u="circle"===o,c=u?f*Math.pow(n/2,2):n*n,h=c+a*((u?f*Math.pow(l/2,2):l*l)-c);return u?2*Math.sqrt(h/f):Math.sqrt(h)}return n+a*(l-n)}(e,t,i,r);case"proportional":return function(e,t,i,r){var a=s.isSome(r)?r.shape:void 0,n=e/t.minDataValue,l=x(t.minSize,i,r),o=x(t.maxSize,i,r);return v("circle"===a?2*Math.sqrt(n*Math.pow(l/2,2)):"square"===a||"diamond"===a||"image"===a?Math.sqrt(n*Math.pow(l,2)):n*l,l,o)}(e,t,i,r);case"stops":return function(e,t,i,r,a){var n=g(e,a),s=n[0],l=n[1],o=n[2];if(s===l)return x(t.stops[s].size,i,r);var u=x(t.stops[s].size,i,r);return u+(x(t.stops[l].size,i,r)-u)*o}(e,t,i,r,a);case"real-world-size":return function(e,t,i,r){var a=(s.isSome(r)&&r.resolution?r.resolution:1)*l.meterIn[t.valueUnit],n=x(t.minSize,i,r),o=x(t.maxSize,i,r),u=t.valueRepresentation;return v("area"===u?2*Math.sqrt(e/f)/a:"radius"===u||"distance"===u?2*e/a:e/a,n,o)}(e,t,i,r);case"identity":return e;case"unknown":return null}}function g(e,t){if(t){var i=0,r=t.length-1;return t.some((function(t,a){return e<t?(r=a,!0):(i=a,!1)})),[i,r,(e-t[i])/(t[r]-t[i])]}}t.viewScaleRE=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,t.getColor=h,t.getOpacity=p,t.getRotationAngle=d,t.getSize=m,t.getSizeFromNumberOrVariable=x,t.getSizeForValue=y,t.getSizeRangeAtScale=function(e,t,i){var r=e.cache.isScaleDriven,a=i&&"3d"===i.type;if(!(r&&a||t))return null;var n={scale:t,view:i},s=x(e.minSize,c,n),l=x(e.maxSize,c,n);if(null!=s||null!=l){if(s>l){var o=l;l=s,s=o}return{minSize:s,maxSize:l}}},t.getVisualVariableValues=function(e,t,i){if(e.visualVariables){for(var r=[],a=[],n=[],s=[],l=[],o=0,u=e.visualVariables;o<u.length;o++){var c=u[o];switch(c.type){case"color":a.push(c);break;case"opacity":n.push(c);break;case"rotation":l.push(c);break;case"size":s.push(c)}}return a.forEach((function(e){var a=h(e,t,i);r.push({variable:e,value:a})})),n.forEach((function(e){var a=p(e,t,i);r.push({variable:e,value:a})})),l.forEach((function(e){var a=d(e,t,i);r.push({variable:e,value:a})})),s.forEach((function(e){var a=m(e,t,i);r.push({variable:e,value:a})})),r.filter((function(e){return null!=e.value}))}},t.getAllSizes=function(e,t,i){for(var r=["proportional","proportional","proportional"],n=0,s=e;n<s.length;n++){var l=s[n],o=l.useSymbolValue?"symbol-value":m(l,t,i);switch(l.axis){case"width":r[0]=o;break;case"depth":r[1]=o;break;case"height":r[2]=o;break;case"width-and-depth":r[0]=o,r[1]=o;break;case"all":case void 0:case null:r[0]=o,r[1]=o,r[2]=o;break;default:a.neverReached(l.axis)}}return r}}.apply(null,r))||(e.exports=a)},1108:function(e,t,i){var r,a;r=[i.dj.c(e.i),t,i(1),i(0),i(29),i(9),i(4),i(3),i(5),i(2)],void 0===(a=function(e,t,i,r,a,n,s,l,o,u){var c=o.getLogger("esri.layers.support.PixelBlock");return function(e){function t(t){var i=e.call(this,t)||this;return i.width=null,i.height=null,i.pixelType="f32",i.validPixelCount=null,i.mask=null,i.maskIsAlpha=!1,i.pixels=null,i.statistics=null,i}var s;return i(t,e),s=t,t.createEmptyBand=function(e,t){return new(s.getPixelArrayConstructor(e))(t)},t.getPixelArrayConstructor=function(e){var t;switch(e){case"u1":case"u2":case"u4":case"u8":t=Uint8Array;break;case"u16":t=Uint16Array;break;case"u32":t=Uint32Array;break;case"s8":t=Int8Array;break;case"s16":t=Int16Array;break;case"s32":t=Int32Array;break;case"u32":t=Uint32Array;break;case"f32":t=Float32Array;break;case"f64":t=Float64Array;break;case"c64":case"c128":case"unknown":t=Float32Array;break;default:a.neverReached(e)}return t},t.prototype.castPixelType=function(e){if(!e)return"f32";var t=e.toLowerCase();return["u1","u2","u4"].indexOf(t)>-1?t="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(t)&&(t="f32"),t},t.prototype.getPlaneCount=function(){return this.pixels&&this.pixels.length},t.prototype.addData=function(e){if(!e.pixels||e.pixels.length!==this.width*this.height)throw new n("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(e.pixels),this.statistics.push(e.statistics||{minValue:null,maxValue:null})},t.prototype.getAsRGBA=function(){var e=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(e);break;default:this._fillFrom8Bit(e)}return new Uint8ClampedArray(e)},t.prototype.getAsRGBAFloat=function(){var e=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(e),e},t.prototype.updateStatistics=function(){var e=this;this.statistics=this.pixels.map((function(t){return e._calculateBandStatistics(t,e.mask)}));var t=this.mask,i=0;if(t)for(var r=0;r<t.length;r++)t[r]&&i++;else i=this.width*this.height;this.validPixelCount=i},t.prototype.clamp=function(e){if(e&&"f64"!==e&&"f32"!==e){var t;switch(e){case"u8":t=[0,255];break;case"u16":t=[0,65535];break;case"u32":t=[0,4294967295];break;case"s8":t=[-128,127];break;case"s16":t=[-32768,32767];break;case"s32":t=[-2147483648,2147483647];break;default:t=[-34e38,34e38]}for(var i,r,a,n=t[0],l=t[1],o=this.pixels,u=this.width*this.height,c=o.length,f=[],h=0;h<c;h++){a=s.createEmptyBand(e,u),i=o[h];for(var p=0;p<u;p++)r=i[p],a[p]=r>l?l:r<n?n:r;f.push(a)}this.pixels=f,this.pixelType=e}},t.prototype.clone=function(){var e,t=new s({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));var i=s.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];var r=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=r?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=l.clone(this.statistics[e]);return t},t.prototype._fillFrom8Bit=function(e){var t=this.mask,i=this.maskIsAlpha,r=this.pixels;if(e&&r&&r.length){var a,n,s,l;a=n=s=r[0],r.length>=3?(n=r[1],s=r[2]):2===r.length&&(n=r[1]);var o=new Uint32Array(e),u=this.width*this.height;if(a.length===u)if(t&&t.length===u)if(i)for(l=0;l<u;l++)t[l]&&(o[l]=t[l]<<24|s[l]<<16|n[l]<<8|a[l]);else for(l=0;l<u;l++)t[l]&&(o[l]=255<<24|s[l]<<16|n[l]<<8|a[l]);else for(l=0;l<u;l++)o[l]=255<<24|s[l]<<16|n[l]<<8|a[l];else c.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}else c.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")},t.prototype._fillFromNon8Bit=function(e){var t=this.pixels,i=this.mask,r=this.statistics;if(e&&t&&t.length){var a=this.pixelType,n=1,s=0;if(r&&r.length>0)s=r.map((function(e){return e.minValue})).reduce((function(e,t){return Math.min(e,t)})),n=255/r.map((function(e){return e.maxValue-e.minValue})).reduce((function(e,t){return Math.max(e,t)}));else{var l=255;"s8"===a?(s=-128,l=127):"u16"===a?l=65535:"s16"===a?(s=-32768,l=32767):"u32"===a?l=4294967295:"s32"===a?(s=-2147483648,l=2147483647):"f32"===a?(s=-34e38,l=34e38):"f64"===a&&(s=-Number.MAX_VALUE,l=Number.MAX_VALUE),n=255/(l-s)}var o,u,f,h,p,d=new Uint32Array(e),m=this.width*this.height;if((o=u=f=t[0]).length!==m)return c.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(t.length>=2)if(u=t[1],t.length>=3&&(f=t[2]),i&&i.length===m)for(h=0;h<m;h++)i[h]&&(d[h]=255<<24|(f[h]-s)*n<<16|(u[h]-s)*n<<8|(o[h]-s)*n);else for(h=0;h<m;h++)d[h]=255<<24|(f[h]-s)*n<<16|(u[h]-s)*n<<8|(o[h]-s)*n;else if(i&&i.length===m)for(h=0;h<m;h++)p=(o[h]-s)*n,i[h]&&(d[h]=255<<24|p<<16|p<<8|p);else for(h=0;h<m;h++)p=(o[h]-s)*n,d[h]=255<<24|p<<16|p<<8|p}else c.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")},t.prototype._fillFrom32Bit=function(e){var t,i,r,a,n=this.pixels,s=this.mask;if(!e||!n||!n.length)return c.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");t=i=r=n[0],n.length>=3?(i=n[1],r=n[2]):2===n.length&&(i=n[1]);var l=this.width*this.height;if(t.length!==l)return c.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var o=0;if(s&&s.length===l)for(a=0;a<l;a++)e[o++]=t[a],e[o++]=i[a],e[o++]=r[a],e[o++]=1&s[a];else for(a=0;a<l;a++)e[o++]=t[a],e[o++]=i[a],e[o++]=r[a],e[o++]=1},t.prototype._calculateBandStatistics=function(e,t){var i,r=1/0,a=-1/0,n=e.length,s=0;if(t)for(i=0;i<n;i++)t[i]&&(r=(s=e[i])<r?s:r,a=s>a?s:a);else for(i=0;i<n;i++)r=(s=e[i])<r?s:r,a=s>a?s:a;return{minValue:r,maxValue:a}},r([u.property({json:{write:!0}})],t.prototype,"width",void 0),r([u.property({json:{write:!0}})],t.prototype,"height",void 0),r([u.property({json:{write:!0}})],t.prototype,"pixelType",void 0),r([u.cast("pixelType")],t.prototype,"castPixelType",null),r([u.property({json:{write:!0}})],t.prototype,"validPixelCount",void 0),r([u.property({json:{write:!0}})],t.prototype,"mask",void 0),r([u.property({json:{write:!0}})],t.prototype,"maskIsAlpha",void 0),r([u.property({json:{write:!0}})],t.prototype,"pixels",void 0),r([u.property({json:{write:!0}})],t.prototype,"statistics",void 0),s=r([u.subclass("esri.layers.support.PixelBlock")],t)}(u.declared(s.JSONSupport))}.apply(null,r))||(e.exports=a)},889:function(e,t,i){var r,a;r=[i.dj.c(e.i),t],void 0===(a=function(e,t){function i(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}Object.defineProperty(t,"__esModule",{value:!0}),t.isSizeVariable=function(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass},t.isValidNumber=function(e){return null!=e&&!isNaN(e)&&isFinite(e)},t.getInputValueType=i,t.getTransformationType=function(e,t){var r=t||i(e),a=e.valueUnit||"unknown";return"unknown"===r?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}}.apply(null,r))||(e.exports=a)}}]);