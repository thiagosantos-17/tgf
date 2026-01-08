document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');

    // Função para fechar o menu e reverter o ícone
    function closeMenu() {
        nav.classList.remove('active');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-label', 'Abrir Menu');
    }

    // 1. Toggle do Menu de Navegação para Mobile
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Muda o ícone do menu 
            if (nav.classList.contains('active')) {
                menuToggle.textContent = '✕'; // Ícone de Fechar
                menuToggle.setAttribute('aria-label', 'Fechar Menu');
            } else {
                closeMenu();
            }
        });
    }

    // 2. Fechar o Menu após Clique em um Link (Mobile)
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Só fecha se o menu estiver ativo
            if (nav.classList.contains('active')) {
                closeMenu();
            }
        });
    });

    // Removida a lógica complexa de "clicar fora" para simplificar o menu dropdown.
});
