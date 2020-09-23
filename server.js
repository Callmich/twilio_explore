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
      "Thank you so much for joining me on this Choose Your Own Code Review!\nPlease check out my intro: https://youtu.be/5Luw_VfW25E \nText 1 for the menu... or try to make a guess to find the secret menu."
    );
  } else if (lowerCaseTxt == "1") {
    twiml.message(
      "Menu: \n1 - Menu (seems a bit recursive) \n2 - What is StoryBoard? \n3 - Design and Planning \n4- Migrations, Seeding, and Server \n5 - Routers \n6 - Middleware \n7 - Shared Functions \n8 - Documentation \n9 - Testing \n10 - The Next Steps \n11 - About Me"
    );
  } else if (lowerCaseTxt == "2") {
    twiml.message("What is StoryBoard? \nhttps://youtu.be/CwgIIxQRxMo \nHear a little bit of how this project started.");
  } else if (lowerCaseTxt == "3") {
    twiml.message("Design and Planning: \nhttps://youtu.be/6_CTf5ZSccw \nDo you like database design? I do!");
  } else if (lowerCaseTxt == "4") {
    twiml.message("Migrations, Seeding, and Server: \nhttps://youtu.be/38wDX84ZWVo \nA look into how the design was implemented.");
  } else if (lowerCaseTxt == "5") {
    twiml.message("A Look at the Routers: \nhttps://youtu.be/rMie6X3tllk \nHere's where we start cooking with gas!");
  } else if (lowerCaseTxt == "6") {
    twiml.message("Middleware: \nhttps://youtu.be/CR462IrIUEg \nIt's easier to catch errors at the start.");
  } else if (lowerCaseTxt == "7") {
    twiml.message("Shared Functions: \nhttps://youtu.be/mRGok8xSWVw \nMy favorite part of the code!");
  } else if (lowerCaseTxt == "8") {
    twiml.message("Documentation: \nhttps://youtu.be/ow8mxgmvUgA \nOne of the most important steps!");
  } else if (lowerCaseTxt == "9") {
    twiml.message("Testing: \nhttps://youtu.be/v8XhsUzHbQ0 \nTesting is key!");
  } else if (lowerCaseTxt == "10") {
    twiml.message("What Are the Next Steps? \nhttps://youtu.be/mAPKGvEJPYA \nIt's important to have a roadmap for the future.");
  } else if (lowerCaseTxt == "11") {
    twiml.message("About Me: \nhttps://youtu.be/1ZjRujVgKuY \nA bit about myself and my story.");
  } else if (lowerCaseTxt == "?") {
    twiml.message(
      "Answer either of these riddles to gain access to the Secret Menu: \nIf you have it, you want to share it, but if you share it, it no longer exists. What is it? \nWhich Wonderful Company Draws the Owl?"
    );
  }
  // If you want the riddles and secret passwords spoiled then read on
  else if (lowerCaseTxt == "twilio" || lowerCaseTxt == "secret") {
    twiml.message(
      "The SECRET Menu! \nInception - A code review of the code that is being used right now? That's wild! \nBloopers - Video recording and editing are hard. \n27 or 72 - My favorite numbers! Here is a bunch of other stuff I enjoy!"
    );
  } else if (lowerCaseTxt == "inception") {
    twiml.message("LOUD INCEPTION NOISE! \nhttps://youtu.be/TZtOZk7Jg_g");
  } else if (lowerCaseTxt == "bloopers") {
    twiml.message("If you can't laugh at yourself, then you're doing life wrong! \nhttps://youtu.be/mwyoDxkpBYU");
  } else if (
    lowerCaseTxt == "27" ||
    lowerCaseTxt == "72" ||
    lowerCaseTxt == "27 or 72"
  ) {
    twiml.message("That is One of My Favorite Numbers!\nHere are some of my other favorite things:\nSports Teams: https://youtu.be/b7nZ8PodIbQ \nPodcast: Campaign:Skyjacks \nBook I'm Reading: The Road from Raqqa By Jordan Conn \nBoard Game: Burgle Bros");
  } else {
    twiml.message(
      "That is not a magic word! \nText 1 for the Menu ... if you're looking for the SECRET Menu then text ? for a couple of riddles to point you in the right direction."
    );
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(process.env.PORT, () => {
  console.log("Express server listening on port", process.env.PORT);
});
