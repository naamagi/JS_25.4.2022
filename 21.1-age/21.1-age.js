const ageInput = document.querySelector("input[type='number']");
const button = document.querySelector("button");
button.innerText = "Click Me";
const h3 = document.querySelector("h3");
const form = document.querySelector("form");

button.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
  if (ageInput.value >= +18) {
    h3.innerText = "you can drink";
  } else if (ageInput.value < +18) {
    h3.innerText = "you’re too young";
  }
});
