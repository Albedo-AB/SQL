// assets/js/protection.js

// Importamos el cliente 'supabase' que creamos y exportamos en auth.js
import { supabase } from './auth.js';

// Esta función se ejecuta inmediatamente cuando se carga el script.
const checkUserSession = async () => {
    // Usamos supabase.auth.getSession() que es la forma moderna y asíncrona
    // de verificar si hay una sesión activa en el navegador.
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        // Si NO hay sesión, el usuario no ha iniciado sesión.
        // Lo redirigimos a la página de inicio.
        // Usamos window.location.replace para que no pueda volver atrás con el botón del navegador.
        window.location.replace('index.html');
    }
    // Si hay una sesión, el script no hace nada y permite que la página se cargue.
};

// Ejecutamos la función para que se realice la comprobación.
checkUserSession();
// Exportamos la función para que pueda ser usada en otros scripts si es necesario.