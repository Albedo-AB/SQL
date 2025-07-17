// assets/js/charts.js (CORREGIDO Y MEJORADO)
import { supabase } from './database.js';

async function cargarDatosGeneros() {
    const { data, error } = await supabase.rpc('contar_juegos_por_genero');

    if (error) {
        console.error('Error al cargar datos para el gráfico:', error);
        return;
    }

    const labels = data.map(item => item.nombre);
    const values = data.map(item => item.cantidad_juegos);

    const ctx = document.getElementById('genreChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Juegos por Género',
                data: values,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ],
                borderColor: '#1f2833',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#c5c6c7'
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

document.addEventListener('DOMContentLoaded', cargarDatosGeneros);