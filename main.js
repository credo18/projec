// Animate skill bars
document.querySelectorAll('.skill-level').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// Musanze Transport Fare Estimator
document.getElementById('fare-btn').addEventListener('click', () => {
    const distance = parseFloat(document.getElementById('distance').value);
    if(distance > 0){
        const farePerKm = 0.5; // Example fare rate
        const estimatedFare = distance * farePerKm;
        document.getElementById('fare-result').textContent = `Estimated Fare: $${estimatedFare.toFixed(2)}`;
    } else {
        document.getElementById('fare-result').textContent = 'Please enter a valid distance!';
    }
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});