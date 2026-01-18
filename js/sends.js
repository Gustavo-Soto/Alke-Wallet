console.log("Cargando...");

let contactoSeleccionado = "";

/* Mostrar formulario nuevo contacto */
$("#btnnuevoContacto").click(function () {
    $("#formNuevoContacto").slideDown();
});

/* Ocultar formulario */
$("#cancelarContacto").click(function () {
    $("#formNuevoContacto").slideUp();
});

/* Guardar contacto con validación */
$("#guardarContacto").click(function () {
    const nombre = $("#nombreContacto").val().trim();
    const cbu = $("#cbuContacto").val().trim();

    if (nombre === "" || cbu === "") {
        alert("Debe completar todos los campos");
        return;
    }

    if (cbu.length !== 7) {
        alert("El CBU debe tener 7 dígitos");
        return;
    }

    $("#listaContactos").append(
        `<li class="list-group-item contacto">${nombre}</li>`
    );

    $("#formNuevoContacto").slideUp();
    $("#nombreContacto").val("");
    $("#cbuContacto").val("");
});

/* Buscar contacto */
$("#buscarContacto").on("keyup", function () {
    const valor = $(this).val().toLowerCase();

    $(".contacto").filter(function () {
        $(this).toggle($(this).text().toLowerCase().includes(valor));
    });
});

/* Seleccionar contacto */
$(document).on("click", ".contacto", function () {
    $(".contacto").removeClass("active");
    $(this).addClass("active");

    contactoSeleccionado = $(this).text();
    $("#btnEnviar").show();
});

/* Enviar dinero */
$("#btnEnviar").click(function () {
    const monto = parseInt($("#montoDeposito").val());

    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un monto válido");
        return;
    }

    let saldo = parseInt(localStorage.getItem("saldo")) || 0;

    if (monto > saldo) {
        alert("Saldo insuficiente");
        return;
    }

    saldo -= monto;
    localStorage.setItem("saldo", saldo);

    /* Guardar movimiento */
    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.unshift({
        tipo: "Transferencia",
        destinatario: contactoSeleccionado,
        monto: monto,
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    /* Mensaje Bootstrap */
    $("#mensajeConfirmacion").html(`
        <div class="alert alert-success">
            Transferencia realizada con éxito a <strong>${contactoSeleccionado}</strong>
        </div>
    `);
});