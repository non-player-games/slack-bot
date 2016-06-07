#!/bin/bash

appId=$(docker ps | egrep  'npg-slackbot' | awk '{print $1}')
echo "shutting down npg-slackbot app"
docker stop ${appId}
