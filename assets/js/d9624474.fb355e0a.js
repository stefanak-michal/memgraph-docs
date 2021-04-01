(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),l=(n(0),n(324)),o={id:"graph-analyzer",title:"Graph Analyzer query module",sidebar_label:"Graph Analyzer"},c={unversionedId:"reference-guide/networkx/graph-analyzer",id:"version-1.3.0/reference-guide/networkx/graph-analyzer",isDocsHomePage:!1,title:"Graph Analyzer query module",description:"This module offers insights about the stored graph or a subgraph.",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/networkx/graph-analyzer.md",slug:"/reference-guide/networkx/graph-analyzer",permalink:"/memgraph/1.3.0/reference-guide/networkx/graph-analyzer",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/networkx/graph-analyzer.md",version:"1.3.0",sidebar_label:"Graph Analyzer",sidebar:"version-1.3.0/memgraph",previous:{title:"NetworkX",permalink:"/memgraph/1.3.0/reference-guide/networkx"},next:{title:"NetworkX Algorithms",permalink:"/memgraph/1.3.0/reference-guide/networkx/nxalg"}},p=[{value:"<code>analyze(context, analyses)</code>",id:"analyzecontext-analyses",children:[{value:"Examples",id:"examples",children:[]}]},{value:"<code>analyze_subgraph(context, vertices, edges, analyses)</code>",id:"analyze_subgraphcontext-vertices-edges-analyses",children:[{value:"Examples",id:"examples-1",children:[]}]},{value:"<code>help()</code>",id:"help",children:[]}],b={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This module offers insights about the stored graph or a subgraph."),Object(l.b)("h2",{id:"analyzecontext-analyses"},Object(l.b)("inlineCode",{parentName:"h2"},"analyze(context, analyses)")),Object(l.b)("p",null,"Shows graph information."),Object(l.b)("p",null,"In case of multiple results, only the first 10 will be shown."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"ctx")," (",Object(l.b)("em",{parentName:"li"},"mgp.ProcCtx"),") \u2013 The context of the procedure being executed.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"analyses")," (",Object(l.b)("em",{parentName:"li"},"mgp.Nullable[List","[str]","]"),") \u2013 (default=None)\nA list of graph analyses to run.\nIf NULL, all available analyses are run.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns")),Object(l.b)("p",null,"Information about the graph."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return type")),Object(l.b)("p",null,"mgp.Record(name=str, value=str)"),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("p",null,"Return all information:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"CALL graph_analyzer.analyze() YIELD * ;\n")),Object(l.b)("p",null,"Call with parameter:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"CALL graph_analyzer.analyze([\u2018nodes\u2019, \u2018edges\u2019]) YIELD * ;\n")),Object(l.b)("h2",{id:"analyze_subgraphcontext-vertices-edges-analyses"},Object(l.b)("inlineCode",{parentName:"h2"},"analyze_subgraph(context, vertices, edges, analyses)")),Object(l.b)("p",null,"Shows subgraph information."),Object(l.b)("p",null,"In case of multiple results, only the first 10 will be shown."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"ctx")," (",Object(l.b)("em",{parentName:"li"},"mgp.ProcCtx"),") \u2013 The context of the procedure being executed.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"vertices")," (",Object(l.b)("em",{parentName:"li"},"mgp.List","[mgp.Vertex]"),") \u2013 List of vertices in the subgraph.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"edges")," (",Object(l.b)("em",{parentName:"li"},"mgp.List","[mgp.Edge]"),") \u2013 List of edges in the subgraph.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"analyses")," (",Object(l.b)("em",{parentName:"li"},"mgp.Nullable[List","[str]","]"),") \u2013 (default=None)\nA list of graph analyses to run.\nIf NULL, all available analyses are run.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns")),Object(l.b)("p",null,"Information about the subgraph."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Return type")),Object(l.b)("p",null,"mgp.Record(name=str, value=str)"),Object(l.b)("h3",{id:"examples-1"},"Examples"),Object(l.b)("p",null,"Return all information:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"MATCH (n)-[e]->(m) WITH\ncollect(n) AS nodes,\ncollect(e) AS edges\nCALL graph_analyzer.analyze_subgraph(nodes, edges) YIELD *\nRETURN name, value;\n")),Object(l.b)("p",null,"Call with parameter:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"MATCH (n)-[e]->(m) WITH\ncollect(n) AS nodes,\ncollect(e) AS edges\nCALL graph_analyzer.analyze_subgraph(nodes, edges, [\u2018nodes\u2019, \u2018edges\u2019])\nYIELD *\nRETURN name, value;\n")),Object(l.b)("h2",{id:"help"},Object(l.b)("inlineCode",{parentName:"h2"},"help()")),Object(l.b)("p",null,"Shows manual page for graph_analyzer."))}s.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),i=s(n),m=r,d=i["".concat(o,".").concat(m)]||i[m]||u[m]||l;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);