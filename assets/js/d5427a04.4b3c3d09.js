"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47097],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56445:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return g},assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(9877),i=n(58215),u=["components"],p={id:"vrp",title:"vrp",sidebar_label:"vrp"},c=void 0,s={unversionedId:"query-modules/python/vrp",id:"query-modules/python/vrp",title:"vrp",description:"<span",source:"@site/mage/query-modules/python/vrp.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/vrp",permalink:"/docs/mage/query-modules/python/vrp",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/vrp.md",tags:[],version:"current",frontMatter:{id:"vrp",title:"vrp",sidebar_label:"vrp"},sidebar:"mage",previous:{title:"uuid_generator",permalink:"/docs/mage/query-modules/cpp/uuid-generator"},next:{title:"weakly_connected_components",permalink:"/docs/mage/query-modules/cpp/weakly-connected-components"}},d={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>route(depot_node, number_of_vehicles)</code>",id:"routedepot_node-number_of_vehicles",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],g=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},v={toc:m,Highlight:g};function h(e){var t=e.components,p=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/vrp.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-vrp-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"VRP or ",(0,l.kt)("strong",{parentName:"p"},"Vehicle Routing problem")," is a generalization of the ",(0,l.kt)("em",{parentName:"p"},"Travelling Salesman Problem"),". The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, called a depot, while using a fleet of vehicles. Each vehicle does not need to be at every location, it is enough that every node is visited by at least one vehicle. The problem is ",(0,l.kt)("em",{parentName:"p"},"NP-hard")," in optimization, and therefore methods such as constraint programming, approximations or heuristics are a good approach for solving. The current implementation of VRP includes constraint programming with ",(0,l.kt)("em",{parentName:"p"},"GEKKO")," solver which works with 1 depot and an arbitrary number of vehicles. The algorithm uses the distance calculator to determine the distance between driving points, and works only with geographical locations, meaning each node needs to have its ",(0,l.kt)("em",{parentName:"p"},"lat")," and ",(0,l.kt)("em",{parentName:"p"},"lng")," property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"module")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"undirected")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"routedepot_node-number_of_vehicles"},(0,l.kt)("inlineCode",{parentName:"h3"},"route(depot_node, number_of_vehicles)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"depot_node: Vertex")," \u27a1 Depot node with its corresponding ",(0,l.kt)("em",{parentName:"li"},"lat")," and ",(0,l.kt)("em",{parentName:"li"},"lng")," coordinate properties."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number_of_vehicles: int = 1")," \u27a1 Designates how many vehicles are used. Set to 1 by default")),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from_vertex: Vertex")," \u27a1 Beginning point of one part of the route"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"to_vertex: Vertex")," \u27a1 Ending point of one part of the route"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vehicle_id: int")," \u27a1 Vehicle ID that will drive the corresponding path (",(0,l.kt)("em",{parentName:"li"},"from_vertex"),")->(",(0,l.kt)("em",{parentName:"li"},"to_vertex"),")\nAll pairs of the route represent the full route with all vehicles used.")),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Graph results",value:"result-graph"},{label:"Step 5: Running command for 2 vehicles",value:"run_2_vehicles"},{label:"Step 6: Results",value:"result_2_vehicles"},{label:"Step 7: Cypher results",value:"result-cypher"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:n(88613).Z})),(0,l.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Location {lat:45.81397494712325, lng:15.977107314009686});\nCREATE (:Location {lat:45.809786288641924, lng:15.969953021143715});\nCREATE (:Location {lat:45.801513169575195, lng:15.979868413090431});\nCREATE (:Location {lat:45.80062044456095, lng:15.971453134506456});\nCREATE (:Location {lat:45.80443233736649, lng:15.993114737391515});\nCREATE (:Location {lat:45.77165828306254, lng:15.943635971437576});\nCREATE (:Location {lat:45.785275159565806, lng:15.947448603375522});\nCREATE (:Location {lat:45.780581597098646, lng:15.935278141510148});\nCREATE (:Location {lat:45.82208303601525, lng:16.019498047049822});\nCREATE (:Depot {lat:45.7872369074369, lng:15.984469921454693});\n")),(0,l.kt)("p",null,"Note: all vertices in graph need to be either Location or Depot.")),(0,l.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id\nCREATE (from_vertex)-[r:Route]->(to_vertex);\n\nMATCH (n)-[r:Route]->(m)\nRETURN n, r, m;\n"))),(0,l.kt)(i.Z,{value:"result-graph",mdxType:"TabItem"},(0,l.kt)("img",{src:n(89954).Z})),(0,l.kt)(i.Z,{value:"run_2_vehicles",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot, 2)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id\nCREATE (from_vertex)-[r:Route]->(to_vertex);\n\nMATCH (n)-[r:Route]->(m)\nRETURN n, r, m;\n"))),(0,l.kt)(i.Z,{value:"result_2_vehicles",mdxType:"TabItem"},(0,l.kt)("img",{src:n(96597).Z})),(0,l.kt)(i.Z,{value:"result-cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------------------------------+------------------------------------------+------------------------------------------+\n| from_vertex                              | to_vertex                                | vehicle_id                               |\n+------------------------------------------+------------------------------------------+------------------------------------------+\n| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.7853, lng: 15.9474}) | 1                                        |\n| (:Location {lat: 45.7853, lng: 15.9474}) | (:Location {lat: 45.7806, lng: 15.9353}) | 1                                        |\n| (:Location {lat: 45.7806, lng: 15.9353}) | (:Location {lat: 45.7717, lng: 15.9436}) | 1                                        |\n| (:Location {lat: 45.7717, lng: 15.9436}) | (:Location {lat: 45.814, lng: 15.9771})  | 1                                        |\n| (:Location {lat: 45.814, lng: 15.9771})  | (:Location {lat: 45.8044, lng: 15.9931}) | 1                                        |\n| (:Location {lat: 45.8044, lng: 15.9931}) | (:Location {lat: 45.8015, lng: 15.9799}) | 1                                        |\n| (:Location {lat: 45.8015, lng: 15.9799}) | (:Location {lat: 45.8006, lng: 15.9715}) | 1                                        |\n| (:Location {lat: 45.8006, lng: 15.9715}) | (:Location {lat: 45.8098, lng: 15.97})   | 1                                        |\n| (:Location {lat: 45.8098, lng: 15.97})   | (:Depot {lat: 45.7872, lng: 15.9845})    | 1                                        |\n| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.8221, lng: 16.0195}) | 2                                        |\n| (:Location {lat: 45.8221, lng: 16.0195}) | (:Depot {lat: 45.7872, lng: 15.9845})    | 2                                        |\n+------------------------------------------+------------------------------------------+------------------------------------------+\n")))))}h.isMDXComponent=!0},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),l=n(72389),o=n(63725),i=n(86010),u="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,c=e.block,s=e.defaultValue,d=e.values,m=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===s?s:null!=(t=null!=s?s:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,r.useState)(b),E=T[0],x=T[1],_=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var L=y[m];null!=L&&L!==E&&h.some((function(e){return e.value===L}))&&x(L)}var C=function(e){var t=e.currentTarget,n=_.indexOf(t),a=h[n].value;a!==E&&(w(t),x(a),null!=m&&N(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return _.push(e)},onKeyDown:O,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},88613:function(e,t,n){t.Z=n.p+"assets/images/vrp-1-3f98d96850b93a413b42f534a7e706b7.png"},89954:function(e,t,n){t.Z=n.p+"assets/images/vrp-2-72a91886dacc643a0e448b6f8a7d288e.png"},96597:function(e,t,n){t.Z=n.p+"assets/images/vrp-3-7701afea0b2df19ace12d78f429d7ef9.png"}}]);