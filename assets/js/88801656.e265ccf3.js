"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41435],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64136:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"overview",title:"Transformation modules",sidebar_label:"Transformation modules overview",slug:"/reference-guide/streams/transformation-modules"},s=void 0,m={unversionedId:"reference-guide/streams/transformation-modules/overview",id:"version-2.1.1/reference-guide/streams/transformation-modules/overview",title:"Transformation modules",description:"In order to create a transformation module, you need to:",source:"@site/memgraph_versioned_docs/version-2.1.1/reference-guide/streams/transformation-modules/overview.md",sourceDirName:"reference-guide/streams/transformation-modules",slug:"/reference-guide/streams/transformation-modules",permalink:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/reference-guide/streams/transformation-modules/overview.md",tags:[],version:"2.1.1",frontMatter:{id:"overview",title:"Transformation modules",sidebar_label:"Transformation modules overview",slug:"/reference-guide/streams/transformation-modules"},sidebar:"memgraph",previous:{title:"Streams overview",permalink:"/docs/memgraph/2.1.1/reference-guide/streams"},next:{title:"C API",permalink:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules/api/c-api"}},d=[{value:"Loading modules on startup",id:"loading-modules-on-startup",children:[],level:2},{value:"Utility procedures for transformations",id:"utility-procedures-for-transformations",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to create a transformation module, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules/api/python-api"},"Python")," or a ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules/api/c-api"},"shared library")," file (module)"),(0,o.kt)("li",{parentName:"ol"},"Save it into the Memgraph's ",(0,o.kt)("inlineCode",{parentName:"li"},"query-modules")," directory (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/memgraph/query_modules"),")"),(0,o.kt)("li",{parentName:"ol"},"Load it into Memgraph either on startup (automatically) or by running a ",(0,o.kt)("inlineCode",{parentName:"li"},"CALL mg.load")," query")),(0,o.kt)("p",null,"Memgraph supports user-defined transformations in ",(0,o.kt)("strong",{parentName:"p"},"C")," and ",(0,o.kt)("strong",{parentName:"p"},"Python"),"\nthat act on data received from a streaming engine. These transformations\nare grouped into modules called ",(0,o.kt)("strong",{parentName:"p"},"Transformation modules")," which can then\nbe loaded on startup or later on. A module consists of a transformation, a\nquery procedure, or both."),(0,o.kt)("p",null,"This section introduces transformation modules and their similarities\nwith query modules. Currently, we only support transformations for\nKafka streams, but we are aiming to add support for other\nstreaming engines as well."),(0,o.kt)("p",null,"The available API references are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules/api/c-api"},"C API"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules/api/python-api"},"Python API")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out how a typical transformation module can be implemented if you are using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/how-to-guides/streams/kafka/implement-transformation-module"},"Kafka"),"\nor\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/implement-transformation-module"},"Pulsar"),"."))),(0,o.kt)("h2",{id:"loading-modules-on-startup"},"Loading modules on startup"),(0,o.kt)("p",null,"Memgraph attempts to load the modules from all ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py"),"\nfiles it finds in the default (",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),") directory.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," modules are written using the C API and the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," modules are\nwritten using the Python API. Each file corresponds to one module. Names\nof these files will be mapped to module names.  For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.so"),"\nwill be mapped to the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," module and a ",(0,o.kt)("inlineCode",{parentName:"p"},"py_hello.py")," script\nwill be mapped to the ",(0,o.kt)("inlineCode",{parentName:"p"},"py_hello")," module."),(0,o.kt)("p",null,"If you want to change the directory in which Memgraph searches for\ntransformation modules, just change or extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory"),"\nflag in the main configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply\nit as a command-line parameter (e.g., when using Docker)."),(0,o.kt)("h2",{id:"utility-procedures-for-transformations"},"Utility procedures for transformations"),(0,o.kt)("p",null,"Query procedures that allow the users to gain more insight into other modules and\ntransformations are written under our utility ",(0,o.kt)("inlineCode",{parentName:"p"},"mg")," query module.\nFor transformations, this module offers:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"procedure"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mg.transformations() :: (name :: STRING)")),(0,o.kt)("td",{parentName:"tr",align:null},"Lists all transformations procedures.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mg.load(module_name :: STRING) :: ()")),(0,o.kt)("td",{parentName:"tr",align:null},"Loads or reloads the given module.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mg.load_all() :: ()")),(0,o.kt)("td",{parentName:"tr",align:null},"Loads or reloads all modules.")))),(0,o.kt)("p",null,"For example, you can invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"mg.transformations()")," from mgconsole or Memgraph Lab with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,o.kt)("p",null,"This will yield the following result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"+---------------------+\n| name                |\n+---------------------+\n| ...                 |\n| batch.transform     |\n| ...                 |\n+---------------------+\n")),(0,o.kt)("p",null,"In this case, we can see that Memgraph has already loaded the user-defined transformation\nof the module ",(0,o.kt)("inlineCode",{parentName:"p"},"batch"),"."),(0,o.kt)("p",null,"To load a module (named e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"hello"),") that wasn't loaded on startup (perhaps\nbecause it was added to Memgraph's query modules directory afterward), we\ncan simply invoke:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),(0,o.kt)("p",null,"If we wish to reload an existing module, say the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," module above, we\nagain use the same procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),(0,o.kt)("p",null,"Lastly, if we wish to reload all existing modules and load any newly added ones,\nwe can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")))}u.isMDXComponent=!0}}]);