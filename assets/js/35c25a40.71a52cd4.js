(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78796],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19801:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return p},Highlight:function(){return d},default:function(){return g}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=n(55064),o=n(58215),s=["components"],c={id:"set-cover",title:"set_cover",sidebar_label:"set_cover"},m=void 0,u={unversionedId:"query-modules/python/set-cover",id:"query-modules/python/set-cover",isDocsHomePage:!1,title:"set_cover",description:"<span",source:"@site/mage/query-modules/python/set-cover.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/set-cover",permalink:"/mage/query-modules/python/set-cover",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/set-cover.md",version:"current",frontMatter:{id:"set-cover",title:"set_cover",sidebar_label:"set_cover"},sidebar:"mage",previous:{title:"pagerank",permalink:"/mage/query-modules/python/pagerank"},next:{title:"tsp",permalink:"/mage/query-modules/python/tsp"}},p=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>cp_solve(element_vertexes, set_vertexes)</code>",id:"cp_solveelement_vertexes-set_vertexes",children:[]}]},{value:"Example",id:"example",children:[]},{value:"<code>greedy(context, element_vertexes, set_vertexes)</code>",id:"greedycontext-element_vertexes-set_vertexes",children:[]}],d=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},k={toc:p,Highlight:d};function g(e){var t=e.components,c=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/set_cover.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-set_cover-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The Set Cover")," problem is one of the problems in graph theory that tries to solve the least possible set of sets that covers all elements inside those sets. Given a set of ",(0,l.kt)("em",{parentName:"p"},"n")," elements, and a collection of ",(0,l.kt)("em",{parentName:"p"},"m")," sets containing them, the algorithm tries to identify the ",(0,l.kt)("strong",{parentName:"p"},"smallest sub-collection")," of sets whose union equal to all the elements.\nIt is ",(0,l.kt)("em",{parentName:"p"},"NP-complete"),", however solvable with techniques such as constraint programming. The current algorithm uses ",(0,l.kt)("em",{parentName:"p"},"GEKKO")," optimizer as a constraint programming solver."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"module")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"undirected")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"cp_solveelement_vertexes-set_vertexes"},(0,l.kt)("inlineCode",{parentName:"h3"},"cp_solve(element_vertexes, set_vertexes)")),(0,l.kt)("h4",{id:"input"},"Input"),(0,l.kt)("p",null,"The input itself represents an ",(0,l.kt)("em",{parentName:"p"},"element-set")," pair with each row of the lists."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element_vertexes: List[Vertex]")," \u27a1 List of element nodes in pairs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set_vertexes: List[Vertex]")," \u27a1 List of set nodes in pairs")),(0,l.kt)("h4",{id:"output"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"containing_set")," \u27a1 minimal set of sets in which all the elements are contained")),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL set_cover.cp_solve([(:Point), (:Point)], [(:Set), (:Set)])\nYIELD containing_set;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:n(65961).Z})),(0,l.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (e:AnimalSpecies {name: 'Snake'});\nCREATE (e:AnimalSpecies {name: 'Bear'});\nCREATE (e:AnimalSpecies {name: 'Falcon'});\nCREATE (e:AnimalSpecies {name: 'Beaver'});\nCREATE (e:AnimalSpecies {name: 'Fox'});\n\nCREATE (s:NationalPark {name: 'Yosemite'});\nCREATE (s:NationalPark {name: 'Grand Canyon'});\nCREATE (s:NationalPark {name: 'Yellowstone'});\nCREATE (s:NationalPark {name: 'Glacier'});\nCREATE (s:NationalPark {name: 'Everglades'});\n\nMATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Fox'}), (s:NationalPark {name: 'Yellowstone'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yellowstone'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Glacier'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Glacier'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Everglades'})\nCREATE (e)-[:LIVES_IN]->(s);\n\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (e:AnimalSpecies)-[l:LIVES_IN]-(s:NationalPark)\nWITH collect(e) AS animal_list, collect(s) AS park_list\nCALL set_cover.cp_solve(animal_list, park_list)\nYIELD containing_set\nWITH containing_set AS national_park\nMATCH (animal:AnimalSpecies)-[l:LIVES_IN]->(national_park)\nRETURN animal, l, national_park;\n"))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("img",{src:n(83324).Z}))),(0,l.kt)("h2",{id:"greedycontext-element_vertexes-set_vertexes"},(0,l.kt)("inlineCode",{parentName:"h2"},"greedy(context, element_vertexes, set_vertexes)")),(0,l.kt)("p",null,"Not bad, not terrible."),(0,l.kt)("h4",{id:"input-1"},"Input"),(0,l.kt)("p",null,"The input itself represents an ",(0,l.kt)("em",{parentName:"p"},"element-set")," pair with each row of the lists."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element_vertexes: List[Vertex]")," \u27a1 List of element nodes in pairs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set_vertexes: List[Vertex]")," \u27a1 List of set nodes in pairs")),(0,l.kt)("h4",{id:"output-1"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"containing_set")," \u27a1 minimal set of sets in which all the elements are contained")),(0,l.kt)("h4",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL set_cover.greedy([(:Point), (:Point)], [(:Set), (:Set)])\nYIELD containing_set;\n")))}g.isMDXComponent=!0},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,m=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,p=e.groupId,d=e.className,k=l(),g=k.tabGroupChoices,v=k.setTabGroupChoices,h=(0,a.useState)(r),f=h[0],y=h[1],N=a.Children.toArray(e.children),b=[];if(null!=p){var E=g[p];null!=E&&E!==f&&u.some((function(e){return e.value===E}))&&y(E)}var _=function(e){var t=e.currentTarget,n=b.indexOf(t),a=u[n].value;y(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,l,i,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,c=i.innerWidth,n>=0&&l<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case m:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case c:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:T,onFocus:_,onClick:_},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},65961:function(e,t,n){"use strict";t.Z=n.p+"assets/images/set-cover-1-28a31b4a1d04e75504177518fadeaa45.png"},83324:function(e,t,n){"use strict";t.Z=n.p+"assets/images/set-cover-2-5c72e2dbe4826678e306bb115560e1e4.png"}}]);