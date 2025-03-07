function menuShow(event) {
  event.preventDefault(); // Impede que o clique no link cause recarregamento da página

  let menuMobile = document.querySelector(".mobile-menu");
  menuMobile.classList.toggle("open");
}

// Pegando o botão de menu hambúrguer e adicionando o evento de clique
document.addEventListener("DOMContentLoaded", function () {
  let menuButton = document.querySelector(".hamburger");
  if (menuButton) {
    menuButton.addEventListener("click", menuShow);
  }
});
