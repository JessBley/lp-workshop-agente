import { useState, useEffect } from 'react';

export default function StickyCTA({ onOpenModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercentage >= 0.25) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-cta-container">
      <style>{`
        .sticky-cta-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          animation: fadeInUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .sticky-button {
          background: var(--primary-color, #8F57FF);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          box-shadow: 0 8px 32px rgba(143, 87, 255, 0.4);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sticky-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(143, 87, 255, 0.6);
        }
        .sticky-button .old-price {
          font-size: 0.7rem;
          text-decoration: line-through;
          opacity: 0.8;
        }
        .sticky-button .new-price {
          font-size: 1rem;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <a href="https://pay.hotmart.com/P105214094F" className="sticky-button" style={{ textDecoration: 'none' }}>
        <span className="old-price">De R$ 197,00</span>
        <span className="new-price">POR APENAS R$ 97,00</span>
      </a>
    </div>
  );
}
