$(document).ready(function () {

    // --- SALDO ---
    let saldo = localStorage.getItem("saldo");

    if (saldo === null) {
        saldo = 100000;
        localStorage.setItem("saldo", saldo);
    }

    saldo = parseInt(saldo);
    $('#saldo').text('$' + saldo);

    $('#btnTransferir').click(function () {
        alert("Redirigiendo a Depositar");
        window.location.href = "depositos.html";
    });

    $('#btnDepositar').click(function () {
        alert("Redirigiendo a Enviar");
        window.location.href = "sends.html";
    });

    $('#btnMovimientos').click(function () {
        alert("Redirigiendo a Últimos movimientos");
        window.location.href = "transacciones.html";
    });

});