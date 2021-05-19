(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8901],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,h=p["".concat(u,".").concat(c)]||p[c]||s[c]||o;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3326:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={id:"query-modules",title:"Query modules",sidebar_label:"Query modules",slug:"/reference-guide/query-modules"},l={unversionedId:"reference-guide/query-modules/query-modules",id:"reference-guide/query-modules/query-modules",isDocsHomePage:!1,title:"Query modules",description:"Memgraph supports extending the query language with user-written procedures.",source:"@site/docs/reference-guide/query-modules/query-modules.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules",permalink:"/memgraph/next/reference-guide/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/query-modules/query-modules.md",version:"current",sidebar_label:"Query modules",frontMatter:{id:"query-modules",title:"Query modules",sidebar_label:"Query modules",slug:"/reference-guide/query-modules"},sidebar:"memgraph",previous:{title:"Making a backup",permalink:"/memgraph/next/reference-guide/backup"},next:{title:"Query modules C API",permalink:"/memgraph/next/reference-guide/query-modules/c-api"}},u=[{value:"Loading query modules",id:"loading-query-modules",children:[]},{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]},{value:"Implementing custom query modules",id:"implementing-custom-query-modules",children:[]},{value:"Query modules provided by Memgraph",id:"query-modules-provided-by-memgraph",children:[]}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup."),(0,o.kt)("h2",{id:"loading-query-modules"},"Loading query modules"),(0,o.kt)("p",null,"Upon startup, Memgraph will attempt to load the query modules form all ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default (",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),")\ndirectory."),(0,o.kt)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as\na command-line parameter (e.g. when using Docker)."),(0,o.kt)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),(0,o.kt)("p",null,"OpenCypher has a special syntax for calling procedures in loaded query\nmodules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) YIELD res1, res2, ...;\n")),(0,o.kt)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",(0,o.kt)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",(0,o.kt)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted."),(0,o.kt)("p",null,"Procedures may be called standalone as the above, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(node) YIELD result RETURN *;\n")),(0,o.kt)("p",null,"When we use ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," anything."),(0,o.kt)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(42) YIELD node AS result RETURN *;\n")),(0,o.kt)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),(0,o.kt)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",(0,o.kt)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD res1, res2, ...;\n")),(0,o.kt)("p",null,"The limit can either be specified to a specific value (either in ",(0,o.kt)("inlineCode",{parentName:"p"},"KB")," or in\n",(0,o.kt)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."),(0,o.kt)("h2",{id:"implementing-custom-query-modules"},"Implementing custom query modules"),(0,o.kt)("p",null,"Query modules can be implemented by either using the C API or Python API\nprovided by Memgraph."),(0,o.kt)("p",null,"Modules implemented using the C API need to be compiled to a shared library\n(",(0,o.kt)("inlineCode",{parentName:"p"},".so")," file), so they can be loaded when Memgraph starts.  The C API is well\ndocumented in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph/mg_procedure.h")," header and in the\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/next/reference-guide/query-modules/c-api"},"reference guide"),"."),(0,o.kt)("p",null,"Modules implemented using the Python API need to be written in Python version\n",(0,o.kt)("inlineCode",{parentName:"p"},"3.5.0")," and above. The Python API is well documented in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support/mgp.py")," file and in the\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/next/reference-guide/query-modules/python-api"},"reference guide"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"WARNING:")," If your programming language of choice throws exceptions, these\nexceptions must never leave the scope of your module! You should have a top\nlevel exception handler which returns with an error value and potentially logs\nthe error message. Exceptions which cross the module boundary will cause all\nsorts of unexpected issues."))),(0,o.kt)("p",null,"For a more detailed example on how to implement your own query modules, we\nsuggest you take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/next/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules")," guide."),(0,o.kt)("h2",{id:"query-modules-provided-by-memgraph"},"Query modules provided by Memgraph"),(0,o.kt)("p",null,"The following query modules have been implemented by the Memgraph\nteam. Note that some of them are only available in Memgraph's Enterprise\noffering."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg"),": Utility module that offers more insight into custom query modules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"louvain")," ","[Enterprise]",": Louvain algorithm for community detection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connectivity")," ","[Enterprise]",": Algorithms that analyse graph connectivity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nxalg")," : Wrapper functions providing the most common algorithms found in the\nNetworkX package. The users can extend the module with their own custom\nfunctions based on NetworkX algorithms."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"graph_analyzer"),": Module that offers more insights about the stored graph. To\nget a detailed list of provided functionalities within this module run\n",(0,o.kt)("inlineCode",{parentName:"li"},"CALL graph_analyzer.help() YIELD *;"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wcc"),": Module that offers analysis of weakly connected components.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," If you intend to implement your custom algorithms based on the NetworkX\npackage, please note that we provide the extra library ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_networkx.py")," module\ncontaining data structures that adapt the native graph for use with NetworkX\nalgorithms. It can be used to implement custom algorithms with the added\nbenefit of better memory usage."))),(0,o.kt)("p",null,"The utility module offers the following functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg.procedures() :: (name :: STRING, signature :: STRING)"),": Lists loaded\nprocedures and their signatures."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg.load(module_name :: STRING) :: ()"),": Loads or reloads the given module."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg.load_all() :: ()"),": Loads or reloads all modules.")),(0,o.kt)("p",null,"To get a detailed list of all procedures from all modules, run the following\nquery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CALL mg.procedures() YIELD *;\n")))}m.isMDXComponent=!0}}]);