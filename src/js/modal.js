export function initModals() {
    // Rendi le funzioni disponibili globalmente
    window.openModal = openModal;
    window.closeModals = closeModals;

    // Aggiungi event listener ai pulsanti di chiusura
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModals();
        });
    });

    // Chiudi i modal quando si clicca fuori
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-container')) {
            closeModals();
        }
    });

    // Chiudi i modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
        }
    });

    // Inizializza gli eventi per le immagini
    document.querySelectorAll('.bolt-screenshot').forEach(img => {
        img.addEventListener('click', (e) => {
            openImageViewer(e.target.src, e.target.nextElementSibling.textContent);
        });
    });

    document.querySelectorAll('.modal-screenshot').forEach(img => {
        img.addEventListener('click', (e) => {
            openImageViewer(e.target.src, e.target.nextElementSibling.textContent);
        });
    });
}

export function openModal(modalId) {
    const container = document.getElementById('modals-container');
    const modal = document.getElementById(modalId);
    
    if (container && modal) {
        // Precarica le immagini se è il modal di Bolt
        if (modalId === 'bolt-modal') {
            const images = modal.querySelectorAll('.bolt-screenshot');
            images.forEach(img => {
                if (!img.complete) {
                    img.style.opacity = '0';
                    img.onload = () => {
                        img.style.opacity = '1';
                        img.style.transition = 'opacity 0.3s ease';
                    };
                }
            });
        }
        
        container.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

export function closeModals() {
    const container = document.getElementById('modals-container');
    const modals = document.querySelectorAll('.modal');
    
    if (container) {
        container.classList.remove('active');
        modals.forEach(modal => modal.classList.remove('active'));
        document.body.style.overflow = '';
    }
}

export function openModalWithChat(modalId, chatUrl) {
    const container = document.getElementById('modals-container');
    const modal = document.getElementById(modalId);
    
    if (container && modal) {
        // Crea l'iframe per la chat
        const chatFrame = document.createElement('iframe');
        chatFrame.src = chatUrl;
        chatFrame.className = 'chat-frame';
        
        // Trova il contenitore del contenuto
        const modalContent = modal.querySelector('.modal-content');
        const chatContainer = modalContent.querySelector('.chat-container');
        
        if (chatContainer) {
            chatContainer.innerHTML = ''; // Pulisci contenuto esistente
            chatContainer.appendChild(chatFrame);
        }
        
        container.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function openImageViewer(imageSrc, description) {
    const viewer = document.createElement('div');
    viewer.className = 'image-viewer';
    
    viewer.innerHTML = `
        <div class="image-viewer-content">
            <div class="image-container">
                <img src="${imageSrc}" alt="Enlarged view">
            </div>
            <div class="description-container">
                <h3>Dettagli</h3>
                <p>${description}</p>
                <button class="close-viewer">Chiudi</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(viewer);
    document.body.style.overflow = 'hidden';
    
    // Chiusura viewer
    viewer.addEventListener('click', (e) => {
        if (e.target.classList.contains('image-viewer') || 
            e.target.classList.contains('close-viewer')) {
            document.body.removeChild(viewer);
            document.body.style.overflow = '';
        }
    });
} 