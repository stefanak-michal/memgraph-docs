"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57385],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91696:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={id:"python",title:"Python quick start",sidebar_label:"Python"},s=void 0,l={unversionedId:"connect-to-memgraph/methods/building-applications/python",id:"version-2.0.0/connect-to-memgraph/methods/building-applications/python",isDocsHomePage:!1,title:"Python quick start",description:"At the end of this guide, you will have created a simple Python Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-2.0.0/connect-to-memgraph/methods/building-applications/python.md",sourceDirName:"connect-to-memgraph/methods/building-applications",slug:"/connect-to-memgraph/methods/building-applications/python",permalink:"/docs/memgraph/2.0.0/connect-to-memgraph/methods/building-applications/python",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/connect-to-memgraph/methods/building-applications/python.md",tags:[],version:"2.0.0",frontMatter:{id:"python",title:"Python quick start",sidebar_label:"Python"},sidebar:"version-2.0.0/memgraph",previous:{title:"Drivers",permalink:"/docs/memgraph/2.0.0/connect-to-memgraph/methods/drivers"},next:{title:"Rust",permalink:"/docs/memgraph/2.0.0/connect-to-memgraph/methods/building-applications/rust"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic setup",id:"basic-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple Python ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look at the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.0/installation"},"Installation guide"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/memgraph/pymgclient"},(0,a.kt)("strong",{parentName:"a"},"pymgclient driver")),". A Memgraph database adapter for the Python programming language."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model.")),(0,a.kt)("h2",{id:"basic-setup"},"Basic setup"),(0,a.kt)("p",null,"We'll be using a ",(0,a.kt)("strong",{parentName:"p"},"Python program")," to demonstrate how to connect to a running Memgraph database instance.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your program, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/memgraph_python")," and position yourself in it.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"2.")," Create a new Python script and name it ",(0,a.kt)("inlineCode",{parentName:"p"},"program.py"),". Add the following code to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import mgclient\n\n# Make a connection to the database\nconnection = mgclient.connect(host=\'127.0.0.1\', port=7687)\n\n# Create a cursor for query execution\ncursor = connection.cursor()\n\n# Delete all nodes and relationships\nquery = "MATCH (n) DETACH DELETE n"\n\n# Execute the query\ncursor.execute(query)\n\n# Create a node with the label FirstNode and message property with the value "Hello, World!"\nquery = """CREATE (n:FirstNode)\n           SET n.message = \'{message}\'\n           RETURN \'Node \'  + id(n) + \': \' + n.message""".format(message="Hello, World!")\n\n# Execute the query\ncursor.execute(query)\n\n# Fetch one row of query results\nrow = cursor.fetchone()\n\n# Print the first member in row\nprint(row[0])\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note for Docker users")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If the program fails to connect to a Memgraph instance that was started with Docker, you may need to use a different IP address (not the default ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),") to connect to the instance."),(0,a.kt)("p",{parentName:"div"},"You can find the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CONTAINER ID"))," with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," and use it in the following command to retrieve the address:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER ID\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Now, you can run the application with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python ./program.py\n")),(0,a.kt)("p",null,"You should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."))}u.isMDXComponent=!0}}]);