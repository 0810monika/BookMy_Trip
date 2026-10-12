document.addEventListener('DOMContentLoaded', function() {
    const bookTripToggle = document.getElementById('bookTripToggle');
    const bookingFormBox = document.getElementById('bookingFormBox');

    if (bookTripToggle && bookingFormBox) {
        bookTripToggle.addEventListener('click', function() {
            bookingFormBox.classList.toggle('show');
        });
    }
});