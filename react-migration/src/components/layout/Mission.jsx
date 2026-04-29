export default function Mission() {
  return (
    <section className="mission-section section" id="equipe">
        <div className="container">
            <div className="mission-grid">
                <div className="mission-text">
                    <h2>Nossa missão: desenvolver capacidades organizacionais para a era digital</h2>
                    <p>A Edugital atua no gap entre tecnologia e capacidade&nbsp;organizacional.</p>
                </div>

                <div className="mission-stats">
                    {/* Card 1 */}
                    <div className="stat-card bg-lilac">
                        <div className="stat-icon"><i className="fas fa-user"></i></div>
                        <h3>+5.000</h3>
                        <p>profissionais impactados</p>
                    </div>

                    {/* Card 2 */}
                    <div className="stat-card bg-blue">
                        <div className="stat-icon"><i className="fas fa-star"></i></div>
                        <h3>+30</h3>
                        <p>organizações atendidas</p>
                    </div>

                    {/* Card 3 */}
                    <div className="stat-card bg-yellow">
                        <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
                        <h3>10 anos</h3>
                        <p>de experiência em educação, tecnologia e organizações</p>
                    </div>

                    {/* Card 4 */}
                    <div className="stat-card bg-peach">
                        <div className="stat-icon"><i className="fas fa-project-diagram"></i></div>
                        <h3>+90</h3>
                        <p>projetos e programas executados</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
