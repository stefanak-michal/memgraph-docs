"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13574],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2442:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return h},assets:function(){return s},contentTitle:function(){return p},default:function(){return E},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(9877),o=n(58215),u=["components"],d={id:"katz-centrality",title:"katz_centrality",sidebar_label:"katz_centrality"},p=void 0,c={unversionedId:"query-modules/cpp/katz-centrality",id:"query-modules/cpp/katz-centrality",title:"katz_centrality",description:"<span",source:"@site/mage/query-modules/cpp/katz_centrality.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/katz-centrality",permalink:"/docs/mage/query-modules/cpp/katz-centrality",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/katz_centrality.md",tags:[],version:"current",frontMatter:{id:"katz-centrality",title:"katz_centrality",sidebar_label:"katz_centrality"},sidebar:"mage",previous:{title:"json_util",permalink:"/docs/mage/query-modules/python/json-util"},next:{title:"katz_centrality_online",permalink:"/docs/mage/query-modules/cpp/katz-centrality-online"}},s={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get(alpha, epsilon)</code>",id:"getalpha-epsilon",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],h=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},f={toc:m,Highlight:h};function E(e){var t=e.components,d=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/katz_centrality_module/katz_centrality_module.cpp"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-katz_centrality-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Katz Centrality")," is the measurement of centrality that incorporates the\ninbound path length starting from the wanted node. More central nodes will have\ncloser connections rather than having many long-distance nodes connected to\nthem."),(0,l.kt)("p",null,"The implemented algorithm is based on the work of Alexander van der Grinten et.\nal. called ",(0,l.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1807.03847.pdf"},"Scalable Katz Ranking Computation in Large Static and Dynamic\nGraphs"),(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". The author proposes an\nestimation method that preserves rankings for both static and dynamic Katz\ncentrality scenarios."),(0,l.kt)("p",null,"Theoretically speaking there exists an attenuation factor ",(0,l.kt)("inlineCode",{parentName:"p"},"(alpha^i)")," smaller\nthan 1 which is applied to walks of length ",(0,l.kt)("inlineCode",{parentName:"p"},"i"),". If ",(0,l.kt)("inlineCode",{parentName:"p"},"w_i(v)")," is the number of\nwalks of length ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," starting from node ",(0,l.kt)("inlineCode",{parentName:"p"},"v"),", Katz centrality is defined as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Centrality(v) = sum { w_i(v) * alpha ^ i}\n")),(0,l.kt)("p",null,"The constructed algorithm computes Katz centrality by iteratively improving the\nupper and lower bounds on centrality scores. This guarantees that centrality\nrankings will be correct, but it does not guarantee that the corresponding\nresulting centralities will be correct."),(0,l.kt)("p",null,(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,l.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1807.03847.pdf"},"Scalable Katz Ranking Computation in Large Static and Dynamic\nGraphs"),", Alexander van der Grinten et. al."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"algorithm")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"C++")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"directed")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"getalpha-epsilon"},(0,l.kt)("inlineCode",{parentName:"h3"},"get(alpha, epsilon)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alpha: double(0.2)")," \u27a1 Exponential decay factor defining the walk length\nimportance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"epsilon: double(1e-2)")," \u27a1 Convergence tolerance. Minimal difference in two\nadjacent pairs of nodes in the final ranking.")),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which Katz Centrality is calculated."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rank")," \u27a1 Normalized ranking of a node. Expresses the centrality value after\nbound convergence")),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL katz_centrality.get()\nYIELD node, rank;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:n(10040).Z})),(0,l.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 6}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 9}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 10}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL katz_centrality.get()\nYIELD node, rank;\n"))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+------------------+\n| node             | rank             |\n+------------------+------------------+\n| (:Node {id: 9})  | 0.544            |\n| (:Node {id: 7})  | 0                |\n| (:Node {id: 6})  | 0                |\n| (:Node {id: 5})  | 0                |\n| (:Node {id: 4})  | 0                |\n| (:Node {id: 3})  | 0                |\n| (:Node {id: 8})  | 0.408            |\n| (:Node {id: 2})  | 1.08             |\n| (:Node {id: 10}) | 1.864            |\n| (:Node {id: 0})  | 0.28             |\n| (:Node {id: 1})  | 0.408            |\n+------------------+------------------+\n\n")))))}E.isMDXComponent=!0},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),l=n(72389),i=n(63725),o=n(86010),u="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,p=e.block,c=e.defaultValue,s=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),E=null!=s?s:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(E,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==k&&!E.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+E.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,v=(0,r.useState)(k),T=v[0],R=v[1],C=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=N[m];null!=w&&w!==T&&E.some((function(e){return e.value===w}))&&R(w)}var A=function(e){var t=e.currentTarget,n=C.indexOf(t),a=E[n].value;a!==T&&(O(t),R(a),null!=m&&y(m,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},E.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:A,onClick:A},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},10040:function(e,t,n){t.Z=n.p+"assets/images/memgraph-katz-48335fadf6774a2c8f79c9dcc86c8a01.png"}}]);