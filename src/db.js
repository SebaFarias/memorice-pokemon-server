const mongoose = require('mongoose')
const { DB_URI } = require('./config.js')

const uri = DB_URI
const options = {
  useNewUrlParser: true ,
  useUnifiedTopology: true,  
}

mongoose.set( 'strictQuery', true)

mongoose.connect(uri,options)
.then( () => console.log('Connected to Database'),
  err =>  console.log(err)
)