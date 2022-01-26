"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89717],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(26396),i=n(58215),u=["components"],s={id:"create-nodes-relationships",title:"Create nodes and relationships",sidebar_label:"Create nodes and relationships"},c=void 0,d={unversionedId:"how-to-guides/query-builder/create-nodes-relationships",id:"how-to-guides/query-builder/create-nodes-relationships",title:"Create nodes and relationships",description:"You can use the methods create() and merge() to construct queries that will",source:"@site/gqlalchemy/how-to-guides/query-builder/create-nodes-relationships.md",sourceDirName:"how-to-guides/query-builder",slug:"/how-to-guides/query-builder/create-nodes-relationships",permalink:"/docs/gqlalchemy/how-to-guides/query-builder/create-nodes-relationships",editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/query-builder/create-nodes-relationships.md",tags:[],version:"current",frontMatter:{id:"create-nodes-relationships",title:"Create nodes and relationships",sidebar_label:"Create nodes and relationships"},sidebar:"gqlalchemy",previous:{title:"Load nodes and relationships",permalink:"/docs/gqlalchemy/how-to-guides/ogm/load-nodes-and-relationships"},next:{title:"Return results",permalink:"/docs/gqlalchemy/how-to-guides/query-builder/return-results"}},p=[{value:"How to create a node",id:"how-to-create-a-node",children:[],level:2},{value:"How to create a node if it doesn&#39;t exist",id:"how-to-create-a-node-if-it-doesnt-exist",children:[],level:2},{value:"How to create a relationship",id:"how-to-create-a-relationship",children:[],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can use the methods ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"merge()")," to construct queries that will\ngenerate new nodes and relationships in the database."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"create()")," - Creates the specified node or relationship."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"merge()")," - Updates existing nodes and relationships or creates them if they\ndon't exist.")),(0,l.kt)("h2",{id:"how-to-create-a-node"},"How to create a node"),(0,l.kt)("p",null,"To create nodes, you can just use the method ",(0,l.kt)("inlineCode",{parentName:"p"},"node()")," after ",(0,l.kt)("inlineCode",{parentName:"p"},"create()"),":"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import create\n\nquery = create().node(labels="Person", name="Ron").execute()\n'))),(0,l.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Person {name: 'Ron'});\n")))),(0,l.kt)("h2",{id:"how-to-create-a-node-if-it-doesnt-exist"},"How to create a node if it doesn't exist"),(0,l.kt)("p",null,"If you use the ",(0,l.kt)("inlineCode",{parentName:"p"},"merge()")," method instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"create()"),", the node won't be created\nif it already exists, it will only be updated if the properties don't match:"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import merge\n\nquery = merge().node(labels="Person", name="Leslie").execute()\n'))),(0,l.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (:Person {name: 'Leslie'});\n")))),(0,l.kt)("h2",{id:"how-to-create-a-relationship"},"How to create a relationship"),(0,l.kt)("p",null,"To create relationships, you can just use the methods ",(0,l.kt)("inlineCode",{parentName:"p"},"to()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"from()")," after\n",(0,l.kt)("inlineCode",{parentName:"p"},"create()"),":"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import create\n\nquery = create()\n        .node(labels="Person", name="Leslie")\n        .to(edge_label="FRIENDS_WITH")\n        .node(labels="Person", name="Ron")\n        .execute()\n'))),(0,l.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Person {name: 'Leslie'})-[:FRIENDS_WITH]->(:Person {name: 'Ron'});\n")))))}h.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),l=n(72389),o=n(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(63616),s=n(86010),c="tabItem_1uMI";function d(e){var t,n,l,o=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,f=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=y[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),w=k.tabGroupChoices,T=k.setTabGroupChoices,N=(0,a.useState)(g),x=N[0],C=N[1],q=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=w[h];null!=O&&O!==x&&v.some((function(e){return e.value===O}))&&C(O)}var P=function(e){var t=e.currentTarget,n=q.indexOf(t),r=v[n].value;r!==x&&(E(t),C(r),null!=h&&T(h,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=q.indexOf(e.currentTarget)+1;n=q[r]||q[0];break;case"ArrowLeft":var a=q.indexOf(e.currentTarget)-1;n=q[a]||q[q.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return q.push(e)},onKeyDown:j,onFocus:P,onClick:P},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);