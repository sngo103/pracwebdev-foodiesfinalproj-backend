const Sequelize = require('sequelize');
const db = require('../db');

//Campus model -Gabby
const campModel = {
    name: "Hunter",
    description: "description",
    imageURL: null, //default photo here 
    address: "address"
}

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  /*
  Idk, if I was doing this right.... 

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  }*/
});

module.exports = Campus;