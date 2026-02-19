import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

// Miembros de la familia con sus cumpleaños y año de nacimiento
const familyMembers = [
  { name: 'Mamá', date: '10-30', emoji: '👩', color: 'red', birthYear: 1989 },
  { name: 'Papá', date: '07-13', emoji: '👨', color: 'blue', birthYear: 1989 },
  { name: 'Bruno', date: '08-15', emoji: '👦', color: 'yellow', birthYear: 2013 },
  { name: 'Gena', date: '12-20', emoji: '🎂', color: 'green', birthYear: 2017 }
];

// Función para calcular la edad que cumplirá una persona
const calculateAge = (birthYear, birthdayDate) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

function App() {
  const [nextBirthday, setNextBirthday] = useState(null);
  const [otherBirthdays, setOtherBirthdays] = useState([]);
  const [timeLeft, setTimeLeft] = useState({});
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const findNextBirthday = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Calcular el próximo cumpleaños para cada miembro
      const birthdaysWithDiff = familyMembers.map(member => {
        const [month, day] = member.date.split('-');
        let birthdayThisYear = new Date(currentYear, parseInt(month) - 1, parseInt(day));
        
        // Si el cumpleaños ya pasó este año, usar el próximo año
        if (birthdayThisYear < now) {
          birthdayThisYear = new Date(currentYear + 1, parseInt(month) - 1, parseInt(day));
        }
        
        const difference = birthdayThisYear - now;
        
        // Calcular la edad que cumplirá en su próximo cumpleaños
        const ageOnNextBirthday = calculateAge(member.birthYear, birthdayThisYear);
        
        return {
          ...member,
          nextDate: birthdayThisYear,
          difference: difference,
          age: ageOnNextBirthday
        };
      });
      
      // Ordenar por proximidad
      birthdaysWithDiff.sort((a, b) => a.difference - b.difference);
      
      setNextBirthday(birthdaysWithDiff[0]);
      setOtherBirthdays(birthdaysWithDiff.slice(1));
    };

    findNextBirthday();
  }, []);

  useEffect(() => {
    if (!nextBirthday) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = nextBirthday.nextDate - now;

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
  }, [nextBirthday]);

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

  const calculateSmallCountdown = (birthdayData) => {
    if (!birthdayData) return null;
    
    const now = new Date();
    const difference = birthdayData.nextDate - now;
    
    if (difference <= 0) return { days: 0, hours: 0 };
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    
    return { days, hours };
  };

  const getMonthName = (date) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months[date.getMonth()];
  };

  if (!nextBirthday) {
    return <div className="app">Cargando...</div>;
  }

  if (isBirthday) {
    return (
      <div className="app birthday-mode">
        <div className="birthday-container">
          <div className="birthday-title-container">
            <h1 className="birthday-title">
              🎉 ¡FELIZ CUMPLE {nextBirthday.name.toUpperCase()}! 🎉
              <br />
              ¡TE AMAMOS! 
            </h1>
            <div className="birthday-subtitle">
              ¡Hoy cumples {nextBirthday.age} años! 🎂
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
        <div className="family-header">
          <h1 className="family-title">
            🎂 Cumpleaños Familiares 🎂
          </h1>
          <div className="family-subtitle">
            ¡Celebremos juntos!
          </div>
        </div>

        {/* Próximo cumpleaños - DESTACADO */}
        <div className="next-birthday-section">
          <div className="next-birthday-badge">
            ⭐ PRÓXIMO CUMPLEAÑOS ⭐
          </div>
          
          <div className="header">
            <h2 className="title">
              {nextBirthday.emoji} {nextBirthday.name} {nextBirthday.emoji}
            </h2>
            <div className="subtitle">
              ¡Faltan solo...!
            </div>
          </div>

          <div className="countdown-container">
            {timeLeft.days > 0 && (
              <div className={`time-block lego-block ${nextBirthday.color}`}>
                <div className="time-value">{formatNumber(timeLeft.days)}</div>
                <div className="time-label">Días</div>
              </div>
            )}

            <div className={`time-block lego-block ${nextBirthday.color === 'red' ? 'yellow' : 'red'}`}>
              <div className="time-value">{formatNumber(timeLeft.hours)}</div>
              <div className="time-label">Horas</div>
            </div>

            <div className={`time-block lego-block ${nextBirthday.color === 'blue' ? 'green' : 'blue'}`}>
              <div className="time-value">{formatNumber(timeLeft.minutes)}</div>
              <div className="time-label">Minutos</div>
            </div>

            <div className={`time-block lego-block ${nextBirthday.color === 'green' ? 'yellow' : 'green'}`}>
              <div className="time-value">{formatNumber(timeLeft.seconds)}</div>
              <div className="time-label">Segundos</div>
            </div>
          </div>

          <div className="birthday-date">
            <div className="date-block">
              📅 {nextBirthday.nextDate.getDate()} de {getMonthName(nextBirthday.nextDate)}
            </div>
            <div className="age-block">
              🎈 ¡Cumple {nextBirthday.age} Años! 🎈
            </div>
          </div>
        </div>

        {/* Otros cumpleaños - TARJETAS PEQUEÑAS */}
        <div className="other-birthdays-section">
          <h3 className="other-birthdays-title">Próximos en el Calendario</h3>
          <div className="birthday-cards-grid">
            {otherBirthdays.map((member, index) => {
              const countdown = calculateSmallCountdown(member);
              return (
                <div key={index} className={`birthday-card lego-block ${member.color}`}>
                  <div className="card-emoji">{member.emoji}</div>
                  <div className="card-name">{member.name}</div>
                  <div className="card-date">
                    {member.nextDate.getDate()} de {getMonthName(member.nextDate)}
                  </div>
                  {countdown && (
                    <div className="card-countdown">
                      {countdown.days > 0 ? (
                        <span>{countdown.days} días</span>
                      ) : (
                        <span>{countdown.hours} horas</span>
                      )}
                    </div>
                  )}
                  <div className="card-age">Cumple {member.age} años</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
