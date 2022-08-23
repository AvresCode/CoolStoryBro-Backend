"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "First story",
          content: "This is the first story",
          imageUrl: "https://unsplash.com/photos/ioyEITUD2G8",
          spaceId: 1 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Second story",
          content: "This is the second story",
          imageUrl: "https://unsplash.com/photos/3VTZloIMFP0",
          spaceId: 2 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Third story",
          content: "This is the third story",
          imageUrl: "https://unsplash.com/photos/Try01IVQifM",
          spaceId: 1 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fourth story",
          content: "This is the Fourth story",
          imageUrl: "https://unsplash.com/photos/85J99sGggnw",
          spaceId: 2 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
