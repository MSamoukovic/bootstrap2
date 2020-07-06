document.getElementById("payNowBtn").addEventListener("click", payNow);
document.getElementById("payNowCancelBtn").addEventListener("click", payNowCancel);

function payNowCancel() {
	goOnTab("nav-profile-tab", "payNowCancelBtn")
}

function payNow() {
	if (arePaymentFieldsDisabled() == false) {
		if (checkAllPaymentFields()) {
			if (areAllPaymentOptionsValid()) {
				var creditCardNumber = document.getElementById("creditCardNumber").value.replace(/\s/g, "");;
				var date = document.getElementById("date").value;
				var cvv = document.getElementById("cvv").value;
				var cardHolderName = document.getElementById("cardHolderName").value;

				var elem = document.getElementsByName('radioBtn');

				for (i = 0; i < elem.length; i++) {
					if (elem[i].checked) {
						var type = elem[i].value;
						if (type == "creditCard") {
							var card = {
								paymentType: "creditCard",
								cardnumber: creditCardNumber,
								mmyy: date,
								cvv: cvv,
								name: cardHolderName
							};

							var creditCardPayment = JSON.stringify(card);
							console.log(creditCardPayment);
							goOnTab("nav-home-tab", "payNowBtn")
							alert(creditCardPayment);

						}
					}
				}
			}
		}
	}
	else {
		console.log("payPal");
		alert("payPal");
		goOnTab("nav-home-tab", "payNowBtn")

	}
}

function disableInputFields(...params) {
	params.forEach(element => {
		document.getElementById(element).disabled = true;
	});
}

function enableInputFields(...params) {
	params.forEach(element => {
		document.getElementById(element).disabled = false;
	})
}