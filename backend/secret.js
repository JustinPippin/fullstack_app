const secrets = {
//The URL that we use to connect to the MongoDB Atlas Cluster
    dbUri: 'mongodb+srv://justinpippin:password123@cluster1-g4qpl.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[key];

module.exports = getSecret;