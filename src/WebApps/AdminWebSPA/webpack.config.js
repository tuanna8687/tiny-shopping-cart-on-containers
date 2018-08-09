const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './ClientApp/app.js'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: 'bundle.js'
    }
};