"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92910],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var g={};for(var l in t)hasOwnProperty.call(t,l)&&(g[l]=t[l]);g.originalType=e,g.mdxType="string"==typeof e?e:a,o[1]=g;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94958:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return g},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],g={id:"triggers",title:"How to manage database triggers",sidebar_label:"Manage database triggers",slug:"/how-to-guides/triggers"},l=void 0,s={unversionedId:"how-to-guides/triggers/triggers",id:"how-to-guides/triggers/triggers",title:"How to manage database triggers",description:"Because Memgraph supports database triggers on CREATE, UPDATE and DELETE",source:"@site/gqlalchemy/how-to-guides/triggers/triggers.md",sourceDirName:"how-to-guides/triggers",slug:"/how-to-guides/triggers",permalink:"/docs/gqlalchemy/how-to-guides/triggers",editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/triggers/triggers.md",tags:[],version:"current",frontMatter:{id:"triggers",title:"How to manage database triggers",sidebar_label:"Manage database triggers",slug:"/how-to-guides/triggers"},sidebar:"gqlalchemy",previous:{title:"Pulsar streams",permalink:"/docs/gqlalchemy/how-to-guides/streams/manage-pulsar-streams"},next:{title:"Use on-disk storage",permalink:"/docs/gqlalchemy/how-to-guides/on-disk-storage"}},p={},c=[{value:"1. Create the trigger",id:"1-create-the-trigger",level:2},{value:"2. Check the status of a trigger",id:"2-check-the-status-of-a-trigger",level:2},{value:"3. Delete the trigger",id:"3-delete-the-trigger",level:2}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Because Memgraph supports database triggers on ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),"\noperations, GQLAlchemy also implements a simple interface for maintaining these\ntriggers. "),(0,i.kt)("h2",{id:"1-create-the-trigger"},"1. Create the trigger"),(0,i.kt)("p",null,"To set up the trigger, first, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"MemgraphTrigger")," object with all the\nrequired arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name: str")," \u27a1 The name of the trigger."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_type: TriggerEventType")," \u27a1 The type of event that will trigger the\nexecution. The options are: ",(0,i.kt)("inlineCode",{parentName:"li"},"TriggerEventType.CREATE"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"TriggerEventType.UPDATE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"TriggerEventType.DELETE"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_object: TriggerEventObject")," \u27a1 The objects that are affected with the\n",(0,i.kt)("inlineCode",{parentName:"li"},"event_type"),". The options are: `",(0,i.kt)("inlineCode",{parentName:"li"},"TriggerEventObject.ALL,\n"),"TriggerEventObject.NODE",(0,i.kt)("inlineCode",{parentName:"li"},"and"),"TriggerEventObject.RELATIONSHIP`."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execution_phase: TriggerExecutionPhase")," \u27a1 The phase when the trigger should\nbe executed in regard to the transaction commit. The options are: ",(0,i.kt)("inlineCode",{parentName:"li"},"BEFORE")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"AFTER"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"statement: str")," \u27a1 The Cypher query that should be executed when the trigger\nfires.")),(0,i.kt)("p",null,"Now, let's create a trigger in GQLAlchemy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Memgraph, MemgraphTrigger\nfrom gqlalchemy.models import (\n    TriggerEventType,\n    TriggerEventObject,\n    TriggerExecutionPhase,\n)\n\ndb = Memgraph()\n\ntrigger = MemgraphTrigger(\n    name="ratings_trigger",\n    event_type=TriggerEventType.CREATE,\n    event_object=TriggerEventObject.NODE,\n    execution_phase=TriggerExecutionPhase.AFTER,\n    statement="UNWIND createdVertices AS node SET node.created_at = LocalDateTime()",\n)\n\ndb.create_trigger(trigger)\n')),(0,i.kt)("p",null,"The trigger names ",(0,i.kt)("inlineCode",{parentName:"p"},"ratings_trigger")," will be executed every time a node is\ncreated in the database. After the transaction that created the node in question\nfinishes, the Cypher query ",(0,i.kt)("inlineCode",{parentName:"p"},"statement")," will execute, and in this case, it will\nset the property ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," of the newly created node to the current date and\ntime. "),(0,i.kt)("h2",{id:"2-check-the-status-of-a-trigger"},"2. Check the status of a trigger"),(0,i.kt)("p",null,"You can return all of the triggers from the database with the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_Triggers()"),"\nmethod:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"triggers = db.get_triggers()\nprint(triggers)\n")),(0,i.kt)("h2",{id:"3-delete-the-trigger"},"3. Delete the trigger"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"drop_trigger()")," method to delete a trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"db.drop_trigger(trigger)\n")))}d.isMDXComponent=!0}}]);