(function(r){function n(n){for(var t,i,u=n[0],f=n[1],l=n[2],s=0,v=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(r[t]=f[t]);c&&c(n);while(v.length)v.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var r,n=0;n<o.length;n++){for(var e=o[n],t=!0,u=1;u<e.length;u++){var f=e[u];0!==a[f]&&(t=!1)}t&&(o.splice(n--,1),r=i(i.s=e[0]))}return r}var t={},a={app:0},o=[];function i(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return r[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=r,i.c=t,i.d=function(r,n,e){i.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},i.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,n){if(1&n&&(r=i(r)),8&n)return r;if(4&n&&"object"===typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var t in r)i.d(e,t,function(n){return r[n]}.bind(null,t));return e},i.n=function(r){var n=r&&r.__esModule?function(){return r["default"]}:function(){return r};return i.d(n,"a",n),n},i.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=f;o.push([0,"chunk-vendors"]),e()})({0:function(r,n,e){r.exports=e("56d7")},"56d7":function(r,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var t=e("830f"),a=(e("99af"),e("5c40")),o={id:"app"},i=Object(a["h"])(" /> ");function u(r,n){return Object(a["p"])(),Object(a["e"])("div",o,[Object(a["i"])("table",null,[Object(a["i"])("tbody",null,[(Object(a["p"])(!0),Object(a["e"])(a["b"],null,Object(a["q"])(r.puzzle,(function(n,e){return Object(a["p"])(),Object(a["e"])("tr",{key:e},[(Object(a["p"])(!0),Object(a["e"])(a["b"],null,Object(a["q"])(n,(function(n,o){return Object(a["p"])(),Object(a["e"])("td",{key:e+o},[Object(a["i"])("input",{value:n.number,onKeydown:Object(t["b"])((function(t){return r.handleInput({cell:n,row:e,col:o,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(o,"+").concat(e),id:"".concat(o,"+").concat(e),class:[{"border-right":(o+1)%3==0,"border-bottom":(e+1)%3==0,"border-left":0==o,"border-top":0==e,bold:n.given,invalid:!n.valid.value},"sudoku-board-cell"],disabled:n.given,ref:function(n){r.inputs[e][o]=n}},null,42,["value","onKeydown","name","id","disabled"]),i])})),128))])})),128))])])])}e("caad"),e("c975"),e("ac1f"),e("5319");var f,l=e("a1e9"),c={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var s=null!==(f=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==f?f:"ws://tealog.xyz:8010";console.log(s);var v=new WebSocket(s);console.log(c),function(){c.DIGITS="123456789";var r="ABCDEFGHI",n=c.DIGITS,e=null,t=null,a=null,o=null,i=17,u=81,f={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function l(){e=c._cross(r,n),t=c._get_all_units(r,n),a=c._get_square_units_map(e,t),o=c._get_square_peers_map(e,a)}c.BLANK_CHAR=".",c.BLANK_BOARD=".................................................................................",c.generate=function(r,n){"string"!==typeof r&&"undefined"!==typeof r||(r=f[r]||f.easy),r=c._force_range(r,u+1,i),n=n||!0;for(var t="",a=0;a<u;++a)t+=".";var o=c._get_candidates_map(t),l=c._shuffle(e);for(var s in l){var v=l[s],_=c._rand_range(o[v].length),d=o[v][_];if(!c._assign(o,v,d))break;var p=[];for(var s in e){v=e[s];1==o[v].length&&p.push(o[v])}if(p.length>=r&&c._strip_dups(p).length>=8){var g="",b=[];for(var a in e){v=e[a];1==o[v].length?(g+=o[v],b.push(a)):g+=c.BLANK_CHAR}var h=b.length;if(h>r){b=c._shuffle(b);for(a=0;a<h-r;++a){var O=parseInt(b[a]);g=g.substr(0,O)+c.BLANK_CHAR+g.substr(O+1)}}if(c.solve(g))return g}}return c.generate(r)},c.solve=function(r,n){var e=c.validate_board(r);if(!0!==e)throw e;var t=0;for(var a in r)r[a]!==c.BLANK_CHAR&&c._in(r[a],c.DIGITS)&&++t;if(t<i)throw"Too few givens. Minimum givens is "+i;n=n||!1;var o=c._get_candidates_map(r),u=c._search(o,n);if(u){var f="";for(var l in u)f+=u[l];return f}return!1},c.get_candidates=function(r){var n=c.validate_board(r);if(!0!==n)throw n;var e=c._get_candidates_map(r);if(!e)return!1;var t=[],a=[],o=0;for(var i in e){var u=e[i];a.push(u),o%9==8&&(t.push(a),a=[]),++o}return t},c._get_candidates_map=function(r){var n=c.validate_board(r);if(!0!==n)throw n;var t={},a=c._get_square_vals_map(r);for(var o in e)t[e[o]]=c.DIGITS;for(var i in a){var u=a[i];if(c._in(u,c.DIGITS)){var f=c._assign(t,i,u);if(!f)return!1}}return t},c._search=function(r,n){if(!r)return!1;n=n||!1;var t=0;for(var a in e){var o=e[a],i=r[o].length;i>t&&(t=i,o)}if(1===t)return r;var u=10,f=null;for(a in e){o=e[a],i=r[o].length;i<u&&i>1&&(u=i,f=o)}var l=r[f];if(n)for(s=l.length-1;s>=0;--s){v=l[s],_=JSON.parse(JSON.stringify(r)),d=c._search(c._assign(_,f,v),n);if(d)return d}else for(var s in l){var v=l[s],_=JSON.parse(JSON.stringify(r)),d=c._search(c._assign(_,f,v));if(d)return d}return!1},c._assign=function(r,n,e){var t=r[n].replace(e,"");for(var a in t){var o=t[a],i=c._eliminate(r,n,o);if(!i)return!1}return r},c._eliminate=function(r,n,e){if(!c._in(e,r[n]))return r;r[n]=r[n].replace(e,"");var t=r[n].length;if(1===t){var i=r[n];for(var u in o[n]){var f=o[n][u],l=c._eliminate(r,f,i);if(!l)return!1}}if(0===t)return!1;for(var s in a[n]){var v=a[n][s],_=[];for(var d in v){var p=v[d];c._in(e,r[p])&&_.push(p)}if(0===_.length)return!1;if(1===_.length){l=c._assign(r,_[0],e);if(!l)return!1}}return r},c._get_square_vals_map=function(r){var n={};if(r.length!=e.length)throw"Board/squares length mismatch.";for(var t in e)n[e[t]]=r[t];return n},c._get_square_units_map=function(r,n){var e={};for(var t in r){var a=r[t],o=[];for(var i in n){var u=n[i];-1!==u.indexOf(a)&&o.push(u)}e[a]=o}return e},c._get_square_peers_map=function(r,n){var e={};for(var t in r){var a=r[t],o=n[a],i=[];for(var u in o){var f=o[u];for(var l in f){var c=f[l];-1===i.indexOf(c)&&c!==a&&i.push(c)}}e[a]=i}return e},c._get_all_units=function(r,n){var e=[];for(var t in r)e.push(c._cross(r[t],n));for(var a in n)e.push(c._cross(r,n[a]));var o=["ABC","DEF","GHI"],i=["123","456","789"];for(var u in o)for(var f in i)e.push(c._cross(o[u],i[f]));return e},c.board_string_to_grid=function(r){var n=[],e=[];for(var t in r)e.push(r[t]),t%9==8&&(n.push(e),e=[]);return n},c.board_grid_to_string=function(r){for(var n="",e=0;e<9;++e)for(var t=0;t<9;++t)n+=r[e][t];return n},c.print_board=function(r){var n=c.validate_board(r);if(!0!==n)throw n;var e=" ",t="\n",a="  ",o="\n",i="";for(var u in r){var f=r[u];i+=f+e,u%3===2&&(i+=a),u%9===8&&(i+=t),u%27===26&&(i+=o)}console.log(i)},c.validate_board=function(r){if(!r)return"Empty board";if(r.length!==u)return"Invalid board size. Board must be exactly "+u+" squares.";for(var n in r)if(!c._in(r[n],c.DIGITS)&&r[n]!==c.BLANK_CHAR)return"Invalid board character encountered at index "+n+": "+r[n];return!0},c._cross=function(r,n){var e=[];for(var t in r)for(var a in n)e.push(r[t]+n[a]);return e},c._in=function(r,n){return-1!==n.indexOf(r)},c._first_true=function(r){for(var n in r)if(r[n])return r[n];return!1},c._shuffle=function(r){for(var n=[],e=0;e<r.length;++e)n.push(!1);for(var e in r){var t=c._rand_range(r.length);while(n[t])t=t+1>r.length-1?0:t+1;n[t]=r[e]}return n},c._rand_range=function(r,n){if(n=n||0,r)return Math.floor(Math.random()*(r-n))+n;throw"Range undefined"},c._strip_dups=function(r){var n=[],e={};for(var t in r){var a=r[t];e[a]||(n.push(a),e[a]=!0)}return n},c._force_range=function(r,n,e){return e=e||0,r=r||0,r<e?e:r>n?n:r},l()}();var _={setup:function(){Object(a["m"])((function(){v.close(1e3,"logging off")})),v.onopen=function(){console.log("connection established")};var r=Object(l["h"])({});v.onmessage=function(n){var e=n.data;r.value=JSON.parse(e).puzzle};var n=function(n){var e=n.cell,t=n.row,a=n.col,o=n.key,i=n.$event,u=["1","2","3","4","5","6","7","8","9"];!e.given&&u.includes(o)?(i.preventDefault(),r.value[t][a].number=o,console.log("sending"),console.log(Object(l["l"])(r.value)),v.send(JSON.stringify({puzzle:r.value}))):"Backspace"==o?(i.preventDefault(),r.value[t][a].number="",console.log("sending"),console.log(Object(l["l"])(r.value)),v.send(JSON.stringify({puzzle:r.value}))):"Tab"!=o&&(i.preventDefault(),console.log(o),console.log("Meta"!=o))},e=Object(l["h"])();return Object(a["n"])((function(){console.log(e),e.value=null})),{puzzle:r,handleInput:n,inputs:e}}};e("9cdc");_.render=u;var d=_;Object(t["a"])(d).mount("#app")},"942d":function(r,n,e){},"9cdc":function(r,n,e){"use strict";e("942d")}});
//# sourceMappingURL=app.ccd22b9d.js.map