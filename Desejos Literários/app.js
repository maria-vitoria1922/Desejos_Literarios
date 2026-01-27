// botão e container de cards
const botao = document.getElementById("btn-desejos");
const obras = document.getElementById("obras");
const form = document.getElementById("formulario");
const botaoLista = document.getElementById("btn-lista");

// lista para armazenar os livros 
const listalivros = [];

// para as validações
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const quantidade = document.getElementById("quantidade");
const valor = document.getElementById("valor");
const mensagem = document.getElementById("msg");

// mostra e esconde o container de obras
const tituloObras = document.getElementById("titulo-obras");

botaoLista.addEventListener("click", function () {
  if (obras.style.display === "none") {
    tituloObras.style.display = "block";
    obras.style.display = "block";
    botaoLista.innerText = "Ocultar lista";
  } else {
    tituloObras.style.display = "none";
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
    mensagem.innerText = "Adicione um título ao livro!";
    return;
  }

  else if (Number(titulo.value) > 0 || Number(titulo.value) === 0) {
  mensagem.innerText = " O nome do seu livro não está incorreto?";
  return;
}

  else if (!descricao.value) {
    mensagem.innerText = "Adicione uma descrição ao livro!";
    return;
  }

  else if (Number(descricao.value) > 0 || Number(descricao.value) === 0) {
  mensagem.innerText = "A descrição não pode conter apenas números!";
  return;
}

  else if (!quantidade.value) {
    mensagem.innerText = "Adicione a quantidade de livros!";
    return;
  }

  else if (Number(quantidade.value) <= 0) {
  mensagem.innerText = "Informe uma quantidade válida!";
  return;
}

  else if (!valor.value) {
    mensagem.innerText = "Adicione o valor do livro!";
    return;
  }

  else if (Number(valor.value) <= 0) {
  mensagem.innerText = "Informe um valor válido!";
  return;
}

  mensagem.innerText = "";
  adicionar_elemento();

  botao.innerText = "ADICIONADO";
  // o botão vira ADICIONADO
  setTimeout(() => {
   botao.innerText = "ADICIONAR";
  }, 2000);
});

function adicionar_elemento() {
  // armazena os dados do formulário
  let tituloValor = titulo.value;
  let descricaoValor = descricao.value;
  let quantidadeValor = quantidade.value;
  let valorUnitario = valor.value;

   // cria o objeto do livro
  let livro = {
    titulo: tituloValor,
    descricao: descricaoValor,
    quantidade: quantidadeValor,
    valor: valorUnitario
  };

  // adiciona na lista
  listalivros.push(livro);

  // atualiza tela
  renderizarLista();

   // limpa 
  titulo.value = "";
  descricao.value = "";
  quantidade.value = "";
  valor.value = "";
};

  function renderizarLista() {
  obras.innerHTML = "";

  for (let i = 0; i < listalivros.length; i++) {
    let novolivro = document.createElement("li");
    novolivro.textContent = listalivros[i];


  // adiciona os ícones e os elementos a UL
  novolivro.innerHTML = `
    <div class="icons">
      <span class="delete"><i class="fa-solid fa-trash-can"></i></span>
      <span class="edit"><i class="fa-solid fa-paintbrush"></i></span>
    </div>

    <h1>${listalivros[i].titulo}</h1>
    <p><strong>Descrição:</strong> ${listalivros[i].descricao}</p>
    <p><strong>Quantidade:</strong> ${listalivros[i].quantidade}</p>
    <p><strong>Valor Unitário:</strong> R$${Number(listalivros[i].valor).toFixed(2)}</p>
  `;
  
  // excluir item específico
    novolivro.querySelector(".delete").addEventListener("click", () => {
      listalivros.splice(i, 1);
      mensagem.innerText = "Livro removido da sua lista de desejos com sucesso!";
      renderizarLista();
  
    });

  // editar item
    novolivro.querySelector(".edit").addEventListener("click", () => {
      let editarlivrocampo=prompt("Qual campo deseja editar? (titulo, descricao, quantidade, valor)");
      let novoValor = prompt("Digite o novo valor:");
      listalivros[i][editarlivrocampo] = novoValor;

      if (editarlivrocampo !== "") {
      titulo.value = listalivros[i].titulo;
      descricao.value = listalivros[i].descricao;
      quantidade.value = listalivros[i].quantidade;
      valor.value = listalivros[i].valor;
      
      mensagem.innerText = "Campo editado com sucesso!";
      renderizarLista();
    }});
  
  // adiciona na lista
  obras.appendChild(novolivro);
  }
}

// troca de tema 
const temaIcone = document.getElementById("tema");

temaIcone.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");

  if (document.body.classList.contains("modo-escuro")) {
    temaIcone.classList.remove("fa-moon");
    temaIcone.classList.add("fa-sun");
  } else {
    temaIcone.classList.remove("fa-sun");
    temaIcone.classList.add("fa-moon");
  }
});
