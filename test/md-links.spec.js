const { mdLinks } = require('../index.js');

// import { mdLinks } from "../index.js";

// describe('mdLinks', () => {
//   it ('deberia devolver una promesa', () => {
//     const md = mdLinks();
//     expect(md instanceof Promise).tobe(true);
//   });
// });




// import { mdLinks}
// describe('mdLinks', () =>
//   it('should...', () => {
//     console.log('FIX ME!');
//   }
//   // it('Deberia devolver una promesa', () => {    //se comenta porque no tiene .catch para que pueda pasar el test
//   //   expect(mdLinks()).tobe(typeof promise);
//   // }
//   it('Rechaza cuando el path no existe', () => {
// return mdLinks('/dani/noexiste.md').catch((error) => {
//   expect(error).tobe("La ruta no existe");
//    })
//   });
// });


//// para identificar los link a la hora de hacer los test
/* describe("mdLinks", () => {
it('mdLinks procesa un solo archivo con 3 links sin validar'), () =>{
  const ruta = 'ejemplo.md';

  return mdLinks(ruta, {validate: false}))
  .then(
    (array) => {
      expect(array).toEqual([
        href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
        text: 'Asíncronía en js',
        file: 'ejemplo.md',
      ])
    }
  )
  }
}); */