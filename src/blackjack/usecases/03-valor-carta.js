/**
 * Esta función extrae el valor de la carta tomada en la función "pedirCarta"
 * @param {String} carta Ejemplo: 2C, 4S o 8D
 * @returns {Number} Retorna el valor numérico de la carta
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : parseInt(valor);
}