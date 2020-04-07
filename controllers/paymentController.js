const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

module.exports = {
    submitPayment: function(req, res){

        const{id, amount} = req.body;
            
        stripe.paymentIntents.create({
                        amount,
                        currency: 'USD',
                        description: 'Great Stuff',
                        payment_method: id, 
                        confirm: true
                    })
                    .then(
                        res.json({confirm: "123"})
                    )
    },

}