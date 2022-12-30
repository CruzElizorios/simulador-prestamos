

// SE QUIERE LOGRAR QUE EL CODIGO REALICE LO SIGUIENTE:
// quiere solicitar un prestamo? si/No 
// si==> preguntar salario
//         podemos darle $xxxx
//            le gustaria pagarlo en 1, 3 o 5 cuotas?
//                 divide el prestamo en la cantidad de cuotas a pagar 
//                 y le muestra al usuario vas a pagar $xxxx en el proximo mes y en los proximos X-1 meses siguientes
                // quiere tomar el credito? si/No
//                      si==> Felicitaciones, en unas horas recibira el dinero 
                        // no==> le gustaria ver en otras cuotas? si/no
                        //         si==> tiene que volver a mostrarle las cuotas en las que puede pagar
                        //         no==> lo esperamos la proxima ;)
// No==> gracias por visitarnos



let credito = 0;
function creditoDisponible(saldo) {
    credito = saldo*0.45;
    return credito
}

let cuota = 0
function costoSegunCuota(cantidadCuotas) {
    switch (cantidadCuotas) {
        case 1:
            cuota = Math.round(credito * 1.1);
            return alert("tendra que pagar " + cantidadCuotas + " cuota de " + cuota + " que contienen un 10% de interes a partir del proximo mes");
        case 3:
            cuota = Math.round(credito/3);
            cuota = Math.round(cuota*1.3);
            return alert("tendra que pagar "+ cantidadCuotas + " cuotas de " + cuota + " que contienen un 30% de interes a partir del proximo mes");
        case 6:
            cuota = Math.round(credito/6);
            cuota = Math.round(cuota*1.45);
            return alert("tendra que pagar "+ cantidadCuotas + " cuotas de " + cuota + " que contienen un 45% de interes a partir del proximo mes");
        case 12:
            cuota = Math.round(credito/12);
            cuota = Math.round(cuota*1.60);
            return alert("tendra que pagar "+ cantidadCuotas + " cuotas de " + cuota + " que contienen un 60% de interes a partir del proximo mes");
        default:
            alert("numero de cuotas no disponible, volver a elegir");
            return cuotaElegida();
    }
}

function cuotaElegida(){
    costoSegunCuota(Number(prompt("puede pagarlo en 1, 3, 6 o 12 cuotas, en cuantas desea pagarlo?")));
}


let solicitud = prompt("¿Quiere solicitar un credito? Si o No")
if (solicitud === "Si" || solicitud === "si" || solicitud === "SI") {
    alert("Le podemos otorgar " + creditoDisponible(Number(prompt("¿Cuánto es su salario?"))));
    let x = "no"
    while (x === "no" || x === "No" || x === "NO" || x === "volver a elegir cuotas" || x === "volver") {
        cuotaElegida();
        x = prompt("¿Quiere tomar el prestamo? Si / No (volver a elegir cuotas)")
    }
    alert("Felicitaciones, la solicitud de su credito ha sido exitosa")
    alert("En unos momentos recibira el dinero ;)")
} else {
    alert("lo esperamos la proxima")
}; 