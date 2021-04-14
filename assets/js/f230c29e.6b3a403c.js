(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{315:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(329)),c={id:"connecting-applications",title:"Building applications",sidebar_label:"Building applications",slug:"/getting-started/connecting-applications"},o={unversionedId:"getting-started/connecting-applications/connecting-applications",id:"getting-started/connecting-applications/connecting-applications",isDocsHomePage:!1,title:"Building applications",description:"Quick start guides",source:"@site/docs/getting-started/connecting-applications/connecting-applications.md",slug:"/getting-started/connecting-applications",permalink:"/memgraph/next/getting-started/connecting-applications",editUrl:"https://github.com/memgraph/docs/tree/master/docs/getting-started/connecting-applications/connecting-applications.md",version:"current",sidebar_label:"Building applications",sidebar:"memgraph",previous:{title:"Querying the database",permalink:"/memgraph/next/getting-started/querying/querying"},next:{title:"Python quick start",permalink:"/memgraph/next/getting-started/connecting-applications/python"}},p=[{value:"Quick start guides",id:"quick-start-guides",children:[]},{value:"Supported Languages",id:"supported-languages",children:[]},{value:"Secure Sockets Layer (SSL)",id:"secure-sockets-layer",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"quick-start-guides"},"Quick start guides"),Object(i.b)("p",null,"The following guides describe how to create a simple ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications/python"},"Python")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications/rust"},"Rust")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications/c-sharp"},"c#")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications/java"},"Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications/go"},"Go")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications/javascript"},"JavaScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications/php"},"PHP"))),Object(i.b)("h2",{id:"supported-languages"},"Supported Languages"),Object(i.b)("p",null,"If users wish to query Memgraph programmatically, they can do so using the\n",Object(i.b)("a",{parentName:"p",href:"https://7687.org/"},"Bolt protocol"),". Bolt was designed for efficient\ncommunication with graph databases and ",Object(i.b)("strong",{parentName:"p"},"Memgraph supports versions 1 and 4"),"\nof the protocol. Bolt protocol drivers for some popular programming languages are listed below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-dotnet-driver"},"C#")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/memgraph/mgclient"},"C/C++")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-go-driver"},"Go")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/zmactep/hasbolt"},"Haskell")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-java-driver"},"Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-javascript-driver"},"JavaScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neo4j/neo4j-javascript-driver"},"Node.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neo4j-php/neo4j-php-client"},"PHP")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/memgraph/pymgclient"},"Python")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/neo4jrb/neo4j"},"Ruby")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/memgraph/rsmgclient"},"Rust"))),Object(i.b)("h2",{id:"secure-sockets-layer"},"Secure Sockets Layer (SSL)"),Object(i.b)("p",null,"Secure connections are supported and disabled by default. The server initially\nships with a self-signed testing certificate. The certificate can be replaced\nby editing the following parameters in ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--bolt-cert-file=/path/to/ssl/certificate.pem\n--bolt-key-file=/path/to/ssl/privatekey.pem\n")),Object(i.b)("p",null,"To disable SSL support and use insecure connections to the database you should\nset both parameters (",Object(i.b)("inlineCode",{parentName:"p"},"--bolt-cert-file")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--bolt-key-file"),") to empty values."))}s.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,g=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(g,o(o({ref:t},l),{},{components:n})):r.a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);