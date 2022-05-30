const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy `src/css/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/css/normalize.css");
  eleventyConfig.addPassthroughCopy("src/css/style.css");

  // Short date method
  eleventyConfig.addFilter("shortDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd.LL.yy"); // 02.11.21
  });

  // Readable long date method
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "cccc d LLLL yyyy"
    ); // i.e. Monday 1 March 2022
  });

  // Set custom directories for input, output, includes, and data
  return {
    // Pre-process *.md and *.html files with njk
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    // Set input and output directories
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
