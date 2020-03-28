const cors = require("cors")

const express = require("express");
const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE)
const uuid = require("uuid/v4")



router.use(express.json())
router.use(cors());
router.post('/sendPayment', function(req, res){
 stripe.customers.create({
     email: req.body.token.email,
     source: req.body.token.id
 }).then(
 stripe.charges.create({
    amount: req.body.product.price,
    currency: 'usd'
 }))
})


module.exports = router;