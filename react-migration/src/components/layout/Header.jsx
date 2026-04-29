export default function Header({ onOpenModal }) {
  return (
    <header className="header" id="header">
        <div className="container">
            <nav className="nav">
                <a href="https://edugital.com.br/" className="nav__logo" target="_blank" rel="noreferrer">
                    <img src="/workshopagente/assets/logos/logo-edugitalklauto.webp" alt="Edugital" width="120" height="28" />
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                    </ul>
                </div>

                <div className="nav__cta">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScs-hnlbi3GlSE5CyT3WrxFObLedPt-Ps1i59h5lpdbW1plhA/viewform" className="btn" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="far fa-file-alt"></i>
                        <span>Fale Conosco</span>
                    </a>
                </div>

                <button className="nav__toggle" aria-label="Menu" aria-expanded="false">
                    <i className="fas fa-bars"></i>
                </button>
            </nav>
        </div>
    </header>
  );
}
