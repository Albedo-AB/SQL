// assets/js/protection.js

// Importamos el cliente 'supabase' que creamos y exportamos en auth.js
import { supabase } from './auth.js';

// Creamos una función asíncrona para verificar la sesión del usuario
const checkUserSession = async () => {
    // supabase.auth.getSession() revisa si hay una sesión activa en el navegador
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        // Si NO hay sesión, redirige al usuario a la página de inicio
        window.location.replace('index.html');
    }
    // Si hay una sesión, el script no hace nada y la página se carga con normalidad.
};

// Ejecutamos la función para que se realice la comprobación
checkUserSession();