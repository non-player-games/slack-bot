#!/bin/bash

docker build --rm=true -t npg-slackbot .

docker run --env-file ./.env npg-slackbot
