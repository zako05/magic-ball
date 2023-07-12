import express from 'express'
import answers from './predictions-1.json' assert { type: 'json' }

const app = express()

app.get("/", (req, res) => {
  res.send("We're starting babe!")
})

app.get('/ball/prediction', (req, res) => {
  const answersArray = []

  for (let answer of answers) {
    answersArray.push(answer.text)
  }
  res.send(answersArray)
})

app.get('/ball/prediction/:id', (req, res) => {
  const answer = answers.filter(answer => answer.id == req.params.id)
  res.send(answer[0].text)
})

app.listen(3000, () => console.log("Server ready"))
