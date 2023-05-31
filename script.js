"use strict";

let btn = document.querySelector(".btn");
let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
btn.addEventListener("click", click);

function click() {
  let now = new Date();
  let birthDay = new Date(2011, 9, 28);
  console.log(now - birthDay);
  // let dayCheck = fieldCheck(dayInput, checkDay);
  // let monthCheck = fieldCheck(monthInput, checkMonth);
  // let yearCheck = fieldCheck(yearInput, checkYear);
  // if (dayCheck && monthCheck && yearCheck) {

  // }
}

function checkDay(dayInput) {
  let day = parseInt(dayInput.value);
  if (isNaN(day)) {
    return {
      isValid: false,
      errorMsg: "This field is required",
    };
  }

  if (day > 31 || day < 1) {
    return {
      isValid: false,
      errorMsg: "Must ba a valid day",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}
function checkMonth(monthInput) {
  let month = parseInt(monthInput.value);
  if (isNaN(month)) {
    return {
      isValid: false,
      errorMsg: "This field is required",
    };
  }

  if (month > 12 || month < 1) {
    return {
      isValid: false,
      errorMsg: "Must ba a valid month",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}

function checkYear(YearInput) {
  let year = parseInt(yearInput.value);
  if (isNaN(year)) {
    return {
      isValid: false,
      errorMsg: "This field is required",
    };
  }

  if (year > new Date().getFullYear()) {
    return {
      isValid: false,
      errorMsg: "Must be in the past",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}

function fieldCheck(input, checkFm) {
  let checkResult = checkFm(input);
  makeSetValidity(input, checkResult.isValid, checkResult.errorMsg);
  return checkResult.isValid;
}

function makeSetValidity(input, isValid, message) {
  let field = input.closest(".form__field");
  let errorMsg = field.querySelector(".error-msg");
  if (!isValid) {
    field.classList.add("error-field");
    errorMsg.innerText = message;
  } else {
    field.classList.remove("error-field");
    errorMsg.innerText = errorMsg;
  }
}
