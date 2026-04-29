/**
 * navbar.js - Funcionalidades do menu de navegação da Edugital+
 */

/**
 * Inicializa as funcionalidades da barra de navegação
 */
function initNavbar() {
    console.log('Inicializando navegação...');
    setupMobileMenu();
    setupStickyNav();
    highlightActiveMenuItem();
    setupSmoothScrolling();
    setupDropdownMenu();
    setupAuthState();
}

/**
 * Configura o menu mobile para dispositivos menores
 */
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (!menuToggle || !navMenu) return;
    
    // Inicializar estado do menu
    menuToggle.setAttribute('aria-expanded', 'false');
    
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        
        // Toggle classes
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Acessibilidade - anunciar mudança de estado
        const menuState = !expanded ? 'aberto' : 'fechado';
        console.log('Menu mobile ' + menuState);
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('.main-nav') && 
            !e.target.closest('.menu-toggle')) {
            
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.classList.remove('menu-open');
        }
    });
    
    // Fechar menu ao pressionar Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.classList.remove('menu-open');
        }
    });
    
    // Atualizar menu ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.classList.remove('menu-open');
        }
    });
}

/**
 * Configura navegação fixa ao rolar a página
 */
function setupStickyNav() {
    const header = document.querySelector('.site-header');
    
    if (!header) return;
    
    const headerHeight = header.offsetHeight;
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('sticky');
            document.body.style.paddingTop = headerHeight + 'px';
        } else {
            header.classList.remove('sticky');
            document.body.style.paddingTop = '0';
        }
    });
}

/**
 * Destaca o item de menu ativo com base na seção visível
 */
function highlightActiveMenuItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (!sections.length || !navLinks.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = '#' + entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Configura rolagem suave para links internos
 */
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]:not(.dropdown-toggle)');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links vazios ou dropdown toggles
            if (href === '#' || !href.startsWith('#')) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (!target) return;
            
            // Fechar menu mobile se estiver aberto
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
                document.body.classList.remove('menu-open');
            }
            
            // Calcular offset do header para posicionamento correto
            const headerOffset = document.querySelector('.site-header').offsetHeight;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Rolar suavemente para o alvo
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Configura funcionalidade de dropdown do menu
 */
function setupDropdownMenu() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        // Clique para dispositivos móveis
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const parent = this.parentNode;
            
            // Fechar outros dropdowns abertos
            document.querySelectorAll('.dropdown.active').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle atual
            parent.classList.toggle('active');
        });
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

/**
 * Configura estado de autenticação do usuário
 */
function setupAuthState() {
    // Verifica se o usuário está logado (usando cookie ou localStorage)
    const isLoggedIn = checkIfUserIsLoggedIn();
    const headerActions = document.querySelector('.header-actions');
    const accountDropdown = document.querySelector('.dropdown');
    
    if (isLoggedIn) {
        // Se logado, mostra dropdown de conta e esconde botão de login
        if (headerActions) {
            const loginButton = headerActions.querySelector('.btn-outline');
            if (loginButton) loginButton.style.display = 'none';
        }
        if (accountDropdown) accountDropdown.style.display = 'block';
    } else {
        // Se não logado, esconde dropdown de conta
        if (accountDropdown) accountDropdown.style.display = 'none';
    }
}

/**
 * Função auxiliar para verificar se o usuário está logado
 * Esta é uma implementação básica, deve ser ajustada conforme seu sistema de autenticação
 */
function checkIfUserIsLoggedIn() {
    // Verificar cookie ou localStorage para token de autenticação
    // Exemplo simples - substitua com sua lógica real de autenticação
    const token = localStorage.getItem('authToken') || getCookie('authToken');
    return !!token; // Retorna true se token existir
}

/**
 * Função para obter valor de cookie
 */
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initNavbar); 