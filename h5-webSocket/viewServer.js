const express = require('express')
const app = express()
const path = require('path')
const PORT = 5000
const HOST_NAME = 'localhost'


app.use(express.static(path.join(__dirname,'./client')))

app.listen(PORT,HOST_NAME,() =>{
  console.log(`展示的网页是http://${HOST_NAME}:${PORT}`)
})