const path = require('path')
require('dotenv').config({path:path.resolve(__dirname,'..','.env.local')})

const PORT = process.env.YOUR_PORT || process.env.PORT || 8080 
const HOST = '0.0.0.0'
const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@gatonegro.7ucsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

module.exports = { PORT, HOST, DB_URI }