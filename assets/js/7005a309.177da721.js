"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34255],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,g=m["".concat(d,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74462:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return g},assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=n(9877),o=n(58215),d=["components"],u={id:"community-detection-online",title:"community_detection_online",sidebar_label:"community_detection_online"},s=void 0,p={unversionedId:"query-modules/cpp/community-detection-online",id:"query-modules/cpp/community-detection-online",title:"community_detection_online",description:"<span",source:"@site/mage/query-modules/cpp/community_detection_online.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/community-detection-online",permalink:"/docs/mage/query-modules/cpp/community-detection-online",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/community_detection_online.md",tags:[],version:"current",frontMatter:{id:"community-detection-online",title:"community_detection_online",sidebar_label:"community_detection_online"},sidebar:"mage",previous:{title:"bridges",permalink:"/docs/mage/query-modules/cpp/bridges"},next:{title:"cycles",permalink:"/docs/mage/query-modules/cpp/cycles"}},m={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>set(directed, weighted, similarity_threshold, exponent, min_value, weight_property, w_selfloop, max_iterations, max_updates)</code>",id:"setdirected-weighted-similarity_threshold-exponent-min_value-weight_property-w_selfloop-max_iterations-max_updates",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"<code>update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges)</code>",id:"updatecreatedvertices-creatededges-updatedvertices-updatededges-deletedvertices-deletededges",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-2",level:4},{value:"Usage:",id:"usage-2",level:4},{value:"<code>reset()</code>",id:"reset",level:3},{value:"Output:",id:"output-3",level:4},{value:"Usage:",id:"usage-3",level:4},{value:"Example",id:"example",level:2}],g=function(e){var t=e.children,n=e.color;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:c,Highlight:g};function k(e){var t=e.components,u=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_online_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-community_detection_online-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This query module implements the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1305.2006"},"LabelRankT"),"\ndynamic community detection algorithm."),(0,r.kt)("p",null,"LabelRankT belongs to the ",(0,r.kt)("em",{parentName:"p"},"label propagation")," family of community detection\nalgorithms and thus rests upon the idea that individual nodes learn from their\nneighbors what community they belong to."),(0,r.kt)("p",null,"Being ",(0,r.kt)("em",{parentName:"p"},"dynamic")," and ",(0,r.kt)("em",{parentName:"p"},"efficient"),", the algorithm is suitable for large-scale\ngraphs. It runs in ",(0,r.kt)("em",{parentName:"p"},"O(m)")," time and guarantees ",(0,r.kt)("em",{parentName:"p"},"O(mn)")," space complexity, where\n",(0,r.kt)("em",{parentName:"p"},"m")," and ",(0,r.kt)("em",{parentName:"p"},"n")," are the counts of vertices and edges in the graph, respectively."),(0,r.kt)("p",null,"Dynamic algorithms such as LabelRankT are especially suited for graph streaming\nsolutions such as Memgraph. As updates arrive in a stream, it avoids redundant\nwork by only processing the portion of the graph modified by the update."),(0,r.kt)("p",null,"Furthermore, the algorithm improves upon earlier label propagation methods by\nbeing deterministic; its results are replicable. Taking into account edge weight\nand directedness generally yields better community quality than similar methods,\nand it extends LabelRankT\u2019s compatibility to a wider set of graphs."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1305.2006"},"LabelRankT: Incremental Community Detection in Dynamic Networks via Label\nPropagation"),", Xie, Jierui et al."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed"))," / ",(0,r.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"weighted"))," / ",(0,r.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)("h3",{id:"setdirected-weighted-similarity_threshold-exponent-min_value-weight_property-w_selfloop-max_iterations-max_updates"},(0,r.kt)("inlineCode",{parentName:"h3"},"set(directed, weighted, similarity_threshold, exponent, min_value, weight_property, w_selfloop, max_iterations, max_updates)")),(0,r.kt)("p",null,"Performs dynamic community detection using the LabelRankT algorithm."),(0,r.kt)("p",null,"The default values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"similarity_threshold"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"exponent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"min_value"),"\nparameters are not universally applicable, and the actual values should be\ndetermined experimentally. This is especially pertinent to setting the\n",(0,r.kt)("inlineCode",{parentName:"p"},"min_value")," parameter. For example, with the default ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"1/10"))," value, vertices\nof degree greater than 10 are at risk of not being assigned to any community and\nthe user should check if that is indeed the case."),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directed: bool(False)")," \u27a1 Specifies whether the graph is directed. If not set,\nthe graph is treated as undirected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weighted: bool(False)")," \u27a1 Specifies whether the graph is weighted. If not set,\nthe graph is considered unweighted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"similarity_threshold: double(0.7)")," \u27a1 Maximum similarity between node\u2019s and\nits neighbors\u2019 communities for the node to be updated in the ongoing\niteration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exponent: double(4)")," \u27a1 Power which community probability vectors are raised\nelementwise to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_value: double(0.1)")," \u27a1 Smallest community probability that is not pruned\nbetween iterations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'weight_property: str("weight")')," For directed graphs, the values at the given\nedge property are used as weights in the community detection algorithm."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"w_selfloop: double(1)")," \u27a1 Each vertex has a self-loop added to smooth the\nlabel propagation. This parameter specifies the weight assigned to the\nself-loops. If the graph is unweighted, this value is ignored.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iterations: int(100)")," \u27a1 Maximum number of iterations to run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_updates: int(5)")," \u27a1 Maximum number of updates to any node\u2019s community\nprobabilities.")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community_id: int")," \u27a1 Community ID. If the node is not associated with any\ncommunity, defaults to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"-1")),".")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL community_detection_online.set(False, False, 0.7, 4.0, 0.1, "weight", 1, 100, 5)\nYIELD node, community_id;\n')),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get()")),(0,r.kt)("p",null,"Returns the latest previously calculated community detection results. If there\nare none, defaults to calling ",(0,r.kt)("inlineCode",{parentName:"p"},"set()")," with default parameters."),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community_id: int")," \u27a1 Community ID. Defaults to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"-1"))," if the node is not\nassociated with any community.")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL community_detection_online.get()\nYIELD node, community_id;\n")),(0,r.kt)("h3",{id:"updatecreatedvertices-creatededges-updatedvertices-updatededges-deletedvertices-deletededges"},(0,r.kt)("inlineCode",{parentName:"h3"},"update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges)")),(0,r.kt)("p",null,"Dynamically updates previously calculated community detection results based on\nchanges applied in the latest graph update and returns the results."),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createdVertices: mgp.List[mgp.Vertex]")," \u27a1 Vertices created in the latest graph\nupdate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createdEdges: mgp.List[mgp.Edge]")," \u27a1 Edges created in the latest graph update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updatedVertices: mgp.List[mgp.Vertex]")," \u27a1 Vertices updated in the latest graph\nupdate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updatedEdges: mgp.List[mgp.Edge]")," \u27a1 Edges updated in the latest graph update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deletedVertices: mgp.List[mgp.Vertex]")," \u27a1 Vertices deleted in the latest graph\nupdate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deletedEdges: mgp.List[mgp.Edge]")," \u27a1 Edges deleted in the latest graph update.")),(0,r.kt)("h4",{id:"output-2"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community_id: int")," \u27a1 Community ID. If the node is not associated with any\ncommunity, defaults to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"-1")),".")),(0,r.kt)("h4",{id:"usage-2"},"Usage:"),(0,r.kt)("p",null,"As there are a total of six complex obligatory parameters, setting the\nparameters by hand might be cumbersome. The recommended use of this method is to\ncall it within a\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/database-functionalities/triggers"},"trigger"),",\nmaking sure beforehand that all ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/database-functionalities/triggers/#predefined-variables"},"predefined\nvariables"),"\nare available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER sample_trigger BEFORE COMMIT\nEXECUTE CALL community_detection_online.update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges) YIELD node, community_id;\n")),(0,r.kt)("p",null,"Communities calculated by ",(0,r.kt)("inlineCode",{parentName:"p"},"update()")," are also accessible by subsequently calling\n",(0,r.kt)("inlineCode",{parentName:"p"},"get()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER sample_trigger BEFORE COMMIT\nEXECUTE CALL community_detection_online.update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges) YIELD *;\n\nCALL community_detection_online.get()\nYIELD node, community_id\nRETURN node.id AS node_id, community_id\nORDER BY node_id;\n")),(0,r.kt)("h3",{id:"reset"},(0,r.kt)("inlineCode",{parentName:"h3"},"reset()")),(0,r.kt)("p",null,"Resets the algorithm to its initial state."),(0,r.kt)("h4",{id:"output-3"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message: str")," \u27a1 Reports whether the algorithm was successfully reset.")),(0,r.kt)("h4",{id:"usage-3"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL community_detection_online.reset() YIELD message;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Set trigger",value:"cypher-preset"},{label:"Step 3: Load commands",value:"cypher-load"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(17279).Z})),(0,r.kt)(o.Z,{value:"cypher-preset",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER community_detection_online_trigger BEFORE COMMIT\nEXECUTE CALL community_detection_online.update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges) YIELD node, community_id\nSET node.community_id = community_id;\n"))),(0,r.kt)(o.Z,{value:"cypher-load",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a: Node {id: 0}) MERGE (b: Node {id: 1}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 0}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 1}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 2}) MERGE (b: Node {id: 3}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 3}) MERGE (b: Node {id: 4}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 3}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 4}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);\n"))),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL community_detection_online.get()\nYIELD node, community_id\nRETURN node.id AS node_id, community_id\nORDER BY node_id;\n"))),(0,r.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------------+-------------------------+\n| node_id                 | community_id            |\n+-------------------------+-------------------------+\n| 0                       | 1                       |\n| 1                       | 1                       |\n| 2                       | 1                       |\n| 3                       | 2                       |\n| 4                       | 2                       |\n| 5                       | 2                       |\n+-------------------------+-------------------------+\n")))))}k.isMDXComponent=!0},58215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(87462),i=n(67294),r=n(72389),l=n(63725),o=n(86010),d="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,s=e.block,p=e.defaultValue,m=e.values,c=e.groupId,g=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,l.UB)(),v=f.tabGroupChoices,N=f.setTabGroupChoices,E=(0,i.useState)(b),_=E[0],C=E[1],T=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var x=v[c];null!=x&&x!==_&&k.some((function(e){return e.value===x}))&&C(x)}var R=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==_&&(w(t),C(a),null!=c&&N(c,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},g)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:R,onClick:R},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function s(e){var t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},17279:function(e,t,n){t.Z=n.p+"assets/images/community-detection-online-1-8bc46fdca771aa123098386c57150e41.png"}}]);