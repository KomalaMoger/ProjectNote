const express = require('express')
const setupDB = require('./config/database')
const router = require('./config/routes')
const cors=require('cors')
const app = express() 
const port = 3010

app.use(express.json())
app.use(cors())
app.use('/', router)
// db configuration 
setupDB() 

app.listen(port, () => {
    console.log('listening on port', port)
})