"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66583],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),i=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?t.createElement(g,l(l({ref:n},p),{},{components:r})):t.createElement(g,l({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(67294);function a(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},9877:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(87462),a=r(67294),o=r(72389),l=r(5979),u=r(86010),s="tabItem_LplD";function i(e){var n,r,o,i=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,a.useState)(k),O=N[0],E=N[1],T=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=y[d];null!=x&&x!==O&&h.some((function(e){return e.value===x}))&&E(x)}var D=function(e){var n=e.currentTarget,r=T.indexOf(n),t=h[r].value;t!==O&&(C(n),E(t),null!=d&&w(d,t))},I=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=T.indexOf(e.currentTarget)+1;r=T[t]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;r=T[a]||T[T.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},g)},h.map((function(e){var n=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=r?r:n)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function p(e){var n=(0,o.Z)();return a.createElement(i,(0,t.Z)({key:String(n)},e))}},59865:function(e,n,r){r.r(n),r.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(9877),u=r(58215),s=["components"],i={id:"users",title:"User management",sidebar_label:"User management"},p=void 0,c={unversionedId:"reference-guide/users",id:"version-2.2.0/reference-guide/users",title:"User management",description:"The community edition of Memgraph enables creating users that can access the",source:"@site/memgraph_versioned_docs/version-2.2.0/reference-guide/users.md",sourceDirName:"reference-guide",slug:"/reference-guide/users",permalink:"/docs/memgraph/2.2.0/reference-guide/users",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/reference-guide/users.md",tags:[],version:"2.2.0",frontMatter:{id:"users",title:"User management",sidebar_label:"User management"},sidebar:"memgraph",previous:{title:"Triggers",permalink:"/docs/memgraph/2.2.0/reference-guide/triggers"},next:{title:"Enabling Memgraph Enterprise",permalink:"/docs/memgraph/2.2.0/reference-guide/enabling-enterprise"}},m={},d=[{value:"Authorisation",id:"authorisation",level:2}],g={toc:d};function f(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The community edition of Memgraph enables creating users that can access the\ndatabase with or without a password."),(0,o.kt)("p",null,"To create a user, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER user_name [IDENTIFIED BY 'password'];\n")),(0,o.kt)("p",null,"Setting up a password is optional. If the password is not set, the user can\nlog in using any password, or none, provided that they enter the correct\nusername."),(0,o.kt)("p",null,"To set or change a user's password, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SET PASSWORD FOR user_name TO 'new_password';\n")),(0,o.kt)("p",null,"To remove a user's password, set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SET PASSWORD FOR user_name TO null;\n")),(0,o.kt)("p",null,"To delete a user use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP USER user_name;\n")),(0,o.kt)("h2",{id:"authorisation"},"Authorisation"),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"memgraph-platform")," image")),(0,o.kt)("p",null,"If you are using Docker and ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, you should pass the\n",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," environmental variables when starting Memgraph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -it -p 7687:7687 -p 3000:3000 -e MGCONSOLE="--username <username> --password <password>" memgraph/memgraph-platform\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -it -p 7687:7687 -p 3000:3000 -e MGCONSOLE="--username vlasta --password vp" memgraph/memgraph-platform\n')),(0,o.kt)("p",null,"Upon connecting with Memgraph Lab you should select ",(0,o.kt)("em",{parentName:"p"},"Connect Manually")," and enter\nusername (and password)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"memgraph")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"memgraph-mage")," images")),(0,o.kt)("p",null,"If you are using Docker and ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," image enter username\nand password when connecting manually to Memgraph Lab. "),(0,o.kt)("p",null,"If you are connecting with mgconsole you should add the username and password\nflags to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph --host CONTAINER_IP --username=<username> --password=<password>\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph --host 172.17.0.2 --username=vlasta --password=vp\n"))),(0,o.kt)(u.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"If you are using Linux and connecting with Memgraph Lab, select ",(0,o.kt)("em",{parentName:"p"},"Connect\nManually")," and enter username (and password). "),(0,o.kt)("p",null,"When connecting with mgconsole, set\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--password")," flags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687 --username <username> --password <password>\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687 --username vlasta --password vp\n")))))}f.isMDXComponent=!0}}]);