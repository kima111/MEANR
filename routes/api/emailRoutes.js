const express = require("express");
const router = require("express").Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const emailer = process.env.NODEMAILER_SENDER_EMAIL_ACCOUNT;
const emailPass = process.env.NODEMAILER_SENDER_EMAIL_PASS;
// const pNumber = process.env.PNUMBER
const cors = require('cors')

router.use(express.json())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))
router.use(cors());

router.post('/sendEmail', function(req, res){
    const title = req.body.title;
    const message = req.body.emailText;
    const email = req.body.email;
    nodemailer.createTestAccount((err, account)=>{
        
        
        const htmlEmail = `
        <h1>Title: ${title}</h1>
        <p>Email Message: ${message}</p>
        `

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: emailer,
                pass: emailPass
            }
        })

        let mailOptions = {
            from: 'do_not_reply@do_not_reply.com',
            to: email,
            replyTo: 'do_not_reply@do_not_reply.com',
            subject: title,
            text: email,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))  
        })
    })
 
})

module.exports = router;