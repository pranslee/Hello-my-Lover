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


// =============================
// Letter Selection
// =============================

function openLetter(letter) {

    const selection = document.getElementById("letter-selection");
    const firstLetter = document.getElementById("first-letter");
    const eighthLetter = document.getElementById("eighth-letter");

    // Hide the selection screen
    if (selection) {
        selection.style.display = "none";
    }

    // Hide both letters first
    if (firstLetter) {
        firstLetter.classList.remove("show-letter");
        firstLetter.style.display = "none";
    }

    if (eighthLetter) {
        eighthLetter.classList.remove("show-letter");
        eighthLetter.style.display = "none";
    }

    // Show the selected letter
    if (letter === "first" && firstLetter) {
        firstLetter.style.display = "block";

        setTimeout(() => {
            firstLetter.classList.add("show-letter");
        }, 10);
    }

    if (letter === "eighth" && eighthLetter) {
        eighthLetter.style.display = "block";

        setTimeout(() => {
            eighthLetter.classList.add("show-letter");
        }, 10);
    }

    // Start at the top of the selected letter
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =============================
// Back to Letter Selection
// =============================

function showSelection() {

    const selection = document.getElementById("letter-selection");
    const firstLetter = document.getElementById("first-letter");
    const eighthLetter = document.getElementById("eighth-letter");

    // Hide both letters
    if (firstLetter) {
        firstLetter.classList.remove("show-letter");
        firstLetter.style.display = "none";
    }

    if (eighthLetter) {
        eighthLetter.classList.remove("show-letter");
        eighthLetter.style.display = "none";
    }

    // Show selection screen
    if (selection) {
        selection.style.display = "block";
        selection.style.animation = "none";

        setTimeout(() => {
            selection.style.animation = "fade .5s ease";
        }, 10);
    }

    // Return to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =============================
// Fade in every page
// =============================
window.addEventListener("pageshow", () => {
    document.body.style.opacity = "1";
});