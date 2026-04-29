import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Lógica para mostrar após hidratar caso não tenha o cookie setado
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" id="cookieBanner" aria-hidden={!isVisible}>
        <div className="cookie-banner__content" role="dialog" aria-labelledby="cookieTitle">
            <div className="cookie-banner__text">
                <h3 className="cookie-banner__title" id="cookieTitle">Cookies e privacidade</h3>
                <p className="cookie-banner__description">
                    Usamos cookies essenciais para o funcionamento do site e cookies opcionais para melhorar sua
                    experiência.
                </p>
                <a href="https://edugital.com.br/privacidade.html" className="cookie-banner__link">Ler política de privacidade</a>
            </div>
            <div className="cookie-banner__preferences">
                <label className="cookie-banner__option">
                    <input type="checkbox" defaultChecked disabled />
                    <span>Necessários</span>
                </label>
                <label className="cookie-banner__option">
                    <input type="checkbox" name="cookie_analytics" />
                    <span>Analíticos</span>
                </label>
                <label className="cookie-banner__option">
                    <input type="checkbox" name="cookie_marketing" />
                    <span>Marketing</span>
                </label>
            </div>
            <div className="cookie-banner__actions">
                <button className="btn btn--secondary" type="button" onClick={() => setIsVisible(false)}>Rejeitar</button>
                <button className="btn btn--secondary" type="button" onClick={handleAccept}>Salvar preferências</button>
                <button className="btn btn--primary" type="button" onClick={handleAccept}>Aceitar todos</button>
            </div>
        </div>
    </div>
  );
}
