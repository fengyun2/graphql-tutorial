/*
* @Author: Administrator
* @Date:   2016-07-13 17:03:18
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-13 17:32:20
*/

'use strict';

// 引入所需要的包
let graphql = require('graphql')
let graphqlHTTP = require('express-graphql')
let express = require('express')

// 导入数据
let data = require('./data.json')

let userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: graphql.GraphQLString
    },
    name: {
      type: graphql.GraphQLString
    }
  }
})

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: {
            type: graphql.GraphQLString
          }
        },
        resolve: function(_, args) {
          return data[args.id]
        }
      }
    }
  })
})

express()
.use('/graphql', graphqlHTTP({schema: schema, pretty: true}))
.listen(3000)

console.log('listening at port 3000.')
