module.exports = {
    test: /\/cheltuieli\/app\/.*\.html$/i,
    use: [
        {
            loader: 'raw-loader',
            options: {
                esModule: false,
            },
        }
    ]
}
