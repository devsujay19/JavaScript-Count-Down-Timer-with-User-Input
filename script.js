const datetimeInput = document.getElementById('datetime-input');
const startButton = document.getElementById('start-button');
const timerDisplay = document.getElementById('timer');

function startCountdown() {
  const selectedDatetime = new Date(datetimeInput.value).getTime();

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = selectedDatetime - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = 'Countdown Over!';
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

startButton.addEventListener('click', startCountdown);