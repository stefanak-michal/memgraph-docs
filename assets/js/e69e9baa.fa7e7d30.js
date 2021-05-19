(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9709],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),h=r,c=m["".concat(d,".").concat(h)]||m[h]||p[h]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5234:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},o={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"v1.3.0",source:"@site/lab/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/memgraph-lab/changelog",editUrl:"https://github.com/memgraph/docs/tree/master/lab/changelog.md",version:"current",sidebar_label:"Changelog",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog"},sidebar:"lab",previous:{title:"Style script reference guide",permalink:"/memgraph-lab/style-script/reference-guide"}},d=[{value:"v1.3.0",id:"v130",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements",children:[]},{value:"Bug Fixes and Other Changes",id:"bug-fixes-and-other-changes",children:[]}]},{value:"v1.2.0",id:"v120",children:[{value:"What&#39;s New",id:"whats-new",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]}]},{value:"v1.1.0",id:"v110",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements-1",children:[]},{value:"Bug Fixes and Other Changes",id:"bug-fixes-and-other-changes-1",children:[]}]},{value:"v1.0.0",id:"v100",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements-2",children:[]}]},{value:"v0.1.2",id:"v012",children:[{value:"Bug Fixes and Other Changes",id:"bug-fixes-and-other-changes-2",children:[]}]},{value:"v0.1.1",id:"v011",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements-3",children:[]}]}],u={toc:d};function s(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"v130"},"v1.3.0"),(0,i.kt)("h3",{id:"major-features-and-improvements"},"Major Features and Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added option to show predefined datasets with the ability to import them to Memgraph."),(0,i.kt)("li",{parentName:"ul"},"Added option to show sample query for every loaded predefined dataset."),(0,i.kt)("li",{parentName:"ul"},"Added import of custom Cypher file datasets (",(0,i.kt)("inlineCode",{parentName:"li"},"cypherl")," format)."),(0,i.kt)("li",{parentName:"ul"},"Added export of current database state to Cypher file (",(0,i.kt)("inlineCode",{parentName:"li"},"cypherl")," format)."),(0,i.kt)("li",{parentName:"ul"},"Added default node label in graph view if name property is missing."),(0,i.kt)("li",{parentName:"ul"},"Added default relationship type label in graph view for smaller graphs.")),(0,i.kt)("h3",{id:"bug-fixes-and-other-changes"},"Bug Fixes and Other Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed sidebar links in the browser Lab."),(0,i.kt)("li",{parentName:"ul"},"Fixed columns in favorite queries view."),(0,i.kt)("li",{parentName:"ul"},"Fixed showing large amounts of properties in a popup when viewing node details in the graph view."),(0,i.kt)("li",{parentName:"ul"},"Fixed the label in the popup when switching between edges and nodes in the graph view."),(0,i.kt)("li",{parentName:"ul"},"Fixed node count in the dashboard view."),(0,i.kt)("li",{parentName:"ul"},"Added descriptive and better error messages when connecting to Memgraph with encryption on/off."),(0,i.kt)("li",{parentName:"ul"},"Fixed the close button in a node popup in the graph view."),(0,i.kt)("li",{parentName:"ul"},"Fixed the spacing of the close button and relationship type in a relationship popup in the graph view."),(0,i.kt)("li",{parentName:"ul"},"Fixed storing physics and styles across multiple query runs."),(0,i.kt)("li",{parentName:"ul"},"Fixed initial positioning in graph view when running query in the data view."),(0,i.kt)("li",{parentName:"ul"},"Fixed graph view reset when a query on data view had no results to show."),(0,i.kt)("li",{parentName:"ul"},"Fixed map disappearing when running query multiple times in a row."),(0,i.kt)("li",{parentName:"ul"},"Fixed running multiple Lab instances of the application on Windows and Linux."),(0,i.kt)("li",{parentName:"ul"},"Fixed node size and spacing in graph view when showing smaller graphs."),(0,i.kt)("li",{parentName:"ul"},"Fixed transition state issues between graph view and data view.")),(0,i.kt)("h2",{id:"v120"},"v1.2.0"),(0,i.kt)("h3",{id:"whats-new"},"What's New"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ability to create custom graph styling for nodes and edges in graph view with graph style language (similar to CSS)."),(0,i.kt)("li",{parentName:"ul"},"Added ability to save and load custom graph styling."),(0,i.kt)("li",{parentName:"ul"},"Added ability to show map background for nodes with lat and lng numeric properties."),(0,i.kt)("li",{parentName:"ul"},"Added ability to change map background style."),(0,i.kt)("li",{parentName:"ul"},"Removed edge labels to be shown by default in graph view."),(0,i.kt)("li",{parentName:"ul"},"Fixed overall UI and UX."),(0,i.kt)("li",{parentName:"ul"},"Set encrypted connection to be turned off by default on login screen (Memgraph v1.2.0 comes with SSL off by default).")),(0,i.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ability to hide graph view if there are no node/edge data in response.")),(0,i.kt)("h2",{id:"v110"},"v1.1.0"),(0,i.kt)("h3",{id:"major-features-and-improvements-1"},"Major Features and Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable explain and profile view."),(0,i.kt)("li",{parentName:"ul"},"Memgraph v0.15.0 keywords support.")),(0,i.kt)("h3",{id:"bug-fixes-and-other-changes-1"},"Bug Fixes and Other Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix bug with a new line in parsing multi-command queries."),(0,i.kt)("li",{parentName:"ul"},"On empty data for graph redirect to data view.")),(0,i.kt)("h2",{id:"v100"},"v1.0.0"),(0,i.kt)("h3",{id:"major-features-and-improvements-2"},"Major Features and Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added unsecure connection option."),(0,i.kt)("li",{parentName:"ul"},"Improved UX of login screen."),(0,i.kt)("li",{parentName:"ul"},"Added basic tutorial that shows on the initial run."),(0,i.kt)("li",{parentName:"ul"},"Added text search of history and favorite queries."),(0,i.kt)("li",{parentName:"ul"},"Added storage statistics on overview screen."),(0,i.kt)("li",{parentName:"ul"},"Added debug view with query explain and profile capabilities."),(0,i.kt)("li",{parentName:"ul"},"Added graph schema (metagraph) generator."),(0,i.kt)("li",{parentName:"ul"},"Improved query data (table) view.")),(0,i.kt)("h2",{id:"v012"},"v0.1.2"),(0,i.kt)("h3",{id:"bug-fixes-and-other-changes-2"},"Bug Fixes and Other Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed app icon on MacOS."),(0,i.kt)("li",{parentName:"ul"},"Improved error handling on the initial connect screen. Handle availability\nand secure connection errors.")),(0,i.kt)("h2",{id:"v011"},"v0.1.1"),(0,i.kt)("h3",{id:"major-features-and-improvements-3"},"Major Features and Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added overview view."),(0,i.kt)("li",{parentName:"ul"},"Added query view (Monaco editor)."),(0,i.kt)("li",{parentName:"ul"},"Added graph, data and table data views."),(0,i.kt)("li",{parentName:"ul"},"Added JSON export."),(0,i.kt)("li",{parentName:"ul"},"Added electron builder packages for MacOS and Debian.")))}s.isMDXComponent=!0}}]);