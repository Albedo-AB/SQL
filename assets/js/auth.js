import { supabase } from './database.js';

// ---- MANEJADOR DEL FORMULARIO DE LOGIN (SIN CAMBIOS) ----
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
                text: 'El correo o la contraseña son incorrectos.',
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

// ---- MANEJADOR DEL FORMULARIO DE REGISTRO (VERSIÓN SIMPLIFICADA Y CORRECTA) ----
const registerForm = document.querySelector('#register-form');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // El 'username' ya no se necesita aquí, porque el trigger lo crea desde el email.
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Ahora solo necesitamos llamar a signUp. El trigger se encarga del resto.
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            Swal.fire({ icon: 'error', title: 'Error en el registro', text: error.message, background: '#1f2833', color: '#ffffff' });
            return;
        }

        // Mensaje de éxito
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

// ---- MANEJADOR DEL BOTÓN DE LOGOUT (SIN CAMBIOS) ----
const logoutButton = document.querySelector('#logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.href = 'index.html';
    });
}