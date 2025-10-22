function updateClock() {
    const now = new Date();
  
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Convert to 12-hour format
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  
    // Add leading zeros
    const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes
      .toString()
      .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} ${amPm}`;
  
    document.getElementById('clock').textContent = formattedTime;
  }
  
  // Update every second
  setInterval(updateClock, 1000);
  
  // Initial call to display clock immediately
  updateClock();
  