import{r as l}from"./index-BBkUAzwr.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function d(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function p(...e){return r=>e.forEach(n=>d(n,r))}const m=l.forwardRef((e,r)=>{const{children:n,...t}=e,o=l.Children.toArray(n),c=o.find(h);if(c){const i=c.props.children,s=o.map(u=>u===c?l.Children.count(i)>1?l.Children.only(null):l.isValidElement(i)?i.props.children:null:u);return l.createElement(f,a({},t,{ref:r}),l.isValidElement(i)?l.cloneElement(i,void 0,s):null)}return l.createElement(f,a({},t,{ref:r}),n)});m.displayName="Slot";const f=l.forwardRef((e,r)=>{const{children:n,...t}=e;return l.isValidElement(n)?l.cloneElement(n,{...E(t,n.props),ref:r?p(r,n.ref):n.ref}):l.Children.count(n)>1?l.Children.only(null):null});f.displayName="SlotClone";const $=({children:e})=>l.createElement(l.Fragment,null,e);function h(e){return l.isValidElement(e)&&e.type===$}function E(e,r){const n={...r};for(const t in r){const o=e[t],c=r[t];/^on[A-Z]/.test(t)?o&&c?n[t]=(...s)=>{c(...s),o(...s)}:o&&(n[t]=o):t==="style"?n[t]={...o,...c}:t==="className"&&(n[t]=[o,c].filter(Boolean).join(" "))}return{...e,...n}}export{m as $,a as _};
