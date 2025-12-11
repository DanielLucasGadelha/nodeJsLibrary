function ocorrencyFilters(paragraph) {
   return Object.keys(paragraph).filter(key => paragraph [key] > 1)

}

function mountOutputArchive(wordsArray) {
    let finalText = '';

    wordsArray.forEach((paragraph, index) => {
        const twiced = ocorrencyFilters(paragraph); // retorna um array

        // Se não houver palavras repetidas, ignora esse parágrafo
        if (twiced.length === 0) return;

        // Só adiciona se tiver conteúdo
        finalText += `Repeated words in paragraph ${index + 1}: ${twiced.join(', ')}\n`;
    });

    return finalText;
}



export{ mountOutputArchive}