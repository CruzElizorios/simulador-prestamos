

// SE QUIERE LOGRAR QUE EL CODIGO REALICE LO SIGUIENTE:
// quiere solicitar un prestamo? si/No 
// si==> preguntar salario
//         podemos darle $xxxx
//         quiere tomar el credito? si/No
//             si==>le gustaria pagarlo en 1, 3 o 5 cuotas?
//                 divide el prestamo en la cantidad de cuotas a pagar 
//                 y le muestra al usuario vas a pagar $xxxx en el proximo mes y en los proximos X-1 meses siguientes
//             no==> corta la operacion
// No==> gracias por visitarnos



// let nombreIngresado = prompt("Ingresar nombre")
// alert("El nombre ingresado es " + nombreIngresado)
let credito = 0;
function creditoDisponible(saldo) {
    credito = saldo*0.45;
    return credito
}
// function cuotas(numeroCuotas) {
//     let cuotas = credito / numeroCuotas;
//     return cuotas
// }


function cuotas(numeroCuotas) {
    if (numeroCuotas == "1") {
        let cuota = Math.round(credito * 1.1);
        return alert("tendra que pagar 1 cuota de " + cuota + " que contienen un 10% de interes a partir del proximo mes");
    } if (numeroCuotas == "3") {
        let cuota = Math.round(credito/3);
        cuota = cuota*1.3;
        return alert("tendra que pagar 3 cuotas de " + cuota + " que contienen un 30% de interes a partir del proximo mes");
    } if (numeroCuotas == "5") {
        let cuota = Math.round(credito/5);
        cuota = cuota*1.45;
        return alert("tendra que pagar 5 cuotas de " + cuota + " que contienen un 45% de interes a partir del proximo mes");
    } 
    else {
        alert("numero de cuota no disponible")
        return alert( cuotas(Number(prompt("puede pagarlo en 1, 3 o 5 cuotas, en cuantas desea pagarlo?"))));
    }
}


let solicitud = prompt( "¿quiere solicitar un credito? Si o No")
if (solicitud === "Si" || solicitud === "si") {
    alert ("le podemos otorgar " + creditoDisponible(Number(prompt("su salario es?"))));
    alert( cuotas(Number(prompt("puede pagarlo en 1, 3 o 5 cuotas, en cuantas desea pagarlo?"))));
} else {
    alert("lo esperamos la proxima")
};

