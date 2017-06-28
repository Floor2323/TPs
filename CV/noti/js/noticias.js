// Tenemos varias funciones armadas que podemos usar:

// obtenerNoticias(): toma todas las noticias de la página
//
// ocultarNoticia(noticia): oculta la noticia pasada como parámetro
// mostrarNoticia(noticia): muestra la noticia pasada como parámetro
//
// contienePalabra(noticia, palabra): devuelve true si la noticia tiene la palabra
// pasada como parámetro
//
// recortarTexto(noticia, cantidadPalabras): recorta el texto de la noticia para
// que su largo sea cantidadPalabras


var noticias = obtenerNoticias();

// Esta función está de muestra para ver como funciona el while
// Sólo se está recorriendo las noticias y cambiándole el color
function marcarNoticiasConWhile(){
  var contador = 0;
  // Recorre la variable noticias, iluminando en la que se encuentra en cada momento
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(153, 150, 160)');
    contador++; //contador = contador + 1
  }
}

// Ahora lo mismo pero con un for para ver cuales son las diferencias con el while
function marcarNoticiasConFor(){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(153, 150, 160)');
  }
}
// Esta la tienen que hacer, puede ser con while o for
function resaltarNoticiasQueContengan(palabra){
for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    var flor= contienePalabra(noticiaActual, palabra);
    if(flor==true)
    cambiarColor(noticiaActual, 'rgb(252, 227, 174)');
  }
}
function resaltarNoticiasQueContenga(palabra){
for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    var gato= contienePalabra(noticiaActual, palabra);
    if(gato==true)
    cambiarColor(noticiaActual, 'rgb(205, 191, 252)');
}
}

// Si la noticia incluye la palabra, la ocultamos.
function ocultarNoticiasQueContengan(palabra){
for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    var hola= contienePalabra(noticiaActual, palabra);
    if(hola==true){
      ocultarNoticia(noticiaActual);
    }
  }
}

function recortarNoticias(cantPalabras){
for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    recortarTexto (noticiaActual, cantPalabras);
  }
}

// Acá abajo podés poner las funciones que quieras usar
//marcarNoticiasConWhile()
//marcarNoticiasConFor()
// ...
resaltarNoticiasQueContengan("robots");
resaltarNoticiasQueContenga("argentino");
ocultarNoticiasQueContengan("Google");
recortarNoticias(20);