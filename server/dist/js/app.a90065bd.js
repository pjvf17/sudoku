(function(r){function e(e){for(var t,u,i=e[0],l=e[1],f=e[2],c=0,v=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&v.push(a[u][0]),a[u]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(r[t]=l[t]);s&&s(e);while(v.length)v.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var r,e=0;e<o.length;e++){for(var n=o[e],t=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(t=!1)}t&&(o.splice(e--,1),r=u(u.s=n[0]))}return r}var t={},a={app:0},o=[];function u(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=r,u.c=t,u.d=function(r,e,n){u.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},u.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},u.t=function(r,e){if(1&e&&(r=u(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)u.d(n,t,function(e){return r[e]}.bind(null,t));return n},u.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return u.d(e,"a",e),e},u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(r,e,n){r.exports=n("56d7")},"56d7":function(r,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),a=(n("99af"),n("5c40")),o={id:"app"};function u(r,e){return Object(a["o"])(),Object(a["e"])("div",o,[Object(a["h"])("table",null,[Object(a["h"])("tbody",null,[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(r.puzzle,(function(e,n){return Object(a["o"])(),Object(a["e"])("tr",{key:n},[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(e,(function(e,o){return Object(a["o"])(),Object(a["e"])("td",{key:"".concat(o,"+").concat(n,"-td"),id:"".concat(o,"+").concat(n,"-td-id")},[Object(a["h"])("input",{value:e.number,onKeydown:Object(t["b"])((function(t){return r.handleInput({cell:e,row:n,col:o,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(o,"+").concat(n),id:"".concat(o,"+").concat(n),class:[{"border-right":(o+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==o,"border-top":0==n,bold:e.given,invalid:!e.valid.value},"sudoku-board-cell"],disabled:e.given,ref:function(e){r.inputs[n][o]=e}},null,42,["value","onKeydown","name","id","disabled"])],8,["id"])})),128))])})),128))])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var i,l=n("a1e9"),f={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var s=null!==(i=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==i?i:"ws://tealog.xyz:8010";console.log(s);var c=new WebSocket(s);console.log(f),function(){f.DIGITS="123456789";var r="ABCDEFGHI",e=f.DIGITS,n=null,t=null,a=null,o=null,u=17,i=81,l={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function s(){n=f._cross(r,e),t=f._get_all_units(r,e),a=f._get_square_units_map(n,t),o=f._get_square_peers_map(n,a)}f.BLANK_CHAR=".",f.BLANK_BOARD=".................................................................................",f.generate=function(r,e){"string"!==typeof r&&"undefined"!==typeof r||(r=l[r]||l.easy),r=f._force_range(r,i+1,u),e=e||!0;for(var t="",a=0;a<i;++a)t+=".";var o=f._get_candidates_map(t),s=f._shuffle(n);for(var c in s){var v=s[c],p=f._rand_range(o[v].length),_=o[v][p];if(!f._assign(o,v,_))break;var d=[];for(var c in n){v=n[c];1==o[v].length&&d.push(o[v])}if(d.length>=r&&f._strip_dups(d).length>=8){var h="",g=[];for(var a in n){v=n[a];1==o[v].length?(h+=o[v],g.push(a)):h+=f.BLANK_CHAR}var b=g.length;if(b>r){g=f._shuffle(g);for(a=0;a<b-r;++a){var O=parseInt(g[a]);h=h.substr(0,O)+f.BLANK_CHAR+h.substr(O+1)}}if(f.solve(h))return h}}return f.generate(r)},f.solve=function(r,e){var n=f.validate_board(r);if(!0!==n)throw n;var t=0;for(var a in r)r[a]!==f.BLANK_CHAR&&f._in(r[a],f.DIGITS)&&++t;if(t<u)throw"Too few givens. Minimum givens is "+u;e=e||!1;var o=f._get_candidates_map(r),i=f._search(o,e);if(i){var l="";for(var s in i)l+=i[s];return l}return!1},f.get_candidates=function(r){var e=f.validate_board(r);if(!0!==e)throw e;var n=f._get_candidates_map(r);if(!n)return!1;var t=[],a=[],o=0;for(var u in n){var i=n[u];a.push(i),o%9==8&&(t.push(a),a=[]),++o}return t},f._get_candidates_map=function(r){var e=f.validate_board(r);if(!0!==e)throw e;var t={},a=f._get_square_vals_map(r);for(var o in n)t[n[o]]=f.DIGITS;for(var u in a){var i=a[u];if(f._in(i,f.DIGITS)){var l=f._assign(t,u,i);if(!l)return!1}}return t},f._search=function(r,e){if(!r)return!1;e=e||!1;var t=0;for(var a in n){var o=n[a],u=r[o].length;u>t&&(t=u,o)}if(1===t)return r;var i=10,l=null;for(a in n){o=n[a],u=r[o].length;u<i&&u>1&&(i=u,l=o)}var s=r[l];if(e)for(c=s.length-1;c>=0;--c){v=s[c],p=JSON.parse(JSON.stringify(r)),_=f._search(f._assign(p,l,v),e);if(_)return _}else for(var c in s){var v=s[c],p=JSON.parse(JSON.stringify(r)),_=f._search(f._assign(p,l,v));if(_)return _}return!1},f._assign=function(r,e,n){var t=r[e].replace(n,"");for(var a in t){var o=t[a],u=f._eliminate(r,e,o);if(!u)return!1}return r},f._eliminate=function(r,e,n){if(!f._in(n,r[e]))return r;r[e]=r[e].replace(n,"");var t=r[e].length;if(1===t){var u=r[e];for(var i in o[e]){var l=o[e][i],s=f._eliminate(r,l,u);if(!s)return!1}}if(0===t)return!1;for(var c in a[e]){var v=a[e][c],p=[];for(var _ in v){var d=v[_];f._in(n,r[d])&&p.push(d)}if(0===p.length)return!1;if(1===p.length){s=f._assign(r,p[0],n);if(!s)return!1}}return r},f._get_square_vals_map=function(r){var e={};if(r.length!=n.length)throw"Board/squares length mismatch.";for(var t in n)e[n[t]]=r[t];return e},f._get_square_units_map=function(r,e){var n={};for(var t in r){var a=r[t],o=[];for(var u in e){var i=e[u];-1!==i.indexOf(a)&&o.push(i)}n[a]=o}return n},f._get_square_peers_map=function(r,e){var n={};for(var t in r){var a=r[t],o=e[a],u=[];for(var i in o){var l=o[i];for(var f in l){var s=l[f];-1===u.indexOf(s)&&s!==a&&u.push(s)}}n[a]=u}return n},f._get_all_units=function(r,e){var n=[];for(var t in r)n.push(f._cross(r[t],e));for(var a in e)n.push(f._cross(r,e[a]));var o=["ABC","DEF","GHI"],u=["123","456","789"];for(var i in o)for(var l in u)n.push(f._cross(o[i],u[l]));return n},f.board_string_to_grid=function(r){var e=[],n=[];for(var t in r)n.push(r[t]),t%9==8&&(e.push(n),n=[]);return e},f.board_grid_to_string=function(r){for(var e="",n=0;n<9;++n)for(var t=0;t<9;++t)e+=r[n][t];return e},f.print_board=function(r){var e=f.validate_board(r);if(!0!==e)throw e;var n=" ",t="\n",a="  ",o="\n",u="";for(var i in r){var l=r[i];u+=l+n,i%3===2&&(u+=a),i%9===8&&(u+=t),i%27===26&&(u+=o)}console.log(u)},f.validate_board=function(r){if(!r)return"Empty board";if(r.length!==i)return"Invalid board size. Board must be exactly "+i+" squares.";for(var e in r)if(!f._in(r[e],f.DIGITS)&&r[e]!==f.BLANK_CHAR)return"Invalid board character encountered at index "+e+": "+r[e];return!0},f._cross=function(r,e){var n=[];for(var t in r)for(var a in e)n.push(r[t]+e[a]);return n},f._in=function(r,e){return-1!==e.indexOf(r)},f._first_true=function(r){for(var e in r)if(r[e])return r[e];return!1},f._shuffle=function(r){for(var e=[],n=0;n<r.length;++n)e.push(!1);for(var n in r){var t=f._rand_range(r.length);while(e[t])t=t+1>r.length-1?0:t+1;e[t]=r[n]}return e},f._rand_range=function(r,e){if(e=e||0,r)return Math.floor(Math.random()*(r-e))+e;throw"Range undefined"},f._strip_dups=function(r){var e=[],n={};for(var t in r){var a=r[t];n[a]||(e.push(a),n[a]=!0)}return e},f._force_range=function(r,e,n){return n=n||0,r=r||0,r<n?n:r>e?e:r},s()}();var v={setup:function(){Object(a["l"])((function(){c.close(1e3,"logging off")})),c.onopen=function(){console.log("connection established")};var r=Object(l["h"])({});c.onmessage=function(e){var n=e.data;r.value=JSON.parse(n).puzzle};var e=Object(l["h"])([]);e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),Object(a["m"])((function(){e.value=[],e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([]),e.value.push([])}));var n=function r(n,t,a,o,u){e.value[n+a][t+o].disabled?(a="row"==u?a<0?a--:a++:a,o="col"==u?o<0?o--:o++:o,r(n,t,a,o)):e.value[n+a][t+o].focus()},t=function(e){var t=e.cell,a=e.row,o=e.col,u=e.key,i=e.$event,l=["1","2","3","4","5","6","7","8","9"],f=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!t.given&&l.includes(u))i.preventDefault(),r.value[a][o].number=u,c.send(JSON.stringify({puzzle:r.value}));else if("Backspace"==u)i.preventDefault(),r.value[a][o].number="",c.send(JSON.stringify({puzzle:r.value}));else if(f.includes(u))switch(u){case"ArrowRight":n(a,o,0,1,"row");break;case"ArrowLeft":n(a,o,0,-1,"row");break;case"ArrowDown":n(a,o);break;case"ArrowUp":n(a,o);break}else"Tab"!=u&&(i.preventDefault(),console.log(u),console.log("Meta"!=u))};return{puzzle:r,handleInput:t,inputs:e}}};n("9cdc");v.render=u;var p=v;Object(t["a"])(p).mount("#app")},"942d":function(r,e,n){},"9cdc":function(r,e,n){"use strict";n("942d")}});
//# sourceMappingURL=app.a90065bd.js.map