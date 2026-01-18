const lista = document.getElementById("listaMovimientos");

let movimientos = JSON.parse(localStorage.getItem("movimientos"));

// Si no hay movimientos, crear ejemplos
if (!movimientos || movimientos.length === 0) {
    movimientos = [
        {
            tipo: "Transferencia",
            destinatario: "Alejandro Soto",
            banco: "Banco Estado",
            monto: 15000,
            fecha: "2026-01-15 18:30"
        },
        {
            tipo: "Transferencia",
            destinatario: "María González",
            banco: "Banco de Chile",
            monto: 8500,
            fecha: "2026-01-14 12:10"
        }
    ];

    localStorage.setItem("movimientos", JSON.stringify(movimientos));
}

// Mostrar movimientos
movimientos.forEach(mov => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
        <strong>${mov.tipo}</strong><br>
        Destinatario: ${mov.destinatario}<br>
        Banco: ${mov.banco}<br>
        Monto: $${mov.monto}<br>
        Fecha: ${mov.fecha}
    `;

    lista.appendChild(li);
});