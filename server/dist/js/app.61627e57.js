(function(e){function c(c){for(var t,a,u=c[0],l=c[1],s=c[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);i&&i(c);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,c=0;c<r.length;c++){for(var n=r[c],t=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(t=!1)}t&&(r.splice(c--,1),e=a(a.s=n[0]))}return e}var t={},o={app:0},r=[];function a(c){if(t[c])return t[c].exports;var n=t[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,c,n){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var t in e)a.d(n,t,function(c){return e[c]}.bind(null,t));return n},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,c,n){e.exports=n("56d7")},"56d7":function(e,c,n){"use strict";n.r(c);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),o=(n("99af"),n("fb6a"),n("5c40")),r={id:"app"},a={class:"pane"},u={class:"inputReplacement"},l=Object(o["j"])("circle",{cy:"13",cx:"8",fill:"grey",r:"8"},null,-1),s={key:0,x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},i={style:{"font-size":"14px"},y:"13",x:"8"},d={style:{"font-size":"14px"},y:"13",x:"30"},f={style:{"font-size":"14px"},y:"13",x:"52"},p={style:{"font-size":"14px"},y:"35",x:"8"},b={style:{"font-size":"14px"},y:"35",x:"30"},v={style:{"font-size":"14px"},y:"35",x:"52"},j={style:{"font-size":"14px"},y:"57",x:"8"},O={style:{"font-size":"14px"},y:"57",x:"30"},z={style:{"font-size":"14px"},y:"57",x:"52"},k={class:"notation-text",style:{color:"white"}};function y(e,c){return Object(o["q"])(),Object(o["f"])("div",r,[Object(o["j"])("div",a,[Object(o["j"])("table",null,[Object(o["j"])("tbody",null,[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(c){return Object(o["j"])("tr",{key:c},[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(n){return Object(o["j"])("td",{key:"r".concat(c,"c").concat(n,"-td"),id:"r".concat(c,"c").concat(n,"-td-id"),class:[{"border-right":n%3==0,"border-bottom":c%3==0,"border-left":0==n,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].number}],onClick:function(t){return e.handleClick({row:c,col:n})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=n||e.checkFocus["r".concat(c,"c").concat(n)]?e.checkFocus["r".concat(c,"c").concat(n)]:"".concat(e.color.slice(0,7),"44")}},[(Object(o["q"])(),Object(o["f"])("svg",u,[Object(o["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(t){e.inputs["r".concat(c,"c").concat(n)]=t}},Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].number),3),l,""==e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].number?(Object(o["q"])(),Object(o["f"])("text",s,[Object(o["j"])("tspan",i,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[0]?1:""),1),Object(o["j"])("tspan",d,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[1]?2:""),1),Object(o["j"])("tspan",f,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[2]?3:""),1),Object(o["j"])("tspan",p,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[3]?4:""),1),Object(o["j"])("tspan",b,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[4]?5:""),1),Object(o["j"])("tspan",v,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[5]?6:""),1),Object(o["j"])("tspan",j,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[6]?7:""),1),Object(o["j"])("tspan",O,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[7]?8:""),1),Object(o["j"])("tspan",z,Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[8]?9:""),1)])):Object(o["g"])("",!0)]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["j"])("span",k,Object(o["u"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(o["j"])("button",{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},"Start New Game"),Object(o["j"])("button",{onClick:c[2]||(c[2]=function(c){return e.firstPassCandidateCalculator(e.sudokuObj.puzzle)}),class:"button"},"Fill In Candiadtes?")])])}n("4de4"),n("4160"),n("a630"),n("caad"),n("d81d"),n("07ac"),n("2532"),n("3ca3"),n("159b");var g,h=n("2909"),w=n("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var m=null!==(g=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==g?g:"ws://tealog.xyz:8010";console.log(m);var x=new WebSocket(m),M={setup:function(){Object(o["n"])((function(){x.close(1e3,"logging off")})),x.onopen=function(){console.log("connection established")};var e=Object(w["h"])({}),c=Object(w["h"])({}),n=Object(w["h"])({}),t=Object(w["h"])({}),r=Object(w["h"])(!1);x.onmessage=function(o){var r=o.data,a=JSON.parse(r),u=a.color,l=a.sudokuObj,s=a.id,f=a.users,p=a.focusUpdate,b=a.numberUpdate,v=a.pencilMarkUpdate,j=l||{},O=j.puzzle,z=j.sentRows,k=j.sentCols,y=j.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=z,c.value.cols=k,c.value.squares=y,console.log(O),console.log(l),console.log(i(c.value.puzzle["r1c1"]))),f&&(n.value=f),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(t.value=s),p){var g=p.id,h=p.focus;n.value[g].focus=h}if(b){var w=b.address,m=b.number;c.value.puzzle["r".concat(w.r,"c").concat(w.c)].number=m,c.value.puzzle["r".concat(w.r,"c").concat(w.c)]=d(c.value.puzzle["r".concat(w.r,"c").concat(w.c)])}if(v){var x=v.address,M=v.pencilMark;"delete"!=M?c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]=!c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]:c.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var a=Object(o["e"])((function(){for(var e={},n=1;n<=9;n++){e["r".concat(n)]=[];for(var t=1;t<=9;t++)e["r".concat(n)].push(c.value.puzzle["r".concat(n,"c").concat(t)])}return e})),u=Object(o["e"])((function(){for(var e={},n=1;n<=9;n++){e["c".concat(n)]=[];for(var t=1;t<=9;t++)e["c".concat(n)].push(c.value.puzzle["r".concat(t,"c").concat(n)])}return e})),l=function(e){var c,n=[1,2,3],t=[4,5,6],o=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=n),e.address.r>=4&&e.address.r<=6&&(c=t),e.address.r>=7&&e.address.r<=9&&(c=o),"s".concat(c[Math.floor((e.address.c-1)/3)])},s=Object(o["e"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},n=1;n<=9;n++)for(var t=1;t<=9;t++)e[l(c.value.puzzle["r".concat(n,"c").concat(t)])].push(c.value.puzzle["r".concat(n,"c").concat(t)]);return e})),i=function(e){console.log(e);var c,n,t=[];return c=a.value["r".concat(e.address.r)],n=u.value["c".concat(e.address.c)],t=s.value[l(e)],{row:c,col:n,square:t}},d=function(e){if(e.given)return e;for(var c=i(e),n=c.row,t=c.col,o=c.square,r=[].concat(Object(h["a"])(n),Object(h["a"])(t),Object(h["a"])(o)),a=!0,u=0;u<r.length;u++)if(r[u].address!=e.address&&r[u].number==e.number&&(a=!1,e.valid.value=!1),!a)break;return a&&(e.valid.value=!0),e},f=Object(o["e"])((function(){var e={};for(var c in n.value)if(Object.prototype.hasOwnProperty.call(n.value,c)){var t=n.value[c];console.log(t.color.slice(0,6)),e["r".concat(t.focus.row,"c").concat(t.focus.col)]=t.color}return e})),p=Object(o["e"])((function(){var e=n.value[t.value];console.log("triggered"),console.log(Object(w["l"])(e));var o=null;return null!=e.focus.row&&""!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(o=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),console.log(o),o})),b=Object(o["e"])((function(){return n.value[t.value].focus})),v=Object(w["h"])({});Object(o["o"])((function(){v.value={}}));var j=function(e,c,o,r){e+=o,c+=r,e>9||c>9||e<1||c<1||(v.value["r".concat(e,"c").concat(c)].focus(),n.value[t.value].focus={row:e,col:c},x.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:e,col:c}}})))},O=function(e){for(var c=a,n=u,t=s,o=0;o<3;o++){var r=void 0;switch(o){case 0:r=c;break;case 1:r=n;break;case 2:r=t;break}var l=function(e){var c=r[e],n=Object.values(r[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),t=Array.from(Array(9),(function(e,c){return c+1}));t=t.filter((function(e){return!n.includes(e)}));var a=function(e){if("."==c[e].number){var n=0==o?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],t.filter((function(e){return n.includes(e)})).forEach((function(n){c[e].candidates.push(n)}))}};for(var u in c)a(u)};for(var i in r)l(i)}return console.log(e),e},z=function(e){var o=e.key,a=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=n.value[t.value].focus,i=s.row,f=s.col;if(null==i||null==f)return i=1,f=1,n.value[t.value].focus={row:i,col:f},void x.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:i,col:f}}}));if(!c.value.puzzle["r".concat(i,"c").concat(f)].given&&u.includes(o))if(a.preventDefault(),r.value){console.log(i),console.log(f),console.log(c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks),c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1]=!c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1];var p=c.value.puzzle["r".concat(i,"c").concat(f)].address;x.send(JSON.stringify({pencilMarkUpdate:{address:p,pencilMark:o}}))}else{c.value.puzzle["r".concat(i,"c").concat(f)].number=o,c.value.puzzle["r".concat(i,"c").concat(f)]=d(c.value.puzzle["r".concat(i,"c").concat(f)]),console.log(Object(w["l"])(c.value.puzzle["r".concat(i,"c").concat(f)]));var b=c.value.puzzle["r".concat(i,"c").concat(f)].address;x.send(JSON.stringify({numberUpdate:{address:b,number:o}}))}else if("Backspace"==o)if(a.preventDefault(),r.value){c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var v=c.value.puzzle["r".concat(i,"c").concat(f)].address;x.send(JSON.stringify({pencilMarkUpdate:{address:v,pencilMark:"delete"}}))}else{c.value.puzzle["r".concat(i,"c").concat(f)].number="",c.value.puzzle["r".concat(i,"c").concat(f)]=d(c.value.puzzle["r".concat(i,"c").concat(f)]);var O=c.value.puzzle["r".concat(i,"c").concat(f)].address;x.send(JSON.stringify({numberUpdate:{address:O,number:""}}))}else if(l.includes(o))switch(a.preventDefault(),o){case"ArrowRight":j(i,f,0,1,"row");break;case"ArrowLeft":j(i,f,0,-1,"row");break;case"ArrowDown":j(i,f,1,0,"col");break;case"ArrowUp":j(i,f,-1,0,"col");break}else"Shift"==o&&(r.value=!r.value)};document.body.addEventListener("keydown",(function(){z({key:event.key,event:event})}));var k=function(e){var c=e.row,o=e.col;n.value[t.value].focus={row:c,col:o},x.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:c,col:o}}}))},y=function(){console.log("starting new game"),x.send(JSON.stringify({newGame:!0}))};return{selfFocus:b,sudokuObj:c,newGame:y,handleInput:z,handleClick:k,inputs:v,color:e,id:t,checkFocus:f,users:n,notating:r,firstPassCandidateCalculator:O,highlightNumbers:p}}};n("9cdc");M.render=y;var S=M;Object(t["a"])(S).mount("#app")},"942d":function(e,c,n){},"9cdc":function(e,c,n){"use strict";n("942d")}});
//# sourceMappingURL=app.61627e57.js.map