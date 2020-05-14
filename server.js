const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const helmet = require('helmet');
const PORT = process.env.PORT || 3001;
const socketIO = require('socket.io');

const http = require('http');
const server = http.createServer(app);
const events = require('./events');


const io = socketIO(server);

// io.on('connection', (socket) => {
//   console.log('New client connected');
//   events.testMessage(socket);
//   socket.on('message', function(message) {
//     io.emit('message', message);
//   });
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });


// constants for passport
const passport = require('./passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/' + process.env.MONGO_DB_NAME);


const db = require('./models');

//watch any changes on forums collection if so, trigger event and pass in io connection

const collection = db.forums;
const forumChangeStream = collection.watch();

forumChangeStream.on('change', function() {
  events.forumChangeEvent(io);
});

//passport local strategy
app.use(
  session({
    secret: process.env.PASSPORT_SESSION_SECRET, // Pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false, // Required
    saveUninitialized: false // Required
  })
);


app.use( (req, res, next) => {
//   console.log('req.session', req.session);
  return next();
});



// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());


//for production deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);
app.set('socketio', io);

// Define securities with helmet

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
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}));
// prevent prefetch DNS
app.use(helmet.dnsPrefetchControl());
//conent source approved providers
app.use(helmet.contentSecurityPolicy({directives:{defaultSrc:['\'self\''], scriptSrc:['\'self\'', 'trusted-cdn.com']}}));

//fall back for any route
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});