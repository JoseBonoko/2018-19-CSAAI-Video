function main()
{
  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  videoprincipal = document.getElementById("videoprincipal")

  //-- Establecer el tamaño y fuente del vídeo1
  video1.width = 300;
  video1.height= 200;
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  //-- Establecer el tamaño y fuente del vídeo2
  video2.width = 300;
  video2.height= 200;
  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  //-- Establecer el tamaño y fuente del vídeo3
  video3.width = 300;
  video3.height= 200;
  video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
  //-- Establecer el tamaño del vídeoprincipal
  videoprincipal.width = 500;
  videoprincipal.height= 400;

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  // Poner o quitar sonido de los videos
  video1.onmouseover = () => {
    console.log("Mouse over 1!!");
    video1.muted = false;
  }
  video1.onmouseout = () => {
    console.log("Mouse out 1!!");
    video1.muted = true;
  }

  video2.onmouseover = () => {
    console.log("Mouse over 2!!");
    video2.muted=false;
  }
  video2.onmouseout = () => {
    console.log("Mouse out 2!!");
    video2.muted=true;
  }

  video3.onmouseover = () => {
    console.log("Mouse over 3!!");
    video3.muted=false;
  }
  video3.onmouseout = () => {
    console.log("Mouse out 3!!");
    video3.muted=true;
  }


  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    console.log("Ver video 1!")
    videoprincipal.src = video1.src;
  }
  ver2.onclick = () => {
    console.log("Ver video 2!")
    videoprincipal.src = video2.src;
  }
  ver3.onclick = () => {
    console.log("Ver video 3!")
    videoprincipal.src = video3.src;
  }
}
