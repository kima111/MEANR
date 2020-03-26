const twilio = require('twilio')
const router = require("express").Router();
const cors = require('cors')

const accountSid = ''
const authToken = ''

const client  = new twilio(accountSid, authToken);

router.use(cors());

router.post('/sendTextMessage', function(req, res){
    console.log(req.body.text)

    client.messages.create({
        body: req.body.text,
        to: req.body.recipient,
        from: ''
    })
    .then(
        res.json({message: "message successfully sent"})
    )
    .catch(error => res.status(422).json(error))
})

module.exports = router;