document.addEventListener('DOMContentLoaded', function() {

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const openMobileMenu = document.getElementById('open-mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');
  const mobileNavLink = document.querySelectorAll('#mobile-nav-link');
  let isMobileMenuOpen = false;




  function openMobileNav() {
    mobileMenu.classList.remove("hidden", "max-h-0");
    mobileMenu.classList.add("max-h-full");
    openMobileMenu.classList.add("hidden");
    closeMobileMenu.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
    isMobileMenuOpen = true;
}

function closeMobileNav() {
    mobileMenu.classList.remove("max-h-full");
    mobileMenu.classList.add("hidden", "max-h-0");
    closeMobileMenu.classList.add("hidden");
    openMobileMenu.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
    isMobileMenuOpen = false;
}

// Alternar menu ao clicar no botão
menuToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que o clique se propague para o document
    isMobileMenuOpen ? closeMobileNav() : openMobileNav();
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
    if (isMobileMenuOpen && !mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMobileNav();
    }
});

// Fecha o menu ao clicar em qualquer link dentro dele
mobileNavLink.forEach(link => {
  link.addEventListener("click", function () {
      closeMobileNav();
  });});

function scrollToPrice(){
  const pricingElement = document.getElementById('pricing');
  pricingElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  });
}

  

  
// Adiciona o scroll no btn "Começar Agora" da Section CTA
const btnScrollCta = document.getElementById('btn-scroll-cta')
btnScrollCta.addEventListener('click', () => {
  scrollToPrice()
})

// adiciona o scroll no btc "Experimente agora"
const btnScrollExperimentNow = document.getElementById('btn-experimente-agora')
btnScrollExperimentNow.addEventListener('click', () => {
  scrollToPrice()
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