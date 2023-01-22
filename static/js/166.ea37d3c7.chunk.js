"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[166],{7166:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r,o,i,a,c,s,l,d,u,x=t(885),m=t(3682),p=t(168),f=t(5397),h=t(2906),b=(0,f.Z)(h.W2)(r||(r=(0,p.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n"]))),g=f.Z.div(o||(o=(0,p.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-top: 1px solid lightgrey;\n"]))),j=(f.Z.div(i||(i=(0,p.Z)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 36px;\n  background: #212121;\n  color: #ffffff;\n  z-index: 1000;\n"]))),t(1413)),v=t(8617),Z=t(6856),y=t(5705),w=t(7103),k=t(9434),C=t(7065),z=t(9504),_=t.n(z),F=(0,f.Z)(y.l0)(a||(a=(0,p.Z)(["\n  text-align: center;\n  width: 360px;\n  padding: 16px;\n  border: 1px solid #212121;\n  border-radius: 4px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n  background-color: white;\n\n  @media screen and (max-width: 360px) {\n    width: 100%;\n  }\n"]))),S=f.Z.div(c||(c=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:not(:first-of-type) {\n    margin-top: 16px;\n  }\n"]))),T=(0,f.Z)(y.gN)(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 4px;\n  font-weight: 700;\n  text-transform: capitalize;\n  width: 200px;\n"]))),E=(0,f.Z)(_())(l||(l=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 4px;\n  width: 200px;\n"]))),I=f.Z.button(d||(d=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  font-weight: 700;\n\n  transition: color 250ms linear, background-color 250ms linear;\n\n  :hover {\n    background-color: #ffcc00;\n    color: white;\n  }\n"]))),L=(0,f.Z)(y.Bc)(u||(u=(0,p.Z)(["\n  position: absolute;\n  bottom: 0;\n  transform: translatey(100%);\n\n  font-size: 10px;\n  background-color: white;\n  color: #212121;\n"]))),N=t(9126);function q(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var J=t(184),D=w.Ry().shape({name:w.Z_().required(),number:w.Z_().required()});function M(n){var e=n.toggleModalForm,t=(0,k.I0)(),r=(0,k.v9)((function(n){return n.contacts}));return(0,J.jsx)(y.J9,{onSubmit:function(n,o){var i=o.resetForm;r.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert(" ".concat(n.name," is already in contacts.")):(t((0,C.uK)(n)),i(),e())},initialValues:{name:"",number:""},validationSchema:D,children:(0,J.jsxs)(F,{children:[(0,J.jsx)(N._Tb,{size:"64",color:q()}),(0,J.jsxs)(m.x,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:4,children:[(0,J.jsxs)(m.x,{children:[(0,J.jsxs)(S,{children:[(0,J.jsx)(v.VcF,{}),(0,J.jsx)(T,{type:"text",name:"name",placeholder:"Name"}),(0,J.jsx)(L,{component:"div",name:"name"})]}),(0,J.jsxs)(S,{children:[(0,J.jsx)(v.JbR,{}),(0,J.jsx)(y.gN,{name:"number",children:function(n){var e=n.field;return(0,J.jsx)(E,(0,j.Z)((0,j.Z)({},e),{},{type:"tel",mask:"+99 999 999 9999",placeholder:"number"}))}}),(0,J.jsx)(L,{component:"div",name:"number"})]})]}),(0,J.jsx)(I,{type:"submit","aria-label":"Add contact",children:(0,J.jsx)(Z.yjv,{size:"40",fill:"currentColor"})})]})]})})}var R,U,V=t(2791),A=t(4164),K=f.Z.div(R||(R=(0,p.Z)(["\n  position: fixed;\n  padding-top: 8px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),B=f.Z.div(U||(U=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),G=document.querySelector("#modal-root");function H(n){var e=n.onClose,t=n.children;(0,V.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e()};return(0,A.createPortal)((0,J.jsx)(K,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,J.jsx)(B,{children:t})}),G)}var P,W,O,Q,X,Y=w.Ry().shape({name:w.Z_().required(),number:w.Z_().required()});function $(n){var e=n.onFormSubmit,t=n.nameToUpdate,r=n.numberToUpdate;return(0,J.jsx)(y.J9,{onSubmit:function(n){e(n)},initialValues:{name:t,number:r},validationSchema:Y,children:(0,J.jsxs)(F,{children:[(0,J.jsx)(N._Tb,{size:"64",color:q()}),(0,J.jsxs)(m.x,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:4,children:[(0,J.jsxs)(m.x,{children:[(0,J.jsxs)(S,{children:[(0,J.jsx)(v.VcF,{}),(0,J.jsx)(T,{type:"text",name:"name",placeholder:"Name"}),(0,J.jsx)(L,{component:"div",name:"name"})]}),(0,J.jsxs)(S,{children:[(0,J.jsx)(v.JbR,{}),(0,J.jsx)(y.gN,{name:"number",children:function(n){var e=n.field;return(0,J.jsx)(E,(0,j.Z)((0,j.Z)({},e),{},{type:"tel",mask:"+99 999 999 9999",placeholder:"number"}))}}),(0,J.jsx)(L,{component:"div",name:"number"})]})]}),(0,J.jsx)(I,{type:"submit","aria-label":"Formtact",children:(0,J.jsx)(Z.tfk,{size:"40"})})]})]})})}var nn,en=f.Z.span(P||(P=(0,p.Z)(["\n  margin-left: 8px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),tn=f.Z.span(W||(W=(0,p.Z)(["\n  margin: 0 4px 0 auto;\n  font-size: 14px;\n  font-weight: 400;\n"]))),rn=f.Z.button(O||(O=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 4px;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: #666666;\n\n  transition: color 250ms linear;\n"]))),on=(0,f.Z)(rn)(Q||(Q=(0,p.Z)(["\n  :hover {\n    color: #212121;\n  }\n"]))),an=(0,f.Z)(rn)(X||(X=(0,p.Z)(["\n  :hover {\n    color: red;\n  }\n"])));function cn(n){var e=n.onFormSubmit,t=n.toggleConfirm,r=n.name;return(0,J.jsx)(y.J9,{children:(0,J.jsxs)(F,{children:[(0,J.jsxs)("p",{children:["Delete contact ",(0,J.jsx)("b",{children:r}),"?"]}),(0,J.jsxs)(m.x,{display:"flex",justifyContent:"space-between",mt:3,children:[(0,J.jsx)(I,{type:"button","aria-label":"Cancel",onClick:t,children:"Cancel"}),(0,J.jsx)(I,{type:"button","aria-label":"Delete contact",onClick:e,children:"DELETE"})]})]})})}function sn(n){var e=n.id,t=n.name,r=n.number,o=(0,V.useState)(!1),i=(0,x.Z)(o,2),a=i[0],c=i[1],s=(0,V.useState)(!1),l=(0,x.Z)(s,2),d=l[0],u=l[1],p=(0,k.I0)(),f=function(){c(!a)},h=function(){u(!d)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(m.x,{width:"100%",display:"flex",alignItems:"center",py:3,children:[(0,J.jsx)(N._Tb,{size:"20",color:q()}),(0,J.jsx)(en,{children:t}),(0,J.jsx)(tn,{children:r})]}),(0,J.jsx)(on,{type:"button",onClick:f,"aria-label":"Edit contact",children:(0,J.jsx)(Z.zmo,{size:"18"})}),(0,J.jsx)(an,{type:"button",onClick:function(){return u(!0)},"aria-label":"Delete contact",children:(0,J.jsx)(Z.FH3,{size:"18"})}),a&&(0,J.jsx)(H,{onClose:f,children:(0,J.jsx)($,{onFormSubmit:function(n){p((0,C.Tk)((0,j.Z)({id:e},n))),f()},nameToUpdate:t,numberToUpdate:r})}),d&&(0,J.jsx)(H,{onClose:h,children:(0,J.jsx)(cn,{onFormSubmit:function(){return n=e,void p((0,C.GK)({contactId:n,name:t}));var n},toggleConfirm:h,name:t})})]})}var ln=f.Z.li(nn||(nn=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  color: #212121;\n\n  transition: background-color 250ms linear;\n\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}));function dn(n){var e=n.contacts;return(0,J.jsx)("ul",{children:e.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,t=n.name,r=n.number;return(0,J.jsx)(ln,{children:(0,J.jsx)(sn,{id:e,name:t,number:r})},e)}))})}var un,xn=t(2624),mn=t(7689),pn=f.Z.p(un||(un=(0,p.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-size: 16px;\n"])));function fn(n){var e=n.msg;return(0,J.jsx)(pn,{children:e})}function hn(){var n=(0,k.I0)(),e=(0,k.v9)((function(n){return n.filter})),t=(0,k.v9)((function(n){return n.contacts})),r=(0,k.v9)((function(n){return n.auth.isLoggedIn})),o=(0,V.useState)(!1),i=(0,x.Z)(o,2),a=i[0],c=i[1];(0,V.useEffect)((function(){n((0,C.yF)())}),[n]);var s=t?t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):"",l=function(){c(!a)};return(0,J.jsxs)(b,{children:[!r&&(0,J.jsx)(mn.Fg,{to:"/login"}),(0,J.jsx)(m.x,{py:3,display:"flex",justifyContent:"center",alignItems:"center",children:(0,J.jsx)(xn.z,{type:"button",onClick:l,children:"Add New"})}),(0,J.jsx)(g,{children:s.length>0||e?(0,J.jsx)(dn,{contacts:null!==s&&void 0!==s?s:[]}):(0,J.jsx)(fn,{msg:"No contacts added"})}),(0,J.jsx)(m.x,{position:"absolute",right:"0",top:"0",children:a&&(0,J.jsx)(H,{onClose:l,children:(0,J.jsx)(M,{toggleModalForm:l})})})]})}}}]);
//# sourceMappingURL=166.ea37d3c7.chunk.js.map