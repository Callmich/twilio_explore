require("dotenv").config();

const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  // The below will make sure that case does not matter for incomming messages
  let txtMessage = req.body.Body;
  let lowerCaseTxt = txtMessage.toLowerCase();

  // A long set of if/else if statements to make sure our bases are covered on any potential incoming text. They also have links to the needed videos
  if (lowerCaseTxt == "code") {
    twiml.message(
      "Thank you so much for joining me on this Choose Your Own Code Review Adventure!\nPlease check out my intro: https://www.youtube.com/watch?v=lRphR1oIVmA \nText 1 for the menu"
    );
  } else if (lowerCaseTxt == "1") {
    twiml.message(
      "Menu: \n1 - Menu (seems a bit recursive to choose this) \n2 - What is StoryBoard? \n3 - Design and Planning \n4- Migrations, Seeding, and Server \n5 - Routers \n6 - Middle-Ware \n7 - Shared Functions \n8 - Documentation \n9 - Testing \n10 - The Next Steps \n11 - About Me"
    );
  } else if (lowerCaseTxt == "2") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "3") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "4") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "5") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "6") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "7") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "8") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "9") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "10") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "11") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "?") {
    twiml.message(
      "Answer either of these riddles to gain access to the Secret Menu: \nIf you have it, you want to share it, but if you share it, it no longer exists. What is it? \nWhich wonderful company Draws the Owl?"
    );
  }
  // If you want the riddles and secret passwords spoiled then read on
  else if (lowerCaseTxt == "twilio" || lowerCaseTxt == "secret") {
    twiml.message(
      "You've found the SECRET Menu! \nInception - A code review of the Twilio code that is being used right now? That's wild! \nBloopers - ...yeah, video recording and editing is hard \n27 or 72 - My favorite numbers. So here is a bunch of other stuff I really enjoy"
    );
  } else if (lowerCaseTxt == "inception") {
    twiml.message("Needs to be filled");
  } else if (lowerCaseTxt == "bloopers") {
    twiml.message("Needs to be filled");
  } else if (
    lowerCaseTxt == "27" ||
    lowerCaseTxt == "72" ||
    lowerCaseTxt == "27 or 72"
  ) {
    twiml.message("Needs to be filled");
  } else {
    twiml.message(
      "That is not the magic word \nText 1 for the Menu ... if you're looking for the SECRET Menu then text ? for a couple of riddles that will point you in the right direction."
    );
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(process.env.PORT, () => {
  console.log("Express server listening on port", process.env.PORT);
});
