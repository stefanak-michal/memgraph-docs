"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34241],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16429:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"go",title:"Go quick start",sidebar_label:"Go"},s=void 0,p={unversionedId:"connect-to-memgraph/methods/building-applications/go",id:"connect-to-memgraph/methods/building-applications/go",title:"Go quick start",description:"At the end of this guide, you will have created a simple Go Hello, World!",source:"@site/docs/connect-to-memgraph/methods/building-applications/go.md",sourceDirName:"connect-to-memgraph/methods/building-applications",slug:"/connect-to-memgraph/methods/building-applications/go",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/building-applications/go",editUrl:"https://github.com/memgraph/docs/tree/master/docs/connect-to-memgraph/methods/building-applications/go.md",tags:[],version:"current",frontMatter:{id:"go",title:"Go quick start",sidebar_label:"Go"},sidebar:"memgraph",previous:{title:"Java",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/building-applications/java"},next:{title:"Node.js",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/building-applications/nodejs"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Basic Setup",id:"basic-setup",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple Go ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello, World!")),"\nprogram that connects to the Memgraph database and executes simple queries."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Go driver")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can find the official Go driver on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neo4j/neo4j-go-driver"},"GitHub"),"."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/next/installation"},"Installation guide"),"."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,a.kt)("li",{parentName:"ul"},"The newest version of ",(0,a.kt)("strong",{parentName:"li"},"Go")," ",(0,a.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"installed"),".")),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"We'll be using a simple Go application to demonstrate how to connect to a\nrunning Memgraph instance."),(0,a.kt)("p",null,"Let's jump in and create our application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your app, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"/MyApp")," and position\nyourself in it.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"program.go")," file and add the following\ncode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/neo4j/neo4j-go-driver/v4/neo4j"\n)\n\nfunc main() {\n    dbUri := "bolt://localhost:7687"\n    driver, err := neo4j.NewDriver(dbUri, neo4j.BasicAuth("username", "password", ""))\n    if err != nil {\n        panic(err)\n    }\n    // Handle driver lifetime based on your application lifetime requirements  driver\'s lifetime is usually\n    // bound by the application lifetime, which usually implies one driver instance per application\n    defer driver.Close()\n    item, err := insertItem(driver)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("%v\\n", item.Message)\n}\n\nfunc insertItem(driver neo4j.Driver) (*Item, error) {\n    // Sessions are short-lived, cheap to create and NOT thread safe. Typically create one or more sessions\n    // per request in your web application. Make sure to call Close on the session when done.\n    // For multi-database support, set sessionConfig.DatabaseName to requested database\n    // Session config will default to write mode, if only reads are to be used configure session for\n    // read mode.\n    session := driver.NewSession(neo4j.SessionConfig{})\n    defer session.Close()\n    result, err := session.WriteTransaction(createItemFn)\n    if err != nil {\n        return nil, err\n    }\n    return result.(*Item), nil\n}\n\nfunc createItemFn(tx neo4j.Transaction) (interface{}, error) {\n    records, err := tx.Run(\n        "CREATE (a:Greeting) SET a.message = $message RETURN \'Node \' + id(a) + \': \' + a.message",\n        map[string]interface{}{"message": "Hello, World!"})\n    // In face of driver native errors, make sure to return them directly.\n    // Depending on the error, the driver may try to execute the function again.\n    if err != nil {\n        return nil, err\n    }\n    record, err := records.Single()\n    if err != nil {\n        return nil, err\n    }\n    // You can also retrieve values by name, with e.g. `id, found := record.Get("n.id")`\n    return &Item{\n        Message: record.Values[0].(string),\n    }, nil\n}\n\ntype Item struct {\n    Message string\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go mod init example.com/hello\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Add the ",(0,a.kt)("strong",{parentName:"p"},"Bolt driver")," with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get github.com/neo4j/neo4j-go-driver/v4@v4.3.1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," Run the app with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go run .\\program.go\n")),(0,a.kt)("p",null,"You should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/database-functionalities"},"Database functionalities")),"\nsection to get an overview of all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);