/*
 * @Author: Administrator
 * @Date:   2016-07-13 18:05:15
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-13 18:45:59
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
                // add the description
                description: 'The count!',
                resolve: function() {
                    return count
                }
            }
        }
    })
});
export default schema;
