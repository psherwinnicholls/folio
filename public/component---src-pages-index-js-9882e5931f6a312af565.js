(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(M,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return c}));var N=t(0),a=t.n(N),i=t(162),n=t(163),D=t(160);e.default=function(M){var e=M.data,t={display:"flex",flexDirection:"row",width:"100%",flexWrap:"wrap"};return a.a.createElement(n.a,null,a.a.createElement(i.Helmet,null,a.a.createElement("title",null,"Phil Sherwin-Nicholls | Service designer & digital technologist"),a.a.createElement("link",{rel:"canonical",href:"https://philsn.co.uk"})),a.a.createElement(D.a,{title:"Home"}),a.a.createElement("section",null,a.a.createElement("h1",null,"Phil Sherwin-Nicholls;",a.a.createElement("br",null)," a service designer",a.a.createElement("br",null),"& digital technologist."),a.a.createElement("p",{className:"lead"},"Working at the intersection of technology, data and design. Phil works with organisations to  solve wicked, population scale problems."),a.a.createElement("p",{className:"lead cta"},a.a.createElement("a",{href:"mailto:hey@philsn.co.uk"},"Available for contracts")," from mid-October.")),a.a.createElement("section",null,a.a.createElement("h3",null,"Experience"),a.a.createElement("div",null,a.a.createElement("ul",null,e.allMarkdownRemark.edges.filter((function(M){return!!M.node.frontmatter.date})).map((function(M){var e=M.node;if("experience"===e.frontmatter.type)return a.a.createElement("li",{key:e.id},e.frontmatter.client,a.a.createElement("br",null),a.a.createElement("span",null,e.frontmatter.role),a.a.createElement("p",null,e.frontmatter.excerpt))}))))),a.a.createElement("section",null,a.a.createElement("h3",null,"Talks & workshops"),a.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(M){var e=M.node;if("speaking"===e.frontmatter.type)return a.a.createElement("div",{key:e.id,style:t,dangerouslySetInnerHTML:{__html:e.html}})})))),a.a.createElement("section",null,a.a.createElement("h3",null,"Links"),e.allMarkdownRemark.edges.map((function(M){var e=M.node;if("links"===e.frontmatter.type)return a.a.createElement("div",{key:e.id,style:t,dangerouslySetInnerHTML:{__html:e.html}})}))))};var c="943279590"},159:function(M){M.exports={data:{site:{siteMetadata:{title:"Phil Sherwin-Nicholls"}}}}},160:function(M,e,t){"use strict";var N=t(161),a=t(0),i=t.n(a),n=t(3),D=t.n(n),c=t(162),l=t.n(c);function I(M){var e=M.description,t=M.lang,a=M.meta,n=M.title,D=N.data.site,c=e||D.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:n,titleTemplate:"%s | "+D.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:n},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:D.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:c}].concat(a)})}I.defaultProps={lang:"en",meta:[],description:""},I.propTypes={description:D.a.string,lang:D.a.string,meta:D.a.arrayOf(D.a.object),title:D.a.string.isRequired},e.a=I},161:function(M){M.exports={data:{site:{siteMetadata:{title:"Phil Sherwin-Nicholls",description:"Service designer & digital technologist",author:"@phils_n"}}}}},163:function(M,e,t){"use strict";var N=t(159),a=t(0),i=t.n(a),n=t(3),D=t.n(n),c=t(56),l=t(209);i.a.createElement("path",{d:"M1125 0c207.107 0 375 167.893 375 375s-167.893 375-375 375v2H375v-2C167.893 750 0 582.107 0 375 0 169.964 164.552 3.362 368.799.05L375 0z",fill:"gold"}),i.a.createElement("path",{d:"M399.793 187.7c31.304 0 57.204 5.217 77.701 15.652 20.497 10.435 35.776 24.782 45.838 43.043 10.062 18.26 15.093 38.757 15.093 61.49 0 21.615-4.845 41.46-14.534 59.534-9.69 18.074-24.782 32.608-45.279 43.602-20.497 10.993-46.77 16.49-78.819 16.49h-73.229V579h-71.552V187.7h144.781zm-4.472 58.136h-68.757v123.539h68.757c24.969 0 42.95-5.497 53.943-16.49 10.994-10.994 16.491-25.994 16.491-45 0-19.379-5.497-34.565-16.49-45.558-10.994-10.994-28.975-16.491-53.944-16.491zM582.648 579V176.52H654.2v167.7c9.317-15.28 21.894-27.298 37.732-36.056 15.839-8.757 34.006-13.136 54.503-13.136 34.286 0 60.838 10.807 79.658 32.422 18.82 21.615 28.229 53.291 28.229 95.03V579h-70.993V429.188c0-23.85-4.751-42.111-14.255-54.782-9.503-12.67-24.502-19.006-44.999-19.006-20.124 0-36.8 7.08-50.03 21.242-13.23 14.161-19.845 33.913-19.845 59.254V579h-71.552z",fill:"#000",fillRule:"nonzero"}),i.a.createElement("g",{fill:"#000",fillRule:"nonzero"},i.a.createElement("path",{d:"M951.091 258.693c-13.043 0-23.757-3.913-32.142-11.739-8.386-7.826-12.578-17.702-12.578-29.627 0-11.925 4.192-21.708 12.578-29.348 8.385-7.64 19.099-11.459 32.142-11.459 13.043 0 23.757 3.82 32.142 11.46 8.386 7.64 12.578 17.422 12.578 29.347s-4.192 21.801-12.578 29.627c-8.385 7.826-19.099 11.739-32.142 11.739zM915.315 579V301.736h71.552V579z"})),i.a.createElement("path",{fill:"#000",fillRule:"nonzero",d:"M1051.773 579V176.52h71.552V579zM1217.299 582.913c-13.043 0-23.757-4.1-32.142-12.298-8.386-8.199-12.578-18.074-12.578-29.627 0-11.925 4.192-21.987 12.578-30.186 8.385-8.199 19.099-12.298 32.142-12.298 13.043 0 23.757 4.1 32.142 12.298 8.386 8.199 12.578 18.26 12.578 30.186 0 11.553-4.192 21.428-12.578 29.627-8.385 8.199-19.099 12.298-32.142 12.298z"});var I=function(){return i.a.createElement("header",{style:{marginBottom:"6em"}},i.a.createElement("nav",null,i.a.createElement(l.a,{margin:{top:"medium"},align:"center",justify:"between",direction:"row"},i.a.createElement(c.Link,{className:"logo",to:"/"},i.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxNTAwIDc1MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIGlkPSJsb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTEyNSwwIEMxMzMyLjEwNjc4LDAgMTUwMCwxNjcuODkzMjE5IDE1MDAsMzc1IEMxNTAwLDU4Mi4xMDY3ODEgMTMzMi4xMDY3OCw3NTAgMTEyNSw3NTAgTDExMjUsNzUwIEwxMTI1LDc1MiBMMzc1LDc1MiBMMzc1LDc1MCBDMTY3Ljg5MzIxOSw3NTAgMCw1ODIuMTA2NzgxIDAsMzc1IEMwLDE2OS45NjQyODcgMTY0LjU1MjE0NCwzLjM2MTc4NTczIDM2OC43OTg2ODksMC4wNTAyMzkyODYgTDM3NSwwIFoiIGlkPSJ0YWIiIGZpbGw9IiNGRkQ3MDAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMzk5Ljc5MywxODcuNyBDNDMxLjA5NzE1NywxODcuNyA0NTYuOTk3MjMxLDE5Mi45MTcyODEgNDc3LjQ5NCwyMDMuMzUyIEM0OTcuOTkwNzY5LDIxMy43ODY3MTkgNTEzLjI2OTk1LDIyOC4xMzQyNDIgNTIzLjMzMiwyNDYuMzk1IEM1MzMuMzk0MDUsMjY0LjY1NTc1OCA1MzguNDI1LDI4NS4xNTIyMiA1MzguNDI1LDMwNy44ODUgQzUzOC40MjUsMzI5LjQ5OTc3NSA1MzMuNTgwMzgyLDM0OS4zNDQwNzYgNTIzLjg5MSwzNjcuNDE4NSBDNTE0LjIwMTYxOCwzODUuNDkyOTI0IDQ5OS4xMDg3NjksNDAwLjAyNjc3OCA0NzguNjEyLDQxMS4wMjA1IEM0NTguMTE1MjMxLDQyMi4wMTQyMjIgNDMxLjg0MjQ5NCw0MjcuNTExIDM5OS43OTMsNDI3LjUxMSBMMzI2LjU2NCw0MjcuNTExIEwzMjYuNTY0LDU3OSBMMjU1LjAxMiw1NzkgTDI1NS4wMTIsMTg3LjcgTDM5OS43OTMsMTg3LjcgWiBNMzk1LjMyMSwyNDUuODM2IEwzMjYuNTY0LDI0NS44MzYgTDMyNi41NjQsMzY5LjM3NSBMMzk1LjMyMSwzNjkuMzc1IEM0MjAuMjg5NzkyLDM2OS4zNzUgNDM4LjI3MDc3OCwzNjMuODc4MjIyIDQ0OS4yNjQ1LDM1Mi44ODQ1IEM0NjAuMjU4MjIyLDM0MS44OTA3NzggNDY1Ljc1NSwzMjYuODkxMDk1IDQ2NS43NTUsMzA3Ljg4NSBDNDY1Ljc1NSwyODguNTA2MjM2IDQ2MC4yNTgyMjIsMjczLjMyMDIyMiA0NDkuMjY0NSwyNjIuMzI2NSBDNDM4LjI3MDc3OCwyNTEuMzMyNzc4IDQyMC4yODk3OTIsMjQ1LjgzNiAzOTUuMzIxLDI0NS44MzYgWiIgaWQ9InAiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik01ODIuNjQ4LDU3OSBMNTgyLjY0OCwxNzYuNTIgTDY1NC4yLDE3Ni41MiBMNjU0LjIsMzQ0LjIyIEM2NjMuNTE2NzEzLDMyOC45NDA1OSA2NzYuMDk0MDg3LDMxNi45MjIyMSA2OTEuOTMyNSwzMDguMTY0NSBDNzA3Ljc3MDkxMywyOTkuNDA2NzkgNzI1LjkzODIzMSwyOTUuMDI4IDc0Ni40MzUsMjk1LjAyOCBDNzgwLjcyMDUwNSwyOTUuMDI4IDgwNy4yNzI3MzksMzA1LjgzNTIyNSA4MjYuMDkyNSwzMjcuNDUgQzg0NC45MTIyNjEsMzQ5LjA2NDc3NSA4NTQuMzIyLDM4MC43NDExMjUgODU0LjMyMiw0MjIuNDggTDg1NC4zMjIsNTc5IEw3ODMuMzI5LDU3OSBMNzgzLjMyOSw0MjkuMTg4IEM3ODMuMzI5LDQwNS4zMzcyMTQgNzc4LjU3NzU0OCwzODcuMDc2NzMgNzY5LjA3NDUsMzc0LjQwNiBDNzU5LjU3MTQ1MiwzNjEuNzM1MjcgNzQ0LjU3MTc2OSwzNTUuNCA3MjQuMDc1LDM1NS40IEM3MDMuOTUwODk5LDM1NS40IDY4Ny4yNzQyMzMsMzYyLjQ4MDU5NiA2NzQuMDQ0NSwzNzYuNjQyIEM2NjAuODE0NzY3LDM5MC44MDM0MDQgNjU0LjIsNDEwLjU1NDU0IDY1NC4yLDQzNS44OTYgTDY1NC4yLDU3OSBMNTgyLjY0OCw1NzkgWiIgaWQ9ImgiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MDYuMzcxMDAwLCAxNzYuNTIwMDAwKSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQ0LjcyLDgyLjE3MyBDMzEuNjc2NjAxNCw4Mi4xNzMgMjAuOTYyNTQxOSw3OC4yNjAwMzkxIDEyLjU3NzUsNzAuNDM0IEM0LjE5MjQ1ODA3LDYyLjYwNzk2MDkgLTEuMTM2ODY4MzhlLTEzLDUyLjczMjM5MyAtMS4xMzY4NjgzOGUtMTMsNDAuODA3IEMtMS4xMzY4NjgzOGUtMTMsMjguODgxNjA3IDQuMTkyNDU4MDcsMTkuMDk5MjA0OSAxMi41Nzc1LDExLjQ1OTUgQzIwLjk2MjU0MTksMy44MTk3OTUxNCAzMS42NzY2MDE0LDAgNDQuNzIsMCBDNTcuNzYzMzk4NSwwIDY4LjQ3NzQ1ODEsMy44MTk3OTUxNCA3Ni44NjI1LDExLjQ1OTUgQzg1LjI0NzU0MTksMTkuMDk5MjA0OSA4OS40NCwyOC44ODE2MDcgODkuNDQsNDAuODA3IEM4OS40NCw1Mi43MzIzOTMgODUuMjQ3NTQxOSw2Mi42MDc5NjA5IDc2Ljg2MjUsNzAuNDM0IEM2OC40Nzc0NTgxLDc4LjI2MDAzOTEgNTcuNzYzMzk4NSw4Mi4xNzMgNDQuNzIsODIuMTczIFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjguOTQ0IDQwMi40OCA4Ljk0NCAxMjUuMjE2IDgwLjQ5NiAxMjUuMjE2IDgwLjQ5NiA0MDIuNDgiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICAgICAgPHBvbHlnb24gaWQ9ImwiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxMDUxLjc3MyA1NzkgMTA1MS43NzMgMTc2LjUyIDExMjMuMzI1IDE3Ni41MiAxMTIzLjMyNSA1NzkiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMTIxNy4yOTksNTgyLjkxMyBDMTIwNC4yNTU2LDU4Mi45MTMgMTE5My41NDE1NCw1NzguODEzNzA4IDExODUuMTU2NSw1NzAuNjE1IEMxMTc2Ljc3MTQ2LDU2Mi40MTYyOTIgMTE3Mi41NzksNTUyLjU0MDcyNCAxMTcyLjU3OSw1NDAuOTg4IEMxMTcyLjU3OSw1MjkuMDYyNjA3IDExNzYuNzcxNDYsNTE5LjAwMDcwOCAxMTg1LjE1NjUsNTEwLjgwMiBDMTE5My41NDE1NCw1MDIuNjAzMjkyIDEyMDQuMjU1Niw0OTguNTA0IDEyMTcuMjk5LDQ5OC41MDQgQzEyMzAuMzQyNCw0OTguNTA0IDEyNDEuMDU2NDYsNTAyLjYwMzI5MiAxMjQ5LjQ0MTUsNTEwLjgwMiBDMTI1Ny44MjY1NCw1MTkuMDAwNzA4IDEyNjIuMDE5LDUyOS4wNjI2MDcgMTI2Mi4wMTksNTQwLjk4OCBDMTI2Mi4wMTksNTUyLjU0MDcyNCAxMjU3LjgyNjU0LDU2Mi40MTYyOTIgMTI0OS40NDE1LDU3MC42MTUgQzEyNDEuMDU2NDYsNTc4LjgxMzcwOCAxMjMwLjM0MjQsNTgyLjkxMyAxMjE3LjI5OSw1ODIuOTEzIFoiIGlkPSJmdWxsc3RvcCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo=",alt:"Phil's logo"})),i.a.createElement(l.a,{gap:"medium",align:"center",justify:"end",direction:"row"},i.a.createElement(c.Link,{activeClassName:"active",to:"/"},"Home"),i.a.createElement(c.Link,{activeClassName:"active",to:"/coaching"},"Coaching")))))},r=(t(165),function(M){var e=M.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(M){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement(I,null),i.a.createElement("main",null,e)))},data:N})});r.propTypes={children:D.a.node.isRequired};e.a=r}}]);
//# sourceMappingURL=component---src-pages-index-js-9882e5931f6a312af565.js.map