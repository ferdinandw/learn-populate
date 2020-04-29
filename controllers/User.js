const UserSchema = require('./../models/User')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const myKey = 'dina'

module.exports = {
    create: (req,res,next) => {
        UserSchema.create({
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        })
        .then (resp => {res.json(resp)})
        .catch(err => {throw(err)})
    },
    getAll: (req,res,next) =>{
        UserSchema
        .find({})
        .then(resp => {res.json({data: resp})})
    },
    getById: (req,res,next) => {
        UserSchema
        .findById(req.params.userId)
        .then(resp => {res.json(resp)})
        .catch(err => {throw(err)})
    },
    deleteById: (req,res,next) => {
        UserSchema
        .findByIdAndRemove(req.params.userId)
        .then(resp => {res.json(resp)})
        .catch(err => {throw(err)})
    },
    authenticate: function(req,res,next){
        UserSchema
        .findOne({email: req.body.email})
        .then((resp, err) => {
            if(err) next(err)
            else{
                if(resp != null && Bcrypt.compareSync(req.body.password, resp.password)){
                    const token = jwt.sign({
                        id: resp._id
                    }, myKey, {expiresIn : '3h'})
                    res.json(token)
                }
                else{
                    res.json({status : err})
                }
            }
        })
        .catch(err => {throw(err)})
    }
}