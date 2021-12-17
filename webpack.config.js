const path = require("path"); //Node.js provides you with the path module that allows you to interact with file paths easily

//we need root path in which we are located. Node.js has a variable that fetches our curent file path location.
const basePath = __dirname;

//We also establish the final file path destination - dist/scripts folder
const distPath = "dist/scripts";

// we export a configuraton object that Webpack will use as instructions to do its job.
module.exports = {
  //let's establish an entry point for webpack to start doing it's job. Let's point to index.js
  entry: {
    app: "./src/index.js",
  },
  //let's establish an exit point, where we want our final transcompiled/compiled bundle.js file to be saved. Aqui utilizaremos las variables basePath y distPath para hacer nuestro exit point dinamico.
  output: {
    path: path.join(basePath, distPath),

    //name of the file
    filename: "bundle.js",
  },
  module: {
    //we create the rules/requirements/conditional logic that files have to pass for them to get the chance to be processed by the module in question, in this case babel. You'd setup rules specific to other modules such as SASS.
    rules: {
      test: /\.js/,
      exclude: /node_modules/,
      //if a file is a js file and is not in the node_modules folder, then it can access babel loader.
      use: ["babel-loader"],
    },
  },
};
