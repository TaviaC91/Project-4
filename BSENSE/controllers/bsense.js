const express = require('express')
const products = express.Router()


const Products = require('../models/bsense')

// Index Route //

products.get('/home', async (req, res) => {
    try {
      const products = await Products.find()
      res.render('../views/index.ejs', { products })
    } catch (err) {
      res.send(err.message)
    }
  })


  
  /////////NEW ROUTE ////////////

  products.get('/new', (req, res) => {
    res.render('../views/new.ejs')
  })



  //////// SHOW ROUTE //////////////

products.get('/:id', async (req, res) => {
    try {
      const product = await Products.findById(req.params.id)
      res.render('../views/show.ejs', { product: product })
    } catch (err) {
      res.send('That isn\'t a valid id! <a href="/product">Go back</a>')
    }
  })
  
  ////// CREATE ROUTE//////////////

products.post('/', async (req, res) => {
    try {
      const book = await Products.create(req.body)
      res.redirect('/library/' + product.id)
    } catch (err) {
      res.send(err.message)
    }
  })
 
  /////// EDIT ROUTE ////////////

products.get('/:id/edit', async (req, res) => {
    try {
      const book = await Products.findById(req.params.id)
      res.render('../views/edit.ejs', { book: product })
    } catch (err) {
      res.send(err.message)
    }
  })
  
  //////UPDATE ROUTE/////////////////

products.put('/:id', async (req, res) => {
    try {
      const products = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.redirect('/Bsense/' + product.id)
    } catch (err) {
      res.send(err.message)
    }
  })
  
  
  //////DELETE ROUTE////////////////
  
products.delete('/:id', async (req, res) => {
    try {
      await Products.findByIdAndRemove(req.params.id)
      res.redirect('/Bsense')
    } catch (err) {
      res.send(err.message)
    }
  })



module.exports = products;
