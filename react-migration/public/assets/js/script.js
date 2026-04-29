// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize methodology tool
    const methodologySelect = document.getElementById('methodologySelect');
    const toolDescriptionText = document.getElementById('tool-description-text');
    const toolBenefitsList = document.getElementById('tool-benefits-list');
    const toolApplicationText = document.getElementById('tool-application-text');
    const toolDescriptionSection = document.querySelector('.tool-description');
    const toolBenefitsSection = document.querySelector('.tool-benefits');
    const toolApplicationSection = document.querySelector('.tool-application');

    // Verify all required elements are found
    console.log('DOM Elements found:', {
        methodologySelect: !!methodologySelect,
        toolDescriptionText: !!toolDescriptionText,
        toolBenefitsList: !!toolBenefitsList,
        toolApplicationText: !!toolApplicationText
    });

    if (!methodologySelect || !toolDescriptionText || !toolBenefitsList || !toolApplicationText) {
        console.error('Missing required DOM elements');
        return;
    }

    console.log('Methodology select found:', methodologySelect);
    // Log available tools
    console.log('Available tools:', Object.keys(methodologyTools));
    
    // Initially hide the sections
    [toolDescriptionSection, toolBenefitsSection, toolApplicationSection].forEach(section => {
        if (section) {
            section.style.display = 'none';
            section.style.opacity = '0';
        }
    });
    
    function updateToolContent(selectedValue) {
        console.log('Updating tool content for:', selectedValue);
        const selectedTool = methodologyTools[selectedValue];
        
        if (selectedTool) {
            console.log('Selected tool found:', selectedTool);
            
            // Update content first
            toolDescriptionText.textContent = selectedTool.description || '';
            
            // Update benefits list with animation
            toolBenefitsList.innerHTML = '';
            const benefits = selectedTool.benefits || [];
            benefits.forEach((benefit, index) => {
                const li = document.createElement('li');
                li.textContent = benefit;
                li.style.opacity = '0';
                li.style.transform = 'translateY(10px)';
                li.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                toolBenefitsList.appendChild(li);
                
                // Animate each benefit with a delay
                setTimeout(() => {
                    li.style.opacity = '1';
                    li.style.transform = 'translateY(0)';
                }, 100 * (index + 1));
            });
            
            toolApplicationText.textContent = selectedTool.application || '';
            
            // Show sections with animation
            [toolDescriptionSection, toolBenefitsSection, toolApplicationSection].forEach((section) => {
                if (section) {
                    section.style.display = 'block';
                    requestAnimationFrame(() => {
                        section.style.opacity = '1';
                    });
                }
            });
        } else {
            console.log('No tool found for:', selectedValue);
            
            // Reset to default state
            toolDescriptionText.textContent = 'Selecione uma ferramenta para ver sua descrição e aplicação...';
            toolBenefitsList.innerHTML = '';
            toolApplicationText.textContent = '';
            
            // Hide sections
            [toolDescriptionSection, toolBenefitsSection, toolApplicationSection].forEach(section => {
                if (section) {
                    section.style.opacity = '0';
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 300);
                }
            });
        }
    }
    
    // Add change event listener
    methodologySelect.addEventListener('change', function(event) {
        console.log('Select changed:', event.target.value);
        updateToolContent(event.target.value);
    });

    // Trigger initial update if a value is selected
    if (methodologySelect.value) {
        console.log('Initial value:', methodologySelect.value);
        updateToolContent(methodologySelect.value);
    }

    // Initialize other components
    loadPartnerLogos();
    initCalculator();
    setupScrollBehavior();
    initFAQ();
    
    // Initialize mentor carousel
    const carousel = document.querySelector('.mentor-carousel');
    if (carousel) {
        // Shuffle mentor slides before initializing carousel
        const track = carousel.querySelector('.carousel-track');
        if (track) {
            const slides = Array.from(track.children);
            const shuffledSlides = shuffleArray([...slides]);
            track.innerHTML = '';
            shuffledSlides.forEach(slide => track.appendChild(slide));
        }
        
        new MentorCarousel(carousel);
    }
});

