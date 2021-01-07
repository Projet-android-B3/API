'use strict';
module.exports = (app, db) => {

    const LivresController = require('../controllers/LivresController')(db);


    app.get('/', (req, res) => {
        res.send('API works');
    });
    app.get('/books', LivresController.getBooks);
    app.get('/book/:id', LivresController.getBookById);
    app.post('/books', LivresController.createBook);
    app.put('/book/:id', LivresController.updateBook);
    app.delete('/books/:id', LivresController.deleteBook);
};
