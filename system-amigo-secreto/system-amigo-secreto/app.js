// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amistades = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    

        if (nuevoAmigo.trim() === ""){
        document.getElementById("resultado").innerHTML = `No has ingresado datos aún`;
        }else{
        document.getElementById("resultado").innerHTML = "";
        amistades.push(nuevoAmigo);
        }
    
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
    
    mostrarAmigos();
} 

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amistades.length; i++) {
        let li = document.createElement("li");
        li.textContent = amistades[i];
        lista.appendChild(li);
    }
    
}
function sortearAmigo() {

    if (amistades.length === 0) {
        document.getElementById("resultado").innerHTML = `No hay personas para realizar el sorteo`;
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amistades.length);

    let amigoSorteado = amistades[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}