// Create dummy images for testing
function createDummyImages() {
    // Create automation flow image
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 450;
    const ctx = canvas.getContext('2d');

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, 800, 450);
    gradient.addColorStop(0, '#f5f7fc');
    gradient.addColorStop(1, '#e9eef8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 450);

    // Draw automation nodes
    drawNode(ctx, 150, 100, '#0a3d9f', 'Trigger', '#ffffff');
    drawNode(ctx, 400, 100, '#116b35', 'Process', '#ffffff');
    drawNode(ctx, 650, 100, '#2b6def', 'Action', '#ffffff');
    
    drawNode(ctx, 150, 250, '#116b35', 'Filter', '#ffffff');
    drawNode(ctx, 400, 250, '#0a3d9f', 'Transform', '#ffffff');
    drawNode(ctx, 650, 250, '#116b35', 'Output', '#ffffff');
    
    drawNode(ctx, 400, 350, '#2b6def', 'Analytics', '#ffffff');

    // Draw connections
    drawConnection(ctx, 210, 100, 340, 100);
    drawConnection(ctx, 460, 100, 590, 100);
    
    drawConnection(ctx, 170, 160, 170, 190);
    drawConnection(ctx, 400, 160, 400, 190);
    drawConnection(ctx, 630, 160, 630, 190);
    
    drawConnection(ctx, 210, 250, 340, 250);
    drawConnection(ctx, 460, 250, 590, 250);
    
    drawConnection(ctx, 400, 310, 400, 350);

    // Set as src for the image
    const automationFlowImg = document.querySelector('img[alt="Automation Flow"]');
    if (automationFlowImg) {
        automationFlowImg.src = canvas.toDataURL('image/png');
    }
}

function createTestimonialImages() {
    // Create instructor images
    createAvatarImage('João Silva', '#0a3d9f');
    createAvatarImage('Maria Santos', '#116b35');
    createAvatarImage('Pedro Costa', '#2b6def');
}

function createLogoImages() {
    // Create logo images
    createLogoImage('E-commerce', '#0a3d9f');
    
    // Create footer logo
    const footerLogo = document.querySelector('img.footer-logo');
    if (footerLogo) {
        const canvas = document.createElement('canvas');
        canvas.width = 150;
        canvas.height = 50;
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 150, 50);
        
        // Draw logo text
        ctx.fillStyle = '#0a3d9f';
        ctx.font = 'bold 24px Arial';
        ctx.fillText('n8n', 55, 32);
        
        // Draw logo circle
        ctx.beginPath();
        ctx.arc(30, 25, 15, 0, 2 * Math.PI);
        ctx.fillStyle = '#116b35';
        ctx.fill();
        
        footerLogo.src = canvas.toDataURL('image/png');
    }
}

function drawNode(ctx, x, y, color, text, textColor) {
    // Draw node
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x - 60, y - 30, 120, 60, 8);
    ctx.fill();
    
    // Draw text
    ctx.fillStyle = textColor;
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
}

function drawConnection(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#72839f';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw arrow
    const angle = Math.atan2(y2 - y1, x2 - x1);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - 10 * Math.cos(angle - Math.PI / 6), y2 - 10 * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - 10 * Math.cos(angle + Math.PI / 6), y2 - 10 * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fillStyle = '#72839f';
    ctx.fill();
}

