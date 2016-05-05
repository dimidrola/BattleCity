
const NODE_ENV = process.env.NODE_ENV || 'development',
    webpack = require('webpack');

module.exports = {
    //context: path.resolve(__dirname, "/js"),
    entry: {
        home: './js/index.js'//,
       // game: './js/game.js'
    },
    output: {
        path: __dirname+'/static',
        filename: "[name].js",
        library: '[name]'
    },

    watch: (NODE_ENV=='development') ? true : false,

    watchOptions:{
        aggregateTimeout: 100 //def:300
    },

    devtool: NODE_ENV=='development' ? "cheap-inline-module-source-map" : null,

    plugins: [
        //new webpack.OldWatchingPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons"
            // (the commons chunk name)

            //filename: "commons.js",
            // (the filename of the commons chunk)

            // minChunks: 3,
            // (Modules must be shared between 3 entries)

            // chunks: ["pageA", "pageB"],
            // (Only use these entries)
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                //include: [
                //    path.resolve(__dirname )
                //],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /(pixi|phaser).js/,
                loader: 'script'// script-loader

            },
            {
                test: /\.css$/,
                loader: "style!css" },
           // { test: /\.png$/, loader: "url-loader?limit=100000?root=." },
            {
                test: /\.(png | wav)$/,
                loader: "file?name=[path][name].[ext]"
            }
        ]
    }
};
if(NODE_ENV == 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
}