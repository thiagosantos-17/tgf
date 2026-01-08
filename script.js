document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');

    /**
     * Função para fechar o menu e reverter o ícone
     */
    function closeMenu() {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    /**
     * 1. Toggle do Menu (Abrir/Fechar no clique do botão)
     */
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(e) {
            // Previne que o clique no botão dispare o evento de fechar do document
            e.stopPropagation(); 
            
            nav.classList.toggle('active');
            
            if (nav.classList.contains('active')) {
                menuToggle.textContent = '✕'; 
                menuToggle.setAttribute('aria-label', 'Fechar Menu');
            } else {
                closeMenu();
            }
        });
    }

    /**
     * 2. Fechar o Menu após Clique em um Link (Mobile)
     */
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    /**
     * 3. Lógica de "Clicar Fora": Fecha o menu se clicar em qualquer lugar da tela
     * que não seja o próprio menu ou o botão de toggle.
     */
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            closeMenu();
        }
    });

    /**
     * 4. Acessibilidade: Fecha o menu ao pressionar a tecla ESC
     */
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});
