"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84683],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(l,".").concat(m)]||s[m]||p[m]||u;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<u;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},Highlight:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),o=n(55064),i=n(58215),l=["components"],d={id:"uuid-generator",title:"uuid_generator",sidebar_label:"uuid_generator"},c=void 0,p={unversionedId:"query-modules/cpp/uuid-generator",id:"query-modules/cpp/uuid-generator",isDocsHomePage:!1,title:"uuid_generator",description:"<span",source:"@site/mage/query-modules/cpp/uuid_generator.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/uuid-generator",permalink:"/mage/query-modules/cpp/uuid-generator",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/uuid_generator.md",version:"current",frontMatter:{id:"uuid-generator",title:"uuid_generator",sidebar_label:"uuid_generator"},sidebar:"mage",previous:{title:"union_find",permalink:"/mage/query-modules/python/union-find"},next:{title:"vrp",permalink:"/mage/query-modules/python/vrp"}},s=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>get()</code>",id:"get",children:[]}]},{value:"Example",id:"example",children:[]}],m=function(e){var t=e.children,n=e.color;return(0,u.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:s,Highlight:m};function f(e){var t=e.components,d=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/uuid_module/uuid_module.cpp"},(0,u.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-uuid-generator-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,u.kt)("h2",{id:"abstract"},"Abstract"),(0,u.kt)("p",null,"This module is used to generate string UUIDs which can be stored as properties\non nodes or edges. The underlying implementation makes use of the ",(0,u.kt)("inlineCode",{parentName:"p"},"uuid-dev"),"\nlibrary. When using the ",(0,u.kt)("inlineCode",{parentName:"p"},"uuid")," module on Linux systems, the library can be\ninstalled by running ",(0,u.kt)("inlineCode",{parentName:"p"},"sudo apt-get install uuid-dev"),"."),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Trait"),(0,u.kt)("th",{parentName:"tr",align:null},"Value"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("strong",{parentName:"td"},"Module type")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,u.kt)("strong",{parentName:"td"},"module")))),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("strong",{parentName:"td"},"Implementation")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,u.kt)("strong",{parentName:"td"},"C++")))),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("strong",{parentName:"td"},"Parallelism")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,u.kt)("strong",{parentName:"td"},"sequential")))))),(0,u.kt)("h2",{id:"procedures"},"Procedures"),(0,u.kt)("h3",{id:"get"},(0,u.kt)("inlineCode",{parentName:"h3"},"get()")),(0,u.kt)("h4",{id:"output"},"Output:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"uuid")," \u27a1 Returns a UUID string.")),(0,u.kt)("h4",{id:"usage"},"Usage:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nCALL uuid_generator.get() YIELD uuid\nSET n.uuid = uuid\nRETURN n.uuid AS node_uuid;\n")),(0,u.kt)("h2",{id:"example"},"Example"),(0,u.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,u.kt)("img",{src:n(55390).Z,height:"300px"})),(0,u.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\n"))),(0,u.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nCALL uuid_generator.get() YIELD uuid\nSET n.uuid = uuid\nRETURN n.uuid AS node_uuid;\n"))),(0,u.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------+\n| node_uuid                              |\n+----------------------------------------+\n| "ef4722b2-628b-4f93-8667-fc91134ed980" |\n| "601faade-8c61-4dc3-a68a-693fed4ad40c" |\n| "dc4283b8-90d6-402e-8fc0-f37f9959b593" |\n+----------------------------------------+\n')))))}f.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var u=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var d=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,s=e.groupId,m=e.className,g=u(),f=g.tabGroupChoices,b=g.setTabGroupChoices,h=(0,r.useState)(a),y=h[0],v=h[1],k=r.Children.toArray(e.children),N=[];if(null!=s){var E=f[s];null!=E&&E!==y&&p.some((function(e){return e.value===E}))&&v(E)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;v(r),null!=s&&(b(s,r),setTimeout((function(){var e,n,r,a,u,o,i,d;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,u=e.right,o=window,i=o.innerHeight,d=o.innerWidth,n>=0&&u<=d&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case d:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},55390:function(e,t,n){t.Z=n.p+"assets/images/uuid-generator-1-a2112054c5efaefe8ff3cf2b2a7d136e.png"}}]);