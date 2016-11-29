install:
	mkdir database
	npm install

test:
	npm test

execute:
	mongod --dbpath database &
	node index.js
