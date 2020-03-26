const twilio = require('twilio')
const router = require("express").Router();
const cors = require('cors')

const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOK
const pNumber = process.env.PNUMBER

const client  = new twilio(accountSid, authToken);

router.use(cors());

router.post('/sendTextMessage', function(req, res){
    console.log(req.body.text) 
    // console.log(process.env.ACCOUNT_SID)
    client.messages.create({
        body: req.body.text,
        to: req.body.recipient,
        from: pNumber
    })
    .then(
        res.json({message: "message successfully sent"})
    )
    .catch(error => res.status(422).json(error))
})

module.exports = router;