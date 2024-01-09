// A METHOD FROM YOUTUBE VIDEO IN LEARNING MATERIALS - WEEK 2
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@webservices.7rb5fj3.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('DB is connected. . .');
    await  listDatabases(client);
}




// A METHOD THAT IS TESTED AND KNOWN TO WORK - CALL IT "METHOD A"
// const {MongoClient} = require('mongodb');

// async function main() {
//     const uri = "mongodb+srv://EricShewchuk:jsZuCNiDq0sfLzmC@webservices.7rb5fj3.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

const listDatabases = async (client) => {
    databasesList = await client.db().admin().listDatabases();
    

    let bases = "databases:\n" + databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    // console.log("Databases:");
    // databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    return bases;
};

module.exports = {connectDB, listDatabases};

// ANOTHER METHOD THAT IS NOT TESTED YET

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
