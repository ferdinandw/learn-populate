const express = require('express')
const router = express.Router();
const userControllers = require('./../controllers/User')

router.get('/get', userControllers.getAll)
router.get('/get/:userId', userControllers.getById)
router.delete('/delete/:userId', userControllers.deleteById)
router.post('/login', userControllers.authenticate)
router.post('/post', userControllers.create)

module.exports = router