"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9e3],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(26396),u=n(58215),i=["components"],s={id:"run-a-query-module",title:"Run a query module",sidebar_label:"Run a query module"},p=void 0,d={unversionedId:"how-to-guides/run-a-query-module",id:"how-to-guides/run-a-query-module",title:"Run a query module",description:"Prerequisites",source:"@site/mage/how-to-guides/run-a-query-module.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/run-a-query-module",permalink:"/docs/mage/how-to-guides/run-a-query-module",editUrl:"https://github.com/memgraph/docs/tree/master/mage/how-to-guides/run-a-query-module.md",tags:[],version:"current",frontMatter:{id:"run-a-query-module",title:"Run a query module",sidebar_label:"Run a query module"},sidebar:"mage",previous:{title:"Create a C++ query module",permalink:"/docs/mage/how-to-guides/create-a-new-module-cpp"},next:{title:"Betweenness Centrality",permalink:"/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Importing query modules into Memgraph",id:"importing-query-modules-into-memgraph",children:[],level:2},{value:"Querying",id:"querying",children:[],level:2},{value:"Testing",id:"testing",children:[{value:"input.cyp",id:"inputcyp",children:[],level:3},{value:"test.yml",id:"testyml",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],c={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have developed a query module by yourself and/or followed our tutorial for\n",(0,o.kt)("a",{parentName:"li",href:"/mage/how-to-guides/create-a-new-module-python"},"Python")," or\n",(0,o.kt)("a",{parentName:"li",href:"/mage/how-to-guides/create-a-new-module-cpp"},"C++"))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following steps depend on how you installed Memgraph and MAGE as we need\nto import the modules."))),(0,o.kt)("h2",{id:"importing-query-modules-into-memgraph"},"Importing query modules into Memgraph"),(0,o.kt)(l.Z,{groupId:"running-method",defaultValue:"docker-hub",values:[{label:"Docker Hub",value:"docker-hub"},{label:"Docker build",value:"docker-build"},{label:"Build from source on Linux",value:"source"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"docker-hub",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Start the MAGE container with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -p 7687:7687 --name mage memgraph-mage:dev\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Copy your local MAGE directory inside the container in order for Memgraph\nto import the query modules:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"a)")," First, you need to copy the files to the container named ",(0,o.kt)("inlineCode",{parentName:"p"},"mage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker cp . mage:/mage/\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"b)")," Then, you need to position yourself inside the container as root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -u root -it mage /bin/bash\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If you performed the build locally, make sure to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"cpp/build"),"\ndirectory because you might be dealing with different architectures or\nproblems with ",(0,o.kt)("inlineCode",{parentName:"p"},"CMakeCache.txt"),". To delete it, run:"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf cpp/build"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"c)")," After that, build MAGE with the option to copy executables from\n",(0,o.kt)("inlineCode",{parentName:"p"},"mage/dist")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 setup build -p /usr/lib/memgraph/query_modules/\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"d)")," Everything should be ready to exit the container and load the query\nmodules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"exit\n"))),(0,o.kt)(u.Z,{value:"docker-build",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," To create the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," ",(0,o.kt)("strong",{parentName:"p"},"MAGE")," image, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker build --target dev -t memgraph-mage:dev .\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Start the container with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -p 7687:7687 --name mage memgraph-mage:dev\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you make any changes to the module, you can stop the container and do a\nrebuild. Additionally, if you don't want to rebuild everything, you can:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Copy the changes to the container."),(0,o.kt)("li",{parentName:"ol"},"Perform a build inside the container."),(0,o.kt)("li",{parentName:"ol"},"Copy the executables to the ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/memgraph/query_modules/")," directory,\nwhere Memgraph is looking for query modules.")),(0,o.kt)("p",{parentName:"div"},"The process is the same as described in step ",(0,o.kt)("strong",{parentName:"p"},"2")," of the tab ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Hub"),".")))),(0,o.kt)(u.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Make sure your Memgraph instance is running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl status memgraph.service\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Now, we need to copy our developed query module ",(0,o.kt)("inlineCode",{parentName:"p"},"random_walk.py")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 setup build -p /usr/lib/memgraph/query_modules\n")))),(0,o.kt)("h2",{id:"querying"},"Querying"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that query modules are loaded into Memgraph on startup, so if your\ninstance was already running, you would need to execute the following query\ninside one of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.memgraph.com/memgraph/connect-to-memgraph"},"querying\nplatforms")," to load\nthem:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,o.kt)("p",null,"Lastly, run a query and test your module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (start:Node {id: 0})-[:RELATION]->(:Node {id: 1})-[:RELATION]->(:Node {id: 2})\nCALL random_walk.get(start, 2) YIELD path\nRETURN path\n")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Test decoupled parts of your code that don't depend on Memgraph like you would\nin any other setting. E2e (end to end) tests, on the other hand, depend on\ninternal Memgraph data structures, like nodes and edges. After running Memgraph,\nwe need to prepare the testing environment on the host machine. Position\nyourself in the mage directory you cloned from GitHub. The expected folder\nstructure for each module is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"mage\n\u2514\u2500\u2500 e2e\n    \u2514\u2500\u2500 random_walk_test\n        \u2514\u2500\u2500 test_base\n            \u251c\u2500\u2500 input.cyp\n            \u2514\u2500\u2500 test.yml\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"input.cyp")," represents a Cypher script for entering the data into the database.\nTo simplify this tutorial, we'll leave the database empty. ",(0,o.kt)("inlineCode",{parentName:"p"},"test.yml")," specifies\nwhich test query should be run by the database and what should be the result or\nexception. Create the files following the aforementioned directory structure."),(0,o.kt)("h3",{id:"inputcyp"},"input.cyp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n")),(0,o.kt)("h3",{id:"testyml"},"test.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"query: >\n  MATCH (start:Node {id: 0})\n    CALL random_walk.get(start, 2) YIELD path\n    RETURN path\n\noutput: []\n")),(0,o.kt)("p",null,"Lastly, run the e2e tests with python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python test_e2e\n")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Feel free to create an issue or open a pull request on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},"Github\nrepo")," to speed up the development.",(0,o.kt)("br",null),"\nAlso, don't forget to throw us a star on GitHub. \u2b50"))}h.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(72389),l=n(79443);var u=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(63616),s=n(86010),p="tabItem_1uMI";function d(e){var t,n,o,l=e.lazy,d=e.block,m=e.defaultValue,c=e.values,h=e.groupId,g=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=u(),N=b.tabGroupChoices,w=b.setTabGroupChoices,q=(0,a.useState)(v),C=q[0],T=q[1],E=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=N[h];null!=O&&O!==C&&k.some((function(e){return e.value===O}))&&T(O)}var M=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==C&&(x(t),T(r),null!=h&&w(h,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:M,onClick:M},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);