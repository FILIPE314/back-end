const express = require('express')
const app = express()
const port = 3000

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/formulario', (req, res) => {
  res.render('home')
})

app.post('/resposta', (req, res) => {
  nome = req.body.nome
  res.render('home2', {nome})
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/formulario`)
})