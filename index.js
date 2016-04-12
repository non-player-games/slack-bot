'use strict';

const fs = require('fs');
const Bot = require('slackbots');
const ping = require('./reactions/ping');

const apiKey = process.env.SLACK_API_KEY;
const settings = {
  token: apiKey,
  name: 'lopez'
};
const params = {
  icon_emoji: ':cat:'
};

const bot = new Bot(settings);

bot.on('close', function() {
  console.log('Bot connection closed');
});

bot.on('open', function() {
  console.log('Bot connection started');

  bot.on('message', function(msg) {
    if (msg.text === 'ping') {
      bot.postMessage(msg.channel, ping(), params);
    }
  });
});

bot.on('start', function() {
  console.log('Bot started');

  bot.postMessageToChannel('bot-sandbox', 'Buenos dias. Mi llamo Lopez');
});
