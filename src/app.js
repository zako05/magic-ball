const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const predictions = [
  {"id": 1, "text": "It is certain."},
  {"id": 2, "text": "It is decidedly so."},
  {"id": 3, "text": "Certainly."},
  {"id": 4, "text": "Yes definitely."},
  {"id": 5, "text": "You may rely on it."},
  {"id": 6, "text": "As I see it, yes."},
  {"id": 7, "text": "Most likely."},
  {"id": 8, "text": "Outlook good."},
  {"id": 9, "text": "Yes"},
  {"id": 10, "text": "Signs point to yes."},
  {"id": 11, "text": "Reply hazy, try again."},
  {"id": 12, "text": "Ask again later."},
  {"id": 13, "text": "Better not tell you now."},
  {"id": 14, "text": "Cannot predict now."},
  {"id": 15, "text": "Concentrate and ask again."},
  {"id": 16, "text": "Don't count on it."},
  {"id": 17, "text": "My reply is no."},
  {"id": 18, "text": "My sources say no."},
  {"id": 19, "text": "Outlook not so good."},
  {"id": 20, "text": "Very doubtful."}
]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'pug')
app.set('./views', path.join(__dirname, 'views'))

app.get("/ball", (req, res) => {
  res.render('index')
})

app.get('/ball/prediction', (req, res) => {
  if(!predictions.length) {
    badRequest(res)
  } else {
    res.status(200).json(predictions)
  }
})

app.post('/ball/prediction', (req, res) => {
  const prediction = req.body

  if (!Object.keys(prediction).length) {
    notFound(res)
  } else if (!prediction.id || !prediction.text || predictions.find(answer => answer.id == prediction.id)) {
    badRequest(res)
  } else {
    predictions.push(prediction)
    return res.status(200).send('Successfull')
  }
})

app.get('/ball/prediction/:id', (req, res) => {
  const predictionId = req.params.id
  const prediction = predictions.find(prediction => prediction.id == Number(predictionId))

  if (!prediction) {
    notFound(res)
  } else if (!prediction.text || !prediction.id) {
    badRequest(res)
  }  else {
    res.status(200).json(prediction)
  }
})

app.put('/ball/prediction/:id', (req, res) => {
  const predictionId = req.params.id
  const prediction = req.body.text
  const predictionIndex = predictions.findIndex(prediction => prediction.id == predictionId)

  if (predictionIndex === -1) {
    notFound(res)
  } else {
    predictions[predictionIndex].text = prediction
    res.status(200).send('Successfull')
  }
})

app.delete('/ball/prediction/:id', (req, res) => {
  const predictionId = req.params.id
  const predictionIndex = predictions.findIndex(prediction => prediction.id == predictionId)

  if (predictionIndex === -1) {
    notFound(res)
  } else {
    predictions.splice(predictionIndex, 1)
    res.status(200).send('Successfull')
  }
})

app.post('/ball/ask', (req, res) => {
  const question = req.body.question
  const answerId = Math.floor(Math.random() * predictions.length)
  const answer = predictions.find(answer => answer.id == Number(answerId)).text

  res.status(200).render('prediction', {
    question,
    answer,
  })
})

function badRequest(res) {
  return res.status(400).send('Bad request')
}

function notFound(res) {
  return res.status(404).send('Not found')
}

module.exports = app
