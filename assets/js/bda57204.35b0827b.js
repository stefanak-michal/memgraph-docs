(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{259:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),o=(t(0),t(324)),i={id:"implement-query-modules",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},p={unversionedId:"database-functionalities/query-modules/implement-query-modules",id:"version-1.3.0/database-functionalities/query-modules/implement-query-modules",isDocsHomePage:!1,title:"Implement custom query modules",description:"We are going to examine how the query module example is implemented using",source:"@site/memgraph_versioned_docs/version-1.3.0/database-functionalities/query-modules/implement-query-modules.md",slug:"/database-functionalities/query-modules/implement-query-modules",permalink:"/memgraph/1.3.0/database-functionalities/query-modules/implement-query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/database-functionalities/query-modules/implement-query-modules.md",version:"1.3.0",sidebar_label:"Implement custom query modules",sidebar:"version-1.3.0/memgraph",previous:{title:"Load and call custom query modules",permalink:"/memgraph/1.3.0/database-functionalities/query-modules/load-call-query-modules"},next:{title:"User privileges (Enterprise)",permalink:"/memgraph/1.3.0/database-functionalities/manage-user-privileges"}},l=[{value:"Using Docker with query modules",id:"using-docker-with-query-modules",children:[]},{value:"Python API",id:"python-api",children:[]},{value:"C API",id:"c-api",children:[]}],c={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are going to examine how the query module ",Object(o.b)("inlineCode",{parentName:"p"},"example")," is implemented using\nthe C API and the Python API. Both query modules can be found in the\n",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),Object(o.b)("h2",{id:"using-docker-with-query-modules"},"Using Docker with query modules"),Object(o.b)("p",null,"If you are using Docker to run Memgraph you will have to create a volume\nand mount it to access the ",Object(o.b)("inlineCode",{parentName:"p"},"query_modules")," directory. This can be done by\ncreating an empty directory ",Object(o.b)("inlineCode",{parentName:"p"},"~modules")," and executing the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker volume create --driver local --opt type=none  --opt device=~modules --opt o=bind modules\n")),Object(o.b)("p",null,"Now, you can start Memgraph and mount the created volume:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm -v modules:/usr/lib/memgraph/query_modules -p 7687:7687 memgraph\n")),Object(o.b)("p",null,"Everything from the directory ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be\nvisible/editable in your mounted ",Object(o.b)("inlineCode",{parentName:"p"},"modules")," volume and vice versa."),Object(o.b)("h2",{id:"python-api"},"Python API"),Object(o.b)("p",null,"Query modules can be implemented using the Python API provided by Memgraph.\nIf you wish to write your own query modules using the Python API, you need\nto have Python version ",Object(o.b)("inlineCode",{parentName:"p"},"3.5.0")," or above installed."),Object(o.b)("p",null,"Let's take a look at the ",Object(o.b)("inlineCode",{parentName:"p"},"py_example.py")," file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import mgp\n")),Object(o.b)("p",null,"On the first line, we import the ",Object(o.b)("inlineCode",{parentName:"p"},"mgp")," module, which contains definitions of the\npublic Python API provided by Memgraph. In essence, this is a wrapper around the\nC API described in the next section. This file (",Object(o.b)("inlineCode",{parentName:"p"},"mgp.py"),") can be found in\nthe Memgraph installation directory, under ",Object(o.b)("inlineCode",{parentName:"p"},"python_support"),". On the standard\nDebian installation, this will be under ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),Object(o.b)("p",null,"Next, we have a ",Object(o.b)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",Object(o.b)("inlineCode",{parentName:"p"},"py_example.procedure")," invocation through openCypher."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef procedure(context: mgp.ProcCtx,\n              required_arg: mgp.Nullable[mgp.Any],\n              optional_arg: mgp.Nullable[mgp.Any] = None\n              ) -> mgp.Record(args=list,\n                              vertex_count=int,\n                              avg_degree=mgp.Number,\n                              props=mgp.Nullable[mgp.Map]):\n\n  ...\n")),Object(o.b)("p",null,"This procedure needs to be callable which optionally takes ",Object(o.b)("inlineCode",{parentName:"p"},"ProcCtx")," as the\nfirst argument. Other arguments will be bound to values passed in the\ncypher query. The full signature of this procedure needs to be annotated\nwith types. The return type must be ",Object(o.b)("inlineCode",{parentName:"p"},"Record(field_name=type, ...)")," and the\nprocedure must produce either a complete ",Object(o.b)("inlineCode",{parentName:"p"},"Record")," or ",Object(o.b)("inlineCode",{parentName:"p"},"None"),". As you can see,\nthe procedure is passed to a ",Object(o.b)("inlineCode",{parentName:"p"},"read_proc")," decorator which handles read-only\nprocedures. You can also inspect the definition of said decorator in the\n",Object(o.b)("inlineCode",{parentName:"p"},"mgp.py")," file or take a look at the Python API ",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/reference-guide/query-modules/python-api"},"reference guide"),"."),Object(o.b)("p",null,"In our case, the example procedure returns 4 fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"args"),": a copy of arguments passed to the procedure."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vertex_count"),": number of vertices in the database."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"avg_degree"),": average degree of vertices."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"props"),": properties map of the Vertex or Edge object passed in ",Object(o.b)("inlineCode",{parentName:"li"},"required_arg"),".\nIn case a Path instance is passed, the procedure returns the properties map of\nthe starting vertex.")),Object(o.b)("p",null,"This procedure can be invoked in openCypher as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WITH n LIMIT 1 CALL py_example.procedure(n, 1) YIELD * RETURN *;\n")),Object(o.b)("p",null,"The following lines create the properties map for a received Edge, Vertex\nor Path instance:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"if isinstance(required_arg, (mgp.Edge, mgp.Vertex)):\n    props = dict(required_arg.properties.items())\nelif isinstance(required_arg, mgp.Path):\n    start_vertex, = required_arg.vertices\n    props = dict(start_vertex.properties.items())\n")),Object(o.b)("p",null,"As you can see, in the case of ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Edge")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Vertex"),", we obtain an\ninstance of ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Properties")," class which holds the respective properties by\naccessing the ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," property of our ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Edge")," or ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Vertex")," instance.\nOnce we have access to ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Properties")," instance, we can simply invoke the\n",Object(o.b)("inlineCode",{parentName:"p"},"items()")," method which returns an ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," that contains ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Property"),"\nobjects. Since the type of ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Property")," is a simple ",Object(o.b)("inlineCode",{parentName:"p"},"collections.namedtuple"),"\ncontaining ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"value"),", we can easily pass it to a ",Object(o.b)("inlineCode",{parentName:"p"},"dict")," constructor."),Object(o.b)("p",null,"We go on to counting the number of vertices and edges in our graph:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"vertex_count = 0\nedge_count = 0\nfor v in context.graph.vertices:\n    vertex_count += 1\n    edge_count += sum(1 for e in v.in_edges)\n    edge_count += sum(1 for e in v.out_edges)\n")),Object(o.b)("p",null,"As you can see, we can access the ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Graph")," instance through ",Object(o.b)("inlineCode",{parentName:"p"},"context.graph"),".\nThis instance contains the state of our database when executing the cypher query\nthat called our procedure. A ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Graph")," instance has a property ",Object(o.b)("inlineCode",{parentName:"p"},"vertices"),"\nwhich allows us to access a ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Vertices")," object which can be iterated upon."),Object(o.b)("p",null,"Similarly, each ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Vertex")," object has ",Object(o.b)("inlineCode",{parentName:"p"},"in_edges")," and ",Object(o.b)("inlineCode",{parentName:"p"},"out_edges")," properties\nwhich allow us to iterate over the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Edge")," objects. The rest of the\ncode logic from the previous snippet is self-explanatory, we simply increase the\nadequate variables on each traversed vertex or edge."),Object(o.b)("p",null,"After that we calculate the average degree and obtain a copy of the passed\narguments:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"avg_degree = 0 if vertex_count == 0 else edge_count / vertex_count\nargs_copy = [copy.deepcopy(required_arg), copy.deepcopy(optional_arg)]\n")),Object(o.b)("p",null,"Finally, we return a ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Record")," with all the calculated values:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"return mgp.Record(args=args_copy, vertex_count=vertex_count,\n                  avg_degree=avg_degree, props=props)\n")),Object(o.b)("p",null,"In conclusion, Python API provided by Memgraph can be a very powerful, yet\nsimple tool when implementing query modules. Therefore, we strongly suggest\nthat all users thoroughly inspect the ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.py")," source file."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"NOTE: You should not globally store any graph elements when writing your own\nquery modules with the intent to use them in a different procedure invocation."))),Object(o.b)("h2",{id:"c-api"},"C API"),Object(o.b)("p",null,"Query modules can be implemented using the C API provided by Memgraph. Such\nmodules need to be compiled to a shared library so that they can be loaded\nwhen Memgraph starts. This means that you can write the procedures in any\nprogramming language which can work with C and can be compiled to the ELF\nshared library format."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"WARNING: If your programming language of choice throws exceptions, these\nexceptions must never leave the scope of your module! You should have a top-level\nexception handler which returns with an error value and potentially logs\nthe error message. Exceptions which cross the module boundary will cause all\nsorts of unexpected issues."))),Object(o.b)("p",null,"Let's take a look at the ",Object(o.b)("inlineCode",{parentName:"p"},"example.c")," file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'#include "mg_procedure.h"\n')),Object(o.b)("p",null,"On the first line, we include ",Object(o.b)("inlineCode",{parentName:"p"},"mg_procedure.h"),", which contains declarations of\nall functions that can be used to implement a query module procedure. This file\nis found in the Memgraph installation directory, under ",Object(o.b)("inlineCode",{parentName:"p"},"include/memgraph"),". On\nthe standard Debian installation, this will be under ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),".\nTo compile the module, you will have to pass the appropriate flags to the\ncompiler. For example, using ",Object(o.b)("inlineCode",{parentName:"p"},"clang"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so\n")),Object(o.b)("p",null,"Next, we have a ",Object(o.b)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",Object(o.b)("inlineCode",{parentName:"p"},"example.procedure")," invocation through openCypher."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"static void procedure(const struct mgp_list *args, const struct mgp_graph *graph,\n                      struct mgp_result *result, struct mgp_memory *memory) {\n  ...\n}\n")),Object(o.b)("p",null,"If this were C++ you'd probably write the function as such:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"namespace {\nvoid procedure(const mgp_list *args, const mgp_graph *graph,\n               mgp_result *result, mgp_memory *memory) {\n  try {\n    ...\n  } catch (const std::exception &e) {\n    // We must not let any exceptions out of our module.\n    mgp_result_set_error_msg(result, e.what());\n    return;\n  }\n}\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"procedure")," function will receive the list of arguments (",Object(o.b)("inlineCode",{parentName:"p"},"args"),") which are\npassed in the query. The parameter ",Object(o.b)("inlineCode",{parentName:"p"},"result")," is used to fill in the resulting\nrecords of the procedure. Parameters ",Object(o.b)("inlineCode",{parentName:"p"},"graph")," and ",Object(o.b)("inlineCode",{parentName:"p"},"memory")," are context\nparameters of the procedure, and they are used in some parts of the provided C\nAPI. For more information on what exactly is possible via C API, take a look\nat the ",Object(o.b)("inlineCode",{parentName:"p"},"mg_procedure.h")," file  or at the C API ",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/reference-guide/query-modules/c-api"},"reference guide"),",\nas well as the ",Object(o.b)("inlineCode",{parentName:"p"},"example.c")," found in ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules/src")),Object(o.b)("p",null,"Then comes the required ",Object(o.b)("inlineCode",{parentName:"p"},"mgp_init_module")," function. Its primary purpose is to\nregister procedures which can then be invoked through openCypher. Although the\nexample registers a single ",Object(o.b)("inlineCode",{parentName:"p"},"procedure"),", you can register multiple different\nprocedures in a single module. Each of these can be invoked using\n",Object(o.b)("inlineCode",{parentName:"p"},"CALL <module>.<procedure> ...")," syntax. The ",Object(o.b)("inlineCode",{parentName:"p"},"<module-name>")," will correspond to\nthe name of the shared library. Since we compile our example into\n",Object(o.b)("inlineCode",{parentName:"p"},"example.so"),", then the module is called ",Object(o.b)("inlineCode",{parentName:"p"},"example"),". Procedure names can be\ndifferent than their corresponding implementation callbacks because the\nprocedure name is defined when registering a procedure."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  // Register our `procedure` as a read procedure with the name "procedure".\n  struct mgp_proc *proc =\n      mgp_module_add_read_procedure(module, "procedure", procedure);\n  // Return non-zero on error.\n  if (!proc) return 1;\n  // Additional code for better specifying the procedure (omitted here).\n  ...\n  // Return 0 to indicate success.\n  return 0;\n}\n')),Object(o.b)("p",null,"The omitted part specifies the signature of the registered procedure. The\nsignature specification states what kind of arguments a procedure accepts and\nwhat will be the resulting set of the procedure. For information on signature\nspecification API, take a look at ",Object(o.b)("inlineCode",{parentName:"p"},"mg_procedure.h")," file and read the\ndocumentation on functions prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"mgp_proc_"),"."),Object(o.b)("p",null,"The passed in ",Object(o.b)("inlineCode",{parentName:"p"},"memory")," argument is only alive throughout the execution of\n",Object(o.b)("inlineCode",{parentName:"p"},"mgp_init_module"),", so you must not allocate any global resources with it. If\nyou really need to set up some global state, you may do so in the\n",Object(o.b)("inlineCode",{parentName:"p"},"mgp_init_module")," but using the standard global allocators."),Object(o.b)("p",null,"Consequently, you may want to reset any global state or release global\nresources in the following function."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"int mgp_shutdown_module() {\n  // Return 0 to indicate success.\n  return 0;\n}\n")),Object(o.b)("p",null,"As previously mentioned, no exceptions should leave your module. If you are\nwriting the module in a language that throws them, you probably want\nexception handlers in ",Object(o.b)("inlineCode",{parentName:"p"},"mgp_init_module")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mgp_shutdown_module")," as well."))}s.isMDXComponent=!0},324:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,p(p({ref:n},c),{},{components:t})):a.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);