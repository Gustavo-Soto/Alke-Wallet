$(document).ready(function () {

    // Mostrar saldo actual al cargar la página
    let saldo = localStorage.getItem("saldo");

    if (saldo === null) {
        saldo = 100000;
        localStorage.setItem("saldo", saldo);
    }

    $('#saldoActual').text('$' + parseInt(saldo));

    // Evento botón depositar
    $('#btnDepositar').click(function () {

        const monto = parseInt($('#monto').val());

        if (isNaN(monto) || monto <= 0) {
            mostrarAlerta("Ingrese un monto válido", "danger");
            return;
        }

        let saldoActual = parseInt(localStorage.getItem("saldo"));
        saldoActual += monto;

        localStorage.setItem("saldo", saldoActual);

        // Mostrar leyenda del monto depositado
        mostrarAlerta(
            `Depósito realizado con éxito. Monto depositado: $${monto}`,
            "success"
        );

        // Redirigir después de 2 segundos
        setTimeout(function () {
            window.location.href = "menuPrincipal.html";
        }, 2000);
    });

    // Función para alertas Bootstrap
    function mostrarAlerta(mensaje, tipo) {
        $('#alert-container').html(`
            <div class="alert alert-${tipo}" role="alert">
                ${mensaje}
            </div>
        `);
    }

});