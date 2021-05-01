/* Плагин это класс CountdownTimer, экземпляр которого создает 
новый таймер 
с настройками. */
class CountdownTimer {
  end() {
    const endTime = new Date("Jul 17, 2019").getTime();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - endTime;
      /*  console.log(deltaTime); */
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});

timer.end();

/* function updateClock({ days, hours, mins, secs }) {
  refs.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
}
 */
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
