export default function HowItWorks() {
  return (
    <section className="how-it-works-section section" id="literacia">
        <div className="container">
            <div className="how-header">
                <h2>Como a Edugital desenvolve capacidades nas organizações</h2>
                <p className="subtitle">Nossas soluções combinam diagnóstico organizacional, aprendizagem aplicada e
                    implementação de novos métodos de trabalho.</p>
            </div>

            <div className="how-grid">
                {/* Card 1 */}
                <div className="how-card">
                    <div className="how-icon"><i className="fas fa-search"></i></div>
                    <h3>Diagnóstico</h3>
                    <p>Identificamos onde decisões falham e processos geram retrabalho para redesenhar esses pontos
                        aumentando a eficiência operacional.</p>
                </div>

                {/* Card 2 */}
                <div className="how-card">
                    <div className="how-icon"><i className="fas fa-users-cog"></i></div>
                    <h3>Mentoria estratégica</h3>
                    <p>Ajudamos profissionais a tomar decisões mais consistentes, organizar melhor o trabalho e usar
                        tecnologia de forma produtiva no dia a dia.</p>
                </div>

                {/* Card 3 */}
                <div className="how-card">
                    <div className="how-icon"><i className="fas fa-sitemap"></i></div>
                    <h3>Estruturação de LMS ou LXP</h3>
                    <p>Transformamos conhecimento disperso em métodos, playbooks e processos que permitem que a
                        organização aprenda e evolua continuamente.</p>
                </div>

                {/* Card 4 */}
                <div className="how-card">
                    <div className="how-icon"><i className="fas fa-laptop-code"></i></div>
                    <h3>Programas de desenvolvimento</h3>
                    <p>Desenvolvemos competências críticas: pensamento analítico, produtividade digital e uso de
                        IA; aplicadas diretamente aos desafios da organização.</p>
                </div>
            </div>

            <div className="how-actions">
                <a href="#contato" className="btn-secondary" data-contact-trigger aria-controls="contactModal">Falar com
                    especialista</a>
                <p className="how-actions-caption">Transforme as capacidades da sua organização na era digital.</p>
            </div>
        </div>
    </section>
  );
}
