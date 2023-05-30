//import { readdirSync } from "node:fs";
import { readFile } from "node:fs/promises";

//se declara una ruta absoluta
export const pathUser =
  "C:/Users/Admin/Desktop/Dani/Laboratoria_4ta generacion/md_links/DEV004-md-links/Prueba.md";

// *******************************************************************//
// Entra en el directorio y entrega todos los archivos encontrados    //
// *******************************************************************//
// export const archivos = readdirSync(pathUser);
// archivos.map((archivo) => {
//   //console.log("Todos los archivos del directorio: ", archivo);
// });

// ******************************************************//
// Muestra un array de archivos que terminan en .md      //
// ******************************************************//
// export const archivosMd = archivos.filter((archivo) => archivo.endsWith(".md"));
//console.log("+++++", archivosMd);


// ***************************************************//
// entra en el archivo .md y lee su contenido        //
// **************************************************//
export const readFilePromise = (archivoMd) => {
  return new Promise((resolve, reject) => {
    readFile(archivoMd, "utf-8")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(`Error: ${err}`);
      });
  });
};

// **********************************************************************//
// Ubica los links dentro del archivo mediante una expresion regular     //
// *********************************************************************//
export const searchLinks = (data, filename) => { // parametros que recibira data que es la cadena de texto en la que se buscarán los enlaces, y filename, que es el nombre del archivo asociado a los enlaces. 
  const string = data;
  let regex = /(?=\[(!\[.+?\]\(.+?\)|.+?)]\((https:\/\/[^\)]+)\))/g;  // expresion regular 
  const matchResult = [...string.matchAll(regex)];  // busca todas las coincidencias
  let links = matchResult.map((m) => ({
    text: m[1],
    href: m[2],
    file: filename,
  }));
  return links;
};
