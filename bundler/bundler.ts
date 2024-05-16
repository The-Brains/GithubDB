async function bundle() {
  await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './out',
    minify: true,
    target: "browser",
  });
}

bundle();
