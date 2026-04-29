import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className={`countdown-item countdown-item--${interval}`}>
        <span className="countdown-value">{String(timeLeft[interval]).padStart(2, '0')}</span>
        <span className="countdown-label">{interval === 'days' ? 'Dias' : interval === 'hours' ? 'Horas' : interval === 'minutes' ? 'Min' : 'Seg'}</span>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      <p className="countdown-title">O lote único encerra em:</p>
      <div className="countdown-timer">
        {timerComponents.length ? timerComponents : (Object.keys(timeLeft).length === 0 ? <span>Carregando...</span> : <span>Lote encerrado!</span>)}
      </div>
    </div>
  );
}
