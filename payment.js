document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    if (paymentMethod === 'cod') {
        alert('Order placed successfully! You will be redirected to the home page.');
        window.location.href = 'home.html'; // Redirect to the home page
    } else if (paymentMethod === 'upi') {
        alert('Please proceed with UPI payment.');
        // Implement UPI payment method
        
    }
});
