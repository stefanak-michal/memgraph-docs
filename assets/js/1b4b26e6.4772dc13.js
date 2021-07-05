(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4355],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1333:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],u={id:"ldap-security",title:"LDAP Security (Enterprise)",sidebar_label:"LDAP Security (Enterprise)"},l=void 0,c={unversionedId:"reference-guide/ldap-security",id:"version-1.3.0/reference-guide/ldap-security",isDocsHomePage:!1,title:"LDAP Security (Enterprise)",description:"For the purpose of supporting LDAP authentication and (optional)",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/ldap-security.md",sourceDirName:"reference-guide",slug:"/reference-guide/ldap-security",permalink:"/memgraph/1.3.0/reference-guide/ldap-security",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/ldap-security.md",version:"1.3.0",frontMatter:{id:"ldap-security",title:"LDAP Security (Enterprise)",sidebar_label:"LDAP Security (Enterprise)"},sidebar:"version-1.3.0/memgraph",previous:{title:"Auth module (Enterprise)",permalink:"/memgraph/1.3.0/reference-guide/auth-module"},next:{title:"Audit log (Enterprise)",permalink:"/memgraph/1.3.0/reference-guide/audit-log"}},p=[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Module requirements",id:"module-requirements",children:[]},{value:"Module configuration",id:"module-configuration",children:[]},{value:"Database configuration",id:"database-configuration",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For the purpose of supporting LDAP authentication and (optional)\nauthorization, we have built an auth module that is packaged with Memgraph\nEnterprise. For more information about auth modules see the\n",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/reference-guide/auth-module"},"reference guide"),"."),(0,a.kt)("p",null,"The module supports two operation modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"authentication only (LDAP bind request)"),(0,a.kt)("li",{parentName:"ul"},"authentication and authorization (LDAP bind and search requests)")),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"When using LDAP authentication the module builds the DN used for authentication\nusing the user specified username and the following formula:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"DN = prefix + username + suffix\n")),(0,a.kt)("p",null,"In most common situations the ",(0,a.kt)("inlineCode",{parentName:"p"},"prefix")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"cn=")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"suffix")," will be\n",(0,a.kt)("inlineCode",{parentName:"p"},",dc=example,dc=com"),". With an example username ",(0,a.kt)("inlineCode",{parentName:"p"},"alice")," that would yield a DN\nequal to ",(0,a.kt)("inlineCode",{parentName:"p"},"cn=alice,dc=example,dc=com")," which will then be used for the LDAP bind\noperation with the user specified password."),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"Authentication is performed in the same way as above. After the user is\nauthenticated, the module searches through the role mapping root DN object that\ncontains role mappings. A role mapping object that has the current bound user\nas its ",(0,a.kt)("inlineCode",{parentName:"p"},"member")," attribute is used as the user's role. The role that is mapped\nto the user is the ",(0,a.kt)("inlineCode",{parentName:"p"},"CN")," attribute of the role mapping object.  The attribute\nthat contains the user DN in the mapping object, as well as the attribute that\ncontains the role name, can be changed in the module configuration file to\naccommodate your LDAP schema."),(0,a.kt)("p",null,"Note: When searching for a role in directories that have thousands of roles,\nthe search process could take a long time. That could cause long login times."),(0,a.kt)("h2",{id:"module-requirements"},"Module requirements"),(0,a.kt)("p",null,"The module is written in Python 3 and it must be installed on the server for\nyou to be able to use it. The Python version should be at least ",(0,a.kt)("inlineCode",{parentName:"p"},"3.5"),".  Also,\nyou must have the following Python 3 libraries installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ldap3")," - used to communicate with the LDAP server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PyYAML")," - used to parse the configuration file")),(0,a.kt)("h2",{id:"module-configuration"},"Module configuration"),(0,a.kt)("p",null,"The module configuration file is ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.yaml"),".  An\ninitial example configuration file that has all settings documented and\nexplained is ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.example.yaml"),". You can copy the\nexample configuration file into the module configuration file to get you up and\nrunning quickly."),(0,a.kt)("h2",{id:"database-configuration"},"Database configuration"),(0,a.kt)("p",null,"In order to enable use of the LDAP authentication and authorization module you\nhave to specify to Memgraph to use it. You should specify the flag\n",(0,a.kt)("inlineCode",{parentName:"p"},"--auth-module-executable /usr/lib/memgraph/auth_module/ldap.py"),"."),(0,a.kt)("p",null,"Other flags that change the behavior of the database to module integration\ncan be specified according to your needs."))}d.isMDXComponent=!0}}]);