const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

function openCard(char) {
  if (char === "leleny") {
    modalTitle.textContent = "Leleny";
    modalDesc.textContent =
      "Um garoto calmo, aconchegante e sensível ao mundo ao redor. Seu poder, Poeira Estrelar, permite manipular partículas luminosas que podem acalmar, iluminar caminhos ou criar pequenos feixes mágicos.";
  }

  if (char === "nicky") {
    modalTitle.textContent = "Nicky";
    modalDesc.textContent =
      "Animado e gentil, Nicky sonha em ser Youtuber de Vlogs. Seu poder, Pétalas Rosadas, cura ferimentos e traz tranquilidade para quem está ao redor.";
  }

  modal.style.display = "flex";
}

function closeCard() {
  modal.style.display = "none";
}
