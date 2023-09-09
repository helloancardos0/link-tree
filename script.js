function toggleMode() {

  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if(html.classList.contains('light')) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/helloan-light.png')
    img.setAttribute(
      "alt",
      "Foto de Helloan Cardoso sorrindo com um blusão branco e uma máscara pendurada."
    )
  } 
  else {
      //se não manter a imagem normal
    img.setAttribute('src', 'assets/helloan-dark.png')
    img.setAttribute('alt', " Foto de Helloan Cardoso, fazendo um biquinho")
  }

  


  
}