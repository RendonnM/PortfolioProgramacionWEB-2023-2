function getBingoCard() {
    // Crear arreglo con subarreglo para cada columna necesaria
    let arr = [
        [], // b (1-15)
        [], // i (16-30)
        [], // n (31-45)
        [], // g (46-60)
        []  // o (51-75)
    ];
    // Llenar cada subarreglo
    for (let i = 0; i < arr.length; i++) {
        // Asignar máximo y mínimo de acuerdo a posición
        let min = (i * 15) + 1;
        let max = min + 15;
        // Este ciclo termina cuando el subarreglo tenga 5 elementos
        while (arr[i].length < 5) {
            let num = Math.floor(Math.random() * (max - min)) + min;
            // Evitar que se repitan números
            if (!arr[i].includes(num)) {
                arr[i].push(num);
            }
        }
        // Ordenar
        arr[i].sort((a, b) => a - b);
    }
    // Generalmente el número del centro es un comodín
    arr[2][2] = 'X';
    return arr;
}

function cartones() {
    return [
        getBingoCard(),
        getBingoCard(),
        getBingoCard(),
        getBingoCard(),
        getBingoCard(),
        getBingoCard()
    ]
}

let cards = cartones();
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
      <tr>
        <td>${card[0][i]}</td>
        <td>${card[1][i]}</td>
        <td>${card[2][i]}</td>
        <td>${card[3][i]}</td>
        <td>${card[4][i]}</td>
      </tr>
        `;
    }
    html += '</tbody></table>';
});
document.querySelector('#bingo-cards').innerHTML = html;

// Si quieres que se muestren como arreglo, sin subarreglos:
let newCards = [];
for (let i = 0; i < cards.length; i++) {
    // Crear arreglo para tarjeta
    let simple = [];
    for (x = 0; x < 5; x++) {
        simple.push(...cards[i][x]);
    }
    newCards.push(simple);
}
console.log(newCards);

// Función para establecer un color de fuente aleatorio
const setFontColor = (element) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
  };
  
  // Selecciona todas las tablas de bingo por su etiqueta 'table'
  const tables = document.querySelectorAll('table');
  
  // Aplica un color de fuente aleatorio a cada tabla de bingo
  tables.forEach((table) => {
    setFontColor(table);
  });