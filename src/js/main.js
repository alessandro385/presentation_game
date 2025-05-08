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

// Funzione per inizializzare il gioco
function initGame() {
    const gameWrapper = document.querySelector('#gameWrapper');
    
    // Crea l'iframe per il gioco
    const gameIframe = document.createElement('iframe');
    gameIframe.src = 'https://enchanting-pixie-b4c45e.netlify.app';
    gameIframe.style.width = '800px';
    gameIframe.style.height = '800px';
    gameIframe.style.border = 'none';
    gameIframe.style.borderRadius = '5px';
    gameIframe.style.overflow = 'hidden';
    gameIframe.scrolling = 'no';
    
    // Aggiungi l'iframe al wrapper
    gameWrapper.appendChild(gameIframe);
}

// Inizializza il gioco quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    createSnowEffect();
    initModals();
    initGame();
});

// Gestione della visibilità della pagina
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Gioco in pausa');
    } else {
        console.log('Gioco ripreso');
    }
}); 