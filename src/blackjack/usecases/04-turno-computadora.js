import {pedirCarta} from './02-pedir-carta'
import {valorCarta} from "./03-valor-carta";
import { crearCartaHTML } from './05-crear-carta';
import {determinarGanador}  from './06-determinar-ganador';

/**
 * Esta función ejecuta el turno de la computadora y determina el ganador
 * @param {Number} puntosMinimos Puntos del jugador
 * @param {Array<HTMLElement>} ptsHTML Referencia a los puntos de ambos elementos
 * @param {Array<HTMLElement>} contenedorCartas Referencia a los lugares donde se alojarán las cartas
 * @param {HTMLElement} modal Referencia al contenedor del mensaje que muestra si el jugador ganó o la computadora
 * @param {HTMLElement} mensajeModal Referencia al mensaje que muestra si el jugador ganó o la computadora
 * @param {HTMLElement} btnCerrarModal Referencia al botón que cierra el modal
 * @param {Array<String>} deck Deck creado en la función "crearDeck"
 */

export const turnoComputadora = (puntosMinimos, ptsHTML, contenedorCartas, modal, mensajeModal, btnCerrarModal, deck = []) => {
  if (!puntosMinimos) throw new Error('No estás proporcionando los puntos mínimos cómo argumento');

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    ptsHTML[1].innerHTML = `${puntosComputadora} pts.`;

    const imgCarta = crearCartaHTML(carta);
    contenedorCartas[1].appendChild(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }

  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

  determinarGanador(puntosMinimos, puntosComputadora, modal, mensajeModal, btnCerrarModal);
}