"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62990],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(87462),a=t(67294),o=t(72389),l=t(29548),i=t(86010),u="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,p=e.block,m=e.defaultValue,c=e.values,d=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),E=y.tabGroupChoices,T=y.setTabGroupChoices,b=(0,a.useState)(v),A=b[0],N=b[1],C=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var R=E[d];null!=R&&R!==A&&g.some((function(e){return e.value===R}))&&N(R)}var P=function(e){var n=e.currentTarget,t=C.indexOf(n),r=g[t].value;r!==A&&(w(n),N(r),null!=d&&T(d,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===n?0:-1,"aria-selected":A===n,key:n,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":A===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==A})}))))}function p(e){var n=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},72012:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=t(9877),i=t(58215),u=["components"],s={id:"cypherl",title:"Importing Cypher queries (.cypherl format)",sidebar_label:"Cypher queries (.cypherl format)",pagination_prev:"import-data/overview"},p=void 0,m={unversionedId:"import-data/cypherl",id:"version-2.1.1/import-data/cypherl",title:"Importing Cypher queries (.cypherl format)",description:"When Memgraph is running, Cypher queries are imported by running",source:"@site/memgraph_versioned_docs/version-2.1.1/import-data/cypherl.md",sourceDirName:"import-data",slug:"/import-data/cypherl",permalink:"/docs/memgraph/2.1.1/import-data/cypherl",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/import-data/cypherl.md",tags:[],version:"2.1.1",frontMatter:{id:"cypherl",title:"Importing Cypher queries (.cypherl format)",sidebar_label:"Cypher queries (.cypherl format)",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.1.1/import-data"},next:{title:"JSON",permalink:"/docs/memgraph/2.1.1/import-data/json/load-json"}},c=[{value:"Examples",id:"examples",children:[{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",children:[],level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",children:[],level:3}],level:2}],d={toc:c};function h(e){var n=e.components,s=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When Memgraph is running, Cypher queries are imported by running\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/connect-to-memgraph/mgconsole"},"mgconsole")," in non-interactive mode and\nimporting data saved in a ",(0,o.kt)("inlineCode",{parentName:"p"},".cypherl")," file. "),(0,o.kt)("p",null,"The great thing about importing data with the ",(0,o.kt)("inlineCode",{parentName:"p"},".cypherl")," file is that you need\nonly one file to cover both nodes and relationships. But it can be tricky to\nactually write the queries for creating nodes and relationships yourself. If you\nhaven't written any queries yet, we highly suggest you check our ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher\nmanual"),"."),(0,o.kt)("p",null,"Please check the examples below to find out how to use import data using the\n",(0,o.kt)("inlineCode",{parentName:"p"},".cypherl")," file based on the complexity of your data."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Below, you can find two examples of how to import data within the ",(0,o.kt)("inlineCode",{parentName:"p"},".cypher")," file\nbased on the complexity of your data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and\nrelationships"))),(0,o.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,o.kt)("p",null,"Copy the following into a ",(0,o.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE (:Person {id: "100", name: "Daniel", age: 30, city: "London"});\nCREATE (:Person {id: "101", name: "Alex", age: 15, city: "Paris"});\nCREATE (:Person {id: "102", name: "Sarah", age: 101, city: "London"});\nCREATE (:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});\nCREATE (:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "101" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\n')),(0,o.kt)("p",null,"The first five queries create nodes for people and the rest of the queries create\nrelationships between nodes. After you have prepared your queries, you can\nimport them with the command below or drag and drop them using the\n",(0,o.kt)("strong",{parentName:"p"},"Dataset")," tab in ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab"),"."),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"If you installed Memgraph with Docker, run the client using the following\ncommand, but be careful of four things:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Use the first command in Docker installed on Linux and macOS, but use the second command in Windows because PowerShell doesn't support the < character."),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Check the image name you are using is correct:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"Memgraph Platform"),", leave the current image name ",(0,o.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MemgraphDB"),", replace the current image name with ",(0,o.kt)("code",null,"memgraph"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MAGE"),", replace the current image name with ",(0,o.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Remember to replace ",(0,o.kt)("code",null,"HOST")," with a valid IP of the container (see the",(0,o.kt)("a",{href:"/memgraph/how-to-work-with-docker#docker-container-ip-address"}," Note for Docker users"),")."),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")," and ",(0,o.kt)("strong",{parentName:"p"},"macOS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows PowerShell"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'cmd.exe /c "docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl"\n')),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --help\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole < queries.cypherl\n")),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --help\n")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:t(12791).Z}))),(0,o.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,o.kt)("p",null,"Copy the following into ",(0,o.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE (p:Person {id: "100", name: "Daniel", age: 30, city: "London"});\nCREATE (p:Person {id: "101", name: "Alex", age: 15, city: "Paris"});\nCREATE (p:Person {id: "102", name: "Sarah", age: 17, city: "London"});\nCREATE (p:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});\nCREATE (p:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});\nCREATE (r:Restaurant {id: "200", name: "Mc Donalds", menu: "Fries BigMac McChicken Apple Pie"});\nCREATE (r:Restaurant {id: "201", name: "KFC", menu: "Fried Chicken Fries Chicken Bucket"});\nCREATE (r:Restaurant {id: "202", name: "Subway", menu: "Ham Sandwich Turkey Sandwich Foot-long"});\nCREATE (r:Restaurant {id: "203", name: "Dominos", menu: "Pepperoni Pizza Double Dish Pizza Cheese filled Crust"});\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2014"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2001"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2017"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2021"}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "100" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "202" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "203" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restraunt) WHERE u.id = "103" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "104" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "101" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\n')),(0,o.kt)("p",null,"The first five queries create nodes for people, the following four queries\ncreate nodes for restaurants. The last CREATE queries are used to define\nrelationships between nodes. As said before, you can define all of the different\ntypes of nodes and relationships in one file."),(0,o.kt)("p",null,"After you have prepared your queries, you can\nimport them with the command below or drag and drop them using the\n",(0,o.kt)("strong",{parentName:"p"},"Dataset")," tab in ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab"),"."),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"If you installed Memgraph using Docker, run the client using the following\ncommand, but be careful of four things:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Use the first command in Docker installed on Linux and macOS, but use the second command in Windows because PowerShell doesn't support the < character."),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Check the image name you are using is correct:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"Memgraph Platform")," leave the current image name ",(0,o.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MemgraphDB")," replace the current image name with ",(0,o.kt)("code",null,"memgraph"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MAGE")," replace the current image name with ",(0,o.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Remember to replace ",(0,o.kt)("code",null,"HOST")," with a valid IP of the container (see the",(0,o.kt)("a",{href:"/memgraph/how-to-work-with-docker#docker-container-ip-address"}," Note for Docker users"),")."),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")," and ",(0,o.kt)("strong",{parentName:"p"},"macOS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'cmd.exe /c "docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl"\n')),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --help\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole < queries.cypherl\n")),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --help\n")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:t(79068).Z}))))}h.isMDXComponent=!0},79068:function(e,n,t){n.Z=t.p+"assets/images/cypherl_multiple_type_nodes_and_relationships-c7fd68198e41c7a61f0e7f4e3fe1f573.png"},12791:function(e,n,t){n.Z=t.p+"assets/images/cypherl_one_type_nodes_and_relationships-a1d7f6ffb9dd64eed6c3f7b8e68b1151.png"}}]);