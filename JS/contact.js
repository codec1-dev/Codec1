document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload

      let name = form.name.value.trim();
      let email = form.email.value.trim();
      let message = form.message.value.trim();

      if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          return;
      }

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      alert("Message sent successfully! 🚀");
      form.reset(); // Clear the form
  });
});

// Validate Email Format
function validateEmail(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
