"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12358],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,b=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return n?o.createElement(b,i(i({ref:t},u),{},{components:n})):o.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},83736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},Highlight:function(){return m},default:function(){return N}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(55064),d=n(58215),l=["components"],c={id:"biconnected-components",title:"biconnected_components",sidebar_label:"biconnected_components"},u=void 0,p={unversionedId:"query-modules/cpp/biconnected-components",id:"query-modules/cpp/biconnected-components",isDocsHomePage:!1,title:"biconnected_components",description:"<span",source:"@site/mage/query-modules/cpp/biconnected_components.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/biconnected-components",permalink:"/mage/query-modules/cpp/biconnected-components",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/biconnected_components.md",tags:[],version:"current",frontMatter:{id:"biconnected-components",title:"biconnected_components",sidebar_label:"biconnected_components"},sidebar:"mage",previous:{title:"betweenness_centrality",permalink:"/mage/query-modules/cpp/betweenness-centrality"},next:{title:"bipartite_matching",permalink:"/mage/query-modules/cpp/bipartite-matching"}},s=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>get()</code>",id:"get",children:[]}]},{value:"Example",id:"example",children:[]}],m=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:s,Highlight:m};function N(e){var t=e.components,c=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},b,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/biconnected_components_module/biconnected_components_module.cpp"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-biconnected_components-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"Finding biconnected components means finding a maximal biconnected subgraph. Subgraph is biconnected if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is possible to go from each node to another within a biconnected subgraph"),(0,a.kt)("li",{parentName:"ul"},"First scenario remains true even after removing any vertex in the subgraph")),(0,a.kt)("p",null,"The algorithm works by finding articulation points, and then traversing from these articulation points toward other nodes, which all together form one biconnected component."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trait"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Module type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"algorithm")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Implementation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"C++")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Graph direction")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"undirected")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Edge weights")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"unweighted")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Parallelism")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"sequential")))))),(0,a.kt)("h2",{id:"procedures"},"Procedures"),(0,a.kt)("h3",{id:"get"},(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("h4",{id:"output"},"Output:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bcc_id")," \u27a1 Biconnected component identifier. There is no order of nodes within one biconnected component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_from")," \u27a1 First node of an edge contained in biconnected component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_to")," \u27a1 Second node of an edge contained in biconnected component")),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL biconnected_components.get()\nYIELD bcc_id, node_from, node_to;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,a.kt)(d.Z,{value:"visualization",mdxType:"TabItem"},(0,a.kt)("img",{src:n(6786).Z})),(0,a.kt)(d.Z,{value:"cypher",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 10}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);\n"))),(0,a.kt)(d.Z,{value:"run",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL biconnected_components.get()\nYIELD bcc_id, node_from, node_to\nWITH bcc_id, node_from, node_to\nMATCH (node_from)-[edge]-(node_to)\nRETURN bcc_id, edge, node_from, node_to;\n"))),(0,a.kt)(d.Z,{value:"result",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+------------------+------------------+------------------+\n| bcc_id           | edge             | node_from        | node_to          |\n+------------------+------------------+------------------+------------------+\n| 0                | [:RELATION]      | (:Node {id: 2})  | (:Node {id: 4})  |\n| 0                | [:RELATION]      | (:Node {id: 3})  | (:Node {id: 4})  |\n| 0                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 3})  |\n| 0                | [:RELATION]      | (:Node {id: 2})  | (:Node {id: 3})  |\n| 0                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 2})  |\n| 1                | [:RELATION]      | (:Node {id: 8})  | (:Node {id: 9})  |\n| 2                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 8})  |\n| 2                | [:RELATION]      | (:Node {id: 7})  | (:Node {id: 8})  |\n| 2                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 7})  |\n| 3                | [:RELATION]      | (:Node {id: 0})  | (:Node {id: 6})  |\n| 3                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 6})  |\n| 3                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 5})  |\n| 3                | [:RELATION]      | (:Node {id: 0})  | (:Node {id: 1})  |\n| 4                | [:RELATION]      | (:Node {id: 10}) | (:Node {id: 11}) |\n+------------------+------------------+------------------+------------------+\n")))))}N.isMDXComponent=!0},58215:function(e,t,n){var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(67294),r=n(79443);var a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),d="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,s=e.className,m=o.Children.toArray(e.children),b=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),N=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,E=a(),g=E.tabGroupChoices,f=E.setTabGroupChoices,h=(0,o.useState)(N),k=h[0],v=h[1],y=[];if(null!=p){var R=g[p];null!=R&&R!==k&&b.some((function(e){return e.value===R}))&&v(R)}var T=function(e){var t=e.currentTarget,n=y.indexOf(t),o=b[n].value;v(o),null!=p&&(f(p,o),setTimeout((function(){var e,n,o,r,a,i,d,c;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,a=e.right,i=window,d=i.innerHeight,c=i.innerWidth,n>=0&&a<=c&&r<=d&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=y.indexOf(e.target)+1;n=y[o]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},s)},b.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",d,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,o.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var o=(0,n(67294).createContext)(void 0);t.Z=o},86010:function(e,t,n){function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},6786:function(e,t,n){t.Z=n.p+"assets/images/biconnected-components-1-4a8b42aeb2149f9f31d1392e55ef1871.png"}}]);