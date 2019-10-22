const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-course-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/course.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/404.js"))),
  "component---src-pages-coaching-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/coaching.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/index.js")))
}

