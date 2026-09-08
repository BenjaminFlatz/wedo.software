# Run
```sh
python -m http.server 8080
```

# Build

The site uses precompiled Tailwind CSS and JSX so no CDN builds (`cdn.tailwindcss.com`, in-browser Babel) are
loaded in production. After changing anything under `src/`, rebuild the compiled assets in `dist/` and commit them:

```sh
npm install
npm run build
```

- `npm run build:css` regenerates `dist/tailwind.css` from `src/tailwind.css` using the Tailwind CLI.
- `npm run build:js` compiles the JSX sources in `src/` into plain, minified browser scripts in `dist/` using esbuild.
