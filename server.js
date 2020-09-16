require('dotenv').config()

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('Test #2 - Oh, no! Look out behind you!')

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(process.env.SERVER || 4242, () => {
    console.log("Express server listening on port", process.env.SERVER || 4242)
})