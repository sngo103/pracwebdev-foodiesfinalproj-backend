const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

const ash = require('express-async-handler');

/** GET ALL CAMPUSES
 *  [x] Write a route to serve up all campuses
 */

router.get('/', ash(async(req, res) => {
  let campuses = await Campus.findAll({include: [Student]});
  res.status(200).json(campuses);
}));

/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});
  res.status(200).json(campus);
}));

/** ADD A NEW CAMPUS
 *  [x] Write a route to add a new campus
 */
 router.post('/', function(req, res, next) {
  Campus.create(req.body)
    .then(createdCampus => res.status(200).json(createdCampus))
    .catch(err => next(err));
});
/** DELETE CAMPUS 
 * [x] Write a route to remove a campus (based on its id)
*/
router.delete('/:id', function(req, res, next) {
  Campus.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a campus!"))
    .catch(err => next(err));
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;