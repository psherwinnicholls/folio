// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-components-post-js": () => import("./../src/components/post.js" /* webpackChunkName: "component---src-components-post-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-jsx": () => import("./../src/pages/contact.jsx" /* webpackChunkName: "component---src-pages-contact-jsx" */),
  "component---src-pages-index-jsx": () => import("./../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-writing-jsx": () => import("./../src/pages/writing.jsx" /* webpackChunkName: "component---src-pages-writing-jsx" */)
}

