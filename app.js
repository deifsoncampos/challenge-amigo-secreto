// Lista para armazenar os nomes dos amigos
let nomes = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Obtém o elemento de entrada de texto
    let nome = input.value.trim(); // Obtém o valor digitado no campo de entrada (input), remove espaços em branco no início e no final para evitar nomes inválidos
    let mensagemErro = document.getElementById("resultado"); // Obtém o elemento para exibir mensagens

    // Verifica se o nome está vazio
    if (nome === "") {
        mensagemErro.textContent = "Por favor, insira um nome válido"; // Exibe mensagem de erro
        mensagemErro.style.color = "red"; // Define a cor do erro como vermelho
        input.value = ""; // Limpa o campo de entrada
        return; // Sai da função para evitar adicionar um nome inválido
    }

    nomes.push(nome); // Adiciona o nome à lista
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de entrada após adicionar o nome

    // Limpa mensagem de erro caso o usuário tenha adicionado um nome válido
    mensagemErro.textContent = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém o elemento da lista
    lista.innerHTML = ""; // Limpa a lista antes de atualizá-la

    // Percorre a lista de nomes e adiciona cada um como um item de lista
    nomes.forEach(nome => {
        let item = document.createElement("li"); // Cria um novo item de lista
        item.textContent = nome; // Define o texto do item
        lista.appendChild(item); // Adiciona o item à lista na interface
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há nomes na lista antes de sortear
    if (nomes.length === 0) {
        alert("Adicione nomes antes de sortear!"); // Alerta o usuário caso a lista esteja vazia
        return; // Sai da função
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length); // Gera um índice aleatório
    let nomeSorteado = nomes[indiceSorteado]; // Obtém o nome correspondente ao índice sorteado

    let resultado = document.getElementById("resultado"); // Obtém o elemento de resultado
    resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`; // Exibe o nome sorteado
    resultado.style.color = "green"; // Define a cor verde para a mensagem

    // Limpa a lista de nomes após o sorteio
    nomes = [];
    atualizarLista(); // Atualiza a interface para refletir a lista vazia
}
