const uuid = require('uuid')
const path = require('path')

class FileServices{

     fileSave(file){
        try {

            const filename =uuid.v4() + '.jpg'
            const pathFile = path.resolve('static',filename)
            file.mv(pathFile)
            return filename

        } catch (e) {
            console.log(e)
        }
        
    }

}

module.exports = new FileServices