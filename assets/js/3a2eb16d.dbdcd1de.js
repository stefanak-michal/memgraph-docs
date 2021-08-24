"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62037],{3905:function(e,d,n){n.d(d,{Zo:function(){return N},kt:function(){return m}});var t=n(67294);function i(e,d,n){return d in e?Object.defineProperty(e,d,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[d]=n,e}function a(e,d){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);d&&(t=t.filter((function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var d=1;d<arguments.length;d++){var n=null!=arguments[d]?arguments[d]:{};d%2?a(Object(n),!0).forEach((function(d){i(e,d,n[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(n,d))}))}return e}function r(e,d){if(null==e)return{};var n,t,i=function(e,d){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],d.indexOf(n)>=0||(i[n]=e[n]);return i}(e,d);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],d.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),s=function(e){var d=t.useContext(l),n=d;return e&&(n="function"==typeof e?e(d):o(o({},d),e)),n},N=function(e){var d=s(e.components);return t.createElement(l.Provider,{value:d},e.children)},p={inlineCode:"code",wrapper:function(e){var d=e.children;return t.createElement(t.Fragment,{},d)}},c=t.forwardRef((function(e,d){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,N=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,u=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?t.createElement(u,o(o({ref:d},N),{},{components:n})):t.createElement(u,o({ref:d},N))}));function m(e,d){var n=arguments,i=d&&d.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var r={};for(var l in d)hasOwnProperty.call(d,l)&&(r[l]=d[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30166:function(e,d,n){n.r(d),n.d(d,{frontMatter:function(){return s},contentTitle:function(){return N},metadata:function(){return p},toc:function(){return c},Highlight:function(){return m},default:function(){return E}});var t=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(55064),r=n(58215),l=["components"],s={id:"node-similarity",title:"node_similarity",sidebar_label:"node_similarity"},N=void 0,p={unversionedId:"query-modules/python/node-similarity",id:"query-modules/python/node-similarity",isDocsHomePage:!1,title:"node_similarity",description:"<span",source:"@site/mage/query-modules/python/node-similarity.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/node-similarity",permalink:"/mage/query-modules/python/node-similarity",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/node-similarity.md",version:"current",frontMatter:{id:"node-similarity",title:"node_similarity",sidebar_label:"node_similarity"},sidebar:"mage",previous:{title:"graph_coloring",permalink:"/mage/query-modules/python/graph-coloring"},next:{title:"nxalg",permalink:"/mage/query-modules/python/nxalg"}},c=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>cosine(node1, node2, mode)</code>",id:"cosinenode1-node2-mode",children:[]},{value:"<code>jaccard(node1, node2, mode)</code>",id:"jaccardnode1-node2-mode",children:[]},{value:"<code>overlap(node1, node2, mode)</code>",id:"overlapnode1-node2-mode",children:[]}]},{value:"Example - cosine similarity",id:"example---cosine-similarity",children:[]},{value:"Example - Jaccard similarity",id:"example---jaccard-similarity",children:[]},{value:"Example - overlap similarity",id:"example---overlap-similarity",children:[]}],m=function(e){var d=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},d)},u={toc:c,Highlight:m};function E(e){var d=e.components,s=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},u,s,{components:d,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node_similarity.py"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-node_similarity-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"If we're interested in how similar two nodes in a graph are, we'll want to get a numerical value that represents the ",(0,a.kt)("em",null,"node similarity")," between those two nodes. There are many node similarity measures and currently this module contains the following: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cosine similarity"),(0,a.kt)("li",{parentName:"ul"},"Jaccard similarity "),(0,a.kt)("li",{parentName:"ul"},"overlap similarity")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The cosine similarity")," is computed using the following formula:"),(0,a.kt)("a",{href:"https://www.codecogs.com/eqnedit.php?latex=Cosine(A,B)&space;=&space;\\frac{|A&space;\\cap&space;B|}&space;{\\sqrt{|A|&space;\\cdot&space;|B|}}",target:"_blank"},(0,a.kt)("img",{src:"https://latex.codecogs.com/gif.latex?Cosine(A,B)&space;=&space;\\frac{|A&space;\\cap&space;B|}&space;{\\sqrt{|A|&space;\\cdot&space;|B|}}",title:"Cosine(A,B) = \\frac{|A \\cap B|} {\\sqrt{|A| \\cdot |B|}}"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Jaccard similarity")," is computed using the following formula:"),(0,a.kt)("a",{href:"https://www.codecogs.com/eqnedit.php?latex=Jaccard(A,B)&space;=&space;\\frac{|A&space;\\cap&space;B|}&space;{|A|&space;&plus;&space;|B|&space;-&space;|A&space;\\cap&space;B|}",target:"_blank"},(0,a.kt)("img",{src:"https://latex.codecogs.com/gif.latex?Jaccard(A,B)&space;=&space;\\frac{|A&space;\\cap&space;B|}&space;{|A|&space;&plus;&space;|B|&space;-&space;|A&space;\\cap&space;B|}",title:"Jaccard(A,B) = \\frac{|A \\cap B|} {|A| + |B| - |A \\cap B|}"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The overalap similarity")," is computed using the following formula:"),(0,a.kt)("a",{href:"https://www.codecogs.com/eqnedit.php?latex=Overlap(A,B)&space;=&space;\\frac{|A&space;\\cap&space;B|}&space;{min(|A|,&space;|B|)}",target:"_blank"},(0,a.kt)("img",{src:"https://latex.codecogs.com/gif.latex?Overlap(A,B)&space;=&space;\\frac{|A&space;\\cap&space;B|}&space;{min(|A|,&space;|B|)}",title:"Overlap(A,B) = \\frac{|A \\cap B|} {min(|A|, |B|)}"})),(0,a.kt)("p",null,"Set A represents all neighbors of one node, set B represents all neighbors of the other node. In all the given formulas, the numerator is the cardinality of the intersection of set A and set B (in other words, the cardinality of the common neighbors set). The denominator differs but requires the cardinality of sets A and B in some way."),(0,a.kt)("p",null,"The algorithm is implemented so that it ignores whether the graph is directed or undirected and treats the edges as if they were undirected. It also ignores multiple edges between two nodes and treats them as if there were only one edge."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trait"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Module type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"algorithm")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Implementation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"Python")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Graph direction")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"undirected")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Edge weights")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"unweighted")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Parallelism")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"sequential")))))),(0,a.kt)("h2",{id:"procedures"},"Procedures"),(0,a.kt)("h3",{id:"cosinenode1-node2-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"cosine(node1, node2, mode)")),(0,a.kt)("h4",{id:"input"},"Input:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node1: Union[Vertex, Tuple[Vertex]")," \u27a1 The first node or a tuple of nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node2: Union[Vertex, Tuple[Vertex]]")," \u27a1 The second node or a tuple of nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'mode: str("cartesian")'),' \u27a1 If the given arguments are tuples, this argument determines whether to calculate the similarity between nodes pairwise ("pairwise") or calculate the similarity between one and each node ("cartesian"). The default value is "cartesian".')),(0,a.kt)("h4",{id:"output"},"Output:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node1: Vertex")," \u27a1 The first node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node2: Vertex")," \u27a1 The second node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"similarity: float")," \u27a1  The cosine similarity between the first and the second node.")),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m)\nWITH COLLECT(m) AS nodes1\nMATCH (n)\nWITH COLLECT(n) AS nodes2, nodes1\nCALL node_similarity.cosine(nodes1, nodes2) YIELD node1, node2, similarity\nRETURN node1, node2, similarity\n")),(0,a.kt)("h3",{id:"jaccardnode1-node2-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"jaccard(node1, node2, mode)")),(0,a.kt)("h4",{id:"input-1"},"Input:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node1: Union[Vertex, Tuple[Vertex]")," \u27a1 The first node or a tuple of nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node2: Union[Vertex, Tuple[Vertex]]")," \u27a1 The second node or a tuple of nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'mode: str("cartesian")'),' \u27a1 If the given arguments are tuples, this argument determines whether to calculate the similarity between nodes pairwise ("pairwise") or calculate the similarity between one and each node ("cartesian"). The default value is "cartesian".')),(0,a.kt)("h4",{id:"output-1"},"Output:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node1: Vertex")," \u27a1 The first node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node2: Vertex")," \u27a1 The second node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"similarity: float")," \u27a1  The Jaccard similarity between the first and the second node.")),(0,a.kt)("h4",{id:"usage-1"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (m)\nWITH COLLECT(m) AS nodes1\nMATCH (n)\nWITH COLLECT(n) AS nodes2, nodes1\nCALL node_similarity.jaccard(nodes1, nodes2, "cartesian") YIELD node1, node2, similarity\nRETURN node1, node2, similarity\n')),(0,a.kt)("h3",{id:"overlapnode1-node2-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"overlap(node1, node2, mode)")),(0,a.kt)("h4",{id:"input-2"},"Input:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node1: Union[Vertex, Tuple[Vertex]")," \u27a1 The first node or a tuple of nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node2: Union[Vertex, Tuple[Vertex]]")," \u27a1 The second node or a tuple of nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'mode: str("cartesian")'),' \u27a1 If the given arguments are tuples, this argument determines whether to calculate the similarity between nodes pairwise ("pairwise") or calculate the similarity between one and each node ("cartesian"). The default value is "cartesian".')),(0,a.kt)("h4",{id:"output-2"},"Output:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node1: Vertex")," \u27a1 The first node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node2: Vertex")," \u27a1 The second node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"similarity: float")," \u27a1  The overlap similarity between the first and the second node.")),(0,a.kt)("h4",{id:"usage-2"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (m)\nWITH COLLECT(m) AS nodes1\nMATCH (n)\nWITH COLLECT(n) AS nodes2, nodes1\nCALL node_similarity.overlap(nodes1, nodes2, "pairwise") YIELD node1, node2, similarity\nRETURN node1, node2, similarity\n')),(0,a.kt)("h2",{id:"example---cosine-similarity"},"Example - cosine similarity"),(0,a.kt)(o.Z,{groupId:"example1",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"visualization",mdxType:"TabItem"},(0,a.kt)("img",{src:n(82389).Z})),(0,a.kt)(r.Z,{value:"cypher",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\n"))),(0,a.kt)(r.Z,{value:"run",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m)\nWITH COLLECT(m) AS nodes1\nMATCH (n)\nWITH COLLECT(n) AS nodes2, nodes1\nCALL node_similarity.cosine(nodes1, nodes2) YIELD node1, node2, similarity AS cosine_similarity\nRETURN node1, node2, cosine_similarity;\n"))),(0,a.kt)(r.Z,{value:"result",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------+-------------------+-------------------+\n| node1             | node2             | cosine_similarity |\n+-------------------+-------------------+-------------------+\n| (:Node {id: 0})   | (:Node {id: 0})   | 1                 |\n| (:Node {id: 0})   | (:Node {id: 2})   | 0.67082           |\n| (:Node {id: 0})   | (:Node {id: 3})   | 0.316228          |\n| (:Node {id: 0})   | (:Node {id: 4})   | 0.516398          |\n| (:Node {id: 0})   | (:Node {id: 5})   | 0.516398          |\n| (:Node {id: 0})   | (:Node {id: 1})   | 0.67082           |\n| (:Node {id: 2})   | (:Node {id: 0})   | 0.67082           |\n| (:Node {id: 2})   | (:Node {id: 2})   | 1                 |\n| (:Node {id: 2})   | (:Node {id: 3})   | 0.707107          |\n| (:Node {id: 2})   | (:Node {id: 4})   | 0.57735           |\n| (:Node {id: 2})   | (:Node {id: 5})   | 0.288675          |\n| (:Node {id: 2})   | (:Node {id: 1})   | 0.75              |\n| (:Node {id: 3})   | (:Node {id: 0})   | 0.316228          |\n| (:Node {id: 3})   | (:Node {id: 2})   | 0.707107          |\n| (:Node {id: 3})   | (:Node {id: 3})   | 1                 |\n| (:Node {id: 3})   | (:Node {id: 4})   | 0.408248          |\n| (:Node {id: 3})   | (:Node {id: 5})   | 0.408248          |\n| (:Node {id: 3})   | (:Node {id: 1})   | 0.353553          |\n| (:Node {id: 4})   | (:Node {id: 0})   | 0.516398          |\n| (:Node {id: 4})   | (:Node {id: 2})   | 0.57735           |\n| (:Node {id: 4})   | (:Node {id: 3})   | 0.408248          |\n| (:Node {id: 4})   | (:Node {id: 4})   | 1                 |\n| (:Node {id: 4})   | (:Node {id: 5})   | 0.666667          |\n| (:Node {id: 4})   | (:Node {id: 1})   | 0.866025          |\n| (:Node {id: 5})   | (:Node {id: 0})   | 0.516398          |\n| (:Node {id: 5})   | (:Node {id: 2})   | 0.288675          |\n| (:Node {id: 5})   | (:Node {id: 3})   | 0.408248          |\n| (:Node {id: 5})   | (:Node {id: 4})   | 0.666667          |\n| (:Node {id: 5})   | (:Node {id: 5})   | 1                 |\n| (:Node {id: 5})   | (:Node {id: 1})   | 0.57735           |\n| (:Node {id: 1})   | (:Node {id: 0})   | 0.67082           |\n| (:Node {id: 1})   | (:Node {id: 2})   | 0.75              |\n| (:Node {id: 1})   | (:Node {id: 3})   | 0.353553          |\n| (:Node {id: 1})   | (:Node {id: 4})   | 0.866025          |\n| (:Node {id: 1})   | (:Node {id: 5})   | 0.57735           |\n| (:Node {id: 1})   | (:Node {id: 1})   | 1                 |\n+-------------------+-------------------+-------------------+\n\n")))),(0,a.kt)("h2",{id:"example---jaccard-similarity"},"Example - Jaccard similarity"),(0,a.kt)(o.Z,{groupId:"example2",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"visualization",mdxType:"TabItem"},(0,a.kt)("img",{src:n(82389).Z})),(0,a.kt)(r.Z,{value:"cypher",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\n"))),(0,a.kt)(r.Z,{value:"run",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m)\nWITH COLLECT(m) AS nodes1\nMATCH (n)\nWITH COLLECT(n) AS nodes2, nodes1\nCALL node_similarity.jaccard(nodes1, nodes2) YIELD node1, node2, similarity AS jaccard_similarity\nRETURN node1, node2, jaccard_similarity;\n"))),(0,a.kt)(r.Z,{value:"result",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"+--------------------+--------------------+--------------------+\n| node1              | node2              | jaccard_similarity |\n+--------------------+--------------------+--------------------+\n| (:Node {id: 0})    | (:Node {id: 0})    | 1                  |\n| (:Node {id: 0})    | (:Node {id: 2})    | 0.5                |\n| (:Node {id: 0})    | (:Node {id: 3})    | 0.166667           |\n| (:Node {id: 0})    | (:Node {id: 4})    | 0.333333           |\n| (:Node {id: 0})    | (:Node {id: 5})    | 0.333333           |\n| (:Node {id: 0})    | (:Node {id: 1})    | 0.5                |\n| (:Node {id: 2})    | (:Node {id: 0})    | 0.5                |\n| (:Node {id: 2})    | (:Node {id: 2})    | 1                  |\n| (:Node {id: 2})    | (:Node {id: 3})    | 0.5                |\n| (:Node {id: 2})    | (:Node {id: 4})    | 0.4                |\n| (:Node {id: 2})    | (:Node {id: 5})    | 0.166667           |\n| (:Node {id: 2})    | (:Node {id: 1})    | 0.6                |\n| (:Node {id: 3})    | (:Node {id: 0})    | 0.166667           |\n| (:Node {id: 3})    | (:Node {id: 2})    | 0.5                |\n| (:Node {id: 3})    | (:Node {id: 3})    | 1                  |\n| (:Node {id: 3})    | (:Node {id: 4})    | 0.25               |\n| (:Node {id: 3})    | (:Node {id: 5})    | 0.25               |\n| (:Node {id: 3})    | (:Node {id: 1})    | 0.2                |\n| (:Node {id: 4})    | (:Node {id: 0})    | 0.333333           |\n| (:Node {id: 4})    | (:Node {id: 2})    | 0.4                |\n| (:Node {id: 4})    | (:Node {id: 3})    | 0.25               |\n| (:Node {id: 4})    | (:Node {id: 4})    | 1                  |\n| (:Node {id: 4})    | (:Node {id: 5})    | 0.5                |\n| (:Node {id: 4})    | (:Node {id: 1})    | 0.75               |\n| (:Node {id: 5})    | (:Node {id: 0})    | 0.333333           |\n| (:Node {id: 5})    | (:Node {id: 2})    | 0.166667           |\n| (:Node {id: 5})    | (:Node {id: 3})    | 0.25               |\n| (:Node {id: 5})    | (:Node {id: 4})    | 0.5                |\n| (:Node {id: 5})    | (:Node {id: 5})    | 1                  |\n| (:Node {id: 5})    | (:Node {id: 1})    | 0.4                |\n| (:Node {id: 1})    | (:Node {id: 0})    | 0.5                |\n| (:Node {id: 1})    | (:Node {id: 2})    | 0.6                |\n| (:Node {id: 1})    | (:Node {id: 3})    | 0.2                |\n| (:Node {id: 1})    | (:Node {id: 4})    | 0.75               |\n| (:Node {id: 1})    | (:Node {id: 5})    | 0.4                |\n| (:Node {id: 1})    | (:Node {id: 1})    | 1                  |\n+--------------------+--------------------+--------------------+\n\n")))),(0,a.kt)("h2",{id:"example---overlap-similarity"},"Example - overlap similarity"),(0,a.kt)(o.Z,{groupId:"example3",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"visualization",mdxType:"TabItem"},(0,a.kt)("img",{src:n(82389).Z})),(0,a.kt)(r.Z,{value:"cypher",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\n"))),(0,a.kt)(r.Z,{value:"run",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m)\nWITH COLLECT(m) AS nodes1\nMATCH (n)\nWITH COLLECT(n) AS nodes2, nodes1\nCALL node_similarity.overlap(nodes1, nodes2) YIELD node1, node2, similarity AS overlap_similarity\nRETURN node1, node2, overlap_similarity;\n"))),(0,a.kt)(r.Z,{value:"result",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"+--------------------+--------------------+--------------------+\n| node1              | node2              | overlap_similarity |\n+--------------------+--------------------+--------------------+\n| (:Node {id: 0})    | (:Node {id: 0})    | 1                  |\n| (:Node {id: 0})    | (:Node {id: 2})    | 0.75               |\n| (:Node {id: 0})    | (:Node {id: 3})    | 0.5                |\n| (:Node {id: 0})    | (:Node {id: 4})    | 0.666667           |\n| (:Node {id: 0})    | (:Node {id: 5})    | 0.666667           |\n| (:Node {id: 0})    | (:Node {id: 1})    | 0.75               |\n| (:Node {id: 2})    | (:Node {id: 0})    | 0.75               |\n| (:Node {id: 2})    | (:Node {id: 2})    | 1                  |\n| (:Node {id: 2})    | (:Node {id: 3})    | 1                  |\n| (:Node {id: 2})    | (:Node {id: 4})    | 0.666667           |\n| (:Node {id: 2})    | (:Node {id: 5})    | 0.333333           |\n| (:Node {id: 2})    | (:Node {id: 1})    | 0.75               |\n| (:Node {id: 3})    | (:Node {id: 0})    | 0.5                |\n| (:Node {id: 3})    | (:Node {id: 2})    | 1                  |\n| (:Node {id: 3})    | (:Node {id: 3})    | 1                  |\n| (:Node {id: 3})    | (:Node {id: 4})    | 0.5                |\n| (:Node {id: 3})    | (:Node {id: 5})    | 0.5                |\n| (:Node {id: 3})    | (:Node {id: 1})    | 0.5                |\n| (:Node {id: 4})    | (:Node {id: 0})    | 0.666667           |\n| (:Node {id: 4})    | (:Node {id: 2})    | 0.666667           |\n| (:Node {id: 4})    | (:Node {id: 3})    | 0.5                |\n| (:Node {id: 4})    | (:Node {id: 4})    | 1                  |\n| (:Node {id: 4})    | (:Node {id: 5})    | 0.666667           |\n| (:Node {id: 4})    | (:Node {id: 1})    | 1                  |\n| (:Node {id: 5})    | (:Node {id: 0})    | 0.666667           |\n| (:Node {id: 5})    | (:Node {id: 2})    | 0.333333           |\n| (:Node {id: 5})    | (:Node {id: 3})    | 0.5                |\n| (:Node {id: 5})    | (:Node {id: 4})    | 0.666667           |\n| (:Node {id: 5})    | (:Node {id: 5})    | 1                  |\n| (:Node {id: 5})    | (:Node {id: 1})    | 0.666667           |\n| (:Node {id: 1})    | (:Node {id: 0})    | 0.75               |\n| (:Node {id: 1})    | (:Node {id: 2})    | 0.75               |\n| (:Node {id: 1})    | (:Node {id: 3})    | 0.5                |\n| (:Node {id: 1})    | (:Node {id: 4})    | 1                  |\n| (:Node {id: 1})    | (:Node {id: 5})    | 0.666667           |\n| (:Node {id: 1})    | (:Node {id: 1})    | 1                  |\n+--------------------+--------------------+--------------------+\n\n")))))}E.isMDXComponent=!0},58215:function(e,d,n){var t=n(67294);d.Z=function(e){var d=e.children,n=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:i},d)}},55064:function(e,d,n){n.d(d,{Z:function(){return p}});var t=n(67294),i=n(79443);var a=function(){var e=(0,t.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),r="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,N=39;var p=function(e){var d=e.lazy,n=e.block,i=e.defaultValue,p=e.values,c=e.groupId,m=e.className,u=a(),E=u.tabGroupChoices,h=u.setTabGroupChoices,b=(0,t.useState)(i),T=b[0],y=b[1],g=t.Children.toArray(e.children),R=[];if(null!=c){var k=E[c];null!=k&&k!==T&&p.some((function(e){return e.value===k}))&&y(k)}var f=function(e){var d=e.currentTarget,n=R.indexOf(d),t=p[n].value;y(t),null!=c&&(h(c,t),setTimeout((function(){var e,n,t,i,a,o,r,s;(e=d.getBoundingClientRect(),n=e.top,t=e.left,i=e.bottom,a=e.right,o=window,r=o.innerHeight,s=o.innerWidth,n>=0&&a<=s&&i<=r&&t>=0)||(d.scrollIntoView({block:"center",behavior:"smooth"}),d.classList.add(l),setTimeout((function(){return d.classList.remove(l)}),2e3))}),150))},A=function(e){var d,n;switch(e.keyCode){case N:var t=R.indexOf(e.target)+1;n=R[t]||R[0];break;case s:var i=R.indexOf(e.target)-1;n=R[i]||R[R.length-1]}null==(d=n)||d.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var d=e.value,n=e.label;return t.createElement("li",{role:"tab",tabIndex:T===d?0:-1,"aria-selected":T===d,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":T===d}),key:d,ref:function(e){return R.push(e)},onKeyDown:A,onFocus:f,onClick:f},n)}))),d?(0,t.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},g.map((function(e,d){return(0,t.cloneElement)(e,{key:d,hidden:e.props.value!==T})}))))}},79443:function(e,d,n){var t=(0,n(67294).createContext)(void 0);d.Z=t},86010:function(e,d,n){function t(e){var d,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(d=0;d<e.length;d++)e[d]&&(n=t(e[d]))&&(i&&(i+=" "),i+=n);else for(d in e)e[d]&&(i&&(i+=" "),i+=d);return i}function i(){for(var e,d,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(d=t(e))&&(i&&(i+=" "),i+=d);return i}n.d(d,{Z:function(){return i}})},82389:function(e,d,n){d.Z=n.p+"assets/images/node-similarity-1-5fd5e2699b4725c45d85f6d49b3d8114.png"}}]);