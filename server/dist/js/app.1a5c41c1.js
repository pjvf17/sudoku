(function(e){function c(c){for(var n,u,o=c[0],l=c[1],s=c[2],d=0,p=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,o=1;o<t.length;o++){var l=t[o];0!==r[l]&&(n=!1)}n&&(a.splice(c--,1),e=u(u.s=t[0]))}return e}var n={},r={app:0},a=[];function u(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,c,t){u.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,c){if(1&c&&(e=u(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)u.d(t,n,function(c){return e[c]}.bind(null,n));return t},u.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(c,"a",c),c},u.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=c,o=o.slice();for(var s=0;s<o.length;s++)c(o[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},3395:function(e,c,t){"use strict";t("fdf4")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),r=(t("99af"),t("fb6a"),t("5c40")),a=t("9ff4"),u={class:"pane"},o={class:"inputReplacement"},l={key:1,"dominant-baseline":"middle","text-anchor":"middle"},s={class:"notation-text",style:{color:"white"}},i=Object(r["i"])("Start New Game"),d={key:0,class:"popup",ref:"popup"},p=Object(r["j"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),f={class:"actions"},b=Object(r["i"])("Start new game"),v=Object(r["i"])("Take me back"),O=Object(r["i"])("Fill In Candidates");function j(e,c){var t=Object(r["u"])("BaseButton");return Object(r["r"])(),Object(r["e"])("div",{id:"app",onClick:c[5]||(c[5]=function(c){return e.closePopup(c)})},[Object(r["j"])("div",u,[Object(r["j"])("table",null,[Object(r["j"])("tbody",null,[(Object(r["r"])(),Object(r["e"])(r["b"],null,Object(r["s"])(9,(function(c){return Object(r["j"])("tr",{key:c},[(Object(r["r"])(),Object(r["e"])(r["b"],null,Object(r["s"])(9,(function(t){return Object(r["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(r["r"])(),Object(r["e"])("svg",o,[Object(r["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(a["E"])("."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?"":e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),(Object(r["r"])(!0),Object(r["e"])(r["b"],null,Object(r["s"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks,(function(n,u){return Object(r["r"])(),Object(r["e"])("g",{key:u},[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[u]&&"."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["r"])(),Object(r["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==u+1}],cy:9+22*Math.floor(u/3),cx:8.5+u%3*22,r:"8"},null,10,["cy","cx"])):Object(r["f"])("",!0),"."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["r"])(),Object(r["e"])("text",l,[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[u]?(Object(r["r"])(),Object(r["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(u/3),x:8+u%3*22},Object(a["E"])(u+1),9,["y","x"])):Object(r["f"])("",!0)])):Object(r["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(r["j"])("span",s,Object(a["E"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(r["j"])(t,{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},{default:Object(r["A"])((function(){return[i]})),_:1}),e.checkNew?(Object(r["r"])(),Object(r["e"])("div",d,[p,Object(r["j"])("div",f,[Object(r["j"])(t,{onClick:c[2]||(c[2]=function(c){return e.newGame(!0)}),class:"yes"},{default:Object(r["A"])((function(){return[b]})),_:1}),Object(r["j"])(t,{onClick:c[3]||(c[3]=function(c){return e.checkNew=!1}),class:"no"},{default:Object(r["A"])((function(){return[v]})),_:1})])],512)):Object(r["f"])("",!0),Object(r["j"])(t,{onClick:c[4]||(c[4]=function(c){return e.firstPassCandidateCalculator()}),class:"button"},{default:Object(r["A"])((function(){return[O]})),_:1})])])}t("caad");var k=Object(r["B"])("data-v-3edb63c8"),h=k((function(e,c){return Object(r["r"])(),Object(r["e"])("button",{onClick:c[1]||(c[1]=function(c){return e.$emit("click",c)})},[Object(r["t"])(e.$slots,"default")])}));t("3395");const z={};z.render=h,z.__scopeId="data-v-3edb63c8";var m,y,w=z,g=t("a1e9"),M=(t("4de4"),t("4160"),t("a630"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b"),t("2909")),U=Object(g["h"])({}),N=Object(g["h"])({}),P=function(e){U=e},S=function(e){N=e},A=function(e){m=e},_=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]=[];for(var t=1;t<=9;t++)e["r".concat(c)].push(U.value.puzzle["r".concat(c,"c").concat(t)])}return e})),E=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]=[];for(var t=1;t<=9;t++)e["c".concat(c)].push(U.value.puzzle["r".concat(t,"c").concat(c)])}return e})),x=function(e){var c,t=[1,2,3],n=[4,5,6],r=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=r),"s".concat(c[Math.floor((e.address.c-1)/3)])},C=Object(r["d"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[x(U.value.puzzle["r".concat(c,"c").concat(t)])].push(U.value.puzzle["r".concat(c,"c").concat(t)]);return e})),J=function(e){var c,t,n=[];return c=_.value["r".concat(e.address.r)],t=E.value["c".concat(e.address.c)],n=C.value[x(e)],{row:c,col:t,square:n}},B=function(e){if(e.given)return e;for(var c=J(e),t=c.row,n=c.col,r=c.square,a=[].concat(Object(M["a"])(t),Object(M["a"])(n),Object(M["a"])(r)),u=!0,o=0;o<a.length;o++)if(a[o].address!=e.address&&a[o].number==e.number&&(u=!1,e.valid.value=!1),!u)break;return u&&(e.valid.value=!0),e},L=function(){var e=_.value,c=E.value,t=C.value;for(var n in U.value.puzzle)Object.prototype.hasOwnProperty.call(U.value.puzzle,n)&&(U.value.puzzle[n].candidates=[]);for(var r=0;r<3;r++){var a=void 0;switch(r){case 0:a=e;break;case 1:a=c;break;case 2:a=t;break}var u=function(e){var c=a[e],t=Object.values(a[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var u=function(e){if("."==c[e].number){var t=0==r?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var o in c)u(o)};for(var o in a)u(o)}var l=function(e){Object.prototype.hasOwnProperty.call(U.value.puzzle,e)&&(U.value.puzzle[e].pencilMarks=Array.from({length:9},(function(){return!1})),U.value.puzzle[e].candidates.forEach((function(c){U.value.puzzle[e].pencilMarks[c-1]=!0;var t={address:U.value.puzzle[e].address,pencilMark:c,id:N.value};m.send(JSON.stringify({pencilMarkUpdate:t}))})))};for(var s in U.value.puzzle)l(s)},R=t("5530"),D={sudokuObj:Object(g["h"])({}),users:Object(g["h"])({}),setPuzzle:function(e){this.sudokuObj=e,P(e)},setUsers:function(e){this.users=e},updateNumber:function(e,c){var t=e.numberUpdate,n=t.address,r=t.number,a=t.id,u=Object(R["a"])({},this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]);if(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].number=r,this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]=B(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]),!c){var o=Object(R["a"])({},t);o.number=u.number,this.users.value[a].moves.push({numberUpdate:o})}},updatePencilMarks:function(e,c){var t=e.pencilMarkUpdate,n=t.address,r=t.pencilMark,a=t.pencilMarks,u=t.id,o=Object(M["a"])(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==r||a?this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks=a||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1]=!this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1],!c){var l=Object(R["a"])({},t);l.pencilMarks=o,this.users.value[u].moves.push({pencilMarkUpdate:l})}},undo:function(e){var c=this.users.value[e].moves.pop();c.numberUpdate?this.updateNumber({numberUpdate:c.numberUpdate},!0):c.pencilMarkUpdate&&this.updatePencilMarks({pencilMarkUpdate:c.pencilMarkUpdate},!0)}},F=D;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var G=null!==(y=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==y?y:"ws://tealog.xyz:8010";console.log(G);var q=new WebSocket(G),I={setup:function(){Object(r["n"])((function(){q.close(1e3,"logging off")})),q.onopen=function(){console.log("connection established"),A(q)};var e=Object(g["h"])({}),c=Object(g["h"])({}),t=Object(g["h"])({}),n=Object(g["h"])({}),a=Object(g["h"])(!1);q.onmessage=function(r){var a=r.data,u=JSON.parse(a),o=u.color,l=u.sudokuObj,s=u.id,i=u.users,d=u.focusUpdate,p=u.numberUpdate,f=u.pencilMarkUpdate,b=u.undo,v=l||{},O=v.puzzle,j=v.sentRows,k=v.sentCols,h=v.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=j,c.value.cols=k,c.value.squares=h,P(c),F.setPuzzle(c)),i&&(t.value=i,F.setUsers(t)),o&&(e.value=o,document.documentElement.style.setProperty("--color","".concat(o))),s&&(n.value=s,S(n)),d){var z=d.id,m=d.focus;t.value[z].focus=m}p&&F.updateNumber({numberUpdate:p}),f&&F.updatePencilMarks({pencilMarkUpdate:f}),b&&F.undo(b)};var u=Object(r["d"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),o=Object(r["d"])((function(){var e=t.value[n.value],r=null;return null!=e.focus.row&&"."!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(r=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),r})),l=Object(r["d"])((function(){return t.value[n.value].focus})),s=Object(g["h"])({});Object(r["o"])((function(){s.value={}}));var i=function(e,c,r,a){e+=r,c+=a,e>9||c>9||e<1||c<1||(s.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},q.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},d=function(e){var r=e.key,u=e.event,o=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,d=s.row,p=s.col;if(null==d||null==p)return d=1,p=1,t.value[n.value].focus={row:d,col:p},void q.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:d,col:p}}}));if(!c.value.puzzle["r".concat(d,"c").concat(p)].given&&o.includes(r))if(u.preventDefault(),a.value){var f=c.value.puzzle["r".concat(d,"c").concat(p)].address,b={address:f,pencilMark:r,id:n.value};F.updatePencilMarks({pencilMarkUpdate:b}),q.send(JSON.stringify({pencilMarkUpdate:b}))}else{var v=c.value.puzzle["r".concat(d,"c").concat(p)].address,O={address:v,number:r,id:n.value};F.updateNumber({numberUpdate:O}),q.send(JSON.stringify({numberUpdate:O}))}else if("Backspace"==r)if(u.preventDefault(),a.value){var j=c.value.puzzle["r".concat(d,"c").concat(p)].address,k={address:j,pencilMark:"delete",id:n.value};F.updatePencilMarks({pencilMarkUpdate:k}),q.send(JSON.stringify({pencilMarkUpdate:k}))}else{var h=c.value.puzzle["r".concat(d,"c").concat(p)].address,z={address:h,number:"",id:n.value};F.updateNumber({numberUpdate:z}),q.send(JSON.stringify({numberUpdate:z}))}else if(l.includes(r))switch(u.preventDefault(),r){case"ArrowRight":i(d,p,0,1,"row");break;case"ArrowLeft":i(d,p,0,-1,"row");break;case"ArrowDown":i(d,p,1,0,"col");break;case"ArrowUp":i(d,p,-1,0,"col");break}else"Shift"==r?a.value=!a.value:"z"==r.toLowerCase()&&u.metaKey&&(F.undo(n.value),q.send(JSON.stringify({undo:n.value})))};document.body.addEventListener("keydown",(function(){d({key:event.key,event:event})}));var p=function(e){var c=e.row,r=e.col;t.value[n.value].focus={row:c,col:r},q.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:r}}}))},f=Object(g["h"])(null),b=Object(g["h"])(!1),v=function(e){console.log(!(e.target==f.value||e.target.parentElement==f.value||e.target.parentElement.parentElement==f.value)),e.target!=f.value&&e.target.parentElement!=f.value&&e.target.parentElement.parentElement!=f.value&&(b.value=!1)},O=function(e){e?(q.send(JSON.stringify({newGame:!0})),b.value=!1):b.value=!0};return{popup:f,closePopup:v,checkNew:b,selfFocus:l,sudokuObj:c,newGame:O,handleInput:d,handleClick:p,inputs:s,color:e,id:n,checkFocus:u,users:t,notating:a,highlightNumbers:o,firstPassCandidateCalculator:L}},components:{BaseButton:w}};t("9cdc");I.render=j;var T=I;Object(n["a"])(T).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")},fdf4:function(e,c,t){}});
//# sourceMappingURL=app.1a5c41c1.js.map