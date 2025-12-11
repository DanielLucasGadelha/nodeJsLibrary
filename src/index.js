const fs = require('fs');
const dealErrors = require('./Erros/funcoesErro');
const pathFile = process.argv; 
const link = pathFile[2];

fs.readFile(link, 'utf8', (err, text) => {
try {
        if (err) throw err
        countWords(text);
} catch(err) {
        dealErrors(err);
}
})

function countWords(text) {
        const paragraphs = extractParagraphs(text)
        const count = paragraphs.flatMap((paragraph) => {
        if(!paragraph) return [];
        return verifyTwicedWords(paragraph);
       })
       console.log(count)
}

function extractParagraphs(text) {
     return  text.toLowerCase().split('\n');   
}

function cleanWords(word){
        return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

}

function verifyTwicedWords(text) {
        const wordsArray = text.split(' ');
        const results = {};
        wordsArray.forEach(word => {
                if (word.length >= 3){
                const cleanedWords = cleanWords(word)
                results[cleanedWords] = (results[cleanedWords] || 0) + 1;
                }
        })
        return results;
}
