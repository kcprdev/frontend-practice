const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const formCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg p");
const amt = document.querySelector(".amount input");
const form = document.querySelector("form");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");

    newOption.value = currCode;
    newOption.textContent = currCode;

    if (select.name === "from" && currCode === "INR") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "USD") {
      newOption.selected = true;
    }

    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
    updateExchangeRate();
  });
}

const updateFlag = (element) => {
  const currCode = element.value;
  const countryCode = countryList[currCode];

  const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

  const img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const updateExchangeRate = async () => {
  let amtVal = Number(amt.value);

  if (amtVal < 1 || isNaN(amtVal)) {
    amtVal = 1;
    amt.value = 1;
  }

  const from = formCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

  const URL = `${BASE_URL}/${from}.json`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }

    const data = await response.json();

    const rate = data[from][to];

    const finalAmount = (amtVal * rate).toFixed(2);

    msg.innerText = `${amtVal} ${formCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error(error);
    msg.innerText = "Unable to fetch exchange rate.";
  }
};

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Load exchange rate on page load
window.addEventListener("load", () => {
  updateExchangeRate();
});