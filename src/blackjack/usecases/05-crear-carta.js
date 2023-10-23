/**
 * Esta función crea las cartas que se alojarán dentro de nuestro contenedor
 * @param {String} carta Ejemplo: 2C, 4S o 8D
 * @returns {HTMLImageElement} Retorna la imagen creada
 */

export const crearCartaHTML = (carta) => {
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList = 'carta';

  return imgCarta;
}