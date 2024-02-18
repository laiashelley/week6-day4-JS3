// 1- BECA ESTUDIANTE

// Para conseguir una beca en Hack-Iron el estudiante debe cumplir las siguientes condiciones:

// 1- Que sea mayor o igual a 18 años y resida en Barcelona

// 2- O bien, que sea mayor de 30 años y tenga familia numerosa

// 3- O bien, Que tenga entre 12 y 18 años y sea un geni@ de la programación

// Recuerda que puedes usar los métodos toLowerCase() o toUpperCase() para facilitar la comparación de strings.

let edad = prompt("Introduce tu edad");
let ciudad = prompt("Introducte donde vives").toLowerCase();
let familia = prompt("Eres familia numerosa? (si/no)").toLowerCase();
let programacion = prompt("Eres un genio de la programación? (si/no)").toLowerCase();


if ((edad >= 18 && ciudad === "barcelona") || (edad > 30 && familia === "si") || (edad >= 12 && edad <=18 && programacion === "si")) {
    document.write ("Has conseguido beca en Hack-Iron!:)");
} else {
    document.write("No has conseguido beca en Hack-Iron :(")
}