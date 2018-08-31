#!/usr/bin/env node

// console.log("Hola Mundo!");


console.log(process.argv);
// NO ESTA FUNCIONANDO TODAVIA!!!


const fs = require('fs');

// Con esta función se lee el Readme.md
const readmd = (callback) => {
  fs.readFile('./README.md', 'utf8', (err, data) =>{
    if(err){
      console.log('error')
    }else { 
      callback(data);
    }
  })
}



readmd();

module.exports = readmd;









// TALLER DE JONH

// readmd( callBack = data => console.log(data));

// fs.watch('./', (eventType, fileName) => {
//     console.log('tipo de evento' + eventType);
//     if(fileName){
//       console.log('En el archivo:' + fileName)
//     } else {
//       console.log('no tienes cambios en archivos')
//     }
// })

// const data = fs.readFileSync('./README.md', 'utf8');

// exports = countLine = function (err, data) {
//   if(err){
//     console.log('No tienes README.md')
//   } else { 
//     let lines = data.split('\n').length
//     console.log(' El archivo tiene: ' + lines + ' lineas');
//     return ' El archivo tiene: ' + lines + ' lineas'

//   }
// }

// fs.readFile('./README.md', 'utf8', countLine);