"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47162],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(a),g=r,d=s["".concat(p,".").concat(g)]||s[g]||c[g]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},99390:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/getting-started"},p=void 0,u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"* Download and install",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/memgraph/next/getting-started",editUrl:"https://github.com/memgraph/docs/tree/master/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/getting-started"},sidebar:"memgraph",next:{title:"Install Memgraph overview",permalink:"/memgraph/next/installation"}},m=[{value:"Online playground (sandbox)",id:"online-playground-sandbox",children:[]},{value:"Step by step guide",id:"step-by-step-guide",children:[]},{value:"Practical tutorial",id:"practical-tutorial",children:[]},{value:"Connect to Memgraph Cloud",id:"connect-to-memgraph-cloud",children:[]},{value:"Run an example streaming application",id:"run-an-example-streaming-application",children:[]},{value:"Video courses",id:"video-courses",children:[]},{value:"Tutorial for your programming language",id:"tutorial-for-your-programming-language",children:[]}],c={toc:m};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/installation"},"Download and install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/import-data"},"Import data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/database-functionalities"},"Learn concepts step by step")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/tutorials"},"Practical tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/changelog"},"Stay updated"))),(0,i.kt)("h3",{id:"online-playground-sandbox"},"Online playground (sandbox)"),(0,i.kt)("p",null,"If you're interested in trying out Memgraph from the comfort of your browser, you can do so on ",(0,i.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," or by visiting the ",(0,i.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,i.kt)("h3",{id:"step-by-step-guide"},"Step by step guide"),(0,i.kt)("p",null,"If you enjoy learning concepts in small chunks before applying them in practice, our ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/tutorials"},"step by step guide")," is the best place to start."),(0,i.kt)("h3",{id:"practical-tutorial"},"Practical tutorial"),(0,i.kt)("p",null,"Learning by doing is our mantra. In this ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/tutorials/analyzing-ted-talks"},"tutorial"),", you'll explore a simple TED-talks dataset from scratch. The tips you'll learn in the tutorial will help you build any graph application."),(0,i.kt)("h3",{id:"connect-to-memgraph-cloud"},"Connect to Memgraph Cloud"),(0,i.kt)("p",null,"Learn how to ",(0,i.kt)("a",{parentName:"p",href:"/connect-to-memgraph"},"connect your application")," to the Memgraph Cloud. Let us manage the configuration and guarantee it's set up correctly."),(0,i.kt)("h3",{id:"run-an-example-streaming-application"},"Run an example streaming application"),(0,i.kt)("p",null,"We've built an example streaming application to get you started quickly. Pull the code from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub repository")," and get started."),(0,i.kt)("h3",{id:"video-courses"},"Video courses"),(0,i.kt)("p",null,"Some people enjoy learning by watching audio-visual content. You can find the best materials related to graphs and graphs analytics in our ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCZ3HOJvHGxtQ_JHxOselBYg/playlists"},"list of recommended content"),", most of which is free."),(0,i.kt)("h3",{id:"tutorial-for-your-programming-language"},"Tutorial for your programming language"),(0,i.kt)("p",null,"Build an application with Memgraph from our list of supported languages and frameworks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/building-applications/python"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/building-applications/rust"},"Rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/building-applications/c-sharp"},"C#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/building-applications/java"},"Java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/building-applications/go"},"Go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/building-applications/javascript"},"JavaScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/building-applications/php"},"PHP"))))}s.isMDXComponent=!0}}]);