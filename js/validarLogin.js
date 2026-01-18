$(document).ready(function () {

    $('#loginForm').submit(function (e) {
        e.preventDefault();

        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        if (email === "" || password === "") {
            mostrarAlerta("Debe completar todos los campos", "danger");
            return;
        }

        if (email === "piedad@gmail.com" && password === "1234") {
            mostrarAlerta("Inicio de sesión correcto", "success");

            setTimeout(function () {
                window.location.href = "menuPrincipal.html";
            }, 1000);

        } else {
            mostrarAlerta("Email o contraseña incorrectos", "danger");
        }
    });

});

function mostrarAlerta(texto, tipo) {
    $('#alerta')
        .removeClass('d-none alert-success alert-danger')
        .addClass('alert-' + tipo)
        .text(texto);
}
