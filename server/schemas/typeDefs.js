// import the gql tagged template function
const { gql } = require('apollo-server-express')

// create our typeDefs
const typeDefs = gql`
    type Task {
        _id: ID
        taskContent: String
        userAssigned: String
    }
    type List {
        _id: ID
        listTitle: String
        task: [Task]
    }
    type Kanban {
        _id: ID
        kanbanTitle: String
        list: [List]
        username: String
    }
    type User {
        _id: ID
        username: String
        password: String
        kanban: [Kanban]
        friends: [User]
    }
    type Query {
        users: [User]
        user(username: String!): User
        kanbans(username: String): [Kanban]
        kanban(_id: ID!): Kanban
        task: [Task]
    }
`

// export the typeDefs
module.exports = typeDefs