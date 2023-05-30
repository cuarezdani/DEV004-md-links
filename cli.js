#!/usr/bin/env node

import { argv } from 'process'
import chalk from 'chalk';
import {pathUser} from './export.js';


const path = argv[2];
console.log('******', path);

const validate = argv.includes('--validate');
console.log('******', validate);

const stats = argv.includes('--stats');
console.log('******', stats);

const help = argv.includes('--help');
console.log('******', help);

const CLI = () => {
    // si no hay path o ruta
    if (argv[2] === undefined) {
      console.log("error debes ingresar una ruta")
      
    } else if (help) {
        {
            // muestra los pasos a seguir
            console.log(chalk('Usage: md-link <path-to-file> [options]'));
            console.log(chalk.green('\t--validate          Muestra la ruta, texto del enlace, también con su estado y mensaje (ok o fail))'));
            console.log(chalk.green('\t--stats             Mostrar el texto con estadísticas básicas sobre los enlaces.'));
            console.log(chalk.green('\t--validate --stats  Obtiene las estadísticas que necesita de los resultados de la validación (enlaces totales, únicos y rotos).'));
            console.log('\n\t');
            return;
        }
             /**---Muestra solo links--- */
    } else if (!validate && !stats) {
        console.log(chalk.bold.cyan(" ------Obteniendo enlaces!! -----\n"));
    }
}



CLI()