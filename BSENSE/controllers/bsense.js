const express = require('express')
const bsense = express.Router()


// Routes
bsense.get('/home', (req, res) => {
    res.render('index.ejs')
})



module.exports = bsense;
