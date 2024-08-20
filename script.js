document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
    const displayArea = document.getElementById('display-area');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    let count = parseInt(counterDisplay.textContent, 10); // Initialize count from the displayed value

    // Counter functionality
    incrementButton.addEventListener('click', function() {
        count++;
        counterDisplay.textContent = count;
    });

    decrementButton.addEventListener('click', function() {
        if (count > 0) { // Prevent the counter from going below 0
            count--;
            counterDisplay.textContent = count;
        }
    });

    resetButton.addEventListener('click', function() {
        count = 0;
        counterDisplay.textContent = count;
    });

    // Dropdown selection functionality
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            displayArea.textContent = item.textContent; // Display selected text
        });
    });
});
