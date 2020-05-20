const { Liquid } = require('liquidjs');

const liquidOptions = {
  extname: '.liquid',
  strict_filters: true,
  root: ['_includes'],
};

const liquidEngine = new Liquid(liquidOptions);

const fs = require('fs');

module.exports = function (config) {
  config.setLibrary('liquid', liquidEngine);

  // Layout aliases
  config.addLayoutAlias('default', 'layouts/base.liquid');

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
    templateFormats: ['md', 'liquid'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
