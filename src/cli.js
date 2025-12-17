import fs from 'fs'
import path from 'path';
import dealErrors from './Erros/funcoesErro.js';
import { countWords } from './index.js';
import { mountOutputArchive } from './helpers.js';  
import { Command } from 'commander';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --text <string>', 'Caminho do texto a ser processado')
    .option('-d, --destiny <string>', 'PathFile onde salva o arquivo results')
    .action((options) => {
        const {text, destiny} = options; 

        if (!text || !destiny) {
            console.error("erro: favor inserir caminho de origem e destino", error)
            program.help();
            return
        }

        const pathText = path.resolve(text);
        const pathDestiny = path.resolve(destiny);

        try{    
            processArchive(pathText, pathDestiny);
            console.log('Texto processado')
        } catch(err) {
            console.log('error ocurred', err)

        }
    });

    program.parse();
function processArchive(text, destiny) {
fs.readFile(text, 'utf8', (err, text) => {
try {
        if (err) throw err
        const results = countWords(text);
        createAndSaveArchive(results, destiny)
} catch(err) {
        dealErrors(err);
    }
})
}



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

