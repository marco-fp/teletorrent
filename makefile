install:
	mkdir -p database && npm install
	
test:
	npm test
	
execute:
	mongod --dbpath database &
	node index.js
