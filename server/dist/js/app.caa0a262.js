(function(e){function t(t){for(var a,o,u=t[0],s=t[1],i=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,u=1;u<c.length;u++){var s=c[u];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=c[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=a,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(c,a,function(t){return e[t]}.bind(null,a));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"63bf":function(e,t,c){},7647:function(e,t,c){"use strict";c("d7d8")},c21c:function(e,t,c){"use strict";c("63bf")},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("830f"),n=c("5c40");function r(e,t){var c=Object(n["y"])("RouterView");return Object(n["u"])(),Object(n["e"])(c)}var o=c("8c4f"),u=o.RouterView,s={components:{RouterView:u}};s.render=r;var i=s,l=c("8c4f"),d=(c("99af"),c("fb6a"),c("9ff4")),b={id:"app"},v={key:0,class:"pane"},f={class:"inputReplacement"},O={key:1,"dominant-baseline":"middle","text-anchor":"middle"},j={class:"notation-text",style:{color:"white"}},p={key:0,style:{color:"white"},class:"hint"},k={class:"actions"},h=Object(n["i"])("Start New Game"),m={key:0,class:"popup",ref:"popup"},g=Object(n["j"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),y={class:"actions"},w=Object(n["i"])("Start new game"),M=Object(n["i"])("Take me back"),N=Object(n["i"])("Hint"),U=Object(n["i"])("Fill In Candidates"),P={key:1,class:"pane"},S={class:"actions"},E=Object(n["i"])("Start New Game");function C(e,t){var c=Object(n["y"])("BaseButton");return Object(n["u"])(),Object(n["e"])("div",b,[e.loading?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["e"])("div",v,[Object(n["j"])("table",null,[Object(n["j"])("tbody",null,[(Object(n["u"])(),Object(n["e"])(n["b"],null,Object(n["w"])(9,(function(t){return Object(n["j"])("tr",{key:t},[(Object(n["u"])(),Object(n["e"])(n["b"],null,Object(n["w"])(9,(function(c){return Object(n["j"])("td",{key:"r".concat(t,"c").concat(c,"-td"),id:"r".concat(t,"c").concat(c,"-td-id"),class:[{"border-right":c%3==0,"border-bottom":t%3==0,"border-left":0==c,"border-top":0==t,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid,"highlight-number":e.highlightNumbers==e.sudokuObj["r".concat(t,"c").concat(c)].number}],onClick:function(a){return e.handleClick({row:t,col:c})},style:{"background-color":e.selfFocus.row!=t&&e.selfFocus.col!=c||e.checkFocus["r".concat(t,"c").concat(c)]?e.checkFocus["r".concat(t,"c").concat(c)]:"".concat(e.color.slice(0,7),"44")}},[(Object(n["u"])(),Object(n["e"])("svg",f,[Object(n["j"])("text",{class:[{bold:e.sudokuObj["r".concat(t,"c").concat(c)].given,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(a){e.inputs["r".concat(t,"c").concat(c)]=a}},Object(d["G"])("."==e.sudokuObj["r".concat(t,"c").concat(c)].number?"":e.sudokuObj["r".concat(t,"c").concat(c)].number),3),(Object(n["u"])(!0),Object(n["e"])(n["b"],null,Object(n["w"])(e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks,(function(a,r){return Object(n["u"])(),Object(n["e"])("g",{key:r},[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[r]&&"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(n["u"])(),Object(n["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==r+1}],cy:9+22*Math.floor(r/3),cx:8.5+r%3*22,r:"8"},null,10,["cy","cx"])):Object(n["f"])("",!0),"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(n["u"])(),Object(n["e"])("text",O,[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[r]?(Object(n["u"])(),Object(n["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(r/3),x:8+r%3*22},Object(d["G"])(r+1),9,["y","x"])):Object(n["f"])("",!0)])):Object(n["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(n["j"])("span",j,Object(d["G"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),e.hint?(Object(n["u"])(),Object(n["e"])("div",p,Object(d["G"])(e.hint),1)):Object(n["f"])("",!0),Object(n["j"])("div",k,[Object(n["j"])(c,{onClick:t[1]||(t[1]=function(t){return e.newGame()}),class:"button"},{default:Object(n["E"])((function(){return[h]})),_:1}),e.checkNew?(Object(n["u"])(),Object(n["e"])("div",m,[g,Object(n["j"])("div",y,[Object(n["j"])(c,{onMouseup:t[2]||(t[2]=function(t){return e.newGame(!0)}),class:"yes"},{default:Object(n["E"])((function(){return[w]})),_:1}),Object(n["j"])(c,{onClick:t[3]||(t[3]=function(t){return e.checkNew=!1}),class:"no"},{default:Object(n["E"])((function(){return[M]})),_:1})])],512)):Object(n["f"])("",!0),Object(n["j"])(c,{onMouseup:t[4]||(t[4]=function(t){return e.requestHint()})},{default:Object(n["E"])((function(){return[N]})),_:1}),Object(n["j"])(c,{onMouseup:t[5]||(t[5]=function(t){return e.firstPassCandidateCalculator()}),class:"button"},{default:Object(n["E"])((function(){return[U]})),_:1})])])),e.loading?(Object(n["u"])(),Object(n["e"])("div",P,[Object(n["j"])("div",S,[Object(n["j"])(c,{onClick:t[6]||(t[6]=function(t){return e.newGame()}),class:"button"},{default:Object(n["E"])((function(){return[E]})),_:1})])])):Object(n["f"])("",!0)])}c("caad");var _=Object(n["F"])("data-v-4b5b4ece"),x=_((function(e,t){return Object(n["u"])(),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click",t)}),onMouseup:t[2]||(t[2]=function(t){return e.$emit("mousup",t)})},[Object(n["x"])(e.$slots,"default")],32)}));c("c21c");const A={};A.render=x,A.__scopeId="data-v-4b5b4ece";var q,R=A,J=c("a1e9"),G=(c("4de4"),c("4160"),c("a630"),c("d81d"),c("a9e3"),c("07ac"),c("2532"),c("3ca3"),c("159b"),c("2909")),L=c("d4ec"),z=function e(t,c,a){var r=this;Object(L["a"])(this,e),this.makeRows=Object(n["d"])((function(){for(var e={},t=1;t<=9;t++){e["r".concat(t)]={};for(var c=1;c<=9;c++)e["r".concat(t)]["r".concat(t,"c").concat(c)]=r.sudokuObj.value["r".concat(t,"c").concat(c)]}return e})),this.makeCols=Object(n["d"])((function(){for(var e={},t=1;t<=9;t++){e["c".concat(t)]={};for(var c=1;c<=9;c++)e["c".concat(t)]["r".concat(c,"c").concat(t)]=r.sudokuObj.value["r".concat(c,"c").concat(t)]}return e})),this.getSquare=function(e){var t=[1,2,3],c=[4,5,6],a=[7,8,9],n=[1,2,3];return e.address.r>=1&&e.address.r<=3&&(n=t),e.address.r>=4&&e.address.r<=6&&(n=c),e.address.r>=7&&e.address.r<=9&&(n=a),"s".concat(n[Math.floor((e.address.c-1)/3)])},this.makeSquares=Object(n["d"])((function(){for(var e={s1:{},s2:{},s3:{},s4:{},s5:{},s6:{},s7:{},s8:{},s9:{}},t=1;t<=9;t++)for(var c=1;c<=9;c++)e[r.getSquare(r.sudokuObj.value["r".concat(t,"c").concat(c)])]["r".concat(t,"c").concat(c)]=r.sudokuObj.value["r".concat(t,"c").concat(c)];return e})),this.getPeers=function(e){var t,c,a;return t=r.makeRows.value["r".concat(e.address.r)],c=r.makeCols.value["c".concat(e.address.c)],a=r.makeSquares.value[r.getSquare(e)],{row:t,col:c,square:a}},this.validateSquare=function(e){if(e.given)return e;for(var t=r.getPeers(e),c=t.row,a=t.col,n=t.square,o=[].concat(Object(G["a"])(Object.values(c)),Object(G["a"])(Object.values(a)),Object(G["a"])(Object.values(n))),u=!0,s=0;s<o.length;s++)if(o[s].address!=e.address&&o[s].number==e.number&&(u=!1,e.valid=!1),!u)break;return u&&(e.valid=!0),e},this.firstPassCandidateCalculator=function(){var e=r.makeRows.value,t=r.makeCols.value,c=r.makeSquares.value;for(var a in r.sudokuObj.value)Object.prototype.hasOwnProperty.call(r.sudokuObj.value,a)&&(r.sudokuObj.value[a].candidates=[],r.sudokuObj.value[a].pencilMarks=Array.from({length:9},(function(){return!1})));for(var n=0;n<3;n++){var o=void 0;switch(n){case 0:o=e;break;case 1:o=t;break;case 2:o=c;break}var u=function(e){var t=o[e],c=Object.values(o[e]).map((function(e){return Number(e.number)})).filter((function(e){return!isNaN(e)})),a=Array.from(Array(9),(function(e,t){return t+1}));a=a.filter((function(e){return!c.includes(e)}));var r=function(e){if("."==t[e].number){var c=0==n?Array.from(Array(9),(function(e,t){return t+1})):t[e].candidates;t[e].candidates=[],a.filter((function(e){return c.includes(e)})).forEach((function(c){t[e].candidates.push(c)}))}};for(var u in t)r(u)};for(var s in o)u(s)}var i=function(e){if(Object.prototype.hasOwnProperty.call(r.sudokuObj.value,e)){r.sudokuObj.value[e].candidates.forEach((function(t){r.sudokuObj.value[e].pencilMarks[t-1]=!0}));var t={address:r.sudokuObj.value[e].address,pencilMarks:r.sudokuObj.value[e].pencilMarks,id:r.userId.value};r.socket.send(JSON.stringify({pencilMarkUpdate:t}))}};for(var l in r.sudokuObj.value)i(l);return r.sudokuObj.value},this.sudokuObj=t,this.userId=c,this.socket=a},F=z,V=c("5530"),B=c("bee2"),D=function(){function e(t,c,a,n){var r=this;Object(L["a"])(this,e),this.updatePeerCandidates=function(e){var t=r.validation.getPeers(e),c=t.row,a=t.col,n=t.square,o=[].concat(Object(G["a"])(Object.values(c)),Object(G["a"])(Object.values(a)),Object(G["a"])(Object.values(n))),u=[];return o.forEach((function(t){if("."==t.number&&t.pencilMarks[Number(e.number)-1]){var c=Object(G["a"])(r.sudokuObj.value["r".concat(t.address.r,"c").concat(t.address.c)].pencilMarks);t.pencilMarks[Number(e.number)-1]=!1;var a={address:t.address,pencilMarks:c,id:r.validation.userId.value};u.push(a)}})),u},this.sudokuObj=t,this.users=c,this.socket=a,this.validation=n}return Object(B["a"])(e,[{key:"updateNumber",value:function(e){var t=this,c=e.numberUpdate,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=c.address,o=c.number,u=c.id,s=c.associatedPencilMarkUpdates,i=Object(V["a"])({},this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]);if(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)].number=o,this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]=this.validation.validateSquare(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]),a){var l;null===(l=s)||void 0===l||l.forEach((function(e){t.updatePencilMarks({pencilMarkUpdate:e},!0)}))}else{var d;s=null!==(d=s)&&void 0!==d?d:this.updatePeerCandidates(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]);var b=Object(V["a"])({},c);b.associatedPencilMarkUpdates=s,b.number=i.number,this.users.value[u].moves.push({numberUpdate:b}),n||this.socket.send(JSON.stringify({numberUpdate:c}))}}},{key:"updatePencilMarks",value:function(e){var t=e.pencilMarkUpdate,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.address,r=t.pencilMark,o=t.pencilMarks,u=t.id,s=Object(G["a"])(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==r||o?this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks=o||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[Number(r)-1]=!this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[Number(r)-1],!c){var i=Object(V["a"])({},t);i.pencilMarks=s,this.users.value[u].moves.push({pencilMarkUpdate:i}),a||this.socket.send(JSON.stringify({pencilMarkUpdate:t}))}}},{key:"undo",value:function(e){if(this.users.value[e].moves.length){var t=this.users.value[e].moves.pop();t.numberUpdate?this.updateNumber({numberUpdate:t.numberUpdate},!0):t.pencilMarkUpdate&&(console.log("sending"),this.updatePencilMarks({pencilMarkUpdate:t.pencilMarkUpdate},!0))}}}]),e}(),I=D;console.log("success"),console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var H=null!==(q=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==q?q:"ws://tealog.xyz:8010";console.log(H);var T=new WebSocket(H);console.log(R);var W={setup:function(){Object(n["q"])((function(){T.close(1e3,"logging off")})),T.onopen=function(){console.log("connection established")};var e=Object(J["i"])(),t=Object(J["i"])(),c=Object(J["i"])(),a=Object(J["i"])(),r=Object(J["i"])(!1),o=Object(J["i"])(!1),u=Object(J["i"])(!0),s=new F(t,a,T),i=new I(t,c,T,s),l=Object(J["i"])(!1);T.onmessage=function(n){var r=n.data,o=JSON.parse(r),s=o.color,d=o.sudokuObj,b=o.id,v=o.users,f=o.focusUpdate,O=o.numberUpdate,j=o.pencilMarkUpdate,p=o.undo,k=o.hint;k&&(console.log(k),l.value=k);var h=d||{},m=h.puzzle;if(d&&(t.value=m,u.value=!1),v&&(c.value=v),s&&(e.value=s,document.documentElement.style.setProperty("--color","".concat(s))),b&&(a.value=b),f)try{var g=f.id,y=f.focus;c.value[g].focus=y}catch(w){console.log(JSON.parse(r)),console.log(w),console.log(Object(J["n"])(c.value)),console.log(Object(J["n"])(a.value))}O&&i.updateNumber({numberUpdate:O},!1,!0),j&&i.updatePencilMarks({pencilMarkUpdate:j},!1,!0),p&&i.undo(p)};var d=Object(n["d"])((function(){var e={};for(var t in c.value)if(Object.prototype.hasOwnProperty.call(c.value,t)){var a=c.value[t];e["r".concat(a.focus.row,"c").concat(a.focus.col)]=a.color}return e})),b=Object(n["d"])((function(){var e=c.value[a.value],n=null;return null!=e.focus.row&&"."!=t.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(n=t.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number),n})),v=Object(n["d"])((function(){return c.value[a.value].focus})),f=Object(J["i"])({});Object(n["r"])((function(){f.value={}}));var O=function(e,t,n,r){e+=n,t+=r,e>9||t>9||e<1||t<1||(f.value["r".concat(e,"c").concat(t)].focus(),c.value[a.value].focus={row:e,col:t},T.send(JSON.stringify({focusUpdate:{id:a.value,focus:{row:e,col:t}}})))},j=function(e){var n=e.key,o=e.event,u=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],l=c.value[a.value].focus,d=l.row,b=l.col;if(null==d||null==b)return d=5,b=5,c.value[a.value].focus={row:d,col:b},void T.send(JSON.stringify({focusUpdate:{id:a.value,focus:{row:d,col:b}}}));if(!t.value["r".concat(d,"c").concat(b)].given&&u.includes(n))if(o.preventDefault(),r.value){var v=t.value["r".concat(d,"c").concat(b)].address,f={address:v,pencilMark:n,id:a.value};i.updatePencilMarks({pencilMarkUpdate:f})}else{var j=t.value["r".concat(d,"c").concat(b)].address,p={address:j,number:n,id:a.value};i.updateNumber({numberUpdate:p}),i.updatePeerCandidates(t.value["r".concat(d,"c").concat(b)])}else if("Backspace"==n)if(o.preventDefault(),r.value){var k=t.value["r".concat(d,"c").concat(b)].address,h={address:k,pencilMark:"delete",id:a.value};i.updatePencilMarks({pencilMarkUpdate:h})}else{var m=t.value["r".concat(d,"c").concat(b)].address,g={address:m,number:".",id:a.value};i.updateNumber({numberUpdate:g})}else if(s.includes(n))switch(o.preventDefault(),n){case"ArrowRight":O(d,b,0,1);break;case"ArrowLeft":O(d,b,0,-1);break;case"ArrowDown":O(d,b,1,0);break;case"ArrowUp":O(d,b,-1,0);break}else"Shift"==n?r.value=!r.value:"z"==n.toLowerCase()&&o.metaKey&&(i.undo(a.value),T.send(JSON.stringify({undo:a.value})))};document.body.addEventListener("keydown",(function(){j({key:event.key,event:event})}));var p=function(e){var t=e.row,n=e.col;c.value[a.value].focus={row:t,col:n},T.send(JSON.stringify({focusUpdate:{id:a.value,focus:{row:t,col:n}}}))},k=Object(J["i"])(null),h=Object(J["i"])(!1),m=function e(t){h.value&&t.target!=k.value&&t.target.parentElement!=k.value&&t.target.parentElement.parentElement!=k.value&&(h.value=!1,document.body.removeEventListener("mousedown",e))},g=function(e){console.log("triggered"),e?(T.send(JSON.stringify({newGame:!0})),h.value=!1,document.body.removeEventListener("mousedown",m)):(document.body.addEventListener("mousedown",m),h.value=!0)},y=s.firstPassCandidateCalculator,w=function(){T.send(JSON.stringify({hint:!0}))};return{popup:k,checkNew:h,selfFocus:v,sudokuObj:t,newGame:g,handleInput:j,handleClick:p,inputs:f,color:e,id:a,checkFocus:d,users:c,notating:r,highlightNumbers:b,firstPassCandidateCalculator:y,candidates:o,loading:u,requestHint:w,hint:l}},components:{BaseButton:R},name:"PuzzleView"};c("7647");W.render=C;var $=W,K=[{path:"/",name:"Puzzle",component:$}];console.log($);var Q=Object(l["createRouter"])({history:Object(l["createWebHistory"])("/"),routes:K}),X=Q;Object(a["a"])(i).use(X).mount("#app")},d7d8:function(e,t,c){}});
//# sourceMappingURL=app.caa0a262.js.map