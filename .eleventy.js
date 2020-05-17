module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "svg",
    "png",
    "jpg",
    "jpeg",
  ]);

  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "src/dist",
    },
  };
};
