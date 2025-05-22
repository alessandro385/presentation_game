import { createSnowEffect } from './snowEffect';
import { initModals } from './modal.js';

// Inizializza l'effetto neve
createSnowEffect();

// Gestione smooth scroll per il pulsante CTA
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const gameSection = document.querySelector('#game-section');
    gameSection.scrollIntoView({ behavior: 'smooth' });
});

// La funzione initGame() e la sua chiamata verranno rimosse
// perché ora la logica di caricamento del gioco è gestita nello script inline di index.html

// Inizializza gli altri componenti quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    createSnowEffect();
    initModals();
    // initGame(); // Rimossa
});

// Gestione della visibilità della pagina
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Gioco in pausa');
    } else {
        console.log('Gioco ripreso');
    }
}); 