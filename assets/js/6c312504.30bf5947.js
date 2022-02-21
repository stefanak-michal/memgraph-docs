"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64556],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"nodejs",title:"Node.js quick start",sidebar_label:"Node.js"},l=void 0,p={unversionedId:"connect-to-memgraph/drivers/nodejs",id:"version-2.1.1/connect-to-memgraph/drivers/nodejs",title:"Node.js quick start",description:"At the end of this guide, you will have created a simple Node.js **`Hello,",source:"@site/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/nodejs.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/nodejs",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/nodejs",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/nodejs.md",tags:[],version:"2.1.1",frontMatter:{id:"nodejs",title:"Node.js quick start",sidebar_label:"Node.js"},sidebar:"memgraph",previous:{title:"Go",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/go"},next:{title:"JavaScript",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/javascript"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Basic Setup",id:"basic-setup",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple Node.js ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/installation"},"Installation guide"),"."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,a.kt)("li",{parentName:"ul"},"The newest version of ",(0,a.kt)("strong",{parentName:"li"},"Node.js")," installed. Instructions on how to setup\nNode. JS can be found on the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"official\nwebsite"),".")),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"We'll be using ",(0,a.kt)("strong",{parentName:"p"},"Express.js")," to demonstrate how to connect to a running\nMemgraph instance. Express.js is a web application framework that enables us to\ncreate complete Node.js applications. If you don't won't to use it, the steps\nmight be slightly different, but the code is either the same or very\nsimilar."),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your application, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"/MyApp")," and\nposition yourself in it.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file with the\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm init\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Install ",(0,a.kt)("strong",{parentName:"p"},"Express.js")," and the ",(0,a.kt)("strong",{parentName:"p"},"Bolt driver")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/MyApp")," directory\nwhile adding them to the dependencies list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install express --save\nnpm install neo4j-driver --save\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," To make the actual program, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"program.js")," file and add the\nfollowing code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express')\nconst app = express()\nconst port = 3000\nvar neo4j = require('neo4j-driver')\n\napp.get('/', async (req, res) => {\n    const driver = neo4j.driver(\"bolt://localhost:7687\")\n    const session = driver.session()\n\n    try {\n        const result = await session.writeTransaction(tx =>\n            tx.run(\n                'CREATE (a:Greeting) SET a.message = $message RETURN \"Node \" + id(a) + \": \" + a.message', {\n                    message: 'Hello, World!'\n                }\n            )\n        )\n\n        const singleRecord = result.records[0]\n        const greeting = singleRecord.get(0)\n\n        console.log(greeting)\n    } finally {\n        await session.close()\n    }\n\n    // on application exit:\n    await driver.close()\n})\n\napp.listen(port, () => {\n    console.log(`Example app listening at http://localhost:${port}`)\n})\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," Run the application with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node .\\program.js\n")),(0,a.kt)("p",null,"You should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}u.isMDXComponent=!0}}]);