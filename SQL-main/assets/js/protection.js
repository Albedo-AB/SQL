// js/protection.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Asegúrate de que estas variables coincidan con las de tu archivo auth.js
const SUPABASE_URL = 'https://hqiapfvhspauvmkbnyuq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxaWFwZnZoc3BhdXZta2JueXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NDI1NTgsImV4cCI6MjA2NzIxODU1OH0.wFzrnaNhkduEFwg6_8YYxjpSGP5UQAR3ocLVoDgLzms';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Verifica si hay una sesión activa
const session = await supabase.auth.getSession();

// Si no hay sesión, redirige al usuario a la página de inicio
if (!session.data.session) {
  window.location.href = 'index.html';
}