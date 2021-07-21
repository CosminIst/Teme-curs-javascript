 function validate(event) {
  event.preventDefault();
  var submit = true;
	 
  var firstNameInput = document.getElementById("fname");
  var lastNameInput = document.getElementById("lname");
  var genderInputMale = document.getElementById("male");
  var genderInputFemale = document.getElementById("female");
  var commentInput = document.getElementById("comment");
	  
	if (firstNameInput.value === "") {
		firstNameInput.classList.add("invalidInput");
		    document.getElementsByClassName("warningParagraph")[0].style.visibility = "visible";
		    submit = false;
		}
		
		firstNameInput.addEventListener('keypress', () => {
			firstNameInput.classList.remove("invalidInput");
			document.getElementsByClassName("warningParagraph")[0].style.visibility = "hidden";
			submit = true;
		})
		
		
	  
	 if (lastNameInput.value === "") {
		lastNameInput.classList.add("invalidInput");
		    document.getElementsByClassName("warningParagraph")[1].style.visibility = "visible";
		    submit = false;
		  } 

		lastNameInput.addEventListener('keypress', () => {
			lastNameInput.classList.remove("invalidInput");
			document.getElementsByClassName("warningParagraph")[1].style.visibility = "hidden";
			submit = true;
		})		
	
		if (genderInputMale.checked){
			var genderValue = document.getElementById("male").value;
			// console.log("Genul selectat este: masculin !!!!")
			submit = true;
		} else if (genderInputFemale.checked) {
			var genderValue = document.getElementById("male").value;
			// console.log("Genul selectat este: feminin !!!!")
			submit = true;
		} else {
			document.getElementsByClassName("warningParagraph")[2].style.visibility = "visible";
			submit = false;
		}

		genderInputFemale.addEventListener('change', () => {
			document.getElementsByClassName("warningParagraph")[2].style.visibility = "hidden";
			submit = true;
		})
		
		genderInputMale.addEventListener('change', () => {
			document.getElementsByClassName("warningParagraph")[2].style.visibility = "hidden";
			submit = true;
		})
	
	if (commentInput.value === "") {
		commentInput.classList.add("invalidInput");
		    document.getElementsByClassName("warningParagraph")[3].style.visibility = "visible";
		    submit = false;
		} 

		commentInput.addEventListener('keypress', () => {
			commentInput.classList.remove("invalidInput");
			document.getElementsByClassName("warningParagraph")[3].style.visibility = "hidden";
			submit = true;
		})

	var booltoString = submit.toString();

	if (booltoString === "true") {
		document.getElementById("success").innerHTML += firstNameInput.value  ;
		document.getElementsByClassName("SuccessMessage")[0].style.visibility = "visible";
		console.log("First name: " +firstNameInput.value);
		console.log("Last name: " +lastNameInput.value);
		console.log("Gender: " +genderValue);
	}
}



	 