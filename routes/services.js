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
  //   result = [
  //     {
  //         "_id": "5ee21588e07f053f990ceda2",
  //         "key": "VxOjsBsR",
  //         "createdAt": "2015-09-08T09:32:12.457Z",
  //         "totalCount": 2700
  //     },
  //     {
  //         "_id": "5ee21588e07f053f990cee76",
  //         "key": "QGRnbzsZ",
  //         "createdAt": "2015-07-18T20:05:36.139Z",
  //         "totalCount": 2700
  //     }
  // ]

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
