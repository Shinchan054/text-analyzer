const fs = require('fs');
const func = require('../services/textServices');

try {
    const filePath = 'test/test.txt'
    let paragraph = 'I live in street.';
    console.log(func.getNumberOfSentences(paragraph));
    console.log(paragraph.split(/[.!?]/g));
}
catch (err) {
    console.log(err)
}
