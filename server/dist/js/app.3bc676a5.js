(function(e){function c(c){for(var n,o,u=c[0],s=c[1],l=c[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(c);while(b.length)b.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,c=0;c<r.length;c++){for(var t=r[c],n=!0,u=1;u<t.length;u++){var s=t[u];0!==a[s]&&(n=!1)}n&&(r.splice(c--,1),e=o(o.s=t[0]))}return e}var n={},a={app:0},r=[];function o(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,c,t){o.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,c){if(1&c&&(e=o(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)o.d(t,n,function(c){return e[c]}.bind(null,n));return t},o.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(c,"a",c),c},o.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=c,u=u.slice();for(var l=0;l<u.length;l++)c(u[l]);var i=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("cd49")},"40b0":function(e,c,t){},5159:function(e,c,t){"use strict";t("40b0")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")},cd49:function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),a=(t("99af"),t("fb6a"),t("5c40")),r=t("9ff4"),o={id:"app"},u={key:0,class:"pane"},s={class:"inputReplacement"},l={key:1,"dominant-baseline":"middle","text-anchor":"middle"},i={class:"notation-text",style:{color:"white"}},d={class:"actions"},b=Object(a["i"])("Start New Game"),f={key:0,class:"popup",ref:"popup"},v=Object(a["j"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),p={class:"actions"},O=Object(a["i"])("Start new game"),j=Object(a["i"])("Take me back"),k=Object(a["i"])("Fill In Candidates");function m(e,c){var t=Object(a["u"])("BaseButton");return Object(a["r"])(),Object(a["e"])("div",o,[e.sudokuObj?(Object(a["r"])(),Object(a["e"])("div",u,[Object(a["j"])("table",null,[Object(a["j"])("tbody",null,[(Object(a["r"])(),Object(a["e"])(a["b"],null,Object(a["s"])(9,(function(c){return Object(a["j"])("tr",{key:c},[(Object(a["r"])(),Object(a["e"])(a["b"],null,Object(a["s"])(9,(function(t){return Object(a["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(a["r"])(),Object(a["e"])("svg",s,[Object(a["j"])("text",{class:[{bold:e.sudokuObj["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(r["G"])("."==e.sudokuObj["r".concat(c,"c").concat(t)].number?"":e.sudokuObj["r".concat(c,"c").concat(t)].number),3),(Object(a["r"])(!0),Object(a["e"])(a["b"],null,Object(a["s"])(e.sudokuObj["r".concat(c,"c").concat(t)].pencilMarks,(function(n,o){return Object(a["r"])(),Object(a["e"])("g",{key:o},[e.sudokuObj["r".concat(c,"c").concat(t)].pencilMarks[o]&&"."==e.sudokuObj["r".concat(c,"c").concat(t)].number?(Object(a["r"])(),Object(a["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==o+1}],cy:9+22*Math.floor(o/3),cx:8.5+o%3*22,r:"8"},null,10,["cy","cx"])):Object(a["f"])("",!0),"."==e.sudokuObj["r".concat(c,"c").concat(t)].number?(Object(a["r"])(),Object(a["e"])("text",l,[e.sudokuObj["r".concat(c,"c").concat(t)].pencilMarks[o]?(Object(a["r"])(),Object(a["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(o/3),x:8+o%3*22},Object(r["G"])(o+1),9,["y","x"])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(a["j"])("span",i,Object(r["G"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(a["j"])("div",d,[Object(a["j"])(t,{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},{default:Object(a["A"])((function(){return[b]})),_:1}),e.checkNew?(Object(a["r"])(),Object(a["e"])("div",f,[v,Object(a["j"])("div",p,[Object(a["j"])(t,{onMouseup:c[2]||(c[2]=function(c){return e.newGame(!0)}),class:"yes"},{default:Object(a["A"])((function(){return[O]})),_:1}),Object(a["j"])(t,{onClick:c[3]||(c[3]=function(c){return e.checkNew=!1}),class:"no"},{default:Object(a["A"])((function(){return[j]})),_:1})])],512)):Object(a["f"])("",!0),Object(a["j"])(t,{onMouseup:c[4]||(c[4]=function(c){return e.firstPassCandidateCalculator()}),class:"button"},{default:Object(a["A"])((function(){return[k]})),_:1})])])):Object(a["f"])("",!0)])}t("caad");var h=Object(a["B"])("data-v-0203f82a"),y=h((function(e,c){return Object(a["r"])(),Object(a["e"])("button",{onClick:c[1]||(c[1]=function(c){return e.$emit("click",c)}),onMouseup:c[2]||(c[2]=function(c){return e.$emit("mousup",c)})},[Object(a["t"])(e.$slots,"default")],32)}));t("5159");const g={};g.render=y,g.__scopeId="data-v-0203f82a";var w,M,U=g,N=t("a1e9"),S=(t("4de4"),t("4160"),t("a630"),t("d81d"),t("a9e3"),t("07ac"),t("2532"),t("3ca3"),t("159b"),t("2909")),A=Object(N["h"])(null),P=Object(N["h"])(null),_=function(e){A=e},x=function(e){P=e},E=function(e){w=e},J=Object(a["d"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]={};for(var t=1;t<=9;t++)e["r".concat(c)]["r".concat(c,"c").concat(t)]=A.value["r".concat(c,"c").concat(t)]}return e})),C=Object(a["d"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]={};for(var t=1;t<=9;t++)e["c".concat(c)]["r".concat(t,"c").concat(c)]=A.value["r".concat(t,"c").concat(c)]}return e})),L=function(e){var c=[1,2,3],t=[4,5,6],n=[7,8,9],a=[1,2,3];return e.address.r>=1&&e.address.r<=3&&(a=c),e.address.r>=4&&e.address.r<=6&&(a=t),e.address.r>=7&&e.address.r<=9&&(a=n),"s".concat(a[Math.floor((e.address.c-1)/3)])},B=Object(a["d"])((function(){for(var e={s1:{},s2:{},s3:{},s4:{},s5:{},s6:{},s7:{},s8:{},s9:{}},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[L(A.value["r".concat(c,"c").concat(t)])]["r".concat(c,"c").concat(t)]=A.value["r".concat(c,"c").concat(t)];return e})),G=function(e){var c,t,n;return c=J.value["r".concat(e.address.r)],t=C.value["c".concat(e.address.c)],n=B.value[L(e)],{row:c,col:t,square:n}},D=function(e){if(e.given)return e;for(var c=G(e),t=c.row,n=c.col,a=c.square,r=[].concat(Object(S["a"])(Object.values(t)),Object(S["a"])(Object.values(n)),Object(S["a"])(Object.values(a))),o=!0,u=0;u<r.length;u++)if(r[u].address!=e.address&&r[u].number==e.number&&(o=!1,e.valid.value=!1),!o)break;return o&&(e.valid.value=!0),e},F=function(e){var c=G(e),t=c.row,n=c.col,a=c.square,r=[].concat(Object(S["a"])(Object.values(t)),Object(S["a"])(Object.values(n)),Object(S["a"])(Object.values(a)));r.forEach((function(c){if("."==c.number){c.pencilMarks[Number(e.number)-1]=!1;var t={address:c.address,pencilMarks:c.pencilMarks,id:P.value};w.send(JSON.stringify({pencilMarkUpdate:t}))}}))},R=function(){var e=J.value,c=C.value,t=B.value;for(var n in A.value)Object.prototype.hasOwnProperty.call(A.value,n)&&(A.value[n].candidates=[],A.value[n].pencilMarks=Array.from({length:9},(function(){return!1})));for(var a=0;a<3;a++){var r=void 0;switch(a){case 0:r=e;break;case 1:r=c;break;case 2:r=t;break}var o=function(e){var c=r[e],t=Object.values(r[e]).map((function(e){return Number(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var o=function(e){if("."==c[e].number){var t=0==a?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var u in c)o(u)};for(var u in r)o(u)}var s=function(e){if(Object.prototype.hasOwnProperty.call(A.value,e)){A.value[e].candidates.forEach((function(c){A.value[e].pencilMarks[c-1]=!0}));var c={address:A.value[e].address,pencilMarks:A.value[e].pencilMarks,id:P.value};w.send(JSON.stringify({pencilMarkUpdate:c}))}};for(var l in A.value)s(l);return A.value},z=t("5530"),T=t("d4ec"),V=t("bee2"),q=function(){function e(c,t){Object(T["a"])(this,e),this.sudokuObj=c,this.users=t,_(c)}return Object(V["a"])(e,[{key:"updateNumber",value:function(e,c){var t=e.numberUpdate,n=t.address,a=t.number,r=t.id,o=Object(z["a"])({},this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)]);if(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].number=a,this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)]=D(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)]),!c){var u=Object(z["a"])({},t);u.number=o.number,this.users.value[r].moves.push({numberUpdate:u})}}},{key:"updatePencilMarks",value:function(e,c){var t=e.pencilMarkUpdate,n=t.address,a=t.pencilMark,r=t.pencilMarks,o=t.id,u=Object(S["a"])(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==a||r?this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks=r||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[a-1]=!this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[a-1],!c){var s=Object(z["a"])({},t);s.pencilMarks=u,this.users.value[o].moves.push({pencilMarkUpdate:s})}}},{key:"undo",value:function(e){var c=this.users.value[e].moves.pop();c.numberUpdate?this.updateNumber({numberUpdate:c.numberUpdate},!0):c.pencilMarkUpdate&&this.updatePencilMarks({pencilMarkUpdate:c.pencilMarkUpdate},!0)}}]),e}(),I=q;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var W=null!==(M=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==M?M:"ws://tealog.xyz:8010";console.log(W);var $=new WebSocket(W),K={setup:function(){Object(a["n"])((function(){$.close(1e3,"logging off")})),$.onopen=function(){console.log("connection established"),E($)};var e,c=Object(N["h"])({}),t=Object(N["h"])(null),n=Object(N["h"])(),r=Object(N["h"])(),o=Object(N["h"])(!1),u=Object(N["h"])(!1);$.onmessage=function(a){var o=a.data,u=JSON.parse(o),s=u.color,l=u.sudokuObj,i=u.id,d=u.users,b=u.focusUpdate,f=u.numberUpdate,v=u.pencilMarkUpdate,p=u.undo,O=l||{},j=O.puzzle;if(l&&(t.value=j,_(t),e=new I(t,n)),d&&(n.value=d,e.users.value=n.value),s&&(c.value=s,document.documentElement.style.setProperty("--color","".concat(s))),i&&(r.value=i,x(r)),b)try{var k=b.id,m=b.focus;n.value[k].focus=m}catch(h){console.log(JSON.parse(o)),console.log(h),console.log(Object(N["l"])(n.value)),console.log(Object(N["l"])(r.value))}f&&e.updateNumber({numberUpdate:f}),v&&e.updatePencilMarks({pencilMarkUpdate:v}),p&&e.undo(p)};var s=Object(a["d"])((function(){var e={};for(var c in n.value)if(Object.prototype.hasOwnProperty.call(n.value,c)){var t=n.value[c];e["r".concat(t.focus.row,"c").concat(t.focus.col)]=t.color}return e})),l=Object(a["d"])((function(){var e=n.value[r.value],c=null;return null!=e.focus.row&&"."!=t.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(c=t.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number),c})),i=Object(a["d"])((function(){return n.value[r.value].focus})),d=Object(N["h"])({});Object(a["o"])((function(){d.value={}}));var b=function(e,c,t,a){e+=t,c+=a,e>9||c>9||e<1||c<1||(d.value["r".concat(e,"c").concat(c)].focus(),n.value[r.value].focus={row:e,col:c},$.send(JSON.stringify({focusUpdate:{id:r.value,focus:{row:e,col:c}}})))},f=function(c){var a=c.key,u=c.event,s=["1","2","3","4","5","6","7","8","9"],l=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],i=n.value[r.value].focus,d=i.row,f=i.col;if(null==d||null==f)return d=5,f=5,n.value[r.value].focus={row:d,col:f},void $.send(JSON.stringify({focusUpdate:{id:r.value,focus:{row:d,col:f}}}));if(!t.value["r".concat(d,"c").concat(f)].given&&s.includes(a))if(u.preventDefault(),o.value){var v=t.value["r".concat(d,"c").concat(f)].address,p={address:v,pencilMark:a,id:r.value};e.updatePencilMarks({pencilMarkUpdate:p}),$.send(JSON.stringify({pencilMarkUpdate:p}))}else{var O=t.value["r".concat(d,"c").concat(f)].address,j={address:O,number:a,id:r.value};e.updateNumber({numberUpdate:j}),$.send(JSON.stringify({numberUpdate:j})),F(t.value["r".concat(d,"c").concat(f)])}else if("Backspace"==a)if(u.preventDefault(),o.value){var k=t.value["r".concat(d,"c").concat(f)].address,m={address:k,pencilMark:"delete",id:r.value};e.updatePencilMarks({pencilMarkUpdate:m}),$.send(JSON.stringify({pencilMarkUpdate:m}))}else{var h=t.value["r".concat(d,"c").concat(f)].address,y={address:h,number:".",id:r.value};e.updateNumber({numberUpdate:y}),$.send(JSON.stringify({numberUpdate:y}))}else if(l.includes(a))switch(u.preventDefault(),a){case"ArrowRight":b(d,f,0,1);break;case"ArrowLeft":b(d,f,0,-1);break;case"ArrowDown":b(d,f,1,0);break;case"ArrowUp":b(d,f,-1,0);break}else"Shift"==a?o.value=!o.value:"z"==a.toLowerCase()&&u.metaKey&&(e.undo(r.value),$.send(JSON.stringify({undo:r.value})))};document.body.addEventListener("keydown",(function(){f({key:event.key,event:event})}));var v=function(e){var c=e.row,t=e.col;n.value[r.value].focus={row:c,col:t},$.send(JSON.stringify({focusUpdate:{id:r.value,focus:{row:c,col:t}}}))},p=Object(N["h"])(null),O=Object(N["h"])(!1),j=function e(c){O.value&&c.target!=p.value&&c.target.parentElement!=p.value&&c.target.parentElement.parentElement!=p.value&&(O.value=!1,document.body.removeEventListener("mousedown",e))},k=function(e){console.log("triggered"),e?($.send(JSON.stringify({newGame:!0})),O.value=!1,document.body.removeEventListener("mousedown",j)):(document.body.addEventListener("mousedown",j),O.value=!0)};return{popup:p,checkNew:O,selfFocus:i,sudokuObj:t,newGame:k,handleInput:f,handleClick:v,inputs:d,color:c,id:r,checkFocus:s,users:n,notating:o,highlightNumbers:l,firstPassCandidateCalculator:R,candidates:u}},components:{BaseButton:U}};t("9cdc");K.render=m;var H=K;Object(n["a"])(H).mount("#app")}});
//# sourceMappingURL=app.3bc676a5.js.map