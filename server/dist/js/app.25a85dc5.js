(function(r){function e(e){for(var t,u,i=e[0],c=e[1],s=e[2],f=0,v=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&v.push(a[u][0]),a[u]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(r[t]=c[t]);l&&l(e);while(v.length)v.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var r,e=0;e<o.length;e++){for(var n=o[e],t=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(t=!1)}t&&(o.splice(e--,1),r=u(u.s=n[0]))}return r}var t={},a={app:0},o=[];function u(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=r,u.c=t,u.d=function(r,e,n){u.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},u.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},u.t=function(r,e){if(1&e&&(r=u(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)u.d(n,t,function(e){return r[e]}.bind(null,t));return n},u.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return u.d(e,"a",e),e},u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(r,e,n){r.exports=n("56d7")},"56d7":function(r,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),a=(n("99af"),n("5c40")),o={id:"app"},u={class:"pane"};function i(r,e){return Object(a["o"])(),Object(a["e"])("div",o,[Object(a["h"])("div",u,[Object(a["h"])("table",null,[Object(a["h"])("tbody",null,[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(r.sudokuObj.puzzle,(function(e,n){return Object(a["o"])(),Object(a["e"])("tr",{key:n},[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(e,(function(e,o){return Object(a["o"])(),Object(a["e"])("td",{key:"".concat(o,"+").concat(n,"-td"),id:"".concat(o,"+").concat(n,"-td-id"),style:{"background-color":e.focus}},[Object(a["h"])("input",{value:e.number,onKeydown:Object(t["b"])((function(t){return r.handleInput({cell:e,row:n,col:o,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(o,"+").concat(n),id:"".concat(o,"+").concat(n),class:[{"border-right":(o+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==o,"border-top":0==n,bold:e.given,invalid:!e.valid.value},"sudoku-board-cell"],disabled:e.given,ref:function(e){r.inputs[n][o]=e},onClick:function(e){return r.handleClick({row:n,col:o})},style:{"background-color":r.focused["".concat(o,"-").concat(n)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var c,s=n("a1e9"),l={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(c=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==c?c:"ws://tealog.xyz:8010";console.log(f);var v=new WebSocket(f);console.time("before sudoku"),console.timeLog("before sudoku"),console.log(l),function(){l.DIGITS="123456789";var r="ABCDEFGHI",e=l.DIGITS,n=null,t=null,a=null,o=null,u=17,i=81,c={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function s(){n=l._cross(r,e),t=l._get_all_units(r,e),a=l._get_square_units_map(n,t),o=l._get_square_peers_map(n,a)}l.BLANK_CHAR=".",l.BLANK_BOARD=".................................................................................",l.generate=function(r,e){"string"!==typeof r&&"undefined"!==typeof r||(r=c[r]||c.easy),r=l._force_range(r,i+1,u),e=e||!0;for(var t="",a=0;a<i;++a)t+=".";var o=l._get_candidates_map(t),s=l._shuffle(n);for(var f in s){var v=s[f],d=l._rand_range(o[v].length),p=o[v][d];if(!l._assign(o,v,p))break;var _=[];for(var f in n){v=n[f];1==o[v].length&&_.push(o[v])}if(_.length>=r&&l._strip_dups(_).length>=8){var h="",b=[];for(var a in n){v=n[a];1==o[v].length?(h+=o[v],b.push(a)):h+=l.BLANK_CHAR}var g=b.length;if(g>r){b=l._shuffle(b);for(a=0;a<g-r;++a){var O=parseInt(b[a]);h=h.substr(0,O)+l.BLANK_CHAR+h.substr(O+1)}}if(l.solve(h))return h}}return l.generate(r)},l.solve=function(r,e){var n=l.validate_board(r);if(!0!==n)throw n;var t=0;for(var a in r)r[a]!==l.BLANK_CHAR&&l._in(r[a],l.DIGITS)&&++t;if(t<u)throw"Too few givens. Minimum givens is "+u;e=e||!1;var o=l._get_candidates_map(r),i=l._search(o,e);if(i){var c="";for(var s in i)c+=i[s];return c}return!1},l.get_candidates=function(r){var e=l.validate_board(r);if(!0!==e)throw e;var n=l._get_candidates_map(r);if(!n)return!1;var t=[],a=[],o=0;for(var u in n){var i=n[u];a.push(i),o%9==8&&(t.push(a),a=[]),++o}return t},l._get_candidates_map=function(r){var e=l.validate_board(r);if(!0!==e)throw e;var t={},a=l._get_square_vals_map(r);for(var o in n)t[n[o]]=l.DIGITS;for(var u in a){var i=a[u];if(l._in(i,l.DIGITS)){var c=l._assign(t,u,i);if(!c)return!1}}return t},l._search=function(r,e){if(!r)return!1;e=e||!1;var t=0;for(var a in n){var o=n[a],u=r[o].length;u>t&&(t=u,o)}if(1===t)return r;var i=10,c=null;for(a in n){o=n[a],u=r[o].length;u<i&&u>1&&(i=u,c=o)}var s=r[c];if(e)for(f=s.length-1;f>=0;--f){v=s[f],d=JSON.parse(JSON.stringify(r)),p=l._search(l._assign(d,c,v),e);if(p)return p}else for(var f in s){var v=s[f],d=JSON.parse(JSON.stringify(r)),p=l._search(l._assign(d,c,v));if(p)return p}return!1},l._assign=function(r,e,n){var t=r[e].replace(n,"");for(var a in t){var o=t[a],u=l._eliminate(r,e,o);if(!u)return!1}return r},l._eliminate=function(r,e,n){if(!l._in(n,r[e]))return r;r[e]=r[e].replace(n,"");var t=r[e].length;if(1===t){var u=r[e];for(var i in o[e]){var c=o[e][i],s=l._eliminate(r,c,u);if(!s)return!1}}if(0===t)return!1;for(var f in a[e]){var v=a[e][f],d=[];for(var p in v){var _=v[p];l._in(n,r[_])&&d.push(_)}if(0===d.length)return!1;if(1===d.length){s=l._assign(r,d[0],n);if(!s)return!1}}return r},l._get_square_vals_map=function(r){var e={};if(r.length!=n.length)throw"Board/squares length mismatch.";for(var t in n)e[n[t]]=r[t];return e},l._get_square_units_map=function(r,e){var n={};for(var t in r){var a=r[t],o=[];for(var u in e){var i=e[u];-1!==i.indexOf(a)&&o.push(i)}n[a]=o}return n},l._get_square_peers_map=function(r,e){var n={};for(var t in r){var a=r[t],o=e[a],u=[];for(var i in o){var c=o[i];for(var s in c){var l=c[s];-1===u.indexOf(l)&&l!==a&&u.push(l)}}n[a]=u}return n},l._get_all_units=function(r,e){var n=[];for(var t in r)n.push(l._cross(r[t],e));for(var a in e)n.push(l._cross(r,e[a]));var o=["ABC","DEF","GHI"],u=["123","456","789"];for(var i in o)for(var c in u)n.push(l._cross(o[i],u[c]));return n},l.board_string_to_grid=function(r){var e=[],n=[];for(var t in r)n.push(r[t]),t%9==8&&(e.push(n),n=[]);return e},l.board_grid_to_string=function(r){for(var e="",n=0;n<9;++n)for(var t=0;t<9;++t)e+=r[n][t];return e},l.print_board=function(r){var e=l.validate_board(r);if(!0!==e)throw e;var n=" ",t="\n",a="  ",o="\n",u="";for(var i in r){var c=r[i];u+=c+n,i%3===2&&(u+=a),i%9===8&&(u+=t),i%27===26&&(u+=o)}console.log(u)},l.validate_board=function(r){if(!r)return"Empty board";if(r.length!==i)return"Invalid board size. Board must be exactly "+i+" squares.";for(var e in r)if(!l._in(r[e],l.DIGITS)&&r[e]!==l.BLANK_CHAR)return"Invalid board character encountered at index "+e+": "+r[e];return!0},l._cross=function(r,e){var n=[];for(var t in r)for(var a in e)n.push(r[t]+e[a]);return n},l._in=function(r,e){return-1!==e.indexOf(r)},l._first_true=function(r){for(var e in r)if(r[e])return r[e];return!1},l._shuffle=function(r){for(var e=[],n=0;n<r.length;++n)e.push(!1);for(var n in r){var t=l._rand_range(r.length);while(e[t])t=t+1>r.length-1?0:t+1;e[t]=r[n]}return e},l._rand_range=function(r,e){if(e=e||0,r)return Math.floor(Math.random()*(r-e))+e;throw"Range undefined"},l._strip_dups=function(r){var e=[],n={};for(var t in r){var a=r[t];n[a]||(e.push(a),n[a]=!0)}return e},l._force_range=function(r,e,n){return n=n||0,r=r||0,r<n?n:r>e?e:r},s()}(),console.timeEnd("before sudoku");var d={setup:function(){Object(a["l"])((function(){v.close(1e3,"logging off")})),v.onopen=function(){console.log("connection established")};var r=Object(s["h"])({}),e=Object(s["h"])({}),n=Object(s["h"])({}),t=Object(s["h"])({});v.onmessage=function(a){var u=a.data,i=JSON.parse(u),c=i.color,s=i.sudokuObj,l=i.id,f=s||{},v=f.puzzle,d=f.users;v&&(e.value.puzzle=v,e.value.users=d,t.value={},o()),c&&(r.value=c),l&&(n.value=l)};var o=function(){for(var r=0;r<e.value.users.length;r++){var n=e.value.users[r];t.value["".concat(n.focus.col,"-").concat(n.focus.row)]=n.color}},u=Object(s["h"])([]);u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),Object(a["m"])((function(){u.value=[],u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([])}));var i=function(){var r=0;while(r<e.value.users.length){if(e.value.users[r].id==n.value)return r;r++}},c=function r(n,t,a,o,c,s){try{if(u.value[n+a][t+o].disabled){if("row"==c?o>0?o++:o<0&&o--:"col"==c&&(a>0?a++:a<0&&a--),s++,s>4)return 0;r(n,t,a,o,c,s)}else u.value[n+a][t+o].focus(),e.value.users[i()].focus={row:n+a,col:t+o},v.send(JSON.stringify({sudokuObj:e.value}))}catch(l){}},l=function(r){var n=r.cell,t=r.row,a=r.col,o=r.key,u=r.$event,i=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!n.given&&i.includes(o))u.preventDefault(),e.value.puzzle[t][a].number=o,v.send(JSON.stringify({sudokuObj:e.value}));else if("Backspace"==o)u.preventDefault(),e.value.puzzle[t][a].number="",v.send(JSON.stringify({sudokuObj:e.value}));else if(s.includes(o))switch(o){case"ArrowRight":c(t,a,0,1,"row");break;case"ArrowLeft":c(t,a,0,-1,"row");break;case"ArrowDown":c(t,a,1,0,"col");break;case"ArrowUp":c(t,a,-1,0,"col");break}else"Tab"!=o&&u.preventDefault()},f=function(r){var n=r.row,t=r.col;e.value.users[i()].focus={row:n,col:t},v.send(JSON.stringify({sudokuObj:e.value}))};return{sudokuObj:e,handleInput:l,handleClick:f,inputs:u,color:r,id:n,checkFocus:o,focused:t}}};n("9cdc");d.render=i;var p=d;Object(t["a"])(p).mount("#app")},"942d":function(r,e,n){},"9cdc":function(r,e,n){"use strict";n("942d")}});
//# sourceMappingURL=app.25a85dc5.js.map