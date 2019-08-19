const express = require('express');
const mongosse = require('mongoose')
const routes = require('./routes');
const cors = require('cors');

const server = express();

    mongosse.connect(`mongodb+srv://admin:admin@cluster0-racpx.mongodb.net/ominstack8?retryWrites=true&w=majority`,{
        useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes);

server.listen(3000);