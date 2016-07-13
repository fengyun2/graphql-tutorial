/*
 * @Author: Administrator
 * @Date:   2016-07-13 17:49:35
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-13 18:34:31
 */


import express from 'express';
import schema from './schema'; // 一定要记得用es6的包导入
import { graphql } from 'graphql';

import bodyParser from 'body-parser';

let app = express()
let PORT = 3000

app.use(bodyParser.text({ type: 'application/graphql' }))

app.post('/graphql', (req, res) => {
    graphql(schema, req.body)
        .then((result) => {
            res.send(JSON.stringify(result, null, 2));
        });

});

let server = app.listen(PORT, function() {
    let host = server.address().address
    let port = server.address().port

    console.log('listening at http://%s:%s ', host, port);
})
