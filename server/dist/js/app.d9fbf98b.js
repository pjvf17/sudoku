(function(e){function c(c){for(var n,a,u=c[0],l=c[1],i=c[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(c);while(f.length)f.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,c=0;c<r.length;c++){for(var t=r[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(r.splice(c--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},r=[];function a(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,c,t){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)a.d(t,n,function(c){return e[c]}.bind(null,n));return t},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var i=0;i<u.length;i++)c(u[i]);var s=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("5c40")),r={id:"app"},a={class:"pane"};function u(e,c){return Object(o["o"])(),Object(o["e"])("div",r,[Object(o["h"])("div",a,[Object(o["h"])("table",null,[Object(o["h"])("tbody",null,[(Object(o["o"])(),Object(o["e"])(o["b"],null,Object(o["p"])(9,(function(c){return Object(o["h"])("tr",{key:c},[(Object(o["o"])(),Object(o["e"])(o["b"],null,Object(o["p"])(9,(function(t){return Object(o["h"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),style:{"background-color":e.puzzle["r".concat(c,"c").concat(t)].focus}},[Object(o["h"])("input",{value:e.puzzle["r".concat(c,"c").concat(t)].number,onKeydown:Object(n["b"])((function(n){return e.handleInput({cell:e.puzzle["r".concat(c,"c").concat(t)],row:c,col:t,key:n.key,$event:n})}),["exact"]),type:"text",name:"".concat(t,"+").concat(c),id:"".concat(t,"+").concat(c),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,bold:e.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.puzzle["r".concat(c,"c").concat(t)].valid.value},"sudoku-board"],disabled:e.puzzle["r".concat(c,"c").concat(t)].given,ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n},onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.focused["".concat(t,"-").concat(c)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),64))])})),64))])])])])}t("caad");var l,i=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var s=null!==(l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==l?l:"ws://tealog.xyz:8010";console.log(s);var d=new WebSocket(s),f={setup:function(){Object(o["l"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(i["h"])({}),c=Object(i["h"])({}),t=Object(i["h"])({}),n=Object(i["h"])({}),r=Object(i["h"])({});d.onmessage=function(n){var o=n.data,a=JSON.parse(o),u=a.color,l=a.puzzle,i=a.id,s=a.users;l&&(c.value=l),s&&(r.value=s),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),i&&(t.value=i)};var a=function(){for(var e=0;e<r.value.length;e++){var c=r.value[e];c.id!=t.value&&(n.value["".concat(c.focus.col,"-").concat(c.focus.row)]=c.color)}},u=Object(i["h"])({});Object(o["m"])((function(){u.value={}}));var l=function(){var e=0;while(e<r.value.length){if(r.value[e].id==t.value)return e;e++}},s=function e(c,n,o,r,a,l){try{if(u.value["r".concat(c+o,"c").concat(n+r)].disabled){if("row"==a?r>0?r++:r<0&&r--:"col"==a&&(o>0?o++:o<0&&o--),l++,l>4)return 0;e(c,n,o,r,a,l)}else u.value["r".concat(c+o,"c").concat(n+r)].focus(),d.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:c+o,col:n+r}}}))}catch(i){}},f=function(e){var t=e.cell,n=e.row,o=e.col,r=e.key,a=e.$event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!t.given&&u.includes(r))a.preventDefault(),c.value[n][o].number=r,d.send(JSON.stringify({sudokuObj:c.value}));else if("Backspace"==r)a.preventDefault(),c.value[n][o].number="",d.send(JSON.stringify({sudokuObj:c.value}));else if(l.includes(r))switch(r){case"ArrowRight":s(n,o,0,1,"row");break;case"ArrowLeft":s(n,o,0,-1,"row");break;case"ArrowDown":s(n,o,1,0,"col");break;case"ArrowUp":s(n,o,-1,0,"col");break}else"Tab"!=r&&a.preventDefault()},b=function(e){var t=e.row,o=e.col;r.value[l()].focus={row:t,col:o},n.value={},a(),d.send(JSON.stringify({sudokuObj:c.value}))};return{puzzle:c,users:r,handleInput:f,handleClick:b,inputs:u,color:e,id:t,checkFocus:a,focused:n}}};t("9cdc");f.render=u;var b=f;Object(n["a"])(b).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.d9fbf98b.js.map