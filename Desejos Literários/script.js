const botao = document.getElementById("btn-desejos");
const obras = document.getElementById("obras");

botao.addEventListener("click", function () {
    if (obras.style.display === "none") {
      obras.style.display = "block";
    } else {
      obras.style.display = "none";
    }
});

