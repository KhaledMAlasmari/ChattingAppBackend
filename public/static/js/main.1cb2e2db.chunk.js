(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{147:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(64),s=n.n(c),o=(n(73),n(74),n(75),n(8)),i=n(0);var u,l=function(){return Object(i.jsx)("div",{id:"authDiv",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{id:"authText",children:["Welcome to this app which is definitely ",Object(i.jsx)("br",{})," not a WhatsApp clone"]}),Object(i.jsxs)("div",{id:"authButtonsDiv",children:[Object(i.jsx)(o.b,{to:"/Auth/Signin",className:"authButton",children:"Sign in"}),Object(i.jsx)(o.b,{to:"/Auth/Signup",className:"authButton",children:"Sign up"})]})]})})},d=n(5),p=n(2),h=n.n(p),b=n(4),j=n(6),f=n.p+"static/media/user.bf0f18cf.svg",x=n.p+"static/media/next.77f44fcc.svg",g=n(66);var m={width:"15px",height:"15px"},O={display:"flex",justifyContent:"left",margin:"25px"},v={height:"50px",width:"50px",backgroundColor:"white",borderRadius:"50%",marginLeft:"5px"},C={display:"grid",alignItems:"center",gridTemplateColumns:"2fr 10fr 2fr 1fr",backgroundColor:"#476072",color:"white",fontSize:"25px",height:"125px",textDecoration:"none",cursor:"pointer"},y={backgroundColor:"#74bec1",borderWidth:"0px 0px",borderRadius:"20px"},w={display:"grid",alignItems:"center",gridTemplateColumns:"2fr 10fr 1fr",backgroundColor:"#002E47",color:"white",fontSize:"25px",height:"125px",textDecoration:"none",cursor:"pointer"},S=function(e){var t=e.info,n=t.name,r=t.username,a=t.lastOnline,c=t.numberOfNewMessages,s=e.selectedChatState,o=s.selectedContactInfo,l=s.setselectedContactInfo,d=function(){var e;l({name:n,username:r,lastOnline:a,numberOfNewMessages:0}),e=r,u.emit("markMessagesAsRead",{senderUsername:e})};return o.username===r?Object(i.jsxs)("div",{id:r,style:w,onClick:d,children:[Object(i.jsx)("div",{style:v,children:Object(i.jsx)("img",{src:f})}),Object(i.jsx)("div",{style:O,children:n}),Object(i.jsx)("img",{style:m,src:x})]}):Object(i.jsxs)("div",{id:r,style:C,onClick:d,children:[Object(i.jsx)("div",{style:v,children:Object(i.jsx)("img",{src:f})}),Object(i.jsx)("div",{style:O,children:n}),Object(i.jsx)("p",{style:y,children:void 0!==c?c:null}),Object(i.jsx)("img",{style:m,src:x})]})},k=n.p+"static/media/addContact.2572b8d7.svg",I=n.p+"static/media/logout.c2b409d7.svg",A={height:"40px",width:"40px",margin:"5px 5px",alignItems:"center",cursor:"pointer"},R={height:"40px",width:"40px",alignItems:"center",cursor:"pointer"},B={display:"flex",justifyContent:"center",alignItems:"center",height:"50px",width:"50px",backgroundColor:"white",borderRadius:"50%",marginLeft:"5px"},D={display:"grid",alignItems:"center",gridTemplateColumns:"9fr 0.3fr 0.3fr",backgroundColor:"#548CA8",color:"white",fontSize:"25px",height:"10%"},F=function(e){var t=e.selectAddContactState,n=t.selectAddContact,r=t.setSelectAddContact,a=Object(d.f)();return Object(i.jsxs)("div",{style:D,children:[Object(i.jsx)(o.b,{style:B,to:"/settings",children:Object(i.jsx)("img",{src:f})}),Object(i.jsx)("img",{style:R,src:k,onClick:function(){return r(!n)}}),Object(i.jsx)("img",{style:A,src:I,onClick:function(){localStorage.removeItem("token"),a.push("/auth")}})]})},T={display:"flex",flexDirection:"column",width:"inherit",backgroundColor:"#476072"},U={overflowY:"scroll",height:"90%"},M=function(e){var t=e.contactsInfo,n=t.contacts,r=(t.setContacts,e.selectedChatState),a=r.selectedContactInfo,c=r.setselectedContactInfo,s=e.selectAddContactState,o=s.selectAddContact,u=s.setSelectAddContact;return Object(i.jsxs)("div",{style:T,children:[Object(i.jsx)(F,{selectAddContactState:{selectAddContact:o,setSelectAddContact:u}}),Object(i.jsx)("div",{style:U,children:n.map((function(e,t){return Object(i.jsx)(S,{info:e,selectedChatState:{selectedContactInfo:a,setselectedContactInfo:c}},t)}))})]})},N=n(27),z={textAlign:"left"},E={height:"50px",width:"50px",backgroundColor:"white",borderRadius:"50%",marginLeft:"10px"},q={display:"grid",alignItems:"center",height:"10%",gridTemplateRows:"inherit",gridTemplateColumns:"75px auto",backgroundColor:"#476072",color:"white",fontSize:"25px",textDecoration:"none"},W=function(e){var t=e.selectedChatState,n=t.selectedContactInfo;t.setselectedContactInfo;return Object(i.jsxs)("div",{style:q,children:[Object(i.jsx)("div",{style:E,children:Object(i.jsx)("img",{src:f})}),Object(i.jsx)("div",{style:z,children:null===n||void 0===n?void 0:n.name})]})},L={display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0px 10px",fontSize:"10px"},P={fontSize:"15px"},H={borderBottomLeftRadius:"0.8rem 0.7rem",borderRight:"1rem solid #248bf5",right:"-0.35rem",transform:"translate(0, -0.1rem)",bottom:"-0.1rem",content:"''",height:"1rem",position:"absolute"},Y={backgroundColor:"#334257",borderBottomLeftRadius:"0.5rem",right:"-40px",transform:"translate(-30px, -2px)",width:"10px",bottom:"-0.1rem",content:"''",height:"1rem",position:"absolute"},J={margin:"40px",display:"inline-block",position:"relative",alignSelf:"flex-end",width:"200px",height:"auto",backgroundColor:"#248bf5",borderRadius:"10px",wordWrap:"break-word"},G=function(e){var t=e.message,n=e.contactUsername,a=new Date(t.timeSent),c=Object(r.useState)({isRead:t.isRead,timeRead:new Date(t.timeRead)}),s=Object(j.a)(c,2),o=s[0],l=s[1];return Object(r.useEffect)((function(){var e;o.isRead||(e=function(e){n===e.username&&l({isRead:e.messagesRead,timeRead:new Date(e.timeRead)})},u.on("markMessagesAsRead",e))}),[]),Object(i.jsxs)("div",{style:J,children:[Object(i.jsx)("span",{style:H}),Object(i.jsx)("p",{children:t.text}),Object(i.jsxs)("div",{style:L,children:[Object(i.jsx)("p",{title:o.isRead?"".concat(o.timeRead.getFullYear(),"\\").concat(o.timeRead.getMonth()+1,"\\").concat(o.timeRead.getUTCDate(),"  ").concat(o.timeRead.getHours(),":").concat(o.timeRead.getMinutes()):"",style:P,children:o.isRead?"\u2705":"\u2611\ufe0f"}),Object(i.jsxs)("p",{children:[a.getFullYear(),"\\",a.getMonth()+1,"\\",a.getUTCDate(),"  ",a.getHours()%12,":",a.getMinutes()]})]}),Object(i.jsx)("span",{style:Y})]})},K={margin:"40px",display:"inline-block",position:"relative",alignSelf:"flex-start",width:"200px",height:"auto",backgroundColor:"#e5e5ea",borderRadius:"10px",wordWrap:"break-word",color:"black"},Q={borderBottomRightRadius:"0.8rem 0.7rem",borderLeft:"1rem solid #e5e5ea",left:"-0.35rem",transform:"translate(0, -0.1rem)",bottom:"-0.1rem",content:"''",height:"1rem",position:"absolute"},V={backgroundColor:"#334257",borderBottomRightRadius:"0.5rem",left:"20px",transform:"translate(-30px, -2px)",width:"10px",bottom:"-0.1rem",content:"''",height:"1rem",position:"absolute"},X=function(e){var t=e.message;return Object(i.jsxs)("div",{style:K,children:[Object(i.jsx)("span",{style:Q}),Object(i.jsx)("p",{children:t.text}),Object(i.jsx)("span",{style:V})]})},Z={display:"flex",flexDirection:"column",height:"80%",overflowY:"scroll"},$=function(e){var t=e.chat,n=e.selectedChatState,a=n.selectedContactInfo;n.setselectedContactInfo;return Object(r.useEffect)((function(){var e=document.getElementById("mainWrapper");null===e||void 0===e||e.scrollTo({behavior:"smooth",top:e.scrollHeight})})),Object(i.jsx)("div",{id:"mainWrapper",style:Z,children:t.Messages.map((function(e,t){return e.senderUsername!==a.username?Object(i.jsx)(G,{message:e,contactUsername:a.username},t):Object(i.jsx)(X,{message:e},t)}))})},_=n.p+"static/media/sendChatButton.0be4f0b5.svg",ee={width:"35px",height:"35px",justifySelf:"center",cursor:"pointer"},te={display:"flex",flexDirection:"row",height:"10%",width:"inherit",alignItems:"center",justifyContent:"flex-end",backgroundColor:"#548CA8"},ne={width:"96%",appearance:"none",margin:"0px 10px",padding:"0px 0px",justifySelf:"center",resize:"none",fontSize:"20px",border:"0px solid",borderRadius:"15px"},re=function(e){var t=e.selectedChatState,n=t.selectedContactInfo,r=(t.setselectedContactInfo,e.textInputState),a=r.textInput,c=r.setTextInput;return Object(i.jsxs)("div",{style:te,children:[Object(i.jsx)("img",{style:ee,src:_,onClick:function(){var e,t;e=a,t=n.username,u.emit("sendMessage",{text:e,reciverUsername:t})}}),Object(i.jsx)("textarea",{id:"textField",onChange:function(e){var t=e.target.value;c(t)},style:ne,rows:2})]})},ae={backgroundColor:"#334257",height:"100%",width:"100%",color:"white"},ce=function(e){var t=e.chatState,n=t.chats,a=t.setChats,c=e.selectedChatState,s=c.selectedContactInfo,o=c.setselectedContactInfo,l=Object(r.useState)(""),d=Object(j.a)(l,2),p=d[0],h=d[1];Object(r.useEffect)((function(){var e;e=function(e){var t=e.reciverUsername,r=b(t),c=Object(N.a)(n);c[r].Messages.push(e),a(c)},u.on("sendMessage",e),function(e){u.on("reciveMessage",e)}((function(e){var t=e.senderUsername,r=b(t),c=Object(N.a)(n);c[r].Messages.push(e),a(c)}))}),[]);var b=function(e){if(n)for(var t=n.length,r=0;r<t;r++)if(n[r].username===e)return r;var c=Object(N.a)(n);return c.push({username:s.username,Messages:[]}),a(c),c.length-1};return Object(i.jsxs)("div",{style:ae,children:[Object(i.jsx)(W,{selectedChatState:{selectedContactInfo:s,setselectedContactInfo:o}}),Object(i.jsx)($,{chat:function(){if(n)for(var e=n.length,t=0;t<e;t++)if(n[t].username===(null===s||void 0===s?void 0:s.username))return n[t];return{username:s.username,Messages:[]}}(),selectedChatState:{selectedContactInfo:s,setselectedContactInfo:o}}),Object(i.jsx)(re,{selectedChatState:{selectedContactInfo:s,setselectedContactInfo:o},textInputState:{textInput:p,setTextInput:h}})]})},se=n(15),oe=n.n(se),ie="".concat(""),ue=function(){var e=Object(b.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.post("".concat(ie,"/login"),{username:t,password:n});case 3:if(200!==(r=e.sent).status){e.next=7;break}return localStorage.setItem("token",r.data.token),e.abrupt("return",r.status);case 7:return e.abrupt("return",401);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",401);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(b.a)(h.a.mark((function e(t,n,r,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.post("".concat(ie,"/api/users/newUser"),{name:t,email:n,username:r,password:a});case 3:if(201!==e.sent.status){e.next=6;break}return e.abrupt("return",201);case 6:return e.abrupt("return",400);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",400);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),de=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("".concat(ie,"/api/users/checkIfEmailAvaliable/").concat(t));case 3:if(200!==e.sent.status){e.next=6;break}return e.abrupt("return",200);case 6:return e.abrupt("return",403);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",400);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("".concat(ie,"/api/users/checkIfUsernameAvaliable/").concat(t));case 3:if(200!==e.sent.status){e.next=6;break}return e.abrupt("return",200);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",403);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("token"),e.next=4,oe.a.put("".concat(ie,"/api/users/addContact/").concat(t),{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:if(200!==e.sent.status){e.next=7;break}return e.abrupt("return",200);case 7:return e.abrupt("return",400);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",400);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,oe.a.get("".concat(ie,"/api/users/getChats"),{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.data);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,oe.a.get("".concat(ie,"/api/users/getContacts"),{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.data);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("".concat(ie,"/login/validateToken/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(200!==e.sent.status){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),xe=n(18),ge=n.n(xe),me={height:"750px",width:"500px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",backgroundColor:"#5D8AAB",borderRadius:"15px",fontSize:"50px",color:"white",marginTop:"50px"},Oe=function(){var e=Object(r.useState)(Boolean),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(j.a)(c,2),o=s[0],u=s[1],l=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a(!0),n=new FormData(t.currentTarget),e.next=5,he(String(n.get("Username")));case 5:200===(r=e.sent)?(u("The user have been added to your contacts!"),a(!1)):u(400==r?"the user doesn't exist":"something went wrong"),a(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(i.jsx)(ge.a,{type:"Circles",color:"#00BFFF",height:80,width:80}):Object(i.jsxs)("form",{style:me,onSubmit:l,children:[Object(i.jsx)("p",{children:"Add contact"}),Object(i.jsx)("input",{className:"SignInFormInput",required:!0,name:"Username",placeholder:"Username",type:"text"}),Object(i.jsx)("input",{className:"authButton",type:"submit",value:"Add"}),Object(i.jsx)("p",{children:""!==o?o:null})]})},ve=n.p+"static/media/HomeIcon.318a1c89.svg",Ce={height:"40px",width:"40px",alignItems:"center",cursor:"pointer"},ye={display:"flex",justifyContent:"center",alignItems:"center",height:"50px",width:"50px",backgroundColor:"white",borderRadius:"50%",marginLeft:"5px"},we={display:"grid",alignItems:"center",gridTemplateColumns:"9fr 0.3fr",backgroundColor:"#548CA8",color:"white",fontSize:"25px",height:"10%",width:"100%"},Se=function(e){var t=e.selectAddContactState,n=t.selectAddContact,r=t.setSelectAddContact;return Object(i.jsxs)("div",{style:we,children:[Object(i.jsx)(o.b,{style:ye,to:"/settings",children:Object(i.jsx)("img",{src:f})}),Object(i.jsx)("img",{style:Ce,src:ve,onClick:function(){return r(!n)}})]})},ke={color:"white",display:"flex",flexDirection:"column",backgroundColor:"#334257",alignItems:"center",textAlign:"center",width:"100%",height:"100%"},Ie=function(e){var t=e.selectAddContactState,n=t.selectAddContact,r=t.setSelectAddContact;return Object(i.jsxs)("div",{style:ke,children:[Object(i.jsx)(Se,{selectAddContactState:{selectAddContact:n,setSelectAddContact:r}}),Object(i.jsx)(Oe,{})]})},Ae={color:"white",backgroundColor:"#334257",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",fontSize:"70px",height:"100%"},Re={color:"white",backgroundColor:"#334257",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",fontSize:"70px",height:"90%"},Be={display:"grid",gridTemplateRows:"100% 50px",gridTemplateColumns:"20% 80%"},De={display:"grid",gridTemplateRows:"100% 50px",gridTemplateColumns:"20% 80%"},Fe=function(){var e=Object(r.useState)({name:"default",username:"default",lastOnline:new Date,numberOfNewMessages:0}),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(j.a)(c,2),o=s[0],l=s[1],p=Object(r.useState)([]),f=Object(j.a)(p,2),x=f[0],m=f[1],O=Object(r.useState)(Boolean),v=Object(j.a)(O,2),C=v[0],y=v[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:return t=e.sent,l(t),e.next=6,be();case 6:n=e.sent,m(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return(t=e.sent)||(localStorage.removeItem("token"),u.disconnect()),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()&&0==o.length&&(e(),function(){if(!u){var e="".concat("");(u=Object(g.io)(e,{extraHeaders:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})).emit("userIsOnline")}u.connect()}())}),[]),C?Object(i.jsx)("div",{children:Object(i.jsx)(Ie,{selectAddContactState:{selectAddContact:C,setSelectAddContact:y}})}):localStorage.getItem("token")?0==o.length?Object(i.jsxs)("div",{children:[Object(i.jsx)(F,{selectAddContactState:{selectAddContact:C,setSelectAddContact:y}}),Object(i.jsx)("div",{style:Re,children:"Add contacts through the button on top\ud83d\ude0a\ud83d\udc4b"})]}):"default"!==n.name?Object(i.jsxs)("div",{style:De,children:[Object(i.jsx)(M,{contactsInfo:{contacts:o,setContacts:l},selectedChatState:{selectedContactInfo:n,setselectedContactInfo:a},selectAddContactState:{selectAddContact:C,setSelectAddContact:y}}),Object(i.jsx)(ce,{chatState:{chats:x,setChats:m},selectedChatState:{selectedContactInfo:n,setselectedContactInfo:a}})]}):Object(i.jsxs)("div",{style:Be,children:[Object(i.jsx)(M,{contactsInfo:{contacts:o,setContacts:l},selectedChatState:{selectedContactInfo:n,setselectedContactInfo:a},selectAddContactState:{selectAddContact:C,setSelectAddContact:y}}),Object(i.jsx)("div",{style:Ae,children:"Say hi to your friends \ud83d\ude0a\ud83d\udc4b"})]}):Object(i.jsx)(d.a,{to:"/Auth"})};n(147);var Te=function(){var e=localStorage.getItem("token"),t=Object(r.useState)(Boolean),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(j.a)(s,2),u=o[0],l=(o[1],function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),t.preventDefault(),n=new FormData(t.currentTarget),e.next=5,ue(String(n.get("Username")),String(n.get("Password")));case 5:e.sent,c(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return a?Object(i.jsx)(ge.a,{type:"Circles",color:"#00BFFF",height:80,width:80}):Object(i.jsx)("div",{id:"SignInFormDiv",children:Object(i.jsxs)("form",{onSubmit:l,children:[""!==u?Object(i.jsx)("h3",{style:{color:"red"},children:u}):null,e?Object(i.jsx)(d.a,{to:"/"}):null,Object(i.jsx)("p",{children:"Welcome back!"}),Object(i.jsx)("input",{className:"SignInFormInput",required:!0,name:"Username",placeholder:"Username",type:"text"}),Object(i.jsx)("input",{className:"SignInFormInput",placeholder:"Password",required:!0,name:"Password",type:"password"}),Object(i.jsx)("input",{className:"authButton",type:"submit",value:"Sign in"})]})})},Ue=function(){return Object(i.jsx)("div",{id:"SignInDiv",children:Object(i.jsx)(Te,{})})};var Me=function(){var e=Object(r.useState)(Boolean),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(Boolean),s=Object(j.a)(c,2),o=s[0],u=s[1],l=Object(r.useState)(""),p=Object(j.a)(l,2),f=p[0],x=p[1],g=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t.preventDefault(),n=new FormData(t.currentTarget),e.next=5,le(String(n.get("Name")),String(n.get("Email")),String(n.get("Username")),String(n.get("Password")));case 5:201===(r=e.sent)&&u(!0),x(400===r?"Your username / password doesn't meet the requirements":"Something is wrong on our part, sorry for the inconvenience\n error code ".concat(r)),a(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.target.value).length<1)){e.next=4;break}return t.target.style.backgroundColor="white",e.abrupt("return");case 4:return e.next=6,pe(n);case 6:r=e.sent,t.target.style.backgroundColor=200===r?"green":"red";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.target.value).length<1)){e.next=4;break}return t.target.style.backgroundColor="white",e.abrupt("return");case 4:return e.next=6,de(n);case 6:r=e.sent,t.target.style.backgroundColor=200===r?"green":"red";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.target.value).length<1)){e.next=4;break}return t.target.style.backgroundColor="white",e.abrupt("return");case 4:if(!(n.length>6)){e.next=7;break}return t.target.style.backgroundColor="green",e.abrupt("return");case 7:if(!(n.length<6)){e.next=10;break}return t.target.style.backgroundColor="red",e.abrupt("return");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(i.jsx)(ge.a,{type:"Circles",color:"#00BFFF",height:80,width:80}):Object(i.jsx)("div",{id:"SignInFormDiv",children:Object(i.jsxs)("form",{onSubmit:g,children:[""!==f?Object(i.jsx)("h3",{style:{color:"red"},children:f}):null,o?Object(i.jsx)(d.a,{to:"/Auth/SignIn"}):null,Object(i.jsx)("p",{children:"Join us!"}),Object(i.jsx)("input",{className:"SignInFormInput",required:!0,name:"Name",placeholder:"Full name",type:"text"}),Object(i.jsx)("input",{className:"SignInFormInput",onChange:O,required:!0,name:"Email",placeholder:"Email address",type:"email"}),Object(i.jsx)("input",{className:"SignInFormInput",onChange:m,required:!0,name:"Username",placeholder:"Username",type:"text"}),Object(i.jsx)("input",{className:"SignInFormInput",onChange:v,required:!0,placeholder:"Password",name:"Password",type:"password"}),Object(i.jsx)("input",{className:"authButton",type:"submit",value:"Sign up"})]})})},Ne=function(){return Object(i.jsx)("div",{id:"SignInDiv",children:Object(i.jsx)(Me,{})})},ze=n(67),Ee=n.n(ze),qe=n(37),We=n(68),Le=function(e){var t=e.component,n=Object(We.a)(e,["component"]);return Object(i.jsx)(d.b,Object(qe.a)(Object(qe.a)({},n),{},{render:function(e){return localStorage.getItem("token")?Object(i.jsx)(t,{}):Object(i.jsx)(d.a,{to:"/Auth"})}}))},Pe=function(){return Ee.a.config(),Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(Le,{path:"/",exact:!0,component:Fe}),Object(i.jsx)(d.b,{path:"/Auth",exact:!0,component:l}),Object(i.jsx)(d.b,{path:"/Auth/Signin",exact:!0,render:function(){return Object(i.jsx)(Ue,{})}}),Object(i.jsx)(d.b,{path:"/Auth/Signup",exact:!0,render:function(){return Object(i.jsx)(Ne,{})}})]})})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(Pe,{})}),document.getElementById("root"))},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){}},[[150,1,2]]]);
//# sourceMappingURL=main.1cb2e2db.chunk.js.map