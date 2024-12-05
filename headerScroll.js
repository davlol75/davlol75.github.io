// Detectar el scroll y cambiar el estilo del header
window.onscroll = function() {
    var header = document.querySelector('header');
    
    // Si el scroll es mayor que 50px, se agrega la clase 'solid'
    if (window.scrollY > 50) {
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
    }
  };
  