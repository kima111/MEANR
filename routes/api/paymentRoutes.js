const cors = require("cors")
const express = require("express");
const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

router.use(express.json())
router.use(cors());
router.post('/sendPayment', async(req, res) => {
    const{id, amount} = req.body;

     try {
        console.log(req.body) 
        stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Good Stuff',
            payment_method: id, 
            confirm: true
        })

        console.log(payment);
    
        return res.status(200).json({
            confirm: "123"
        })
    } catch(error){}
    }


)

module.exports = router;