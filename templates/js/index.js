document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openMobileMenu = document.getElementById("open-mobile-menu");
  const closeMobileMenu = document.getElementById("close-mobile-menu");
  const mobileNavLink = document.querySelectorAll("#mobile-nav-link");
  let isMobileMenuOpen = false;
  const anoAtual = document.getElementById("ano-atual");

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
    if (
      isMobileMenuOpen &&
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileNav();
    }
  });

  // Fecha o menu ao clicar em qualquer link dentro dele
  mobileNavLink.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileNav();
    });
  });

  // Script par o search bar funcionar
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".template-card");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    cards.forEach((card) => {
      const title = card.getAttribute("data-title").toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });
});
