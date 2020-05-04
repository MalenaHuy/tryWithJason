const serverUrl = 'http://localhost:3000'

// add event lister 
document.querySelector('form').addEventListener('submit', (e) => {
    // disable the false behaviour
    e.preventDefault()
    const formData = new FormData(e.target)
    // send to the server called animals
    fetch(serverUrl + '/animals', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.text())
        // returen response to the result
        .then((result) => {
            document.getElementById('result').textContent = result
        })
        // catch the error
        .catch((err) => {
            console.error(err.message)
        })
})

// for Json
document.getElementById('jsonButton').addEventListener('click', sendJson)

// json object
const cars = [
  {
    model: 'Peugeot',
    color: 'blue',
    registration: 2012,
    checkups: [2015, 2017],
  },
  {
    model: 'Citroën',
    color: 'white',
    registration: 1999,
    checkups: [2003, 2005, 2007, 2009, 2011, 2013],
  },
]
// api is the path
const jsonUrl = serverUrl + '/api/cars'

// post jeson data
function sendJson() {
  fetch(jsonUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    // convert the object to the string
    body: JSON.stringify(cars),
  })
    .then((response) => response.text())
    .then((result) => {
      document.getElementById('result').textContent = result
    })
    .catch((err) => {
      console.error(err.message)
    })
}