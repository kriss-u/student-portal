const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
app.use(cors());

app.use(express.json());

mongoose.Promise = global.Promise;
// Get up default Mongoose Connection
mongoose.connect('mongodb://mongo/student-portal', {useNewUrlParser: true});

// Get the Default Connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

const port = process.env.NODE_SERVER_PORT || '8000';

app.listen({port: port}, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);

module.exports = app;
