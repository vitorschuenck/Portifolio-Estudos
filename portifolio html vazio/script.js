document.addEventListener("DOMContentLoaded", function () {
  var imagem = document.querySelector('.img-sobremim')
  var imagens = [
    'imagens/1763400798349.jpg',
    ' imagens/1763400798363.jpg',
    'imagens/1763400798367.jpg',
    'imagens/Generated Image October 10, 2025 - 1_55PM.png',
    'imagens/WhatsApp Image 2025-11-17 at 9.30.40 PM.jpeg'
  ]
  var proximaimagem = 0
  var atualizarslide = function(){
    imagem.setAttribute('src', imagens[proximaimagem])
    proximaimagem++
    if(proximaimagem >= 5){
      proximaimagem = 0
    }
  }
 setInterval(atualizarslide, 2500)
})
