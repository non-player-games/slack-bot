const fs = require('fs');
const Bot = require('slackbots');

'use strict';

const apiKey = process.env.SLACK_API_KEY;
const channelName = 'bot-sandbox';
var channelId = null;
const userName = 'lopez';
var userId = null;
const settings = {
  token: apiKey,
  name: userName
};


const bot = new Bot(settings);

bot.getChannel(channelName).then(function(channel){
  channelId = channel.id;
});

bot.getUser(userName).then(function(user){
  console.log(user);
  userId = user.id ;
});

bot.on('start', function() {
  console.log('Bot started');
  bot.postMessageToChannel(channelName, 'Buenos dias. Mi llamo Lopez');
});

bot.on('message', function(message) {
  // all ingoing events https://api.slack.com/rtm
  if(message.type === 'message' && message.channel === channelId){
    console.log(message);

    var calledByName = message.text.indexOf(userId) > -1; 
    var msgHelp = message.text.indexOf('help') > -1; 
    var msgTime = message.text.indexOf('what time is it') > - 1;
    if(calledByName){
      if(msgHelp){
        var outMsg = "Soy Lopez. Que necesitas?";
        bot.postMessageToChannel(channelName, outMsg); 
      }
      else if(msgTime){
        var time = new Date();
        var outMsg = "it is " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(); 
        bot.postMessageToChannel(channelName, outMsg); 
      }
    }
    var msgJustDoIt = message.text.indexOf('should do it') > -1;
    if(msgJustDoIt){
      var outMsg = "JUST DO IT";
      bot.postMessageToChannel(channelName, outMsg); 
    }
  }
});


//sync.fiber(function() {
//  var channelObj = callAPI('channels.join', {name: 'botland'}).channel;
//  channelId = channelObj.id;
//  console.log('Channel ' + channelId);
//  bot.connect();
//});
