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

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
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
// Smooth Home → Letter Transition
// =============================

const homeLetterButton = document.getElementById("openLetter");

if (homeLetterButton) {

    homeLetterButton.addEventListener("click", function (event) {

        event.preventDefault();

        document.body.style.opacity = "0";
        document.body.style.transition = "opacity .45s ease";

        setTimeout(() => {
            window.location.href = homeLetterButton.href;
        }, 450);

    });

}


// =============================
// Open Selected Letter
// =============================

function showLetter(letter) {

    const selection = document.getElementById("letter-selection");
    const firstLetter = document.getElementById("first-letter");
    const eighthLetter = document.getElementById("eighth-letter");


    // Hide the letter selection screen
    if (selection) {
        selection.style.display = "none";
    }


    // Hide both letters
    if (firstLetter) {
        firstLetter.classList.remove("show-letter");
        firstLetter.style.display = "none";
    }

    if (eighthLetter) {
        eighthLetter.classList.remove("show-letter");
        eighthLetter.style.display = "none";
    }


    // Open the selected letter
    if (letter === "first" && firstLetter) {

        firstLetter.style.display = "block";

        requestAnimationFrame(() => {
            firstLetter.classList.add("show-letter");
        });

    }


    if (letter === "eighth" && eighthLetter) {

        eighthLetter.style.display = "block";

        requestAnimationFrame(() => {
            eighthLetter.classList.add("show-letter");
        });

    }


    // Always start at the top
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


    // Hide the first letter
    if (firstLetter) {
        firstLetter.classList.remove("show-letter");
        firstLetter.style.display = "none";
    }


    // Hide the eighth-month letter
    if (eighthLetter) {
        eighthLetter.classList.remove("show-letter");
        eighthLetter.style.display = "none";
    }


    // Show the selection screen
    if (selection) {
        selection.style.display = "block";
    }


    // Return to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =============================
// Page Fade In
// =============================

window.addEventListener("pageshow", () => {
    document.body.style.opacity = "1";
});