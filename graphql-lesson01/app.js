/*
* @Author: Administrator
* @Date:   2016-07-13 17:03:18
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-16 17:36:21
*/

'use strict'

// 引入所需要的包 let graphql = require('graphql') let graphqlHTTP =
// require('express-graphql') let express = require('express')
import express from 'express'
import graphqlHTTP from 'express-graphql'
import {GraphQLString, GraphQLObjectType, GraphQLSchema} from 'graphql'
import bodyParser from 'body-parser'

// 导入数据 let data = require('./data.json')
import data from './data.json'

const app = new express()

// parse POST body as text
app.use(bodyParser.text({type: 'application/graphql'}))

/**
 * 定义数据类型
 * 包含两个字段: id和name
 * @type {graphql}
 */
const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  }
})

/**
 * 定义一个 schema
 * 返回一个 `Query` 的对象, 每个 `Query` 对象包含一个  `userType` 的域(id and name)
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        // 添加描述
        // description: 'Select user info',
        // isDeprecated: 'Will be remove 1000 year',
        // deprecationReason: 'Because it will produce another new technology',
        args: {
          id: {
            type: GraphQLString
          },
          name: {
            type: GraphQLString
          }
        },
        /**
         * 如何返回结果
         * @param  {[type]} parentValue [description]
         * @param  {[type]} args        [description]
         * @param  {[type]} request     [description]
         * @return {[type]}             [description]
         */
        resolve(parentValue, args, request) {
          console.log(`parentValue: ${parentValue}`)
          // console.log(`args: ${args}`)
          console.log(`args: `, args.name)

          console.log(`data: `, data)
          return data[args.id]
        }
      }
    }
  })
})

app.all('/graphql', graphqlHTTP(request => {
  const startTime = Date.now()
  return {
    schema: schema,
    pretty: true,
    formatError: error => ({message: error.message, locations: error.locations, statck: error.statck, path: error.path})
  }
})).listen(3000)

console.log('GraphQL server running on http://localhost:3000/graphql')
// http://localhost:3000/graphql?query={user(id:"1"){name}}
// http://localhost:3000/graphql?query={user(id:"1"){id,name}}