(function(e){function c(c){for(var n,u,o=c[0],l=c[1],s=c[2],d=0,b=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(c);while(b.length)b.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,o=1;o<t.length;o++){var l=t[o];0!==r[l]&&(n=!1)}n&&(a.splice(c--,1),e=u(u.s=t[0]))}return e}var n={},r={app:0},a=[];function u(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,c,t){u.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,c){if(1&c&&(e=u(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)u.d(t,n,function(c){return e[c]}.bind(null,n));return t},u.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(c,"a",c),c},u.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=c,o=o.slice();for(var s=0;s<o.length;s++)c(o[s]);var i=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("56d7")},"40b0":function(e,c,t){},5159:function(e,c,t){"use strict";t("40b0")},"56d7":function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),r=(t("99af"),t("fb6a"),t("5c40")),a=t("9ff4"),u={id:"app"},o={class:"pane"},l={class:"inputReplacement"},s={key:1,"dominant-baseline":"middle","text-anchor":"middle"},i={class:"notation-text",style:{color:"white"}},d={class:"actions"},b=Object(r["i"])("Start New Game"),p={key:0,class:"popup",ref:"popup"},f=Object(r["j"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),v={class:"actions"},O=Object(r["i"])("Start new game"),j=Object(r["i"])("Take me back"),k=Object(r["i"])("Fill In Candidates");function h(e,c){var t=Object(r["u"])("BaseButton");return Object(r["r"])(),Object(r["e"])("div",u,[Object(r["j"])("div",o,[Object(r["j"])("table",null,[Object(r["j"])("tbody",null,[(Object(r["r"])(),Object(r["e"])(r["b"],null,Object(r["s"])(9,(function(c){return Object(r["j"])("tr",{key:c},[(Object(r["r"])(),Object(r["e"])(r["b"],null,Object(r["s"])(9,(function(t){return Object(r["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(r["r"])(),Object(r["e"])("svg",l,[Object(r["j"])("text",{class:[{bold:e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(a["E"])("."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?"":e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number),3),(Object(r["r"])(!0),Object(r["e"])(r["b"],null,Object(r["s"])(e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks,(function(n,u){return Object(r["r"])(),Object(r["e"])("g",{key:u},[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[u]&&"."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["r"])(),Object(r["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==u+1}],cy:9+22*Math.floor(u/3),cx:8.5+u%3*22,r:"8"},null,10,["cy","cx"])):Object(r["f"])("",!0),"."==e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].number?(Object(r["r"])(),Object(r["e"])("text",s,[e.sudokuObj.puzzle["r".concat(c,"c").concat(t)].pencilMarks[u]?(Object(r["r"])(),Object(r["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(u/3),x:8+u%3*22},Object(a["E"])(u+1),9,["y","x"])):Object(r["f"])("",!0)])):Object(r["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(r["j"])("span",i,Object(a["E"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(r["j"])("div",d,[Object(r["j"])(t,{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},{default:Object(r["A"])((function(){return[b]})),_:1}),e.checkNew?(Object(r["r"])(),Object(r["e"])("div",p,[f,Object(r["j"])("div",v,[Object(r["j"])(t,{onMouseup:c[2]||(c[2]=function(c){return e.newGame(!0)}),class:"yes"},{default:Object(r["A"])((function(){return[O]})),_:1}),Object(r["j"])(t,{onClick:c[3]||(c[3]=function(c){return e.checkNew=!1}),class:"no"},{default:Object(r["A"])((function(){return[j]})),_:1})])],512)):Object(r["f"])("",!0),Object(r["j"])(t,{onMouseup:c[4]||(c[4]=function(c){return e.firstPassCandidateCalculator()}),class:"button"},{default:Object(r["A"])((function(){return[k]})),_:1})])])])}t("caad");var z=Object(r["B"])("data-v-0203f82a"),m=z((function(e,c){return Object(r["r"])(),Object(r["e"])("button",{onClick:c[1]||(c[1]=function(c){return e.$emit("click",c)}),onMouseup:c[2]||(c[2]=function(c){return e.$emit("mousup",c)})},[Object(r["t"])(e.$slots,"default")],32)}));t("5159");const y={};y.render=m,y.__scopeId="data-v-0203f82a";var w,g,M=y,U=t("a1e9"),N=(t("4de4"),t("4160"),t("a630"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b"),t("2909")),P=Object(U["h"])({}),S=Object(U["h"])({}),A=function(e){P=e},_=function(e){S=e},E=function(e){w=e},x=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]=[];for(var t=1;t<=9;t++)e["r".concat(c)].push(P.value.puzzle["r".concat(c,"c").concat(t)])}return e})),C=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]=[];for(var t=1;t<=9;t++)e["c".concat(c)].push(P.value.puzzle["r".concat(t,"c").concat(c)])}return e})),J=function(e){var c,t=[1,2,3],n=[4,5,6],r=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=r),"s".concat(c[Math.floor((e.address.c-1)/3)])},L=Object(r["d"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[J(P.value.puzzle["r".concat(c,"c").concat(t)])].push(P.value.puzzle["r".concat(c,"c").concat(t)]);return e})),B=function(e){var c,t,n=[];return c=x.value["r".concat(e.address.r)],t=C.value["c".concat(e.address.c)],n=L.value[J(e)],{row:c,col:t,square:n}},R=function(e){if(e.given)return e;for(var c=B(e),t=c.row,n=c.col,r=c.square,a=[].concat(Object(N["a"])(t),Object(N["a"])(n),Object(N["a"])(r)),u=!0,o=0;o<a.length;o++)if(a[o].address!=e.address&&a[o].number==e.number&&(u=!1,e.valid.value=!1),!u)break;return u&&(e.valid.value=!0),e},D=function(){console.log("firstPassCandidateCalculator");var e=x.value,c=C.value,t=L.value;for(var n in P.value.puzzle)Object.prototype.hasOwnProperty.call(P.value.puzzle,n)&&(P.value.puzzle[n].candidates=[]);for(var r=0;r<3;r++){var a=void 0;switch(r){case 0:a=e;break;case 1:a=c;break;case 2:a=t;break}var u=function(e){var c=a[e],t=Object.values(a[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var u=function(e){if("."==c[e].number){var t=0==r?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var o in c)u(o)};for(var o in a)u(o)}var l=function(e){Object.prototype.hasOwnProperty.call(P.value.puzzle,e)&&(P.value.puzzle[e].pencilMarks=Array.from({length:9},(function(){return!1})),P.value.puzzle[e].candidates.forEach((function(c){P.value.puzzle[e].pencilMarks[c-1]=!0;var t={address:P.value.puzzle[e].address,pencilMark:c,id:S.value};w.send(JSON.stringify({pencilMarkUpdate:t}))})))};for(var s in P.value.puzzle)l(s);return P.value.puzzle},F=t("5530"),G={sudokuObj:Object(U["h"])({}),users:Object(U["h"])({}),setPuzzle:function(e){this.sudokuObj=e,A(e)},setUsers:function(e){this.users=e},updateNumber:function(e,c){var t=e.numberUpdate,n=t.address,r=t.number,a=t.id,u=Object(F["a"])({},this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]);if(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].number=r,this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]=R(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)]),!c){var o=Object(F["a"])({},t);o.number=u.number,this.users.value[a].moves.push({numberUpdate:o})}},updatePencilMarks:function(e,c){var t=e.pencilMarkUpdate,n=t.address,r=t.pencilMark,a=t.pencilMarks,u=t.id,o=Object(N["a"])(this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==r||a?this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks=a||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1]=!this.sudokuObj.value.puzzle["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1],!c){var l=Object(F["a"])({},t);l.pencilMarks=o,this.users.value[u].moves.push({pencilMarkUpdate:l})}},undo:function(e){var c=this.users.value[e].moves.pop();c.numberUpdate?this.updateNumber({numberUpdate:c.numberUpdate},!0):c.pencilMarkUpdate&&this.updatePencilMarks({pencilMarkUpdate:c.pencilMarkUpdate},!0)}},q=G;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var I=null!==(g=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==g?g:"ws://tealog.xyz:8010";console.log(I);var T=new WebSocket(I),V={setup:function(){Object(r["n"])((function(){T.close(1e3,"logging off")})),T.onopen=function(){console.log("connection established"),E(T)};var e=Object(U["h"])({}),c=Object(U["h"])({}),t=Object(U["h"])({}),n=Object(U["h"])({}),a=Object(U["h"])(!1),u=Object(U["h"])(!1);T.onmessage=function(r){var a=r.data,u=JSON.parse(a),o=u.color,l=u.sudokuObj,s=u.id,i=u.users,d=u.focusUpdate,b=u.numberUpdate,p=u.pencilMarkUpdate,f=u.undo,v=l||{},O=v.puzzle,j=v.sentRows,k=v.sentCols,h=v.sentSquares;if(l&&(c.value.puzzle=O,c.value.rows=j,c.value.cols=k,c.value.squares=h,A(c),q.setPuzzle(c)),i&&(t.value=i,q.setUsers(t)),o&&(e.value=o,document.documentElement.style.setProperty("--color","".concat(o))),s&&(n.value=s,_(n)),d){var z=d.id,m=d.focus;t.value[z].focus=m}b&&q.updateNumber({numberUpdate:b}),p&&q.updatePencilMarks({pencilMarkUpdate:p}),f&&q.undo(f)};var o=Object(r["d"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),l=Object(r["d"])((function(){var e=t.value[n.value],r=null;return null!=e.focus.row&&"."!=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(r=c.value.puzzle["r".concat(e.focus.row,"c").concat(e.focus.col)].number),r})),s=Object(r["d"])((function(){return t.value[n.value].focus})),i=Object(U["h"])({});Object(r["o"])((function(){i.value={}}));var d=function(e,c,r,a){e+=r,c+=a,e>9||c>9||e<1||c<1||(i.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},T.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},b=function(e){var r=e.key,u=e.event,o=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],s=t.value[n.value].focus,i=s.row,b=s.col;if(null==i||null==b)return i=5,b=5,t.value[n.value].focus={row:i,col:b},void T.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:i,col:b}}}));if(!c.value.puzzle["r".concat(i,"c").concat(b)].given&&o.includes(r))if(u.preventDefault(),a.value){var p=c.value.puzzle["r".concat(i,"c").concat(b)].address,f={address:p,pencilMark:r,id:n.value};q.updatePencilMarks({pencilMarkUpdate:f}),T.send(JSON.stringify({pencilMarkUpdate:f}))}else{var v=c.value.puzzle["r".concat(i,"c").concat(b)].address,O={address:v,number:r,id:n.value};q.updateNumber({numberUpdate:O}),T.send(JSON.stringify({numberUpdate:O}))}else if("Backspace"==r)if(u.preventDefault(),a.value){var j=c.value.puzzle["r".concat(i,"c").concat(b)].address,k={address:j,pencilMark:"delete",id:n.value};q.updatePencilMarks({pencilMarkUpdate:k}),T.send(JSON.stringify({pencilMarkUpdate:k}))}else{var h=c.value.puzzle["r".concat(i,"c").concat(b)].address,z={address:h,number:".",id:n.value};q.updateNumber({numberUpdate:z}),T.send(JSON.stringify({numberUpdate:z}))}else if(l.includes(r))switch(u.preventDefault(),r){case"ArrowRight":d(i,b,0,1,"row");break;case"ArrowLeft":d(i,b,0,-1,"row");break;case"ArrowDown":d(i,b,1,0,"col");break;case"ArrowUp":d(i,b,-1,0,"col");break}else"Shift"==r?a.value=!a.value:"z"==r.toLowerCase()&&u.metaKey&&(q.undo(n.value),T.send(JSON.stringify({undo:n.value})))};document.body.addEventListener("keydown",(function(){b({key:event.key,event:event})}));var p=function(e){var c=e.row,r=e.col;t.value[n.value].focus={row:c,col:r},T.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:r}}}))},f=Object(U["h"])(null),v=Object(U["h"])(!1),O=function e(c){v.value&&c.target!=f.value&&c.target.parentElement!=f.value&&c.target.parentElement.parentElement!=f.value&&(v.value=!1,document.body.removeEventListener("mousedown",e))},j=function(e){console.log("triggered"),e?(T.send(JSON.stringify({newGame:!0})),v.value=!1,document.body.removeEventListener("mousedown",O)):(document.body.addEventListener("mousedown",O),v.value=!0)};return{popup:f,checkNew:v,selfFocus:s,sudokuObj:c,newGame:j,handleInput:b,handleClick:p,inputs:i,color:e,id:n,checkFocus:o,users:t,notating:a,highlightNumbers:l,firstPassCandidateCalculator:D,candidates:u}},components:{BaseButton:M}};t("9cdc");V.render=h;var W=V;Object(n["a"])(W).mount("#app")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")}});
//# sourceMappingURL=app.757c9e75.js.map