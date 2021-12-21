"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20201],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={id:"python-api",title:"Query modules Python API",sidebar_label:"Python API"},d=void 0,p={unversionedId:"reference-guide/query-modules/api/python-api",id:"version-1.6.1/reference-guide/query-modules/api/python-api",title:"Query modules Python API",description:"This is the API documentation for mgp.py  which contains definitions of the",source:"@site/memgraph_versioned_docs/version-1.6.1/reference-guide/query-modules/api/python-api.md",sourceDirName:"reference-guide/query-modules/api",slug:"/reference-guide/query-modules/api/python-api",permalink:"/docs/memgraph/1.6.1/reference-guide/query-modules/api/python-api",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/reference-guide/query-modules/api/python-api.md",tags:[],version:"1.6.1",frontMatter:{id:"python-api",title:"Query modules Python API",sidebar_label:"Python API"},sidebar:"version-1.6.1/memgraph",previous:{title:"C API",permalink:"/docs/memgraph/1.6.1/reference-guide/query-modules/api/c-api"},next:{title:"Replication",permalink:"/docs/memgraph/1.6.1/reference-guide/replication"}},s=[{value:"<code>mgp.read_proc(func)</code>",id:"mgpread_procfunc",children:[{value:"Examples",id:"examples",children:[],level:3}],level:2},{value:"<code>mgp._typing_to_cypher_type()</code>",id:"mgp_typing_to_cypher_type",children:[],level:2},{value:"<code>class mgp.Properties(vertex_or_edge)</code>",id:"class-mgppropertiesvertex_or_edge",children:[{value:"<code>get(property_name, default)</code>",id:"getproperty_name-default",children:[],level:3},{value:"<code>items()</code>",id:"items",children:[],level:3},{value:"<code>keys()</code>",id:"keys",children:[],level:3},{value:"<code>values()</code>",id:"values",children:[],level:3}],level:2},{value:"<code>class mgp.Label(name)</code>",id:"class-mgplabelname",children:[{value:"<code>name</code>",id:"name",children:[],level:3}],level:2},{value:"<code>class mgp.EdgeType(name)</code>",id:"class-mgpedgetypename",children:[{value:"<code>name</code>",id:"name-1",children:[],level:3}],level:2},{value:"<code>class mgp.Edge(edge)</code>",id:"class-mgpedgeedge",children:[{value:"<code>from_vertex</code>",id:"from_vertex",children:[],level:3},{value:"<code>id</code>",id:"id",children:[],level:3},{value:"<code>is_valid()</code>",id:"is_valid",children:[],level:3},{value:"<code>properties</code>",id:"properties",children:[],level:3},{value:"<code>to_vertex</code>",id:"to_vertex",children:[],level:3},{value:"<code>type</code>",id:"type",children:[],level:3}],level:2},{value:"<code>class mgp.Vertex(vertex)</code>",id:"class-mgpvertexvertex",children:[{value:"<code>id</code>",id:"id-1",children:[],level:3},{value:"<code>in_edges</code>",id:"in_edges",children:[],level:3},{value:"<code>is_valid()</code>",id:"is_valid-1",children:[],level:3},{value:"<code>labels</code>",id:"labels",children:[],level:3},{value:"<code>out_edges</code>",id:"out_edges",children:[],level:3},{value:"<code>properties</code>",id:"properties-1",children:[],level:3}],level:2},{value:"<code>class mgp.Path(starting_vertex_or_path: Union[mgp.Edge, mgp.Vertex])</code>",id:"class-mgppathstarting_vertex_or_path-unionmgpedge-mgpvertex",children:[{value:"<code>edges</code>",id:"edges",children:[],level:3},{value:"<code>expand(edge)</code>",id:"expandedge",children:[],level:3},{value:"<code>is_valid()</code>",id:"is_valid-2",children:[],level:3},{value:"<code>vertices</code>",id:"vertices",children:[],level:3}],level:2},{value:"<code>class mgp.Record(**kwargs)</code>",id:"class-mgprecordkwargs",children:[{value:"<code>fields</code>",id:"fields",children:[],level:3}],level:2},{value:"<code>class mgp.Vertices(graph)</code>",id:"class-mgpverticesgraph",children:[{value:"<code>is_valid()</code>",id:"is_valid-3",children:[],level:3}],level:2},{value:"<code>class mgp.Graph(graph)</code>",id:"class-mgpgraphgraph",children:[{value:"<code>get_vertex_by_id(vertex_id)</code>",id:"get_vertex_by_idvertex_id",children:[],level:3},{value:"<code>is_valid()</code>",id:"is_valid-4",children:[],level:3},{value:"<code>vertices</code>",id:"vertices-1",children:[],level:3}],level:2},{value:"<code>class mgp.ProcCtx(graph)</code>",id:"class-mgpprocctxgraph",children:[{value:"<code>check_must_abort()</code>",id:"check_must_abort",children:[],level:3},{value:"<code>graph</code>",id:"graph",children:[],level:3},{value:"<code>is_valid()</code>",id:"is_valid-5",children:[],level:3},{value:"<code>must_abort()</code>",id:"must_abort",children:[],level:3}],level:2},{value:"<code>class mgp.Deprecated(type_)</code>",id:"class-mgpdeprecatedtype_",children:[{value:"<code>field_type()</code>",id:"field_type",children:[],level:3}],level:2},{value:"<code>class mgp.UnsupportedTypingError(type_)</code>",id:"class-mgpunsupportedtypingerrortype_",children:[],level:2},{value:"<code>class mgp.AbortError()</code>",id:"class-mgpaborterror",children:[],level:2},{value:"<code>class mgp.InvalidContextError()</code>",id:"class-mgpinvalidcontexterror",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the API documentation for ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.py"),"  which contains definitions of the\npublic Python API provided by Memgraph. In essence, this is a wrapper around the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.6.1/reference-guide/query-modules/api/c-api"},"C API")),". This source file can be found in the Memgraph\ninstallation directory, under ",(0,r.kt)("inlineCode",{parentName:"p"},"python_support"),". On the standard Debian\ninstallation, this will be under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,r.kt)("strong",{parentName:"h5"},"NOTE:")," This part of the documentation is still under development.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"An updated version will soon be available."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"For an example of how to implement\xa0query modules in Python, check out")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/1.6.1/database-functionalities/query-modules/implement-query-modules#python-api"},"this\nguide"),"."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"If you install any Python modules after running Memgraph, you'll have to")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"restart Memgraph in order to use them in query modules."))),(0,r.kt)("h2",{id:"mgpread_procfunc"},(0,r.kt)("inlineCode",{parentName:"h2"},"mgp.read_proc(func)")),(0,r.kt)("p",null,"Register the function as a read-only procedure of the current module."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"read_proc")," is meant to be used as a decorator function to register module\nprocedures. The registered function needs to be a callable which optionally\ntakes the process context ",(0,r.kt)("inlineCode",{parentName:"p"},"ProcCtx"),"  as the first argument. Other arguments of\nthe function will be bound to values passed in the Cypher query. The full\nsignature of the function needs to be annotated with types. The return type must\nbe ",(0,r.kt)("inlineCode",{parentName:"p"},"Record(field_name=type, \u2026)")," and the procedure must produce either a complete\n",(0,r.kt)("inlineCode",{parentName:"p"},"Record")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),". To mark a field as deprecated, use\n",(0,r.kt)("inlineCode",{parentName:"p"},"Record(field_name=Deprecated(type), \u2026)"),". Multiple records can be produced by\nreturning an iterable of them. Registering generator functions is currently not\nsupported."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    import mgp\n\n    @mgp.read_proc\n    def procedure(context: mgp.ProcCtx,\n                required_arg: mgp.Nullable[mgp.Any],\n                optional_arg: mgp.Nullable[mgp.Any] = None\n                ) -> mgp.Record(result=str, args=list):\n        args = [required_arg, optional_arg]\n        # Multiple rows can be produced by returning an iterable of mgp.Record\n        return mgp.Record(args=args, result='Hello World!')\n")),(0,r.kt)("p",null,"The example procedure above returns 2 fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," is a copy of arguments passed to the procedure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result")," is the result of this procedure, a \u201cHello World!\u201d string.")),(0,r.kt)("p",null,"Any errors can be reported by raising an exception. The procedure can be invoked\nin Cypher using the following calls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(1, 2) YIELD args, result;\nCALL example.procedure(1) YIELD args, result;\n")),(0,r.kt)("p",null,"Naturally, you may pass in different arguments or yield fewer fields."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Install the ",(0,r.kt)("inlineCode",{parentName:"h5"},"mgp")," Python module so your editor can use typing annotations")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"properly and suggest methods and classes it contains. You can install the module\nby running ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install mgp"),"."))),(0,r.kt)("h2",{id:"mgp_typing_to_cypher_type"},(0,r.kt)("inlineCode",{parentName:"h2"},"mgp._typing_to_cypher_type()")),(0,r.kt)("p",null,"Convert typing annotation to a ",(0,r.kt)("inlineCode",{parentName:"p"},"_mgp.CypherType")," instance."),(0,r.kt)("h2",{id:"class-mgppropertiesvertex_or_edge"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Properties(vertex_or_edge)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"A collection of properties either on a vertex or an edge."),(0,r.kt)("h3",{id:"getproperty_name-default"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(property_name, default)")),(0,r.kt)("p",null,"Get the value of a property with the given name or return default."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"items"},(0,r.kt)("inlineCode",{parentName:"h3"},"items()")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"keys"},(0,r.kt)("inlineCode",{parentName:"h3"},"keys()")),(0,r.kt)("p",null,"Iterate over property names."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"values"},(0,r.kt)("inlineCode",{parentName:"h3"},"values()")),(0,r.kt)("p",null,"Iterate over property values."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h2",{id:"class-mgplabelname"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Label(name)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Label of a Vertex."),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("h2",{id:"class-mgpedgetypename"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.EdgeType(name)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Type of an Edge."),(0,r.kt)("h3",{id:"name-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("h2",{id:"class-mgpedgeedge"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Edge(edge)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Edge in the graph database."),(0,r.kt)("p",null,"Access to an Edge is only valid during a single execution of a procedure in a\nquery. You shouldn't store an instance of an Edge globally. Using an invalid\nEdge instance will raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"from_vertex"},(0,r.kt)("inlineCode",{parentName:"h3"},"from_vertex")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"is_valid"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," is in a valid context and may be used."),(0,r.kt)("h3",{id:"properties"},(0,r.kt)("inlineCode",{parentName:"h3"},"properties")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"to_vertex"},(0,r.kt)("inlineCode",{parentName:"h3"},"to_vertex")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h2",{id:"class-mgpvertexvertex"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Vertex(vertex)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Vertex in the graph database."),(0,r.kt)("p",null,"Access to a Vertex is only valid during a single execution of a procedure in a\nquery. You shouldn't store an instance of a Vertex globally. Using an invalid\nVertex instance will raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"id-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"in_edges"},(0,r.kt)("inlineCode",{parentName:"h3"},"in_edges")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"is_valid-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," is in a valid context and may be used."),(0,r.kt)("h3",{id:"labels"},(0,r.kt)("inlineCode",{parentName:"h3"},"labels")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"out_edges"},(0,r.kt)("inlineCode",{parentName:"h3"},"out_edges")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h3",{id:"properties-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"properties")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError"),"."),(0,r.kt)("h2",{id:"class-mgppathstarting_vertex_or_path-unionmgpedge-mgpvertex"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Path(starting_vertex_or_path: Union[mgp.Edge, mgp.Vertex])")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Path containing Vertex and Edge instances."),(0,r.kt)("h3",{id:"edges"},(0,r.kt)("inlineCode",{parentName:"h3"},"edges")),(0,r.kt)("p",null,"Edges ordered from the start to the end of the path."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if using an invalid Path instance."),(0,r.kt)("h3",{id:"expandedge"},(0,r.kt)("inlineCode",{parentName:"h3"},"expand(edge)")),(0,r.kt)("p",null,"Append an edge continuing from the last vertex on the path."),(0,r.kt)("p",null,"The last vertex on the path will become the other endpoint of the given edge, as\ncontinued from the current last vertex."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"ValueError")," if the current last vertex in the path is not part of the\ngiven edge. Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if using an invalid Path instance or if\npassed in edge is invalid."),(0,r.kt)("h3",{id:"is_valid-2"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("h3",{id:"vertices"},(0,r.kt)("inlineCode",{parentName:"h3"},"vertices")),(0,r.kt)("p",null,"Vertices ordered from the start to the end of the path."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if using an invalid Path instance."),(0,r.kt)("h2",{id:"class-mgprecordkwargs"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Record(**kwargs)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Represents a record of resulting field values."),(0,r.kt)("h3",{id:"fields"},(0,r.kt)("inlineCode",{parentName:"h3"},"fields")),(0,r.kt)("h2",{id:"class-mgpverticesgraph"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Vertices(graph)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Iterable over vertices in a graph."),(0,r.kt)("h3",{id:"is_valid-3"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," is in a valid context and may be used."),(0,r.kt)("h2",{id:"class-mgpgraphgraph"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Graph(graph)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"State of the graph database in the current process context ",(0,r.kt)("inlineCode",{parentName:"p"},"ProcCtx"),"."),(0,r.kt)("h3",{id:"get_vertex_by_idvertex_id"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_vertex_by_id(vertex_id)")),(0,r.kt)("p",null,"Return the Vertex corresponding to given ",(0,r.kt)("inlineCode",{parentName:"p"},"vertex_id")," from the graph."),(0,r.kt)("p",null,"Access to a Vertex is only valid during a single execution of a procedure in a\nquery. You shouldn't store the returned Vertex globally."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexError")," if unable to find the given ",(0,r.kt)("inlineCode",{parentName:"p"},"vertex_id"),". Raise\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if context is invalid."),(0,r.kt)("h3",{id:"is_valid-4"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," is in a valid context and may be used."),(0,r.kt)("h3",{id:"vertices-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"vertices")),(0,r.kt)("p",null,"All vertices in the graph."),(0,r.kt)("p",null,"Access to a Vertex is only valid during a single execution of a procedure in a\nquery. You shouldn't store the returned Vertex instances globally."),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if context is invalid."),(0,r.kt)("h2",{id:"class-mgpprocctxgraph"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.ProcCtx(graph)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Context of a procedure being executed."),(0,r.kt)("p",null,"Access to ",(0,r.kt)("inlineCode",{parentName:"p"},"ProcCtx")," is only valid during a single execution of a procedure in a\nquery. You shouldn't store a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProcCtx")," instance globally."),(0,r.kt)("h3",{id:"check_must_abort"},(0,r.kt)("inlineCode",{parentName:"h3"},"check_must_abort()")),(0,r.kt)("h3",{id:"graph"},(0,r.kt)("inlineCode",{parentName:"h3"},"graph")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if context is invalid."),(0,r.kt)("h3",{id:"is_valid-5"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("h3",{id:"must_abort"},(0,r.kt)("inlineCode",{parentName:"h3"},"must_abort()")),(0,r.kt)("h2",{id:"class-mgpdeprecatedtype_"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Deprecated(type_)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Annotate a resulting Record\u2019s field as deprecated."),(0,r.kt)("h3",{id:"field_type"},(0,r.kt)("inlineCode",{parentName:"h3"},"field_type()")),(0,r.kt)("h2",{id:"class-mgpunsupportedtypingerrortype_"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.UnsupportedTypingError(type_)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")),(0,r.kt)("p",null,"Signals a typing annotation is not supported as a ",(0,r.kt)("inlineCode",{parentName:"p"},"_mgp.CypherType"),"."),(0,r.kt)("h2",{id:"class-mgpaborterror"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.AbortError()")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")),(0,r.kt)("p",null,"Signals that the procedure was asked to abort its execution."),(0,r.kt)("h2",{id:"class-mgpinvalidcontexterror"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.InvalidContextError()")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")),(0,r.kt)("p",null,"Signals using a graph element instance outside of the registered procedure."))}m.isMDXComponent=!0}}]);