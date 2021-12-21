"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3337],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),r=t(67294),o=t(72389),l=t(79443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(63616),p=t(86010),u="tabItem_1uMI";function c(e){var n,t,o,l=e.lazy,c=e.block,d=e.defaultValue,m=e.values,h=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(w,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!w.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),b=g.tabGroupChoices,N=g.setTabGroupChoices,T=(0,r.useState)(y),C=T[0],E=T[1],O=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=b[h];null!=S&&S!==C&&w.some((function(e){return e.value===S}))&&E(S)}var D=function(e){var n=e.currentTarget,t=O.indexOf(n),a=w[t].value;a!==C&&(A(n),E(a),null!=h&&N(h,a))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},f)},w.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:D,onClick:D},o,{className:(0,p.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},47817:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=t(26396),s=t(58215),i=["components"],p={id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause"},u=void 0,c={unversionedId:"import-data/load-csv-clause",id:"version-2.1.1/import-data/load-csv-clause",title:"LOAD CSV Cypher clause",description:"The LOAD CSV clause enables you to load and use data from a CSV file of your",source:"@site/memgraph_versioned_docs/version-2.1.1/import-data/load-csv-clause.md",sourceDirName:"import-data",slug:"/import-data/load-csv-clause",permalink:"/docs/memgraph/import-data/load-csv-clause",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/import-data/load-csv-clause.md",tags:[],version:"2.1.1",frontMatter:{id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause"},sidebar:"version-2.1.1/memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/import-data"},next:{title:"CSV Import Tool",permalink:"/docs/memgraph/import-data/csv-import-tool"}},d=[{value:"Examples",id:"examples",children:[{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",children:[],level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",children:[],level:3}],level:2}],m={toc:d};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause enables you to load and use data from a CSV file of your\nchoosing in a row-based manner, within a query. We support the Excel CSV\ndialect, as it's the most commonly used one. For the syntax of the clause,\nplease check the ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/load-csv"},"Cypher manual"),"."),(0,o.kt)("p",null,"The clause reads row by row from a CSV file and binds the contents of the parsed\nrow to the variable you specified."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"For more detailed information about the LOAD CSV Cypher clause, check")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/import-data/load-csv-clause"},"Reference guide")),"."))),(0,o.kt)("p",null,"To work with the LOAD CSV clause, we need to have access to our files. If\nworking with Docker, check our ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-work-with-docker"},"Docker\nguide")," on how to access files\nfrom your local filesystem:"),(0,o.kt)("p",null,"Below, you can find two examples of how to use the CSV Import Tool depending on\nthe complexity of your data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and\nrelationships"))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"headerin",values:[{label:"With CSV header",value:"headerin"},{label:"Without CSV header",value:"headerout"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"headerin",mdxType:"TabItem"},(0,o.kt)("p",null,"Depending on how you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"HEADER")," option (",(0,o.kt)("inlineCode",{parentName:"p"},"WITH")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NO"),"), a row will be\nparsed as either a map or a list."),(0,o.kt)("p",null,"To access a given field, you can use the property lookup syntax. Let's assume\nthat the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"people_nodes.csv")," are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"id,name\n100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n")),(0,o.kt)("p",null,"The contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," are the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"id_from,id_to\n100,101\n100,102\n100,103\n101,103\n102,104\n")),(0,o.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (n:Person {id: row.id, name: row.name});\n')),(0,o.kt)("p",null,"With the initial nodes in place, you can now create relationships between them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv"  WITH HEADER AS row\nMATCH (p1:Person {id: row.id_from}), (p2:Person {id: row.id_to})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2)\n'))),(0,o.kt)(s.Z,{value:"headerout",mdxType:"TabItem"},(0,o.kt)("p",null,"Let's assume that the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"people_nodes.csv")," are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n")),(0,o.kt)("p",null,"The contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," are the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,101\n100,102\n100,103\n101,103\n102,104\n")),(0,o.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" NO HEADER AS row\nCREATE (n:Person {id: row[0], name: row[1]}) ;\n')),(0,o.kt)("p",null,"With the initial nodes in place, you can now create relationships between them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" NO HEADER AS row\nMATCH (p1:Person {id: row[0]}), (p2:Person {id: row[1]})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2)\n')))),(0,o.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,o.kt)("p",null,"In the case of a more complex graph, we have to deal with multiple node and\nrelationship types. Let's assume we have the following example:"),(0,o.kt)(l.Z,{groupId:"csv",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"},{label:"3. restaurants_nodes.csv",value:"rn"},{label:"4. restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pn",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following to the file ",(0,o.kt)("inlineCode",{parentName:"p"},"people_nodes.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,age,city\n100,Daniel,30,London\n101,Alex,15,Paris\n102,Sarah,17,London\n103,Mia,25,Zagreb\n104,Lucy,21,Paris\n")),(0,o.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (n:Person {id: row.id, name: row.name, age: ToInteger(row.age), city: row.city});\n'))),(0,o.kt)(s.Z,{value:"pr",mdxType:"TabItem"},(0,o.kt)("p",null,"Each person from ",(0,o.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," is connected to another person they are\nfriends with. This is represented with the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"first_person,second_person,met_in\n100,102,2014\n103,101,2021\n102,103,2005\n101,104,2005\n104,100,2018\n101,102,2017\n100,103,2001\n")),(0,o.kt)("p",null,"The following query will create relationships between the people nodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.first_person})\nMATCH (p2:Person {id: row.second_person})\nCREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)\nSET f.met_in = row.met_in;\n'))),(0,o.kt)(s.Z,{value:"rn",mdxType:"TabItem"},(0,o.kt)("p",null,"We have a list of restaurants people ate at in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"restaurants_nodes.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,menu\n200, Mc Donalds, Fries;BigMac;McChicken;Apple Pie\n201, KFC, Fried Chicken;Fries;Chicken Bucket\n202, Subway, Ham Sandwich;Turkey Sandwich;Foot-long\n203, Dominos, Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust\n")),(0,o.kt)("p",null,"The following query will create new nodes for each restaurant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_nodes.csv" WITH HEADER AS row\nCREATE (n:Restaurant {id: row.id, name: row.name, menu: row.menu});\n'))),(0,o.kt)(s.Z,{value:"rr",mdxType:"TabItem"},(0,o.kt)("p",null,"We file ",(0,o.kt)("inlineCode",{parentName:"p"},"restaurants_relationships.csv")," contains a list of people and the\nrestaurants they visited:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"PERSON_ID,REST_ID,liked\n100,200,true\n103,201,false\n104,200,true\n101,202,false\n101,203,false\n101,200,true\n102,201,true\n")),(0,o.kt)("p",null,"The following query will create relationships between people and restaurants\nwhere they ate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.PERSON_ID})\nMATCH (re:Restaurant {id: row.REST_ID})\nCREATE (p1)-[ate:ATE_AT]->(re)\nSET ate.liked = ToBoolean(row.liked);\n')))))}h.isMDXComponent=!0}}]);