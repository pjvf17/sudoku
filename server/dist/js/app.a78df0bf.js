(function(e){function c(c){for(var o,a,u=c[0],l=c[1],s=c[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);i&&i(c);while(f.length)f.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,c=0;c<r.length;c++){for(var t=r[c],o=!0,u=1;u<t.length;u++){var l=t[u];0!==n[l]&&(o=!1)}o&&(r.splice(c--,1),e=a(a.s=t[0]))}return e}var o={},n={app:0},r=[];function a(c){if(o[c])return o[c].exports;var t=o[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,c,t){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var o in e)a.d(t,o,function(c){return e[c]}.bind(null,o));return t},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("830f"),n=(t("99af"),t("5c40")),r={id:"app"},a={class:"pane"},u={class:"inputReplacement"};function l(e,c){return Object(n["p"])(),Object(n["f"])("div",r,[Object(n["i"])("div",a,[Object(n["i"])("table",null,[Object(n["i"])("tbody",null,[(Object(n["p"])(),Object(n["f"])(n["b"],null,Object(n["q"])(9,(function(c){return Object(n["i"])("tr",{key:c},[(Object(n["p"])(),Object(n["f"])(n["b"],null,Object(n["q"])(9,(function(t){return Object(n["i"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value}],onClick:function(o){return e.handleClick({row:c,col:t})},style:{"background-color":e.checkFocus["r".concat(c,"c").concat(t)]},onKeydown:Object(o["b"])((function(o){return e.handleInput({cell:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)],row:c,col:t,key:o.key,$event:o})}),["exact"])},[(Object(n["p"])(),Object(n["f"])("svg",u,[Object(n["i"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},Object(n["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3)]))],46,["id","onClick","onKeydown"])})),64))])})),64))])])])])}t("caad");var s,i=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var d=null!==(s=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==s?s:"ws://tealog.xyz:8010";console.log(d);var f=new WebSocket(d),b={setup:function(){Object(n["m"])((function(){f.close(1e3,"logging off")})),f.onopen=function(){console.log("connection established")};var e=Object(i["h"])({}),c=Object(i["h"])({}),t=Object(i["h"])({}),o=Object(i["h"])({});f.onmessage=function(n){var r=n.data,a=JSON.parse(r),u=a.color,l=a.sudokuObj,s=a.id,i=a.users,d=a.focusUpdate,f=a.numberUpdate,b=l||{},p=b.puzzle,v=b.sentRows,O=b.sentCols,j=b.sentSquares;if(l&&(c.value.puzzle=p,c.value.rows=v,c.value.cols=O,c.value.squares=j),i&&(t.value=i),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(o.value=s),d){var w=d.id,y=d.focus;t.value[w].focus=y}if(f){var h=f.address,g=f.number;c.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=g}};var r=Object(n["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var o=t.value[c];e["r".concat(o.focus.row,"c").concat(o.focus.col)]=o.color}return e})),a=Object(i["h"])({});Object(n["n"])((function(){a.value={}}));var u=function e(c,n,r,u,l,s){if(a.value["r".concat(c+r,"c").concat(n+u)].disabled){if("row"==l?u>0?u++:u<0&&u--:"col"==l&&(r>0?r++:r<0&&r--),s++,s>4)return 0;e(c,n,r,u,l,s)}else c+=r,n+=u,a.value["r".concat(c,"c").concat(n)].focus(),t.value[o.value].focus={row:c,col:n},f.send(JSON.stringify({focusUpdate:{id:o.value,focus:{row:c,col:n}}}))},l=function(e){var t=e.cell,o=e.row,n=e.col,r=e.key,a=e.$event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!t.given&&l.includes(r)){a.preventDefault(),c.value.puzzle["r".concat(o,"c").concat(n)].number=r;var i=c.value.puzzle["r".concat(o,"c").concat(n)].address;f.send(JSON.stringify({numberUpdate:{address:i,number:r}}))}else if("Backspace"==r){a.preventDefault(),c.value.puzzle["r".concat(o,"c").concat(n)].number="";var d=c.value.puzzle["r".concat(o,"c").concat(n)].address;f.send(JSON.stringify({numberUpdate:{address:d,number:""}}))}else if(s.includes(r))switch(r){case"ArrowRight":u(o,n,0,1,"row");break;case"ArrowLeft":u(o,n,0,-1,"row");break;case"ArrowDown":u(o,n,1,0,"col");break;case"ArrowUp":u(o,n,-1,0,"col");break}else"Tab"!=r&&a.preventDefault()},s=function(e){var c=e.row,n=e.col;t.value[o.value].focus={row:c,col:n},f.send(JSON.stringify({focusUpdate:{id:o.value,focus:{row:c,col:n}}}))};return{sudokuObj:c,handleInput:l,handleClick:s,inputs:a,color:e,id:o,checkFocus:r,users:t}}};t("9cdc");b.render=l;var p=b;Object(o["a"])(p).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.a78df0bf.js.map