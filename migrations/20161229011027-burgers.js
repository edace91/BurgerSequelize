'use strict';

var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
    */

    return models.Burgers.bulkCreate(
        [
          {burger_name: "Habanero Burger"},
          {burger_name: "Fresh Avacado Burger"},
          {burger_name: "Ahi Tuna"},
          {burger_name: "Double with Cheese"},
          {burger_name: "Chicken Poblano"}
        ]
     )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
    */
    return models.Burgers.destroy({where: {burger_name:[
      "Habanero Burger",
      "Fresh Avacado Burger",
      "Ahi Tuna",
      "Double with Cheese",
      "Chicken Poblano"
    ]}})
  }
};
