// assets/js/dashboard.js (CORREGIDO Y MEJORADO)
import { supabase } from './database.js';

async function cargarVideojuegos() {
    const container = document.getElementById('videojuegos-container');
    const button = document.getElementById('load-games-button');
    
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Conectando con Supabase...';
    
    const { data, error } = await supabase
        .from('videojuegos')
        .select('titulo, descripcion, desarrollador, año_lanzamiento');

    if (error) {
        console.error('❌ ERROR de Supabase:', error);
        container.innerHTML = `<p class="error-text">Error al cargar la colección: ${error.message}</p>`;
        button.innerHTML = 'Error al Cargar';
        return;
    }
    
    container.innerHTML = '';

    if (!data || data.length === 0) {
        container.innerHTML = '<p class="card-description">No hay videojuegos en tu colección todavía.</p>';
    } else {
        Toastify({
            text: `🎮 ¡${data.length} juegos cargados!`,
            duration: 3000,
            gravity: "bottom",
            position: "left",
            style: {
                background: "#1f2833",
                color: "#66fcf1",
                border: "1px solid #45a29e"
            }
        }).showToast();

        data.forEach(juego => {
            const card = document.createElement('div');
            card.className = 'game-card animate__animated animate__zoomIn'; 
            card.innerHTML = `
                <div class="card-content">
                    <h4 class="card-title">${juego.titulo} (${juego.año_lanzamiento})</h4>
                    <p class="card-developer">${juego.desarrollador}</p>
                    <p class="card-description">${juego.descripcion || 'Sin descripción.'}</p>
                </div>
                <a href="#" class="download-button-small" title="Descargar Ficha">
                    <i class="fas fa-download"></i>
                </a>
            `;
            container.appendChild(card);
        });
    }
    
    button.style.display = 'none';
}

const loadButton = document.getElementById('load-games-button');
if (loadButton) {
    loadButton.addEventListener('click', cargarVideojuegos);
}