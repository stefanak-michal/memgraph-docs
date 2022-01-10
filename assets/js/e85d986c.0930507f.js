"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6922],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25705:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},Highlight:function(){return m},default:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(26396),o=a(58215),u=["components"],s={id:"graph-analyzer",title:"graph_analyzer",sidebar_label:"graph_analyzer"},d=void 0,p={unversionedId:"query-modules/python/graph-analyzer",id:"query-modules/python/graph-analyzer",title:"graph_analyzer",description:"<span",source:"@site/mage/query-modules/python/graph-analyzer.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/graph-analyzer",permalink:"/docs/mage/query-modules/python/graph-analyzer",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/graph-analyzer.md",tags:[],version:"current",frontMatter:{id:"graph-analyzer",title:"graph_analyzer",sidebar_label:"graph_analyzer"},sidebar:"mage",previous:{title:"distance_calculator",permalink:"/docs/mage/query-modules/python/distance-calculator"},next:{title:"graph_coloring",permalink:"/docs/mage/query-modules/python/graph-coloring"}},c=[{value:"Abstract",id:"abstract",children:[],level:2},{value:"Procedures",id:"procedures",children:[{value:"<code>analyze(analyses)</code>",id:"analyzeanalyses",children:[{value:"Input:",id:"input",children:[],level:4},{value:"Output:",id:"output",children:[],level:4},{value:"Usage:",id:"usage",children:[],level:4}],level:3},{value:"<code>analyze_subgraph(vertices, edges, analyses)</code>",id:"analyze_subgraphvertices-edges-analyses",children:[{value:"Input:",id:"input-1",children:[],level:4},{value:"Output:",id:"output-1",children:[],level:4},{value:"Usage:",id:"usage-1",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],m=function(e){var t=e.children,a=e.color;return(0,l.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:c,Highlight:m};function h(e){var t=e.components,s=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/graph_analyzer.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-graph_analyzer-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The first thing someone should focus on when working with graphs is getting deep analytics of the current state. That is what this module is doing. By using the power of NetworkX, various different graph properties are extracted. This module has the ability to run on a subgraph if a subgraph of nodes is provided as input. Here is a list of analytics that it uses:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nodes"),": Number of nodes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"edges"),": Number of edges"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bridges"),": Number of bridges"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"articulation_points"),": Number of articulation points"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"avg_degree"),": Average degree"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sorted_nodes_degree"),": Sorted nodes degree"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"self_loops"),": Self loops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_bipartite"),": Is bipartite"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_plannar"),": Is planar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_biconnected"),": Is biconnected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_weakly_connected"),": Is weakly connected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"number_of_weakly_components"),": Number of weakly connected components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_strongly_connected"),": Is strongly connected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"strongly_components"),": Number of strongly connected components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_dag"),": Is directed acyclic graph (DAG)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_eulerian"),": Is eulerian"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_forest"),": Is forest"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"is_tree"),": Is tree")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"module")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"undirected")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"analyzeanalyses"},(0,l.kt)("inlineCode",{parentName:"h3"},"analyze(analyses)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"analyses: List[str](NULL)")," \u27a1 List of analytics names to be fetched. If provided with NULL, the whole set of analytics will be included.")),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name: str")," \u27a1 The name of the analytics"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value: str")," \u27a1 Analytics value, stored as a string")),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),(0,l.kt)("h3",{id:"analyze_subgraphvertices-edges-analyses"},(0,l.kt)("inlineCode",{parentName:"h3"},"analyze_subgraph(vertices, edges, analyses)")),(0,l.kt)("h4",{id:"input-1"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vertices: List[Vertex]")," \u27a1 Subset of vertices within a graph."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"edges: List[Edge]")," \u27a1 Subset of edges in a graph for which analytics will take place."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"analyses: List[str](NULL)")," \u27a1 List of analytics names to be fetched. If provided with NULL, the\xa0whole set of analytics will be included.")),(0,l.kt)("h4",{id:"output-1"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name: str")," \u27a1 The name of the analytics"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value: str")," \u27a1 Analytics value, stored as a string")),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[e]-(m)\nWITH COLLECT(n) AS nodes_subset, COLLECT(e) AS edges_subset\nCALL graph_analyzer.analyze(nodes_subset, edges_subset) YIELD name, value\nRETURN name, value;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:a(43586).Z})),(0,l.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 10}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL graph_analyzer.analyze([\n    "nodes", "edges", "bridges", "articulation_points",\n    "avg_degree", "is_dag", "is_tree", "strongly_components"\n    ]) YIELD *;\n'))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-------------------------------------------+-------------------------------------------+\n| name                                      | value                                     |\n+-------------------------------------------+-------------------------------------------+\n| "Number of nodes"                         | "12"                                      |\n| "Number of edges"                         | "14"                                      |\n| "Number of bridges"                       | "2"                                       |\n| "Number of articulation points"           | "3"                                       |\n| "Average degree"                          | "1.1666666666666667"                      |\n| "Is DAG"                                  | "True"                                    |\n| "Is tree"                                 | "False"                                   |\n| "Number of strongly connected components" | "12"                                      |\n+-------------------------------------------+-------------------------------------------+\n')))))}h.isMDXComponent=!0},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),r=a(67294),l=a(72389),i=a(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(63616),s=a(86010),d="tabItem_1uMI";function p(e){var t,a,l,i=e.lazy,p=e.block,c=e.defaultValue,m=e.values,g=e.groupId,h=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=N[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=o(),E=f.tabGroupChoices,v=f.setTabGroupChoices,T=(0,r.useState)(k),R=T[0],_=T[1],I=[],w=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=E[g];null!=O&&O!==R&&b.some((function(e){return e.value===O}))&&_(O)}var C=function(e){var t=e.currentTarget,a=I.indexOf(t),n=b[a].value;n!==R&&(w(t),_(n),null!=g&&v(g,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;a=I[r]||I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":R===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(N.filter((function(e){return e.props.value===R}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},43586:function(e,t,a){t.Z=a.p+"assets/images/graph-analyzer-1-4a8b42aeb2149f9f31d1392e55ef1871.png"}}]);