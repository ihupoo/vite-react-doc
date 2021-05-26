var e=Object.defineProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t;import{N as n}from"./vendor.8ac4d6e3.js";function o(e){var o=e,{components:s}=o,p=((e,i)=>{var n={};for(var o in e)a.call(e,o)&&i.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&r)for(var o of r(e))i.indexOf(o)<0&&t.call(e,o)&&(n[o]=e[o]);return n})(o,["components"]);return n("wrapper",((e,n)=>{for(var o in n||(n={}))a.call(n,o)&&i(e,o,n[o]);if(r)for(var o of r(n))t.call(n,o)&&i(e,o,n[o]);return e})({components:s},p),n("div",{className:"markdown"},n("h1",{id:"configuration",parentName:"div"},n("a",{href:"#configuration","aria-hidden":"true",className:"header-anchor-a",parentName:"h1"}),"Configuration"),n("p",{parentName:"div"},"Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let’s first create a ",n("inlineCode",{parentName:"p"},".vitepress")," directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:"),n("pre",{parentName:"div"},n("code",{className:"language-bash",parentName:"pre"},".\r\n├─ docs\r\n│  ├─ .vitepress\r\n│  │  └─ config.js\r\n│  └─ index.md\r\n└─ package.json\n")),n("p",{parentName:"div"},"The essential file for configuring a VitePress site is ",n("inlineCode",{parentName:"p"},".vitepress/config.js"),", which should export a JavaScript object:"),n("pre",{parentName:"div"},n("code",{className:"language-js",parentName:"pre"},"module.exports = {\r\n  title: 'Hello VitePress',\r\n  description: 'Just playing around.'\r\n}\n")),n("p",{parentName:"div"},"Check out the ",n("a",{href:"/config/basics.html",parentName:"p"},"Config Reference")," for a full list of options.")))}o.isMDXComponent=!0;const s='{"title":"Configuration","description":"","relativePath":"guide/configuration.md","headers":[{"level":1,"title":"Configuration","slug":"configuration"}],"frontmatter":{},"lastUpdated":1617350670292}';export default o;export{s as __pageData};
