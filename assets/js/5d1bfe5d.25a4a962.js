"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86017],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=h(n),m=o,u=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86425:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return d},default:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"got-deaths",title:"Game of Thrones deaths",sidebar_label:"Game of Thrones deaths"},s=void 0,h={unversionedId:"tutorials/got-deaths",id:"version-2.1.1/tutorials/got-deaths",title:"Game of Thrones deaths",description:"This article is part of a series intended to show how to use Memgraph on",source:"@site/memgraph_versioned_docs/version-2.1.1/tutorials/got-deaths.md",sourceDirName:"tutorials",slug:"/tutorials/got-deaths",permalink:"/docs/memgraph/2.1.1/tutorials/got-deaths",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/tutorials/got-deaths.md",tags:[],version:"2.1.1",frontMatter:{id:"got-deaths",title:"Game of Thrones deaths",sidebar_label:"Game of Thrones deaths"},sidebar:"memgraph",previous:{title:"Football transfers",permalink:"/docs/memgraph/2.1.1/tutorials/football-transfers"},next:{title:"Graphing the Premier League",permalink:"/docs/memgraph/2.1.1/tutorials/graphing-the-premier-league"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Data model",id:"data-model",children:[],level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[],level:2},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[],level:2}],p={toc:d};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article is part of a series intended to show how to use Memgraph on\nreal-world data to retrieve some interesting and useful information."),(0,r.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/tutorials"},"tutorial overview section"),"."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING")," - this tutorial could contain Game of Thrones ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"spoilers")),"."),(0,r.kt)("p",null,"Game of Thrones is an American fantasy drama television series created by David\nBenioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire,\nGeorge R. R. Martin's series of fantasy novels, the first of which is A Game of\nThrones. The Game of Thrones world is full of interesting characters, locations,\nscenarios, unexpected deaths, and plot twists."),(0,r.kt)("p",null,"Even though the COVID-19 pandemic hit the entire world in 2020 and is now\nstarting to become one of the worst years in recent history, 2019 was also a\nhuge disappointment to all Game of Thrones fans. According to user reactions, a\nseven-year build-up resulted in a poorly written ending of the last season and\nruined the ending of one of the most popular shows on the planet. Nonetheless,\nif you want to know how many characters would have survived if Jon Snow had\nstayed dead, which House had the best Kill/Death Ratio, or who was the biggest\ntraitor in the show, you came to the right place!"),(0,r.kt)("h2",{id:"data-model"},"Data model"),(0,r.kt)("p",null,"Although the Game of Thrones TV show is based on a series of books, our graph\ndatabase contains only characters from the previously mentioned TV shows as the\nbooks are still not finished. This tutorial would not be possible without data\nanalyst David Murphy who shared his ",(0,r.kt)("a",{parentName:"p",href:"https://data.world/datasaurusrex/game-of-thones-deaths"},"collection of on-screen\ndeaths"),". For more\ninformation, you can visit his\n",(0,r.kt)("a",{parentName:"p",href:"https://datasaurus-rex.com/gallery/gotviz-mkiii"},"blogpost"),' with interactive\nanalysis on the show deaths. We won\'t be working with kills and deaths that\nhappened off-screen or were tied to the undead (wraiths). The dataset we used\nwas slightly modified, in which columns "Episode Name" and "IMDb Rating" were\nadded.'),(0,r.kt)("p",null,"The model consists of the following nodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"Character")," node has a ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the character's\nname (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"Jon Snow"'),")"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"Allegiance")," node has a ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the house name\nthe character is loyal to (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"House Stark"'),")"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"Death")," node has an ",(0,r.kt)("inlineCode",{parentName:"li"},"order")," attribute corresponding to the order in which\nthe death happened in the show (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"602"),")"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"Episode")," node has a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," attribute corresponding to the number of\nepisodes (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"), ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the name of the\nepisode (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"Mothers Mercy"'),") and ",(0,r.kt)("inlineCode",{parentName:"li"},"imdb_rating"),' episode corresponding to\nthe IMDB rating of the episode (e.g. "9.1")'),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"Season")," node has a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," attribute corresponding to the number of the\nseason (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),")"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"Location")," node has a ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the location's name\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"Castle Black"'),")")),(0,r.kt)("p",null,"Nodes are connected with the following edges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":KILLED")," - connect two Character nodes and they have 2 attributes, ",(0,r.kt)("inlineCode",{parentName:"li"},"method"),"\nwhich says how was the character killed (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"Knife"'),") and ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," attribute\nrepresenting a number of how many of these characters were killed (e.g. if\n",(0,r.kt)("inlineCode",{parentName:"li"},'"Jon Snow"')," killed ",(0,r.kt)("inlineCode",{parentName:"li"},"10")," ",(0,r.kt)("inlineCode",{parentName:"li"},'"Lannister soldiers"')," then on this edge ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),"\nwould be ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":LOYAL_TO")," - connects ",(0,r.kt)("inlineCode",{parentName:"li"},"Character")," node with ",(0,r.kt)("inlineCode",{parentName:"li"},"Allegiance")," node representing an\nallegiance the character is loyal to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":VICTIM_IN")," and ",(0,r.kt)("inlineCode",{parentName:"li"},":KILLER_IN")," - connects ",(0,r.kt)("inlineCode",{parentName:"li"},"Character")," node with ",(0,r.kt)("inlineCode",{parentName:"li"},"Death")," node in\nwhich death happened"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":HAPPENED_IN")," - connects node ",(0,r.kt)("inlineCode",{parentName:"li"},"Death")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Episode"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Season")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Location"),"\nnodes representing details of the death"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":PART_OF")," connects node ",(0,r.kt)("inlineCode",{parentName:"li"},"Episode")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Season")," node which episode is part of")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GOT deaths",src:n(92417).Z,width:"1023",height:"1066"})),(0,r.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,r.kt)("p",null,"You have two options for exploring this dataset. If you just want to take a look\nat the dataset and try out a few queries, open ",(0,r.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/game-of-thrones-deaths"},"Memgraph\nPlayground")," and\ncontinue with the tutorial there. Note that you will not be able to execute\n",(0,r.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,r.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and\nnavigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,r.kt)("inlineCode",{parentName:"p"},"Game of Thrones deaths")," and continue with the tutorial."),(0,r.kt)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),(0,r.kt)("p",null,"In the queries below, we are using ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher")," to query Memgraph\nvia the console."),(0,r.kt)("p",null,"Here are some queries you might find interesting:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MINI-GAME")," - If you have watched the TV Show, try to guess each result before\nexecuting the query!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1",".")," Let's start with a couple of simple queries. List the locations where\nmost deaths occurred. Can you guess which one is it?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (l:Location)<-[:HAPPENED_IN]-(d:Death)\nRETURN l.name AS location_name, count(d) AS death_count\nORDER BY death_count DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2",".")," Now that we have the location with the most deaths, let's list the\nepisodes with the most deaths as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Death)-[:HAPPENED_IN]->(e:Episode)\nRETURN e.name AS episode_name, count(d) AS kill_count\nORDER BY kill_count DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3",".")," List the number of kills per season. If you have watched the show, you\nshould be able to guess this one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Death)-[:HAPPENED_IN]->(s:Season)\nRETURN s.number AS season_number, count(d) AS death_count\nORDER BY season_number ASC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4",".")," The most poorly rated season by far was the last one, but can you guess\nthe best one? Let's list the seasons by IMDB ratings. The problem we get with\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"avg()")," function is that it gives us too many decimals, therefore a\nuseful solution is given in this example using ",(0,r.kt)("inlineCode",{parentName:"p"},"round()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (e:Episode)-[:PART_OF]->(s:Season)\nRETURN s.number AS season_name, round(100 * avg(e.imdb_rating))/100 AS rating\nORDER BY rating DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5",".")," There are many methods by which characters were killed such as sword or\nDragonfire, but let's list victims of unique methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Character)-[k:KILLED]->(:Character)\nWITH k.method AS kill_method, count(k.method) AS method_count\nWHERE method_count < 2\nMATCH (killer:Character)-[k:KILLED]->(victim:Character)\nWHERE k.method = kill_method\nRETURN kill_method, victim.name AS victim;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6","."),' Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of\nthe Andals and the First Men, Protector of the Seven Kingdoms, the Mother of\nDragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains\nor shortened to "Daenerys Targaryen" in our database is the biggest killer on\nthe show. Let\'s list all the episodes she killed in as well as characters she\nkilled.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (daenerys:Character {name: 'Daenerys Targaryen'})-[:KILLED]->(victim:Character)\nMATCH (daenerys)-[:KILLER_IN]->(d:Death)<-[:VICTIM_IN]-(victim)\nMATCH (d)-[:HAPPENED_IN]-(e:Episode)\nRETURN DISTINCT victim.name AS victim, count(d) AS kill_count, e.name AS episode_name\nORDER BY kill_count DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7",".")," Houses or allegiances are one of the main aspects of Westeros. Some\nhouses killed more characters than others, but that doesn't matter in the end,\nwhat matters is efficiency. Let's list the allegiances with the best Kill/Death\nRatios or KDR for short. Here we came across one additional problem. If an\nallegiance had more deaths than kills, the KDR would be 0. This can easily be\nfixed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"toFloat()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Character)-[death:KILLED]->(:Character)-[:LOYAL_TO]->(a:Allegiance)\nWITH a, sum(death.count) AS deaths\nMATCH (:Character)<-[kill:KILLED]-(:Character)-[:LOYAL_TO]->(a)\nRETURN a.name AS allegiance_name,\n       sum(kill.count) AS kills,\n       deaths,\n       round(100 *(tofloat(sum(kill.count))/deaths))/100 AS KDR\nORDER BY KDR DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8",".")," One of the best-rated episodes, Battle of the Bastards, showed us a\nfight between two houses: Stark and Bolton. Let's see which one had more\ncasualties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Character)-[:LOYAL_TO]->(a:Allegiance)\nMATCH (c)-[:VICTIM_IN]-(d:Death)-[:HAPPENED_IN]-(:Episode {name: 'Battle of the Bastards'})\nRETURN a.name AS house_name, count(d) AS death_count\nORDER BY death_count DESC\nLIMIT 2;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9",".")," One of the biggest features of Memgraph is drawing the graphs of queries\nwe execute. Let's visualize all the Loyalties with Characters. Execute the\nfollowing query and head out to the ",(0,r.kt)("inlineCode",{parentName:"p"},"GRAPH")," tab."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (character:Character)-[loyal_to:LOYAL_TO]-(allegiance)\nRETURN character, loyal_to, allegiance;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"10",".")," Remember that shocking last episode of the fifth season when they\nkilled Jon Snow and we totally thought he was gonna stay dead? Well, let's list\nall the characters that would survive if he actually stayed dead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:VICTIM_IN]->(jon_death:Death)\nMATCH (jon)-[:KILLER_IN]->(victim_death:Death)<-[:VICTIM_IN]-(victim)\nWHERE victim_death.order > jon_death.order\nRETURN DISTINCT victim.name AS victim, count(victim_death) AS kill_count\nORDER BY kill_count DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"11",".")," If we want to see the above example in graph form, we have to add some\nmodifications to the query, such as saving paths to variables that could be then\nwritten in ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:VICTIM_IN]->(jon_death:Death)\nMATCH (jon)-[killed:KILLER_IN]->(victim_death:Death)<-[died:VICTIM_IN]-(victim)\nWHERE victim_death.order > jon_death.order\nRETURN jon, killed, victim_death, died, victim;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"12",".")," Let's see how it looks like if we want to visualize all of Jon Snow\nkills with their locations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:KILLER_IN]->(death:Death)<-[victim_to_death:VICTIM_IN]-(victim)\nMATCH (death)-[death_to_location:HAPPENED_IN]->(location:Location)\nRETURN victim, victim_to_death, death, death_to_location, location\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"13",".")," Who do you think was the biggest traitor in terms of killing in its own\nallegiance? Well, let's check it out!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (killer:Character)-[:KILLED]->(victim:Character)\nMATCH (killer)-[:LOYAL_TO]->(a:Allegiance)<-[:LOYAL_TO]-(victim)\nRETURN killer.name AS traitor, count(victim) AS kill_count\nORDER BY kill_count DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"14",".")," To visualize the last example, we have to add paths between nodes in\nthe result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (killer:Character)-[killed:KILLED]->(victim:Character)\nMATCH (killer)-[:LOYAL_TO]->(allegiance:Allegiance)<-[loyal_to:LOYAL_TO]-(victim)\nRETURN killer, killed, victim, loyal_to, allegiance;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"15",".")," Memgraph supports graph algorithms as well. Let's use Dijkstra's\nshortest path algorithm to show the most gruesome path of kills. An example kill\npath is: ",(0,r.kt)("inlineCode",{parentName:"p"},"Jon Snow")," killed ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Lannister Soldiers")," and they killed ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Stark\nsoldiers")," with total ",(0,r.kt)("inlineCode",{parentName:"p"},"kill_count")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"15"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH p = (:Character)-[:KILLED * wShortest (e,v | e.count) kill_count]->(:Character)\nRETURN nodes(p) AS kill_list, kill_count\nORDER BY kill_count DESC\nLIMIT 1;\n")),(0,r.kt)("p",null,"To learn more about these algorithms, we suggest you check out their Wikipedia\npages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth-first search")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"))))}c.isMDXComponent=!0},92417:function(e,t,n){t.Z=n.p+"assets/images/got-deaths-2cd1417aa600d6825dca0b133357f27b.png"}}]);