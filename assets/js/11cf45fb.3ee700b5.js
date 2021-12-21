"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53886],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62453:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"drug-discovery-application",title:"Drug Discovery",sidebar_label:"Drug Discovery"},p=void 0,s={unversionedId:"applications/drug-discovery-application",id:"applications/drug-discovery-application",title:"Drug Discovery",description:"Introduction",source:"@site/mage/applications/drug-discovery-application.md",sourceDirName:"applications",slug:"/applications/drug-discovery-application",permalink:"/docs/mage/applications/drug-discovery-application",editUrl:"https://github.com/memgraph/docs/tree/master/mage/applications/drug-discovery-application.md",tags:[],version:"current",frontMatter:{id:"drug-discovery-application",title:"Drug Discovery",sidebar_label:"Drug Discovery"},sidebar:"mage",previous:{title:"Computer Security",permalink:"/docs/mage/applications/computer-security-application"},next:{title:"Finance",permalink:"/docs/mage/applications/finance-application"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Applying graphs",id:"applying-graphs",children:[{value:"Knowledge graph prediction of unknown adverse drug reactions",id:"knowledge-graph-prediction-of-unknown-adverse-drug-reactions",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],u={toc:l};function d(e){var n=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Drug development is often expansive and time-consuming. Vast amounts of chemical\ncompounds need to be tested under specific conditions in order to find the most\neffective ones for certain diseases. Modern drug development aims to optimize\nthis resource-intensive process by leveraging machine learning techniques\ncombined with new and effective ways of data representation. "),(0,a.kt)("p",null,"Machine learning is also used in early experimental stages to predict molecular\nproperties and significantly reduce the resources and time needed for drug\ndiscovery. Relational databases are not equipped to handle such vast amounts of\nunstrutured biological data, which is why graph databases and graph algorithms\nhave found a permanent foothold in the industry."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"memgraph-graph-algorithm-applications-bioinformatics",src:t(8645).Z})),(0,a.kt)("h2",{id:"applying-graphs"},"Applying graphs"),(0,a.kt)("h3",{id:"knowledge-graph-prediction-of-unknown-adverse-drug-reactions"},"Knowledge graph prediction of unknown adverse drug reactions"),(0,a.kt)("p",null,"Unknown ",(0,a.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41598-017-16674-x"},"adverse reactions to\ndrugs")," present a significant\nhealth risk and limit accurate judgment. Machine learning has the potential to\npredict unknown adverse reactions from current knowledge without having to rely\non new resources intensive studies and experiments. Representing relationships in\nthe form of a graph and performing feature extraction can result in much clearer\nand more accurate predictions. Traditional AI and machine learning techniques\nare not meant to detect and traverse complex relationships on such scale which\nis where graph algorithms come in."),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"This text is a ",(0,a.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,a.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,a.kt)("strong",{parentName:"p"},"opinions"),", ",(0,a.kt)("strong",{parentName:"p"},"experiences")," and ",(0,a.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,a.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}d.isMDXComponent=!0},8645:function(e,n,t){n.Z=t.p+"assets/images/memgraph-graph-algorithm-applications-drug-discovery-e54513ecaa6b60c867c711ad452180f1.jpg"}}]);