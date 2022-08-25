"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "First story",
          content: "This is the first story",
          imageUrl: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          spaceId: 3 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Second story",
          content: "This is the second story",
          imageUrl: "https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          spaceId: 2 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Third story",
          content: "This is the third story",
          imageUrl: "https://images.unsplash.com/photo-1650069740314-4e6dcf4640c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          spaceId: 1 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fourth story",
          content: "This is the Fourth story",
          imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          spaceId: 4 ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Fifth story",
          content: "This is the Fifth story",
          imageUrl: "https://images.unsplash.com/photo-1660753336510-7a6658e1652e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          spaceId: 1 ,
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
