const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias("default", "layouts/base.njk");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "js/alpine.js",
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
