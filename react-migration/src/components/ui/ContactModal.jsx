export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="contact-modal" id="contactModal" aria-hidden={!isOpen}>
        <div className="contact-modal__overlay" onClick={onClose}></div>
        <div className="contact-modal__content" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
            <button className="contact-modal__close" type="button" aria-label="Fechar" onClick={onClose}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div className="contact-modal__header">
                <h2 className="contact-modal__title" id="contactModalTitle">Fale com a Edugital</h2>
            </div>
            <div className="contact-modal__iframe-container">
                <iframe className="contact-modal__iframe"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScs-hnlbi3GlSE5CyT3WrxFObLedPt-Ps1i59h5lpdbW1plhA/viewform?embedded=true"
                    width="640" height="1208" frameBorder="0" marginHeight="0" marginWidth="0"
                    title="Formulário de contato Edugital">
                    Carregando…
                </iframe>
            </div>
        </div>
    </div>
  );
}
