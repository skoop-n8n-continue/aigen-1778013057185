function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('timestamp').textContent = `${dateString} | ${timeString}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

console.log("Hello World app initialized");
