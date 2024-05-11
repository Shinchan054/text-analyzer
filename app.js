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

app.use(express.static(__dirname + '/stylesheet'));


const indexRouter = require('./routes/index');
app.get('/', indexRouter);

app.use(expressLayouts);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
    console.log('Bye bye!');
    db.closePool();
    process.exit();
});

module.exports = app;