const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/.cache/dev-404-page.js"))),
  "component---src-components-post-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/components/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/404.js"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/contact.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/index.jsx"))),
  "component---src-pages-writing-jsx": hot(preferDefault(require("/Users/phil/dev/sites/folio/src/pages/writing.jsx")))
}

