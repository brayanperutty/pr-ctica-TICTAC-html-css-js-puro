    // Datos para el gráfico
    var datos = {
        labels: ['Sociales', 'Sexualidad', 'Ambiental', 'Emprendimiento', 'TIC'],
        datasets: [{
            data: [24, 15, 41, 12, 8], // Valores para cada sección
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#DC2C07', '#AA69BA'] // Colores para cada sección
        }]
    };

    // Configuración del gráfico
    var opciones = {
        responsive: true,
        maintainAspectRatio: false
    };

    // Obtén el contexto del lienzo
    var ctx = document.getElementById('miGraficoDeTorta').getContext('2d');

    // Crea el gráfico de torta
    var miGraficoDeTorta = new Chart(ctx, {
        type: 'pie',
        data: datos,
        options: opciones
    });
