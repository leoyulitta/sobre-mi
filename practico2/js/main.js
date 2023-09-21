//variables a utilizar
var contadorParticipante = 0;
var contadorPc = 0;
var contadorGeneral = 0;
var contadorEmpate = 0;
var nombreParticipante = "";
var nombreJugador=" ";
var jugadaParticipante ="";
var jugadaPc = 0;
var opciones = ["piedra", "papel", "tijera"];

window.addEventListener("load", function () {

    //obtener los elementos html del dom

    // Login
    var btnentrar = document.getElementById("botonentrar");
    var txt = document.getElementById("nombreParticipante");
    //contadores
    var contPar = document.getElementById("contadorParticipante");
    var contgral = document.getElementById("contadorgral");
    var contPc = document.getElementById("contadorPc");
    //jugadas
    var btnPiedra = document.getElementById("botonPiedra");
    var btnPapel = document.getElementById("botonPapel");
    var btnTijera = document.getElementById("botonTijera");
    //jugar y reiniciar
    var btnreiniciar = document.getElementById("botonreiniciar");
    var btnjugar = document.getElementById("botonjugar");

    //----------------------------------

    //escuchadores de eventos
    btnentrar.addEventListener("click", registrar);
    btnPiedra.addEventListener("click", function () { tipoJugada("piedra") });
    btnPapel.addEventListener("click", function () { tipoJugada("papel") });
    btnTijera.addEventListener("click", function () { tipoJugada("tijera") });
    btnjugar.addEventListener("click", jugadaGanadora);
    btnreiniciar.addEventListener("click", reiniciar);

    //---------------------------------

    //funciones

    //obtener nombre de participante y verificar si el campo esta vacio
    function registrar() {
        nombreParticipante = txt.value;
        var espacioEnBlanco = nombreParticipante.replace(/ /g, "");
        nombreJugador = espacioEnBlanco.trim();
        if (nombreJugador.length === 0) { //si el largo de string es 0 está vacio
            alert("Por favor ingrese un nombre")
        } else {
                alert("bienvenido" + " " + nombreJugador);
                btnPiedra.disabled = false;
                btnPapel.disabled = false;
                btnTijera.disabled = false;
                btnjugar.disabled = false;
                btnreiniciar.disabled = false;
                btnentrar.disabled=true;
                txt.disabled=true;
        }
    }

    //funcion que obtiene la jugada del usuario
    function tipoJugada(jugada) {
        if (jugada === "piedra") {
            btnPapel.disabled=true;
            btnTijera.disabled=true;
            jugadaParticipante = jugada;
            return jugadaParticipante;
        } else if (jugada === "papel") {
            btnPiedra.disabled=true;
            btnTijera.disabled=true;
            jugadaParticipante = jugada;
            return jugadaParticipante;
        } else if (jugada === "tijera") {
            btnPiedra.disabled=true;
            btnPapel.disabled=true;
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
            alert("El ganador total es" + " " + nombreJugador);
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
        txt.disabled=false;
        btnentrar.disabled=false;
        txt.focus();
    }

    function activarBotonesJugada(){
        btnPiedra.disabled = false;
        btnPapel.disabled = false;
        btnTijera.disabled = false;
    }

    //funcion para comparar las jugadas de los participantes
    function jugadaGanadora() {
        if (jugadaParticipante.trim().length === 0) {
            alert("Por favor debe elegir una opcion de jugada");
        } else {
            jugadaCompu();
            if (opciones[jugadaPc] === jugadaParticipante) {
                alert("Ha sido empate");
                contadorGeneral = contadorGeneral + 1;
                contgral.value = contadorGeneral;
                activarBotonesJugada();
            } else if (opciones[jugadaPc] === "piedra" && jugadaParticipante === "tijera" ||
                opciones[jugadaPc] === "papel" && jugadaParticipante === "piedra" ||
                opciones[jugadaPc] === "tijera" && jugadaParticipante === "papel") {
                alert("Pc ha ganado la partida");
                activarBotonesJugada();
                contadorPc = contadorPc + 1;
                contadorGeneral = contadorGeneral + 1;
                contPc.value = contadorPc;
                contgral.value = contadorGeneral;
            } else {
                alert(`${nombreJugador} ha ganado la partida`);
                activarBotonesJugada();
                contadorParticipante = contadorParticipante + 1;
                contadorGeneral = contadorGeneral + 1;
                contPar.value = contadorParticipante;
                contgral.value = contadorGeneral;
            }
            if (contadorGeneral == 5) {
                ganadorTotal(contadorParticipante, contadorPc);
            }
        }
        jugadaParticipante="";
    }
})

