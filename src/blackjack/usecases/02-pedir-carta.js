/**
 * Esta función toma una carta del deck creado en la función "crearDeck"
 * @param {Array<String>} deck Deck creado en la función "crearDeck"
 * @returns {String} Retorna la carta tomada
 */

export const pedirCarta = (deck) => {
  if (!deck) throw new Error('No estás proporcionando el arreglo "deck" como argumento')
  if (deck.length === 0) throw 'No hay cartas en la baraja';

  return deck.pop();
}