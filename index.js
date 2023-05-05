import { existsSync, readdir } from 'node:fs'
import { resolve, isAbsolute } from 'node:path'

import { readFile } from 'node:fs/promises'

// mdLinks resive dos parametros
// devuelve una promesa
// resolve callback
// reject

const path = './';
// **********************//
// La ruta es absoluta ? //
// **********************//
export const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
// existsSync del módulo fs de Node.js. La función existsSync devuelve true si la ruta existe y false si no existe.
      console.log('"Ruta que entro"', path);
      console.log('"Estado de la ruta"', existsSync(path));
// si la ruta no existe, arroja el mensaje que esta en reject
    if (!existsSync(path)) {
      reject('La ruta no existe');
    } else {
    console.log('La ruta si existe!')
//(isAbsolute si la ruta es absoluta), en caso de que la ruta sea relativa se resuelve con el resolve
    if (isAbsolute(path)) {
      return path;
    } else {
     resolve(path)
     console.log('Ruta en "resolve"', path);
    }}
  });
};

// ******************************************************************  //
// readdir con el forEach lee todos los archivos dentro del directorio //
// en este caso esta leyendo los archivos que terminan .md             //
// ******************************************************************  //

readdir('./', (error, archivos) => {
  archivos.forEach(archivo => {
    console.log('Todos los archivos del directorio: ', archivo);    
  });
  const archivosMd = archivos.filter(archivo => archivo.endsWith('.md'));
  console.log('Archivos que terminan en .md: ', archivosMd);
});





// falta entrar en el archivo .md y extraer los link 
// Para leer el contenido del archivo .md (se coloca utf para convertir el contenido y sea pueda entender)

 readFile ('nombre del archivo', 'utf-8', (error, data) =>{
   if (!error) {
     console.log(data);
   }else {
     console.log('error: ${error}');
   }
 });






mdLinks(path, "options") // consumiendo la promesa
.then(result => console.log('Resultado en index: ', result))
.catch(error => console.log('error en index: ', error))

