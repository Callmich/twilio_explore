# An Interactive Code Review!?!

### My name is Michael Callahan
[GitHub](https://github.com/Callmich) | [LinkedIn](https://www.linkedin.com/in/michael-callahan-webdev/)

## Hello and Welcome!
To see the interactive code review in action - text Code to (430)259-2418. You'll be presented with a link to an intro video.<br/> 
Text 1 to see the menu of different walkthroughs for my code in [StoryBoard](https://github.com/Callmich/storyboard)

### How Did This Come About?
While I was putting together a 5 minute video of a code review of my StoryBoard Back-End - I felt there was so much more code I wanted to talk through and show off. I realized that I could use Twilio's SMS API to create a program that would give users the ability to dig into any aspect they were interested in seeing - rather than just a quick trip through its highlights.

I hope you enjoy it as much as I enjoyed putting it together.

### Tech/Languages Used:
Twilio's SMS API | Node.js | YouTube

### Plans Moving Forward:
I'll be updating the wording of the texts being sent and also finishing up the items in the SECRET MENU. Lastly, I'll be investigating different ways to approach the large if/else if statement in the server.js. I'd like to be able to clean that up and make it a tad easier to read.

### Build Instructions for a LocalHost:
1. Clone the repository: `git clone https://github.com/Callmich/twilio_explore`
2. Make sure you have a Twilio Account
3. Navigate to the directory: `cd twilio_explore`
4. Install the necessary dependencies: `npm install`
5. Add a .env file with the needed information (bellow)
6. Start the server with `npm start`

In all honesty - if this will be your first time using Twilio - check out their docs and guides. They are very straight forward and the best way to start! [Link](https://www.twilio.com/docs/sms)

### Information Needed in the .env File:
`AUTH_TOKEN = "Your Twilio Authentication Number"`<br/>
`ACCOUNT = "Your Twilio Account Number"`<br/>
`SEND_NUM = "+Your Twilio Phone Number"`<br/>
`REC_NUM = "+Your Phone Number"`<br/>
`PORT = "A LocalHost Port of your Choosing"`<br/>


### Feedback:
Do you have any suggestions for refactoring the code or additional features you'd like to see implemented? Please feel free to reach out to me on [GitHub](https://github.com/Callmich) or my [LinkedIn](https://www.linkedin.com/in/michael-callahan-webdev/). I'm looking forward to hearing from you and talking code! 

### Thanks:
A big thanks to the Twilio customer service rep I spoke with when running into issues deploying (thanks, Dom!). Plus a big thanks to my friends that helped run some manual testing. 