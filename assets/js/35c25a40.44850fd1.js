"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78796],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91982:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},Highlight:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(26396),o=n(58215),s=["components"],u={id:"set-cover",title:"set_cover",sidebar_label:"set_cover"},p=void 0,c={unversionedId:"query-modules/python/set-cover",id:"query-modules/python/set-cover",title:"set_cover",description:"<span",source:"@site/mage/query-modules/python/set-cover.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/set-cover",permalink:"/docs/mage/query-modules/python/set-cover",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/set-cover.md",tags:[],version:"current",frontMatter:{id:"set-cover",title:"set_cover",sidebar_label:"set_cover"},sidebar:"mage",previous:{title:"pagerank_online",permalink:"/docs/mage/query-modules/cpp/pagerank-online"},next:{title:"tsp",permalink:"/docs/mage/query-modules/python/tsp"}},m=[{value:"Abstract",id:"abstract",children:[],level:2},{value:"Procedures",id:"procedures",children:[{value:"<code>cp_solve(element_vertexes, set_vertexes)</code>",id:"cp_solveelement_vertexes-set_vertexes",children:[{value:"Input",id:"input",children:[],level:4},{value:"Output",id:"output",children:[],level:4},{value:"Usage",id:"usage",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2},{value:"<code>greedy(context, element_vertexes, set_vertexes)</code>",id:"greedycontext-element_vertexes-set_vertexes",children:[{value:"Input",id:"input-1",children:[],level:4},{value:"Output",id:"output-1",children:[],level:4},{value:"Usage",id:"usage-1",children:[],level:4}],level:2}],d=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},v={toc:m,Highlight:d};function h(e){var t=e.components,u=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},v,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/set_cover.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-set_cover-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The Set Cover")," problem is one of the problems in graph theory that tries to solve the least possible set of sets that covers all elements inside those sets. Given a set of ",(0,l.kt)("em",{parentName:"p"},"n")," elements, and a collection of ",(0,l.kt)("em",{parentName:"p"},"m")," sets containing them, the algorithm tries to identify the ",(0,l.kt)("strong",{parentName:"p"},"smallest sub-collection")," of sets whose union equal to all the elements.\nIt is ",(0,l.kt)("em",{parentName:"p"},"NP-complete"),", however solvable with techniques such as constraint programming. The current algorithm uses ",(0,l.kt)("em",{parentName:"p"},"GEKKO")," optimizer as a constraint programming solver."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"module")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"undirected")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"cp_solveelement_vertexes-set_vertexes"},(0,l.kt)("inlineCode",{parentName:"h3"},"cp_solve(element_vertexes, set_vertexes)")),(0,l.kt)("h4",{id:"input"},"Input"),(0,l.kt)("p",null,"The input itself represents an ",(0,l.kt)("em",{parentName:"p"},"element-set")," pair with each row of the lists."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element_vertexes: List[Vertex]")," \u27a1 List of element nodes in pairs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set_vertexes: List[Vertex]")," \u27a1 List of set nodes in pairs")),(0,l.kt)("h4",{id:"output"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"containing_set")," \u27a1 minimal set of sets in which all the elements are contained")),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL set_cover.cp_solve([(:Point), (:Point)], [(:Set), (:Set)])\nYIELD containing_set;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:n(65961).Z})),(0,l.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (e:AnimalSpecies {name: 'Snake'});\nCREATE (e:AnimalSpecies {name: 'Bear'});\nCREATE (e:AnimalSpecies {name: 'Falcon'});\nCREATE (e:AnimalSpecies {name: 'Beaver'});\nCREATE (e:AnimalSpecies {name: 'Fox'});\n\nCREATE (s:NationalPark {name: 'Yosemite'});\nCREATE (s:NationalPark {name: 'Grand Canyon'});\nCREATE (s:NationalPark {name: 'Yellowstone'});\nCREATE (s:NationalPark {name: 'Glacier'});\nCREATE (s:NationalPark {name: 'Everglades'});\n\nMATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Fox'}), (s:NationalPark {name: 'Yellowstone'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yellowstone'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Glacier'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Glacier'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Everglades'})\nCREATE (e)-[:LIVES_IN]->(s);\n\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (e:AnimalSpecies)-[l:LIVES_IN]-(s:NationalPark)\nWITH collect(e) AS animal_list, collect(s) AS park_list\nCALL set_cover.cp_solve(animal_list, park_list)\nYIELD containing_set\nWITH containing_set AS national_park\nMATCH (animal:AnimalSpecies)-[l:LIVES_IN]->(national_park)\nRETURN animal, l, national_park;\n"))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("img",{src:n(83324).Z}))),(0,l.kt)("h2",{id:"greedycontext-element_vertexes-set_vertexes"},(0,l.kt)("inlineCode",{parentName:"h2"},"greedy(context, element_vertexes, set_vertexes)")),(0,l.kt)("p",null,"Not bad, not terrible."),(0,l.kt)("h4",{id:"input-1"},"Input"),(0,l.kt)("p",null,"The input itself represents an ",(0,l.kt)("em",{parentName:"p"},"element-set")," pair with each row of the lists."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element_vertexes: List[Vertex]")," \u27a1 List of element nodes in pairs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set_vertexes: List[Vertex]")," \u27a1 List of set nodes in pairs")),(0,l.kt)("h4",{id:"output-1"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"containing_set")," \u27a1 minimal set of sets in which all the elements are contained")),(0,l.kt)("h4",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL set_cover.greedy([(:Point), (:Point)], [(:Set), (:Set)])\nYIELD containing_set;\n")))}h.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(63616),u=n(86010),p="tabItem_1uMI";function c(e){var t,n,l,i=e.lazy,c=e.block,m=e.defaultValue,d=e.values,v=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),y=N.tabGroupChoices,E=N.setTabGroupChoices,T=(0,r.useState)(b),_=T[0],x=T[1],A=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=y[v];null!=S&&S!==_&&g.some((function(e){return e.value===S}))&&x(S)}var I=function(e){var t=e.currentTarget,n=A.indexOf(t),a=g[n].value;a!==_&&(C(t),x(a),null!=v&&E(v,a))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;n=A[r]||A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},h)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return A.push(e)},onKeyDown:w,onFocus:I,onClick:I},l,{className:(0,u.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},65961:function(e,t,n){t.Z=n.p+"assets/images/set-cover-1-28a31b4a1d04e75504177518fadeaa45.png"},83324:function(e,t,n){t.Z=n.p+"assets/images/set-cover-2-5c72e2dbe4826678e306bb115560e1e4.png"}}]);