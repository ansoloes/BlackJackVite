/**
 * Esta función determina quien fue el ganador
 * @param {Number} puntosMinimos Puntos del jugador
 * @param {Number} puntosComputadora Puntos de la computadora
 * @param {HTMLElement} modal Referencia al contenedor del mensaje que muestra si el jugador ganó o la computadora
 * @param {HTMLElement} mensajeModal Referencia al mensaje que muestra si el jugador ganó o la computadora
 * @param {HTMLElement} btnCerrarModal Referencia al botón que cierra el modal
 */

export const determinarGanador = (puntosMinimos, puntosComputadora, modal, mensajeModal, btnCerrarModal) => {
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      modal.classList = 'modal';
      mensajeModal.innerHTML = '¡Empate! intentalo nuevamente para ganar';

      btnCerrarModal.addEventListener('click', () => {
        modal.classList = 'cerrar-modal';
      });
    } else if (puntosMinimos > 21) {
      modal.classList = 'modal';
      mensajeModal.innerHTML = 'Computadora ha ganado... ¡no te rindas!';

      btnCerrarModal.addEventListener('click', () => {
        modal.classList = 'cerrar-modal';
      });
    } else if (puntosComputadora > 21) {
      modal.classList = 'modal';
      mensajeModal.innerHTML = '¡Ganaste! Prueba tu suerte nuevamente';

      btnCerrarModal.addEventListener('click', () => {
        modal.classList = 'cerrar-modal';
      });
    } else {
      modal.classList = 'modal';
      mensajeModal.innerHTML = 'Computadora ha ganado... ¡no te rindas!';

      btnCerrarModal.addEventListener('click', () => {
        modal.classList = 'cerrar-modal';
      });
    }
  }, 100);
}