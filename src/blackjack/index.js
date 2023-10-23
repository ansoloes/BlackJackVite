import _ from 'underscore';
import {crearDeck, pedirCarta, valorCarta, crearCartaHTML, turnoComputadora, determinarGanador} from './usecases/app.js'


// * Referencias
let deck = [],
    puntosJugador = 0;

const tipos = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];


// * Referencias al DOM
const btnReinicio = document.querySelector('#btn-reinicio'),
      btnCartas = document.querySelector('#btn-cartas'),
      btnDetener = document.querySelector('#btn-detener');

const ptsHTML = document.querySelectorAll('span'),
      contenedorCartas = document.querySelectorAll('.contenedor-cartas');

const modal = document.querySelector('#modal'),
      mensajeModal = document.querySelector('#mensaje-modal'),
      btnCerrarModal = document.querySelector('#btn-cerrar-modal');


deck = crearDeck(tipos, especiales);


// * Eventos
// Pedir carta, sumar puntos y determinar si el jugador ganó o perdió
btnCartas.addEventListener('click', () => {
  const carta = pedirCarta(deck);

  puntosJugador = puntosJugador + valorCarta(carta);
  ptsHTML[0].innerHTML = `${puntosJugador} pts.`;

  const imgCarta = crearCartaHTML(carta)
  contenedorCartas[0].appendChild(imgCarta);

  if (puntosJugador > 21) {
    btnCartas.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, ptsHTML, contenedorCartas, modal, mensajeModal, btnCerrarModal, deck);

  } else if (puntosJugador === 21) {
    btnCartas.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, ptsHTML, contenedorCartas, modal, mensajeModal, btnCerrarModal, deck)
  }

});

// Detener la ejecución del programa
btnDetener.addEventListener('click', () => {
  btnCartas.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador, ptsHTML, contenedorCartas, modal, mensajeModal, btnCerrarModal, deck);
})

// Nuevo juego
btnReinicio.addEventListener('click', () => {
  console.clear;
  deck = crearDeck(tipos, especiales);
  puntosJugador = 0;

  ptsHTML.forEach((elemento) => elemento.innerHTML = 0 + ' pts.');
  contenedorCartas.forEach((elemento) => elemento.innerHTML = '');

  btnCartas.disabled = false;
  btnDetener.disabled = false;

  modal.classList = 'cerrar-modal';
});

