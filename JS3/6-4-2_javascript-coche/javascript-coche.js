// 2- COCHE NO ARRANCA

// Solucionar mediante condicionales el siguiente algoritmo:


// Oh! Estás aparcado en la calle, pero el coche no arranca...

// Si vives cerca AND tienes ganas de caminar, te vas andando y ya lo arreglarás mañana. Si no, realiza las siguientes comprobaciones:
//            - Tiene gasolina?
//                         * No => hay que poner gasolina
//                                   - Tienes dinero?
//                                  • Si => poner gasolina
//                                  • No => vas en metro
//                           * Sí que tiene gasolina:


//                                   - Tiene batería?
//                                                * No => recargar batería
//                                                * Sí => pásate por el mecánico

let vivesCerca = prompt("Vives cerca de aquí? (si/no)");
let ganasCaminar = prompt("Tienes ganas de caminar? (si/no)");
let gasolina; 
let dinero;
let bateria;

if ((vivesCerca == "si" && ganasCaminar == "si") || (vivesCerca == "no" && ganasCaminar == "si")){
    document.write("Vete andando a casa y ya lo arreglaras mañana");
} else if ((vivesCerca == "no" && ganasCaminar == "no") || (vivesCerca == "si" && ganasCaminar == "no")){
    gasolina = prompt("Tienes gasolina? (si/no)");
} if (gasolina == "si"){
    bateria = prompt("Tiene bateria? (si/no)");
} else if (gasolina == "no"){
    dinero = prompt("Tienes dinero?");
} if (bateria == "si"){
    document.write("Pasate por el mecánico");
} else if (bateria == "no"){
    document.write("Recarga bateria");
} if (dinero == "si"){
    document.write("Pon gasolina");
} else if (dinero == "no"){
    document.write("Ves en metro");
}