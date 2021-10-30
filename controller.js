const path = require('path')
const fs = require('fs')
const config = require('./config')

module.exports = {
    root: (req, res) => {
        const htmlFile = path.join(config.PUBLIC_DIR, 'index.html')
        res.sendFile(htmlFile)
    },
    audioplayback: (req, res) => {

    },
    videoplayback: (req, res) => {
        if(req.query.id && req.query.quality && req.query.mime)
        {
            const byteRange = req.headers.range
            const videoName = req.query.quality + '.' + req.query.mime
            const videoPath = path.join(config.VIDEO_DIR, req.query.id, videoName)

            if(!byteRange){
                res.status(400).send('Requires Range header')
            }

            if(!fs.existsSync(videoPath)){
                res.status(404).send('content doesn\'t exists.')
            }

            const videoSize = fs.statSync(videoPath).size

            const startByte = Number(byteRange.replace(/\D/g, ''))
            const endByte = Math.min(startByte + config.STREAM_CHUNK_SIZE, videoSize - 1)

            const videoStream = fs.createReadStream(videoPath, {start: startByte, end: endByte})
            
            const headers = {
                'Content-Range': `bytes ${startByte}-${endByte}/${videoSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': endByte - startByte + 1,
                'Content-Type': `video/${req.query.mime}`
            }

            res.writeHead(206, headers)
            videoStream.pipe(res)
        }
        else{
            res.status(400).send('Bad Query Parameters.')
        }
    }
}