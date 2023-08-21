window.addEventListener("load", function () {

    // variables globales
    let valorUno = 0;
    let valorDos = 0;
    let tipoOp = "";

    // Obtención de elementos html para agregar escuchadores de eventos
    let operacion = document.getElementById("btnResultado");
    operacion.addEventListener("click", resultadoOperacion);
    let reseteo = document.getElementById("btnReset");
    reseteo.addEventListener("click", limpiar1);
    let opSuma = document.getElementById("suma");
    opSuma.addEventListener("click", sumar);
    let opResta = document.getElementById("resta");
    opResta.addEventListener("click", restar);
    let opProducto = document.getElementById("producto");
    opProducto.addEventListener("click", multiplicar);
    let opResto = document.getElementById("resto");
    opResto.addEventListener("click", dividir);

    let display_uno = document.getElementById("op_uno");
    let display_dos = document.getElementById("op_dos");


    // funciones

    function limpiar1() { //funcion para resetear los campos de texto
        document.getElementById("op_uno").value = "";
        document.getElementById("op_dos").value = "";
        document.getElementById("campoResultado").value = "";
    }

    function limpiar() { //funcion para borrar los campos de valores ingresados
        document.getElementById("op_uno").value = "";
        document.getElementById("op_dos").value = "";
    }

    function estaVacio() { //funcion de control para campos vacios 
        let v1 = document.getElementById("op_uno").value;
        let v2 = document.getElementById("op_dos").value;
        if (v1 === "" || v2 === "") {
            alert("Debe ingresar los valores");
            limpiar();
            return 1;
        }
        return 0;
    }

    // funcion especial para ingresar solo números a los input
    display_uno.addEventListener("keydown", function (ev) {
        let nro = "0123456789";
        let tecla = ev.key;
        if (nro.indexOf(tecla) == -1) {
            alert("solo numeros");
        }
    });

    display_dos.addEventListener("keydown", function (ev) {
        let nro = "0123456789";
        let tecla = ev.key;
        if (nro.indexOf(tecla) == -1) {
            alert("solo numeros");
        }
    });

    function sumar() { //funcion que guarda el simbolo de operacion y valor uno 
        tipoOp = document.getElementById("suma").textContent;
        valorUno = parseFloat(document.getElementById("op_uno").value);
    }

    function restar() {//funcion que guarda el simbolo de operacion y valor uno
        tipoOp = document.getElementById("resta").textContent;
        valorUno = parseFloat(document.getElementById("op_uno").value);
    }

    function multiplicar() {//funcion que guarda el simbolo de operacion y valor uno
        tipoOp = document.getElementById("producto").textContent;
        valorUno = parseFloat(document.getElementById("op_uno").value);
    }

    function dividir() {//funcion que guarda el simbolo de operacion y valor uno
        tipoOp = document.getElementById("resto").textContent;
        valorUno = parseFloat(document.getElementById("op_uno").value);
    }

    function resultado(res) {//funcion que muestra el resultado de la operacion 
        let textresultado = document.getElementById("campoResultado");
        textresultado.value = res;
        limpiar();
    }

    //funcion que realiza las operaciones de acuerdo al simbolo guardado de operacion
    function resultadoOperacion() {
        let res = 0;
        valorDos = parseFloat(document.getElementById("op_dos").value);
        let flag = estaVacio();
        if (flag === 1) {
            return;
        } else {
            switch (tipoOp) {
                case "+":
                    res = parseFloat(valorUno) + parseFloat(valorDos);
                    resultado(res);
                    break;
                case "-":
                    res = parseFloat(valorUno) - parseFloat(valorDos);
                    resultado(res);
                    break;
                case "x":
                    res = parseFloat(valorUno) * parseFloat(valorDos);
                    resultado(res);
                    break;
            }
            if (tipoOp === "/" && valorDos === 0) { //control de division por cero
                alert("No se puede dividir por cero");
                limpiar();
                return;
            } else if (tipoOp === "/" && valorDos != 0) {
                res = parseFloat(valorUno) / parseFloat(valorDos);
                resultado(res);
            }
            limpiar();
        }
    }
});
