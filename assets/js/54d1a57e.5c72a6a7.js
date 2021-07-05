(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8264],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=h(n),m=o,u=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58684:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return d},default:function(){return c}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],l={id:"got-deaths",title:"Game of Thrones deaths",sidebar_label:"Game of Thrones deaths"},s=void 0,h={unversionedId:"tutorials/got-deaths",id:"version-1.3.0/tutorials/got-deaths",isDocsHomePage:!1,title:"Game of Thrones deaths",description:"This article is part of a series intended to show how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/got-deaths.md",sourceDirName:"tutorials",slug:"/tutorials/got-deaths",permalink:"/memgraph/1.3.0/tutorials/got-deaths",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/got-deaths.md",version:"1.3.0",frontMatter:{id:"got-deaths",title:"Game of Thrones deaths",sidebar_label:"Game of Thrones deaths"},sidebar:"version-1.3.0/memgraph",previous:{title:"Movie recommendation system",permalink:"/memgraph/1.3.0/tutorials/movie-recommendation"},next:{title:"Social network analysis with NetworkX",permalink:"/memgraph/1.3.0/tutorials/social-network-analysis"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[]}],p={toc:d};function c(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article is part of a series intended to show how to use Memgraph\non real-world data to retrieve some interesting and useful\ninformation."),(0,i.kt)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/tutorials/tutorials"},"tutorial overview section"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WARNING")," - this tutorial could contain Game of Thrones ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"spoilers")),".  "),(0,i.kt)("p",null,"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO.\nIt is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels,  the first of which is\nA Game of Thrones. The Game of Thrones world is full of interesting characters, locations, scenarios, unexpected deaths, and plot twists."),(0,i.kt)("p",null,"Even though the COVID-19 pandemic hit the entire world in 2020 and is now starting to become one of the worst\nyears in recent history, 2019 was also a huge disappointment to all Game of Thrones fans. According to user reactions, a seven-year\nbuild-up resulted in a poorly written ending of the last season and ruined the ending of one of the most popular shows on the planet.",(0,i.kt)("br",{parentName:"p"}),"\n","Nonetheless, if you want to know how many characters would have survived if Jon Snow had stayed dead, which House had the best Kill/Death Ratio,\nor who was the biggest traitor in the show, you came to the right place!"),(0,i.kt)("h2",{id:"data-model"},"Data model"),(0,i.kt)("p",null,"Although the Game of Thrones TV show is based on a series of books, our graph database contains only characters from the\npreviously mentioned TV shows as the books are still not finished. This tutorial would not be possible without data analyst David\nMurphy who shared his collection of on-screen deaths on ",(0,i.kt)("a",{parentName:"p",href:"https://data.world/datasaurusrex/game-of-thones-deaths"},"this link"),". For more information, you can visit his ",(0,i.kt)("a",{parentName:"p",href:"https://datasaurus-rex.com/gallery/gotviz-mkiii"},"blogpost"),' with interactive analysis\non the show deaths. We won\'t be working with kills and deaths that happened off-screen or were tied to the undead (wraiths).\nThe dataset we used was slightly modified, in which columns "Episode Name" and "IMDb Rating" were added.'),(0,i.kt)("p",null,"The model consists of the following nodes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"Character")," node has a ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the character's name (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"Jon Snow"'),")"),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"Allegiance")," node has a ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the house name the character\nis loyal to (e.g.  ",(0,i.kt)("inlineCode",{parentName:"li"},'"House Stark"'),")"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"Death")," node has an ",(0,i.kt)("inlineCode",{parentName:"li"},"order")," attribute corresponding to the order in which the death happened\nin the show (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"602"),")"),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"Episode")," node has a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," attribute corresponding to the number of episodes (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"),\n",(0,i.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the name of the episode (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"Mothers Mercy"'),") and ",(0,i.kt)("inlineCode",{parentName:"li"},"imdb_rating"),'\nepisode corresponding to the IMDB rating of the episode (e.g. "9.1")'),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"Season")," node has a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," attribute corresponding to the number of the season (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),")"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"Character")," node has a ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the character's name (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"Castle Black"'),")")),(0,i.kt)("p",null,"Nodes are connected with the following edges:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":KILLED")," - connect two Character nodes and they have 2 attributes,\n",(0,i.kt)("inlineCode",{parentName:"li"},"method")," which says how was the character killed (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"Knife"'),") and ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," attribute representing a\nnumber of how many of these characters were killed (e.g. if ",(0,i.kt)("inlineCode",{parentName:"li"},'"Jon Snow"')," killed ",(0,i.kt)("inlineCode",{parentName:"li"},"10")," ",(0,i.kt)("inlineCode",{parentName:"li"},'"Lannister soldiers"'),"\nthen on this edge ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," would be ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":LOYAL_TO")," - connects ",(0,i.kt)("inlineCode",{parentName:"li"},"Character")," node with ",(0,i.kt)("inlineCode",{parentName:"li"},"Allegiance")," node representing an allegiance the character is\nloyal to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":VICTIM_IN")," and ",(0,i.kt)("inlineCode",{parentName:"li"},":KILLER_IN")," - connects ",(0,i.kt)("inlineCode",{parentName:"li"},"Character")," node with ",(0,i.kt)("inlineCode",{parentName:"li"},"Death")," node in which death happened "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":HAPPENED_IN")," - connects node ",(0,i.kt)("inlineCode",{parentName:"li"},"Death")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"Episode"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Season")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Location")," nodes representing details\nof the death"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":PART_OF")," connects node ",(0,i.kt)("inlineCode",{parentName:"li"},"Episode")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"Season")," node which episode is part of")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GOT deaths",src:n(72908).Z})),(0,i.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,i.kt)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",(0,i.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,i.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,i.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,i.kt)("inlineCode",{parentName:"p"},"Game of Thrones deaths")," and continue with the tutorial."),(0,i.kt)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),(0,i.kt)("p",null,"In the queries below, we are using ",(0,i.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher"),"\nto query Memgraph via the console."),(0,i.kt)("p",null,"Here are some queries you might find interesting:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MINI-GAME")," - If you have watched the TV Show, try to guess each result before executing the query!\n1) Let's start with a couple of simple queries. List the locations where most deaths occurred.\nCan you guess which one is it?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (l:Location)<-[:HAPPENED_IN]-(d:Death) \nRETURN l.name AS location_name, COUNT(d) AS death_count\nORDER BY death_count DESC\n")),(0,i.kt)("p",null,"2) Now that we have the location with the most deaths, let's list the episodes with the most deaths\nas well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (d:Death)-[:HAPPENED_IN]->(e:Episode)\nRETURN e.name AS episode_name, COUNT(d) AS kill_count\nORDER BY kill_count DESC\n")),(0,i.kt)("p",null,"3) List the number of kills per season. If you have watched the show, you should be able to guess this one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (d:Death)-[:HAPPENED_IN]->(s:Season) \nRETURN s.number AS season_number, COUNT(d) AS death_count\nORDER BY season_number ASC\n")),(0,i.kt)("p",null,"4) The most poorly rated season by far was the last one, but can you guess the best one?\nLet's list the seasons by IMDB ratings. The problem we get with using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AVG()")," function is that it\ngives us too many decimals, therefore a useful solution is given in this example using ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUND()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (e:Episode)-[:PART_OF]->(s:Season) \nRETURN s.number AS season_name, ROUND(100 * AVG(e.imdb_rating))/100 AS rating\nORDER BY rating DESC\n")),(0,i.kt)("p",null,"5) There are many methods by which characters were killed such as sword or Dragonfire, but let's list victims\nof unique methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (:Character)-[k:KILLED]->(:Character)\nWITH k.method AS kill_method, COUNT(k.method) AS method_count\nWHERE method_count < 2\nMATCH (killer:Character)-[k:KILLED]->(victim:Character)\nWHERE k.method = kill_method\nRETURN kill_method, victim.name AS victim\n")),(0,i.kt)("p",null,'6) Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men,\nProtector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt,\nthe Breaker of Chains or shortened to "Daenerys Targaryen" in our database is the biggest killer on\nthe show. Let\'s list all the episodes she killed in as well as characters she killed.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (daenerys:Character {name: 'Daenerys Targaryen'})-[:KILLED]->(victim:Character)\nMATCH (daenerys)-[:KILLER_IN]->(d:Death)<-[:VICTIM_IN]-(victim)\nMATCH (d)-[:HAPPENED_IN]-(e:Episode)\nRETURN DISTINCT(victim.name) AS victim, COUNT(d) AS kill_count, e.name AS episode_name\nORDER BY kill_count DESC\n")),(0,i.kt)("p",null,"7) Houses or allegiances are one of the main aspects of Westeros. Some houses killed more characters\nthan others, but that doesn't matter in the end, what matters is efficiency. Let's list the allegiances with\nthe best Kill/Death Ratios or KDR for short. Here we came across one additional problem. If an allegiance had more\ndeaths than kills, the KDR would be 0. This can easily be fixed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"toFloat()")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (:Character)-[death:KILLED]->(:Character)-[:LOYAL_TO]->(a:Allegiance)\nWITH a, sum(death.count) as deaths\nMATCH (:Character)<-[kill:KILLED]-(:Character)-[:LOYAL_TO]->(a)\nRETURN a.name AS allegiance_name, SUM(kill.count) AS kills, deaths, ROUND(100 *(TOFLOAT(SUM(kill.count))/deaths))/100 AS KDR\nORDER BY KDR DESC;\n")),(0,i.kt)("p",null,"8) One of the best-rated episodes, Battle of the Bastards, showed us a fight between two houses: Stark and Bolton.\nLet's see which one had more casualties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (c:Character)-[:LOYAL_TO]->(a:Allegiance)\nMATCH (c)-[:VICTIM_IN]-(d:Death)-[:HAPPENED_IN]-(:Episode {name: 'Battle of the Bastards'})\nRETURN a.name AS house_name, COUNT(d) AS death_count\nORDER BY death_count DESC\nLIMIT 2;\n")),(0,i.kt)("p",null,"9) One of the biggest features of Memgraph is drawing the graphs of queries we execute. Let's visualize all the\nLoyalties with Characters. Execute the following query and head out to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GRAPH")," tab."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (character:Character)-[loyal_to:LOYAL_TO]-(allegiance)\nRETURN character, loyal_to, allegiance;\n")),(0,i.kt)("p",null,"10) Remember that shocking last episode of the fifth season when they killed Jon Snow and we totally thought\nhe was gonna stay dead? Well, let's list all the characters that would survive if he actually stayed dead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:VICTIM_IN]->(jon_death:Death)\nMATCH (jon)-[:KILLER_IN]->(victim_death:Death)<-[:VICTIM_IN]-(victim)\nWHERE victim_death.order>jon_death.order\nRETURN DISTINCT(victim.name) AS victim, COUNT(victim_death) AS kill_count\nORDER BY kill_count DESC\n")),(0,i.kt)("p",null,"11) If we want to see the above example in graph form, we have to add some modifications to\nthe query, such as saving paths to variables that could be then written in ",(0,i.kt)("inlineCode",{parentName:"p"},"RETURN"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:VICTIM_IN]->(jon_death:Death)\nMATCH (jon)-[killed:KILLER_IN]->(victim_death:Death)<-[died:VICTIM_IN]-(victim)\nWHERE victim_death.order > jon_death.order\nRETURN jon, killed, victim_death, died, victim;\n")),(0,i.kt)("p",null,"12) Let's see how it looks like if we want to visualize all of Jon Snow kills with their locations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:KILLER_IN]->(death:Death)<-[victim_to_death:VICTIM_IN]-(victim)\nMATCH (death)-[death_to_location:HAPPENED_IN]->(location:Location)\nRETURN victim,victim_to_death,death,death_to_location,location\n")),(0,i.kt)("p",null,"13) Who do you think was the biggest traitor in terms of killing in its own allegiance? Well, let's check it out!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (killer:Character)-[:KILLED]->(victim:Character)\nMATCH (killer)-[:LOYAL_TO]->(a:Allegiance)<-[:LOYAL_TO]-(victim)\nRETURN killer.name AS traitor, COUNT(victim) AS kill_count\nORDER BY kill_count DESC\n")),(0,i.kt)("p",null,"14) To visualize the last example, we have to add paths between nodes in the result. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (killer:Character)-[killed:KILLED]->(victim:Character)\nMATCH (killer)-[:LOYAL_TO]->(allegiance:Allegiance)<-[loyal_to:LOYAL_TO]-(victim)\nRETURN killer, killed, victim, loyal_to, allegiance;\n")),(0,i.kt)("p",null,"15) Memgraph supports graph algorithms as well. Let's use Dijkstra's shortest path algorithm to show the most\ngruesome path of kills. An example kill path is: ",(0,i.kt)("inlineCode",{parentName:"p"},"Jon Snow")," killed ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Lannister Soldiers")," and they killed\n",(0,i.kt)("inlineCode",{parentName:"p"},"10")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Stark soldiers")," with total ",(0,i.kt)("inlineCode",{parentName:"p"},"kill_count")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"MATCH p = (:Character)-[:KILLED * wShortest (e,v | e.count) kill_count]->(:Character)\nRETURN nodes(p) AS kill_list, kill_count\nORDER BY kill_count DESC\nLIMIT 1;\n")),(0,i.kt)("p",null,"To learn more about these algorithms, we suggest you check out their Wikipedia\npages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth-first search")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"))))}c.isMDXComponent=!0},72908:function(e,t,n){"use strict";t.Z=n.p+"assets/images/got-deaths-2cd1417aa600d6825dca0b133357f27b.png"}}]);