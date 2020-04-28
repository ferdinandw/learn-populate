var express = require('express');
var router = express.Router();
const category = require('./../controllers/Category')

router.get('/get', category.getAll)
router.post('/post', category.create)

module.exports = router;
