(function(e){function t(t){for(var n,o,u=t[0],s=t[1],i=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,u=1;u<c.length;u++){var s=c[u];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=c[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=n,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"0fd0":function(e,t,c){"use strict";c("d3c7")},"64be":function(e,t,c){"use strict";c("98e6")},"6a37":function(e,t,c){"use strict";c("e6f2")},"834d":function(e,t,c){"use strict";c("93a6")},"93a6":function(e,t,c){},"98e6":function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("830f"),a=c("5c40"),r={id:"app"};function o(e,t){var c=Object(a["A"])("RouterView");return Object(a["u"])(),Object(a["e"])("div",r,[Object(a["j"])(c)])}var u=c("8c4f"),s=u.RouterView,i={components:{RouterView:s}};c("64be");i.render=o;var l=i,d=c("8c4f"),b=(c("99af"),c("fb6a"),c("9ff4")),v=Object(a["H"])("data-v-146fb6a3");Object(a["x"])("data-v-146fb6a3");var f={id:"main"},j={key:0,class:"pane"},O={class:"inputReplacement"},p={key:1,"dominant-baseline":"middle","text-anchor":"middle"},k={class:"notation-text",style:{color:"white"}},m={key:0,style:{color:"white"},class:"hint"},h={class:"actions"},y=Object(a["i"])("Start New Game"),g={key:0,class:"popup",ref:"popup"},w=Object(a["j"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),M={class:"actions"},N=Object(a["i"])("Start new game"),P=Object(a["i"])("Take me back"),U=Object(a["i"])("Hint"),S=Object(a["i"])("Fill In Candidates"),C={key:1,class:"pane"},_={class:"actions"},x=Object(a["i"])("Start New Game");Object(a["v"])();var A=v((function(e,t){var c=Object(a["A"])("BaseButton");return Object(a["u"])(),Object(a["e"])("div",f,[e.loading?Object(a["f"])("",!0):(Object(a["u"])(),Object(a["e"])("div",j,[Object(a["j"])("table",null,[Object(a["j"])("tbody",null,[(Object(a["u"])(),Object(a["e"])(a["b"],null,Object(a["y"])(9,(function(t){return Object(a["j"])("tr",{key:t},[(Object(a["u"])(),Object(a["e"])(a["b"],null,Object(a["y"])(9,(function(c){return Object(a["j"])("td",{key:"r".concat(t,"c").concat(c,"-td"),id:"r".concat(t,"c").concat(c,"-td-id"),class:[{"border-right":c%3==0,"border-bottom":t%3==0,"border-left":1==c,"border-top":1==t,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid,"highlight-number":e.highlightNumbers==e.sudokuObj["r".concat(t,"c").concat(c)].number}],onClick:function(n){return e.handleClick({row:t,col:c})},style:{"background-color":e.selfFocus.row!=t&&e.selfFocus.col!=c||e.checkFocus["r".concat(t,"c").concat(c)]?e.checkFocus["r".concat(t,"c").concat(c)]:"".concat(e.color.slice(0,7),"44")}},[(Object(a["u"])(),Object(a["e"])("svg",O,[Object(a["j"])("text",{class:[{bold:e.sudokuObj["r".concat(t,"c").concat(c)].given,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(t,"c").concat(c)]=n}},Object(b["G"])("."==e.sudokuObj["r".concat(t,"c").concat(c)].number?"":e.sudokuObj["r".concat(t,"c").concat(c)].number),3),(Object(a["u"])(!0),Object(a["e"])(a["b"],null,Object(a["y"])(e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks,(function(n,r){return Object(a["u"])(),Object(a["e"])("g",{key:r},[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[r]&&"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(a["u"])(),Object(a["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==r+1}],cy:9+22*Math.floor(r/3),cx:8.5+r%3*22,r:"8"},null,10,["cy","cx"])):Object(a["f"])("",!0),"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(a["u"])(),Object(a["e"])("text",p,[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[r]?(Object(a["u"])(),Object(a["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(r/3),x:8+r%3*22},Object(b["G"])(r+1),9,["y","x"])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(a["j"])("span",k,Object(b["G"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),e.hint?(Object(a["u"])(),Object(a["e"])("div",m,Object(b["G"])(e.hint),1)):Object(a["f"])("",!0),Object(a["j"])("div",h,[Object(a["j"])(c,{onClick:t[1]||(t[1]=function(t){return e.newGame()}),class:"button"},{default:v((function(){return[y]})),_:1}),e.checkNew?(Object(a["u"])(),Object(a["e"])("div",g,[w,Object(a["j"])("div",M,[Object(a["j"])(c,{onMouseup:t[2]||(t[2]=function(t){return e.newGame(!0)}),class:"yes"},{default:v((function(){return[N]})),_:1}),Object(a["j"])(c,{onClick:t[3]||(t[3]=function(t){return e.checkNew=!1}),class:"no"},{default:v((function(){return[P]})),_:1})])],512)):Object(a["f"])("",!0),Object(a["j"])(c,{onMouseup:t[4]||(t[4]=function(t){return e.requestHint()})},{default:v((function(){return[U]})),_:1}),Object(a["j"])(c,{onMouseup:t[5]||(t[5]=function(t){return e.firstPassCandidateCalculator()}),class:"button"},{default:v((function(){return[S]})),_:1})])])),e.loading?(Object(a["u"])(),Object(a["e"])("div",C,[Object(a["j"])("div",_,[Object(a["j"])(c,{onClick:t[6]||(t[6]=function(t){return e.newGame()}),class:"button"},{default:v((function(){return[x]})),_:1})])])):Object(a["f"])("",!0)])})),z=(c("caad"),Object(a["H"])("data-v-6d59abca")),E=z((function(e,t){return Object(a["u"])(),Object(a["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click",t)}),onMouseup:t[2]||(t[2]=function(t){return e.$emit("mousup",t)})},[Object(a["z"])(e.$slots,"default")],32)})),R={name:"BaseButton"};c("6a37");R.render=E,R.__scopeId="data-v-6d59abca";var q=R,G=c("a1e9"),L=(c("4de4"),c("4160"),c("a630"),c("d81d"),c("a9e3"),c("07ac"),c("2532"),c("3ca3"),c("159b"),c("2909")),J=c("d4ec"),B=function e(t,c,n){var r=this;Object(J["a"])(this,e),this.makeRows=Object(a["d"])((function(){for(var e={},t=1;t<=9;t++){e["r".concat(t)]={};for(var c=1;c<=9;c++)e["r".concat(t)]["r".concat(t,"c").concat(c)]=r.sudokuObj.value["r".concat(t,"c").concat(c)]}return e})),this.makeCols=Object(a["d"])((function(){for(var e={},t=1;t<=9;t++){e["c".concat(t)]={};for(var c=1;c<=9;c++)e["c".concat(t)]["r".concat(c,"c").concat(t)]=r.sudokuObj.value["r".concat(c,"c").concat(t)]}return e})),this.getSquare=function(e){var t=[1,2,3],c=[4,5,6],n=[7,8,9],a=[1,2,3];return e.address.r>=1&&e.address.r<=3&&(a=t),e.address.r>=4&&e.address.r<=6&&(a=c),e.address.r>=7&&e.address.r<=9&&(a=n),"s".concat(a[Math.floor((e.address.c-1)/3)])},this.makeSquares=Object(a["d"])((function(){for(var e={s1:{},s2:{},s3:{},s4:{},s5:{},s6:{},s7:{},s8:{},s9:{}},t=1;t<=9;t++)for(var c=1;c<=9;c++)e[r.getSquare(r.sudokuObj.value["r".concat(t,"c").concat(c)])]["r".concat(t,"c").concat(c)]=r.sudokuObj.value["r".concat(t,"c").concat(c)];return e})),this.getPeers=function(e){var t,c,n;return t=r.makeRows.value["r".concat(e.address.r)],c=r.makeCols.value["c".concat(e.address.c)],n=r.makeSquares.value[r.getSquare(e)],{row:t,col:c,square:n}},this.validateSquare=function(e){if(e.given)return e;for(var t=r.getPeers(e),c=t.row,n=t.col,a=t.square,o=[].concat(Object(L["a"])(Object.values(c)),Object(L["a"])(Object.values(n)),Object(L["a"])(Object.values(a))),u=!0,s=0;s<o.length;s++)if(o[s].address!=e.address&&o[s].number==e.number&&(u=!1,e.valid=!1),!u)break;return u&&(e.valid=!0),e},this.firstPassCandidateCalculator=function(){var e=r.makeRows.value,t=r.makeCols.value,c=r.makeSquares.value;for(var n in r.sudokuObj.value)Object.prototype.hasOwnProperty.call(r.sudokuObj.value,n)&&(r.sudokuObj.value[n].candidates=[],r.sudokuObj.value[n].pencilMarks=Array.from({length:9},(function(){return!1})));for(var a=0;a<3;a++){var o=void 0;switch(a){case 0:o=e;break;case 1:o=t;break;case 2:o=c;break}var u=function(e){var t=o[e],c=Object.values(o[e]).map((function(e){return Number(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,t){return t+1}));n=n.filter((function(e){return!c.includes(e)}));var r=function(e){if("."==t[e].number){var c=0==a?Array.from(Array(9),(function(e,t){return t+1})):t[e].candidates;t[e].candidates=[],n.filter((function(e){return c.includes(e)})).forEach((function(c){t[e].candidates.push(c)}))}};for(var u in t)r(u)};for(var s in o)u(s)}var i=function(e){if(Object.prototype.hasOwnProperty.call(r.sudokuObj.value,e)){r.sudokuObj.value[e].candidates.forEach((function(t){r.sudokuObj.value[e].pencilMarks[t-1]=!0}));var t={address:r.sudokuObj.value[e].address,pencilMarks:r.sudokuObj.value[e].pencilMarks,id:r.userId.value};r.socket.send(JSON.stringify({pencilMarkUpdate:t}))}};for(var l in r.sudokuObj.value)i(l);return r.sudokuObj.value},this.sudokuObj=t,this.userId=c,this.socket=n},F=B,I=c("5530"),V=c("bee2"),D=function(){function e(t,c,n,a){var r=this;Object(J["a"])(this,e),this.updatePeerCandidates=function(e){var t=r.validation.getPeers(e),c=t.row,n=t.col,a=t.square,o=[].concat(Object(L["a"])(Object.values(c)),Object(L["a"])(Object.values(n)),Object(L["a"])(Object.values(a))),u=[];return o.forEach((function(t){if("."==t.number&&t.pencilMarks[Number(e.number)-1]){var c=Object(L["a"])(r.sudokuObj.value["r".concat(t.address.r,"c").concat(t.address.c)].pencilMarks);t.pencilMarks[Number(e.number)-1]=!1;var n={address:t.address,pencilMarks:c,id:r.validation.userId.value};u.push(n)}})),u},this.sudokuObj=t,this.users=c,this.socket=n,this.validation=a}return Object(V["a"])(e,[{key:"updateNumber",value:function(e){var t=this,c=e.numberUpdate,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=c.address,o=c.number,u=c.id,s=c.associatedPencilMarkUpdates,i=Object(I["a"])({},this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]);if(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)].number=o,this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]=this.validation.validateSquare(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]),n){var l;null===(l=s)||void 0===l||l.forEach((function(e){t.updatePencilMarks({pencilMarkUpdate:e},!0)}))}else{var d;s=null!==(d=s)&&void 0!==d?d:this.updatePeerCandidates(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]);var b=Object(I["a"])({},c);b.associatedPencilMarkUpdates=s,b.number=i.number,this.users.value[u].moves.push({numberUpdate:b}),a||this.socket.send(JSON.stringify({numberUpdate:c}))}}},{key:"updatePencilMarks",value:function(e){var t=e.pencilMarkUpdate,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=t.address,r=t.pencilMark,o=t.pencilMarks,u=t.id,s=Object(L["a"])(this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks);if("delete"==r||o?this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks=o||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks[Number(r)-1]=!this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks[Number(r)-1],!c){var i=Object(I["a"])({},t);i.pencilMarks=s,this.users.value[u].moves.push({pencilMarkUpdate:i}),n||this.socket.send(JSON.stringify({pencilMarkUpdate:t}))}}},{key:"undo",value:function(e){if(this.users.value[e].moves.length){var t=this.users.value[e].moves.pop();t.numberUpdate?this.updateNumber({numberUpdate:t.numberUpdate},!0):t.pencilMarkUpdate&&(console.log("sending"),this.updatePencilMarks({pencilMarkUpdate:t.pencilMarkUpdate},!0))}}}]),e}(),H=D,T={setup:function(){var e,t=null!==(e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==e?e:"ws://tealog.xyz:8010",c=new WebSocket(t);Object(a["q"])((function(){c.close(1e3,"logging off")})),c.onopen=function(){console.log("Connected established to ".concat(t))};var n=Object(G["i"])(),r=Object(G["i"])(),o=Object(G["i"])({}),u=Object(G["i"])(""),s=Object(G["i"])(!1),i=Object(G["i"])(!1),l=Object(G["i"])(!0),d=new F(r,u,c),b=new H(r,o,c,d),v=Object(G["i"])(!1);c.onmessage=function(e){var t=e.data,c=JSON.parse(t),a=c.color,s=c.sudokuObj,i=c.id,d=c.users,f=c.focusUpdate,j=c.numberUpdate,O=c.pencilMarkUpdate,p=c.undo,k=c.hint;k&&(console.log(k),v.value=k);var m=s||{},h=m.puzzle;if(s&&(r.value=h,l.value=!1),d&&(o.value=d),a&&(n.value=a,document.documentElement.style.setProperty("--color","".concat(a))),i&&(u.value=i),f)try{var y=f.id,g=f.focus;o.value[y].focus=g}catch(w){console.log(JSON.parse(t)),console.log(w),console.log(Object(G["n"])(o.value)),console.log(Object(G["n"])(u.value))}j&&b.updateNumber({numberUpdate:j},!1,!0),O&&b.updatePencilMarks({pencilMarkUpdate:O},!1,!0),p&&b.undo(p)};var f=Object(a["d"])((function(){var e={};for(var t in o.value)if(Object.prototype.hasOwnProperty.call(o.value,t)){var c=o.value[t];e["r".concat(c.focus.row,"c").concat(c.focus.col)]=c.color}return e})),j=Object(a["d"])((function(){var e,t,c,n,a=o.value[u.value],s=null;null!=a.focus.row&&("."!=(null===r||void 0===r||null===(e=r.value)||void 0===e||null===(t=e["r".concat(a.focus.row,"c").concat(a.focus.col)])||void 0===t?void 0:t.number)&&(s=null===r||void 0===r||null===(c=r.value)||void 0===c||null===(n=c["r".concat(a.focus.row,"c").concat(a.focus.col)])||void 0===n?void 0:n.number));return s})),O=Object(a["d"])((function(){return o.value[u.value].focus})),p=Object(G["i"])({});Object(a["r"])((function(){p.value={}}));var k=function(e,t,n,a){var r,s;e+=n,t+=a,e>9||t>9||e<1||t<1||(null===p||void 0===p||null===(r=p.value)||void 0===r||null===(s=r["r".concat(e,"c").concat(t)])||void 0===s||s.focus(),o.value[u.value].focus={row:e,col:t},c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:e,col:t}}})))},m=function(e){var t,n,a=["1","2","3","4","5","6","7","8","9"],i=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],l=o.value[u.value].focus,d=l.row,v=l.col;if(null==d||null==v)return d=5,v=5,o.value[u.value].focus={row:d,col:v},void c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:d,col:v}}}));if(!(null===r||void 0===r||null===(t=r.value)||void 0===t||null===(n=t["r".concat(d,"c").concat(v)])||void 0===n?void 0:n.given)&&a.includes(e.key))if(e.preventDefault(),s.value){var f,j=null===r||void 0===r||null===(f=r.value)||void 0===f?void 0:f["r".concat(d,"c").concat(v)],O=j.address,p={address:O,pencilMark:e.key,id:u.value};b.updatePencilMarks({pencilMarkUpdate:p})}else{var m,h,y=null===r||void 0===r||null===(m=r.value)||void 0===m?void 0:m["r".concat(d,"c").concat(v)],g=y.address,w={address:g,number:e.key,id:u.value};b.updateNumber({numberUpdate:w}),b.updatePeerCandidates(null===r||void 0===r||null===(h=r.value)||void 0===h?void 0:h["r".concat(d,"c").concat(v)])}else if("Backspace"==e.key)if(e.preventDefault(),s.value){var M,N=null===r||void 0===r||null===(M=r.value)||void 0===M?void 0:M["r".concat(d,"c").concat(v)],P=N.address,U={address:P,pencilMark:"delete",id:u.value};b.updatePencilMarks({pencilMarkUpdate:U})}else{var S,C=null===r||void 0===r||null===(S=r.value)||void 0===S?void 0:S["r".concat(d,"c").concat(v)],_=C.address,x={address:_,number:".",id:u.value};b.updateNumber({numberUpdate:x})}else if(i.includes(e.key))switch(e.preventDefault(),e.key){case"ArrowRight":k(d,v,0,1);break;case"ArrowLeft":k(d,v,0,-1);break;case"ArrowDown":k(d,v,1,0);break;case"ArrowUp":k(d,v,-1,0);break}else"Shift"==e.key?s.value=!s.value:"z"==e.key.toLowerCase()&&e.metaKey&&(b.undo(u.value),c.send(JSON.stringify({undo:u.value})))};document.body.addEventListener("keydown",(function(e){m(e)}));var h=function(e){var t=e.row,n=e.col;o.value[u.value].focus={row:t,col:n},c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:t,col:n}}}))},y=Object(G["i"])(null),g=Object(G["i"])(!1),w=function e(t){var c=t.target;g.value&&c!=y.value&&c.parentElement!=y.value&&c.parentElement.parentElement!=y.value&&(g.value=!1,document.body.removeEventListener("mousedown",e))},M=function(e){console.log("triggered"),e?(c.send(JSON.stringify({newGame:!0})),g.value=!1,document.body.removeEventListener("mousedown",w)):(document.body.addEventListener("mousedown",w),g.value=!0)},N=d.firstPassCandidateCalculator,P=function(){c.send(JSON.stringify({hint:!0}))};return{popup:y,checkNew:g,selfFocus:O,sudokuObj:r,newGame:M,handleInput:m,handleClick:h,inputs:p,color:n,id:u,checkFocus:f,users:o,notating:s,highlightNumbers:j,firstPassCandidateCalculator:N,candidates:i,loading:l,requestHint:P,hint:v}},components:{BaseButton:q},name:"PuzzleView"};c("834d");T.render=A,T.__scopeId="data-v-146fb6a3";var W=T,$={id:"main"},K={id:"gamelist"},Q=Object(a["i"])("Puzzle");function X(e,t){var c=Object(a["A"])("RouterLink");return Object(a["u"])(),Object(a["e"])("div",$,[Object(a["j"])("div",K,[Object(a["j"])(c,{to:"/puzzle"},{default:Object(a["G"])((function(){return[Q]})),_:1})])])}var Y=c("8c4f"),Z=Y.RouterLink,ee={components:{RouterLink:Z},name:"GameLobbyView"};c("0fd0");ee.render=X;var te=ee,ce=[{path:"/puzzle",name:"Puzzle",component:W},{path:"/",name:"Game Lobby",component:te}],ne=Object(d["createRouter"])({history:Object(d["createWebHistory"])("/"),routes:ce}),ae=ne;Object(n["a"])(l).use(ae).mount("#app")},d3c7:function(e,t,c){},e6f2:function(e,t,c){}});
//# sourceMappingURL=app.d991ec92.js.map