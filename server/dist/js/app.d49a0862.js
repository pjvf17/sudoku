(function(e){function t(t){for(var n,r,u=t[0],i=t[1],s=t[2],d=0,b=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,u=1;u<c.length;u++){var i=c[u];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=c[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=n,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(c,n,function(t){return e[t]}.bind(null,n));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"250e":function(e,t,c){},"3d3f":function(e,t,c){},"64be":function(e,t,c){"use strict";c("98e6")},"6a37":function(e,t,c){"use strict";c("e6f2")},"98e6":function(e,t,c){},"9a31":function(e,t,c){},"9eec":function(e,t,c){"use strict";c("3d3f")},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("830f"),a=c("5c40"),o={id:"app"};function r(e,t){var c=Object(a["A"])("RouterView");return Object(a["u"])(),Object(a["e"])("div",o,[Object(a["j"])(c)])}var u=c("8c4f"),i=u.RouterView,s={components:{RouterView:i}};c("64be");s.render=r;var l=s,d=c("8c4f"),b=(c("99af"),c("fb6a"),c("9ff4")),v=Object(a["G"])("data-v-4b06eb0a");Object(a["x"])("data-v-4b06eb0a");var f={id:"main"},j={key:0,class:"pane"},O={class:"inputReplacement"},p={key:1,"dominant-baseline":"middle","text-anchor":"middle"},k={class:"notation-text",style:{color:"white"}},m={key:0,style:{color:"white"},class:"hint"},h={class:"actions"},y=Object(a["i"])("Start New Game"),g={class:"actions"},w=Object(a["i"])("Start new game"),M=Object(a["i"])("Take me back"),P=Object(a["i"])("Hint"),N=Object(a["i"])("Fill In Candidates"),U={key:1,class:"pane"},S={class:"actions"},_=Object(a["i"])("Start New Game");Object(a["v"])();var C=v((function(e,t){var c=Object(a["A"])("BaseButton"),n=Object(a["A"])("base-popup");return Object(a["u"])(),Object(a["e"])("div",f,[e.loading?Object(a["f"])("",!0):(Object(a["u"])(),Object(a["e"])("div",j,[Object(a["j"])("table",null,[Object(a["j"])("tbody",null,[(Object(a["u"])(),Object(a["e"])(a["b"],null,Object(a["y"])(9,(function(t){return Object(a["j"])("tr",{key:t},[(Object(a["u"])(),Object(a["e"])(a["b"],null,Object(a["y"])(9,(function(c){return Object(a["j"])("td",{key:"r".concat(t,"c").concat(c,"-td"),id:"r".concat(t,"c").concat(c,"-td-id"),class:[{"border-right":c%3==0,"border-bottom":t%3==0,"border-left":1==c,"border-top":1==t,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid,"highlight-number":e.highlightNumbers==e.sudokuObj["r".concat(t,"c").concat(c)].number}],onClick:function(n){return e.handleClick({row:t,col:c})},style:{"background-color":e.selfFocus.row!=t&&e.selfFocus.col!=c||e.checkFocus["r".concat(t,"c").concat(c)]?e.checkFocus["r".concat(t,"c").concat(c)]:"".concat(e.color.slice(0,7),"44")}},[(Object(a["u"])(),Object(a["e"])("svg",O,[Object(a["j"])("text",{class:[{bold:e.sudokuObj["r".concat(t,"c").concat(c)].given,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(t,"c").concat(c)]=n}},Object(b["G"])("."==e.sudokuObj["r".concat(t,"c").concat(c)].number?"":e.sudokuObj["r".concat(t,"c").concat(c)].number),3),(Object(a["u"])(!0),Object(a["e"])(a["b"],null,Object(a["y"])(e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks,(function(n,o){return Object(a["u"])(),Object(a["e"])("g",{key:o},[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[o]&&"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(a["u"])(),Object(a["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==o+1}],cy:9+22*Math.floor(o/3),cx:8.5+o%3*22,r:"8"},null,10,["cy","cx"])):Object(a["f"])("",!0),"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(a["u"])(),Object(a["e"])("text",p,[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[o]?(Object(a["u"])(),Object(a["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(o/3),x:8+o%3*22},Object(b["G"])(o+1),9,["y","x"])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(a["j"])("span",k,Object(b["G"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),e.hint?(Object(a["u"])(),Object(a["e"])("div",m,Object(b["G"])(e.hint),1)):Object(a["f"])("",!0),Object(a["j"])("div",h,[Object(a["j"])(c,{onClick:t[1]||(t[1]=function(t){return e.newGame()}),class:"button"},{default:v((function(){return[y]})),_:1}),e.checkNew?Object(a["j"])(n,{key:0,title:"Are you sure you want to start a new game?",ref:"popup",onOutside:e.testFuncton},{default:v((function(){return[Object(a["j"])("div",g,[Object(a["j"])(c,{onMouseup:t[2]||(t[2]=function(t){return e.newGame(!0)}),class:"yes"},{default:v((function(){return[w]})),_:1}),Object(a["j"])(c,{onClick:t[3]||(t[3]=function(t){return e.checkNew=!1}),class:"no"},{default:v((function(){return[M]})),_:1})])]})),_:1},8,["onOutside"]):Object(a["f"])("",!0),Object(a["j"])(c,{onMouseup:t[4]||(t[4]=function(t){return e.requestHint()})},{default:v((function(){return[P]})),_:1}),Object(a["j"])(c,{onMouseup:t[5]||(t[5]=function(t){return e.firstPassCandidateCalculator()}),class:"button"},{default:v((function(){return[N]})),_:1})])])),e.loading?(Object(a["u"])(),Object(a["e"])("div",U,[Object(a["j"])("div",S,[Object(a["j"])(c,{onClick:t[6]||(t[6]=function(t){return e.newGame()}),class:"button"},{default:v((function(){return[_]})),_:1})])])):Object(a["f"])("",!0)])})),x=(c("caad"),Object(a["G"])("data-v-6d59abca")),A=x((function(e,t){return Object(a["u"])(),Object(a["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click",t)}),onMouseup:t[2]||(t[2]=function(t){return e.$emit("mousup",t)})},[Object(a["z"])(e.$slots,"default")],32)})),G={name:"BaseButton"};c("6a37");G.render=A,G.__scopeId="data-v-6d59abca";var z=G,E=Object(a["G"])("data-v-fb565510");Object(a["x"])("data-v-fb565510");var R={class:"popup",ref:"popup"};Object(a["v"])();var q=E((function(e,t){return Object(a["u"])(),Object(a["e"])("div",R,[e.title?(Object(a["u"])(),Object(a["e"])("h3",{key:0,class:"title",onClick:t[1]||(t[1]=function(t){return e.$emit("outside")})},Object(b["G"])(e.title),1)):Object(a["f"])("",!0),Object(a["z"])(e.$slots,"default")],512)})),B=c("a1e9"),L=Object(a["k"])({emits:["outside"],props:{title:String},setup:function(e,t){var c=t.emit,n=Object(B["i"])(),a=function(e){var t;if(n.value){var a=e.target;a!=n.value&&a.parentElement!=n.value&&(null===(t=a.parentElement)||void 0===t?void 0:t.parentElement)!=n.value&&(c("outside"),console.log("emitted"))}};return document.body.addEventListener("mousedown",a),{popup:n}},name:"BasePopup"}),J=L;c("9eec");J.render=q,J.__scopeId="data-v-fb565510";var F=J,I=(c("4de4"),c("4160"),c("a630"),c("d81d"),c("a9e3"),c("07ac"),c("2532"),c("3ca3"),c("159b"),c("2909")),V=c("d4ec"),D=function e(t,c,n){var o=this;Object(V["a"])(this,e),this.makeRows=Object(a["d"])((function(){for(var e={},t=1;t<=9;t++){e["r".concat(t)]={};for(var c=1;c<=9;c++)e["r".concat(t)]["r".concat(t,"c").concat(c)]=o.sudokuObj.value["r".concat(t,"c").concat(c)]}return e})),this.makeCols=Object(a["d"])((function(){for(var e={},t=1;t<=9;t++){e["c".concat(t)]={};for(var c=1;c<=9;c++)e["c".concat(t)]["r".concat(c,"c").concat(t)]=o.sudokuObj.value["r".concat(c,"c").concat(t)]}return e})),this.getSquare=function(e){var t=[1,2,3],c=[4,5,6],n=[7,8,9],a=[1,2,3];return e.address.r>=1&&e.address.r<=3&&(a=t),e.address.r>=4&&e.address.r<=6&&(a=c),e.address.r>=7&&e.address.r<=9&&(a=n),"s".concat(a[Math.floor((e.address.c-1)/3)])},this.makeSquares=Object(a["d"])((function(){for(var e={s1:{},s2:{},s3:{},s4:{},s5:{},s6:{},s7:{},s8:{},s9:{}},t=1;t<=9;t++)for(var c=1;c<=9;c++)e[o.getSquare(o.sudokuObj.value["r".concat(t,"c").concat(c)])]["r".concat(t,"c").concat(c)]=o.sudokuObj.value["r".concat(t,"c").concat(c)];return e})),this.getPeers=function(e){var t,c,n;return t=o.makeRows.value["r".concat(e.address.r)],c=o.makeCols.value["c".concat(e.address.c)],n=o.makeSquares.value[o.getSquare(e)],{row:t,col:c,square:n}},this.validateSquare=function(e){if(e.given)return e;for(var t=o.getPeers(e),c=t.row,n=t.col,a=t.square,r=[].concat(Object(I["a"])(Object.values(c)),Object(I["a"])(Object.values(n)),Object(I["a"])(Object.values(a))),u=!0,i=0;i<r.length;i++)if(r[i].address!=e.address&&r[i].number==e.number&&(u=!1,e.valid=!1),!u)break;return u&&(e.valid=!0),e},this.firstPassCandidateCalculator=function(){var e=o.makeRows.value,t=o.makeCols.value,c=o.makeSquares.value;for(var n in o.sudokuObj.value)Object.prototype.hasOwnProperty.call(o.sudokuObj.value,n)&&(o.sudokuObj.value[n].candidates=[],o.sudokuObj.value[n].pencilMarks=Array.from({length:9},(function(){return!1})));for(var a=0;a<3;a++){var r=void 0;switch(a){case 0:r=e;break;case 1:r=t;break;case 2:r=c;break}var u=function(e){var t=r[e],c=Object.values(r[e]).map((function(e){return Number(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,t){return t+1}));n=n.filter((function(e){return!c.includes(e)}));var o=function(e){if("."==t[e].number){var c=0==a?Array.from(Array(9),(function(e,t){return t+1})):t[e].candidates;t[e].candidates=[],n.filter((function(e){return c.includes(e)})).forEach((function(c){t[e].candidates.push(c)}))}};for(var u in t)o(u)};for(var i in r)u(i)}var s=function(e){if(Object.prototype.hasOwnProperty.call(o.sudokuObj.value,e)){o.sudokuObj.value[e].candidates.forEach((function(t){o.sudokuObj.value[e].pencilMarks[t-1]=!0}));var t={address:o.sudokuObj.value[e].address,pencilMarks:o.sudokuObj.value[e].pencilMarks,id:o.userId.value};o.socket.send(JSON.stringify({pencilMarkUpdate:t}))}};for(var l in o.sudokuObj.value)s(l);return o.sudokuObj.value},this.sudokuObj=t,this.userId=c,this.socket=n},$=D,H=c("5530"),T=c("bee2"),W=function(){function e(t,c,n,a){var o=this;Object(V["a"])(this,e),this.updatePeerCandidates=function(e){var t=o.validation.getPeers(e),c=t.row,n=t.col,a=t.square,r=[].concat(Object(I["a"])(Object.values(c)),Object(I["a"])(Object.values(n)),Object(I["a"])(Object.values(a))),u=[];return r.forEach((function(t){if("."==t.number&&t.pencilMarks[Number(e.number)-1]){var c=Object(I["a"])(o.sudokuObj.value["r".concat(t.address.r,"c").concat(t.address.c)].pencilMarks);t.pencilMarks[Number(e.number)-1]=!1;var n={address:t.address,pencilMarks:c,id:o.validation.userId.value};u.push(n)}})),u},this.sudokuObj=t,this.users=c,this.socket=n,this.validation=a}return Object(T["a"])(e,[{key:"updateNumber",value:function(e){var t=this,c=e.numberUpdate,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c.address,r=c.number,u=c.id,i=c.associatedPencilMarkUpdates,s=Object(H["a"])({},this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]);if(this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)].number=r,this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]=this.validation.validateSquare(this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]),n){var l;null===(l=i)||void 0===l||l.forEach((function(e){t.updatePencilMarks({pencilMarkUpdate:e},!0)}))}else{var d;i=null!==(d=i)&&void 0!==d?d:this.updatePeerCandidates(this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]);var b=Object(H["a"])({},c);b.associatedPencilMarkUpdates=i,b.number=s.number,this.users.value[u].moves.push({numberUpdate:b}),a||this.socket.send(JSON.stringify({numberUpdate:c}))}}},{key:"updatePencilMarks",value:function(e){var t=e.pencilMarkUpdate,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=t.address,o=t.pencilMark,r=t.pencilMarks,u=t.id,i=Object(I["a"])(this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks);if("delete"==o||r?this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks=r||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks[Number(o)-1]=!this.sudokuObj.value["r".concat(a.r,"c").concat(a.c)].pencilMarks[Number(o)-1],!c){var s=Object(H["a"])({},t);s.pencilMarks=i,this.users.value[u].moves.push({pencilMarkUpdate:s}),n||this.socket.send(JSON.stringify({pencilMarkUpdate:t}))}}},{key:"undo",value:function(e){if(this.users.value[e].moves.length){var t=this.users.value[e].moves.pop();t.numberUpdate?this.updateNumber({numberUpdate:t.numberUpdate},!0):t.pencilMarkUpdate&&(console.log("sending"),this.updatePencilMarks({pencilMarkUpdate:t.pencilMarkUpdate},!0))}}}]),e}(),K=W,Q={setup:function(){var e,t=null!==(e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==e?e:"ws://tealog.xyz:8010",c=new WebSocket(t);Object(a["q"])((function(){c.close(1e3,"logging off")})),c.onopen=function(){console.log("Connected established to ".concat(t))};var n=Object(B["i"])(),o=Object(B["i"])(),r=Object(B["i"])({}),u=Object(B["i"])(""),i=Object(B["i"])(!1),s=Object(B["i"])(!1),l=Object(B["i"])(!0),d=new $(o,u,c),b=new K(o,r,c,d),v=Object(B["i"])(!1);c.onmessage=function(e){var t=e.data,c=JSON.parse(t),a=c.color,i=c.sudokuObj,s=c.id,d=c.users,f=c.focusUpdate,j=c.numberUpdate,O=c.pencilMarkUpdate,p=c.undo,k=c.hint;k&&(console.log(k),v.value=k);var m=i||{},h=m.puzzle;if(i&&(o.value=h,l.value=!1),d&&(r.value=d),a&&(n.value=a,document.documentElement.style.setProperty("--color","".concat(a))),s&&(u.value=s),f)try{var y=f.id,g=f.focus;r.value[y].focus=g}catch(w){console.log(JSON.parse(t)),console.log(w),console.log(Object(B["n"])(r.value)),console.log(Object(B["n"])(u.value))}j&&b.updateNumber({numberUpdate:j},!1,!0),O&&b.updatePencilMarks({pencilMarkUpdate:O},!1,!0),p&&b.undo(p)};var f=Object(a["d"])((function(){var e={};for(var t in r.value)if(Object.prototype.hasOwnProperty.call(r.value,t)){var c=r.value[t];e["r".concat(c.focus.row,"c").concat(c.focus.col)]=c.color}return e})),j=Object(a["d"])((function(){var e,t,c,n,a=r.value[u.value],i=null;null!=a.focus.row&&("."!=(null===o||void 0===o||null===(e=o.value)||void 0===e||null===(t=e["r".concat(a.focus.row,"c").concat(a.focus.col)])||void 0===t?void 0:t.number)&&(i=null===o||void 0===o||null===(c=o.value)||void 0===c||null===(n=c["r".concat(a.focus.row,"c").concat(a.focus.col)])||void 0===n?void 0:n.number));return i})),O=Object(a["d"])((function(){return r.value[u.value].focus})),p=Object(B["i"])({});Object(a["r"])((function(){p.value={}}));var k=function(e,t,n,a){var o,i;e+=n,t+=a,e>9||t>9||e<1||t<1||(null===p||void 0===p||null===(o=p.value)||void 0===o||null===(i=o["r".concat(e,"c").concat(t)])||void 0===i||i.focus(),r.value[u.value].focus={row:e,col:t},c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:e,col:t}}})))},m=function(e){var t,n,a=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],l=r.value[u.value].focus,d=l.row,v=l.col;if(null==d||null==v)return d=5,v=5,r.value[u.value].focus={row:d,col:v},void c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:d,col:v}}}));if(!(null===o||void 0===o||null===(t=o.value)||void 0===t||null===(n=t["r".concat(d,"c").concat(v)])||void 0===n?void 0:n.given)&&a.includes(e.key))if(e.preventDefault(),i.value){var f,j=null===o||void 0===o||null===(f=o.value)||void 0===f?void 0:f["r".concat(d,"c").concat(v)],O=j.address,p={address:O,pencilMark:e.key,id:u.value};b.updatePencilMarks({pencilMarkUpdate:p})}else{var m,h,y=null===o||void 0===o||null===(m=o.value)||void 0===m?void 0:m["r".concat(d,"c").concat(v)],g=y.address,w={address:g,number:e.key,id:u.value};b.updateNumber({numberUpdate:w}),b.updatePeerCandidates(null===o||void 0===o||null===(h=o.value)||void 0===h?void 0:h["r".concat(d,"c").concat(v)])}else if("Backspace"==e.key)if(e.preventDefault(),i.value){var M,P=null===o||void 0===o||null===(M=o.value)||void 0===M?void 0:M["r".concat(d,"c").concat(v)],N=P.address,U={address:N,pencilMark:"delete",id:u.value};b.updatePencilMarks({pencilMarkUpdate:U})}else{var S,_=null===o||void 0===o||null===(S=o.value)||void 0===S?void 0:S["r".concat(d,"c").concat(v)],C=_.address,x={address:C,number:".",id:u.value};b.updateNumber({numberUpdate:x})}else if(s.includes(e.key))switch(e.preventDefault(),e.key){case"ArrowRight":k(d,v,0,1);break;case"ArrowLeft":k(d,v,0,-1);break;case"ArrowDown":k(d,v,1,0);break;case"ArrowUp":k(d,v,-1,0);break}else"Shift"==e.key?i.value=!i.value:"z"==e.key.toLowerCase()&&e.metaKey&&(b.undo(u.value),c.send(JSON.stringify({undo:u.value})))};document.body.addEventListener("keydown",(function(e){m(e)}));var h=function(e){var t=e.row,n=e.col;r.value[u.value].focus={row:t,col:n},c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:t,col:n}}}))},y=Object(B["i"])(null),g=Object(B["i"])(!1),w=function(e){e.target},M=function(e){console.log("triggered"),e||(document.body.addEventListener("mousedown",w),g.value=!0)},P=d.firstPassCandidateCalculator,N=function(){c.send(JSON.stringify({hint:!0}))},U=function(){console.log("testFunction success")};return{testFunction:U,popup:y,checkNew:g,selfFocus:O,sudokuObj:o,newGame:M,handleInput:m,handleClick:h,inputs:p,color:n,id:u,checkFocus:f,users:r,notating:i,highlightNumbers:j,firstPassCandidateCalculator:P,candidates:s,loading:l,requestHint:N,hint:v}},components:{BaseButton:z,BasePopup:F},name:"PuzzleView"};c("e875");Q.render=C,Q.__scopeId="data-v-4b06eb0a";var X=Q,Y=Object(a["G"])("data-v-5dffbb44");Object(a["x"])("data-v-5dffbb44");var Z={id:"main"},ee={id:"gamelist-container"},te={class:"gamelist"},ce=Object(a["i"])("Puzzle"),ne={class:"actions"},ae=Object(a["i"])("New Game");Object(a["v"])();var oe=Y((function(e,t){var c=Object(a["A"])("RouterLink"),n=Object(a["A"])("base-button"),o=Object(a["A"])("base-popup");return Object(a["u"])(),Object(a["e"])("div",Z,[Object(a["j"])("div",ee,[Object(a["j"])("div",te,[Object(a["j"])(c,{to:"/puzzle"},{default:Y((function(){return[ce]})),_:1})]),Object(a["j"])("div",ne,[Object(a["j"])(n,{style:{"margin-top":"auto"},onMouseup:t[1]||(t[1]=function(t){return e.newGamePopup=!0})},{default:Y((function(){return[ae]})),_:1})]),e.newGamePopup?Object(a["j"])(o,{key:0,title:"New Game Popup"}):Object(a["f"])("",!0)])])})),re=c("8c4f"),ue=re.RouterLink,ie={setup:function(){var e=Object(B["i"])(!1);return{newGamePopup:e}},components:{RouterLink:ue,BasePopup:F,BaseButton:z},name:"GameLobbyView"};c("ea3a");ie.render=oe,ie.__scopeId="data-v-5dffbb44";var se=ie,le=[{path:"/puzzle",name:"Puzzle",component:X},{path:"/",name:"Game Lobby",component:se}],de=Object(d["createRouter"])({history:Object(d["createWebHistory"])("/"),routes:le}),be=de;Object(n["a"])(l).use(be).mount("#app")},e6f2:function(e,t,c){},e875:function(e,t,c){"use strict";c("250e")},ea3a:function(e,t,c){"use strict";c("9a31")}});
//# sourceMappingURL=app.d49a0862.js.map