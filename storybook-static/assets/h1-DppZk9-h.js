import{r as l}from"./index-BBkUAzwr.js";var i={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=l,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function _(t,r,o){var e,n={},p=null,f=null;o!==void 0&&(p=""+o),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)u.call(r,e)&&!d.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:m,type:t,key:p,ref:f,props:n,_owner:c.current}}s.Fragment=x;s.jsx=_;s.jsxs=_;i.exports=s;var y=i.exports;function v({className:t,children:r,...o}){return y.jsx("h1",{...o,className:`text-4xl font-extrabold tracking-tight md:text-5xl ${t}`,children:r})}v.__docgenInfo={description:"",methods:[],displayName:"H1",composes:["HTMLProps"]};export{v as H,y as j};
