(this.webpackJsonpdevlok=this.webpackJsonpdevlok||[]).push([[0],{113:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(48),o=s.n(n),i=(s(57),s(4)),r=(s(58),s.p+"static/media/Main_logo.1e8f9cdf.svg"),l=s.p+"static/media/dashboard.b98c5a96.svg",j=s.p+"static/media/speaker_notes.dcef7346.svg",b=s.p+"static/media/collections_bookmark.7d123e4b.svg",d=s.p+"static/media/folder_shared.7d9517d6.svg",h=s.p+"static/media/cartoon.aaf94dca.svg",m=s.p+"static/media/avatar.54d8475c.svg",u=s(2),O=s(11),x=s.n(O),g=s.p+"static/media/logout.45e458ab.svg",p=s(23),v=s(0),f=function(e){var t=Object(c.useState)([{_id:"123",username:"sign In",email:"sample@gmail.com"}]),s=Object(i.a)(t,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){JSON.parse(localStorage.getItem("accessToken"));console.log("expo"),fetch("https://note-maker02.herokuapp.com/a/posts").then((function(e){if(e.ok)return e.json()})).then((function(e){var t=JSON.parse(localStorage.getItem("key"));console.log(t);"login ho gaya"===t?(console.log("ho gaya "),n(e)):(console.log("ho gaya dubara "),n([{_id:"123",username:"sign In",email:"sample@gmail.com"}]))}))})),Object(v.jsxs)("div",{className:"navbar",children:[Object(v.jsxs)("div",{className:"navbar_container",children:[Object(v.jsxs)("div",{className:"Main_logo",children:[Object(v.jsx)("img",{src:r,alt:"",className:"Logo_image"}),Object(v.jsx)("p",{children:"Note Maker"})]}),Object(v.jsxs)(u.b,{to:"/",children:[" ",Object(v.jsx)("img",{src:l,alt:"Dashboard",className:"component_images"}),"Dashboard"]}),Object(v.jsxs)(u.b,{to:"/notes",children:[" ",Object(v.jsx)("img",{src:j,alt:"Notes",className:"component_images"}),"Notes"]}),Object(v.jsxs)(u.b,{to:"/Lobby",children:[" ",Object(v.jsx)("img",{src:b,alt:"Lobby",className:"component_images"}),"Lobby"]}),Object(v.jsxs)(u.b,{to:"/Resources",children:[" ",Object(v.jsx)("img",{src:d,alt:"Resources",className:"component_images"}),"Resources"]}),Object(v.jsx)("img",{src:h,alt:"",className:"cartoon"}),Object(v.jsxs)("a",{href:"",className:"signIn_logo",children:[" ",Object(v.jsx)("img",{src:m,alt:"Dashboard",className:"component_images"})," ",Object(v.jsxs)("div",{className:"logout_button",children:[a[0].username,Object(v.jsx)("button",{onClick:function(){localStorage.clear();localStorage.setItem("key",JSON.stringify("")),x()({headers:{"content-type":"application/json"},method:"delete",url:"https://note-maker02.herokuapp.com/al/logout"}).then((function(){}))},children:Object(v.jsx)("img",{src:g})})," "]})]})]}),Object(v.jsxs)("div",{className:"navbar_phone",children:[Object(v.jsxs)(u.b,{to:"/",className:"Phone_nav_button",children:[" ",Object(v.jsx)("img",{src:l,alt:"Dashboard",className:""})]}),Object(v.jsxs)(u.b,{to:"/notes",className:"Phone_nav_button",children:[" ",Object(v.jsx)("img",{src:j,alt:"Notes",className:""})]}),Object(v.jsx)("div",{className:"round_logo Phone_nav_button",children:Object(v.jsx)("img",{src:r,alt:"",className:"Logo_image"})}),Object(v.jsxs)(u.b,{to:"/Lobby",className:"Phone_nav_button",children:[" ",Object(v.jsx)("img",{src:b,alt:"Lobby",className:""})]}),Object(v.jsxs)(u.b,{to:"/Resources",className:"Phone_nav_button",children:[" ",Object(v.jsx)("img",{src:d,alt:"Resources",className:""})]})]})]})},N=s.p+"static/media/dashBoardSvg.fc4adbc8.svg",y=function(){return Object(v.jsxs)("div",{className:"editor row",children:[Object(v.jsxs)("div",{className:"Dashboard_conatiner",children:[Object(v.jsx)("h1",{children:"Note Maker"}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"The Note Maker is a web application made by team \u201cTHE PROgrammer\u201d for students so that they can make notes faster and can share with their friends for helping each other and developing learning enviroment among their friends ."}),Object(v.jsx)("br",{}),Object(v.jsx)("h2",{children:Object(v.jsx)("strong",{children:"Features"})}),Object(v.jsx)("br",{}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:" 1. You can share your notes with friends also"}),Object(v.jsx)("li",{children:" 2. Can Make notes and store in a well arrnaged manner."}),Object(v.jsx)("li",{children:" 3. Facility of updating notes for future and text formating"}),Object(v.jsxs)("li",{children:[" ","4. Can read notes of yours friends also which are shared to you ."]})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:["So what are you waiting for ",Object(v.jsx)("strong",{children:"Get Stated !"})]}),Object(v.jsxs)("div",{className:"submit_options",children:[Object(v.jsxs)("button",{className:"singIn",children:[" ",Object(v.jsx)(u.b,{to:"/signIn",style:{backgroundColor:"transparent"},children:"Sign Up"})," "]}),Object(v.jsxs)("button",{children:[" ",Object(v.jsxs)(u.b,{to:"/login",style:{backgroundColor:"transparent"},children:[" ","Log In"]})," "]})]})]}),Object(v.jsx)("img",{src:N,alt:"",className:"cartoon_dash"})]})},k=s(6),_=(s.p,s.p+"static/media/share.8ab840c3.svg"),S=s.p+"static/media/delete.66b69701.svg",w=s.p+"static/media/share-b.e3e97c21.svg",C=s.p+"static/media/loading.1d35f173.svg",I=function(e){return Object(v.jsxs)("div",{className:"loadingContainer",children:[Object(v.jsx)("img",{src:C,alt:""}),Object(v.jsxs)("h1",{children:[" ",e.location,"......."]})]})},L=s.p+"static/media/wait.ac17af4a.svg",E=function(){return Object(v.jsxs)("div",{className:"waitContainer",children:[Object(v.jsx)("img",{src:L,alt:""}),Object(v.jsx)("h1",{children:"Seems like you are newbie....."}),Object(v.jsxs)("div",{className:"waitButtonContainer",children:[Object(v.jsx)("button",{children:Object(v.jsxs)(u.b,{to:"/login",className:"waitButtonLink",children:["Make a Account"," "]})}),Object(v.jsx)("button",{children:Object(v.jsxs)(u.b,{to:"/notes",className:"waitButtonLink",children:["Create Notes"," "]})})]})]})},B=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)({load:!0}),o=Object(i.a)(n,2),r=o[0],l=o[1],j=Object(c.useState)({user1:"",_id:""}),b=Object(i.a)(j,2),d=b[0],h=b[1],m=JSON.parse(localStorage.getItem("key"));return Object(c.useEffect)((function(){fetch("https://note-maker02.herokuapp.com/note/allSaved").then((function(e){if(e.ok)return e.json()})).then((function(e){a(e),l({load:!1})}))})),"login ho gaya"!=m?Object(v.jsx)("div",{className:"editor",children:Object(v.jsx)(E,{})}):1==r.load?Object(v.jsxs)("div",{className:"editor",children:[Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"Lobby_container",children:Object(v.jsx)(I,{location:"Finding notes"})})]}):Object(v.jsxs)("div",{className:"editor add2",children:[Object(v.jsxs)("div",{className:"lobbyHeading",children:[Object(v.jsx)("h1",{children:"Lobby "}),Object(v.jsxs)("div",{className:"lobbyHeading add",children:[Object(v.jsx)("button",{children:Object(v.jsxs)(u.b,{to:"/login",className:"waitButtonLink",children:["Make a Account"," "]})}),Object(v.jsx)("button",{children:Object(v.jsxs)(u.b,{to:"/notes",className:"waitButtonLink",children:["Create Notes"," "]})})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"Lobby_container",children:s.map((function(e){return 0==s.length?Object(v.jsx)("h1",{children:"There is nothing in lobby make some Notes "}):Object(v.jsxs)("div",{className:"Note_output_box",children:[Object(v.jsx)("h3",{children:e.topic}),Object(v.jsxs)("i",{children:[e.subject," ",Object(v.jsx)("button",{className:"more_button",onClick:function(){var t=e._id+"1";console.log(t),document.getElementById(t).style.display="flex"},children:".....more"})]}),Object(v.jsxs)("div",{className:"content",id:e._id+"1",children:[" ",Object(p.a)(e.written)," "]}),Object(v.jsx)("p",{className:"author_name_lobby",children:Object(v.jsxs)("stong",{children:["By : ",e.author]})}),Object(v.jsxs)("div",{className:"edit_button",children:[Object(v.jsx)("button",{onClick:function(){var t=e._id.toString();console.log(t),x()({headers:{"content-type":"application/json"},method:"delete",url:"https://note-maker02.herokuapp.com/note/Delete",data:{_id:t}})},children:Object(v.jsx)("img",{src:S,alt:"delete_button"})}),Object(v.jsx)("button",{onClick:function(){var t=e._id;console.log(t),document.getElementById(t).style.display="flex"},children:Object(v.jsx)("img",{src:w,alt:"delete_button"})})]}),Object(v.jsxs)("div",{className:"share_box",id:e._id,children:[Object(v.jsx)("input",{type:"text",name:"user1",value:d.email,onChange:function(t){var s=t.target.value,c=e._id.toString();h((function(e){return Object(k.a)(Object(k.a)({},e),{},{user1:s,_id:c})}))}}),Object(v.jsxs)("button",{className:"share_button",onClick:function(){var e=d.user1,t=d._id.toString();console.log(d),x()({headers:{"content-type":"application/json"},method:"put",url:"https://note-maker02.herokuapp.com/note/shareWith",data:{user1:e,_id:t}}).then((function(e){var s=e.data;console.log(s),document.getElementById(t).style.display="none"})).catch((function(e){console.log(e.response)}))},children:[Object(v.jsx)("img",{src:_,alt:""})," Share"]})]})]})}))})]})},D=s(12),M=s(51),P=s(52),J=s.n(P),T=s.p+"static/media/tick.e2a697f0.svg",F=s.p+"static/media/deleteWhite.ffc0d762.svg",R=function(){var e=Object(c.useState)({topic:"",subject:"",written:""}),t=Object(i.a)(e,2),s=t[0],a=t[1],n=JSON.parse(localStorage.getItem("key")),o=Object(c.useState)([]),r=Object(i.a)(o,2),l=r[0],j=r[1];Object(c.useEffect)((function(){fetch("https://note-maker02.herokuapp.com/note/allSaved").then((function(e){if(e.ok)return e.json()})).then((function(e){j(e)}))}));var d=function(e){var t=e.target,s=t.name,c=t.value;a((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(D.a)({},s,c))}))};return"login ho gaya"!=n?Object(v.jsx)("div",{className:"editor",children:Object(v.jsx)(E,{})}):Object(v.jsxs)("div",{className:"editor NotesContianer",id:"editor ",children:[Object(v.jsx)("div",{className:"notemaker",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"Notes"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:" Topic :"})," ",Object(v.jsx)("input",{name:"topic",type:"text",onChange:d,value:s.topic,placeholder:"Heading......"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:" Subject :"}),Object(v.jsx)("input",{name:"subject",type:"text",onChange:d,value:s.subject,placeholder:"Brief of content"})]})]}),Object(v.jsx)("div",{className:"note_writter",children:Object(v.jsx)(M.CKEditor,{editor:J.a,data:s.written,onChange:function(e,t){var s=t.getData();a((function(e){return Object(k.a)(Object(k.a)({},e),{},{written:s})}))}})}),Object(v.jsx)("div",{className:"submit_options",children:Object(v.jsxs)("button",{onClick:function(e){e.preventDefault(),console.log(s.topic),console.log(s.subject),console.log(s.written);var t={topic:s.topic,subject:s.subject,written:s.written};x.a.post("https://note-maker02.herokuapp.com/note/writter",t),a({topic:"",subject:"",written:""})},children:[Object(v.jsx)("img",{src:T,alt:""}),"Submit"]})})]})}),Object(v.jsx)("div",{className:"lobbyShower",children:Object(v.jsxs)("div",{className:"lobbyShower_output",children:[Object(v.jsxs)(u.b,{to:"/Lobby",style:{display:"flex",justifyContent:"center",fontWeight:"bold"},children:[" ","All written notes"]}),l.map((function(e){return 0==l.length?Object(v.jsx)("p",{children:"there is nothing in lobby"}):0!=l.length?Object(v.jsxs)(u.b,{to:"/Lobby",className:"linkInNotes",children:[" ",Object(v.jsx)("img",{src:b,alt:"Lobby",className:"component_images"}),e.topic,Object(v.jsx)("button",{className:"deleteInNotes",onClick:function(){var t=e._id.toString();console.log(t),x()({headers:{"content-type":"application/json"},method:"delete",url:"https://note-maker02.herokuapp.com/note/Delete",data:{_id:t}})},children:Object(v.jsx)("img",{src:F,alt:"delete_button"})})]}):void 0}))]})})]})},A=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)({More_option:!1}),o=Object(i.a)(n,2),r=(o[0],o[1]),l=Object(c.useState)({load:!0}),j=Object(i.a)(l,2),b=j[0],d=j[1],h=function(){r({More_option:!0})};return Object(c.useEffect)((function(){fetch("https://note-maker02.herokuapp.com/note/resources").then((function(e){if(e.ok)return e.json()})).then((function(e){a(e),d({load:!1})})).catch((function(){d({load:"noob"})}))})),"login ho gaya"!=JSON.parse(localStorage.getItem("key"))?Object(v.jsx)("div",{className:"editor",children:Object(v.jsx)(E,{})}):1==b.load?Object(v.jsx)("div",{className:"editor",children:Object(v.jsx)(I,{location:"Finding resources"})}):Object(v.jsxs)("div",{className:"editor add2",children:[Object(v.jsx)("h3",{children:"My name is Resources"}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"Lobby_container",children:[Object(v.jsx)("p",{children:"this is the area where you can find all of your notes . So don't worry just keep learning we keep your data safe for you"}),s.map((function(e){return Object(v.jsxs)("div",{className:"Note_output_box",children:[Object(v.jsx)("h3",{children:e.topic}),Object(v.jsx)("p",{children:Object(v.jsxs)("i",{children:[e.subject," ",Object(v.jsx)("button",{className:"more_button",onClick:h,children:".....more"})]})}),Object(v.jsx)("p",{className:"author_name_lobby",children:Object(v.jsxs)("stong",{children:["BY :",e.author]})})]})}))]})]})},H=s(3),U=s.p+"static/media/signUp_svg.ba18ab35.svg",W=s.p+"static/media/mail.c63bf207.svg",G=s.p+"static/media/lock.5ec1c6e1.svg",Y=s.p+"static/media/user.41dc3560.svg",z=function(){var e=Object(c.useState)({username:"",email:"",password:""}),t=Object(i.a)(e,2),s=t[0],a=t[1],n=function(e){var t=e.target,s=t.name,c=t.value;a((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(D.a)({},s,c))}))},o=Object(H.f)();return Object(v.jsx)("div",{className:"editor",children:Object(v.jsxs)("div",{className:"loginContainer",children:[Object(v.jsxs)("div",{className:"sigin_card",children:[Object(v.jsxs)("form",{children:[Object(v.jsx)("h1",{children:"Get's started."}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{children:["Username :",Object(v.jsxs)("div",{className:"inputContainer",children:[Object(v.jsx)("img",{src:Y,alt:""}),Object(v.jsx)("input",{type:"text",name:"username",onChange:n,value:s.username,placeholder:" Enter Namae "})]})]}),Object(v.jsxs)("div",{children:[" ","Email :",Object(v.jsxs)("div",{className:"inputContainer",children:[Object(v.jsx)("img",{src:W,alt:""}),Object(v.jsx)("input",{name:"email",type:"text",value:s.email,onChange:n,placeholder:"Enter email id "})]})]}),Object(v.jsxs)("div",{children:["Password :",Object(v.jsxs)("div",{className:"inputContainer",children:[Object(v.jsx)("img",{src:G,alt:""}),Object(v.jsx)("input",{name:"password",type:"text",value:s.password,onChange:n,placeholder:" Enter password "})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{onClick:function(e){e.preventDefault(),console.log(s.username),console.log(s.email),console.log(s.password);var t={username:s.username,email:s.email,password:s.password};x.a.post("https://note-maker02.herokuapp.com/al/signUp",t).then((function(e){o.push("/login")}))},className:"loginSubmitButton",children:"Submit"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"hr"})]}),Object(v.jsx)(u.b,{to:"/logIn",style:{backgroundColor:"transparent",display:"flex",justifyContent:"center"},children:"Already have a account ?"})]}),Object(v.jsx)("div",{className:"loginImage",children:Object(v.jsx)("img",{src:U,alt:"planningImage"})})]})})},K=s.p+"static/media/loginPage.e462d4a0.svg",q=function(e){var t=Object(c.useState)({email:"",password:""}),s=Object(i.a)(t,2),a=s[0],n=s[1],o=Object(c.useState)({status:""}),r=Object(i.a)(o,2),l=r[0],j=r[1],b=Object(c.useState)({load:!1}),d=Object(i.a)(b,2),h=d[0],m=d[1],O=Object(H.f)(),g=function(e){var t=e.target,s=t.name,c=t.value;n((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(D.a)({},s,c))}))};return 1==h.load?Object(v.jsx)("div",{className:"editor",children:Object(v.jsx)(I,{location:"Opening notes"})}):Object(v.jsx)("div",{className:"editor",children:Object(v.jsxs)("div",{className:"loginContainer",children:[Object(v.jsxs)("div",{className:"sigin_card",children:[Object(v.jsxs)("form",{children:[Object(v.jsx)("h1",{children:"Log In "}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{children:[" ","Email Address : ",Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"inputContainer",children:[Object(v.jsx)("img",{src:W,alt:""}),Object(v.jsx)("input",{type:"text",name:"email",onChange:g,value:a.email,placeholder:"Enter email id "})]})]}),Object(v.jsxs)("div",{children:[" ","Password : ",Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"inputContainer",children:[Object(v.jsx)("img",{src:G,alt:""}),Object(v.jsx)("input",{type:"text",name:"password",onChange:g,value:a.password,placeholder:"Enter password  "})]})]}),Object(v.jsx)("button",{onClick:function(e){e.preventDefault(),console.log(a.email),console.log(a.password),m({load:!0}),console.log(h.load);var t={email:a.email,password:a.password};x()({headers:{"content-type":"application/json"},method:"post",url:"https://note-maker02.herokuapp.com/al/login",data:t}).then((function(e){localStorage.clear(),localStorage.setItem("key",JSON.stringify("login ho gaya")),console.log("kuch bhi"),m({load:!1});var t=e.data;console.log(t),"not allowed"==t?j({status:" Account not exist "}):O.push("/notes")})).catch((function(e){console.log(e.response),j({status:"Account not exist make one ! "})})),n({email:"",password:""})},className:"loginSubmitButton",children:"Submit"}),Object(v.jsx)("div",{style:{color:"red",fontSize:"18px"},children:l.status}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"hr"})]}),Object(v.jsx)(u.b,{to:"/signIn",style:{backgroundColor:"transparent",display:"flex",justifyContent:"center"},children:"Don't have a account ? Want to make One !"})]}),Object(v.jsx)("div",{className:"loginImage",children:Object(v.jsx)("img",{src:K,alt:"planningImage"})})]})})};var Q=function(){var e=Object(c.useState)({flag:""}),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(v.jsx)(u.a,{children:Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)(f,{setToken:a,flag:s.flag}),Object(v.jsxs)(H.c,{children:[Object(v.jsx)(H.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{})}),Object(v.jsx)(H.a,{exact:!0,path:"/notes",children:Object(v.jsx)(R,{})}),Object(v.jsx)(H.a,{exact:!0,path:"/Lobby",children:Object(v.jsx)(B,{})}),Object(v.jsx)(H.a,{exact:!0,path:"/Resources",children:Object(v.jsx)(A,{})}),Object(v.jsx)(H.a,{exact:!0,path:"/signIn",children:Object(v.jsx)(z,{})}),Object(v.jsx)(H.a,{exact:!0,path:"/logIn",setToken:a,children:Object(v.jsx)(q,{})})]})]})})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,114)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;s(e),c(e),a(e),n(e),o(e)}))};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),V()},57:function(e,t,s){},58:function(e,t,s){}},[[113,1,2]]]);
//# sourceMappingURL=main.94c6e38b.chunk.js.map