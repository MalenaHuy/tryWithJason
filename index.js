const express = require('express')
const app = express()

// for form data
const multer = require('multer')
const upload = multer()

// for JSON data
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// return to home page
app.get('/', (request, response) => {
    const helloFile = __dirname + '/views/index.html'
    response.sendFile(helloFile)
  })


// give message
const listener = app.listen(3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`)
  })
  

// server content of the "public" subfolder directly link with Html
app.use(express.static('public'))

// upload to the page from the form data up load form data in array
app.post('/animals', upload.array(), (request, response) => {
    const name = request.body.name
    const vote = request.body.strongest
    // send back to the string
    response.send(`Hello ${name}, you voted: ${vote}`)
  })

  
// Handle submission of a JSON car array
app.post('/api/cars', jsonParser, (request, response) => {
    const cars = request.body
    response.send(`You sent me a list of cars: ${JSON.stringify(cars)}`)
  })