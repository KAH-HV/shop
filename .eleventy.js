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
      input: "src",
      output: "src/_output",
    },
  };
};
