require('dotenv').config()

const accountSid = process.env.ACCOUNT
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

client.messages
    .create({
        body: 'I am very excitied to see if this works!',
        from: process.env.SEND_NUM,
        to: process.env.REC_NUM
    })