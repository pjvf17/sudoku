(function(e){function c(c){for(var n,a,u=c[0],l=c[1],s=c[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(f.length)f.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,c=0;c<r.length;c++){for(var t=r[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(n=!1)}n&&(r.splice(c--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},r=[];function a(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,c,t){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)a.d(t,n,function(c){return e[c]}.bind(null,n));return t},a.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),o=(t("99af"),t("fb6a"),t("5c40")),r={id:"app"},a={class:"pane"},u={class:"inputReplacement"},l={key:0,"dominant-baseline":"middle","text-anchor":"middle"},s={class:"notation-text",style:{color:"white"}};function i(e,c){return Object(o["q"])(),Object(o["f"])("div",r,[Object(o["j"])("div",a,[Object(o["j"])("table",null,[Object(o["j"])("tbody",null,[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(c){return Object(o["j"])("tr",{key:c},[(Object(o["q"])(),Object(o["f"])(o["b"],null,Object(o["r"])(9,(function(t){return Object(o["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(o["q"])(),Object(o["f"])("svg",u,[Object(o["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(o["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),(Object(o["q"])(!0),Object(o["f"])(o["b"],null,Object(o["r"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks,(function(n,r){return Object(o["q"])(),Object(o["f"])("g",{key:r},[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[r]&&""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(o["q"])(),Object(o["f"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==r+1}],cy:9+22*Math.floor(r/3),cx:8.5+r%3*22,r:"8"},null,10,["cy","cx"])):Object(o["g"])("",!0),""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(o["q"])(),Object(o["f"])("text",l,[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[r]?(Object(o["q"])(),Object(o["f"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(r/3),x:8+r%3*22},Object(o["u"])(r+1),9,["y","x"])):Object(o["g"])("",!0)])):Object(o["g"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(o["j"])("span",s,Object(o["u"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(o["j"])("button",{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},"Start New Game"),Object(o["j"])("button",{onClick:c[2]||(c[2]=function(c){return e.firstPassCandidateCalculator(e.sudokuObj.puzzle)}),class:"button"},"Fill In Candiadtes?")])])}t("caad");var d,f=t("a1e9"),b=t("2909"),v=Object(f["h"])({}),p=function(e){v=e},O=Object(o["e"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]=[];for(var t=1;t<=9;t++)e["r".concat(c)].push(v.value.puzzle["r".concat(c,"c").concat(t)])}return e})),j=Object(o["e"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]=[];for(var t=1;t<=9;t++)e["c".concat(c)].push(v.value.puzzle["r".concat(t,"c").concat(c)])}return e})),z=function(e){var c,t=[1,2,3],n=[4,5,6],o=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=o),"s".concat(c[Math.floor((e.address.c-1)/3)])},h=Object(o["e"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[z(v.value.puzzle["r".concat(c,"c").concat(t)])].push(v.value.puzzle["r".concat(c,"c").concat(t)]);return e})),k=function(e){var c,t,n=[];return c=O.value["r".concat(e.address.r)],t=j.value["c".concat(e.address.c)],n=h.value[z(e)],{row:c,col:t,square:n}},g=function(e){if(e.given)return e;for(var c=k(e),t=c.row,n=c.col,o=c.square,r=[].concat(Object(b["a"])(t),Object(b["a"])(n),Object(b["a"])(o)),a=!0,u=0;u<r.length;u++)if(r[u].address!=e.address&&r[u].number==e.number&&(a=!1,e.valid.value=!1),!a)break;return a&&(e.valid.value=!0),e};console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var y=null!==(d=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==d?d:"ws://tealog.xyz:8010";console.log(y);var w=new WebSocket(y),m={setup:function(){Object(o["n"])((function(){w.close(1e3,"logging off")})),w.onopen=function(){console.log("connection established")};var e=Object(f["h"])({}),c=Object(f["h"])({}),t=Object(f["h"])({}),n=Object(f["h"])({}),r=Object(f["h"])(!1);w.onmessage=function(o){var r=o.data,a=JSON.parse(r),u=a.color,l=a.sudokuObj,s=a.id,i=a.users,d=a.focusUpdate,f=a.numberUpdate,b=a.pencilMarkUpdate,v=l||{},O=v.puzzle,j=v.sentRows,z=v.sentCols,h=v.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=j,c.value.cols=z,c.value.squares=h,p(c)),i&&(t.value=i),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),d){var k=d.id,y=d.focus;t.value[k].focus=y}if(f){var w=f.address,m=f.number;c.value.puzzle["r".concat(w.r,"c").concat(w.c)].number=m,c.value.puzzle["r".concat(w.r,"c").concat(w.c)]=g(c.value.puzzle["r".concat(w.r,"c").concat(w.c)])}if(b){var M=b.address,S=b.pencilMark;"delete"!=S?c.value.puzzle["r".concat(M.r,"c").concat(M.c)].pencilMarks[S-1]=!c.value.puzzle["r".concat(M.r,"c").concat(M.c)].pencilMarks[S-1]:c.value.puzzle["r".concat(M.r,"c").concat(M.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}};var a=Object(o["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),u=Object(o["e"])((function(){var e=t.value[n.value],o=null;return null!=e.focus.row&&""!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(o=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),o})),l=Object(o["e"])((function(){return t.value[n.value].focus})),s=Object(f["h"])({});Object(o["o"])((function(){s.value={}}));var i=function(e,c,o,r){e+=o,c+=r,e>9||c>9||e<1||c<1||(s.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},w.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},d=function(e){var o=e.key,a=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,d=s.row,f=s.col;if(null==d||null==f)return d=1,f=1,t.value[n.value].focus={row:d,col:f},void w.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:d,col:f}}}));if(!c.value.puzzle["r".concat(d,"c").concat(f)].given&&u.includes(o))if(a.preventDefault(),r.value){c.value.puzzle["r".concat(d,"c").concat(f)].pencilMarks[o-1]=!c.value.puzzle["r".concat(d,"c").concat(f)].pencilMarks[o-1];var b=c.value.puzzle["r".concat(d,"c").concat(f)].address;w.send(JSON.stringify({pencilMarkUpdate:{address:b,pencilMark:o}}))}else{c.value.puzzle["r".concat(d,"c").concat(f)].number=o,c.value.puzzle["r".concat(d,"c").concat(f)]=g(c.value.puzzle["r".concat(d,"c").concat(f)]);var v=c.value.puzzle["r".concat(d,"c").concat(f)].address;w.send(JSON.stringify({numberUpdate:{address:v,number:o}}))}else if("Backspace"==o)if(a.preventDefault(),r.value){c.value.puzzle["r".concat(d,"c").concat(f)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var p=c.value.puzzle["r".concat(d,"c").concat(f)].address;w.send(JSON.stringify({pencilMarkUpdate:{address:p,pencilMark:"delete"}}))}else{c.value.puzzle["r".concat(d,"c").concat(f)].number="",c.value.puzzle["r".concat(d,"c").concat(f)]=g(c.value.puzzle["r".concat(d,"c").concat(f)]);var O=c.value.puzzle["r".concat(d,"c").concat(f)].address;w.send(JSON.stringify({numberUpdate:{address:O,number:""}}))}else if(l.includes(o))switch(a.preventDefault(),o){case"ArrowRight":i(d,f,0,1,"row");break;case"ArrowLeft":i(d,f,0,-1,"row");break;case"ArrowDown":i(d,f,1,0,"col");break;case"ArrowUp":i(d,f,-1,0,"col");break}else"Shift"==o?r.value=!r.value:"z"==o.toLowerCase()&&a.metaKey&&w.send(JSON.stringify({undo:!0}))};document.body.addEventListener("keydown",(function(){d({key:event.key,event:event})}));var b=function(e){var c=e.row,o=e.col;t.value[n.value].focus={row:c,col:o},w.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:o}}}))},v=function(){w.send(JSON.stringify({newGame:!0}))};return{selfFocus:l,sudokuObj:c,newGame:v,handleInput:d,handleClick:b,inputs:s,color:e,id:n,checkFocus:a,users:t,notating:r,highlightNumbers:u}}};t("9cdc");m.render=i;var M=m;Object(n["a"])(M).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.35069c18.js.map