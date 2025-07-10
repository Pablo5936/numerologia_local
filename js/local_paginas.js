let tema = localStorage.getItem('tema')
if (tema) {
  // si existe la clave
  document.getElementById('theme').value = './css/' + tema + '.css'
} else {
  // si no existe la clave, asigna el tema por defecto
  document.getElementById('theme').value = './css/inicio.css'
}
