// Methodology Tool Data
const methodologyTools = {
    swot: {
        name: "Análise SWOT Profissional",
        description: "Uma ferramenta estratégica para identificar forças, fraquezas, oportunidades e ameaças em sua carreira, permitindo um planejamento mais efetivo de desenvolvimento profissional.",
        benefits: [
            "Visão clara dos pontos fortes e áreas de melhoria",
            "Identificação de oportunidades de mercado",
            "Preparação para desafios futuros",
            "Base sólida para planejamento de carreira"
        ],
        application: "Durante a mentoria, utilizamos a análise SWOT para criar um diagnóstico completo do seu momento profissional e desenvolver estratégias personalizadas para alcançar seus objetivos."
    },
    roadmap: {
        name: "Roadmap Profissional",
        description: "Um mapa detalhado que define as etapas necessárias para alcançar seus objetivos de carreira, incluindo marcos, habilidades a desenvolver e prazos realistas.",
        benefits: [
            "Clareza no caminho a seguir",
            "Definição de metas tangíveis",
            "Acompanhamento do progresso",
            "Ajustes estratégicos baseados em feedback"
        ],
        application: "Construímos juntos um roadmap personalizado que considera suas aspirações, o mercado atual e as competências necessárias para alcançar seus objetivos."
    },
    smart: {
        name: "Metas SMART",
        description: "Metodologia para definir objetivos específicos, mensuráveis, alcançáveis, relevantes e temporais, garantindo maior probabilidade de sucesso em suas metas profissionais.",
        benefits: [
            "Objetivos claros e mensuráveis",
            "Maior comprometimento com as metas",
            "Facilidade no acompanhamento",
            "Resultados mais tangíveis"
        ],
        application: "Aplicamos a metodologia SMART para transformar seus objetivos em metas concretas e alcançáveis, com planos de ação detalhados."
    },
    disc: {
        name: "Perfil Comportamental DISC",
        description: "Ferramenta de análise comportamental que ajuda a compreender seu estilo de comunicação, tomada de decisão e interação com outros profissionais.",
        benefits: [
            "Autoconhecimento aprofundado",
            "Melhoria na comunicação",
            "Desenvolvimento de liderança",
            "Gestão de relacionamentos mais efetiva"
        ],
        application: "Utilizamos o perfil DISC para potencializar seus pontos fortes e desenvolver estratégias para lidar com diferentes perfis profissionais."
    },
    journey: {
        name: "Jornada de Desenvolvimento",
        description: "Mapeamento detalhado da jornada profissional, identificando pontos críticos, oportunidades de melhoria e estratégias de desenvolvimento.",
        benefits: [
            "Visão holística da carreira",
            "Identificação de gaps de desenvolvimento",
            "Planejamento estratégico",
            "Alinhamento com objetivos de longo prazo"
        ],
        application: "Mapeamos sua jornada profissional para identificar oportunidades de crescimento e criar estratégias efetivas de desenvolvimento."
    },
    eisenhower: {
        name: "Matriz de Eisenhower",
        description: "Ferramenta de gestão de tempo e prioridades que ajuda a classificar tarefas e projetos baseado em sua urgência e importância.",
        benefits: [
            "Melhor gestão do tempo",
            "Foco em atividades estratégicas",
            "Redução do estresse",
            "Aumento da produtividade"
        ],
        application: "Implementamos a matriz para otimizar sua gestão de tempo e focar nas atividades que realmente impactam sua carreira."
    },
    pomodoro: {
        name: "Técnica Pomodoro",
        description: "Método de gestão de tempo que utiliza intervalos focados de trabalho seguidos por pausas estratégicas para maximizar a produtividade.",
        benefits: [
            "Maior foco e concentração",
            "Redução da procrastinação",
            "Melhor gestão de energia",
            "Aumento da eficiência"
        ],
        application: "Adaptamos a técnica Pomodoro ao seu estilo de trabalho para otimizar sua produtividade e qualidade de entrega."
    },
    kanban: {
        name: "Gestão de Fluxo com Kanban",
        description: "Sistema visual de gestão de tarefas e projetos que ajuda a manter o foco, controlar o progresso e aumentar a produtividade.",
        benefits: [
            "Visualização clara do trabalho",
            "Melhor organização de tarefas",
            "Controle de progresso",
            "Identificação de gargalos"
        ],
        application: "Implementamos o Kanban para organizar suas atividades profissionais e manter o foco nos objetivos principais."
    },
    networking: {
        name: "Mapa de Networking",
        description: "Estratégia estruturada para desenvolver e manter uma rede de contatos profissionais efetiva e valiosa.",
        benefits: [
            "Expansão estratégica de contatos",
            "Oportunidades de colaboração",
            "Visibilidade profissional",
            "Acesso a novos mercados"
        ],
        application: "Desenvolvemos seu mapa de networking personalizado e estratégias para fortalecer suas conexões profissionais."
    },
    branding: {
        name: "Personal Branding Canvas",
        description: "Framework para desenvolver e gerenciar sua marca pessoal de forma estratégica e autêntica.",
        benefits: [
            "Diferenciação no mercado",
            "Posicionamento profissional claro",
            "Consistência na comunicação",
            "Maior visibilidade profissional"
        ],
        application: "Trabalhamos na construção da sua marca pessoal usando técnicas comprovadas de branding e marketing pessoal."
    },
    leadership: {
        name: "Desenvolvimento de Liderança",
        description: "Framework completo para desenvolver habilidades de liderança efetiva, incluindo gestão de equipes, comunicação estratégica e tomada de decisão.",
        benefits: [
            "Desenvolvimento de competências de liderança",
            "Gestão efetiva de equipes",
            "Comunicação estratégica",
            "Resolução de conflitos"
        ],
        application: "Trabalhamos no desenvolvimento das suas habilidades de liderança através de casos práticos e ferramentas específicas para seu contexto."
    },
    communication: {
        name: "Comunicação Estratégica",
        description: "Metodologia para desenvolver habilidades de comunicação efetiva em diferentes contextos profissionais.",
        benefits: [
            "Comunicação clara e assertiva",
            "Apresentações impactantes",
            "Negociação efetiva",
            "Influência e persuasão"
        ],
        application: "Desenvolvemos suas habilidades de comunicação através de exercícios práticos e feedback constante."
    },
    decision: {
        name: "Tomada de Decisão",
        description: "Framework estruturado para melhorar sua capacidade de tomar decisões estratégicas.",
        benefits: [
            "Análise estruturada de problemas",
            "Avaliação de riscos e oportunidades",
            "Decisões mais assertivas",
            "Gestão de consequências"
        ],
        application: "Aplicamos metodologias práticas para desenvolver sua capacidade de tomar decisões estratégicas em diferentes contextos."
    },
    productivity: {
        name: "Produtividade e Foco",
        description: "Sistema integrado de técnicas e ferramentas para maximizar sua produtividade e manter o foco nos objetivos principais.",
        benefits: [
            "Aumento da produtividade",
            "Melhor gestão do tempo",
            "Eliminação de distrações",
            "Resultados consistentes"
        ],
        application: "Implementamos um sistema personalizado de produtividade adaptado ao seu estilo de trabalho e objetivos."
    },
    career: {
        name: "Planejamento de Carreira",
        description: "Metodologia completa para planejar e desenvolver sua carreira de forma estratégica e alinhada com seus objetivos.",
        benefits: [
            "Clareza de objetivos profissionais",
            "Estratégias de desenvolvimento",
            "Posicionamento no mercado",
            "Plano de ação estruturado"
        ],
        application: "Desenvolvemos um plano de carreira personalizado e estratégias práticas para alcançar seus objetivos profissionais."
    },
    design: {
        name: "Expertise em Design",
        description: "Metodologia prática para desenvolver habilidades em design thinking e UX/UI, focando na criação de soluções inovadoras.",
        benefits: [
            "Design thinking aplicado",
            "Criação de protótipos",
            "Metodologias ágeis",
            "Inovação em produtos"
        ],
        application: "Aplicamos técnicas avançadas de design para resolver desafios específicos do seu negócio."
    },
    automation: {
        name: "Automação e Inteligência Artificial",
        description: "Framework para implementar automação e IA em processos empresariais, aumentando eficiência e reduzindo custos.",
        benefits: [
            "Automação de processos",
            "Implementação de IAs",
            "Otimização de fluxos",
            "Redução de custos"
        ],
        application: "Desenvolvemos estratégias personalizadas de automação e IA para seu negócio."
    },
    research: {
        name: "Pesquisa Aplicada",
        description: "Sistema estruturado de pesquisa para validar hipóteses e desenvolver soluções baseadas em dados.",
        benefits: [
            "Metodologias científicas",
            "Validação de hipóteses",
            "Análise competitiva",
            "Insights acionáveis"
        ],
        application: "Implementamos projetos de pesquisa focados em resultados práticos para seu negócio."
    },
    education: {
        name: "Fundamentos da Educação",
        description: "Metodologia educacional que combina princípios pedagógicos com tecnologia para criar experiências de aprendizagem efetivas.",
        benefits: [
            "Técnicas modernas de ensino",
            "Aprendizagem ativa",
            "Avaliação de resultados",
            "Engajamento de alunos"
        ],
        application: "Desenvolvemos programas educacionais personalizados que maximizam o aprendizado."
    },
    marketing: {
        name: "Estratégias de Marketing Inovadoras",
        description: "Framework completo para desenvolver e implementar estratégias de marketing digital e tradicional.",
        benefits: [
            "Marketing digital avançado",
            "Estratégias multicanal",
            "Análise de resultados",
            "Inovação em marketing"
        ],
        application: "Criamos estratégias de marketing personalizadas e inovadoras para seu negócio."
    },
    data: {
        name: "Análise de Dados Profunda",
        description: "Metodologia para extrair insights valiosos de dados e aplicá-los em decisões estratégicas.",
        benefits: [
            "Análise de dados avançada",
            "Insights acionáveis",
            "Decisões data-driven",
            "Otimização de processos"
        ],
        application: "Implementamos análises de dados personalizadas para impulsionar seus resultados."
    }
};

