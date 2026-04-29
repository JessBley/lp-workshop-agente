/**
 * main.js - Configuração e inicialização global do site Edugital+
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Edugital+ - Site carregado!');
    
    // Inicializar todos os módulos JS (apenas se existirem)
    if (typeof initNavbar === 'function') initNavbar();
    if (typeof initCarousel === 'function') initCarousel();
    if (typeof initCountdown === 'function') initCountdown();
    if (typeof initForms === 'function') initForms();
    if (typeof initCourseFilters === 'function') initCourseFilters();
    if (typeof initContactModal === 'function') initContactModal();
    if (typeof initCookieConsent === 'function') initCookieConsent();
    
    // Ativar animações ao scroll
    initScrollAnimations();
    
    // Inicializar lazy loading
    initLazyLoading();
    
    // Detectar suporte para WebP
    detectWebPSupport();
    
    // Registrar service worker para PWA
    registerServiceWorker();

});

/**
 * Função para carregar scripts de forma assíncrona
 * @param {string} url - URL do script a ser carregado
 * @param {Function} callback - Função a ser executada após carregar o script
 */
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
}

/**
 * Inicializa o lazy loading de imagens
 */
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Navegador suporta lazy loading nativo
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        console.log(`Usando lazy loading nativo para ${lazyImages.length} imagens`);
    } else {
        // Implementar lazy loading via JavaScript para navegadores não suportados
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                // Guardar src original em data-src se ainda não existe
                if (!img.dataset.src && img.src) {
                    img.dataset.src = img.src;
                    // Definir um placeholder ou uma imagem de baixa qualidade
                    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
                }
                imageObserver.observe(img);
            });
            console.log(`Polyfill para lazy loading aplicado em ${lazyImages.length} imagens`);
        } else {
            // Sem suporte para IntersectionObserver - carregar imagens normalmente
            lazyImages.forEach(img => {
                img.src = img.dataset.src || img.src;
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
            });
        }
    }
}

/**
 * Detectar suporte para formato de imagem WebP
 */
function detectWebPSupport() {
    const webP = new Image();
    webP.onload = function() {
        const isWebPSupported = (webP.height === 1);
        document.documentElement.classList.toggle('webp', isWebPSupported);
    };
    webP.onerror = function() {
        document.documentElement.classList.toggle('webp', false);
    };
    webP.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAD8D+JaQAA3AA/ua1AAA=';
}

/**
 * Registra service worker para funcionalidades PWA
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registrado com sucesso:', registration.scope);
                })
                .catch(error => {
                    console.log('Falha ao registrar Service Worker:', error);
                });
        });
    }
}

/**
 * Função auxiliar para criar modais dinamicamente
 * @param {string} title - Título do modal
 * @param {string} content - Conteúdo HTML do modal
 * @param {Function} callback - Função a ser executada após abrir o modal
 */
function createModal(title, content, callback) {
    // Verificar se já existe um modal aberto e remover
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Criar estrutura do modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h3');
    modalTitle.id = 'modal-title';
    modalTitle.textContent = title;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Fechar');
    closeButton.addEventListener('click', () => {
        closeModal(modal);
    });
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = content;
    
    // Montar estrutura
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    modal.appendChild(modalContent);
    
    // Adicionar ao body
    document.body.appendChild(modal);
    
    // Adicionar evento para fechar ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Adicionar evento para fechar ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.querySelector('.modal')) {
            closeModal(modal);
        }
    });
    
    // Focar no primeiro elemento interativo
    setTimeout(() => {
        const focusableElements = modalContent.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length) {
            focusableElements[0].focus();
        } else {
            closeButton.focus();
        }
    }, 100);
    
    // Executar callback se existir
    if (typeof callback === 'function') {
        callback(modal);
    }
    
    return modal;
}

/**
 * Inicializa o modal de contato (formulário Google)
 */
function initContactModal() {
    const contactModal = document.getElementById('contactModal');
    if (!contactModal) return;

    const triggers = document.querySelectorAll('[data-contact-trigger]');
    const closeTargets = contactModal.querySelectorAll('[data-contact-close]');
    const body = document.body;
    let lastFocusedElement = null;

    function openModal() {
        lastFocusedElement = document.activeElement;
        contactModal.classList.add('is-active');
        contactModal.setAttribute('aria-hidden', 'false');
        body.classList.add('modal-open');

        // Lazy load iframe src
        const iframe = contactModal.querySelector('.contact-modal__iframe');
        if (iframe && iframe.dataset.src && (!iframe.src || iframe.src === 'about:blank' || !iframe.src.includes('docs.google.com'))) {
            iframe.src = iframe.dataset.src;
        }

        const closeButton = contactModal.querySelector('.contact-modal__close');
        if (closeButton) {
            setTimeout(() => closeButton.focus(), 50);
        }
    }

    function closeModal() {
        contactModal.classList.remove('is-active');
        contactModal.setAttribute('aria-hidden', 'true');
        body.classList.remove('modal-open');

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            openModal();
        });
    });

    closeTargets.forEach(target => {
        target.addEventListener('click', (event) => {
            event.preventDefault();
            closeModal();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && contactModal.classList.contains('is-active')) {
            closeModal();
        }
    });
}

