(this["webpackJsonphooks-classed"]=this["webpackJsonphooks-classed"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=a(3),s=Object(n.createContext)({people:[],addPerson:function(e){}}),m=a(5),i=a(1),u=function(){var e=Object(n.useContext)(s),t=Object(n.useRef)(null),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,c=Object(n.useState)(t),r=Object(o.a)(c,2),l=r[0],s=r[1],u=Object(n.useState)({}),f=Object(o.a)(u,2),d=f[0],p=f[1],N=function(e){s(Object(i.a)(Object(i.a)({},l),{},Object(m.a)({},e.target.name,e.target.value)))},v=function(n){n.preventDefault(),0===Object.keys(a(l)).length?(e(),s(t),p({})):p(a(l))};return{onChange:N,onSubmit:v,errors:d,values:l}}((function(){e.addPerson(r),t.current.focus()}),{firstName:"",lastName:""},(function(e){var t={};return""===e.firstName.trim()&&(t.firstName="First name must not be empty"),""===e.lastName.trim()&&(t.lastName="Last name must not be empty"),t})),r=a.values,l=a.errors,u=a.onChange,f=a.onSubmit;return c.a.createElement("div",{className:"col"},c.a.createElement("h2",null,"Add a person:"),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:f},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control ".concat(l.firstName&&"is-invalid"),name:"firstName",placeholder:"First Name",value:r.firstName,ref:t,onChange:u}),l.firstName&&c.a.createElement("div",{className:"invalid-feedback"},l.firstName)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control ".concat(l.lastName&&"is-invalid"),name:"lastName",placeholder:"Last Name",value:r.lastName,onChange:u}),l.lastName&&c.a.createElement("div",{className:"invalid-feedback"},l.lastName)),c.a.createElement("button",{className:"btn btn-success",type:"submit"},"Add person")))},f=function(){var e=Object(n.useContext)(s);return c.a.createElement("div",{className:"col"},c.a.createElement("h3",null,"People"),c.a.createElement("hr",null),e.people.map((function(e){return c.a.createElement("div",{key:1e12*Math.random()},c.a.createElement("p",null,e.firstName," ",e.lastName))})))},d=function(){var e=Object(n.useContext)(s);return c.a.createElement("div",{className:"text-center mt-4"},e.people.length)},p=function(){var e=Object(n.useContext)(s),t=e.people[e.people.length-1];return Object(n.useEffect)((function(){var e="".concat(t.firstName," ").concat(t.lastName);return document.title=e,console.log("useEffect"),function(){console.log("Unmounted")}}),[t]),c.a.createElement("div",{className:"col col-sm-12"},c.a.createElement("h2",{className:"mt-4 text-center"},"Newest Person: ","".concat(t.firstName," ").concat(t.lastName)),c.a.createElement(d,null))},N=a(8),v=function(e,t){switch(t.type){case"ADD_PERSON":return function(e,t){var a=[].concat(Object(N.a)(t.people),[e]);return Object(i.a)(Object(i.a)({},t),{},{people:a})}(t.payload,e);default:return e}},b=function(e){var t=Object(n.useReducer)(v,{people:[{firstName:"Jon",lastName:"Snow"},{firstName:"Jack",lastName:"Ryan"}]}),a=Object(o.a)(t,2),r=a[0],l=a[1];return c.a.createElement(s.Provider,{value:{people:r.people,addPerson:function(e){l({type:"ADD_PERSON",payload:e})}}},c.a.createElement("div",{className:"container mt-4"},c.a.createElement("div",{className:"row"},c.a.createElement(u,null),c.a.createElement(f,null),c.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.cb4e4a81.chunk.js.map