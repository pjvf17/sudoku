(function(e){function c(c){for(var n,r,u=c[0],l=c[1],s=c[2],d=0,p=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(a.splice(c--,1),e=r(r.s=t[0]))}return e}var n={},o={app:0},a=[];function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,c,t){r.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,c){if(1&c&&(e=r(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)r.d(t,n,function(c){return e[c]}.bind(null,n));return t},r.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(c,"a",c),c},r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("5c40")),a={id:"app"},r={class:"pane"},u={class:"inputReplacement"},l={key:0,x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},s={style:{"font-size":"14px"},y:"13",x:"8"},i={style:{"font-size":"14px"},y:"13",x:"30"},d={style:{"font-size":"14px"},y:"13",x:"52"},p={style:{"font-size":"14px"},y:"35",x:"8"},f={style:{"font-size":"14px"},y:"35",x:"30"},v={style:{"font-size":"14px"},y:"35",x:"52"},b={style:{"font-size":"14px"},y:"57",x:"8"},j={style:{"font-size":"14px"},y:"57",x:"30"},O={style:{"font-size":"14px"},y:"57",x:"52"},z={style:{color:"white"}};function k(e,c){return Object(o["q"])(),Object(o["f"])("div",a,[Object(o["j"])("div",r,[Object(o["j"])("table",null,[Object(o["j"])("tbody",null,[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(c){return Object(o["j"])("tr",{key:c},[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(t){return Object(o["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.checkFocus["r".concat(c,"c").concat(t)]}},[(Object(o["q"])(),Object(o["f"])("svg",u,[Object(o["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(o["q"])(),Object(o["f"])("text",l,[Object(o["j"])("tspan",s,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[0]?1:""),1),Object(o["j"])("tspan",i,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[1]?2:""),1),Object(o["j"])("tspan",d,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[2]?3:""),1),Object(o["j"])("tspan",p,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[3]?4:""),1),Object(o["j"])("tspan",f,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[4]?5:""),1),Object(o["j"])("tspan",v,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[5]?6:""),1),Object(o["j"])("tspan",b,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[6]?7:""),1),Object(o["j"])("tspan",j,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[7]?8:""),1),Object(o["j"])("tspan",O,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[8]?9:""),1)])):Object(o["g"])("",!0)]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["j"])("span",z,Object(o["u"])(e.notating?"Notation Mode On":"Notiation Mode Off"),1),Object(o["j"])("button",{onClick:c[1]||(c[1]=function(c){return e.startNewGame()})},"Start New Game")])])}t("caad");var y,g=t("2909"),w=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var h=null!==(y=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==y?y:"ws://tealog.xyz:8010";console.log(h);var m=new WebSocket(h),x={setup:function(){Object(o["n"])((function(){m.close(1e3,"logging off")})),m.onopen=function(){console.log("connection established")};var e=Object(w["h"])({}),c=Object(w["h"])({}),t=Object(w["h"])({}),n=Object(w["h"])({}),a=Object(w["h"])(!1);m.onmessage=function(o){var a=o.data,r=JSON.parse(a),u=r.color,l=r.sudokuObj,s=r.id,p=r.users,f=r.focusUpdate,v=r.numberUpdate,b=r.pencilMarkUpdate,j=l||{},O=j.puzzle,z=j.sentRows,k=j.sentCols,y=j.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=z,c.value.cols=k,c.value.squares=y,console.log(O),console.log(i(c.value.puzzle["r1c1"]))),p&&(t.value=p),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),f){var g=f.id,w=f.focus;t.value[g].focus=w}if(v){var h=v.address,m=v.number;c.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=m,c.value.puzzle["r".concat(h.r,"c").concat(h.c)]=d(c.value.puzzle["r".concat(h.r,"c").concat(h.c)])}if(b){var x=b.address,M=b.pencilMark;"delete"!=M?c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]=!c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]:c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var r=Object(o["e"])((function(){for(var e={},t=1;t<=9;t++){e["r".concat(t)]=[];for(var n=1;n<=9;n++)e["r".concat(t)].push(c.value.puzzle["r".concat(t,"c").concat(n)])}return e})),u=Object(o["e"])((function(){for(var e={},t=1;t<=9;t++){e["c".concat(t)]=[];for(var n=1;n<=9;n++)e["c".concat(t)].push(c.value.puzzle["r".concat(n,"c").concat(t)])}return e})),l=function(e){var c,t=[1,2,3],n=[4,5,6],o=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=o),"s".concat(c[Math.floor((e.address.c-1)/3)])},s=Object(o["e"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},t=1;t<=9;t++)for(var n=1;n<=9;n++)e[l(c.value.puzzle["r".concat(t,"c").concat(n)])].push(c.value.puzzle["r".concat(t,"c").concat(n)]);return e})),i=function(e){console.log(e);var c,t,n=[];return c=r.value["r".concat(e.address.r)],t=u.value["c".concat(e.address.c)],n=s.value[l(e)],{row:c,col:t,square:n}},d=function(e){if(e.given)return e;for(var c=i(e),t=c.row,n=c.col,o=c.square,a=[].concat(Object(g["a"])(t),Object(g["a"])(n),Object(g["a"])(o)),r=!0,u=0;u<a.length;u++)if(a[u].address!=e.address&&a[u].number==e.number&&(r=!1,e.valid.value=!1),!r)break;return r&&(e.valid.value=!0),e},p=Object(o["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),f=Object(w["h"])({});Object(o["o"])((function(){f.value={}}));var v=function(e,c,o,a){e+=o,c+=a,e>9||c>9||e<1||c<1||(f.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},m.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},b=function(e){var o=e.key,r=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,i=s.row,p=s.col;if(null==i||null==p)return i=1,p=1,t.value[n.value].focus={row:i,col:p},void m.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:i,col:p}}}));if(!c.value.puzzle["r".concat(i,"c").concat(p)].given&&u.includes(o))if(r.preventDefault(),a.value){console.log(i),console.log(p),console.log(c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks),c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks[o-1]=!c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks[o-1];var f=c.value.puzzle["r".concat(i,"c").concat(p)].address;m.send(JSON.stringify({pencilMarkUpdate:{address:f,pencilMark:o}}))}else{c.value.puzzle["r".concat(i,"c").concat(p)].number=o,c.value.puzzle["r".concat(i,"c").concat(p)]=d(c.value.puzzle["r".concat(i,"c").concat(p)]),console.log(Object(w["l"])(c.value.puzzle["r".concat(i,"c").concat(p)]));var b=c.value.puzzle["r".concat(i,"c").concat(p)].address;m.send(JSON.stringify({numberUpdate:{address:b,number:o}}))}else if("Backspace"==o)if(r.preventDefault(),a.value){c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var j=c.value.puzzle["r".concat(i,"c").concat(p)].address;m.send(JSON.stringify({pencilMarkUpdate:{address:j,pencilMark:"delete"}}))}else{c.value.puzzle["r".concat(i,"c").concat(p)].number="",c.value.puzzle["r".concat(i,"c").concat(p)]=d(c.value.puzzle["r".concat(i,"c").concat(p)]);var O=c.value.puzzle["r".concat(i,"c").concat(p)].address;m.send(JSON.stringify({numberUpdate:{address:O,number:""}}))}else if(l.includes(o))switch(o){case"ArrowRight":v(i,p,0,1,"row");break;case"ArrowLeft":v(i,p,0,-1,"row");break;case"ArrowDown":v(i,p,1,0,"col");break;case"ArrowUp":v(i,p,-1,0,"col");break}else"Shift"==o&&(a.value=!a.value)};document.body.addEventListener("keydown",(function(){b({key:event.key,event:event})}));var j=function(e){var c=e.row,o=e.col;t.value[n.value].focus={row:c,col:o},m.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:o}}}))},O=function(){console.log("starting new game"),m.send(JSON.stringify({startNewGame:!0}))};return{sudokuObj:c,startNewGame:O,handleInput:b,handleClick:j,inputs:f,color:e,id:n,checkFocus:p,users:t,notating:a}}};t("9cdc");x.render=k;var M=x;Object(n["a"])(M).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.67a7ee26.js.map