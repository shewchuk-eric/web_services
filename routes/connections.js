// A METHOD FROM YOUTUBE VIDEO IN LEARNING MATERIALS - WEEK 2
const {MongoClient} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@webservices.7rb5fj3.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async() => {
    const client = new MongoClient(uri);
    try {       
        await client.connect(); // Connect to the MongoDB cluster      
        await  listDatabases(client); // call function that uses database       
            } catch (e) {
                console.error(e);
            } finally {
                await client.close();
            }
    // await client.connect();
    // console.log('DB is connected. . .');
    // await  listDatabases(client); = async () => {
}


// A METHOD THAT IS TESTED AND KNOWN TO WORK - CALL IT "METHOD A"

// async function main() {
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


const listDatabases = async (client) => {
    databasesList = await client.db().admin().listDatabases();
    let bases = "databases:\n" + databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    return bases;
};

module.exports = {connectDB, listDatabases};
