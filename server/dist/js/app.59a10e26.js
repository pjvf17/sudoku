(function(r){function e(e){for(var a,o,i=e[0],l=e[1],s=e[2],f=0,v=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&v.push(t[o][0]),t[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(r[a]=l[a]);c&&c(e);while(v.length)v.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var r,e=0;e<u.length;e++){for(var n=u[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==t[l]&&(a=!1)}a&&(u.splice(e--,1),r=o(o.s=n[0]))}return r}var a={},t={app:0},u=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=a,o.d=function(r,e,n){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},o.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)o.d(n,a,function(e){return r[e]}.bind(null,a));return n},o.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return o.d(e,"a",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=l;u.push([0,"chunk-vendors"]),n()})({0:function(r,e,n){r.exports=n("56d7")},"56d7":function(r,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("830f"),t=(n("99af"),n("5c40")),u={id:"app"},o={class:"pane"};function i(r,e){return Object(t["o"])(),Object(t["e"])("div",u,[Object(t["h"])("div",o,[Object(t["h"])("table",null,[Object(t["h"])("tbody",null,[(Object(t["o"])(!0),Object(t["e"])(t["b"],null,Object(t["p"])(r.sudokuObj.puzzle,(function(e,n){return Object(t["o"])(),Object(t["e"])("tr",{key:n},[(Object(t["o"])(!0),Object(t["e"])(t["b"],null,Object(t["p"])(e,(function(e,u){return Object(t["o"])(),Object(t["e"])("td",{key:"".concat(u,"+").concat(n,"-td"),id:"".concat(u,"+").concat(n,"-td-id"),style:{"background-color":e.focus}},[Object(t["h"])("input",{value:e.number,onKeydown:Object(a["b"])((function(a){return r.handleInput({cell:e,row:n,col:u,key:a.key,$event:a})}),["exact"]),type:"text",name:"".concat(u,"+").concat(n),id:"".concat(u,"+").concat(n),class:[{"border-right":(u+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==u,"border-top":0==n,bold:e.given,invalid:!e.valid.value},"sudoku-board-cell"],disabled:e.given,ref:function(e){r.inputs[n][u]=e},onClick:function(e){return r.handleClick({row:n,col:u})}},null,42,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var l,s=n("a1e9"),c={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==l?l:"ws://tealog.xyz:8010";console.log(f);var v=new WebSocket(f);console.log(c),function(){c.DIGITS="123456789";var r="ABCDEFGHI",e=c.DIGITS,n=null,a=null,t=null,u=null,o=17,i=81,l={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function s(){n=c._cross(r,e),a=c._get_all_units(r,e),t=c._get_square_units_map(n,a),u=c._get_square_peers_map(n,t)}c.BLANK_CHAR=".",c.BLANK_BOARD=".................................................................................",c.generate=function(r,e){"string"!==typeof r&&"undefined"!==typeof r||(r=l[r]||l.easy),r=c._force_range(r,i+1,o),e=e||!0;for(var a="",t=0;t<i;++t)a+=".";var u=c._get_candidates_map(a),s=c._shuffle(n);for(var f in s){var v=s[f],d=c._rand_range(u[v].length),p=u[v][d];if(!c._assign(u,v,p))break;var _=[];for(var f in n){v=n[f];1==u[v].length&&_.push(u[v])}if(_.length>=r&&c._strip_dups(_).length>=8){var h="",g=[];for(var t in n){v=n[t];1==u[v].length?(h+=u[v],g.push(t)):h+=c.BLANK_CHAR}var b=g.length;if(b>r){g=c._shuffle(g);for(t=0;t<b-r;++t){var O=parseInt(g[t]);h=h.substr(0,O)+c.BLANK_CHAR+h.substr(O+1)}}if(c.solve(h))return h}}return c.generate(r)},c.solve=function(r,e){var n=c.validate_board(r);if(!0!==n)throw n;var a=0;for(var t in r)r[t]!==c.BLANK_CHAR&&c._in(r[t],c.DIGITS)&&++a;if(a<o)throw"Too few givens. Minimum givens is "+o;e=e||!1;var u=c._get_candidates_map(r),i=c._search(u,e);if(i){var l="";for(var s in i)l+=i[s];return l}return!1},c.get_candidates=function(r){var e=c.validate_board(r);if(!0!==e)throw e;var n=c._get_candidates_map(r);if(!n)return!1;var a=[],t=[],u=0;for(var o in n){var i=n[o];t.push(i),u%9==8&&(a.push(t),t=[]),++u}return a},c._get_candidates_map=function(r){var e=c.validate_board(r);if(!0!==e)throw e;var a={},t=c._get_square_vals_map(r);for(var u in n)a[n[u]]=c.DIGITS;for(var o in t){var i=t[o];if(c._in(i,c.DIGITS)){var l=c._assign(a,o,i);if(!l)return!1}}return a},c._search=function(r,e){if(!r)return!1;e=e||!1;var a=0;for(var t in n){var u=n[t],o=r[u].length;o>a&&(a=o,u)}if(1===a)return r;var i=10,l=null;for(t in n){u=n[t],o=r[u].length;o<i&&o>1&&(i=o,l=u)}var s=r[l];if(e)for(f=s.length-1;f>=0;--f){v=s[f],d=JSON.parse(JSON.stringify(r)),p=c._search(c._assign(d,l,v),e);if(p)return p}else for(var f in s){var v=s[f],d=JSON.parse(JSON.stringify(r)),p=c._search(c._assign(d,l,v));if(p)return p}return!1},c._assign=function(r,e,n){var a=r[e].replace(n,"");for(var t in a){var u=a[t],o=c._eliminate(r,e,u);if(!o)return!1}return r},c._eliminate=function(r,e,n){if(!c._in(n,r[e]))return r;r[e]=r[e].replace(n,"");var a=r[e].length;if(1===a){var o=r[e];for(var i in u[e]){var l=u[e][i],s=c._eliminate(r,l,o);if(!s)return!1}}if(0===a)return!1;for(var f in t[e]){var v=t[e][f],d=[];for(var p in v){var _=v[p];c._in(n,r[_])&&d.push(_)}if(0===d.length)return!1;if(1===d.length){s=c._assign(r,d[0],n);if(!s)return!1}}return r},c._get_square_vals_map=function(r){var e={};if(r.length!=n.length)throw"Board/squares length mismatch.";for(var a in n)e[n[a]]=r[a];return e},c._get_square_units_map=function(r,e){var n={};for(var a in r){var t=r[a],u=[];for(var o in e){var i=e[o];-1!==i.indexOf(t)&&u.push(i)}n[t]=u}return n},c._get_square_peers_map=function(r,e){var n={};for(var a in r){var t=r[a],u=e[t],o=[];for(var i in u){var l=u[i];for(var s in l){var c=l[s];-1===o.indexOf(c)&&c!==t&&o.push(c)}}n[t]=o}return n},c._get_all_units=function(r,e){var n=[];for(var a in r)n.push(c._cross(r[a],e));for(var t in e)n.push(c._cross(r,e[t]));var u=["ABC","DEF","GHI"],o=["123","456","789"];for(var i in u)for(var l in o)n.push(c._cross(u[i],o[l]));return n},c.board_string_to_grid=function(r){var e=[],n=[];for(var a in r)n.push(r[a]),a%9==8&&(e.push(n),n=[]);return e},c.board_grid_to_string=function(r){for(var e="",n=0;n<9;++n)for(var a=0;a<9;++a)e+=r[n][a];return e},c.print_board=function(r){var e=c.validate_board(r);if(!0!==e)throw e;var n=" ",a="\n",t="  ",u="\n",o="";for(var i in r){var l=r[i];o+=l+n,i%3===2&&(o+=t),i%9===8&&(o+=a),i%27===26&&(o+=u)}console.log(o)},c.validate_board=function(r){if(!r)return"Empty board";if(r.length!==i)return"Invalid board size. Board must be exactly "+i+" squares.";for(var e in r)if(!c._in(r[e],c.DIGITS)&&r[e]!==c.BLANK_CHAR)return"Invalid board character encountered at index "+e+": "+r[e];return!0},c._cross=function(r,e){var n=[];for(var a in r)for(var t in e)n.push(r[a]+e[t]);return n},c._in=function(r,e){return-1!==e.indexOf(r)},c._first_true=function(r){for(var e in r)if(r[e])return r[e];return!1},c._shuffle=function(r){for(var e=[],n=0;n<r.length;++n)e.push(!1);for(var n in r){var a=c._rand_range(r.length);while(e[a])a=a+1>r.length-1?0:a+1;e[a]=r[n]}return e},c._rand_range=function(r,e){if(e=e||0,r)return Math.floor(Math.random()*(r-e))+e;throw"Range undefined"},c._strip_dups=function(r){var e=[],n={};for(var a in r){var t=r[a];n[t]||(e.push(t),n[t]=!0)}return e},c._force_range=function(r,e,n){return n=n||0,r=r||0,r<n?n:r>e?e:r},s()}();var d={setup:function(){Object(t["l"])((function(){v.close(1e3,"logging off")})),v.onopen=function(){console.log("connection established")};var r=Object(s["h"])({}),e=Object(s["h"])({}),n=Object(s["h"])({}),a=Object(s["h"])({});v.onmessage=function(t){var u=t.data;console.log(u);var o=JSON.parse(u),i=o.color,l=o.sudokuObj,s=o.id;console.log(i);var c=l||{},f=c.puzzle,v=c.users;if(f){e.value.puzzle=f,e.value.users=v;for(var d=0;d<e.value.users.length;d++){var p=e.value.users[d];a.value[p.focus.row][p.focus.col],console.log(a)}}i&&(r.value=i),s&&(n.value=s)};var u=Object(s["h"])([]);u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),Object(t["m"])((function(){u.value=[],u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([]),u.value.push([])}));var o=function(){var r=0;while(r<e.value.users.length){if(e.value.users[r].id==n.value)return r;r++}},i=function n(a,t,i,l,s,c){try{if(u.value[a+i][t+l].disabled){if("row"==s?l>0?l++:l<0&&l--:"col"==s&&(i>0?i++:i<0&&i--),c++,c>4)return 0;n(a,t,i,l,s,c)}else u.value[a+i][t+l].focus(),e.value.users[o()].focus={row:a+i,col:t+l},e.value.puzzle[a+i][t+l].focus=r.value,v.send(JSON.stringify({sudokuObj:e.value.puzzle}))}catch(f){}},l=function(r){var n=r.cell,a=r.row,t=r.col,u=r.key,o=r.$event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!n.given&&l.includes(u))o.preventDefault(),e.value.puzzle[a][t].number=u,v.send(JSON.stringify({sudokuObj:e.value}));else if("Backspace"==u)o.preventDefault(),e.value.puzzle[a][t].number="",v.send(JSON.stringify({sudokuObj:e.value}));else if(s.includes(u))switch(u){case"ArrowRight":i(a,t,0,1,"row");break;case"ArrowLeft":i(a,t,0,-1,"row");break;case"ArrowDown":i(a,t,1,0,"col");break;case"ArrowUp":i(a,t,-1,0,"col");break}else"Tab"!=u&&(o.preventDefault(),console.log(u),console.log("Meta"!=u))},c=function(r){var n=r.row,a=r.col;e.value.users[o()].focus={row:n,col:a},v.send(JSON.stringify({sudokuObj:e.value}))};return{sudokuObj:e,handleInput:l,handleClick:c,inputs:u,color:r,id:n}}};n("9cdc");d.render=i;var p=d;Object(a["a"])(p).mount("#app")},"942d":function(r,e,n){},"9cdc":function(r,e,n){"use strict";n("942d")}});
//# sourceMappingURL=app.59a10e26.js.map