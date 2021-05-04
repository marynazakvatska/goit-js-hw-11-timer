/* Плагин это класс CountdownTimer, экземпляр которого создает 
новый таймер 
с настройками. */
const refs = {
  days: document.querySelector(`[data-value = "days"]`),
  hours: document.querySelector(`[data-value = "hours"]`),
  mins: document.querySelector(`[data-value = "mins"]`),
  secs: document.querySelector(`[data-value = "secs"]`),
};

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }
  start() {
    const startTime = this.targetDate.getTime();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(`${days}:${hours}:${mins}:${secs}`);
      this.onTick({ days, hours, mins, secs });
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
  onTick: updateClockface,
});

timer.start();

function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
/* 
Для подсчета значений используй следующие готовые формулы, 
где time - разница между targetDate и текущей датой.
 */

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
