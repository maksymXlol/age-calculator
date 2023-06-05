import moment from "https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm";
import momentPreciseRangePlugin from "https://cdn.jsdelivr.net/npm/moment-precise-range-plugin@1.3.0/+esm";

let btn = document.querySelector(".btn");
let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");

let dayResult = document.querySelector("#day-result");
let monthResult = document.querySelector("#month-result");
let yearResult = document.querySelector("#year-result");
btn.addEventListener("click", click);

function click() {
  let dayCheck = fieldCheck(dayInput, checkDay);
  let monthCheck = fieldCheck(monthInput, checkMonth);
  let yearCheck = fieldCheck(yearInput, checkYear);
  if (!(dayCheck && monthCheck && yearCheck)) {
    return;
  }

  let date = moment({
    year: yearInput.value,
    month: monthInput.value - 1,
    day: dayInput.value,
  });

  if (!date.isValid()) {
    makeSetValidity(dayInput, false, "Must be a valid date");
    makeSetValidity(monthInput, false, "");
    makeSetValidity(yearInput, false, "");
    return;
  }

  let diff = moment.preciseDiff(date, moment.now(), true);
  console.log(diff);
  setResult(diff.days, diff.months, diff.years);
}

function setResult(day, month, year) {
  dayResult.innerHTML = day;
  yearResult.innerHTML = year;
  monthResult.innerHTML = month;
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
