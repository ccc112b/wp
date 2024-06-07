const {a, div, li, p, ul} = van.tags

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Hello = () => div(
  p("Hello 你好"),
  ul(
    li("World"),
    li(a({href: "https://vanjs.org/"}, "這是 VanJS")),
  )
)

van.add(document.body, Hello())
// Alternatively, you can write:
// document.body.appendChild(Hello())