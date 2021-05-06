const Sequelize = require('sequelize');
const db = require('../db');

//I added this model, not sure if i was supposed to add email, image, and gpa in const student
const Students = {
  student: {
    firstName: "Gabby",
    lastName: "Gonzalez",
    email: "Gabriella.gonzalez90@myhunter.cuny.edu",
    imageUrl: null,  //need default photo here
    gpa: "4.0" 
  }
}
const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  /*
  I added these but not sure if its right?? 

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gpa: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
*/
});

module.exports = Student;