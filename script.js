function showLetter() {
    const letter = document.getElementById("letter");
    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
    }
}

const anniversary = new Date("2026-01-13T00:00:00");

function updateCounter() {
    const today = new Date();

    let years = today.getFullYear() - anniversary.getFullYear();
    let months = today.getMonth() - anniversary.getMonth();
    let days = today.getDate() - anniversary.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("counter").innerHTML =
        `❤️ Together for<br><strong>${years} Years ${months} Months ${days} Days</strong>`;
}

updateCounter();