(function(e){function c(c){for(var n,r,u=c[0],l=c[1],s=c[2],d=0,p=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(a.splice(c--,1),e=r(r.s=t[0]))}return e}var n={},o={app:0},a=[];function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,c,t){r.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,c){if(1&c&&(e=r(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)r.d(t,n,function(c){return e[c]}.bind(null,n));return t},r.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(c,"a",c),c},r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("ade3")),a=t("5c40"),r={id:"app"},u={class:"pane"},l={class:"inputReplacement"},s={key:0,x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},i={style:{"font-size":"14px"},y:"13",x:"8"},d={style:{"font-size":"14px"},y:"13",x:"30"},p={style:{"font-size":"14px"},y:"13",x:"52"},f={style:{"font-size":"14px"},y:"35",x:"8"},b={style:{"font-size":"14px"},y:"35",x:"30"},v={style:{"font-size":"14px"},y:"35",x:"52"},j={style:{"font-size":"14px"},y:"57",x:"8"},O={style:{"font-size":"14px"},y:"57",x:"30"},z={style:{"font-size":"14px"},y:"57",x:"52"},k={class:"notation-text",style:{color:"white"}};function y(e,c){return Object(a["q"])(),Object(a["f"])("div",r,[Object(a["j"])("div",u,[Object(a["j"])("table",null,[Object(a["j"])("tbody",null,[(Object(a["q"])(),Object(a["f"])(a["b"],null,Object(a["r"])(9,(function(c){return Object(a["j"])("tr",{key:c},[(Object(a["q"])(),Object(a["f"])(a["b"],null,Object(a["r"])(9,(function(t){return Object(a["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value}],onClick:function(n){return e.handleClick({row:c,col:t})},style:Object(o["a"])({"background-color":e.checkFocus["r".concat(c,"c").concat(t)]},"background-color",e.users[e.id].focus.row==c||e.users[e.id].focus.col==t?e.users[e.id].color:"000000")},[(Object(a["q"])(),Object(a["f"])("svg",l,[Object(a["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(a["q"])(),Object(a["f"])("text",s,[Object(a["j"])("tspan",i,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[0]?1:""),1),Object(a["j"])("tspan",d,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[1]?2:""),1),Object(a["j"])("tspan",p,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[2]?3:""),1),Object(a["j"])("tspan",f,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[3]?4:""),1),Object(a["j"])("tspan",b,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[4]?5:""),1),Object(a["j"])("tspan",v,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[5]?6:""),1),Object(a["j"])("tspan",j,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[6]?7:""),1),Object(a["j"])("tspan",O,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[7]?8:""),1),Object(a["j"])("tspan",z,Object(a["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[8]?9:""),1)])):Object(a["g"])("",!0)]))],14,["id","onClick"])})),64))])})),64))])]),Object(a["j"])("span",k,Object(a["u"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(a["j"])("button",{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},"Start New Game"),Object(a["j"])("button",{onClick:c[2]||(c[2]=function(c){return e.firstPassCandidateCalculator(e.sudokuObj.puzzle)}),class:"button"},"Fill In Candiadtes? ")])])}t("4de4"),t("4160"),t("a630"),t("caad"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b");var g,w=t("2909"),h=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var m=null!==(g=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==g?g:"ws://tealog.xyz:8010";console.log(m);var x=new WebSocket(m),M={setup:function(){Object(a["n"])((function(){x.close(1e3,"logging off")})),x.onopen=function(){console.log("connection established")};var e=Object(h["h"])({}),c=Object(h["h"])({}),t=Object(h["h"])({}),n=Object(h["h"])({}),o=Object(h["h"])(!1);x.onmessage=function(o){var a=o.data,r=JSON.parse(a),u=r.color,l=r.sudokuObj,s=r.id,p=r.users,f=r.focusUpdate,b=r.numberUpdate,v=r.pencilMarkUpdate,j=l||{},O=j.puzzle,z=j.sentRows,k=j.sentCols,y=j.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=z,c.value.cols=k,c.value.squares=y,console.log(O),console.log(l),console.log(i(c.value.puzzle["r1c1"]))),p&&(t.value=p),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),f){var g=f.id,w=f.focus;t.value[g].focus=w}if(b){var h=b.address,m=b.number;c.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=m,c.value.puzzle["r".concat(h.r,"c").concat(h.c)]=d(c.value.puzzle["r".concat(h.r,"c").concat(h.c)])}if(v){var x=v.address,M=v.pencilMark;"delete"!=M?c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]=!c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]:c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var r=Object(a["e"])((function(){for(var e={},t=1;t<=9;t++){e["r".concat(t)]=[];for(var n=1;n<=9;n++)e["r".concat(t)].push(c.value.puzzle["r".concat(t,"c").concat(n)])}return e})),u=Object(a["e"])((function(){for(var e={},t=1;t<=9;t++){e["c".concat(t)]=[];for(var n=1;n<=9;n++)e["c".concat(t)].push(c.value.puzzle["r".concat(n,"c").concat(t)])}return e})),l=function(e){var c,t=[1,2,3],n=[4,5,6],o=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=o),"s".concat(c[Math.floor((e.address.c-1)/3)])},s=Object(a["e"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},t=1;t<=9;t++)for(var n=1;n<=9;n++)e[l(c.value.puzzle["r".concat(t,"c").concat(n)])].push(c.value.puzzle["r".concat(t,"c").concat(n)]);return e})),i=function(e){console.log(e);var c,t,n=[];return c=r.value["r".concat(e.address.r)],t=u.value["c".concat(e.address.c)],n=s.value[l(e)],{row:c,col:t,square:n}},d=function(e){if(e.given)return e;for(var c=i(e),t=c.row,n=c.col,o=c.square,a=[].concat(Object(w["a"])(t),Object(w["a"])(n),Object(w["a"])(o)),r=!0,u=0;u<a.length;u++)if(a[u].address!=e.address&&a[u].number==e.number&&(r=!1,e.valid.value=!1),!r)break;return r&&(e.valid.value=!0),e},p=Object(a["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var o=t.value[c];e["r".concat(o.focus.row,"c").concat(o.focus.col)]=o.color}return console.log(t.value[n.value].focus),e})),f=Object(h["h"])({});Object(a["o"])((function(){f.value={}}));var b=function(e,c,o,a){e+=o,c+=a,e>9||c>9||e<1||c<1||(f.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},x.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},v=function(e){for(var c=r,t=u,n=s,o=0;o<3;o++){var a=void 0;switch(o){case 0:a=c;break;case 1:a=t;break;case 2:a=n;break}var l=function(e){var c=a[e],t=Object.values(a[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var r=function(e){if("."==c[e].number){var t=0==o?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var u in c)r(u)};for(var i in a)l(i)}return console.log(e),e},j=function(e){var a=e.key,r=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,i=s.row,p=s.col;if(null==i||null==p)return i=1,p=1,t.value[n.value].focus={row:i,col:p},void x.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:i,col:p}}}));if(!c.value.puzzle["r".concat(i,"c").concat(p)].given&&u.includes(a))if(r.preventDefault(),o.value){console.log(i),console.log(p),console.log(c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks),c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks[a-1]=!c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks[a-1];var f=c.value.puzzle["r".concat(i,"c").concat(p)].address;x.send(JSON.stringify({pencilMarkUpdate:{address:f,pencilMark:a}}))}else{c.value.puzzle["r".concat(i,"c").concat(p)].number=a,c.value.puzzle["r".concat(i,"c").concat(p)]=d(c.value.puzzle["r".concat(i,"c").concat(p)]),console.log(Object(h["l"])(c.value.puzzle["r".concat(i,"c").concat(p)]));var v=c.value.puzzle["r".concat(i,"c").concat(p)].address;x.send(JSON.stringify({numberUpdate:{address:v,number:a}}))}else if("Backspace"==a)if(r.preventDefault(),o.value){c.value.puzzle["r".concat(i,"c").concat(p)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var j=c.value.puzzle["r".concat(i,"c").concat(p)].address;x.send(JSON.stringify({pencilMarkUpdate:{address:j,pencilMark:"delete"}}))}else{c.value.puzzle["r".concat(i,"c").concat(p)].number="",c.value.puzzle["r".concat(i,"c").concat(p)]=d(c.value.puzzle["r".concat(i,"c").concat(p)]);var O=c.value.puzzle["r".concat(i,"c").concat(p)].address;x.send(JSON.stringify({numberUpdate:{address:O,number:""}}))}else if(l.includes(a))switch(r.preventDefault(),a){case"ArrowRight":b(i,p,0,1,"row");break;case"ArrowLeft":b(i,p,0,-1,"row");break;case"ArrowDown":b(i,p,1,0,"col");break;case"ArrowUp":b(i,p,-1,0,"col");break}else"Shift"==a&&(o.value=!o.value)};document.body.addEventListener("keydown",(function(){j({key:event.key,event:event})}));var O=function(e){var c=e.row,o=e.col;t.value[n.value].focus={row:c,col:o},x.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:o}}}))},z=function(){console.log("starting new game"),x.send(JSON.stringify({newGame:!0}))};return{sudokuObj:c,newGame:z,handleInput:j,handleClick:O,inputs:f,color:e,id:n,checkFocus:p,users:t,notating:o,firstPassCandidateCalculator:v}}};t("9cdc");M.render=y;var S=M;Object(n["a"])(S).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.d677f7b8.js.map