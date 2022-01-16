require('dotenv').config()

var corsOptions = {
  origin: 'http://example.com/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const express = require('express')
const app = express()

console.log("11111111111111111111111")
app.listen(8080)

app.use(express.json())

console.log("222222npm ruy22222222222222222")

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: 'Learn React Today' }],
  [2, { priceInCents: 20000, name: 'Learn Css Today'}],
])

app.get('/random', (req, res) => {
  console.log("EYOOOOOO");
})