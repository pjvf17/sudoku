(function(e){function t(t){for(var a,o,u=t[0],s=t[1],l=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);i&&i(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,u=1;u<c.length;u++){var s=c[u];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=c[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=a,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(c,a,function(t){return e[t]}.bind(null,a));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var i=s;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"40b0":function(e,t,c){},5159:function(e,t,c){"use strict";c("40b0")},"942d":function(e,t,c){},"9cdc":function(e,t,c){"use strict";c("942d")},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("830f"),n=(c("99af"),c("fb6a"),c("5c40")),r=c("9ff4"),o={id:"app"},u={key:0,class:"pane"},s={class:"inputReplacement"},l={key:1,"dominant-baseline":"middle","text-anchor":"middle"},i={class:"notation-text",style:{color:"white"}},d={class:"actions"},b=Object(n["i"])("Start New Game"),v={key:0,class:"popup",ref:"popup"},f=Object(n["j"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),O={class:"actions"},p=Object(n["i"])("Start new game"),j=Object(n["i"])("Take me back"),k=Object(n["i"])("Fill In Candidates");function h(e,t){var c=Object(n["u"])("BaseButton");return Object(n["r"])(),Object(n["e"])("div",o,[e.loading?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("div",u,[Object(n["j"])("table",null,[Object(n["j"])("tbody",null,[(Object(n["r"])(),Object(n["e"])(n["b"],null,Object(n["s"])(9,(function(t){return Object(n["j"])("tr",{key:t},[(Object(n["r"])(),Object(n["e"])(n["b"],null,Object(n["s"])(9,(function(c){return Object(n["j"])("td",{key:"r".concat(t,"c").concat(c,"-td"),id:"r".concat(t,"c").concat(c,"-td-id"),class:[{"border-right":c%3==0,"border-bottom":t%3==0,"border-left":0==c,"border-top":0==t,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid,"highlight-number":e.highlightNumbers==e.sudokuObj["r".concat(t,"c").concat(c)].number}],onClick:function(a){return e.handleClick({row:t,col:c})},style:{"background-color":e.selfFocus.row!=t&&e.selfFocus.col!=c||e.checkFocus["r".concat(t,"c").concat(c)]?e.checkFocus["r".concat(t,"c").concat(c)]:"".concat(e.color.slice(0,7),"44")}},[(Object(n["r"])(),Object(n["e"])("svg",s,[Object(n["j"])("text",{class:[{bold:e.sudokuObj["r".concat(t,"c").concat(c)].given,invalid:!e.sudokuObj["r".concat(t,"c").concat(c)].valid},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(a){e.inputs["r".concat(t,"c").concat(c)]=a}},Object(r["G"])("."==e.sudokuObj["r".concat(t,"c").concat(c)].number?"":e.sudokuObj["r".concat(t,"c").concat(c)].number),3),(Object(n["r"])(!0),Object(n["e"])(n["b"],null,Object(n["s"])(e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks,(function(a,o){return Object(n["r"])(),Object(n["e"])("g",{key:o},[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[o]&&"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(n["r"])(),Object(n["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==o+1}],cy:9+22*Math.floor(o/3),cx:8.5+o%3*22,r:"8"},null,10,["cy","cx"])):Object(n["f"])("",!0),"."==e.sudokuObj["r".concat(t,"c").concat(c)].number?(Object(n["r"])(),Object(n["e"])("text",l,[e.sudokuObj["r".concat(t,"c").concat(c)].pencilMarks[o]?(Object(n["r"])(),Object(n["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(o/3),x:8+o%3*22},Object(r["G"])(o+1),9,["y","x"])):Object(n["f"])("",!0)])):Object(n["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(n["j"])("span",i,Object(r["G"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(n["j"])("div",d,[Object(n["j"])(c,{onClick:t[1]||(t[1]=function(t){return e.newGame()}),class:"button"},{default:Object(n["A"])((function(){return[b]})),_:1}),e.checkNew?(Object(n["r"])(),Object(n["e"])("div",v,[f,Object(n["j"])("div",O,[Object(n["j"])(c,{onMouseup:t[2]||(t[2]=function(t){return e.newGame(!0)}),class:"yes"},{default:Object(n["A"])((function(){return[p]})),_:1}),Object(n["j"])(c,{onClick:t[3]||(t[3]=function(t){return e.checkNew=!1}),class:"no"},{default:Object(n["A"])((function(){return[j]})),_:1})])],512)):Object(n["f"])("",!0),Object(n["j"])(c,{onMouseup:t[4]||(t[4]=function(t){return e.firstPassCandidateCalculator()}),class:"button"},{default:Object(n["A"])((function(){return[k]})),_:1})])]))])}c("caad");var m=Object(n["B"])("data-v-0203f82a"),g=m((function(e,t){return Object(n["r"])(),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click",t)}),onMouseup:t[2]||(t[2]=function(t){return e.$emit("mousup",t)})},[Object(n["t"])(e.$slots,"default")],32)}));c("5159");const y={};y.render=g,y.__scopeId="data-v-0203f82a";var w,M=y,U=c("a1e9"),N=(c("4de4"),c("4160"),c("a630"),c("d81d"),c("a9e3"),c("07ac"),c("2532"),c("3ca3"),c("159b"),c("2909")),P=c("d4ec"),S=function e(t,c,a){var r=this;Object(P["a"])(this,e),this.makeRows=Object(n["d"])((function(){for(var e={},t=1;t<=9;t++){e["r".concat(t)]={};for(var c=1;c<=9;c++)e["r".concat(t)]["r".concat(t,"c").concat(c)]=r.sudokuObj.value["r".concat(t,"c").concat(c)]}return e})),this.makeCols=Object(n["d"])((function(){for(var e={},t=1;t<=9;t++){e["c".concat(t)]={};for(var c=1;c<=9;c++)e["c".concat(t)]["r".concat(c,"c").concat(t)]=r.sudokuObj.value["r".concat(c,"c").concat(t)]}return e})),this.getSquare=function(e){var t=[1,2,3],c=[4,5,6],a=[7,8,9],n=[1,2,3];return e.address.r>=1&&e.address.r<=3&&(n=t),e.address.r>=4&&e.address.r<=6&&(n=c),e.address.r>=7&&e.address.r<=9&&(n=a),"s".concat(n[Math.floor((e.address.c-1)/3)])},this.makeSquares=Object(n["d"])((function(){for(var e={s1:{},s2:{},s3:{},s4:{},s5:{},s6:{},s7:{},s8:{},s9:{}},t=1;t<=9;t++)for(var c=1;c<=9;c++)e[r.getSquare(r.sudokuObj.value["r".concat(t,"c").concat(c)])]["r".concat(t,"c").concat(c)]=r.sudokuObj.value["r".concat(t,"c").concat(c)];return e})),this.getPeers=function(e){var t,c,a;return t=r.makeRows.value["r".concat(e.address.r)],c=r.makeCols.value["c".concat(e.address.c)],a=r.makeSquares.value[r.getSquare(e)],{row:t,col:c,square:a}},this.validateSquare=function(e){if(e.given)return e;for(var t=r.getPeers(e),c=t.row,a=t.col,n=t.square,o=[].concat(Object(N["a"])(Object.values(c)),Object(N["a"])(Object.values(a)),Object(N["a"])(Object.values(n))),u=!0,s=0;s<o.length;s++)if(o[s].address!=e.address&&o[s].number==e.number&&(u=!1,e.valid=!1),!u)break;return u&&(e.valid=!0),e},this.firstPassCandidateCalculator=function(){var e=r.makeRows.value,t=r.makeCols.value,c=r.makeSquares.value;for(var a in r.sudokuObj.value)Object.prototype.hasOwnProperty.call(r.sudokuObj.value,a)&&(r.sudokuObj.value[a].candidates=[],r.sudokuObj.value[a].pencilMarks=Array.from({length:9},(function(){return!1})));for(var n=0;n<3;n++){var o=void 0;switch(n){case 0:o=e;break;case 1:o=t;break;case 2:o=c;break}var u=function(e){var t=o[e],c=Object.values(o[e]).map((function(e){return Number(e.number)})).filter((function(e){return!isNaN(e)})),a=Array.from(Array(9),(function(e,t){return t+1}));a=a.filter((function(e){return!c.includes(e)}));var r=function(e){if("."==t[e].number){var c=0==n?Array.from(Array(9),(function(e,t){return t+1})):t[e].candidates;t[e].candidates=[],a.filter((function(e){return c.includes(e)})).forEach((function(c){t[e].candidates.push(c)}))}};for(var u in t)r(u)};for(var s in o)u(s)}var l=function(e){if(Object.prototype.hasOwnProperty.call(r.sudokuObj.value,e)){r.sudokuObj.value[e].candidates.forEach((function(t){r.sudokuObj.value[e].pencilMarks[t-1]=!0}));var t={address:r.sudokuObj.value[e].address,pencilMarks:r.sudokuObj.value[e].pencilMarks,id:r.userId.value};r.socket.send(JSON.stringify({pencilMarkUpdate:t}))}};for(var i in r.sudokuObj.value)l(i);return r.sudokuObj.value},this.sudokuObj=t,this.userId=c,this.socket=a},C=S,A=c("5530"),_=c("bee2"),E=function(){function e(t,c,a,n){var r=this;Object(P["a"])(this,e),this.updatePeerCandidates=function(e){var t=r.validation.getPeers(e),c=t.row,a=t.col,n=t.square,o=[].concat(Object(N["a"])(Object.values(c)),Object(N["a"])(Object.values(a)),Object(N["a"])(Object.values(n))),u=[];return o.forEach((function(t){if("."==t.number&&t.pencilMarks[Number(e.number)-1]){var c=Object(N["a"])(r.sudokuObj.value["r".concat(t.address.r,"c").concat(t.address.c)].pencilMarks);t.pencilMarks[Number(e.number)-1]=!1;var a={address:t.address,pencilMarks:c,id:r.validation.userId.value};u.push(a)}})),u},this.sudokuObj=t,this.users=c,this.socket=a,this.validation=n}return Object(_["a"])(e,[{key:"updateNumber",value:function(e){var t=this,c=e.numberUpdate,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=c.address,o=c.number,u=c.id,s=c.associatedPencilMarkUpdates,l=Object(A["a"])({},this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]);if(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)].number=o,this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]=this.validation.validateSquare(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]),a){var i;null===(i=s)||void 0===i||i.forEach((function(e){t.updatePencilMarks({pencilMarkUpdate:e},!0)}))}else{var d;s=null!==(d=s)&&void 0!==d?d:this.updatePeerCandidates(this.sudokuObj.value["r".concat(r.r,"c").concat(r.c)]);var b=Object(A["a"])({},c);b.associatedPencilMarkUpdates=s,b.number=l.number,this.users.value[u].moves.push({numberUpdate:b}),n||this.socket.send(JSON.stringify({numberUpdate:c}))}}},{key:"updatePencilMarks",value:function(e){var t=e.pencilMarkUpdate,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.address,r=t.pencilMark,o=t.pencilMarks,u=t.id,s=Object(N["a"])(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==r||o?this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks=o||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[Number(r)-1]=!this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[Number(r)-1],!c){var l=Object(A["a"])({},t);l.pencilMarks=s,this.users.value[u].moves.push({pencilMarkUpdate:l}),a||this.socket.send(JSON.stringify({pencilMarkUpdate:t}))}}},{key:"undo",value:function(e){if(this.users.value[e].moves.length){var t=this.users.value[e].moves.pop();t.numberUpdate?this.updateNumber({numberUpdate:t.numberUpdate},!0):t.pencilMarkUpdate&&(console.log("sending"),this.updatePencilMarks({pencilMarkUpdate:t.pencilMarkUpdate},!0))}}}]),e}(),x=E;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var J=null!==(w=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==w?w:"ws://tealog.xyz:8010";console.log(J);var q=new WebSocket(J),L={setup:function(){Object(n["n"])((function(){q.close(1e3,"logging off")})),q.onopen=function(){console.log("connection established")};var e=Object(U["h"])(),t=Object(U["h"])(),c=Object(U["h"])(),a=Object(U["h"])(),r=Object(U["h"])(!1),o=Object(U["h"])(!1),u=Object(U["h"])(!0),s=new C(t,a,q),l=new x(t,c,q,s);q.onmessage=function(n){var r=n.data,o=JSON.parse(r),s=o.color,i=o.sudokuObj,d=o.id,b=o.users,v=o.focusUpdate,f=o.numberUpdate,O=o.pencilMarkUpdate,p=o.undo,j=i||{},k=j.puzzle;if(i&&(t.value=k,u.value=!1),b&&(c.value=b),s&&(e.value=s,document.documentElement.style.setProperty("--color","".concat(s))),d&&(a.value=d),v)try{var h=v.id,m=v.focus;c.value[h].focus=m}catch(g){console.log(JSON.parse(r)),console.log(g),console.log(Object(U["l"])(c.value)),console.log(Object(U["l"])(a.value))}f&&l.updateNumber({numberUpdate:f},!1,!0),O&&l.updatePencilMarks({pencilMarkUpdate:O},!1,!0),p&&l.undo(p)};var i=Object(n["d"])((function(){var e={};for(var t in c.value)if(Object.prototype.hasOwnProperty.call(c.value,t)){var a=c.value[t];e["r".concat(a.focus.row,"c").concat(a.focus.col)]=a.color}return e})),d=Object(n["d"])((function(){var e=c.value[a.value],n=null;return null!=e.focus.row&&"."!=t.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(n=t.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number),n})),b=Object(n["d"])((function(){return c.value[a.value].focus})),v=Object(U["h"])({});Object(n["o"])((function(){v.value={}}));var f=function(e,t,n,r){e+=n,t+=r,e>9||t>9||e<1||t<1||(v.value["r".concat(e,"c").concat(t)].focus(),c.value[a.value].focus={row:e,col:t},q.send(JSON.stringify({focusUpdate:{id:a.value,focus:{row:e,col:t}}})))},O=function(e){var n=e.key,o=e.event,u=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],i=c.value[a.value].focus,d=i.row,b=i.col;if(null==d||null==b)return d=5,b=5,c.value[a.value].focus={row:d,col:b},void q.send(JSON.stringify({focusUpdate:{id:a.value,focus:{row:d,col:b}}}));if(!t.value["r".concat(d,"c").concat(b)].given&&u.includes(n))if(o.preventDefault(),r.value){var v=t.value["r".concat(d,"c").concat(b)].address,O={address:v,pencilMark:n,id:a.value};l.updatePencilMarks({pencilMarkUpdate:O})}else{var p=t.value["r".concat(d,"c").concat(b)].address,j={address:p,number:n,id:a.value};l.updateNumber({numberUpdate:j}),l.updatePeerCandidates(t.value["r".concat(d,"c").concat(b)])}else if("Backspace"==n)if(o.preventDefault(),r.value){var k=t.value["r".concat(d,"c").concat(b)].address,h={address:k,pencilMark:"delete",id:a.value};l.updatePencilMarks({pencilMarkUpdate:h})}else{var m=t.value["r".concat(d,"c").concat(b)].address,g={address:m,number:".",id:a.value};l.updateNumber({numberUpdate:g})}else if(s.includes(n))switch(o.preventDefault(),n){case"ArrowRight":f(d,b,0,1);break;case"ArrowLeft":f(d,b,0,-1);break;case"ArrowDown":f(d,b,1,0);break;case"ArrowUp":f(d,b,-1,0);break}else"Shift"==n?r.value=!r.value:"z"==n.toLowerCase()&&o.metaKey&&(l.undo(a.value),q.send(JSON.stringify({undo:a.value})))};document.body.addEventListener("keydown",(function(){O({key:event.key,event:event})}));var p=function(e){var t=e.row,n=e.col;c.value[a.value].focus={row:t,col:n},q.send(JSON.stringify({focusUpdate:{id:a.value,focus:{row:t,col:n}}}))},j=Object(U["h"])(null),k=Object(U["h"])(!1),h=function e(t){k.value&&t.target!=j.value&&t.target.parentElement!=j.value&&t.target.parentElement.parentElement!=j.value&&(k.value=!1,document.body.removeEventListener("mousedown",e))},m=function(e){console.log("triggered"),e?(q.send(JSON.stringify({newGame:!0})),k.value=!1,document.body.removeEventListener("mousedown",h)):(document.body.addEventListener("mousedown",h),k.value=!0)},g=s.firstPassCandidateCalculator;return{popup:j,checkNew:k,selfFocus:b,sudokuObj:t,newGame:m,handleInput:O,handleClick:p,inputs:v,color:e,id:a,checkFocus:i,users:c,notating:r,highlightNumbers:d,firstPassCandidateCalculator:g,candidates:o,loading:u}},components:{BaseButton:M}};c("9cdc");L.render=h;var R=L;Object(a["a"])(R).mount("#app")}});
//# sourceMappingURL=app.52d2f7e2.js.map