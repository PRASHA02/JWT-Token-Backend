const CustomApiError = require('./custom-error')

const badRequest = require('./bad-request')

const UnauthenticatedError = require('./unauthenticated')

module.exports = {
    CustomApiError,
    badRequest,
    UnauthenticatedError
}