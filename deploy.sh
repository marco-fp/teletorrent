#!/bin/bash

sudo apt-get update
wget https://releases.hashicorp.com/vagrant/1.8.7/vagrant_1.8.7_x86_64.deb
sudo dpkg -i vagrant_1.8.7_x86_64.deb
vagrant plugin install vagrant-azure
sudo apt-get install ansible
sudo vagrant up --provider=azure
sudo apt-get install -y python-pip
sudo pip install --upgrade pip
sudo pip install fabric
