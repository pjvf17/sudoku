(function(e){function o(o){for(var n,u,l=o[0],a=o[1],i=o[2],d=0,f=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(t,u)&&t[u]&&f.push(t[u][0]),t[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);s&&s(o);while(f.length)f.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,o=0;o<r.length;o++){for(var c=r[o],n=!0,l=1;l<c.length;l++){var a=c[l];0!==t[a]&&(n=!1)}n&&(r.splice(o--,1),e=u(u.s=c[0]))}return e}var n={},t={app:0},r=[];function u(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.m=e,u.c=n,u.d=function(e,o,c){u.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:c})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,o){if(1&o&&(e=u(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)u.d(c,n,function(o){return e[o]}.bind(null,n));return c},u.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(o,"a",o),o},u.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=o,l=l.slice();for(var i=0;i<l.length;i++)o(l[i]);var s=a;r.push([0,"chunk-vendors"]),c()})({0:function(e,o,c){e.exports=c("56d7")},"56d7":function(e,o,c){"use strict";c.r(o);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("830f"),t=(c("99af"),c("5c40")),r={id:"app"},u={class:"pane"};function l(e,o){return Object(t["p"])(),Object(t["f"])("div",r,[Object(t["i"])("div",u,[Object(t["i"])("table",null,[Object(t["i"])("tbody",null,[(Object(t["p"])(),Object(t["f"])(t["b"],null,Object(t["q"])(9,(function(o){return Object(t["i"])("tr",{key:o},[(Object(t["p"])(),Object(t["f"])(t["b"],null,Object(t["q"])(9,(function(c){return Object(t["i"])("td",{key:"r".concat(o,"c").concat(c,"-td"),id:"r".concat(o,"c").concat(c,"-td-id")},[Object(t["i"])("input",{value:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].number,onKeydown:Object(n["b"])((function(n){return e.handleInput({cell:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)],row:o,col:c,key:n.key,$event:n})}),["exact"]),type:"text",name:"".concat(c,"+").concat(o),id:"".concat(c,"+").concat(o),class:[{"border-right":c%3==0,"border-bottom":o%3==0,"border-left":0==c,"border-top":0==o,bold:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].given,invalid:!e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].valid.value}],disabled:e.sudokuObj.puzzle["r".concat(o,"c").concat(c)].given,ref:function(n){e.inputs["r".concat(o,"c").concat(c)]=n},onClick:function(n){return e.handleClick({row:o,col:c})},style:{"background-color":e.focused["r".concat(o,"c").concat(c)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],8,["id"])})),64))])})),64))])])])])}c("caad");var a,i=c("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var s=null!==(a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==a?a:"ws://tealog.xyz:8010";console.log(s);var d=new WebSocket(s),f={setup:function(){Object(t["m"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(i["h"])({}),o=Object(i["h"])({}),c=Object(i["h"])({}),n=Object(i["h"])({});d.onmessage=function(t){var u=t.data,l=JSON.parse(u),a=l.color,s=l.sudokuObj,d=l.id,f=l.users,b=l.focusUpdate,p=s||{},v=p.puzzle,O=p.sentRows,j=p.sentCols,w=p.sentSquares;if(console.log(v),s&&(o.value.puzzle=v,o.value.rows=O,o.value.cols=j,o.value.squares=w),f&&(c.value=f),a&&(e.value=a,document.documentElement.style.setProperty("--color","".concat(a))),d&&(n.value=d),b){console.log(b);var g=b.id,y=b.focus;console.log(c.value[g]),c.value[g].focus=y,console.log(Object(i["l"])(c.value)),r()}};var r=Object(t["e"])((function(){var e={};for(var o in c.value)if(Object.prototype.hasOwnProperty.call(c.value,o)){var t=c.value[o];t.id!=n.value&&(e["r".concat(t.focus.row,"c").concat(t.focus.col)]=t.color,console.log(e))}return console.log(e),e})),u=Object(i["h"])({});Object(t["n"])((function(){u.value={}}));var l=function(){var e=0;while(e<c.value.length){if(c.value[e].id==n.value)return e;e++}},a=function e(o,c,t,r,l,a){try{if(u.value["r".concat(o+t,"c").concat(c+r)].disabled){if("row"==l?r>0?r++:r<0&&r--:"col"==l&&(t>0?t++:t<0&&t--),a++,a>4)return 0;e(o,c,t,r,l,a)}else u.value["r".concat(o+t,"c").concat(c+r)].focus(),d.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:o+t,col:c+r}}}))}catch(i){}},s=function(e){var c=e.cell,n=e.row,t=e.col,r=e.key,u=e.$event,l=["1","2","3","4","5","6","7","8","9"],i=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!c.given&&l.includes(r))u.preventDefault(),o.value.puzzle[n][t].number=r,d.send(JSON.stringify({sudokuObj:o.value}));else if("Backspace"==r)u.preventDefault(),o.value.puzzle[n][t].number="",d.send(JSON.stringify({sudokuObj:o.value}));else if(i.includes(r))switch(r){case"ArrowRight":a(n,t,0,1,"row");break;case"ArrowLeft":a(n,t,0,-1,"row");break;case"ArrowDown":a(n,t,1,0,"col");break;case"ArrowUp":a(n,t,-1,0,"col");break}else"Tab"!=r&&u.preventDefault()},f=function(e){var n=e.row,t=e.col;c.value[l()].focus={row:n,col:t},d.send(JSON.stringify({sudokuObj:o.value}))};return{sudokuObj:o,handleInput:s,handleClick:f,inputs:u,color:e,id:n,checkFocus:r,users:c}}};c("9cdc");f.render=l;var b=f;Object(n["a"])(b).mount("#app")},"942d":function(e,o,c){},"9cdc":function(e,o,c){"use strict";c("942d")}});
//# sourceMappingURL=app.03855a8c.js.map