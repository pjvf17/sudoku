(function(r){function e(e){for(var t,i,u=e[0],l=e[1],f=e[2],s=0,v=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(r[t]=l[t]);c&&c(e);while(v.length)v.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var r,e=0;e<o.length;e++){for(var n=o[e],t=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(t=!1)}t&&(o.splice(e--,1),r=i(i.s=n[0]))}return r}var t={},a={app:0},o=[];function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=r,i.c=t,i.d=function(r,e,n){i.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},i.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)i.d(n,t,function(e){return r[e]}.bind(null,t));return n},i.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return i.d(e,"a",e),e},i.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(r,e,n){r.exports=n("56d7")},"56d7":function(r,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),a=(n("99af"),n("5c40")),o={id:"app"};function i(r,e){return Object(a["o"])(),Object(a["e"])("div",o,[Object(a["h"])("table",null,[Object(a["h"])("tbody",null,[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(r.puzzle,(function(e,n){return Object(a["o"])(),Object(a["e"])("tr",{key:n},[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(e,(function(e,o){return Object(a["o"])(),Object(a["e"])("td",{key:Math.random()+2*o,id:Math.random()+2*o,ref:function(e){r.inputs[n][o]=e}},[Object(a["h"])("input",{value:e.number,onKeydown:Object(t["b"])((function(t){return r.handleInput({cell:e,row:n,col:o,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(o,"+").concat(n),id:"".concat(o,"+").concat(n),class:[{"border-right":(o+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==o,"border-top":0==n,bold:e.given,invalid:!e.valid.value},"sudoku-board-cell"],disabled:e.given},null,42,["value","onKeydown","name","id","disabled"])],8,["id"])})),128))])})),128))])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var u,l=n("a1e9"),f={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var c=null!==(u=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==u?u:"ws://tealog.xyz:8010";console.log(c);var s=new WebSocket(c);console.log(f),function(){f.DIGITS="123456789";var r="ABCDEFGHI",e=f.DIGITS,n=null,t=null,a=null,o=null,i=17,u=81,l={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function c(){n=f._cross(r,e),t=f._get_all_units(r,e),a=f._get_square_units_map(n,t),o=f._get_square_peers_map(n,a)}f.BLANK_CHAR=".",f.BLANK_BOARD=".................................................................................",f.generate=function(r,e){"string"!==typeof r&&"undefined"!==typeof r||(r=l[r]||l.easy),r=f._force_range(r,u+1,i),e=e||!0;for(var t="",a=0;a<u;++a)t+=".";var o=f._get_candidates_map(t),c=f._shuffle(n);for(var s in c){var v=c[s],_=f._rand_range(o[v].length),d=o[v][_];if(!f._assign(o,v,d))break;var p=[];for(var s in n){v=n[s];1==o[v].length&&p.push(o[v])}if(p.length>=r&&f._strip_dups(p).length>=8){var h="",g=[];for(var a in n){v=n[a];1==o[v].length?(h+=o[v],g.push(a)):h+=f.BLANK_CHAR}var b=g.length;if(b>r){g=f._shuffle(g);for(a=0;a<b-r;++a){var O=parseInt(g[a]);h=h.substr(0,O)+f.BLANK_CHAR+h.substr(O+1)}}if(f.solve(h))return h}}return f.generate(r)},f.solve=function(r,e){var n=f.validate_board(r);if(!0!==n)throw n;var t=0;for(var a in r)r[a]!==f.BLANK_CHAR&&f._in(r[a],f.DIGITS)&&++t;if(t<i)throw"Too few givens. Minimum givens is "+i;e=e||!1;var o=f._get_candidates_map(r),u=f._search(o,e);if(u){var l="";for(var c in u)l+=u[c];return l}return!1},f.get_candidates=function(r){var e=f.validate_board(r);if(!0!==e)throw e;var n=f._get_candidates_map(r);if(!n)return!1;var t=[],a=[],o=0;for(var i in n){var u=n[i];a.push(u),o%9==8&&(t.push(a),a=[]),++o}return t},f._get_candidates_map=function(r){var e=f.validate_board(r);if(!0!==e)throw e;var t={},a=f._get_square_vals_map(r);for(var o in n)t[n[o]]=f.DIGITS;for(var i in a){var u=a[i];if(f._in(u,f.DIGITS)){var l=f._assign(t,i,u);if(!l)return!1}}return t},f._search=function(r,e){if(!r)return!1;e=e||!1;var t=0;for(var a in n){var o=n[a],i=r[o].length;i>t&&(t=i,o)}if(1===t)return r;var u=10,l=null;for(a in n){o=n[a],i=r[o].length;i<u&&i>1&&(u=i,l=o)}var c=r[l];if(e)for(s=c.length-1;s>=0;--s){v=c[s],_=JSON.parse(JSON.stringify(r)),d=f._search(f._assign(_,l,v),e);if(d)return d}else for(var s in c){var v=c[s],_=JSON.parse(JSON.stringify(r)),d=f._search(f._assign(_,l,v));if(d)return d}return!1},f._assign=function(r,e,n){var t=r[e].replace(n,"");for(var a in t){var o=t[a],i=f._eliminate(r,e,o);if(!i)return!1}return r},f._eliminate=function(r,e,n){if(!f._in(n,r[e]))return r;r[e]=r[e].replace(n,"");var t=r[e].length;if(1===t){var i=r[e];for(var u in o[e]){var l=o[e][u],c=f._eliminate(r,l,i);if(!c)return!1}}if(0===t)return!1;for(var s in a[e]){var v=a[e][s],_=[];for(var d in v){var p=v[d];f._in(n,r[p])&&_.push(p)}if(0===_.length)return!1;if(1===_.length){c=f._assign(r,_[0],n);if(!c)return!1}}return r},f._get_square_vals_map=function(r){var e={};if(r.length!=n.length)throw"Board/squares length mismatch.";for(var t in n)e[n[t]]=r[t];return e},f._get_square_units_map=function(r,e){var n={};for(var t in r){var a=r[t],o=[];for(var i in e){var u=e[i];-1!==u.indexOf(a)&&o.push(u)}n[a]=o}return n},f._get_square_peers_map=function(r,e){var n={};for(var t in r){var a=r[t],o=e[a],i=[];for(var u in o){var l=o[u];for(var f in l){var c=l[f];-1===i.indexOf(c)&&c!==a&&i.push(c)}}n[a]=i}return n},f._get_all_units=function(r,e){var n=[];for(var t in r)n.push(f._cross(r[t],e));for(var a in e)n.push(f._cross(r,e[a]));var o=["ABC","DEF","GHI"],i=["123","456","789"];for(var u in o)for(var l in i)n.push(f._cross(o[u],i[l]));return n},f.board_string_to_grid=function(r){var e=[],n=[];for(var t in r)n.push(r[t]),t%9==8&&(e.push(n),n=[]);return e},f.board_grid_to_string=function(r){for(var e="",n=0;n<9;++n)for(var t=0;t<9;++t)e+=r[n][t];return e},f.print_board=function(r){var e=f.validate_board(r);if(!0!==e)throw e;var n=" ",t="\n",a="  ",o="\n",i="";for(var u in r){var l=r[u];i+=l+n,u%3===2&&(i+=a),u%9===8&&(i+=t),u%27===26&&(i+=o)}console.log(i)},f.validate_board=function(r){if(!r)return"Empty board";if(r.length!==u)return"Invalid board size. Board must be exactly "+u+" squares.";for(var e in r)if(!f._in(r[e],f.DIGITS)&&r[e]!==f.BLANK_CHAR)return"Invalid board character encountered at index "+e+": "+r[e];return!0},f._cross=function(r,e){var n=[];for(var t in r)for(var a in e)n.push(r[t]+e[a]);return n},f._in=function(r,e){return-1!==e.indexOf(r)},f._first_true=function(r){for(var e in r)if(r[e])return r[e];return!1},f._shuffle=function(r){for(var e=[],n=0;n<r.length;++n)e.push(!1);for(var n in r){var t=f._rand_range(r.length);while(e[t])t=t+1>r.length-1?0:t+1;e[t]=r[n]}return e},f._rand_range=function(r,e){if(e=e||0,r)return Math.floor(Math.random()*(r-e))+e;throw"Range undefined"},f._strip_dups=function(r){var e=[],n={};for(var t in r){var a=r[t];n[a]||(e.push(a),n[a]=!0)}return e},f._force_range=function(r,e,n){return n=n||0,r=r||0,r<n?n:r>e?e:r},c()}();var v={setup:function(){Object(a["l"])((function(){s.close(1e3,"logging off")})),s.onopen=function(){console.log("connection established")};var r=Object(l["h"])({});s.onmessage=function(e){var n=e.data;r.value=JSON.parse(n).puzzle};var e=function(e){var n=e.cell,t=e.row,a=e.col,o=e.key,i=e.$event,u=["1","2","3","4","5","6","7","8","9"];!n.given&&u.includes(o)?(i.preventDefault(),r.value[t][a].number=o,console.log("sending"),console.log(Object(l["l"])(r.value)),s.send(JSON.stringify({puzzle:r.value}))):"Backspace"==o?(i.preventDefault(),r.value[t][a].number="",console.log("sending"),console.log(Object(l["l"])(r.value)),s.send(JSON.stringify({puzzle:r.value}))):"Tab"!=o&&(i.preventDefault(),console.log(o),console.log("Meta"!=o))},n=Object(l["h"])([]);return n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),Object(a["m"])((function(){console.log(Object(l["l"])(n.value))})),{puzzle:r,handleInput:e,inputs:n}}};n("9cdc");v.render=i;var _=v;Object(t["a"])(_).mount("#app")},"942d":function(r,e,n){},"9cdc":function(r,e,n){"use strict";n("942d")}});
//# sourceMappingURL=app.599301c5.js.map