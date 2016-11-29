

FROM ubuntu:xenial

MAINTAINER Marco Manuel Fernández Pranno <mfernandezpranno@gmail.com>

ARG BOT_TOKEN=EMPTY

ENV BOT_TOKEN=$BOT_TOKEN

RUN apt-get -y update
RUN apt-get install -y build-essential
RUN apt-get install -y git

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list
RUN apt-get update && apt-get install -y mongodb-org

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g

RUN sudo git clone https://github.com/MarFerPra/teletorrent
RUN cd teletorrent/
RUN make install
