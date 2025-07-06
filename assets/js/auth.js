import { supabase } from './database.js';

// ---- MANEJADOR DEL FORMULARIO DE LOGIN ----
const loginForm = document.querySelector('#login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Acceso Denegado',
                text: 'El correo o la contraseña son incorrectos. Por favor, inténtalo de nuevo.',
                background: '#1f2833',
                color: '#ffffff'
            });
            return;
        }
        
        if (data.user) {
            await Swal.fire({
                icon: 'success',
                title: '¡Bienvenido de vuelta!',
                text: 'Has iniciado sesión correctamente.',
                timer: 2000,
                showConfirmButton: false,
                background: '#1f2833',
                color: '#ffffff'
            });
            window.location.href = 'dashboard.html';
        }
    });
}

// ---- MANEJADOR DEL FORMULARIO DE REGISTRO ----
const registerForm = document.querySelector('#register-form');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // 1. Intenta registrar al usuario
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (authError) {
            Swal.fire({ icon: 'error', title: 'Error en el registro', text: authError.message, background: '#1f2833', color: '#ffffff' });
            return;
        }
        
        if (!authData.user) {
             Swal.fire({ icon: 'info', title: 'Registro pendiente', text: 'Ya existe un usuario con este email. Por favor, revisa tu correo para confirmar la cuenta.', background: '#1f2833', color: '#ffffff' });
            return;
        }

        // 2. Inserta el perfil en la tabla 'usuarios'
        const { error: profileError } = await supabase
            .from('usuarios')
            .insert([{ id: authData.user.id, username: username }]);
        
        if (profileError) {
            Swal.fire({ icon: 'error', title: 'Error al crear perfil', text: profileError.message, background: '#1f2833', color: '#ffffff' });
            return;
        }

        // 3. Muestra mensaje de éxito
        Swal.fire({
            icon: 'success',
            title: '¡Registro Exitoso!',
            text: 'Te hemos enviado un correo de confirmación. ¡Revisa tu bandeja de entrada!',
            background: '#1f2833',
            color: '#ffffff'
        }).then(() => {
            window.location.href = 'index.html';
        });
    });
}

// ---- MANEJADOR DEL BOTÓN DE LOGOUT ----
const logoutButton = document.querySelector('#logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.href = 'index.html';
    });
}