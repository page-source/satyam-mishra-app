# satyam-mishra.vercel.app

My personal site. Next.js, one page.

```bash
nvm use 22.20.0
npm install
npm run dev
```

Node 18 is too old for Next 15 builds, use 22.

## Themes

Three: **warm** (default), light, dark. Warm is the plain `:root` block in
`globals.css`, so `data-theme="warm"` needs no rules of its own and a no-js
render still gets the right default. The button in the nav cycles
warm -> light -> dark and saves the choice.

## Notes to self

- All the text is in `lib/content.js`. Update it there, not in the components.
- Still need to add the Network Solutions store links (`NETSOL_IOS` /
  `NETSOL_ANDROID`). They're null so the links stay hidden.
- Hero animation is plain CSS on purpose so the heading paints before
  hydration. Everything below the fold uses motion on scroll.
- Warm is default on purpose, so a system dark-mode preference is not
  auto-honoured any more. Change `themeInit` in `app/layout.jsx` if I want that
  back.
- `--ink-45` is as light as it can go and still clear WCAG AA for small text.
  Don't lighten it.
- The counters in the numbers section render their real value from the server.
  Don't change that, a throttled tab freezes the count halfway and then the
  page is showing a wrong number.
