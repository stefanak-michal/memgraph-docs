"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75544],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(67294),o=n(72389),l=n(5979),s=n(86010),i="tabItem_LplD";function p(e){var t,n,o,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),w=y.tabGroupChoices,b=y.setTabGroupChoices,N=(0,r.useState)(g),C=N[0],_=N[1],T=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==C&&k.some((function(e){return e.value===E}))&&_(E)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==C&&(D(t),_(a),null!=m&&b(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},h)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:S,onClick:S},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},63284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(9877),s=n(58215),i=["components"],p={id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause",pagination_prev:"import-data/overview",slug:"/import-data/load-csv-clause"},u=void 0,c={unversionedId:"import-data/csv/load-csv-clause",id:"version-2.1.1/import-data/csv/load-csv-clause",title:"LOAD CSV Cypher clause",description:"The LOAD CSV Cypher clause enables you to load and use data from a CSV file of",source:"@site/memgraph_versioned_docs/version-2.1.1/import-data/csv/load-csv-clause.md",sourceDirName:"import-data/csv",slug:"/import-data/load-csv-clause",permalink:"/docs/memgraph/2.1.1/import-data/load-csv-clause",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/import-data/csv/load-csv-clause.md",tags:[],version:"2.1.1",frontMatter:{id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause",pagination_prev:"import-data/overview",slug:"/import-data/load-csv-clause"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.1.1/import-data"},next:{title:"CSV import tool",permalink:"/docs/memgraph/2.1.1/import-data/csv-import-tool"}},d={},m=[{value:"Transferring CSV files into a Docker container",id:"transfer",level:2},{value:"Examples",id:"examples",level:2},{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",level:3}],h={toc:m};function f(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," Cypher clause enables you to load and use data from a CSV file of\nyour choosing in a row-based manner within a query. Memgraph supports the Excel\nCSV dialect, as it's the most common one. For the clause syntax, please check\nthe ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/load-csv"},"Cypher manual"),"."),(0,o.kt)("p",null,"The clause reads row by row from a CSV file and binds the contents of the parsed\nrow to the variable you specified."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more detailed information about the LOAD CSV Cypher clause, check our\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/reference-guide/import-data/load-csv-clause"},"Reference guide")),"."))),(0,o.kt)("h2",{id:"transfer"},"Transferring CSV files into a Docker container"),(0,o.kt)("p",null,"When working with the LOAD CSV clause, Memgraph needs to have access to the CSV\nfiles you are using.  If you are working with Docker, you need to transfer those\nfiles into the container."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Transfer CSV files into a Docker container"),"If you are using Docker to run Memgraph, you will need to copy the files from your local directory into the Docker container where Memgraph can access them.",(0,o.kt)("p",null," "),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,o.kt)("p",null,"  The file is now inside your Docker container, and you can import it using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. ")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Below, you can find two examples of how to use the LOAD CSV clause depending on\nthe complexity of your data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and\nrelationships"))),(0,o.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,o.kt)("p",null,"Let's import a simple dataset."),(0,o.kt)("p",null,"If the CSV file has a header, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"HEADER")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"WITH"),". Each row will\nbe parsed as a map, and you can use the property lookup syntax (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"id:\nrow.id"),") to access a certain field."),(0,o.kt)("p",null,"If the CSV file doesn't have a header, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"HEADER")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"NO"),". Each row\nwill be parsed as a list, and you can access elements by defining the position of\nthe element in the list."),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"headerin",values:[{label:"WITH CSV header",value:"headerin"},{label:"NO CSV header",value:"headerout"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"headerin",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"id,name\n100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n")),(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"id_from,id_to\n100,101\n100,102\n100,103\n101,103\n102,104\n")),(0,o.kt)("p",null,"If you are using Docker, ",(0,o.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,o.kt)("p",null,"The following query will load row by row from the CSV file, and create a new\nnode for each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (p:Person {id: row.id, name: row.name});\n')),(0,o.kt)("p",null,"If successful, you should receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"Empty set (0.014 sec)")," message. "),(0,o.kt)("p",null,"With the initial nodes in place, you can now create relationships between them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.id_from}), (p2:Person {id: row.id_to})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2);\n'))),(0,o.kt)(s.Z,{value:"headerout",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n")),(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,101\n100,102\n100,103\n101,103\n102,104\n")),(0,o.kt)("p",null,"If you are using Docker, ",(0,o.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,o.kt)("p",null,"The following query will load row by row from the CSV file, and create a new\nnode for each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" NO HEADER AS row\nCREATE (p:Person {id: row[0], name: row[1]});\n')),(0,o.kt)("p",null,"With the initial nodes in place, you can now create relationships between them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" NO HEADER AS row\nMATCH (p1:Person {id: row[0]}), (p2:Person {id: row[1]})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2);\n')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:n(15546).Z}))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,o.kt)("p",null,"In the case of a more complex graph, we have to deal with multiple node and\nrelationship types. "),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Let's say we want to create a graph like this:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:n(61049).Z}))),(0,o.kt)("p",null,"We will create that graph by using ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause to import four CSV files."),(0,o.kt)(l.Z,{groupId:"csv",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"},{label:"3. restaurants_nodes.csv",value:"rn"},{label:"4. restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pn",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile, content of which is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,age,city\n100,Daniel,30,London\n101,Alex,15,Paris\n102,Sarah,17,London\n103,Mia,25,Zagreb\n104,Lucy,21,Paris\n")),(0,o.kt)("p",null,"If you are using Docker, ",(0,o.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,o.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (n:Person {id: row.id, name: row.name, age: ToInteger(row.age), city: row.city});\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:n(66934).Z}))),(0,o.kt)("p",null,"Now move on to the ",(0,o.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," file.")),(0,o.kt)(s.Z,{value:"pr",mdxType:"TabItem"},(0,o.kt)("p",null,"Each person from the ",(0,o.kt)("inlineCode",{parentName:"p"},"people_nodes.csv")," file is connected to at least one other\nperson by being friends. ",(0,o.kt)("br",null)," Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile, where each row represents one friendship and the year it started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"first_person,second_person,met_in\n100,102,2014\n103,101,2021\n102,103,2005\n101,104,2005\n104,100,2018\n101,102,2017\n100,103,2001\n")),(0,o.kt)("p",null,"If you are using Docker, ",(0,o.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,o.kt)("p",null,"The following query will create relationships between the people nodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.first_person})\nMATCH (p2:Person {id: row.second_person})\nCREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)\nSET f.met_in = row.met_in;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:n(46093).Z}))),(0,o.kt)("p",null,"Now move on to the ",(0,o.kt)("inlineCode",{parentName:"p"},"restaurants_nodes.csv")," file.")),(0,o.kt)(s.Z,{value:"rn",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"restaurants_nodes.csv")),"\nfile that holds a list of restaurants people ate at:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,menu\n200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie\n201,KFC,Fried Chicken;Fries;Chicken Bucket\n202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long\n203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust\n")),(0,o.kt)("p",null,"If you are using Docker, ",(0,o.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,o.kt)("p",null,"The following query will create new nodes for each restaurant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_nodes.csv" WITH HEADER AS row\nCREATE (n:Restaurant {id: row.id, name: row.name, menu: row.menu});\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:n(72117).Z}))),(0,o.kt)("p",null,"Now move on to the ",(0,o.kt)("inlineCode",{parentName:"p"},"restaurants_relationships.csv")," file.")),(0,o.kt)(s.Z,{value:"rr",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"restaurants_relationships.csv")),"\nfile that contains a list of people and the restaurants they visited:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"PERSON_ID,REST_ID,liked\n100,200,true\n103,201,false\n104,200,true\n101,202,false\n101,203,false\n101,200,true\n102,201,true\n")),(0,o.kt)("p",null,"If you are using Docker, ",(0,o.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,o.kt)("p",null,"The following query will create relationships between people and restaurants\nwhere they ate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.PERSON_ID})\nMATCH (re:Restaurant {id: row.REST_ID})\nCREATE (p1)-[ate:ATE_AT]->(re)\nSET ate.liked = ToBoolean(row.liked);\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:n(19089).Z}))),(0,o.kt)("p",null,"Congratulations! You've imported all the CSV files!"))))}f.isMDXComponent=!0},61049:function(e,t,n){t.Z=n.p+"assets/images/load_csv_multiple_nodes_and_relationships-fb6a941e357512d4865b78405589bfdf.png"},15546:function(e,t,n){t.Z=n.p+"assets/images/load_csv_one_type_of_nodes_and_relationships-fbca8c662fdc966692d1045f77f52b7f.png"},66934:function(e,t,n){t.Z=n.p+"assets/images/load_csv_people_nodes-d95a476705fb116da60c043f9f58c4ee.png"},46093:function(e,t,n){t.Z=n.p+"assets/images/load_csv_people_relationships-639ae6445ba349d2a0807cfd198d82b3.png"},72117:function(e,t,n){t.Z=n.p+"assets/images/load_csv_restaurant_nodes-6aae93ec85de20379c59b9237e71b6ad.png"},19089:function(e,t,n){t.Z=n.p+"assets/images/load_csv_restaurants_relationships-f83085ad2846fe598b19b27eb16698e6.png"}}]);