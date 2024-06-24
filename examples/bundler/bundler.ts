async function bundleExample() {
  return await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './out',
    minify: true,
    target: "browser",
  });
}

bundleExample().then(result => {
  result.logs.forEach(log => console.log(log));
});
