var fs = require('fs');
var Bot = require('slackbots');

'use strict';

var apiKey = fs.readFileSync('slackapi.key', 'utf8').trim();
var settings = {
  token: apiKey,
  name: 'lopez'
};

var bot = new Bot(settings);

bot.on('start', function() {
  bot.postMessageToChannel('bot-sandbox', 'Buenos dias. Mi llamo Lopez');
});
