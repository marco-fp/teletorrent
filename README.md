# Teletorrent Documentation

[![Build Status](https://travis-ci.org/MarFerPra/teletorrent.svg?branch=dev)](https://travis-ci.org/MarFerPra/teletorrent) [![Telegram.me](http://lelb.net/wp-content/uploads/2016/01/telegram-icon-e1453881760594.png)](https://telegram.me/share/url?url=teletorrent_bot)
[Deployment](http://teletorrent.herokuapp.com)
[![Docker](https://camo.githubusercontent.com/8a4737bc02fcfeb36a2d7cfb9d3e886e9baf37ad/687474703a2f2f693632382e70686f746f6275636b65742e636f6d2f616c62756d732f7575362f726f6d696c67696c646f2f646f636b657269636f6e5f7a7073776a3369667772772e706e67)](https://hub.docker.com/r/marcofp/teletorrent-bot/)  

### Docker containers testing environment

First of all, consider taking a look at the Dockerfile contents in order to understand the container initialization:

```
FROM ubuntu:16.04

MAINTAINER Marco Manuel Fernández Pranno <mfernandezpranno@gmail.com>

ARG BOT_TOKEN
ARG DB_URL

ENV BOT_TOKEN=$BOT_TOKEN
ENV DB_URL=$DB_URL

RUN apt-get -y update
RUN apt-get install -y build-essential
RUN apt-get install -y git

RUN apt-get update

RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install npm@latest -g
RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN git clone https://github.com/MarFerPra/teletorrent
RUN cd teletorrent/
RUN mkdir -p database
RUN npm install --silent

```

If you don't have an account on [DockerHub](https://hub.docker.com/), I strongly recommend you to create one.  
As seen on the image, Teletorrent has automatic builds enabled on DockerHub:

![DockerHubBuilds](http://i1268.photobucket.com/albums/jj576/marcofp0/IV%20P4/docker-img_zpsjmo2jjen.png)  

To download the container use the order: `sudo docker pull marcofp/teletorrent-bot`
And to run the container with its proper enviroment variables use:

`sudo docker run -e "BOT_TOKEN=<bot_token_here>" -e "DB_URL=<mongoDB_URL_here>" -i -t marcofp/teletorrent-bot /bin/bash`  

Adding your own remote database url (with its user and password) and your bot token.  

After that, you should be able to run the project using: `cd teletorrent-bot && npm start`

If you encounter any issue, please make sure to run `npm install` to set up the dependencies properly before running.
