(function(e){function c(c){for(var n,u,a=c[0],l=c[1],i=c[2],d=0,f=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(t,u)&&t[u]&&f.push(t[u][0]),t[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(c);while(f.length)f.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,c=0;c<r.length;c++){for(var o=r[c],n=!0,a=1;a<o.length;a++){var l=o[a];0!==t[l]&&(n=!1)}n&&(r.splice(c--,1),e=u(u.s=o[0]))}return e}var n={},t={app:0},r=[];function u(c){if(n[c])return n[c].exports;var o=n[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=n,u.d=function(e,c,o){u.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,c){if(1&c&&(e=u(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)u.d(o,n,function(c){return e[c]}.bind(null,n));return o},u.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(c,"a",c),c},u.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=c,a=a.slice();for(var i=0;i<a.length;i++)c(a[i]);var s=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,c,o){e.exports=o("56d7")},"56d7":function(e,c,o){"use strict";o.r(c);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("830f"),t=(o("99af"),o("5c40")),r={id:"app"},u={class:"pane"};function a(e,c){return Object(t["o"])(),Object(t["e"])("div",r,[Object(t["h"])("div",u,[Object(t["h"])("table",null,[Object(t["h"])("tbody",null,[(Object(t["o"])(),Object(t["e"])(t["b"],null,Object(t["p"])(9,(function(c){return Object(t["h"])("tr",{key:c},[(Object(t["o"])(),Object(t["e"])(t["b"],null,Object(t["p"])(9,(function(o){return Object(t["h"])("td",{key:"r".concat(c,"c").concat(o,"-td"),id:"r".concat(c,"c").concat(o,"-td-id"),style:{"background-color":e.sudokuObj.puzzle["r".concat(c,"c").concat(o)].focus}},[Object(t["h"])("input",{value:e.sudokuObj.puzzle["r".concat(c,"c").concat(o)].number,onKeydown:Object(n["b"])((function(n){return e.handleInput({cell:e.sudokuObj.puzzle["r".concat(c,"c").concat(o)],row:c,col:o,key:n.key,$event:n})}),["exact"]),type:"text",name:"".concat(o,"+").concat(c),id:"".concat(o,"+").concat(c),class:[{"border-right":o%3==0,"border-bottom":c%3==0,"border-left":0==o,"border-top":0==c,bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(o)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(o)].valid.value},"sudoku-board-sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]"],disabled:e.sudokuObj.puzzle["r".concat(c,"c").concat(o)].given,ref:function(n){e.inputs["r".concat(c,"c").concat(o)]=n},onClick:function(n){return e.handleClick({row:c,col:o})},style:{"background-color":e.focused["".concat(o,"-").concat(c)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),64))])})),64))])])])])}o("caad");var l,i=o("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var s=null!==(l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==l?l:"ws://tealog.xyz:8010";console.log(s);var d=new WebSocket(s),f={setup:function(){Object(t["l"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(i["h"])({}),c=Object(i["h"])({}),o=Object(i["h"])({}),n=Object(i["h"])({}),r=Object(i["h"])({});d.onmessage=function(t){var r=t.data,u=JSON.parse(r),a=u.color,l=u.sudokuObj,i=u.id,s=u.users;l&&(c.value.puzzle=l),s&&(o.value=s),a&&(e.value=a,document.documentElement.style.setProperty("--color","".concat(a))),i&&(n.value=i)};var u=function(){for(var e=0;e<o.value.length;e++){var c=o.value[e];c.id!=n.value&&(r.value["".concat(c.focus.col,"-").concat(c.focus.row)]=c.color)}},a=Object(i["h"])({});Object(t["m"])((function(){a.value={}}));var l=function(){var e=0;while(e<o.value.length){if(o.value[e].id==n.value)return e;e++}},s=function e(c,o,t,r,u,l){try{if(a.value["r".concat(c+t,"c").concat(o+r)].disabled){if("row"==u?r>0?r++:r<0&&r--:"col"==u&&(t>0?t++:t<0&&t--),l++,l>4)return 0;e(c,o,t,r,u,l)}else a.value["r".concat(c+t,"c").concat(o+r)].focus(),d.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c+t,col:o+r}}}))}catch(i){}},f=function(e){var o=e.cell,n=e.row,t=e.col,r=e.key,u=e.$event,a=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!o.given&&a.includes(r))u.preventDefault(),c.value.puzzle[n][t].number=r,d.send(JSON.stringify({sudokuObj:c.value}));else if("Backspace"==r)u.preventDefault(),c.value.puzzle[n][t].number="",d.send(JSON.stringify({sudokuObj:c.value}));else if(l.includes(r))switch(r){case"ArrowRight":s(n,t,0,1,"row");break;case"ArrowLeft":s(n,t,0,-1,"row");break;case"ArrowDown":s(n,t,1,0,"col");break;case"ArrowUp":s(n,t,-1,0,"col");break}else"Tab"!=r&&u.preventDefault()},b=function(e){var n=e.row,t=e.col;o.value[l()].focus={row:n,col:t},r.value={},u(),d.send(JSON.stringify({sudokuObj:c.value}))};return{sudokuObj:c,handleInput:f,handleClick:b,inputs:a,color:e,id:n,checkFocus:u,focused:r,users:o}}};o("9cdc");f.render=a;var b=f;Object(n["a"])(b).mount("#app")},"942d":function(e,c,o){},"9cdc":function(e,c,o){"use strict";o("942d")}});
//# sourceMappingURL=app.c3dd0f84.js.map