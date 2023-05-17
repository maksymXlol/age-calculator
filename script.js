"use strict";

let btn = document.querySelector(".btn");
let dayInput = document.querySelector("#day");
let mounthField = document.querySelector("#mounth");
let yearField = document.querySelector("#year");
btn.addEventListener("click", click);

function click() {
  let day = parseInt(dayInput.value);
  let mounth = parseInt(mounthField.value);
  let year = parseInt(yearField.value);
  console.log(day, mounth, year);

  let dayField = dayInput.closest(".form__field");
  if (!day) {
    dayField.classList.add("error-field");
  } else {
  }
}
