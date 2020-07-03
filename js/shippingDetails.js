function shippingDetails() {

	if (checkAllProfileInputFields()) {
		if (isEverythingValid()) {
			var firstname = document.getElementById("firstName").value;
			var lastName = document.getElementById("lastName").value;
			var address = document.getElementById("address").value;
			var address2 = document.getElementById("address2").value;
			var country = document.getElementById("country").value;
			var city = document.getElementById("city").value;
			var zipCode = document.getElementById("zipCode").value;
			var phoneNumber = document.getElementById("phoneNumber").value;

			var elem = document.getElementsByName('ShippingRadioBtn');
			for (i = 0; i < elem.length; i++) {
				if (elem[i].checked) {
					var shippingType = elem[i].value;
				}
			}

			var person = {
				firstName: firstname,
				lastName: lastName,
				address: address,
				address2: address2,
				country: country,
				city: city,
				zipCode: zipCode,
				phoneNumber: phoneNumber,
				shipping: shippingType
			};

			var obj = JSON.stringify(person);
			goOnNextTab("nav-contact-tab", "shippingDetailsNextBtn")
			console.log("obj: " + obj);
		}
		checkAllProfileInputFields();
	}
}