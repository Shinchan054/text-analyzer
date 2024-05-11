const fs = require('fs');

// Path to the text file
const filePath = 'test/test.txt'

try {
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    console.log(fileContents.split(/\s+/).length)
}
catch (err) {
    console.log(err)
}




