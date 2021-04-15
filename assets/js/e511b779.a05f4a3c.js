(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(329)),o={id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},l={unversionedId:"tutorials/social-network-analysis",id:"tutorials/social-network-analysis",isDocsHomePage:!1,title:"Social network analysis with NetworkX",description:"Introduction",source:"@site/docs/tutorials/social-network-analysis.md",slug:"/tutorials/social-network-analysis",permalink:"/memgraph/next/tutorials/social-network-analysis",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/social-network-analysis.md",version:"current",sidebar_label:"Social network analysis with NetworkX",sidebar:"memgraph",previous:{title:"Game of Thrones deaths",permalink:"/memgraph/next/tutorials/got-deaths"},next:{title:"Understanding music (with query modules)",permalink:"/memgraph/next/tutorials/understanding-music-with-modules"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Importing the dataset",id:"importing-the-dataset",children:[]},{value:"Using existing NetworkX algorithms",id:"using-existing-networkx-algorithms",children:[{value:"Betweenness centrality",id:"betweenness-centrality",children:[]},{value:"Link prediction",id:"link-prediction",children:[]}]},{value:"Adding new NetworkX algorithms as query modules",id:"adding-new-networkx-algorithms-as-query-modules",children:[{value:"Community detection",id:"community-detection",children:[]}]},{value:"Further reading",id:"further-reading",children:[]}],d={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"In this tutorial, we will show you how to perform simple network analysis with the NetworkX library and data stored in Memgraph DB. You will also acquire a basic understanding of ",Object(a.b)("strong",{parentName:"p"},"Query Modules"),", an easy method for extending the query language with user-written procedures."),Object(a.b)("h2",{id:"data-model"},"Data model"),Object(a.b)("p",null,"We are going to use the Karate Club graph, a network of friendships between 34 members of a karate club at a US university, as described by Wayne Zachary in 1977. It is a very popular data set in social network analysis and is very often referenced in such tutorials.\nThe nodes in the graph represent the members while the relationships between them are of type ",Object(a.b)("inlineCode",{parentName:"p"},"FRIENDS_WITH"),". You can differentiate the nodes by using their unique ",Object(a.b)("inlineCode",{parentName:"p"},"id")," property."),Object(a.b)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/karate_club.png",alt:"Karate club",style:{height:400}}),Object(a.b)("h2",{id:"importing-the-dataset"},"Importing the dataset"),Object(a.b)("p",null,"To import the dataset, download the ",Object(a.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab"),"\ndesktop application and navigate to the ",Object(a.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there,\nchoose the dataset ",Object(a.b)("inlineCode",{parentName:"p"},"Karate club friendship network")," and continue with the tutorial."),Object(a.b)("h2",{id:"using-existing-networkx-algorithms"},"Using existing NetworkX algorithms"),Object(a.b)("p",null,"There are three ways to execute queries and procedures in Memgraph:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"using the command-line tool ",Object(a.b)("inlineCode",{parentName:"li"},"mg_client"),", which comes with Memgraph: ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"/memgraph/next/getting-started/querying/querying"},"Querying the database"))),Object(a.b)("li",{parentName:"ul"},"programmatically, by using the Bolt protocol: ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"/memgraph/next/getting-started/connecting-applications"},"Building applications"))),Object(a.b)("li",{parentName:"ul"},"from ",Object(a.b)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface which you can download ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://memgraph.com/download"},"here")),".")),Object(a.b)("p",null,"In this tutorial, we are using results from the command-line tool because of their text format but, it's alright to use Memgraph Lab instead. You can open Memgraph Lab and in the tab ",Object(a.b)("strong",{parentName:"p"},"Query")," execute the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s)-[r]-(t)\nRETURN s, r, t;\n")),Object(a.b)("p",null,"This is going to return all the relationships inside our network. Now we have a better overview of what we are dealing with, so it\u2019s time to get some useful information about the network."),Object(a.b)("p",null,"To analyze the network we will use the built-in procedure ",Object(a.b)("inlineCode",{parentName:"p"},"analyze()")," from the ",Object(a.b)("inlineCode",{parentName:"p"},"graph_analyzer")," query module. This module utilizes the NetworkX library to retrieve graph information. Run the following query: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),Object(a.b)("p",null,"You will get details about the graph like the number of nodes, edges, bridges... and many more. "),Object(a.b)("h3",{id:"betweenness-centrality"},"Betweenness centrality"),Object(a.b)("p",null,"Now let's try to find the betweenness centrality of a node, i.e. the number of times a node acts as a bridge along the shortest path between two other nodes. Run the following query:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"CALL nxalg.betweenness_centrality() YIELD *;\n")),Object(a.b)("p",null,"The procedure ",Object(a.b)("inlineCode",{parentName:"p"},"betweenness_centrality()")," is one of over 70 algorithms available in the ",Object(a.b)("inlineCode",{parentName:"p"},"nxalg")," module."),Object(a.b)("p",null,"The result should be:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'+--------------+--------------+\n| betweenness  | node         |\n+--------------+--------------+\n| 0            | ({id: "0"})  |\n| 0.000473485  | ({id: "1"})  |\n| 0.0083649    | ({id: "2"})  |\n| 0.00189394   | ({id: "3"})  |\n| 0            | ({id: "4"})  |\n| 0.000473485  | ({id: "5"})  |\n| ...          | ...          |\n')),Object(a.b)("h3",{id:"link-prediction"},"Link prediction"),Object(a.b)("p",null,"A very common problem in network analysis is link prediction. The algorithm predicts which new interactions among the network members are likely to occur in the near future. One way of predicting these links is by measuring the \u201cproximity\u201d of nodes in a network. This can be done by using the Jaccard coefficient.\nLet's try running the algorithm on a node with the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," 13 and ordering the results descending by the value of the coefficient:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.jaccard_coefficient()\nYIELD *\nWITH  u, v, coef\nWHERE u.id = '13'\nRETURN u, v, coef\nORDER BY coef DESC;\n")),Object(a.b)("p",null,"The results are:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'+--------------+--------------+--------------+\n| u            | v            | coef         |\n+--------------+--------------+--------------+\n| ({id: "13"}) | ({id: "19"}) | 0.6          |\n| ({id: "13"}) | ({id: "17"}) | 0.4          |\n| ({id: "13"}) | ({id: "21"}) | 0.4          |\n| ({id: "13"}) | ({id: "28"}) | 0.333333     |\n| ({id: "13"}) | ({id: "30"}) | 0.285714     |\n| ({id: "13"}) | ({id: "27"}) | 0.285714     |\n| ({id: "13"}) | ({id: "31"}) | 0.222222     |\n| ({id: "13"}) | ({id: "15"}) | 0.166667     |\n| ({id: "13"}) | ({id: "14"}) | 0.166667     |\n| ({id: "13"}) | ({id: "18"}) | 0.166667     |\n| ({id: "13"}) | ({id: "20"}) | 0.166667     |\n| ({id: "13"}) | ({id: "22"}) | 0.166667     |\n| ({id: "13"}) | ({id: "26"}) | 0.166667     |\n| ({id: "13"}) | ({id: "32"}) | 0.133333     |\n| ({id: "13"}) | ({id: "29"}) | 0.125        |\n| ({id: "13"}) | ({id: "23"}) | 0.111111     |\n| ({id: "13"}) | ({id: "25"}) | 0            |\n| ({id: "13"}) | ({id: "24"}) | 0            |\n| ({id: "13"}) | ({id: "16"}) | 0            |\n+--------------+--------------+--------------+\n')),Object(a.b)("h2",{id:"adding-new-networkx-algorithms-as-query-modules"},"Adding new NetworkX algorithms as query modules"),Object(a.b)("p",null,"Memgraph comes with over 70 NetworkX algorithms, but if the algorithm you require is missing, you can add it yourself as a Query Module."),Object(a.b)("p",null,"If you are using Docker to run Memgraph you need to create a volume and mount it to access the directory ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),". This can be done by creating an empty directory ",Object(a.b)("inlineCode",{parentName:"p"},"~modules")," on your host machine and executing the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker volume create --driver local --opt type=none  --opt device=~modules --opt o=bind modules\n")),Object(a.b)("p",null,"Now, you can start Memgraph and mount the created volume:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker run -it --rm -v modules:/usr/lib/memgraph/query_modules -p 7687:7687 memgraph\n")),Object(a.b)("p",null,"Everything from the directory ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be visible/editable in your mounted volume and vice versa."),Object(a.b)("h3",{id:"community-detection"},"Community detection"),Object(a.b)("p",null,"Detecting communities in a network is a very common problem. Therefore, we need community detection algorithms that can partition the network into multiple communities. Let's create our own module that accomplishes this task.\nCreate a file called ",Object(a.b)("inlineCode",{parentName:"p"},"communities.py")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"~modules")," directory and copy the following code into it:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python="},"import mgp\nimport networkx as nx\nfrom networkx.algorithms import community\nfrom mgp_networkx import MemgraphDiGraph\n\n\n@mgp.read_proc\ndef detect(\n    ctx: mgp.ProcCtx\n    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):\n\n    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))\n    communities_generator = community.girvan_newman(networkxGraph)\n\n    return mgp.Record(communities=[\n        list(s) for s in next(communities_generator)])\n")),Object(a.b)("p",null,"We just created a query module with the procedure ",Object(a.b)("inlineCode",{parentName:"p"},"detect()")," that utilizes the Girvan\u2013Newman method to find communities in a graph.\nBefore we can call it, the newly created query module has to be loaded:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),Object(a.b)("p",null,"And now it can be called: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"CALL communities.detect() \nYIELD communities\nUNWIND communities AS community\nRETURN community\n")),Object(a.b)("p",null,"The resulting communities are:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| community                                                                                                                                                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [({id: "0"}), ({id: "1"}), ({id: "3"}), ({id: "4"}), ({id: "5"}), ({id: "6"}), ({id: "7"}), ({id: "10"}), ({id: "11"}), ({id: "12"}), ({id: "13"}), ({id: "16"}), ({id: "17"}), ({id: "19"}), ({id: "21"})]                                                             |\n| [({id: "2"}), ({id: "8"}), ({id: "9"}), ({id: "14"}), ({id: "15"}), ({id: "18"}), ({id: "20"}), ({id: "22"}), ({id: "23"}), ({id: "24"}), ({id: "25"}), ({id: "26"}), ({id: "27"}), ({id: "28"}), ({id: "29"}), ({id: "30"}), ({id: "31"}), ({id: "32"}), ({id: "33"})] |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),Object(a.b)("h2",{id:"further-reading"},"Further reading"),Object(a.b)("p",null,"If you want to find out more about query modules, take a look at our guide on how to create your own: ",Object(a.b)("a",{parentName:"p",href:"/memgraph/next/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"),"."),Object(a.b)("p",null,"You can also visit our ",Object(a.b)("a",{parentName:"p",href:"/memgraph/next/reference-guide/networkx"},"NetworkX Reference guide")," to find out which NetworkX algorithms are already available in Memgraph."))}s.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,b=u["".concat(o,".").concat(p)]||u[p]||m[p]||a;return n?i.a.createElement(b,l(l({ref:t},d),{},{components:n})):i.a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);