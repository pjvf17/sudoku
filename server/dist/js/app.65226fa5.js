(function(e){function o(o){for(var n,u,a=o[0],l=o[1],i=o[2],d=0,f=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(t,u)&&t[u]&&f.push(t[u][0]),t[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(o);while(f.length)f.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,o=0;o<r.length;o++){for(var c=r[o],n=!0,a=1;a<c.length;a++){var l=c[a];0!==t[l]&&(n=!1)}n&&(r.splice(o--,1),e=u(u.s=c[0]))}return e}var n={},t={app:0},r=[];function u(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.m=e,u.c=n,u.d=function(e,o,c){u.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:c})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,o){if(1&o&&(e=u(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)u.d(c,n,function(o){return e[o]}.bind(null,n));return c},u.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(o,"a",o),o},u.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=o,a=a.slice();for(var i=0;i<a.length;i++)o(a[i]);var s=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,o,c){e.exports=c("56d7")},"56d7":function(e,o,c){"use strict";c.r(o);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("830f"),t=(c("99af"),c("5c40")),r={id:"app"},u={class:"pane"};function a(e,o){return Object(t["o"])(),Object(t["e"])("div",r,[Object(t["h"])("div",u,[Object(t["h"])("table",null,[Object(t["h"])("tbody",null,[(Object(t["o"])(),Object(t["e"])(t["b"],null,Object(t["p"])(9,(function(o){return Object(t["h"])("tr",{key:o},[(Object(t["o"])(),Object(t["e"])(t["b"],null,Object(t["p"])(9,(function(c){return Object(t["h"])("td",{key:"r".concat(o,"c").concat(c,"-td"),id:"r".concat(o,"c").concat(c,"-td-id"),style:{"background-color":e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].focus}},[Object(t["h"])("input",{value:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].number,onKeydown:Object(n["b"])((function(n){return e.handleInput({cell:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)],row:o,col:c,key:n.key,$event:n})}),["exact"]),type:"text",name:"".concat(c,"+").concat(o),id:"".concat(c,"+").concat(o),class:[{"border-right":c%3==0,"border-bottom":o%3==0,"border-left":0==c,"border-top":0==o,bold:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].given,invalid:!e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].valid.value},"sudoku-board-sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]"],disabled:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].given,ref:function(n){e.inputs["r".concat(o,"c").concat(c)]=n},onClick:function(n){return e.handleClick({row:o,col:c})},style:{"background-color":e.focused["".concat(c,"-").concat(o)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),64))])})),64))])])])])}c("caad");var l,i=c("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var s=null!==(l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==l?l:"ws://tealog.xyz:8010";console.log(s);var d=new WebSocket(s),f={setup:function(){Object(t["l"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(i["h"])({}),o=Object(i["h"])({}),c=Object(i["h"])({}),n=Object(i["h"])({}),r=Object(i["h"])({});d.onmessage=function(t){var r=t.data,u=JSON.parse(r),a=u.color,l=u.sudokuObj,i=u.id,s=u.users;l&&(o.value=l,console.log(o)),s&&(c.value=s),a&&(e.value=a,document.documentElement.style.setProperty("--color","".concat(a))),i&&(n.value=i)};var u=function(){for(var e=0;e<c.value.length;e++){var o=c.value[e];o.id!=n.value&&(r.value["".concat(o.focus.col,"-").concat(o.focus.row)]=o.color)}},a=Object(i["h"])({});Object(t["m"])((function(){a.value={}}));var l=function(){var e=0;while(e<c.value.length){if(c.value[e].id==n.value)return e;e++}},s=function e(o,c,t,r,u,l){try{if(a.value["r".concat(o+t,"c").concat(c+r)].disabled){if("row"==u?r>0?r++:r<0&&r--:"col"==u&&(t>0?t++:t<0&&t--),l++,l>4)return 0;e(o,c,t,r,u,l)}else a.value["r".concat(o+t,"c").concat(c+r)].focus(),d.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:o+t,col:c+r}}}))}catch(i){}},f=function(e){var c=e.cell,n=e.row,t=e.col,r=e.key,u=e.$event,a=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!c.given&&a.includes(r))u.preventDefault(),o.value.puzzle[n][t].number=r,d.send(JSON.stringify({sudokuObj:o.value}));else if("Backspace"==r)u.preventDefault(),o.value.puzzle[n][t].number="",d.send(JSON.stringify({sudokuObj:o.value}));else if(l.includes(r))switch(r){case"ArrowRight":s(n,t,0,1,"row");break;case"ArrowLeft":s(n,t,0,-1,"row");break;case"ArrowDown":s(n,t,1,0,"col");break;case"ArrowUp":s(n,t,-1,0,"col");break}else"Tab"!=r&&u.preventDefault()},b=function(e){var n=e.row,t=e.col;c.value[l()].focus={row:n,col:t},r.value={},u(),d.send(JSON.stringify({sudokuObj:o.value}))};return{sudokuObj:o,handleInput:f,handleClick:b,inputs:a,color:e,id:n,checkFocus:u,focused:r,users:c}}};c("9cdc");f.render=a;var b=f;Object(n["a"])(b).mount("#app")},"942d":function(e,o,c){},"9cdc":function(e,o,c){"use strict";c("942d")}});
//# sourceMappingURL=app.65226fa5.js.map