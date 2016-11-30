install:
	mkdir -p database && npm install
	
test:
	npm test
	
execute:
	mongod —fork —dbpath /var/lib/mongodb/ —smallfiles —logpath /var/log/mongodb.log —logappend
	node index.js
