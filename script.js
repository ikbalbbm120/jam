    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
    
        const hourHand = document.querySelector('.hour');
        const minuteHand = document.querySelector('.minute');
        const secondHand = document.querySelector('.second');
        const timeDisplay = document.querySelector('.time');
    
        const hourDegree = now.getHours() * 30 + now.getMinutes() / 2;
        const minuteDegree = now.getMinutes() * 6 + now.getSeconds() / 10;
        const secondDegree = now.getSeconds() * 6;
    
        hourHand.style.transform = `rotate(${hourDegree}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
        secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    setInterval(updateTime, 1000);
    