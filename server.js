import {ApolloServer} from 'apollo-server-express'
import cors from 'cors'
import express from 'express'
import typeDefs from './typedefs/index.js'
import resolvers from './resolvers/index.js'
import connectMongo from './config/mongoose.js'
const port = process.env.PORT || 4000;
const app = express();

// Establish connection to the database
connectMongo();

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(port , () => console.info(`Server started on port ${port}`));

