const mongoose = require('mongoose');
const Models = require('./models');

// Database Name
const dbName = 'MEANR_DB';

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017';

async function connect() {
  await mongoose.connect(`${dbUri}/${dbName}`);

  const collection = Models.collection('forums');
  const didChangeStream = collection.watch();
//   const dibChangeStream = Models.forums.collection.watch({
//     fullDocument: 'forums',
//   });

  didChangeStream.on('change', function(){
    console.log('YOYOYOYOYOYOYOYOYOYOYOYOYOYOY!!!!');
  });

}
exports.connect = connect;

exports.Models = Models;
