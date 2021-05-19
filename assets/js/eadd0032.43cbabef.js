(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[211],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9952:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"go",title:"Go quick start",sidebar_label:"Go"},l={unversionedId:"getting-started/connecting-applications/go",id:"version-1.3.0/getting-started/connecting-applications/go",isDocsHomePage:!1,title:"Go quick start",description:"At the end of this guide, you will have created a simple Go Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/connecting-applications/go.md",sourceDirName:"getting-started/connecting-applications",slug:"/getting-started/connecting-applications/go",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/go",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/connecting-applications/go.md",version:"1.3.0",sidebar_label:"Go",frontMatter:{id:"go",title:"Go quick start",sidebar_label:"Go"},sidebar:"version-1.3.0/memgraph",previous:{title:"Java quick start",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/java"},next:{title:"JavaScript quick start",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/javascript"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic Setup",id:"basic-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple Go ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to setup Memgraph, take a look at the ",(0,o.kt)("a",{parentName:"li",href:"/memgraph/1.3.0/getting-started/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,o.kt)("li",{parentName:"ul"},"The newest version of ",(0,o.kt)("strong",{parentName:"li"},"Go")," ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"installed"),".")),(0,o.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,o.kt)("p",null,"We'll be using a simple Go application to demonstrate how to connect to a running Memgraph instance."),(0,o.kt)("p",null,"Let's jump in and create our application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your app, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"/MyApp")," and position yourself in it.",(0,o.kt)("br",null),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"program.go")," file and add the following code: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},'package main\n\nimport "github.com/neo4j/neo4j-go-driver/neo4j"\nimport "fmt"\n\nfunc main() {\n    driver, err := neo4j.NewDriver("bolt://localhost:7687", neo4j.BasicAuth("", "", ""))\n\n    if err != nil {\n        fmt.Println(err)\n    }\n    defer driver.Close()\n\n    session, err := driver.Session(neo4j.AccessModeWrite)\n    if err != nil {\n        fmt.Println(err)\n    }\n    defer session.Close()\n\n    greeting, err := session.WriteTransaction(func(transaction neo4j.Transaction) (interface{}, error) {\n        result, err := transaction.Run(\n            "CREATE (a:Greeting) SET a.message = $message RETURN \'Node \' + id(a) + \': \' + a.message",\n            map[string]interface{}{"message": "Hello, World!"})\n        if err != nil {\n            return nil, err\n        }\n\n        if result.Next() {\n            return result.Record().GetByIndex(0), nil\n        }\n\n        return nil, result.Err()\n    })\n    if err != nil {\n        fmt.Println(err)\n    }\n\n    fmt.Println(greeting.(string))\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Add the ",(0,o.kt)("strong",{parentName:"p"},"Bolt driver")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/MyApp")," directory with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get github.com/neo4j/neo4j-go-driver/neo4j\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Run the app with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go run .\\program.go\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/tutorials/tutorials"},"Tutorials"))," page.",(0,o.kt)("br",{parentName:"p"}),"\n","You can also browse through the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}c.isMDXComponent=!0}}]);