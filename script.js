document.getElementById('recoveryForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;

  if (email.trim() === "") {
    alert("Please enter a valid email or phone number.");
  } else {
    alert(`Recovery link has been sent to: ${email}`);
  }
});
