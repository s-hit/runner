(function(e){function t(t){for(var r,a,u=t[0],d=t[1],i=t[2],b=0,f=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var d=n[u];0!==o[d]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ae":function(e,t,n){},"51f3":function(e,t,n){"use strict";n("01ae")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["createElementVNode"])("h2",null,"小幸游戏大厅",-1),c=Object(r["createTextVNode"])(" 点我冲鸭"),a=Object(r["createElementVNode"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),u=Object(r["createTextVNode"])("迪士尼在逃小幸"),d=Object(r["createTextVNode"])("合成小幸"),i=Object(r["createTextVNode"])("寻找儒儒桑"),l=Object(r["createElementVNode"])("h2",null,"排行榜",-1),b=Object(r["createTextVNode"])(" 排行榜"),f=Object(r["createElementVNode"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),s=Object(r["createTextVNode"])("迪士尼在逃小幸"),O=Object(r["createTextVNode"])("最高得分榜"),j=Object(r["createTextVNode"])("累计得分榜"),p=Object(r["createTextVNode"])("旧排行榜"),m=Object(r["createTextVNode"])("合成小幸"),h=Object(r["createTextVNode"])("最高胜利得分榜"),V=Object(r["createTextVNode"])("最高失败得分榜"),x=Object(r["createTextVNode"])("累计得分榜"),N=Object(r["createTextVNode"])("寻找儒儒桑"),w=Object(r["createTextVNode"])("最快寻找榜"),C=Object(r["createTextVNode"])("累计用时榜");function v(e,t,n,v,_,y){var g=Object(r["resolveComponent"])("el-input"),T=Object(r["resolveComponent"])("el-row"),k=Object(r["resolveComponent"])("el-button"),$=Object(r["resolveComponent"])("el-dropdown-item"),M=Object(r["resolveComponent"])("el-dropdown-menu"),D=Object(r["resolveComponent"])("el-dropdown"),P=Object(r["resolveComponent"])("el-divider"),S=Object(r["resolveComponent"])("el-space"),E=Object(r["resolveComponent"])("el-table-column"),U=Object(r["resolveComponent"])("el-table"),K=Object(r["resolveComponent"])("el-input-number"),W=Object(r["resolveComponent"])("el-main");return Object(r["openBlock"])(),Object(r["createBlock"])(W,null,{default:Object(r["withCtx"])((function(){return[o,Object(r["createVNode"])(T,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{modelValue:_.input,"onUpdate:modelValue":t[0]||(t[0]=function(e){return _.input=e}),placeholder:"昵称（默认为章鱼哥）"},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(T,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(D,{onCommand:y.gogogo},{dropdown:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(M,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])($,{command:"runner"},{default:Object(r["withCtx"])((function(){return[u]})),_:1}),Object(r["createVNode"])($,{command:"melon"},{default:Object(r["withCtx"])((function(){return[d]})),_:1}),Object(r["createVNode"])($,{command:"find"},{default:Object(r["withCtx"])((function(){return[i]})),_:1})]})),_:1})]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{type:"primary"},{default:Object(r["withCtx"])((function(){return[c,a]})),_:1})]})),_:1},8,["onCommand"])]})),_:1}),Object(r["createVNode"])(P),l,Object(r["createVNode"])(S,{wrap:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(D,{onCommand:y.setboard},{dropdown:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(M,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])($,{disabled:""},{default:Object(r["withCtx"])((function(){return[s]})),_:1}),Object(r["createVNode"])($,{icon:"el-icon-trophy",command:["score",!1]},{default:Object(r["withCtx"])((function(){return[O]})),_:1}),Object(r["createVNode"])($,{command:["score_sum",!1]},{default:Object(r["withCtx"])((function(){return[j]})),_:1}),Object(r["createVNode"])($,{command:["score",!0]},{default:Object(r["withCtx"])((function(){return[p]})),_:1}),Object(r["createVNode"])($,{divided:"",disabled:""},{default:Object(r["withCtx"])((function(){return[m]})),_:1}),Object(r["createVNode"])($,{icon:"el-icon-trophy",command:["melon_succ",!1]},{default:Object(r["withCtx"])((function(){return[h]})),_:1}),Object(r["createVNode"])($,{command:["melon_fail",!1]},{default:Object(r["withCtx"])((function(){return[V]})),_:1}),Object(r["createVNode"])($,{command:["melon_sum",!1]},{default:Object(r["withCtx"])((function(){return[x]})),_:1}),Object(r["createVNode"])($,{divided:"",disabled:""},{default:Object(r["withCtx"])((function(){return[N]})),_:1}),Object(r["createVNode"])($,{icon:"el-icon-trophy",command:["find",!1]},{default:Object(r["withCtx"])((function(){return[w]})),_:1}),Object(r["createVNode"])($,{command:["find_sum",!1]},{default:Object(r["withCtx"])((function(){return[C]})),_:1})]})),_:1})]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{type:"primary"},{default:Object(r["withCtx"])((function(){return[b,f]})),_:1})]})),_:1},8,["onCommand"]),Object(r["createVNode"])(k,{icon:"el-icon-refresh",circle:"",onClick:y.refresh},null,8,["onClick"])]})),_:1}),Object(r["createVNode"])(T,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(U,{data:_.tableData,style:{width:"100%"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{prop:"rank",label:"Rank"}),Object(r["createVNode"])(E,{prop:"username",label:"ID"}),Object(r["createVNode"])(E,{prop:"score",label:"Score"})]})),_:1},8,["data"])]})),_:1}),Object(r["createVNode"])(T,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(K,{modelValue:_.page,"onUpdate:modelValue":t[1]||(t[1]=function(e){return _.page=e}),min:1,onChange:y.refresh},null,8,["modelValue","onChange"])]})),_:1})]})),_:1})}n("d81d");var _=n("c72e"),y=n.n(_),g={name:"App",data:function(){return{input:"",tableData:[],page:1,board:"score",previous:!1}},methods:{gogogo:function(e){location.href=e+"/index.html?id="+this.$data.input+"&p="},refresh:function(){var e=this,t=y.a.Leaderboard.createWithoutData(this.$data.board);t.getResults("score"==this.$data.board?{limit:50,skip:50*this.$data.page-50,selectUserKeys:["username","nickname"],version:this.$data.previous?4:5}:{limit:50,skip:50*this.$data.page-50,selectUserKeys:["username"]}).then((function(t){e.$data.tableData=t.map((function(t){return{rank:t.rank+1,username:e.$data.previous?t.user.attributes.nickname:t.user.attributes.username,score:t.value}})),document.body.scrollTop=document.documentElement.scrollTop=0}))},setboard:function(e){this.$data.board=e[0],this.$data.previous=e[1],this.refresh()}},mounted:function(){var e=this,t=y.a.Leaderboard.createWithoutData("score");t.getResults({limit:50,selectUserKeys:["username","nickname"]}).then((function(t){e.$data.tableData=t.map((function(e){return{rank:e.rank+1,username:e.user.attributes.username,score:e.value}}))}))}},T=(n("51f3"),n("6b0d")),k=n.n(T);const $=k()(g,[["render",v]]);var M=$,D=n("1250");n("7437");y.a.init({appId:"EK27oracrqWzxLAcfhGIMOST-MdYXbMMI",appKey:"gWA7jWpfJzUM9dzLjc56bwFC"}),Object(r["createApp"])(M).use(D["a"]).mount("#app")}});
//# sourceMappingURL=app.6530d72a.js.map