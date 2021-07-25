(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87143],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=l(n),c=r,g=d["".concat(i,".").concat(c)]||d[c]||u[c]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36870:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o=["components"],m={id:"implement-transformation-module",title:"Implement transformation modules",sidebar_label:"Implement transformation modules"},i=void 0,l={unversionedId:"database-functionalities/streams/implement-transformation-module",id:"database-functionalities/streams/implement-transformation-module",isDocsHomePage:!1,title:"Implement transformation modules",description:"The prerequisite of connecting Memgraph to a Kafka stream is  to have a",source:"@site/docs/database-functionalities/streams/implement-transformation-module.md",sourceDirName:"database-functionalities/streams",slug:"/database-functionalities/streams/implement-transformation-module",permalink:"/memgraph/next/database-functionalities/streams/implement-transformation-module",editUrl:"https://github.com/memgraph/docs/tree/master/docs/database-functionalities/streams/implement-transformation-module.md",version:"current",frontMatter:{id:"implement-transformation-module",title:"Implement transformation modules",sidebar_label:"Implement transformation modules"},sidebar:"memgraph",previous:{title:"Managing Kafka streams",permalink:"/memgraph/next/database-functionalities/streams/kafka-streams"},next:{title:"Existence constraint",permalink:"/memgraph/next/database-functionalities/constraints/existence-constraint"}},p=[{value:"Using Docker with transformation modules",id:"using-docker-with-transformation-modules",children:[]},{value:"Python API",id:"python-api",children:[]},{value:"C API",id:"c-api",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The prerequisite of connecting Memgraph to a Kafka stream is  to have a\ntransformation module that can produce Cypher queries based on the received\nmessages. We are going to implement a simple transformation that stores the\nproperties of each message in a vertex."),(0,s.kt)("h2",{id:"using-docker-with-transformation-modules"},"Using Docker with transformation modules"),(0,s.kt)("p",null,"If you are using Docker to run Memgraph you will have to create a volume\nand mount it to access the ",(0,s.kt)("inlineCode",{parentName:"p"},"query_modules")," directory. Yes, ",(0,s.kt)("inlineCode",{parentName:"p"},"query_modules"),",\nbecause Memgraph can load transformations and query procedures from the same\ndirectory, even from the same module. Mounting a volume can be done by\ncreating an empty directory ",(0,s.kt)("inlineCode",{parentName:"p"},"modules")," and executing the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker volume create --driver local --opt type=none  --opt device=modules --opt o=bind modules\n")),(0,s.kt)("p",null,"Now, you can start Memgraph and mount the created volume:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm -v modules:/usr/lib/memgraph/query_modules -p 7687:7687 memgraph\n")),(0,s.kt)("p",null,"Everything from the directory ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be\nvisible/editable in your mounted ",(0,s.kt)("inlineCode",{parentName:"p"},"modules")," volume and vice versa."),(0,s.kt)("p",null,"Through the rest of this page, ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be used to\nrefer to this directory. If you are using Docker, then please do the same but\nwith the recently created ",(0,s.kt)("inlineCode",{parentName:"p"},"modules")," directory."),(0,s.kt)("h2",{id:"python-api"},"Python API"),(0,s.kt)("p",null,"Transformations can be implemented using the Python API provided by Memgraph.\nIf you wish to write your own transformation using the Python API, you need to\nhave Python version 3.5.0 or above installed."),(0,s.kt)("p",null,"Let's create a file called ",(0,s.kt)("inlineCode",{parentName:"p"},"transformation.py")," in the\n",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. First and foremost, import the\n",(0,s.kt)("inlineCode",{parentName:"p"},"mgp")," module, which contains definitions of the public Python API provided\nby Memgraph."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n")),(0,s.kt)("p",null,"Next, we have to implement the function that does the transformation. For\ntransformations, the return type is fixed, while the parameters of the\ntransformation can vary. The whole signature of a transformation is the\nfollowing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\ndef my_transformation(context: mgp.TransCtx,\n                      messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    ...\n")),(0,s.kt)("p",null,"The transformations can slightly deviate from this by not receiving the\n",(0,s.kt)("inlineCode",{parentName:"p"},"context"),", just the ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\ndef my_transformation(messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    ...\n")),(0,s.kt)("p",null,"As this simple transformation won't access the vertices and edges in the\ndatabase, the ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," parameter is not necessary, so we are going to use the\nsimpler version."),(0,s.kt)("p",null,"The most important part is the actual implementation of the transformation\nfunction. Before showing how it can be done, let's clarify what is it\nsupposed to do: it receives a list of messages and returns some queries and\ntheir parameters that will be executed in Memgraph as any regular query. Right,\nlet's see how we can do that!"),(0,s.kt)("p",null,"We have to iterate over the messages and construct a query for each of them:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\ndef my_transformation(messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        payload_as_str = message.payload().decode(\"utf-8\")\n        result_queries.append(mgp.Record(\n            query=\"CREATE (n:MESSAGE {{timestamp: '{timestamp}', payload: '{payload}', topic: '{topic}'}})\".format(\n                timestamp=message.timestamp(), payload=payload_as_str, topic=message.topic_name()),\n            parameters=None))\n\n    return result_queries\n")),(0,s.kt)("p",null,"As you can see, the query is almost the same for every message, except the\nthree properties of the messages. This is exactly the case when the\n",(0,s.kt)("inlineCode",{parentName:"p"},"parameters")," field of the result is handy. Instead of formatting the string\nwith the properties, we can pass the properties as query parameters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\n\ndef my_transformation(messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        payload_as_str = message.payload().decode("utf-8")\n        result_queries.append(mgp.Record(\n            query="CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})",\n            parameters={"timestamp": message.timestamp(),\n                        "payload": payload_as_str,\n                        "topic": message.topic_name()}))\n\n    return result_queries\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"$timestamp"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"$payload")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"$topic")," are the placeholders for parameters\nwith the same name."),(0,s.kt)("p",null,"Last, but not least we have to mark our function as a transformation so it will\nbe recognized by Memgraph when the module is loaded. It can be done by adding\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"@mgp.transformation")," decorator to the function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\n\n@mgp.transformation\ndef my_transformation(messages: mgp.Messages\n                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        payload_as_str = message.payload().decode("utf-8")\n        result_queries.append(mgp.Record(\n            query="CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})",\n            parameters={"timestamp": message.timestamp(),\n                        "payload": payload_as_str,\n                        "topic": message.topic_name()}))\n\n    return result_queries\n')),(0,s.kt)("p",null,"Congratulations, you just created your first transformation procedure! To\nensure that Memgraph can find the transformation, let's reload the modules:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,s.kt)("p",null,"And list all the available transformations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,s.kt)("p",null,"You should see something like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+------------------------------------+\n| name                               |\n+------------------------------------+\n| "transformation.my_transformation" |\n+------------------------------------+\n')),(0,s.kt)("h2",{id:"c-api"},"C API"),(0,s.kt)("p",null,"Transformations can also be implemented in C/C++ using the C API provided by\nMemgraph. Such modules need to be compiled to a shared library so that they can\nbe loaded when Memgraph starts. This means that you can write the\ntransformations in any programming language which can work with C and can be\ncompiled to the ELF shared library format."),(0,s.kt)("p",null,"In this chapter, we assume that Memgraph is installed on a standard Debian or\nUbuntu machine where the necessary header file can be found under\n",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),". For other installations, the header file can be found\nunder the ",(0,s.kt)("inlineCode",{parentName:"p"},"include/memgraph")," folder in the Memgraph installation directory."),(0,s.kt)("p",null,"As we already discussed how transformations work in the Python example we\nwon't go over the transformation itself in detail. Also, to keep the\ncomplexity of this example low, this transformation doesn't use the query\nparameters. Apart from that this transformation does the same as the Python\nexample, but written in C++17."),(0,s.kt)("p",null,"So let's create ",(0,s.kt)("inlineCode",{parentName:"p"},"c_transformation.cpp")," and start to populate it!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <exception>\n#include <string>\n#include <string_view>\n\n#include "mg_procedure.h"\n\nconst std::string query_part_1{"CREATE (n:MESSAGE {timestamp: \'"};\nconst std::string query_part_2{"\', payload: \'"};\nconst std::string query_part_3{"\', topic: \'"};\nconst std::string query_part_4{"\'})"};\n\nstd::string create_query(const mgp_message &message) {\n  return query_part_1 + std::to_string(mgp_message_timestamp(&message)) +\n         query_part_2 +\n         std::string{mgp_message_payload(&message),\n                     mgp_message_payload_size(&message)} +\n         query_part_3 + mgp_message_topic_name(&message) + query_part_4;\n}\n\nvoid my_c_transformation(const struct mgp_messages *messages,\n                         const struct mgp_graph *, struct mgp_result *result,\n                         struct mgp_memory *memory) {\n\n  auto *null_value = mgp_value_make_null(memory);\n  try {\n    auto messages_size = mgp_messages_size(messages);\n    for (auto i = 0; i < messages_size; ++i) {\n      auto *message = mgp_messages_at(messages, i);\n      auto query = create_query(*message);\n      auto *record = mgp_result_new_record(result);\n      auto *query_value = mgp_value_make_string(query.c_str(), memory);\n      auto record_inserted =\n          mgp_result_record_insert(record, "query", query_value) != 0;\n      mgp_value_destroy(query_value);\n      if (!record_inserted) {\n        mgp_result_set_error_msg(result, "Couldn\'t insert field");\n        break;\n      }\n      record_inserted =\n          mgp_result_record_insert(record, "parameters", null_value) != 0;\n      if (!record_inserted) {\n        mgp_result_set_error_msg(result, "Couldn\'t insert field");\n        break;\n      }\n    }\n    mgp_value_destroy(null_value);\n  } catch (const std::exception &e) {\n    mgp_value_destroy(null_value);\n    mgp_result_set_error_msg(result, e.what());\n    return;\n  }\n}\n')),(0,s.kt)("p",null,"Now we have to register the transformation in the ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'extern "C" int mgp_init_module(mgp_module *module, mgp_memory *memory) {\n  return mgp_module_add_transformation(module, "my_c_transformation",\n                                       my_c_transformation) == 0;\n}\n')),(0,s.kt)("p",null,"Now let's compile it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"clang++ --std=c++17 -Wall -shared -fPIC -I /home/kovi/data/memgraph/include c_transformation.cpp -o c_transformation.so\n")),(0,s.kt)("p",null,"After copying the resulting ",(0,s.kt)("inlineCode",{parentName:"p"},"c_transformation.so")," to the\n",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory we can reload the modules and check\nif Memgraph found our newly created transformation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,s.kt)("p",null,"Then the transformation should show up in the list of transformations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,s.kt)("p",null,"You should see something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------+\n| name                                   |\n+----------------------------------------+\n| "c_transformation.my_c_transformation" |\n| "transformation.my_transformation"     |\n+----------------------------------------+\n')),(0,s.kt)("p",null,"For a more detailed overview check out the ",(0,s.kt)("a",{parentName:"p",href:"/memgraph/next/reference-guide/streams/transformation-modules"},"Reference\nguide"),"."))}d.isMDXComponent=!0}}]);