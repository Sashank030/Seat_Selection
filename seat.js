let selectedSeats = 0;

function createSeat(seatNumber) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = seatNumber;
    seat.addEventListener('click', () => toggleSeat(seat));
    return seat;
}

function toggleSeat(seat) {
    seat.classList.toggle('selected');
    updateSelectedSeats();
}

function updateSelectedSeats() {
    const selectedSeatElements = document.querySelectorAll('.seat.selected');
    selectedSeats = selectedSeatElements.length;
    document.getElementById('selectedSeats').textContent = selectedSeats;
}

function bookSeats() {
    alert(`Booked ${selectedSeats} seats!`);
}

// Populate seat map
const seatMap = document.getElementById('seatMap');
for (let i = 1; i <= 40; i++) {
    seatMap.appendChild(createSeat(i));
}
