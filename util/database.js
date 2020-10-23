const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect("mongodb+srv://tranbakhanhtrinh:airblade08@nodejs-complete-guide.fqrra.mongodb.net/<dbname>?retryWrites=true&w=majority")
        .then(client => {
            console.log("Connected!!")
            callback(client);
        })
        .catch(err => console.log(err));
}

module.exports = mongoConnect;

