const Sequelize = require('sequelize');
const db = require('../db');

/*
  - [x] Write a `students` model with the following information:
  - [x] firstName - not empty or null
  - [x] lastName - not empty or null
  - [x] email - not empty or null; must be a valid email
  - [x] imageUrl - with a default value
  - [x] gpa - decimal between 0.0 and 4.0
*/

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  
  //I added these but not sure if its right?? 
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //GPA in range 0.0-4.0
  gpa: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0.0, //if a student hasnt taken any classes 
    validate: {
        min: 0.0,
        max: 4.0
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" 
  }

});


module.exports = Student;