(function(e){function c(c){for(var n,o,u=c[0],s=c[1],l=c[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(c);while(b.length)b.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,u=1;u<t.length;u++){var s=t[u];0!==r[s]&&(n=!1)}n&&(a.splice(c--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},a=[];function o(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,c,t){o.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,c){if(1&c&&(e=o(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)o.d(t,n,function(c){return e[c]}.bind(null,n));return t},o.n=function(e){var c=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(c,"a",c),c},o.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=c,u=u.slice();for(var l=0;l<u.length;l++)c(u[l]);var i=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,c,t){e.exports=t("cd49")},"40b0":function(e,c,t){},5159:function(e,c,t){"use strict";t("40b0")},"942d":function(e,c,t){},"9cdc":function(e,c,t){"use strict";t("942d")},cd49:function(e,c,t){"use strict";t.r(c);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("830f"),r=(t("99af"),t("fb6a"),t("5c40")),a=t("9ff4"),o={id:"app"},u={key:0,class:"pane"},s={class:"inputReplacement"},l={key:1,"dominant-baseline":"middle","text-anchor":"middle"},i={class:"notation-text",style:{color:"white"}},d={class:"actions"},b=Object(r["i"])("Start New Game"),f={key:0,class:"popup",ref:"popup"},v=Object(r["j"])("h3",{class:"title"},"Are you sure you want to start a new game?",-1),p={class:"actions"},O=Object(r["i"])("Start new game"),j=Object(r["i"])("Take me back"),k=Object(r["i"])("Fill In Candidates");function h(e,c){var t=Object(r["u"])("BaseButton");return Object(r["r"])(),Object(r["e"])("div",o,[e.sudokuObj?(Object(r["r"])(),Object(r["e"])("div",u,[Object(r["j"])("table",null,[Object(r["j"])("tbody",null,[(Object(r["r"])(),Object(r["e"])(r["b"],null,Object(r["s"])(9,(function(c){return Object(r["j"])("tr",{key:c},[(Object(r["r"])(),Object(r["e"])(r["b"],null,Object(r["s"])(9,(function(t){return Object(r["j"])("td",{key:"r".concat(c,"c").concat(t,"-td"),id:"r".concat(c,"c").concat(t,"-td-id"),class:[{"border-right":t%3==0,"border-bottom":c%3==0,"border-left":0==t,"border-top":0==c,invalid:!e.sudokuObj["r".concat(c,"c").concat(t)].valid.value,"highlight-number":e.highlightNumbers==e.sudokuObj["r".concat(c,"c").concat(t)].number}],onClick:function(n){return e.handleClick({row:c,col:t})},style:{"background-color":e.selfFocus.row!=c&&e.selfFocus.col!=t||e.checkFocus["r".concat(c,"c").concat(t)]?e.checkFocus["r".concat(c,"c").concat(t)]:"".concat(e.color.slice(0,7),"44")}},[(Object(r["r"])(),Object(r["e"])("svg",s,[Object(r["j"])("text",{class:[{bold:e.sudokuObj["r".concat(c,"c").concat(t)].given,invalid:!e.sudokuObj["r".concat(c,"c").concat(t)].valid.value},"svgText"],x:"50%",y:"60%","dominant-baseline":"middle","text-anchor":"middle",ref:function(n){e.inputs["r".concat(c,"c").concat(t)]=n}},Object(a["E"])("."==e.sudokuObj["r".concat(c,"c").concat(t)].number?"":e.sudokuObj["r".concat(c,"c").concat(t)].number),3),(Object(r["r"])(!0),Object(r["e"])(r["b"],null,Object(r["s"])(e.sudokuObj["r".concat(c,"c").concat(t)].pencilMarks,(function(n,o){return Object(r["r"])(),Object(r["e"])("g",{key:o},[e.sudokuObj["r".concat(c,"c").concat(t)].pencilMarks[o]&&"."==e.sudokuObj["r".concat(c,"c").concat(t)].number?(Object(r["r"])(),Object(r["e"])("circle",{key:0,class:[{"circle-number":e.highlightNumbers==o+1}],cy:9+22*Math.floor(o/3),cx:8.5+o%3*22,r:"8"},null,10,["cy","cx"])):Object(r["f"])("",!0),"."==e.sudokuObj["r".concat(c,"c").concat(t)].number?(Object(r["r"])(),Object(r["e"])("text",l,[e.sudokuObj["r".concat(c,"c").concat(t)].pencilMarks[o]?(Object(r["r"])(),Object(r["e"])("tspan",{key:0,style:{"font-size":"14px"},y:10+22*Math.floor(o/3),x:8+o%3*22},Object(a["E"])(o+1),9,["y","x"])):Object(r["f"])("",!0)])):Object(r["f"])("",!0)])})),128))]))],14,["id","onClick"])})),64))])})),64))])]),Object(r["j"])("span",i,Object(a["E"])(e.notating?"Notation Mode On":"Notation Mode Off"),1),Object(r["j"])("div",d,[Object(r["j"])(t,{onClick:c[1]||(c[1]=function(c){return e.newGame()}),class:"button"},{default:Object(r["A"])((function(){return[b]})),_:1}),e.checkNew?(Object(r["r"])(),Object(r["e"])("div",f,[v,Object(r["j"])("div",p,[Object(r["j"])(t,{onMouseup:c[2]||(c[2]=function(c){return e.newGame(!0)}),class:"yes"},{default:Object(r["A"])((function(){return[O]})),_:1}),Object(r["j"])(t,{onClick:c[3]||(c[3]=function(c){return e.checkNew=!1}),class:"no"},{default:Object(r["A"])((function(){return[j]})),_:1})])],512)):Object(r["f"])("",!0),Object(r["j"])(t,{onMouseup:c[4]||(c[4]=function(c){return e.firstPassCandidateCalculator()}),class:"button"},{default:Object(r["A"])((function(){return[k]})),_:1})])])):Object(r["f"])("",!0)])}t("caad");var m=Object(r["B"])("data-v-0203f82a"),y=m((function(e,c){return Object(r["r"])(),Object(r["e"])("button",{onClick:c[1]||(c[1]=function(c){return e.$emit("click",c)}),onMouseup:c[2]||(c[2]=function(c){return e.$emit("mousup",c)})},[Object(r["t"])(e.$slots,"default")],32)}));t("5159");const g={};g.render=y,g.__scopeId="data-v-0203f82a";var w,M,U=g,N=t("a1e9"),S=(t("4de4"),t("4160"),t("a630"),t("d81d"),t("07ac"),t("2532"),t("3ca3"),t("159b"),t("2909")),P=Object(N["h"])({}),A=Object(N["h"])({}),E=function(e){P=e},_=function(e){A=e},x=function(e){w=e},z=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["r".concat(c)]=[];for(var t=1;t<=9;t++)e["r".concat(c)].push(P.value["r".concat(c,"c").concat(t)])}return e})),J=Object(r["d"])((function(){for(var e={},c=1;c<=9;c++){e["c".concat(c)]=[];for(var t=1;t<=9;t++)e["c".concat(c)].push(P.value["r".concat(t,"c").concat(c)])}return e})),C=function(e){var c,t=[1,2,3],n=[4,5,6],r=[7,8,9];return e.address.r>=1&&e.address.r<=3&&(c=t),e.address.r>=4&&e.address.r<=6&&(c=n),e.address.r>=7&&e.address.r<=9&&(c=r),"s".concat(c[Math.floor((e.address.c-1)/3)])},L=Object(r["d"])((function(){for(var e={s1:[],s2:[],s3:[],s4:[],s5:[],s6:[],s7:[],s8:[],s9:[]},c=1;c<=9;c++)for(var t=1;t<=9;t++)e[C(P.value.puzzle["r".concat(c,"c").concat(t)])].push(P.value.puzzle["r".concat(c,"c").concat(t)]);return e})),B=function(e){var c,t,n=[];return c=z.value["r".concat(e.address.r)],t=J.value["c".concat(e.address.c)],n=L.value[C(e)],{row:c,col:t,square:n}},D=function(e){if(e.given)return e;for(var c=B(e),t=c.row,n=c.col,r=c.square,a=[].concat(Object(S["a"])(t),Object(S["a"])(n),Object(S["a"])(r)),o=!0,u=0;u<a.length;u++)if(a[u].address!=e.address&&a[u].number==e.number&&(o=!1,e.valid.value=!1),!o)break;return o&&(e.valid.value=!0),e},F=function(e){var c=B(e),t=c.row,n=c.col,r=c.square,a=[].concat(Object(S["a"])(Object.values(t)),Object(S["a"])(Object.values(n)),Object(S["a"])(Object.values(r)));a.forEach((function(c){if("."==c.number){c.pencilMarks[e.number-1]=!1;var t={address:c.address,pencilMarks:c.pencilMarks,id:A.value};w.send(JSON.stringify({pencilMarkUpdate:t}))}}))},R=function(){var e=z.value,c=J.value,t=L.value;for(var n in P.value)Object.prototype.hasOwnProperty.call(P.value.puzzle,n)&&(P.value[n].candidates=[],P.value[n].pencilMarks=Array.from({length:9},(function(){return!1})));for(var r=0;r<3;r++){var a=void 0;switch(r){case 0:a=e;break;case 1:a=c;break;case 2:a=t;break}var o=function(e){var c=a[e],t=Object.values(a[e]).map((function(e){return parseInt(e.number)})).filter((function(e){return!isNaN(e)})),n=Array.from(Array(9),(function(e,c){return c+1}));n=n.filter((function(e){return!t.includes(e)}));var o=function(e){if("."==c[e].number){var t=0==r?Array.from(Array(9),(function(e,c){return c+1})):c[e].candidates;c[e].candidates=[],n.filter((function(e){return t.includes(e)})).forEach((function(t){c[e].candidates.push(t)}))}};for(var u in c)o(u)};for(var u in a)o(u)}var s=function(e){if(Object.prototype.hasOwnProperty.call(P.value.puzzle,e)){P.value[e].candidates.forEach((function(c){P.value[e].pencilMarks[c-1]=!0}));var c={address:P.value[e].address,pencilMarks:P.value[e].pencilMarks,id:A.value};w.send(JSON.stringify({pencilMarkUpdate:c}))}};for(var l in P.value)s(l);return P.value},G=t("5530"),I={sudokuObj:Object(N["h"])({}),users:Object(N["h"])({}),setPuzzle:function(e){this.sudokuObj=e,E(e)},setUsers:function(e){this.users=e},updateNumber:function(e,c){var t=e.numberUpdate;console.log(Object(N["l"])(this.sudokuObj.value));var n=t.address,r=t.number,a=t.id,o=Object(G["a"])({},this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)]);if(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].number=r,this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)]=D(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)]),!c){var u=Object(G["a"])({},t);u.number=o.number,this.users.value[a].moves.push({numberUpdate:u})}},updatePencilMarks:function(e,c){var t=e.pencilMarkUpdate,n=t.address,r=t.pencilMark,a=t.pencilMarks,o=t.id,u=Object(S["a"])(this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks);if("delete"==r||a?this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks=a||[!1,!1,!1,!1,!1,!1,!1,!1,!1]:this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1]=!this.sudokuObj.value["r".concat(n.r,"c").concat(n.c)].pencilMarks[r-1],!c){var s=Object(G["a"])({},t);s.pencilMarks=u,this.users.value[o].moves.push({pencilMarkUpdate:s})}},undo:function(e){var c=this.users.value[e].moves.pop();c.numberUpdate?this.updateNumber({numberUpdate:c.numberUpdate},!0):c.pencilMarkUpdate&&this.updatePencilMarks({pencilMarkUpdate:c.pencilMarkUpdate},!0)}},T=I;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL);var V=null!==(M=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WS_URL)&&void 0!==M?M:"ws://tealog.xyz:8010";console.log(V);var q=new WebSocket(V),W={setup:function(){Object(r["n"])((function(){q.close(1e3,"logging off")})),q.onopen=function(){console.log("connection established"),x(q)};var e=Object(N["h"])({}),c=Object(N["h"])(null),t=Object(N["h"])({}),n=Object(N["h"])(),a=Object(N["h"])(!1),o=Object(N["h"])(!1);q.onmessage=function(r){var a=r.data,o=JSON.parse(a),u=o.color,s=o.sudokuObj,l=o.id,i=o.users,d=o.focusUpdate,b=o.numberUpdate,f=o.pencilMarkUpdate,v=o.undo,p=s||{},O=p.puzzle;if(s&&(c.value=O,E(c),T.setPuzzle(c)),i&&(t.value=i,T.setUsers(t)),u&&(e.value=u,document.documentElement.style.setProperty("--color","".concat(u))),l&&(n.value=l,_(n)),d){var j=d.id,k=d.focus;t.value[j].focus=k}b&&T.updateNumber({numberUpdate:b}),f&&T.updatePencilMarks({pencilMarkUpdate:f}),v&&T.undo(v)};var u=Object(r["d"])((function(){var e={};for(var c in t.value)if(Object.prototype.hasOwnProperty.call(t.value,c)){var n=t.value[c];e["r".concat(n.focus.row,"c").concat(n.focus.col)]=n.color}return e})),s=Object(r["d"])((function(){var e=t.value[n.value],r=null;return null!=e.focus.row&&"."!=c.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number&&(r=c.value["r".concat(e.focus.row,"c").concat(e.focus.col)].number),r})),l=Object(r["d"])((function(){return t.value[n.value].focus})),i=Object(N["h"])({});Object(r["o"])((function(){i.value={}}));var d=function(e,c,r,a){e+=r,c+=a,e>9||c>9||e<1||c<1||(i.value["r".concat(e,"c").concat(c)].focus(),t.value[n.value].focus={row:e,col:c},q.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:e,col:c}}})))},b=function(e){var r=e.key,o=e.event,u=["1","2","3","4","5","6","7","8","9"],s=["ArrowDown","ArrowRight","ArrowLeft","ArrowUp"],l=t.value[n.value].focus,i=l.row,b=l.col;if(null==i||null==b)return i=5,b=5,t.value[n.value].focus={row:i,col:b},void q.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:i,col:b}}}));if(!c.value["r".concat(i,"c").concat(b)].given&&u.includes(r))if(o.preventDefault(),a.value){var f=c.value["r".concat(i,"c").concat(b)].address,v={address:f,pencilMark:r,id:n.value};T.updatePencilMarks({pencilMarkUpdate:v}),q.send(JSON.stringify({pencilMarkUpdate:v}))}else{var p=c.value["r".concat(i,"c").concat(b)].address,O={address:p,number:r,id:n.value};T.updateNumber({numberUpdate:O}),q.send(JSON.stringify({numberUpdate:O})),F(c.value["r".concat(i,"c").concat(b)])}else if("Backspace"==r)if(o.preventDefault(),a.value){var j=c.value["r".concat(i,"c").concat(b)].address,k={address:j,pencilMark:"delete",id:n.value};T.updatePencilMarks({pencilMarkUpdate:k}),q.send(JSON.stringify({pencilMarkUpdate:k}))}else{var h=c.value["r".concat(i,"c").concat(b)].address,m={address:h,number:".",id:n.value};T.updateNumber({numberUpdate:m}),q.send(JSON.stringify({numberUpdate:m}))}else if(s.includes(r))switch(o.preventDefault(),r){case"ArrowRight":d(i,b,0,1);break;case"ArrowLeft":d(i,b,0,-1);break;case"ArrowDown":d(i,b,1,0);break;case"ArrowUp":d(i,b,-1,0);break}else"Shift"==r?a.value=!a.value:"z"==r.toLowerCase()&&o.metaKey&&(T.undo(n.value),q.send(JSON.stringify({undo:n.value})))};document.body.addEventListener("keydown",(function(){b({key:event.key,event:event})}));var f=function(e){var c=e.row,r=e.col;t.value[n.value].focus={row:c,col:r},q.send(JSON.stringify({focusUpdate:{id:n.value,focus:{row:c,col:r}}}))},v=Object(N["h"])(null),p=Object(N["h"])(!1),O=function e(c){p.value&&c.target!=v.value&&c.target.parentElement!=v.value&&c.target.parentElement.parentElement!=v.value&&(p.value=!1,document.body.removeEventListener("mousedown",e))},j=function(e){console.log("triggered"),e?(q.send(JSON.stringify({newGame:!0})),p.value=!1,document.body.removeEventListener("mousedown",O)):(document.body.addEventListener("mousedown",O),p.value=!0)};return{popup:v,checkNew:p,selfFocus:l,sudokuObj:c,newGame:j,handleInput:b,handleClick:f,inputs:i,color:e,id:n,checkFocus:u,users:t,notating:a,highlightNumbers:s,firstPassCandidateCalculator:R,candidates:o}},components:{BaseButton:U}};t("9cdc");W.render=h;var $=W;Object(n["a"])($).mount("#app")}});
//# sourceMappingURL=app.a00c4ed4.js.map