(function(e){function r(r){for(var t,u,i=r[0],c=r[1],l=r[2],f=0,v=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&v.push(a[u][0]),a[u]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);s&&s(r);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,r=0;r<o.length;r++){for(var n=o[r],t=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(t=!1)}t&&(o.splice(r--,1),e=u(u.s=n[0]))}return e}var t={},a={app:0},o=[];function u(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=t,u.d=function(e,r,n){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)u.d(n,t,function(r){return e[r]}.bind(null,t));return n},u.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("56d7")},"56d7":function(e,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),a=(n("99af"),n("5c40")),o={id:"app"},u={class:"pane"};function i(e,r){return Object(a["o"])(),Object(a["e"])("div",o,[Object(a["h"])("div",u,[Object(a["h"])("table",null,[Object(a["h"])("tbody",null,[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(e.sudokuObj.puzzle,(function(r,n){return Object(a["o"])(),Object(a["e"])("tr",{key:n},[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(r,(function(r,o){return Object(a["o"])(),Object(a["e"])("td",{key:"".concat(o,"+").concat(n,"-td"),id:"".concat(o,"+").concat(n,"-td-id"),style:{"background-color":r.focus}},[Object(a["h"])("input",{value:r.number,onKeydown:Object(t["b"])((function(t){return e.handleInput({cell:r,row:n,col:o,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(o,"+").concat(n),id:"".concat(o,"+").concat(n),class:[{"border-right":(o+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==o,"border-top":0==n,bold:r.given,invalid:!r.valid.value},"sudoku-board-cell"],disabled:r.given,ref:function(r){e.inputs[n][o]=r},onClick:function(r){return e.handleClick({row:n,col:o})},style:{"background-color":e.focused["".concat(o,"-").concat(n)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var c,l=n("a1e9"),s={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(c=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==c?c:"ws://tealog.xyz:8010";console.log(f);var v=new WebSocket(f);console.log(s),function(){s.DIGITS="123456789";var e="ABCDEFGHI",r=s.DIGITS,n=null,t=null,a=null,o=null,u=17,i=81,c={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function l(){n=s._cross(e,r),t=s._get_all_units(e,r),a=s._get_square_units_map(n,t),o=s._get_square_peers_map(n,a)}s.BLANK_CHAR=".",s.BLANK_BOARD=".................................................................................",s.generate=function(e,r){"string"!==typeof e&&"undefined"!==typeof e||(e=c[e]||c.easy),e=s._force_range(e,i+1,u),r=r||!0;for(var t="",a=0;a<i;++a)t+=".";var o=s._get_candidates_map(t),l=s._shuffle(n);for(var f in l){var v=l[f],d=s._rand_range(o[v].length),p=o[v][d];if(!s._assign(o,v,p))break;var _=[];for(var f in n){v=n[f];1==o[v].length&&_.push(o[v])}if(_.length>=e&&s._strip_dups(_).length>=8){var h="",g=[];for(var a in n){v=n[a];1==o[v].length?(h+=o[v],g.push(a)):h+=s.BLANK_CHAR}var b=g.length;if(b>e){g=s._shuffle(g);for(a=0;a<b-e;++a){var O=parseInt(g[a]);h=h.substr(0,O)+s.BLANK_CHAR+h.substr(O+1)}}if(s.solve(h))return h}}return s.generate(e)},s.solve=function(e,r){var n=s.validate_board(e);if(!0!==n)throw n;var t=0;for(var a in e)e[a]!==s.BLANK_CHAR&&s._in(e[a],s.DIGITS)&&++t;if(t<u)throw"Too few givens. Minimum givens is "+u;r=r||!1;var o=s._get_candidates_map(e),i=s._search(o,r);if(i){var c="";for(var l in i)c+=i[l];return c}return!1},s.get_candidates=function(e){var r=s.validate_board(e);if(!0!==r)throw r;var n=s._get_candidates_map(e);if(!n)return!1;var t=[],a=[],o=0;for(var u in n){var i=n[u];a.push(i),o%9==8&&(t.push(a),a=[]),++o}return t},s._get_candidates_map=function(e){var r=s.validate_board(e);if(!0!==r)throw r;var t={},a=s._get_square_vals_map(e);for(var o in n)t[n[o]]=s.DIGITS;for(var u in a){var i=a[u];if(s._in(i,s.DIGITS)){var c=s._assign(t,u,i);if(!c)return!1}}return t},s._search=function(e,r){if(!e)return!1;r=r||!1;var t=0;for(var a in n){var o=n[a],u=e[o].length;u>t&&(t=u,o)}if(1===t)return e;var i=10,c=null;for(a in n){o=n[a],u=e[o].length;u<i&&u>1&&(i=u,c=o)}var l=e[c];if(r)for(f=l.length-1;f>=0;--f){v=l[f],d=JSON.parse(JSON.stringify(e)),p=s._search(s._assign(d,c,v),r);if(p)return p}else for(var f in l){var v=l[f],d=JSON.parse(JSON.stringify(e)),p=s._search(s._assign(d,c,v));if(p)return p}return!1},s._assign=function(e,r,n){var t=e[r].replace(n,"");for(var a in t){var o=t[a],u=s._eliminate(e,r,o);if(!u)return!1}return e},s._eliminate=function(e,r,n){if(!s._in(n,e[r]))return e;e[r]=e[r].replace(n,"");var t=e[r].length;if(1===t){var u=e[r];for(var i in o[r]){var c=o[r][i],l=s._eliminate(e,c,u);if(!l)return!1}}if(0===t)return!1;for(var f in a[r]){var v=a[r][f],d=[];for(var p in v){var _=v[p];s._in(n,e[_])&&d.push(_)}if(0===d.length)return!1;if(1===d.length){l=s._assign(e,d[0],n);if(!l)return!1}}return e},s._get_square_vals_map=function(e){var r={};if(e.length!=n.length)throw"Board/squares length mismatch.";for(var t in n)r[n[t]]=e[t];return r},s._get_square_units_map=function(e,r){var n={};for(var t in e){var a=e[t],o=[];for(var u in r){var i=r[u];-1!==i.indexOf(a)&&o.push(i)}n[a]=o}return n},s._get_square_peers_map=function(e,r){var n={};for(var t in e){var a=e[t],o=r[a],u=[];for(var i in o){var c=o[i];for(var l in c){var s=c[l];-1===u.indexOf(s)&&s!==a&&u.push(s)}}n[a]=u}return n},s._get_all_units=function(e,r){var n=[];for(var t in e)n.push(s._cross(e[t],r));for(var a in r)n.push(s._cross(e,r[a]));var o=["ABC","DEF","GHI"],u=["123","456","789"];for(var i in o)for(var c in u)n.push(s._cross(o[i],u[c]));return n},s.board_string_to_grid=function(e){var r=[],n=[];for(var t in e)n.push(e[t]),t%9==8&&(r.push(n),n=[]);return r},s.board_grid_to_string=function(e){for(var r="",n=0;n<9;++n)for(var t=0;t<9;++t)r+=e[n][t];return r},s.print_board=function(e){var r=s.validate_board(e);if(!0!==r)throw r;var n=" ",t="\n",a="  ",o="\n",u="";for(var i in e){var c=e[i];u+=c+n,i%3===2&&(u+=a),i%9===8&&(u+=t),i%27===26&&(u+=o)}console.log(u)},s.validate_board=function(e){if(!e)return"Empty board";if(e.length!==i)return"Invalid board size. Board must be exactly "+i+" squares.";for(var r in e)if(!s._in(e[r],s.DIGITS)&&e[r]!==s.BLANK_CHAR)return"Invalid board character encountered at index "+r+": "+e[r];return!0},s._cross=function(e,r){var n=[];for(var t in e)for(var a in r)n.push(e[t]+r[a]);return n},s._in=function(e,r){return-1!==r.indexOf(e)},s._first_true=function(e){for(var r in e)if(e[r])return e[r];return!1},s._shuffle=function(e){for(var r=[],n=0;n<e.length;++n)r.push(!1);for(var n in e){var t=s._rand_range(e.length);while(r[t])t=t+1>e.length-1?0:t+1;r[t]=e[n]}return r},s._rand_range=function(e,r){if(r=r||0,e)return Math.floor(Math.random()*(e-r))+r;throw"Range undefined"},s._strip_dups=function(e){var r=[],n={};for(var t in e){var a=e[t];n[a]||(r.push(a),n[a]=!0)}return r},s._force_range=function(e,r,n){return n=n||0,e=e||0,e<n?n:e>r?r:e},l()}();var d={setup:function(){Object(a["l"])((function(){v.close(1e3,"logging off")})),v.onopen=function(){console.log("connection established")};var e=Object(l["h"])({}),r=Object(l["h"])({}),n=Object(l["h"])({}),t=Object(l["h"])({});v.onmessage=function(a){var u=a.data;console.time("message"),console.log(JSON.parse(u));var i=JSON.parse(u),c=i.color,l=i.sudokuObj,s=i.id;console.log(c);var f=l||{},v=f.puzzle,d=f.users;v&&(r.value.puzzle=v,r.value.users=d,t.value={},o()),c&&(e.value=c),s&&(n.value=s)};var o=function(){console.time("checkFocus"),console.log("checking");for(var e=0;e<r.value.users.length;e++){var n=r.value.users[e];t.value["".concat(n.focus.col,"-").concat(n.focus.row)]=n.color}console.log(Object(l["l"])(t.value)),console.timeLog("checkFocus")},u=Object(l["h"])([]);u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),Object(a["m"])((function(){u.value=[],u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([])}));var i=function(){var e=0;while(e<r.value.users.length){if(r.value.users[e].id==n.value)return e;e++}},c=function e(n,t,a,o,c,l){try{if(u.value[n+a][t+o].disabled){if("row"==c?o>0?o++:o<0&&o--:"col"==c&&(a>0?a++:a<0&&a--),l++,l>4)return 0;e(n,t,a,o,c,l)}else console.timeEnd("checkFocus"),u.value[n+a][t+o].focus(),r.value.users[i()].focus={row:n+a,col:t+o},v.send(JSON.stringify({sudokuObj:r.value}))}catch(s){}},s=function(e){var n=e.cell,t=e.row,a=e.col,o=e.key,u=e.$event,i=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!n.given&&i.includes(o))u.preventDefault(),r.value.puzzle[t][a].number=o,v.send(JSON.stringify({sudokuObj:r.value}));else if("Backspace"==o)u.preventDefault(),r.value.puzzle[t][a].number="",v.send(JSON.stringify({sudokuObj:r.value}));else if(l.includes(o))switch(o){case"ArrowRight":c(t,a,0,1,"row");break;case"ArrowLeft":c(t,a,0,-1,"row");break;case"ArrowDown":c(t,a,1,0,"col");break;case"ArrowUp":c(t,a,-1,0,"col");break}else"Tab"!=o&&(u.preventDefault(),console.log(o),console.log("Meta"!=o))},f=function(e){var n=e.row,t=e.col;console.timeEnd("checkFocus"),r.value.users[i()].focus={row:n,col:t},v.send(JSON.stringify({sudokuObj:r.value}))};return{sudokuObj:r,handleInput:s,handleClick:f,inputs:u,color:e,id:n,checkFocus:o,focused:t}}};n("9cdc");d.render=i;var p=d;Object(t["a"])(p).mount("#app")},"942d":function(e,r,n){},"9cdc":function(e,r,n){"use strict";n("942d")}});
//# sourceMappingURL=app.72797215.js.map