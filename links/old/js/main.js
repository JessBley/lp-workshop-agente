// Product data with enhanced descriptions and categorization
const products = [
    {
        title: 'Mentoria de Carreira e Negócios',
        description: 'Acelere sua carreira com mentoria personalizada em tecnologia e inovação',
        features: ['Mentoria Individual', 'Plano de Carreira', 'Suporte Contínuo'],
        link: 'https://escola.edugital.com.br/mentoria',
        icon: 'fas fa-rocket',
        highlight: true,
        category: 'premium'
    },
    {
        title: 'Plataforma Edugital+',
        description: 'Acesso completo à plataforma líder em educação digital',
        features: ['Cursos Atualizados', 'Certificados', 'Comunidade'],
        link: 'https://escola.edugital.com.br',
        icon: 'fas fa-graduation-cap',
        highlight: true,
        category: 'premium'
    },
    {
        title: 'Cursos Especializados',
        description: 'Formações específicas em tecnologia e inovação',
        features: ['Metodologia Única', 'Projetos Práticos', 'Mentoria'],
        link: 'https://edugital.com.br/links/cursos/',
        icon: 'fas fa-book',
        highlight: true,
        category: 'premium'
    },
    {
        title: 'Treinamentos Corporativos',
        description: 'Soluções personalizadas para empresas',
        features: ['In-company', 'Customizável', 'Resultados'],
        link: 'https://edugital.com.br/links/cursos/',
        icon: 'fas fa-chalkboard-teacher',
        category: 'business'
    }
];

// Free content with better organization
const content = [
    {
        title: 'Newsletter: Conexão Nexialista',
        description: 'Insights semanais sobre educação, tecnologia e carreira',
        features: ['Conteúdo Exclusivo', 'Cases Reais', 'Tendências'],
        link: 'https://www.linkedin.com/newsletters/conexão-nexialista-7223715865727266816/',
        icon: 'fas fa-envelope',
        category: 'newsletter'
    },
    {
        title: 'Podcast DI Talks',
        description: 'O podcast que conecta Design Instrucional e Inovação',
        features: ['Entrevistas', 'Cases', 'Dicas Práticas'],
        link: 'https://open.spotify.com/show/4VNUzZ1SJ6dXHjJvkP4Vno',
        icon: 'fas fa-podcast',
        category: 'podcast'
    },
    {
        title: 'Canal do YouTube',
        description: 'Conteúdo gratuito sobre educação e tecnologia',
        features: ['Tutoriais', 'Reviews', 'Dicas'],
        link: 'https://www.youtube.com/@edugital',
        icon: 'fab fa-youtube',
        category: 'video'
    },
    {
        title: 'DI Talks no YouTube',
        description: 'Assista aos episódios do nosso podcast',
        features: ['Episódios Completos', 'Highlights', 'Extras'],
        link: 'https://www.youtube.com/watch?v=EeKHSXNZaxg&list=PLU7iuUWjiUgqoHj0hhBCOCNivc1nduTnd',
        icon: 'fas fa-play-circle',
        category: 'video'
    }
];

// Strategic partnerships
const partnerships = [
    {
        title: 'Instituto Saber Social',
        description: 'Parceria com Descomplica para transformação social',
        features: ['Bolsas de Estudo', 'Mentoria Social', 'Impacto'],
        link: 'https://institutosabersocial.org.br/2024/12/13/instituto-saber-social-e-descomplica-lancam-parceria-para-oferecer-bolsas-de-graduacao-e-transformar-vidas/',
        icon: 'fas fa-handshake',
        category: 'social'
    },
    {
        title: 'ADPList Mentoria',
        description: 'Mentoria internacional em nossa plataforma parceira',
        features: ['Rede Global', 'Diversos Mentores', 'Gratuito'],
        link: 'https://adplist.org/mentors/alan-dantas',
        icon: 'fas fa-users',
        category: 'mentorship'
    },
    {
        title: 'EBAC Parceria',
        description: 'Parceria estratégica em educação digital',
        features: ['Cursos Especiais', 'Webinars', 'Descontos'],
        link: 'https://ebaconline.com.br/webinars/arted-demo-2022-08-17',
        icon: 'fas fa-graduation-cap',
        category: 'education'
    }
];

// Enhanced card template with features
const createCard = (item) => {
    const card = document.createElement('div');
    card.className = `card ${item.highlight ? 'highlight' : ''} ${item.category}`;
    
    const featuresHTML = item.features ? `
        <div class="features">
            ${item.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
        </div>
    ` : '';
    
    card.innerHTML = `
        <div class="card-content">
            <i class="${item.icon} fa-2x"></i>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${featuresHTML}
            <a href="${item.link}" class="cta-button ${item.highlight ? 'primary' : 'secondary'}" 
               target="_blank" rel="noopener">
                ${item.highlight ? 'Comece Agora' : 'Saiba Mais'}
            </a>
        </div>
    `;
    return card;
};

// Section creation with animations
function createSection(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    items.forEach((item, index) => {
        const card = createCard(item);
        card.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(card);
    });
}

// Animações de entrada
document.addEventListener('DOMContentLoaded', function() {
    // Animação de fade-in ao rolar
    const handleScrollAnimation = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Listener para animação de scroll
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação para badges
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('mouseover', () => {
            badge.style.transform = 'scale(1.1)';
            badge.style.transition = 'transform 0.3s ease';
        });

        badge.addEventListener('mouseout', () => {
            badge.style.transform = 'scale(1)';
        });
    });

    // Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // WhatsApp Button Visibility
    const whatsappButton = document.querySelector('.whatsapp-float');
    let whatsappLastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            whatsappButton.style.opacity = '1';
            return;
        }
        
        if (currentScroll > whatsappLastScroll) {
            whatsappButton.style.opacity = '0.5';
        } else {
            whatsappButton.style.opacity = '1';
        }
        whatsappLastScroll = currentScroll;
    });

    // Animação para social proof
    document.querySelectorAll('.social-proof').forEach(proof => {
        const rating = proof.querySelector('.rating');
        const count = proof.querySelector('.students-count');

        if (rating && count) {
            // Animar estrelas sequencialmente
            rating.querySelectorAll('.fa-star, .fa-star-half-alt').forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        star.style.transform = 'scale(1)';
                    }, 200);
                }, index * 100);
            });

            // Animar contador de alunos
            const countText = count.querySelector('span');
            if (countText) {
                const finalNumber = parseInt(countText.textContent.match(/\d+/)[0]);
                let currentNumber = 0;
                const duration = 2000; // 2 segundos
                const steps = 50;
                const increment = finalNumber / steps;
                const stepDuration = duration / steps;

                const updateCount = () => {
                    if (currentNumber < finalNumber) {
                        currentNumber = Math.min(currentNumber + increment, finalNumber);
                        countText.textContent = `+${Math.round(currentNumber)} ${
                            countText.textContent.includes('alunos') ? 'alunos' :
                            countText.textContent.includes('mentorados') ? 'mentorados' :
                            'formados'
                        }`;
                        requestAnimationFrame(updateCount);
                    }
                };

                // Iniciar animação quando o elemento estiver visível
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCount();
                            observer.unobserve(entry.target);
                        }
                    });
                });

                observer.observe(count);
            }
        }
    });
}); 