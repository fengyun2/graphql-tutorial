/*
 * @Author: Administrator
 * @Date:   2016-07-13 18:05:15
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-16 18:01:32
 */

import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt
} from 'graphql/type'

let count = 0

// 在GraphQL中, 对数据库的查 被称为 query
// 在GraphQL中, 对数据库的增删改 被称为 mutation
let schema = new GraphQLSchema({
    // 查询
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                // add the description
                description: 'The count!',
                resolve () {
                    return count
                }
            }
        }
    }),
    // 增删改
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'Update the count',
                resolve (parentValue, args, request) {
                    count += 1
                    return count
                }
            }
        }
    })
})
export default schema
