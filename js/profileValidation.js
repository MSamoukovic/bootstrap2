function checkFirstName() {
	var firstNameValidity = document.getElementById("firstName");

	if (!firstNameValidity.checkValidity() || firstNameValidity.value.length == 0) {
		document.getElementById("firstNameMessage").innerHTML = "Please enter the first name";
		return false;
	}
	else {
		document.getElementById("firstNameMessage").innerHTML = "";
		return true;
	}
}

function checkLastName() {
	var lastNameValidity = document.getElementById("lastName");

	if (!lastNameValidity.checkValidity()) {
		document.getElementById("lastNameMessage").innerHTML = "Please enter the last name";
		return false;
	}
	else {
		document.getElementById("lastNameMessage").innerHTML = "";
		return true;
	}
}

function checkAddress() {
	var addressValidity = document.getElementById("address");

	if (!addressValidity.checkValidity()) {
		document.getElementById("addressMessage").innerHTML = "Please enter the address";
		return false;
	}

	else {
		document.getElementById("addressMessage").innerHTML = "";
		return true;
	}
}

function checkAddress2() {
	var address2Validity = document.getElementById("address2");

	if (!address2Validity.checkValidity()) {
		document.getElementById("address2Message").innerHTML = "Please enter the address2";
		return false;
	}
	else {
		document.getElementById("address2Message").innerHTML = "";
		return true;
	}
}

function checkCountry() {
	var countryValidity = document.getElementById("country");

	if (!countryValidity.checkValidity()) {
		document.getElementById("countryMessage").innerHTML = "Please choose the country";
		return false;
	}
	else {
		document.getElementById("countryMessage").innerHTML = "";
		return true;
	}
}

function checkCity() {
	var cityValidity = document.getElementById("cityInput");

	if (!cityValidity.checkValidity()) {
		document.getElementById("cityMessage").innerHTML = "Please enter the city";
		return false;
	}
	else {
		document.getElementById("cityMessage").innerHTML = "";
		return true;
	}
}

function checkZipCode() {
	var zipCodeValidity = document.getElementById("zipCode");

	if (!zipCodeValidity.checkValidity()) {
		document.getElementById("zipCodeMessage").innerHTML = "Please enter the zip/postal code";
		return false;
	}
	else if (isNaN(zipCodeValidity.value)) {
		document.getElementById("zipCodeMessage").innerHTML = "Must input numbers";
	}
	else {
		document.getElementById("zipCodeMessage").innerHTML = "";
		return true;
	}
}

function checkPhoneNumber() {
	var phoneNumberValidity = document.getElementById("phoneNumber");

	if (!phoneNumberValidity.checkValidity()) {
		document.getElementById("phoneNumberMessage").innerHTML = "Please enter the phone number";
		return false;
	}
	else if (isNaN(phoneNumberValidity.value)) {
		document.getElementById("phoneNumberMessage").innerHTML = "Must input numbers";
	}
	else {
		document.getElementById("phoneNumberMessage").innerHTML = "";
		return true;
	}
}

function isEverythingValid() {
	var allInputs = checkFirstName() == true && checkLastName() == true && checkAddress() == true && checkAddress2() == true && checkCountry() == true && checkCity() == true &&
		checkZipCode() == true && checkPhoneNumber() == true;
	return allInputs;
}

function checkAllProfileInputFields() {
	var fields = checkFirstName() == true || checkLastName() == true || checkAddress() == true || checkAddress2() == true || checkCountry() == true || checkCity() == true ||
		checkZipCode() == true || checkPhoneNumber() == true;
	return fields;
}