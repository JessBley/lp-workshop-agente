import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Countdown from '../ui/Countdown';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero({ onOpenModal }) {
  const containerRef = useRef(null);
  const [init, setInit] = useState(false);
  const realEventDate = new Date('2026-05-20T19:00:00-03:00');
  const cutOffDate = new Date('2026-05-17T00:00:00-03:00');
  const now = new Date();

  let eventDate;
  if (now < cutOffDate) {
    // Escassez artificial antes do dia 10: sempre 3 dias a partir da data de acesso
    eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 3);
  } else {
    // Contador real a partir do dia 17 de maio apontando para o dia 20
    eventDate = realEventDate;
  }

  // Carrega o motor de partículas uma vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useGSAP(() => {
    gsap.from(".hero__title", { y: 30, opacity: 0, duration: 0.8 });
    gsap.from(".hero__subtitle", { y: 20, opacity: 0, duration: 0.8, delay: 0.3 });
    
    // Info-Badge Fade
    gsap.from(".hero-info-badge", { y: 20, opacity: 0, duration: 0.8, delay: 0.6 });
    
    // Animação do Contador incluída para respeitar a regra de 0.5s
    gsap.from(".countdown-wrapper", { y: 20, opacity: 0, duration: 0.8, delay: 1.1 });
    
    gsap.from(".hero__cta-group", { y: 20, opacity: 0, duration: 0.8, delay: 1.3 });
  }, { scope: containerRef });

  return (
    <section className="hero" ref={containerRef} style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        {init && (
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "grab" },
                  resize: { enable: true },
                },
                modes: {
                  grab: { distance: 140, links: { opacity: 0.5 } },
                },
              },
              particles: {
                color: { value: "#8F57FF" },
                links: {
                  color: "#8F57FF",
                  distance: 150,
                  enable: true,
                  opacity: 0.25,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 0.8,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 80,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1
            }}
          />
        )}
        
        <div className="container hero-container" style={{ position: "relative", zIndex: 1 }}>
            <h1 className="hero__title">
                Sua empresa para se aquela pessoa sair de férias?
            </h1>
            <p className="hero__subtitle">
                Transforme o conhecimento "escondido" da sua equipe em Agentes de IA e ganhe liberdade operacional.
            </p>
            <div className="hero-info-badge">
                <div className="badge-live-status">
                    <span className="pulsing-dot"></span>
                    WORKSHOP AO VIVO
                </div>
                <div className="badge-details">
                    <span className="badge-date">20 de Maio | 19h às 21h</span>
                    <span className="badge-location">Transmissão via Google Meet</span>
                </div>
                <div className="countdown-wrapper" style={{ marginTop: '0.5rem' }}>
                    <Countdown targetDate={eventDate.toISOString()} />
                </div>
            </div>

            <div className="hero__cta-group">
                <p className="hero__description-secondary">
                    Aprenda a mapear processos críticos e criar Agentes de IA internos que democratizam o conhecimento e garantem que sua operação nunca mais dependa de uma única pessoa.
                </p>
                <a href="https://pay.hotmart.com/P105214094F" className="hero__btn-proposal main-cta" style={{ display: 'inline-block', textDecoration: 'none' }}>
                    QUERO ACABAR COM OS GARGALOS DA MINHA EMPRESA
                </a>
            </div>
        </div>
    </section>
  );
}
