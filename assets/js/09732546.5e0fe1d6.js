"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31525],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80365:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},Highlight:function(){return c},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(26396),o=n(58215),d=["components"],s={id:"node2vec-online",title:"node2vec_online",sidebar_label:"node2vec_online"},u=void 0,p={unversionedId:"query-modules/python/node2vec-online",id:"query-modules/python/node2vec-online",title:"node2vec_online",description:"<span",source:"@site/mage/query-modules/python/node2vec-online.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/node2vec-online",permalink:"/docs/mage/query-modules/python/node2vec-online",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/node2vec-online.md",tags:[],version:"current",frontMatter:{id:"node2vec-online",title:"node2vec_online",sidebar_label:"node2vec_online"},sidebar:"mage",previous:{title:"node2vec",permalink:"/docs/mage/query-modules/python/node2vec"},next:{title:"node_similarity",permalink:"/docs/mage/query-modules/python/node-similarity"}},m=[{value:"Abstract",id:"abstract",children:[],level:2},{value:"Procedures",id:"procedures",children:[{value:"<code>set_streamwalk_updater(half_life, max_length, beta, cutoff, sampled_walks, full_walks)</code>",id:"set_streamwalk_updaterhalf_life-max_length-beta-cutoff-sampled_walks-full_walks",children:[{value:"Input:",id:"input",children:[],level:4},{value:"Output:",id:"output",children:[],level:4},{value:"Usage:",id:"usage",children:[],level:4}],level:3},{value:"<code>set_word2vec_learner(embedding_dimension, learning_rate, skip_gram )</code>",id:"set_word2vec_learnerembedding_dimension-learning_rate-skip_gram-",children:[{value:"Input:",id:"input-1",children:[],level:4},{value:"Output:",id:"output-1",children:[],level:4},{value:"Usage:",id:"usage-1",children:[],level:4}],level:3},{value:"<code>get()</code>",id:"get",children:[{value:"Output:",id:"output-2",children:[],level:4},{value:"Usage:",id:"usage-2",children:[],level:4}],level:3},{value:"<code>update(edges)</code>",id:"updateedges",children:[],level:3},{value:"Input:",id:"input-2",children:[{value:"Usage:",id:"usage-3",children:[],level:4}],level:3},{value:"<code>reset()</code>",id:"reset",children:[{value:"Output:",id:"output-3",children:[],level:4},{value:"Usage:",id:"usage-4",children:[],level:4}],level:3},{value:"<code>help()</code>",id:"help",children:[{value:"Output:",id:"output-4",children:[],level:4},{value:"Usage:",id:"usage-5",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],c=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:m,Highlight:c};function g(e){var t=e.components,s=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node2vec_online.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-node2vec_online-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"node2vec_online")," algorithm learns and updates temporal node embeddings on\nthe fly for tracking and measuring node similarity over time in graph streams.\nThe algorithm creates similar embeddings for two nodes (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),") if there\nis an option to reach one node from the other across edges that appeared\nrecently. In other words, the embedding of a node ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," should be more similar to\nthe embedding of node ",(0,l.kt)("inlineCode",{parentName:"p"},"u")," if we can reach ",(0,l.kt)("inlineCode",{parentName:"p"},"u")," by taking steps backward to node\n",(0,l.kt)("inlineCode",{parentName:"p"},"v")," across edges that appeared before the previous one. These steps backward\nfrom one node to the other form a temporal walk. It is temporal since it depends\non when the edge appeared in the graph."),(0,l.kt)("p",null,"To make two nodes more similar and to create these temporal walks, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Node2Vec\nOnline")," algorithm uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"StreamWalk updater")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Word2Vec learner"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StreamWalk updater")," is a machine for sampling temporal walks. A sampling of the\nwalk is done in a backward fashion because we look only at the incoming edges of\nthe node. Since one node can have multiple incoming edges, when sampling a walk,\n",(0,l.kt)("inlineCode",{parentName:"p"},"StreamWalk updater")," uses probabilities to determine which incoming edge of the\nnode it will take next, and that way leading to a new node. These probabilities\nare computed after the edge arrives and before temporal walk sampling.\nProbability represents a sum over all temporal walks ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," ending in node ",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\nusing edges arriving no later than the latest one of already sampled ones in the\ntemporal walk. When the algorithm decides which edge to take next for temporal\nwalk creation, it uses these computed weights (probabilities). Every time a new\nedge appears in the graph, these probabilities are updated just for two nodes of\na new edge."),(0,l.kt)("p",null,"After walks sampling, ",(0,l.kt)("inlineCode",{parentName:"p"},"Word2Vec learner")," uses these prepared temporal walks to\nmake node embeddings more similar using the ",(0,l.kt)("inlineCode",{parentName:"p"},"gensim Word2Vec")," module. These\nsampled walks are given as sentences to the ",(0,l.kt)("inlineCode",{parentName:"p"},"gensim Word2Vec")," module, which then\noptimizes for the similarity of the node embeddings in the walk with stochastic\ngradient descent using a skip-gram model or continuous-bag-of-words (CBOW)."),(0,l.kt)("p",null,"Embeddings capture the graph topology, relationships between nodes, and further\nrelevant information. How the embeddings capture this inherent information of\nthe graph is not fixed."),(0,l.kt)("p",null,"Capturing information in networks often shuttles between two kinds of\nsimilarities: ",(0,l.kt)("strong",{parentName:"p"},"homophily")," and ",(0,l.kt)("strong",{parentName:"p"},"structural equivalence"),". Under the\n",(0,l.kt)("strong",{parentName:"p"},"homophily")," hypothesis, nodes that are highly interconnected and belong to\nsimilar network clusters or communities should be embedded closely together. In\ncontrast, under the ",(0,l.kt)("strong",{parentName:"p"},"structural equivalence")," hypothesis, nodes that have\nsimilar structural roles in networks should be embedded closely together (e.g.,\nnodes that act as hubs of their corresponding communities)."),(0,l.kt)("p",null,"Currently, our implementation captures for ",(0,l.kt)("strong",{parentName:"p"},"homophily")," - nodes that are highly\ninterconnected and belong to similar network clusters or communities."),(0,l.kt)("p",null,(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,l.kt)("a",{parentName:"p",href:"https://appliednetsci.springeropen.com/track/pdf/10.1007/s41109-019-0169-5.pdf"},"Node embeddings in dynamic\ngraphs"),",\nFerenc B\xe9res, R\xf3bert P\xe1lovics, Domokos Mikl\xf3s Kelen and Andr\xe1s A. Bencz\xfar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"module")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"directed")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"set_streamwalk_updaterhalf_life-max_length-beta-cutoff-sampled_walks-full_walks"},(0,l.kt)("inlineCode",{parentName:"h3"},"set_streamwalk_updater(half_life, max_length, beta, cutoff, sampled_walks, full_walks)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"half_life: int")," \u27a1 half-life ","[seconds]",", used in the temporal walk probability\ncalculation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_length: int")," \u27a1 Maximum length of the sampled temporal random walks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"beta: float")," \u27a1 Damping factor for long paths"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cutoff: int")," \u27a1 Temporal cutoff in seconds to exclude very distant past"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sampled_walks: int")," \u27a1 Number of sampled walks for each edge update"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"full_walks: bool")," \u27a1  Return every node of the sampled walk for representation\nlearning (full_walks=True) or only the endpoints of the walk\n(full_walks=False)")),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message: str")," \u27a1 Whether parameters are set or they need to be reset")),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.set_streamwalk_updater(7200, 3, 0.9, 604800, 4, False);\n")),(0,l.kt)("h3",{id:"set_word2vec_learnerembedding_dimension-learning_rate-skip_gram-"},(0,l.kt)("inlineCode",{parentName:"h3"},"set_word2vec_learner(embedding_dimension, learning_rate, skip_gram )")),(0,l.kt)("h4",{id:"input-1"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"embedding_dimension: int")," \u27a1 Number of dimensions in the representation of the\nembedding vector"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"learning_rate: float")," \u27a1 Learning rate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"skip_gram: bool")," \u27a1 Whether to use skip-gram model (True) or\ncontinuous-bag-of-words (CBOW)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"negative_rate: int")," \u27a1 Negative rate for Gensim Word2Vec model"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threads: int")," \u27a1 Maximum number of threads for parallelization")),(0,l.kt)("h4",{id:"output-1"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message: str")," \u27a1 Whether parameters are set or they need to be reset")),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.set_word2vec_learner(128, 0.01, True, 10, 1);\n")),(0,l.kt)("h3",{id:"get"},(0,l.kt)("inlineCode",{parentName:"h3"},"get()")),(0,l.kt)("h4",{id:"output-2"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node: mgp.Vertex")," \u27a1 Node in the graph for which embedding exists"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"embedding: mgp.List[mgp.Number]")," \u27a1 Embedding for the given node")),(0,l.kt)("h4",{id:"usage-2"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.get();\n")),(0,l.kt)("h3",{id:"updateedges"},(0,l.kt)("inlineCode",{parentName:"h3"},"update(edges)")),(0,l.kt)("h3",{id:"input-2"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"edges: mgp.List[mgp.Edge]")," \u27a1  List of edges added to the graph. For those\nnodes only ",(0,l.kt)("inlineCode",{parentName:"li"},"node2vec_online")," calculates embeddings.")),(0,l.kt)("h4",{id:"usage-3"},"Usage:"),(0,l.kt)("p",null,"There are a few options here. The first one is to create a trigger, so every\ntime an edge is added to graph, the trigger calls a procedure and makes an\nupdate."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER trigger ON --\x3e CREATE BEFORE COMMIT\nEXECUTE CALL node2vec_online.update(createdEdges) YIELD *;\n")),(0,l.kt)("p",null,"The second option is to add all the edges and then call the algorithm with those\nedges:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[e]->(m)\nWITH COLLECT(e) as edges\nCALL node2vec_online.update(edges) YIELD *\nWITH 1 as x\nRETURN x;\n")),(0,l.kt)("h3",{id:"reset"},(0,l.kt)("inlineCode",{parentName:"h3"},"reset()")),(0,l.kt)("h4",{id:"output-3"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message: str")," \u27a1 Message that parameters are ready to be set again")),(0,l.kt)("h4",{id:"usage-4"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.reset();\n")),(0,l.kt)("h3",{id:"help"},(0,l.kt)("inlineCode",{parentName:"h3"},"help()")),(0,l.kt)("h4",{id:"output-4"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name: str")," \u27a1 Name of available functions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value: str")," \u27a1 Documentation for every function")),(0,l.kt)("h4",{id:"usage-5"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.help();\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Set parameters and trigger",value:"cypher-preset"},{label:"Step 3: Load commands",value:"cypher-load"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:n(3224).Z})),(0,l.kt)(o.Z,{value:"cypher-preset",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.set_streamwalk_updater(7200, 2, 0.9, 604800, 2, True) YIELD *;\nCALL node2vec_online.set_word2vec_learner(2, 0.01, True, 1, 1) YIELD *;\n\nCREATE TRIGGER trigger ON --\x3e CREATE BEFORE COMMIT\nEXECUTE CALL node2vec_online.update(createdEdges) YIELD *;\n"))),(0,l.kt)(o.Z,{value:"cypher-load",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (n:Node {id: 1}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 2}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 10}) MERGE (m:Node {id: 5}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 5}) MERGE (m:Node {id: 2}) CREATE (n)-[:RELATION]->(m);\n\nMERGE (n:Node {id: 9}) MERGE (m:Node {id: 7}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 7}) MERGE (m:Node {id: 3}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 3}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\n\nMERGE (n:Node {id: 9}) MERGE (m:Node {id: 8}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 8}) MERGE (m:Node {id: 4}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 4}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.get() YIELD node, embedding\nRETURN node, embedding\nORDER BY node.id;\n"))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------------+-------------------------+\n| node                    | embedding               |\n+-------------------------+-------------------------+\n| (:Node {id: 1})         | [0.255167, 0.450464]    |\n| (:Node {id: 2})         | [-0.465147, -0.35584]   |\n| (:Node {id: 3})         | [-0.243008, -0.0908009] |\n| (:Node {id: 4})         | [-0.414261, -0.472441]  |\n| (:Node {id: 5})         | [-0.250771, -0.188169]  |\n| (:Node {id: 6})         | [-0.0268114, 0.0118215] |\n| (:Node {id: 7})         | [-0.226831, 0.327703]   |\n| (:Node {id: 8})         | [0.143829, 0.0495937]   |\n| (:Node {id: 9})         | [0.369025, -0.0766736]  |\n| (:Node {id: 10})        | [0.322944, 0.448649]    |\n+-------------------------+-------------------------+\n\n")))))}g.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(63616),s=n(86010),u="tabItem_1uMI";function p(e){var t,n,l,i=e.lazy,p=e.block,m=e.defaultValue,c=e.values,h=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,d.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),E=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(N),C=w[0],_=w[1],T=[],R=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=E[h];null!=O&&O!==C&&f.some((function(e){return e.value===O}))&&_(O)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==C&&(R(t),_(a),null!=h&&y(h,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},3224:function(e,t,n){t.Z=n.p+"assets/images/node2vec-online-2638f0e20136a1f858affb1be4013687.png"}}]);