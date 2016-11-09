var fs = require('fs-extra')
var path = '../tmp/';

module.exports = {
    clear: () => {
        fs.emptyDir('./tmp', function(err) {
            if (!err)
                console.log('success!')
        })
    }
}
