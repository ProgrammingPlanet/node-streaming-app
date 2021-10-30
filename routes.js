const router = require('express').Router()

const controller = require('./controller')

router
    .get('/', controller.root)
    .get('/playback/video', controller.videoplayback)
    .get('/playback/audio', controller.audioplayback)

module.exports = router