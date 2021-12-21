"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78359],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return c}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),d=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,h=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return r?t.createElement(h,o(o({ref:n},p),{},{components:r})):t.createElement(h,o({ref:n},p))}));function c(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67011:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var t=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"load-call-query-modules",title:"Load and call custom query modules",sidebar_label:"Load and call custom query modules"},u=void 0,d={unversionedId:"database-functionalities/query-modules/load-call-query-modules",id:"version-1.4.0/database-functionalities/query-modules/load-call-query-modules",title:"Load and call custom query modules",description:"Memgraph supports extending the query language with user-written procedures.",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/query-modules/load-call-query-modules.md",sourceDirName:"database-functionalities/query-modules",slug:"/database-functionalities/query-modules/load-call-query-modules",permalink:"/docs/memgraph/1.4.0/database-functionalities/query-modules/load-call-query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/query-modules/load-call-query-modules.md",tags:[],version:"1.4.0",frontMatter:{id:"load-call-query-modules",title:"Load and call custom query modules",sidebar_label:"Load and call custom query modules"},sidebar:"version-1.4.0/memgraph",previous:{title:"Built-in query modules",permalink:"/docs/memgraph/1.4.0/database-functionalities/query-modules/built-in-query-modules"},next:{title:"Implement custom query modules",permalink:"/docs/memgraph/1.4.0/database-functionalities/query-modules/implement-query-modules"}},p=[{value:"Loading query modules on startup",id:"loading-query-modules-on-startup",children:[],level:2},{value:"Utility query module",id:"utility-query-module",children:[],level:2},{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[],level:2},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[],level:2}],s={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup."),(0,l.kt)("h2",{id:"loading-query-modules-on-startup"},"Loading query modules on startup"),(0,l.kt)("p",null,"The Memgraph installation comes with the ",(0,l.kt)("inlineCode",{parentName:"p"},"example.so")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"py_example.py")," query\nmodules which are located in ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory.\nAssuming the standard installation on Debian, you would run Memgraph with the\nfollowing command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"systemctl start memgraph\n")),(0,l.kt)("p",null,"When using Docker, the equivalent would be the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph\n")),(0,l.kt)("p",null,"Memgraph will now attempt to load the query modules from all ",(0,l.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"*.py"),"\nfiles it finds in the default (",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),") directory.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"*.so")," modules are written using the C API and the ",(0,l.kt)("inlineCode",{parentName:"p"},"*.py")," modules are\nwritten using the Python API. Each file corresponds to one query module. Names\nof these files will be mapped to query module names.  So in our case, we have\nan ",(0,l.kt)("inlineCode",{parentName:"p"},"example.so")," which will be mapped to ",(0,l.kt)("inlineCode",{parentName:"p"},"example")," module and a ",(0,l.kt)("inlineCode",{parentName:"p"},"py_example.py"),"\nwhich will be mapped to ",(0,l.kt)("inlineCode",{parentName:"p"},"py_example")," module in the query language."),(0,l.kt)("p",null,"Each query module can define multiple procedures. Both of our examples define\na single procedure creatively named ",(0,l.kt)("inlineCode",{parentName:"p"},"procedure"),"."),(0,l.kt)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",(0,l.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as\na command-line parameter (e.g. when using Docker)."),(0,l.kt)("h2",{id:"utility-query-module"},"Utility query module"),(0,l.kt)("p",null,"Query procedures that allow the users to gain more insight into other query\nmodules and their procedures are written under our utility ",(0,l.kt)("inlineCode",{parentName:"p"},"mg")," query module.\nThis module offers three procedures with the following signatures:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mg.procedures() :: (name :: STRING, signature :: STRING)"),": Lists loaded\nprocedures and their signatures."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mg.load(module_name :: STRING) :: ()"),": Loads or reloads the given module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mg.load_all() :: ()"),": Loads or reloads all modules.")),(0,l.kt)("p",null,"For example, invoking ",(0,l.kt)("inlineCode",{parentName:"p"},"mg.procedures()")," from openCypher like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")),(0,l.kt)("p",null,"might yield the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+---------------------+-------------------------------------------------------------------+\n| name                | signature                                                         |\n+---------------------+-------------------------------------------------------------------+\n| ...                 | ...                                                               |\n| graph_analyzer.help | graph_analyzer.help() :: (name :: STRING, value :: STRING)        |\n| mg.load             | mg.load(module_name :: STRING) :: ()                              |\n| mg.load_all         | mg.load_all() :: ()                                               |\n| mg.procedures       | mg.procedures() :: (name :: STRING, signature :: STRING)          |\n| ...                 | ...                                                               |\n+---------------------+-------------------------------------------------------------------+\n")),(0,l.kt)("p",null,"In this case, we can see that Memgraph has successfully loaded all the procedures implemented\nin query modules including the utility query procedures."),(0,l.kt)("p",null,"To load a module (named e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"hello"),") that wasn't loaded on startup (perhaps\nbecause it was added to Memgraph's query modules directory afterwards), we\ncan simply invoke:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),(0,l.kt)("p",null,"If we wish to reload an existing module, say the ",(0,l.kt)("inlineCode",{parentName:"p"},"graph_analyzer")," module above, we\nagain use the same procedure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("graph_analyzer");\n')),(0,l.kt)("p",null,"Lastly, if we wish to reload all existing modules and load any newly added ones\nwe can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,l.kt)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),(0,l.kt)("p",null,"OpenCypher has a special syntax for calling procedures in loaded query\nmodules. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL example.procedure("string-argument") YIELD args, result;\n')),(0,l.kt)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",(0,l.kt)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",(0,l.kt)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted. The\nprocedure will still run in such a case, but the record fields will not be\nstored in variables. In the above example, we assume that ",(0,l.kt)("inlineCode",{parentName:"p"},"example.procedure"),"\nwill produce a record with 2 fields, ",(0,l.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),". Trying to ",(0,l.kt)("inlineCode",{parentName:"p"},"YIELD"),"\nfields that are not part of the produced record will result in an error."),(0,l.kt)("p",null,"Procedures may be called standalone as in the above example, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL example.procedure(node) YIELD result RETURN *;\n")),(0,l.kt)("p",null,"Unfortunately, when we use ",(0,l.kt)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",(0,l.kt)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," anything."),(0,l.kt)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (result) CALL example.procedure(42) YIELD result AS procedure_result RETURN *;\n")),(0,l.kt)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),(0,l.kt)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",(0,l.kt)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD result;\nCALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD result;\nCALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD result;\n")),(0,l.kt)("p",null,"The limit can either be specified to a specific value (either in ",(0,l.kt)("inlineCode",{parentName:"p"},"KB")," or in\n",(0,l.kt)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."))}m.isMDXComponent=!0}}]);