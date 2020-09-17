require('dotenv').config()

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/api/sms', (req, res) => {
    const twiml = new MessagingResponse();

    let txtMessage = req.body.Body
    let lowerCaseTxt = txtMessage.toLowerCase()

    if (lowerCaseTxt == "code"){
        twiml.message('Thank you so much! Please see my intro: https://www.youtube.com/watch?v=lRphR1oIVmA Type 1 for a list of the menu')
    }else if (lowerCaseTxt == '1'){
        twiml.message("Menu: 2 - Backstory 3 - Other stuff 4- Other Other stuff")
    }else {
        twiml.message("That is not the magic word")
    }
    

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(process.env.SERVER || 4242, () => {
    console.log("Express server listening on port", process.env.SERVER || 4242)
})