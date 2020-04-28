const express = require('express')
const router = express.Router()
const MenuController = require('./../controllers/Menu')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null, './public/images')
    },
    filename: function(req,file,cb){
        cb(null, new Date().toISOString() + file.originalname )
    }
})
const upload = multer({storage})

router.post('/post',upload.single(`imagesUrl`), MenuController.create)
router.get('/get', MenuController.getAll)

module.exports = router