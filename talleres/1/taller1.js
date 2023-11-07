// Ejercicio 1
function ejercicio1() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const edadElProximoAnio = parseInt(edad) + 1;
    const resultado = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadElProximoAnio} años`;
    document.getElementById("resultado1").textContent = resultado;
}

// Ejercicio 2
function mostrarInputs() {
const figura = document.getElementById("figura").value;
const trianguloInputs = document.getElementById("trianguloInputs");
const rectanguloInputs = document.getElementById("rectanguloInputs");
const circuloInputs = document.getElementById("circuloInputs");

trianguloInputs.style.display = figura === "triangulo" ? "block" : "none";
rectanguloInputs.style.display = figura === "rectangulo" ? "block" : "none";
circuloInputs.style.display = figura === "circulo" ? "block" : "none";
}

function ejercicio2() {
const figura = document.getElementById("figura").value;
let area;

if (figura === "triangulo") {
    const base = parseFloat(document.getElementById("baseTriangulo").value);
    const altura = parseFloat(document.getElementById("alturaTriangulo").value);
    area = (base * altura) / 2;
} else if (figura === "rectangulo") {
    const base = parseFloat(document.getElementById("baseRectangulo").value);
    const altura = parseFloat(document.getElementById("alturaRectangulo").value);
    area = base * altura;
} else if (figura === "circulo") {
    const radio = parseFloat(document.getElementById("radioCirculo").value);
    area = Math.PI * Math.pow(radio, 2);
}

if (!isNaN(area)) {
    document.getElementById("resultado2").textContent = `El área del ${figura} es: ${area.toFixed(2)}`;
} else {
    document.getElementById("resultado2").textContent = "Por favor, ingresa valores válidos.";
}
}

// Ejercicio 3
function ejercicio3() {
const numero = parseInt(document.getElementById("numeroEj3").value);
let resultado = "";

for (let i = 1; i <= numero; i++) {
    resultado += `${i} - es ${i % 2 === 0 ? "par" : "impar"}\n`;
}

document.getElementById("resultado3").textContent = resultado;
}

// Ejercicio 4
function ejercicio4() {
const numero = parseInt(document.getElementById("numeroEj4").value);

if (numero <= 1) {
    document.getElementById("resultado4").textContent = "Ingresa un número entero mayor que 1.";
    return;
}

let esPrimo = true;

if (numero > 1) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    document.getElementById("resultado4").textContent = `${numero} es un número primo.`;
} else {
    document.getElementById("resultado4").textContent = `${numero} no es un número primo.`;
}
}

// Ejercicio 5
function ejercicio5() {
const numero = parseInt(document.getElementById("numeroEj5").value);
let factorial = 1;

if (numero < 0) {
    document.getElementById("resultado5").textContent = "Ingresa un número entero mayor que cero.";
    return;
}

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

document.getElementById("resultado5").textContent = `El factorial de ${numero} es: ${factorial}`;
}

// Ejercicio 6
function ejercicio6() {
let total = 0;
let contador = 0;

while (total < 50) {
    const numero = parseFloat(prompt("Ingresa un número"));
    if (isNaN(numero)) {
        continue;
    }

    total += numero;
    contador++;
}

document.getElementById("resultado6").textContent = `Total acumulado: ${total}, Número de números introducidos: ${contador}`;
}

// Ejercicio 7
function ejercicio7() {
const numerosArray = [5, 8, 12, 3, 6];
const pares = [];
const impares = [];

for (const numero of numerosArray) {
    const aleatorio = Math.floor(Math.random() * 10) + 1;
    const resultado = numero * aleatorio;
    console.log(`${numero} x ${aleatorio} = ${resultado}`);

    if (resultado % 2 === 0) {
        pares.push(resultado);
    } else {
        impares.push(resultado);
    }
}

document.getElementById("resultado7").textContent = `Multiplicaciones realizadas, Números pares: [${pares}], Números impares: [${impares}]`;
}

// Ejercicio 8
function ejercicio8() {
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const dni = parseInt(document.getElementById("dni").value);

if (isNaN(dni) || dni < 0 || dni.toString().length > 8) {
    document.getElementById("resultado8").textContent = "Número de DNI no válido.";
} else {
    const letra = letras[dni % 23];
    document.getElementById("resultado8").textContent = `La letra del DNI ${dni} es: ${letra}`;
}
}

// Ejercicio 9
function ejercicio9() {
const palabra = document.getElementById("palabra").value;
const consonantes = palabra.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
const vocales = palabra.match(/[aeiou]/gi) || [];
const longitud = palabra.length;

document.getElementById("resultado9").textContent = `Consonantes: ${consonantes.length}, Vocales: ${vocales.length}, Longitud: ${longitud}`;
}

// Ejercicio 10
function ejercicio10() {
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
const colorUsuario = document.getElementById("color").value;

if (colores.includes(colorUsuario)) {
    document.getElementById("resultado10").textContent = `${colorUsuario} está en el array de colores.`;
} else {
    document.getElementById("resultado10").textContent = `${colorUsuario} no está en el array de colores.`;
}
}
