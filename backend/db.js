
const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { URI } = require('./config')


const server = new ApolloServer({
    typeDefs, resolvers, context: ({req}) => ({req}) 
})

mongoose
    .connect(URI, {useNewUrlParser: true})
    .then(()=>{
        return server.listen({port:5000})
    })
    .then((res)=>{
        console.log(`Server running at ${res.url}`)
    })