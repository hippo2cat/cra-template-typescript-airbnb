const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/path-to-proxy',
    createProxyMiddleware({
      target: 'target-url',
      changeOrigin: true,
    }),
  );
};
