// script.js

// Obtém o botão e o ícone de tema
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Função para alternar entre light e dark
const toggleTheme = () => {
  // Se o tema atual for 'dark', troca para 'light', caso contrário, para 'dark'
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    themeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 14v1m4.5-12.5l-.707.707M5.707 16.293l-.707.707M4.5 12.5l.707-.707M18.293 7.707l.707-.707M19 12a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    `;
  } else {
    document.documentElement.classList.add('dark');
    themeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 14v1m4.5-12.5l-.707.707M5.707 16.293l-.707.707M4.5 12.5l.707-.707M18.293 7.707l.707-.707M19 12a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    `;
  }
};

// Adiciona um listener de clique no botão para alternar os temas
themeToggleBtn.addEventListener('click', toggleTheme);

// Verifica o tema preferido do usuário e aplica
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
  themeIcon.innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 14v1m4.5-12.5l-.707.707M5.707 16.293l-.707.707M4.5 12.5l.707-.707M18.293 7.707l.707-.707M19 12a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  `;
}