import "./styles.css";

var fnameInput = document.getElementById("fname");
var lnameInput = document.getElementById("lname");
var genderInput = document.getElementById ("gender");
var commentInput = document.getElementById("comment");

console.log(fnameInput.value);
console.log(lnameInput.value);
console.log(genderInput.value);
console.log(commentInput.value);

function checkFirstName(fnameInput) {
  if (fnameInput.value.length !== 0) {
    if (fnameInput.value.length < 4 || fnameInput.value.length > 20) {
      console.log(
        "Numele introdus trebuie sa aiba intre 4 si 20 de caractere!"
      );
    } else {
      var fnameResult = true;
    }
  } else {
    fnameInput.className = "invalidInput";
  }
}

function checkLastName(lnameInput) {
  if (lnameInput.value.length !== 0) {
    if (lnameInput.value.length < 4 || lnameInput.value.length > 20) {
      console.log(
        "Prenumele introdus trebuie sa aiba intre 4 si 20 de caractere!"
      );
    } else {
      var lnameResult = true;
    }
  } else {
    lnameInput.className = "invalidInput";
  }
}




