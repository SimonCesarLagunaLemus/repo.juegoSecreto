let numeroSecreto = 0;
let intento = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoelemnto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return 0 ;
};

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    
    //for(i = 0;i < intento; i++) {
        if(numeroUsuario === numeroSecreto) {
            asignarTextoelemnto('p',`Felicitaciones, acertaste el numero en solo ${intento} ${(intento ===1 ? 'vez': 'veces')}!!!`);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else{
            if(numeroUsuario > numeroSecreto){
                asignarTextoelemnto('p',`El numero es menor`);
            } else {
                asignarTextoelemnto('p', `El numero es mayor`);
            }
            intento++;
            limpiarCaja();
        }
    //}
    return 0 ;
};

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
};

function condicionesIniciales() {
    asignarTextoelemnto('h1','Juego del numero secreto!!');
    asignarTextoelemnto('p',`Ingresa un numero del 1 al ${numeroMaximo}: `);
    numeroSecreto = creandoNumeroSecreto();
    intento = 1;
};

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    creandoNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
};

function creandoNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoelemnto('p','Ya se sortearon todos los numeros posibles');
    } else{
        if(listaNumeroSorteado.includes(numeroGenerado)) {
            return creandoNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
};

condicionesIniciales();