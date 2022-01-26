"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44462],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58590:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={id:"php",title:"PHP quick start",sidebar_label:"PHP"},l=void 0,s={unversionedId:"connect-to-memgraph/drivers/php",id:"version-2.1.1/connect-to-memgraph/drivers/php",title:"PHP quick start",description:"At the end of this guide, you will have created a simple PHP Hello, World!",source:"@site/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/php.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/php",permalink:"/docs/memgraph/connect-to-memgraph/drivers/php",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/php.md",tags:[],version:"2.1.1",frontMatter:{id:"php",title:"PHP quick start",sidebar_label:"PHP"},sidebar:"memgraph",previous:{title:"JavaScript",permalink:"/docs/memgraph/connect-to-memgraph/drivers/javascript"},next:{title:"Import data overview",permalink:"/docs/memgraph/import-data"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Basic Setup",id:"basic-setup",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple PHP ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello, World!")),"\nprogram that connects to the Memgraph database and executes simple queries."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Installation guide"),"."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Composer"),", a tool for dependency management in PHP. Instructions on how to\ninstall Composer can be found ",(0,a.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"here"),".")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We recommend using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4j-php/Bolt"},"Bolt driver"))," for\nPHP."))),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"We'll be using a very simple ",(0,a.kt)("strong",{parentName:"p"},"PHP script")," in combination with ",(0,a.kt)("strong",{parentName:"p"},"Composer")," to\ndemonstrate how to connect to a running Memgraph instance."),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your application, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"/MyApp")," and\nposition yourself in it.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," file and add the\nfollowing code to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nrequire_once __DIR__ . '/../vendor/autoload.php';\n\n// Create new Bolt instance\n$bolt = new \\Bolt\\Bolt(new \\Bolt\\connection\\StreamSocket());\n// Set Bolt protocol version if needed\n$bolt->setProtocolVersions(4.0);\n// Connect to database\n$bolt->init('MyClient/1.0', '', '');\n\n// Execute query\n$res = $bolt->run(\n    'CREATE (a:Greeting) SET a.message = $message RETURN id(a) AS nodeId, a.message AS message',\n    ['message' => 'Hello, World!']\n);\n// Pull records from last query\n$rows = $bolt->pull();\n\necho 'Node ' . $rows[0][0] . ' says: ' . $rows[0][1];\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"composer.json")," file with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "memgraph/myapp",\n    "description": "This is a simple Hello World app.",\n    "require": {\n        "php": ">=7.1",\n        "stefanak-michal/bolt": "^2.1"\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Execute the next command to install the needed dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"composer install\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," Start the application with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php -S localhost:4000\n")),(0,a.kt)("p",null,"You should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}u.isMDXComponent=!0}}]);