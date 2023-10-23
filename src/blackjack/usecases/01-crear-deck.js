import _ from 'underscore';

/**
 * Esta función crea el deck con las cartas ordenadas de forma aleatoria
 * @param {Array<String>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un arreglo con sus elementos ordenados de forma aleatoria
 */

 export const crearDeck = (tipos, especiales) => {
  if (!tipos) throw new Error('No estás proporcionando el arreglo "tipos" como argumento');
  if (tipos === 0 ) throw new Error('El arreglo "tipos" no puede estar vacío');
  if (!especiales) throw new Error('No estás proporcionando el arreglo "especiales" como argumento');
  if (especiales === 0 ) throw new Error('El arreglo "especiales" no puede estar vacío');

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let especial of especiales) {
      deck.push(especial + tipo);
    }
  }

  return _.shuffle(deck);
}