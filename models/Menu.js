const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Category = require ('./Category')

const menuModel = new Schema({
    name:{
        type: String,
        required: true
    },
    detail:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref : Category
    },
    imagesUrl:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('menu', menuModel)