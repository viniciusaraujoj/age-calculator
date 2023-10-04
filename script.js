const btnEl = document.querySelector(".btn");
const inputDateEl = document.querySelector("input");
const resultEl = document.querySelector(".result");

const returnAge = function (e) {
  e.preventDefault();

  if (inputDateEl.value === "") {
    alert("Please enter your date of birth");
    return;
  }

  const birthday = inputDateEl.value;

  const age = calcAge(birthday);

  resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old!`;
  resultEl.style.display = "block";
};

const calcAge = function (birthday) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const differenceMonths = currentDate.getMonth() - birthdayDate.getMonth();
  const differenceDays = currentDate.getDate() - birthdayDate.getDate();

  if (differenceMonths < 0 || (differenceMonths === 0 && differenceDays < 0)) {
    age--;
  }

  return age;
};

btnEl.addEventListener("click", returnAge);
