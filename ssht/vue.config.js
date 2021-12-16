const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// console.log({ env });
module.exports = {
  transpileDependencies: ["vue-echarts", "resize-detector"],
  configureWebpack: {
    plugins: [
      // new HardSourceWebpackPlugin()
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@$", resolve("src"));
  },
  pluginOptions: {},

  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        // target: 'http://10.0.9.81:8801/',
        // target: 'http://10.0.6.199:8801/',
        target: "//223.112.126.90:8005/",
        ws: true,
        secure: false,
        changeOrigin: true,
      },
    },
  },
  publicPath: "/ssht_center/ssht/dist/",
  outputDir: "dist",
  productionSourceMap: false,
  lintOnSave: false,
  assetsDir: "static",
};
