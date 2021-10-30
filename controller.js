module.exports = {
    root: (req, res) => {
        console.log(req)
        res.send('hi')
    },
    test: (req, res) => {
        res.send('test')
    }
}