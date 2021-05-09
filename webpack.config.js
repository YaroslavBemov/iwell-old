const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const optimization = () => {
    const config = {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                // hmr: isDev,
                // reloadAll: true
            },
        },
        {
            loader: 'css-loader',
            options: {importLoaders: 1}
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        'postcss-preset-env'
                    ]
                }
            }
        }
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset => {
    const opts = {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false
                }
            ],
            '@babel/preset-react'
        ],
        plugins: [
            ['@babel/plugin-proposal-decorators', {legacy: true}],
            ['@babel/plugin-proposal-class-properties', {loose: true}],
            ['@babel/plugin-transform-async-to-generator'],
            ['@babel/plugin-transform-runtime']
        ]
    }

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }]

    // if (isDev) {
    //     loaders.push('eslint-loader')
    // }

    return loaders
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            templateContent: `
                <html>
                  <body>
                    <div id="root"></div>
                  </body>
                </html>
              `
            // template: './resources/views/welcome.blade.php',
            // favicon: './favicon.ico'
            // minify: {
            //     collapseWhitespace: isProd,
            //     removeComments: isProd
            // }
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     // {
        //     //     from: path.resolve(__dirname, 'src/img'),
        //     //     to: path.resolve(__dirname, 'dist/img')
        //     // },
        //     {
        //         from: path.resolve(__dirname, 'src/actions'),
        //         to: path.resolve(__dirname, 'dist/actions')
        //     }
        // ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ]

    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }

    return base
}

module.exports = {
    mode: 'development',
    entry: {
        main: [
            // '@babel/polyfill',
            './resources/react-app/src/index.js'
        ]
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'resources/react-app/dist')
    },
    // context: path.resolve(__dirname, 'src'),
    // resolve: {
    //     extensions: ['.js'],
    //     alias: {
    //         '@models': path.resolve(__dirname, 'src/models'),
    //         '@': path.resolve(__dirname, 'src'),
    //     }
    // },
    devServer: {
        port: 4000,
        hot: isDev,
        // contentBase: path.resolve(__dirname, 'resources/react-app/dist'),
        historyApiFallback: true,
    },
    target: isDev ? 'web' : 'browserslist',
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    optimization: optimization(),
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            //     options: {
            //         minimize: true
            //     }
            // },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                enabled: false,
                                // interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                enabled: false,
                                quality: 75
                            }
                        }
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }
}
