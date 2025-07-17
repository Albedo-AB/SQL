import { supabase } from './database.js';

// ---- MANEJADOR DEL FORMULARIO DE LOGIN (SIN CAMBIOS) ----
// assets/js/auth.js

// Importamos la función para crear el cliente desde el CDN de Supabase.
// Usar la versión con "+esm" es clave para que los módulos funcionen.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// ❗️ IMPORTANTE: Reemplaza estos valores con tu URL y tu clave anónima de Supabase
const supabaseUrl = 'https://hqiapfvhspauvmkbnyuq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxaWFwZnZoc3BhdXZta2JueXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NDI1NTgsImV4cCI6MjA2NzIxODU1OH0.wFzrnaNhkduEFwg6_8YYxjpSGP5UQAR3ocLVoDgLzms';

// Creamos el cliente de Supabase y lo "exportamos".
// Esto permite que cualquier otro script que lo necesite simplemente lo "importe".
export const supabase = createClient(supabaseUrl, supabaseKey);
