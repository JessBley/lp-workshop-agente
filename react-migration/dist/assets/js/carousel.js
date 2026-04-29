/**
 * carousel.js - Implementação de carrossel para depoimentos e cursos da Edugital+
 */

/**
 * Inicializa todos os carrosséis da página
 */
function initCarousel() {
    // Inicializar carrossel de depoimentos
    setupTestimonialCarousel();
    
    // Inicializar carrossel de cursos em destaque
    setupFeaturedCoursesCarousel();
    
    console.log('Carrosséis inicializados');
}

/**
 * Configura o carrossel de depoimentos
 */
function setupTestimonialCarousel() {
    const testimonialContainer = document.querySelector('.testimonial-carousel');
    
    if (!testimonialContainer) return;
    
    const testimonials = testimonialContainer.querySelectorAll('.testimonial');
    
    if (testimonials.length <= 1) return;
    
    let currentIndex = 0;
    
    // Adicionar navegação
    const navButtons = document.createElement('div');
    navButtons.className = 'carousel-nav';
    
    // Botão anterior
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-prev';
    prevButton.innerHTML = '&larr;';
    prevButton.setAttribute('aria-label', 'Anterior');
    
    // Botão próximo
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-next';
    nextButton.innerHTML = '&rarr;';
    nextButton.setAttribute('aria-label', 'Próximo');
    
    // Adicionar indicadores
    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';
    
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        
        indicators.appendChild(dot);
    });
    
    // Adicionar elementos ao DOM
    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);
    testimonialContainer.appendChild(navButtons);
    testimonialContainer.appendChild(indicators);
    
    // Configurar tamanho do container
    testimonialContainer.style.position = 'relative';
    testimonialContainer.style.overflow = 'hidden';
    
    // Configurar slides
    testimonials.forEach(testimonial => {
        testimonial.style.position = 'absolute';
        testimonial.style.top = '0';
        testimonial.style.left = '0';
        testimonial.style.width = '100%';
        testimonial.style.opacity = '0';
        testimonial.style.transition = 'opacity 0.5s ease';
    });
    
    // Mostrar o primeiro slide
    testimonials[0].style.opacity = '1';
    testimonials[0].style.position = 'relative';
    
    // Funções de navegação
    function goToSlide(index) {
        // Esconder o slide atual
        testimonials[currentIndex].style.opacity = '0';
        testimonials[currentIndex].style.position = 'absolute';
        
        // Atualizar os indicadores
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Atualizar índice atual
        currentIndex = index;
        
        // Mostrar o novo slide
        testimonials[currentIndex].style.opacity = '1';
        testimonials[currentIndex].style.position = 'relative';
    }
    
    function goToPrevSlide() {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        goToSlide(newIndex);
    }
    
    function goToNextSlide() {
        const newIndex = (currentIndex + 1) % testimonials.length;
        goToSlide(newIndex);
    }
    
    // Adicionar eventos aos botões de navegação
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
    
    // Adicionar navegação por teclado
    testimonialContainer.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
    
    // Autoplay
    let autoplayInterval = setInterval(goToNextSlide, 5000);
    
    // Pausar autoplay ao hover
    testimonialContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    testimonialContainer.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(goToNextSlide, 5000);
    });
    
    // Suporte a gestos para dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;
    
    testimonialContainer.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, false);
    
    testimonialContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe para esquerda
            goToNextSlide();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe para direita
            goToPrevSlide();
        }
    }
}

/**
 * Configura o carrossel de cursos em destaque
 */
function setupFeaturedCoursesCarousel() {
    const courseContainer = document.querySelector('.featured-courses');
    
    if (!courseContainer) return;
    
    const coursesWrapper = courseContainer.querySelector('.course-wrapper');
    const courses = courseContainer.querySelectorAll('.course-card');
    
    if (courses.length <= 3) return; // Não precisa de carrossel para poucos itens
    
    // Configurar elementos
    coursesWrapper.style.display = 'flex';
    coursesWrapper.style.overflowX = 'scroll';
    coursesWrapper.style.scrollBehavior = 'smooth';
    coursesWrapper.style.msOverflowStyle = 'none'; // IE/Edge
    coursesWrapper.style.scrollbarWidth = 'none'; // Firefox
    
    // Esconder scrollbar
    coursesWrapper.style.cssText += `
        &::-webkit-scrollbar {
            display: none;
        }
    `;
    
    // Adicionar gap entre os cards
    courses.forEach(course => {
        course.style.flex = '0 0 auto';
        course.style.width = 'calc(33.333% - 20px)';
        course.style.margin = '0 10px';
        
        // Responsividade
        if (window.innerWidth < 992) {
            course.style.width = 'calc(50% - 20px)';
        }
        
        if (window.innerWidth < 576) {
            course.style.width = 'calc(100% - 20px)';
        }
    });
    
    // Adicionar botões de navegação
    const navButtons = document.createElement('div');
    navButtons.className = 'carousel-nav course-nav';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-prev';
    prevButton.innerHTML = '&larr;';
    prevButton.setAttribute('aria-label', 'Anterior');
    
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-next';
    nextButton.innerHTML = '&rarr;';
    nextButton.setAttribute('aria-label', 'Próximo');
    
    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);
    
    courseContainer.appendChild(navButtons);
    
    // Adicionar funcionalidade aos botões
    prevButton.addEventListener('click', () => {
        coursesWrapper.scrollBy({
            left: -coursesWrapper.offsetWidth,
            behavior: 'smooth'
        });
    });
    
    nextButton.addEventListener('click', () => {
        coursesWrapper.scrollBy({
            left: coursesWrapper.offsetWidth,
            behavior: 'smooth'
        });
    });
    
    // Ajustar tamanho em resize
    window.addEventListener('resize', () => {
        courses.forEach(course => {
            if (window.innerWidth < 576) {
                course.style.width = 'calc(100% - 20px)';
            } else if (window.innerWidth < 992) {
                course.style.width = 'calc(50% - 20px)';
            } else {
                course.style.width = 'calc(33.333% - 20px)';
            }
        });
    });
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
}); 