
function check() {
  const age = document.getElementById("Age").value;
  const result = document.getElementById("Result");

  if (age >= 18) {
    result.textContent = "You are eligible to vote ✅";
    result.style.color = "green";
  } else {
    result.textContent = "You are NOT eligible to vote ❌";
    result.style.color = "red";
  }
}

let counter = 0;
const countDisplay = document.getElementById("count");

function increase() {
  counter++;
  countDisplay.textContent = counter;
}

function decrease() {
  if (counter > 0) {
    counter--;
  }
  countDisplay.textContent = counter;
}

function reset() {
  counter = 0;
  countDisplay.textContent = counter;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
}

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}


