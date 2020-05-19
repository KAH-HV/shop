module.exports = function (config) {
  // Layout aliases
  config.addLayoutAlias('default', 'layouts/base.njk');

  // static assets to pass through
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/styles');
  config.addPassthroughCopy('./src/robots.txt');

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: "src",
      output: "src/_output",
    },
    passthroughFileCopy: true,
  };
};
