(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{198:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var r=n(0),t=n.n(r);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=t.a.createContext({}),c=function(e){var a=t.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},s=t.a.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?t.a.createElement(h,i(i({ref:a},p),{},{components:n})):t.a.createElement(h,i({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return i})),n.d(a,"toc",(function(){return u})),n.d(a,"default",(function(){return c}));var r=n(3),t=n(7),l=(n(0),n(198)),o={id:"load-call-query-modules",title:"Load and call custom query modules",sidebar_label:"Load and call custom query modules"},i={unversionedId:"database-functionalities/query-modules/load-call-query-modules",id:"database-functionalities/query-modules/load-call-query-modules",isDocsHomePage:!1,title:"Load and call custom query modules",description:"Memgraph supports extending the query language with user-written procedures.",source:"@site/docs/database-functionalities/query-modules/load-call-query-modules.md",slug:"/database-functionalities/query-modules/load-call-query-modules",permalink:"/memgraph/database-functionalities/query-modules/load-call-query-modules",editUrl:"https://github.com/memgraph/docs/tree/main/docs/database-functionalities/query-modules/load-call-query-modules.md",version:"current",sidebar_label:"Load and call custom query modules",sidebar:"memgraph",previous:{title:"How to use built-in query modules",permalink:"/memgraph/database-functionalities/query-modules/built-in-query-modules"},next:{title:"Implement custom query modules",permalink:"/memgraph/database-functionalities/query-modules/implement-query-modules"}},u=[{value:"Loading query modules on startup",id:"loading-query-modules-on-startup",children:[]},{value:"Utility query module",id:"utility-query-module",children:[]},{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]}],p={toc:u};function c(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup."),Object(l.a)("h2",{id:"loading-query-modules-on-startup"},"Loading query modules on startup"),Object(l.a)("p",null,"The Memgraph installation comes with the ",Object(l.a)("inlineCode",{parentName:"p"},"example.so")," and ",Object(l.a)("inlineCode",{parentName:"p"},"py_example.py")," query\nmodules which are located in ",Object(l.a)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules")," directory.\nAssuming the standard installation on Debian, you would run Memgraph with the\nfollowing command:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-plaintext"},"systemctl start memgraph\n")),Object(l.a)("p",null,"When using Docker, the equivalent would be the following:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph\n")),Object(l.a)("p",null,"Memgraph will now attempt to load the query modules from all ",Object(l.a)("inlineCode",{parentName:"p"},"*.so")," and ",Object(l.a)("inlineCode",{parentName:"p"},"*.py"),"\nfiles it finds in the default (",Object(l.a)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules"),") directory.\nThe ",Object(l.a)("inlineCode",{parentName:"p"},"*.so")," modules are written using the C API and the ",Object(l.a)("inlineCode",{parentName:"p"},"*.py")," modules are\nwritten using the Python API. Each file corresponds to one query module. Names\nof these files will be mapped to query module names.  So in our case, we have\nan ",Object(l.a)("inlineCode",{parentName:"p"},"example.so")," which will be mapped to ",Object(l.a)("inlineCode",{parentName:"p"},"example")," module and a ",Object(l.a)("inlineCode",{parentName:"p"},"py_example.py"),"\nwhich will be mapped to ",Object(l.a)("inlineCode",{parentName:"p"},"py_example")," module in the query language."),Object(l.a)("p",null,"Each query module can define multiple procedures. Both of our examples define\na single procedure creatively named ",Object(l.a)("inlineCode",{parentName:"p"},"procedure"),"."),Object(l.a)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",Object(l.a)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",Object(l.a)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as\na command-line parameter (e.g. when using Docker)."),Object(l.a)("h2",{id:"utility-query-module"},"Utility query module"),Object(l.a)("p",null,"Query procedures that allow the users to gain more insight into other query\nmodules and their procedures are written under our utility ",Object(l.a)("inlineCode",{parentName:"p"},"mg")," query module.\nThis module offers three procedures with the following signatures:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"mg.procedures() :: (name :: STRING, signature :: STRING)"),": lists loaded\nprocedures and their signatures"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"mg.load(module_name :: STRING) :: ()"),": loads or reloads the given module"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"mg.load_all() :: ()"),": loads or reloads all modules")),Object(l.a)("p",null,"For example, invoking ",Object(l.a)("inlineCode",{parentName:"p"},"mg.procedures()")," from openCypher like so:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")),Object(l.a)("p",null,"might yield the following result:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-plaintext"},"+---------------------+-------------------------------------------------------------------+\n| name                | signature                                                         |\n+---------------------+-------------------------------------------------------------------+\n| ...                 | ...                                                               |\n| graph_analyzer.help | graph_analyzer.help() :: (name :: STRING, value :: STRING)        |\n| mg.load             | mg.load(module_name :: STRING) :: ()                              |\n| mg.load_all         | mg.load_all() :: ()                                               |\n| mg.procedures       | mg.procedures() :: (name :: STRING, signature :: STRING)          |\n| ...                 | ...                                                               |\n+---------------------+-------------------------------------------------------------------+\n")),Object(l.a)("p",null,"In this case, we can see that Memgraph has successfully loaded all the procedures implemented\nin query modules including the utility query procedures."),Object(l.a)("p",null,"To load a module (named e.g. ",Object(l.a)("inlineCode",{parentName:"p"},"hello"),") that wasn't loaded on startup (perhaps\nbecause it was added to Memgraph's query modules directory afterwards), we\ncan simply invoke:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),Object(l.a)("p",null,"If we wish to reload an existing module, say the ",Object(l.a)("inlineCode",{parentName:"p"},"graph_analyzer")," module above, we\nagain use the same procedure:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("graph_analyzer");\n')),Object(l.a)("p",null,"Lastly, if we wish to reload all existing modules and load any newly added ones\nwe can use:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),Object(l.a)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),Object(l.a)("p",null,"OpenCypher has a special syntax for calling procedures in loaded query\nmodules. For example:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},'CALL example.procedure("string-argument") YIELD args, result;\n')),Object(l.a)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",Object(l.a)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",Object(l.a)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted. The\nprocedure will still run in such a case, but the record fields will not be\nstored in variables. In the above example, we assume that ",Object(l.a)("inlineCode",{parentName:"p"},"example.procedure"),"\nwill produce a record with 2 fields, ",Object(l.a)("inlineCode",{parentName:"p"},"args")," and ",Object(l.a)("inlineCode",{parentName:"p"},"result"),". Trying to ",Object(l.a)("inlineCode",{parentName:"p"},"YIELD"),"\nfields that are not part of the produced record will result in an error."),Object(l.a)("p",null,"Procedures may be called standalone as in the above example, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL example.procedure(node) YIELD result RETURN *;\n")),Object(l.a)("p",null,"Unfortunately, when we use ",Object(l.a)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",Object(l.a)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",Object(l.a)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",Object(l.a)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",Object(l.a)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",Object(l.a)("inlineCode",{parentName:"p"},"RETURN")," anything."),Object(l.a)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (result) CALL example.procedure(42) YIELD result AS procedure_result RETURN *;\n")),Object(l.a)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),Object(l.a)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",Object(l.a)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD result;\n")),Object(l.a)("p",null,"The limit can either be specified to a specific value (either in ",Object(l.a)("inlineCode",{parentName:"p"},"KB")," or in\n",Object(l.a)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."))}c.isMDXComponent=!0}}]);