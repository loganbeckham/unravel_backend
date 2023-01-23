
/////////////////////////////////////
///          Dependancies          //
/////////////////////////////////////

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())



/////////////////////////////////////
///          Controllers           //
/////////////////////////////////////

const presetController = require('./Controllers/presetController.js')
app.use('/presets', presetController);



/////////////////////////////////////
///             Server             //
/////////////////////////////////////

const mongodbURI = process.env.MONGODBURI

mongoose.connect(mongodbURI, () => {
	console.log('connected to mongo');
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})


