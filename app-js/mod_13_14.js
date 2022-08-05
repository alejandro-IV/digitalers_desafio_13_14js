/**************************************************************************
                        Ejercicio I modulo 13 

Diseñar una aplicación JavaScript que,
recibiendo el flujo de caja del último año de la
empresa, muestre si dicho flujo genera o no
pérdidas.
 **************************************************************************/



/*
let FlujoDeCaja = [
    {
        periodo: "Enero",
        ingresos: 1500,
        egresos: 1500,
    },
    {
        periodo: "Febrero",
        ingresos: 2500,
        egresos: 2500
    },
    {
        periodo: "Marzo",
        ingresos: 84683,
        egresos: 1155
    },
    {
        periodo: "Abril",
        ingresos: 135353,
        egresos: 1533
    },
    {
        periodo: "Mayo",
        ingresos: 1535,
        egresos: 5434
    },
    {
        periodo: "Junio",
        ingresos: 4343354,
        egresos: 5434534
    },
    {
        periodo: "Julio",
        ingresos: 435453,
        egresos: 4543
    },
    {
        periodo: "Agosto",
        ingresos: 78351,
        egresos: 7816
    },
    {
        periodo: "Septiembre",
        ingresos: 1878,
        egresos: 95634
    },
    {
        periodo: "Octubre",
        ingresos: 48483,
        egresos: 9433
    },
    {
        periodo: "Noviembre",
        ingresos: 35483,
        egresos: 53133
    },
    {
        periodo: "Diciembre",
        ingresos: 3843,
        egresos: 348133
    },
];

// guardo los datos obtenidos en la iteración for
let Ingresos = 0;
let Egresos = 0;


for (let i = 0; i < FlujoDeCaja.length; i++) {
    let añoActual = FlujoDeCaja[i];
    Ingresos += añoActual.ingresos;
    Egresos += añoActual.egresos;
    console.log(FlujoDeCaja[i]);
}


if(Ingresos < Egresos) {
    // si ingresos < egresos el flujo genera pérdidas
    console.log("El flujo de caja genera pérdidas");
} else { 
    // sino no genera pérdidas
    console.log("El flujo de caja no genera pérdidas");
    
}
console.log (Ingresos)
console.log (Egresos)





// ****************  Ejercicio I modulo 14 ********************

function VerificarFlujoDeCaja(){
	if(Ingresos > Egresos)
		return 1
	else if(Ingresos < Egresos)
		return -1
	else
		return 0
}

VerificarFlujoDeCaja()
*/








/****************************************************************************
                        Ejercicio II modulo 13

Diseñar un programa JavaScript que recorra
todas esas alternativas de crédito y genere un
array con la información de dichas alternativas
sumando el dato calculado del interés.
*******************************************************************************/ 

/*
let creditos = [
    {
        nombre: "Plan 001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "Plan 002",
        capital: 300000,
        plazo: 180,
        tasa: 0.10
    },
    {
        nombre: "Plan 003",
        capital: 485000,
        plazo: 60,
        tasa: 0.23
    },
]


let ofertaDeCreditos = creditos.map(credito => {
    let Interes = (credito.capital * credito.plazo * credito.tasa) / 100;   // calculo de interés generado.
    let ofertaDeCreditos = Interes + credito.capital;   // guarda la suma del capital más los intereses generados.
    return {                         // retorna los valores del array
        ...credito,                  // copio los valores del array creditos  
        ofertaConInteres: ofertaDeCreditos // le añado un nuevo valor
    }    
})
console.log(ofertaDeCreditos)





// ****************  Ejercicio II modulo 14 ********************

const OfertasConInteres = [];

const AgregarInteres = creditos.map(credito => {
    let Interes = (credito.capital * credito.plazo * credito.tasa) / 100;   // calculo de interés generado.
    
    OfertasConInteres.push({
        ...credito, // copio  los valores del array creditos
        interes: `El interés generado es: $${Interes} y su fórmula para calcularlo es: (Capital * Plazo * Tasa) / 100`
    }); 

    return OfertasConInteres
})

console.log(OfertasConInteres);

*/

