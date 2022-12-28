const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("hollloa")
    res.status(200)
    res.json({message: "fuck you"})
})

module.exports = app