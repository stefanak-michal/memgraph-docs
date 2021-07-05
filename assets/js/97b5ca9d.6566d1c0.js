(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7434],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?t.createElement(g,l(l({ref:r},p),{},{components:n})):t.createElement(g,l({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80552:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=n(22122),a=n(19756),o=(n(67294),n(3905)),l=["components"],i={id:"calling-procedures",title:"How to call MAGE procedures?",sidebar_label:"Calling procedures"},u=void 0,c={unversionedId:"usage/calling-procedures",id:"usage/calling-procedures",isDocsHomePage:!1,title:"How to call MAGE procedures?",description:"Syntax for calling procedures",source:"@site/mage/usage/calling-procedures.md",sourceDirName:"usage",slug:"/usage/calling-procedures",permalink:"/mage/usage/calling-procedures",editUrl:"https://github.com/memgraph/docs/tree/master/mage/usage/calling-procedures.md",version:"current",frontMatter:{id:"calling-procedures",title:"How to call MAGE procedures?",sidebar_label:"Calling procedures"},sidebar:"mage",previous:{title:"Loading query modules",permalink:"/mage/usage/loading-modules"},next:{title:"betweenness_centrality",permalink:"/mage/query-modules/cpp/betweenness-centrality"}},p=[{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]}],s={toc:p};function d(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),(0,o.kt)("p",null,"Cypher has a special syntax for calling procedures in loaded query\nmodules. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL example.procedure("string-argument") YIELD args, result;\n')),(0,o.kt)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",(0,o.kt)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",(0,o.kt)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted. The\nprocedure will still run in such a case, but the record fields will not be\nstored in variables. In the above example, we assume that ",(0,o.kt)("inlineCode",{parentName:"p"},"example.procedure"),"\nwill produce a record with 2 fields, ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"result"),". Trying to ",(0,o.kt)("inlineCode",{parentName:"p"},"YIELD"),"\nfields that are not part of the produced record will result in an error."),(0,o.kt)("p",null,"Procedures may be called standalone as in the above example, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL example.procedure(node) YIELD result RETURN *;\n")),(0,o.kt)("p",null,"Unfortunately, when we use ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," anything."),(0,o.kt)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (result) CALL example.procedure(42) YIELD result AS procedure_result RETURN *;\n")),(0,o.kt)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),(0,o.kt)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",(0,o.kt)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD result;\n")),(0,o.kt)("p",null,"The limit can either be specified to a specific value (either in ",(0,o.kt)("inlineCode",{parentName:"p"},"KB")," or in\n",(0,o.kt)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."))}d.isMDXComponent=!0}}]);