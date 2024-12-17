"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6844],{83548:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(85893),o=i(11151);const s={title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:10,slug:"/ibc/roadmap"},a="Roadmap ibc-go",l={id:"ibc/roadmap",title:"Roadmap",description:"Latest update: December 4th, 2023",source:"@site/versioned_docs/version-v8.5.x/01-ibc/10-roadmap.md",sourceDirName:"01-ibc",slug:"/ibc/roadmap",permalink:"/v8/ibc/roadmap",draft:!1,unlisted:!1,tags:[],version:"v8.5.x",sidebarPosition:10,frontMatter:{title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:10,slug:"/ibc/roadmap"},sidebar:"defaultSidebar",previous:{title:"Protobuf Documentation",permalink:"/v8/ibc/proto-docs"},next:{title:"Troubleshooting",permalink:"/v8/ibc/troubleshooting"}},r={},c=[{value:"08-wasm/v0.1.0",id:"08-wasmv010",level:2},{value:"v8.1.0",id:"v810",level:2},{value:"Channel upgradability",id:"channel-upgradability",level:3},{value:"v9.0.0",id:"v900",level:2},{value:"Conditional clients",id:"conditional-clients",level:3},{value:"v10.0.0",id:"v1000",level:2},{value:"Multihop channels",id:"multihop-channels",level:3}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"roadmap-ibc-go",children:"Roadmap ibc-go"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Latest update: December 4th, 2023"})}),"\n",(0,n.jsx)(t.p,{children:"This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go by the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications."}),"\n",(0,n.jsxs)(t.p,{children:["This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans. For the latest expected release timelines, please check ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"08-wasmv010",children:"08-wasm/v0.1.0"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the progress with the ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/40",children:"milestone"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The first release of this new module will add support for Wasm light clients. The first Wasm client developed on top of ibc-go/v7 02-client refactor and stored as Wasm bytecode will be the GRANDPA light client used for Cosmos x Substrate IBC connections. This feature will be used also for a NEAR light client in the future."}),"\n",(0,n.jsx)(t.p,{children:"This feature has been developed by Composable and Strangelove."}),"\n",(0,n.jsx)(t.h2,{id:"v810",children:"v8.1.0"}),"\n",(0,n.jsx)(t.h3,{id:"channel-upgradability",children:"Channel upgradability"}),"\n",(0,n.jsxs)(t.p,{children:["Channel upgradability will allow chains to renegotiate an existing channel to take advantage of new features without having to create a new channel, thus preserving all existing packet state processed on the channel. This feature will enable, for example, the adoption of existing channels of features like ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc/discussions/824",children:"path unwinding"})," or fee middleware."]}),"\n",(0,n.jsxs)(t.p,{children:["Follow the progress with the ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/29",children:"alpha milestone"})," or the ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/cosmos/projects/7/views/17",children:"project board"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"v900",children:"v9.0.0"}),"\n",(0,n.jsx)(t.h3,{id:"conditional-clients",children:"Conditional clients"}),"\n",(0,n.jsxs)(t.p,{children:["Conditional clients are light clients which are dependent on another client in order to verify or update state. Conditional clients are essential for integration with modular blockchains which break up consensus and state management, such as rollups. Currently, light clients receive a single provable store they maintain. There is an unidirectional communication channel with 02-client: the 02-client module will call into the light client, without allowing for the light client to call into the 02-client module. But modular blockchains break up a logical blockchain into many constituent parts, so in order to accurately represent these chains and also to account for various types of shared security primitives that are coming up, we need to introduce dependencies between clients. In the case of optimistic rollups, for example, in order to prove execution (allowing for fraud proofs), you must prove data availability and sequencing. A potential solution to this problem is that a light client may optionally specify a list of dependencies and the 02-client module would lookup read-only provable stores for each dependency and provide this to the conditional client to perform verification. Please see ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/issues/5112",children:"this issue"})," for more details."]}),"\n",(0,n.jsx)(t.h2,{id:"v1000",children:"v10.0.0"}),"\n",(0,n.jsx)(t.h3,{id:"multihop-channels",children:"Multihop channels"}),"\n",(0,n.jsxs)(t.p,{children:["Multihop channels specify a way to route messages across a path of IBC enabled blockchains utilizing multiple pre-existing IBC connections. The current IBC protocol defines messaging in a point-to-point paradigm which allows message passing between two directly connected IBC chains, but as more IBC enabled chains come into existence there becomes a need to relay IBC packets across chains because IBC connections may not exist between the two chains wishing to exchange messages. IBC connections may not exist for a variety of reasons which could include economic inviability since connections require client state to be continuously exchanged between connection ends which carries a cost. Please see the ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc/blob/main/spec/core/ics-033-multi-hop/README.md",children:"ICS 33 spec"})," for more information."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["This roadmap is also available as a ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/cosmos/projects/7/views/25",children:"project board"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For the latest expected release timelines, please check ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For the latest information on the progress of the work or the decisions made that might influence the roadmap, please follow the ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/discussions/categories/announcements",children:"Announcements"})," category in the Discussions tab of the repository."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": release version numbers may be subject to change."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>a});var n=i(67294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);