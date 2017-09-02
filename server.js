const express = require('express')
const app = express()
const dotenv = require('dotenv')
const Instagram = require('node-instagram').default

dotenv.config()

const instagram = new Instagram({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SC,
  accessToken: process.env.TOKEN,
})

instagram.get('users/self', (err,data) => {
  if(err) {
    console.log(err)
  }
  else {
    console.log(data)
  }
})

app.listen('3000', () => {
  console.log('Listening on port 3000')
})
