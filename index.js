class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
    this.timer = this.timer.bind(this);
  }
  timer() {
    const refs = {
      days: document.querySelector(`[data-value = "days"]`),
      hours: document.querySelector(`[data-value = "hours"]`),
      mins: document.querySelector(`[data-value = "mins"]`),
      secs: document.querySelector(`[data-value = "secs"]`),
    };
    const startTime = this.targetDate.getTime();
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;
    const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
    console.log(`${days}:${hours}:${mins}:${secs}`);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
  start() {
    setInterval(this.timer, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
}
const countdownTimer = new CountdownTimer("#timer-1", "2021 december 31 20:00");
countdownTimer.start();
