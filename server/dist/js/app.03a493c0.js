(function(e){function t(t){for(var n,u,a=t[0],l=t[1],i=t[2],d=0,f=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,a=1;a<c.length;a++){var l=c[a];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=u(u.s=c[0]))}return e}var n={},o={app:0},r=[];function u(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.m=e,u.c=n,u.d=function(e,t,c){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(c,n,function(t){return e[t]}.bind(null,n));return c},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("830f"),o=(c("99af"),c("5c40")),r={id:"app"},u={class:"pane"},a=Object(o["i"])("svg",{class:"inputReplacement"},[Object(o["i"])("text",{x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},[Object(o["i"])("tspan",{style:{"font-size":"12px"},y:"5",x:"5"},"1")])],-1);function l(e,t){return Object(o["p"])(),Object(o["f"])("div",r,[Object(o["i"])("div",u,[Object(o["i"])("table",null,[Object(o["i"])("tbody",null,[(Object(o["p"])(),Object(o["f"])(o["b"],null,Object(o["q"])(9,(function(t){return Object(o["i"])("tr",{key:t},[(Object(o["p"])(),Object(o["f"])(o["b"],null,Object(o["q"])(9,(function(c){return Object(o["i"])("td",{key:"r".concat(t,"c").concat(c,"-td"),id:"r".concat(t,"c").concat(c,"-td-id"),class:[{"border-right":c%3==0,"border-bottom":t%3==0,"border-left":0==c,"border-top":0==t,invalid:!e.sudokuObj.puzzle["r".concat(t,"c").concat(c)].valid.value}],onClick:function(n){return e.handleClick({row:t,col:c})},style:{"background-color":e.checkFocus["r".concat(t,"c").concat(c)]}},[a],14,["id","onClick"])})),64))])})),64))])])])])}c("caad");var i,s=c("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var d=null!==(i=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==i?i:"ws://tealog.xyz:8010";console.log(d);var f=new WebSocket(d),p={setup:function(){Object(o["m"])((function(){f.close(1e3,"logging off")})),f.onopen=function(){console.log("connection established")};var e=Object(s["h"])({}),t=Object(s["h"])({}),c=Object(s["h"])({}),n=Object(s["h"])({});f.onmessage=function(o){var r=o.data,u=JSON.parse(r),a=u.color,l=u.sudokuObj,i=u.id,s=u.users,d=u.focusUpdate,f=u.numberUpdate,p=l||{},v=p.puzzle,b=p.sentRows,O=p.sentCols,j=p.sentSquares;if(l&&(t.value.puzzle=v,t.value.rows=b,t.value.cols=O,t.value.squares=j),s&&(c.value=s),a&&(e.value=a,document.documentElement.style.setProperty("--color","".concat(a))),i&&(n.value=i),d){var w=d.id,y=d.focus;c.value[w].focus=y}if(f){var h=f.address,g=f.number;t.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=g}};var r=Object(o["e"])((function(){var e={};for(var t in c.value)if(Object.prototype.hasOwnProperty.call(c.value,t)){var n=c.value[t];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),u=Object(s["h"])({});Object(o["n"])((function(){u.value={}}));var a=function(e,t,o,r){e+=o,t+=r,e>9||t>9||e<1||t<1||(u.value["r".concat(e,"c").concat(t)].focus(),c.value[n.value].focus={row:e,col:t},f.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:t}}})))},l=function(e){var o=e.key,r=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],i=c.value[n.value].focus,s=i.row,d=i.col;if(null==s||null==d)return s=1,d=1,c.value[n.value].focus={row:s,col:d},void f.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:s,col:d}}}));if(!t.value.puzzle["r".concat(s,"c").concat(d)].given&&u.includes(o)){r.preventDefault(),t.value.puzzle["r".concat(s,"c").concat(d)].number=o;var p=t.value.puzzle["r".concat(s,"c").concat(d)].address;f.send(JSON.stringify({numberUpdate:{address:p,number:o}}))}else if("Backspace"==o){r.preventDefault(),t.value.puzzle["r".concat(s,"c").concat(d)].number="";var v=t.value.puzzle["r".concat(s,"c").concat(d)].address;f.send(JSON.stringify({numberUpdate:{address:v,number:""}}))}else if(l.includes(o))switch(o){case"ArrowRight":a(s,d,0,1,"row");break;case"ArrowLeft":a(s,d,0,-1,"row");break;case"ArrowDown":a(s,d,1,0,"col");break;case"ArrowUp":a(s,d,-1,0,"col");break}};document.body.addEventListener("keydown",(function(){l({key:event.key,event:event})}));var i=function(e){var t=e.row,o=e.col;c.value[n.value].focus={row:t,col:o},f.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:t,col:o}}}))};return{sudokuObj:t,handleInput:l,handleClick:i,inputs:u,color:e,id:n,checkFocus:r,users:c}}};c("9cdc");p.render=l;var v=p;Object(n["a"])(v).mount("#app")},"942d":function(e,t,c){},"9cdc":function(e,t,c){"use strict";c("942d")}});
//# sourceMappingURL=app.03a493c0.js.map