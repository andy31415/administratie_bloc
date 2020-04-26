module.exports = {
    test: /\/cheltuieli\/app\/.*\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        // 'style-loader',
        // Translates CSS into CommonJS
        // 'css-loader',
        {
            loader: 'raw-loader',
            options: {
                esModule: false,
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
}
;