const eventForm = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const extraInfo = document.querySelector("#extraInfo");
const extraInput = document.querySelector("#extraInput");
const eventDate = document.querySelector("#eventDate");
const output = document.querySelector("#output");
const errors = document.querySelector("#errors");
const extraLabel = extraInfo.querySelector("label");

function updateExtraInfo() {
  const value = type.value;
  if (value === "student") {
    extraInfo.hidden = false;
    extraLabel.textContent = "Student I#";
    extraInput.required = true;
  } else if (value === "guest") {
    extraInfo.hidden = false;
    extraLabel.textContent = "Access Code";
    extraInput.required = true;
  } else {
    extraInfo.hidden = true;
    extraInput.required = false;
  }
}

type.addEventListener("change", updateExtraInfo);
updateExtraInfo();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

eventForm.addEventListener("submit", function (event) {
  event.preventDefault();
  errors.textContent = "";
  output.textContent = "";

  const firstName = eventForm.firstName.value.trim();
  const lastName = eventForm.lastName.value.trim();
  const email = eventForm.email.value.trim();
  const ticketType = type.value;
  const date = eventDate.value;
  const extra = extraInput.value.trim();

  if (!firstName) {
    errors.textContent = "Please enter your first name.";
    return;
  }

  if (!lastName) {
    errors.textContent = "Please enter your last name.";
    return;
  }

  if (!email || !email.includes("@")) {
    errors.textContent = "Please enter a valid email.";
    return;
  }

  if (!ticketType) {
    errors.textContent = "Please choose a ticket type.";
    return;
  }

  if (isPastDate(date)) {
    errors.textContent = "Please choose a future date.";
    return;
  }

  if (!extra) {
    errors.textContent = "Please fill out the required field.";
    return;
  }

  // Student must enter exactly 9 digits
  if (ticketType === "student") {
    const studentPattern = /^\d{9}$/;
    if (!studentPattern.test(extra)) {
      errors.textContent = "Student I# must be exactly 9 digits.";
      return;
    }
  }

  // Guest must enter the exact access code
  if (ticketType === "guest") {
    if (extra !== "EVENT131") {
      errors.textContent = "Access Code must be EVENT131.";
      return;
    }
  }

  output.innerHTML = `
    <h2>Event Ticket</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Type: ${ticketType}</p>
    <p>Date: ${date}</p>
    <p>${extraLabel.textContent}: ${extra}</p>
  `;

  eventForm.reset();
  updateExtraInfo();
});
