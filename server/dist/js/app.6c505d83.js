(function(e){function u(u){for(var t,c,l=u[0],a=u[1],s=u[2],d=0,v=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);i&&i(u);while(v.length)v.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,u=0;u<r.length;u++){for(var o=r[u],t=!0,l=1;l<o.length;l++){var a=o[l];0!==n[a]&&(t=!1)}t&&(r.splice(u--,1),e=c(c.s=o[0]))}return e}var t={},n={app:0},r=[];function c(u){if(t[u])return t[u].exports;var o=t[u]={i:u,l:!1,exports:{}};return e[u].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=t,c.d=function(e,u,o){c.o(e,u)||Object.defineProperty(e,u,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,u){if(1&u&&(e=c(e)),8&u)return e;if(4&u&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&u&&"string"!=typeof e)for(var t in e)c.d(o,t,function(u){return e[u]}.bind(null,t));return o},c.n=function(e){var u=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(u,"a",u),u},c.o=function(e,u){return Object.prototype.hasOwnProperty.call(e,u)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=u,l=l.slice();for(var s=0;s<l.length;s++)u(l[s]);var i=a;r.push([0,"chunk-vendors"]),o()})({0:function(e,u,o){e.exports=o("56d7")},"56d7":function(e,u,o){"use strict";o.r(u);o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("830f"),n=(o("99af"),o("5c40")),r={id:"app"},c={class:"pane"};function l(e,u){return Object(n["o"])(),Object(n["e"])("div",r,[Object(n["h"])("div",c,[Object(n["h"])("table",null,[Object(n["h"])("tbody",null,[(Object(n["o"])(!0),Object(n["e"])(n["b"],null,Object(n["p"])(e.sudokuObj.puzzle,(function(u,o){return Object(n["o"])(),Object(n["e"])("tr",{key:o},[(Object(n["o"])(!0),Object(n["e"])(n["b"],null,Object(n["p"])(u,(function(u,r){return Object(n["o"])(),Object(n["e"])("td",{key:"".concat(r,"+").concat(o,"-td"),id:"".concat(r,"+").concat(o,"-td-id"),style:{"background-color":u.focus}},[Object(n["h"])("input",{value:u.number,onKeydown:Object(t["b"])((function(t){return e.handleInput({cell:u,row:o,col:r,key:t.key,$event:t})}),["exact"]),type:"text",name:"".concat(r,"+").concat(o),id:"".concat(r,"+").concat(o),class:[{"border-right":(r+1)%3==0,"border-bottom":(o+1)%3==0,"border-left":0==r,"border-top":0==o,bold:u.given,invalid:!u.valid.value},"sudoku-board-cell"],disabled:u.given,ref:function(u){e.inputs[o][r]=u},onClick:function(u){return e.handleClick({row:o,col:r})},style:{"background-color":e.focused["".concat(r,"-").concat(o)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}o("caad");var a,s=o("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var i=null!==(a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==a?a:"ws://tealog.xyz:8010";console.log(i);var d=new WebSocket(i),v={setup:function(){Object(n["l"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(s["h"])({}),u=Object(s["h"])({}),o=Object(s["h"])({}),t=Object(s["h"])({});d.onmessage=function(n){var c=n.data,l=JSON.parse(c),a=l.color,s=l.sudokuObj,i=l.id,d=s||{},v=d.puzzle,p=d.users;v&&(u.value.puzzle=v,u.value.users=p,t.value={},r()),a&&(e.value=a,document.documentElement.style.setProperty("--color","".concat(a))),i&&(o.value=i)};var r=function(){for(var e=0;e<u.value.users.length;e++){var n=u.value.users[e];n.id!=o.value&&(t.value["".concat(n.focus.col,"-").concat(n.focus.row)]=n.color)}},c=Object(s["h"])([]);c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),Object(n["m"])((function(){c.value=[],c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([])}));var l=function(){var e=0;while(e<u.value.users.length){if(u.value.users[e].id==o.value)return e;e++}},a=function e(o,n,a,s,i,v){try{if(c.value[o+a][n+s].disabled){if("row"==i?s>0?s++:s<0&&s--:"col"==i&&(a>0?a++:a<0&&a--),v++,v>4)return 0;e(o,n,a,s,i,v)}else c.value[o+a][n+s].focus(),u.value.users[l()].focus={row:o+a,col:n+s},t.value={},r(),d.send(JSON.stringify({sudokuObj:u.value}))}catch(p){}},i=function(e){var o=e.cell,t=e.row,n=e.col,r=e.key,c=e.$event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!o.given&&l.includes(r))c.preventDefault(),u.value.puzzle[t][n].number=r,d.send(JSON.stringify({sudokuObj:u.value}));else if("Backspace"==r)c.preventDefault(),u.value.puzzle[t][n].number="",d.send(JSON.stringify({sudokuObj:u.value}));else if(s.includes(r))switch(r){case"ArrowRight":a(t,n,0,1,"row");break;case"ArrowLeft":a(t,n,0,-1,"row");break;case"ArrowDown":a(t,n,1,0,"col");break;case"ArrowUp":a(t,n,-1,0,"col");break}else"Tab"!=r&&c.preventDefault()},v=function(e){var o=e.row,n=e.col;u.value.users[l()].focus={row:o,col:n},t.value={},r(),d.send(JSON.stringify({sudokuObj:u.value}))};return{sudokuObj:u,handleInput:i,handleClick:v,inputs:c,color:e,id:o,checkFocus:r,focused:t}}};o("9cdc");v.render=l;var p=v;Object(t["a"])(p).mount("#app")},"942d":function(e,u,o){},"9cdc":function(e,u,o){"use strict";o("942d")}});
//# sourceMappingURL=app.6c505d83.js.map