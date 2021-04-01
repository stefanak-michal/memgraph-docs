(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(324)),i={id:"understanding-music-with-modules",title:"Understanding music (with query modules)",sidebar_label:"Understanding music (with query modules)"},c={unversionedId:"tutorials/understanding-music-with-modules",id:"version-1.4.0/tutorials/understanding-music-with-modules",isDocsHomePage:!1,title:"Understanding music (with query modules)",description:"This article is part of a series intended to show users how to use Memgraph on",source:"@site/memgraph_versioned_docs/version-1.4.0/tutorials/understanding-music-with-modules.md",slug:"/tutorials/understanding-music-with-modules",permalink:"/memgraph/tutorials/understanding-music-with-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/tutorials/understanding-music-with-modules.md",version:"1.4.0",sidebar_label:"Understanding music (with query modules)",sidebar:"version-1.4.0/memgraph",previous:{title:"Social network analysis with NetworkX",permalink:"/memgraph/tutorials/social-network-analysis"},next:{title:"Database functionalities overview",permalink:"/memgraph/database-functionalities"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Importing the dataset",id:"importing-the-dataset",children:[]},{value:"Defining a directory with query modules",id:"defining-a-directory-with-query-modules",children:[]},{value:"Example queries and procedures",id:"example-queries-and-procedures",children:[]},{value:"Optimized NetworkX integration",id:"optimized-networkx-integration",children:[]},{value:"Further reading",id:"further-reading",children:[]}],s={toc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article is part of a series intended to show users how to use Memgraph on\nreal-world data and, by doing so, retrieve some interesting and useful\ninformation."),Object(o.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(o.b)("a",{parentName:"p",href:"/memgraph/tutorials/tutorials"},"tutorial overview section"),"."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Getting useful information from your data is always challenging. With Memgraph,\nyou can manipulate and extract a huge amount of information by writing queries.\nMemgraph even offers a set of built-in graph algorithms. You can use those algorithms\nin your queries, extending your power over the data. But what if you wanted to do more?"),Object(o.b)("p",null,'At its core, Memgraph "simply" builds a graph from your data. Graphs were always\ninteresting to scientists and engineers because of their interesting properties\nallowing you to represent a specific kind of data in an intuitive way which\nmakes extracting useful information much easier. A field called\ngraph theory emerged in mathematics, producing a great number of algorithms,\nmetrics, and other functions that are applied to the graphs.'),Object(o.b)("p",null,"Memgraph allows you to use the underlying graph in your functions by using\n",Object(o.b)("inlineCode",{parentName:"p"},"Query modules"),", and those functions are called procedures. In this tutorial,\nwe'll see how easy it is to extend the capabilities of Memgraph using Python.\nIt will also show you how to use one of the most popular Python libraries for graphs,\ncalled ",Object(o.b)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX"),", which contains an insane amount\nof functions and algorithms for the graphs."),Object(o.b)("h2",{id:"data-model"},"Data model"),Object(o.b)("p",null,"Social graphs is a relatively recent term. Simply said, it's a representation of\na social network. Social networks appear in various sites, e.g., Youtube,\nwhich is primarily a site for watching videos, can be classified as a social\nnetwork. For this tutorial, we'll use data consisting of users of the music\nstreaming platform called ",Object(o.b)("a",{parentName:"p",href:"https://www.deezer.com/"},"Deezer"),"."),Object(o.b)("p",null,"The data consists of around 50k Deezer users from Croatia, but we prepared a\nsubset of the dataset only composed of 2k users. Each user is defined by id\nand a list of genres he loved. The edges represent the mutual friendship between\nthe users. You can find a more detailed explanation of the dataset on the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/benedekrozemberczki/datasets#deezer-social-networks"},"GitHub"),"\nalongside many more similar datasets kindly provided by the same authors."),Object(o.b)("h2",{id:"importing-the-dataset"},"Importing the dataset"),Object(o.b)("p",null,"To import the dataset, download the ",Object(o.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab"),"\ndesktop application and navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there,\nchoose the dataset ",Object(o.b)("inlineCode",{parentName:"p"},"Music genres social network")," and continue with the tutorial."),Object(o.b)("h2",{id:"defining-a-directory-with-query-modules"},"Defining a directory with query modules"),Object(o.b)("p",null,"We need to set up the directory from which Memgraph will search for\ncustom query modules by changing the ",Object(o.b)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file(",Object(o.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or by supplying it as a\ncommand-line parameter using the directory containing our modules as the value.\nFor a more detailed explanation take a look at\n",Object(o.b)("a",{parentName:"p",href:"/memgraph/database-functionalities/query-modules/load-call-query-modules"},"Load and call query modules"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sudo -u memgraph /usr/lib/memgraph/memgraph --query-modules-directory=/modules\n")),Object(o.b)("p",null,"When using Memgraph installed from a DEB or RPM package, the currently running\nMemgraph server may need to be stopped. The user can do so using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"systemctl stop memgraph\n")),Object(o.b)("p",null,"When using Docker, the query module directory can be mounted with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v $(pwd)/modules:/modules \\\n  memgraph --query-modules-directory=/modules\n")),Object(o.b)("h2",{id:"example-queries-and-procedures"},"Example queries and procedures"),Object(o.b)("p",null,"First, let's create a Python script in our modules directory which will contain\nour procedures. We'll name the script ",Object(o.b)("inlineCode",{parentName:"p"},"deezer_example.py"),"."),Object(o.b)("p",null,"After each change to the script, we need to tell Memgraph to reload all the\nmodules. We can do that by calling the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),Object(o.b)("p",null,"Let's count how many times a specific genre occurs in our network!"),Object(o.b)("p",null,"We will define a procedure called ",Object(o.b)("inlineCode",{parentName:"p"},"genre_count"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n\n@mgp.read_proc\ndef genre_count(context: mgp.ProcCtx,\n                genre: str) -> mgp.Record(genre=str, count=int):\n    count = len(\n        [v for v in context.graph.vertices if genre in v.properties['genres']])\n    return mgp.Record(genre=genre, count=count)\n")),Object(o.b)("p",null,"Let's reload the modules and check the results:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'CALL deezer_example.genre_count("Pop")\nYIELD *;\n')),Object(o.b)("p",null,"We can notice multiple things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"import of the ",Object(o.b)("inlineCode",{parentName:"li"},"mgp")," module which contains helper functions and types for\ndefining custom procedures"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@mgp.read_proc")," decorator which marks the function as a procedure"),Object(o.b)("li",{parentName:"ul"},"every argument is annotated with a type"),Object(o.b)("li",{parentName:"ul"},"result is defined as an object of ",Object(o.b)("inlineCode",{parentName:"li"},"mgp.Record")," which also has annotated types of\nits members")),Object(o.b)("p",null,"This example is probably not that interesting to you because we can get the same\nresult using the following query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nWITH n, "Pop" as genre\nWHERE genre in n.genres\nRETURN genre, count(n);\n')),Object(o.b)("p",null,"Let's try something more interesting. The genres are listed in the order the\nusers have added them. If we assume that users picked the genres in order of\npreference, let's write a function that tells us in what percentage each genre\nappears in top n places."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\n@mgp.read_proc\ndef in_top_n_percentage(context: mgp.ProcCtx,\n                        n: int) -> mgp.Record(genre=str,\n                                              percentage=float,\n                                              size=int):\n    genre_count = defaultdict(lambda: {'total_count': 0, 'in_top_n_count': 0})\n\n    for v in context.graph.vertices:\n        for index, genre in enumerate(v.properties['genres']):\n            genre_count[genre]['total_count'] += 1\n            genre_count[genre]['in_top_n_count'] += index < n\n\n    def get_record(genre, counts): return mgp.Record(\n        genre=genre,\n        percentage=counts['in_top_n_count'] / counts['total_count'],\n        size=counts['total_count']\n    )\n\n    return [get_record(\n        genre,\n        counts) for genre,\n        counts in genre_count.items()]\n")),Object(o.b)("p",null,"Let's see what we got:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.in_top_n_percentage(3)\nYIELD *\nWITH genre, percentage, size\nWHERE size > 10\nRETURN genre, percentage, size\nORDER BY percentage DESC;\n")),Object(o.b)("p",null,"As said in the introduction, we want to use the power of the graphs to extract\nsome useful information from our data which would be otherwise impossible. Most\nof those functions are complex and writing them from scratch would be tedious.\nAs every modern programmer, we'll just use a package that has everything we need\nand more. To be precise, we'll be using ",Object(o.b)("inlineCode",{parentName:"p"},"NetworkX")," that has a huge amount of\nutility functions and graph algorithms implemented."),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"NetworkX")," algorithms we need to transform our graph to a type ",Object(o.b)("inlineCode",{parentName:"p"},"NetworkX"),"\nrecognizes. In our case, we need to use an undirected graph ",Object(o.b)("inlineCode",{parentName:"p"},"networkX.Graph"),". To\nmake our lives easier, let's write a helper function that transforms Memgraph\ngraph to ",Object(o.b)("inlineCode",{parentName:"p"},"networkX.Graph"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport networkx.algorithms as nxa\nimport itertools\n\n\ndef _create_undirected_graph(context: mgp.ProcCtx) -> nx.Graph:\n    g = nx.Graph()\n\n    for v in context.graph.vertices:\n        context.check_must_abort()\n        g.add_node(v)\n\n    for v in context.graph.vertices:\n        context.check_must_abort()\n        for e in v.out_edges:\n            g.add_edge(e.from_vertex, e.to_vertex)\n\n    return g\n")),Object(o.b)("p",null,"Now let's get some information about the graph. As our data represents social\nnetwork we would like to know if it has\n",Object(o.b)("a",{parentName:"p",href:"https://tinyurl.com/y3angsdb"},"bridges")," and we would\nlike to calculate the\n",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Clustering_coefficient"},"average clustering"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef analyze_graph(\n        context: mgp.ProcCtx) -> mgp.Record(\n        average_clustering=float,\n        has_bridges=bool):\n    g = _create_undirected_graph(context)\n    return mgp.Record(\n        average_clustering=nxa.average_clustering(g),\n        has_bridges=nxa.has_bridges(g))\n")),Object(o.b)("p",null,"And to get and display the data let's run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.analyze_graph()\nYIELD *;\n")),Object(o.b)("p",null,"Another interesting property of a node in a graph is its\n",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Centrality"},"centrality"),". Centrality tells us how\nimportant a node is for a graph. In our case, it would mean higher the\ncentrality, the more popular the user is. Let's find out which user is the most\npopular in our network and take a peek at his/her music taste. We will use the\n",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Betweenness_centrality"},"betweenness centrality"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef betweenness_centrality(\n        context: mgp.ProcCtx) -> mgp.Record(node=mgp.Vertex,\n                                            centrality=mgp.Number):\n    g = _create_undirected_graph(context)\n    return [mgp.Record(node=node, centrality=centrality)\n            for node,\n            centrality in nxa.centrality.betweenness_centrality(g).items()]\n")),Object(o.b)("p",null,"Now let's take a look at the results:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"CALL deezer_example.betweenness_centrality()\nYIELD *\nRETURN node.id, node.genres, centrality\nORDER BY centrality DESC\nLIMIT 10;\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")),Object(o.b)("p",null,"Calculating betweenness centrality for each node can take some time to\nfinish. The issue of slower ",Object(o.b)("inlineCode",{parentName:"p"},"NetworkX")," implementations is something we at\nMemgraph would like to address in the future. An example of this can be seen\nin the next section of this tutorial."),Object(o.b)("hr",null),Object(o.b)("p",null,"For our last trick, let's try to locate communities inside our network.\nCommunities are a set of nodes that are densely connected.\nThe goal of the community detection algorithms can be nicely described\nwith the next visualization:\n",Object(o.b)("img",{src:n(437).default})),Object(o.b)("p",null,"As for centrality, there are multiple algorithms for finding communities in a graph.\nWe will write a function that takes a method for calculating communities, uses it\nto find the communities, and, optionally, calculates some metrics specific to\nthe graph partitioning so we can compare algorithms. To make things more\ninteresting, let's find out which genre is the most popular in the community and\nreturn the percentage which tells us how many of the users have that genre on\ntheir list. In the end, music is something that connects us!"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def _get_communities(\n        context: mgp.ProcCtx,\n        community_function,\n        calculate_quality: bool):\n    g = _create_undirected_graph(context)\n\n    communities = list(community_function(g))\n\n    if calculate_quality:\n        quality = {\n            'coverage': nxa.community.quality.coverage(g, communities),\n            'modularity': nxa.community.quality.modularity(g, communities),\n            'performance': nxa.community.quality.performance(g, communities)\n        }\n    else:\n        quality = {}\n\n    communities = [list(community) for community in communities]\n\n    def get_community_info(community):\n        info = {\n            'size': len(community),\n        }\n\n        genre_count = defaultdict(lambda: 0)\n        for genre in itertools.chain(\n                *[user.properties[\"genres\"] for user in community]):\n            genre_count[genre] += 1\n\n        if len(genre_count) != 0:\n            mpg = max(\n                genre_count.items(),\n                key=lambda item: item[1])\n\n            info['most_popular_genre'] = mpg[0]\n            info['most_popular_genre_percentage'] = mpg[1] / info['size']\n\n        return info\n\n    return mgp.Record(communities=[get_community_info(c)\n                                   for c in communities], quality=quality)\n")),Object(o.b)("p",null,"Now that we have our function in place let's test some algorithms. We will be\nchecking out community detection using\n",Object(o.b)("a",{parentName:"p",href:"https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.modularity_max.greedy_modularity_communities.html#networkx.algorithms.community.modularity_max.greedy_modularity_communities"},"greedy modularity maximization by Clauset-Newman-Moore"),"\nand\n",Object(o.b)("a",{parentName:"p",href:"https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.label_propagation.label_propagation_communities.html#networkx.algorithms.community.label_propagation.label_propagation_communities"},"label propagation"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef greedy_modularity_communities(\n        context: mgp.ProcCtx,\n        calculate_quality: bool = False) -> mgp.Record(\n        communities=list,\n        quality=mgp.Map):\n    return _get_communities(\n        context,\n        nxa.community.greedy_modularity_communities,\n        calculate_quality)\n\n\n@mgp.read_proc\ndef label_propagation_communities(\n        context: mgp.ProcCtx,\n        calculate_quality: bool = False) -> mgp.Record(\n        communities=list,\n        quality=mgp.Map):\n    return _get_communities(\n        context,\n        nxa.community.label_propagation_communities,\n        calculate_quality)\n")),Object(o.b)("p",null,"In the above snippet, we can notice an optional argument ",Object(o.b)("inlineCode",{parentName:"p"},"calculate_quality")," and\nusage of the type ",Object(o.b)("inlineCode",{parentName:"p"},"mgp.Map")," which is provided by Memgraph."),Object(o.b)("p",null,"Let's see the results with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.greedy_modularity_communities()\nYIELD communities\nUNWIND communities as community\nWITH community\nWHERE community.size > 10\nRETURN community.most_popular_genre, community.most_popular_genre_percentage, community.size\nORDER BY community.size DESC;\n")),Object(o.b)("p",null,"and"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.label_propagation_communities()\nYIELD communities\nUNWIND communities as community\nWITH community\nWHERE community.size > 10\nRETURN community.most_popular_genre, community.most_popular_genre_percentage, community.size\nORDER BY community.size DESC;\n")),Object(o.b)("p",null,"Your results should look something like this:\n",Object(o.b)("img",{src:n(438).default})),Object(o.b)("p",null,"Hmm, ",Object(o.b)("inlineCode",{parentName:"p"},"Pop")," sure is popular. Let's ignore that genre:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"for genre in itertools.chain(\n        *[user.properties[\"genres\"] for user in community]):\n    if genre != 'Pop':\n        genre_count[genre] += 1\n")),Object(o.b)("p",null,"and call our procedures again for each algorithm. Well, people always liked to\ndance!"),Object(o.b)("p",null,"We saw the biggest communities in our network using two different methods. It's\nhard to say which of the methods did better so let's check a couple of metrics\nby calling the same procedure with ",Object(o.b)("inlineCode",{parentName:"p"},"calculate_quality")," set to true:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.greedy_modularity_communities(true)\nYIELD communities, quality\nRETURN quality;\n")),Object(o.b)("p",null,"and"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.label_propagation_communities(true)\nYIELD communities, quality\nRETURN quality;\n")),Object(o.b)("p",null,"I think it should come as no surprise that an algorithm that maximizes\nmodularity has higher modularity..."),Object(o.b)("h2",{id:"optimized-networkx-integration"},"Optimized NetworkX integration"),Object(o.b)("p",null,"As noted before, we at Memgraph are aware of NetworkX's potential but the\nperformance for some functions isn't that good. We decided to tackle this\nproblem by writing a wrapper object for Memgraph's graph and with smarter usage\nof NetworkX algorithms. To make things even more convenient, we decided to\nimplement procedures that call NetworkX functions with our graphs, so you have\nout-of-the-box access to the graph algorithms. NetworkX contains a huge\namount of functions, and writing procedures for all of them require insane\neffort, so don't blame us if some of the algorithms aren't available. We are\nalways open to any feedback, so if you think that an implementation for\nan algorithm is needed, we will surely take that into account."),Object(o.b)("p",null,"To demonstrate performance improvement, we will calculate the betweenness\ncentrality again, this time by using Memgraph's procedure."),Object(o.b)("p",null,"To get access to the NetworkX procedures, start your Memgraph server without\nmodifying the query modules directory path. That way, the path will be set to\nthe default path, which contains ",Object(o.b)("inlineCode",{parentName:"p"},"nxalg")," module."),Object(o.b)("p",null,"Now let's call the procedure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.betweenness_centrality()\nYIELD *\nRETURN node.id, node.genres, betweenness\nORDER BY betweenness DESC\nLIMIT 10;\n")),Object(o.b)("p",null,"You should get the same results as with our previous procedure for\nthe betweenness centrality but in a much lower time."),Object(o.b)("h2",{id:"further-reading"},"Further reading"),Object(o.b)("p",null,"We encourage you to take a look at our ",Object(o.b)("inlineCode",{parentName:"p"},"How to")," for the modules at the\n",Object(o.b)("a",{parentName:"p",href:"/memgraph/database-functionalities/query-modules/implement-query-modules"},"How to Implement Query Modules?"),"."),Object(o.b)("p",null,"This tutorial showed you how with a little effort you can extend your control\nover the data. Using packages like ",Object(o.b)("inlineCode",{parentName:"p"},"NetworkX")," you get a huge amount of already\nimplemented graph algorithms while Memgraph allows you complete access to its\ninternal graph."),Object(o.b)("p",null,"If you are not a big fan of Python, don't worry! We have a C API with the exact\nsame functionalities."))}u.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},437:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/community_detection_visualization-a7bacfdf4a83c423a48a363ad86b4080.png"},438:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/community_genre_statistics-8206eba0df0c16990e5c2151af0f726e.png"}}]);