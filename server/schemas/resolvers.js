const { Kanban, List, Task, User } = require('../models')

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
        return User.find().populate('friends').populate('kanban')
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('friends').populate('kanban')
      },
      task: async () => {
        return Task.find()
      }
    }
  }
  
  module.exports = resolvers