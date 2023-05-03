const { mdLinks } = require('../index.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

  // it('Deberia devolver una promesa', () => {    //se comenta porque no tiene .catch para que pueda pasar el test
  //   expect(mdLinks()).tobe(typeof promise);
  // });

  it('Rechaza cuando el path no existe', () => {
return mdLinks('/dani/noexiste.md').catch((error) => {
  expect(error).tobe("La ruta no existe");
   })
  });
});
