(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],r=!0,u=1;u<c.length;u++){var l=c[u];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=c[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=r,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(c,r,function(t){return e[t]}.bind(null,r));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("830f"),n=(c("99af"),c("5c40")),o={id:"app"},a={class:"pane"},u=Object(n["i"])("svg",{class:"inputReplacement"},[Object(n["i"])("circle",{cx:"50",cy:"50",r:"40",stroke:"green","stroke-width":"4",fill:"yellow"})],-1);function l(e,t){return Object(n["p"])(),Object(n["f"])("div",o,[Object(n["i"])("div",a,[Object(n["i"])("table",null,[Object(n["i"])("tbody",null,[(Object(n["p"])(),Object(n["f"])(n["b"],null,Object(n["q"])(9,(function(t){return Object(n["i"])("tr",{key:t},[(Object(n["p"])(),Object(n["f"])(n["b"],null,Object(n["q"])(9,(function(c){return Object(n["i"])("td",{key:"r".concat(t,"c").concat(c,"-td"),id:"r".concat(t,"c").concat(c,"-td-id"),class:[{"border-right":c%3==0,"border-bottom":t%3==0,"border-left":0==c,"border-top":0==t,bold:e.sudokuObj.puzzle["r".concat(t,"c").concat(c)].given,invalid:!e.sudokuObj.puzzle["r".concat(t,"c").concat(c)].valid.value}]},[u],10,["id"])})),64))])})),64))])])])])}c("caad");var i,s=c("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var d=null!==(i=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==i?i:"ws://tealog.xyz:8010";console.log(d);var f=new WebSocket(d),p={setup:function(){Object(n["m"])((function(){f.close(1e3,"logging off")})),f.onopen=function(){console.log("connection established")};var e=Object(s["h"])({}),t=Object(s["h"])({}),c=Object(s["h"])({}),r=Object(s["h"])({});f.onmessage=function(n){var o=n.data,a=JSON.parse(o),u=a.color,l=a.sudokuObj,i=a.id,s=a.users,d=a.focusUpdate,f=a.numberUpdate,p=l||{},b=p.puzzle,v=p.sentRows,O=p.sentCols,j=p.sentSquares;if(l&&(t.value.puzzle=b,t.value.rows=v,t.value.cols=O,t.value.squares=j),s&&(c.value=s),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),i&&(r.value=i),d){var w=d.id,y=d.focus;c.value[w].focus=y}if(f){var h=f.address,g=f.number;t.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=g}};var o=Object(n["e"])((function(){var e={};for(var t in c.value)if(Object.prototype.hasOwnProperty.call(c.value,t)){var n=c.value[t];n.id!=r.value&&(e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color)}return e})),a=Object(s["h"])({});Object(n["n"])((function(){a.value={}}));var u=function e(t,c,n,o,u,l){if(a.value["r".concat(t+n,"c").concat(c+o)].disabled){if("row"==u?o>0?o++:o<0&&o--:"col"==u&&(n>0?n++:n<0&&n--),l++,l>4)return 0;e(t,c,n,o,u,l)}else a.value["r".concat(t+n,"c").concat(c+o)].focus(),f.send(JSON.stringify({focusUpdate:{id:r.value,focus:{row:t+n,col:c+o}}}))},l=function(e){var c=e.cell,r=e.row,n=e.col,o=e.key,a=e.$event,l=["1","2","3","4","5","6","7","8","9"],i=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!c.given&&l.includes(o)){a.preventDefault(),t.value.puzzle["r".concat(r,"c").concat(n)].number=o;var s=t.value.puzzle["r".concat(r,"c").concat(n)].address;f.send(JSON.stringify({numberUpdate:{address:s,number:o}}))}else if("Backspace"==o){a.preventDefault(),t.value.puzzle["r".concat(r,"c").concat(n)].number="";var d=t.value.puzzle["r".concat(r,"c").concat(n)].address;f.send(JSON.stringify({numberUpdate:{address:d,number:""}}))}else if(i.includes(o))switch(o){case"ArrowRight":u(r,n,0,1,"row");break;case"ArrowLeft":u(r,n,0,-1,"row");break;case"ArrowDown":u(r,n,1,0,"col");break;case"ArrowUp":u(r,n,-1,0,"col");break}else"Tab"!=o&&a.preventDefault()},i=function(e){var t=e.row,c=e.col;f.send(JSON.stringify({focusUpdate:{id:r.value,focus:{row:t,col:c}}}))};return{sudokuObj:t,handleInput:l,handleClick:i,inputs:a,color:e,id:r,checkFocus:o,users:c}}};c("9cdc");p.render=l;var b=p;Object(r["a"])(b).mount("#app")},"942d":function(e,t,c){},"9cdc":function(e,t,c){"use strict";c("942d")}});
//# sourceMappingURL=app.6471f48d.js.map