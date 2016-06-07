#!/bin/bash

docker build --rm=true -t npg-slackbot --build-arg SLACK_API_KEY=${SLACK_API_KEY} .

docker run -d npg-slackbot 
