var e=Object.defineProperty,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(n,t,a)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;import{N as r}from"./vendor.b2a3f479.js";function l(e){var l=e,{components:i}=l,p=((e,o)=>{var r={};for(var l in e)t.call(e,l)&&o.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&n)for(var l of n(e))o.indexOf(l)<0&&a.call(e,l)&&(r[l]=e[l]);return r})(l,["components"]);return r("wrapper",((e,r)=>{for(var l in r||(r={}))t.call(r,l)&&o(e,l,r[l]);if(n)for(var l of n(r))a.call(r,l)&&o(e,l,r[l]);return e})({components:i},p),r("div",{className:"markdown"},r("h1",{id:"global-component",parentName:"div"},r("a",{href:"#global-component","aria-hidden":"true",className:"header-anchor-a",parentName:"h1"}),"Global Component"),r("p",{parentName:"div"},"VitePress comes with few built-in component that can be used globally. You may use these components in your markdown or your custom theme configuration."),r("h2",{id:"content",parentName:"div"},r("a",{href:"#content","aria-hidden":"true",className:"header-anchor-a",parentName:"h2"}),"Content"),r("p",{parentName:"div"},"The ",r("inlineCode",{parentName:"p"},"Content")," component displays the rendered markdown contents. Useful ",r("a",{href:"http://localhost:3000/guide/customization.html",target:"_blank",rel:"noopener noreferrer",parentName:"p"},"when creating your own theme"),"."),r("pre",{parentName:"div"},r("code",{className:"language-vue",parentName:"pre"},"<template>\n  <h1>Custom Layout!</h1>\n  <Content />\n</template>\n")),r("h2",{id:"clientonly",parentName:"div"},r("a",{href:"#clientonly","aria-hidden":"true",className:"header-anchor-a",parentName:"h2"}),"ClientOnly"),r("p",{parentName:"div"},"The ",r("inlineCode",{parentName:"p"},"ClientOnly")," component renderes its slot only at client side."),r("p",{parentName:"div"},"Because VitePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the universal code requirements. In short, make sure to only access Browser / DOM APIs in beforeMount or mounted hooks."),r("p",{parentName:"div"},"If you are using or demoing components that are not SSR-friendly (for example, contain custom directives), you can wrap them inside the ",r("inlineCode",{parentName:"p"},"ClientOnly")," component."),r("pre",{parentName:"div"},r("code",{className:"language-html",parentName:"pre"},"<ClientOnly>\n  <NonSSRFriendlyComponent />\n</ClientOnly>\n"))))}l.isMDXComponent=!0;const i='{"title":"Global Component","description":"","relativePath":"guide/global-component.md","headers":[{"level":1,"title":"Global Component","slug":"global-component"},{"level":2,"title":"Content","slug":"content"},{"level":2,"title":"ClientOnly","slug":"clientonly"}],"frontmatter":{},"lastUpdated":1642337994019}';export default l;export{i as __pageData};
