// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-course-js": () => import("/Users/phil/dev/sites/folio/src/pages/course.js" /* webpackChunkName: "component---src-pages-course-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/phil/dev/sites/folio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/phil/dev/sites/folio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-coaching-js": () => import("/Users/phil/dev/sites/folio/src/pages/coaching.js" /* webpackChunkName: "component---src-pages-coaching-js" */),
  "component---src-pages-index-js": () => import("/Users/phil/dev/sites/folio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/phil/dev/sites/folio/.cache/data.json")

