const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://satishkanaujiya19:blzk7IYjilnqZsHl@productcluster.cxwan.mongodb.net/ecommerce')
    .then(() => console.log('Database Connected!'))
    .catch((error) => {
        console.log('Error', error);
    });
