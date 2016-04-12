const fs = require('fs');
const Bot = require('slackbots');

'use strict';

const apiKey = process.env.SLACK_API_KEY;
const settings = {
  token: apiKey,
  name: 'lopez'
};

const bot = new Bot(settings);

bot.on('start', function() {
  console.log('Bot started');
  bot.postMessageToChannel('bot-sandbox', 'Buenos dias. Mi llamo Lopez -- eric');
});
