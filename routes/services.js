var express = require('express');
var router = express.Router();
const { celebrate, Joi, errors, Segments } = require('celebrate');

var ServiceClass = require('./../controllers/serviceController.js');
var services = new ServiceClass();

const Middlewares =  require('../middlewares/auth');
var Auth = new Middlewares();

/* GET: FETCH FILTERED DATA SERVICE. */
router.post('/fetch-data', celebrate({
  body: Joi.object().keys({
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      minCount: Joi.string().required(),
      maxCount: Joi.string().required(),
  })
}),
async function(req, res, next) {
  try {
    let response = {};
    let result = await services.fetchRecords(req.body);
  
      response = {
        code: 0,
        msg: "Success",
        records: result
      }
    res.status(200).send(response);
    
  } catch (error) {
    console.log("##",error)
    sendError(res, error);
  }
});

module.exports = router;
