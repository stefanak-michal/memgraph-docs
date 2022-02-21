"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29503],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),c=a,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82717:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"implement-transformation-module",title:"How to implement transformation modules",sidebar_label:"Implement transformation modules"},m=void 0,l={unversionedId:"how-to-guides/streams/pulsar/implement-transformation-module",id:"version-2.1.1/how-to-guides/streams/pulsar/implement-transformation-module",title:"How to implement transformation modules",description:"The prerequisite of connecting Memgraph to a Pulsar stream is to have a",source:"@site/memgraph_versioned_docs/version-2.1.1/how-to-guides/streams/pulsar/implement-transformation-module.md",sourceDirName:"how-to-guides/streams/pulsar",slug:"/how-to-guides/streams/pulsar/implement-transformation-module",permalink:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/implement-transformation-module",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/how-to-guides/streams/pulsar/implement-transformation-module.md",tags:[],version:"2.1.1",frontMatter:{id:"implement-transformation-module",title:"How to implement transformation modules",sidebar_label:"Implement transformation modules"},sidebar:"memgraph",previous:{title:"Manage Pulsar streams",permalink:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/pulsar-streams"},next:{title:"Existence constraint",permalink:"/docs/memgraph/2.1.1/how-to-guides/constraints/existence-constraint"}},p=[{value:"Using Docker with transformation modules",id:"using-docker-with-transformation-modules",children:[],level:2},{value:"Python API",id:"python-api",children:[],level:2},{value:"C API",id:"c-api",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The prerequisite of connecting Memgraph to a Pulsar stream is to have a\ntransformation module that can produce Cypher queries based on the received\nmessages. We are going to implement a simple transformation that stores the\nproperties of each message in a vertex."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For detailed technical information on transformation modules, check out the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules"},"reference guide"),"."))),(0,o.kt)("h2",{id:"using-docker-with-transformation-modules"},"Using Docker with transformation modules"),(0,o.kt)("p",null,"If you are using Docker to run Memgraph, you will have to create a volume and\nmount it to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"query_modules")," directory. Yes, ",(0,o.kt)("inlineCode",{parentName:"p"},"query_modules"),", because\nMemgraph can load transformations and query procedures from the same directory,\neven from the same module. Mounting a volume can be done by creating an empty\ndirectory ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," and executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker volume create --driver local --opt type=none --opt device=modules --opt o=bind modules\n")),(0,o.kt)("p",null,"Now, you can start Memgraph and mount the created volume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm -p 7687:7687 -p 3000:3000 -v modules:/usr/lib/memgraph/query_modules memgraph\n")),(0,o.kt)("p",null,"Everything from the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be\nvisible/editable in your mounted ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," volume and vice versa."),(0,o.kt)("p",null,"Through the rest of this page, ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be used to\nrefer to this directory. If you are using Docker, then please do the same but\nwith the recently created ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," directory."),(0,o.kt)("h2",{id:"python-api"},"Python API"),(0,o.kt)("p",null,"Transformations can be implemented using the Python API provided by Memgraph. If\nyou wish to write your own transformation using the Python API, you need to have\nPython version 3.5.0 or above installed."),(0,o.kt)("p",null,"Let's create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"transformation.py")," in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. First and foremost, import the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mgp")," module, which contains definitions of the public Python API provided by\nMemgraph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n")),(0,o.kt)("p",null,"Next, we have to implement the function that does the transformation. For\ntransformations, the return type is fixed, while the parameters of the\ntransformation can vary. The whole signature of a transformation is the\nfollowing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.transformation\ndef my_pulsar_transformation(context: mgp.TransCtx,\n                      messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    ...\n")),(0,o.kt)("p",null,"We also marked our function as a transformation so it will be recognized by\nMemgraph when the module is loaded. This was done by adding the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@mgp.transformation")," decorator."),(0,o.kt)("p",null,"The transformations can slightly deviate from this by not receiving the\n",(0,o.kt)("inlineCode",{parentName:"p"},"context")," , just the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.transformation\ndef my_pulsar_transformation(messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    ...\n")),(0,o.kt)("p",null,"As this simple transformation won't access the vertices and edges in the\ndatabase, the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," parameter is not necessary, so we are going to use the\nsimpler version."),(0,o.kt)("p",null,"The most important part is the actual implementation of the transformation\nfunction. Before showing how it can be done, let's clarify what it is supposed\nto do: it receives a list of messages and returns some queries and their\nparameters that will be executed in Memgraph as any regular query. Right, let's\nsee how we can do that!"),(0,o.kt)("p",null,"We have to iterate over the messages and construct a query for each of them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.transformation\ndef my_pulsar_transformation(messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        payload_as_str = message.payload().decode(\"utf-8\")\n        result_queries.append(mgp.Record(\n            query=f\"CREATE (n:MESSAGE {{payload: '{payload}', topic: '{topic}'}})\".format(\n                payload=payload_as_str, topic=message.topic_name()),\n            parameters=None))\n\n    return result_queries\n")),(0,o.kt)("p",null,"As you can see, the query is almost the same for every message, except the three\nproperties of the messages. This is precisely the case when the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameters")),(0,o.kt)("p",null,"field of the result is handy. Instead of formatting the string with the\nproperties, we can pass the properties as query parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\n\n@mgp.transformation\ndef my_pulsar_transformation(messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        payload_as_str = message.payload().decode("utf-8")\n        result_queries.append(mgp.Record(\n            query="CREATE (n:MESSAGE {payload: $payload, topic: $topic})",\n            parameters={"payload": payload_as_str,\n                        "topic": message.topic_name()}))\n\n    return result_queries\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$payload")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$topic")," are the placeholders for parameters with the same\nname."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,o.kt)("p",null,"And list all the available transformations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,o.kt)("p",null,"You should see something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-------------------------------------------+\n| name                                      |\n+-------------------------------------------+\n| "transformation.my_pulsar_transformation" |\n+-------------------------------------------+\n')),(0,o.kt)("h2",{id:"c-api"},"C API"),(0,o.kt)("p",null,"Transformations can also be implemented in C/C++ using the C API provided by\nMemgraph. Such modules need to be compiled to a shared library so that they can\nbe loaded when Memgraph starts. This means that you can write the\ntransformations in any programming language which can work with C and can be\ncompiled to the ELF shared library format."),(0,o.kt)("p",null,"In this chapter, we assume that Memgraph is installed on a standard Debian or\nUbuntu machine where the necessary header file can be found under\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph")," . For other installations, the header file can be found\nunder the ",(0,o.kt)("inlineCode",{parentName:"p"},"include/memgraph")," folder in the Memgraph installation directory."),(0,o.kt)("p",null,"As we already discussed how transformations work in the Python example, we won't\ngo over the transformation itself in detail. Also, to keep the complexity of\nthis example low, this transformation doesn't use the query parameters. Apart\nfrom that, this transformation does the same as the Python example but is\nimplemented in C++17."),(0,o.kt)("p",null,"So let's create ",(0,o.kt)("inlineCode",{parentName:"p"},"c_transformation.cpp")," and start to populate it!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <exception>\n#include <string>\n#include <string_view>\n\n#include "mg_procedure.h"\n\nconst std::string query_part_1{"CREATE (n:MESSAGE {"};\nconst std::string query_part_2{"payload: \'"};\nconst std::string query_part_3{"\', topic: \'"};\nconst std::string query_part_4{"\'})"};\n\nstd::string create_query(const mgp_message &message) {\n  return query_part_1 + query_part_2 +\n         std::string{mgp_message_payload(&message),\n                     mgp_message_payload_size(&message)} +\n         query_part_3 + mgp_message_topic_name(&message) + query_part_4;\n}\n\nvoid my_c_transformation(const struct mgp_messages *messages,\n                         const struct mgp_graph *, struct mgp_result *result,\n                         struct mgp_memory *memory) {\n\n  auto *null_value = mgp_value_make_null(memory);\n  try {\n    auto messages_size = mgp_messages_size(messages);\n    for (auto i = 0; i < messages_size; ++i) {\n      auto *message = mgp_messages_at(messages, i);\n      auto query = create_query(*message);\n      auto *record = mgp_result_new_record(result);\n      auto *query_value = mgp_value_make_string(query.c_str(), memory);\n      auto record_inserted =\n          mgp_result_record_insert(record, "query", query_value) != 0;\n      mgp_value_destroy(query_value);\n      if (!record_inserted) {\n        mgp_result_set_error_msg(result, "Couldn\'t insert field");\n        break;\n      }\n      record_inserted =\n          mgp_result_record_insert(record, "parameters", null_value) != 0;\n      if (!record_inserted) {\n        mgp_result_set_error_msg(result, "Couldn\'t insert field");\n        break;\n      }\n    }\n    mgp_value_destroy(null_value);\n  } catch (const std::exception &e) {\n    mgp_value_destroy(null_value);\n    mgp_result_set_error_msg(result, e.what());\n    return;\n  }\n}\n')),(0,o.kt)("p",null,"Now we have to register the transformation in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'extern "C" int mgp_init_module(mgp_module *module, mgp_memory *memory) {\n  return mgp_module_add_transformation(module, "my_c_transformation",\n                                       my_c_transformation) == 0;\n}\n')),(0,o.kt)("p",null,"Now let's compile it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"clang++ --std=c++17 -Wall -shared -fPIC -I /usr/include/memgraph c_transformation.cpp -o c_transformation.so\n")),(0,o.kt)("p",null,"After copying the resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"c_transformation.so")," to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory, we can reload the modules and check\nif Memgraph found our newly created transformation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,o.kt)("p",null,"Then the transformation should show up in the list of transformations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-------------------------------------------+\n| name                                      |\n+-------------------------------------------+\n| "c_transformation.my_c_transformation"    |\n| "transformation.my_pulsar_transformation" |\n+-------------------------------------------+\n')),(0,o.kt)("p",null,"For a more detailed overview, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/reference-guide/streams/transformation-modules"},"Reference\nguide"),"."))}d.isMDXComponent=!0}}]);