'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Livres', [
      {
        id: "101643DB-3B12-4C72-A777-A9257E963ADC",
        ISBN : "978-2-919539-00-0",
        name: "Mon accent apostrophe",
        description: "",
      },
      {
        id: "1C513AD6-6251-41E2-9D24-F301FEC340CE",
        ISBN : "978-2-919539-01-7",
        name: "Tenez bon, souvenirs !",
        description: "",
      },
      {
        id: "E12E561D-C91F-48B3-9DC1-58B3F41D0AD9",
        ISBN : "978-2-919539-02-4",
        name: "La Force des Gueux",
        description: "",
      },
      {
        id: "24218312-3A6C-4D3A-8609-CA7BE618C9E4",
        ISBN : "978-2-919539-03-1",
        name: "Les Écoles, théâtre de quels désirs ?",
        description: "",
      },
      {
        id: "AA8D3523-9347-472F-B47B-8FB5759351D7",
        ISBN : "978-2-919539-04-8",
        name: "La Force des Gueux et autres scènes de l’Opprimé",
        description: "",
      },
      {
        id: "AA8D3523-9347-472F-B47B-8FB5759351D6",
        ISBN : "978-2-919539-05-5",
        name: "La Lune souffle",
        description: "",
      },
      {
        id: "E283B9F9-9329-49B7-9A34-4AEA8B193BC0",
        ISBN : "978-2-919539-08-6",
        name: "Une Mer aux senteurs de rose",
        description: "",
      },
      {
        id: "0515DCBA-7245-4868-B713-8F80A31FD589",
        ISBN : "2-07-036039-3",
        name: "Anna Karénine, Tome 2",
        description: "",
      },
      {
        id: "45A3AAC5-A890-46A5-80F6-678B5B0B11BB",
        ISBN : "2-07-036042-3",
        name: "La Peste",
        description: "",
      },
      {
        id: "43B2A1A4-2EC1-4475-9E1D-925E9ED29CB5",
        ISBN : "2-07036043-1",
        name: "Couples",
        description: "",
      },
      {
        id: "95F43706-9E7B-49A4-B5E9-CDEDE0AAF6C2",
        ISBN : "2-07-036045-8",
        name: "La Grande Meute",
        description: "",
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Livres', null, {});
  }
};
