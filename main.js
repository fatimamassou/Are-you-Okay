// --- AUDIO SETUP ---
const bgAudio = new Audio("audio.mp3"); // put your MP3 file path here
bgAudio.loop = true; // loop infinitely
bgAudio.volume = 0.1; // start soft

// Start audio on first user interaction
function startAudio() {
    bgAudio.play().catch(e => console.log("User interaction required for autoplay"));
    document.removeEventListener("click", startAudio);
}
document.addEventListener("click", startAudio);

// --- NO BUTTON RUN AWAY ---
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// --- YES BUTTON ---
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");
const message = document.getElementById("message");

// Add "repeat" button inside message
message.innerHTML += `<button id="repeatBtn" class="btn">Answer Again </button>`;

yesBtn.addEventListener("click", () => {
    gif.src = "모찌냥.webp";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    document.querySelector(".ask").style.display = "none";
    message.style.display = "block";

    launchConfetti(); // confetti
    launchHearts(); // hearts
});
  
// --- REPEAT BUTTON ---
document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "repeatBtn") {
        location.reload();
    }
});

// --- CONFETTI EFFECT ---
function launchConfetti() {
    const confettiContainer = document.getElementById("confetti");

    for (let i = 0; i < 200; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");

        piece.style.position = "absolute";
        piece.style.width = "8px";
        piece.style.height = "8px";
        piece.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        piece.style.top = "-10px";
        piece.style.left = Math.random() * window.innerWidth + "px";

        piece.style.animation = `fall ${1 + Math.random()}s linear forwards`;

        confettiContainer.appendChild(piece);

        setTimeout(() => piece.remove(), 90000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(600px); opacity: 0; }
}
`;
document.head.appendChild(style);

// --- FLOATING HEARTS EFFECT ---
function launchHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "0px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}
