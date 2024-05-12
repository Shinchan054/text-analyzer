const express = require('express');

const app = express();
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
app.set('view engine', 'ejs');

const db = require('./db_config');

db.initPool();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/styles'));

//routers
const indexRouter = require('./routes/index');
const textListRouter = require('./routes/texts');
const textApiRouter = require('./routes/apis/analyzerApis');
const editTextRouter = require('./routes/edittext');
const deleteRouter = require('./routes/delete');
const addRouter = require('./routes/addtext');
const reportRouter = require('./routes/report');
//urls
app.use('/', indexRouter);
app.use('/texts', textListRouter);
app.use('/text/analyze', textApiRouter);
app.use('/edittext', editTextRouter);
app.use('/delete', deleteRouter);
app.use('/addtext', addRouter);
app.use('/report', reportRouter);

//port
app.use(expressLayouts);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//on exit
process.on('SIGINT', () => {
    console.log('Bye bye!');
    db.closePool();
    process.exit();
});

module.exports = app;