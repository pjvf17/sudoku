(function(e){function c(c){for(var n,o,u=c[0],l=c[1],s=c[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==r[l]&&(n=!1)}n&&(a.splice(c--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},a=[];function o(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,c,t){o.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,c){if(1&c&&(e=o(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)o.d(t,n,function(c){return e[c]}.bind(null,n));return t},o.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(c,"a",c),c},o.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),r=(t("99af"),t("fb6a"),t("5c40")),a={id:"app"},o={class:"pane"},u={class:"inputReplacement"},l={key:0,"dominant-baseline":"middle","text-anchor":"middle"},s={class:"notation-text",style:{color:"white"}};function i(e,c){return Object(r["q"])(),Object(r["f"])("div",a,[Object(r["j"])("div",o,[Object(r["j"])("table",null,[Object(r["j"])("tbody",null,[(Object(r["q"])(),Object(r["f"])(r["b"],null,Object(r["r"])(9,(function(c){return Object(r["j"])("tr",{key:c},[(Object(r["q"])(),Object(r["f"])(r["b"],null,Object(r["r"])(9,(function(t){return Object(r["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(r["q"])(),Object(r["f"])("svg",u,[Object(r["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(r["u"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),(Object(r["q"])(!0),Object(r["f"])(r["b"],null,Object(r["r"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks,(function(n,a){return Object(r["q"])(),Object(r["f"])("g",{key:a},[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[a]&&""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["q"])(),Object(r["f"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==a+1}],cy:9+22*Math.floor(a/3),cx:8.5+a%3*22,r:"8"},null,10,["cy","cx"])):Object(r["g"])("",!0),""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["q"])(),Object(r["f"])("text",l,[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[a]?(Object(r["q"])(),Object(r["f"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(a/3),x:8+a%3*22},Object(r["u"])(a+1),9,["y","x"])):Object(r["g"])("",!0)])):Object(r["g"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(r["j"])("span",s,Object(r["u"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(r["j"])("button",{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},"Start New Game"),Object(r["j"])("button",{onClick:c[2]||(c[2]=function(c){return e.firstPassCandidateCalculator()}),class:"button"},"Fill In Candiadtes?")])])}t("caad");var d,f=t("a1e9"),b=(t("4de4"),t("4160"),t("a630"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b"),t("2909")),p=Object(f["h"])({}),v=function(e){p=e},O=Object(r["e"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]=[];for(var t=1;t<=9;t++)e["r".concat(c)].push(p.value.puzzle["r".concat(c,"c").concat(t)])}return e})),j=Object(r["e"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]=[];for(var t=1;t<=9;t++)e["c".concat(c)].push(p.value.puzzle["r".concat(t,"c").concat(c)])}return e})),k=function(e){var c,t=[1,2,3],n=[4,5,6],r=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=r),"s".concat(c[Math.floor((e.address.c-1)/3)])},z=Object(r["e"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[k(p.value.puzzle["r".concat(c,"c").concat(t)])].push(p.value.puzzle["r".concat(c,"c").concat(t)]);return e})),h=function(e){var c,t,n=[];return c=O.value["r".concat(e.address.r)],t=j.value["c".concat(e.address.c)],n=z.value[k(e)],{row:c,col:t,square:n}},m=function(e){if(e.given)return e;for(var c=h(e),t=c.row,n=c.col,r=c.square,a=[].concat(Object(b["a"])(t),Object(b["a"])(n),Object(b["a"])(r)),o=!0,u=0;u<a.length;u++)if(a[u].address!=e.address&&a[u].number==e.number&&(o=!1,e.valid.value=!1),!o)break;return o&&(e.valid.value=!0),e},y=function(){var e=O,c=j,t=z;for(var n in p.value.puzzle)p.value.puzzle.hasOwnProperty.call(n)&&(p.value.puzzle[n].candidates=[]);for(var r=0;r<3;r++){var a=void 0;switch(r){case 0:a=e;break;case 1:a=c;break;case 2:a=t;break}var o=function(e){var c=a[e],t=Object.values(a[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var o=function(e){if(""==c[e].number){var t=0==r?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var u in c)o(u)};for(var u in a)o(u)}console.log(Object(f["l"])(p.value.puzzle))},g={sudokuObj:Object(f["h"])({}),setPuzzle:function(e){this.sudokuObj=e,v(e)},updateNumber:function(e){var c=e.numberUpdate,t=c.address,n=c.number;this.sudokuObj.value.puzzle["r".concat(t.r,"c").concat(t.c)].number=n,this.sudokuObj.value.puzzle["r".concat(t.r,"c").concat(t.c)]=m(this.sudokuObj.value.puzzle["r".concat(t.r,"c").concat(t.c)])},updatePencilMarks:function(e){var c=e.pencilMarkUpdate,t=c.address,n=c.pencilMark;"delete"!=n?this.sudokuObj.value.puzzle["r".concat(t.r,"c").concat(t.c)].pencilMarks[n-1]=!this.sudokuObj.value.puzzle["r".concat(t.r,"c").concat(t.c)].pencilMarks[n-1]:this.sudokuObj.value.puzzle["r".concat(t.r,"c").concat(t.c)].pencilMarks=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}},w=g;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var M=null!==(d=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==d?d:"ws://tealog.xyz:8010";console.log(M);var N=new WebSocket(M),U={setup:function(){Object(r["n"])((function(){N.close(1e3,"logging off")})),N.onopen=function(){console.log("connection established")};var e=Object(f["h"])({}),c=Object(f["h"])({}),t=Object(f["h"])({}),n=Object(f["h"])({}),a=Object(f["h"])(!1);N.onmessage=function(r){var a=r.data,o=JSON.parse(a),u=o.color,l=o.sudokuObj,s=o.id,i=o.users,d=o.focusUpdate,f=o.numberUpdate,b=o.pencilMarkUpdate,p=l||{},O=p.puzzle,j=p.sentRows,k=p.sentCols,z=p.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=j,c.value.cols=k,c.value.squares=z,v(c),w.setPuzzle(c)),i&&(t.value=i),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),d){var h=d.id,m=d.focus;t.value[h].focus=m}f&&w.updateNumber({numberUpdate:f}),b&&w.updatePencilMarks({pencilMarkUpdate:b})};var o=Object(r["e"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),u=Object(r["e"])((function(){var e=t.value[n.value],r=null;return null!=e.focus.row&&""!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(r=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),r})),l=Object(r["e"])((function(){return t.value[n.value].focus})),s=Object(f["h"])({});Object(r["o"])((function(){s.value={}}));var i=function(e,c,r,a){e+=r,c+=a,e>9||c>9||e<1||c<1||(s.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},N.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},d=function(e){var r=e.key,o=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,d=s.row,f=s.col;if(null==d||null==f)return d=1,f=1,t.value[n.value].focus={row:d,col:f},void N.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:d,col:f}}}));if(!c.value.puzzle["r".concat(d,"c").concat(f)].given&&u.includes(r))if(o.preventDefault(),a.value){var b=c.value.puzzle["r".concat(d,"c").concat(f)].address,p={address:b,pencilMark:r};w.updatePencilMarks({pencilMarkUpdate:p}),N.send(JSON.stringify({pencilMarkUpdate:p}))}else{var v=c.value.puzzle["r".concat(d,"c").concat(f)].address,O={address:v,number:r};w.updateNumber({numberUpdate:O}),N.send(JSON.stringify({numberUpdate:O}))}else if("Backspace"==r)if(o.preventDefault(),a.value){var j=c.value.puzzle["r".concat(d,"c").concat(f)].address,k={address:j,pencilMark:"delete"};w.updatePencilMarks({pencilMarkUpdate:k}),N.send(JSON.stringify({pencilMarkUpdate:k}))}else{var z=c.value.puzzle["r".concat(d,"c").concat(f)].address,h={address:z,number:""};w.updateNumber({numberUpdate:h}),N.send(JSON.stringify({numberUpdate:h}))}else if(l.includes(r))switch(o.preventDefault(),r){case"ArrowRight":i(d,f,0,1,"row");break;case"ArrowLeft":i(d,f,0,-1,"row");break;case"ArrowDown":i(d,f,1,0,"col");break;case"ArrowUp":i(d,f,-1,0,"col");break}else"Shift"==r?a.value=!a.value:"z"==r.toLowerCase()&&o.metaKey&&N.send(JSON.stringify({undo:!0}))};document.body.addEventListener("keydown",(function(){d({key:event.key,event:event})}));var b=function(e){var c=e.row,r=e.col;t.value[n.value].focus={row:c,col:r},N.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:r}}}))},p=function(){N.send(JSON.stringify({newGame:!0}))};return{selfFocus:l,sudokuObj:c,newGame:p,handleInput:d,handleClick:b,inputs:s,color:e,id:n,checkFocus:o,users:t,notating:a,highlightNumbers:u,firstPassCandidateCalculator:y}}};t("9cdc");U.render=i;var S=U;Object(n["a"])(S).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.4e81d62c.js.map