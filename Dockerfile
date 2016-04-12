FROM node:5

MAINTAINER Eric Liao <rcliao01@gmail.com>

# Create app directory
RUN mkdir -p /usr/src/slackbot
WORKDIR /usr/src/slackbot

# Create log directory
RUN mkdir -p /usr/src/slackbot/logs

# Npm install to install dependencies
COPY package.json /usr/src/slackbot
RUN npm install

# Copy source code over
COPY . /usr/src/slackbot

CMD ["node", "index.js"]
