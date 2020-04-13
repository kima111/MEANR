const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
    submitEmail: function(req, res){
        console.log(req.body)
        const msg = {
          to: req.body.email,
          from: process.env.SENDGRID_SENDER,
          subject: req.body.title,
          text: req.body.emailText,
          html: req.body.emailText,
        };
        sgMail.send(msg)
        .then(res.send("sent"))
   
    }

}