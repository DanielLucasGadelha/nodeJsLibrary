const fs = require('fs');

const pathFile = process.argv; 
const link = pathFile[2];

fs.readFile(link, 'utf8', (err, text) => {
        breakInToParagraphs(text);
        //verifyTwicedWords(text);
});

// Creat an array with words
//count the ocorrences of each word
//make an object with the results

function breakInToParagraphs(text) {
       const paragraphs = text
       .toLowerCase()
       .split('\n');
       const count = paragraphs.map((paragraph) => {
        return verifyTwicedWords(paragraph);
       })
       console.log(count)
}

function verifyTwicedWords(text) {
        const wordsArray = text.split(' ');
        const results = {};
        wordsArray.forEach(word => {
                results[word] = (results[word] || 0) + 1;
        })
        return results;
}
