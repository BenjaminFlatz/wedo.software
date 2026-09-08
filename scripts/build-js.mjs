// Precompiles the JSX sources into plain browser-ready scripts using esbuild,
// so pages no longer need to ship the in-browser Babel transformer.
import { build } from 'esbuild';

const entryPoints = [
  { in: 'src/footer.jsx', out: 'dist/footer.js' },
  { in: 'src/app.jsx', out: 'dist/app.js' },
  { in: 'src/impressum.jsx', out: 'dist/impressum.js' },
  { in: 'src/datenschutz.jsx', out: 'dist/datenschutz.js' },
];

for (const { in: entry, out } of entryPoints) {
  await build({
    entryPoints: [entry],
    outfile: out,
    bundle: false,
    minify: true,
    treeShaking: false,
    target: ['es2019'],
    loader: { '.jsx': 'jsx' },
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  });
  // eslint-disable-next-line no-console
  console.log(`built ${entry} -> ${out}`);
}
