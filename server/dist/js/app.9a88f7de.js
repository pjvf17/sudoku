(function(e){function n(n){for(var u,c,l=n[0],a=n[1],s=n[2],d=0,v=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(t,c)&&t[c]&&v.push(t[c][0]),t[c]=0;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&(e[u]=a[u]);i&&i(n);while(v.length)v.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,n=0;n<r.length;n++){for(var o=r[n],u=!0,l=1;l<o.length;l++){var a=o[l];0!==t[a]&&(u=!1)}u&&(r.splice(n--,1),e=c(c.s=o[0]))}return e}var u={},t={app:0},r=[];function c(n){if(u[n])return u[n].exports;var o=u[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=u,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)c.d(o,u,function(n){return e[n]}.bind(null,u));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var i=a;r.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"56d7":function(e,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var u=o("830f"),t=(o("99af"),o("5c40")),r={id:"app"},c={class:"pane"};function l(e,n){return Object(t["o"])(),Object(t["e"])("div",r,[Object(t["h"])("div",c,[Object(t["h"])("table",null,[Object(t["h"])("tbody",null,[(Object(t["o"])(!0),Object(t["e"])(t["b"],null,Object(t["p"])(e.sudokuObj.puzzle,(function(n,o){return Object(t["o"])(),Object(t["e"])("tr",{key:o},[(Object(t["o"])(!0),Object(t["e"])(t["b"],null,Object(t["p"])(n,(function(n,r){return Object(t["o"])(),Object(t["e"])("td",{key:"".concat(r,"+").concat(o,"-td"),id:"".concat(r,"+").concat(o,"-td-id"),style:{"background-color":n.focus}},[Object(t["h"])("input",{value:n.number,onKeydown:Object(u["b"])((function(u){return e.handleInput({cell:n,row:o,col:r,key:u.key,$event:u})}),["exact"]),type:"text",name:"".concat(r,"+").concat(o),id:"".concat(r,"+").concat(o),class:[{"border-right":(r+1)%3==0,"border-bottom":(o+1)%3==0,"border-left":0==r,"border-top":0==o,bold:n.given,invalid:!n.valid.value},"sudoku-board-cell"],disabled:n.given,ref:function(n){e.inputs[o][r]=n},onClick:function(n){return e.handleClick({row:o,col:r})},style:{"background-color":e.focused["".concat(r,"-").concat(o)]}},null,46,["value","onKeydown","name","id","disabled","onClick"])],12,["id"])})),128))])})),128))])])])])}o("caad");var a,s=o("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var i=null!==(a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==a?a:"ws://tealog.xyz:8010";console.log(i);var d=new WebSocket(i),v={setup:function(){Object(t["l"])((function(){d.close(1e3,"logging off")})),d.onopen=function(){console.log("connection established")};var e=Object(s["h"])({}),n=Object(s["h"])({}),o=Object(s["h"])({}),u=Object(s["h"])({});d.onmessage=function(t){var c=t.data,l=JSON.parse(c),a=l.color,s=l.sudokuObj,i=l.id,d=s||{},v=d.puzzle,p=d.users;v&&(n.value.puzzle=v,n.value.users=p,u.value={},r()),a&&(e.value=a),i&&(o.value=i)};var r=function(){for(var e=0;e<n.value.users.length;e++){var o=n.value.users[e];u.value["".concat(o.focus.col,"-").concat(o.focus.row)]=o.color}},c=Object(s["h"])([]);c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),Object(t["m"])((function(){c.value=[],c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([]),c.value.push([])}));var l=function(){var e=0;while(e<n.value.users.length){if(n.value.users[e].id==o.value)return e;e++}},a=function e(o,u,t,r,a,s){try{if(c.value[o+t][u+r].disabled){if("row"==a?r>0?r++:r<0&&r--:"col"==a&&(t>0?t++:t<0&&t--),s++,s>4)return 0;e(o,u,t,r,a,s)}else c.value[o+t][u+r].focus(),n.value.users[l()].focus={row:o+t,col:u+r},d.send(JSON.stringify({sudokuObj:n.value})),console.log("sending")}catch(i){}},i=function(e){var o=e.cell,u=e.row,t=e.col,r=e.key,c=e.$event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"];if(!o.given&&l.includes(r))c.preventDefault(),n.value.puzzle[u][t].number=r,d.send(JSON.stringify({sudokuObj:n.value})),console.log("sending");else if("Backspace"==r)c.preventDefault(),n.value.puzzle[u][t].number="",d.send(JSON.stringify({sudokuObj:n.value})),console.log("sending");else if(s.includes(r))switch(r){case"ArrowRight":a(u,t,0,1,"row");break;case"ArrowLeft":a(u,t,0,-1,"row");break;case"ArrowDown":a(u,t,1,0,"col");break;case"ArrowUp":a(u,t,-1,0,"col");break}else"Tab"!=r&&c.preventDefault()},v=function(e){var o=e.row,u=e.col;n.value.users[l()].focus={row:o,col:u},d.send(JSON.stringify({sudokuObj:n.value})),console.log("sending")};return{sudokuObj:n,handleInput:i,handleClick:v,inputs:c,color:e,id:o,checkFocus:r,focused:u}}};o("9cdc");v.render=l;var p=v;Object(u["a"])(p).mount("#app")},"942d":function(e,n,o){},"9cdc":function(e,n,o){"use strict";o("942d")}});
//# sourceMappingURL=app.9a88f7de.js.map