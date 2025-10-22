function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const timeString = `${hours.toString().padStart(2, '0')} : ${minutes
    .toString()
    .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} ${amPm}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, options);

  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// Run immediately and update every second
updateClock();
setInterval(updateClock, 1000);
