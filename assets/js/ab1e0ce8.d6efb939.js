(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[405],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=l(n),m=r,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},30001:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return g}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"connecting-applications",title:"Building applications",sidebar_label:"Building applications",slug:"/getting-started/connecting-applications"},c=void 0,l={unversionedId:"getting-started/connecting-applications/connecting-applications",id:"version-1.5.0/getting-started/connecting-applications/connecting-applications",isDocsHomePage:!1,title:"Building applications",description:"Quick start guides",source:"@site/memgraph_versioned_docs/version-1.5.0/getting-started/connecting-applications/connecting-applications.md",sourceDirName:"getting-started/connecting-applications",slug:"/getting-started/connecting-applications",permalink:"/memgraph/getting-started/connecting-applications",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/getting-started/connecting-applications/connecting-applications.md",version:"1.5.0",frontMatter:{id:"connecting-applications",title:"Building applications",sidebar_label:"Building applications",slug:"/getting-started/connecting-applications"},sidebar:"version-1.5.0/memgraph",previous:{title:"Querying the database",permalink:"/memgraph/getting-started/querying"},next:{title:"Python",permalink:"/memgraph/getting-started/connecting-applications/python"}},s=[{value:"Quick start guides",id:"quick-start-guides",children:[]},{value:"Supported Languages",id:"supported-languages",children:[]},{value:"Secure Sockets Layer (SSL)",id:"secure-sockets-layer",children:[]}],u={toc:s};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"quick-start-guides"},"Quick start guides"),(0,i.kt)("p",null,"The following guides describe how to create a simple ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/getting-started/connecting-applications/python"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/getting-started/connecting-applications/rust"},"Rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/getting-started/connecting-applications/c-sharp"},"c#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/getting-started/connecting-applications/java"},"Java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/getting-started/connecting-applications/go"},"Go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/getting-started/connecting-applications/javascript"},"JavaScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/getting-started/connecting-applications/php"},"PHP"))),(0,i.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,i.kt)("p",null,"If users wish to query Memgraph programmatically, they can do so using the\n",(0,i.kt)("a",{parentName:"p",href:"https://7687.org/"},"Bolt protocol"),". Bolt was designed for efficient\ncommunication with graph databases and ",(0,i.kt)("strong",{parentName:"p"},"Memgraph supports versions 1 and 4"),"\nof the protocol. Bolt protocol drivers for some popular programming languages are listed below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-dotnet-driver"},"C#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgclient"},"C/C++")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-go-driver"},"Go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zmactep/hasbolt"},"Haskell")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-java-driver"},"Java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-javascript-driver"},"JavaScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-javascript-driver"},"Node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo4j-php/Bolt"},"PHP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/memgraph/pymgclient"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo4jrb/neo4j"},"Ruby")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/memgraph/rsmgclient"},"Rust"))),(0,i.kt)("h2",{id:"secure-sockets-layer"},"Secure Sockets Layer (SSL)"),(0,i.kt)("p",null,"Secure connections are supported and disabled by default. The server initially\nships with a self-signed testing certificate. The certificate can be replaced\nby editing the following parameters in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--bolt-cert-file=/path/to/ssl/certificate.pem\n--bolt-key-file=/path/to/ssl/privatekey.pem\n")),(0,i.kt)("p",null,"To disable SSL support and use insecure connections to the database you should\nset both parameters (",(0,i.kt)("inlineCode",{parentName:"p"},"--bolt-cert-file")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--bolt-key-file"),") to empty values."))}g.isMDXComponent=!0}}]);