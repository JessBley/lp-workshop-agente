import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import ThankYouPage from './components/layout/ThankYouPage';

// Campaign Components
const ProblemSection = lazy(() => import('./components/layout/ProblemSection'));
const SolutionSection = lazy(() => import('./components/layout/SolutionSection'));
const Pricing = lazy(() => import('./components/layout/Pricing'));
const FAQ = lazy(() => import('./components/layout/FAQ'));
const Cases = lazy(() => import('./components/layout/Cases'));
const MentorSection = lazy(() => import('./components/layout/MentorSection'));
const Footer = lazy(() => import('./components/layout/Footer'));

import CookieBanner from './components/ui/CookieBanner';
import ContactModal from './components/ui/ContactModal';
import StickyCTA from './components/ui/StickyCTA';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Roteamento simples sem react-router
// A página Obrigado é exibida quando a URL termina em /obrigado
function useIsThankYouPage() {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  return path.endsWith('/obrigado') ||
         path.endsWith('/obrigado/') ||
         path.endsWith('/tkpage') ||
         path.endsWith('/tkpage/') ||
         params.get('page') === 'obrigado' ||
         params.get('page') === 'tkpage';
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isThankYou = useIsThankYouPage();

  useEffect(() => {
    if (!isThankYou) {
      document.title = 'Edugital | Workshop Eliminando o Gargalo';
      console.log('[Edugital] Campaign: Eliminando o Gargalo active.');
    }
  }, [isThankYou]);

  // ── Renderização ──────────────────────────────────────────
  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        {isThankYou ? (
          <ThankYouPage />
        ) : (
          <>
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <ErrorBoundary>
              <Suspense fallback={<div style={{height: '50vh'}} />}>
                <ProblemSection />
                <SolutionSection />
                <Cases />
                <Pricing />
                <MentorSection />
                <FAQ />
              </Suspense>
            </ErrorBoundary>
          </>
        )}
      </main>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Footer />
          <CookieBanner />
        </Suspense>
      </ErrorBoundary>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {!isThankYou && <StickyCTA onOpenModal={() => setIsModalOpen(true)} />}
    </>
  );
}
