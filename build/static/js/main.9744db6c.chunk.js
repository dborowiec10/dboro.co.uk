(this["webpackJsonpdboro.me"]=this["webpackJsonpdboro.me"]||[]).push([[0],{11:function(e,n,t){"use strict";var i=t(1),c=t(18),a=t(3),r=t(14),l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),s=l.NODE_ENV,o=l.REACT_APP_GA_TRACKING_ID;"production"===s&&r.a.initialize(o);var j=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===s&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},b=t(5),u=t(13),d=[{index:!0,label:"Damian Borowiec",path:"/"},{label:"Timeline",path:"/timeline"},{label:"Skills",path:"/skills"},{label:"Publications",path:"/publications"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],h=t(0),O=Object(i.lazy)((function(){return t.e(4).then(t.t.bind(null,167,7))})),m=function(){var e=Object(i.useState)(!1),n=Object(u.a)(e,2),t=n[0],c=n[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:t?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return c(!t)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return c(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:t,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,onClick:function(){return c(!t)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsxs)("ul",{children:[d.filter((function(e){return!e.index&&!e.extern})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,children:e.label})},e.label)})),Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:{pathname:"https://blog.dboro.co.uk"},target:"_blank",children:"Blog"})})]})}),Object(h.jsx)(m,{})]})},p=t(25),f=function(){var e=Object(i.useState)(),n=Object(u.a)(e,2),t=n[0],c=n[1];return Object(i.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1997-01-30T09:24:00");c(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(h.jsx)(h.Fragment,{children:t})},g=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(b.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("","/images/me.jpeg"),alt:""})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Damian Borowiec"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:dborowiec10@gmail.com",children:"dborowiec10@gmail.com"})})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsx)("p",{children:"Hi, I'm Damian. I like Deep Learning and Compilers. I am a Lancaster University (UK), BSc graduate and I'm currently working towards a PhD in Computer Science (also at Lancaster University)."}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:window.location.pathname.includes("/timeline")?Object(h.jsx)(b.b,{to:"/",className:"button",children:"About Me"}):Object(h.jsx)(b.b,{to:"/timeline",className:"button",children:"My Timeline"})})}),Object(h.jsxs)("p",{children:["Current Age: ",Object(h.jsx)(f,{})," years"]})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)("p",{className:"copyright",children:["\xa9 Damian Borowiec ",Object(h.jsx)(b.b,{to:"/",children:"dboro.me"}),"."]})]})]})},v=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(h.jsxs)(c.b,{children:[Object(h.jsx)(j,{}),Object(h.jsx)(v,{}),Object(h.jsxs)(c.a,{titleTemplate:"%s | Damian Borowiec",defaultTitle:"Damian Borowiec",defer:!1,children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(g,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"Damian's personal website."};n.a=w},25:function(e,n,t){"use strict";t(1);var i=t(30),c=t(31),a=t(32),r=t(33),l=[{link:"https://github.com/dborowiec10",label:"Github",icon:c.faGithub},{link:"https://www.linkedin.com/in/damian-borowiec/",label:"LinkedIn",icon:a.faLinkedinIn},{link:"mailto:dborowiec10@gmail.com",label:"Email",icon:r.faEnvelope}],s=t(0);n.a=function(){return Object(s.jsx)("ul",{className:"icons",children:l.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.link,children:Object(s.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),a=t(17),r=t(5),l=t(3),s=t(11),o=t(0),j=function(){return Object(o.jsx)(s.a,{title:"Publications",description:"Learn about  my publications.",children:Object(o.jsxs)("article",{className:"post",id:"publications",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(r.b,{to:"/publications",children:"Publications"})}),Object(o.jsx)("p",{children:"A selection of publications that I'm not too ashamed of"})]})}),[{year:2021,pubs:[{authors:"Borowiec, Damian; Harper, R H R; Garraghan, Peter",title:"Environmental Consequence of Deep Learning",venue:"ITNOW, Volume 63, Issue 4, Winter 2021, Pages 10\u201311",link:"https://eprints.lancs.ac.uk/id/eprint/161289/"},{authors:"Yeung, Gingfung; Borowiec, Damian; Yang, Renyu; Friday, Adrian; Harper, R H R; Garraghan, Peter",title:"Horus: Interference-Aware and Prediction-Based Scheduling in Deep Learning Systems",venue:"IEEE Transactions on Parallel and Distributed Systems, 2021, ISSN: 1045-9219",link:"10.1109/TPDS.2021.3079202"},{authors:"Sarkar, Advait; Rintel, Sean; Borowiec, Damian; Bergmann, Rachel; Gillett, Sharon; Bragg, Danielle; Baym, Nancy; Sellen, Abigail",title:"The Promise and Peril of Parallel Chat in Video Meetings for Work",venue:"Conference on Human Factors in Computing Systems Extended Abstracts (CHI 21 Extended Abstracts), 2021.",link:"https://doi.org/10.1145/3411763.3451793"}]},{year:2020,pubs:[{authors:"Yeung, Gingfung; Borowiec, Damian; Yang, Renyu; Friday, Adrian; Harper, R H R; Garraghan, Peter",title:"Horus: An Interference-aware Resource Manager for Deep Learning Systems",venue:"Algorithms and Architectures for Parallel Processing. ICA3PP 2020",link:"http://dx.doi.org/10.1007/978-3-030-60239-0_33"},{authors:"Towards GPU Utilization Prediction for Cloud Deep Learning",title:"Yeung, Gingfung; Borowiec, Damian; Yang, Renyu; Friday, Adrian; Harper, R H R; Garraghan, Peter",venue:"The 12th USENIX Workshop on Hot Topics in Cloud Computing (HotCloud `20)",link:"https://dl.acm.org/doi/10.5555/3485849.3485855"}]}].map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.year}),e.pubs.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:e.link,children:e.title}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:e.authors}),Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:e.venue}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]},e.title)})),Object(o.jsx)("hr",{})]},e.year)}))]})})},b=(t(46),Object(i.lazy)((function(){return t.e(8).then(t.bind(null,171))}))),u=Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(9)]).then(t.bind(null,165))})),d=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,166))})),h=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,170))})),O=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,169))})),m=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,168))})),x=function(){return Object(o.jsx)(r.a,{basename:"",children:Object(o.jsx)(i.Suspense,{fallback:Object(o.jsx)(s.a,{}),children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(l.a,{path:"/projects",component:h}),Object(o.jsx)(l.a,{path:"/publications",component:j}),Object(o.jsx)(l.a,{path:"/contact",component:b}),Object(o.jsx)(l.a,{path:"/timeline",component:O}),Object(o.jsx)(l.a,{path:"/skills",component:m}),Object(o.jsx)(l.a,{component:d,status:404})]})})})},p=function(){return Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(o.jsx)(p,{}),f):Object(a.render)(Object(o.jsx)(p,{}),f)}},[[47,1,3]]]);
//# sourceMappingURL=main.9744db6c.chunk.js.map