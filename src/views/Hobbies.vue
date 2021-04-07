<template>
      <div class="container-gallery">

        <div class="gallery-item  column-width-1 row-width-3">
          <div class="photo">
            <img src="@/assets/gallery/viajar.jpg">
          </div>
          <div class="text">Viajar</div>
        </div>

        <div class="gallery-item  column-width-2 row-width-2">
          <div class="photo">
            <img src="@/assets/gallery/fotografia.jpg">
          </div>
          <div class="text">Fotografia</div>
        </div>

        <div class="gallery-item  column-width-1 row-width-3">
          <div class="photo">
            <img src="@/assets/gallery/automobilismo.jpg" >
          </div>
          <div class="text">Automobilismo</div>
        </div>

        <div class="gallery-item  column-width-1 row-width-3">
          <div class="photo">
            <img src="@/assets/gallery/aprender.jpg">
          </div>
          <div class="text">Aprender</div>
        </div>

        <div class="gallery-item  column-width-1 row-width-2">
          <div class="photo">
            <img src="@/assets/gallery/video.jpg">
          </div>
          <div class="text">Vídeo</div>
        </div>

      </div>  
</template>

<style scoped>
/*Definicao do layout (pai) */
.container-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
  grid-auto-flow: dense; /* para preencher 'buracos'*/
}

.gallery-item {
  width: 100%;
  height: 100%;
  position: relative; /* de acordo com o fluxo normal da pagina */
}

.gallery-item .photo {
  width: 100%;
  height: 100%;
  overflow: hidden; /* photo pode ser cortada  para caber, se necessario */
}

.gallery-item .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover; /*para que o objeto corresponda a proporcao da caixa */
  object-position: 50% 50%; /* alinhamento da imagem dentro da caixa (centro/centro)*/
  cursor: pointer; /*altera o cursor para uma "mao" */
  transition: .5s ease-in-out; /* em 1/2 segundo, ao passar o cursor, a imagem vai fazer zoom */
}

.gallery-item:hover .photo img {
  transform: scale(1.5); /*escala da animacao (ease-in-out)*/
}

.gallery-item .text {
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /*para o texto ficar centro centro*/
  color: #fff;
  font-size: 25px;
  /* Ordem dos elementos:
  Os elementos sobrepostos com um índice z maior cobrem aqueles com um menor*/
  z-index: 0;
  transition: .3s ease-in-out;
}


.gallery-item:hover .text {
  opacity: 1;
  padding: 1em;
  width: 100%;
  text-align: center;
  outline: 2px solid #fff;
  color: #555;
  background-color: #fff;
}

.gallery-item .text a {
  color: #fff;
}

.gallery-item:hover .text a{
  color: #555;
  text-decoration: none;
}

.column-width-1 {
  grid-column: span 1;
}

.column-width-2 {
  grid-column: span 2;
}

.column-width-3 {
  grid-column: span 3;
}

.row-width-1 {
  grid-row: span 1;
}

.row-width-2 {
  grid-row: span 2;
}

.row-width-3 {
  grid-row: span 3;
}

</style>