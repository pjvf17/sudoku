(function(e){function c(c){for(var t,a,u=c[0],l=c[1],s=c[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);i&&i(c);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,c=0;c<r.length;c++){for(var n=r[c],t=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(t=!1)}t&&(r.splice(c--,1),e=a(a.s=n[0]))}return e}var t={},o={app:0},r=[];function a(c){if(t[c])return t[c].exports;var n=t[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,c,n){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var t in e)a.d(n,t,function(c){return e[c]}.bind(null,t));return n},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,c,n){e.exports=n("56d7")},"56d7":function(e,c,n){"use strict";n.r(c);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("830f"),o=(n("99af"),n("fb6a"),n("5c40")),r={id:"app"},a={class:"pane"},u={class:"inputReplacement"},l={key:0,"dominant-baseline":"middle","text-anchor":"middle"},s={class:"notation-text",style:{color:"white"}};function i(e,c){return Object(o["q"])(),Object(o["f"])("div",r,[Object(o["j"])("div",a,[Object(o["j"])("table",null,[Object(o["j"])("tbody",null,[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(c){return Object(o["j"])("tr",{key:c},[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(n){return Object(o["j"])("td",{key:"r".concat(c,"c").concat(n,"-td"),id:"r".concat(c,"c").concat(n,"-td-id"),class:[{"border-right":n%3==0,"border-bottom":c%3==0,"border-left":0==n,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].number}],onClick:function(t){return e.handleClick({row:c,col:n})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=n||e.checkFocus["r".concat(c,"c").concat(n)]?e.checkFocus["r".concat(c,"c").concat(n)]:"".concat(e.color.slice(0,7),"44")}},[(Object(o["q"])(),Object(o["f"])("svg",u,[Object(o["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(t){e.inputs["r".concat(c,"c").concat(n)]=t}},Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].number),3),(Object(o["q"])(!0),Object(o["f"])(o["b"],null,Object(o["r"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks,(function(t,r){return Object(o["q"])(),Object(o["f"])("g",{key:r},[e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[r]&&""==e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].number?(Object(o["q"])(),Object(o["f"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==r+1}],cy:9+22*Math.floor(r/3),cx:8.5+r%3*22,r:"8"},null,10,["cy","cx"])):Object(o["g"])("",!0),""==e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].number?(Object(o["q"])(),Object(o["f"])("text",l,[e.sudokuObj.puzzle["r".concat(c,"c").concat(n)].pencilMarks[r]?(Object(o["q"])(),Object(o["f"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(r/3),x:8+r%3*22},Object(o["u"])(r+1),9,["y","x"])):Object(o["g"])("",!0)])):Object(o["g"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["j"])("span",s,Object(o["u"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(o["j"])("button",{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},"Start New Game"),Object(o["j"])("button",{onClick:c[2]||(c[2]=function(c){return e.firstPassCandidateCalculator(e.sudokuObj.puzzle)}),class:"button"},"Fill In Candiadtes?")])])}n("4de4"),n("4160"),n("a630"),n("caad"),n("d81d"),n("07ac"),n("2532"),n("3ca3"),n("159b");var d,f=n("2909"),v=n("a1e9");console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var b=null!==(d=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==d?d:"ws://tealog.xyz:8010";console.log(b);var p=new WebSocket(b),O={setup:function(){Object(o["n"])((function(){p.close(1e3,"logging off")})),p.onopen=function(){console.log("connection established")};var e=Object(v["h"])({}),c=Object(v["h"])({}),n=Object(v["h"])({}),t=Object(v["h"])({}),r=Object(v["h"])(!1);p.onmessage=function(o){var r=o.data,a=JSON.parse(r),u=a.color,l=a.sudokuObj,s=a.id,f=a.users,v=a.focusUpdate,b=a.numberUpdate,p=a.pencilMarkUpdate,O=l||{},j=O.puzzle,z=O.sentRows,g=O.sentCols,k=O.sentSquares;if(l&&(c.value.puzzle=j,c.value.rows=z,c.value.cols=g,c.value.squares=k,console.log(j),console.log(l),console.log(i(c.value.puzzle["r1c1"]))),f&&(n.value=f),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(t.value=s),v){var h=v.id,y=v.focus;n.value[h].focus=y}if(b){var m=b.address,w=b.number;c.value.puzzle["r".concat(m.r,"c").concat(m.c)].number=w,c.value.puzzle["r".concat(m.r,"c").concat(m.c)]=d(c.value.puzzle["r".concat(m.r,"c").concat(m.c)])}if(p){var M=p.address,S=p.pencilMark;"delete"!=S?c.value.puzzle["r".concat(M.r,"c").concat(M.c)].pencilMarks[S-1]=!c.value.puzzle["r".concat(M.r,"c").concat(M.c)].pencilMarks[S-1]:c.value.puzzle["r".concat(M.r,"c").concat(M.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var a=Object(o["e"])((function(){for(var e={},n=1;n<=9;n++){e["r".concat(n)]=[];for(var t=1;t<=9;t++)e["r".concat(n)].push(c.value.puzzle["r".concat(n,"c").concat(t)])}return e})),u=Object(o["e"])((function(){for(var e={},n=1;n<=9;n++){e["c".concat(n)]=[];for(var t=1;t<=9;t++)e["c".concat(n)].push(c.value.puzzle["r".concat(t,"c").concat(n)])}return e})),l=function(e){var c,n=[1,2,3],t=[4,5,6],o=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=n),e.address.r>=4&&e.address.r<=6&&(c=t),e.address.r>=7&&e.address.r<=9&&(c=o),"s".concat(c[Math.floor((e.address.c-1)/3)])},s=Object(o["e"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},n=1;n<=9;n++)for(var t=1;t<=9;t++)e[l(c.value.puzzle["r".concat(n,"c").concat(t)])].push(c.value.puzzle["r".concat(n,"c").concat(t)]);return e})),i=function(e){console.log(e);var c,n,t=[];return c=a.value["r".concat(e.address.r)],n=u.value["c".concat(e.address.c)],t=s.value[l(e)],{row:c,col:n,square:t}},d=function(e){if(e.given)return e;for(var c=i(e),n=c.row,t=c.col,o=c.square,r=[].concat(Object(f["a"])(n),Object(f["a"])(t),Object(f["a"])(o)),a=!0,u=0;u<r.length;u++)if(r[u].address!=e.address&&r[u].number==e.number&&(a=!1,e.valid.value=!1),!a)break;return a&&(e.valid.value=!0),e},b=Object(o["e"])((function(){var e={};for(var c in n.value)if(Object.prototype.hasOwnProperty.call(n.value,c)){var t=n.value[c];console.log(t.color.slice(0,6)),e["r".concat(t.focus.row,"c").concat(t.focus.col)]=t.color}return e})),O=Object(o["e"])((function(){var e=n.value[t.value];console.log("triggered"),console.log(Object(v["l"])(e));var o=null;return null!=e.focus.row&&""!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(o=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),console.log(o),o})),j=Object(o["e"])((function(){return n.value[t.value].focus})),z=Object(v["h"])({});Object(o["o"])((function(){z.value={}}));var g=function(e,c,o,r){e+=o,c+=r,e>9||c>9||e<1||c<1||(z.value["r".concat(e,"c").concat(c)].focus(),n.value[t.value].focus={row:e,col:c},p.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:e,col:c}}})))},k=function(e){for(var c=a,n=u,t=s,o=0;o<3;o++){var r=void 0;switch(o){case 0:r=c;break;case 1:r=n;break;case 2:r=t;break}var l=function(e){var c=r[e],n=Object.values(r[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),t=Array.from(Array(9),(function(e,c){return c+1}));t=t.filter((function(e){return!n.includes(e)}));var a=function(e){if("."==c[e].number){var n=0==o?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],t.filter((function(e){return n.includes(e)})).forEach((function(n){c[e].candidates.push(n)}))}};for(var u in c)a(u)};for(var i in r)l(i)}return console.log(e),e},h=function(e){var o=e.key,a=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=n.value[t.value].focus,i=s.row,f=s.col;if(null==i||null==f)return i=1,f=1,n.value[t.value].focus={row:i,col:f},void p.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:i,col:f}}}));if(!c.value.puzzle["r".concat(i,"c").concat(f)].given&&u.includes(o))if(a.preventDefault(),r.value){console.log(i),console.log(f),console.log(c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks),c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1]=!c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks[o-1];var b=c.value.puzzle["r".concat(i,"c").concat(f)].address;p.send(JSON.stringify({pencilMarkUpdate:{address:b,pencilMark:o}}))}else{c.value.puzzle["r".concat(i,"c").concat(f)].number=o,c.value.puzzle["r".concat(i,"c").concat(f)]=d(c.value.puzzle["r".concat(i,"c").concat(f)]),console.log(Object(v["l"])(c.value.puzzle["r".concat(i,"c").concat(f)]));var O=c.value.puzzle["r".concat(i,"c").concat(f)].address;p.send(JSON.stringify({numberUpdate:{address:O,number:o}}))}else if("Backspace"==o)if(a.preventDefault(),r.value){c.value.puzzle["r".concat(i,"c").concat(f)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var j=c.value.puzzle["r".concat(i,"c").concat(f)].address;p.send(JSON.stringify({pencilMarkUpdate:{address:j,pencilMark:"delete"}}))}else{c.value.puzzle["r".concat(i,"c").concat(f)].number="",c.value.puzzle["r".concat(i,"c").concat(f)]=d(c.value.puzzle["r".concat(i,"c").concat(f)]);var z=c.value.puzzle["r".concat(i,"c").concat(f)].address;p.send(JSON.stringify({numberUpdate:{address:z,number:""}}))}else if(l.includes(o))switch(a.preventDefault(),o){case"ArrowRight":g(i,f,0,1,"row");break;case"ArrowLeft":g(i,f,0,-1,"row");break;case"ArrowDown":g(i,f,1,0,"col");break;case"ArrowUp":g(i,f,-1,0,"col");break}else"Shift"==o&&(r.value=!r.value)};document.body.addEventListener("keydown",(function(){h({key:event.key,event:event})}));var y=function(e){var c=e.row,o=e.col;n.value[t.value].focus={row:c,col:o},p.send(JSON.stringify({focusUpdate:{id:t.value,focus:{row:c,col:o}}}))},m=function(){console.log("starting new game"),p.send(JSON.stringify({newGame:!0}))};return{selfFocus:j,sudokuObj:c,newGame:m,handleInput:h,handleClick:y,inputs:z,color:e,id:t,checkFocus:b,users:n,notating:r,firstPassCandidateCalculator:k,highlightNumbers:O}}};n("9cdc");O.render=i;var j=O;Object(t["a"])(j).mount("#app")},"942d":function(e,c,n){},"9cdc":function(e,c,n){"use strict";n("942d")}});
//# sourceMappingURL=app.86ab87f7.js.map