/**
 * Inicializa o painel de consentimento de cookies
 */
function initCookieConsent() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;

    const storageKey = 'edugital_cookie_consent';
    const analyticsInput = banner.querySelector('input[name="cookie_analytics"]');
    const marketingInput = banner.querySelector('input[name="cookie_marketing"]');
    const acceptBtn = banner.querySelector('[data-cookie-accept]');
    const rejectBtn = banner.querySelector('[data-cookie-reject]');
    const saveBtn = banner.querySelector('[data-cookie-save]');
    const preferenceButtons = document.querySelectorAll('[data-cookie-preferences]');

    function readConsent() {
        try {
            return JSON.parse(localStorage.getItem(storageKey));
        } catch (error) {
            return null;
        }
    }

    function writeConsent(consent) {
        const payload = {
            necessary: true,
            analytics: !!consent.analytics,
            marketing: !!consent.marketing,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem(storageKey, JSON.stringify(payload));
    }

    function applyConsentToInputs(consent) {
        if (!consent) return;
        if (analyticsInput) analyticsInput.checked = !!consent.analytics;
        if (marketingInput) marketingInput.checked = !!consent.marketing;
    }

    function openBanner() {
        const currentConsent = readConsent();
        applyConsentToInputs(currentConsent);
        banner.classList.add('is-visible');
        banner.setAttribute('aria-hidden', 'false');
        document.body.classList.add('cookie-banner-visible');
    }

    function closeBanner() {
        banner.classList.remove('is-visible');
        banner.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('cookie-banner-visible');
    }

    const existingConsent = readConsent();
    if (!existingConsent) {
        openBanner();
    } else {
        applyConsentToInputs(existingConsent);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            writeConsent({ analytics: true, marketing: true });
            closeBanner();
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            writeConsent({ analytics: false, marketing: false });
            closeBanner();
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            writeConsent({
                analytics: analyticsInput?.checked,
                marketing: marketingInput?.checked
            });
            closeBanner();
        });
    }

    preferenceButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            openBanner();
        });
    });
}

/**
 * Fecha um modal com animação
 * @param {HTMLElement} modal - Elemento do modal a ser fechado
 */
function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.add('closing');
    
    setTimeout(() => {
        modal.remove();
        // Restaurar foco para o elemento que abriu o modal
        if (document.querySelector('[data-modal-opener]')) {
            document.querySelector('[data-modal-opener]').focus();
        }
    }, 300);
}

/**
 * Configura tema escuro/claro
 */
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // Salvar preferência no localStorage
            const isDarkTheme = document.body.classList.contains('dark-theme');
            localStorage.setItem('dark-theme', isDarkTheme);
            
            // Anunciar para tecnologias assistivas
            const message = isDarkTheme ? 'Tema escuro ativado' : 'Tema claro ativado';
            announceForScreenReaders(message);
        });
        
        // Verificar preferência salva
        const savedTheme = localStorage.getItem('dark-theme');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-theme');
        }
    }
}

/**
 * Anuncia mensagens para leitores de tela
 * @param {string} message - Mensagem a ser anunciada
 */
function announceForScreenReaders(message) {
    let announcer = document.getElementById('sr-announcer');
    
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'sr-announcer';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);
    }
    
    announcer.textContent = message;
}

/**
 * Inicializa os filtros de categoria na seção de cursos
 */
function initCourseFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    const noCoursesMessage = document.getElementById('no-courses-message');
    
    if (!filterButtons.length || !courseCards.length) return;
    
    // Otimizar layout dos cards
    function optimizeCardLayout() {
        courseCards.forEach(card => {
            const categoryTags = card.querySelector('.category-tags');
            const cardTitle = card.querySelector('.card-title');
            
            if (categoryTags && cardTitle) {
                const tagsHeight = categoryTags.offsetHeight;
                // Ajustar padding-top do título baseado na altura das tags
                cardTitle.style.paddingTop = `${Math.max(32, tagsHeight + 12)}px`;
            }
        });
    }
    
    // Executar otimização inicial e em redimensionamentos
    optimizeCardLayout();
    window.addEventListener('resize', debounce(optimizeCardLayout, 250));
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            let visibleCount = 0;
            
            // Remover classe ativa de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar cards
            courseCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                if (filter === 'all' || (categories && categories.includes(filter))) {
                    card.style.display = 'flex';
                    visibleCount++;
                    
                    // Animar entrada
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Mostrar/esconder mensagem de "nenhum curso encontrado"
            if (noCoursesMessage) {
                noCoursesMessage.style.display = visibleCount === 0 ? 'block' : 'none';
            }
            
            // Reotimizar layout após filtrar
            setTimeout(optimizeCardLayout, 100);
        });
    });
}

/**
 * Função de debounce para otimização de performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Anuncia mensagens para leitores de tela
 * @param {string} message - Mensagem a ser anunciada
 */
function announceMessage(message) {
    let announcer = document.getElementById('sr-announcer');
    
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'sr-announcer';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);
    }
    
    announcer.textContent = message;
}

// Header scroll effect
const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.hasAttribute('data-contact-trigger')) {
        return;
    }
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// (PartnersCarousel removido – logos exibidos de forma estática)