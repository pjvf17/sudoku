(function(r){function e(e){for(var t,o,i=e[0],c=e[1],l=e[2],f=0,v=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(r[t]=c[t]);s&&s(e);while(v.length)v.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var r,e=0;e<u.length;e++){for(var n=u[e],t=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(t=!1)}t&&(u.splice(e--,1),r=o(o.s=n[0]))}return r}var t={},a={app:0},u=[];function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=t,o.d=function(r,e,n){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},o.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)o.d(n,t,function(e){return r[e]}.bind(null,t));return n},o.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return o.d(e,"a",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=c;u.push([0,"chunk-vendors"]),n()})({0:function(r,e,n){r.exports=n("56d7")},"56d7":function(r,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),a=(n("99af"),n("5c40")),u={id:"app"},o={class:"pane"};function i(r,e){return Object(a["o"])(),Object(a["e"])("div",u,[Object(a["h"])("div",o,[Object(a["h"])("table",null,[Object(a["h"])("tbody",null,[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(r.sudokuObj.puzzle,(function(e,n){return Object(a["o"])(),Object(a["e"])("tr",{key:n},[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(e,(function(e,u){return Object(a["o"])(),Object(a["e"])("td",{key:"".concat(u,"+").concat(n,"-td"),id:"".concat(u,"+").concat(n,"-td-id"),style:{"background-color":e.focus}},[Object(a["h"])("input",{value:e.number,onKeydown:Object(t["b"])((function(t){return r.handleInput({cell:e,row:n,col:u,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(u,"+").concat(n),id:"".concat(u,"+").concat(n),class:[{"border-right":(u+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==u,"border-top":0==n,bold:e.given,invalid:!e.valid.value},"sudoku-board-cell"],disabled:e.given,ref:function(e){r.inputs[n][u]=e},onClick:function(e){return r.handleClick({row:n,col:u})},style:{"background-color":r.focused["".concat(u,"-").concat(n)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var c,l=n("a1e9"),s={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(c=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==c?c:"ws://tealog.xyz:8010";console.log(f);var v=new WebSocket(f);console.log(s),function(){s.DIGITS="123456789";var r="ABCDEFGHI",e=s.DIGITS,n=null,t=null,a=null,u=null,o=17,i=81,c={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function l(){n=s._cross(r,e),t=s._get_all_units(r,e),a=s._get_square_units_map(n,t),u=s._get_square_peers_map(n,a)}s.BLANK_CHAR=".",s.BLANK_BOARD=".................................................................................",s.generate=function(r,e){"string"!==typeof r&&"undefined"!==typeof r||(r=c[r]||c.easy),r=s._force_range(r,i+1,o),e=e||!0;for(var t="",a=0;a<i;++a)t+=".";var u=s._get_candidates_map(t),l=s._shuffle(n);for(var f in l){var v=l[f],d=s._rand_range(u[v].length),p=u[v][d];if(!s._assign(u,v,p))break;var _=[];for(var f in n){v=n[f];1==u[v].length&&_.push(u[v])}if(_.length>=r&&s._strip_dups(_).length>=8){var h="",b=[];for(var a in n){v=n[a];1==u[v].length?(h+=u[v],b.push(a)):h+=s.BLANK_CHAR}var g=b.length;if(g>r){b=s._shuffle(b);for(a=0;a<g-r;++a){var O=parseInt(b[a]);h=h.substr(0,O)+s.BLANK_CHAR+h.substr(O+1)}}if(s.solve(h))return h}}return s.generate(r)},s.solve=function(r,e){var n=s.validate_board(r);if(!0!==n)throw n;var t=0;for(var a in r)r[a]!==s.BLANK_CHAR&&s._in(r[a],s.DIGITS)&&++t;if(t<o)throw"Too few givens. Minimum givens is "+o;e=e||!1;var u=s._get_candidates_map(r),i=s._search(u,e);if(i){var c="";for(var l in i)c+=i[l];return c}return!1},s.get_candidates=function(r){var e=s.validate_board(r);if(!0!==e)throw e;var n=s._get_candidates_map(r);if(!n)return!1;var t=[],a=[],u=0;for(var o in n){var i=n[o];a.push(i),u%9==8&&(t.push(a),a=[]),++u}return t},s._get_candidates_map=function(r){var e=s.validate_board(r);if(!0!==e)throw e;var t={},a=s._get_square_vals_map(r);for(var u in n)t[n[u]]=s.DIGITS;for(var o in a){var i=a[o];if(s._in(i,s.DIGITS)){var c=s._assign(t,o,i);if(!c)return!1}}return t},s._search=function(r,e){if(!r)return!1;e=e||!1;var t=0;for(var a in n){var u=n[a],o=r[u].length;o>t&&(t=o,u)}if(1===t)return r;var i=10,c=null;for(a in n){u=n[a],o=r[u].length;o<i&&o>1&&(i=o,c=u)}var l=r[c];if(e)for(f=l.length-1;f>=0;--f){v=l[f],d=JSON.parse(JSON.stringify(r)),p=s._search(s._assign(d,c,v),e);if(p)return p}else for(var f in l){var v=l[f],d=JSON.parse(JSON.stringify(r)),p=s._search(s._assign(d,c,v));if(p)return p}return!1},s._assign=function(r,e,n){var t=r[e].replace(n,"");for(var a in t){var u=t[a],o=s._eliminate(r,e,u);if(!o)return!1}return r},s._eliminate=function(r,e,n){if(!s._in(n,r[e]))return r;r[e]=r[e].replace(n,"");var t=r[e].length;if(1===t){var o=r[e];for(var i in u[e]){var c=u[e][i],l=s._eliminate(r,c,o);if(!l)return!1}}if(0===t)return!1;for(var f in a[e]){var v=a[e][f],d=[];for(var p in v){var _=v[p];s._in(n,r[_])&&d.push(_)}if(0===d.length)return!1;if(1===d.length){l=s._assign(r,d[0],n);if(!l)return!1}}return r},s._get_square_vals_map=function(r){var e={};if(r.length!=n.length)throw"Board/squares length mismatch.";for(var t in n)e[n[t]]=r[t];return e},s._get_square_units_map=function(r,e){var n={};for(var t in r){var a=r[t],u=[];for(var o in e){var i=e[o];-1!==i.indexOf(a)&&u.push(i)}n[a]=u}return n},s._get_square_peers_map=function(r,e){var n={};for(var t in r){var a=r[t],u=e[a],o=[];for(var i in u){var c=u[i];for(var l in c){var s=c[l];-1===o.indexOf(s)&&s!==a&&o.push(s)}}n[a]=o}return n},s._get_all_units=function(r,e){var n=[];for(var t in r)n.push(s._cross(r[t],e));for(var a in e)n.push(s._cross(r,e[a]));var u=["ABC","DEF","GHI"],o=["123","456","789"];for(var i in u)for(var c in o)n.push(s._cross(u[i],o[c]));return n},s.board_string_to_grid=function(r){var e=[],n=[];for(var t in r)n.push(r[t]),t%9==8&&(e.push(n),n=[]);return e},s.board_grid_to_string=function(r){for(var e="",n=0;n<9;++n)for(var t=0;t<9;++t)e+=r[n][t];return e},s.print_board=function(r){var e=s.validate_board(r);if(!0!==e)throw e;var n=" ",t="\n",a="  ",u="\n",o="";for(var i in r){var c=r[i];o+=c+n,i%3===2&&(o+=a),i%9===8&&(o+=t),i%27===26&&(o+=u)}console.log(o)},s.validate_board=function(r){if(!r)return"Empty board";if(r.length!==i)return"Invalid board size. Board must be exactly "+i+" squares.";for(var e in r)if(!s._in(r[e],s.DIGITS)&&r[e]!==s.BLANK_CHAR)return"Invalid board character encountered at index "+e+": "+r[e];return!0},s._cross=function(r,e){var n=[];for(var t in r)for(var a in e)n.push(r[t]+e[a]);return n},s._in=function(r,e){return-1!==e.indexOf(r)},s._first_true=function(r){for(var e in r)if(r[e])return r[e];return!1},s._shuffle=function(r){for(var e=[],n=0;n<r.length;++n)e.push(!1);for(var n in r){var t=s._rand_range(r.length);while(e[t])t=t+1>r.length-1?0:t+1;e[t]=r[n]}return e},s._rand_range=function(r,e){if(e=e||0,r)return Math.floor(Math.random()*(r-e))+e;throw"Range undefined"},s._strip_dups=function(r){var e=[],n={};for(var t in r){var a=r[t];n[a]||(e.push(a),n[a]=!0)}return e},s._force_range=function(r,e,n){return n=n||0,r=r||0,r<n?n:r>e?e:r},l()}();var d={setup:function(){Object(a["l"])((function(){v.close(1e3,"logging off")})),v.onopen=function(){console.log("connection established")};var r=Object(l["h"])({}),e=Object(l["h"])({}),n=Object(l["h"])({}),t=Object(l["h"])({});v.onmessage=function(a){var o=a.data,i=JSON.parse(o),c=i.color,l=i.sudokuObj,s=i.id,f=l||{},v=f.puzzle,d=f.users;v&&(e.value.puzzle=v,e.value.users=d,t.value={},u()),c&&(r.value=c),s&&(n.value=s)};var u=function(){for(var r=0;r<e.value.users.length;r++){var n=e.value.users[r];t.value["".concat(n.focus.col,"-").concat(n.focus.row)]=n.color}},o=Object(l["h"])([]);o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),Object(a["m"])((function(){o.value=[],o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([]),o.value.push([])}));var i=function(){var r=0;while(r<e.value.users.length){if(e.value.users[r].id==n.value)return r;r++}},c=function r(n,t,a,u,c,l){try{if(o.value[n+a][t+u].disabled){if("row"==c?u>0?u++:u<0&&u--:"col"==c&&(a>0?a++:a<0&&a--),l++,l>4)return 0;r(n,t,a,u,c,l)}else o.value[n+a][t+u].focus(),e.value.users[i()].focus={row:n+a,col:t+u},v.send(JSON.stringify({sudokuObj:e.value}))}catch(s){}},s=function(r){var n=r.cell,t=r.row,a=r.col,u=r.key,o=r.$event,i=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!n.given&&i.includes(u))o.preventDefault(),e.value.puzzle[t][a].number=u,v.send(JSON.stringify({sudokuObj:e.value}));else if("Backspace"==u)o.preventDefault(),e.value.puzzle[t][a].number="",v.send(JSON.stringify({sudokuObj:e.value}));else if(l.includes(u))switch(u){case"ArrowRight":c(t,a,0,1,"row");break;case"ArrowLeft":c(t,a,0,-1,"row");break;case"ArrowDown":c(t,a,1,0,"col");break;case"ArrowUp":c(t,a,-1,0,"col");break}else"Tab"!=u&&o.preventDefault()},f=function(r){var n=r.row,t=r.col;e.value.users[i()].focus={row:n,col:t},v.send(JSON.stringify({sudokuObj:e.value}))};return{sudokuObj:e,handleInput:s,handleClick:f,inputs:o,color:r,id:n,checkFocus:u,focused:t}}};n("9cdc");d.render=i;var p=d;Object(t["a"])(p).mount("#app")},"942d":function(r,e,n){},"9cdc":function(r,e,n){"use strict";n("942d")}});
//# sourceMappingURL=app.c1a73886.js.map