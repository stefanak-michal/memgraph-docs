"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65322],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8132:function(e,t,a){a.r(t),a.d(t,{Highlight:function(){return g},assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(9877),o=a(58215),u=["components"],c={id:"bipartite-matching",title:"bipartite_matching",sidebar_label:"bipartite_matching"},p=void 0,s={unversionedId:"query-modules/cpp/bipartite-matching",id:"query-modules/cpp/bipartite-matching",title:"bipartite_matching",description:"docs-source",source:"@site/mage/query-modules/cpp/bipartite_matching.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/bipartite-matching",permalink:"/docs/mage/query-modules/cpp/bipartite-matching",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/bipartite_matching.md",tags:[],version:"current",frontMatter:{id:"bipartite-matching",title:"bipartite_matching",sidebar_label:"bipartite_matching"},sidebar:"mage",previous:{title:"biconnected_components",permalink:"/docs/mage/query-modules/cpp/biconnected-components"},next:{title:"bridges",permalink:"/docs/mage/query-modules/cpp/bridges"}},m={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>max()</code>",id:"max",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],g=function(e){var t=e.children,a=e.color;return(0,i.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:d,Highlight:g};function h(e){var t=e.components,c=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},b,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/bipartite_matching_module/bipartite_matching_module.cpp"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-bipartite_matching-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"A bipartite graph is a graph in which we can divide vertices into two independent sets, such that every edge connects vertices between these sets. No connection can be established within the set. Matching in bipartite graphs (bipartite matching) is described as a set of edges that are picked in a way to not share an endpoint. Furthermore, maximum matching is such matching of maximum cardinality of the chosen edge set. The algorithm runs in O(|V|*|E|) time where V represents a set of nodes and E represents a set of edges."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Module type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"algorithm")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Implementation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"C++")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Graph direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"undirected")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Edge weights")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"unweighted")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"sequential")))))),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"max"},(0,i.kt)("inlineCode",{parentName:"h3"},"max()")),(0,i.kt)("h4",{id:"output"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maximum_bipartite_matching")," \u27a1 Maximum bipartite matching, the cardinality of maximum matching edge subset. If graph is not bipartite, zero(0) is returned value.")),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bipartite_matching.max()\nYIELD maximum_bipartite_matching;\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,i.kt)("img",{src:a(67574).Z})),(0,i.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\n"))),(0,i.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bipartite_matching.max()\nYIELD maximum_bipartite_matching;\n"))),(0,i.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"+----------------------------+\n| maximum_bipartite_matching |\n+----------------------------+\n| 3                          |\n+----------------------------+\n")))))}h.isMDXComponent=!0},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),r=a(67294),i=a(72389),l=a(5979),o=a(86010),u="tabItem_LplD";function c(e){var t,a,i,c=e.lazy,p=e.block,s=e.defaultValue,m=e.values,d=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(t=null!=s?s:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,r.useState)(v),x=E[0],T=E[1],O=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=y[d];null!=_&&_!==x&&h.some((function(e){return e.value===_}))&&T(_)}var R=function(e){var t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==x&&(w(t),T(n),null!=d&&N(d,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:R,onClick:R},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},67574:function(e,t,a){t.Z=a.p+"assets/images/bipartite-matching-1-b510761a980ed8fcb76c95dc9c8fe17d.png"}}]);