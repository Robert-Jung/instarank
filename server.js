const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

const InstagramAPI = require('instagram-api')
const instagramAPI = new InstagramAPI(process.env.TOKEN)

instagramAPI.mediaByShortcode(process.env.SHORTCODE)
  .then((result) => {
    console.log(result.data.tags)
})

app.listen('3000', () => {
  console.log('Listening on port 3000')
})
