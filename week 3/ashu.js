document.getElementById("registrationForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    let isValid = true;

    // Name Validation
    const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
    if (!name) {
        alert("Name is required.");
        isValid = false;
    } else if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        isValid = false;
    } else if (!namePattern.test(name)) {
        alert("Name can only contain letters and spaces.");
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Improved email regex
    if (!email) {
        alert("Email is required.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
