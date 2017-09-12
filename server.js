const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

const InstagramAPI = require('instagram-api')
const instagramAPI = new InstagramAPI(process.env.TOKEN)

instagramAPI.userSelf()
  .then(function(result) {
    console.log(result.limit)
    console.log(result.remaining)
}, function(err){
    console.log(err)
})

instagramAPI.mediaByShortcode(process.env.SHORTCODE)
  .then((result) => {
    console.log(result.data.tags)
    console.log(result.data.images.standard_resolution)
})

app.listen('3000', () => {
  console.log('Listening on port 3000')
})
