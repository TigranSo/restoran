const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(expressLayouts);
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index')
})


app.get('/contact', (req, res) => {
    res.render('contact')
})


app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/photo', (req, res) => {
    res.render('photo')
})


app.get('/bron', (req, res) => {
    res.render('bron')
})

let port = 3001
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
})
