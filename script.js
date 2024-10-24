// Event listener for the donation form
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Validate the form inputs
    let name = document.getElementById('name').value.trim();
    let amount = document.getElementById('amount').value.trim();

    if (!name || !amount || amount <= 0) {
        alert('Please fill in your name and a valid donation amount.');
        return;
    }

    // Proceed with payment using Paystack
    let handler = PaystackPop.setup({
        key: 'your-public-key-here', // Replace with your Paystack public key
        email: 'donor@example.com',  // Replace with the donor's email (can be dynamically set)
        amount: amount * 100, // Convert NGN to kobo
        currency: 'NGN',
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a unique reference
        callback: function(response) {
            alert('Thank you for your donation! Transaction reference: ' + response.reference);
        },
        onClose: function() {
            alert('Transaction was not completed.');
        }
    });

    handler.openIframe(); // Open the payment window
});