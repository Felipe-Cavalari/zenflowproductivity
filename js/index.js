document.addEventListener('DOMContentLoaded', function() {

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const openMobileMenu = document.getElementById('open-mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');
  let isMobileMenuOpen = false;


  function openMobileNav() {
    mobileMenu.classList.remove('hidden', 'max-h-0');
    mobileMenu.classList.add('max-h-full');
    openMobileMenu.classList.add('hidden');
    closeMobileMenu.classList.remove('hidden');
  }

  function closeMobileNav() {
    mobileMenu.classList.remove('max-h-full');
    mobileMenu.classList.add('hidden', 'max-h-0');
    closeMobileMenu.classList.add('hidden');
    openMobileMenu.classList.remove('hidden');
  }

  menuToggle.addEventListener('click', function() {
    isMobileMenuOpen ? closeMobileNav() : openMobileNav();
    isMobileMenuOpen = !isMobileMenuOpen;
  })



  

  
// Adiciona o scroll no btn "Começar Agora" da Section CTA
const btnScrollCta = document.getElementById('btn-scroll-cta')
btnScrollCta.addEventListener('click', () => {
  const pricingElement = document.getElementById('pricing');
    pricingElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        
    });
})




// Adiciona o alerta para caso alguem clique em compre agora antes do lançamento
const btnAlertPricing = document.getElementById('btn-alert-pricing')
btnAlertPricing.addEventListener('click', () => {
    const alert = document.getElementById('alert');
    alert.classList.remove('hidden')  // Exibe o alerta
    setTimeout(closeAlert, 3000);  // Fecha o alerta após 3 segundos
})

// Função para fechar o alerta
function closeAlert() {
    const alert = document.getElementById('alert');
    alert.classList.add('hidden')  // Esconde o alerta
}


});