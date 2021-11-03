const { errors } = require('celebrate');
var createError = require('http-errors');
const dotenv = require('dotenv');
dotenv.config();
var express = require('express');
// DB CONNECTION START //
  var mongoose = require('mongoose');
  var mongoDB = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true';
  // var mongoDB = 'localhost:27017/jest_db';
  mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// END //




var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var serviceRouter = require('./routes/services');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/service', serviceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(errors())


module.exports = app;
