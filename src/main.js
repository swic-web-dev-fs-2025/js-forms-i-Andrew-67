import "./style.css";

const REQUIRED = ["name", "email", "password", "checker"];

const form = document.querySelector("form");
const errorDisplay = document.getElementById('error');
// CSS attribute selector.
const submitBtn = form.querySelector('[type="submit"]');

submitBtn.disabled = true; // Start disabled

form.addEventListener("input", () => {
  // Does EVERY form input field have a non-empty value?
  REQUIRED.every((field) => form[field].value.trim() !== "")
    ? (submitBtn.disabled = false) // If yes, enable button
    : (submitBtn.disabled = true); // If no, disable button
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const matches = REQUIRED.every((field) => form[field].value.trim() !== "");
  const passwordChecker = form.password.value === form.checker.value;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  if (submitBtn.disabled = !(matches && passwordChecker))
  {
    errorDisplay.textContent = `Passwords Do Not Match`;
  }
  else 
  {
    console.log(data);
    errorDisplay.textContent = ``;
    form.reset();
    submitBtn.disabled = true;
  }
});