(function(e){function r(r){for(var t,u,i=r[0],l=r[1],s=r[2],f=0,v=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&v.push(a[u][0]),a[u]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);c&&c(r);while(v.length)v.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,r=0;r<o.length;r++){for(var n=o[r],t=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(t=!1)}t&&(o.splice(r--,1),e=u(u.s=n[0]))}return e}var t={},a={app:0},o=[];function u(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=t,u.d=function(e,r,n){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)u.d(n,t,function(r){return e[r]}.bind(null,t));return n},u.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var s=0;s<i.length;s++)r(i[s]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("56d7")},"56d7":function(e,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),a=(n("99af"),n("5c40")),o={id:"app"},u={class:"pane"};function i(e,r){return Object(a["o"])(),Object(a["e"])("div",o,[Object(a["h"])("div",u,[Object(a["h"])("table",null,[Object(a["h"])("tbody",null,[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(e.sudokuObj.puzzle,(function(r,n){return Object(a["o"])(),Object(a["e"])("tr",{key:n},[(Object(a["o"])(!0),Object(a["e"])(a["b"],null,Object(a["p"])(r,(function(r,o){return Object(a["o"])(),Object(a["e"])("td",{key:"".concat(o,"+").concat(n,"-td"),id:"".concat(o,"+").concat(n,"-td-id"),style:{"background-color":r.focus}},[Object(a["h"])("input",{value:r.number,onKeydown:Object(t["b"])((function(t){return e.handleInput({cell:r,row:n,col:o,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(o,"+").concat(n),id:"".concat(o,"+").concat(n),class:[{"border-right":(o+1)%3==0,"border-bottom":(n+1)%3==0,"border-left":0==o,"border-top":0==n,bold:r.given,invalid:!r.valid.value},"sudoku-board-cell"],disabled:r.given,ref:function(r){e.inputs[n][o]=r},onClick:function(r){return e.handleClick({row:n,col:o})},style:{"background-color":r.focus}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}n("caad"),n("c975"),n("ac1f"),n("5319");var l,s=n("a1e9"),c={};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==l?l:"ws://tealog.xyz:8010";console.log(f);var v=new WebSocket(f);console.log(c),function(){c.DIGITS="123456789";var e="ABCDEFGHI",r=c.DIGITS,n=null,t=null,a=null,o=null,u=17,i=81,l={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};function s(){n=c._cross(e,r),t=c._get_all_units(e,r),a=c._get_square_units_map(n,t),o=c._get_square_peers_map(n,a)}c.BLANK_CHAR=".",c.BLANK_BOARD=".................................................................................",c.generate=function(e,r){"string"!==typeof e&&"undefined"!==typeof e||(e=l[e]||l.easy),e=c._force_range(e,i+1,u),r=r||!0;for(var t="",a=0;a<i;++a)t+=".";var o=c._get_candidates_map(t),s=c._shuffle(n);for(var f in s){var v=s[f],d=c._rand_range(o[v].length),p=o[v][d];if(!c._assign(o,v,p))break;var _=[];for(var f in n){v=n[f];1==o[v].length&&_.push(o[v])}if(_.length>=e&&c._strip_dups(_).length>=8){var h="",b=[];for(var a in n){v=n[a];1==o[v].length?(h+=o[v],b.push(a)):h+=c.BLANK_CHAR}var g=b.length;if(g>e){b=c._shuffle(b);for(a=0;a<g-e;++a){var O=parseInt(b[a]);h=h.substr(0,O)+c.BLANK_CHAR+h.substr(O+1)}}if(c.solve(h))return h}}return c.generate(e)},c.solve=function(e,r){var n=c.validate_board(e);if(!0!==n)throw n;var t=0;for(var a in e)e[a]!==c.BLANK_CHAR&&c._in(e[a],c.DIGITS)&&++t;if(t<u)throw"Too few givens. Minimum givens is "+u;r=r||!1;var o=c._get_candidates_map(e),i=c._search(o,r);if(i){var l="";for(var s in i)l+=i[s];return l}return!1},c.get_candidates=function(e){var r=c.validate_board(e);if(!0!==r)throw r;var n=c._get_candidates_map(e);if(!n)return!1;var t=[],a=[],o=0;for(var u in n){var i=n[u];a.push(i),o%9==8&&(t.push(a),a=[]),++o}return t},c._get_candidates_map=function(e){var r=c.validate_board(e);if(!0!==r)throw r;var t={},a=c._get_square_vals_map(e);for(var o in n)t[n[o]]=c.DIGITS;for(var u in a){var i=a[u];if(c._in(i,c.DIGITS)){var l=c._assign(t,u,i);if(!l)return!1}}return t},c._search=function(e,r){if(!e)return!1;r=r||!1;var t=0;for(var a in n){var o=n[a],u=e[o].length;u>t&&(t=u,o)}if(1===t)return e;var i=10,l=null;for(a in n){o=n[a],u=e[o].length;u<i&&u>1&&(i=u,l=o)}var s=e[l];if(r)for(f=s.length-1;f>=0;--f){v=s[f],d=JSON.parse(JSON.stringify(e)),p=c._search(c._assign(d,l,v),r);if(p)return p}else for(var f in s){var v=s[f],d=JSON.parse(JSON.stringify(e)),p=c._search(c._assign(d,l,v));if(p)return p}return!1},c._assign=function(e,r,n){var t=e[r].replace(n,"");for(var a in t){var o=t[a],u=c._eliminate(e,r,o);if(!u)return!1}return e},c._eliminate=function(e,r,n){if(!c._in(n,e[r]))return e;e[r]=e[r].replace(n,"");var t=e[r].length;if(1===t){var u=e[r];for(var i in o[r]){var l=o[r][i],s=c._eliminate(e,l,u);if(!s)return!1}}if(0===t)return!1;for(var f in a[r]){var v=a[r][f],d=[];for(var p in v){var _=v[p];c._in(n,e[_])&&d.push(_)}if(0===d.length)return!1;if(1===d.length){s=c._assign(e,d[0],n);if(!s)return!1}}return e},c._get_square_vals_map=function(e){var r={};if(e.length!=n.length)throw"Board/squares length mismatch.";for(var t in n)r[n[t]]=e[t];return r},c._get_square_units_map=function(e,r){var n={};for(var t in e){var a=e[t],o=[];for(var u in r){var i=r[u];-1!==i.indexOf(a)&&o.push(i)}n[a]=o}return n},c._get_square_peers_map=function(e,r){var n={};for(var t in e){var a=e[t],o=r[a],u=[];for(var i in o){var l=o[i];for(var s in l){var c=l[s];-1===u.indexOf(c)&&c!==a&&u.push(c)}}n[a]=u}return n},c._get_all_units=function(e,r){var n=[];for(var t in e)n.push(c._cross(e[t],r));for(var a in r)n.push(c._cross(e,r[a]));var o=["ABC","DEF","GHI"],u=["123","456","789"];for(var i in o)for(var l in u)n.push(c._cross(o[i],u[l]));return n},c.board_string_to_grid=function(e){var r=[],n=[];for(var t in e)n.push(e[t]),t%9==8&&(r.push(n),n=[]);return r},c.board_grid_to_string=function(e){for(var r="",n=0;n<9;++n)for(var t=0;t<9;++t)r+=e[n][t];return r},c.print_board=function(e){var r=c.validate_board(e);if(!0!==r)throw r;var n=" ",t="\n",a="  ",o="\n",u="";for(var i in e){var l=e[i];u+=l+n,i%3===2&&(u+=a),i%9===8&&(u+=t),i%27===26&&(u+=o)}console.log(u)},c.validate_board=function(e){if(!e)return"Empty board";if(e.length!==i)return"Invalid board size. Board must be exactly "+i+" squares.";for(var r in e)if(!c._in(e[r],c.DIGITS)&&e[r]!==c.BLANK_CHAR)return"Invalid board character encountered at index "+r+": "+e[r];return!0},c._cross=function(e,r){var n=[];for(var t in e)for(var a in r)n.push(e[t]+r[a]);return n},c._in=function(e,r){return-1!==r.indexOf(e)},c._first_true=function(e){for(var r in e)if(e[r])return e[r];return!1},c._shuffle=function(e){for(var r=[],n=0;n<e.length;++n)r.push(!1);for(var n in e){var t=c._rand_range(e.length);while(r[t])t=t+1>e.length-1?0:t+1;r[t]=e[n]}return r},c._rand_range=function(e,r){if(r=r||0,e)return Math.floor(Math.random()*(e-r))+r;throw"Range undefined"},c._strip_dups=function(e){var r=[],n={};for(var t in e){var a=e[t];n[a]||(r.push(a),n[a]=!0)}return r},c._force_range=function(e,r,n){return n=n||0,e=e||0,e<n?n:e>r?r:e},s()}();var d={setup:function(){Object(a["l"])((function(){v.close(1e3,"logging off")})),v.onopen=function(){console.log("connection established")};var e=Object(s["h"])({}),r=Object(s["h"])({}),n=Object(s["h"])({});v.onmessage=function(t){var a=t.data;console.log(a);var o=JSON.parse(a),u=o.color,i=o.sudokuObj,l=o.id;console.log(u);var s=i||{},c=s.puzzle,f=s.users;c&&(r.value.puzzle=c,r.value.users=f),u&&(e.value=u),l&&(n.value=l)};var t=Object(s["h"])([]);t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),Object(a["m"])((function(){t.value=[],t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([]),t.value.push([])}));var o=function(){var e=0;while(e<r.value.users.length){if(console.log(Object(s["l"])(r.value.users[e].id).webSocket),console.log(Object(s["l"])(n.value).webSocket),console.log(Object(s["l"])(r.value.users[e].id).webSocket==Object(s["l"])(n.value).webSocket),console.log(v),r.value.users[e].id==n.value)return console.log(e),e;e++}},u=function n(a,u,i,l,s,c){try{if(t.value[a+i][u+l].disabled){if("row"==s?l>0?l++:l<0&&l--:"col"==s&&(i>0?i++:i<0&&i--),c++,c>4)return 0;n(a,u,i,l,s,c)}else t.value[a+i][u+l].focus(),r.value.users[o()].focus={row:a+i,col:u+l},r.value.puzzle[a+i][u+l].focus=e.value,v.send(JSON.stringify({sudokuObj:r.value.puzzle}))}catch(f){}},i=function(e){var n=e.cell,t=e.row,a=e.col,o=e.key,i=e.$event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!n.given&&l.includes(o))i.preventDefault(),r.value.puzzle[t][a].number=o,v.send(JSON.stringify({sudokuObj:r.value}));else if("Backspace"==o)i.preventDefault(),r.value.puzzle[t][a].number="",v.send(JSON.stringify({sudokuObj:r.value}));else if(s.includes(o))switch(o){case"ArrowRight":u(t,a,0,1,"row");break;case"ArrowLeft":u(t,a,0,-1,"row");break;case"ArrowDown":u(t,a,1,0,"col");break;case"ArrowUp":u(t,a,-1,0,"col");break}else"Tab"!=o&&(i.preventDefault(),console.log(o),console.log("Meta"!=o))},l=function(e){var n=e.row,t=e.col;console.log(n),console.log(t),console.log(o()),r.value.users[o()].focus={row:n,col:t},v.send(JSON.stringify({sudokuObj:r.value}))};return{sudokuObj:r,handleInput:i,handleClick:l,inputs:t,color:e,id:n}}};n("9cdc");d.render=i;var p=d;Object(t["a"])(p).mount("#app")},"942d":function(e,r,n){},"9cdc":function(e,r,n){"use strict";n("942d")}});
//# sourceMappingURL=app.522be818.js.map