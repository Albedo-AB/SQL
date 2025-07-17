// assets/js/auth.js (CORREGIDO Y MEJORADO)
import { supabase } from './database.js';

// ---- MANEJADOR DEL FORMULARIO DE LOGIN (CON TOASTIFY) ----
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
            Toastify({
                text: "✅ ¡Bienvenido de vuelta!",
                duration: 2000,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                stopOnFocus: true,
            }).showToast();

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }
    });
}

// ---- MANEJADOR DEL FORMULARIO DE REGISTRO (CON TOASTIFY) ----
const registerForm = document.querySelector('#register-form');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            Swal.fire({ icon: 'error', title: 'Error en el registro', text: error.message, background: '#1f2833', color: '#ffffff' });
            return;
        }

        Toastify({
            text: "🎉 ¡Registro exitoso! Revisa tu correo para confirmar la cuenta.",
            duration: 5000,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right, #66fcf1, #45a29e)",
                color: "#1a1a1d"
            }
        }).showToast();
        
        registerForm.reset();
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