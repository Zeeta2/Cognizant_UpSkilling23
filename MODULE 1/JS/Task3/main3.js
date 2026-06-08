const events = [
    { name: "Music Show", upcoming: true, seats: 20 },
    { name: "Sports Meet", upcoming: false, seats: 15 },
    { name: "Food Festival", upcoming: true, seats: 0 }
];

events.forEach(event => {
    if (event.upcoming && event.seats > 0) {
        console.log(`${event.name} is available for registration`);
    } else {
        console.log(`${event.name} is not available`);
    }
});

try {
    let seats = 20;

    if (seats <= 0) {
        throw "No seats available";
    }

    seats--;
    console.log(`Registration Successful. Remaining Seats: ${seats}`);
}
catch (error) {
    console.log("Error: " + error);
}