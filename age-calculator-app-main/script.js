const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  let hasError = false;

  dayInput.nextElementSibling.textContent = "";
  monthInput.nextElementSibling.textContent = "";
  yearInput.nextElementSibling.textContent = "";

  if (!dayInput.value) {
    dayInput.nextElementSibling.textContent = "This field is required";
    hasError = true;
  }

  if (!monthInput.value) {
    monthInput.nextElementSibling.textContent = "This field is required";
    hasError = true;
  }

  if (!yearInput.value) {
    yearInput.nextElementSibling.textContent = "This field is required";
    hasError = true;
  }

  if (hasError) return;

  if (day < 1 || day > 31) {
    dayInput.nextElementSibling.textContent = "Must be a valid day";
    hasError = true;
  }

  if (month < 1 || month > 12) {
    monthInput.nextElementSibling.textContent = "Must be a valid month";
    hasError = true;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (
    birthDate.getDate() !== day ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getFullYear() !== year
  ) {
    dayInput.nextElementSibling.textContent = "Must be a valid date";
    hasError = true;
  }

  if (birthDate > today) {
    yearInput.nextElementSibling.textContent = "Must be in the past";
    hasError = true;
  }
  if (hasError) return;

  let ageYear = today.getFullYear() - birthDate.getFullYear();
  let ageMonth = today.getMonth() - birthDate.getMonth();
  let ageDay = today.getDate() - birthDate.getDate();

  if (ageDay < 0) {
    ageMonth--;

    const daysInPreviousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0,
    ).getDate();

    ageDay += daysInPreviousMonth;
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }
  const value = document.querySelectorAll(".value");
  value[0].textContent = ageYear;
  value[1].textContent = ageMonth;
  value[2].textContent = ageDay;
});
