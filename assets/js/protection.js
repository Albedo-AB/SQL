// assets/js/protection.js (CORREGIDO)

import { supabase } from './database.js';

const checkUserSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        window.location.replace('index.html');
    }
};

checkUserSession();