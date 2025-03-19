// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() { // Cambié el nombre de la función para que coincida con el HTML
    let inputNombre = document.getElementById("amigo").value.trim(); // Cambié 'nombre' por 'amigo' para que coincida con el id del input en el HTML
    if (inputNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(inputNombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agregue nombres antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
