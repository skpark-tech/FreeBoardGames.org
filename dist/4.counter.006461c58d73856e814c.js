webpackJsonp([4],{70:function(t,n,e){var r=e(54),o=e(16)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},87:function(t,n,e){var r=e(36),o=e(16)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},88:function(t,n,e){var r=e(31);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var c=t["return"];throw void 0!==c&&r(c.call(t)),i}}},89:function(t,n,e){var r=e(16)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(u){}return e}},90:function(t,n,e){var r=e(70),o=e(16)("iterator"),i=e(36);t.exports=e(15).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},262:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:f,payload:t}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments[1],e=v[n.type];return e?e(t,n):t}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.doubleAsync=n.COUNTER_INCREMENT=void 0;var c=e(69),u=r(c),s=e(357),a=r(s);n.increment=o,n["default"]=i;var f=n.COUNTER_INCREMENT="COUNTER_INCREMENT",l=n.doubleAsync=function(){return function(t,n){return new a["default"](function(e){setTimeout(function(){t(o(n().counter)),e()},200)})}},v=(n.actions={increment:o,doubleAsync:l},(0,u["default"])({},f,function(t,n){return t+n.payload})),d=0},339:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var o=e(1),i=r(o),c=n.Counter=function(t){return i["default"].createElement("div",{style:{margin:"0 auto"}},i["default"].createElement("h2",null,"Counter: ",t.counter),i["default"].createElement("button",{className:"btn btn-default",onClick:t.increment},"Increment")," ",i["default"].createElement("button",{className:"btn btn-default",onClick:t.doubleAsync},"Double (Async)"))};c.propTypes={counter:i["default"].PropTypes.number.isRequired,doubleAsync:i["default"].PropTypes.func.isRequired,increment:i["default"].PropTypes.func.isRequired},n["default"]=c},340:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(40),i=e(262),c=e(339),u=r(c),s={increment:function(){return(0,i.increment)(1)},doubleAsync:i.doubleAsync},a=function(t){return{counter:t.counter}};n["default"]=(0,o.connect)(a,s)(u["default"])},357:function(t,n,e){t.exports={"default":e(368),__esModule:!0}},368:function(t,n,e){e(276),e(107),e(277),e(399),t.exports=e(15).Promise},373:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},376:function(t,n,e){var r=e(55),o=e(88),i=e(87),c=e(31),u=e(105),s=e(90),a={},f={},n=t.exports=function(t,n,e,l,v){var d,h,p,_,y=v?function(){return t}:s(t),m=r(e,l,n?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(d=u(t.length);d>b;b++)if(_=n?m(c(h=t[b])[0],h[1]):m(t[b]),_===a||_===f)return _}else for(p=y.call(t);!(h=p.next()).done;)if(_=o(p,m,h.value,n),_===a||_===f)return _};n.BREAK=a,n.RETURN=f},383:function(t,n,e){var r=e(25),o=e(141).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==e(54)(c);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?e():n=void 0,i}}n=void 0,r&&r.enter()};if(s)e=function(){c.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(u&&u.resolve){var v=u.resolve();e=function(){v.then(a)}}else e=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},387:function(t,n,e){var r=e(57);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},389:function(t,n,e){"use strict";var r=e(25),o=e(15),i=e(32),c=e(44),u=e(16)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},390:function(t,n,e){var r=e(31),o=e(131),i=e(16)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},399:function(t,n,e){"use strict";var r,o,i,c=e(102),u=e(25),s=e(55),a=e(70),f=e(28),l=e(72),v=e(131),d=e(373),h=e(376),p=e(390),_=e(141).set,y=e(383)(),m="Promise",b=u.TypeError,x=u.process,w=u[m],x=u.process,E="process"==a(x),j=function(){},T=!!function(){try{var t=w.resolve(1),n=(t.constructor={})[e(16)("species")]=function(t){t(j,j)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof n}catch(r){}}(),g=function(t,n){return t===n||t===w&&n===i},A=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},N=function(t){return g(w,t)?new P(t):new o(t)},P=o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw b("Bad Promise constructor");n=t,e=r}),this.resolve=v(n),this.reject=v(e)},R=function(t){try{t()}catch(n){return{error:n}}},M=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c=o?n.ok:n.fail,u=n.resolve,s=n.reject,a=n.domain;try{c?(o||(2==t._h&&k(t),t._h=1),c===!0?e=r:(a&&a.enter(),e=c(r),a&&a.exit()),e===n.promise?s(b("Promise-chain cycle")):(i=A(e))?i.call(e,u,s):u(e)):s(r)}catch(f){s(f)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&C(t)})}},C=function(t){_.call(u,function(){var n,e,r,o=t._v;if(O(t)&&(n=R(function(){E?x.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=E||O(t)?2:1),t._a=void 0,n)throw n.error})},O=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!O(n.promise))return!1;return!0},k=function(t){_.call(u,function(){var n;E?x.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},U=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=A(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,s(I,r,1),s(U,r,1))}catch(o){U.call(r,o)}}):(e._v=t,e._s=1,M(e,!1))}catch(r){U.call({_w:e,_d:!1},r)}}};T||(w=function(t){d(this,w,m,"_h"),v(t),r.call(this);try{t(s(I,this,1),s(U,this,1))}catch(n){U.call(this,n)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(387)(w.prototype,{then:function(t,n){var e=N(p(this,w));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=E?x.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},"catch":function(t){return this.then(void 0,t)}}),P=function(){var t=new r;this.promise=t,this.resolve=s(I,t,1),this.reject=s(U,t,1)}),f(f.G+f.W+f.F*!T,{Promise:w}),e(104)(w,m),e(389)(m),i=e(15)[m],f(f.S+f.F*!T,m,{reject:function(t){var n=N(this),e=n.reject;return e(t),n.promise}}),f(f.S+f.F*(c||!T),m,{resolve:function(t){if(t instanceof w&&g(t.constructor,this))return t;var n=N(this),e=n.resolve;return e(t),n.promise}}),f(f.S+f.F*!(T&&e(89)(function(t){w.all(t)["catch"](j)})),m,{all:function(t){var n=this,e=N(n),r=e.resolve,o=e.reject,i=R(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,s=!1;e.push(void 0),c++,n.resolve(t).then(function(t){s||(s=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i&&o(i.error),e.promise},race:function(t){var n=this,e=N(n),r=e.reject,o=R(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})}});