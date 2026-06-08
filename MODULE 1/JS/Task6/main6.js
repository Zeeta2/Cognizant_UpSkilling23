let events = [];

events.push({ name: "Music Concert", category: "Music" });
events.push({ name: "Baking", category: "Workshop" });
events.push({ name: "Dance Show", category: "Music" });

let musicEvents = events.filter(event => event.category === "Music");

let displayCards = events.map(event => {
    return `Workshop on ${event.name}`;
});

let output = document.getElementById("output");

output.innerHTML += "<h3>Music Events</h3>";

musicEvents.forEach(event => {
    output.innerHTML += `<p>${event.name}</p>`;
});

output.innerHTML += "<h3>Display Cards</h3>";

displayCards.forEach(card => {
    output.innerHTML += `<p>${card}</p>`;
});