"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6525],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,g=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57431:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={id:"loading-modules",title:"How to load MAGE query modules?",sidebar_label:"Loading query modules"},u=void 0,d={unversionedId:"usage/loading-modules",id:"usage/loading-modules",title:"How to load MAGE query modules?",description:"Loading query modules",source:"@site/mage/usage/loading-modules.md",sourceDirName:"usage",slug:"/usage/loading-modules",permalink:"/docs/mage/usage/loading-modules",editUrl:"https://github.com/memgraph/docs/tree/master/mage/usage/loading-modules.md",tags:[],version:"current",frontMatter:{id:"loading-modules",title:"How to load MAGE query modules?",sidebar_label:"Loading query modules"},sidebar:"mage",previous:{title:"Build from source on Linux",permalink:"/docs/mage/installation/source"},next:{title:"Calling procedures",permalink:"/docs/mage/usage/calling-procedures"}},s=[{value:"Loading query modules",id:"loading-query-modules",children:[{value:"Utility query module",id:"utility-query-module",children:[],level:3}],level:2}],p={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"loading-query-modules"},"Loading query modules"),(0,l.kt)("p",null,"When started, Memgraph will ",(0,l.kt)("strong",{parentName:"p"},"automatically attempt to load")," the query modules\nfrom all ",(0,l.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default\n",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. The ",(0,l.kt)("inlineCode",{parentName:"p"},"*.so")," modules are written\nusing the C API and the ",(0,l.kt)("inlineCode",{parentName:"p"},"*.py")," modules are written using the Python API. Each\nfile corresponds to one query module with a bunch of different procedures within them.\nThe names of these files will be mapped to the query module names. For example, a procedure\n",(0,l.kt)("inlineCode",{parentName:"p"},"node_connectivity")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"nxalg.py")," will be mapped to ",(0,l.kt)("inlineCode",{parentName:"p"},"nxalg.node_connectivity()"),"\nin the Cypher query language."),(0,l.kt)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",(0,l.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as a\ncommand-line parameter when running Memgraph (e.g. when using Docker)."),(0,l.kt)("h3",{id:"utility-query-module"},"Utility query module"),(0,l.kt)("p",null,"Query procedures that allow the users to gain more insight into other query\nmodules and their procedures are written under the utility query module named ",(0,l.kt)("inlineCode",{parentName:"p"},"mg"),".\nThis module offers three procedures with the following signatures:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mg.procedures() :: (name :: STRING, signature :: STRING)"),": Lists loaded\nprocedures and their signatures."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mg.load(module_name :: STRING) :: ()"),": Loads or reloads the given module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mg.load_all() :: ()"),": Loads or reloads all query modules.")),(0,l.kt)("p",null,"For example, invoking ",(0,l.kt)("inlineCode",{parentName:"p"},"mg.procedures()")," with Cypher looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")),(0,l.kt)("p",null,"The result will be similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+---------------------+-------------------------------------------------------------------+\n| name                | signature                                                         |\n+---------------------+-------------------------------------------------------------------+\n| ...                 | ...                                                               |\n| graph_analyzer.help | graph_analyzer.help() :: (name :: STRING, value :: STRING)        |\n| mg.load             | mg.load(module_name :: STRING) :: ()                              |\n| mg.load_all         | mg.load_all() :: ()                                               |\n| mg.procedures       | mg.procedures() :: (name :: STRING, signature :: STRING)          |\n| ...                 | ...                                                               |\n+---------------------+-------------------------------------------------------------------+\n")),(0,l.kt)("p",null,"In this case, we can see that Memgraph has successfully loaded all the procedures implemented\nin query modules including the utility query procedures."),(0,l.kt)("p",null,"To load a module (named e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"hello"),") that wasn't loaded on startup (perhaps\nbecause it was added to Memgraph's query modules directory afterwards), we\ncan simply invoke:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),(0,l.kt)("p",null,"If we wish to reload an existing module, say the ",(0,l.kt)("inlineCode",{parentName:"p"},"graph_analyzer")," module above, we\nagain use the same procedure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("graph_analyzer");\n')),(0,l.kt)("p",null,"Lastly, if we wish to reload all existing modules and load any newly added ones\nwe can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")))}m.isMDXComponent=!0}}]);