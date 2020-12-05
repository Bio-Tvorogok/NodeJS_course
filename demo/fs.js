// file System
const fs = require('fs');
const path = require('path');

// const testPath = path.join(__dirname, 'test');
// if (!fs.existsSync(testPath)) {
//     fs.mkdir(testPath, err => {
//         if (err) {
//             throw err;
//         };
    
//         console.log('Folder created');
//     })
// } else {
//     console.log('"test" folder already exist');
// }


const filePath = path.join(__dirname, 'test', 'test.txt');
// fs.appendFile(filePath, 'Hello NodeJS!', err => {
//     if (err) {
//         throw err;
//     }

//     console.log('File Created');
// })

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err;
    }

    console.log('Content: ' + content);
})