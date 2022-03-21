"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6525],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,g=s["".concat(u,".").concat(c)]||s[c]||p[c]||l;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},57431:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return s}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(25068),i=["components"],u={id:"loading-modules",title:"How to load MAGE query modules?",sidebar_label:"Loading query modules"},d=void 0,m={unversionedId:"usage/loading-modules",id:"usage/loading-modules",title:"How to load MAGE query modules?",description:"Query modules can be written using C API (thus creating .so modules), and",source:"@site/mage/usage/loading-modules.md",sourceDirName:"usage",slug:"/usage/loading-modules",permalink:"/docs/mage/usage/loading-modules",editUrl:"https://github.com/memgraph/docs/tree/master/mage/usage/loading-modules.md",tags:[],version:"current",frontMatter:{id:"loading-modules",title:"How to load MAGE query modules?",sidebar_label:"Loading query modules"},sidebar:"mage",previous:{title:"Build from source on Linux",permalink:"/docs/mage/installation/source"},next:{title:"Calling procedures",permalink:"/docs/mage/usage/calling-procedures"}},p={},s=[{value:"Loading query modules",id:"loading-query-modules",level:2},{value:"Utility query module",id:"utility-query-module",level:2},{value:"General procedures",id:"general-procedures",level:2},{value:"<code>mg.procedures</code>",id:"mgprocedures",level:3},{value:"<code>mg.load_all</code>",id:"mgload_all",level:3},{value:"<code>mg.load</code>",id:"mgload",level:3}],c={toc:s};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Query modules can be written using C API (thus creating ",(0,l.kt)("inlineCode",{parentName:"p"},".so")," modules), and\nPython API (thus creating ",(0,l.kt)("inlineCode",{parentName:"p"},"*.py"),") modules. Each file corresponds to one query\nmodule with one or more procedures within them. The names of these files will be\nmapped to the query module names. For example, a procedure ",(0,l.kt)("inlineCode",{parentName:"p"},"node_connectivity"),"\nin ",(0,l.kt)("inlineCode",{parentName:"p"},"nxalg.py")," will be mapped to ",(0,l.kt)("inlineCode",{parentName:"p"},"nxalg.node_connectivity()")," in the Cypher query\nlanguage."),(0,l.kt)("h2",{id:"loading-query-modules"},"Loading query modules"),(0,l.kt)(o.ZP,{mdxType:"Loading"}),(0,l.kt)("h2",{id:"utility-query-module"},"Utility query module"),(0,l.kt)("p",null,"Built-in utility query module (",(0,l.kt)("inlineCode",{parentName:"p"},"mg"),") contains procedures that enable you to\nmanage query modules files."),(0,l.kt)("h2",{id:"general-procedures"},"General procedures"),(0,l.kt)("p",null,"Here is the list of procedures from the ",(0,l.kt)("inlineCode",{parentName:"p"},"mg")," query module that can be used with\nall other query module files, and their signatures:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mg.procedures() -> (name\\|STRING, signature\\|STRING)")),(0,l.kt)("td",{parentName:"tr",align:null},"Lists loaded procedures and their signatures.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mg.load(module_name\\|STRING) -> ()")),(0,l.kt)("td",{parentName:"tr",align:null},"Loads or reloads the given module.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mg.load_all() -> ()")),(0,l.kt)("td",{parentName:"tr",align:null},"Loads or reloads all modules.")))),(0,l.kt)("h3",{id:"mgprocedures"},(0,l.kt)("inlineCode",{parentName:"h3"},"mg.procedures")),(0,l.kt)("p",null,"Lists loaded procedures and their signatures."),(0,l.kt)("p",null,"Example of a Cypher query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")),(0,l.kt)("p",null,"Example of a result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+\n| is_editable | name                | path              | signature                                                                                                             |\n+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+\n| ...         | ...                 | ...               | ...                                                                                                                   |\n| true        | graph_analyzer.help | "/path/to/module" | graph_analyzer.help() :: (name :: STRING, value :: STRING)                                                            |\n| false       | mg.load             | "builtin"         | mg.load(module_name :: STRING) :: ()                                                                                  |\n| false       | mg.load_all         | "builtin"         | mg.load_all() :: ()                                                                                                   |\n| false       | mg.procedures       | "builtin"         | mg.procedures() :: (name :: STRING, signature :: STRING, is_write :: BOOLEAN, path :: STRING, is_editable :: BOOLEAN) |\n| ...         | ...                 | ...               | ...                                                                                                                   |\n+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+\n')),(0,l.kt)("h3",{id:"mgload_all"},(0,l.kt)("inlineCode",{parentName:"h3"},"mg.load_all")),(0,l.kt)("p",null,"Loads or reloads the given module."),(0,l.kt)("p",null,"Example of a Cypher query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,l.kt)("p",null,"If the response is ",(0,l.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."),(0,l.kt)("h3",{id:"mgload"},(0,l.kt)("inlineCode",{parentName:"h3"},"mg.load")),(0,l.kt)("p",null,"Loads or reloads all modules."),(0,l.kt)("p",null,"Example of a Cypher query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("py_example");\n')),(0,l.kt)("p",null,"If the response is ",(0,l.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."))}g.isMDXComponent=!0},25068:function(e,n,t){t.d(n,{ZP:function(){return u}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],i={toc:[]};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Once you start Memgraph, it will attempt to load query modules from all ",(0,l.kt)("inlineCode",{parentName:"p"},"*.so"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"*.py")," files from the default (",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),")\ndirectory. "),(0,l.kt)("p",null,"If you want to change the location from which Memgraph will load query modules,\nchange the ",(0,l.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main configuration file\n(",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as a command-line parameter (e.g.\nwhen using Docker)."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When working with Docker and ",(0,l.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, you should pass\nconfiguration flags inside of environmental variables, for example:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -p 7687:7686 -e MEMGRAPH="--query-modules-directory=/usr/lib/memgraph/my_modules" memgraph/memgraph-platform`.\n')),(0,l.kt)("p",{parentName:"div"},"If you are working with ",(0,l.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," images you should pass\nconfiguration options like this: "),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -p 7687:7687 memgraph --query-modules-directory=/usr/lib/memgraph/my_modules\n")))),(0,l.kt)("p",null,"If a certain query module was added while Memgraph was already running, you need\nto load it manually using the ",(0,l.kt)("inlineCode",{parentName:"p"},'mg.load("module_name")')," procedure within a query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("py_example");\n')),(0,l.kt)("p",null,"If there is no response (no error message), the load was successful."),(0,l.kt)("p",null,"If you want to reload all existing modules and load any newly added ones, use\n",(0,l.kt)("inlineCode",{parentName:"p"},"mg.load_all()"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,l.kt)("p",null,"If there is no response (no error message), the load was successful."),(0,l.kt)("p",null,"You can check if the query module has been loaded by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"mg.procedures()"),"\nprocedure within a query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")))}u.isMDXComponent=!0}}]);