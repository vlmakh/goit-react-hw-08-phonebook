"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[13],{2013:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,i,a,s,c,l,d,x,u=t(885),m=t(168),p=t(5397),f=t(9198),h=(0,p.Z)(f.W)(r||(r=(0,m.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n"]))),g=p.Z.div(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n"]))),b=p.Z.div(i||(i=(0,m.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-top: 1px solid lightgrey;\n"]))),j=t(1413),v=t(8617),Z=t(6856),y=t(3682),w=t(5705),k=t(7103),C=t(9434),_=t(7065),z=t(9504),F=t.n(z),S=(0,p.Z)(w.l0)(a||(a=(0,m.Z)(["\n  text-align: center;\n  width: 360px;\n  padding: 16px;\n  border: 1px solid #212121;\n  border-radius: 4px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n  background-color: white;\n\n  @media screen and (max-width: 360px) {\n    width: 100%;\n  }\n"]))),T=p.Z.div(s||(s=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:not(:first-of-type) {\n    margin-top: 16px;\n  }\n"]))),E=(0,p.Z)(w.gN)(c||(c=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 4px;\n  font-weight: 700;\n  text-transform: capitalize;\n  width: 200px;\n"]))),I=(0,p.Z)(F())(l||(l=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 4px;\n  width: 200px;\n"]))),N=p.Z.button(d||(d=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  font-weight: 700;\n\n  transition: color 250ms linear, background-color 250ms linear;\n\n  :hover {\n    background-color: #ffcc00;\n    color: white;\n  }\n"]))),J=(0,p.Z)(w.Bc)(x||(x=(0,m.Z)(["\n  position: absolute;\n  bottom: 0;\n  transform: translatey(100%);\n\n  font-size: 10px;\n  background-color: white;\n  color: #212121;\n"]))),q=t(9126);function D(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var L=t(6351),U=t(184),M=k.Ry().shape({name:k.Z_().required(),number:k.Z_().required()});function R(n){var e=n.toggleModalForm,t=(0,C.I0)(),r=(0,C.v9)(L.Af);return(0,U.jsx)(w.J9,{onSubmit:function(n,o){var i=o.resetForm;r.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert(" ".concat(n.name," is already in contacts.")):(t((0,_.uK)(n)),i(),e())},initialValues:{name:"",number:""},validationSchema:M,children:(0,U.jsxs)(S,{children:[(0,U.jsx)(q._Tb,{size:"64",color:D()}),(0,U.jsxs)(y.x,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:4,children:[(0,U.jsxs)(y.x,{children:[(0,U.jsxs)(T,{children:[(0,U.jsx)(v.VcF,{}),(0,U.jsx)(E,{type:"text",name:"name",placeholder:"Name"}),(0,U.jsx)(J,{component:"div",name:"name"})]}),(0,U.jsxs)(T,{children:[(0,U.jsx)(v.JbR,{}),(0,U.jsx)(w.gN,{name:"number",children:function(n){var e=n.field;return(0,U.jsx)(I,(0,j.Z)((0,j.Z)({},e),{},{type:"tel",mask:"+99 999 999 9999",placeholder:"number"}))}}),(0,U.jsx)(J,{component:"div",name:"number"})]})]}),(0,U.jsx)(N,{type:"submit","aria-label":"Add contact",children:(0,U.jsx)(Z.yjv,{size:"40",fill:"currentColor"})})]})]})})}var V,A,K=t(2791),W=t(4164),B=p.Z.div(V||(V=(0,m.Z)(["\n  position: fixed;\n  padding-top: 8px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),G=p.Z.div(A||(A=(0,m.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),H=document.querySelector("#modal-root");function P(n){var e=n.onClose,t=n.children;(0,K.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e()};return(0,W.createPortal)((0,U.jsx)(B,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,U.jsx)(G,{children:t})}),H)}var O,Q,X,Y,$,nn=k.Ry().shape({name:k.Z_().required(),number:k.Z_().required()});function en(n){var e=n.onFormSubmit,t=n.nameToUpdate,r=n.numberToUpdate;return(0,U.jsx)(w.J9,{onSubmit:function(n){e(n)},initialValues:{name:t,number:r},validationSchema:nn,children:(0,U.jsxs)(S,{children:[(0,U.jsx)(q._Tb,{size:"64",color:D()}),(0,U.jsxs)(y.x,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:4,children:[(0,U.jsxs)(y.x,{children:[(0,U.jsxs)(T,{children:[(0,U.jsx)(v.VcF,{}),(0,U.jsx)(E,{type:"text",name:"name",placeholder:"Name"}),(0,U.jsx)(J,{component:"div",name:"name"})]}),(0,U.jsxs)(T,{children:[(0,U.jsx)(v.JbR,{}),(0,U.jsx)(w.gN,{name:"number",children:function(n){var e=n.field;return(0,U.jsx)(I,(0,j.Z)((0,j.Z)({},e),{},{type:"tel",mask:"+99 999 999 9999",placeholder:"number"}))}}),(0,U.jsx)(J,{component:"div",name:"number"})]})]}),(0,U.jsx)(N,{type:"submit","aria-label":"Formtact",children:(0,U.jsx)(Z.tfk,{size:"40"})})]})]})})}var tn,rn=p.Z.span(O||(O=(0,m.Z)(["\n  margin-left: 8px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),on=p.Z.span(Q||(Q=(0,m.Z)(["\n  margin: 0 4px 0 auto;\n  font-size: 14px;\n  font-weight: 400;\n"]))),an=p.Z.button(X||(X=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 4px;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: #666666;\n\n  transition: color 250ms linear;\n"]))),sn=(0,p.Z)(an)(Y||(Y=(0,m.Z)(["\n  :hover {\n    color: #212121;\n  }\n"]))),cn=(0,p.Z)(an)($||($=(0,m.Z)(["\n  :hover {\n    color: red;\n  }\n"])));function ln(n){var e=n.onFormSubmit,t=n.toggleConfirm,r=n.name;return(0,U.jsx)(w.J9,{children:(0,U.jsxs)(S,{children:[(0,U.jsxs)("p",{children:["Delete contact ",(0,U.jsx)("b",{children:r}),"?"]}),(0,U.jsxs)(y.x,{display:"flex",justifyContent:"space-between",mt:3,children:[(0,U.jsx)(N,{type:"button","aria-label":"Cancel",onClick:t,children:"Cancel"}),(0,U.jsx)(N,{type:"button","aria-label":"Delete contact",onClick:e,children:"DELETE"})]})]})})}function dn(n){var e=n.id,t=n.name,r=n.number,o=(0,K.useState)(!1),i=(0,u.Z)(o,2),a=i[0],s=i[1],c=(0,K.useState)(!1),l=(0,u.Z)(c,2),d=l[0],x=l[1],m=(0,C.I0)(),p=function(){s(!a)},f=function(){x(!d)};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(y.x,{width:"100%",display:"flex",alignItems:"center",py:3,children:[(0,U.jsx)(q._Tb,{size:"20",color:D()}),(0,U.jsx)(rn,{children:t}),(0,U.jsx)(on,{children:r})]}),(0,U.jsx)(sn,{type:"button",onClick:p,"aria-label":"Edit contact",children:(0,U.jsx)(Z.zmo,{size:"18"})}),(0,U.jsx)(cn,{type:"button",onClick:function(){return x(!0)},"aria-label":"Delete contact",children:(0,U.jsx)(Z.FH3,{size:"18"})}),a&&(0,U.jsx)(P,{onClose:p,children:(0,U.jsx)(en,{onFormSubmit:function(n){m((0,_.Tk)((0,j.Z)({id:e},n))),p()},nameToUpdate:t,numberToUpdate:r})}),d&&(0,U.jsx)(P,{onClose:f,children:(0,U.jsx)(ln,{onFormSubmit:function(){return n=e,void m((0,_.GK)({contactId:n,name:t}));var n},toggleConfirm:f,name:t})})]})}var xn=p.Z.li(tn||(tn=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  color: #212121;\n\n  transition: background-color 250ms linear;\n\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}));function un(n){var e=n.contacts;return(0,U.jsx)("ul",{children:e.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,t=n.name,r=n.number;return(0,U.jsx)(xn,{children:(0,U.jsx)(dn,{id:e,name:t,number:r})},e)}))})}var mn,pn=t(2624),fn=t(7689),hn=p.Z.p(mn||(mn=(0,m.Z)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 16px;\n  font-weight: 700;\n"])));function gn(n){var e=n.msg;return(0,U.jsx)(hn,{children:e})}function bn(){var n=(0,C.I0)(),e=(0,C.v9)(L.DI),t=(0,C.v9)(L.JW),r=(0,C.v9)(L.xU),o=(0,K.useState)(!1),i=(0,u.Z)(o,2),a=i[0],s=i[1];(0,K.useEffect)((function(){n((0,_.yF)())}),[n]);var c=function(){s(!a)};return(0,U.jsxs)(h,{children:[!t&&(0,U.jsx)(fn.Fg,{to:"/login"}),(0,U.jsx)(g,{children:r?(0,U.jsx)(gn,{msg:r}):(0,U.jsx)(pn.z,{type:"button",onClick:c,children:"Add New"})}),(0,U.jsxs)(b,{children:[!r&&!e.length&&(0,U.jsx)(gn,{msg:"No contacts found"}),e.length>0&&(0,U.jsx)(un,{contacts:null!==e&&void 0!==e?e:[]})]}),a&&(0,U.jsx)(P,{onClose:c,children:(0,U.jsx)(R,{toggleModalForm:c})})]})}}}]);
//# sourceMappingURL=13.b3ac0054.chunk.js.map