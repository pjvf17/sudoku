(function(e){function o(o){for(var t,c,l=o[0],a=o[1],s=o[2],d=0,v=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);i&&i(o);while(v.length)v.shift()();return r.push.apply(r,s||[]),u()}function u(){for(var e,o=0;o<r.length;o++){for(var u=r[o],t=!0,l=1;l<u.length;l++){var a=u[l];0!==n[a]&&(t=!1)}t&&(r.splice(o--,1),e=c(c.s=u[0]))}return e}var t={},n={app:0},r=[];function c(o){if(t[o])return t[o].exports;var u=t[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,c),u.l=!0,u.exports}c.m=e,c.c=t,c.d=function(e,o,u){c.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:u})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,o){if(1&o&&(e=c(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(c.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)c.d(u,t,function(o){return e[o]}.bind(null,t));return u},c.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(o,"a",o),o},c.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=o,l=l.slice();for(var s=0;s<l.length;s++)o(l[s]);var i=a;r.push([0,"chunk-vendors"]),u()})({0:function(e,o,u){e.exports=u("56d7")},"56d7":function(e,o,u){"use strict";u.r(o);u("e260"),u("e6cf"),u("cca6"),u("a79d");var t=u("830f"),n=(u("99af"),u("5c40")),r={id:"app"},c={class:"pane"};function l(e,o){return Object(n["o"])(),Object(n["e"])("div",r,[Object(n["h"])("div",c,[Object(n["h"])("table",null,[Object(n["h"])("tbody",null,[(Object(n["o"])(!0),Object(n["e"])(n["b"],null,Object(n["p"])(e.sudokuObj.puzzle,(function(o,u){return Object(n["o"])(),Object(n["e"])("tr",{key:u},[(Object(n["o"])(!0),Object(n["e"])(n["b"],null,Object(n["p"])(o,(function(o,r){return Object(n["o"])(),Object(n["e"])("td",{key:"".concat(r,"+").concat(u,"-td"),id:"".concat(r,"+").concat(u,"-td-id"),style:{"background-color":o.focus}},[Object(n["h"])("input",{value:o.number,onKeydown:Object(t["b"])((function(t){return e.handleInput({cell:o,row:u,col:r,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(r,"+").concat(u),id:"".concat(r,"+").concat(u),class:[{"border-right":(r+1)%3==0,"border-bottom":(u+1)%3==0,"border-left":0==r,"border-top":0==u,bold:o.given,invalid:!o.valid.value},"sudoku-board-cell"],disabled:o.given,ref:function(o){e.inputs[u][r]=o},onClick:function(o){return e.handleClick({row:u,col:r})},style:{"background-color":e.focused["".concat(r,"-").concat(u)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}u("caad");var a,s=u("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var i=null!==(a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==a?a:"ws://tealog.xyz:8010";console.log(i);var d=new WebSocket(i),v={setup:function(){Object(n["l"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(s["h"])({}),o=Object(s["h"])({}),u=Object(s["h"])({}),t=Object(s["h"])({});d.onmessage=function(n){var c=n.data,l=JSON.parse(c),a=l.color,s=l.sudokuObj,i=l.id,d=s||{},v=d.puzzle,p=d.users;console.log(v),v&&(o.value.puzzle=v,o.value.users=p,t.value={},r()),a&&(e.value=a,document.documentElement.style.setProperty("--color","".concat(a))),i&&(u.value=i)};var r=function(){for(var e=0;e<o.value.users.length;e++){var n=o.value.users[e];n.id!=u.value&&(t.value["".concat(n.focus.col,"-").concat(n.focus.row)]=n.color)}},c=Object(s["h"])([]);c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),Object(n["m"])((function(){c.value=[],c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([])}));var l=function(){var e=0;while(e<o.value.users.length){if(o.value.users[e].id==u.value)return e;e++}},a=function e(u,n,a,s,i,v){try{if(c.value[u+a][n+s].disabled){if("row"==i?s>0?s++:s<0&&s--:"col"==i&&(a>0?a++:a<0&&a--),v++,v>4)return 0;e(u,n,a,s,i,v)}else c.value[u+a][n+s].focus(),o.value.users[l()].focus={row:u+a,col:n+s},t.value={},r(),d.send(JSON.stringify({sudokuObj:o.value}))}catch(p){}},i=function(e){var u=e.cell,t=e.row,n=e.col,r=e.key,c=e.$event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!u.given&&l.includes(r))c.preventDefault(),o.value.puzzle[t][n].number=r,d.send(JSON.stringify({sudokuObj:o.value}));else if("Backspace"==r)c.preventDefault(),o.value.puzzle[t][n].number="",d.send(JSON.stringify({sudokuObj:o.value}));else if(s.includes(r))switch(r){case"ArrowRight":a(t,n,0,1,"row");break;case"ArrowLeft":a(t,n,0,-1,"row");break;case"ArrowDown":a(t,n,1,0,"col");break;case"ArrowUp":a(t,n,-1,0,"col");break}else"Tab"!=r&&c.preventDefault()},v=function(e){var u=e.row,n=e.col;o.value.users[l()].focus={row:u,col:n},t.value={},r(),d.send(JSON.stringify({sudokuObj:o.value}))};return{sudokuObj:o,handleInput:i,handleClick:v,inputs:c,color:e,id:u,checkFocus:r,focused:t}}};u("9cdc");v.render=l;var p=v;Object(t["a"])(p).mount("#app")},"942d":function(e,o,u){},"9cdc":function(e,o,u){"use strict";u("942d")}});
//# sourceMappingURL=app.15763a90.js.map