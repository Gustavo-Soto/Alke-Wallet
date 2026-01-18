function guardarContacto() {
    const nombre = document.getElementById("nombre").value;
    const cbu = document.getElementById("cbu").value;
    const alias = document.getElementById("alias").value;
    const banco = document.getElementById("banco").value;

    if (!nombre || !cbu || !alias || !banco) {
        alert("Complete todos los campos");
        return;
    }

    const contacto = {
        nombre,
        cbu,
        alias,
        banco
    };

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(contacto);

    localStorage.setItem("contactos", JSON.stringify(contactos));

    alert("Contacto guardado correctamente");

    window.location.href = "sends.html";
}