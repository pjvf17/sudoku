(function(r){function e(e){for(var t,u,i=e[0],l=e[1],c=e[2],f=0,v=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&v.push(a[u][0]),a[u]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(r[t]=l[t]);s&&s(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var r,e=0;e<o.length;e++){for(var n=o[e],t=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(t=!1)}t&&(o.splice(e--,1),r=u(u.s=n[0]))}return r}var t={},a={app:0},o=[];function u(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=r,u.c=t,u.d=function(r,e,n){u.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},u.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},u.t=function(r,e){if(1&e&&(r=u(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)u.d(n,t,function(e){return r[e]}.bind(null,t));return n},u.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return u.d(e,"a",e),e},u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(r,e,n){r.exports=n("56d7")},"56d7":function(r,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),a=(n("99af"),n("5c40")),o={id:"app"},u={class:"pane"};function i(r,e){return Object(a["o"])(),Object(a["e"])("div",o,[Object(a["h"])("div",u,[Object(a["h"])("table",null,[Object(a["h"])("tbody",null,[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(r.puzzle,(function(e,n){return Object(a["o"])(),Object(a["e"])("tr",{key:n},[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(e,(function(e,o){return Object(a["o"])(),Object(a["e"])("td",{key:"".concat(o,"+").concat(n,"-td"),id:"".concat(o,"+").concat(n,"-td-id")},[Object(a["h"])("input",{value:e.number,onKeydown:Object(t["b"])((function(t){return r.handleInput({cell:e,row:n,col:o,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(o,"+").concat(n),id:"".concat(o,"+").concat(n),class:[{"border-right":(o+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==o,"border-top":0==n,bold:e.given,invalid:!e.valid.value},"sudoku-board-cell"],disabled:e.given,ref:function(e){r.inputs[n][o]=e},onClick:function(e){return r.handleClick({row:n,col:o})},style:{"background-color":e.focus}},null,46,["value","onKeydown","name","id","disabled","onClick"])],8,["id"])})),128))])})),128))])])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var l,c=n("a1e9"),s={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==l?l:"ws://tealog.xyz:8010";console.log(f);var v=new WebSocket(f);console.log(s),function(){s.DIGITS="123456789";var r="ABCDEFGHI",e=s.DIGITS,n=null,t=null,a=null,o=null,u=17,i=81,l={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function c(){n=s._cross(r,e),t=s._get_all_units(r,e),a=s._get_square_units_map(n,t),o=s._get_square_peers_map(n,a)}s.BLANK_CHAR=".",s.BLANK_BOARD=".................................................................................",s.generate=function(r,e){"string"!==typeof r&&"undefined"!==typeof r||(r=l[r]||l.easy),r=s._force_range(r,i+1,u),e=e||!0;for(var t="",a=0;a<i;++a)t+=".";var o=s._get_candidates_map(t),c=s._shuffle(n);for(var f in c){var v=c[f],p=s._rand_range(o[v].length),d=o[v][p];if(!s._assign(o,v,d))break;var _=[];for(var f in n){v=n[f];1==o[v].length&&_.push(o[v])}if(_.length>=r&&s._strip_dups(_).length>=8){var h="",g=[];for(var a in n){v=n[a];1==o[v].length?(h+=o[v],g.push(a)):h+=s.BLANK_CHAR}var b=g.length;if(b>r){g=s._shuffle(g);for(a=0;a<b-r;++a){var O=parseInt(g[a]);h=h.substr(0,O)+s.BLANK_CHAR+h.substr(O+1)}}if(s.solve(h))return h}}return s.generate(r)},s.solve=function(r,e){var n=s.validate_board(r);if(!0!==n)throw n;var t=0;for(var a in r)r[a]!==s.BLANK_CHAR&&s._in(r[a],s.DIGITS)&&++t;if(t<u)throw"Too few givens. Minimum givens is "+u;e=e||!1;var o=s._get_candidates_map(r),i=s._search(o,e);if(i){var l="";for(var c in i)l+=i[c];return l}return!1},s.get_candidates=function(r){var e=s.validate_board(r);if(!0!==e)throw e;var n=s._get_candidates_map(r);if(!n)return!1;var t=[],a=[],o=0;for(var u in n){var i=n[u];a.push(i),o%9==8&&(t.push(a),a=[]),++o}return t},s._get_candidates_map=function(r){var e=s.validate_board(r);if(!0!==e)throw e;var t={},a=s._get_square_vals_map(r);for(var o in n)t[n[o]]=s.DIGITS;for(var u in a){var i=a[u];if(s._in(i,s.DIGITS)){var l=s._assign(t,u,i);if(!l)return!1}}return t},s._search=function(r,e){if(!r)return!1;e=e||!1;var t=0;for(var a in n){var o=n[a],u=r[o].length;u>t&&(t=u,o)}if(1===t)return r;var i=10,l=null;for(a in n){o=n[a],u=r[o].length;u<i&&u>1&&(i=u,l=o)}var c=r[l];if(e)for(f=c.length-1;f>=0;--f){v=c[f],p=JSON.parse(JSON.stringify(r)),d=s._search(s._assign(p,l,v),e);if(d)return d}else for(var f in c){var v=c[f],p=JSON.parse(JSON.stringify(r)),d=s._search(s._assign(p,l,v));if(d)return d}return!1},s._assign=function(r,e,n){var t=r[e].replace(n,"");for(var a in t){var o=t[a],u=s._eliminate(r,e,o);if(!u)return!1}return r},s._eliminate=function(r,e,n){if(!s._in(n,r[e]))return r;r[e]=r[e].replace(n,"");var t=r[e].length;if(1===t){var u=r[e];for(var i in o[e]){var l=o[e][i],c=s._eliminate(r,l,u);if(!c)return!1}}if(0===t)return!1;for(var f in a[e]){var v=a[e][f],p=[];for(var d in v){var _=v[d];s._in(n,r[_])&&p.push(_)}if(0===p.length)return!1;if(1===p.length){c=s._assign(r,p[0],n);if(!c)return!1}}return r},s._get_square_vals_map=function(r){var e={};if(r.length!=n.length)throw"Board/squares length mismatch.";for(var t in n)e[n[t]]=r[t];return e},s._get_square_units_map=function(r,e){var n={};for(var t in r){var a=r[t],o=[];for(var u in e){var i=e[u];-1!==i.indexOf(a)&&o.push(i)}n[a]=o}return n},s._get_square_peers_map=function(r,e){var n={};for(var t in r){var a=r[t],o=e[a],u=[];for(var i in o){var l=o[i];for(var c in l){var s=l[c];-1===u.indexOf(s)&&s!==a&&u.push(s)}}n[a]=u}return n},s._get_all_units=function(r,e){var n=[];for(var t in r)n.push(s._cross(r[t],e));for(var a in e)n.push(s._cross(r,e[a]));var o=["ABC","DEF","GHI"],u=["123","456","789"];for(var i in o)for(var l in u)n.push(s._cross(o[i],u[l]));return n},s.board_string_to_grid=function(r){var e=[],n=[];for(var t in r)n.push(r[t]),t%9==8&&(e.push(n),n=[]);return e},s.board_grid_to_string=function(r){for(var e="",n=0;n<9;++n)for(var t=0;t<9;++t)e+=r[n][t];return e},s.print_board=function(r){var e=s.validate_board(r);if(!0!==e)throw e;var n=" ",t="\n",a="  ",o="\n",u="";for(var i in r){var l=r[i];u+=l+n,i%3===2&&(u+=a),i%9===8&&(u+=t),i%27===26&&(u+=o)}console.log(u)},s.validate_board=function(r){if(!r)return"Empty board";if(r.length!==i)return"Invalid board size. Board must be exactly "+i+" squares.";for(var e in r)if(!s._in(r[e],s.DIGITS)&&r[e]!==s.BLANK_CHAR)return"Invalid board character encountered at index "+e+": "+r[e];return!0},s._cross=function(r,e){var n=[];for(var t in r)for(var a in e)n.push(r[t]+e[a]);return n},s._in=function(r,e){return-1!==e.indexOf(r)},s._first_true=function(r){for(var e in r)if(r[e])return r[e];return!1},s._shuffle=function(r){for(var e=[],n=0;n<r.length;++n)e.push(!1);for(var n in r){var t=s._rand_range(r.length);while(e[t])t=t+1>r.length-1?0:t+1;e[t]=r[n]}return e},s._rand_range=function(r,e){if(e=e||0,r)return Math.floor(Math.random()*(r-e))+e;throw"Range undefined"},s._strip_dups=function(r){var e=[],n={};for(var t in r){var a=r[t];n[a]||(e.push(a),n[a]=!0)}return e},s._force_range=function(r,e,n){return n=n||0,r=r||0,r<n?n:r>e?e:r},c()}();var p={setup:function(){Object(a["l"])((function(){v.close(1e3,"logging off")})),v.onopen=function(){console.log("connection established")};var r=Object(c["h"])({}),e=Object(c["h"])({});v.onmessage=function(n){var t=n.data,a=JSON.parse(t),o=a.color,u=a.puzzle;console.log(u),console.log(o),u&&(e.value=u),o&&(r.value=o)};var n=Object(c["h"])([]);n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),Object(a["m"])((function(){n.value=[],n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([]),n.value.push([])}));var t=function t(a,o,u,i,l,c){try{if(n.value[a+u][o+i].disabled){if("row"==l?i>0?i++:i<0&&i--:"col"==l&&(u>0?u++:u<0&&u--),c++,c>4)return 0;t(a,o,u,i,l,c)}else n.value[a+u][o+i].focus(),e.value[a+u][o+i].focus=r.value,v.send(JSON.stringify({puzzle:e.value}))}catch(s){}},o=function(r){var n=r.cell,a=r.row,o=r.col,u=r.key,i=r.$event,l=["1","2","3","4","5","6","7","8","9"],c=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!n.given&&l.includes(u))i.preventDefault(),e.value[a][o].number=u,v.send(JSON.stringify({puzzle:e.value}));else if("Backspace"==u)i.preventDefault(),e.value[a][o].number="",v.send(JSON.stringify({puzzle:e.value}));else if(c.includes(u))switch(u){case"ArrowRight":t(a,o,0,1,"row");break;case"ArrowLeft":t(a,o,0,-1,"row");break;case"ArrowDown":t(a,o,1,0,"col");break;case"ArrowUp":t(a,o,-1,0,"col");break}else"Tab"!=u&&(i.preventDefault(),console.log(u),console.log("Meta"!=u))},u=function(n){var t=n.row,a=n.col;console.log(t),console.log(a),e.value[t][a].focus=r.value,v.send(JSON.stringify({puzzle:e.value}))};return{puzzle:e,handleInput:o,handleClick:u,inputs:n,color:r}}};n("9cdc");p.render=i;var d=p;Object(t["a"])(d).mount("#app")},"942d":function(r,e,n){},"9cdc":function(r,e,n){"use strict";n("942d")}});
//# sourceMappingURL=app.9d1fef9a.js.map