module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: 'http://aaabbb:8080'
            }
        }
    }
}
