(function(e){function c(c){for(var n,a,u=c[0],l=c[1],s=c[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,c=0;c<r.length;c++){for(var t=r[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(r.splice(c--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},r=[];function a(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,c,t){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)a.d(t,n,function(c){return e[c]}.bind(null,n));return t},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("5c40")),r={id:"app"},a={class:"pane"},u={class:"inputReplacement"},l={key:1,x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},s={style:{"font-size":"14px"},y:"10",x:"5"},i={style:{"font-size":"14px"},y:"10",x:"5"},p={style:{"font-size":"14px"},y:"10",x:"5"},d={style:{"font-size":"14px"},y:"10",x:"5"},b={style:{"font-size":"14px"},y:"10",x:"5"},f={style:{"font-size":"14px"},y:"10",x:"5"},v={style:{"font-size":"14px"},y:"10",x:"5"},O={style:{"font-size":"14px"},y:"10",x:"5"},j={style:{"font-size":"14px"},y:"10",x:"5"},z={style:{color:"white"}};function y(e,c){return Object(o["p"])(),Object(o["f"])("div",r,[Object(o["i"])("div",a,[Object(o["i"])("table",null,[Object(o["i"])("tbody",null,[(Object(o["p"])(),Object(o["f"])(o["b"],null,Object(o["q"])(9,(function(c){return Object(o["i"])("tr",{key:c},[(Object(o["p"])(),Object(o["f"])(o["b"],null,Object(o["q"])(9,(function(t){return Object(o["i"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.checkFocus["r".concat(c,"c").concat(t)]}},[(Object(o["p"])(),Object(o["f"])("svg",u,[""!=e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(o["p"])(),Object(o["f"])("text",{key:0,class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3)):(Object(o["p"])(),Object(o["f"])("text",l,[Object(o["i"])("tspan",s,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[0]?1:""),1),Object(o["i"])("tspan",i,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[1]?2:""),1),Object(o["i"])("tspan",p,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[2]?3:""),1),Object(o["i"])("tspan",d,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[3]?4:""),1),Object(o["i"])("tspan",b,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[4]?5:""),1),Object(o["i"])("tspan",f,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[5]?6:""),1),Object(o["i"])("tspan",v,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[6]?7:""),1),Object(o["i"])("tspan",O,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[7]?8:""),1),Object(o["i"])("tspan",j,Object(o["t"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[8]?9:""),1)]))]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["i"])("span",z,Object(o["t"])(e.notating?"Notation Mode On":"Notiation Mode Off"),1)])])}t("caad");var k,w=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var g=null!==(k=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==k?k:"ws://tealog.xyz:8010";console.log(g);var h=new WebSocket(g),m={setup:function(){Object(o["m"])((function(){h.close(1e3,"logging off")})),h.onopen=function(){console.log("connection established")};var e=Object(w["h"])({}),c=Object(w["h"])({}),t=Object(w["h"])({}),n=Object(w["h"])({}),r=Object(w["h"])(!1);h.onmessage=function(o){var r=o.data,a=JSON.parse(r),u=a.color,l=a.sudokuObj,s=a.id,i=a.users,p=a.focusUpdate,d=a.numberUpdate,b=l||{},f=b.puzzle,v=b.sentRows,O=b.sentCols,j=b.sentSquares;if(l&&(c.value.puzzle=f,c.value.rows=v,c.value.cols=O,c.value.squares=j,console.log(f)),i&&(t.value=i),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),p){var z=p.id,y=p.focus;t.value[z].focus=y}if(d){var k=d.address,w=d.number;c.value.puzzle["r".concat(k.r,"c").concat(k.c)].number=w}};var a=Object(o["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),u=Object(w["h"])({});Object(o["n"])((function(){u.value={}}));var l=function(e,c,o,r){e+=o,c+=r,e>9||c>9||e<1||c<1||(u.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},h.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},s=function(e){var o=e.key,a=e.event,u=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],i=t.value[n.value].focus,p=i.row,d=i.col;if(null==p||null==d)return p=1,d=1,t.value[n.value].focus={row:p,col:d},void h.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:p,col:d}}}));if(!c.value.puzzle["r".concat(p,"c").concat(d)].given&&u.includes(o))if(a.preventDefault(),r.value)console.log(p),console.log(d),console.log(c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks),c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks[o-1]=!c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks[o-1];else{c.value.puzzle["r".concat(p,"c").concat(d)].number=o;var b=c.value.puzzle["r".concat(p,"c").concat(d)].address;h.send(JSON.stringify({numberUpdate:{address:b,number:o}}))}else if("Backspace"==o)if(a.preventDefault(),r.value)c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];else{c.value.puzzle["r".concat(p,"c").concat(d)].number="";var f=c.value.puzzle["r".concat(p,"c").concat(d)].address;h.send(JSON.stringify({numberUpdate:{address:f,number:""}}))}else if(s.includes(o))switch(o){case"ArrowRight":l(p,d,0,1,"row");break;case"ArrowLeft":l(p,d,0,-1,"row");break;case"ArrowDown":l(p,d,1,0,"col");break;case"ArrowUp":l(p,d,-1,0,"col");break}else"Shift"==o&&(r.value=!r.value)};document.body.addEventListener("keydown",(function(){s({key:event.key,event:event})}));var i=function(e){var c=e.row,o=e.col;t.value[n.value].focus={row:c,col:o},h.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:o}}}))};return{sudokuObj:c,handleInput:s,handleClick:i,inputs:u,color:e,id:n,checkFocus:a,users:t,notating:r}}};t("9cdc");m.render=y;var x=m;Object(n["a"])(x).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.f7d747f6.js.map