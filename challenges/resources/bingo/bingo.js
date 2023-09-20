const inputSubmit = document.getElementById('startgame');

inputSubmit.addEventListener('click', function () {

    const game = document.getElementById('game');
    if (game) {
        game.style.display = 'block';
    }
    const numrivales = document.getElementById('numrivales').value;
    const numtarjetas = document.getElementById('numtarjetas').value;
    console.log('Empieza el juego')

    function getBingoCard() {

        let arr = [
            [], // b (1-15)
            [], // i (16-30)
            [], // n (31-45)
            [], // g (46-60)
            []  // o (51-75)
        ];
        for (let i = 0; i < arr.length; i++) {
            let min = (i * 15) + 1;
            let max = min + 15;
            while (arr[i].length < 5) {
                let num = Math.floor(Math.random() * (max - min)) + min;
                if (!arr[i].includes(num)) {
                    arr[i].push(num);
                }
            }
            arr[i].sort((a, b) => a - b);
        }
        arr[2][2] = '';
        return arr;
    }

    function cartones() {

        return [
            getBingoCard()
        ]
    }

    function cartones2() {

        return [
            getBingoCard()
        ]
    }

    let cards = cartones();
    let cardsrivales = cartones2();

    for (let i = 1; i < numtarjetas; i++) {
        cards.push(getBingoCard());
    }

    for (let i = 1; i < numrivales; i++) {
        cardsrivales.push(getBingoCard());
    }

    let html = '';
    cards.forEach(card => {
        html += `
      <table>
      <thead>
      <tr>
        <th>B</th>
        <th>I</th>
        <th>N</th>
        <th>G</th>
        <th>O</th>
      </tr>
      </thead>
      <tbody>`;
        for (let i = 0; i < 5; i++) {
            html += `
          <tr>`;
            for (let j = 0; j < 5; j++) {
                const numero = card[j][i];
                let claseNumero = `n${numero}`;

                if (numero === bola) {
                    claseNumero += ' tachado';
                }

                html += `
            <td class="${claseNumero}">${numero}</td>`;
            }
            html += `
          </tr>`;
        }
        html += '</tbody></table>';
    });
    document.querySelector('#bingo-cards').innerHTML = html;

    let html2 = '';
    cardsrivales.forEach(card => {
        html2 += `
      <table>
      <thead>
      <tr>
        <th>B</th>
        <th>I</th>
        <th>N</th>
        <th>G</th>
        <th>O</th>
      </tr>
      </thead>
      <tbody>`;
        for (let i = 0; i < 5; i++) {
            html2 += `
          <tr>`;
            for (let j = 0; j < 5; j++) {
                const numero = card[j][i];
                let claseNumero = `n${numero}`;

                if (numero === bola) {
                    claseNumero += ' tachado';
                }

                html2 += `
            <td class="${claseNumero}">${numero}</td>`;
            }
            html2 += `
          </tr>`;
        }
        html2 += '</tbody></table>';
    });
    document.querySelector('#bingo-cards2').innerHTML = html2;

    let newCards = [];
    for (let i = 0; i < cards.length; i++) {
        let simple = [];
        for (x = 0; x < 5; x++) {
            simple.push(...cards[i][x]);
        }
        newCards.push(simple);
    }
    console.log(newCards);

    const setFontColor = (element) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        element.style.backgroundColor = "#" + randomColor;
    };

    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
        setFontColor(table);
    });


    var rango = Array.from({ length: 75 }, (_, i) => i + 1);
    for (let i = rango.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rango[i], rango[j]] = [rango[j], rango[i]];
    }

    let balotasSalientes = [];
    function sacarBalota() {
        let bola = Math.floor(Math.random() * rango.length);
        bola = rango[bola];

        for (var i = rango.length - 1; i >= 0; i--) {
            if (rango[i] === bola) {
                rango.splice(i, 1);
            }
        }

        console.log(rango);

        let divbola = document.getElementById('bola');
        divbola.textContent = bola;
        balotasSalientes.push(bola);

        let numerosConClase = document.querySelectorAll(`.n${bola}`);
        for (var i = 0; i < numerosConClase.length; ++i) {
            let numero = numerosConClase[i];
            numero.classList.add('tachado');

            console.log(numero)
        }
    }

    function tacharNumerosEnCartones(cartones, numero) {
        cartones.forEach(card => {
            const celdas = card.querySelectorAll('td');
            celdas.forEach(celda => {
                const numeroCelda = parseInt(celda.textContent);
                if (numeroCelda === numero) {
                    celda.classList.add('tachado');
                }
            });
        });
    }

    let ganadorEncontrado = false;
    function verificarGanador(cartones) {
        for (let i = 0; i < cartones.length; i++) {
            const carton = cartones[i];
            let cartonCompleto = true;

            for (let columna = 0; columna < carton.length; columna++) {
                for (let fila = 0; fila < carton[columna].length; fila++) {
                    if (columna === 2 && fila === 2) {
                        continue;
                    }

                    const numero = carton[columna][fila];
                    if (!balotasSalientes.includes(numero)) {
                        cartonCompleto = false;
                        break;
                    }
                }
                if (!cartonCompleto) {
                    break;
                }
            }

            if (cartonCompleto) {
                ganadorEncontrado = true;

                const mensajeganador = document.getElementById('ganador-mensaje');
                mensajeganador.style.display = 'block';

                console.log("¡Tenemos un ganador! El cartón está completo.");
                break;
            }
        }

        if (ganadorEncontrado) {
            console.log("¡Tenemos un ganador! El cartón está completo.");
        } else {
            console.log("Ningún ganador todavía");
        }
    }

    const intervalId = setInterval(function () {
        sacarBalota();
        verificarGanador(cards);
        verificarGanador(cardsrivales);
        if (ganadorEncontrado) {
            clearInterval(intervalId);
            console.log("¡Tenemos un ganador!");
        }
    }, 50);

});
