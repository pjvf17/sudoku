(function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],d=0,b=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&b.push(n[r][0]),n[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],a=!0,u=1;u<c.length;u++){var s=c[u];0!==n[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},n={app:0},o=[];function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"0cd5":function(e,t,c){"use strict";c("da67")},"64be":function(e,t,c){"use strict";c("98e6")},"6a37":function(e,t,c){"use strict";c("e6f2")},"98e6":function(e,t,c){},"9a31":function(e,t,c){},b3d4:function(e,t,c){"use strict";c("e321")},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("830f"),n=c("5c40"),o={id:"app"};function r(e,t){var c=Object(n["A"])("RouterView");return Object(n["u"])(),Object(n["e"])("div",o,[Object(n["j"])(c)])}var u=c("8c4f"),s=u.RouterView,i={components:{RouterView:s}};c("64be");i.render=r;var l=i,d=c("8c4f"),b=(c("99af"),c("fb6a"),c("9ff4")),v=Object(n["G"])("data-v-b020c608");Object(n["x"])("data-v-b020c608");var f={id:"main"},j={key:0,class:"pane"},O={class:"inputReplacement"},p={key:1,"dominant-baseline":"middle","text-anchor":"middle"},k={class:"notation-text",style:{color:"white"}},m={key:0,style:{color:"white"},class:"hint"},h={class:"actions"},y=Object(n["i"])("Start New Game"),g={class:"actions"},w=Object(n["i"])("Start new game"),M=Object(n["i"])("Take me back"),P=Object(n["i"])("Hint"),N=Object(n["i"])("Fill In Candidates"),S={key:1,class:"pane"},U={class:"actions"},_=Object(n["i"])("Start New Game");Object(n["v"])();var C=v((function(e,t){var c=Object(n["A"])("BaseButton"),a=Object(n["A"])("base-popup");return Object(n["u"])(),Object(n["e"])("div",f,[e.loading?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["e"])("div",j,[Object(n["j"])("table",null,[Object(n["j"])("tbody",null,[(Object(n["u"])(),Object(n["e"])(n["b"],null,Object(n["y"])(9,(function(t){return Object(n["j"])("tr",{key:t},[(Object(n["u"])(),Object(n["e"])(n["b"],null,Object(n["y"])(9,(function(c){return Object(n["j"])("td",{key:"r".concat(t,"c").concat(c,"-td"),id:"r".concat(t,"c").concat(c,"-td-id"),class:[{"border-right":c%3==0,"border-bottom":t%3==0,"border-left":1==c,"border-top":1==t,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid,"highlight-number":e.highlightNumbers==e.sudokuObj["r".concat(t,"c").concat(c)].number}],onClick:function(a){return e.handleClick({row:t,col:c})},style:{"background-color":e.selfFocus.row!=t&&e.selfFocus.col!=c||e.checkFocus["r".concat(t,"c").concat(c)]?e.checkFocus["r".concat(t,"c").concat(c)]:"".concat(e.color.slice(0,7),"44")}},[(Object(n["u"])(),Object(n["e"])("svg",O,[Object(n["j"])("text",{class:[{bold:e.sudokuObj["r".concat(t,"c").concat(c)].given,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(a){e.inputs["r".concat(t,"c").concat(c)]=a}},Object(b["G"])("."==e.sudokuObj["r".concat(t,"c").concat(c)].number?"":e.sudokuObj["r".concat(t,"c").concat(c)].number),3),(Object(n["u"])(!0),Object(n["e"])(n["b"],null,Object(n["y"])(e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks,(function(a,o){return Object(n["u"])(),Object(n["e"])("g",{key:o},[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[o]&&"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(n["u"])(),Object(n["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==o+1}],cy:9+22*Math.floor(o/3),cx:8.5+o%3*22,r:"8"},null,10,["cy","cx"])):Object(n["f"])("",!0),"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(n["u"])(),Object(n["e"])("text",p,[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[o]?(Object(n["u"])(),Object(n["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(o/3),x:8+o%3*22},Object(b["G"])(o+1),9,["y","x"])):Object(n["f"])("",!0)])):Object(n["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(n["j"])("span",k,Object(b["G"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),e.hint?(Object(n["u"])(),Object(n["e"])("div",m,Object(b["G"])(e.hint),1)):Object(n["f"])("",!0),Object(n["j"])("div",h,[Object(n["j"])(c,{onClick:t[1]||(t[1]=function(t){return e.newGame()}),class:"button"},{default:v((function(){return[y]})),_:1}),e.checkNew?Object(n["j"])(a,{key:0,title:"Are you sure you want to start a new game?",ref:"popup",onOutside:t[4]||(t[4]=function(t){return e.testFunction()})},{default:v((function(){return[Object(n["j"])("div",g,[Object(n["j"])(c,{onMouseup:t[2]||(t[2]=function(t){return e.newGame(!0)}),class:"yes"},{default:v((function(){return[w]})),_:1}),Object(n["j"])(c,{onClick:t[3]||(t[3]=function(t){return e.checkNew=!1}),class:"no"},{default:v((function(){return[M]})),_:1})])]})),_:1},512):Object(n["f"])("",!0),Object(n["j"])(c,{onMouseup:t[5]||(t[5]=function(t){return e.requestHint()})},{default:v((function(){return[P]})),_:1}),Object(n["j"])(c,{onMouseup:t[6]||(t[6]=function(t){return e.firstPassCandidateCalculator()}),class:"button"},{default:v((function(){return[N]})),_:1})])])),e.loading?(Object(n["u"])(),Object(n["e"])("div",S,[Object(n["j"])("div",U,[Object(n["j"])(c,{onClick:t[7]||(t[7]=function(t){return e.newGame()}),class:"button"},{default:v((function(){return[_]})),_:1})])])):Object(n["f"])("",!0)])})),G=(c("caad"),Object(n["G"])("data-v-6d59abca")),x=G((function(e,t){return Object(n["u"])(),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click",t)}),onMouseup:t[2]||(t[2]=function(t){return e.$emit("mousup",t)})},[Object(n["z"])(e.$slots,"default")],32)})),A={name:"BaseButton"};c("6a37");A.render=x,A.__scopeId="data-v-6d59abca";var z=A,q=Object(n["G"])("data-v-b73bfbfc");Object(n["x"])("data-v-b73bfbfc");var R={class:"popup",ref:"popup"},B={key:0,class:"title"};Object(n["v"])();var J=q((function(e,t){return Object(n["u"])(),Object(n["e"])("div",R,[e.title?(Object(n["u"])(),Object(n["e"])("h3",B,Object(b["G"])(e.title),1)):Object(n["f"])("",!0),Object(n["z"])(e.$slots,"default")],512)})),L=c("a1e9"),E=Object(n["k"])({emits:["outside"],props:{title:String},setup:function(e,t){var c=t.emit,a=Object(L["i"])(),n=function(e){if(a.value){var t=e.target;a.value.contains(t)||(c("outside"),console.log("emitted"))}};return document.body.addEventListener("mousedown",n),{popup:a}},name:"BasePopup"}),I=E;c("0cd5");I.render=J,I.__scopeId="data-v-b73bfbfc";var F=I,V=(c("4de4"),c("4160"),c("a630"),c("d81d"),c("a9e3"),c("07ac"),c("2532"),c("3ca3"),c("159b"),c("2909")),D=c("d4ec"),H=function e(t,c,a){var o=this;Object(D["a"])(this,e),this.makeRows=Object(n["d"])((function(){for(var e={},t=1;t<=9;t++){e["r".concat(t)]={};for(var c=1;c<=9;c++)e["r".concat(t)]["r".concat(t,"c").concat(c)]=o.sudokuObj.value["r".concat(t,"c").concat(c)]}return e})),this.makeCols=Object(n["d"])((function(){for(var e={},t=1;t<=9;t++){e["c".concat(t)]={};for(var c=1;c<=9;c++)e["c".concat(t)]["r".concat(c,"c").concat(t)]=o.sudokuObj.value["r".concat(c,"c").concat(t)]}return e})),this.getSquare=function(e){var t=[1,2,3],c=[4,5,6],a=[7,8,9],n=[1,2,3];return e.address.r>=1&&e.address.r<=3&&(n=t),e.address.r>=4&&e.address.r<=6&&(n=c),e.address.r>=7&&e.address.r<=9&&(n=a),"s".concat(n[Math.floor((e.address.c-1)/3)])},this.makeSquares=Object(n["d"])((function(){for(var e={s1:{},s2:{},s3:{},s4:{},s5:{},s6:{},s7:{},s8:{},s9:{}},t=1;t<=9;t++)for(var c=1;c<=9;c++)e[o.getSquare(o.sudokuObj.value["r".concat(t,"c").concat(c)])]["r".concat(t,"c").concat(c)]=o.sudokuObj.value["r".concat(t,"c").concat(c)];return e})),this.getPeers=function(e){var t,c,a;return t=o.makeRows.value["r".concat(e.address.r)],c=o.makeCols.value["c".concat(e.address.c)],a=o.makeSquares.value[o.getSquare(e)],{row:t,col:c,square:a}},this.validateSquare=function(e){if(e.given)return e;for(var t=o.getPeers(e),c=t.row,a=t.col,n=t.square,r=[].concat(Object(V["a"])(Object.values(c)),Object(V["a"])(Object.values(a)),Object(V["a"])(Object.values(n))),u=!0,s=0;s<r.length;s++)if(r[s].address!=e.address&&r[s].number==e.number&&(u=!1,e.valid=!1),!u)break;return u&&(e.valid=!0),e},this.firstPassCandidateCalculator=function(){var e=o.makeRows.value,t=o.makeCols.value,c=o.makeSquares.value;for(var a in o.sudokuObj.value)Object.prototype.hasOwnProperty.call(o.sudokuObj.value,a)&&(o.sudokuObj.value[a].candidates=[],o.sudokuObj.value[a].pencilMarks=Array.from({length:9},(function(){return!1})));for(var n=0;n<3;n++){var r=void 0;switch(n){case 0:r=e;break;case 1:r=t;break;case 2:r=c;break}var u=function(e){var t=r[e],c=Object.values(r[e]).map((function(e){return Number(e.number)})).filter((function(e){return!isNaN(e)})),a=Array.from(Array(9),(function(e,t){return t+1}));a=a.filter((function(e){return!c.includes(e)}));var o=function(e){if("."==t[e].number){var c=0==n?Array.from(Array(9),(function(e,t){return t+1})):t[e].candidates;t[e].candidates=[],a.filter((function(e){return c.includes(e)})).forEach((function(c){t[e].candidates.push(c)}))}};for(var u in t)o(u)};for(var s in r)u(s)}var i=function(e){if(Object.prototype.hasOwnProperty.call(o.sudokuObj.value,e)){o.sudokuObj.value[e].candidates.forEach((function(t){o.sudokuObj.value[e].pencilMarks[t-1]=!0}));var t={address:o.sudokuObj.value[e].address,pencilMarks:o.sudokuObj.value[e].pencilMarks,id:o.userId.value};o.socket.send(JSON.stringify({pencilMarkUpdate:t}))}};for(var l in o.sudokuObj.value)i(l);return o.sudokuObj.value},this.sudokuObj=t,this.userId=c,this.socket=a},T=H,$=c("5530"),W=c("bee2"),K=function(){function e(t,c,a,n){var o=this;Object(D["a"])(this,e),this.updatePeerCandidates=function(e){var t=o.validation.getPeers(e),c=t.row,a=t.col,n=t.square,r=[].concat(Object(V["a"])(Object.values(c)),Object(V["a"])(Object.values(a)),Object(V["a"])(Object.values(n))),u=[];return r.forEach((function(t){if("."==t.number&&t.pencilMarks[Number(e.number)-1]){var c=Object(V["a"])(o.sudokuObj.value["r".concat(t.address.r,"c").concat(t.address.c)].pencilMarks);t.pencilMarks[Number(e.number)-1]=!1;var a={address:t.address,pencilMarks:c,id:o.validation.userId.value};u.push(a)}})),u},this.sudokuObj=t,this.users=c,this.socket=a,this.validation=n}return Object(W["a"])(e,[{key:"updateNumber",value:function(e){var t=this,c=e.numberUpdate,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c.address,r=c.number,u=c.id,s=c.associatedPencilMarkUpdates,i=Object($["a"])({},this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]);if(this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)].number=r,this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]=this.validation.validateSquare(this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]),a){var l;null===(l=s)||void 0===l||l.forEach((function(e){t.updatePencilMarks({pencilMarkUpdate:e},!0)}))}else{var d;s=null!==(d=s)&&void 0!==d?d:this.updatePeerCandidates(this.sudokuObj.value["r".concat(o.r,"c").concat(o.c)]);var b=Object($["a"])({},c);b.associatedPencilMarkUpdates=s,b.number=i.number,this.users.value[u].moves.push({numberUpdate:b}),n||this.socket.send(JSON.stringify({numberUpdate:c}))}}},{key:"updatePencilMarks",value:function(e){var t=e.pencilMarkUpdate,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.address,o=t.pencilMark,r=t.pencilMarks,u=t.id,s=Object(V["a"])(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==o||r?this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks=r||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[Number(o)-1]=!this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[Number(o)-1],!c){var i=Object($["a"])({},t);i.pencilMarks=s,this.users.value[u].moves.push({pencilMarkUpdate:i}),a||this.socket.send(JSON.stringify({pencilMarkUpdate:t}))}}},{key:"undo",value:function(e){if(this.users.value[e].moves.length){var t=this.users.value[e].moves.pop();t.numberUpdate?this.updateNumber({numberUpdate:t.numberUpdate},!0):t.pencilMarkUpdate&&(console.log("sending"),this.updatePencilMarks({pencilMarkUpdate:t.pencilMarkUpdate},!0))}}}]),e}(),Q=K,X={setup:function(){var e,t=null!==(e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==e?e:"ws://tealog.xyz:8010",c=new WebSocket(t);Object(n["q"])((function(){c.close(1e3,"logging off")})),c.onopen=function(){console.log("Connected established to ".concat(t))};var a=Object(L["i"])(),o=Object(L["i"])(),r=Object(L["i"])({}),u=Object(L["i"])(""),s=Object(L["i"])(!1),i=Object(L["i"])(!1),l=Object(L["i"])(!0),d=new T(o,u,c),b=new Q(o,r,c,d),v=Object(L["i"])(!1);c.onmessage=function(e){var t=e.data,c=JSON.parse(t),n=c.color,s=c.sudokuObj,i=c.id,d=c.users,f=c.focusUpdate,j=c.numberUpdate,O=c.pencilMarkUpdate,p=c.undo,k=c.hint;k&&(console.log(k),v.value=k);var m=s||{},h=m.puzzle;if(s&&(o.value=h,l.value=!1),d&&(r.value=d),n&&(a.value=n,document.documentElement.style.setProperty("--color","".concat(n))),i&&(u.value=i),f)try{var y=f.id,g=f.focus;r.value[y].focus=g}catch(w){console.log(JSON.parse(t)),console.log(w),console.log(Object(L["n"])(r.value)),console.log(Object(L["n"])(u.value))}j&&b.updateNumber({numberUpdate:j},!1,!0),O&&b.updatePencilMarks({pencilMarkUpdate:O},!1,!0),p&&b.undo(p)};var f=Object(n["d"])((function(){var e={};for(var t in r.value)if(Object.prototype.hasOwnProperty.call(r.value,t)){var c=r.value[t];e["r".concat(c.focus.row,"c").concat(c.focus.col)]=c.color}return e})),j=Object(n["d"])((function(){var e,t,c,a,n=r.value[u.value],s=null;null!=n.focus.row&&("."!=(null===o||void 0===o||null===(e=o.value)||void 0===e||null===(t=e["r".concat(n.focus.row,"c").concat(n.focus.col)])||void 0===t?void 0:t.number)&&(s=null===o||void 0===o||null===(c=o.value)||void 0===c||null===(a=c["r".concat(n.focus.row,"c").concat(n.focus.col)])||void 0===a?void 0:a.number));return s})),O=Object(n["d"])((function(){return r.value[u.value].focus})),p=Object(L["i"])({});Object(n["r"])((function(){p.value={}}));var k=function(e,t,a,n){var o,s;e+=a,t+=n,e>9||t>9||e<1||t<1||(null===p||void 0===p||null===(o=p.value)||void 0===o||null===(s=o["r".concat(e,"c").concat(t)])||void 0===s||s.focus(),r.value[u.value].focus={row:e,col:t},c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:e,col:t}}})))},m=function(e){var t,a,n=["1","2","3","4","5","6","7","8","9"],i=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],l=r.value[u.value].focus,d=l.row,v=l.col;if(null==d||null==v)return d=5,v=5,r.value[u.value].focus={row:d,col:v},void c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:d,col:v}}}));if(!(null===o||void 0===o||null===(t=o.value)||void 0===t||null===(a=t["r".concat(d,"c").concat(v)])||void 0===a?void 0:a.given)&&n.includes(e.key))if(e.preventDefault(),s.value){var f,j=null===o||void 0===o||null===(f=o.value)||void 0===f?void 0:f["r".concat(d,"c").concat(v)],O=j.address,p={address:O,pencilMark:e.key,id:u.value};b.updatePencilMarks({pencilMarkUpdate:p})}else{var m,h,y=null===o||void 0===o||null===(m=o.value)||void 0===m?void 0:m["r".concat(d,"c").concat(v)],g=y.address,w={address:g,number:e.key,id:u.value};b.updateNumber({numberUpdate:w}),b.updatePeerCandidates(null===o||void 0===o||null===(h=o.value)||void 0===h?void 0:h["r".concat(d,"c").concat(v)])}else if("Backspace"==e.key)if(e.preventDefault(),s.value){var M,P=null===o||void 0===o||null===(M=o.value)||void 0===M?void 0:M["r".concat(d,"c").concat(v)],N=P.address,S={address:N,pencilMark:"delete",id:u.value};b.updatePencilMarks({pencilMarkUpdate:S})}else{var U,_=null===o||void 0===o||null===(U=o.value)||void 0===U?void 0:U["r".concat(d,"c").concat(v)],C=_.address,G={address:C,number:".",id:u.value};b.updateNumber({numberUpdate:G})}else if(i.includes(e.key))switch(e.preventDefault(),e.key){case"ArrowRight":k(d,v,0,1);break;case"ArrowLeft":k(d,v,0,-1);break;case"ArrowDown":k(d,v,1,0);break;case"ArrowUp":k(d,v,-1,0);break}else"Shift"==e.key?s.value=!s.value:"z"==e.key.toLowerCase()&&e.metaKey&&(b.undo(u.value),c.send(JSON.stringify({undo:u.value})))};document.body.addEventListener("keydown",(function(e){m(e)}));var h=function(e){var t=e.row,a=e.col;r.value[u.value].focus={row:t,col:a},c.send(JSON.stringify({focusUpdate:{id:u.value,focus:{row:t,col:a}}}))},y=Object(L["i"])(null),g=Object(L["i"])(!1),w=function(e){e?(console.log("Sending new game request to server"),c.send(JSON.stringify({newGame:!0})),g.value=!1):g.value=!0},M=d.firstPassCandidateCalculator,P=function(){c.send(JSON.stringify({hint:!0}))};return{popup:y,checkNew:g,selfFocus:O,sudokuObj:o,newGame:w,handleInput:m,handleClick:h,inputs:p,color:a,id:u,checkFocus:f,users:r,notating:s,highlightNumbers:j,firstPassCandidateCalculator:M,candidates:i,loading:l,requestHint:P,hint:v}},components:{BaseButton:z,BasePopup:F},name:"PuzzleView"};c("b3d4");X.render=C,X.__scopeId="data-v-b020c608";var Y=X,Z=Object(n["G"])("data-v-5dffbb44");Object(n["x"])("data-v-5dffbb44");var ee={id:"main"},te={id:"gamelist-container"},ce={class:"gamelist"},ae=Object(n["i"])("Puzzle"),ne={class:"actions"},oe=Object(n["i"])("New Game");Object(n["v"])();var re=Z((function(e,t){var c=Object(n["A"])("RouterLink"),a=Object(n["A"])("base-button"),o=Object(n["A"])("base-popup");return Object(n["u"])(),Object(n["e"])("div",ee,[Object(n["j"])("div",te,[Object(n["j"])("div",ce,[Object(n["j"])(c,{to:"/puzzle"},{default:Z((function(){return[ae]})),_:1})]),Object(n["j"])("div",ne,[Object(n["j"])(a,{style:{"margin-top":"auto"},onMouseup:t[1]||(t[1]=function(t){return e.newGamePopup=!0})},{default:Z((function(){return[oe]})),_:1})]),e.newGamePopup?Object(n["j"])(o,{key:0,title:"New Game Popup"}):Object(n["f"])("",!0)])])})),ue=c("8c4f"),se=ue.RouterLink,ie={setup:function(){var e=Object(L["i"])(!1);return{newGamePopup:e}},components:{RouterLink:se,BasePopup:F,BaseButton:z},name:"GameLobbyView"};c("ea3a");ie.render=re,ie.__scopeId="data-v-5dffbb44";var le=ie,de=[{path:"/puzzle",name:"Puzzle",component:Y},{path:"/",name:"Game Lobby",component:le}],be=Object(d["createRouter"])({history:Object(d["createWebHistory"])("/"),routes:de}),ve=be;Object(a["a"])(l).use(ve).mount("#app")},da67:function(e,t,c){},e321:function(e,t,c){},e6f2:function(e,t,c){},ea3a:function(e,t,c){"use strict";c("9a31")}});
//# sourceMappingURL=app.f4f946d9.js.map