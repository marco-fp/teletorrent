# Teletorrent

[![Build Status](https://travis-ci.org/MarFerPra/teletorrent.svg?branch=dev)](https://travis-ci.org/MarFerPra/teletorrent)

Telegram bot that allows you to add and manage torrents on your computer, remotely.

This project is being developed using [Node.js](https://nodejs.org/en/), [Node telegram bot API](https://github.com/yagop/node-telegram-bot-api) and [Transmission remote CLI](https://github.com/fagga/transmission-remote-cli).

Using the latter to manage the torrents from the server application, answers petitions from any authorized Telegram client. (Would be really cool to develop an Electron client to connect to it too)

The main objective of the project besides the functionality itself is to learn the proper way to work using DevOps concepts and how to successfully deploy and manage the service running on a cloud server.

## Services

Teletorrent will be deployed on a cloud server, and communicate with Telegram's bot API services to interact with the users. During development it's features will be tested using a CI tool, following TDD practices.

For CI I'm currently using [Travis CI](https://travis-ci.org/MarFerPra/teletorrent), and launching the tests with mocha (using chai and supertest packages). 
At the moment, only response tests are written. I'm trying to figure out how to properly emulate a conversation with a user to be able to test all functionallity in the most realistic approach.

Next objective is adding real torrent-managing options and deploy the application on a cloud platform, this will be almost certainly Openshift or Heroku.

## Installation
First, you need to create a telegram bot using [BotFather](https://telegram.me/botfather):

1. Clone the repository
2. Execute `npm install`

## Usage
1. Execute `BOT_TOKEN=<your_bot_token> npm start`
2. Connect to your bot from any telegram client

## Test
`npm test`

Go to the [project's website](https://marferpra.github.io/teletorrent/) for more info.
