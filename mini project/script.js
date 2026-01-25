let display = document.getElementById("display");

function append(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearAll() {
  display.value = "0";
}

function del() {
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
