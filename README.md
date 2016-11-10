# Teletorrent

[![Build Status](https://travis-ci.org/MarFerPra/teletorrent.svg?branch=dev)](https://travis-ci.org/MarFerPra/teletorrent) [![Telegram.me](http://lelb.net/wp-content/uploads/2016/01/telegram-icon-e1453881760594.png)](https://telegram.me/share/url?url=teletorrent_bot)
[Deployment](http://teletorrent.herokuapp.com)

Telegram bot that allows you to add and manage torrents on your computer, remotely.

This project is being developed using [Node.js](https://nodejs.org/en/), [Node telegram bot API](https://github.com/yagop/node-telegram-bot-api) and [Node-transmission](https://github.com/FLYBYME/node-transmission).

Using the latter to manage the torrents from the server application, answers petitions from any authorized Telegram client. (Would be really cool to develop an Electron client to connect to it too)

The main objective of the project besides the functionality itself is to learn the proper way to work using DevOps concepts and how to successfully deploy and manage the service running on a cloud server.

## Services

Teletorrent is be deployed on a cloud server on Heroku, and communicate with Telegram's bot API services to interact with the users. During development it's features are being tested using a CI tool, following TDD practices.

For CI I'm currently using [Travis CI](https://travis-ci.org/MarFerPra/teletorrent), and launching the tests with mocha (using chai and supertest packages).
At the moment, only response tests are written. I'm trying to figure out how to properly emulate a conversation with a user to be able to test all functionallity in the most realistic approach.

Last update involved general improvements on code style, adding configuration files for deploying the application and writing a torrentAPI, wrapping all functionality related to communicating with the torrent client.   Using node-transmission Teletorrent is able to manage remotely any instance of transmission running on another machine.

MongoDB is being used to store downloads information, and it's currently deployed on [mLab](https://mlab.com/).

## Deployment

* Fork this repository
* Create account on Heroku and mLab.
* On mLab create a database, along with its user and password.
* On Heroku create the application instance and add the deployment method to Github, using your fork of the project.  
* Optional: Enable automatic deploys and waiting for CI (Travis) to pass before each deploy.
* In Heroku, go to Settings and add the following configuration variables:
  * `BOT_TOKEN : <your_bot_token>`
  * `DB_PASSWORD: <your_db_password>`
  * `DB_USER: <your_db_user>`
  * `NODE_ENV: 'production'` (This may be automatically set, but just to be sure.)

Teletorrent should be deployed and ready work, just make sure to add to `config/transmission.js` your transmission client information to be able to access it.

## Local Installation
First, you need to create a telegram bot using [BotFather](https://telegram.me/botfather):

1. Clone the repository
2. Execute `npm install`

## Usage
1. Execute `BOT_TOKEN=<your_bot_token> npm start`
2. Connect to your bot from any telegram client

## Test
`npm test`

Go to the [project's website](https://marferpra.github.io/teletorrent/) for more info.
