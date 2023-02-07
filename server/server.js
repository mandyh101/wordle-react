const express = require('express')
const axios = require('axios')
const server = express()
const path = require('path')
const port = process.env.PORT || 3000
require('dotenv').config()
const cors = require('cors') //import CORS package
server.use(cors()) //call the cors package to remove cors errors

server.use(express.json())

server.use(express.static(path.join(__dirname, './public')))

server.get('/home', (req, res) => {
  res.send('Hello world!')
})

server.get('/word', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: { count: '20', wordLength: '5' },
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data[0])
    })
    .catch((error) => {
      console.error(error)
    })
})

//route to check a word is legit
server.get('/check', (req, res) => {
  //get the params
  const word = req.query.word
  const options = {
    method: 'GET',
    url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
    params: { entry: word },
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
})

module.exports = server
