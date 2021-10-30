import {Request, Response} from 'express'

export default {
    root: (req: Request, res: Response) => {
        res.send('hello')
    },

}