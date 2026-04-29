import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const faqs = [
    {
      question: "Preciso de conhecimento prévio em programação?",
      answer: "Não, o workshop é focado em ferramentas intuitivas onde você usa apenas a escrita comum para configurar seus próprios agentes de IA."
    },
    {
      question: "O workshop será gravado?",
      answer: "Sim, a gravação será enviada logo após o evento e ficará disponível para você consultar e revisar por 20 dias."
    },
    {
      question: "Esse método funciona para qualquer nicho de empresa?",
      answer: "Sim, a lógica de transformar conhecimento humano em ativos digitais serve para qualquer negócio, de clínicas médicas a agências de marketing."
    }
  ];

  return (
    <section className="faq-section section" id="faq" style={{ position: "relative", overflow: "hidden" }}>
       {init && (
          <Particles
            id="faq-particles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              particles: {
                color: { value: "#8F57FF" },
                links: {
                  color: "#8F57FF",
                  distance: 150,
                  enable: true,
                  opacity: 0.1, // Muito transparente para não brigar com o texto
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 0.5,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 40,
                },
                opacity: { value: 0.2 },
                size: { value: { min: 1, max: 2 } },
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
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h2 className="section-title">Perguntas Frequentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
