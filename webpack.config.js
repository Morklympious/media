var webpack = require('webpack');

module.exports = {
    entry: {
        media: "./src/media",
    },
    output: {
        path: __dirname + "/dist",
        libraryTarget: "umd",
        filename: "[name].bundle.js"
    }
}