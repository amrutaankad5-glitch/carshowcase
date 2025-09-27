const form = document.getElementById("interestForm");
const msg = document.getElementById("msg");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Fetch values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let city = document.getElementById("city").value.trim();
  let variant = document.getElementById("variant").value;

  // Validation
  if(!name || !email || !phone || !city || !variant){
    msg.textContent = "Please fill all details.";
    msg.style.color = "red";
    return;
  }

  // Show success message
  msg.textContent = `Thank you ${name}, your interest is recorded!`;
  msg.style.color = "green";
  form.reset();

  // Disable submit button for 5 seconds (rate-limit)
  submitBtn.disabled = true;
  submitBtn.textContent = "Please wait...";
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
  }, 5000);
});
