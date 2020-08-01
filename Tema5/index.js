function validate(event) {
  event.preventDefault();

  // mai jos e funtia care valideaza first name 

  var firstNameInput = document.getElementById("fname");
	  
		  if (firstNameInput.value === "") {
		    firstNameInput.classList.add("invalidInput");
		    document.getElementsByClassName("warningParagraph")[0].style.visibility = "visible";
		  } else {
		  	console.log("Prenume: " + firstNameInput.value);
		  }


  // mai jos e funtia care valideaza last name 

  var lastNameInput = document.getElementById("lname");
	  
		  if (lastNameInput.value === "") {
		    lastNameInput.classList.add("invalidInput");
		    document.getElementsByClassName("warningParagraph")[1].style.visibility = "visible";
		  } else {
		  	console.log("Nume: " + lastNameInput.value);
		  }

	// aici e functia care valideaza genul


	var genderInputMale = document.getElementById("male");
	var genderInputFemale = document.getElementById("female");
		if (genderInputMale.checked){
			var genderValue = document.getElementById("male").value;
			console.log("Genul selectat este: masculin !!!!")
		} else if (genderInputFemale.checked) {
			var genderValue = document.getElementById("male").value;
			console.log("Genul selectat este: feminin !!!!")
		} else {
			console.log("Nu ati selectat genul!")
		}

	//aici e functia care valideaza comentariul

	

}
