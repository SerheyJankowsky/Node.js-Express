const fs = require('fs')

class Cerf{
        key = fs.readSync('key.pem')
        cerf = fs.readSync('cert.pem')
        options = {Key:this.key,Cerf:this.cerf}
}

module.exports = new Cerf()