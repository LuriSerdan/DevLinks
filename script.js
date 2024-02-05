function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Luri Serdan com camiseta verde, cabelo comprido preto")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

