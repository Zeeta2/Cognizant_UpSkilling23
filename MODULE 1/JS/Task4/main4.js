let events = [];
let output = document.getElementById("output");

function addEvent(name, category, seats) {
    events.push({ name, category, seats });
}

function registerUser(eventName) {
    let event = events.find(e => e.name === eventName);

    if (event && event.seats > 0) {
        event.seats--;
        output.innerHTML += `<p>Registered for ${event.name}</p>`;
    } else {
        output.innerHTML += `<p>Registration failed</p>`;
    }
}

function filterEventsByCategory(category, callback) {
    let filtered = events.filter(e => e.category === category);
    callback(filtered);
}

function registrationTracker() {
    let total = 0;

    return function(category) {
        total++;
        output.innerHTML += `<p>Total registrations for ${category}: ${total}</p>`;
    };
}

let trackMusic = registrationTracker();

addEvent("Music Show", "Music", 20);
addEvent("Food Festival", "Food", 15);
addEvent("Art Workshop", "Art", 10);

registerUser("Music Show");
trackMusic("Music");

filterEventsByCategory("Music", function(result) {
    output.innerHTML += "<p><b>Filtered Events:</b></p>";

    result.forEach(e => {
        output.innerHTML += `<p>${e.name}</p>`;
    });
});