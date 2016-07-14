/*
 * @Author: Administrator
 * @Date:   2016-07-13 17:49:35
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-14 15:15:33
 */


import koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './schema'; // 一定要记得用es6的包导入
// import { graphql } from 'graphql';

import bodyParser from 'body-parser';

let app = koa()
let PORT = 3000

app.use(bodyParser.text({ type: 'application/graphql' }))

// app.post('/graphql', (req, res) => {
//     graphql(schema, req.body)
//         .then((result) => {
//             res.send(JSON.stringify(result, null, 2));
//         });

// });

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphql: true
})))


let server = app.listen(PORT, function() {
    let host = server.address().address
    let port = server.address().port

    console.log('listening at http://%s:%s ', host, port);
})
