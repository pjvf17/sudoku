(function(e){function t(t){for(var n,a,u=t[0],l=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,u=1;u<c.length;u++){var l=c[u];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var i=l;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("830f"),r=(c("99af"),c("5c40")),o={id:"app"},a={class:"pane"},u=Object(r["i"])("svg",{class:"inputReplacment"},null,-1);function l(e,t){return Object(r["p"])(),Object(r["f"])("div",o,[Object(r["i"])("div",a,[Object(r["i"])("table",null,[Object(r["i"])("tbody",null,[(Object(r["p"])(),Object(r["f"])(r["b"],null,Object(r["q"])(9,(function(e){return Object(r["i"])("tr",{key:e},[(Object(r["p"])(),Object(r["f"])(r["b"],null,Object(r["q"])(9,(function(t){return Object(r["i"])("td",{key:"r".concat(e,"c").concat(t,"-td"),id:"r".concat(e,"c").concat(t,"-td-id")},[u],8,["id"])})),64))])})),64))])])])])}c("caad");var s,i=c("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(s=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==s?s:"ws://tealog.xyz:8010";console.log(f);var d=new WebSocket(f),p={setup:function(){Object(r["m"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(i["h"])({}),t=Object(i["h"])({}),c=Object(i["h"])({}),n=Object(i["h"])({});d.onmessage=function(r){var o=r.data,a=JSON.parse(o),u=a.color,l=a.sudokuObj,s=a.id,i=a.users,f=a.focusUpdate,d=a.numberUpdate,p=l||{},b=p.puzzle,v=p.sentRows,O=p.sentCols,j=p.sentSquares;if(l&&(t.value.puzzle=b,t.value.rows=v,t.value.cols=O,t.value.squares=j),i&&(c.value=i),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),f){var w=f.id,y=f.focus;c.value[w].focus=y}if(d){var h=d.address,g=d.number;t.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=g}};var o=Object(r["e"])((function(){var e={};for(var t in c.value)if(Object.prototype.hasOwnProperty.call(c.value,t)){var r=c.value[t];r.id!=n.value&&(e["r".concat(r.focus.row,"c").concat(r.focus.col)]=r.color)}return e})),a=Object(i["h"])({});Object(r["n"])((function(){a.value={}}));var u=function e(t,c,r,o,u,l){if(a.value["r".concat(t+r,"c").concat(c+o)].disabled){if("row"==u?o>0?o++:o<0&&o--:"col"==u&&(r>0?r++:r<0&&r--),l++,l>4)return 0;e(t,c,r,o,u,l)}else a.value["r".concat(t+r,"c").concat(c+o)].focus(),d.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:t+r,col:c+o}}}))},l=function(e){var c=e.cell,n=e.row,r=e.col,o=e.key,a=e.$event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!c.given&&l.includes(o)){a.preventDefault(),t.value.puzzle["r".concat(n,"c").concat(r)].number=o;var i=t.value.puzzle["r".concat(n,"c").concat(r)].address;d.send(JSON.stringify({numberUpdate:{address:i,number:o}}))}else if("Backspace"==o){a.preventDefault(),t.value.puzzle["r".concat(n,"c").concat(r)].number="";var f=t.value.puzzle["r".concat(n,"c").concat(r)].address;d.send(JSON.stringify({numberUpdate:{address:f,number:""}}))}else if(s.includes(o))switch(o){case"ArrowRight":u(n,r,0,1,"row");break;case"ArrowLeft":u(n,r,0,-1,"row");break;case"ArrowDown":u(n,r,1,0,"col");break;case"ArrowUp":u(n,r,-1,0,"col");break}else"Tab"!=o&&a.preventDefault()},s=function(e){var t=e.row,c=e.col;d.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:t,col:c}}}))};return{sudokuObj:t,handleInput:l,handleClick:s,inputs:a,color:e,id:n,checkFocus:o,users:c}}};c("9cdc");p.render=l;var b=p;Object(n["a"])(b).mount("#app")},"942d":function(e,t,c){},"9cdc":function(e,t,c){"use strict";c("942d")}});
//# sourceMappingURL=app.bc954a63.js.map