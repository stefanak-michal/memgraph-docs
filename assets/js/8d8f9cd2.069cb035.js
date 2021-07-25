(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18867],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4604:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},Highlight:function(){return m},default:function(){return f}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=n(55064),i=n(58215),c=["components"],d={id:"weakly-connected-components",title:"weakly_connected_components",sidebar_label:"weakly_connected_components"},u=void 0,s={unversionedId:"query-modules/cpp/weakly-connected-components",id:"query-modules/cpp/weakly-connected-components",isDocsHomePage:!1,title:"weakly_connected_components",description:"<span",source:"@site/mage/query-modules/cpp/weakly_connected_components.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/weakly-connected-components",permalink:"/mage/query-modules/cpp/weakly-connected-components",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/weakly_connected_components.md",version:"current",frontMatter:{id:"weakly-connected-components",title:"weakly_connected_components",sidebar_label:"weakly_connected_components"},sidebar:"mage",previous:{title:"vrp",permalink:"/mage/query-modules/python/vrp"},next:{title:"Contributing",permalink:"/mage/contributing"}},p=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>get()</code>",id:"get",children:[]}]},{value:"Example",id:"example",children:[]}],m=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:p,Highlight:m};function f(e){var t=e.components,d=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/connectivity_module/connectivity_module.cpp"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-weakly_connected_components-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"The first analysis that is most often run on a graph is usually a search for disconnected components.\nThe algorithm implemented within this module does exactly that, it searches for different components of\nthe graph. Within components, nodes have connections toward each other, while between components there\nis no edge that connects nodes from separate components."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Trait"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Module type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"algorithm")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Implementation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"C++")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Graph direction")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"undirected")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Edge weights")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"unweighted")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Parallelism")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"sequential")))))),(0,o.kt)("h2",{id:"procedures"},"Procedures"),(0,o.kt)("h3",{id:"get"},(0,o.kt)("inlineCode",{parentName:"h3"},"get()")),(0,o.kt)("h4",{id:"output"},"Output:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Vertex object with all properties which is going to be related to the component ID it belongs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"component_id")," \u27a1 Component ID for each node in the graph. Components are zero-indexed and there is no rule of how they will be appointed to node. The only guarantee is that divided components will have distinct component IDs.")),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL weakly_connected_components.get()\nYIELD node, component_id;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,o.kt)("img",{src:n(53855).Z})),(0,o.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\n"))),(0,o.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL weakly_connected_components.get()\nYIELD node, component_id;\n"))),(0,o.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+\n| node            | component_id    |\n+-----------------+-----------------+\n| (:Node {id: 5}) | 1               |\n| (:Node {id: 4}) | 1               |\n| (:Node {id: 3}) | 1               |\n| (:Node {id: 2}) | 0               |\n| (:Node {id: 0}) | 0               |\n| (:Node {id: 1}) | 0               |\n+-----------------+-----------------+\n")))))}f.isMDXComponent=!0},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var d=37,u=39;var s=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,s=e.values,p=e.groupId,m=e.className,g=o(),f=g.tabGroupChoices,h=g.setTabGroupChoices,y=(0,r.useState)(a),b=y[0],k=y[1],v=r.Children.toArray(e.children),N=[];if(null!=p){var E=f[p];null!=E&&E!==b&&s.some((function(e){return e.value===E}))&&k(E)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),r=s[n].value;k(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,o,l,i,d;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,d=l.innerWidth,n>=0&&o<=d&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case d:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},53855:function(e,t,n){"use strict";t.Z=n.p+"assets/images/weakly-connected-components-1-179c7651963fee64816cc1689a12dff4.png"}}]);