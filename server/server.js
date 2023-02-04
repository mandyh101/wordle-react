const express = require('express')
const axios = require('axios')
const server = express()
const path = require('path')
const port = process.env.PORT || 3000
require('dotenv').config()
const cors = require('cors') //import CORS package
server.use(cors()) //call the cors package to remove cors errors

// //listen and log what port is running
// server.listen(port, () => {
//   console.log(`The server server is running on port: ${port}`)
// })

server.use(express.json())
//treat any files in public and dist as static
//server.use(express.static('public'))
server.use(express.static(path.join(__dirname, './public')))

//set the index.html file as home page
// app.get('/', (req, res) => {
//   res.sendFile(HTML_FILE, function (err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })
server.get('/', (req, res) => {
  res.send({
    express_message: 'Hello world!',
  })
})

module.exports = server
