const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public'), {
  extensions: ['html', 'css', 'js']
}))

const DB_URL = 'mongodb+srv://samusevich21032007:samusevich21032007@cluster0.l9lrrg4.mongodb.net/usersDB?retryWrites=true&w=majority';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => { console.log('connected to DB') })
  .catch(error => { console.log(error) })

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  salt: String,
})

const User = mongoose.model('users', userSchema)


app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public', 'register.html'))
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body

  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)

  const user = new User({
    username,
    password: hash,
    salt,
  });

  try {
    await user.save();
    res.send('Registration successful!')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error registering user')
  }
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public', 'login.html'))
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  if (!user) return res.status(400).send('Invalid username')

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password')

  res.send('Login successful!')
})


app.listen(3000, () => {
  console.log('Server started on port 3000')
});