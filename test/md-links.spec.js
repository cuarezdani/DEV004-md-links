import { archivosMd } from "../export.js";


describe('archivos con extensión ".md" se filtran correctamente', () => {
  // Arrange (Preparación)
  const archivos = ['archivo1.md', 'archivo2.js', 'archivo3.md', 'archivo4.txt'];

  // Act (Acción)
   archivosMd = archivosFilter(archivos);

  // Assert (Aserción)
  expect(archivosMd).toEqual(['archivo1.md', 'archivo3.md']);
});




