// TODO: tampilkan teks pada notes.txt pada console.
// Tanpa menggunakan 'module path'
// const FS = require('fs');

// const fileReadCallback = (error, data) => {
//     if(error){
//         console.log('Gagal menampilkan berkas');
//         return;
//     }
//     console.log(data)
// };

// FS.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback);

// TODO: tampilkan teks pada notes.txt pada console.
// Menggunakan 'module path'
const FS = require('fs');
const {resolve} = require ('path');

const fileReadCallback = (error, data) => {
    if(error){
        console.log('Gagal menampilkan berkas');
        return;
    }
    console.log(data)
};

FS.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);