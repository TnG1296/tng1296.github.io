
function revelarTexto(x) {
  const texto = document.getElementById("seccion-" + x);
  const boton = document.getElementById("boton-" + x)
  texto.classList.toggle("descripcion-revelada") ;
  boton.classList.toggle("boton-girado") ;
}

/*
fetch ('https://randomuser.me/api/')
  .then(response => response.json())
  .then(json => console.log(json))

  Usé al API para printear parte de la informacion random con la que complete el HTML
*/
