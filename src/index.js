const fs = require('fs');

const pathFile = process.argv; 
const link = pathFile[2];

fs.readFile(link, 'utf8', (err, text) => {
        verifyTwicedWords(text);
});

// Creat an array with words
//count the ocorrences of each word
//make an object with the results

function verifyTwicedWords(text) {
        const wordsArray = text.split(' ');
        const results = {};
        wordsArray.forEach(word => {
                results[word] = (results[word] || 0) + 1;
        })


}
