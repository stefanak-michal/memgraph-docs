"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12948:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},Highlight:function(){return m},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(26396),o=n(58215),u=["components"],s={id:"distance-calculator",title:"distance_calculator",sidebar_label:"distance_calculator"},c=void 0,d={unversionedId:"query-modules/python/distance-calculator",id:"query-modules/python/distance-calculator",title:"distance_calculator",description:"<span",source:"@site/mage/query-modules/python/distance-calculator.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/distance-calculator",permalink:"/docs/mage/query-modules/python/distance-calculator",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/distance-calculator.md",tags:[],version:"current",frontMatter:{id:"distance-calculator",title:"distance_calculator",sidebar_label:"distance_calculator"},sidebar:"mage",previous:{title:"cycles",permalink:"/docs/mage/query-modules/cpp/cycles"},next:{title:"graph_analyzer",permalink:"/docs/mage/query-modules/python/graph-analyzer"}},p=[{value:"Abstract",id:"abstract",children:[],level:2},{value:"Procedures",id:"procedures",children:[{value:"<code>single(start, end, metrics)</code>",id:"singlestart-end-metrics",children:[{value:"Input:",id:"input",children:[],level:4},{value:"Output:",id:"output",children:[],level:4},{value:"Usage:",id:"usage",children:[],level:4}],level:3},{value:"<code>multiple(start_points, end_points, metrics)</code>",id:"multiplestart_points-end_points-metrics",children:[{value:"Input:",id:"input-1",children:[],level:4},{value:"Output:",id:"output-1",children:[],level:4},{value:"Usage:",id:"usage-1",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],m=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:p,Highlight:m};function g(e){var t=e.components,s=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/distance_calculator.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-distance_calculator-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The distance calculator is a module for calculating distance between two geographic locations. It measures the distance along the surface of the earth. Formulae takes into consideration the radius of the earth. For this algorithm, it is necessary to define an object that has longitude and latitude properties like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"module")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"undirected")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"singlestart-end-metrics"},(0,l.kt)("inlineCode",{parentName:"h3"},"single(start, end, metrics)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start: Vertex")," \u27a1 Starting point to measure distance. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end: Vertex")," \u27a1 Ending point to measure distance. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics: str"),' \u27a1 Can be either "m" or "km". These stand for meters and kilometers respectively.')),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance: double")," \u27a1 The final result obtained by calculating distance (in 'm' or 'km') between the 2 points that each have its latitude and longitude properties.")),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Location), (m:Location)\nCALL distance_calculator.single(m, n, 'km')\nYIELD distance\nRETURN distance;\n")),(0,l.kt)("h3",{id:"multiplestart_points-end_points-metrics"},(0,l.kt)("inlineCode",{parentName:"h3"},"multiple(start_points, end_points, metrics)")),(0,l.kt)("h4",{id:"input-1"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start_points: List[Vertex]")," \u27a1 Starting points to measure distance collected in a list. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties. Must be of the same size as ",(0,l.kt)("em",{parentName:"li"},"end_points"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end_points: List[Vertex]")," \u27a1 Ending points to measure distance collected in a list. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties. Must be of the same size as ",(0,l.kt)("em",{parentName:"li"},"start_points"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics: str"),' \u27a1 Can be either "m" or "km". These stand for metres and kilometres respectively.')),(0,l.kt)("h4",{id:"output-1"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance: List[double]")," \u27a1 The final result obtained by calculating distance (in meters) between the 2 points who each have its latitude and longitude.")),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n), (m)\nWITH COLLECT(n) AS location_set1, COLLECT(m) AS location_set2\nCALL distance_calculator.multiple(location_set1, location_set2, 'km') YIELD distances\nRETURN distances;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:n(91369).Z})),(0,l.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (location:Location {name: 'Zagreb', lat: 45.8150, lng: 15.9819});\nCREATE (location:Location {name: 'Zadar', lat: 44.1194, lng: 15.2314});\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {name: 'Zagreb'}), (m {name: 'Zadar'})\nCALL distance_calculator.single(n, m, 'km') YIELD distance\nRETURN distance;\n"))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+----------+\n| distance |\n+----------+\n| 197.568  |\n+----------+\n")))))}g.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(63616),s=n(86010),c="tabItem_1uMI";function d(e){var t,n,l,i=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),N=y.tabGroupChoices,T=y.setTabGroupChoices,E=(0,r.useState)(b),x=E[0],C=E[1],w=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=N[h];null!=_&&_!==x&&f.some((function(e){return e.value===_}))&&C(_)}var I=function(e){var t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==x&&(O(t),C(a),null!=h&&T(h,a))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},g)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return w.push(e)},onKeyDown:L,onFocus:I,onClick:I},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},91369:function(e,t,n){t.Z=n.p+"assets/images/distance-calculator-1-fb031216949e92c44ed88927ae1b9f6d.png"}}]);