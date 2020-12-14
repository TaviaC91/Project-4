const mongoose = require("mongoose")
const bsenseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {String},
    price: {type: Number, required: true},
    categories: {type: String, required: true},
    designers: {type: String, required: true},
    // CustomerReview: {type: String, required: true}
},
{timestamps: true})
const Bsense = mongoose.model("Bsense", bsenseSchema)
module.exports = Bsense