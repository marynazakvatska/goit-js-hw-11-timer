/* Плагин это класс CountdownTimer, экземпляр которого создает новый таймер 
с настройками. */
/* new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
}); */

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      /*  console.log(deltaTime); */
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);
  },
};
timer.start();

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
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
