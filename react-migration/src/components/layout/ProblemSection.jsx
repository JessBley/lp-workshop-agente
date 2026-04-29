import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".problem-item", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        clearProps: "all"
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="problem-section section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">O cenário é familiar?</h2>
        <div className="problem-grid">
          <div className="problem-item">
            <div className="problem-icon"><i className="fas fa-chart-line"></i></div>
            <h3>Gestor de tráfego</h3>
            <p>Se ele falta, ninguém sabe onde estão os relatórios ou como otimizar as campanhas.</p>
          </div>
          <div className="problem-item">
            <div className="problem-icon"><i className="fas fa-calendar-alt"></i></div>
            <h3>Secretária</h3>
            <p>Se ela adoece, a agenda vira um caos e compromissos importantes são perdidos.</p>
          </div>
          <div className="problem-item">
            <div className="problem-icon"><i className="fas fa-handshake"></i></div>
            <h3>Vendedor Sênior</h3>
            <p>Se ele sai, o processo de vendas morre com ele e o faturamento desaba.</p>
          </div>
        </div>
        <div className="problem-summary">
          <p>O diagnóstico é claro: <strong>Você não tem uma empresa, você tem um conjunto de "pessoas-gargalo".</strong> Se elas param, você para.</p>
        </div>
      </div>
    </section>
  );
}
