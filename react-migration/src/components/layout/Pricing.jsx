export default function Pricing() {
  return (
    <section className="pricing-section section" id="oferta">
        <div className="container">
            <div className="pricing-card">
                <div className="pricing-header">
                    <p className="lot-badge">LOTE ÚNICO</p>
                    <h3>Workshop: Eliminando o Gargalo</h3>
                    <p className="subtitle">Mapeie processos críticos e crie Agentes de IA agora.</p>
                </div>
                <div className="pricing-main">
                    <p className="original-price">De R$ 197,00</p>
                    <p className="final-price">Por apenas <br /> <strong>R$ 97,00</strong></p>
                </div>
                <a href="https://pay.hotmart.com/P105214094F" className="pricing-cta" style={{ display: 'inline-block', textDecoration: 'none', boxSizing: 'border-box' }}>QUERO ACABAR COM OS GARGALOS DA MINHA EMPRESA</a>
                <div className="pricing-footer">
                    <p><i className="fas fa-check"></i> Encontro síncrono prático no <strong>Meeting</strong> para aprender e <strong>tirar suas dúvidas na hora</strong></p>
                    <p><i className="fas fa-check"></i> Workshop Live com <strong>IA aplicada</strong> e <strong>modelos</strong> de extração de conhecimento</p>
                    <p><i className="fas fa-check"></i> Acesso a grupo no <strong>Whatsapp</strong> por duas semanas após o Workshop Live para <strong>tirar dúvidas de implementação</strong></p>
                </div>
            </div>
        </div>
    </section>
  );
}
