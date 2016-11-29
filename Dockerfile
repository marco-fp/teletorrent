FROM ubuntu:xenial

MAINTAINER Marco Manuel Fernández Pranno <mfernandezpranno@gmail.com>

ARG BOT_TOKEN=EMPTY

ENV BOT_TOKEN=$BOT_TOKEN

RUN apt-get -y update
RUN apt-get install -y build-essential
RUN apt-get install -y git

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org

RUN apt-get install -y nodejs 
RUN apt-get install -y npm
RUN npm install npm@latest -g

RUN sudo git clone https://github.com/MarFerPra/teletorrent
RUN cd teletorrent/
RUN make install
