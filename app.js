var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')
const menuRouter = require('./routes/Menu')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const categoryRouter = require('./routes/Category')
const mongoose = require('mongoose')
require('dotenv').config()

var app = express();
mongoodConnect = process.env.DB_LH
mongoose.connect(mongoodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter)
app.use('/category', categoryRouter)

module.exports = app;
