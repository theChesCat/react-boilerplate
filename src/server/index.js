/* global process, __dirname, console */

const express = require('express')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const opn = require('opn')

// Get environment vars
const args = require('minimist')(process.argv.slice(2))
// Get webpack app config
const config = require(path.join(__dirname, '../../webpack.config.js'))
const compiler = webpack(config)
// Get the front-end files
const DIST_DIR = path.join(__dirname, '../../public')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
// Define the application port, if there is a --port environment var, use it
const port = args['port'] || 8080
// Create an express() server
const app = express()

// Serve a webpack dev server with hot reloading
app.use(
    devMiddleware(compiler, {
        open: true,
        noInfo: true,
        publicPath: config.output.publicPath,
    }),
)
app.use(hotMiddleware(compiler))

// Serve an api
app.get('/api', (req, res) => {
    res.send(JSON.stringify('Hello world'))
})

// Serve the front-end application
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})

// Launch the server on the wanted port
app.listen(port, function () {
    console.log('App listening on port: ' + port)
    opn(`http://localhost:${port}`)
})
