"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "First space",
          description: "This is a trial space",
          backgroundColor: "#faeee4",
          color: " #49463e",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Second space",
          description: "This is the second trial space",
          backgroundColor: "#e4d6f0",
          color: "#2f6381",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Third space",
          description: "This is the third trial space",
          backgroundColor: " #e1bbde",
          color: " #732a6e",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Fourth space",
          description: "This is the fourth trial space",
          backgroundColor: "#dbf1e6",
          color: "#845b4a",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
