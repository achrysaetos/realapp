const postsResolvers = require('./post')
const usersResolvers = require('./users')

// should restart the server after changing this file
module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation
    }
}