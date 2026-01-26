// botão e container de cards
const botao = document.getElementById("btn-desejos");
const obras = document.getElementById("obras");
const form = document.getElementById("formulario");
const botaoLista = document.getElementById("btn-lista");

// para as validações
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const quantidade = document.getElementById("quantidade");
const valor = document.getElementById("valor");
const mensagem = document.getElementById("msg");

// mostra e esconde o container de obras
botaoLista.addEventListener("click", function () {
  if (obras.style.display === "none") {
    obras.style.display = "block";
    botaoLista.innerText = "Ocultar lista";
  } else {
    obras.style.display = "none";
    botaoLista.innerText = "Mostrar lista";
  }
});

// validações do cadastro
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!titulo.value && !descricao.value && !quantidade.value && !valor.value) {
    mensagem.innerText = "Preencha todos os campos!";
    return;
  }

  if (!titulo.value) {
    mensagem.innerText = "Adicione um titulo ao livro!";
    return;
  }

  else if (!descricao.value) {
    mensagem.innerText = "Adicione uma descrição ao livro!";
    return;
  }

  else if (!quantidade.value) {
    mensagem.innerText = "Adicione a quantidade de livros!";
    return;
  }

  else if (!valor.value) {
    mensagem.innerText = "Adicione o valor do livro!";
    return;
  }

  mensagem.innerText = "";
  adicionar_elemento();
  botao.innerText = "Adicionado";
});

function adicionar_elemento() {
  // armazena os dados do formulário
  let tituloValor = titulo.value;
  let descricaoValor = descricao.value;
  let quantidadeValor = quantidade.value;
  let valorUnitario = valor.value;

  // cria o card
  let card = document.createElement("div");
  card.classList.add("card");

  // adiciona os ícones e os elementos ao card
  card.innerHTML = `
    <div class="icons">
      <span class="icon delete"><i class="fa-solid fa-trash-can"></i></span>
      <span class="icon edit"><i class="fa-solid fa-paintbrush"></i></span>
    </div>

    <h1>${tituloValor}</h1>
    <p><strong>Descrição:</strong> ${descricaoValor}</p>
    <p><strong>Quantidade:</strong> ${quantidadeValor}</p>
    <p><strong>Valor Unitário:</strong> R$${Number(valorUnitario).toFixed(2)}</p>
  `;

  // adiciona no container
  obras.appendChild(card);

  // limpa o form
  titulo.value = "";
  descricao.value = "";
  quantidade.value = "";
  valor.value = "";
}