"use strict";

let btn = document.querySelector(".btn");
let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
btn.addEventListener("click", click);

function click() {
  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value);
  let year = parseInt(yearInput.value);
  console.log(day, month, year);

  let yearField = yearInput.closest(".form__field");

  let monthField = monthInput.closest(".form__field");

  let dayField = dayInput.closest(".form__field");

  if (!day) {
    dayField.classList.add("error-field");
  } else {
    dayField.classList.remove("error-field");
  }
  if (!month) {
    monthField.classList.add("error-field");
  } else {
    monthField.classList.remove("error-field");
  }
  if (!year) {
    yearField.classList.add("error-field");
  } else {
    yearField.classList.remove("error-field");
  }
}
