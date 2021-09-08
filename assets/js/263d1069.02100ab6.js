"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39536],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=l,v=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18404:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=n(87462),l=n(63366),i=(n(67294),n(3905)),o=["components"],a={id:"isolation-levels",title:"Isolation levels",sidebar_label:"Isolation levels"},s=void 0,u={unversionedId:"reference-guide/isolation-levels",id:"version-1.6.0/reference-guide/isolation-levels",isDocsHomePage:!1,title:"Isolation levels",description:"Supported isolation levels",source:"@site/memgraph_versioned_docs/version-1.6.0/reference-guide/isolation-levels.md",sourceDirName:"reference-guide",slug:"/reference-guide/isolation-levels",permalink:"/memgraph/1.6.0/reference-guide/isolation-levels",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/reference-guide/isolation-levels.md",tags:[],version:"1.6.0",frontMatter:{id:"isolation-levels",title:"Isolation levels",sidebar_label:"Isolation levels"},sidebar:"version-1.6.0/memgraph",previous:{title:"Indexing",permalink:"/memgraph/1.6.0/reference-guide/indexing"},next:{title:"Overview",permalink:"/memgraph/1.6.0/reference-guide/query-modules"}},c=[{value:"Supported isolation levels",id:"supported-isolation-levels",children:[]},{value:"Setting the isolation level",id:"setting-the-isolation-level",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Query",id:"query",children:[]}]}],p={toc:c};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"supported-isolation-levels"},"Supported isolation levels"),(0,i.kt)("p",null,"Memgraph currently supports three isolation levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SNAPSHOT ISOLATION (default)"),(0,i.kt)("li",{parentName:"ul"},"READ COMMITTED"),(0,i.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")),(0,i.kt)("h2",{id:"setting-the-isolation-level"},"Setting the isolation level"),(0,i.kt)("p",null,"The default isolation level, ",(0,i.kt)("inlineCode",{parentName:"p"},"SNAPSHOT ISOLATION"),", can be changed using the config\nor running a query."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--isolation-level")," configuration flag to any of the supported values will change the\ninitial global isolation level for every query being run on that instance."),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)("p",null,"The initially set isolation level can be changed during runtime using a query\nof the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<scope>")," defines the scope to which the isolation level change should apply.\nIt can take any of the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GLOBAL - apply the new isolation level globally"),(0,i.kt)("li",{parentName:"ul"},"SESSION - apply the new isolation level only for the current session"),(0,i.kt)("li",{parentName:"ul"},"NEXT - apply the new isolation level only for the next transaction in the current session")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<isolation_level")," defines the isolation level which we want to use.\nIt can take any of the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SNAPSHOT ISOLATION"),(0,i.kt)("li",{parentName:"ul"},"READ COMMITTED"),(0,i.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")))}f.isMDXComponent=!0}}]);