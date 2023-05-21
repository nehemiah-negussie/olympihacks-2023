const path = require("path");

module.exports = {
  entry: "./src/index.js", // The entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // The output directory for bundled files
    filename: "bundle.js", // The name of the bundled file
  },
  module: {
    rules: [
      // Add rules for processing different file types (e.g., JavaScript, CSS, etc.)
    ],
  },
  resolve: {
    // Configure resolution for different file extensions or modules
    extensions: [".js", ".jsx"],
    // Add any additional resolve options if needed
  },
  // Add other configuration options such as plugins, optimization, etc.
};
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // Other rules...
  plugins: [new NodePolyfillPlugin()],
};
