// o *document* é a representação do HTML no navegador
// *querySelectorAll(o All é para buscar uma lista)* ele serve para vc passar(selecionar) qualquer class/tag e etc...
// *addEventListener* ele serve para adicionar um evento, por exemplo um "click"
// *mouseenter* seria a entrada do mouse no elemeto
// *classList.add* vc traz a Class de uma ação e tb da para colocar o add que adiciona uma classe nos outros elementou que não tinham a mesma

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    removerSelecaoDoPersonagem();
    personagem.classList.add("selecionado");
    alterarImagemPersonagemSelecionado(personagem);
    alterarNomePersonagemSelecionado(personagem);
    alterarDescricaoPersonagem(personagem);
  });
});

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
