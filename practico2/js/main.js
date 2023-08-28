//variables a utilizar
var contadorParticipante = 0;
var contadorPc = 0;
var contadorGeneral = 0;
var contadorEmpate = 0;
var nombreParticipante = "";
var jugadaParticipante = "";
var jugadaPc = 0;
var opciones = ["piedra", "papel", "tijera"];

window.addEventListener("load", function () {

    //obtener los elementos html del dom
    var btnentrar = document.getElementById("botonentrar");
    var btnreiniciar = document.getElementById("botonreiniciar");
    var txt = document.getElementById("nombreParticipante");
    var contPar = document.getElementById("contadorParticipante");
    var contPc = document.getElementById("contadorPc");
    var contgral = document.getElementById("contadorgral");
    var btnPiedra = document.getElementById("botonPiedra");
    var btnPapel = document.getElementById("botonPapel");
    var btnTijera = document.getElementById("botonTijera");
    var btnjugar = document.getElementById("botonjugar");

    //escuchadores de eventos
    btnentrar.addEventListener("click", registrar);
    btnPiedra.addEventListener("click", function () { tipoJugada("piedra") });
    btnPapel.addEventListener("click", function () { tipoJugada("papel") });
    btnTijera.addEventListener("click", function () { tipoJugada("tijera") });
    btnjugar.addEventListener("click", jugadaGanadora);
    btnreiniciar.addEventListener("click", reiniciar);

    //funciones

    //funcion para obtener nombre de participante y verificar si el campo esta vacio
    function registrar() {
        nombreParticipante = txt.value;
        if (nombreParticipante.length === 0) { //si el largo de string es 0 está vacio
            alert("Por favor ingrese un nombre")
        } else {

            alert("bienvenido" + " " + nombreParticipante);
            btnPiedra.disabled = false;
            btnPapel.disabled = false;
            btnTijera.disabled = false;
            btnjugar.disabled = false;
            btnreiniciar.disabled = false;
        }
    }

    //funcion que obtiene la jugada del usuario
    function tipoJugada(jugada) {
        if (jugada === "piedra") {
            jugadaParticipante = jugada;
            return jugadaParticipante;
        } else if (jugada === "papel") {
            jugadaParticipante = jugada;
            return jugadaParticipante;
        } else if (jugada === "tijera") {
            jugadaParticipante = jugada;
            return jugadaParticipante;
        }
    }

    //funcion para definir la jugada de la pc
    function jugadaCompu() {
        jugadaPc = Math.floor(Math.random() * 2.5); //redondeo de nro aleatorio
        return jugadaPc;
    }

    //funcion para saber el ganador
    function ganadorTotal(contadorParticipante, contadorPc) {
        if (contadorParticipante >= 3) {
            alert("El ganador total es" + " " + nombreParticipante);
            reiniciar();
        } else if (contadorPc >= 3) {
            alert("El ganador total es Pc");
            reiniciar();
        } else {
            alert("No hay ganador con 3 victorias");
            alert("Intenta de nuevo!!!");
            reiniciar();
        }
    }

    //funcion de reinicio de contadores
    function reiniciar() {
        contadorParticipante = 0;
        contadorPc = 0;
        contadorGeneral = 0;
        contPar.value = 0;
        contPc.value = 0;
        contgral.value = 0;
        txt.value = "";
        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;
        btnjugar.disabled = true;
        btnreiniciar.disabled = true;
        txt.autofocus = true;
    }

    //funcion para comparar las jugadas de los participantes
    function jugadaGanadora() {
        if (jugadaParticipante.length === 0) {
            alert("Por favor debe elegir una opcion de jugada");
        } else {
            jugadaCompu();
            if (opciones[jugadaPc] === jugadaParticipante) {
                alert("Ha sido empate");
                contadorGeneral = contadorGeneral + 1;
                contgral.value = contadorGeneral;
            } else if (opciones[jugadaPc] === "piedra" && jugadaParticipante === "tijera" ||
                opciones[jugadaPc] === "papel" && jugadaParticipante === "piedra" ||
                opciones[jugadaPc] === "tijera" && jugadaParticipante === "papel") {
                alert("Pc ha ganado la partida");
                contadorPc = contadorPc + 1;
                contadorGeneral = contadorGeneral + 1;
                contPc.value = contadorPc;
                contgral.value = contadorGeneral;
            } else {
                alert(`${nombreParticipante} ha ganado la partida`);
                contadorParticipante = contadorParticipante + 1;
                contadorGeneral = contadorGeneral + 1;
                contPar.value = contadorParticipante;
                contgral.value = contadorGeneral;
            }
            if (contadorGeneral == 5) {
                ganadorTotal(contadorParticipante, contadorPc);
            }
        }

    }
})

