"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12201],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74147:function(e,t,a){a.r(t),a.d(t,{Highlight:function(){return c},assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=(a(9877),a(58215),["components"]),o={id:"cugraph",title:"cugraph",sidebar_label:"cugraph"},u=void 0,p={unversionedId:"query-modules/cuda/cugraph",id:"query-modules/cuda/cugraph",title:"cugraph",description:"docs-source",source:"@site/mage/query-modules/cuda/cugraph.md",sourceDirName:"query-modules/cuda",slug:"/query-modules/cuda/cugraph",permalink:"/docs/mage/query-modules/cuda/cugraph",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cuda/cugraph.md",tags:[],version:"current",frontMatter:{id:"cugraph",title:"cugraph",sidebar_label:"cugraph"},sidebar:"mage",previous:{title:"cycles",permalink:"/docs/mage/query-modules/cpp/cycles"},next:{title:"distance_calculator",permalink:"/docs/mage/query-modules/python/distance-calculator"}},d={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Modules",id:"modules",level:2},{value:"<code>cugraph.balanced_cut_clustering</code>",id:"cugraphbalanced_cut_clustering",level:2},{value:"Procedures",id:"procedures",level:3},{value:"<code>get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)</code>",id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>cugraph.betweenness_centrality</code>",id:"cugraphbetweenness_centrality",level:2},{value:"Procedures",id:"procedures-1",level:3},{value:"<code>get(normalized, directed, weight_property)</code>",id:"getnormalized-directed-weight_property",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"<code>cugraph.generator</code>",id:"cugraphgenerator",level:2},{value:"Procedures",id:"procedures-2",level:3},{value:"<code>rmat(scale, num_edges, node_labels, edge_type, a, b, c, seed, clip_and_flip)</code>",id:"rmatscale-num_edges-node_labels-edge_type-a-b-c-seed-clip_and_flip",level:3},{value:"Input:",id:"input-2",level:4},{value:"Output:",id:"output-2",level:4},{value:"Usage:",id:"usage-2",level:4},{value:"<code>cugraph.hits</code>",id:"cugraphhits",level:2},{value:"Procedures",id:"procedures-3",level:3},{value:"<code>get(tolerance, max_iterations, normalized, directed)</code>",id:"gettolerance-max_iterations-normalized-directed",level:3},{value:"Input:",id:"input-3",level:4},{value:"Output:",id:"output-3",level:4},{value:"Usage:",id:"usage-3",level:4},{value:"<code>cugraph.katz_centrality</code>",id:"cugraphkatz_centrality",level:2},{value:"Procedures",id:"procedures-4",level:3},{value:"<code>get(alpha, beta, epsilon, max_iterations, normalized, directed)</code>",id:"getalpha-beta-epsilon-max_iterations-normalized-directed",level:3},{value:"Input:",id:"input-4",level:4},{value:"Output:",id:"output-4",level:4},{value:"Usage:",id:"usage-4",level:4},{value:"<code>cugraph.leiden</code>",id:"cugraphleiden",level:2},{value:"Procedures",id:"procedures-5",level:3},{value:"<code>get(max_iterations, resolution)</code>",id:"getmax_iterations-resolution",level:3},{value:"Input:",id:"input-5",level:4},{value:"Output:",id:"output-5",level:4},{value:"Usage:",id:"usage-5",level:4},{value:"<code>cugraph.louvain</code>",id:"cugraphlouvain",level:2},{value:"Procedures",id:"procedures-6",level:3},{value:"<code>get(max_iterations, resolution, directed)</code>",id:"getmax_iterations-resolution-directed",level:3},{value:"Input:",id:"input-6",level:4},{value:"Output:",id:"output-6",level:4},{value:"Usage:",id:"usage-6",level:4},{value:"<code>cugraph.pagerank</code>",id:"cugraphpagerank",level:2},{value:"Procedures",id:"procedures-7",level:3},{value:"<code>get(max_iterations, damping_factor, stop_epsilon, weight_property)</code>",id:"getmax_iterations-damping_factor-stop_epsilon-weight_property",level:3},{value:"Input:",id:"input-7",level:4},{value:"Output:",id:"output-7",level:4},{value:"Usage:",id:"usage-7",level:4},{value:"<code>cugraph.personalized_pagerank</code>",id:"cugraphpersonalized_pagerank",level:2},{value:"Procedures",id:"procedures-8",level:3},{value:"<code>get(personalization_vertices, personalization_values, max_iterations, damping_factor, stop_epsilon, weight_property)</code>",id:"getpersonalization_vertices-personalization_values-max_iterations-damping_factor-stop_epsilon-weight_property",level:3},{value:"Input:",id:"input-8",level:4},{value:"Output:",id:"output-8",level:4},{value:"Usage:",id:"usage-8",level:4},{value:"<code>cugraph.spectral_clustering</code>",id:"cugraphspectral_clustering",level:2},{value:"Procedures",id:"procedures-9",level:3},{value:"<code>get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)</code>",id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property-1",level:3},{value:"Input:",id:"input-9",level:4},{value:"Output:",id:"output-9",level:4},{value:"Usage:",id:"usage-9",level:4}],c=function(e){var t=e.children,a=e.color;return(0,i.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:s,Highlight:c};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/cpp/cugraph_module"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-cugraph-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NVIDIA cuGraph")," is a graph analytics library that is part of NVIDIA\u2019s\n",(0,i.kt)("a",{parentName:"p",href:"https://rapids.ai/"},(0,i.kt)("strong",{parentName:"a"},"RAPIDS"))," open-source data science suite containing\nmachine learning tools and libraries for various applications in data science;\nit can be used from Memgraph on machines that meet the ",(0,i.kt)("a",{parentName:"p",href:"https://rapids.ai/start.html#requirements"},(0,i.kt)("strong",{parentName:"a"},"system\nrequirements")),"."),(0,i.kt)("p",null,"This set of modules is built on top of NVIDIA cuGraph and provides a set of\nwrappers for most of the algorithms present in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rapidsai/cugraph"},(0,i.kt)("strong",{parentName:"a"},"cuGraph"))," repository."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Module type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"module")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Implementation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"CUDA")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Graph direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"undirected")),"/",(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"directed")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Edge weights")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"unweighted")),"/",(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"weighted")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"parallelized")))))),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("strong",{parentName:"p"},"cugraph")," module is a collection of distinct GPU-powered modules with\ntheir own procedures."))),(0,i.kt)("h2",{id:"cugraphbalanced_cut_clustering"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.balanced_cut_clustering")),(0,i.kt)("h3",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)")),(0,i.kt)("p",null,"Find the balanced cut clustering of the graph\u2019s nodes."),(0,i.kt)("h4",{id:"input"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_clusters: int")," \u27a1 Number of clusters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_eigenvectors: int(2)")," \u27a1 Number of eigenvectors to be used (must be less\nthan or equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"num_clusters"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ev_tolerance: float(0.00001)")," \u27a1 Tolerance used by the eigensolver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ev_max_iter: int(100)")," \u27a1 Maximum number of iterations for the eigensolver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kmean_tolerance: float(0.00001)")," \u27a1 Tolerance used by the k-means solver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kmean_max_iter: int(100)")," \u27a1 Maximum number of iterations for the k-means\nsolver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'weight_property: str("weight")')," \u27a1 The values of the given relationship.\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,i.kt)("h4",{id:"output"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster: int")," \u27a1 Cluster of a node.")),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.balanced_cut_clustering.get(3)\nYIELD node, cluster\nRETURN node, cluster;\n")),(0,i.kt)("h2",{id:"cugraphbetweenness_centrality"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.betweenness_centrality")),(0,i.kt)("h3",{id:"procedures-1"},"Procedures"),(0,i.kt)("h3",{id:"getnormalized-directed-weight_property"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(normalized, directed, weight_property)")),(0,i.kt)("p",null,"Find betweenness centrality scores for all nodes in the graph."),(0,i.kt)("h4",{id:"input-1"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"normalized: bool(True)")," \u27a1 Normalize the output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool(True)")," \u27a1 Graph directedness. (default ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'weight_property: str("weight")')," \u27a1 The values of the given relationship\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,i.kt)("h4",{id:"output-1"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"betweenness_centrality: float")," \u27a1 Betweenness centrality score of a node.")),(0,i.kt)("h4",{id:"usage-1"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.betweenness_centrality.get()\nYIELD node, betweenness_centrality\nRETURN node, betweenness_centrality;\n")),(0,i.kt)("h2",{id:"cugraphgenerator"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.generator")),(0,i.kt)("h3",{id:"procedures-2"},"Procedures"),(0,i.kt)("h3",{id:"rmatscale-num_edges-node_labels-edge_type-a-b-c-seed-clip_and_flip"},(0,i.kt)("inlineCode",{parentName:"h3"},"rmat(scale, num_edges, node_labels, edge_type, a, b, c, seed, clip_and_flip)")),(0,i.kt)("p",null,"Generate a graph using a Recursive MATrix (R-MAT) graph generation algorithm and\nload it in Memgraph."),(0,i.kt)("h4",{id:"input-2"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scale: int(4)")," \u27a1 Scale factor to set the number of vertices in the graph."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_edges: int(100)")," \u27a1 Number of edges in the generated graph."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node_labels: mgp.List[str] ([])")," \u27a1 Labels on created vertices. Defaults to\nempty list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'edge_type: str("RELATIONSHIP")')," \u27a1 Edge type, defines the name of the\nrelationship."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a: double(0.57)")," \u27a1 First partition probability."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b: double(0.19)")," \u27a1 Second partition probability."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"c: double(0.19)")," \u27a1 Third partition probability."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"seed: int(0)")," \u27a1 RNG (random number generator) seed value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clip_and_flip: bool(False)")," \u27a1 Controls whether to generate edges only in the\nlower triangular part (including the diagonal) of the graph adjacency matrix\n(if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),") or not (if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),").")),(0,i.kt)("h4",{id:"output-2"},"Output:"),(0,i.kt)("p",null,"The generated graph is loaded into Memgraph."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message: str")," \u27a1 Success message if the graph is loaded.")),(0,i.kt)("h4",{id:"usage-2"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.generator.rmat() YIELD *;\n")),(0,i.kt)("h2",{id:"cugraphhits"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.hits")),(0,i.kt)("h3",{id:"procedures-3"},"Procedures"),(0,i.kt)("h3",{id:"gettolerance-max_iterations-normalized-directed"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(tolerance, max_iterations, normalized, directed)")),(0,i.kt)("p",null,"Find HITS authority and hub values for all nodes in the graph. The HITS\nalgorithm computes two numbers for each node: its ",(0,i.kt)("em",{parentName:"p"},"authority"),", which estimates\nthe value of its content, and its ",(0,i.kt)("em",{parentName:"p"},"hub value"),", which estimates the value of its\nlinks to other nodes."),(0,i.kt)("p",null,"Whereas the HITS algorithm was designed for directed graphs, this implementation\ndoes not check if the input graph is directed and will execute on undirected\ngraphs."),(0,i.kt)("h4",{id:"input-3"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tolerance: float(1e-5)")," \u27a1 HITS approximation tolerance (custom values not\nsupported by NVIDIA cuGraph)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_iterations: int(100)")," \u27a1 Maximum number of iterations before returning an\nanswer (custom values not supported by NVIDIA cuGraph)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"normalized: bool(True)")," \u27a1 Normalize the output (",(0,i.kt)("inlineCode",{parentName:"li"},"False")," not supported by\nNVIDIA cuGraph)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool(True)")," \u27a1 Graph directedness. (default ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),")")),(0,i.kt)("h4",{id:"output-3"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hubs: float")," \u27a1 Hub value of a node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorities: float")," \u27a1 Authority value of a node.")),(0,i.kt)("h4",{id:"usage-3"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.hits.get()\nYIELD node, hubs, authorities\nRETURN node, hubs, authorities;\n")),(0,i.kt)("h2",{id:"cugraphkatz_centrality"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.katz_centrality")),(0,i.kt)("h3",{id:"procedures-4"},"Procedures"),(0,i.kt)("h3",{id:"getalpha-beta-epsilon-max_iterations-normalized-directed"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(alpha, beta, epsilon, max_iterations, normalized, directed)")),(0,i.kt)("p",null,"Find Katz centrality scores for all nodes in the graph."),(0,i.kt)("h4",{id:"input-4"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alpha: float(None)")," \u27a1 Attenuation factor defining the walk length importance.\nIf not specified, calculated as ",(0,i.kt)("inlineCode",{parentName:"li"},"1 / max(out_degree)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"beta: float(1.0)")," \u27a1 Weight scalar (currently not supported by NVIDIA\ncuGraph)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"epsilon: float(1e-6)")," \u27a1 Set the tolerance for the approximation, this\nparameter should be a small magnitude value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_iterations: int(100)")," \u27a1 Maximum number of iterations before returning an\nanswer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"normalized: bool(True)")," \u27a1 Normalize the output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool(True)")," \u27a1 Graph directedness. (default ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),")")),(0,i.kt)("h4",{id:"output-4"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"katz_centrality: float")," \u27a1 Katz centrality score of a node.")),(0,i.kt)("h4",{id:"usage-4"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.katz_centrality.get()\nYIELD node, katz_centrality\nRETURN node, katz_centrality;\n")),(0,i.kt)("h2",{id:"cugraphleiden"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.leiden")),(0,i.kt)("h3",{id:"procedures-5"},"Procedures"),(0,i.kt)("h3",{id:"getmax_iterations-resolution"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, resolution)")),(0,i.kt)("p",null,"Find the partition of the graph into communities using the Leiden method."),(0,i.kt)("h4",{id:"input-5"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_iterations: int(100)")," \u27a1 Maximum number of iterations (levels) of the\nalgorithm. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolution: float(1.0)")," \u27a1 Controls community size (lower values lead to\nfewer, larger communities and vice versa). ")),(0,i.kt)("h4",{id:"output-5"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition: int")," \u27a1 Partition of a node.")),(0,i.kt)("h4",{id:"usage-5"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.leiden.get()\nYIELD node, partition\nRETURN node, partition;\n")),(0,i.kt)("h2",{id:"cugraphlouvain"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.louvain")),(0,i.kt)("h3",{id:"procedures-6"},"Procedures"),(0,i.kt)("h3",{id:"getmax_iterations-resolution-directed"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, resolution, directed)")),(0,i.kt)("p",null,"Find the partition of the graph into communities using the Louvain method."),(0,i.kt)("h4",{id:"input-6"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_iterations: int(100)")," \u27a1 Maximum number of iterations (levels) of the\nalgorithm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolution: float(1.0)")," \u27a1 Controls community size (lower values lead to\nfewer, larger communities and vice versa)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool(True)")," \u27a1 Graph directedness. (default ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),")")),(0,i.kt)("h4",{id:"output-6"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition: int")," \u27a1 Partition of a node.")),(0,i.kt)("h4",{id:"usage-6"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.louvain.get()\nYIELD node, partition\nRETURN node, partition;\n")),(0,i.kt)("h2",{id:"cugraphpagerank"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.pagerank")),(0,i.kt)("h3",{id:"procedures-7"},"Procedures"),(0,i.kt)("h3",{id:"getmax_iterations-damping_factor-stop_epsilon-weight_property"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, damping_factor, stop_epsilon, weight_property)")),(0,i.kt)("p",null,"Find PageRank scores for all nodes in the graph."),(0,i.kt)("h4",{id:"input-7"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_iterations: int(100)")," \u27a1 The maximum number of iterations before returning\nan answer (default ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),"). Use it to limit the execution time or do an early\nexit before the solver reaches the convergence tolerance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damping_factor: float(0.85)")," \u27a1 The damping factor represents the probability\nto follow an outgoing edge (default ",(0,i.kt)("inlineCode",{parentName:"li"},"0.85"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stop_epsilon: float(1e-5)")," \u27a1 The convergence tolerance for PageRank\napproximation. Lowering tolerance improves the approximation, but setting this\nparameter too low can ensue in non-convergence due to numerical round-off.\nValues between ",(0,i.kt)("inlineCode",{parentName:"li"},"0.01")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"0.00001")," are usually acceptable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'weight_property: str("weight")')," \u27a1 The values of the given relationship\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,i.kt)("h4",{id:"output-7"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pagerank: float")," \u27a1 PageRank score of a node.")),(0,i.kt)("h4",{id:"usage-7"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.pagerank.get()\nYIELD node, pagerank\nRETURN node, pagerank;\n")),(0,i.kt)("h2",{id:"cugraphpersonalized_pagerank"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.personalized_pagerank")),(0,i.kt)("h3",{id:"procedures-8"},"Procedures"),(0,i.kt)("h3",{id:"getpersonalization_vertices-personalization_values-max_iterations-damping_factor-stop_epsilon-weight_property"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(personalization_vertices, personalization_values, max_iterations, damping_factor, stop_epsilon, weight_property)")),(0,i.kt)("p",null,"Find personalized PageRank scores for all nodes in the graph."),(0,i.kt)("h4",{id:"input-8"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"personalization_vertices: mgp.List[mgp.Vertex]")," \u27a1 Graph nodes with\npersonalization values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"personalization_values: mgp.List[float]")," \u27a1 Above nodes\u2019 personalization\nvalues."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'weight_property: str("weight")')," \u27a1 The values of the given relationship.\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damping_factor: float(0.85)")," \u27a1 The damping factor represents the probability\nto follow an outgoing edge. (default ",(0,i.kt)("inlineCode",{parentName:"li"},"0.85"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stop_epsilon: float(1e-5)")," \u27a1 The convergence tolerance for PageRank\napproximation. Lowering tolerance improves the approximation, but setting this\nparameter too low can ensue in non-convergence due to numerical round-off.\nValues between ",(0,i.kt)("inlineCode",{parentName:"li"},"0.01")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"0.00001")," are usually acceptable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_iterations: int(100)")," \u27a1 The maximum number of iterations before returning\nan answer (default ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),"). Use it to limit the execution time or do an early\nexit before the solver reaches the convergence tolerance.")),(0,i.kt)("h4",{id:"output-8"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pagerank: float")," \u27a1 PageRank score of a node.")),(0,i.kt)("h4",{id:"usage-8"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n: Node {id: 1}), (m: Node {id: 2})\nCALL cugraph.pagerank.get([n, m], [0.2, 0.5])\nYIELD node, pagerank\nRETURN node, pagerank;\n")),(0,i.kt)("h2",{id:"cugraphspectral_clustering"},(0,i.kt)("inlineCode",{parentName:"h2"},"cugraph.spectral_clustering")),(0,i.kt)("h3",{id:"procedures-9"},"Procedures"),(0,i.kt)("h3",{id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)")),(0,i.kt)("p",null,"Find the spectral clustering of the graph\u2019s nodes."),(0,i.kt)("h4",{id:"input-9"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_clusters: int")," \u27a1 Number of clusters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_eigenvectors: int(2)")," \u27a1 Number of eigenvectors to be used (must be less\nthan or equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"num_clusters"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ev_tolerance: float(0.00001)")," \u27a1 Tolerance used by the eigensolver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ev_max_iter: int(100)")," \u27a1 Maximum number of iterations for the eigensolver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kmean_tolerance: float(0.00001)")," \u27a1 Tolerance used by the k-means solver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kmean_max_iter: int(100)")," \u27a1 Maximum number of iterations for the k-means\nsolver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'weight_property: str("weight")')," \u27a1 The values of the given relationship\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,i.kt)("h4",{id:"output-9"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster: int")," \u27a1 Cluster of a node.")),(0,i.kt)("h4",{id:"usage-9"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.spectral_clustering.get(3)\nYIELD node, cluster\nRETURN node, cluster;\n")))}h.isMDXComponent=!0},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),i=a(72389),l=a(5979),o=a(86010),u="tabItem_LplD";function p(e){var t,a,i,p=e.lazy,d=e.block,s=e.defaultValue,c=e.values,m=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===s?s:null!=(t=null!=s?s:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,l.UB)(),_=f.tabGroupChoices,b=f.setTabGroupChoices,y=(0,r.useState)(N),C=y[0],w=y[1],x=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=_[m];null!=I&&I!==C&&k.some((function(e){return e.value===I}))&&w(I)}var z=function(e){var t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==C&&(T(t),w(n),null!=m&&b(m,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:z,onClick:z},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);