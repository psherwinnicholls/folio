(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(155),o=a(153);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},150:function(t,e,a){var n;t.exports=(n=a(152))&&n.default||n},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Phil Sherwin-Nicholls"}}}}},152:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(56),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},153:function(t,e,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(157),l=a.n(s);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,c=n.data.site,s=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=u},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Phil Sherwin-Nicholls",description:"Currently contracting for the Department for Education. Previously at Decoded &amp; Joylab",author:"@phils_n"}}}}},155:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=(a(33),a(150),i.a.createContext({})),l=function(t){return i.a.createElement(s.Consumer,null,(function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")}))};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};a(156);var u=function(t){var e=t.children;return i.a.createElement(l,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})};u.propTypes={children:c.a.node.isRequired};e.a=u}}]);
//# sourceMappingURL=component---src-pages-404-js-44222c3ac3324940f741.js.map