const express = require('express')
const app = express()

app.get('/', (req,res) => res.send('Hello This is Project CI/CD'))
app.get('/sonar', (req,res) => res.send('Hello, Sonar !!!'))
module.exports = app
