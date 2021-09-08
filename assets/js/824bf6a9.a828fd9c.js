"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30941],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,c(c({ref:n},l),{},{components:t})):r.createElement(g,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28181:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={id:"wcc",title:"Weakly Connected Components query module",sidebar_label:"Weakly Connected Components"},s=void 0,p={unversionedId:"reference-guide/networkx/wcc",id:"version-1.3.0/reference-guide/networkx/wcc",isDocsHomePage:!1,title:"Weakly Connected Components query module",description:"The wcc.py query module can run WCC analysis on a sub-graph of the whole graph.",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/networkx/wcc.md",sourceDirName:"reference-guide/networkx",slug:"/reference-guide/networkx/wcc",permalink:"/memgraph/1.3.0/reference-guide/networkx/wcc",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/networkx/wcc.md",tags:[],version:"1.3.0",frontMatter:{id:"wcc",title:"Weakly Connected Components query module",sidebar_label:"Weakly Connected Components"},sidebar:"version-1.3.0/memgraph",previous:{title:"NetworkX Algorithms",permalink:"/memgraph/1.3.0/reference-guide/networkx/nxalg"},next:{title:"Security (Enterprise)",permalink:"/memgraph/1.3.0/reference-guide/security"}},l=[{value:"<code>get_components(vertices, edges)</code>",id:"get_componentsvertices-edges",children:[{value:"Examples",id:"examples",children:[]}]}],u={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The wcc.py query module can run WCC analysis on a sub-graph of the whole graph."),(0,a.kt)("h2",{id:"get_componentsvertices-edges"},(0,a.kt)("inlineCode",{parentName:"h2"},"get_components(vertices, edges)")),(0,a.kt)("p",null,"This procedure finds weakly connected components of a given subgraph of a\ndirected graph."),(0,a.kt)("p",null,"The subgraph is defined by a list of vertices and a list of edges which are\npassed as arguments of the procedure."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vertices")," (",(0,a.kt)("em",{parentName:"li"},"mgp.List","[mgp.Vertex]"),") \u2013 A set of vertices of a subgraph containing all vertices provided in a\nlist of vertices along with all vertices that are endpoints of provided edges.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"edges")," (",(0,a.kt)("em",{parentName:"li"},"mgp.List","[mgp.Edge]"),") \u2013 A set of edges of a subgraph contains all edges from the list of provided edges.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,"The procedure returns 2 fields. The first, ",(0,a.kt)("inlineCode",{parentName:"p"},"n_components"),", is the number\nof weakly connected components of the subgraph. The second, ",(0,a.kt)("inlineCode",{parentName:"p"},"components"),",\nis a list of weakly connected components. Each component is given as a\nlist of ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertex")," objects from that component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return type")),(0,a.kt)("p",null,"mgp.Record(n_components=int, components=mgp.List[mgp.List","[mgp.Vertex]","])"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"For example, weakly connected components in a subgraph formed from all vertices labeled ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," and edges between such vertices can be obtained using the following openCypher query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MATCH (n:Person)-[e]->(m:Person)\nWITH collect(n) AS nodes, collect(e) AS edges\nCALL wcc.get_components(nodes, edges) YIELD *\nRETURN n_components, components;\n")))}m.isMDXComponent=!0}}]);