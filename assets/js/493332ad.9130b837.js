"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85893],{43701:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(85893),o=i(11151);const s={title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:10,slug:"/ibc/roadmap"},a="Roadmap ibc-go",c={id:"ibc/roadmap",title:"Roadmap",description:"Latest update: June 7th, 2024",source:"@site/versioned_docs/version-v9.0.x/01-ibc/10-roadmap.md",sourceDirName:"01-ibc",slug:"/ibc/roadmap",permalink:"/v9/ibc/roadmap",draft:!1,unlisted:!1,tags:[],version:"v9.0.x",sidebarPosition:10,frontMatter:{title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:10,slug:"/ibc/roadmap"},sidebar:"defaultSidebar",previous:{title:"Protobuf Documentation",permalink:"/v9/ibc/proto-docs"},next:{title:"Troubleshooting",permalink:"/v9/ibc/troubleshooting"}},r={},l=[{value:"v9.0.0",id:"v900",level:2},{value:"ICS20 v2",id:"ics20-v2",level:3},{value:"v10.0.0",id:"v1000",level:2},{value:"ICA v2",id:"ica-v2",level:3},{value:"Multipacket atomicity",id:"multipacket-atomicity",level:3},{value:"Multihop channels",id:"multihop-channels",level:4}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"roadmap-ibc-go",children:"Roadmap ibc-go"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Latest update: June 7th, 2024"})}),"\n",(0,n.jsx)(t.p,{children:"This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go by the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications."}),"\n",(0,n.jsxs)(t.p,{children:["This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans. For the latest expected release timelines, please check ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"v900",children:"v9.0.0"}),"\n",(0,n.jsx)(t.h3,{id:"ics20-v2",children:"ICS20 v2"}),"\n",(0,n.jsxs)(t.p,{children:["The transfer application will be updated to add support for ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc/pull/1020",children:"transferring multiple tokens in the same packet"})," and support for ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc/pull/1090",children:"atomically route tokens series of paths with a single packet"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"v1000",children:"v10.0.0"}),"\n",(0,n.jsx)(t.h3,{id:"ica-v2",children:"ICA v2"}),"\n",(0,n.jsxs)(t.p,{children:["This new version of ICS27 will address many of ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/pull/6281",children:"the pain points with the current design"}),", including multiplexing all communication between controller and host through a single channel (instead of each interchain account on the host being associated to a different channel, as it is now)."]}),"\n",(0,n.jsx)(t.h3,{id:"multipacket-atomicity",children:"Multipacket atomicity"}),"\n",(0,n.jsx)(t.p,{children:"We will refactor the 05-port router to enable atomic sending of multiple packets belonging to different applications."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"And potentially later on..."}),"\n",(0,n.jsx)(t.h4,{id:"multihop-channels",children:"Multihop channels"}),"\n",(0,n.jsxs)(t.p,{children:["Multihop channels specify a way to route messages across a path of IBC enabled blockchains utilizing multiple pre-existing IBC connections. The current IBC protocol defines messaging in a point-to-point paradigm which allows message passing between two directly connected IBC chains, but as more IBC enabled chains come into existence there becomes a need to relay IBC packets across chains because IBC connections may not exist between the two chains wishing to exchange messages. IBC connections may not exist for a variety of reasons which could include economic inviability since connections require client state to be continuously exchanged between connection ends which carries a cost. Please see the ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc/blob/main/spec/core/ics-033-multi-hop/README.md",children:"ICS 33 spec"})," for more information."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["This roadmap is also available as a ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/cosmos/projects/7/views/25",children:"project board"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For the latest expected release timelines, please check ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For the latest information on the progress of the work or the decisions made that might influence the roadmap, please follow the ",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/discussions/categories/announcements",children:"Announcements"})," category in the Discussions tab of the repository."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": release version numbers may be subject to change."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>a});var n=i(67294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);