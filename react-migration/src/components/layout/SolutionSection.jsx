export default function SolutionSection() {
  const pillars = [
    { title: "Identificar Falhas", description: "Mapear onde o conhecimento está retido e quem são os gargalos.", icon: <i className="fas fa-search"></i> },
    { title: "Extração de Expertise", description: "Técnicas para 'tirar da cabeça' do colaborador e transformar em dados.", icon: <i className="fas fa-brain"></i> },
    { title: "Criação de Agentes de IA", description: "Configurar agentes (GPTs ou assistentes) que respondem como especialistas.", icon: <i className="fas fa-robot"></i> },
    { title: "Autonomia de Equipe", description: "Treinar novos colaboradores usando a IA como o 'Manual Vivo'.", icon: <i className="fas fa-rocket"></i> },
  ];

  return (
    <section className="solution-section section" id="solucao">
      <div className="container">
        <h2 className="section-header">A solução Edugital</h2>
        <p className="subtitle">Nesse <strong>Workshop Live</strong>, em 2 horas vamos sair da teoria e entrar na Engenharia de Conhecimento com IA.</p>
        <div className="solution-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="solution-card">
              <span className="pillar-icon">{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="learning-bullets bullet-points">
            <h3>O Que Você Vai Aprender:</h3>
            <ul>
                <li><i className="fas fa-check" style={{color: "white", marginRight: "10px"}}></i> Mapeamento de Processos 2.0: O fim dos manuais em PDF que ninguém lê.</li>
                <li><i className="fas fa-check" style={{color: "white", marginRight: "10px"}}></i> Criação de Agentes Internos: Passo a passo para construir sua própria biblioteca de inteligência.</li>
                <li><i className="fas fa-check" style={{color: "white", marginRight: "10px"}}></i> Segurança e Privacidade: Como garantir que os dados da sua empresa fiquem protegidos enquanto a IA trabalha.</li>
            </ul>
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="https://pay.hotmart.com/P105214094F" className="main-cta" style={{ display: 'inline-block', textDecoration: 'none', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }}>
                Quero me inscrever agora
            </a>
        </div>
      </div>
    </section>
  );
}
