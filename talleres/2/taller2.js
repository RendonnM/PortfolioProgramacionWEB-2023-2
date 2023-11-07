// Ejercicio 1
function ejercicio1() {
    const metros1 = 8;
    const precio1 = 560;
    const metros2 = 20;
    const precio2 = (metros2 * precio1) / metros1;

    document.getElementById("resultado1").textContent = `El precio de 20 metros de manguera es $${precio2}`;
}

// Ejercicio 2
function ejercicio2() {
    const obreros1 = 12;
    const tiempo1 = 15;
    const obreros2 = 5;
    const tiempo2 = (obreros1 * tiempo1) / obreros2;

    document.getElementById("resultado2").textContent = `5 obreros demorarán ${tiempo2} horas en efectuar el mismo trabajo.`;
}

// Ejercicio 3
function ejercicio3() {
    const salarioPorDecada = 5000;
    const diasDescuento = 6;
    const salarioTotal = (2 * 30 - diasDescuento) * salarioPorDecada;

    document.getElementById("resultado3").textContent = `El salario total en 2 meses es $${salarioTotal}.`;
}

// Ejercicio 4
function ejercicio4() {
    const litrosPorMinuto = 15 / 3;
    const litrosPorHora = litrosPorMinuto * 60;
    const tiempoHoras = 1200 / litrosPorHora;

    document.getElementById("resultado4").textContent = `El corazón bombea 1200 litros en ${tiempoHoras} horas.`;
}

// Ejercicio 5
function ejercicio5() {
    const piscinaEnHoras = 7 + 12 / 60;
    const aguaPorHora = 100 / piscinaEnHoras;
    
    document.getElementById("resultado5").textContent = `El grifo debe arrojar ${aguaPorHora.toFixed(2)} litros por minuto para llenar la piscina en 12 horas.`;
}

// Ejercicio 6
function ejercicio6() {
    const precioPorGalon = 10500 / 15;
    const precioTotal = 8 * 55 * precioPorGalon;

    document.getElementById("resultado6").textContent = `8 canecas de 55 galones de combustible cuestan $${precioTotal}.`;
}

// Ejercicio 7
function ejercicio7() {
    const maquinas1 = 8;
    const folios1 = 120;
    const horas1 = 5;

    const folios2 = (20 / maquinas1) * folios1 * (2 * horas1);

    document.getElementById("resultado7").textContent = `Con 20 máquinas se pueden escribir ${folios2} folios bajo las mismas condiciones.`;
}

// Ejercicio 8
function ejercicio8() {
    const razonDiariaOriginal = 900;
    const grupoOriginal = 45;
    const tiempoOriginal = 40;
    const grupoNuevo = 50;
    const tiempoNuevo = 60;
    
    const razonDiariaNueva = (grupoOriginal * razonDiariaOriginal) / (grupoNuevo * tiempoNuevo);
    
    document.getElementById("resultado8").textContent = `La razón diaria debe ser de ${razonDiariaNueva} gramos por día.`;
}

// Ejercicio 9
function ejercicio9() {
    const mecanografas1 = 3;
    const horasDiarias1 = 6;
    const dias1 = 10;
    
    const mecanografas2 = 8;
    const horasDiarias2 = 5;
    
    const dias2 = (mecanografas1 * horasDiarias1 * dias1) / (mecanografas2 * horasDiarias2);
    
    document.getElementById("resultado9").textContent = `Tardarán ${dias2} días en realizar el trabajo.`;
}

// Ejercicio 10
function ejercicio10() {
    const maquinas1 = 5;
    const unidades1 = 75000;
    const dias1 = 3;
    
    const unidades2 = 200000;
    const dias2 = 2;
    
    const maquinas2 = (maquinas1 * dias1 * unidades2) / (unidades1 * dias2);
    
    document.getElementById("resultado10").textContent = `Deben ponerse en funcionamiento ${maquinas2} máquinas para atender el pedido.`;
}

// Ejercicio 11
function ejercicio11() {
    const obreros1 = 10;
    const horasDiarias1 = 8;
    const dias1 = 60;
    
    const obreros2 = 6;
    const horasDiarias2 = 6;
    
    const dias2 = (obreros1 * horasDiarias1 * dias1) / (obreros2 * horasDiarias2);
    
    document.getElementById("resultado11").textContent = `Tardarían ${dias2} días en construir la piscina.`;
}

// Ejercicio 12
function ejercicio12() {
    // Proporciones a resolver:
    const a = (-6 * 18) / 30;
    const b = (-3 * 20) / 10;
    const c = (10 * 20) / 20;

    document.getElementById("resultado12a").textContent = `a = ${a}`;
    document.getElementById("resultado12b").textContent = `b = ${b}`;
    document.getElementById("resultado12c").textContent = `c = ${c}`;
}
