"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50628],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,v=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?l.createElement(v,o(o({ref:t},c),{},{components:n})):l.createElement(v,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42901:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var l=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],a={id:"isolation-levels",title:"Isolation levels",sidebar_label:"Isolation levels"},u=void 0,s={unversionedId:"reference-guide/isolation-levels",id:"reference-guide/isolation-levels",title:"Isolation levels",description:"Supported isolation levels",source:"@site/docs/reference-guide/isolation-levels.md",sourceDirName:"reference-guide",slug:"/reference-guide/isolation-levels",permalink:"/docs/memgraph/next/reference-guide/isolation-levels",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/isolation-levels.md",tags:[],version:"current",frontMatter:{id:"isolation-levels",title:"Isolation levels",sidebar_label:"Isolation levels"},sidebar:"memgraph",previous:{title:"Indexing",permalink:"/docs/memgraph/next/reference-guide/indexing"},next:{title:"Metadata",permalink:"/docs/memgraph/next/reference-guide/metadata"}},c=[{value:"Supported isolation levels",id:"supported-isolation-levels",children:[],level:2},{value:"Setting the isolation level",id:"setting-the-isolation-level",children:[{value:"Configuration",id:"configuration",children:[],level:3},{value:"Query",id:"query",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"supported-isolation-levels"},"Supported isolation levels"),(0,i.kt)("p",null,"Memgraph currently supports three isolation levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SNAPSHOT ISOLATION (default)"),(0,i.kt)("li",{parentName:"ul"},"READ COMMITTED"),(0,i.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")),(0,i.kt)("h2",{id:"setting-the-isolation-level"},"Setting the isolation level"),(0,i.kt)("p",null,"The default isolation level, ",(0,i.kt)("inlineCode",{parentName:"p"},"SNAPSHOT ISOLATION"),", can be changed using the config\nor running a query."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--isolation-level")," configuration flag to any of the supported values will change the\ninitial global isolation level for every query being run on that instance."),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)("p",null,"The initially set isolation level can be changed during runtime using a query\nof the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<scope>")," defines the scope to which the isolation level change should apply.\nIt can take any of the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GLOBAL - apply the new isolation level globally"),(0,i.kt)("li",{parentName:"ul"},"SESSION - apply the new isolation level only for the current session"),(0,i.kt)("li",{parentName:"ul"},"NEXT - apply the new isolation level only for the next transaction in the current session")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<isolation_level")," defines the isolation level which we want to use.\nIt can take any of the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SNAPSHOT ISOLATION"),(0,i.kt)("li",{parentName:"ul"},"READ COMMITTED"),(0,i.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")))}d.isMDXComponent=!0}}]);