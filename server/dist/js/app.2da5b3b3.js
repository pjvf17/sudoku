(function(e){function c(c){for(var n,r,u=c[0],l=c[1],s=c[2],p=0,d=[];p<u.length;p++)r=u[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(a.splice(c--,1),e=r(r.s=t[0]))}return e}var n={},o={app:0},a=[];function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,c,t){r.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,c){if(1&c&&(e=r(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)r.d(t,n,function(c){return e[c]}.bind(null,n));return t},r.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(c,"a",c),c},r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("5c40")),a={id:"app"},r={class:"pane"},u={class:"inputReplacement"},l={key:0,x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},s={style:{"font-size":"14px"},y:"13",x:"8"},i={style:{"font-size":"14px"},y:"13",x:"30"},p={style:{"font-size":"14px"},y:"13",x:"52"},d={style:{"font-size":"14px"},y:"35",x:"8"},b={style:{"font-size":"14px"},y:"35",x:"30"},f={style:{"font-size":"14px"},y:"35",x:"52"},v={style:{"font-size":"14px"},y:"57",x:"8"},j={style:{"font-size":"14px"},y:"57",x:"30"},O={style:{"font-size":"14px"},y:"57",x:"52"},z={style:{color:"white"}};function k(e,c){return Object(o["q"])(),Object(o["f"])("div",a,[Object(o["j"])("div",r,[Object(o["j"])("table",null,[Object(o["j"])("tbody",null,[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(c){return Object(o["j"])("tr",{key:c},[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(t){return Object(o["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.checkFocus["r".concat(c,"c").concat(t)]}},[(Object(o["q"])(),Object(o["f"])("svg",u,[Object(o["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(o["q"])(),Object(o["f"])("text",l,[Object(o["j"])("tspan",s,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[0]?1:""),1),Object(o["j"])("tspan",i,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[1]?2:""),1),Object(o["j"])("tspan",p,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[2]?3:""),1),Object(o["j"])("tspan",d,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[3]?4:""),1),Object(o["j"])("tspan",b,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[4]?5:""),1),Object(o["j"])("tspan",f,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[5]?6:""),1),Object(o["j"])("tspan",v,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[6]?7:""),1),Object(o["j"])("tspan",j,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[7]?8:""),1),Object(o["j"])("tspan",O,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[8]?9:""),1)])):Object(o["g"])("",!0)]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["j"])("span",z,Object(o["u"])(e.notating?"Notation Mode On":"Notiation Mode Off"),1)])])}t("caad");var y,g=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var w=null!==(y=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==y?y:"ws://tealog.xyz:8010";console.log(w);var h=new WebSocket(w),x={setup:function(){Object(o["n"])((function(){h.close(1e3,"logging off")})),h.onopen=function(){console.log("connection established")};var e=Object(g["h"])({}),c=Object(g["h"])({}),t=Object(g["h"])({}),n=Object(g["h"])({}),a=Object(g["h"])(!1);h.onmessage=function(o){var a=o.data,r=JSON.parse(a),u=r.color,l=r.sudokuObj,s=r.id,i=r.users,p=r.focusUpdate,d=r.numberUpdate,b=r.pencilMarkUpdate,f=l||{},v=f.puzzle,j=f.sentRows,O=f.sentCols,z=f.sentSquares;if(l&&(c.value.puzzle=v,c.value.rows=j,c.value.cols=O,c.value.squares=z,console.log(v)),i&&(t.value=i),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),p){var k=p.id,y=p.focus;t.value[k].focus=y}if(d){var g=d.address,w=d.number;c.value.puzzle["r".concat(g.r,"c").concat(g.c)].number=w}if(b){var h=b.address,x=b.pencilMark;"delete"!=x?c.value.puzzle["r".concat(h.r,"c").concat(h.c)].pencilMarks[x-1]=!c.value.puzzle["r".concat(h.r,"c").concat(h.c)].pencilMarks[x-1]:c.value.puzzle["r".concat(h.r,"c").concat(h.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var r=Object(o["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),u=Object(g["h"])({});Object(o["o"])((function(){u.value={}}));var l=function(e,c,o,a){e+=o,c+=a,e>9||c>9||e<1||c<1||(u.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},h.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},s=function(e){var o=e.key,r=e.event,u=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],i=t.value[n.value].focus,p=i.row,d=i.col;if(null==p||null==d)return p=1,d=1,t.value[n.value].focus={row:p,col:d},void h.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:p,col:d}}}));if(!c.value.puzzle["r".concat(p,"c").concat(d)].given&&u.includes(o))if(r.preventDefault(),a.value){console.log(p),console.log(d),console.log(c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks),c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks[o-1]=!c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks[o-1];var b=c.value.puzzle["r".concat(p,"c").concat(d)].address;h.send(JSON.stringify({pencilMarkUpdate:{address:b,pencilMark:o}}))}else{c.value.puzzle["r".concat(p,"c").concat(d)].number=o;var f=c.value.puzzle["r".concat(p,"c").concat(d)].address;h.send(JSON.stringify({numberUpdate:{address:f,number:o}}))}else if("Backspace"==o)if(r.preventDefault(),a.value){c.value.puzzle["r".concat(p,"c").concat(d)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var v=c.value.puzzle["r".concat(p,"c").concat(d)].address;h.send(JSON.stringify({pencilMarkUpdate:{address:v,pencilMark:"delete"}}))}else{c.value.puzzle["r".concat(p,"c").concat(d)].number="";var j=c.value.puzzle["r".concat(p,"c").concat(d)].address;h.send(JSON.stringify({numberUpdate:{address:j,number:""}}))}else if(s.includes(o))switch(o){case"ArrowRight":l(p,d,0,1,"row");break;case"ArrowLeft":l(p,d,0,-1,"row");break;case"ArrowDown":l(p,d,1,0,"col");break;case"ArrowUp":l(p,d,-1,0,"col");break}else"Shift"==o&&(a.value=!a.value)};document.body.addEventListener("keydown",(function(){s({key:event.key,event:event})}));var i=function(e){var c=e.row,o=e.col;t.value[n.value].focus={row:c,col:o},h.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:o}}}))};return{sudokuObj:c,handleInput:s,handleClick:i,inputs:u,color:e,id:n,checkFocus:r,users:t,notating:a}}};t("9cdc");x.render=k;var m=x;Object(n["a"])(m).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.2da5b3b3.js.map