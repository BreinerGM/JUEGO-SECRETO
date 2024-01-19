let numeroSecreto = 0;
let intentos = 0;
let listaNumber = []
let numeroMax = 10;
function asignarTextElements(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valueUser').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextElements('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextElements('p','el numero secreto menor careverga');
        }else{
            asignarTextElements('p','el numero secreto es mayor cv')
        }
    }
    intentos++;
    cleanbox();
}

function cleanbox(){
    document.querySelector('#valueUser').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;

    if(listaNumber.length == numeroMax){
        asignarTextElements('p','Ya se sortearon los números posibles');
    }else{
        if(listaNumber.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumber.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextElements('h1',"Juego del numero escondio");
    asignarTextElements('p',`Indica un numero del 1 al ${numeroMax} cv:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    cleanbox();

    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
//para sacar el tipo de variable se utiliza typeof

condicionesIniciales();