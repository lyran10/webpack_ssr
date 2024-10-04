require("ignore-styles")

require("@babel/register")({
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  ignore : [/(node_modules)/],
  presets : ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
})

require("./server")