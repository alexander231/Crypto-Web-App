const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const logger = require('./utils/logger')
const config = require('./utils/config')
logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch(error => {
        logger.error('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('Cox')
})
module.exports = app