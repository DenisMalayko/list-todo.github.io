(function(e){function t(t){for(var i,c,l=t[0],n=t[1],o=t[2],d=0,f=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,o||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,l=1;l<s.length;l++){var n=s[l];0!==r[n]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=s[0]))}return e}var i={},r={app:0},a=[];function c(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=i,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(s,i,function(t){return e[t]}.bind(null,i));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=n;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("vHeader"),s("vList")],1)},a=[],c=(s("7588"),s("7d05"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"v-header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"v-header-logo"},[s("h3",[e._v("List Todo")])])])])])])}],n={name:"v-header"},o=n,u=s("2877"),d=Object(u["a"])(o,c,l,!1,null,null,null),f=d.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"v-list"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"search mb-3"},[s("h3",[e._v("Search:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 mb-4"},[s("div",{staticClass:"list-group"},[s("h3",[e._v("List:")]),e._l(e.list,(function(t,i){return s("label",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"task.visible"}],key:t.id,staticClass:"list-group-item",class:t.checked?"cross":""},[s("input",{staticClass:"form-check-input me-1",attrs:{type:"checkbox"},domProps:{checked:t.checked},on:{change:function(t){return e.taskChecked(i,t)}}}),s("span",[e._v(e._s(t.title))]),s("button",{staticClass:"btn-close",on:{click:function(t){return e.taskDelete(i)}}})])}))],2)]),s("div",{staticClass:"col-md-3 mb-4"},[s("h3",[e._v("Filters:")]),s("div",{staticClass:"mb-1 form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters,expression:"filters"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"all",id:"all"},domProps:{checked:Array.isArray(e.filters)?e._i(e.filters,"all")>-1:e.filters},on:{change:function(t){var s=e.filters,i=t.target,r=!!i.checked;if(Array.isArray(s)){var a="all",c=e._i(s,a);i.checked?c<0&&(e.filters=s.concat([a])):c>-1&&(e.filters=s.slice(0,c).concat(s.slice(c+1)))}else e.filters=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"all"}},[e._v("All")])]),s("div",{staticClass:"mb-1 form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters,expression:"filters"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"checked",id:"checked"},domProps:{checked:Array.isArray(e.filters)?e._i(e.filters,"checked")>-1:e.filters},on:{change:function(t){var s=e.filters,i=t.target,r=!!i.checked;if(Array.isArray(s)){var a="checked",c=e._i(s,a);i.checked?c<0&&(e.filters=s.concat([a])):c>-1&&(e.filters=s.slice(0,c).concat(s.slice(c+1)))}else e.filters=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"checked"}},[e._v("Checked")])]),s("div",{staticClass:"mb-1 form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters,expression:"filters"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"active",id:"active"},domProps:{checked:Array.isArray(e.filters)?e._i(e.filters,"active")>-1:e.filters},on:{change:function(t){var s=e.filters,i=t.target,r=!!i.checked;if(Array.isArray(s)){var a="active",c=e._i(s,a);i.checked?c<0&&(e.filters=s.concat([a])):c>-1&&(e.filters=s.slice(0,c).concat(s.slice(c+1)))}else e.filters=r}}}),s("label",{staticClass:"form-check-label",attrs:{for:"active"}},[e._v("Active")])])]),s("div",{staticClass:"col-md-4 mb-4"},[s("h3",[e._v("Add Task:")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.taskAdd.apply(null,arguments)}}},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[e._v("Name Task")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.task,expression:"task",modifiers:{trim:!0}}],staticClass:"form-control",class:e.$v.task.$error?"is-invalid":"",attrs:{type:"text"},domProps:{value:e.task},on:{input:function(t){t.target.composing||(e.task=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.task.$dirty&&!e.$v.task.required?s("span",{staticClass:"form-error"},[e._v(" Input is required ")]):e._e(),e.$v.task.$dirty&&!e.$v.task.minLength?s("span",{staticClass:"form-error"},[e._v(" Min length 3 ")]):e._e()]),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v(" Add New Task ")])])])])])])},h=[],p=s("5530"),m=(s("4de4"),s("caad"),s("2532"),s("ac1f"),s("841c"),s("2f62")),k=s("b5ae"),b={name:"v-list",data:function(){return{task:"",search:"",filters:[]}},validations:{task:{required:k["required"],minLength:Object(k["minLength"])(3)}},computed:Object(p["a"])(Object(p["a"])({},Object(m["c"])(["LIST"])),{},{list:function(){var e=this;return this.LIST.filter((function(t){return e.filters.length?e.filters.includes("checked")&&t.checked||e.filters.includes("active")&&!t.checked||e.filters.includes("all")?t.visible=!0:t.visible=!1:t.visible=!0,t.title.includes(e.search)}))}}),methods:Object(p["a"])(Object(p["a"])({},Object(m["b"])(["TASK_DELETE","TASK_ADD","TASK_CHECKED"])),{},{taskDelete:function(e){this.TASK_DELETE(e)},taskAdd:function(){if(this.$v.task.$touch(),!this.$v.task.$error){var e={id:this.LIST.length,title:this.task,checked:!1,visible:!0};this.TASK_ADD(e),this.task="",this.$v.$reset()}},taskChecked:function(e,t){var s={id:e,checked:t.target.checked};this.TASK_CHECKED(s)}})},C=b,_=Object(u["a"])(C,v,h,!1,null,null,null),y=_.exports,g={name:"App",components:{vHeader:f,vList:y}},A=g,T=(s("034f"),Object(u["a"])(A,r,a,!1,null,null,null)),E=T.exports;s("a434");i["a"].use(m["a"]);var w=new m["a"].Store({state:{list:[{id:1,checked:!1,visible:!0,title:"Task 1"},{id:2,checked:!1,visible:!0,title:"Task 2"},{id:3,checked:!1,visible:!0,title:"Task 3"},{id:4,checked:!1,visible:!0,title:"Task 4"},{id:5,checked:!1,visible:!0,title:"Task 5"}]},mutations:{DELETE:function(e,t){e.list.splice(t,1)},ADD:function(e,t){e.list.push(t)},CHECKED:function(e,t){var s=e.list[t.id];s.checked=t.checked}},actions:{TASK_DELETE:function(e,t){var s=e.commit;s("DELETE",t)},TASK_ADD:function(e,t){var s=e.commit;s("ADD",t)},TASK_CHECKED:function(e,t){var s=e.commit;s("CHECKED",t)}},getters:{LIST:function(e){return e.list}}}),D=w,x=s("1dce"),O=s.n(x);i["a"].use(O.a),i["a"].config.productionTip=!1,new i["a"]({store:D,render:function(e){return e(E)}}).$mount("#app")},7588:function(e,t,s){},"7d05":function(e,t,s){},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.0eaecc45.js.map