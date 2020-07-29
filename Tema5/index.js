function validate(event) {
  console.log(" verificare !!!");
  event.preventDefault();
  var firstNameInput = document.getElementById("fname");
  console.log(firstNameInput);
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("invalidInput");
  }
}