function createAvatarImage(altText, color) {
    const avatarImg = document.querySelector(`img[alt="${altText}"]`);
    if (avatarImg) {
        const canvas = document.createElement('canvas');
        canvas.width = 150;
        canvas.height = 150;
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#f0f2f5';
        ctx.fillRect(0, 0, 150, 150);
        
        // Circle for face
        ctx.beginPath();
        ctx.arc(75, 60, 40, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Body shape
        ctx.beginPath();
        ctx.ellipse(75, 140, 50, 70, 0, Math.PI, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Add initials
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(altText.split(' ').map(word => word[0]).join(''), 75, 60);
        
        avatarImg.src = canvas.toDataURL('image/png');
    }
}

function createLogoImage(altText, color) {
    const logoImages = document.querySelectorAll(`img[alt="${altText}"]`);
    logoImages.forEach(logoImg => {
        if (logoImg) {
            const canvas = document.createElement('canvas');
            canvas.width = 120;
            canvas.height = 60;
            const ctx = canvas.getContext('2d');
            
            // Background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 120, 60);
            
            // Draw logo
            ctx.beginPath();
            ctx.roundRect(10, 10, 100, 40, 5);
            ctx.fillStyle = color;
            ctx.fill();
            
            // Add text
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(altText, 60, 30);
            
            logoImg.src = canvas.toDataURL('image/png');
        }
    });
}

// Dados confirmados de economia de tempo com automação
const automationTasks = {
    "processamento-emails": {
        title: "Processamento de Emails",
        timeBefore: "4 horas por dia",
        timeAfter: "30 minutos por dia",
        description: "Automatize a classificação, resposta e encaminhamento de emails com base em regras personalizadas. Ideal para SAC, vendas e suporte."
    },
    "gestao-planilhas": {
        title: "Gestão de Planilhas",
        timeBefore: "3 horas por dia",
        timeAfter: "15 minutos por dia",
        description: "Sincronize dados entre diferentes planilhas, atualize informações automaticamente e gere relatórios personalizados sem esforço manual."
    },
    "integracao-leads": {
        title: "Integração de Leads",
        timeBefore: "2 horas por dia",
        timeAfter: "10 minutos por dia",
        description: "Capture leads de diferentes fontes e distribua automaticamente para sua equipe de vendas, com enriquecimento de dados e scoring."
    },
    "geracao-relatorios": {
        title: "Geração de Relatórios",
        timeBefore: "5 horas por semana",
        timeAfter: "20 minutos por semana",
        description: "Crie e envie relatórios automaticamente combinando dados de múltiplas fontes como Google Analytics, CRM e planilhas."
    },
    "onboarding-clientes": {
        title: "Onboarding de Clientes",
        timeBefore: "3 horas por cliente",
        timeAfter: "30 minutos por cliente",
        description: "Automatize o processo de boas-vindas, envio de materiais e configuração inicial de novos clientes."
    },
    "gestao-redes-sociais": {
        title: "Gestão de Redes Sociais",
        timeBefore: "15 horas por semana",
        timeAfter: "2 horas por semana",
        description: "Agende posts, monitore menções e gere relatórios de performance automaticamente para múltiplas redes sociais."
    },
    "backup-dados": {
        title: "Backup de Dados",
        timeBefore: "2 horas por dia",
        timeAfter: "5 minutos por dia",
        description: "Realize backups automáticos de arquivos importantes, bancos de dados e configurações para múltiplos destinos."
    },
    "monitoramento-precos": {
        title: "Monitoramento de Preços",
        timeBefore: "4 horas por dia",
        timeAfter: "15 minutos por dia",
        description: "Monitore preços de concorrentes e receba alertas automáticos quando houver alterações significativas."
    },
    "gestao-tarefas": {
        title: "Gestão de Tarefas",
        timeBefore: "2 horas por dia",
        timeAfter: "20 minutos por dia",
        description: "Distribua e acompanhe tarefas automaticamente com base em regras de negócio e disponibilidade da equipe."
    },
    "integracao-apis": {
        title: "Integração de APIs",
        timeBefore: "6 horas por integração",
        timeAfter: "1 hora por integração",
        description: "Conecte diferentes sistemas e APIs sem precisar de conhecimento profundo em programação."
    },
    "notificacoes-eventos": {
        title: "Notificações de Eventos",
        timeBefore: "3 horas por dia",
        timeAfter: "10 minutos por dia",
        description: "Configure alertas automáticos para eventos importantes do negócio via email, SMS ou mensagens instantâneas."
    },
    "processamento-pedidos": {
        title: "Processamento de Pedidos",
        timeBefore: "4 horas por dia",
        timeAfter: "30 minutos por dia",
        description: "Automatize a validação, processamento e acompanhamento de pedidos de clientes em seu e-commerce."
    },
    "atualizacao-crm": {
        title: "Atualização de CRM",
        timeBefore: "3 horas por dia",
        timeAfter: "15 minutos por dia",
        description: "Mantenha seu CRM sempre atualizado com dados de múltiplas fontes, incluindo redes sociais e interações por email."
    }
};

// Methodology Tool Data
const methodologyTools = {
    ai: {
        name: "Inteligências Artificiais na Carreira",
        description: "Framework para identificar e aplicar diferentes tipos de IAs no desenvolvimento profissional, potencializando resultados e mantendo-se relevante no mercado.",
        benefits: [
            "Domínio das principais IAs do mercado",
            "Aumento de produtividade com automação inteligente",
            "Diferencial competitivo no mercado",
            "Tomada de decisão baseada em IA"
        ],
        application: "Durante a mentoria, exploramos as principais IAs disponíveis e desenvolvemos estratégias práticas para aplicá-las no seu contexto profissional, garantindo maior eficiência e inovação."
    },
    design: {
        name: "Expertise em Design",
        description: "Metodologia prática para desenvolver habilidades em design thinking e UX/UI, focando na criação de soluções inovadoras e centradas no usuário para problemas complexos.",
        benefits: [
            "Design thinking aplicado a projetos reais",
            "Criação de protótipos e validação rápida",
            "Metodologias ágeis de design",
            "Desenvolvimento de produtos inovadores"
        ],
        application: "Aplicamos técnicas avançadas de design para resolver desafios específicos do seu negócio, garantindo soluções eficientes e focadas no usuário."
    },
    automation: {
        name: "Automação e Inteligência Artificial",
        description: "Framework completo para implementar automação e IA em processos empresariais, aumentando eficiência e reduzindo custos operacionais significativamente.",
        benefits: [
            "Automação de processos repetitivos",
            "Implementação prática de IAs",
            "Otimização de fluxos de trabalho",
            "Redução de custos operacionais"
        ],
        application: "Desenvolvemos estratégias personalizadas de automação e IA para seu negócio, com foco em resultados mensuráveis e retorno sobre investimento."
    },
    research: {
        name: "Pesquisa Aplicada",
        description: "Sistema estruturado de pesquisa para validar hipóteses de negócio, identificar oportunidades de mercado e desenvolver soluções baseadas em dados concretos.",
        benefits: [
            "Metodologias científicas práticas",
            "Validação de hipóteses de mercado",
            "Análise competitiva avançada",
            "Insights acionáveis para negócios"
        ],
        application: "Implementamos projetos de pesquisa focados em resultados práticos, ajudando você a tomar decisões mais assertivas baseadas em dados."
    },
    education: {
        name: "Fundamentos da Educação",
        description: "Metodologia educacional moderna que combina princípios pedagógicos com tecnologia para criar experiências de aprendizagem efetivas e engajadoras.",
        benefits: [
            "Técnicas modernas de ensino",
            "Aprendizagem ativa e prática",
            "Avaliação de resultados educacionais",
            "Engajamento efetivo de alunos"
        ],
        application: "Desenvolvemos programas educacionais personalizados que maximizam o aprendizado e garantem resultados mensuráveis."
    },
    marketing: {
        name: "Estratégias de Marketing Inovadoras",
        description: "Framework estratégico de marketing digital que integra dados, automação e criatividade para aumentar visibilidade, engajamento e conversão de forma mensurável.",
        benefits: [
            "Marketing baseado em dados",
            "Automação de campanhas",
            "Estratégias de conteúdo efetivas",
            "Otimização de conversão"
        ],
        application: "Criamos e implementamos estratégias de marketing personalizadas que geram resultados tangíveis para seu negócio."
    },
    data: {
        name: "Análise de Dados Profunda",
        description: "Sistema avançado de análise de dados que transforma informações brutas em insights acionáveis, permitindo tomadas de decisão mais precisas e estratégicas.",
        benefits: [
            "Análise preditiva avançada",
            "Visualização de dados efetiva",
            "Modelagem estatística prática",
            "Insights acionáveis de negócio"
        ],
        application: "Implementamos análises de dados que geram insights práticos e orientam decisões estratégicas para seu negócio."
    },
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
        name: "Jornada do Cliente e do Profissional",
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
        description: "Estratégia para construir e manter uma rede de contatos profissionais qualificada e alinhada com seus objetivos de carreira.",
        benefits: [
            "Expansão estratégica de contatos",
            "Oportunidades de crescimento",
            "Troca de experiências",
            "Visibilidade profissional"
        ],
        application: "Desenvolvemos estratégias personalizadas para ampliar e fortalecer sua rede de contatos profissionais de forma autêntica e efetiva."
    },
    branding: {
        name: "Personal Branding Canvas",
        description: "Framework para desenvolver e gerenciar sua marca pessoal, alinhando sua imagem profissional com seus objetivos de carreira.",
        benefits: [
            "Posicionamento profissional claro",
            "Diferenciação no mercado",
            "Consistência na comunicação",
            "Atração de oportunidades"
        ],
        application: "Trabalhamos na construção e fortalecimento da sua marca pessoal para aumentar sua autoridade e relevância no mercado."
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
        description: "Metodologia para desenvolver habilidades de comunicação efetiva em diferentes contextos profissionais, melhorando sua influência e impacto.",
        benefits: [
            "Comunicação clara e assertiva",
            "Apresentações impactantes",
            "Negociação efetiva",
            "Influência e persuasão"
        ],
        application: "Desenvolvemos suas habilidades de comunicação através de exercícios práticos e feedback constante, adaptados ao seu contexto profissional."
    },
    decision: {
        name: "Tomada de Decisão",
        description: "Framework estruturado para melhorar sua capacidade de tomar decisões estratégicas, considerando diferentes variáveis e cenários.",
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
        description: "Sistema integrado de técnicas e ferramentas para maximizar sua produtividade e manter o foco em objetivos estratégicos.",
        benefits: [
            "Gestão eficiente do tempo",
            "Priorização estratégica",
            "Eliminação de distrações",
            "Aumento da performance"
        ],
        application: "Implementamos técnicas personalizadas de produtividade adaptadas ao seu estilo de trabalho e objetivos específicos."
    },
    career: {
        name: "Planejamento de Carreira",
        description: "Metodologia completa para planejar e desenvolver sua carreira de forma estratégica, alinhada com seus objetivos e valores.",
        benefits: [
            "Clareza de objetivos profissionais",
            "Estratégias de desenvolvimento",
            "Posicionamento no mercado",
            "Plano de ação estruturado"
        ],
        application: "Desenvolvemos um plano estratégico personalizado para sua carreira, considerando suas aspirações e o contexto do mercado."
    }
};

// Initialize Efficiency Calculator
function initCalculator() {
    const taskSelect = document.getElementById('taskSelect');
    const timeBefore = document.getElementById('time-before-value');
    const timeAfter = document.getElementById('time-after-value');
    const solution = document.getElementById('automation-solution');
    
    if (!taskSelect || !timeBefore || !timeAfter || !solution) {
        console.error('Elementos da calculadora não encontrados');
        return;
    }
    
    // Limpar opções existentes
    taskSelect.innerHTML = '';
    
    // Adicionar opção padrão
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecione uma tarefa';
    taskSelect.appendChild(defaultOption);
    
    // Adicionar todas as tarefas
    Object.entries(automationTasks).forEach(([key, task]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = task.title;
        taskSelect.appendChild(option);
    });
    
    // Evento de mudança
    taskSelect.addEventListener('change', updateCalculator);
    
    // Inicializar com valores padrão
    updateCalculator();
}

function updateCalculator() {
    const taskSelect = document.getElementById('taskSelect');
    const timeBefore = document.getElementById('time-before-value');
    const timeAfter = document.getElementById('time-after-value');
    const solution = document.getElementById('automation-solution');
    
    const selectedTask = taskSelect.value;
    const task = automationTasks[selectedTask];
    
    if (task) {
        // Atualizar valores com transição suave
        timeBefore.style.opacity = '0';
        timeAfter.style.opacity = '0';
        solution.style.opacity = '0';
        
        setTimeout(() => {
            timeBefore.textContent = task.timeBefore;
            timeAfter.textContent = task.timeAfter;
            solution.textContent = task.description;
            
            timeBefore.style.opacity = '1';
            timeAfter.style.opacity = '1';
            solution.style.opacity = '1';
            
            updateSavingsChart(task);
        }, 200);
    } else {
        // Valores padrão quando nenhuma tarefa está selecionada
        timeBefore.textContent = '2 horas por dia';
        timeAfter.textContent = '20 minutos por dia';
        solution.textContent = 'Selecione uma tarefa para ver como a automação pode ajudar.';
        updateSavingsChart({
            timeBefore: '2 horas por dia',
            timeAfter: '20 minutos por dia'
        });
    }
}

function updateSavingsChart(task) {
    const chart = document.querySelector('.savings-chart');
    if (!chart) return;
    
    // Converter tempo para minutos por mês
    function getMinutesPerMonth(timeString) {
        const [time, unit, , period] = timeString.split(' ');
        const value = parseFloat(time);
        
        let minutesPerPeriod = unit.includes('hora') ? value * 60 : value;
        
        switch(period) {
            case 'semana':
                return minutesPerPeriod * 4; // 4 semanas por mês
            case 'cliente':
                return minutesPerPeriod * 10; // média de 10 clientes por mês
            default: // 'dia'
                return minutesPerPeriod * 22; // 22 dias úteis por mês
        }
    }
    
    const beforeMinutes = getMinutesPerMonth(task.timeBefore);
    const afterMinutes = getMinutesPerMonth(task.timeAfter);
    const savings = ((beforeMinutes - afterMinutes) / beforeMinutes * 100).toFixed(0);
    const monthlyHoursSaved = ((beforeMinutes - afterMinutes) / 60).toFixed(1);
    
    chart.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h4 style="margin-bottom: 15px;">Economia de Tempo</h4>
            <div style="font-size: 2em; color: var(--accent-color); margin-bottom: 10px;">
                ${savings}%
            </div>
            <p style="color: var(--text-secondary);">
                Você economiza ${monthlyHoursSaved} horas por mês
            </p>
        </div>
    `;
}

// Setup smooth scrolling behavior
function setupScrollBehavior() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
}

// Add animations for better engagement
function initAnimations() {
    // Animate elements when they come into view (service-card excluído: Nossa Expertise sempre visível)
    const elements = document.querySelectorAll('.pricing-card, .hero-content, .calculator-widget, .guarantee-badge, .step, .instructor-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    elements.forEach(element => {
        // Add initial invisible class
        element.classList.add('animate-on-scroll');
        // Observe the element
        observer.observe(element);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
        #servicos .service-card,
        #servicos .service-card.animate-on-scroll,
        #servicos .service-card.animate-on-scroll.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Load company logos dynamically
function loadLogos() {
    const companyLogosContainer = document.querySelector('.companies-logos');
    const heroLogosContainer = document.querySelector('.logos-container');
    
    // Companies to display
    const companies = [
        { name: 'Danone', color: '#0066A4' },
        { name: 'Whirlpool', color: '#1E88E5' },
        { name: 'Deloitte', color: '#86BC25' },
        { name: 'EBAC', color: '#FF5722' },
        { name: 'Descomplica', color: '#673AB7' },
        { name: 'John Deere', color: '#367C2B' }
    ];
    
    // Create logo elements for the hero section
    if (heroLogosContainer) {
        companies.slice(0, 4).forEach(company => {
            // Create placeholder logo
            const logoElement = document.createElement('div');
            logoElement.className = 'logo-placeholder';
            logoElement.style.display = 'flex';
            logoElement.style.alignItems = 'center';
            logoElement.style.justifyContent = 'center';
            logoElement.style.width = '120px';
            logoElement.style.height = '50px';
            logoElement.style.backgroundColor = company.color;
            logoElement.style.borderRadius = '8px';
            logoElement.style.color = 'white';
            logoElement.style.fontWeight = '600';
            logoElement.textContent = company.name;
            
            heroLogosContainer.appendChild(logoElement);
        });
    }
    
    // Create logo elements for the companies section
    if (companyLogosContainer) {
        companies.forEach(company => {
            // Create placeholder logo
            const logoElement = document.createElement('div');
            logoElement.className = 'logo-placeholder';
            logoElement.style.display = 'flex';
            logoElement.style.alignItems = 'center';
            logoElement.style.justifyContent = 'center';
            logoElement.style.width = '150px';
            logoElement.style.height = '70px';
            logoElement.style.backgroundColor = company.color;
            logoElement.style.borderRadius = '8px';
            logoElement.style.color = 'white';
            logoElement.style.fontWeight = '700';
            logoElement.style.fontSize = '1.1rem';
            logoElement.textContent = company.name;
            
            companyLogosContainer.appendChild(logoElement);
        });
    }
    
    // Create social proof testimonials
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        const testimonials = [
            {
                name: 'Ana Silva',
                position: 'Gerente de Marketing Digital',
                text: 'O curso de N8n transformou o trabalho da minha equipe. Conseguimos automatizar processos que antes tomavam dias e agora são feitos em minutos!',
                color: '#0066A4'
            },
            {
                name: 'Carlos Mendes',
                position: 'Desenvolvedor Full Stack',
                text: 'Aprendi a conectar sistemas que antes pareciam impossíveis de integrar. As skills de N8n mudaram completamente minha carreira.',
                color: '#673AB7'
            },
            {
                name: 'Mariana Costa',
                position: 'Empresária',
                text: 'Reduzi custos operacionais em mais de 40% automatizando processos com o N8n. O retorno sobre o investimento no curso foi quase imediato.',
                color: '#22af59'
            }
        ];
        
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'testimonial-card';
            testimonialElement.style = `
                background-color: #fff;
                border-radius: var(--border-radius);
                padding: var(--spacing-md);
                box-shadow: var(--card-shadow);
                flex: 1;
                min-width: 280px;
                text-align: left;
            `;
            
            testimonialElement.innerHTML = `
                <p style="font-style: italic; position: relative; margin-bottom: var(--spacing-md); color: var(--text-primary);">"${testimonial.text}"</p>
                <div style="display: flex; align-items: center;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background-color: ${testimonial.color}; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">${testimonial.name.charAt(0)}</div>
                    <div style="margin-left: var(--spacing-sm);">
                        <p style="margin-bottom: 0; font-weight: bold; color: var(--text-primary);">${testimonial.name}</p>
                        <p style="margin-bottom: 0; font-size: 0.9rem; color: var(--text-secondary);">${testimonial.position}</p>
                    </div>
                </div>
            `;
            
            testimonialsContainer.appendChild(testimonialElement);
        });
    }
    
    // Create video player placeholder
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        const playButton = videoPlaceholder.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', () => {
                // Replace with iframe or video player in a real implementation
                videoPlaceholder.innerHTML = `
                    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; color: white;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <line x1="12" y1="2" x2="12" y2="22"></line>
                        </svg>
                        <p style="margin-top: 1rem; font-weight: bold;">Vídeo em preparação</p>
                        <p>Clique para assistir à demonstração completa</p>
                    </div>
                `;
            });
        }
    }
}

// Add a simple preloader
window.addEventListener('load', function() {
    // Create preloader element
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    `;
    
    // Create spinner
    const spinner = document.createElement('div');
    spinner.style = `
        width: 50px;
        height: 50px;
        border: 5px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        border-top-color: var(--primary-color);
        animation: spin 1s ease-in-out infinite;
    `;
    
    // Add keyframes for spinner
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    preloader.appendChild(spinner);
    document.body.appendChild(preloader);
    
    // Hide preloader after page loads
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 500);
});

