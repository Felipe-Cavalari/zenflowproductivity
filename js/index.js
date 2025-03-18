document.addEventListener('DOMContentLoaded', function() {

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const openMobileMenu = document.getElementById('open-mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');

  // Toggle menu when button is clicked
  menuToggle.addEventListener('click', function() {
    // Verifica se a classe 'hidden' está presente
    if (mobileMenu.classList.contains('hidden')) {
      // Se estiver, remove a classe 'hidden'
      mobileMenu.classList.remove('hidden');
    } else {
      // Caso contrário, adiciona a classe 'hidden'
      mobileMenu.classList.add('hidden');
    }
  });


});