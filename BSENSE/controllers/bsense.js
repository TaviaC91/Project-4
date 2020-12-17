const express = require('express')
const products = express.Router()

const Products = require('../models/bsense')

products.get('/json', async (req, res) => {
    try {
      const products = await Products.find()
      res.send(products)
    } catch (err) {
      res.send(err.message)
    }
  })



// Index Route //

products.get('/bsense', async (req, res) => {
    try {
      const products = await Products.find()
      res.render('../views/index.ejs', { products })
    } catch (err) {
      res.send(err.message)
    }
  })


  
  /////////NEW ROUTE ////////////

  products.get('/bsense/new', (req, res) => {
    res.render('../views/new.ejs')
  })



  //////// SHOW ROUTE //////////////

products.get('/bsense/:id', async (req, res) => {
    try {
      const product = await Products.findById(req.params.id)
      res.render('../views/show.ejs', { product: product })
    } catch (err) {
      res.send('That isn\'t a valid id! <a href="/product">Go back</a>')
    }
  })
  
  ////// CREATE ROUTE//////////////

products.post('/bsense', async (req, res) => {
  //  console.log(req.body)
    try {
      const product = await Products.create(req.body)
      console.log(product)
      res.redirect('/bsense/'+ product.id)
    } catch (err) {
      res.send(err.message)
    }
  })
 
  /////// EDIT ROUTE ////////////

products.get('/bsense/:id/edit', async (req, res) => {
    try {
      const product = await Products.findById(req.params.id)
      res.render('../views/edit.ejs', { product: product })
    } catch (err) {
      res.send(err.message)
    }
  })
  
  //////UPDATE ROUTE/////////////////

products.put('/bsense/:id', async (req, res) => {
    try {
      const product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.redirect('/Bsense/' + product.id)
    } catch (err) {
      res.send(err.message)
    }
  })
  
 



module.exports = products;
