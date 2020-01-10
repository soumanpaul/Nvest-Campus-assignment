const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Database connection...
const mongoURL = "mongodb://localhost:27017/techer-api";
const connectDB = async() => {
   try {
     await mongoose.connect(mongoURL, {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true });

     console.log('MongoDB Connected...');
   } catch (err) {
     console.error(err.message);
     // Exit process with failure
     process.exit(1);
   }
 } 
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.use('/api/v1/endpoints', indexRouter);
app.use('/api/v1/users', usersRouter);



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

module.exports = app;
