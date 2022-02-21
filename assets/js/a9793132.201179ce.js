"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68401],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(67294),o=n(72389),l=n(29548),i=n(86010),s="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,m=e.defaultValue,p=e.values,d=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),N=y.tabGroupChoices,b=y.setTabGroupChoices,w=(0,r.useState)(k),x=w[0],T=w[1],O=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=N[d];null!=E&&E!==x&&f.some((function(e){return e.value===E}))&&T(E)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==x&&(C(t),T(a),null!=d&&b(d,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},96752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(9877),i=n(58215),s=["components"],c={id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},u=void 0,m={unversionedId:"connect-to-memgraph/mgconsole",id:"version-2.1.1/connect-to-memgraph/mgconsole",title:"Querying with mgconsole",description:"The easiest way to execute Cypher queries against Memgraph is by using",source:"@site/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/mgconsole.md",sourceDirName:"connect-to-memgraph",slug:"/connect-to-memgraph/mgconsole",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/mgconsole",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/mgconsole.md",tags:[],version:"2.1.1",frontMatter:{id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},sidebar:"memgraph",previous:{title:"Connection methods overview",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph"},next:{title:"Drivers overview",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers"}},p=[{value:"1. Install mgconsole",id:"1-install-mgconsole",children:[],level:2},{value:"2. Execute a Cypher query",id:"execute-cypher-queries",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The easiest way to execute Cypher queries against Memgraph is by using\nMemgraph's command-line tool, ",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),"."),(0,o.kt)("h2",{id:"1-install-mgconsole"},"1. Install mgconsole"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you installed ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform")," with the Docker image\n(",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform"),"), mgconsole will start automatically when you run\nthe container. Skip the installation steps and continue with ",(0,o.kt)("a",{parentName:"p",href:"#execute-cypher-queries"},"executing\nCypher queries"),"."))),(0,o.kt)("p",null,"If you want to install mgconsole to query a running Memgraph database\ninstance, follow the installation steps."),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," If you installed Memgraph DB using Docker, you can run the client from your\nDocker image. First, you need to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID")," of your Memgraph\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"docker ps\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Once you know the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),", find the IP address of the container by\nexecuting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Now, you can start mgconsole by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph --host CONTAINER_IP\n"))),(0,o.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," From PowerShell, start mgconsole with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,o.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,o.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," From the terminal, provide execution permission to the current user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"chmod u+x ./mgconsole\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Start mgconsole with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,o.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We will soon release a downloadable Debian package, so you don't have to install\nmgconsole from source."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Follow the instructions on how to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole#building-and-installing"},"build and\ninstall"),"\nmgconsole from source."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Start mgconsole with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,o.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n")))),(0,o.kt)("h2",{id:"execute-cypher-queries"},"2. Execute a Cypher query"),(0,o.kt)("p",null,"After the client has started, it should present a command prompt similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,o.kt)("p",null,"At this point, it is possible to execute Cypher queries against a running\nMemgraph database instance. Each query needs to end with the ",(0,o.kt)("inlineCode",{parentName:"p"},";")," (",(0,o.kt)("em",{parentName:"p"},"semicolon"),")\ncharacter. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,o.kt)("p",null,'The above query will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,o.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,o.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"If you want to learn more about graph databases and Cypher queries, visit\n",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and go through the\nguided lessons. All the datasets and most of the queries used in the guided\nlessons can also be explored in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/tutorials"},"Tutorials")," section,\nand knowledge about Cypher is gathered in the ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,o.kt)("p",null,"If you are all good to go on your own - ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/import-data"},"import your\ndata"),"!"))}h.isMDXComponent=!0}}]);