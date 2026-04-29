// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger);

// Animações de entrada
function initAnimations() {
    // Hero Section
    gsap.from('.hero__title', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero__subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.hero__cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
    });

    // Serviços (Nossa Expertise): só animação de deslocamento, sem esconder conteúdo
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top center'
        },
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        opacity: 1
    });

    // Simulador
    gsap.from('.simulator__container', {
        scrollTrigger: {
            trigger: '.simulator',
            start: 'top center'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animações para os cases
    initCasesAnimations();
}

// Animações para os cases
function initCasesAnimations() {
    const caseCards = gsap.utils.toArray('.case-card');
    
    caseCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out"
        });
    });

    // Animar métricas quando visíveis
    const metrics = gsap.utils.toArray('.metric__value');
    
    metrics.forEach(metric => {
        const value = metric.textContent;
        const endValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
        
        gsap.from(metric, {
            scrollTrigger: {
                trigger: metric,
                start: "top bottom-=50",
                toggleActions: "play none none reverse"
            },
            textContent: 0,
            duration: 1.5,
            ease: "power1.out",
            snap: { textContent: 1 },
            stagger: {
                each: 0.2
            },
            onUpdate: function() {
                // Adiciona o sinal de + ou % se existia no valor original
                if (value.includes('+')) {
                    metric.textContent = '+' + Math.round(this.targets()[0].textContent);
                } else if (value.includes('%')) {
                    metric.textContent = Math.round(this.targets()[0].textContent) + '%';
                } else if (value.includes('x')) {
                    metric.textContent = Math.round(this.targets()[0].textContent) + 'x';
                } else {
                    metric.textContent = Math.round(this.targets()[0].textContent);
                }
            }
        });
    });
}

