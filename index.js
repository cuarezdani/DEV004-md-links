import { existsSync, readdir, readdirSync } from "node:fs";
//import { resolve, isAbsolute } from 'node:pathUser'
import fs from "fs/promises";
import path from "path";
import axios from "axios";
import { promises } from "node:dns";
import {
 // archivosMd,
  pathUser,
  readFilePromise,
  searchLinks,
} from "./export.js";

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
     let pathFile = "";
      if (path.isAbsolute(pathUser)) {
        pathFile = pathUser;
      } else {
        pathFile = path.resolve(pathUser);
        //console.log('Ruta en "resolve"', path.resolve(pathUser));
      }
      // ****************************************//
      // se usa axios para hacer la peticion     //
      // ****************************************//
      readFilePromise(pathFile) //se pasa archivosMd[0] como argumento
        .then((data) => {
          // se ejecutara cuando la promesa de readFilePromise se resuelva correctamente
          //console.log('contenido', data);
          const links = searchLinks(data, pathFile); // data y archivosMd[0] argumentos
          let resultados = [];
          // console.log(links);
          links.map((link) => {
            //console.log(link.href);
            axios
              .get(link.href) // Realiza una llamada HTTP GET al URL link.href utilizando la biblioteca Axios
              .then((resp) => {
                //se ejecuta cuando la llamada GET a link.href se resuelve correctamente El parámetro resp contiene la respuesta de la solicitud HTTP.
                // console.log(resp.status);
                resultados.push({ ...link, status: resp.status, ok: "ok" });
                //console.log('Links buenos', resultados);
              })
              .catch((error) => {
                //console.log(error.response.status);
                resultados.push({
                  ...link,
                  status: error.response.status,
                  ok: "fail",
                });
                console.log("Links rotos", resultados);
              });
          });
        })
        .catch((err) => {
          console.log(`error: ${err}`);
        });
    }
  });
};

mdLinks(pathUser, "options") // consumiendo la promesa
  .then((result) => console.log("Resultado en index: ", result))
  .catch((error) => console.log("error en index: ", error));
