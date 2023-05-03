import { existsSync } from 'node:fs'
import { resolve, isAbsolute } from 'node:path'
// mdLinks resive dos parametros
// devuelve una promesa
// resolve callback
// reject



export const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
      console.log(existsSync(path));
    // si la ruta no existe, arroja el mensaje que esta en reject
    if (!existsSync(path)) {
      reject('dont exist path');
      // reject("La ruta no existe");
      // console.log('aqui', path);
    } else {
    console.log('path si existe')
     //isAbsolute si la ruta es absoluta, en caso contrario si es relativa se resuelve con el resolve
    if (isAbsolute(path)) {
      return path;
    } else {
     resolve(path)
    }}
      // Probar si la ruta absoluta es un archivo o un directorio
      // Si es un directorio filtrar los archivos .md

    // else {
      // si no existe la ruta se rechaza la promesa.
      
    //}
  });
};


mdLinks(path, "Probando") // consumiendo la promesa
.then(result => console.log(result))
.catch(error => console.log(error))