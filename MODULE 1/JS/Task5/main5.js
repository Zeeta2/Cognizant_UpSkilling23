class Event {
    constructor(name, seats) {
        this.name = name;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0 ? "Available" : "Full";
};

let event1 = new Event("Music Show", 20);

let output = document.getElementById("output");

output.innerHTML += `<p>Event: ${event1.name}</p>`;
output.innerHTML += `<p>Status: ${event1.checkAvailability()}</p>`;
output.innerHTML += "<p><b>Object Entries:</b></p>";

Object.entries(event1).forEach(([key, value]) => {
    output.innerHTML += `<p>${key}: ${value}</p>`;
});