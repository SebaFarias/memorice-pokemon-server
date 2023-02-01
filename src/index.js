const { app } = require('./app.js')
const { PORT, HOST } = require('./config.js')
require('./db')

app.listen( PORT, HOST, () => {
    console.log(`listening on ${HOST}:${PORT}`)
})