(function(e){function c(c){for(var t,a,l=c[0],u=c[1],s=c[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);i&&i(c);while(f.length)f.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,c=0;c<r.length;c++){for(var o=r[c],t=!0,l=1;l<o.length;l++){var u=o[l];0!==n[u]&&(t=!1)}t&&(r.splice(c--,1),e=a(a.s=o[0]))}return e}var t={},n={app:0},r=[];function a(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,c,o){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var t in e)a.d(o,t,function(c){return e[c]}.bind(null,t));return o},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=c,l=l.slice();for(var s=0;s<l.length;s++)c(l[s]);var i=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,c,o){e.exports=o("56d7")},"56d7":function(e,c,o){"use strict";o.r(c);o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("830f"),n=(o("99af"),o("5c40")),r={id:"app"},a={class:"pane"},l=Object(n["i"])("svg",{class:"inputReplacement"},[Object(n["i"])("text",{x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},[Object(n["i"])("tspan",{style:{"font-size":"14px"},y:"10",x:"5"},"1")])],-1),u={style:{color:"white"}};function s(e,c){return Object(n["p"])(),Object(n["f"])("div",r,[Object(n["i"])("div",a,[Object(n["i"])("table",null,[Object(n["i"])("tbody",null,[(Object(n["p"])(),Object(n["f"])(n["b"],null,Object(n["q"])(9,(function(c){return Object(n["i"])("tr",{key:c},[(Object(n["p"])(),Object(n["f"])(n["b"],null,Object(n["q"])(9,(function(o){return Object(n["i"])("td",{key:"r".concat(c,"c").concat(o,"-td"),id:"r".concat(c,"c").concat(o,"-td-id"),class:[{"border-right":o%3==0,"border-bottom":c%3==0,"border-left":0==o,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(o)].valid.value}],onClick:function(t){return e.handleClick({row:c,col:o})},style:{"background-color":e.checkFocus["r".concat(c,"c").concat(o)]}},[l],14,["id","onClick"])})),64))])})),64))])]),Object(n["i"])("span",u,Object(n["t"])(e.notating?"Notation Mode On":"Notiation Mode Off"),1)])])}o("caad");var i,d=o("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var f=null!==(i=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==i?i:"ws://tealog.xyz:8010";console.log(f);var p=new WebSocket(f),v={setup:function(){Object(n["m"])((function(){p.close(1e3,"logging off")})),p.onopen=function(){console.log("connection established")};var e=Object(d["h"])({}),c=Object(d["h"])({}),o=Object(d["h"])({}),t=Object(d["h"])({}),r=Object(d["h"])(!1);p.onmessage=function(n){var r=n.data,a=JSON.parse(r),l=a.color,u=a.sudokuObj,s=a.id,i=a.users,d=a.focusUpdate,f=a.numberUpdate,p=u||{},v=p.puzzle,b=p.sentRows,O=p.sentCols,j=p.sentSquares;if(u&&(c.value.puzzle=v,c.value.rows=b,c.value.cols=O,c.value.squares=j,console.log(v)),i&&(o.value=i),l&&(e.value=l,document.documentElement.style.setProperty("--color","".concat(l))),s&&(t.value=s),d){var w=d.id,y=d.focus;o.value[w].focus=y}if(f){var g=f.address,h=f.number;c.value.puzzle["r".concat(g.r,"c").concat(g.c)].number=h}};var a=Object(n["e"])((function(){var e={};for(var c in o.value)if(Object.prototype.hasOwnProperty.call(o.value,c)){var t=o.value[c];e["r".concat(t.focus.row,"c").concat(t.focus.col)]=t.color}return e})),l=Object(d["h"])({});Object(n["n"])((function(){l.value={}}));var u=function(e,c,n,r){e+=n,c+=r,e>9||c>9||e<1||c<1||(l.value["r".concat(e,"c").concat(c)].focus(),o.value[t.value].focus={row:e,col:c},p.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:e,col:c}}})))},s=function(e){var n=e.key,a=e.event,l=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],i=o.value[t.value].focus,d=i.row,f=i.col;if(console.log(d),console.log(f),null==d||null==f)return d=1,f=1,o.value[t.value].focus={row:d,col:f},void p.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:d,col:f}}}));if(!c.value.puzzle["r".concat(d,"c").concat(f)].given&&l.includes(n))if(a.preventDefault(),r.value)console.log(d),console.log(f),console.log(c.value.puzzle["r".concat(d,"c").concat(f)].pencilMarks),c.value.puzzle["r".concat(d,"c").concat(f)].pencilMarks[n]=!c.value.puzzle["r".concat(d,"c").concat(f)].pencilMarks[n];else{c.value.puzzle["r".concat(d,"c").concat(f)].number=n;var v=c.value.puzzle["r".concat(d,"c").concat(f)].address;p.send(JSON.stringify({numberUpdate:{address:v,number:n}}))}else if("Backspace"==n)if(a.preventDefault(),r.value)c.value.puzzle["r".concat(d,"c").concat(f)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];else{c.value.puzzle["r".concat(d,"c").concat(f)].number="";var b=c.value.puzzle["r".concat(d,"c").concat(f)].address;p.send(JSON.stringify({numberUpdate:{address:b,number:""}}))}else if(s.includes(n))switch(n){case"ArrowRight":u(d,f,0,1,"row");break;case"ArrowLeft":u(d,f,0,-1,"row");break;case"ArrowDown":u(d,f,1,0,"col");break;case"ArrowUp":u(d,f,-1,0,"col");break}else"Shift"==n&&(r.value=!r.value)};document.body.addEventListener("keydown",(function(){s({key:event.key,event:event})}));var i=function(e){var c=e.row,n=e.col;o.value[t.value].focus={row:c,col:n},p.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:c,col:n}}}))};return{sudokuObj:c,handleInput:s,handleClick:i,inputs:l,color:e,id:t,checkFocus:a,users:o,notating:r}}};o("9cdc");v.render=s;var b=v;Object(t["a"])(b).mount("#app")},"942d":function(e,c,o){},"9cdc":function(e,c,o){"use strict";o("942d")}});
//# sourceMappingURL=app.5a4b391b.js.map