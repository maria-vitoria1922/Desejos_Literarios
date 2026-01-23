const botao = document.getElementById("btn-desejos");
const obras = document.getElementById("obras");

botao.addEventListener("click", function () {
    if (obras.style.display === "none") {
      obras.style.display = "block";
    } else {
      obras.style.display = "none";
    }

    adicionar_elemento()
});

function adicionar_elemento () {
  //armazena os dados do formulário
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let quantidade = document.getElementById("quantidade").value;
    let valor = document.getElementById("valor").value;

    // cria o card
    let card = document.createElement("div");
    card.classList.add("card");


    //adiciona os icones e os elementos ao card
    card.innerHTML = `
        <div class="icons">
            <span class="icon delete"><i class="fa-solid fa-trash-can"></i></span>
            <span class="icon edit"><i class="fa-solid fa-paintbrush"></i></span>
        </div>

        <h1>${titulo}</h1>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
        <p><strong>Valor Unitário:</strong> R$${Number(valor).toFixed(2)}</p>
    `;

    // adiciona no container
    obras.appendChild(card);

    // limpa o form
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("valor").value = "";
}