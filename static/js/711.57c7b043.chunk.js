"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[711],{6711:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,i,a,c,s,l,d,u=t(885),x=t(3682),p=t(168),m=t(921),f=t(2906),h=(0,m.Z)(f.W2)(r||(r=(0,p.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n"]))),b=m.Z.div(o||(o=(0,p.Z)(["\n  max-width: 360px;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-top: 1px solid lightgrey;\n"]))),g=(m.Z.div(i||(i=(0,p.Z)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 36px;\n  background: #212121;\n  color: #ffffff;\n  z-index: 1000;\n"]))),t(8617)),j=t(6856),v=t(5705),Z=t(4050),y=t(9434),w=t(5243),k=(0,m.Z)(v.l0)(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 360px;\n  padding: 16px;\n  border: 1px solid #212121;\n  border-radius: 4px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);\n  background-color: white;\n\n  @media screen and (max-width: 360px) {\n    width: 100%;\n  }\n"]))),C=m.Z.div(c||(c=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:not(:first-of-type) {\n    margin-top: 16px;\n  }\n"]))),F=(0,m.Z)(v.gN)(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 4px;\n"]))),z=m.Z.button(l||(l=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  font-weight: 700;\n\n  transition: color 250ms linear, background-color 250ms linear;\n\n  :hover {\n    background-color: #ffcc00;\n    color: white;\n  }\n"]))),S=(0,m.Z)(v.Bc)(d||(d=(0,p.Z)(["\n  position: absolute;\n  bottom: 0;\n  transform: translatey(100%);\n\n  font-size: 10px;\n  background-color: white;\n  color: #212121;\n"]))),E=t(184),T=Z.object().shape({name:Z.string().required(),number:Z.string().required()});function _(n){var e=n.toggleModalForm,t=(0,y.I0)(),r=(0,y.v9)((function(n){return n.contacts}));return(0,E.jsx)(v.J9,{onSubmit:function(n,o){var i=o.resetForm;r.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert(" ".concat(n.name," is already in contacts.")):(t((0,w.uK)(n)),i(),e())},initialValues:{name:"",number:""},validationSchema:T,children:(0,E.jsxs)(k,{children:[(0,E.jsxs)(x.x,{children:[(0,E.jsxs)(C,{children:[(0,E.jsx)(g.VcF,{}),(0,E.jsx)(F,{type:"text",name:"name",placeholder:"Name"}),(0,E.jsx)(S,{component:"div",name:"name"})]}),(0,E.jsxs)(C,{children:[(0,E.jsx)(g.JbR,{}),(0,E.jsx)(F,{type:"tel",name:"number",placeholder:"number"}),(0,E.jsx)(S,{component:"div",name:"number"})]})]}),(0,E.jsx)(z,{type:"submit","aria-label":"Add contact",children:(0,E.jsx)(j.yjv,{size:"40",fill:"currentColor"})})]})})}var I,L,q=t(1413),J=t(9126),N=t(2791),D=t(4164),M=m.Z.div(I||(I=(0,p.Z)(["\n  position: fixed;\n  padding-top: 8px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),U=m.Z.div(L||(L=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),V=document.querySelector("#modal-root");function A(n){var e=n.onClose,t=n.children;(0,N.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e()};return(0,D.createPortal)((0,E.jsx)(M,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,E.jsx)(U,{children:t})}),V)}t(7427);var K,R,B,G,H,P=Z.object().shape({name:Z.string().required(),number:Z.string().phone().required()});function W(n){var e=n.onFormSubmit,t=n.nameToUpdate,r=n.numberToUpdate;return(0,E.jsx)(v.J9,{onSubmit:function(n){console.log(n),e(n)},initialValues:{name:t,number:r},validationSchema:P,children:(0,E.jsxs)(k,{children:[(0,E.jsxs)(x.x,{children:[(0,E.jsxs)(C,{children:[(0,E.jsx)(g.VcF,{}),(0,E.jsx)(F,{type:"text",name:"name",placeholder:"Name"}),(0,E.jsx)(S,{component:"div",name:"name"})]}),(0,E.jsxs)(C,{children:[(0,E.jsx)(g.JbR,{}),(0,E.jsx)(F,{type:"tel",name:"number",placeholder:"number"}),(0,E.jsx)(S,{component:"div",name:"number"})]})]}),(0,E.jsx)(z,{type:"submit","aria-label":"Formtact",children:(0,E.jsx)(j.tfk,{size:"40"})})]})})}var O,Q=m.Z.span(K||(K=(0,p.Z)(["\n  margin-left: 8px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),X=m.Z.span(R||(R=(0,p.Z)(["\n  margin: 0 4px 0 auto;\n  font-size: 14px;\n  font-weight: 400;\n"]))),Y=m.Z.button(B||(B=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 4px;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: #666666;\n\n  transition: color 250ms linear;\n"]))),$=(0,m.Z)(Y)(G||(G=(0,p.Z)(["\n  :hover {\n    color: #212121;\n  }\n"]))),nn=(0,m.Z)(Y)(H||(H=(0,p.Z)(["\n  :hover {\n    color: red;\n  }\n"])));function en(n){var e=n.onFormSubmit,t=n.toggleConfirm,r=n.name;return(0,E.jsx)(v.J9,{children:(0,E.jsx)(k,{children:(0,E.jsxs)(x.x,{width:"100%",children:[(0,E.jsxs)("p",{children:["Delete contact ",(0,E.jsx)("b",{children:r}),"?"]}),(0,E.jsxs)(x.x,{display:"flex",justifyContent:"space-between",children:[(0,E.jsx)(z,{type:"button","aria-label":"Cancel",onClick:t,children:"Cancel"}),(0,E.jsx)(z,{type:"button","aria-label":"Delete contact",onClick:e,children:"DELETE"})]})]})})})}function tn(n){var e=n.id,t=n.name,r=n.number,o=(0,N.useState)(!1),i=(0,u.Z)(o,2),a=i[0],c=i[1],s=(0,N.useState)(!1),l=(0,u.Z)(s,2),d=l[0],p=l[1],m=(0,y.I0)(),f=function(){c(!a)},h=function(){p(!d)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(x.x,{width:"100%",display:"flex",alignItems:"center",p:2,children:[(0,E.jsx)(J._Tb,{size:"20",color:"#".concat(Math.floor(16777215*Math.random()).toString(16))}),(0,E.jsx)(Q,{children:t}),(0,E.jsx)(X,{children:r})]}),(0,E.jsx)($,{type:"button",onClick:f,"aria-label":"Edit contact",children:(0,E.jsx)(j.zmo,{size:"18"})}),(0,E.jsx)(nn,{type:"button",onClick:function(){return p(!0)},"aria-label":"Delete contact",children:(0,E.jsx)(j.FH3,{size:"18"})}),a&&(0,E.jsx)(A,{onClose:f,children:(0,E.jsx)(W,{onFormSubmit:function(n){m((0,w.Tk)((0,q.Z)({id:e},n))),f()},nameToUpdate:t,numberToUpdate:r})}),d&&(0,E.jsx)(A,{onClose:h,children:(0,E.jsx)(en,{onFormSubmit:function(){return n=e,void m((0,w.GK)({contactId:n,name:t}));var n},toggleConfirm:h,name:t})})]})}var rn,on,an=m.Z.li(O||(O=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  padding-right: 8px;\n  color: #212121;\n\n  transition: background-color 250ms linear;\n\n  :hover {\n    background-color: #fcd535;\n  }\n"])));function cn(n){var e=n.contacts;return(0,E.jsx)("ul",{children:e.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,t=n.name,r=n.number;return(0,E.jsx)(an,{children:(0,E.jsx)(tn,{id:e,name:t,number:r})},e)}))})}var sn=m.Z.div(rn||(rn=(0,p.Z)(["\n  padding: 4px 8px;\n"]))),ln=m.Z.input(on||(on=(0,p.Z)(["\n  display: block;\n  text-align: left;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 4px 8px;\n"]))),dn=t(8880);function un(){var n=(0,y.I0)(),e=(0,y.v9)((function(n){return n.filter}));return(0,E.jsx)(sn,{children:(0,E.jsx)(ln,{type:"text",name:"filter",value:e,onChange:function(e){n((0,dn.s)(e.currentTarget.value))},placeholder:"Find contact by name"})})}var xn,pn=t(2624),mn=t(7689),fn=m.Z.p(xn||(xn=(0,p.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-size: 16px;\n"])));function hn(n){var e=n.msg;return(0,E.jsx)(fn,{children:e})}function bn(){var n=(0,y.I0)(),e=(0,y.v9)((function(n){return n.filter})),t=(0,y.v9)((function(n){return n.contacts})),r=(0,y.v9)((function(n){return n.auth.isLoggedIn})),o=(0,N.useState)(!1),i=(0,u.Z)(o,2),a=i[0],c=i[1];(0,N.useEffect)((function(){n((0,w.yF)())}),[n]);var s=t?t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):"",l=function(){c(!a)};return(0,E.jsxs)(h,{children:[!r&&(0,E.jsx)(mn.Fg,{to:"/login"}),(0,E.jsxs)(x.x,{p:2,display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,E.jsx)(un,{}),(0,E.jsx)(pn.z,{type:"button",onClick:l,children:"Add New"})]}),(0,E.jsx)(b,{children:s.length>0||e?(0,E.jsx)(cn,{contacts:null!==s&&void 0!==s?s:[]}):(0,E.jsx)(hn,{msg:"No contacts added"})}),(0,E.jsx)(x.x,{position:"absolute",right:"0",top:"0",children:a&&(0,E.jsx)(A,{onClose:l,children:(0,E.jsx)(_,{toggleModalForm:l})})})]})}}}]);
//# sourceMappingURL=711.57c7b043.chunk.js.map