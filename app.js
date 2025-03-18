// Criar array para armazenar os nomes
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); //Para remover espaços extras

    if (!nomeAmigo) {
        alert("Digite o nome do amigo");
        return; // Não adicionar se o campo estiver vazio
    }
    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já foi adicionado!");
        return;
    }
    
    amigos.push(nomeAmigo); // Adiciona o nome na lista
    inputAmigo.value = ""; // Limpa o campo de input
    inputAmigo.focus(); // Foca no campo de input após adicionar o nome
    renderizarLista(); // Atualiza a lista de amigos na tela
}

function renderizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo; 
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) { // Verifica se há pelo menos 2 amigos para sortear
        alert("É necessário pelo menos 2 amigos para realizar o sorteio");
        return;
    }

    // Sorteia um amigo aleatório
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `O sorteado é: <strong>${sorteado}</strong>`;

    // Limpa a lista após sorteio
    document.getElementById("listaAmigos").innerHTML = "";
}
