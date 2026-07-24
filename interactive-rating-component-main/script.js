const numbers = document.querySelectorAll(".number");
const submit = document.querySelector(".btn");

let selectedRating = null;
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    numbers.forEach((btn) => {
      btn.classList.remove("selected");
    });
    number.classList.add("selected");
    selectedRating = number.textContent;
  });
});
submit.addEventListener("click", () => {
  if (selectedRating === null) {
    alert("Please select a rating!");
    return;
  }
  const text = document.querySelector(".selected-rating");
  text.textContent = selectedRating;
  const rating = document.querySelector(".rating");
  const thankYou = document.querySelector(".thank-you");
  rating.style.display = "none";
  thankYou.style.display = "flex";
});
