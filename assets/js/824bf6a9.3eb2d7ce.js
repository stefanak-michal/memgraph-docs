(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{204:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),c=(t(0),t(324)),a={id:"wcc",title:"Weakly Connected Components query module",sidebar_label:"Weakly Connected Components"},i={unversionedId:"reference-guide/networkx/wcc",id:"version-1.3.0/reference-guide/networkx/wcc",isDocsHomePage:!1,title:"Weakly Connected Components query module",description:"The wcc.py query module can run WCC analysis on a sub-graph of the whole graph.",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/networkx/wcc.md",slug:"/reference-guide/networkx/wcc",permalink:"/memgraph/1.3.0/reference-guide/networkx/wcc",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/networkx/wcc.md",version:"1.3.0",sidebar_label:"Weakly Connected Components",sidebar:"version-1.3.0/memgraph",previous:{title:"NetworkX Algorithms",permalink:"/memgraph/1.3.0/reference-guide/networkx/nxalg"},next:{title:"Security (Enterprise)",permalink:"/memgraph/1.3.0/reference-guide/security"}},s=[{value:"<code>get_components(vertices, edges)</code>",id:"get_componentsvertices-edges",children:[{value:"Examples",id:"examples",children:[]}]}],p={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The wcc.py query module can run WCC analysis on a sub-graph of the whole graph."),Object(c.b)("h2",{id:"get_componentsvertices-edges"},Object(c.b)("inlineCode",{parentName:"h2"},"get_components(vertices, edges)")),Object(c.b)("p",null,"This procedure finds weakly connected components of a given subgraph of a\ndirected graph."),Object(c.b)("p",null,"The subgraph is defined by a list of vertices and a list of edges which are\npassed as arguments of the procedure."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"vertices")," (",Object(c.b)("em",{parentName:"li"},"mgp.List","[mgp.Vertex]"),") \u2013 A set of vertices of a subgraph containing all vertices provided in a\nlist of vertices along with all vertices that are endpoints of provided edges.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"edges")," (",Object(c.b)("em",{parentName:"li"},"mgp.List","[mgp.Edge]"),") \u2013 A set of edges of a subgraph contains all edges from the list of provided edges.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns")),Object(c.b)("p",null,"The procedure returns 2 fields. The first, ",Object(c.b)("inlineCode",{parentName:"p"},"n_components"),", is the number\nof weakly connected components of the subgraph. The second, ",Object(c.b)("inlineCode",{parentName:"p"},"components"),",\nis a list of weakly connected components. Each component is given as a\nlist of ",Object(c.b)("inlineCode",{parentName:"p"},"mgp.Vertex")," objects from that component."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Return type")),Object(c.b)("p",null,"mgp.Record(n_components=int, components=mgp.List[mgp.List","[mgp.Vertex]","])"),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("p",null,"For example, weakly connected components in a subgraph formed from all vertices labeled ",Object(c.b)("inlineCode",{parentName:"p"},"Person")," and edges between such vertices can be obtained using the following openCypher query:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"MATCH (n:Person)-[e]->(m:Person)\nWITH collect(n) AS nodes, collect(e) AS edges\nCALL wcc.get_components(nodes, edges) YIELD *\nRETURN n_components, components;\n")))}l.isMDXComponent=!0},324:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||c;return t?o.a.createElement(b,i(i({ref:n},p),{},{components:t})):o.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);