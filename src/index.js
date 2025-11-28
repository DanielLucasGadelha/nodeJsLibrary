const fs = require('fs');

const pathFile = process.argv; 
const link = pathFile[2];

fs.readFile(link, 'utf8', (err, data) => {
        console.log(data);
});


