const MenuSchema = require('./../models/Menu')
const CategorySchema = require('./../models/Category')

module.exports = ({
    create: (req,res,next) => {
        // CategorySchema.find({id :req.body.id}.then(resp => {
        //     if()
        // }))
        MenuSchema.create({
            name: req.body.name,
            detail: req.body.detail,
            price: req.body.price,
            category: req.body.category,
            imagesUrl: req.file && req.file.path
        })
        .then(resp => {res.json(resp)})
        .catch(err => {throw(err)})
    },
    getAll: (req,res,next) => {
        MenuSchema.find({}).populate('category')
        .then(resp => {res.json(resp)})
        .catch(err => {throw(err)})
    }
})