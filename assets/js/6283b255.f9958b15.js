(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42988],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return c}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=s,d=u["".concat(o,".").concat(c)]||u[c]||g[c]||r;return n?a.createElement(d,m(m({ref:t},l),{},{components:n})):a.createElement(d,m({ref:t},l))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,m=new Array(r);m[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,m[1]=i;for(var p=2;p<r;p++)m[p]=n[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69122:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=n(22122),s=n(19756),r=(n(67294),n(3905)),m=["components"],i={id:"c-api",title:"Transformation modules C API",sidebar_label:"C API"},o=void 0,p={unversionedId:"reference-guide/streams/transformation-modules/api/c-api",id:"reference-guide/streams/transformation-modules/api/c-api",isDocsHomePage:!1,title:"Transformation modules C API",description:"This is the additional API documentation for mg_procedure.h that contains declarations of all functions that can be used to implement a transformation. The source file can be found in the Memgraph installation directory, under include/memgraph. On the standard Debian installation, this will be under /usr/include/memgraph.",source:"@site/docs/reference-guide/streams/transformation-modules/api/c-api.md",sourceDirName:"reference-guide/streams/transformation-modules/api",slug:"/reference-guide/streams/transformation-modules/api/c-api",permalink:"/memgraph/next/reference-guide/streams/transformation-modules/api/c-api",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/streams/transformation-modules/api/c-api.md",version:"current",frontMatter:{id:"c-api",title:"Transformation modules C API",sidebar_label:"C API"},sidebar:"memgraph",previous:{title:"Overview",permalink:"/memgraph/next/reference-guide/streams/transformation-modules"},next:{title:"Python API",permalink:"/memgraph/next/reference-guide/streams/transformation-modules/api/python-api"}},l=[{value:"Types",id:"types",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Types Documentation",id:"types-documentation",children:[{value:"typedef mgp_trans_cb",id:"typedef-mgp_trans_cb",children:[]}]},{value:"Functions Documentation",id:"functions-documentation",children:[{value:"function mgp_messages_size",id:"function-mgp_messages_size",children:[]},{value:"function mgp_messages_at",id:"function-mgp_messages_at",children:[]},{value:"function mgp_message_payload_size",id:"function-mgp_message_payload_size",children:[]},{value:"function mgp_message_payload",id:"function-mgp_message_payload",children:[]},{value:"function mgp_message_topic_name",id:"function-mgp_message_topic_name",children:[]},{value:"function mgp_message_key_size",id:"function-mgp_message_key_size",children:[]},{value:"function mgp_message_key",id:"function-mgp_message_key",children:[]},{value:"function mgp_message_timestamp",id:"function-mgp_message_timestamp",children:[]},{value:"function mgp_module_add_transformation",id:"function-mgp_module_add_transformation",children:[]}]}],g={toc:l};function u(e){var t=e.components,n=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the additional API documentation for ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," that contains declarations of all functions that can be used to implement a transformation. The source file can be found in the Memgraph installation directory, under ",(0,r.kt)("inlineCode",{parentName:"p"},"include/memgraph"),". On the standard Debian installation, this will be under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," This part of the documentation is still under development. An updated version will soon be available."))),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typedef void (","*",")(const struct mgp_messages ","*",", const struct mgp_graph ","*",", struct mgp_result ","*",", struct mgp_memory ","*",");"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#typedef-mgp_trans_cb"},"mgp_trans_cb"))," ",(0,r.kt)("br",null),"Entry-point for a transformation with a fixed result type")))),(0,r.kt)("p",null,"Each record of the result must contain the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," field with a Cypher query as a string that will be executed against the database"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," field with the optional query parameters as a nullable map")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size_t"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_messages_size"},"mgp_messages_size")),"(const struct mgp_messages ","*","messages) ",(0,r.kt)("br",null),"Get the number of messages contained in the messages list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"const struct mgp_message ","*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_messages_at"},"mgp_messages_at")),"(const struct mgp_messages ","*","messages, size_t idx) ",(0,r.kt)("br",null)," Get the mgp_message at index idx.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size_t"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_message_payload_size"},"mgp_message_payload_size")),"(const struct mgp_message ","*","message) ",(0,r.kt)("br",null)," Get the payload size of message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_message_payload"},"mgp_message_payload")),"(const struct mgp_message ","*","message) ",(0,r.kt)("br",null)," Get the payload of messages as a byte array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_message_topic_name"},"mgp_message_topic_name")),"(const struct mgp_message ","*","message) ",(0,r.kt)("br",null)," Get the topic name of message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size_t"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_message_key_size"},"mgp_message_key_size")),"(const struct mgp_message ","*","message) ",(0,r.kt)("br",null)," Get key size of message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_message_key"},"mgp_message_key")),"(const struct mgp_message ","*","message) ",(0,r.kt)("br",null)," Get key of message as a byte array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int64_t"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_message_timestamp"},"mgp_message")),"(const struct mgp_message ","*","message) ",(0,r.kt)("br",null)," Get the timestamp of message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#function-mgp_module_add_transformation"},"mgp_module_add_transformation")),"(struct mgp_module ","*","module, const char ","*","name, mgp_trans_cb cb) ",(0,r.kt)("br",null)," Registers a transformation to a module")))),(0,r.kt)("h2",{id:"types-documentation"},"Types Documentation"),(0,r.kt)("h3",{id:"typedef-mgp_trans_cb"},"typedef mgp_trans_cb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"typedef void(* mgp_trans_cb) (const struct mgp_messages *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *);\n")),(0,r.kt)("p",null,"Entry-point for a transformation invoked through a stream.\nPassed in arguments will not live longer than the callback's execution. Therefore,\nyou must not store them globally or use the passed in ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp_memory")," to allocate global resources.\nThe result type of transformation is fixed."),(0,r.kt)("h2",{id:"functions-documentation"},"Functions Documentation"),(0,r.kt)("h3",{id:"function-mgp_messages_size"},"function mgp_messages_size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_messages_size(\n  const struct mgp_messages* messages\n)\n")),(0,r.kt)("p",null,"Returns the total number of messages contained in the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"messages"),"."),(0,r.kt)("h3",{id:"function-mgp_messages_at"},"function mgp_messages_at"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"mgp_message* mgp_messages_at(\n  const struct mgp_messages* messages,\n  size_t idx\n)\n")),(0,r.kt)("p",null,"Accessor function that returns the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," stored at index ",(0,r.kt)("inlineCode",{parentName:"p"},"idx")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"messages"),".\nThe index supplied must reside in the half-open interval [0, ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp_messages_size(messages)"),")."),(0,r.kt)("h3",{id:"function-mgp_message_payload_size"},"function mgp_message_payload_size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_message_payload_size\n  const struct mgp_message* message\n)\n")),(0,r.kt)("p",null,"Returns the payload size of the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,r.kt)("h3",{id:"function-mgp_message_payload"},"function mgp_message_payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_payload(\n  const struct mgp_message* message\n)\n")),(0,r.kt)("p",null,"Returns the payload of the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," as a byte array with size ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp_message_payload_size(message)"),"."),(0,r.kt)("h3",{id:"function-mgp_message_topic_name"},"function mgp_message_topic_name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_topic_name(\n  const struct mgp_message* message\n)\n")),(0,r.kt)("p",null,"Returns topic name of the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),". Topic name is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," terminated."),(0,r.kt)("h3",{id:"function-mgp_message_key_size"},"function mgp_message_key_size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_message_key_size(\n  const struct mgp_message* message\n)\n")),(0,r.kt)("p",null,"Returns the key size of argument ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,r.kt)("h3",{id:"function-mgp_message_key"},"function mgp_message_key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_key(\n  const struct mgp_message* message\n)\n")),(0,r.kt)("p",null,"Returns the key of the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," as a byte array with size ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp_message_key_size(message)"),"."),(0,r.kt)("h3",{id:"function-mgp_message_timestamp"},"function mgp_message_timestamp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t mgp_timestamp(\n  const struct mgp_message* message\n)\n")),(0,r.kt)("p",null,"Returns the timestamp of the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,r.kt)("h3",{id:"function-mgp_module_add_transformation"},"function mgp_module_add_transformation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int mgp_module_add_transformation(\n  struct mgp_module *module,\n  const char *name,\n  mgp_trans_cb cb\n)\n")),(0,r.kt)("p",null,"Register a transformation to a module. The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," must be a sequence of digits, underscores,\nlowercase, and uppercase Latin letters. The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," must begin with a non-digit character.\nNote that Unicode characters are not allowed. Additionally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is case-sensitive."),(0,r.kt)("p",null,"Return non-zero if the transformation is added successfully. Registering might\nfail if unable to allocate memory for the transformation; if ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is not\nvalid, or a transformation with the same name was already registered or if any\nother unexpected failure happens."))}u.isMDXComponent=!0}}]);