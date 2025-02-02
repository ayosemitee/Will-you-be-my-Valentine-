const messages = [
    "Jesteś pewna?",
    "Na milion procent??",
    "A może jednak???",
    "Skarbie prosze :c",
    "A może to jeszcze przemyślisz??",
    "Jeśli naprawdę nie to będzie mi bardzo smutno :c",
    "Będę bardzo smutny...",
    "Bardzo bardzo bardzo smutny...",
    "No dobrze, przestanę pytać😿",
    "Żartowałem nie odpuszczę 😼❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
