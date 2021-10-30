const path = require('path')

module.exports = {
    BASE_DIR: __dirname,
    PUBLIC_DIR: path.join(__dirname, 'public'),
    VIDEO_DIR: path.join(__dirname, 'content', 'videos'),
    STREAM_CHUNK_SIZE: 2**20, //1MB
    db: {
        postgresql: {
            host: '127.0.0.1',
            port: 5432,
            user: "mohin",
            password: "07860",
            database: "node_streaming"
        }
    }
}