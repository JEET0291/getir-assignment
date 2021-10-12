module.exports = Object.freeze({
	ENV: process.env.NODE_ENV,
	HOST: process.env.DOMAIN_NAME,
	PORT: parseInt(process.env.PORT) || 3000,
	FIREBASE_ADMIN_KEY: process.env.FIREBASE_ADMIN_KEY,
	APNS_KEY: process.env.APNS_KEY,
	APNS_PASS_PHRASE: process.env.APNS_PASS_PHRASE,
	JWT_CERT: process.env.JWT_CERT,
	JWT_ALGO: process.env.JWT_ALGO,
	CRYPTO_ALGO: process.env.CRYPTO_ALGO,
	CRYPTO_KEY: process.env.CRYPTO_KEY,
	AWS: {
		ACCESS_KEY: process.env.ACCESS_KEY, //'AKIAIGTT2CNXI3KAGXSQ',
		SECRET_KEY: process.env.SECRET_KEY, //'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',
		REGION: process.env.REGION, //'us-east-1',
		S3: {
			URL: process.env.S3_URL, //'http://s3.amazonaws.com/appinventiv-development/catholic/',
			BUCKET: process.env.S3_BUCKET //'appinventiv-development',
		},
		SES: {
			HOST: process.env.SES_HOST,
			PORT: process.env.SES_PORT,
			USER: process.env.SES_USER,
			PASSWORD: process.env.SES_PASSWORD
		}
	},
	MAILCHIMP_KEY: process.env.MAILCHIMP_KEY,
	SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
	DIR: {
		TEMPLATE_PATH: process.cwd() + '/src/views/',
		BASE_DIR: process.cwd(),
		CERT_DIR: process.cwd() + '/certs'
	},
	DEFAULT: {
		EMAIL: process.env.DEFAULT_MAIL
	},
	DB_CONNECTION: null,
	BASE_AUTH: {
		USERNAME: process.env.BASIC_AUTH_USER,
		PASSWORD: process.env.BASIC_AUTH_PASSWORD
	},
	ONE_DAY_TIME_STAMP: 24 * 60 * 60 * 1000, // 1 day
	ADMIN_HOST: process.env.ADMIN_HOST,
	API_DOMAIN: process.env.API_DOMAIN,
	WEBFLOW: {
		APIKEY: process.env.WEBFLOW_APIKEY
	},
	EMAIL: {
		FROM: process.env.EMAIL_FROM,
		PASSWORD: process.env.EMAIL_PASSWORD,
		PROVIDER: process.env.PROVIDER
	}
});
