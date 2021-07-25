(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38045],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91552:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],c={id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},l=void 0,s={unversionedId:"connect-to-memgraph/methods/mgconsole",id:"version-1.6.0/connect-to-memgraph/methods/mgconsole",isDocsHomePage:!1,title:"Querying with mgconsole",description:"The easiest way to execute openCypher queries against Memgraph is by using",source:"@site/memgraph_versioned_docs/version-1.6.0/connect-to-memgraph/methods/mgconsole.md",sourceDirName:"connect-to-memgraph/methods",slug:"/connect-to-memgraph/methods/mgconsole",permalink:"/memgraph/1.6.0/connect-to-memgraph/methods/mgconsole",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/connect-to-memgraph/methods/mgconsole.md",version:"1.6.0",frontMatter:{id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},sidebar:"version-1.6.0/memgraph",previous:{title:"Connection methods",permalink:"/memgraph/1.6.0/connection-methods"},next:{title:"Drivers",permalink:"/memgraph/1.6.0/connect-to-memgraph/methods/drivers"}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The easiest way to execute openCypher queries against Memgraph is by using\nMemgraph's command-line tool, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole"),", which is installed\ntogether with Memgraph."),(0,a.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the client\nusing the following command (remember to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," with valid IP of\nthe container - see ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.6.0/how-to-work-with-docker#docker-container-ip-address"},"Docker Note"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False\n")),(0,a.kt)("p",null,"Otherwise, you can connect to the running Memgraph instance by\nissuing the following shell command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mgconsole --use-ssl=False\n")),(0,a.kt)("p",null,"After the client has started it should present a command prompt similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nConnected to 'memgraph://127.0.0.1:7687'\nmemgraph>\n")),(0,a.kt)("p",null,"At this point, it is possible to execute openCypher queries on Memgraph. Each\nquery needs to end with the ",(0,a.kt)("inlineCode",{parentName:"p"},";")," (",(0,a.kt)("em",{parentName:"p"},"semicolon"),") character. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,a.kt)("p",null,'The above will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,a.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,a.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")))}u.isMDXComponent=!0}}]);