// Animações para os logos dos parceiros
function initPartnersAnimations() {
    const partnerLogos = gsap.utils.toArray('.partner-logo');
    
    partnerLogos.forEach((logo, index) => {
        gsap.from(logo, {
            scrollTrigger: {
                trigger: logo,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out"
        });
    });
}

// Classe do Simulador
class SimulatorForm {
    constructor() {
        this.form = document.getElementById('simulatorForm');
        this.steps = document.querySelectorAll('.form-step');
        this.progressSteps = document.querySelectorAll('.simulator__progress .step');
        this.prevButton = document.querySelector('.prev-step');
        this.nextButton = document.querySelector('.next-step');
        this.result = document.getElementById('simulatorResult');
        this.currentStep = 1;
        
        this.solutions = {
            inovacao: {
                processos: {
                    pontual: [
                        {
                            title: 'Design Sprint de Inovação',
                            description: 'Workshop intensivo para desenvolver e prototipar soluções inovadoras.',
                            icon: 'lightbulb'
                        },
                        {
                            title: 'Mapeamento de Jornada Digital',
                            description: 'Análise e redesenho de processos com foco em experiência do usuário.',
                            icon: 'route'
                        }
                    ],
                    departamento: [
                        {
                            title: 'Programa de Transformação Digital',
                            description: 'Implementação estruturada de cultura e práticas de inovação.',
                            icon: 'digital-tachograph'
                        },
                        {
                            title: 'Centro de Excelência em Inovação',
                            description: 'Hub departamental para gestão de projetos inovadores.',
                            icon: 'star'
                        }
                    ],
                    empresa: [
                        {
                            title: 'Transformação Digital Corporativa',
                            description: 'Programa completo com metodologias ágeis e gestão da mudança.',
                            icon: 'building'
                        },
                        {
                            title: 'Cultura de Inovação Empresarial',
                            description: 'Framework de inovação com governança e indicadores.',
                            icon: 'chart-network'
                        }
                    ]
                }
            }
            // Adicionar mais soluções aqui...
        };

        this.init();
    }

    init() {
        this.prevButton.addEventListener('click', () => this.navigate('prev'));
        this.nextButton.addEventListener('click', () => this.navigate('next'));
        
        document.querySelector('.btn--restart')?.addEventListener('click', () => this.restart());
        
        this.form.addEventListener('change', (e) => {
            if (e.target.type === 'radio') {
                this.nextButton.disabled = false;
            }
        });
    }

    navigate(direction) {
        if (direction === 'next' && this.currentStep < this.steps.length) {
            if (!this.validateStep()) return;
            this.currentStep++;
        } else if (direction === 'prev' && this.currentStep > 1) {
            this.currentStep--;
        }

        if (this.currentStep === this.steps.length) {
            this.showResults();
        } else {
            this.updateUI();
        }
    }

    validateStep() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        const selectedOption = currentStepElement.querySelector('input[type="radio"]:checked');
        
        if (!selectedOption) {
            alert('Por favor, selecione uma opção para continuar.');
            return false;
        }
        
        return true;
    }

    updateUI() {
        // Atualizar passos do formulário
        this.steps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) === this.currentStep) {
                step.classList.add('active');
            }
        });

        // Atualizar indicadores de progresso
        this.progressSteps.forEach((step, index) => {
            step.classList.remove('active');
            if (index + 1 === this.currentStep) {
                step.classList.add('active');
            }
        });

        // Atualizar botões de navegação
        this.prevButton.style.display = this.currentStep === 1 ? 'none' : 'flex';
        this.nextButton.textContent = this.currentStep === this.steps.length - 1 ? 'Ver Resultados' : 'Próximo';
    }

    showResults() {
        const objetivo = this.form.querySelector('input[name="objetivo"]:checked').value;
        const area = this.form.querySelector('input[name="area"]:checked').value;
        const escala = this.form.querySelector('input[name="escala"]:checked').value;

        const solutions = this.getSolutions(objetivo, area, escala);
        
        this.form.style.display = 'none';
        this.result.style.display = 'block';
        
        const resultContent = this.result.querySelector('.result__content');
        resultContent.innerHTML = this.generateResultHTML(solutions);
        
        // Configurar botão do WhatsApp
        const whatsappBtn = this.result.querySelector('.btn--whatsapp');
        whatsappBtn.href = this.generateWhatsAppLink(objetivo, area, escala);
        
        // Animar resultados
        gsap.from('.result__content > *', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }

    getSolutions(objetivo, area, escala) {
        try {
            return this.solutions[objetivo][area][escala];
        } catch (e) {
            return [
                {
                    title: 'Consultoria Personalizada',
                    description: 'Entre em contato para uma solução sob medida para sua empresa.',
                    icon: 'handshake'
                }
            ];
        }
    }

    generateResultHTML(solutions) {
        return `
            <div class="solutions-grid">
                ${solutions.map(solution => `
                    <div class="solution-card">
                        <div class="solution-card__icon">
                            <i class="fas fa-${solution.icon}"></i>
                        </div>
                        <h4 class="solution-card__title">${solution.title}</h4>
                        <p class="solution-card__description">${solution.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generateWhatsAppLink(objetivo, area, escala) {
        const message = encodeURIComponent(
            `Olá! Gostaria de saber mais sobre soluções para ${this.getReadableValue('objetivo', objetivo)} ` +
            `na área de ${this.getReadableValue('area', area)} ` +
            `em escala de ${this.getReadableValue('escala', escala)}.`
        );
        return `https://wa.me/5519999314952?text=${message}`;
    }

    getReadableValue(field, value) {
        const mappings = {
            objetivo: {
                inovacao: 'Inovação Digital',
                eficiencia: 'Eficiência Operacional',
                capacitacao: 'Capacitação de Equipes',
                automacao: 'Automação de Processos'
            },
            area: {
                processos: 'Processos',
                pessoas: 'Pessoas',
                tecnologia: 'Tecnologia',
                estrategia: 'Estratégia'
            },
            escala: {
                pontual: 'Projeto Pontual',
                departamento: 'Departamento',
                empresa: 'Empresa Toda'
            }
        };

        return mappings[field][value] || value;
    }

    restart() {
        this.currentStep = 1;
        this.form.reset();
        this.form.style.display = 'block';
        this.result.style.display = 'none';
        this.updateUI();
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initPartnersAnimations();
    new SimulatorForm();
}); 