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
          color: "#edeae7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Second space",
          description: "This is the second trial space",
          backgroundColor: "#e4d6f0",
          color: "#f5f2f9",
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
