import * as express from 'express'
import controller from './controller'

const router = express.Router()

router
    .get('/', controller.root)


export default router