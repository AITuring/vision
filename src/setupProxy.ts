// @ts-ignore
const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app: { use: (arg0: string, arg1: any) => void; }) {
    app.use(
        '/HPImageArchive.aspx',
        createProxyMiddleware({
            target: 'https://cn.bing.com/',
            changeOrigin: true,
            // pathRewrite: {
            //     '^/HPImageArchive.aspx': '/'
            // }
        })
    );
};
