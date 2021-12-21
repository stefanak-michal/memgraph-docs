"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60856],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),c=a,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79262:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={id:"implement-query-modules",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},l=void 0,s={unversionedId:"database-functionalities/query-modules/implement-query-modules",id:"version-1.4.0/database-functionalities/query-modules/implement-query-modules",title:"Implement custom query modules",description:"We are going to examine how the query module example is implemented using",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/query-modules/implement-query-modules.md",sourceDirName:"database-functionalities/query-modules",slug:"/database-functionalities/query-modules/implement-query-modules",permalink:"/docs/memgraph/1.4.0/database-functionalities/query-modules/implement-query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/query-modules/implement-query-modules.md",tags:[],version:"1.4.0",frontMatter:{id:"implement-query-modules",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},sidebar:"version-1.4.0/memgraph",previous:{title:"Load and call custom query modules",permalink:"/docs/memgraph/1.4.0/database-functionalities/query-modules/load-call-query-modules"},next:{title:"User privileges (Enterprise)",permalink:"/docs/memgraph/1.4.0/database-functionalities/manage-user-privileges"}},u=[{value:"Using Docker with query modules",id:"using-docker-with-query-modules",children:[],level:2},{value:"Python API",id:"python-api",children:[],level:2},{value:"C API",id:"c-api",children:[],level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are going to examine how the query module ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," is implemented using\nthe C API and the Python API. Both query modules can be found in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),(0,o.kt)("h2",{id:"using-docker-with-query-modules"},"Using Docker with query modules"),(0,o.kt)("p",null,"If you are using Docker to run Memgraph you will have to create a volume\nand mount it to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"query_modules")," directory. This can be done by\ncreating an empty directory ",(0,o.kt)("inlineCode",{parentName:"p"},"~modules")," and executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker volume create --driver local --opt type=none  --opt device=~modules --opt o=bind modules\n")),(0,o.kt)("p",null,"Now, you can start Memgraph and mount the created volume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm -v modules:/usr/lib/memgraph/query_modules -p 7687:7687 memgraph\n")),(0,o.kt)("p",null,"Everything from the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be\nvisible/editable in your mounted ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," volume and vice versa."),(0,o.kt)("h2",{id:"python-api"},"Python API"),(0,o.kt)("p",null,"Query modules can be implemented using the Python API provided by Memgraph.\nIf you wish to write your own query modules using the Python API, you need\nto have Python version ",(0,o.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above installed."),(0,o.kt)("p",null,"Let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"py_example.py")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n")),(0,o.kt)("p",null,"On the first line, we import the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp")," module, which contains definitions of the\npublic Python API provided by Memgraph. In essence, this is a wrapper around the\nC API described in the next section. This file (",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py"),") can be found in\nthe Memgraph installation directory, under ",(0,o.kt)("inlineCode",{parentName:"p"},"python_support"),". On the standard\nDebian installation, this will be under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,o.kt)("p",null,"Next, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",(0,o.kt)("inlineCode",{parentName:"p"},"py_example.procedure")," invocation through openCypher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef procedure(context: mgp.ProcCtx,\n              required_arg: mgp.Nullable[mgp.Any],\n              optional_arg: mgp.Nullable[mgp.Any] = None\n              ) -> mgp.Record(args=list,\n                              vertex_count=int,\n                              avg_degree=mgp.Number,\n                              props=mgp.Nullable[mgp.Map]):\n\n  ...\n")),(0,o.kt)("p",null,"This procedure needs to be callable which optionally takes ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcCtx")," as the\nfirst argument. Other arguments will be bound to values passed in the\ncypher query. The full signature of this procedure needs to be annotated\nwith types. The return type must be ",(0,o.kt)("inlineCode",{parentName:"p"},"Record(field_name=type, ...)")," and the\nprocedure must produce either a complete ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),". As you can see,\nthe procedure is passed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"read_proc")," decorator which handles read-only\nprocedures. You can also inspect the definition of said decorator in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py")," file or take a look at the Python API ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/1.4.0/reference-guide/query-modules/python-api"},"reference guide"),"."),(0,o.kt)("p",null,"In our case, the example procedure returns 4 fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args"),": a copy of arguments passed to the procedure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vertex_count"),": number of vertices in the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"avg_degree"),": average degree of vertices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"props"),": properties map of the Vertex or Edge object passed in ",(0,o.kt)("inlineCode",{parentName:"li"},"required_arg"),".\nIn case a Path instance is passed, the procedure returns the properties map of\nthe starting vertex.")),(0,o.kt)("p",null,"This procedure can be invoked in openCypher as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WITH n LIMIT 1 CALL py_example.procedure(n, 1) YIELD * RETURN *;\n")),(0,o.kt)("p",null,"The following lines create the properties map for a received Edge, Vertex\nor Path instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if isinstance(required_arg, (mgp.Edge, mgp.Vertex)):\n    props = dict(required_arg.properties.items())\nelif isinstance(required_arg, mgp.Path):\n    start_vertex, = required_arg.vertices\n    props = dict(start_vertex.properties.items())\n")),(0,o.kt)("p",null,"As you can see, in the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertex"),", we obtain an\ninstance of ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Properties")," class which holds the respective properties by\naccessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," property of our ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertex")," instance.\nOnce we have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Properties")," instance, we can simply invoke the\n",(0,o.kt)("inlineCode",{parentName:"p"},"items()")," method which returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"Iterable")," that contains ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Property"),"\nobjects. Since the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Property")," is a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"collections.namedtuple"),"\ncontaining ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", we can easily pass it to a ",(0,o.kt)("inlineCode",{parentName:"p"},"dict")," constructor."),(0,o.kt)("p",null,"We go on to counting the number of vertices and edges in our graph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"vertex_count = 0\nedge_count = 0\nfor v in context.graph.vertices:\n    vertex_count += 1\n    edge_count += sum(1 for e in v.in_edges)\n    edge_count += sum(1 for e in v.out_edges)\n")),(0,o.kt)("p",null,"As you can see, we can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance through ",(0,o.kt)("inlineCode",{parentName:"p"},"context.graph"),".\nThis instance contains the state of our database when executing the cypher query\nthat called our procedure. A ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance has a property ",(0,o.kt)("inlineCode",{parentName:"p"},"vertices"),"\nwhich allows us to access a ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertices")," object which can be iterated upon."),(0,o.kt)("p",null,"Similarly, each ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertex")," object has ",(0,o.kt)("inlineCode",{parentName:"p"},"in_edges")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"out_edges")," properties\nwhich allow us to iterate over the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," objects. The rest of the\ncode logic from the previous snippet is self-explanatory, we simply increase the\nadequate variables on each traversed vertex or edge."),(0,o.kt)("p",null,"After that we calculate the average degree and obtain a copy of the passed\narguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"avg_degree = 0 if vertex_count == 0 else edge_count / vertex_count\nargs_copy = [copy.deepcopy(required_arg), copy.deepcopy(optional_arg)]\n")),(0,o.kt)("p",null,"Finally, we return a ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Record")," with all the calculated values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"return mgp.Record(args=args_copy, vertex_count=vertex_count,\n                  avg_degree=avg_degree, props=props)\n")),(0,o.kt)("p",null,"In conclusion, Python API provided by Memgraph can be a very powerful, yet\nsimple tool when implementing query modules. Therefore, we strongly suggest\nthat all users thoroughly inspect the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py")," source file."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"NOTE: You should not globally store any graph elements when writing your own\nquery modules with the intent to use them in a different procedure invocation."))),(0,o.kt)("h2",{id:"c-api"},"C API"),(0,o.kt)("p",null,"Query modules can be implemented using the C API provided by Memgraph. Such\nmodules need to be compiled to a shared library so that they can be loaded\nwhen Memgraph starts. This means that you can write the procedures in any\nprogramming language which can work with C and can be compiled to the ELF\nshared library format."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"WARNING: If your programming language of choice throws exceptions, these\nexceptions must never leave the scope of your module! You should have a top-level\nexception handler which returns with an error value and potentially logs\nthe error message. Exceptions which cross the module boundary will cause all\nsorts of unexpected issues."))),(0,o.kt)("p",null,"Let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"example.c")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include "mg_procedure.h"\n')),(0,o.kt)("p",null,"On the first line, we include ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h"),", which contains declarations of\nall functions that can be used to implement a query module procedure. This file\nis found in the Memgraph installation directory, under ",(0,o.kt)("inlineCode",{parentName:"p"},"include/memgraph"),". On\nthe standard Debian installation, this will be under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),".\nTo compile the module, you will have to pass the appropriate flags to the\ncompiler. For example, using ",(0,o.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so\n")),(0,o.kt)("p",null,"Next, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",(0,o.kt)("inlineCode",{parentName:"p"},"example.procedure")," invocation through openCypher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static void procedure(const struct mgp_list *args, const struct mgp_graph *graph,\n                      struct mgp_result *result, struct mgp_memory *memory) {\n  ...\n}\n")),(0,o.kt)("p",null,"If this were C++ you'd probably write the function as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace {\nvoid procedure(const mgp_list *args, const mgp_graph *graph,\n               mgp_result *result, mgp_memory *memory) {\n  try {\n    ...\n  } catch (const std::exception &e) {\n    // We must not let any exceptions out of our module.\n    mgp_result_set_error_msg(result, e.what());\n    return;\n  }\n}\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure")," function will receive the list of arguments (",(0,o.kt)("inlineCode",{parentName:"p"},"args"),") which are\npassed in the query. The parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," is used to fill in the resulting\nrecords of the procedure. Parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"graph")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," are context\nparameters of the procedure, and they are used in some parts of the provided C\nAPI. For more information on what exactly is possible via C API, take a look\nat the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file  or at the C API ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/1.4.0/reference-guide/query-modules/c-api"},"reference guide"),",\nas well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"example.c")," found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules/src")),(0,o.kt)("p",null,"Then comes the required ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," function. Its primary purpose is to\nregister procedures which can then be invoked through openCypher. Although the\nexample registers a single ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure"),", you can register multiple different\nprocedures in a single module. Each of these can be invoked using\n",(0,o.kt)("inlineCode",{parentName:"p"},"CALL <module>.<procedure> ...")," syntax. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<module-name>")," will correspond to\nthe name of the shared library. Since we compile our example into\n",(0,o.kt)("inlineCode",{parentName:"p"},"example.so"),", then the module is called ",(0,o.kt)("inlineCode",{parentName:"p"},"example"),". Procedure names can be\ndifferent than their corresponding implementation callbacks because the\nprocedure name is defined when registering a procedure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  // Register our `procedure` as a read procedure with the name "procedure".\n  struct mgp_proc *proc =\n      mgp_module_add_read_procedure(module, "procedure", procedure);\n  // Return non-zero on error.\n  if (!proc) return 1;\n  // Additional code for better specifying the procedure (omitted here).\n  ...\n  // Return 0 to indicate success.\n  return 0;\n}\n')),(0,o.kt)("p",null,"The omitted part specifies the signature of the registered procedure. The\nsignature specification states what kind of arguments a procedure accepts and\nwhat will be the resulting set of the procedure. For information on signature\nspecification API, take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file and read the\ndocumentation on functions prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_proc_"),"."),(0,o.kt)("p",null,"The passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," argument is only alive throughout the execution of\n",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module"),", so you must not allocate any global resources with it. If\nyou really need to set up some global state, you may do so in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," but using the standard global allocators."),(0,o.kt)("p",null,"Consequently, you may want to reset any global state or release global\nresources in the following function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int mgp_shutdown_module() {\n  // Return 0 to indicate success.\n  return 0;\n}\n")),(0,o.kt)("p",null,"As previously mentioned, no exceptions should leave your module. If you are\nwriting the module in a language that throws them, you probably want\nexception handlers in ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_shutdown_module")," as well."))}d.isMDXComponent=!0}}]);