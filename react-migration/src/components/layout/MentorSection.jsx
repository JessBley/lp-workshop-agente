import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { IMG_PATH } from '../../config';

export default function MentorSection() {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        // Zoom-in effect for image
        gsap.from(imgRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        // Lateral fade-in for text
        gsap.from(textRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });
    }, { scope: sectionRef });

    return (
        <section className="mentor-section section" ref={sectionRef}>
            <div className="container mentor-container">
                <div className="mentor-grid">
                    <div className="mentor-image-wrapper" ref={imgRef}>
                        <img 
                            src={`${IMG_PATH}alan-dantas.webp.jpg`} 
                            alt="Alan Dantas" 
                            className="mentor-photo"
                        />
                        <div className="mentor-glow"></div>
                    </div>
                    
                    <div className="mentor-content" ref={textRef}>
                        <h2 className="mentor-title">Quem vai te guiar nessa transformação?</h2>
                        <h3 className="mentor-name">Alan Dantas</h3>
                        
                        <div className="mentor-bio">
                            <p>
                                Especialista em Engenharia de Conhecimento e Automação com IA. Alan já ajudou dezenas de empresas a saírem do caos operacional, transformando processos manuais em ativos digitais inteligentes.
                            </p>
                            <p>
                                Neste Workshop Live, Alan vai abrir a 'caixa preta' das ferramentas que ele usa para gerir sua própria operação e te mostrar como transformar de fato o seu trabalho com IA, de forma estratégica e não só ferramental.
                            </p>
                        </div>

                        <div className="mentor-highlight">
                            <i className="fas fa-bolt highlight-icon"></i>
                            <p><strong>Foco 100% em prática:</strong> Sem teorias vazias, apenas o que funciona no campo de batalha dos negócios.</p>
                        </div>

                        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                            <a href="https://pay.hotmart.com/P105214094F" className="main-cta" style={{ display: 'inline-block', textDecoration: 'none', width: '100%' }}>
                                Quero me inscrever agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
