const router = require('express').Router()

const controller = require('./controller')

router
    .get('/', controller.root)
    .get('/a', controller.test)

module.exports = router