/*
 * @Author: Administrator
 * @Date:   2016-07-13 17:49:35
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-16 17:46:04
 */


import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema' // 一定要记得用es6的包导入
// import { graphql } from 'graphql'

import bodyParser from 'body-parser'

let app = express()
let PORT = 3000

app.use(bodyParser.text({ type: 'application/graphql' }))

// app.post('/graphql', (req, res) => {
//     graphql(schema, req.body)
//         .then((result) => {
//             res.send(JSON.stringify(result, null, 2))
//         })

// })

app.all('/graphql', graphqlHTTP(request => {
  const startTime = Date.now()
  return {
    schema: schema,
    pretty: true,
    formatError: error => ({message: error.message, locations: error.locations, statck: error.statck, path: error.path})
  }
}))

let server = app.listen(PORT, function() {
    let host = server.address().address
    let port = server.address().port

    console.log('listening at http://%s:%s ', host, port)
})