class MethodologyTool {
    constructor() {
        this.elements = {
            select: document.getElementById('methodologySelect'),
            description: {
                section: document.querySelector('.tool-description'),
                text: document.getElementById('tool-description-text')
            },
            benefits: {
                section: document.querySelector('.tool-benefits'),
                list: document.getElementById('tool-benefits-list')
            },
            application: {
                section: document.querySelector('.tool-application'),
                text: document.getElementById('tool-application-text')
            }
        };

        this.init();
    }

    init() {
        if (!this.validateElements()) {
            console.error('Missing required DOM elements for Methodology Tool');
            return;
        }

        this.setupInitialState();
        this.bindEvents();
    }

    validateElements() {
        return Object.values(this.elements).every(element => 
            element && (element instanceof Element || Object.values(element).every(el => el instanceof Element))
        );
    }

    setupInitialState() {
        this.toggleSections(false);
        if (this.elements.select.value) {
            this.updateContent(this.elements.select.value);
        }
    }

    bindEvents() {
        this.elements.select.addEventListener('change', (e) => this.updateContent(e.target.value));
    }

    toggleSections(show, animate = true) {
        const sections = [
            this.elements.description.section,
            this.elements.benefits.section,
            this.elements.application.section
        ];

        sections.forEach(section => {
            if (!section) return;

            if (show) {
                section.style.display = 'block';
                if (animate) {
                    requestAnimationFrame(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    });
                } else {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(10px)';
                if (animate) {
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 300);
                } else {
                    section.style.display = 'none';
                }
            }
        });
    }

    updateBenefitsList(benefits = []) {
        const fragment = document.createDocumentFragment();
        
        benefits.forEach((benefit, index) => {
            const li = document.createElement('li');
            li.textContent = benefit;
            li.style.cssText = `
                opacity: 0;
                transform: translateY(10px);
                transition: opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s;
            `;
            fragment.appendChild(li);
        });

        this.elements.benefits.list.innerHTML = '';
        this.elements.benefits.list.appendChild(fragment);

        // Trigger reflow to ensure transitions work
        requestAnimationFrame(() => {
            Array.from(this.elements.benefits.list.children).forEach(li => {
                li.style.opacity = '1';
                li.style.transform = 'translateY(0)';
            });
        });
    }

    updateContent(selectedValue) {
        const tool = methodologyTools[selectedValue];

        if (tool) {
            this.elements.description.text.textContent = tool.description || '';
            this.elements.application.text.textContent = tool.application || '';
            this.updateBenefitsList(tool.benefits || []);
            this.toggleSections(true);
        } else {
            this.elements.description.text.textContent = 'Selecione uma ferramenta para ver sua descrição e aplicação...';
            this.elements.application.text.textContent = '';
            this.updateBenefitsList([]);
            this.toggleSections(false);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MethodologyTool();
}); 