"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83999],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(g,s(s({ref:t},m),{},{components:r})):n.createElement(g,s({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},26396:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),a=r(67294),o=r(72389),s=r(79443);var l=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(63616),u=r(86010),m="tabItem_1uMI";function p(e){var t,r,o,s=e.lazy,p=e.block,c=e.defaultValue,d=e.values,g=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,a.useState)(y),M=T[0],O=T[1],E=[],q=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var _=w[g];null!=_&&_!==M&&b.some((function(e){return e.value===_}))&&O(_)}var x=function(e){var t=e.currentTarget,r=E.indexOf(t),n=b[r].value;n!==M&&(q(t),O(n),null!=g&&N(g,n))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:x,onClick:x},o,{className:(0,u.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":M===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===M}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function c(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},25409:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(26396),l=r(58215),i=["components"],u={id:"mysql",title:"Migrate MySQL database to Memgraph",sidebar_label:"MySQL"},m=void 0,p={unversionedId:"import-data/migrate/mysql",id:"version-2.1.0/import-data/migrate/mysql",title:"Migrate MySQL database to Memgraph",description:"Prerequisites",source:"@site/memgraph_versioned_docs/version-2.1.0/import-data/migrate/mysql.md",sourceDirName:"import-data/migrate",slug:"/import-data/migrate/mysql",permalink:"/docs/memgraph/2.1.0/import-data/migrate/mysql",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/import-data/migrate/mysql.md",tags:[],version:"2.1.0",frontMatter:{id:"mysql",title:"Migrate MySQL database to Memgraph",sidebar_label:"MySQL"},sidebar:"version-2.1.0/memgraph",previous:{title:"Protobuf",permalink:"/docs/memgraph/2.1.0/import-data/kafka/protobuf"},next:{title:"PostgreSQL",permalink:"/docs/memgraph/2.1.0/import-data/migrate/postgresql"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"How to migrate data from MySQL to Memgraph?",id:"how-to-migrate-data-from-mysql-to-memgraph",children:[{value:"Dataset",id:"dataset",children:[],level:3},{value:"Migrating",id:"migrating",children:[],level:3}],level:2}],d={toc:c};function g(e){var t=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.mysql.com/"},"MySQL"))," instance with the database you wish to migrate."),(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product"},"Memgraph"))," instance where you want to migrate the data."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgmigrate"},"mgmigrate"))," tool installed.\nInstallation instructions can be found\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgmigrate"},"here"),".")),(0,o.kt)("h2",{id:"how-to-migrate-data-from-mysql-to-memgraph"},"How to migrate data from MySQL to Memgraph?"),(0,o.kt)("h3",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"For this tutorial, we will be working with a MySQL database named ",(0,o.kt)("inlineCode",{parentName:"p"},"users_db"),"\nthat contains two tables, ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships"),":"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"users",values:[{label:"Table 'users'",value:"users"},{label:"Table 'user_relationships'",value:"user_relationships"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"users",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," table contains four users with their ids and names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mysql> SELECT * FROM users;\n+----+------+\n| id | name |\n+----+------+\n|  0 | Anna |\n|  1 | Josh |\n|  2 | Lisa |\n|  3 | Troy |\n+----+------+\n"))),(0,o.kt)(l.Z,{value:"user_relationships",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships")," table contains the relationships between users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mysql> SELECT * FROM user_relationships;\n+----------+----------+\n| user_one | user_two |\n+----------+----------+\n|        0 |        1 |\n|        2 |        3 |\n+----------+----------+\n")))),(0,o.kt)("h3",{id:"migrating"},"Migrating"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," You can migrate this database into Memgraph by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"build/src/mgmigrate --source-kind=mysql /\n  --source-host 127.0.0.1 /\n  --source-port 33060 /\n  --source-username root /\n  --source-password mysql /\n  --source-database=users_db /\n  --destination-host 127.0.0.1 /\n  --destination-port 7687 /\n  --destination-use-ssl=false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Run the following query in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/lab"},"Memgraph Lab"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/connect-to-memgraph/methods/mgconsole"},"mgconsole"))," to see the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[r]-(m) RETURN n,r,m;\n")),(0,o.kt)("p",null,"The query results should be:"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"mgconsole",values:[{label:"mgconsole",value:"mgconsole"},{label:"Memgraph Lab",value:"memgraphlab"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mgconsole",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'memgraph> MATCH (n)-[r]-(m) RETURN n,r,m;\n+--------------------------------+--------------------------------+--------------------------------+\n| n                              | r                              | m                              |\n+--------------------------------+--------------------------------+--------------------------------+\n| (:users {id: 1, name: "Josh"}) | [:user_relationships]          | (:users {id: 0, name: "Anna"}) |\n| (:users {id: 0, name: "Anna"}) | [:user_relationships]          | (:users {id: 1, name: "Josh"}) |\n| (:users {id: 3, name: "Troy"}) | [:user_relationships]          | (:users {id: 2, name: "Lisa"}) |\n| (:users {id: 2, name: "Lisa"}) | [:user_relationships]          | (:users {id: 3, name: "Troy"}) |\n+--------------------------------+--------------------------------+--------------------------------+\n'))),(0,o.kt)(l.Z,{value:"memgraphlab",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memgraph-docs-mgmigrate-results",src:r(77875).Z})))))}g.isMDXComponent=!0},77875:function(e,t,r){t.Z=r.p+"assets/images/memgraph-docs-mgmigrate-results-38a751a5742422f11d5f413044f4fe25.png"}}]);