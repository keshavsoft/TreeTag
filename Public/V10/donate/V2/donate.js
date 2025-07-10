let selectedAmount = 0;

// Highlight selected button & clear custom amount
document.querySelectorAll('.amount').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.amount').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedAmount = button.getAttribute('data-amount');
        document.getElementById('custom-amount').value = "";
    });
});

// Listen to custom input
document.getElementById('custom-amount').addEventListener('input', function () {
    selectedAmount = this.value;
    document.querySelectorAll('.amount').forEach(btn => btn.classList.remove('active'));
});

// On form submit, trigger Razorpay
document.getElementById('donation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = parseInt(selectedAmount);

    if (!amount || amount <= 0) {
        alert("Please select or enter a valid amount.");
        return;
    }

    const options = {
        key: "rzp_test_YourKeyHere", // Replace with your Razorpay test/live key
        amount: amount * 100,
        currency: "INR",
        name: "AllIsWell",
        description: "Donation",
        handler: function (response) {
            alert("Thank you for your donation!");
            // You can send response.razorpay_payment_id to your server here if needed
        },
        prefill: {
            name: name,
            email: email
        },
        theme: {
            color: "#007bff"
        }
    };

    const rzp = new Razorpay(options);
    rzp.open();
});
