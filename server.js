const express = require("express");
require('dotenv/config');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const helmet = require("helmet");
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(express.static('client/build'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}


app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// // Add routes, both API and view
app.use(routes);
// app.use(require("./routes/index"));
// Connect to the Mongo DB
mongoose.connect("mongodb://user:password1@ds239206.mlab.com:39206/heroku_hd01s5rq");

// // Define securities with helmet

// hide what app is powered by
app.use(helmet.hidePoweredBy());
// frameguard for not allowing iframe to clickjack
app.use(helmet.frameguard({action: 'deny'}));
// prevent XSS cross side scripting
app.use(helmet.xssFilter());
// prevent MIME sniffing
app.use(helmet.noSniff());
// ieNoOpen
app.use(helmet.ieNoOpen());
// force https
const ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}))
// prevent prefetch DNS
app.use(helmet.dnsPrefetchControl())
//conent source approved providers
app.use(helmet.contentSecurityPolicy({directives:{defaultSrc:["'self'"], scriptSrc:["'self'", "trusted-cdn.com"]}}));


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});