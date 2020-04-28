const Category = require('./../models/Category')

module.exports = ({
    create:(req,res) =>{
        Category.create({
            name: req.body.name
        })
        .then(resp => {res.json(resp)})
        .catch(err => {throw(err)})
    },
    getAll: (req,res) => {
        Category.find({})
        .then(resp => res.json(resp))
        .catch(err => {throw(err)})
    }
})