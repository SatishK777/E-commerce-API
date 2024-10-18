const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('./config/db');
const indexRoutes = require('./Routes/index');
const bodyParser = require('body-parser');
const categoryRoutes = require('./Routes/category')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', indexRoutes);
app.use('/category', categoryRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
