'use strict';
module.exports = (db) => {
    const Books = db.Livre;
    const Tools = require('../utils/Tools');
    return {
        getBooks: async (req, res) => {
            return res.send(await Books.findAll());
        },
        getBookById: async (req, res) => {
            try {
                const book = await Books.findOne({
                    where: {
                        id: req.params.id
                    }
                });
                if (!book) {
                    return res.status(500).send({"Error": 404, "Message": "Book not found"});
                }
                return res.send(book);
            } catch {
                return res.status(500).send({"Error": 500, "Message": "Server error"});
            }
        },
        createBook: async (req, res) => {
            let {isbn, name, desc} = req.body;

            if (!isbn || !name) {
                return res.status(400).send({"Error": 400, "Message": "Invalid request"});
            }

            try {
                let livre = await Books.create({
                    id: Tools.uuid(),
                    isbn: isbn,
                    name: name,
                    description: desc
                });

                return res.send(livre);
            } catch {
                return res.status(500).send({"Error": 500, "Message": "Server error"});
            }
        },
        updateBook: async (req, res) => {

            const id = req.params.id;
            let {name, desc} = req.body;

            if (!id || !name) {
                return res.status(400).send({"Error": 400, "Message": "Invalid request"});
            }

            try {
                await Books.update({
                    name: name,
                    description: desc
                },{
                    where: {
                        id: id
                    }
                });

                return res.sendStatus(201);
            } catch {
                return res.status(500).send({"Error": 500, "Message": "Server error, check if your data is correct"});
            }
        },
        deleteBook: async (req, res) => {

            const id = req.params.id;

            if (!id) {
                return res.status(400).send({"Error": 400, "Message": "Invalid request"});
            }

            try {

                await Books.destroy({
                    where: {
                        id: id
                    }
                });

            } catch {
                return res.status(500).send({"Error": 500, "Message": "Server error, check if your data is correct"});
            }
        }
    };
};
