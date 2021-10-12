const auth = require('basic-auth');
const jwt = require('jsonwebtoken');
const APP = require('../config/app.js');
const CONSTANTS = require('../config/constant.js');


module.exports = class Auth {
	static async Authenticate(req, res, next) {
		// extract the name and password from basic authorization
		let credentails = auth(req);
		// verify the authorization credentials
		if (credentails && credentails.name === APP.BASE_AUTH.USERNAME && credentails.pass === APP.BASE_AUTH.PASSWORD) {
			next();
		} else { 
			return res.status(errorData.code).send(CONSTANTS.ERROR.UNAUTHORIZED_401);
		}
	}

}
