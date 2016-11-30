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
#RUN make install
