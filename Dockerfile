ARG BOT_TOKEN=EMPTY

ENC BOT_TOKEN=$BOT_TOKEN

FROM ubuntu:16.04
MAINTAINER Marco Manuel Fernández Pranno <mfernandezpranno@gmail.com>


RUN apt-get -y update
RUN apt-get install -y build-essential
RUN apt-get install -y git
RUN apt-get install -y mongodb-org
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g

RUN sudo git clone https://github.com/MarFerPra/teletorrent
RUN cd teletorrent/
RUN make install
