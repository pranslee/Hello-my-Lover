// =============================
// Anniversary Counter
// =============================
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

    const counter = document.getElementById("counter");

    if (counter) {
        counter.innerHTML =
            `❤️ Together for<br><strong>${years} Years ${months} Months ${days} Days</strong>`;
    }
}

updateCounter();


// =============================
// Smooth Page Transition
// =============================
const openLetter = document.getElementById("openLetter");

if (openLetter) {
    openLetter.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.style.opacity = "0";
        document.body.style.transition = "opacity .45s ease";

        setTimeout(() => {
            window.location.href = this.href;
        }, 450);
    });
}


// Fade in every page
window.addEventListener("pageshow", () => {
    document.body.style.opacity = "1";
});