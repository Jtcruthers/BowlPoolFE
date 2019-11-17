const {
    override,
    disableEsLint,
    addWebpackAlias,
    addBabelPlugin
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = override(
    // disable eslint in webpack
    disableEsLint(),
  
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  
    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      ["components$"]: path.resolve(__dirname, "src/components")
    }),

    addBabelPlugin("babel-plugin-styled-components"),
  
  );