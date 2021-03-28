const path = require('path')
console.log(path.join(__dirname, '../server-nodejs/public'));


module.exports = {
    outputDir:path.join(__dirname,'../server-nodejs/public'),
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel: 'debug',
                //pathRewrite: { '^/api': '/' },
            },
        }
    }
}