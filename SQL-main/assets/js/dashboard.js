import { supabase } from './database.js';

// MENSAJE 1: Nos dice si el script se está cargando.
console.log('✅ Script dashboard.js cargado correctamente.');

async function cargarVideojuegos() {
    // MENSAJE 3: Nos dice que el botón funciona.
    console.log('🔘 Botón presionado. Iniciando la carga de videojuegos...');
    
    const container = document.getElementById('videojuegos-container');
    const button = document.getElementById('load-games-button');
    
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Conectando con Supabase...';
    
    // MENSAJE 4: Justo antes de llamar a la base de datos.
    console.log('📞 Llamando a la base de datos de Supabase...');
    
    const { data, error } = await supabase
        .from('videojuegos')
        .select('titulo, descripcion, desarrollador, año_lanzamiento');

    // MENSAJE 5: La respuesta de Supabase (¡la más importante!)
    if (error) {
        console.error('❌ ERROR de Supabase:', error);
        container.innerHTML = `<p class="error-text">Error al cargar la colección: ${error.message}</p>`;
        button.innerHTML = 'Error al Cargar';
        return;
    }

    console.log('📊 Datos recibidos de Supabase:', data);
    
    container.innerHTML = '';

    if (!data || data.length === 0) {
        console.log('🤔 La consulta fue exitosa, pero no se encontraron videojuegos en la base de datos.');
        container.innerHTML = '<p class="card-description">No hay videojuegos en tu colección todavía.</p>';
    } else {
        console.log(`✨ Se encontraron ${data.length} juegos. Creando tarjetas...`);
        
        // ✨ AÑADIDO: Notificación de éxito con Toastify
        Toastify({
            text: `🎮 ¡${data.length} juegos cargados!`,
            duration: 3000,
            gravity: "bottom",
            position: "left",
            style: {
                background: "#1f2833", // Color oscuro del tema
                color: "#66fcf1",     // Color cian del tema
                border: "1px solid #45a29e"
            }
        }).showToast();

        data.forEach(juego => {
            const card = document.createElement('div');
            card.className = 'game-card';
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

// MENSAJE 2: Nos dice si el botón fue encontrado en el HTML.
if (loadButton) {
    console.log('✅ Botón "Mostrar Colección" encontrado en el HTML.');
    loadButton.addEventListener('click', cargarVideojuegos);
} else {
    console.error('❌ ERROR: No se encontró el botón con id="load-games-button" en el HTML.');
}