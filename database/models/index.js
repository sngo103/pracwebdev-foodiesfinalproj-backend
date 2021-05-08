// register models, set up associations between tables, and generate barrel file for the models;
const Student = require('./student');
const Campus = require('./campus');
/*
- [x] Students may be associated with at most one campus
- [x] Campuses may be associated with many students

*/
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus
};