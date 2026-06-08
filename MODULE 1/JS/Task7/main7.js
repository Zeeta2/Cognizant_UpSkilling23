let events = [
    { name: "Music Concert", seats: 20 },
    { name: "Baking Workshop", seats: 15 }
];

let eventContainer = document.querySelector("#events");

events.forEach(event => {
    let card = document.createElement("div");

    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Seats: <span>${event.seats}</span></p>
        <button>Register</button>
        <button>Cancel</button>
    `;

    let seatDisplay = card.querySelector("span");

    card.querySelectorAll("button")[0].onclick = function () {
        if (event.seats > 0) {
            event.seats--;
            seatDisplay.textContent = event.seats;
        }
    };

    card.querySelectorAll("button")[1].onclick = function () {
        event.seats++;
        seatDisplay.textContent = event.seats;
    };

    eventContainer.appendChild(card);
});