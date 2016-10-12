# Teletorrent
Telegram bot that allows you to add and manage torrents on your computer, remotely.

This project is being developed using [Node.js](https://nodejs.org/en/), [Node telegram bot API](https://github.com/yagop/node-telegram-bot-api) and [Transmission remote CLI](https://github.com/fagga/transmission-remote-cli).

The main objective of the project besides the functionality itself is to learn the proper way to work using DevOps concepts and how to successfully deploy and manage the service running on a cloud server.

## Services

Teletorrent will be deployed on a cloud server, and communicate with Telegram's bot API services to interact with the users. During development it's features will be tested using a CI tool, following TDD practices.

Most probably, those will be [TravisCI](https://travis-ci.org/) for testing and [Amazon Web Services](https://aws.amazon.com/es/) for deployment.


## Installation
First, you need to create a telegram bot using [BotFather](https://telegram.me/botfather):

1. Clone the repository
2. Execute `npm install`

## Usage
1. Execute `BOT_TOKEN=<your_bot_token> npm start`
2. Connect to your bot from any telegram client

Go to the [project's website](https://marferpra.github.io/teletorrent/) for more info.
