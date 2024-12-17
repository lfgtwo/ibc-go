"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74425],{54002:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(85893),r=i(11151);const t={},o="Migrating from v9 to v10",l={id:"migrations/v9-to-v10",title:"Migrating from v9 to v10",description:"This guide provides instructions for migrating to a new version of ibc-go.",source:"@site/versioned_docs/version-v9.0.x/05-migrations/14-v9-to-v10.md",sourceDirName:"05-migrations",slug:"/migrations/v9-to-v10",permalink:"/v9/migrations/v9-to-v10",draft:!1,unlisted:!1,tags:[],version:"v9.0.x",sidebarPosition:14,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"IBC-Go v8 to v9",permalink:"/v9/migrations/v8-to-v9"}},c={},a=[{value:"Chains",id:"chains",level:2},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"ICS27 - Interchain Accounts",id:"ics27---interchain-accounts",level:3},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"migrating-from-v9-to-v10",children:"Migrating from v9 to v10"}),"\n",(0,s.jsx)(n.p,{children:"This guide provides instructions for migrating to a new version of ibc-go."}),"\n",(0,s.jsx)(n.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#chains",children:"Chains"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#ibc-apps",children:"IBC Apps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ics27---interchain-accounts",children:"ICS27 - Interchain Accounts"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#relayers",children:"Relayers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ibc-light-clients",children:"IBC Light Clients"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," ibc-go supports golang semantic versioning and therefore all imports must be updated on major version releases."]}),"\n",(0,s.jsx)(n.h2,{id:"chains",children:"Chains"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ibc-apps",children:"IBC Apps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(TODO: expand later) Removal of capabilities in ",(0,s.jsx)(n.code,{children:"SendPacket"})," ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/7213",children:"#7213"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["(TODO: expand later) Removal of capabilities in ",(0,s.jsx)(n.code,{children:"WriteAcknowledgement"})," ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/7213",children:"#7225"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["(TODO: expand later) Removal of capabilities in channel handshake methods ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/7232",children:"#7232"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["(TODO: expand later) More removal of capabilities in ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/7270",children:"#7270"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ics27---interchain-accounts",children:"ICS27 - Interchain Accounts"}),"\n",(0,s.jsx)(n.p,{children:"The channel capability migration introduced in v6 has been removed. Chains must upgrade from v6 or higher."}),"\n",(0,s.jsx)(n.h2,{id:"relayers",children:"Relayers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ibc-light-clients",children:"IBC Light Clients"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(67294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);