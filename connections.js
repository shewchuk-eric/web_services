const {MongoClient} = require('mongodb');

async function main() {
    // const connection = require('./uri'); // use this one when getting value from external file
    const uri = "mongodb+srv://EricShewchuk:jsZuCNiDq0sfLzmC@webservices.7rb5fj3.mongodb.net/?retryWrites=true&w=majority";
    // const uri = connection.uri; // use this one when getting value from external file
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// const mongoClient = require('mongodb').MongoClient;

// const mongoURL = 'mongodb://<mongo admin>:<password>@'+`${mongoDBIP}`+':'+`${mongoDBPort}`;

// let _db;

// const initDb = callback => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }
//   mongoClient .connect(mongoURL)
//     .then(client => {
//       _db = client;
//       callback(null, _db);
//     })
//     .catch(err => {
//       callback(err);
//     });
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error('Db not initialized');
//   }
//   return _db;
// };
