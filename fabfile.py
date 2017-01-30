from fabric.api import *
import os

env.host = ['marco:22']

def start():
    with shell_env(BOT_TOKEN=os.environ['BOT_TOKEN'], DB_PASSWORD=os.environ['DB_PASSWORD'], DB_USER=os.environ['DB_USER'], NODE_ENV=os.environ['NODE_ENV']):
        run ('cd teletorrent && npm start')

def start_background():
    with shell_env(BOT_TOKEN=os.environ['BOT_TOKEN'], DB_PASSWORD=os.environ['DB_PASSWORD'], DB_USER=os.environ['DB_USER'], NODE_ENV=os.environ['NODE_ENV']):
        run ('cd teletorrent && npm start &')

def clone():
    run ('sudo rm -rf teletorrent')
    run ('sudo git clone https://github.com/MarFerPra/teletorrent')

def remove():
    run ('sudo rm -rf teletorrent')

def test():
    run ('cd teletorrent && sudo npm test')

def install_dependencies():
    run ('(cd teletorrent && sudo npm install --silent) || sudo npm install --silent')

def setup_node():
    run ('sudo apt-get remove -y --purge nodejs')
    run ('curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -')
    run ('sudo apt-get install -y nodejs')
    run ('sudo npm install npm@latest -g')

def ping():
    run('echo Ping_received')
