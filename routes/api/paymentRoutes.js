const cors = require("cors")

const express = require("express");
const router = require("express").Router()
const stripe = require("stripe")("")
const uuid = require("uuid/v4")



router.use(express.json())
router.use(cors());
router.post('/sendPayment', function(req, res){
 console.log("HEEHEHEHE")
 console.log(req.body)
})


module.exports = router;