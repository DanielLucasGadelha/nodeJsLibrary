import fs from 'fs'
import dealErrors from './Erros/funcoesErro.js';
import { countWords } from './index.js';
import { mountOutputArchive } from './helpers.js';  

const pathFile = process.argv; 
const link = pathFile[2];
const addres = pathFile[3];

fs.readFile(link, 'utf8', (err, text) => {
try {
        if (err) throw err
        const results = countWords(text);
        createAndSaveArchive(results, addres)
} catch(err) {
        dealErrors(err);
}
})

async function createAndSaveArchive(wordsArray, addres){
    const newArchive = `${addres}/resultado.txt`;
    const textWords = mountOutputArchive(wordsArray);
    try {
        await fs.promises.writeFile(newArchive, textWords);
        console.log('Arquivo Criado')
    } catch(err){
        throw err;
    }
}

