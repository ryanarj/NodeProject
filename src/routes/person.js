let express = require('express')
let router = express.Router()

// localhost:3000/person?name=ryan&age=20
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`You have requested a person ${req.query.name}`)
    } else {
        res.send('You have requested a person ')
    }
})

// localhost:3000/person/ryan
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`)
})
module.exports = router