"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[166],{7166:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,i,a,c,s,l,d,u,x,m=t(885),p=t(168),f=t(5397),h=t(2906),g=(0,f.Z)(h.W2)(r||(r=(0,p.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n"]))),b=f.Z.div(o||(o=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n"]))),j=f.Z.div(i||(i=(0,p.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-top: 1px solid lightgrey;\n"]))),v=(f.Z.div(a||(a=(0,p.Z)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 36px;\n  background: #212121;\n  color: #ffffff;\n  z-index: 1000;\n"]))),t(1413)),Z=t(8617),y=t(6856),w=t(3682),k=t(5705),C=t(7103),z=t(9434),_=t(7065),F=t(9504),S=t.n(F),T=(0,f.Z)(k.l0)(c||(c=(0,p.Z)(["\n  text-align: center;\n  width: 360px;\n  padding: 16px;\n  border: 1px solid #212121;\n  border-radius: 4px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n  background-color: white;\n\n  @media screen and (max-width: 360px) {\n    width: 100%;\n  }\n"]))),E=f.Z.div(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:not(:first-of-type) {\n    margin-top: 16px;\n  }\n"]))),L=(0,f.Z)(k.gN)(l||(l=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 4px;\n  font-weight: 700;\n  text-transform: capitalize;\n  width: 200px;\n"]))),I=(0,f.Z)(S())(d||(d=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 4px;\n  width: 200px;\n"]))),N=f.Z.button(u||(u=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  font-weight: 700;\n\n  transition: color 250ms linear, background-color 250ms linear;\n\n  :hover {\n    background-color: #ffcc00;\n    color: white;\n  }\n"]))),q=(0,f.Z)(k.Bc)(x||(x=(0,p.Z)(["\n  position: absolute;\n  bottom: 0;\n  transform: translatey(100%);\n\n  font-size: 10px;\n  background-color: white;\n  color: #212121;\n"]))),J=t(9126);function D(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var M=t(184),R=C.Ry().shape({name:C.Z_().required(),number:C.Z_().required()});function U(n){var e=n.toggleModalForm,t=(0,z.I0)(),r=(0,z.v9)((function(n){return n.contacts.items}));return(0,M.jsx)(k.J9,{onSubmit:function(n,o){var i=o.resetForm;r.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert(" ".concat(n.name," is already in contacts.")):(t((0,_.uK)(n)),i(),e())},initialValues:{name:"",number:""},validationSchema:R,children:(0,M.jsxs)(T,{children:[(0,M.jsx)(J._Tb,{size:"64",color:D()}),(0,M.jsxs)(w.x,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:4,children:[(0,M.jsxs)(w.x,{children:[(0,M.jsxs)(E,{children:[(0,M.jsx)(Z.VcF,{}),(0,M.jsx)(L,{type:"text",name:"name",placeholder:"Name"}),(0,M.jsx)(q,{component:"div",name:"name"})]}),(0,M.jsxs)(E,{children:[(0,M.jsx)(Z.JbR,{}),(0,M.jsx)(k.gN,{name:"number",children:function(n){var e=n.field;return(0,M.jsx)(I,(0,v.Z)((0,v.Z)({},e),{},{type:"tel",mask:"+99 999 999 9999",placeholder:"number"}))}}),(0,M.jsx)(q,{component:"div",name:"number"})]})]}),(0,M.jsx)(N,{type:"submit","aria-label":"Add contact",children:(0,M.jsx)(y.yjv,{size:"40",fill:"currentColor"})})]})]})})}var V,A,K=t(2791),B=t(4164),G=f.Z.div(V||(V=(0,p.Z)(["\n  position: fixed;\n  padding-top: 8px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),H=f.Z.div(A||(A=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),P=document.querySelector("#modal-root");function W(n){var e=n.onClose,t=n.children;(0,K.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e()};return(0,B.createPortal)((0,M.jsx)(G,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,M.jsx)(H,{children:t})}),P)}var O,Q,X,Y,$,nn=C.Ry().shape({name:C.Z_().required(),number:C.Z_().required()});function en(n){var e=n.onFormSubmit,t=n.nameToUpdate,r=n.numberToUpdate;return(0,M.jsx)(k.J9,{onSubmit:function(n){e(n)},initialValues:{name:t,number:r},validationSchema:nn,children:(0,M.jsxs)(T,{children:[(0,M.jsx)(J._Tb,{size:"64",color:D()}),(0,M.jsxs)(w.x,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:4,children:[(0,M.jsxs)(w.x,{children:[(0,M.jsxs)(E,{children:[(0,M.jsx)(Z.VcF,{}),(0,M.jsx)(L,{type:"text",name:"name",placeholder:"Name"}),(0,M.jsx)(q,{component:"div",name:"name"})]}),(0,M.jsxs)(E,{children:[(0,M.jsx)(Z.JbR,{}),(0,M.jsx)(k.gN,{name:"number",children:function(n){var e=n.field;return(0,M.jsx)(I,(0,v.Z)((0,v.Z)({},e),{},{type:"tel",mask:"+99 999 999 9999",placeholder:"number"}))}}),(0,M.jsx)(q,{component:"div",name:"number"})]})]}),(0,M.jsx)(N,{type:"submit","aria-label":"Formtact",children:(0,M.jsx)(y.tfk,{size:"40"})})]})]})})}var tn,rn=f.Z.span(O||(O=(0,p.Z)(["\n  margin-left: 8px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),on=f.Z.span(Q||(Q=(0,p.Z)(["\n  margin: 0 4px 0 auto;\n  font-size: 14px;\n  font-weight: 400;\n"]))),an=f.Z.button(X||(X=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 4px;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: #666666;\n\n  transition: color 250ms linear;\n"]))),cn=(0,f.Z)(an)(Y||(Y=(0,p.Z)(["\n  :hover {\n    color: #212121;\n  }\n"]))),sn=(0,f.Z)(an)($||($=(0,p.Z)(["\n  :hover {\n    color: red;\n  }\n"])));function ln(n){var e=n.onFormSubmit,t=n.toggleConfirm,r=n.name;return(0,M.jsx)(k.J9,{children:(0,M.jsxs)(T,{children:[(0,M.jsxs)("p",{children:["Delete contact ",(0,M.jsx)("b",{children:r}),"?"]}),(0,M.jsxs)(w.x,{display:"flex",justifyContent:"space-between",mt:3,children:[(0,M.jsx)(N,{type:"button","aria-label":"Cancel",onClick:t,children:"Cancel"}),(0,M.jsx)(N,{type:"button","aria-label":"Delete contact",onClick:e,children:"DELETE"})]})]})})}function dn(n){var e=n.id,t=n.name,r=n.number,o=(0,K.useState)(!1),i=(0,m.Z)(o,2),a=i[0],c=i[1],s=(0,K.useState)(!1),l=(0,m.Z)(s,2),d=l[0],u=l[1],x=(0,z.I0)(),p=function(){c(!a)},f=function(){u(!d)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(w.x,{width:"100%",display:"flex",alignItems:"center",py:3,children:[(0,M.jsx)(J._Tb,{size:"20",color:D()}),(0,M.jsx)(rn,{children:t}),(0,M.jsx)(on,{children:r})]}),(0,M.jsx)(cn,{type:"button",onClick:p,"aria-label":"Edit contact",children:(0,M.jsx)(y.zmo,{size:"18"})}),(0,M.jsx)(sn,{type:"button",onClick:function(){return u(!0)},"aria-label":"Delete contact",children:(0,M.jsx)(y.FH3,{size:"18"})}),a&&(0,M.jsx)(W,{onClose:p,children:(0,M.jsx)(en,{onFormSubmit:function(n){x((0,_.Tk)((0,v.Z)({id:e},n))),p()},nameToUpdate:t,numberToUpdate:r})}),d&&(0,M.jsx)(W,{onClose:f,children:(0,M.jsx)(ln,{onFormSubmit:function(){return n=e,void x((0,_.GK)({contactId:n,name:t}));var n},toggleConfirm:f,name:t})})]})}var un=f.Z.li(tn||(tn=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  color: #212121;\n\n  transition: background-color 250ms linear;\n\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}));function xn(n){var e=n.contacts;return(0,M.jsx)("ul",{children:e.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,t=n.name,r=n.number;return(0,M.jsx)(un,{children:(0,M.jsx)(dn,{id:e,name:t,number:r})},e)}))})}var mn,pn=t(2624),fn=t(7689),hn=f.Z.p(mn||(mn=(0,p.Z)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 16px;\n"])));function gn(n){var e=n.msg;return(0,M.jsx)(hn,{children:e})}function bn(){var n=(0,z.I0)(),e=(0,z.v9)((function(n){return n.filter})),t=(0,z.v9)((function(n){return n.contacts.items})),r=(0,z.v9)((function(n){return n.auth.isLoggedIn})),o=(0,z.v9)((function(n){return n.contacts.isLoading})),i=(0,K.useState)(!1),a=(0,m.Z)(i,2),c=a[0],s=a[1];(0,K.useEffect)((function(){n((0,_.yF)())}),[n]);var l=t?t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):"",d=function(){s(!c)};return(0,M.jsxs)(g,{children:[!r&&(0,M.jsx)(fn.Fg,{to:"/login"}),(0,M.jsx)(b,{children:o?(0,M.jsx)(gn,{msg:o}):(0,M.jsx)(pn.z,{type:"button",onClick:d,children:"Add New"})}),(0,M.jsxs)(j,{children:[!o&&!l.length&&(0,M.jsx)(gn,{msg:"No contacts found"}),l.length>0&&(0,M.jsx)(xn,{contacts:null!==l&&void 0!==l?l:[]})]}),c&&(0,M.jsx)(W,{onClose:d,children:(0,M.jsx)(U,{toggleModalForm:d})})]})}}}]);
//# sourceMappingURL=166.190815e8.chunk.js.map