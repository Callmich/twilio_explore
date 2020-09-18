require('dotenv').config()

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    let txtMessage = req.body.Body
    let lowerCaseTxt = txtMessage.toLowerCase()

    if (lowerCaseTxt == "code"){
        twiml.message('Thank you so much for joining me on this Choose Your Own Code Review Adventure!\n Please check out my intro: https://www.youtube.com/watch?v=lRphR1oIVmA \n Text 1 for the menu')
    }else if (lowerCaseTxt == '1'){
        twiml.message("Menu: \n 1 - Menu (seems a bit recursive to choose this) \n 2 - What is StoryBoard? \n 3 - Design and Planning \n 4- Migrations, Seeding, and Server \n 5 - Routers \n 6 - Middle-Ware \n 7 - Shared Functions \n 8 - Documentation \n 9 - Testing \n 10 - The Next Steps \n 11 - About Me")
    }else {
        twiml.message("That is not the magic word")
    }
    

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(process.env.PORT, () => {
    console.log("Express server listening on port", process.env.PORT)
})