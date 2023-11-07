// JavaScript para manejar las respuestas de las preguntas y calcular puntajes
document.addEventListener('DOMContentLoaded', function() {
    // Elementos HTML
    const preguntas = document.querySelectorAll('.pregunta');
    const puntaje = document.getElementById('puntaje');

    // Manejar las respuestas cuando se hace clic en el botón de verificar
    const verificarRespuestas = () => {
        let puntajeTotal = 0;

        preguntas.forEach((pregunta, index) => {
            const respuestas = pregunta.querySelectorAll('input[type="radio"], input[type="checkbox"]');
            let respuestaCorrecta = false;

            respuestas.forEach(respuesta => {
                const respuestaSeleccionada = respuesta.checked;
                const respuestaCorrectaAttribute = respuesta.getAttribute('data-correcta');

                if (respuestaSeleccionada && respuestaCorrectaAttribute === 'true') {
                    respuestaCorrecta = true;
                } else if (respuestaSeleccionada && respuestaCorrectaAttribute === 'false') {
                    respuestaCorrecta = false;
                    return;
                }
            });

            if (respuestaCorrecta) {
                puntajeTotal++;
            }
        });

        puntaje.innerHTML = `Puntaje: ${puntajeTotal}`;
    };

    // Asociar la función de verificarRespuestas al botón de verificar
    const botonVerificar = document.getElementById('verificar');
    botonVerificar.addEventListener('click', verificarRespuestas);
});
