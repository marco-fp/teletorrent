from fabric.api import *
import os

env.host = ['marco:22']

def start():
    with shell_env(BOT_TOKEN=os.environ['BOT_TOKEN'], DB_PASSWORD=os.environ['DB_PASSWORD'], DB_USER=os.environ['DB_USER']):
        run ('sudo cd teletorrent && sudo npm start')

def clone():
    run ('sudo rm -rf teletorrent')
    run ('sudo git clone https://github.com/MarFerPra/teletorrent')

def remove():
    run ('sudo rm -rf teletorrent')

def test():
    run ('sudo cd teletorrent && sudo npm test')

def install():
    run ('sudo cd teletorrent && sudo make install')

def ping():
    run('echo Ping_received')
