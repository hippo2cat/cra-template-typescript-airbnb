const { addLessLoader, override } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      modifyVars: {
        // '@primary-color': '#3786FD', // for example, you use Ant Design to change theme color.
      },
      cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
      javascriptEnabled: true,
      modules: true,
      localIdentName: '[path][name]__[local]--[hash:base64:5]', // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    },
    prependData: '@import "./src/styles/variables.less";',
  }),
);
