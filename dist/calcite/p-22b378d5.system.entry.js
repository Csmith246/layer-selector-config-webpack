var __awaiter=this&&this.__awaiter||function(t,e,i,s){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function a(t){try{l(s.next(t))}catch(e){r(e)}}function o(t){try{l(s["throw"](t))}catch(e){r(e)}}function l(t){t.done?i(t.value):n(t.value).then(a,o)}l((s=s.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,n,r,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(t){return function(e){return l([t,e])}}function l(a){if(s)throw new TypeError("Generator is already executing.");while(i)try{if(s=1,n&&(r=a[0]&2?n["return"]:a[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;if(n=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(o){a=[6,o];n=0}finally{s=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-dd45b0da.system.js"],(function(t){"use strict";var e,i,s,n,r;return{setters:[function(t){e=t.r;i=t.c;s=t.h;n=t.H;r=t.g}],execute:function(){var a={page:"page",selected:"is-selected",previous:"previous",next:"next",disabled:"is-disabled",ellipsis:"ellipsis",ellipsisStart:"ellipsis--start",ellipsisEnd:"ellipsis--end"};var o={nextLabel:"next",previousLabel:"previous"};var l=":host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:4px 8px}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:12px}:host([scale=m]){--calcite-pagination-spacing:8px 12px}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:16px}:host([scale=l]){--calcite-pagination-spacing:12px 16px}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:20px}:host{display:-ms-inline-flexbox;display:inline-flex;background-color:transparent;-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.previous,.next,.page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:transparent;border:none;border-top:3px solid transparent;border-bottom:3px solid transparent;font-family:inherit;font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-3);cursor:pointer}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:500;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue-1)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{color:var(--calcite-ui-blue-1);background-color:var(--calcite-ui-foreground-2)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:0.4}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";var c=5;var u=t("calcite_pagination",function(){function t(t){var s=this;e(this,t);this.num=20;this.start=1;this.total=0;this.textLabelNext=o.nextLabel;this.textLabelPrevious=o.previousLabel;this.scale="m";this.previousClicked=function(){s.previousPage().then();s.emitUpdate()};this.nextClicked=function(){s.nextPage();s.emitUpdate()};this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7)}t.prototype.connectedCallback=function(){var t=["s","m","l"];if(!t.includes(this.scale))this.scale="m"};t.prototype.nextPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.min(this.getLastStart(),this.start+this.num);return[2]}))}))};t.prototype.previousPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.max(1,this.start-this.num);return[2]}))}))};t.prototype.getLastStart=function(){var t=this,e=t.total,i=t.num;var s=e%i===0?e-i:Math.floor(e/i)*i;return s+1};t.prototype.showLeftEllipsis=function(){return Math.floor(this.start/this.num)>3};t.prototype.showRightEllipsis=function(){return(this.total-this.start)/this.num>3};t.prototype.emitUpdate=function(){this.calcitePaginationUpdate.emit({start:this.start,total:this.total,num:this.num})};t.prototype.renderPages=function(){var t=this;var e=this.getLastStart();var i;var s;if(this.total/this.num<=c){s=1+this.num;i=e-this.num}else{if(this.start/this.num<c-1){s=1+this.num;i=1+4*this.num}else{if(this.start+3*this.num>=this.total){s=e-4*this.num;i=e-this.num}else{s=this.start-this.num;i=this.start+this.num}}}var n=[];while(s<=i){n.push(s);s=s+this.num}return n.map((function(e){return t.renderPage(e)}))};t.prototype.renderPage=function(t){var e;var i=this;var n=Math.floor(t/this.num)+1;return s("button",{class:(e={},e[a.page]=true,e[a.selected]=t===this.start,e),onClick:function(){i.start=t;i.emitUpdate()}},n)};t.prototype.renderLeftEllipsis=function(t){if(this.total/this.num>c&&this.showLeftEllipsis()){return s("span",{class:a.ellipsis+" "+a.ellipsisStart},s("calcite-icon",{scale:t,icon:"ellipsis"}))}};t.prototype.renderRightEllipsis=function(t){if(this.total/this.num>c&&this.showRightEllipsis()){return s("span",{class:a.ellipsis+" "+a.ellipsisEnd},s("calcite-icon",{scale:t,icon:"ellipsis"}))}};t.prototype.render=function(){var t,e;var i=this,r=i.total,o=i.num,l=i.start;var c=this.scale==="l"?"m":"s";return s(n,null,s("button",{class:(t={},t[a.previous]=true,t[a.disabled]=l<o,t),"aria-label":this.textLabelPrevious,onClick:this.previousClicked,disabled:l<o},s("calcite-icon",{scale:c,icon:"chevronLeft"})),this.renderPage(1),this.renderLeftEllipsis(c),this.renderPages(),this.renderRightEllipsis(c),this.renderPage(this.getLastStart()),s("button",{class:(e={},e[a.next]=true,e[a.disabled]=l+o>=r,e),"aria-label":this.textLabelNext,onClick:this.nextClicked,disabled:l+o>=r},s("calcite-icon",{scale:c,icon:"chevronRight"})))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());u.style=l}}}));