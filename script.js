// Get modal element
const modal = document.getElementById('login-modal');

// Get open modal button
const loginBtn = document.querySelector('.login-btn');

// Get close button
const closeBtn = document.querySelector('.modal .close-btn');

// Listen for open click
loginBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission (no validation)
const loginForm = document.querySelector('#login-modal form');
loginForm.addEventListener('submit', (e) => {
    // No preventDefault() to allow normal submission (or further action)
    // No alert needed
    closeModal(); // Close modal after submission attempt
});