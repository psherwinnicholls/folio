const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/404.js"))),
  "component---src-pages-blog-jsx": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/blog.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/index.jsx")))
}

