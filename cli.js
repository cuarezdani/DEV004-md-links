#!/usr/bin/env node

import { argv } from "process";
import chalk from "chalk";
import { pathUser } from "./export.js";
import { mdLinks } from "./index.js";

const path = argv[2];
// console.log("******", argv);

const validate = argv.includes("--validate");
//console.log('******', validate);

const stats = argv.includes("--stats");
//console.log('******', stats);

const help = argv.includes("--help");
//console.log('******', help);

const CLI = () => {
  console.log("\n\t");
  console.log(chalk.bold.greenBright("\t\t**************************** Bienvenidos ********************************")
  );
  console.log(chalk.bold.greenBright("\t\t******************* Por favor proporcione una ruta **********************")
  );
  console.log(chalk.bold.greenBright("\t\t******************* o use --help para ver el menú ***********************")
  );
  console.log("\n\t");
  // si no hay path o ruta
//   console.log(argv[2], 30);
  if (argv[2] === undefined) {
    console.log("error debes ingresar una ruta");
  } else if (help) {
    {
      // muestra los pasos a seguir
      console.log(chalk.yellowBright("Uso: md-link <path-to-file> [options]"));
      console.log(chalk.yellowBright("\t--validate          Muestra la ruta, texto del enlace, también con su estado y mensaje (ok o fail))")
      );
      console.log(chalk.yellowBright("\t--stats             Mostrar el texto con estadísticas básicas sobre los enlaces.")
      );
      console.log(chalk.yellowBright("\t--validate --stats  Obtiene las estadísticas que necesita de los resultados de la validación (enlaces totales, únicos y rotos).")
      );
      return;
    }
}
  if (validate && stats) {
    console.log(chalk.bold.cyan(" --- Enlaces!!---\n"));
    mdLinks(path, { validate: true, stats: true })
        .then((stats) => {
            console.log(stats, '*********');
            console.log(chalk.yellowBright(`Total Links: ${stats.total}`));
            console.log(chalk.underline.green(`Unique: ${stats.unique}`));
            console.log(chalk.red(`Broken: ${stats.broken}\n`));
        })
        .catch((e) => {
            console.log(`Error:${chalk.yellowBright(e)}`);
        });
}

//  if (validate && !stats) {
//     console.log(chalk.bold.cyan(" -----Validando links!!-----\n"));
//     mdLinks(path, { validate: true })

//         .then((validLinks) => {
//             validLinks.forEach((infoLink, i) => {
//                 console.log(`------${chalk.yellowBright.bold('Link ' + (i + 1))}------`)
//                 console.log(chalk.blue(`href: ${infoLink.href}`));
//                 console.log(chalk.cyan(`Text: ${infoLink.text.slice(0, 49)}`));
//                 console.log(chalk.cyan(`File: ${infoLink.file}`));
//                 if (infoLink.status == 200 && infoLink.message == 'Ok') {
//                     console.log(chalk.green(`message: ${infoLink.message}`));
//                     console.log(chalk.green(`status: ${infoLink.status}\n`));
//                 }
//                 else {
//                     console.log(chalk.red(`message: ${infoLink.message}`));
//                     console.log(chalk.red(`status: ${infoLink.status}\n`));
//                 }
//             })
//         })
//         .catch((e) => {
//             console.log(`Error:${chalk.yellowBright(e)}`);
//         });
// }

// if (!validate && stats) {
//     mdLinks(path, { validate: false, stats: true })
//         .then((stats) => {
//             console.log(chalk.bold.cyan(" ----- Stats links -----\n"));
//             console.log(chalk.yellowBright(`Total Links: ${stats.total}`));
//             console.log(chalk.underline.blue(`Unique Links: ${stats.unique}\n`));
//         })
//         .catch((e) => {
//             console.log(`Error:${chalk.yellowBright(e)}`);
//         });
// }
}

CLI();
