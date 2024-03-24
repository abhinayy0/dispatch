"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1596],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(r),y=s,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),s=(r(7294),r(4137));const i={},a="Case Severity",o={unversionedId:"administration/settings/case/case-severity",id:"administration/settings/case/case-severity",title:"Case Severity",description:"In addition to case types, Dispatch allows you to specify the case's severity.",source:"@site/docs/administration/settings/case/case-severity.mdx",sourceDirName:"administration/settings/case",slug:"/administration/settings/case/case-severity",permalink:"/dispatch/docs/administration/settings/case/case-severity",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/case/case-severity.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Case Priority",permalink:"/dispatch/docs/administration/settings/case/case-priority"},next:{title:"Case Types",permalink:"/dispatch/docs/administration/settings/case/case-type"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,s.kt)(d,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"case-severity"},"Case Severity"),(0,s.kt)("p",null,"In addition to case types, Dispatch allows you to specify the case's severity."),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("p",null,(0,s.kt)("img",{src:r(1405).Z,width:"782",height:"1080"}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Name:")," The name of the case severity presented to the user."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description:")," The description of the case severity presented to the user."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"View Order:")," The order in which the severity will be listed in menus and dropdowns."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Color:")," The color used for the case severity in the UI."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Default Case Severity:")," If the reporter of a case does not provide a severity, a default will be used. Enable the setting to make this case severity the default."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Enabled:")," Whether this case severity is enabled or not."))}u.isMDXComponent=!0},1405:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/admin-ui-case-severities-b8dc85988dda2ef699d9d552085d06ce.png"}}]);