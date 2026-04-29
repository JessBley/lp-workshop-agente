export default function Avance() {
  return (
    <section className="avance-section section" id="servicos">
        <div className="container">
            <div className="avance-header">
                <h2>Avance com as soluções da Edugital:<br />dos processos aos resultados</h2>
            </div>

            <div className="avance-grid">
                {/* Card 1 */}
                <div className="avance-card card-color-1">
                    <div className="card-intro">
                        <h3>Consultoria em capacidades organizacionais</h3>
                    </div>
                    <div className="card-includes">
                        <p className="includes-label">Inclui</p>
                        <ul className="includes-list">
                            <li>diagnóstico organizacional</li>
                            <li>análise de processos</li>
                            <li>planejamento estratégico</li>
                            <li>reestruturação de métodos de trabalho</li>
                            <li>evolução do desempenho organizacional</li>
                            <li>métricas de desempenho</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="avance-card card-color-2">
                    <div className="card-intro">
                        <h3>Mentoria estratégica</h3>
                    </div>
                    <div className="card-includes">
                        <p className="includes-label">Inclui</p>
                        <ul className="includes-list">
                            <li>Acompanhamento aplicado para líderes e profissionais</li>
                            <li>melhora de decisões, organização do trabalho e uso de tecnologia</li>
                            <li>mentoria individual</li>
                            <li>mentoria coletiva</li>
                            <li>resolução de problemas reais</li>
                        </ul>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="avance-card card-color-3">
                    <div className="card-intro">
                        <h3>Arquitetura de aprendizagem organizacional</h3>
                    </div>
                    <div className="card-includes">
                        <p className="includes-label">Inclui</p>
                        <ul className="includes-list">
                            <li>trilhas de aprendizagem</li>
                            <li>programas internos</li>
                            <li>playbooks organizacionais</li>
                            <li>LXP</li>
                            <li>LMS</li>
                        </ul>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="avance-card card-color-4">
                    <div className="card-intro">
                        <h3>Programas de desenvolvimento de capacidades</h3>
                    </div>
                    <div className="card-includes">
                        <p className="includes-label">Inclui</p>
                        <ul className="includes-list">
                            <li>pensamento analítico</li>
                            <li>produtividade digital</li>
                            <li>uso estratégico de IA</li>
                            <li>comunicação e influência</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="avance-cta-block">
                <a href="#contato" className="btn-primary" data-contact-trigger aria-controls="contactModal">Falar com especialista</a>
                <p>Nossa equipe de especialistas ajudará você a escolher a melhor solução para sua empresa</p>
            </div>
        </div>
    </section>
  );
}
