const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// MongoDB user and password
const dbUser = process.env.MONGODB_USER
const dbPassword = process.env.MONGODB_PASS

const peopleSchema = mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  name: String,
  favoriteCity: String,
})
const People = mongoose.model('People', peopleSchema)
mongoose.connect(`mongodb://${dbUser}:${dbPassword}@ds137090.mlab.com:37090/spotify_challenge`)

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname })
})

app.get('/people', (req, res) => {
  People.find({}, (err, people) => {
    if (err) console.log(err)

    res.json(people)
  })
})

app.post('/people', (req, res) => {
  const body = req.body
  People.create({
    name: body.name,
    favoriteCity: body.favoriteCity,
  }, (err, data) => {
    if (err) console.log(err)

    res.redirect('/people/:id')
  })
})

// app.put('/people')

// app.get('/people/:id')

// app.delete('/people/:id')

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App listening to port ${port}`)
})
