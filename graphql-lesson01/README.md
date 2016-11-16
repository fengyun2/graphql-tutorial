curl方式:

**post: 请求**

```shell
curl -XPOST -H "Content-Type:application/graphql" -d 'query Query {user(id:"1"){id,name}}' http://localhost:3000/graphql
```

**get: 请求**

注意: `-g` 参数去掉curl的解析(因为url中包含了curl不能解析字符串, 但是是合法的 uri)

```shell
curl -g "http://localhost:3000/graphql?query={user(id:\"1\"){name}}"
```
