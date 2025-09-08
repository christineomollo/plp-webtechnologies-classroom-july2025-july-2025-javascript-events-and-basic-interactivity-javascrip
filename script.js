
// PART 1: Event handling


// CLICK EVENT
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "✅ Button was clicked!";
});

// MOUSEOVER EVENT
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "orange";
  hoverBox.textContent = "Mouse Over!";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "lightblue";
  hoverBox.textContent = "Hover over me!";
});

// KEYBOARD INPUT EVENT
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

keyInput.addEventListener("keyup", () => {
  keyOutput.textContent = "You typed: " + keyInput.value;
});

// TOGGLE SHOW/HIDE CONTENT
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("hidden");
});


// PART 2: INTERACTIVE ELEMENTS


// DARK MODE TOGGLE
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// COUNTER GAME
let count = 0;
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const counterValue = document.getElementById("counterValue");

incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// COLLAPSIBLE FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// STEP TRACKER
const logStepsBtn = document.getElementById("logStepsBtn");
const stepCountDisplay = document.getElementById("stepCount");
const progressBar = document.getElementById("progressBar");
const goalMessage = document.getElementById("goalMessage");

let steps = 0;
const dailyGoal = 10000;

logStepsBtn.addEventListener("click", () => {
  steps += 500; // simulate logging 500 steps
  stepCountDisplay.textContent = steps;

  // Update progress bar
  let progress = Math.min((steps / dailyGoal) * 100, 100);
  progressBar.style.width = progress + "%";

  // Feedback messages
  if (steps >= dailyGoal) {
    goalMessage.textContent = "🎉 Congratulations! You reached your daily goal!";
  } else {
    goalMessage.textContent = `Keep going! ${dailyGoal - steps} steps left.`;
  }
});


// PART 3: FORM VALIDATION

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default form submission
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 chars, at least 1 number)
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must be 6+ characters and include a number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (isValid) {
    formSuccess.textContent = "🎉 Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});

