const express = require ('express')
const app = express()

const multer = require ('multer')
const upload = multer()

const bodyParser = require('body-parser')
const jsonPerser = bodyParser.json()

// return to home page
app.get('/', (request, response) => {
    const helloFile = __dirname + '/views/index.html'
    response.sendFile (helloFile)
});


// give message
const listener = app.listen(3000, () => {
    console.log (`your app is listing on port ${listener.
    address().port}`)
});
