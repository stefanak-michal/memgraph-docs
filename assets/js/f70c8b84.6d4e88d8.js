"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18679],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(g,i(i({ref:r},s),{},{components:t})):n.createElement(g,i({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9506:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"cypherl",title:"Importing Cypher queries",sidebar_label:"Importing Cypher queries"},l=void 0,c={unversionedId:"import-data/cypherl",id:"version-1.6.0/import-data/cypherl",isDocsHomePage:!1,title:"Importing Cypher queries",description:"When Memgraph is running, cypher queries are imported by running mgconsole in",source:"@site/memgraph_versioned_docs/version-1.6.0/import-data/cypherl.md",sourceDirName:"import-data",slug:"/import-data/cypherl",permalink:"/memgraph/1.6.0/import-data/cypherl",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/import-data/cypherl.md",tags:[],version:"1.6.0",frontMatter:{id:"cypherl",title:"Importing Cypher queries",sidebar_label:"Importing Cypher queries"},sidebar:"version-1.6.0/memgraph",previous:{title:"LOAD CSV Cypher clause",permalink:"/memgraph/1.6.0/import-data/load-csv-clause"},next:{title:"Overview",permalink:"/memgraph/1.6.0/tutorials"}},s=[],u={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When Memgraph is running, cypher queries are imported by running ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.6.0/connect-to-memgraph/methods/mgconsole"},"mgconsole")," in\nnon-interactive mode. The user can import queries saved in e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.txt"),"\nby issuing the following shell command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole --use-ssl=False < queries.txt\n")),(0,a.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the client using\nthe following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mgconsole memgraph --host HOST --use-ssl=False < queries.txt\n")),(0,a.kt)("p",null,"Remember to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," with valid IP of the container (see\n",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.6.0/how-to-work-with-docker#docker-container-ip-address"},"Note for Docker users"),")."),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole --help\n")))}m.isMDXComponent=!0}}]);