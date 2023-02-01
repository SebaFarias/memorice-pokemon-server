const express = require('express')

const app = express()

app.get('/',(req,res)=> {
    res.send('<h1>Tulio, estamos al aire<h1/>')
})

module.exports= { app }