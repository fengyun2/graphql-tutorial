/*
 * @Author: Administrator
 * @Date:   2016-07-13 18:05:15
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-13 18:30:27
 */

import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt
} from 'graphql/type';

let count = 0;
let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                resolve: function() {
                    return count
                }
            }
        }
    })
});
export default schema;
