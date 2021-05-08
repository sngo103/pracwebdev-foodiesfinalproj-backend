const Sequelize = require('sequelize');
const db = require('../db');

/*
  - [x] Write a `campuses` model with the following information:
  - [x] name - not empty or null
  - [x] imageUrl - with a default value
  - [x] address - not empty or null
  - [x] description - extremely large text
*/
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  //Idk, if I was doing this right.... 
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "https://www.tibs.org.tw/images/default.jpg"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Campus;