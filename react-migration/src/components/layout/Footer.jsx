export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__grid">
                <div className="footer__column">
                    <a href="https://edugital.com.br/" className="footer__logo" target="_blank" rel="noreferrer">
                        <img src={`${import.meta.env.BASE_URL}assets/logos/edugital-branco.webp`} alt="Edugital" width="96" height="24" loading="lazy" />
                    </a>
                    <p className="footer__description">
                        Transformando negócios através de soluções inovadoras em educação corporativa e tecnologia.
                    </p>
                     <div className="footer__social">
                        <a href="https://linkedin.com/company/edugitalbr" className="social__link" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://instagram.com/edugital.br" className="social__link" aria-label="Instagram" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com/@edugital" className="social__link" aria-label="YouTube" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div className="footer__column">
                    <h3 className="footer__title">Links Rápidos</h3>
                    <ul className="footer__links">
                        <li className="footer__link"><a href="#header">Início</a></li>
                        <li className="footer__link"><a href="#solucao">Solução Edugital</a></li>
                        <li className="footer__link"><a href="#oferta">Oferta</a></li>
                        <li className="footer__link"><a href="#faq">Perguntas Frequentes</a></li>
                    </ul>
                </div>


                <div className="footer__column">
                    <h3 className="footer__title">Contato</h3>
                    <div className="footer__contact">
                        <div className="contact__item">
                            <i className="fas fa-phone"></i>
                            <a href="https://wa.me/5548998422247" target="_blank" rel="noreferrer">
                                +55 48 99842-2247
                            </a>
                        </div>
                        <div className="contact__item">
                            <i className="fas fa-envelope"></i>
                            <span>contato@edugital.com.br</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__copyright">
                    © 2026 Edugital. Todos os direitos reservados.
                </div>
                <div className="footer__legal">
                    <a href="https://edugital.com.br/privacidade.html" className="footer__legal-link" target="_blank" rel="noreferrer">Política de Privacidade</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
