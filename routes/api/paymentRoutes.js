const cors = require('cors');
const express = require('express');
const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const paymentController = require('../../controllers/paymentController');

router.use(express.json());
router.use(cors());
router.post('/sendPayment', paymentController.submitPayment);

module.exports = router;