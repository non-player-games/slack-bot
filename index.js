'use strict';

const fs = require('fs');
const Bot = require('slackbots');
const ping = require('./reactions/ping');

const apiKey = process.env.SLACK_API_KEY;
const userName = 'lopez';
var userId = null;
const settings = {
  token: apiKey,
  name: userName
};
const params = {
  icon_emoji: ':cat:'
};


const bot = new Bot(settings);

bot.getUser(userName).then(function(user){
  userId = user.id ;
});

bot.on('close', function() {
  console.log('Bot connection closed');
});

bot.on('open', function() {
  console.log('Bot connection started');

  bot.on('message', function(message) {
    if (message.text === 'ping') {
      bot.postMessage(message.channel, ping(), params);
    }
    // all ingoing events https://api.slack.com/rtm
    if(message.type === 'message'){
      var calledByName = message.text.indexOf(userId) > -1;
      var msgHelp = message.text.indexOf('help') > -1;
      var msgTime = message.text.indexOf('what time is it') > - 1;
      if(calledByName){
        if(msgHelp){
          var outMsg = "Soy Lopez. Que necesitas?";
          bot.postMessageToChannel(message.channel, outMsg);
        }
        else if(msgTime){
          var time = new Date();
          var outMsg = "it is " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " UTC";
          bot.postMessageToChannel(message.channel, outMsg);
        }
      }
      var msgJustDoIt = message.text.indexOf('do it') > -1;
      if(msgJustDoIt){
        var outMsg = "http://media.riffsy.com/images/cd1470ea6370fc87a658a8d7e31e1d90/raw";
        bot.postMessageToChannel(message.channel, outMsg);
      }
    }
  });

bot.on('start', function() {
  console.log('Bot started');
  bot.postMessageToChannel('bot-sandbox', 'Buenos dias. Mi llamo Lopez.');
});
