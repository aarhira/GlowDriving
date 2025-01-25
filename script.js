console.log("Welcome to Glow Driving!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    const messageElement = document.getElementById("message");
    const messageValue = messageElement.value.trim();

    // Checking minimum length
    if (messageValue.length < 10) {
      alert("Your message must be at least 10 characters long.");
      e.preventDefault();
      return;
    }

    // Checking maximum length
    if (messageValue.length > 300) {
      alert("Your message can't exceed 300 characters. Please shorten it.");
      e.preventDefault();
      return;
    }

    // If both checks pass, the form will submit
  });
});
