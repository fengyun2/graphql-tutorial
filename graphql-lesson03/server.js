/*
 * @Author: Administrator
 * @Date:   2016-07-13 17:49:35
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-16 17:34:33
 */


import koa from 'koa'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import Router from 'koa-router'
import schema from './schema' // 一定要记得用es6的包导入
// import { graphql } from 'graphql';

import bodyParser from 'body-parser'

let app = koa()
const router = new Router()
let PORT = 3000

app.use(function* (next) {
  bodyParser.text({ type: 'application/graphql' })
  yield next
  }
)
app
  .use(router.routes())
  .use(router.allowedMethods())

// app.post('/graphql', (req, res) => {
//     graphql(schema, req.body)
//         .then((result) => {
//             res.send(JSON.stringify(result, null, 2));
//         });

// });

// app.use(mount('/graphql', graphqlHTTP({
//   schema: schema,
//   graphql: true
// })))

router.all('/graphql', graphqlHTTP({
  schema: schema,
  graphql: true
}))


let server = app.listen(PORT, function() {
    let host = server.address().address
    let port = server.address().port

    console.log('listening at http://%s:%s ', host, port)
})
