(function(e){function c(c){for(var n,a,u=c[0],l=c[1],i=c[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(c);while(f.length)f.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,c=0;c<r.length;c++){for(var t=r[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(r.splice(c--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},r=[];function a(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,c,t){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)a.d(t,n,function(c){return e[c]}.bind(null,n));return t},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var i=0;i<u.length;i++)c(u[i]);var s=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("5c40")),r={id:"app"},a={class:"pane"};function u(e,c){return Object(o["p"])(),Object(o["f"])("div",r,[Object(o["i"])("div",a,[Object(o["i"])("table",null,[Object(o["i"])("tbody",null,[(Object(o["p"])(),Object(o["f"])(o["b"],null,Object(o["q"])(9,(function(c){return Object(o["i"])("tr",{key:c},[(Object(o["p"])(),Object(o["f"])(o["b"],null,Object(o["q"])(9,(function(t){return Object(o["i"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id")},[Object(o["i"])("input",{value:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number,onKeydown:Object(n["b"])((function(n){return e.handleInput({cell:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)],row:c,col:t,key:n.key,$event:n})}),["exact"]),type:"text",name:"".concat(t,"+").concat(c),id:"".concat(t,"+").concat(c),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value}],disabled:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n},onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.checkFocus["r".concat(c,"c").concat(t)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],8,["id"])})),64))])})),64))])])])])}t("caad");var l,i=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var s=null!==(l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==l?l:"ws://tealog.xyz:8010";console.log(s);var d=new WebSocket(s),f={setup:function(){Object(o["m"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(i["h"])({}),c=Object(i["h"])({}),t=Object(i["h"])({}),n=Object(i["h"])({});d.onmessage=function(o){var r=o.data,a=JSON.parse(r),u=a.color,l=a.sudokuObj,i=a.id,s=a.users,d=a.focusUpdate,f=a.numberUpdate,p=l||{},b=p.puzzle,v=p.sentRows,O=p.sentCols,j=p.sentSquares;if(l&&(c.value.puzzle=b,c.value.rows=v,c.value.cols=O,c.value.squares=j),s&&(t.value=s),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),i&&(n.value=i),d){var w=d.id,y=d.focus;t.value[w].focus=y}if(f){var h=f.address,g=f.number;c.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=g}};var r=Object(o["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var o=t.value[c];o.id!=n.value&&(e["r".concat(o.focus.row,"c").concat(o.focus.col)]=o.color)}return e})),a=Object(i["h"])({});Object(o["n"])((function(){a.value={}}));var u=function(){var e=0;while(e<t.value.length){if(t.value[e].id==n.value)return e;e++}},l=function e(c,t,o,r,u,l){try{if(a.value["r".concat(c+o,"c").concat(t+r)].disabled){if("row"==u?r>0?r++:r<0&&r--:"col"==u&&(o>0?o++:o<0&&o--),l++,l>4)return 0;e(c,t,o,r,u,l)}else a.value["r".concat(c+o,"c").concat(t+r)].focus(),d.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c+o,col:t+r}}}))}catch(i){}},s=function(e){var t=e.cell,n=e.row,o=e.col,r=e.key,a=e.$event,u=["1","2","3","4","5","6","7","8","9"],i=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!t.given&&u.includes(r)){a.preventDefault(),c.value.puzzle["r".concat(n,"c").concat(o)].number=r;var s=c.value.puzzle["r".concat(n,"c").concat(o)].address;d.send(JSON.stringify({numberUpdate:{address:s,number:r}}))}else if("Backspace"==r){a.preventDefault(),c.value.puzzle["r".concat(n,"c").concat(o)].number="";var f=c.value.puzzle["r".concat(n,"c").concat(o)].address;d.send(JSON.stringify({numberUpdate:{address:f,number:""}}))}else if(i.includes(r))switch(r){case"ArrowRight":l(n,o,0,1,"row");break;case"ArrowLeft":l(n,o,0,-1,"row");break;case"ArrowDown":l(n,o,1,0,"col");break;case"ArrowUp":l(n,o,-1,0,"col");break}else"Tab"!=r&&a.preventDefault()},f=function(e){var c=e.row,o=e.col;t.value[u()].focus={row:c,col:o},d.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:o}}}))};return{sudokuObj:c,handleInput:s,handleClick:f,inputs:a,color:e,id:n,checkFocus:r,users:t}}};t("9cdc");f.render=u;var p=f;Object(n["a"])(p).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.6f047abe.js.map