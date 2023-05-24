import { existsSync, readdir, readdirSync } from "node:fs";
//import { resolve, isAbsolute } from 'node:pathUser'
import fs from "fs/promises";
import path from "path";
import axios from "axios";
import { promises } from "node:dns";
import { archivosMd, pathUser, readFilePromise, searchLinks } from './export.js';




// *************************************************//
// const mdLinks que se usara mas adelante en CLI   //
// ************************************************//
export const mdLinks = (pathUser, options) => {
  return new Promise((resolve, reject) => {
    // existsSync del módulo fs de Node.js. La función existsSync devuelve true si la ruta existe y false si no existe.
    console.log('"Ruta que entro"', pathUser);
    console.log('"Estado de la ruta"', existsSync(pathUser));
    // si la ruta no existe, arroja el mensaje que esta en reject
    if (!existsSync(pathUser)) {
      reject("La ruta no existe");
    } else {
      console.log("La ruta si existe!");
      //(isAbsolute si la ruta es absoluta), en caso de que la ruta sea relativa se resuelve con el resolve
      if (path.isAbsolute(pathUser)) {
        return pathUser;
      } else {
        resolve(path.resolve(pathUser));
      //console.log('Ruta en "resolve"', path.resolve(pathUser));
      }
    }
  });
};


// ****************************************//
// se usa axios para hacer la peticion     //
// ****************************************//
readFilePromise(archivosMd[0])
  .then((data) => {
    console.log(data);
    const links = searchLinks(data, archivosMd[0]);
    var resultados = [];
   // console.log(links);
    links.map((link) => {
      //console.log(link.href);
      axios
        .get(link.href)
        .then((resp) => {
          console.log(resp.status);
          resultados.push({ ...link, status: resp.status, ok: "ok" });
          console.log('*****', resultados);
        })
        .catch((error) => {
          console.log(error.response.status);
          resultados.push({ ...link, status: error.response.status, ok: "fail".ok });
        });
    });
    
    console.log(resultados);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });




mdLinks(pathUser, "options") // consumiendo la promesa
  .then((result) => console.log("Resultado en index: ", result))
  .catch((error) => console.log("error en index: ", error));
