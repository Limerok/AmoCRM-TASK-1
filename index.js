const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const formatTime = (currentTime) => {
  const hours = Math.floor(currentTime / (60 * 60));
  const minutes = Math.floor((currentTime % (60 *60) / 60));
  const seconds = Math.floor(currentTime % 60);

  return [
    hours.toString().padStart(2,0),
    minutes.toString().padStart(2,0),
    seconds.toString().padStart(2,0)
  ].join(':');
}

const createTimerAnimator = () => {
  let intervalId = null;
  return (seconds) => {
    clearInterval(intervalId);
    let currentTime = seconds;

    intervalId = setInterval(() => {
      timerEl.textContent = formatTime(currentTime);
      currentTime = currentTime > 0 ? currentTime - 1 : clearInterval(intervalId);
    },1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  event.target.value= event.target.value.replace(/\D/g, "")
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);
  inputEl.value = '';
});
