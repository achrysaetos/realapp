const express = require('express')
const app = express()
const port = 8080

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const db = []

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.json({"message": "Hello world"})
})

app.get('/db', (req, res) => {
    console.log('lol')
    res.json(db)
})
app.post('/db', (req, res) => {
    const input = req.body
    console.log(input)
    if (input) {
        db.push(input.newTodo)
    }
    res.json(db)
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})