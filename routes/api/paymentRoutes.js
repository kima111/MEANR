const cors = require("cors")

const express = require("express");
const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const uuid = require("uuid/v4")
const bodyParser = require('body-parser')



router.use(express.json())
router.use(cors());
router.use(bodyParser)
router.post('/sendPayment', function(req, res){

    console.log(req.body)
 stripe.customers.create({
     email: req.body.token.email,
     source: req.body.token.id
 }).then(
 stripe.charges.create({
    amount: req.body.product.price,
    currency: 'usd'
 }))
 .catch(error => console.log(error))
})


module.exports = router;