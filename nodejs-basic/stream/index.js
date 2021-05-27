// TODO :
// Buatlah program untuk membaca teks 'input.txt' dan menuliskannya ulang pada berkas output.txt
// Menggunakan teknik Readable Stream dan teknik Writable STream.

const fs = require('fs');
const {resolve} = require('path');

const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});
const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

// readableStream.on('readable', () =>{
//     try{
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error){
//         // Catch the error
//     }
// });

readableStream.on('readable', () => {
    try{
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error){
        // Catch Error
    }
})

readableStream.on('end', () => {
    console.log('Done');
});


