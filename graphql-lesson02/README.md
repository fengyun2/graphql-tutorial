##Usage:

```shell
npm run nodemon
```

###curl方式:

**post: 请求**

```shell

#查询 query

# RootQueryType -> scehma下 GraphQLObjectType的 name
curl -XPOST -H "Content-Type:application/graphql" -d 'query RootQueryType {count}' http://localhost:3000/graphql

curl -XPOST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description} }}}' http://localhost:3000/graphql

# 增删改 mutation
curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation RootMutationType { updateCount }' http://localhost:3000/graphql
```

**get: 请求**

注意: `-g` 参数去掉curl的解析(因为url中包含了curl不能解析字符串, 但是是合法的 uri)

```shell
curl -g "http://localhost:3000/graphql?query={count}"
```
