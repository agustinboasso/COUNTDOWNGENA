import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Fecha del cumpleaños: 20 de diciembre de 2025 a las 00:00:00
      // MODO TEST: Cambiada a fecha pasada para ver la celebración
      const birthdayDate = new Date('2024-12-13T00:00:00');
      const now = new Date();
      const difference = birthdayDate - now;

      if (difference <= 0) {
        setIsBirthday(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isBirthday) {
      triggerBirthdayCelebration();
    }
  }, [isBirthday]);

  const triggerBirthdayCelebration = () => {
    // Confetti continuo
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Confetti desde la izquierda
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FF0000', '#FFD700', '#00FF00', '#0066FF', '#FF1493', '#9400D3']
      });

      // Confetti desde la derecha
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FF0000', '#FFD700', '#00FF00', '#0066FF', '#FF1493', '#9400D3']
      });
    }, 250);

    // Fuegos artificiales
    const fireWork = () => {
      confetti({
        particleCount: 100,
        startVelocity: 45,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors: ['#FF0000', '#FFD700', '#00FF00', '#0066FF', '#FF1493', '#9400D3']
      });
    };

    // Lanzar fuegos artificiales cada 1 segundo durante 15 segundos
    const fireworkInterval = setInterval(fireWork, 1000);
    setTimeout(() => clearInterval(fireworkInterval), duration);

    // Gran explosión inicial
    const count = 200;
    const defaults2 = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults2,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ['#FF0000', '#FFD700', '#00FF00', '#0066FF', '#FF1493', '#9400D3']
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const formatNumber = (num) => {
    return String(num).padStart(2, '0');
  };

  if (isBirthday) {
    return (
      <div className="app birthday-mode">
        <div className="birthday-container">
          <div className="birthday-title-container">
            <h1 className="birthday-title">
              🎉 ¡FELIZ CUMPLE GENA! 🎉
              <br />
              ¡TE AMAMOS! 
            </h1>
            <div className="birthday-subtitle">
              ¡Hoy cumples 8 años! 🎂
            </div>
          </div>
          
          <div className="birthday-message">
            <div className="lego-block celebration-block red">
              <span className="block-text">¡QUÉ TENGAS</span>
            </div>
            <div className="lego-block celebration-block yellow">
              <span className="block-text">UN DÍA</span>
            </div>
            <div className="lego-block celebration-block blue">
              <span className="block-text">INCREÍBLE!</span>
            </div>
            <div className="lego-block celebration-block green">
              <span className="block-text">🎈🎁🎊</span>
            </div>
          </div>

          <button 
            className="celebration-button"
            onClick={triggerBirthdayCelebration}
          >
            ¡MÁS CONFETTI! 🎉
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1 className="title">
            🎂 Cumple de Gena 🎂
          </h1>
          <div className="subtitle">
            ¡Faltan solo...!
          </div>
        </div>

        <div className="countdown-container">
          {timeLeft.days > 0 && (
            <div className="time-block lego-block red">
              <div className="time-value">{formatNumber(timeLeft.days)}</div>
              <div className="time-label">Días</div>
            </div>
          )}

          <div className="time-block lego-block yellow">
            <div className="time-value">{formatNumber(timeLeft.hours)}</div>
            <div className="time-label">Horas</div>
          </div>

          <div className="time-block lego-block blue">
            <div className="time-value">{formatNumber(timeLeft.minutes)}</div>
            <div className="time-label">Minutos</div>
          </div>

          <div className="time-block lego-block green">
            <div className="time-value">{formatNumber(timeLeft.seconds)}</div>
            <div className="time-label">Segundos</div>
          </div>
        </div>

        <div className="birthday-date">
          <div className="date-block">
            📅 20 de Diciembre de 2025
          </div>
          <div className="age-block">
            🎈 ¡8 Años! 🎈
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
