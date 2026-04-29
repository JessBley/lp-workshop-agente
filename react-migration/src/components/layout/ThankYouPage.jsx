import { useEffect } from 'react';
import { SUPPORT_EMAIL, SUPPORT_WHATSAPP_LINK } from '../../config';

export default function ThankYouPage() {
  // Atualiza o título da aba
  useEffect(() => {
    document.title = 'Edugital | Obrigado!';
  }, []);

  return (
    <div className="ty-page">

      {/* ───────────────────────────────────────────
          SEÇÃO 1 — Identificação & Boas-vindas (Topo)
      ─────────────────────────────────────────── */}
      <section className="ty-hero" aria-label="Workshop confirmado">
        <div className="ty-hero__glow" aria-hidden="true" />
        <div className="container ty-hero__container">
          
          <span className="ty-status-badge ty-status-badge--purple" style={{ marginBottom: '2rem' }}>
            Inscrição Confirmada
          </span>

          <div className="ty-workshop__card ty-workshop__card--hero">
            <h1 className="ty-workshop__name" style={{ margin: 0 }}>
              Workshop: <strong>Eliminando o Gargalo</strong>
            </h1>
          </div>


          <div className="ty-contingency" style={{ marginTop: '3rem' }}>
              <a 
                href="https://lxp.edugital.com.br/" 
                className="ty-btn-contingency"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-graduation-cap"></i>
                <span>Acessar área do aluno</span>
                <i className="fas fa-external-link-alt" style={{ opacity: 0.5 }}></i>
              </a>
              <p className="ty-contingency-hint">
                Já tem acesso? Entre diretamente pela plataforma enquanto seu e-mail de boas-vindas chega.
              </p>

              <div className="ty-contingency-divider">ou, se preferir</div>
          </div>

          <div className="ty-info-card" style={{ marginTop: '1.5rem' }}>
              <div className="ty-info-icon">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="ty-info-text">
                <strong>Verifique seu e-mail</strong>
                <p>Em alguns minutos você receberá as instruções de acesso na sua caixa de entrada.</p>
              </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 3 — Data, horário e formato
      ─────────────────────────────────────────── */}
      <section className="ty-datetime" id="quando" aria-label="Data e horário da live">
        <div className="container ty-datetime__container">

          <p className="ty-datetime__eyebrow">Anote na sua agenda</p>
          <h2 className="ty-datetime__heading">Quando vai acontecer?</h2>

          <div className="ty-datetime__card">

            <div className="ty-datetime__item">
              <div className="ty-datetime__icon" aria-hidden="true">📅</div>
              <div className="ty-datetime__info">
                <span className="ty-datetime__meta">Data da live</span>
                <strong className="ty-datetime__value">20 de maio de 2026</strong>
              </div>
            </div>

            <div className="ty-datetime__divider" aria-hidden="true" />

            <div className="ty-datetime__item">
              <div className="ty-datetime__icon" aria-hidden="true">🕖</div>
              <div className="ty-datetime__info">
                <span className="ty-datetime__meta">Horário</span>
                <strong className="ty-datetime__value">19h às 21h</strong>
                <span className="ty-datetime__tz">Horário de Brasília (GMT-3)</span>
              </div>
            </div>

            <div className="ty-datetime__divider" aria-hidden="true" />

            <div className="ty-datetime__item">
              <div className="ty-datetime__icon" aria-hidden="true">💻</div>
              <div className="ty-datetime__info">
                <span className="ty-datetime__meta">Formato</span>
                <strong className="ty-datetime__value">Encontro online ao vivo</strong>
                <span className="ty-datetime__tz">Transmissão via Google Meet, acesso pela área do aluno</span>
              </div>
            </div>

          </div>


        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 5 — Bloco de suporte ou contingência
      ─────────────────────────────────────────── */}
      <section className="ty-support" aria-labelledby="ty-support-title">
        <div className="container ty-support__container">
          
          <h2 className="ty-support__title" id="ty-support-title">
            Precisa de suporte?
          </h2>
          <p className="ty-support__description">
            Se você tiver qualquer dúvida sobre o acesso ou não receber o e-mail 
            de confirmação, fale com a nossa equipe agora:
          </p>

          <div className="ty-support__grid">
            {/* E-mail */}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="ty-support__card">
              <div className="ty-support__icon" aria-hidden="true">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="ty-support__info">
                <span>{SUPPORT_EMAIL}</span>
              </div>
            </a>
          </div>


        </div>
      </section>

      <footer className="ty-footer">
        <div className="container ty-footer__container">
          <p className="ty-footer__copyright">© 2026 Edugital. Todos os direitos reservados.</p>
          <div className="ty-footer__links">
            <a href="https://edugital.com.br/privacidade.html" className="ty-footer__link" target="_blank" rel="noreferrer">Política de Privacidade</a>
            <span className="ty-footer__divider">|</span>
            <a href="#" className="ty-footer__link">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
