# graphql-tutorial

##express-graphql:

- graphql-lesson01
- graphql-lesson02(graphql-curd)

##koa-graphql:

- graphql-lesson03

## 总结

graphql 中也存在增删改查

**查:** `query`

```js
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
```

**增删改:** `mutation`

```js
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
```