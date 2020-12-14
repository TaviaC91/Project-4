const mongoose = require("mongoose")
const bsenseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {String},
    price: {type: Number, required: true},
    categories: {type: String, required: true},
    designers: {type: String, required: true},
    
},
{timestamps: true})
const Products = mongoose.model("Products", bsenseSchema)
module.exports = Products