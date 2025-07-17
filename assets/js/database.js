// assets/js/database.js (CORREGIDO)

// 1. Ve a tu proyecto en Supabase.
// 2. Ve a "Project Settings" (el engranaje ⚙️).
// 3. Ve a la sección "API".
// 4. Copia la "Project URL" y pégala aquí abajo.
const SUPABASE_URL = 'https://hqiapfvhspauvmkbnyuq.supabase.co';

// 5. Copia la clave "anon" (public) y pégala aquí abajo.
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxaWFwZnZoc3BhdXZta2JueXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NDI1NTgsImV4cCI6MjA2NzIxODU1OH0.wFzrnaNhkduEFwg6_8YYxjpSGP5UQAR3ocLVoDgLzms';

// NO CAMBIES ESTA PARTE
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export { supabaseClient as supabase };