"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[933],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(7462),i=(n(7294),n(4137));const r={},s="Messaging",o={unversionedId:"administration/settings/messaging",id:"administration/settings/messaging",title:"Messaging",description:"Dispatch supports sending email notifications to participants of, for example, an incident.",source:"@site/docs/administration/settings/messaging.mdx",sourceDirName:"administration/settings",slug:"/administration/settings/messaging",permalink:"/dispatch/docs/administration/settings/messaging",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/messaging.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Terms",permalink:"/dispatch/docs/administration/settings/knowledge/term"},next:{title:"Plugins",permalink:"/dispatch/docs/administration/settings/plugins/"}},p={},l=[{value:"Notification templates",id:"notification-templates",level:2},{value:"Markdown in the notifications",id:"markdown-in-the-notifications",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messaging"},"Messaging"),(0,i.kt)("p",null,"Dispatch supports sending email notifications to participants of, for example, an incident."),(0,i.kt)("h2",{id:"notification-templates"},"Notification templates"),(0,i.kt)("p",null,"Templates for emails are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/dispatch/tree/master/src/dispatch/messaging/email/templates"},"part")," of Dispatch\nand are ",(0,i.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/"},"Jinja")," templates that during runtime are compiled into ",(0,i.kt)("a",{parentName:"p",href:"https://mjml.io/"},"MJML")," format."),(0,i.kt)("p",null,"There is a way to customize these templates. To do this, if you run Dispatch with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/dispatch-docker/"},"Docker Compose"),",\nmount a volume with a customized templates dir as part of the docker compose:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  web:\n    image: dispatch-local\n    ...\n    volumes:\n      - "../dispatch-templates/messaging-email-templates:/usr/local/lib/python3.11/site-packages/dispatch/messaging/email/templates"\n')),(0,i.kt)("p",null,"Such approach allows you to customize the common template for ",(0,i.kt)("em",{parentName:"p"},"all projects"),"."),(0,i.kt)("p",null,'You can also "patch" the templates ',(0,i.kt)("em",{parentName:"p"},"per project"),". Create a folder per project (identified by project id):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dispatch/messaging/email/templates/project_id/<project_id>/base.mjml\n")),(0,i.kt)("p",null,"This will be used at the first place if exists,\notherwise the resolution process will gracefully fall back to the default template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dispatch/messaging/email/templates/base.mjml\n")),(0,i.kt)("h2",{id:"markdown-in-the-notifications"},"Markdown in the notifications"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Watch out for security implications related to unescaped HTML that may propagate through the system.")),(0,i.kt)("p",null,"By default, notification text is just a plain text with special characters and HTML escaped."),(0,i.kt)("p",null,"It is possible, however, to enable Markdown syntax with a server setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DISPATCH_MARKDOWN_IN_INCIDENT_DESC=True\nDISPATCH_ESCAPE_HTML=False\n")))}d.isMDXComponent=!0}}]);