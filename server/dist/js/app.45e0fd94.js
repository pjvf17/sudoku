(function(c){function e(e){for(var t,r,u=e[0],l=e[1],s=e[2],d=0,f=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(c[t]=l[t]);i&&i(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var c,e=0;e<a.length;e++){for(var n=a[e],t=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(t=!1)}t&&(a.splice(e--,1),c=r(r.s=n[0]))}return c}var t={},o={app:0},a=[];function r(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return c[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=c,r.c=t,r.d=function(c,e,n){r.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:n})},r.r=function(c){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},r.t=function(c,e){if(1&e&&(c=r(c)),8&e)return c;if(4&e&&"object"===typeof c&&c&&c.__esModule)return c;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var t in c)r.d(n,t,function(e){return c[e]}.bind(null,t));return n},r.n=function(c){var e=c&&c.__esModule?function(){return c["default"]}:function(){return c};return r.d(e,"a",e),e},r.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var i=l;a.push([0,"chunk-vendors"]),n()})({0:function(c,e,n){c.exports=n("56d7")},"56d7":function(c,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),o=(n("99af"),n("fb6a"),n("5c40")),a={id:"app"},r={class:"pane"},u={class:"inputReplacement"},l={key:0,x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle"},s={style:{"font-size":"14px"},y:"13",x:"8"},i={style:{"font-size":"14px"},y:"13",x:"30"},d={style:{"font-size":"14px"},y:"13",x:"52"},f={style:{"font-size":"14px"},y:"35",x:"8"},p={style:{"font-size":"14px"},y:"35",x:"30"},b={style:{"font-size":"14px"},y:"35",x:"52"},v={style:{"font-size":"14px"},y:"57",x:"8"},j={style:{"font-size":"14px"},y:"57",x:"30"},O={style:{"font-size":"14px"},y:"57",x:"52"},z={class:"notation-text",style:{color:"white"}};function k(c,e){return Object(o["q"])(),Object(o["f"])("div",a,[Object(o["j"])("div",r,[Object(o["j"])("table",null,[Object(o["j"])("tbody",null,[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(e){return Object(o["j"])("tr",{key:e},[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(n){return Object(o["j"])("td",{key:"r".concat(e,"c").concat(n,"-td"),id:"r".concat(e,"c").concat(n,"-td-id"),class:[{"border-right":n%3==0,"border-bottom":e%3==0,"border-left":0==n,"border-top":0==e,invalid:!c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].valid.value}],onClick:function(t){return c.handleClick({row:e,col:n})},style:{"background-color":c.selfFocus.row!=e&&c.selfFocus.col!=n||c.checkFocus["r".concat(e,"c").concat(n)]?c.checkFocus["r".concat(e,"c").concat(n)]:"".concat(c.color.slice(0,7),"44")}},[(Object(o["q"])(),Object(o["f"])("svg",u,[Object(o["j"])("text",{class:[{bold:c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].given,invalid:!c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(t){c.inputs["r".concat(e,"c").concat(n)]=t}},Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].number),3),""==c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].number?(Object(o["q"])(),Object(o["f"])("text",l,[Object(o["j"])("tspan",s,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[0]?1:""),1),Object(o["j"])("tspan",i,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[1]?2:""),1),Object(o["j"])("tspan",d,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[2]?3:""),1),Object(o["j"])("tspan",f,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[3]?4:""),1),Object(o["j"])("tspan",p,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[4]?5:""),1),Object(o["j"])("tspan",b,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[5]?6:""),1),Object(o["j"])("tspan",v,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[6]?7:""),1),Object(o["j"])("tspan",j,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[7]?8:""),1),Object(o["j"])("tspan",O,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(n)].pencilMarks[8]?9:""),1)])):Object(o["g"])("",!0)]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["j"])("span",z,Object(o["u"])(c.notating?"Notation Mode On":"Notation Mode Off"),1),Object(o["j"])("button",{onClick:e[1]||(e[1]=function(e){return c.newGame()}),class:"button"},"Start New Game"),Object(o["j"])("button",{onClick:e[2]||(e[2]=function(e){return c.firstPassCandidateCalculator(c.sudokuObj.puzzle)}),class:"button"},"Fill In Candiadtes?")])])}n("4de4"),n("4160"),n("a630"),n("caad"),n("d81d"),n("07ac"),n("2532"),n("3ca3"),n("159b");var y,g=n("2909"),w=n("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var h=null!==(y=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==y?y:"ws://tealog.xyz:8010";console.log(h);var m=new WebSocket(h),x={setup:function(){Object(o["n"])((function(){m.close(1e3,"logging off")})),m.onopen=function(){console.log("connection established")};var c=Object(w["h"])({}),e=Object(w["h"])({}),n=Object(w["h"])({}),t=Object(w["h"])({}),a=Object(w["h"])(!1);m.onmessage=function(o){var a=o.data,r=JSON.parse(a),u=r.color,l=r.sudokuObj,s=r.id,f=r.users,p=r.focusUpdate,b=r.numberUpdate,v=r.pencilMarkUpdate,j=l||{},O=j.puzzle,z=j.sentRows,k=j.sentCols,y=j.sentSquares;if(l&&(e.value.puzzle=O,e.value.rows=z,e.value.cols=k,e.value.squares=y,console.log(O),console.log(l),console.log(i(e.value.puzzle["r1c1"]))),f&&(n.value=f),u&&(c.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(t.value=s),p){var g=p.id,w=p.focus;n.value[g].focus=w}if(b){var h=b.address,m=b.number;e.value.puzzle["r".concat(h.r,"c").concat(h.c)].number=m,e.value.puzzle["r".concat(h.r,"c").concat(h.c)]=d(e.value.puzzle["r".concat(h.r,"c").concat(h.c)])}if(v){var x=v.address,M=v.pencilMark;"delete"!=M?e.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]=!e.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]:e.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var r=Object(o["e"])((function(){for(var c={},n=1;n<=9;n++){c["r".concat(n)]=[];for(var t=1;t<=9;t++)c["r".concat(n)].push(e.value.puzzle["r".concat(n,"c").concat(t)])}return c})),u=Object(o["e"])((function(){for(var c={},n=1;n<=9;n++){c["c".concat(n)]=[];for(var t=1;t<=9;t++)c["c".concat(n)].push(e.value.puzzle["r".concat(t,"c").concat(n)])}return c})),l=function(c){var e,n=[1,2,3],t=[4,5,6],o=[7,8,9];return c.address.r>=1&&c.address.r<=3&&(e=n),c.address.r>=4&&c.address.r<=6&&(e=t),c.address.r>=7&&c.address.r<=9&&(e=o),"s".concat(e[Math.floor((c.address.c-1)/3)])},s=Object(o["e"])((function(){for(var c={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},n=1;n<=9;n++)for(var t=1;t<=9;t++)c[l(e.value.puzzle["r".concat(n,"c").concat(t)])].push(e.value.puzzle["r".concat(n,"c").concat(t)]);return c})),i=function(c){console.log(c);var e,n,t=[];return e=r.value["r".concat(c.address.r)],n=u.value["c".concat(c.address.c)],t=s.value[l(c)],{row:e,col:n,square:t}},d=function(c){if(c.given)return c;for(var e=i(c),n=e.row,t=e.col,o=e.square,a=[].concat(Object(g["a"])(n),Object(g["a"])(t),Object(g["a"])(o)),r=!0,u=0;u<a.length;u++)if(a[u].address!=c.address&&a[u].number==c.number&&(r=!1,c.valid.value=!1),!r)break;return r&&(c.valid.value=!0),c},f=Object(o["e"])((function(){var c={};for(var e in n.value)if(Object.prototype.hasOwnProperty.call(n.value,e)){var t=n.value[e];console.log(t.color.slice(0,6)),c["r".concat(t.focus.row,"c").concat(t.focus.col)]=t.color}return c})),p=Object(o["e"])((function(){var c=n.value[t];return console.log("triggered"),"."!=e.value.puzzle["r".concat(c.focus.row,"c").concat(c.focus.col)].number&&console.log(e.value.puzzle["r".concat(c.focus.row,"c").concat(c.focus.col)].number),e.value.puzzle["r".concat(c.focus.row,"c").concat(c.focus.col)].number})),b=Object(o["e"])((function(){return n.value[t.value].focus})),v=Object(w["h"])({});Object(o["o"])((function(){v.value={}}));var j=function(c,e,o,a){c+=o,e+=a,c>9||e>9||c<1||e<1||(v.value["r".concat(c,"c").concat(e)].focus(),n.value[t.value].focus={row:c,col:e},m.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:c,col:e}}})))},O=function(c){for(var e=r,n=u,t=s,o=0;o<3;o++){var a=void 0;switch(o){case 0:a=e;break;case 1:a=n;break;case 2:a=t;break}var l=function(c){var e=a[c],n=Object.values(a[c]).map((function(c){return parseInt(c.number)})).filter((function(c){return!isNaN(c)})),t=Array.from(Array(9),(function(c,e){return e+1}));t=t.filter((function(c){return!n.includes(c)}));var r=function(c){if("."==e[c].number){var n=0==o?Array.from(Array(9),(function(c,e){return e+1})):e[c].candidates;e[c].candidates=[],t.filter((function(c){return n.includes(c)})).forEach((function(n){e[c].candidates.push(n)}))}};for(var u in e)r(u)};for(var i in a)l(i)}return console.log(c),c},z=function(c){var o=c.key,r=c.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=n.value[t.value].focus,i=s.row,f=s.col;if(null==i||null==f)return i=1,f=1,n.value[t.value].focus={row:i,col:f},void m.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:i,col:f}}}));if(!e.value.puzzle["r".concat(i,"c").concat(f)].given&&u.includes(o))if(r.preventDefault(),a.value){console.log(i),console.log(f),console.log(e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks),e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1]=!e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1];var p=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({pencilMarkUpdate:{address:p,pencilMark:o}}))}else{e.value.puzzle["r".concat(i,"c").concat(f)].number=o,e.value.puzzle["r".concat(i,"c").concat(f)]=d(e.value.puzzle["r".concat(i,"c").concat(f)]),console.log(Object(w["l"])(e.value.puzzle["r".concat(i,"c").concat(f)]));var b=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({numberUpdate:{address:b,number:o}}))}else if("Backspace"==o)if(r.preventDefault(),a.value){e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var v=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({pencilMarkUpdate:{address:v,pencilMark:"delete"}}))}else{e.value.puzzle["r".concat(i,"c").concat(f)].number="",e.value.puzzle["r".concat(i,"c").concat(f)]=d(e.value.puzzle["r".concat(i,"c").concat(f)]);var O=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({numberUpdate:{address:O,number:""}}))}else if(l.includes(o))switch(r.preventDefault(),o){case"ArrowRight":j(i,f,0,1,"row");break;case"ArrowLeft":j(i,f,0,-1,"row");break;case"ArrowDown":j(i,f,1,0,"col");break;case"ArrowUp":j(i,f,-1,0,"col");break}else"Shift"==o&&(a.value=!a.value)};document.body.addEventListener("keydown",(function(){z({key:event.key,event:event})}));var k=function(c){var e=c.row,o=c.col;n.value[t.value].focus={row:e,col:o},m.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:e,col:o}}}))},y=function(){console.log("starting new game"),m.send(JSON.stringify({newGame:!0}))};return{selfFocus:b,sudokuObj:e,newGame:y,handleInput:z,handleClick:k,inputs:v,color:c,id:t,checkFocus:f,users:n,notating:a,firstPassCandidateCalculator:O,highlightNumbers:p}}};n("9cdc");x.render=k;var M=x;Object(t["a"])(M).mount("#app")},"942d":function(c,e,n){},"9cdc":function(c,e,n){"use strict";n("942d")}});
//# sourceMappingURL=app.45e0fd94.js.map