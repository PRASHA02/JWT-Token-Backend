const notFoundMiddleware = (req,res) => res.status(404).send('Routes doesnot exist')

module.exports = notFoundMiddleware