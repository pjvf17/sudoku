(function(e){function c(c){for(var n,o,u=c[0],l=c[1],s=c[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,u=1;u<t.length;u++){var l=t[u];0!==r[l]&&(n=!1)}n&&(a.splice(c--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},a=[];function o(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,c,t){o.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,c){if(1&c&&(e=o(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)o.d(t,n,function(c){return e[c]}.bind(null,n));return t},o.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(c,"a",c),c},o.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var s=0;s<u.length;s++)c(u[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),r=(t("99af"),t("fb6a"),t("5c40")),a=t("9ff4"),o={id:"app"},u={class:"pane"},l={class:"inputReplacement"},s={key:1,"dominant-baseline":"middle","text-anchor":"middle"},i={class:"notation-text",style:{color:"white"}};function d(e,c){return Object(r["q"])(),Object(r["e"])("div",o,[Object(r["i"])("div",u,[Object(r["i"])("table",null,[Object(r["i"])("tbody",null,[(Object(r["q"])(),Object(r["e"])(r["b"],null,Object(r["r"])(9,(function(c){return Object(r["i"])("tr",{key:c},[(Object(r["q"])(),Object(r["e"])(r["b"],null,Object(r["r"])(9,(function(t){return Object(r["i"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(r["q"])(),Object(r["e"])("svg",l,[Object(r["i"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(a["E"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),(Object(r["q"])(!0),Object(r["e"])(r["b"],null,Object(r["r"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks,(function(n,o){return Object(r["q"])(),Object(r["e"])("g",{key:o},[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[o]&&""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["q"])(),Object(r["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==o+1}],cy:9+22*Math.floor(o/3),cx:8.5+o%3*22,r:"8"},null,10,["cy","cx"])):Object(r["f"])("",!0),""==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["q"])(),Object(r["e"])("text",s,[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[o]?(Object(r["q"])(),Object(r["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(o/3),x:8+o%3*22},Object(a["E"])(o+1),9,["y","x"])):Object(r["f"])("",!0)])):Object(r["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(r["i"])("span",i,Object(a["E"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(r["i"])("button",{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},"Start New Game"),Object(r["i"])("button",{onClick:c[2]||(c[2]=function(c){return e.firstPassCandidateCalculator()}),class:"button"},"Fill In Candidates")])])}t("caad");var p,b=t("a1e9"),f=(t("4de4"),t("4160"),t("a630"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b"),t("2909")),v=Object(b["h"])({}),O=function(e){v=e},j=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]=[];for(var t=1;t<=9;t++)e["r".concat(c)].push(v.value.puzzle["r".concat(c,"c").concat(t)])}return e})),z=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]=[];for(var t=1;t<=9;t++)e["c".concat(c)].push(v.value.puzzle["r".concat(t,"c").concat(c)])}return e})),h=function(e){var c,t=[1,2,3],n=[4,5,6],r=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=r),"s".concat(c[Math.floor((e.address.c-1)/3)])},k=Object(r["d"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[h(v.value.puzzle["r".concat(c,"c").concat(t)])].push(v.value.puzzle["r".concat(c,"c").concat(t)]);return e})),m=function(e){var c,t,n=[];return c=j.value["r".concat(e.address.r)],t=z.value["c".concat(e.address.c)],n=k.value[h(e)],{row:c,col:t,square:n}},y=function(e){if(e.given)return e;for(var c=m(e),t=c.row,n=c.col,r=c.square,a=[].concat(Object(f["a"])(t),Object(f["a"])(n),Object(f["a"])(r)),o=!0,u=0;u<a.length;u++)if(a[u].address!=e.address&&a[u].number==e.number&&(o=!1,e.valid.value=!1),!o)break;return o&&(e.valid.value=!0),e},g=function(){var e=j.value,c=z.value,t=k.value;for(var n in v.value.puzzle)Object.prototype.hasOwnProperty.call(v.value.puzzle,n)&&(v.value.puzzle[n].candidates=[]);for(var r=0;r<3;r++){var a=void 0;switch(r){case 0:a=e;break;case 1:a=c;break;case 2:a=t;break}var o=function(e){var c=a[e],t=Object.values(a[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var o=function(e){if(""==c[e].number){var t=0==r?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var u in c)o(u)};for(var u in a)o(u)}var l=function(e){Object.prototype.hasOwnProperty.call(v.value.puzzle,e)&&v.value.puzzle[e].candidates.forEach((function(c){v.value.puzzle[e].pencilMarks[c-1]=!0}))};for(var s in v.value.puzzle)l(s);console.log(Object(b["l"])(v.value.puzzle))},w=t("5530"),M={sudokuObj:Object(b["h"])({}),users:Object(b["h"])({}),setPuzzle:function(e){this.sudokuObj=e,O(e)},setUsers:function(e){console.log(Object(b["l"])(e.value)),this.users=e},updateNumber:function(e,c){var t=e.numberUpdate;console.log(c),console.log(this.users);var n=t.address,r=t.number;console.log(r);var a=Object(w["a"])({},this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]);this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].number=r,this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]=y(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]),t.number=a.updateNumber,this.users.value[c].moves.push({numberUpdate:t})},updatePencilMarks:function(e,c){var t=e.pencilMarkUpdate,n=t.address,r=t.pencilMark,a=t.pencilMarks,o=Object(f["a"])(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks);"delete"==r||a?this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks=a||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1]=!this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1],t.pencilMarks=o,this.users.value[c].moves.push({pencilMarkUpdate:t})},undo:function(e){var c=this.users[e].value.moves.pop();c.numberUpdate?this.updateNumber(c.numberUpdate,e):c.pencilMarkUpdate&&this.updatePencilMarks(c.pencilMarkUpdate,e)}},U=M;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var N=null!==(p=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==p?p:"ws://tealog.xyz:8010";console.log(N);var P=new WebSocket(N),S={setup:function(){Object(r["m"])((function(){P.close(1e3,"logging off")})),P.onopen=function(){console.log("connection established")};var e=Object(b["h"])({}),c=Object(b["h"])({}),t=Object(b["h"])({}),n=Object(b["h"])({}),a=Object(b["h"])(!1);P.onmessage=function(r){var a=r.data,o=JSON.parse(a),u=o.color,l=o.sudokuObj,s=o.id,i=o.users,d=o.focusUpdate,p=o.numberUpdate,b=o.pencilMarkUpdate,f=l||{},v=f.puzzle,j=f.sentRows,z=f.sentCols,h=f.sentSquares;if(l&&(c.value.puzzle=v,c.value.rows=j,c.value.cols=z,c.value.squares=h,O(c),U.setPuzzle(c)),i&&(console.log(i),t.value=i,U.setUsers(t)),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),s&&(n.value=s),d){var k=d.id,m=d.focus;t.value[k].focus=m}p&&(console.log(p),U.updateNumber({numberUpdate:p},p.id)),b&&U.updatePencilMarks({pencilMarkUpdate:b},b.id)};var o=Object(r["d"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),u=Object(r["d"])((function(){var e=t.value[n.value],r=null;return null!=e.focus.row&&""!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(r=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),r})),l=Object(r["d"])((function(){return t.value[n.value].focus})),s=Object(b["h"])({});Object(r["n"])((function(){s.value={}}));var i=function(e,c,r,a){e+=r,c+=a,e>9||c>9||e<1||c<1||(s.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},P.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},d=function(e){var r=e.key,o=e.event,u=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,d=s.row,p=s.col;if(null==d||null==p)return d=1,p=1,t.value[n.value].focus={row:d,col:p},void P.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:d,col:p}}}));if(!c.value.puzzle["r".concat(d,"c").concat(p)].given&&u.includes(r))if(o.preventDefault(),a.value){var b=c.value.puzzle["r".concat(d,"c").concat(p)].address,f={address:b,pencilMark:r};U.updatePencilMarks({pencilMarkUpdate:f},n.value),P.send(JSON.stringify({pencilMarkUpdate:f}))}else{var v=c.value.puzzle["r".concat(d,"c").concat(p)].address,O={address:v,number:r};U.updateNumber({numberUpdate:O},n.value),P.send(JSON.stringify({numberUpdate:O}))}else if("Backspace"==r)if(o.preventDefault(),a.value){var j=c.value.puzzle["r".concat(d,"c").concat(p)].address,z={address:j,pencilMark:"delete"};U.updatePencilMarks({pencilMarkUpdate:z},n.value),P.send(JSON.stringify({pencilMarkUpdate:z}))}else{var h=c.value.puzzle["r".concat(d,"c").concat(p)].address,k={address:h,number:""};U.updateNumber({numberUpdate:k},n.value),P.send(JSON.stringify({numberUpdate:k}))}else if(l.includes(r))switch(o.preventDefault(),r){case"ArrowRight":i(d,p,0,1,"row");break;case"ArrowLeft":i(d,p,0,-1,"row");break;case"ArrowDown":i(d,p,1,0,"col");break;case"ArrowUp":i(d,p,-1,0,"col");break}else"Shift"==r?a.value=!a.value:"z"==r.toLowerCase()&&o.metaKey&&P.send(JSON.stringify({undo:!0}))};document.body.addEventListener("keydown",(function(){d({key:event.key,event:event})}));var p=function(e){var c=e.row,r=e.col;t.value[n.value].focus={row:c,col:r},P.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:r}}}))},f=function(){P.send(JSON.stringify({newGame:!0}))};return{selfFocus:l,sudokuObj:c,newGame:f,handleInput:d,handleClick:p,inputs:s,color:e,id:n,checkFocus:o,users:t,notating:a,highlightNumbers:u,firstPassCandidateCalculator:g}}};t("9cdc");S.render=d;var x=S;Object(n["a"])(x).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.ec9683b6.js.map