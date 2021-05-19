(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1349],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8258:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"manage-users-using-ldap",title:"Authentication and authorization (Enterprise)",sidebar_label:"Authentication and authorization (Enterprise)"},l={unversionedId:"database-functionalities/manage-users-using-ldap",id:"version-1.4.0/database-functionalities/manage-users-using-ldap",isDocsHomePage:!1,title:"Authentication and authorization (Enterprise)",description:"In large organizations it is often difficult to manage permissions that staff",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/manage-users-using-ldap.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/manage-users-using-ldap",permalink:"/memgraph/database-functionalities/manage-users-using-ldap",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/manage-users-using-ldap.md",version:"1.4.0",sidebar_label:"Authentication and authorization (Enterprise)",frontMatter:{id:"manage-users-using-ldap",title:"Authentication and authorization (Enterprise)",sidebar_label:"Authentication and authorization (Enterprise)"},sidebar:"version-1.4.0/memgraph",previous:{title:"User privileges (Enterprise)",permalink:"/memgraph/database-functionalities/manage-user-privileges"},next:{title:"Reference guide overview",permalink:"/memgraph/reference-guide"}},s=[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In large organizations it is often difficult to manage permissions that staff\nmembers have in the organization.  Organizations typically use an LDAP server\nto hold and manage the permissions.  Because LDAP servers are already set-up in\nmost large organizations, it is convenient for the organization to allow all\nstaff members to have access to the database using the already available\ncentralized user management system."),(0,o.kt)("p",null,"For this guide let's assume that we have an LDAP server that is serving the\nfollowing data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"# Users root entry\ndn: ou=people,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: people\n\n# User dba\ndn: cn=dba,ou=people,dc=memgraph,dc=com\ncn: dba\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dba\n\n# User alice\ndn: cn=alice,ou=people,dc=memgraph,dc=com\ncn: alice\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: alice\n\n# User bob\ndn: cn=bob,ou=people,dc=memgraph,dc=com\ncn: bob\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: bob\n\n# User carol\ndn: cn=carol,ou=people,dc=memgraph,dc=com\ncn: carol\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: carol\n\n# User dave\ndn: cn=dave,ou=people,dc=memgraph,dc=com\ncn: dave\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dave\n\n# Roles root entry\ndn: ou=roles,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: roles\n\n# Role moderator\ndn: cn=moderator,ou=roles,dc=memgraph,dc=com\ncn: moderator\nmember: cn=alice,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n\n# Role admin\ndn: cn=admin,ou=roles,dc=memgraph,dc=com\ncn: admin\nmember: cn=carol,ou=people,dc=memgraph,dc=com\nmember: cn=dave,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n")),(0,o.kt)("p",null,"To summarize, in this dataset we have the following data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ou=people,dc=memgraph,dc=com")," - entry that holds all users",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cn=dba,ou=people,dc=memgraph,dc=com")," - user ",(0,o.kt)("inlineCode",{parentName:"li"},"dba")," that will be used as the database administrator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cn=alice,ou=people,dc=memgraph,dc=com")," - regular user ",(0,o.kt)("inlineCode",{parentName:"li"},"alice")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cn=bob,ou=people,dc=memgraph,dc=com")," - regular user ",(0,o.kt)("inlineCode",{parentName:"li"},"bob")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cn=carol,ou=people,dc=memgraph,dc=com")," - regular user ",(0,o.kt)("inlineCode",{parentName:"li"},"carol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cn=dave,ou=people,dc=memgraph,dc=com")," - regular user ",(0,o.kt)("inlineCode",{parentName:"li"},"dave")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ou=roles,dc=memgraph,dc=com")," - entry that holds all roles",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cn=moderator,ou=roles,dc=memgraph,dc=com")," - role ",(0,o.kt)("inlineCode",{parentName:"li"},"moderator")," that has ",(0,o.kt)("inlineCode",{parentName:"li"},"alice")," as its member"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cn=admin,ou=roles,dc=memgraph,dc=com")," - role ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," that has ",(0,o.kt)("inlineCode",{parentName:"li"},"carol")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"dave")," as its members")))),(0,o.kt)("p",null,"For detailed information about the LDAP integration you should first see the\nreference guide:\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/ldap-security"},"LDAP security"),"."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Before enabling LDAP authentication, Memgraph should be prepared for the\nintegration. Here we assume that you have an already running Memgraph instance\nthat doesn't have any users in its local authentication storage. For more\ndetails on how the native authentication storage works in Memgraph you should\nsee: ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/database-functionalities/manage-user-privileges"},"User privileges"),"."),(0,o.kt)("p",null,"First you should create the user that should be the database administrator.  It\nis important to have in mind that the username that you create ",(0,o.kt)("em",{parentName:"p"},"must")," exist in\nthe LDAP directory.  For the described LDAP directory we will connect to the\ndatabase and issue the following queries all in the same connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER dba;\nGRANT ALL PRIVILEGES TO dba;\n")),(0,o.kt)("p",null,"After the user is created and all privileges are granted, it is safe to\ndisconnect from the database and proceed with LDAP integration."),(0,o.kt)("p",null,"To enable LDAP integration you should specify the following flag to Memgraph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"--auth-module-executable=/usr/lib/memgraph/auth_module/ldap.py\n")),(0,o.kt)("p",null,"You should also have the following LDAP module configuration in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'server:\n  host: "<LDAP_SERVER_HOSTNAME>"\n  port: <LDAP_SERVER_PORT>\n  encryption: "disabled"\n  cert_file: ""\n  key_file: ""\n  ca_file: ""\n  validate_cert: false\n\nusers:\n  prefix: "cn="\n  suffix: ",ou=people,dc=memgraph,dc=com"\n\nroles:\n  root_dn: ""\n  root_objectclass: ""\n  user_attribute: ""\n  role_attribute: ""\n')),(0,o.kt)("p",null,"You should adjust the security settings according to your LDAP server security\nsettings."),(0,o.kt)("p",null,"After setting these configuration options you should restart your Memgraph\ninstance."),(0,o.kt)("p",null,"Now you can verify that you can still log in to the database using username\n",(0,o.kt)("inlineCode",{parentName:"p"},"dba")," and password ",(0,o.kt)("inlineCode",{parentName:"p"},"dba"),"."),(0,o.kt)("p",null,"Issuing ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW USERS;")," should list that currently only user ",(0,o.kt)("inlineCode",{parentName:"p"},"dba")," exists.  This\nis normal. It means that LDAP authentication is successfully enabled (because\nyou were able to log in) and no other users have yet logged in."),(0,o.kt)("p",null,"You should now be able to log in using username ",(0,o.kt)("inlineCode",{parentName:"p"},"alice")," and password ",(0,o.kt)("inlineCode",{parentName:"p"},"alice"),".\nBecause Alice has never before logged in to the database a new user will be\ncreated for Alice and she won't have any privileges (yet)."),(0,o.kt)("p",null,"Using user ",(0,o.kt)("inlineCode",{parentName:"p"},"dba")," we modify Alice's privileges to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH")," privilege."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT MATCH TO alice;\n")),(0,o.kt)("p",null,"After Alice logs in again into the database (to refresh her privileges) she\nwill be able to execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN n;\n")),(0,o.kt)("p",null,"Issuing ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW USERS;")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"dba")," should now yield both ",(0,o.kt)("inlineCode",{parentName:"p"},"dba")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"alice"),"."),(0,o.kt)("p",null,"Users Bob, Carol and Dave will also be able to log in to the database using\ntheir LDAP password.  As with Alice, their users will be created and won't have\nany privileges."),(0,o.kt)("p",null,"If automatic user account creation is disabled using the database flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-user=false\n")),(0,o.kt)("p",null,"The database administrator (user ",(0,o.kt)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe users that he wishes to allow to connect to the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER alice;\nCREATE USER bob;\n")),(0,o.kt)("p",null,"In this scenario only Alice and Bob will be allowed to log in to the database\nbecause they already have existing user accounts, but users Carol and Dave\nwon't be able to log in."),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"In the previous example users could only authenticate using LDAP. In this\nexample we will explain how to set-up the LDAP auth module to deduce the user's\nrole using LDAP search queries."),(0,o.kt)("p",null,"First, you should enable and verify that user authentication works. To enable\nrole mapping for the described LDAP schema, we will modify the LDAP auth module\nconfiguration file, specifically the section ",(0,o.kt)("inlineCode",{parentName:"p"},"roles"),", to have the following\ncontent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'roles:\n  root_dn: "ou=roles,dc=memgraph,dc=com"\n  root_objectclass: "groupOfNames"\n  user_attribute: "member"\n  role_attribute: "cn"\n')),(0,o.kt)("p",null,"This configuration tells the LDAP module that all role mapping entries are\nchildren of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ou=roles,dc=memgraph,dc=com")," entry, that the children have\nuser DNs specified in their ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," attribute and that the ",(0,o.kt)("inlineCode",{parentName:"p"},"cn")," attribute\nshould be used to determine the role name."),(0,o.kt)("p",null,"When a user logs in to the database, the LDAP auth module will go through all\nrole mapping entries and will try to find out which role mapping entry has the\nuser as its member."),(0,o.kt)("p",null,"So now when Alice logs in, the LDAP auth module will go through the following\nentries: ",(0,o.kt)("inlineCode",{parentName:"p"},"cn=admin,ou=roles,dc=memgraph,dc=com")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"cn=moderator,ou=roles,dc=memgraph,dc=com"),".  Because Alice is a member of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"moderator")," role mapping, the LDAP auth module will assign role moderator to\nAlice."),(0,o.kt)("p",null,"Now as the user ",(0,o.kt)("inlineCode",{parentName:"p"},"dba")," we can issue ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW ROLE FOR alice;")," and we will see that\nindeed Alice now has the role ",(0,o.kt)("inlineCode",{parentName:"p"},"moderator"),"."),(0,o.kt)("p",null,"Permissions for users and roles are still managed through Memgraph, they can't\nbe managed through the LDAP server."),(0,o.kt)("p",null,"If automatic role creation is disabled using the flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-role=false\n")),(0,o.kt)("p",null,"The database administrator (user ",(0,o.kt)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe role for users that he wishes to allow to connect to the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE moderator;\n")),(0,o.kt)("p",null,"In this scenario only Alice and Bob will be allowed to log in. Alice will be\nallowed to log in because her role (moderator) already exists. Bob will be\nallowed to log in because he doesn't have any role. Carol and Dave won't be\nallowed to log in because their role (administrator) doesn't exist."),(0,o.kt)("p",null,"If both automatic role creation and automatic user creation are disabled, then\nboth the user and the role must exist for a user to successfully log in to the\ndatabase."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/tutorials/tutorials"},"Tutorials")),"."))}u.isMDXComponent=!0}}]);