// assets/js/charts.js (CORREGIDO Y MEJORADO)
import { supabase } from './auth.js';
import { supabase } from './database.js';

// Función para obtener la cuenta de videojuegos por género
async function cargarDatosGeneros() {
    // Usamos una RPC (Remote Procedure Call) para obtener los datos ya procesados desde Supabase
    // Esta función 'contar_juegos_por_genero' la crearemos en el SQL Editor de Supabase
    const { data, error } = await supabase.rpc('contar_juegos_por_genero');

    if (error) {
        console.error('Error al cargar datos para el gráfico:', error);
        return;
    }

    // Extraemos las etiquetas (nombres de género) y los valores (cantidad de juegos)
    const labels = data.map(item => item.nombre);
    const values = data.map(item => item.cantidad_juegos);

    // Renderizamos el gráfico
    const ctx = document.getElementById('genreChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie', // Un gráfico de pastel ('pie') o dona ('doughnut') es ideal aquí
        data: {
            labels: labels,
            datasets: [{
                label: 'Juegos por Género',
                data: values,
                backgroundColor: [ // Colores atractivos para el gráfico
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ],
                borderColor: '#1f2833', // Borde del color de fondo para que resalte
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top', // Posición de la leyenda
                    labels: {
                        color: '#c5c6c7' // Color del texto de la leyenda
                    }
                },
                title: {
                    display: true,
                    text: 'Distribución de Juegos por Género',
                    color: '#ffffff'
                }
            }
        }
    });
}

// Crea esta función en tu SQL Editor de Supabase
/*
CREATE OR REPLACE FUNCTION contar_juegos_por_genero()
RETURNS TABLE(nombre VARCHAR, cantidad_juegos BIGINT)
AS $$
BEGIN
  RETURN QUERY
    SELECT g.nombre, COUNT(vg.videojuego_id) as cantidad_juegos
    FROM generos g
    JOIN videojuego_generos vg ON g.id = vg.genero_id
    GROUP BY g.nombre
    ORDER BY cantidad_juegos DESC;
END;
$$ LANGUAGE plpgsql;
*/

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', cargarDatosGeneros);