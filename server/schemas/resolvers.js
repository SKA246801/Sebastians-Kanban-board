const { Kanban, List, Task, User } = require('../models')
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {
    Query: {
      kanbans: async (parent, { username }) => {
        const params =  username ? { username } : {}
        return Kanban.find(params)
      // kanban: async () => {
      //   return Kanban.find().populate({
      //     path: 'list', populate: { path: 'task' }
      //   })
      },
      kanban: async(parent, {_id}) => {
        return Kanban.findOne({ _id })
      },
      users: async() => {
        return User.find().populate('kanban')
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('friends').populate('kanban')
      },
      task: async () => {
        return Task.find()
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args)

        return user
      },
      login: async (parent, { username, password }) => {
        const user = await User.findOne({ username })

        if (!user) {
          throw new AuthenticationError('Incorrect credentials')
        }

        const correctPw = await user.isCorrectPassword(password)

        if(!correctPw) {
          throw new AuthenticationError('Incorrect credentials')
        }

        return user
      }
    }
  }
  
  module.exports = resolvers