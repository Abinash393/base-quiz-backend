(this.webpackJsonpcrapp=this.webpackJsonpcrapp||[]).push([[0],{33:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),c=a(3),i=a(13),l=a(4),o=a(5),u=a(7),m=a(6),p=a(8),h=a(16),d=a(2),b="SET_QUIZZES",f="SET_USERS",E="DELETE_QUIZ",g="INCREASE_MARK";function v(e){return{type:f,payload:e}}function O(e){return{type:g,payload:e}}function N(){return function(e){fetch("/api/v1/quizzes").then((function(e){return e.json()})).then((function(t){t.success&&e({type:b,payload:t})}))}}function y(e){return function(t){fetch("/api/v1/quizzes/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(a){a.success&&t({type:E,payload:e})}))}}var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleRequest=function(){"signup"===a.state.viewAuth&&fetch("/api/v1/".concat(a.state.viewTo),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:a.state.username,email:a.state.email,password:a.state.password}})}).then((function(e){return e.json()})).then((function(e){e.msg&&alert(e.msg)})),"signin"===a.state.viewAuth&&fetch("/api/v1/".concat(a.state.viewTo,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:a.state.email,password:a.state.password}})}).then((function(e){return e.json()})).then((function(e){e.msg&&alert(e.msg),e.token&&(localStorage.setItem("token",e.token),a.props.dispatch(v(a.state.viewTo))),e.id&&localStorage.setItem("id",e.id),"admins"===a.state.viewTo&&a.props.history.push("/admin/quiz/created"),"users"===a.state.viewTo&&a.props.history.push("/")}))},a.displayInput=function(){switch(a.state.viewAuth){case"signup":return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"input-effect col-3 "},s.a.createElement("label",null,"Full Name"),s.a.createElement("input",{name:"username",type:"text",className:"style-input",onChange:a.handleChange}),s.a.createElement("span",{className:"focus-border"})),s.a.createElement("div",{className:"input-effect col-3 "},s.a.createElement("label",null,"E-Mail"),s.a.createElement("input",{name:"email",type:"email",className:"style-input",onChange:a.handleChange}),s.a.createElement("span",{className:"focus-border"})),s.a.createElement("div",{className:"input-effect col-3 "},s.a.createElement("label",null,"Password"),s.a.createElement("input",{name:"password",type:"password",className:"style-input",onChange:a.handleChange}),s.a.createElement("span",{className:"focus-border"})),s.a.createElement("button",{className:"btn",onClick:function(){a.handleRequest()}},"Sign Up"));case"signin":return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"input-effect col-3 "},s.a.createElement("label",null,"E-Mail"),s.a.createElement("input",{name:"email",type:"email",className:"style-input",onChange:a.handleChange}),s.a.createElement("span",{className:"focus-border"})),s.a.createElement("div",{className:"input-effect col-3 "},s.a.createElement("label",null,"Password"),s.a.createElement("input",{name:"password",type:"password",className:"style-input",onChange:a.handleChange}),s.a.createElement("span",{className:"focus-border"})),s.a.createElement("button",{className:"btn",onClick:function(){a.handleRequest()}},"Sign In"))}},a.state={viewAuth:"signin",viewTo:"users",username:"",password:"",email:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"auth-container"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"left-auth"},s.a.createElement("span",{className:"base-quiz-text-area"},s.a.createElement("h2",{className:"base-text"},"Base"),s.a.createElement("h2",{className:"quiz-text"},"QUIZ")),s.a.createElement("p",{className:"a-fun-place-text"},"A fun place to create quiz and learn new things."),s.a.createElement("img",{src:"media/undraw_studying_s3l7.svg",alt:"vector",className:"vector-img"})),s.a.createElement("div",{className:"right-auth"},s.a.createElement("div",{className:"user-admin-area"},s.a.createElement("span",{onClick:function(){e.setState({viewTo:"users"})},className:"users"===this.state.viewTo?"user-admin-area-span active-underline":"user-admin-area-span"},"User"),s.a.createElement("span",{className:"big-text or"},"or"),s.a.createElement("span",{onClick:function(){e.setState({viewTo:"admins"})},className:"admins"===this.state.viewTo?"user-admin-area-span active-underline":"user-admin-area-span"},"Admin")),s.a.createElement("div",{className:"btn-class-area"},s.a.createElement("span",Object(d.a)({className:"big-text big-text-active",onClick:function(){e.setState({viewAuth:"signin"})}},"className","signin"===this.state.viewAuth?"big-text active-underline":"big-text"),"Sign In"),s.a.createElement("span",{className:"big-text or"},"or"),s.a.createElement("span",Object(d.a)({className:"big-text",onClick:function(){e.setState({viewAuth:"signup"})}},"className","signup"===this.state.viewAuth?"big-text active-underline":"big-text"),"Sign Up")),s.a.createElement("div",{className:"input-container"},this.displayInput())))))}}]),t}(s.a.Component);var w=Object(i.b)((function(e){return e.user}))(Object(h.f)(j));var z=Object(h.f)((function(e){return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper header-container"},s.a.createElement("span",{className:"quiz-text"},"Quiz"),s.a.createElement("nav",{className:"setting-link"},s.a.createElement(c.b,{to:"/admin/quiz/created"},"List"),s.a.createElement(c.b,{to:"/admin/quiz/create"},"Create"),s.a.createElement("button",{className:"lgt",onClick:function(){localStorage.clear(),e.history.push("/auth")}},"Logout"))))})),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),fetch("/api/v1/quizzes",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.token},body:JSON.stringify({question:a.state.question,quizset:a.state.quizset,option1:a.state.option1,option2:a.state.option2,option3:a.state.option3,option4:a.state.option4,answer:a.state.answer,authorId:localStorage.id})}).then((function(e){return e.json()})).then((function(e){e.msg&&alert(e.msg),e.success&&a.props.history.push("/admin/quiz/created")}))},a.state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return s.a.createElement(s.a.Fragment,null,s.a.createElement(z,null),s.a.createElement("div",{className:"wrapper"},s.a.createElement("h2",{className:"createnew"},"Create New Quiz"),s.a.createElement("form",{onSubmit:this.handleSubmit,className:"create-quiz"},s.a.createElement("label",{className:"crate-new-label",htmlFor:"question"},"Question:"),s.a.createElement("input",(e={className:"crate-new-label",type:"text",name:"question"},Object(d.a)(e,"className","input-classic"),Object(d.a)(e,"onChange",this.handleChange),e)),s.a.createElement("label",{className:"crate-new-label",htmlFor:"quizset"},"Quizset:"),s.a.createElement("input",{type:"text",name:"quizset",className:"input-classic",onChange:this.handleChange}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option1"},"Option1:"),s.a.createElement("input",{type:"text",name:"option1",className:"input-classic",onChange:this.handleChange}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option2"},"Option2:"),s.a.createElement("input",{type:"text",name:"option2",className:"input-classic",onChange:this.handleChange}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option3",onChange:this.handleChange},"Option3:"),s.a.createElement("input",{type:"text",name:"option3",className:"input-classic",onChange:this.handleChange}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option4"},"Option4:"),s.a.createElement("input",{type:"text",name:"option4",className:"input-classic",onChange:this.handleChange}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"answer"},"Answer:"),s.a.createElement("input",{type:"text",name:"answer",className:"input-classic",onChange:this.handleChange}),s.a.createElement("button",{className:"btn",type:"submit"},"Submit"))))}}]),t}(s.a.Component),q=Object(h.f)(C),S=a(32);var k=Object(h.f)((function(e){return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper header-container"},s.a.createElement("span",{className:"quiz-text"},"Quiz"),s.a.createElement("span",{className:"setting-link"},s.a.createElement(c.b,{to:"/user/setting"},"Settings"))))})),x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={view:null},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(N())}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(k,null),s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"top-container"}),s.a.createElement("div",{className:"main-container"},s.a.createElement("span",{className:"score"},"Marks: ",this.props.user.mark),s.a.createElement("div",{className:"tag-container"},this.props.quiz.quizzes?s.a.createElement("div",null,Object(S.a)(new Set(this.props.quiz.quizzes.quizzes)).map((function(t,a){return s.a.createElement("div",{className:"tag",onClick:function(){e.setState({view:t.quizset})}},t.quizset)}))):s.a.createElement("div",null,"Loading...")),s.a.createElement("div",{className:"card-container"},null==this.state.view?this.props.quiz.quizzes?this.props.quiz.quizzes.quizzes.map((function(t,a){return s.a.createElement("div",{className:"card"},s.a.createElement("h1",null,t.question),s.a.createElement("h2",{onClick:function(){t.option1===t.answer?e.props.dispatch(O()):alert("Wrong")}},"A: ",t.option1),s.a.createElement("h2",{onClick:function(){t.option2===t.answer?e.props.dispatch(O()):alert("Wrong")}},"B: ",t.option2),s.a.createElement("h2",{onClick:function(){t.option3===t.answer?e.props.dispatch(O()):alert("Wrong")}},"C: ",t.option3),s.a.createElement("h2",{onClick:function(){t.option4===t.answer?e.props.dispatch(O()):alert("Wrong")}},"D: ",t.option4))})):"":this.props.quiz.quizzes?this.props.quiz.quizzes.quizzes.map((function(t,a){return t.quizset==e.state.view?s.a.createElement("div",{className:"card"},s.a.createElement("h1",null,t.question),s.a.createElement("h2",{onClick:function(){t.option1===t.answer?e.setState({score:++e.state.score}):alert("Wrong")}},"A: ",t.option1),s.a.createElement("h2",{onClick:function(){t.option2===t.answer?e.setState({score:++e.state.score}):alert("Wrong")}},"B: ",t.option2),s.a.createElement("h2",{onClick:function(){t.option3===t.answer?e.setState({score:++e.state.score}):alert("Wrong")}},"C: ",t.option3),s.a.createElement("h2",{onClick:function(){t.option4===t.answer?e.setState({score:++e.state.score}):alert("Wrong")}},"D: ",t.option4)):""})):""))))}}]),t}(s.a.Component);var P=Object(i.b)((function(e){return e}))(Object(h.f)(x)),T=a(25),F=a.n(T),D=a(30);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),fetch("/api/v1/users/"+localStorage.id,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:localStorage.token},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){alert(t.msg),e.props.history.push("/")}))},e.state={},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/users/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.token}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState(I({},a.user));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(k,null),s.a.createElement("div",{className:"wrapper setting-container"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"create-quiz"},s.a.createElement("label",{className:"crate-new-label",htmlFor:""},"Full Name"),s.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,className:"input-classic",value:this.state.username}),s.a.createElement("label",{className:"crate-new-label",htmlFor:""},"E-mai"),s.a.createElement("input",{type:"email",name:"email",className:"input-classic",onChange:this.handleChange,value:this.state.email}),s.a.createElement("button",{type:"submit",className:"btn"},"Update"),s.a.createElement("button",{className:"logout",onClick:function(){localStorage.clear(),e.props.history.push("/auth")}},"Logout"))))}}]),t}(s.a.Component),Q=Object(h.f)(_),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleEdit=function(e){a.props.history.push("/admin/quiz/edit/"+e)},a.handleDelete=function(e){a.props.dispatch(y(e))},a.state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(N())}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(z,null),s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"main-container"},this.props.quizzes&&this.props.quizzes.quizzes?this.props.quizzes.quizzes.map((function(t,a){return s.a.createElement("div",{key:a,className:"card"},s.a.createElement("div",{className:"quizset"},t.quizset),s.a.createElement("div",null,t.question),s.a.createElement("div",{className:"btn-div"},s.a.createElement("span",{className:"delete",onClick:function(){e.handleDelete(t._id)}},"Delete"),s.a.createElement("span",{className:"edit",onClick:function(){e.handleEdit(t._id)}},"Edit")))})):s.a.createElement("center",null,'"Nothing To Show..."'))))}}]),t}(s.a.Component);var M=Object(i.b)((function(e){return e.quiz}))(Object(h.f)(U)),W=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),fetch("/api/v1/quizzes/".concat(e.props.match.params.id),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:localStorage.token},body:JSON.stringify({question:e.state.question,quizset:e.state.quizset,option1:e.state.option1,option2:e.state.option2,option3:e.state.option3,option4:e.state.option4,answer:e.state.answer})}).then((function(e){return e.json()})).then((function(e){e.msg&&alert(e.msg)}))},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.state={question:"",quizset:"",option1:"",option2:"",option3:"",option4:"",answer:""},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/quizzes/".concat(this.props.match.params.id),{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(t){return e.setState(t)}))}},{key:"render",value:function(){var e;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit,className:"create-quiz"},s.a.createElement("label",{className:"crate-new-label",htmlFor:"question"},"Question:"),s.a.createElement("input",(e={className:"crate-new-label",type:"text",name:"question"},Object(d.a)(e,"className","input-classic"),Object(d.a)(e,"onChange",this.handleChange),Object(d.a)(e,"value",this.state.question),e)),s.a.createElement("label",{className:"crate-new-label",htmlFor:"quizset"},"Quizset:"),s.a.createElement("input",{type:"text",name:"quizset",className:"input-classic",onChange:this.handleChange,value:this.state.quizset}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option1"},"Option1:"),s.a.createElement("input",{type:"text",name:"option1",className:"input-classic",onChange:this.handleChange,value:this.state.option1}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option2"},"Option2:"),s.a.createElement("input",{type:"text",name:"option2",className:"input-classic",onChange:this.handleChange,value:this.state.option2}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option3",onChange:this.handleChange},"Option3:"),s.a.createElement("input",{type:"text",name:"option3",className:"input-classic",onChange:this.handleChange,value:this.state.option3}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"option4"},"Option4:"),s.a.createElement("input",{type:"text",name:"option4",className:"input-classic",onChange:this.handleChange,value:this.state.option4}),s.a.createElement("label",{className:"crate-new-label",htmlFor:"answer"},"Answer:"),s.a.createElement("input",{type:"text",name:"answer",className:"input-classic",onChange:this.handleChange,value:this.state.answer}),s.a.createElement("button",{className:"btn",type:"submit"},"Submit"))))}}]),t}(s.a.Component),J=Object(h.f)(W);var L=function(e){return s.a.createElement("center",{className:"wrapper"},s.a.createElement("img",{src:"/media/undraw_searching_p5ux.svg",alt:"not found",className:"search-img"}),s.a.createElement("h2",{className:"not-found-text"},"404"),s.a.createElement("h2",{className:"not-found-text"},"Not Found!"),s.a.createElement("div",{className:"btn-container"},s.a.createElement(c.b,{to:"/auth",className:"space-rem"},s.a.createElement("span",{className:"not-found-text"},"<"," Back To Auth"))))};function R(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{exact:!0,path:"/admin/quiz/created",component:M}),s.a.createElement(h.a,{exact:!0,path:"/admin/quiz/create",component:q}),s.a.createElement(h.a,{exact:!0,path:"/admin/quiz/update",component:q}),s.a.createElement(h.a,{exact:!0,path:"/admin/quiz/edit/:id",component:J}))}function B(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{exact:!0,path:"/",component:P}),s.a.createElement(h.a,{exact:!0,path:"/user/setting",component:Q}))}var Z=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/auth",component:w}),"admins"===this.props.user?s.a.createElement(R,null):"users"===this.props.user?s.a.createElement(B,null):s.a.createElement(L,null))}}]),t}(s.a.Component);var G=Object(i.b)((function(e){return e.user}))(Object(h.f)(Z)),K=a(17),H=a(31);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y={quizzes:null};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return X({},e,{quizzes:t.payload});case E:var a=e.quizzes.quizzes.filter((function(e){if(e._id!==t.payload)return e}));return console.log(a),X({},e,{quizzes:{quizzes:a}});default:return e}};function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae={user:null,mark:0};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return te({},e,{user:t.payload});case g:return e.mark=++e.mark,te({},e);default:return e}},se=Object(K.c)({quiz:$,user:ne}),re=Object(K.d)(se,Object(K.a)(H.a));a(44);Object(r.render)(s.a.createElement(i.a,{store:re},s.a.createElement(c.a,null,s.a.createElement(G,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.062dbbbd.chunk.js.map