document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const userTableBody = document.getElementById('userTableBody');

    // Registration Page Functionality
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('contact').value,
                address: document.getElementById('address').value
            };

            // Get existing users or initialize empty array
            let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            
            // Add new user
            users.push(user);

            // Save to localStorage
            localStorage.setItem('registeredUsers', JSON.stringify(users));

            // Reset form
            registrationForm.reset();

            // Redirect to view page
            window.location.href = 'view.html';
        });
    }

    // View Page Functionality
    if (userTableBody) {
        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        // Populate table
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
            userTableBody.appendChild(row);
        });
    }
});