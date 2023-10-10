const form = document.querySelector(".form");
const input = document.querySelector(".input");
const errorText = document.querySelector(".error-text");
const stayUpdated = document.querySelector(".stay-updated");
const thanks = document.querySelector(".thanks");
const dismissButton = document.querySelector(".dismiss");
const emailValue = document.querySelector(".email-value");

function validate(email) {
  const emailFormat = /^\w+([\.-]?\w+)a*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (!emailFormat.test(email)) {
    input.classList.add("error-input");
    input.focus();

    errorText.classList.remove("hidden");
    errorText.innerHTML = "Valid email required";

    return false;
  }
  
  return true;
}

// Input changed
input.addEventListener("input", (e) => {
  e.target.classList.remove("error-input");
  errorText.classList.add("hidden");
});

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get("email-input");
  
  if (validate(email)) {
    stayUpdated.classList.add("hidden");
    thanks.classList.remove("hidden");

    emailValue.innerHTML = email;
    form.reset();
  }
});

// Dismiss message
dismissButton.addEventListener("click", () => {
  stayUpdated.classList.remove("hidden");
  thanks.classList.add("hidden");
});