function setupEfficiencyCalculator() {
    // ... existing code ...

    // Initialize the savings chart with darker colors for better contrast
    const ctx = document.getElementById('savingsChart').getContext('2d');
    const savingsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Antes', 'Depois'],
            datasets: [{
                data: [initialHours, initialHours * (1 - savingsPercent/100)],
                backgroundColor: [
                    'rgba(10, 61, 159, 1)',  // Darker blue for better contrast
                    'rgba(17, 107, 53, 1)'   // Darker green for better contrast
                ],
                borderColor: [
                    'rgba(10, 61, 159, 1)',
                    'rgba(17, 107, 53, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Horas Mensais'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // ... existing code ...
}

// New function to save images to disk
function saveAllImagesToFiles() {
    // Create a download link for each image
    try {
        // Automation flow image
        saveCanvasToFile('automationFlow', 'automation-flow.webp', 'Automation Flow');
        
        // Testimonial images
        saveCanvasToFile('joaoSilva', 'images/joao-silva.jpg', 'João Silva');
        saveCanvasToFile('mariaSantos', 'images/maria-santos.jpg', 'Maria Santos');
        saveCanvasToFile('pedroCosta', 'images/testimonial-small.jpg', 'Pedro Costa');
        
        // Logo images
        saveCanvasToFile('ecommerceLogo', 'logos/ecommerce.svg', 'E-commerce');
        saveCanvasToFile('footerLogo', 'logo.png', 'Logo');
        
        console.log('All images saved successfully!');
    } catch (error) {
        console.error('Error saving images:', error);
    }
}

function saveCanvasToFile(id, filename, altText) {
    // Create a link element
    const link = document.createElement('a');
    link.download = filename;
    
    // Get the canvas data
    const img = document.querySelector(`img[alt="${altText}"]`);
    if (img && img.src) {
        link.href = img.src;
        // Append to the body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Load partner logos in the hero section and companies section
function loadPartnerLogos() {
    const heroLogosContainer = document.querySelector('.hero .logos-container');
    const companiesLogosContainer = document.querySelector('.companies-logos');
    
    // Clear existing content
    if (heroLogosContainer) heroLogosContainer.innerHTML = '';
    if (companiesLogosContainer) companiesLogosContainer.innerHTML = '';
    
    // Partner logos data with alt text and file paths
    const partnerLogos = [
        { src: './assets/logos/danone.webp', alt: 'Danone', width: 120 },
        { src: './assets/logos/deloitte.webp', alt: 'Deloitte', width: 140 },
        { src: './assets/logos/EBAC.webp', alt: 'EBAC', width: 100 },
        { src: './assets/logos/iIBmec.webp', alt: 'IBMEC', width: 120 },
        { src: './assets/logos/John%20Deere.webp', alt: 'John Deere', width: 110, needsFilter: true },
        { src: './assets/logos/whirlpool.webp', alt: 'Whirlpool', width: 130 }
    ];
    
    // Add logos to hero section
    if (heroLogosContainer) {
        partnerLogos.forEach(logo => {
            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.alt;
            img.width = logo.width;
            img.classList.add('partner-logo');
            if (logo.needsFilter) {
                img.style.filter = 'brightness(0) invert(1)';
            }
            img.style.opacity = '0.9';
            heroLogosContainer.appendChild(img);
        });
    }
    
    // Add logos to companies section with different styling
    if (companiesLogosContainer) {
        partnerLogos.forEach(logo => {
            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.alt;
            img.width = logo.width * 1.2; // Slightly larger in companies section
            img.classList.add('company-logo');
            companiesLogosContainer.appendChild(img);
        });
    }
}

// Smooth scroll for anchor links
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

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mentor Carousel Functionality
class MentorCarousel {
    constructor(element) {
        this.carousel = element;
        if (!this.carousel) return;

        // Elements
        this.track = this.carousel.querySelector('.carousel-track');
        this.slides = Array.from(this.track.children);
        this.nextButton = this.carousel.querySelector('.carousel-nav.next');
        this.prevButton = this.carousel.querySelector('.carousel-nav.prev');

        // State
        this.currentIndex = 0;
        this.slidesPerView = this.getSlidesPerView();
        this.slideWidth = 100 / this.slidesPerView;
        this.maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
        
        // Touch handling
        this.isDragging = false;
        this.startPos = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;
        this.dragged = false;

        // Bind methods
        this.init = this.init.bind(this);
        this.handleResize = this.debounce(this.handleResize.bind(this), 250);
        this.moveToSlide = this.moveToSlide.bind(this);
        this.moveNext = this.moveNext.bind(this);
        this.movePrev = this.movePrev.bind(this);
        this.startDragging = this.startDragging.bind(this);
        this.duringDragging = this.duringDragging.bind(this);
        this.stopDragging = this.stopDragging.bind(this);
        this.animation = this.animation.bind(this);
        this.setPositionByIndex = this.setPositionByIndex.bind(this);
        this.startAutoplay = this.startAutoplay.bind(this);
        this.stopAutoplay = this.stopAutoplay.bind(this);

        // Initialize
        this.init();
    }

    init() {
        // Set initial styles
        this.track.style.display = 'flex';
        this.track.style.transition = 'transform 0.3s ease-out';
        this.slides.forEach(slide => {
            slide.style.flex = `0 0 ${this.slideWidth}%`;
            slide.style.userSelect = 'none';
            slide.style.WebkitUserSelect = 'none';
            slide.style.MozUserSelect = 'none';
            slide.style.msUserSelect = 'none';
        });

        // Add event listeners
        this.nextButton.addEventListener('click', this.moveNext);
        this.prevButton.addEventListener('click', this.movePrev);
        
        // Touch events
        this.track.addEventListener('touchstart', this.startDragging);
        this.track.addEventListener('touchmove', this.duringDragging);
        this.track.addEventListener('touchend', this.stopDragging);
        
        // Mouse events
        this.track.addEventListener('mousedown', this.startDragging);
        this.track.addEventListener('mousemove', this.duringDragging);
        this.track.addEventListener('mouseup', this.stopDragging);
        this.track.addEventListener('mouseleave', this.stopDragging);
        
        // Prevent context menu on long press
        this.track.addEventListener('contextmenu', e => e.preventDefault());
        
        // Window resize
        window.addEventListener('resize', this.handleResize);
        
        // Hover events for autoplay
        this.carousel.addEventListener('mouseenter', this.stopAutoplay);
        this.carousel.addEventListener('mouseleave', this.startAutoplay);
        
        // Set initial position
        this.setPositionByIndex();
        
        // Start autoplay
        this.startAutoplay();
        
        // Update button states
        this.updateButtonStates();
    }

    getSlidesPerView() {
        const width = window.innerWidth;
        if (width >= 1200) return 3;
        if (width >= 768) return 2;
        return 1;
    }

    debounce(func, wait) {
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

    handleResize() {
        const newSlidesPerView = this.getSlidesPerView();
        if (newSlidesPerView !== this.slidesPerView) {
            this.slidesPerView = newSlidesPerView;
            this.slideWidth = 100 / this.slidesPerView;
            this.maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
            
            this.slides.forEach(slide => {
                slide.style.flex = `0 0 ${this.slideWidth}%`;
            });
            
            this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
            this.setPositionByIndex(false);
            this.updateButtonStates();
        }
    }

    moveToSlide(index, animate = true) {
        this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
        this.setPositionByIndex(animate);
        this.updateButtonStates();
    }

    moveNext() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.setPositionByIndex();
            this.updateButtonStates();
        }
    }

    movePrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.setPositionByIndex();
            this.updateButtonStates();
        }
    }

    startDragging(event) {
        this.isDragging = true;
        this.dragged = false;
        this.startPos = this.getPositionX(event);
        this.animationID = requestAnimationFrame(this.animation);
        this.track.style.cursor = 'grabbing';
        this.stopAutoplay();
    }

    duringDragging(event) {
        if (!this.isDragging) return;
        
        event.preventDefault();
        const currentPosition = this.getPositionX(event);
        const diff = currentPosition - this.startPos;
        
        if (Math.abs(diff) > 5) {
            this.dragged = true;
        }
        
        this.currentTranslate = this.prevTranslate + diff;
    }

    stopDragging() {
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);
        this.track.style.cursor = '';
        
        if (this.dragged) {
            const movedBy = this.currentTranslate - this.prevTranslate;
            
            if (Math.abs(movedBy) > this.slideWidth * 20 / 100) {
                if (movedBy < 0) {
                    this.moveNext();
                } else {
                    this.movePrev();
                }
            } else {
                // Snap back to current position
                this.setPositionByIndex();
            }
        }
        
        this.startAutoplay();
    }

    animation() {
        if (this.isDragging) {
            this.setSliderPosition();
            requestAnimationFrame(this.animation);
        }
    }

    getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    setSliderPosition() {
        // Limit movement at edges
        const minTranslate = -(this.maxIndex * this.slideWidth);
        const maxTranslate = 0;
        
        this.currentTranslate = Math.max(
            Math.min(this.currentTranslate, maxTranslate),
            minTranslate
        );
        
        this.track.style.transform = `translateX(${this.currentTranslate}%)`;
    }

    setPositionByIndex(animate = true) {
        const translateX = -(this.currentIndex * this.slideWidth);
        this.track.style.transition = animate ? 'transform 0.3s ease-out' : 'none';
        this.track.style.transform = `translateX(${translateX}%)`;
    }

    updateButtonStates() {
        this.prevButton.disabled = this.currentIndex === 0;
        this.nextButton.disabled = this.currentIndex === this.maxIndex;
        this.prevButton.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.nextButton.style.opacity = this.currentIndex === this.maxIndex ? '0.5' : '1';
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            if (this.currentIndex === this.maxIndex) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            this.setPositionByIndex();
            this.updateButtonStates();
        }, 5000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Initialize FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && answer && toggle) {
            // Set initial state
            answer.style.maxHeight = '0px';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.3s ease-out';
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherAnswer && otherToggle) {
                            otherAnswer.style.maxHeight = '0px';
                            otherToggle.textContent = '+';
                        }
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                if (!isActive) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    toggle.textContent = '−';
                } else {
                    answer.style.maxHeight = '0px';
                    toggle.textContent = '+';
                }
            });
        }
    });
}