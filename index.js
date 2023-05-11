import { existsSync, readdir, readdirSync } from 'node:fs'
//import { resolve, isAbsolute } from 'node:pathUser'
import { readFile } from 'node:fs/promises'
import fs from 'fs/promises';
import  path  from 'path';

// mdLinks recibe dos parametros
// devuelve una promesa
// resolve callback
// reject

const pathUser = 'C:/Users/Admin/Desktop/Dani/Laboratoria_4ta generacion/md_links/DEV004-md-links';

// **********************//
// La ruta es absoluta ? //
// **********************//
export const mdLinks = (pathUser, options) => {
    return new Promise((resolve, reject) => {
// existsSync del módulo fs de Node.js. La función existsSync devuelve true si la ruta existe y false si no existe.
      console.log('"Ruta que entro"', pathUser);
      console.log('"Estado de la ruta"', existsSync(pathUser));
// si la ruta no existe, arroja el mensaje que esta en reject
    if (!existsSync(pathUser)) {
      reject('La ruta no existe');
    } else {
    console.log('La ruta si existe!')
//(isAbsolute si la ruta es absoluta), en caso de que la ruta sea relativa se resuelve con el resolve
    if (path.isAbsolute(pathUser)) {
      return pathUser;
    } else {
     resolve(path.resolve(pathUser))
     console.log('Ruta en "resolve"', path.resolve(pathUser));
    }}
  });
};

// ********************************************************************************************//
// *readdir* con el forEach lee todos los archivos dentro del directorio                       //
// en este caso esta leyendo los archivos que terminan .md                                     //
// *endsWith* determinar si una cadena de texto termina con ciertos caracteres especificados   //
// ********************************************************************************************//


const archivos = readdirSync(pathUser);
archivos.map(archivo => {
  //console.log('Todos los archivos del directorio: ', archivo);    
});
const archivosMd = archivos.filter(archivo => archivo.endsWith('.md'));      
//console.log('Archivos que terminan en .md: ', archivosMd);



// *********************************************************************************************************//
// Leer contenido el archivo.md y mostarlo en consola                                                       //
// Para leer el contenido del archivo .md (se coloca utf para convertir el contenido y sea pueda entender)  //
// *********************************************************************************************************//

// readFile ('README.md', 'utf-8', (error, data) =>{
//   if (!error) {
//     console.log('data: ', data);
//   }else {
//     console.log('error: ${error}');
//   }
// });

//const fs = require('fs');

 const readFilePromise = (archivoMd) => {
   return new Promise((resolve, reject) => {
      readFile(archivoMd, 'utf-8')
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
   });
 }
 readFilePromise('README.md')
   .then(data => {
     console.log(data);
   })
   .catch(err => {
     console.log(`error: ${err}`);
   });






mdLinks(pathUser, "options") // consumiendo la promesa
.then(result => console.log('Resultado en index: ', result))
.catch(error => console.log('error en index: ', error))

