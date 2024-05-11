const express = require('express');

const app = express();
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
app.get('/', indexRouter);

app.use(expressLayouts);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;