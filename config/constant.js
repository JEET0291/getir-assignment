const ERROR_CODES = {
    400: 400,
    401: 401,
    403: 403,
    404: 404,
    409: 409,
    429: 429,
    422: 422,
    500: 500,
    503: 503
};

module.exports = Object.freeze({
    VALIDATION_ERROR_400: {
        code: ERROR_CODES[400],
        message: 'Validation errors in your request',
        errors: [] // add validation errors
    },
    UNAUTHORIZED_401: {
        code: ERROR_CODES[401],
        message: 'Authentication credentials were missing or incorrect'
    },
    UNAUTHORIZED__TOKEN_401: {
        code: ERROR_CODES[401],
        message: 'Authentication token were missing or incorrect'
    },
    FORBIDDEN_403: {
        code: ERROR_CODES[403],
        message: 'The request is understood, but it has been refused or access is not allowed'
    },
    NOT_FOUND_404: {
        code: ERROR_CODES[404],
        message: 'The item does not exist'
    },
    USER_FOUND_404: {
        code: ERROR_CODES[404],
        message: 'The User does not exist'
    },
    VOX_FOUND_404: {
        code: ERROR_CODES[404],
        message: 'The Vox does not exist'
    },
    NOTIFICATION_FOUND_404: {
        code: ERROR_CODES[404],
        message: 'The notification does not exist'
    },
    CONFLICT_409: {
        code: ERROR_CODES[409],
        message: 'There was conflict in your request' // add request specific message if required
    },
    TOO_MANY_REQUESTS_429: {
        code: ERROR_CODES[429],
        message: 'The request cannot be served due to the rate limit having been exhausted for the resource'
    },
    INVALID_CAPTCHA_422: {
        code: ERROR_CODES[422],
        message: 'Invalid captcha'
    },
    INTERNAL_SERVER_ERROR_500: {
        code: ERROR_CODES[500],
        message: 'Something is broken'
    },
    SERVICE_UNAVAILABLE_503: {
        code: ERROR_CODES[503],
        message: 'he server is up, but overloaded with requests. Try again later!'
    },
    VOX_ALREADY_POSTED: {
        code: ERROR_CODES[403],
        message: 'This vox has already been posted few seconds ago'
    },
    SKETCH_FOUND_404: {
        code: ERROR_CODES[404],
        message: 'The Sketch does not exist'
    },
    DIALOG_FOUND_404: {
        code: ERROR_CODES[404],
        message: 'The dialog does not exist'
    },
    COMMENT_FOUND_404: {
        code: ERROR_CODES[404],
        message: 'The Comment does not exist'
    },
});
