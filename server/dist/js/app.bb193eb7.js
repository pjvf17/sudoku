(function(c){function e(e){for(var n,a,u=e[0],l=e[1],s=e[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(c[n]=l[n]);i&&i(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var c,e=0;e<r.length;e++){for(var t=r[e],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),c=a(a.s=t[0]))}return c}var n={},o={app:0},r=[];function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=c,a.c=n,a.d=function(c,e,t){a.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:t})},a.r=function(c){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},a.t=function(c,e){if(1&e&&(c=a(c)),8&e)return c;if(4&e&&"object"===typeof c&&c&&c.__esModule)return c;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var n in c)a.d(t,n,function(e){return c[e]}.bind(null,n));return t},a.n=function(c){var e=c&&c.__esModule?function(){return c["default"]}:function(){return c};return a.d(e,"a",e),e},a.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var i=l;r.push([0,"chunk-vendors"]),t()})({0:function(c,e,t){c.exports=t("56d7")},"56d7":function(c,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("fb6a"),t("5c40")),r={id:"app"},a={class:"pane"},u={class:"inputReplacement"},l={key:0,"dominant-baseline":"middle","text-anchor":"middle"},s={style:{"font-size":"14px"},y:"13",x:"8"},i={style:{"font-size":"14px"},y:"13",x:"30"},d={style:{"font-size":"14px"},y:"13",x:"52"},f={style:{"font-size":"14px"},y:"35",x:"8"},p={style:{"font-size":"14px"},y:"35",x:"30"},b={style:{"font-size":"14px"},y:"35",x:"52"},v={style:{"font-size":"14px"},y:"57",x:"8"},j={style:{"font-size":"14px"},y:"57",x:"30"},O={style:{"font-size":"14px"},y:"57",x:"52"},z={class:"notation-text",style:{color:"white"}};function k(c,e){return Object(o["q"])(),Object(o["f"])("div",r,[Object(o["j"])("div",a,[Object(o["j"])("table",null,[Object(o["j"])("tbody",null,[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(e){return Object(o["j"])("tr",{key:e},[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(t){return Object(o["j"])("td",{key:"r".concat(e,"c").concat(t,"-td"),id:"r".concat(e,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":e%3==0,"border-left":0==t,"border-top":0==e,invalid:!c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].valid.value,"highlight-number":c.highlightNumbers==c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].number}],onClick:function(n){return c.handleClick({row:e,col:t})},style:{"background-color":c.selfFocus.row!=e&&c.selfFocus.col!=t||c.checkFocus["r".concat(e,"c").concat(t)]?c.checkFocus["r".concat(e,"c").concat(t)]:"".concat(c.color.slice(0,7),"44")}},[(Object(o["q"])(),Object(o["f"])("svg",u,[Object(o["j"])("text",{class:[{bold:c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].given,invalid:!c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){c.inputs["r".concat(e,"c").concat(t)]=n}},Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].number),3),(Object(o["q"])(!0),Object(o["f"])(o["b"],null,Object(o["r"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks,(function(n,r){return Object(o["q"])(),Object(o["f"])("g",{key:r},[c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[r]?(Object(o["q"])(),Object(o["f"])("circle",{key:0,cy:12+22*Math.floor(r/3),cx:8.5+r%3*22,r:"8",fill:"#b4c0d4"},null,8,["cy","cx"])):Object(o["g"])("",!0)])})),128)),""==c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].number?(Object(o["q"])(),Object(o["f"])("text",l,[Object(o["j"])("tspan",s,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[0]?1:""),1),Object(o["j"])("tspan",i,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[1]?2:""),1),Object(o["j"])("tspan",d,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[2]?3:""),1),Object(o["j"])("tspan",f,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[3]?4:""),1),Object(o["j"])("tspan",p,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[4]?5:""),1),Object(o["j"])("tspan",b,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[5]?6:""),1),Object(o["j"])("tspan",v,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[6]?7:""),1),Object(o["j"])("tspan",j,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[7]?8:""),1),Object(o["j"])("tspan",O,Object(o["u"])(c.sudokuObj.puzzle["r".concat(e,"c").concat(t)].pencilMarks[8]?9:""),1)])):Object(o["g"])("",!0)]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["j"])("span",z,Object(o["u"])(c.notating?"Notation Mode On":"Notation Mode Off"),1),Object(o["j"])("button",{onClick:e[1]||(e[1]=function(e){return c.newGame()}),class:"button"},"Start New Game"),Object(o["j"])("button",{onClick:e[2]||(e[2]=function(e){return c.firstPassCandidateCalculator(c.sudokuObj.puzzle)}),class:"button"},"Fill In Candiadtes?")])])}t("4de4"),t("4160"),t("a630"),t("caad"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b");var y,g=t("2909"),h=t("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var w=null!==(y=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==y?y:"ws://tealog.xyz:8010";console.log(w);var m=new WebSocket(w),x={setup:function(){Object(o["n"])((function(){m.close(1e3,"logging off")})),m.onopen=function(){console.log("connection established")};var c=Object(h["h"])({}),e=Object(h["h"])({}),t=Object(h["h"])({}),n=Object(h["h"])({}),r=Object(h["h"])(!1);m.onmessage=function(o){var r=o.data,a=JSON.parse(r),u=a.color,l=a.sudokuObj,s=a.id,f=a.users,p=a.focusUpdate,b=a.numberUpdate,v=a.pencilMarkUpdate,j=l||{},O=j.puzzle,z=j.sentRows,k=j.sentCols,y=j.sentSquares;if(l&&(e.value.puzzle=O,e.value.rows=z,e.value.cols=k,e.value.squares=y,console.log(O),console.log(l),console.log(i(e.value.puzzle["r1c1"]))),f&&(t.value=f),u&&(c.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),p){var g=p.id,h=p.focus;t.value[g].focus=h}if(b){var w=b.address,m=b.number;e.value.puzzle["r".concat(w.r,"c").concat(w.c)].number=m,e.value.puzzle["r".concat(w.r,"c").concat(w.c)]=d(e.value.puzzle["r".concat(w.r,"c").concat(w.c)])}if(v){var x=v.address,M=v.pencilMark;"delete"!=M?e.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]=!e.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks[M-1]:e.value.puzzle["r".concat(x.r,"c").concat(x.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var a=Object(o["e"])((function(){for(var c={},t=1;t<=9;t++){c["r".concat(t)]=[];for(var n=1;n<=9;n++)c["r".concat(t)].push(e.value.puzzle["r".concat(t,"c").concat(n)])}return c})),u=Object(o["e"])((function(){for(var c={},t=1;t<=9;t++){c["c".concat(t)]=[];for(var n=1;n<=9;n++)c["c".concat(t)].push(e.value.puzzle["r".concat(n,"c").concat(t)])}return c})),l=function(c){var e,t=[1,2,3],n=[4,5,6],o=[7,8,9];return c.address.r>=1&&c.address.r<=3&&(e=t),c.address.r>=4&&c.address.r<=6&&(e=n),c.address.r>=7&&c.address.r<=9&&(e=o),"s".concat(e[Math.floor((c.address.c-1)/3)])},s=Object(o["e"])((function(){for(var c={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},t=1;t<=9;t++)for(var n=1;n<=9;n++)c[l(e.value.puzzle["r".concat(t,"c").concat(n)])].push(e.value.puzzle["r".concat(t,"c").concat(n)]);return c})),i=function(c){console.log(c);var e,t,n=[];return e=a.value["r".concat(c.address.r)],t=u.value["c".concat(c.address.c)],n=s.value[l(c)],{row:e,col:t,square:n}},d=function(c){if(c.given)return c;for(var e=i(c),t=e.row,n=e.col,o=e.square,r=[].concat(Object(g["a"])(t),Object(g["a"])(n),Object(g["a"])(o)),a=!0,u=0;u<r.length;u++)if(r[u].address!=c.address&&r[u].number==c.number&&(a=!1,c.valid.value=!1),!a)break;return a&&(c.valid.value=!0),c},f=Object(o["e"])((function(){var c={};for(var e in t.value)if(Object.prototype.hasOwnProperty.call(t.value,e)){var n=t.value[e];console.log(n.color.slice(0,6)),c["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return c})),p=Object(o["e"])((function(){var c=t.value[n.value];console.log("triggered"),console.log(Object(h["l"])(c));var o=null;return null!=c.focus.row&&""!=e.value.puzzle["r".concat(c.focus.row,"c").concat(c.focus.col)].number&&(o=e.value.puzzle["r".concat(c.focus.row,"c").concat(c.focus.col)].number),console.log(o),o})),b=Object(o["e"])((function(){return t.value[n.value].focus})),v=Object(h["h"])({});Object(o["o"])((function(){v.value={}}));var j=function(c,e,o,r){c+=o,e+=r,c>9||e>9||c<1||e<1||(v.value["r".concat(c,"c").concat(e)].focus(),t.value[n.value].focus={row:c,col:e},m.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:e}}})))},O=function(c){for(var e=a,t=u,n=s,o=0;o<3;o++){var r=void 0;switch(o){case 0:r=e;break;case 1:r=t;break;case 2:r=n;break}var l=function(c){var e=r[c],t=Object.values(r[c]).map((function(c){return parseInt(c.number)})).filter((function(c){return!isNaN(c)})),n=Array.from(Array(9),(function(c,e){return e+1}));n=n.filter((function(c){return!t.includes(c)}));var a=function(c){if("."==e[c].number){var t=0==o?Array.from(Array(9),(function(c,e){return e+1})):e[c].candidates;e[c].candidates=[],n.filter((function(c){return t.includes(c)})).forEach((function(t){e[c].candidates.push(t)}))}};for(var u in e)a(u)};for(var i in r)l(i)}return console.log(c),c},z=function(c){var o=c.key,a=c.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,i=s.row,f=s.col;if(null==i||null==f)return i=1,f=1,t.value[n.value].focus={row:i,col:f},void m.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:i,col:f}}}));if(!e.value.puzzle["r".concat(i,"c").concat(f)].given&&u.includes(o))if(a.preventDefault(),r.value){console.log(i),console.log(f),console.log(e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks),e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1]=!e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1];var p=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({pencilMarkUpdate:{address:p,pencilMark:o}}))}else{e.value.puzzle["r".concat(i,"c").concat(f)].number=o,e.value.puzzle["r".concat(i,"c").concat(f)]=d(e.value.puzzle["r".concat(i,"c").concat(f)]),console.log(Object(h["l"])(e.value.puzzle["r".concat(i,"c").concat(f)]));var b=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({numberUpdate:{address:b,number:o}}))}else if("Backspace"==o)if(a.preventDefault(),r.value){e.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var v=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({pencilMarkUpdate:{address:v,pencilMark:"delete"}}))}else{e.value.puzzle["r".concat(i,"c").concat(f)].number="",e.value.puzzle["r".concat(i,"c").concat(f)]=d(e.value.puzzle["r".concat(i,"c").concat(f)]);var O=e.value.puzzle["r".concat(i,"c").concat(f)].address;m.send(JSON.stringify({numberUpdate:{address:O,number:""}}))}else if(l.includes(o))switch(a.preventDefault(),o){case"ArrowRight":j(i,f,0,1,"row");break;case"ArrowLeft":j(i,f,0,-1,"row");break;case"ArrowDown":j(i,f,1,0,"col");break;case"ArrowUp":j(i,f,-1,0,"col");break}else"Shift"==o&&(r.value=!r.value)};document.body.addEventListener("keydown",(function(){z({key:event.key,event:event})}));var k=function(c){var e=c.row,o=c.col;t.value[n.value].focus={row:e,col:o},m.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:o}}}))},y=function(){console.log("starting new game"),m.send(JSON.stringify({newGame:!0}))};return{selfFocus:b,sudokuObj:e,newGame:y,handleInput:z,handleClick:k,inputs:v,color:c,id:n,checkFocus:f,users:t,notating:r,firstPassCandidateCalculator:O,highlightNumbers:p}}};t("9cdc");x.render=k;var M=x;Object(n["a"])(M).mount("#app")},"942d":function(c,e,t){},"9cdc":function(c,e,t){"use strict";t("942d")}});
//# sourceMappingURL=app.bb193eb7.js.map