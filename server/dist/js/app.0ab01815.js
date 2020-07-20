(function(e){function c(c){for(var n,u,o=c[0],l=c[1],s=c[2],d=0,p=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(p.length)p.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,c=0;c<r.length;c++){for(var t=r[c],n=!0,o=1;o<t.length;o++){var l=t[o];0!==a[l]&&(n=!1)}n&&(r.splice(c--,1),e=u(u.s=t[0]))}return e}var n={},a={app:0},r=[];function u(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,c,t){u.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,c){if(1&c&&(e=u(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)u.d(t,n,function(c){return e[c]}.bind(null,n));return t},u.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(c,"a",c),c},u.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=c,o=o.slice();for(var s=0;s<o.length;s++)c(o[s]);var i=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),a=(t("99af"),t("fb6a"),t("5c40")),r=t("9ff4"),u={id:"app"},o={class:"pane"},l={class:"inputReplacement"},s={key:1,"dominant-baseline":"middle","text-anchor":"middle"},i={class:"notation-text",style:{color:"white"}},d={key:0,class:"popup"},p=Object(a["i"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),b=Object(a["i"])("div",{class:"actions"},[Object(a["i"])("button",{class:"yes"},"Start New Game"),Object(a["i"])("button",{class:"no"},"Take me back to my game")],-1);function f(e,c){return Object(a["q"])(),Object(a["e"])("div",u,[Object(a["i"])("div",o,[Object(a["i"])("table",null,[Object(a["i"])("tbody",null,[(Object(a["q"])(),Object(a["e"])(a["b"],null,Object(a["r"])(9,(function(c){return Object(a["i"])("tr",{key:c},[(Object(a["q"])(),Object(a["e"])(a["b"],null,Object(a["r"])(9,(function(t){return Object(a["i"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(a["q"])(),Object(a["e"])("svg",l,[Object(a["i"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(r["E"])("."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?"":e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),(Object(a["q"])(!0),Object(a["e"])(a["b"],null,Object(a["r"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks,(function(n,u){return Object(a["q"])(),Object(a["e"])("g",{key:u},[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[u]&&"."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(a["q"])(),Object(a["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==u+1}],cy:9+22*Math.floor(u/3),cx:8.5+u%3*22,r:"8"},null,10,["cy","cx"])):Object(a["f"])("",!0),"."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(a["q"])(),Object(a["e"])("text",s,[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[u]?(Object(a["q"])(),Object(a["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(u/3),x:8+u%3*22},Object(r["E"])(u+1),9,["y","x"])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(a["i"])("span",i,Object(r["E"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(a["i"])("button",{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},"Start New Game"),e.checkNew?(Object(a["q"])(),Object(a["e"])("div",d,[p,b])):Object(a["f"])("",!0),Object(a["i"])("button",{onClick:c[2]||(c[2]=function(c){return e.firstPassCandidateCalculator()}),class:"button"},"Fill In Candidates")])])}t("caad");var v,O,j=t("a1e9"),k=(t("4de4"),t("4160"),t("a630"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b"),t("2909")),h=Object(j["h"])({}),z=Object(j["h"])({}),m=function(e){h=e},y=function(e){z=e},w=function(e){v=e},g=Object(a["d"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]=[];for(var t=1;t<=9;t++)e["r".concat(c)].push(h.value.puzzle["r".concat(c,"c").concat(t)])}return e})),M=Object(a["d"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]=[];for(var t=1;t<=9;t++)e["c".concat(c)].push(h.value.puzzle["r".concat(t,"c").concat(c)])}return e})),U=function(e){var c,t=[1,2,3],n=[4,5,6],a=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=a),"s".concat(c[Math.floor((e.address.c-1)/3)])},N=Object(a["d"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[U(h.value.puzzle["r".concat(c,"c").concat(t)])].push(h.value.puzzle["r".concat(c,"c").concat(t)]);return e})),P=function(e){var c,t,n=[];return c=g.value["r".concat(e.address.r)],t=M.value["c".concat(e.address.c)],n=N.value[U(e)],{row:c,col:t,square:n}},S=function(e){if(e.given)return e;for(var c=P(e),t=c.row,n=c.col,a=c.square,r=[].concat(Object(k["a"])(t),Object(k["a"])(n),Object(k["a"])(a)),u=!0,o=0;o<r.length;o++)if(r[o].address!=e.address&&r[o].number==e.number&&(u=!1,e.valid.value=!1),!u)break;return u&&(e.valid.value=!0),e},x=function(){var e=g.value,c=M.value,t=N.value;for(var n in h.value.puzzle)Object.prototype.hasOwnProperty.call(h.value.puzzle,n)&&(h.value.puzzle[n].candidates=[]);for(var a=0;a<3;a++){var r=void 0;switch(a){case 0:r=e;break;case 1:r=c;break;case 2:r=t;break}var u=function(e){var c=r[e],t=Object.values(r[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var u=function(e){if("."==c[e].number){var t=0==a?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var o in c)u(o)};for(var o in r)u(o)}var l=function(e){Object.prototype.hasOwnProperty.call(h.value.puzzle,e)&&(h.value.puzzle[e].pencilMarks=Array.from({length:9},(function(){return!1})),h.value.puzzle[e].candidates.forEach((function(c){h.value.puzzle[e].pencilMarks[c-1]=!0;var t={address:h.value.puzzle[e].address,pencilMark:c,id:z.value};v.send(JSON.stringify({pencilMarkUpdate:t}))})))};for(var s in h.value.puzzle)l(s)},A=t("5530"),_={sudokuObj:Object(j["h"])({}),users:Object(j["h"])({}),setPuzzle:function(e){this.sudokuObj=e,m(e)},setUsers:function(e){this.users=e},updateNumber:function(e,c){var t=e.numberUpdate,n=t.address,a=t.number,r=t.id,u=Object(A["a"])({},this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]);if(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].number=a,this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]=S(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]),!c){var o=Object(A["a"])({},t);o.number=u.number,this.users.value[r].moves.push({numberUpdate:o})}},updatePencilMarks:function(e,c){var t=e.pencilMarkUpdate,n=t.address,a=t.pencilMark,r=t.pencilMarks,u=t.id,o=Object(k["a"])(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==a||r?this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks=r||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[a-1]=!this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[a-1],!c){var l=Object(A["a"])({},t);l.pencilMarks=o,this.users.value[u].moves.push({pencilMarkUpdate:l})}},undo:function(e){var c=this.users.value[e].moves.pop();c.numberUpdate?this.updateNumber({numberUpdate:c.numberUpdate},!0):c.pencilMarkUpdate&&this.updatePencilMarks({pencilMarkUpdate:c.pencilMarkUpdate},!0)}},E=_;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var q=null!==(O=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==O?O:"ws://tealog.xyz:8010";console.log(q);var C=new WebSocket(q),J={setup:function(){Object(a["m"])((function(){C.close(1e3,"logging off")})),C.onopen=function(){console.log("connection established"),w(C)};var e=Object(j["h"])({}),c=Object(j["h"])({}),t=Object(j["h"])({}),n=Object(j["h"])({}),r=Object(j["h"])(!1);C.onmessage=function(a){var r=a.data,u=JSON.parse(r),o=u.color,l=u.sudokuObj,s=u.id,i=u.users,d=u.focusUpdate,p=u.numberUpdate,b=u.pencilMarkUpdate,f=u.undo,v=l||{},O=v.puzzle,j=v.sentRows,k=v.sentCols,h=v.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=j,c.value.cols=k,c.value.squares=h,m(c),E.setPuzzle(c)),i&&(t.value=i,E.setUsers(t)),o&&(e.value=o,document.documentElement.style.setProperty("--color","".concat(o))),s&&(n.value=s,y(n)),d){var z=d.id,w=d.focus;t.value[z].focus=w}p&&E.updateNumber({numberUpdate:p}),b&&E.updatePencilMarks({pencilMarkUpdate:b}),f&&E.undo(f)};var u=Object(a["d"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),o=Object(a["d"])((function(){var e=t.value[n.value],a=null;return null!=e.focus.row&&"."!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(a=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),a})),l=Object(a["d"])((function(){return t.value[n.value].focus})),s=Object(j["h"])({});Object(a["n"])((function(){s.value={}}));var i=function(e,c,a,r){e+=a,c+=r,e>9||c>9||e<1||c<1||(s.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},C.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},d=function(e){var a=e.key,u=e.event,o=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,d=s.row,p=s.col;if(null==d||null==p)return d=1,p=1,t.value[n.value].focus={row:d,col:p},void C.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:d,col:p}}}));if(!c.value.puzzle["r".concat(d,"c").concat(p)].given&&o.includes(a))if(u.preventDefault(),r.value){var b=c.value.puzzle["r".concat(d,"c").concat(p)].address,f={address:b,pencilMark:a,id:n.value};E.updatePencilMarks({pencilMarkUpdate:f}),C.send(JSON.stringify({pencilMarkUpdate:f}))}else{var v=c.value.puzzle["r".concat(d,"c").concat(p)].address,O={address:v,number:a,id:n.value};E.updateNumber({numberUpdate:O}),C.send(JSON.stringify({numberUpdate:O}))}else if("Backspace"==a)if(u.preventDefault(),r.value){var j=c.value.puzzle["r".concat(d,"c").concat(p)].address,k={address:j,pencilMark:"delete",id:n.value};E.updatePencilMarks({pencilMarkUpdate:k}),C.send(JSON.stringify({pencilMarkUpdate:k}))}else{var h=c.value.puzzle["r".concat(d,"c").concat(p)].address,z={address:h,number:"",id:n.value};E.updateNumber({numberUpdate:z}),C.send(JSON.stringify({numberUpdate:z}))}else if(l.includes(a))switch(u.preventDefault(),a){case"ArrowRight":i(d,p,0,1,"row");break;case"ArrowLeft":i(d,p,0,-1,"row");break;case"ArrowDown":i(d,p,1,0,"col");break;case"ArrowUp":i(d,p,-1,0,"col");break}else"Shift"==a?r.value=!r.value:"z"==a.toLowerCase()&&u.metaKey&&(E.undo(n.value),C.send(JSON.stringify({undo:n.value})))};document.body.addEventListener("keydown",(function(){d({key:event.key,event:event})}));var p=function(e){var c=e.row,a=e.col;t.value[n.value].focus={row:c,col:a},C.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:a}}}))},b=Object(j["h"])(!1),f=function(){b.value=!0};return{checkNew:b,selfFocus:l,sudokuObj:c,newGame:f,handleInput:d,handleClick:p,inputs:s,color:e,id:n,checkFocus:u,users:t,notating:r,highlightNumbers:o,firstPassCandidateCalculator:x}}};t("9cdc");J.render=f;var L=J;Object(n["a"])(L).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.0ab01815.js.map