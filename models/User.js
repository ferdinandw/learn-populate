const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bcrypt = require('bcrypt')
const saltRounds = 7;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone: {
        type : Number,
        required : true
    }
})

userSchema.pre('save', function(next){
    this.password = Bcrypt.hashSync(this.password, saltRounds);
    next()
})

module.exports = ('users', userSchema)