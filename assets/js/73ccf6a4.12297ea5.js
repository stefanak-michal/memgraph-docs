(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(329)),i={id:"php",title:"PHP quick start",sidebar_label:"PHP"},p={unversionedId:"getting-started/connecting-applications/php",id:"getting-started/connecting-applications/php",isDocsHomePage:!1,title:"PHP quick start",description:"At the end of this guide, you will have created a simple PHP Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/docs/getting-started/connecting-applications/php.md",slug:"/getting-started/connecting-applications/php",permalink:"/memgraph/next/getting-started/connecting-applications/php",editUrl:"https://github.com/memgraph/docs/tree/master/docs/getting-started/connecting-applications/php.md",version:"current",sidebar_label:"PHP",sidebar:"memgraph",previous:{title:"JavaScript quick start",permalink:"/memgraph/next/getting-started/connecting-applications/javascript"},next:{title:"Tutorials overview",permalink:"/memgraph/next/tutorials/tutorials"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic Setup",id:"basic-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At the end of this guide, you will have created a simple PHP ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"To follow this guide, you will need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look at the ",Object(o.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/installation"},"Installation guide"),"."),Object(o.b)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Composer"),", a tool for dependency management in PHP. Instructions on how to install Composer can be found ",Object(o.b)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"here"),".")),Object(o.b)("h2",{id:"basic-setup"},"Basic Setup"),Object(o.b)("p",null,"We'll be using a very simple ",Object(o.b)("strong",{parentName:"p"},"PHP script")," in combination with ",Object(o.b)("strong",{parentName:"p"},"Composer")," to demonstrate how to connect to a running Memgraph instance."),Object(o.b)("p",null,"Let's jump in and connect a simple program to Memgraph."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.")," Create a new directory for your application, for example ",Object(o.b)("inlineCode",{parentName:"p"},"/MyApp")," and position yourself in it.",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"2.")," Create a ",Object(o.b)("inlineCode",{parentName:"p"},"index.php")," file and add the following code to it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nrequire_once __DIR__ . '/../vendor/autoload.php';\n\n$client = Laudis\\Neo4j\\ClientBuilder::create()\n    ->addBoltConnection('default', 'bolt://:@localhost')\n    ->setDefaultConnection('default')\n    ->build();\n\nforeach ($client->run(\n    'CREATE (a:Greeting) SET a.message = $message RETURN id(a) AS nodeId, a.message AS message',\n    ['message' => 'Hello, World!'],\n) as $item) {\n    echo 'Node ' . $item->get('nodeId') . ' says: ' . $item->get('message');\n}\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Memgraph uses the ",Object(o.b)("strong",{parentName:"p"},"Bolt protocol"),", which means that HTTP connections are not supported.\t "))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.")," Create a ",Object(o.b)("inlineCode",{parentName:"p"},"composer.json")," file with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "memgraph/myapp",\n    "description": "This is a simple Hello World app.",\n    "require": {\n        "php": ">=7.4",\n        "laudis/neo4j-php-client": "^1.3"\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"4.")," Execute the next command to install the needed dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"composer install\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"5.")," Start the application with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"php -S localhost:4000\n")),Object(o.b)("p",null,"You should see an output similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/tutorials/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"Visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}s.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,p(p({ref:t},l),{},{components:n})):r.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);